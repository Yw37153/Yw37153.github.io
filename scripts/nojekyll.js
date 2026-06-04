'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * after_generate: ensure .nojekyll exists in public/
 * GitHub Pages skips Jekyll when .nojekyll is present
 */
hexo.extend.filter.register('after_generate', function () {
  const publicDir = this.public_dir;
  const filePath = path.join(publicDir, '.nojekyll');
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(publicDir, { recursive: true });
    fs.writeFileSync(filePath, '');
  }
});

/**
 * before_deploy: ensure .deploy_git/ has its own .git/
 * hexo-deployer-git's emptyDir() can strip .git/, causing git to
 * fall back to the parent repo and commit the entire project.
 */
hexo.extend.filter.register('before_deploy', function () {
  const deployDir = path.join(this.base_dir, '.deploy_git');
  const gitDir = path.join(deployDir, '.git');

  if (fs.existsSync(deployDir)) {
    // If .git/ is missing or is a file (broken worktree ref), start fresh
    if (!fs.existsSync(gitDir) || !fs.statSync(gitDir).isDirectory()) {
      fs.rmSync(deployDir, { recursive: true, force: true });
    }
  }
});
