import { execSync } from "child_process";

import { determineBump } from "./commit.js";

export function getCommits() {
  const commitData = execSync("git log origin/main..HEAD --pretty=format:'%H|%s'")
    .toString()
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => {
      const [hash, message] = line.split("|");
      return { hash, message };
    });

  return commitData;
}

export function getChangedFiles() {
  return execSync("git diff --name-only origin/main..HEAD")
    .toString()
    .split("\n")
    .filter((line) => line.trim() !== "");
}

export function getRelevantCommitsForPackage(packageDir, commits, changedFiles) {
  const packageFiles = changedFiles.filter((file) => file.startsWith(packageDir));

  if (packageFiles.length === 0) {
    return [];
  }

  const relevantCommits = [];

  commits.forEach((commitData) => {
    const hasPackageChanges = packageFiles.some((file) => {
      try {
        const commitFiles = execSync(`git show --name-only --pretty=format: ${commitData.hash}`, { encoding: "utf8" })
          .split("\n")
          .filter((line) => line.trim() !== "");

        return commitFiles.includes(file);
      } catch (error) {
        console.error(`Error getting relevant commits for package ${packageDir}:`, error.message);
        return determineBump(commitData.message) !== null;
      }
    });

    if (hasPackageChanges) {
      relevantCommits.push(commitData.message);
    }
  });

  return relevantCommits;
}

export function stageChangesetFiles() {
  try {
    execSync("git add .changeset/auto-*.md", { stdio: "inherit" });
    console.log("📝 Staged auto-generated changeset files");
  } catch (error) {
    console.warn("No auto-generated changeset files to stage:", error.message);
  }
}

export function amendLastCommit() {
  try {
    execSync("git commit --amend --no-edit --no-verify", { stdio: "inherit" });
    console.log("✅ Amended last commit with changeset files");
  } catch (error) {
    console.error("Failed to amend last commit:", error.message);
  }
}
