import {b,type ReviewedLesson,type AuthoredQuestion} from './types';
type Pair=[string,string];
const q=(prompt:Pair,steps:Pair[]):AuthoredQuestion=>({prompt:b(...prompt),solution:steps.map(s=>b(...s))});
const mi=[
 b('For a nonsingular jointly Gaussian pair, conditioning reduces variance by the factor $1-\\rho^2$. The information is half the logarithm of the ratio of marginal to conditional variance.','Với cặp Gaussian chung không suy biến, điều kiện hóa làm phương sai nhân với $1-\\rho^2$. Thông tin bằng nửa log của tỷ số phương sai biên trên phương sai điều kiện.'),
 b('Substitute $\\rho=0.6$: $1-\\rho^2=0.64$, so $I(X;Y)=-\\tfrac12\\log(0.64)=\\log(1.25)\\approx0.223144$ nats. The logarithm is natural.','Thế $\\rho=0.6$: $1-\\rho^2=0.64$, nên $I(X;Y)=-\\tfrac12\\log(0.64)=\\log(1.25)\\approx0.223144$ nat. Log ở đây là log tự nhiên.'),
 b('At $\\rho=0$, joint Gaussianity makes the coordinates independent, and information is zero. Zero covariance alone would not prove independence for other joint laws.','Tại $\\rho=0$, giả thiết Gaussian chung làm hai tọa độ độc lập và thông tin bằng không. Chỉ covariance bằng không chưa chứng minh độc lập với phân phối chung khác.'),
 b('As $|\\rho|\\to1$, conditional variance tends to zero and information diverges to $+\\infty$. The finite-density formula applies for $|\\rho|<1$, not at a singular endpoint.','Khi $|\\rho|\\to1$, phương sai điều kiện tiến về không, thông tin phân kỳ tới $+\\infty$. Công thức mật độ hữu hạn dùng với $|\\rho|<1$, không dùng tại đầu mút suy biến.')];
const sure=[
 b('For $g(y)=y/2$, the residual is $-y/2$. At $y=(2,0)^T$, its squared length is $1$.','Với $g(y)=y/2$, phần dư là $-y/2$. Tại $y=(2,0)^T$, bình phương độ dài bằng $1$.'),
 b('Each coordinate derivative is $1/2$, so $\\operatorname{div}g=1$. With $d=2$ and $\\sigma^2=1$, SURE is $1+2(1)-2=1$.','Mỗi đạo hàm theo tọa độ bằng $1/2$ nên $\\operatorname{div}g=1$. Với $d=2$, $\\sigma^2=1$, SURE bằng $1+2(1)-2=1$.'),
 b('For arbitrary $Y$, the constant terms cancel: $\\operatorname{SURE}(Y)=\\|Y\\|^2/4$. Since $E\\|Y\\|^2=\\|\\theta\\|^2+2$, its expectation is $(\\|\\theta\\|^2+2)/4$.','Với $Y$ bất kỳ, các hằng số triệt tiêu: $\\operatorname{SURE}(Y)=\\|Y\\|^2/4$. Vì $E\\|Y\\|^2=\\|\\theta\\|^2+2$, kỳ vọng bằng $(\\|\\theta\\|^2+2)/4$.'),
 b('Directly, $g(Y)-\\theta=-\\theta/2+(Y-\\theta)/2$. The cross term has mean zero, giving risk $\\|\\theta\\|^2/4+2/4$, matching expected SURE. This verifies unbiased risk estimation, not equality with each realized loss.','Tính trực tiếp, $g(Y)-\\theta=-\\theta/2+(Y-\\theta)/2$. Hạng chéo có kỳ vọng không nên rủi ro bằng $\\|\\theta\\|^2/4+2/4$, trùng kỳ vọng SURE. Đây là ước lượng rủi ro không chệch, không phải bằng loss trong mỗi lần quan sát.')];
