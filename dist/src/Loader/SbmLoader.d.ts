import { Sbm, SbmInfo } from '../Library';
import { ModelLoadingProgress, ModelLoadingProgressCallback } from '../Interface';
declare class SbmLoader {
    materials: Map<string, any>;
    sbmInfo: SbmInfo | null;
    isLE: boolean;
    constructor();
    /**
     * 加载模型
     * @param sbmInfo 模型信息
     * @param onProgress 模型加载进度回填函数
     */
    load(sbmInfo: SbmInfo, onProgress?: ModelLoadingProgressCallback): Promise<Sbm>;
    /**
     * 解析模型
     * @param buffer 模型二进制原数据
     * @param sbmInfo 模型信息
     * @param onProgress 模型加载进度回填函数
     */
    parse(buffer: ArrayBuffer, sbmInfo: SbmInfo, onProgress?: ModelLoadingProgressCallback): Promise<Sbm>;
    /**
     * @param dataView
     * @param offset
     * @param onProgress
     */
    _parseV2(dataView: DataView, offset: number, onProgress?: ModelLoadingProgressCallback): Promise<Sbm>;
    /**
     * @param dataView
     * @param offset
     * @param onProgress
     */
    _parseV3(dataView: DataView, offset: number, onProgress?: ModelLoadingProgressCallback): Promise<Sbm>;
    /**
     * 获取材质贴图路径
     * @param modelUrl 模型资源路径
     * @param name     贴图名称
     * @param isPlatform 是否是平台资源
     */
    getTextureUrl(url: string, textureName: string, isPlatform?: boolean): string;
}
export { ModelLoadingProgress, ModelLoadingProgressCallback };
export default SbmLoader;
