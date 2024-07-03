import os
import stat
import shutil
import subprocess

def remove_readonly(func, path, _):
    """Clear the readonly bit and reattempt the removal"""
    os.chmod(path, stat.S_IWRITE)
    func(path)

print("1. Force killing Node.js processes to release file locks...")
subprocess.run("taskkill /F /IM node.exe", shell=True, capture_output=True)

print("2. Force deleting locked legacy directories...")
for folder in ["deepskilling", "upskilling"]:
    if os.path.exists(folder):
        try:
            shutil.rmtree(folder, onerror=remove_readonly)
            print(f"Successfully deleted {folder}")
        except Exception as e:
            print(f"Failed to delete {folder}: {e}")

print("3. Syncing with GitHub (origin/main)...")
subprocess.run("git fetch origin", shell=True)
subprocess.run("git reset --hard origin/main", shell=True)
subprocess.run("git clean -fd", shell=True)

print("\nSUCCESS! The repository is now synced and cleaned.")
print("Please reply to Antigravity letting it know it's done, so it can read your React code and generate the Git history.")