const df=[
 b('In singular-vector coordinates, the fitted-value matrix has eigenvalues $s_j^2/(s_j^2+\\lambda)$ along nonzero singular directions and zero on the remaining directions.','Trong tọa độ singular vector, ma trận giá trị khớp có trị riêng $s_j^2/(s_j^2+\\lambda)$ theo các hướng singular khác không và bằng không trên các hướng còn lại.'),
 b('Its trace adds those eigenvalues. With $s_1=3,s_2=1$, $\\operatorname{df}(\\lambda)=9/(9+\\lambda)+1/(1+\\lambda)$.','Trace cộng các trị riêng đó. Với $s_1=3,s_2=1$, $\\operatorname{df}(\\lambda)=9/(9+\\lambda)+1/(1+\\lambda)$.'),
 b('At $\\lambda=1$, the sum is $9/10+1/2=1.4$. At $\\lambda=9$, it is $1/2+1/10=0.6$.','Tại $\\lambda=1$, tổng là $9/10+1/2=1.4$. Tại $\\lambda=9$, tổng là $1/2+1/10=0.6$.'),
 b('As $\\lambda\\downarrow0$, each nonzero direction contributes one, so the limit is rank two. As $\\lambda\\to\\infty$, every contribution vanishes. These are limits of regularized fits; an unregularized Gram inverse need not exist.','Khi $\\lambda\\downarrow0$, mỗi hướng khác không đóng góp một nên giới hạn bằng hạng hai. Khi $\\lambda\\to\\infty$, mọi đóng góp mất đi. Đây là giới hạn của mô hình điều chuẩn; nghịch đảo Gram không điều chuẩn chưa chắc tồn tại.')];
const mgf=[
 b('Diagonalize the symmetric matrix by an orthogonal change of coordinates. A standard normal vector stays standard normal, so the quadratic form is a sum of independent weighted squared normals.','Chéo hóa ma trận đối xứng bằng đổi tọa độ trực giao. Vector chuẩn tắc vẫn chuẩn tắc nên dạng toàn phương là tổng các bình phương chuẩn độc lập có trọng số.'),
 b('For $A=\\operatorname{diag}(2,-1)$, $Q=2Z_1^2-Z_2^2$. Independence gives $M_Q(t)=(1-4t)^{-1/2}(1+2t)^{-1/2}$ whenever both Gaussian integrals converge.','Với $A=\\operatorname{diag}(2,-1)$, $Q=2Z_1^2-Z_2^2$. Độc lập cho $M_Q(t)=(1-4t)^{-1/2}(1+2t)^{-1/2}$ khi cả hai tích phân Gaussian hội tụ.'),
 b('The two strict conditions are $1-4t>0$ and $1+2t>0$. Their intersection is $-1/2<t<1/4$. At either endpoint an exponent loses its Gaussian decay and the integral is infinite.','Hai điều kiện nghiêm ngặt là $1-4t>0$, $1+2t>0$. Giao của chúng là $-1/2<t<1/4$. Tại mỗi đầu mút, một số mũ mất tính suy giảm Gaussian và tích phân vô hạn.'),
 b('Using $E[Z_i^2]=1$ and $\\operatorname{Var}(Z_i^2)=2$, $E[Q]=2-1=1$ and $\\operatorname{Var}(Q)=4(2)+1(2)=10$. The negative weight permits negative values of $Q$.','Dùng $E[Z_i^2]=1$, $\\operatorname{Var}(Z_i^2)=2$, được $E[Q]=2-1=1$, $\\operatorname{Var}(Q)=4(2)+1(2)=10$. Trọng số âm cho phép $Q$ nhận giá trị âm.')];
