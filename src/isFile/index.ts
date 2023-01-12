import { fsExtra } from '@umijs/utils';

/**
 * 判断指定路径是否为文件
 * @param path
 */
export function isFile(path: string): Promise<boolean> {
	return fsExtra.promises.stat(path)
		.then(stats => stats.isFile())
		.catch(() => false);
}
