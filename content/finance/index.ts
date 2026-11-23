import {foundations} from './foundations';
import {research} from './research';
import {systems} from './systems';
import {c} from '@/lib/finance-types';

export const lessons = [...foundations, ...research, ...systems];
export const modules = [
 {id:'finance',title:c('Tài chính cơ bản','Finance fundamentals'),description:c('Tài sản, dòng tiền, P&L, lợi suất và rủi ro.','Assets, cash flows, P&L, returns and risk.')},
 {id:'math',title:c('Toán và xác suất','Mathematics and probability'),description:c('Các công cụ để mô tả, ước lượng và kiểm tra rủi ro.','Tools for describing, estimating and testing risk.')},
 {id:'python',title:c('Python và dữ liệu','Python and data'),description:c('Dữ liệu có thể kiểm tra và mã có thể chạy lại.','Auditable data and reproducible code.')},
 {id:'research',title:c('Nghiên cứu chiến lược','Strategy research'),description:c('Từ giả thuyết đến backtest có tính chi phí và sai lệch.','From a hypothesis to a backtest with costs and bias controls.')},
 {id:'statistics',title:c('Thống kê và mô hình','Statistics and models'),description:c('Hồi quy, chuỗi thời gian, biến động và tối ưu hóa.','Regression, time series, volatility and optimization.')},
 {id:'markets',title:c('Stock, forex và crypto','Stocks, forex and crypto'),description:c('Khác biệt về hợp đồng, dữ liệu và cơ chế giao dịch.','Differences in contracts, data and trading mechanics.')},
 {id:'derivatives',title:c('Phái sinh','Derivatives'),description:c('Futures, options và nguyên tắc định giá.','Futures, options and pricing principles.')},
 {id:'systems',title:c('Hệ thống giao dịch','Trading systems'),description:c('Đặt lệnh, quản lý trạng thái và vận hành.','Execution, state management and operations.')},
 {id:'portfolio',title:c('Danh mục và triển khai','Portfolio and implementation'),description:c('Phân bổ vốn, giới hạn rủi ro và dự án tổng hợp.','Capital allocation, risk limits and an integrated project.')},
];
export const lessonById = (id:string) => lessons.find(lesson=>lesson.id===id);