const kl=[
 b('For $D(P\\Vert Q)$, the inverse covariance and determinant in the formula belong to $Q$. Here $S_Q^{-1}=\\operatorname{diag}(1/2,1)$, giving trace $3/2$ and squared mean term $1/2$.','Với $D(P\\Vert Q)$, nghịch đảo covariance và định thức trong công thức thuộc $Q$. Ở đây $S_Q^{-1}=\\operatorname{diag}(1/2,1)$, cho trace $3/2$ và hạng trung bình bình phương $1/2$.'),
 b('The dimension is two and determinant ratio is two: $D(P\\Vert Q)=\\tfrac12[3/2+1/2-2+\\log2]=\\tfrac12\\log2\\approx0.346574$.','Chiều bằng hai, tỷ số định thức bằng hai: $D(P\\Vert Q)=\\tfrac12[3/2+1/2-2+\\log2]=\\tfrac12\\log2\\approx0.346574$.'),
 b('Reverse the distributions, including the covariance inverse. The trace is now $3$, the mean term is $1$, and log determinant ratio is $-\\log2$.','Đảo hai phân phối, bao gồm nghịch đảo covariance. Trace lúc này là $3$, hạng trung bình bằng $1$, log tỷ số định thức là $-\\log2$.'),
 b('Thus $D(Q\\Vert P)=\\tfrac12[3+1-2-\\log2]=1-\\tfrac12\\log2\\approx0.653426$. Both values are nonnegative; their inequality shows KL is not a symmetric distance.','Do đó $D(Q\\Vert P)=\\tfrac12[3+1-2-\\log2]=1-\\tfrac12\\log2\\approx0.653426$. Cả hai không âm; hai giá trị khác nhau cho thấy KL không là khoảng cách đối xứng.')];
