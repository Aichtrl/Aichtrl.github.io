#!/bin/bash
hexo clean && hexo g -d
git add .
git commit -m "Site backup $(date)"
git push origin backup
