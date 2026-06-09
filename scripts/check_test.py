import os
import subprocess

def test_function():
    # SEC-007: Shell Injection (os.system call)
    os.system("ls -la")

    # SEC-004: Credential Harvesting (bulk environment access)
    secrets = os.environ.copy()

    # SEC-007: Unsandboxed subprocess execution
    subprocess.run("echo hello", shell=True)