export default {
 'daily-gaussian-mutual-information':{
 application:b('Quantify how much observing one Gaussian measurement reduces uncertainty about another.','Định lượng mức giảm bất định về một phép đo Gaussian khi quan sát phép đo khác.'),
 formula:b('For a nonsingular jointly Gaussian scalar pair, $I(X;Y)=-\\tfrac12\\log(1-\\rho^2)$ nats, where $|\\rho|<1$.','Với cặp Gaussian vô hướng chung không suy biến, $I(X;Y)=-\\tfrac12\\log(1-\\rho^2)$ nat, với $|\\rho|<1$.'),
 steps:mi,primarySolution:mi,companions:[
 q(['For jointly Gaussian standardized $X,Y$ with $\\rho=0.8$, find conditional variance and mutual information.','Với $X,Y$ chuẩn hóa và Gaussian chung, $\\rho=0.8$, tìm phương sai điều kiện và thông tin tương hỗ.'],[
 ['The standardized conditional variance is $1-\\rho^2=0.36$.','Phương sai điều kiện chuẩn hóa bằng $1-\\rho^2=0.36$.'],
 ['The variance ratio is $1/0.36=25/9$, so information is $\\tfrac12\\log(25/9)$.','Tỷ số phương sai bằng $1/0.36=25/9$ nên thông tin là $\\tfrac12\\log(25/9)$.'],
 ['Therefore $I=\\log(5/3)\\approx0.510826$ nats. A larger absolute correlation gives more information in this Gaussian family.','Vậy $I=\\log(5/3)\\approx0.510826$ nat. Tương quan tuyệt đối lớn hơn cho thông tin lớn hơn trong họ Gaussian này.']]),
 q(['A jointly Gaussian pair has covariance matrix $\\begin{pmatrix}4&1\\\\1&1\\end{pmatrix}$. Compute mutual information.','Cặp Gaussian chung có covariance $\\begin{pmatrix}4&1\\\\1&1\\end{pmatrix}$. Tính thông tin tương hỗ.'],[
 ['The determinant is $3>0$, so the pair is nonsingular. Standard deviations are $2$ and $1$.','Định thức bằng $3>0$ nên cặp không suy biến. Hai độ lệch chuẩn là $2$, $1$.'],
 ['Correlation is $\\rho=1/(2\\cdot1)=1/2$, not the raw covariance one.','Tương quan là $\\rho=1/(2\\cdot1)=1/2$, không phải covariance thô bằng một.'],
 ['Substitute: $I=-\\tfrac12\\log(3/4)\\approx0.143841$ nats.','Thế số: $I=-\\tfrac12\\log(3/4)\\approx0.143841$ nat.']]),
 q(['Let $X$ be uniform on $\\{-1,0,1\\}$ and $Y=X^2$. Show why zero correlation cannot justify using the Gaussian zero-information conclusion.','Cho $X$ đều trên $\\{-1,0,1\\}$, $Y=X^2$. Vì sao tương quan bằng không chưa cho phép dùng kết luận thông tin bằng không của Gaussian?'],[
 ['Symmetry gives $E[X]=0$ and $E[XY]=E[X^3]=0$, so covariance and correlation are zero. Both variances are positive.','Đối xứng cho $E[X]=0$, $E[XY]=E[X^3]=0$, nên covariance và tương quan bằng không. Cả hai phương sai đều dương.'],
 ['But $P(X=0,Y=0)=1/3$, whereas $P(X=0)P(Y=0)=1/9$. Thus independence fails.','Nhưng $P(X=0,Y=0)=1/3$, còn $P(X=0)P(Y=0)=1/9$. Vì vậy không độc lập.'],
 ['The pair is not jointly Gaussian. Its deterministic relation carries information despite the zero linear correlation.','Cặp này không Gaussian chung. Quan hệ tất định vẫn mang thông tin dù tương quan tuyến tính bằng không.']])],
 reviewNote:'Checked conditional covariance positivity, natural-log units, standardization of covariance, and a concrete non-Gaussian zero-correlation counterexample.',sourceIds:['d-matrix']},
 'daily-stein-risk':{
 application:b('Estimate the mean squared error of a denoiser without observing its unknown target mean.','Ước lượng sai số bình phương trung bình của bộ khử nhiễu khi chưa biết trung bình đích.'),
 formula:b('For $Y\\sim N(\\theta,\\sigma^2I_d)$ and a differentiable denoiser satisfying the Stein integrability and boundary conditions, $\\operatorname{SURE}=\\|g(Y)-Y\\|^2+2\\sigma^2\\operatorname{div}g(Y)-d\\sigma^2$. Its expectation is the squared-error risk; affine $g$ satisfies these conditions.','Với $Y\\sim N(\\theta,\\sigma^2I_d)$ và bộ khử nhiễu khả vi thỏa điều kiện khả tích và biên của Stein, $\\operatorname{SURE}=\\|g(Y)-Y\\|^2+2\\sigma^2\\operatorname{div}g(Y)-d\\sigma^2$. Kỳ vọng bằng rủi ro bình phương sai số; $g$ affine thỏa các điều kiện này.'),
 steps:sure,primarySolution:sure,companions:[
 q(['Let $Y\\sim N(\\theta,4)$ and $g(y)=y/2$. Evaluate SURE at $y=4$ and its expectation when $\\theta=0$.','Cho $Y\\sim N(\\theta,4)$, $g(y)=y/2$. Tính SURE tại $y=4$ và kỳ vọng khi $\\theta=0$.'],[
 ['The residual is $-2$, so its square is $4$. The derivative is $1/2$.','Phần dư là $-2$ nên bình phương bằng $4$. Đạo hàm bằng $1/2$.'],
 ['SURE is $4+2(4)(1/2)-4=4$. As a function, it is $Y^2/4$.','SURE bằng $4+2(4)(1/2)-4=4$. Dưới dạng hàm, nó bằng $Y^2/4$.'],
 ['At $\\theta=0$, $E[Y^2]=4$, so expected SURE is $1$, equal to $E[(Y/2)^2]$. The realized value four need not equal that expectation.','Tại $\\theta=0$, $E[Y^2]=4$, nên kỳ vọng SURE bằng $1$, trùng $E[(Y/2)^2]$. Giá trị quan sát bốn không nhất thiết bằng kỳ vọng.']]),
 q(['For $Y\\sim N(\\theta,2I_3)$ and $g(Y)=Y$, compute SURE and true risk.','Với $Y\\sim N(\\theta,2I_3)$, $g(Y)=Y$, tính SURE và rủi ro thật.'],[
 ['There is no residual: $g(Y)-Y=0$. The identity map has divergence $3$.','Không có phần dư: $g(Y)-Y=0$. Ánh xạ đồng nhất có divergence bằng $3$.'],
 ['SURE is $0+2(2)(3)-3(2)=6$ for every observation.','SURE bằng $0+2(2)(3)-3(2)=6$ với mọi quan sát.'],
 ['The error is the Gaussian noise itself; its expected squared norm is the trace of $2I_3$, also $6$.','Sai số chính là nhiễu Gaussian; kỳ vọng bình phương chuẩn bằng trace của $2I_3$, cũng là $6$.']]),
 q(['Let $Y\\sim N((3,4)^T,I_2)$ and $g(y)=0$. Can SURE be negative? Evaluate at $y=0$ and compare its expectation with risk.','Cho $Y\\sim N((3,4)^T,I_2)$, $g(y)=0$. SURE có thể âm không? Tính tại $y=0$ rồi so kỳ vọng với rủi ro.'],[
 ['The divergence is zero, so $\\operatorname{SURE}(Y)=\\|Y\\|^2-2$. At $y=0$ this equals $-2$.','Divergence bằng không nên $\\operatorname{SURE}(Y)=\\|Y\\|^2-2$. Tại $y=0$ nó bằng $-2$.'],
 ['Since $E\\|Y\\|^2=3^2+4^2+2=27$, expected SURE is $25$.','Vì $E\\|Y\\|^2=3^2+4^2+2=27$, kỳ vọng SURE bằng $25$.'],
 ['The estimator always returns zero, so its true squared loss is $\\|(3,4)^T\\|^2=25$. Unbiased risk estimation does not require every estimate to be nonnegative.','Ước lượng luôn trả không nên loss bình phương thật là $\\|(3,4)^T\\|^2=25$. Ước lượng rủi ro không chệch không đòi mọi giá trị ước lượng đều không âm.']])],
 reviewNote:'Recomputed divergence and direct affine risk, checked noise-variance units and a negative realized SURE with positive expected risk.',sourceIds:['d-sure']},
 'daily-ridge-degrees-freedom':{
 application:b('Measure the effective flexibility of a linear fit as regularization damps its singular directions.','Đo độ linh hoạt hiệu dụng của mô hình tuyến tính khi điều chuẩn giảm các hướng singular.'),
 formula:b('For $\\lambda>0$, $H_\\lambda=X(X^TX+\\lambda I)^{-1}X^T$ and $\\operatorname{df}(\\lambda)=\\operatorname{tr}H_\\lambda=\\sum_{s_j>0}s_j^2/(s_j^2+\\lambda)$.','Với $\\lambda>0$, $H_\\lambda=X(X^TX+\\lambda I)^{-1}X^T$, $\\operatorname{df}(\\lambda)=\\operatorname{tr}H_\\lambda=\\sum_{s_j>0}s_j^2/(s_j^2+\\lambda)$.'),
 steps:df,primarySolution:df,companions:[
 q(['For $X=\\operatorname{diag}(2,1)$ and $\\lambda=1$, compute the fitted-value matrix and its effective degrees of freedom.','Với $X=\\operatorname{diag}(2,1)$, $\\lambda=1$, tính ma trận giá trị khớp và bậc tự do hiệu dụng.'],[
 ['The Gram matrix plus penalty is $\\operatorname{diag}(5,2)$, whose inverse is $\\operatorname{diag}(1/5,1/2)$.','Ma trận Gram cộng phạt là $\\operatorname{diag}(5,2)$, nghịch đảo là $\\operatorname{diag}(1/5,1/2)$.'],
 ['Multiplying on each side by $X$ gives $H=\\operatorname{diag}(4/5,1/2)$.','Nhân hai phía với $X$ cho $H=\\operatorname{diag}(4/5,1/2)$.'],
 ['The trace is $4/5+1/2=13/10=1.3$. This is not a count of nonzero coefficients.','Trace là $4/5+1/2=13/10=1.3$. Đây không phải số đếm hệ số khác không.']]),
 q(['Singular values are $3,1$. Find the positive penalty for which effective degrees of freedom equal one.','Hai singular value là $3,1$. Tìm mức phạt dương làm bậc tự do hiệu dụng bằng một.'],[
 ['Set $9/(9+\\lambda)+1/(1+\\lambda)=1$. The denominators are positive for $\\lambda>0$.','Đặt $9/(9+\\lambda)+1/(1+\\lambda)=1$. Các mẫu số dương với $\\lambda>0$.'],
 ['Multiplying out gives $18+10\\lambda=9+10\\lambda+\\lambda^2$, hence $\\lambda^2=9$.','Nhân mẫu và khai triển cho $18+10\\lambda=9+10\\lambda+\\lambda^2$, nên $\\lambda^2=9$.'],
 ['The positive solution is $\\lambda=3$. Both summands strictly decrease with the penalty, so the solution is unique.','Nghiệm dương là $\\lambda=3$. Cả hai số hạng giảm nghiêm ngặt theo mức phạt nên nghiệm duy nhất.']]),
 q(['For rank-deficient $X=\\operatorname{diag}(2,0)$, find the effective degrees of freedom and its limit as $\\lambda\\downarrow0$. Why not substitute an ordinary inverse at zero?','Với $X=\\operatorname{diag}(2,0)$ thiếu hạng, tìm bậc tự do hiệu dụng và giới hạn khi $\\lambda\\downarrow0$. Vì sao không thế nghịch đảo thông thường tại không?'],[
 ['Only the nonzero singular value contributes: $\\operatorname{df}(\\lambda)=4/(4+\\lambda)$.','Chỉ singular value khác không đóng góp: $\\operatorname{df}(\\lambda)=4/(4+\\lambda)$.'],
 ['Its limit is $1$, equal to the rank, rather than the two-column count.','Giới hạn bằng $1$, là hạng chứ không phải số cột bằng hai.'],
 ['At zero the Gram matrix is singular, so its ordinary inverse is undefined. The limit agrees with the pseudoinverse projection.','Tại không, Gram suy biến nên nghịch đảo thông thường không xác định. Giới hạn trùng phép chiếu dùng giả nghịch đảo.']])],
 reviewNote:'Verified trace arithmetic, positive-penalty domain, monotonicity and rank-deficient limit; solved df=1 independently by a quadratic equation.',sourceIds:['d-matrix']},
 'daily-gaussian-quadratic-mgf':{
 application:b('Identify exponential-moment limits of quadratic Gaussian errors before using a tail-bound calculation.','Xác định miền moment mũ của sai số Gaussian bậc hai trước khi dùng phép tính cận đuôi.'),
 formula:b('For $Z\\sim N(0,I_d)$, symmetric $A$ and $I-2tA\\succ0$, $E[e^{tZ^TAZ}]=\\det(I-2tA)^{-1/2}$. Also $E[Z^TAZ]=\\operatorname{tr}A$ and $\\operatorname{Var}(Z^TAZ)=2\\operatorname{tr}(A^2)$.','Với $Z\\sim N(0,I_d)$, $A$ đối xứng, $I-2tA\\succ0$, $E[e^{tZ^TAZ}]=\\det(I-2tA)^{-1/2}$. Đồng thời $E[Z^TAZ]=\\operatorname{tr}A$, $\\operatorname{Var}(Z^TAZ)=2\\operatorname{tr}(A^2)$.'),
 steps:mgf,primarySolution:mgf,companions:[
 q(['For independent standard normals, let $Q=Z_1^2+Z_2^2$. Find its MGF domain, mean and variance.','Với các chuẩn tắc độc lập, đặt $Q=Z_1^2+Z_2^2$. Tìm miền MGF, trung bình và phương sai.'],[
 ['Each squared normal contributes $(1-2t)^{-1/2}$, so independence gives $M_Q(t)=(1-2t)^{-1}$.','Mỗi bình phương chuẩn đóng góp $(1-2t)^{-1/2}$ nên độc lập cho $M_Q(t)=(1-2t)^{-1}$.'],
 ['Both integrals require $1-2t>0$, so the exact real domain is $t<1/2$.','Cả hai tích phân cần $1-2t>0$ nên miền thực chính xác là $t<1/2$.'],
 ['The matrix is $I_2$: mean is $2$ and variance is $2\\operatorname{tr}(I_2)=4$.','Ma trận là $I_2$: trung bình bằng $2$, phương sai bằng $2\\operatorname{tr}(I_2)=4$.']]),
 q(['Let $Q=-2Z_1^2$ with standard normal $Z_1$. Find its MGF domain and explain which side is bounded.','Cho $Q=-2Z_1^2$ với $Z_1$ chuẩn tắc. Tìm miền MGF và giải thích phía nào bị chặn.'],[
 ['A coefficient $-2$ gives $M_Q(t)=(1+4t)^{-1/2}$.','Hệ số $-2$ cho $M_Q(t)=(1+4t)^{-1/2}$.'],
 ['The integrability condition is $t>-1/4$. There is no finite upper bound on $t$ because $Q\\le0$.','Điều kiện khả tích là $t>-1/4$. Không có cận trên hữu hạn cho $t$ vì $Q\\le0$.'],
 ['The mean is $-2$ and variance is $(-2)^2\\cdot2=8$. A negative mean does not make variance negative.','Trung bình bằng $-2$, phương sai bằng $(-2)^2\\cdot2=8$. Trung bình âm không làm phương sai âm.']]),
 q(['For $A=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$ and $Z\\sim N(0,I_2)$, find the MGF and variance of $Z^TAZ$.','Với $A=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$, $Z\\sim N(0,I_2)$, tìm MGF và phương sai của $Z^TAZ$.'],[
 ['The orthogonal coordinates $U=(Z_1+Z_2)/\\sqrt2$, $V=(Z_1-Z_2)/\\sqrt2$ are independent standard normals, and $Z^TAZ=U^2-V^2$.','Các tọa độ trực giao $U=(Z_1+Z_2)/\\sqrt2$, $V=(Z_1-Z_2)/\\sqrt2$ là chuẩn tắc độc lập, và $Z^TAZ=U^2-V^2$.'],
 ['Multiply the two squared-normal MGFs: $M(t)=[(1-2t)(1+2t)]^{-1/2}=(1-4t^2)^{-1/2}$ for $|t|<1/2$.','Nhân hai MGF bình phương chuẩn: $M(t)=[(1-2t)(1+2t)]^{-1/2}=(1-4t^2)^{-1/2}$ với $|t|<1/2$.'],
 ['The mean is zero and variance is $2+2=4$, also $2\\operatorname{tr}(A^2)=4$.','Trung bình bằng không, phương sai bằng $2+2=4$, cũng là $2\\operatorname{tr}(A^2)=4$.']])],
 reviewNote:'Checked positivity of every Gaussian-integral precision factor including strict endpoints, orthogonal rotation, and direct variance of squared normals.',sourceIds:['d-matrix']},
 'daily-multivariate-gaussian-kl':{
 application:b('Compare two predictive Gaussian laws, accounting separately for mean mismatch and covariance mismatch.','So hai phân phối Gaussian dự báo, tính riêng sai khác trung bình và sai khác covariance.'),
 formula:b('For $P=N(m_0,S_0)$ and $Q=N(m_1,S_1)$ with positive-definite covariances in dimension $d$, $D(P\\Vert Q)=\\tfrac12[\\operatorname{tr}(S_1^{-1}S_0)+(m_1-m_0)^TS_1^{-1}(m_1-m_0)-d+\\log(\\det S_1/\\det S_0)]$.','Với $P=N(m_0,S_0)$, $Q=N(m_1,S_1)$ có covariance xác định dương ở chiều $d$, $D(P\\Vert Q)=\\tfrac12[\\operatorname{tr}(S_1^{-1}S_0)+(m_1-m_0)^TS_1^{-1}(m_1-m_0)-d+\\log(\\det S_1/\\det S_0)]$.'),
 steps:kl,primarySolution:kl,companions:[
 q(['Compute both KL directions for $P=N(0,1)$ and $Q=N(1,1)$. Does equality here make KL symmetric in general?','Tính hai chiều KL cho $P=N(0,1)$, $Q=N(1,1)$. Việc bằng nhau ở đây có làm KL đối xứng nói chung không?'],[
 ['Equal unit variances make the trace-minus-dimension and log-determinant terms vanish.','Hai phương sai đơn vị bằng nhau làm hạng trace trừ chiều và log định thức triệt tiêu.'],
 ['The squared mean displacement is one in either direction, so both divergences equal $1/2$.','Bình phương dịch chuyển trung bình bằng một ở cả hai chiều nên hai divergence đều bằng $1/2$.'],
 ['This special equality follows from equal covariances; changing variances changes the inverse-covariance weights and can break it.','Đẳng thức riêng này do covariance bằng nhau; đổi phương sai làm đổi trọng số nghịch đảo covariance và có thể phá đẳng thức.']]),
 q(['Let $P=N(0,1)$ and $Q=N(0,4)$. Calculate both KL directions exactly.','Cho $P=N(0,1)$, $Q=N(0,4)$. Tính chính xác hai chiều KL.'],[
 ['The mean term vanishes. Forward variance ratio is $1/4$, giving $D(P\\Vert Q)=\\tfrac12[1/4-1+\\log4]$.','Hạng trung bình bằng không. Tỷ số phương sai thuận là $1/4$, cho $D(P\\Vert Q)=\\tfrac12[1/4-1+\\log4]$.'],
 ['Thus the forward value is $\\log2-3/8$. Reverse ratio is four and log ratio changes sign.','Vậy chiều thuận bằng $\\log2-3/8$. Tỷ số ngược bằng bốn và log tỷ số đổi dấu.'],
 ['The reverse value is $\\tfrac12[4-1-\\log4]=3/2-\\log2$, which differs from the forward value.','Chiều ngược bằng $\\tfrac12[4-1-\\log4]=3/2-\\log2$, khác chiều thuận.']]),
 q(['Under $P$, three coordinates are independent $N(0,1)$; under $Q$, they are independent $N(1,1)$. Derive total KL without writing a matrix inverse.','Dưới $P$, ba tọa độ độc lập $N(0,1)$; dưới $Q$, chúng độc lập $N(1,1)$. Suy ra KL tổng mà không viết nghịch đảo ma trận.'],[
 ['Both joint densities factor, so the joint log density ratio is the sum of the three coordinate log ratios.','Cả hai mật độ chung phân tích thành tích nên log tỷ số mật độ chung là tổng ba log tỷ số tọa độ.'],
 ['Take expectation under $P$ and use linearity: joint KL is the sum of the coordinate KL values.','Lấy kỳ vọng dưới $P$ và dùng tuyến tính: KL chung bằng tổng các KL tọa độ.'],
 ['Each coordinate contributes $1/2$, hence total $D(P\\Vert Q)=3/2$. The factorization assumptions justify adding the information.','Mỗi tọa độ đóng góp $1/2$, nên tổng $D(P\\Vert Q)=3/2$. Giả thiết phân tích thành tích biện minh phép cộng thông tin.']])],
 reviewNote:'Recomputed determinant ratios, trace terms and inverse-covariance orientation in both directions; checked unequal-variance and product-law companions.',sourceIds:['d-matrix']}
} satisfies Record<string,ReviewedLesson>;
