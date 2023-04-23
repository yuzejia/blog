# YUZEJIA BLOG

[https://yuzejia.github.io/blog/](https://yuzejia.github.io/blog/)

```bash
docker run --rm -V /srv/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner register--non-interactive_-executor."docker".
--docker-image alpine:latest
--url."http://47.101.136.147/"
-registration-token "QrL_LRMJWJ5qapDYtHP3".
-description."for-vite".
--tag-list"vite".
--run-untagged="true".
--locked="false"
--access-level="not_protected"
```

```yml
 stats:
   - install
   - build
   - deploy

```