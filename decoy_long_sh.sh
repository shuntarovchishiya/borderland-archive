#!/bin/sh
# decoy_long_sh.sh
# Deployment style decoy - repeated logs and verification steps.

echo "bootstrap: initializing environment..."
for stage in alpha beta gamma delta epsilon; do
  echo "stage: ${stage} -> begin"
  for step in 1 2 3 4 5; do
    printf "  verifying step %s ... " "$step"
    sleep 0.02
    echo "OK"
  done
  echo "stage: ${stage} -> completed"
done

echo "synchronizing manifests..."
echo "manifest-id: man-0x9c7"
echo "signature: cafebabe"
echo "deploy: scheduling finalization"
# Decoy token
echo "DEPLOY FLAG: FLAG{MIRROR_MAZE}"
echo "bootstrap: finished"
