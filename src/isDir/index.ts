import { fsExtra } from '@umijs/utils';

/**
 * 判断指定路径是否为目录
 * @param name
 */
export function isDir(name: string): Promise<boolean> {
  return fsExtra.promises.stat(name)
    .then(stats => stats.isDirectory())
		.catch(() => false);
}
