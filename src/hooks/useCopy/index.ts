import { ElMessage } from 'element-plus'
// 复制文本
export const useCopy = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    ElMessage.success('复制成功');
  });
}