import {b, type ReviewedLesson} from './types';

const lessons: Record<string, ReviewedLesson> = {
  'm2-w076-e1': {
    prompt: b(String.raw`A process has $\alpha(k)=0.2^k$ and $E|X_0|^3<\infty$. For $\delta=1$, evaluate whether $\sum_{k\ge1}\alpha(k)^{\delta/(2+\delta)}$ converges, and state the CLT conclusion if the process is strictly stationary, centered and $\Omega>0$.`,String.raw`Quá trình có $\alpha(k)=0.2^k$ và $E|X_0|^3<\infty$. Với $\delta=1$, hãy xét $\sum_{k\ge1}\alpha(k)^{\delta/(2+\delta)}$ có hội tụ không, rồi nêu kết luận CLT nếu quá trình dừng nghiêm ngặt, có tâm không và $\Omega>0$.`),
    application: b(String.raw`A dependent CLT turns verified event-mixing decay and moments into a normal limit. Summable mixing alone does not establish stationarity, centering, or positive long-run variance.`,String.raw`CLT phụ thuộc biến tốc độ mixing biến cố và moment đã kiểm tra thành giới hạn chuẩn. Mixing khả tổng tự nó không xác lập tính dừng, kỳ vọng không hay phương sai dài hạn dương.`),
    formula: b(String.raw`The stated theorem assumes strict stationarity, $EX_t=0$, $E|X_0|^{2+\delta}<\infty$ and $\sum_{k\ge1}\alpha(k)^{\delta/(2+\delta)}<\infty$, and concludes $n^{-1/2}\sum_{t=1}^nX_t\Rightarrow N(0,\Omega)$, where $\Omega=\gamma(0)+2\sum_{k\ge1}\gamma(k)$. The theorem is assumed; $\Omega>0$ gives a nondegenerate limit.`,String.raw`Định lý đã nêu giả sử tính dừng nghiêm ngặt, $EX_t=0$, $E|X_0|^{2+\delta}<\infty$ và $\sum_{k\ge1}\alpha(k)^{\delta/(2+\delta)}<\infty$, rồi kết luận $n^{-1/2}\sum_{t=1}^nX_t\Rightarrow N(0,\Omega)$, với $\Omega=\gamma(0)+2\sum_{k\ge1}\gamma(k)$. Định lý được giả sử đúng; $\Omega>0$ cho giới hạn không suy biến.`),
    steps: [
      b(String.raw`For $\delta=1$, the exponent is $1/3$.`,String.raw`Với $\delta=1$, số mũ là $1/3$.`),
      b(String.raw`Then $\alpha(k)^{1/3}=(0.2^{1/3})^k$, a geometric sequence with ratio $0.2^{1/3}<1$.`,String.raw`Khi đó $\alpha(k)^{1/3}=(0.2^{1/3})^k$, là cấp số nhân có công bội $0.2^{1/3}<1$.`),
      b(String.raw`Thus the mixing sum converges. The third moment is the required $2+\delta$ moment; read “stationary” as strict stationarity and separately check centering and $\Omega>0$.`,String.raw`Vậy tổng mixing hội tụ. Moment bậc ba là moment $2+\delta$ cần thiết; hiểu “dừng” là dừng nghiêm ngặt rồi kiểm tra riêng kỳ vọng không và $\Omega>0$.`),
      b(String.raw`After those checks, invoke the assumed result to obtain $n^{-1/2}\sum X_t\Rightarrow N(0,\Omega)$; the geometric calculation is not a proof of the CLT.`,String.raw`Sau các kiểm tra đó, dùng kết quả được giả sử để có $n^{-1/2}\sum X_t\Rightarrow N(0,\Omega)$; phép tính hình học không phải chứng minh CLT.`),
    ],
    primarySolution: [
      b(String.raw`With $\delta=1$, $\delta/(2+\delta)=1/3$, so the summands are $(0.2^k)^{1/3}=(0.2^{1/3})^k$.`,String.raw`Với $\delta=1$, $\delta/(2+\delta)=1/3$, nên số hạng là $(0.2^k)^{1/3}=(0.2^{1/3})^k$.`),
      b(String.raw`The ratio is approximately $0.585<1$, hence the series from $k=1$ converges.`,String.raw`Công bội xấp xỉ $0.585<1$, nên chuỗi từ $k=1$ hội tụ.`),
      b(String.raw`The third moment, strict stationarity and zero mean meet the other stated premises; $\Omega>0$ is given.`,String.raw`Moment bậc ba, tính dừng nghiêm ngặt và kỳ vọng không đáp ứng các giả thiết khác; $\Omega>0$ đã cho.`),
      b(String.raw`The stated theorem therefore yields the nondegenerate limit $n^{-1/2}\sum_{t=1}^nX_t\Rightarrow N(0,\Omega)$.`,String.raw`Vì vậy định lý cho giới hạn không suy biến $n^{-1/2}\sum_{t=1}^nX_t\Rightarrow N(0,\Omega)$.`),
    ],
    companions: [
      {prompt:b(String.raw`Suppose $\alpha(k)=0.5^k$ and $E|X_0|^4<\infty$. For $\delta=2$, check summability and state what else is needed for the dependent CLT.`,String.raw`Giả sử $\alpha(k)=0.5^k$ và $E|X_0|^4<\infty$. Với $\delta=2$, hãy kiểm tra tính khả tổng và nêu điều kiện nào khác cần cho CLT phụ thuộc.`),solution:[
        b(String.raw`The exponent is $2/(2+2)=1/2$, so terms equal $(\sqrt{0.5})^k$.`,String.raw`Số mũ là $2/(2+2)=1/2$, nên số hạng bằng $(\sqrt{0.5})^k$.`),
        b(String.raw`Since $\sqrt{0.5}<1$, the geometric series converges.`,String.raw`Vì $\sqrt{0.5}<1$, chuỗi hình học hội tụ.`),
        b(String.raw`The fourth moment supplies $2+\delta=4$; strict stationarity, zero mean and a covariance sum are still required.`,String.raw`Moment bậc bốn cung cấp $2+\delta=4$; vẫn cần tính dừng nghiêm ngặt, kỳ vọng không và tổng covariance.`),
        b(String.raw`One also needs $\Omega>0$ for a nondegenerate limit; only then does the assumed theorem give $N(0,\Omega)$.`,String.raw`Còn cần $\Omega>0$ để có giới hạn không suy biến; sau đó định lý được giả sử đúng mới cho $N(0,\Omega)$.`),
      ]},
      {prompt:b(String.raw`A centered strictly stationary process has $\alpha(k)=0.1^k$, finite third moment and $\Omega=0$. State its normalized-sum limit and explain the boundary case.`,String.raw`Quá trình dừng nghiêm ngặt, có tâm không có $\alpha(k)=0.1^k$, moment bậc ba hữu hạn và $\Omega=0$. Hãy nêu giới hạn tổng chuẩn hóa và giải thích trường hợp biên.`),solution:[
        b(String.raw`For $\delta=1$, the mixing ratio is $0.1^{1/3}<1$, and the third moment supplies $2+\delta$.`,String.raw`Với $\delta=1$, công bội mixing là $0.1^{1/3}<1$, và moment bậc ba cung cấp $2+\delta$.`),
        b(String.raw`The remaining stationarity and centering hypotheses are stipulated.`,String.raw`Các giả thiết dừng và có tâm còn lại được giả sử.`),
        b(String.raw`The theorem yields convergence to $N(0,0)$, a point mass at zero.`,String.raw`Định lý cho hội tụ đến $N(0,0)$, tức khối điểm tại không.`),
        b(String.raw`This is a degenerate limit, not a positive-variance Gaussian approximation or nonzero standard error.`,String.raw`Đây là giới hạn suy biến, không phải xấp xỉ Gaussian phương sai dương hay sai số chuẩn khác không.`),
      ]},
      {prompt:b(String.raw`Let $\alpha(k)=0$ for $k\ge3$, and suppose a process has finite fifth absolute moment, strict stationarity, zero mean and $\Omega>0$. Check the $\delta=3$ mixing condition and state the limit.`,String.raw`Cho $\alpha(k)=0$ khi $k\ge3$, và giả sử quá trình có moment tuyệt đối bậc năm hữu hạn, dừng nghiêm ngặt, kỳ vọng không, $\Omega>0$. Hãy kiểm tra điều kiện mixing với $\delta=3$ và nêu giới hạn.`),solution:[
        b(String.raw`For $\delta=3$, the exponent is $3/5$.`,String.raw`Với $\delta=3$, số mũ là $3/5$.`),
        b(String.raw`Only the terms $k=1,2$ may be nonzero, so the powered mixing sum is finite.`,String.raw`Chỉ số hạng $k=1,2$ có thể khác không, nên tổng mixing lũy thừa là hữu hạn.`),
        b(String.raw`The fifth absolute moment equals the required order $2+\delta=5$.`,String.raw`Moment tuyệt đối bậc năm đúng bằng bậc yêu cầu $2+\delta=5$.`),
        b(String.raw`The assumed theorem then gives $n^{-1/2}\sum X_t\Rightarrow N(0,\Omega)$; verifying hypotheses does not prove that theorem.`,String.raw`Định lý được giả sử đúng cho $n^{-1/2}\sum X_t\Rightarrow N(0,\Omega)$; kiểm tra giả thiết không đồng nghĩa chứng minh định lý.`),
      ]},
    ],
    reviewNote: 'Checked exponent, geometric ratio, k≥1 range and δ-to-moment match. Restriction: CLT is assumed, needs strict stationarity and centering, and is nondegenerate only for Ω>0.',
    sourceIds: ['o-cmu-mixing'],
  },
  'm2-w076-e2': {
    application: b(String.raw`A vanishing scaled variance proves a weak law when the average is centered at its target. A positive long-run variance suggests $n^{-1/2}$ fluctuations, but is not itself a distributional theorem.`,String.raw`Phương sai co giãn triệt tiêu chứng minh luật số lớn yếu khi trung bình đặt tâm tại mục tiêu. Phương sai dài hạn dương gợi ý dao động $n^{-1/2}$ nhưng tự nó không phải định lý phân phối.`),
    formula: b(String.raw`If $E\bar X_n=\mu$, then $P(|\bar X_n-\mu|>\varepsilon)\le[n\operatorname{Var}(\bar X_n)]/(n\varepsilon^2)$. If $n\operatorname{Var}(\bar X_n)\to\Omega>0$, the variance is of order $\Omega/n$, compatible with a $\sqrt n$ CLT but not enough to establish one.`,String.raw`Nếu $E\bar X_n=\mu$, thì $P(|\bar X_n-\mu|>\varepsilon)\le[n\operatorname{Var}(\bar X_n)]/(n\varepsilon^2)$. Nếu $n\operatorname{Var}(\bar X_n)\to\Omega>0$, phương sai có bậc $\Omega/n$, phù hợp với CLT thang $\sqrt n$ nhưng chưa đủ xác lập.`),
    steps: [
      b(String.raw`Fix $\varepsilon>0$. The expectation premise makes $\bar X_n-\mu$ centered.`,String.raw`Cố định $\varepsilon>0$. Giả thiết kỳ vọng làm $\bar X_n-\mu$ có tâm không.`),
      b(String.raw`Chebyshev bounds the tail by $\operatorname{Var}(\bar X_n)/\varepsilon^2$.`,String.raw`Chebyshev chặn xác suất đuôi bởi $\operatorname{Var}(\bar X_n)/\varepsilon^2$.`),
      b(String.raw`Rewrite it as $[n\operatorname{Var}(\bar X_n)]/(n\varepsilon^2)$; the numerator tends to the finite limit $\Omega$, while the denominator grows like $n$, so the ratio tends to zero.`,String.raw`Viết lại thành $[n\operatorname{Var}(\bar X_n)]/(n\varepsilon^2)$; tử số tiến tới giới hạn hữu hạn $\Omega$, còn mẫu số tăng theo $n$, nên tỷ số tiến về không.`),
      b(String.raw`Thus the probability tends to zero. A positive variance limit instead suggests the $n^{-1/2}$ scale, without determining the limiting distribution.`,String.raw`Vậy xác suất tiến về không. Giới hạn phương sai dương gợi ý thang $n^{-1/2}$ nhưng không xác định phân phối giới hạn.`),
    ],
    primarySolution: [
      b(String.raw`For fixed $\varepsilon$, $E\bar X_n=\mu$, so variance is measured about the target.`,String.raw`Với $\varepsilon$ cố định, $E\bar X_n=\mu$, nên phương sai đo quanh mục tiêu.`),
      b(String.raw`Chebyshev gives $P(|\bar X_n-\mu|>\varepsilon)\le\operatorname{Var}(\bar X_n)/\varepsilon^2$.`,String.raw`Chebyshev cho $P(|\bar X_n-\mu|>\varepsilon)\le\operatorname{Var}(\bar X_n)/\varepsilon^2$.`),
      b(String.raw`This equals $[n\operatorname{Var}(\bar X_n)]/(n\varepsilon^2)\to0$, proving convergence in probability.`,String.raw`Vế phải bằng $[n\operatorname{Var}(\bar X_n)]/(n\varepsilon^2)\to0$, chứng minh hội tụ theo xác suất.`),
      b(String.raw`If the scaled variance instead tends to $\Omega>0$, the standard deviation is about $\sqrt{\Omega/n}$; another theorem is needed for a CLT.`,String.raw`Nếu phương sai co giãn tiến tới $\Omega>0$, độ lệch chuẩn xấp xỉ $\sqrt{\Omega/n}$; cần định lý khác để có CLT.`),
    ],
    companions: [
      {prompt:b(String.raw`Suppose $E\bar X_n=2$ and $\operatorname{Var}(\bar X_n)=4/n^2$. Bound $P(|\bar X_n-2|>0.2)$ and state the limit.`,String.raw`Giả sử $E\bar X_n=2$ và $\operatorname{Var}(\bar X_n)=4/n^2$. Hãy chặn $P(|\bar X_n-2|>0.2)$ và nêu giới hạn.`),solution:[
        b(String.raw`The scaled variance is $n\operatorname{Var}(\bar X_n)=4/n\to0$.`,String.raw`Phương sai co giãn là $n\operatorname{Var}(\bar X_n)=4/n\to0$.`),
        b(String.raw`Chebyshev gives $(4/n^2)/(0.2)^2=100/n^2$.`,String.raw`Chebyshev cho $(4/n^2)/(0.2)^2=100/n^2$.`),
        b(String.raw`The bound vanishes, so $\bar X_n\to2$ in probability.`,String.raw`Cận triệt tiêu, nên $\bar X_n\to2$ theo xác suất.`),
      ]},
      {prompt:b(String.raw`Let $E\bar Y_n=0$ and $\operatorname{Var}(\bar Y_n)=3/n$. What scale is indicated, and does this prove a Gaussian limit?`,String.raw`Cho $E\bar Y_n=0$ và $\operatorname{Var}(\bar Y_n)=3/n$. Thang nào được gợi ý, và điều này có chứng minh giới hạn Gaussian không?`),solution:[
        b(String.raw`The scaled variance equals $n(3/n)=3$.`,String.raw`Phương sai co giãn bằng $n(3/n)=3$.`),
        b(String.raw`Its standard deviation is $\sqrt{3}/\sqrt n$, suggesting $n^{-1/2}$ fluctuations.`,String.raw`Độ lệch chuẩn là $\sqrt{3}/\sqrt n$, gợi ý dao động $n^{-1/2}$.`),
        b(String.raw`Variance does not determine distributional shape; a CLT with its own dependence and moment hypotheses is needed.`,String.raw`Phương sai không xác định hình dạng phân phối; cần CLT với giả thiết phụ thuộc và moment riêng.`),
      ]},
      {prompt:b(String.raw`Take deterministic $\bar Z_n=1$ for every n while $\mu=0$. Its variance rate vanishes. Why is the claimed convergence false?`,String.raw`Lấy $\bar Z_n=1$ tất định với mọi n, trong khi $\mu=0$. Tốc độ phương sai triệt tiêu. Vì sao kết luận hội tụ sai?`),solution:[
        b(String.raw`The variance is zero, so $n\operatorname{Var}(\bar Z_n)=0$.`,String.raw`Phương sai bằng không, nên $n\operatorname{Var}(\bar Z_n)=0$.`),
        b(String.raw`But $E\bar Z_n=1$, violating the centering premise.`,String.raw`Nhưng $E\bar Z_n=1$, vi phạm giả thiết đặt tâm.`),
        b(String.raw`Indeed $P(|\bar Z_n|>1/2)=1$. Chebyshev controls spread around the mean, not bias from the target.`,String.raw`Thật vậy $P(|\bar Z_n|>1/2)=1$. Chebyshev kiểm soát độ phân tán quanh kỳ vọng, không phải độ chệch so với mục tiêu.`),
      ]},
    ],
    reviewNote: 'Corrected the Chebyshev step: n Var(X̄ₙ) tends to Ω, not zero; with fixed ε>0 the denominator nε² diverges, so the ratio vanishes. Checked centering and the rate limit. Restriction: variance controls spread from E[X̄ₙ], so E[X̄ₙ]=μ is essential; a positive limit is not a CLT.',
    sourceIds: ['o-cmu-mixing'],
  },
  'm2-w076-e3': {
    application: b(String.raw`A stationary difference can have positive one-step variance but zero long-run variance. Lag-one covariances cancel and the partial sum leaves only boundary observations.`,String.raw`Sai phân dừng có thể có phương sai một bước dương nhưng phương sai dài hạn bằng không. Covariance lag một triệt tiêu và tổng từng phần chỉ còn quan sát biên.`),
    formula: b(String.raw`For $X_t=Y_t-Y_{t-1}$ with IID variance $\tau^2$, $\gamma(0)=2\tau^2$, $\gamma(\pm1)=-\tau^2$, $\gamma(h)=0$ for $|h|>1$, and $\Omega=\sum_h\gamma(h)=0$. Also $\sum_{t=1}^nX_t=Y_n-Y_0$.`,String.raw`Với $X_t=Y_t-Y_{t-1}$ và phương sai IID $\tau^2$, $\gamma(0)=2\tau^2$, $\gamma(\pm1)=-\tau^2$, $\gamma(h)=0$ nếu $|h|>1$, và $\Omega=\sum_h\gamma(h)=0$. Ngoài ra $\sum_{t=1}^nX_t=Y_n-Y_0$.`),
    steps: [
      b(String.raw`Two independent terms give $\gamma(0)=2\tau^2$.`,String.raw`Hai số hạng độc lập cho $\gamma(0)=2\tau^2$.`),
      b(String.raw`At lag one, the shared $Y_{t-1}$ has opposite signs, giving $\gamma(1)=-\tau^2$.`,String.raw`Ở lag một, $Y_{t-1}$ chung có dấu trái nhau, cho $\gamma(1)=-\tau^2$.`),
      b(String.raw`At larger lags the Y indices are disjoint, hence covariance is zero. Summing both adjacent lags gives $\Omega=2\tau^2-2\tau^2=0$.`,String.raw`Ở lag lớn hơn, chỉ số Y rời nhau nên covariance bằng không. Cộng hai lag kề cho $\Omega=2\tau^2-2\tau^2=0$.`),
      b(String.raw`The sum telescopes to $Y_n-Y_0$, variance $2\tau^2$; after dividing by $\sqrt n$, its second moment tends to zero.`,String.raw`Tổng triệt tiêu thành $Y_n-Y_0$, phương sai $2\tau^2$; chia cho $\sqrt n$ làm moment bậc hai tiến về không.`),
    ],
    primarySolution: [
      b(String.raw`Each $X_t$ is a difference of two independent variance-$\tau^2$ terms, so $\gamma(0)=2\tau^2$.`,String.raw`Mỗi $X_t$ là hiệu hai số hạng độc lập phương sai $\tau^2$, nên $\gamma(0)=2\tau^2$.`),
      b(String.raw`$X_t$ and $X_{t-1}$ share $Y_{t-1}$ with opposite coefficients, so $\gamma(1)=-\tau^2$ and by symmetry $\gamma(-1)=-\tau^2$.`,String.raw`$X_t$ và $X_{t-1}$ chung $Y_{t-1}$ với hệ số trái dấu, nên $\gamma(1)=-\tau^2$ và đối xứng cho $\gamma(-1)=-\tau^2$.`),
      b(String.raw`All covariances with $|h|>1$ vanish. Therefore $\Omega=2\tau^2-\tau^2-\tau^2=0$.`,String.raw`Mọi covariance với $|h|>1$ bằng không. Do đó $\Omega=2\tau^2-\tau^2-\tau^2=0$.`),
      b(String.raw`The partial sum is $Y_n-Y_0$, variance $2\tau^2$, so $E[(n^{-1/2}\sum X_t)^2]=2\tau^2/n\to0$: convergence is degenerate in $L^2$.`,String.raw`Tổng từng phần là $Y_n-Y_0$, phương sai $2\tau^2$, nên $E[(n^{-1/2}\sum X_t)^2]=2\tau^2/n\to0$: hội tụ suy biến trong $L^2$.`),
    ],
    companions: [
      {prompt:b(String.raw`For IID $Y_t$ of variance 4, define $Z_t=Y_t-Y_{t-1}$. Find $\gamma_Z(0),\gamma_Z(1)$ and the variance of $n^{-1/2}\sum Z_t$.`,String.raw`Với $Y_t$ IID phương sai 4, đặt $Z_t=Y_t-Y_{t-1}$. Hãy tìm $\gamma_Z(0),\gamma_Z(1)$ và phương sai của $n^{-1/2}\sum Z_t$.`),solution:[
        b(String.raw`The two terms are independent, so $\gamma_Z(0)=4+4=8$.`,String.raw`Hai số hạng độc lập nên $\gamma_Z(0)=4+4=8$.`),
        b(String.raw`The shared term at lag one has opposite signs, hence $\gamma_Z(1)=-4$.`,String.raw`Số hạng chung ở lag một trái dấu, nên $\gamma_Z(1)=-4$.`),
        b(String.raw`The normalized sum is $(Y_n-Y_0)/\sqrt n$ and has variance $8/n\to0$.`,String.raw`Tổng chuẩn hóa là $(Y_n-Y_0)/\sqrt n$, có phương sai $8/n\to0$.`),
      ]},
      {prompt:b(String.raw`For IID $Y_t$ of variance $\tau^2$, let $V_t=Y_t-2Y_{t-1}+Y_{t-2}$. Telescope the sum and infer $\Omega$.`,String.raw`Với $Y_t$ IID phương sai $\tau^2$, đặt $V_t=Y_t-2Y_{t-1}+Y_{t-2}$. Hãy triệt tiêu tổng và suy ra $\Omega$.`),solution:[
        b(String.raw`Collecting coefficients gives $\sum_{t=1}^nV_t=(Y_n-Y_{n-1})-(Y_0-Y_{-1})$.`,String.raw`Gom hệ số được $\sum_{t=1}^nV_t=(Y_n-Y_{n-1})-(Y_0-Y_{-1})$.`),
          b(String.raw`For n≥2 the four boundary variables are distinct, so the sum variance is $4\tau^2$, bounded in n.`,String.raw`Với n≥2, bốn biến biên khác nhau, nên phương sai tổng là $4\tau^2$, bị chặn theo n.`),
        b(String.raw`Thus $n^{-1}\operatorname{Var}(\sum V_t)\to0$, equal to the covariance sum for this finite-dependent process.`,String.raw`Vậy $n^{-1}\operatorname{Var}(\sum V_t)\to0$, bằng tổng covariance của quá trình phụ thuộc hữu hạn này.`),
      ]},
      {prompt:b(String.raw`Let $Q_t$ be IID centered with variance 9. Find its long-run variance and the variance of $n^{-1/2}\sum Q_t$; contrast this with differencing.`,String.raw`Cho $Q_t$ IID có tâm không, phương sai 9. Hãy tìm phương sai dài hạn và phương sai $n^{-1/2}\sum Q_t$; so sánh với phép sai phân.`),solution:[
        b(String.raw`Independence yields $\gamma_Q(0)=9$ and zero covariance at nonzero lags.`,String.raw`Tính độc lập cho $\gamma_Q(0)=9$ và covariance lag khác không bằng không.`),
        b(String.raw`Therefore $\Omega=9$.`,String.raw`Vì vậy $\Omega=9$.`),
        b(String.raw`The normalized sum has variance $9n/n=9$, unlike a difference whose sum has only bounded endpoint variance.`,String.raw`Tổng chuẩn hóa có phương sai $9n/n=9$, khác sai phân có tổng chỉ còn phương sai biên bị chặn.`),
      ]},
    ],
    reviewNote: 'Checked lag-zero variance, opposite-sign lag-one terms, cutoff and telescoping variance. Restriction: finite second moments suffice; Ω=0 means a degenerate normalized limit.',
    sourceIds: ['o-cmu-mixing'],
  },
  'm2-w076-e4': {
    prompt: b(String.raw`For $X_t=\epsilon_t+\theta\epsilon_{t-1}$ with IID $\epsilon_t\sim N(0,\sigma^2)$, $\sigma^2>0$, and $\theta\ne-1$, prove $\alpha(k)=0$ for $k\ge2$, verify the moment and summability conditions, and compute $\Omega>0$ before invoking the selected CLT.`,String.raw`Với $X_t=\epsilon_t+\theta\epsilon_{t-1}$, $\epsilon_t\sim N(0,\sigma^2)$ IID, $\sigma^2>0$, $\theta\ne-1$, hãy chứng minh $\alpha(k)=0$ khi $k\ge2$, kiểm tra điều kiện moment và khả tổng, rồi tính $\Omega>0$ trước khi dùng CLT đã chọn.`),
    application: b(String.raw`Finite dependence allows event mixing to be checked from disjoint innovation sets, rather than inferred from covariance decay alone.`,String.raw`Phụ thuộc hữu hạn cho phép kiểm tra event mixing từ các tập innovation rời nhau, thay vì suy luận chỉ từ covariance suy giảm.`),
    formula: b(String.raw`For $X_t=\epsilon_t+\theta\epsilon_{t-1}$ with IID Gaussian noise variance $\sigma^2>0$, past indices through 0 satisfy $j\le0$, and future indices from k satisfy $j\ge k-1$. Thus $\alpha(k)=0$ for $k\ge2$. Also $\gamma(0)=\sigma^2(1+\theta^2)$, $\gamma(\pm1)=\theta\sigma^2$, and $\Omega=\sigma^2(1+\theta)^2$.`,String.raw`Với $X_t=\epsilon_t+\theta\epsilon_{t-1}$ và nhiễu Gaussian IID phương sai $\sigma^2>0$, chỉ số quá khứ đến 0 thỏa $j\le0$, còn tương lai từ k thỏa $j\ge k-1$. Do đó $\alpha(k)=0$ khi $k\ge2$. Ngoài ra $\gamma(0)=\sigma^2(1+\theta^2)$, $\gamma(\pm1)=\theta\sigma^2$, $\Omega=\sigma^2(1+\theta)^2$.`),
    steps: [
      b(String.raw`The finite Gaussian filter is strictly stationary, centered and has every finite absolute moment.`,String.raw`Bộ lọc Gaussian hữu hạn dừng nghiêm ngặt, có tâm không và mọi moment tuyệt đối hữu hạn.`),
      b(String.raw`Past variables through time 0 use innovations with indices at most 0; future variables from k use indices at least $k-1$.`,String.raw`Biến quá khứ đến thời điểm 0 dùng innovation có chỉ số không quá 0; biến tương lai từ k dùng chỉ số ít nhất $k-1$.`),
      b(String.raw`For $k\ge2$ these sets are disjoint, so the sigma-fields are independent and $\alpha(k)=0$. Only the k=1 term can enter the powered mixing sum.`,String.raw`Với $k\ge2$, hai tập rời nhau nên sigma-field độc lập và $\alpha(k)=0$. Chỉ số hạng k=1 có thể góp vào tổng mixing lũy thừa.`),
      b(String.raw`Matching innovations give $\gamma(0)=\sigma^2(1+\theta^2)$ and $\gamma(\pm1)=\theta\sigma^2$; higher lags vanish.`,String.raw`Innovation trùng chỉ số cho $\gamma(0)=\sigma^2(1+\theta^2)$ và $\gamma(\pm1)=\theta\sigma^2$; lag lớn hơn bằng không.`),
      b(String.raw`Hence $\Omega=\sigma^2(1+\theta)^2>0$ for $\theta\ne-1$. Verify the hypotheses, then invoke the assumed CLT.`,String.raw`Vậy $\Omega=\sigma^2(1+\theta)^2>0$ nếu $\theta\ne-1$. Kiểm tra giả thiết rồi áp dụng CLT được giả sử.`),
    ],
    primarySolution: [
      b(String.raw`The past sigma-field uses $\epsilon_j$ only for $j\le0$; the future from k uses only $j\ge k-1$.`,String.raw`Sigma-field quá khứ chỉ dùng $\epsilon_j$ với $j\le0$; tương lai từ k chỉ dùng $j\ge k-1$.`),
      b(String.raw`When $k\ge2$, the innovation sets do not overlap; IID independence makes the generated sigma-fields independent, so $\alpha(k)=0$.`,String.raw`Khi $k\ge2$, tập innovation không giao nhau; tính độc lập IID làm sigma-field sinh ra độc lập, nên $\alpha(k)=0$.`),
      b(String.raw`Strict stationarity and centering follow from the stationary finite Gaussian filter. Gaussianity gives $2+\delta$ moments, and the mixing sum has only finitely many nonzero terms.`,String.raw`Tính dừng nghiêm ngặt và kỳ vọng không theo từ bộ lọc Gaussian hữu hạn dừng. Gaussianity cho moment $2+\delta$, còn tổng mixing chỉ có hữu hạn số hạng khác không.`),
      b(String.raw`The covariances are $\gamma(0)=\sigma^2(1+\theta^2)$ and $\gamma(\pm1)=\theta\sigma^2$, so $\Omega=\sigma^2(1+\theta)^2>0$ for $\sigma^2>0,\theta\ne-1$.`,String.raw`Covariance là $\gamma(0)=\sigma^2(1+\theta^2)$ và $\gamma(\pm1)=\theta\sigma^2$, nên $\Omega=\sigma^2(1+\theta)^2>0$ khi $\sigma^2>0,\theta\ne-1$.`),
      b(String.raw`The selected CLT can now be invoked; this calculation checks its hypotheses, not its assumed proof.`,String.raw`Bây giờ có thể dùng CLT đã chọn; phép tính kiểm tra giả thiết chứ không chứng minh định lý được giả sử.`),
    ],
    companions: [
      {prompt:b(String.raw`For $X_t=\epsilon_t+2\epsilon_{t-1}$ with IID $N(0,3)$ innovations, find when $\alpha(k)=0$ and compute $\gamma(0),\gamma(1),\Omega$.`,String.raw`Với $X_t=\epsilon_t+2\epsilon_{t-1}$ và innovation IID $N(0,3)$, hãy tìm khi nào $\alpha(k)=0$ và tính $\gamma(0),\gamma(1),\Omega$.`),solution:[
        b(String.raw`Past indices are at most 0 and future indices from k at least $k-1$, so they are disjoint for $k\ge2$.`,String.raw`Chỉ số quá khứ không quá 0 và tương lai từ k ít nhất $k-1$, nên rời nhau khi $k\ge2$.`),
        b(String.raw`For $\theta=2,\sigma^2=3$, $\gamma(0)=15$ and $\gamma(1)=6$.`,String.raw`Với $\theta=2,\sigma^2=3$, $\gamma(0)=15$ và $\gamma(1)=6$.`),
        b(String.raw`Thus $\Omega=15+2(6)=27=3(1+2)^2>0$.`,String.raw`Vậy $\Omega=15+2(6)=27=3(1+2)^2>0$.`),
      ]},
      {prompt:b(String.raw`For $X_t=\epsilon_t-2\epsilon_{t-1}$ with centered IID variance-one noise, calculate the covariance sum and decide whether its limit is degenerate.`,String.raw`Với $X_t=\epsilon_t-2\epsilon_{t-1}$ và nhiễu IID tâm không, phương sai một, hãy tính tổng covariance và xét giới hạn có suy biến không.`),solution:[
        b(String.raw`Here $\theta=-2$, so $\gamma(0)=5$ and $\gamma(\pm1)=-2$.`,String.raw`Ở đây $\theta=-2$, nên $\gamma(0)=5$ và $\gamma(\pm1)=-2$.`),
        b(String.raw`The long-run sum is $\Omega=5+2(-2)=1=(1-2)^2$.`,String.raw`Tổng dài hạn là $\Omega=5+2(-2)=1=(1-2)^2$.`),
        b(String.raw`Because it is positive, the Gaussian limit is nondegenerate if the other CLT assumptions hold.`,String.raw`Vì dương, giới hạn Gaussian không suy biến nếu các giả thiết CLT khác đúng.`),
      ]},
      {prompt:b(String.raw`For the excluded filter $X_t=\epsilon_t-\epsilon_{t-1}$ with IID $N(0,2)$ noise, verify the dependence cutoff and explain its zero long-run variance.`,String.raw`Với bộ lọc bị loại $X_t=\epsilon_t-\epsilon_{t-1}$ và nhiễu IID $N(0,2)$, hãy kiểm tra ngưỡng phụ thuộc và giải thích phương sai dài hạn bằng không.`),solution:[
        b(String.raw`The past uses indices at most 0 and the future from k indices at least $k-1$, disjoint for $k\ge2$.`,String.raw`Quá khứ dùng chỉ số không quá 0, tương lai từ k dùng chỉ số ít nhất $k-1$, rời nhau khi $k\ge2$.`),
        b(String.raw`For $\theta=-1$, $\gamma(0)=4$ and each adjacent covariance is $-2$.`,String.raw`Với $\theta=-1$, $\gamma(0)=4$ và mỗi covariance kề bằng $-2$.`),
        b(String.raw`Then $\Omega=4-2-2=0$; the sum telescopes to $\epsilon_n-\epsilon_0$ and has bounded variance.`,String.raw`Khi đó $\Omega=4-2-2=0$; tổng triệt tiêu thành $\epsilon_n-\epsilon_0$ và có phương sai bị chặn.`),
      ]},
    ],
    reviewNote: 'Checked exact innovation-index separation at k≥2, Gaussian moment availability, finite mixing sum and covariance factorization. Restriction: σ²>0 and θ≠−1 ensure Ω>0; the CLT is assumed.',
    sourceIds: ['o-cmu-mixing'],
  },
  'm2-w076-e5': {
    application: b(String.raw`Pairwise covariance examines second moments; event mixing concerns dependence between sigma-fields. A deterministic relation among three variables can persist even when each pair is uncorrelated.`,String.raw`Covariance từng cặp xem moment bậc hai; event mixing nói về phụ thuộc giữa sigma-field. Quan hệ tất định giữa ba biến có thể tồn tại dù mỗi cặp không tương quan.`),
    formula: b(String.raw`For independent centered Rademacher $U,V$, set $W=UV$. Then $E[UV]=E[UW]=E[VW]=0$, but $UVW=U^2V^2=1$ surely.`,String.raw`Với $U,V$ Rademacher độc lập có tâm không, đặt $W=UV$. Khi đó $E[UV]=E[UW]=E[VW]=0$, nhưng $UVW=U^2V^2=1$ chắc chắn.`),
    steps: [
      b(String.raw`Rademacher symmetry gives $EU=EV=EW=0$ and $U^2=V^2=1$.`,String.raw`Tính đối xứng Rademacher cho $EU=EV=EW=0$ và $U^2=V^2=1$.`),
      b(String.raw`Independence yields $E[UV]=0$; also $UW=V$ and $VW=U$, so the other pair products have zero mean.`,String.raw`Độc lập cho $E[UV]=0$; ngoài ra $UW=V$ và $VW=U$, nên hai tích cặp còn lại có kỳ vọng không.`),
      b(String.raw`Thus all pairwise covariances vanish because the individual means are zero.`,String.raw`Vậy mọi covariance từng cặp bằng không vì kỳ vọng riêng đều bằng không.`),
      b(String.raw`Yet $UVW=1$ surely and W is determined by U,V, proving joint dependence.`,String.raw`Nhưng $UVW=1$ chắc chắn và W được xác định bởi U,V, chứng minh phụ thuộc chung.`),
    ],
    primarySolution: [
      b(String.raw`Since U,V are independent and centered, $E[UV]=0$.`,String.raw`Vì U,V độc lập và có tâm không, $E[UV]=0$.`),
      b(String.raw`The identities $UW=U^2V=V$ and $VW=UV^2=U$ give $E[UW]=E[VW]=0$.`,String.raw`Đồng nhất thức $UW=U^2V=V$ và $VW=UV^2=U$ cho $E[UW]=E[VW]=0$.`),
      b(String.raw`All means are zero, so the three pairwise covariances are zero.`,String.raw`Mọi kỳ vọng bằng không, nên ba covariance từng cặp bằng không.`),
      b(String.raw`The sure relation $UVW=U^2V^2=1$ makes the triple dependent; covariance decay alone cannot rule out such higher-order dependence.`,String.raw`Quan hệ chắc chắn $UVW=U^2V^2=1$ làm bộ ba phụ thuộc; covariance suy giảm riêng không loại trừ phụ thuộc bậc cao này.`),
    ],
    companions: [
      {prompt:b(String.raw`Let A,B be independent standard normal variables and C=AB. Compute pairwise covariances and explain why the triple is dependent.`,String.raw`Cho A,B chuẩn tắc độc lập và C=AB. Hãy tính covariance từng cặp và giải thích vì sao bộ ba phụ thuộc.`),solution:[
        b(String.raw`All means vanish, including $EC=E[A]E[B]=0$.`,String.raw`Mọi kỳ vọng bằng không, kể cả $EC=E[A]E[B]=0$.`),
        b(String.raw`$\operatorname{Cov}(A,B)=0$ and $E[AC]=E[A^2B]=E[A^2]E[B]=0$; similarly $E[BC]=0$.`,String.raw`$\operatorname{Cov}(A,B)=0$ và $E[AC]=E[A^2B]=E[A^2]E[B]=0$; tương tự $E[BC]=0$.`),
        b(String.raw`Hence every pair has zero covariance.`,String.raw`Vì vậy mọi cặp có covariance bằng không.`),
        b(String.raw`But C is exactly the product AB, so the triple is dependent.`,String.raw`Nhưng C đúng bằng tích AB, nên bộ ba phụ thuộc.`),
      ]},
      {prompt:b(String.raw`Choose (R,S) uniformly from the four binary pairs and set T=R xor S. Prove pairwise independence but joint dependence.`,String.raw`Chọn (R,S) đều từ bốn cặp nhị phân rồi đặt T=R xor S. Hãy chứng minh độc lập từng cặp nhưng phụ thuộc chung.`),solution:[
        b(String.raw`Each binary pair has probability 1/4, so R,S are independent fair bits.`,String.raw`Mỗi cặp nhị phân có xác suất 1/4, nên R,S là bit công bằng độc lập.`),
        b(String.raw`T takes values 0,1,1,0 in the four cases, so it too is fair.`,String.raw`T nhận 0,1,1,0 trong bốn trường hợp, nên cũng công bằng.`),
        b(String.raw`Conditioning on R or S leaves the other fair bit, so each pair involving T is independent.`,String.raw`Điều kiện theo R hoặc S vẫn để bit còn lại công bằng, nên từng cặp với T độc lập.`),
        b(String.raw`The deterministic equation $T=R\oplus S$ nevertheless proves triple dependence.`,String.raw`Phương trình tất định $T=R\oplus S$ vẫn chứng minh bộ ba phụ thuộc.`),
      ]},
      {prompt:b(String.raw`Let G,H be independent symmetric centered variables with finite fourth moments; put J=G(H^2−EH^2). Check Cov(G,J) and Cov(H,J), then identify dependence.`,String.raw`Cho G,H độc lập, đối xứng, có tâm không và moment bậc bốn hữu hạn; đặt J=G(H^2−EH^2). Hãy kiểm tra Cov(G,J), Cov(H,J), rồi nhận diện phụ thuộc.`),solution:[
        b(String.raw`The factor $H^2-EH^2$ is centered and independent of G, so $EJ=0$ and $E[GJ]=E[G^2]E[H^2-EH^2]=0$.`,String.raw`Thừa số $H^2-EH^2$ có tâm không và độc lập với G, nên $EJ=0$ và $E[GJ]=E[G^2]E[H^2-EH^2]=0$.`),
        b(String.raw`Also $E[HJ]=E[G]E[H^3-(EH^2)H]=0$ by symmetry and centering.`,String.raw`Ngoài ra $E[HJ]=E[G]E[H^3-(EH^2)H]=0$ do đối xứng và đặt tâm.`),
        b(String.raw`The means vanish, yielding both stated zero covariances.`,String.raw`Các kỳ vọng bằng không, suy ra hai covariance nêu trên bằng không.`),
        b(String.raw`J is a nonconstant function of G,H, so the triple is dependent unless degenerate.`,String.raw`J là hàm không hằng của G,H, nên bộ ba phụ thuộc trừ trường hợp suy biến.`),
      ]},
    ],
    reviewNote: 'Checked all means and pairwise product expectations, then used the sure relation for dependence. Restriction: zero pairwise covariance is not joint independence and does not imply event mixing.',
    sourceIds: ['o-cmu-mixing'],
  },
  'm2-w077-e1': {
    application: b(String.raw`A Bartlett HAC estimate tapers sample autocovariances before summing positive and negative lag contributions. A finite-bandwidth value is an estimate, not automatically the limiting long-run variance.`,String.raw`Ước lượng HAC Bartlett giảm trọng số covariance mẫu trước khi cộng đóng góp lag dương và âm. Giá trị băng thông hữu hạn là ước lượng, không mặc nhiên là phương sai dài hạn giới hạn.`),
    formula: b(String.raw`For bandwidth $b$, $\hat\Omega_b=\hat\gamma_0+2\sum_{h=1}^b(1-h/(b+1))\hat\gamma_h$. The factor two uses $\hat\gamma_{-h}=\hat\gamma_h$ for real data.`,String.raw`Với băng thông $b$, $\hat\Omega_b=\hat\gamma_0+2\sum_{h=1}^b(1-h/(b+1))\hat\gamma_h$. Hệ số hai dùng $\hat\gamma_{-h}=\hat\gamma_h$ với dữ liệu thực.`),
    steps: [
      b(String.raw`At $b=2$, the weights at lags 1 and 2 are $1-1/3=2/3$ and $1-2/3=1/3$.`,String.raw`Với $b=2$, trọng số tại lag 1,2 lần lượt là $1-1/3=2/3$ và $1-2/3=1/3$.`),
      b(String.raw`Multiply the covariances by their weights: $(2/3)(0.5)=1/3$ and $(1/3)(0.25)=1/12$.`,String.raw`Nhân covariance với trọng số: $(2/3)(0.5)=1/3$ và $(1/3)(0.25)=1/12$.`),
      b(String.raw`Add both signed lags and $\hat\gamma_0$: $2+2(1/3+1/12)=17/6$.`,String.raw`Cộng hai lag có dấu và $\hat\gamma_0$: $2+2(1/3+1/12)=17/6$.`),
      b(String.raw`Thus $\hat\Omega_2\approx2.8333$; label this finite-bandwidth estimate.`,String.raw`Vậy $\hat\Omega_2\approx2.8333$; hãy ghi đây là ước lượng băng thông hữu hạn.`),
    ],
    primarySolution: [
      b(String.raw`Use $w_1=1-1/(2+1)=2/3$ and $w_2=1-2/(2+1)=1/3$.`,String.raw`Dùng $w_1=1-1/(2+1)=2/3$ và $w_2=1-2/(2+1)=1/3$.`),
      b(String.raw`The weighted positive-lag sum is $(2/3)(0.5)+(1/3)(0.25)=1/3+1/12=5/12$.`,String.raw`Tổng lag dương có trọng số là $(2/3)(0.5)+(1/3)(0.25)=1/3+1/12=5/12$.`),
      b(String.raw`Include both signs: $\hat\Omega_2=2+2(5/12)=17/6$.`,String.raw`Tính cả hai dấu: $\hat\Omega_2=2+2(5/12)=17/6$.`),
      b(String.raw`Numerically this is $2.8333\ldots$, a finite-bandwidth sample estimate rather than an asymptotic limit.`,String.raw`Giá trị là $2.8333\ldots$, một ước lượng mẫu băng thông hữu hạn chứ không phải giới hạn tiệm cận.`),
    ],
    companions: [
      {prompt:b(String.raw`Given $\hat\gamma_0=3,\hat\gamma_1=-0.25,\hat\gamma_2=0.5$ and $b=2$, compute the Bartlett estimate exactly.`,String.raw`Cho $\hat\gamma_0=3,\hat\gamma_1=-0.25,\hat\gamma_2=0.5$ và $b=2$, hãy tính chính xác ước lượng Bartlett.`),solution:[
        b(String.raw`The lag weights are $2/3$ and $1/3$.`,String.raw`Trọng số lag là $2/3$ và $1/3$.`),
        b(String.raw`Their weighted sum is $(2/3)(-1/4)+(1/3)(1/2)=-1/6+1/6=0$.`,String.raw`Tổng có trọng số là $(2/3)(-1/4)+(1/3)(1/2)=-1/6+1/6=0$.`),
        b(String.raw`Including both signs gives $\hat\Omega_2=3+2(0)=3$.`,String.raw`Tính cả hai dấu cho $\hat\Omega_2=3+2(0)=3$.`),
      ]},
      {prompt:b(String.raw`For $\hat\gamma_0=1,\hat\gamma_1=-0.2,\hat\gamma_2=0.1$ with $b=2$, compute the tapered estimate and show the lag terms cancel.`,String.raw`Với $\hat\gamma_0=1,\hat\gamma_1=-0.2,\hat\gamma_2=0.1$, $b=2$, hãy tính ước lượng taper và chỉ ra các số hạng lag triệt tiêu.`),solution:[
        b(String.raw`The Bartlett weights are $2/3$ and $1/3$.`,String.raw`Trọng số Bartlett là $2/3$ và $1/3$.`),
        b(String.raw`The weighted sum is $(2/3)(-0.2)+(1/3)(0.1)=-2/15+1/30=-3/30=-1/10$.`,String.raw`Tổng có trọng số là $(2/3)(-0.2)+(1/3)(0.1)=-2/15+1/30=-3/30=-1/10$.`),
        b(String.raw`Then $\hat\Omega_2=1+2(-1/10)=4/5=0.8$.`,String.raw`Khi đó $\hat\Omega_2=1+2(-1/10)=4/5=0.8$.`),
      ]},
      {prompt:b(String.raw`Let $\hat\gamma_0=4,\hat\gamma_1=1,\hat\gamma_2=-0.5$ and use $b=2$. Compute the estimate and explain why the negative lag covariance remains present.`,String.raw`Cho $\hat\gamma_0=4,\hat\gamma_1=1,\hat\gamma_2=-0.5$ và $b=2$. Hãy tính ước lượng và giải thích vì sao covariance lag âm vẫn được giữ.`),solution:[
        b(String.raw`The two weights are $2/3$ and $1/3$.`,String.raw`Hai trọng số là $2/3$ và $1/3$.`),
        b(String.raw`The positive-lag weighted sum is $2/3-1/6=1/2$.`,String.raw`Tổng lag dương có trọng số là $2/3-1/6=1/2$.`),
        b(String.raw`Thus $\hat\Omega_2=4+2(1/2)=5$. The lag-two covariance is tapered, not deleted.`,String.raw`Vậy $\hat\Omega_2=4+2(1/2)=5$. Covariance lag hai được giảm trọng số chứ không bị bỏ.`),
      ]},
    ],
    reviewNote: 'Recomputed Bartlett weights, lag-pair factor two, exact fraction 17/6 and final rounding. Restriction: this is the finite-bandwidth estimate; it is not identified with Ω without asymptotic assumptions.',
    sourceIds: ['o-neweywest'],
  },
  'm2-w077-e2': {
    application: b(String.raw`Bartlett positive semidefiniteness follows from an average of squared moving sums. This constructive identity checks both the lag taper and the normalization.`,String.raw`Tính bán xác định dương Bartlett theo từ trung bình bình phương các tổng trượt. Đồng nhất thức dựng được này kiểm tra cả taper theo lag và hệ số chuẩn hóa.`),
    formula: b(String.raw`Zero-pad $u_t$ and define $\hat\gamma_h=n^{-1}\sum_tu_tu_{t-h}$, $B_s=\sum_{j=0}^bu_{s-j}$ for $1\le s\le n+b$. Then $\hat\Omega_b=\sum_{h=-b}^b(1-|h|/(b+1))\hat\gamma_h=\sum_{s=1}^{n+b}B_s^2/[n(b+1)]\ge0$.`,String.raw`Đệm không cho $u_t$, đặt $\hat\gamma_h=n^{-1}\sum_tu_tu_{t-h}$, $B_s=\sum_{j=0}^bu_{s-j}$ với $1\le s\le n+b$. Khi đó $\hat\Omega_b=\sum_{h=-b}^b(1-|h|/(b+1))\hat\gamma_h=\sum_{s=1}^{n+b}B_s^2/[n(b+1)]\ge0$.`),
    steps: [
      b(String.raw`Zero-padding lets every finite sum be written over all integer t without boundary terms.`,String.raw`Đệm không cho phép viết mọi tổng hữu hạn qua mọi t nguyên mà không tạo số hạng biên.`),
      b(String.raw`Expand $\sum_sB_s^2=\sum_s\sum_{j,k=0}^bu_{s-j}u_{s-k}$ and group terms by lag $h=j-k$.`,String.raw`Khai triển $\sum_sB_s^2=\sum_s\sum_{j,k=0}^bu_{s-j}u_{s-k}$ rồi gom theo lag $h=j-k$.`),
      b(String.raw`For fixed h with $|h|\le b$, there are exactly $b+1-|h|$ pairs $(j,k)$. Reindexing s gives $n\hat\gamma_h$ per pair, using symmetry of the real zero-padded autocovariance.`,String.raw`Với h cố định, $|h|\le b$, có đúng $b+1-|h|$ cặp $(j,k)$. Đổi chỉ số s cho $n\hat\gamma_h$ mỗi cặp, dùng tính đối xứng của autocovariance thực đã đệm không.`),
      b(String.raw`Therefore $\sum_sB_s^2=n\sum_{h=-b}^b(b+1-|h|)\hat\gamma_h$. Divide by $n(b+1)$ to recover the Bartlett weights and nonnegative squares.`,String.raw`Vì vậy $\sum_sB_s^2=n\sum_{h=-b}^b(b+1-|h|)\hat\gamma_h$. Chia cho $n(b+1)$ thu lại trọng số Bartlett và tổng bình phương không âm.`),
    ],
    primarySolution: [
      b(String.raw`Expand each window product; grouping by $h=j-k$ places all terms with the same observation lag together.`,String.raw`Khai triển tích cửa sổ; gom theo $h=j-k$ đặt các số hạng cùng lag quan sát cạnh nhau.`),
      b(String.raw`There are $b+1-|h|$ window-index pairs at lag h for $|h|\le b$, and zero pairs outside that range.`,String.raw`Có $b+1-|h|$ cặp chỉ số cửa sổ tại lag h nếu $|h|\le b$, và không có cặp ngoài phạm vi đó.`),
      b(String.raw`For each pair the padded sum over s reindexes to $n\hat\gamma_h$ (positive and negative lags agree for real data).`,String.raw`Với mỗi cặp, tổng s sau đổi chỉ số thành $n\hat\gamma_h$ (lag dương và âm bằng nhau với dữ liệu thực).`),
      b(String.raw`Thus $\sum_sB_s^2=n\sum_h(b+1-|h|)\hat\gamma_h$. The divisor is $n(b+1)$, yielding the requested Bartlett estimator as a sum of squares over $n(b+1)$.`,String.raw`Do đó $\sum_sB_s^2=n\sum_h(b+1-|h|)\hat\gamma_h$. Mẫu số là $n(b+1)$, cho ước lượng Bartlett cần tìm dưới dạng tổng bình phương chia $n(b+1)$.`),
    ],
    companions: [
      {prompt:b(String.raw`For $u=(1,-1,2)$, zero padding, and bandwidth $b=1$, compute all moving sums $B_s$ and recover $\hat\Omega_1$ from the square identity.`,String.raw`Với $u=(1,-1,2)$, đệm không và băng thông $b=1$, hãy tính mọi tổng trượt $B_s$ và thu lại $\hat\Omega_1$ từ đồng nhất thức bình phương.`),solution:[
        b(String.raw`For $s=1,\ldots,4$, the two-point sums are $(1,0,1,2)$.`,String.raw`Với $s=1,\ldots,4$, tổng hai điểm là $(1,0,1,2)$.`),
        b(String.raw`Their squared sum is $1+0+1+4=6$.`,String.raw`Tổng bình phương là $1+0+1+4=6$.`),
        b(String.raw`Divide by $n(b+1)=3\cdot2=6$, obtaining $\hat\Omega_1=1\ge0$.`,String.raw`Chia cho $n(b+1)=3\cdot2=6$, được $\hat\Omega_1=1\ge0$.`),
      ]},
      {prompt:b(String.raw`For $u=(1,1,1)$ and $b=2$, compute the five padded three-point sums and use the correct normalization to find the Bartlett estimate.`,String.raw`Với $u=(1,1,1)$ và $b=2$, hãy tính năm tổng ba điểm đã đệm và dùng chuẩn hóa đúng để tìm ước lượng Bartlett.`),solution:[
        b(String.raw`The sums for $s=1,\ldots,5$ are $(1,2,3,2,1)$.`,String.raw`Các tổng với $s=1,\ldots,5$ là $(1,2,3,2,1)$.`),
        b(String.raw`Their squares total $1+4+9+4+1=19$.`,String.raw`Tổng bình phương là $1+4+9+4+1=19$.`),
        b(String.raw`The divisor is $n(b+1)=3\cdot3=9$, so $\hat\Omega_2=19/9\approx2.111$.`,String.raw`Mẫu số là $n(b+1)=3\cdot3=9$, nên $\hat\Omega_2=19/9\approx2.111$.`),
      ]},
      {prompt:b(String.raw`For $n=2,b=1$ and zero-padded $u=(1,2)$, list $B_s$, evaluate the square form, and explain the sign guarantee.`,String.raw`Với $n=2,b=1$ và $u=(1,2)$ đã đệm không, hãy liệt kê $B_s$, tính dạng bình phương và giải thích bảo đảm dấu.`),solution:[
        b(String.raw`The sums for $s=1,2,3$ are $1,3,2$.`,String.raw`Các tổng với $s=1,2,3$ là $1,3,2$.`),
        b(String.raw`The square sum is $1+9+4=14$ and the divisor is $2(2)=4$.`,String.raw`Tổng bình phương là $1+9+4=14$ và mẫu số là $2(2)=4$.`),
        b(String.raw`Hence $\hat\Omega_1=14/4=3.5\ge0$ because it is a positive scaling of squares.`,String.raw`Vậy $\hat\Omega_1=14/4=3.5\ge0$ vì đây là tổng bình phương nhân hệ số dương.`),
      ]},
    ],
    reviewNote: 'Checked zero-padding, lag-pair count b+1−|h|, autocovariance symmetry and especially divisor n(b+1). Restriction: the PSD identity applies to the stated common-window Bartlett estimator, not arbitrary truncation.',
    sourceIds: ['o-neweywest'],
  },
  'm2-w077-e3': {
    application: b(String.raw`Asymptotic linearization transports the score-sum covariance through the estimator's inverse Jacobian. Serial covariance matters because it changes the score's long-run covariance matrix.`,String.raw`Tuyến tính hóa tiệm cận truyền covariance của tổng score qua Jacobian nghịch đảo của ước lượng. Covariance theo thời gian quan trọng vì nó đổi ma trận covariance dài hạn của score.`),
    formula: b(String.raw`If $\sqrt n(\hat\theta-\theta_0)=A^{-1}Z_n+o_p(1)$, $Z_n\Rightarrow N(0,\Omega)$, and A is nonsingular, then $\sqrt n(\hat\theta-\theta_0)\Rightarrow N(0,A^{-1}\Omega A^{-T})$. Replacing A by $\hat A$ additionally requires $\hat A\to_p A$.`,String.raw`Nếu $\sqrt n(\hat\theta-\theta_0)=A^{-1}Z_n+o_p(1)$, $Z_n\Rightarrow N(0,\Omega)$, và A khả nghịch, thì $\sqrt n(\hat\theta-\theta_0)\Rightarrow N(0,A^{-1}\Omega A^{-T})$. Thay A bằng $\hat A$ còn cần $\hat A\to_p A$.`),
    steps: [
      b(String.raw`Name the score-sum limit $Z\sim N(0,\Omega)$.`,String.raw`Đặt giới hạn tổng score là $Z\sim N(0,\Omega)$.`),
      b(String.raw`A linear transform $A^{-1}Z$ has covariance $A^{-1}\Omega(A^{-1})^T$.`,String.raw`Phép biến đổi tuyến tính $A^{-1}Z$ có covariance $A^{-1}\Omega(A^{-1})^T$.`),
      b(String.raw`Keep the order: this is $A^{-1}\Omega A^{-T}$, not a reordered product unless matrices commute.`,String.raw`Giữ đúng thứ tự: biểu thức là $A^{-1}\Omega A^{-T}$, không đổi chỗ ma trận nếu chúng không giao hoán.`),
      b(String.raw`Slutsky absorbs the $o_p(1)$ remainder; an estimated Jacobian needs consistency. IID information substitutes only if its covariance identity matches the serial long-run $\Omega$.`,String.raw`Slutsky hấp thụ phần dư $o_p(1)$; Jacobian ước lượng cần tính nhất quán. Information IID chỉ thay được khi đồng nhất thức covariance của nó khớp $\Omega$ dài hạn có phụ thuộc.`),
    ],
    primarySolution: [
      b(String.raw`Let $Z_n=n^{-1/2}\sum z_t$; the premise says $Z_n\Rightarrow Z$ with $Z\sim N(0,\Omega)$.`,String.raw`Đặt $Z_n=n^{-1/2}\sum z_t$; giả thiết cho $Z_n\Rightarrow Z$, với $Z\sim N(0,\Omega)$.`),
      b(String.raw`The continuous linear map gives $A^{-1}Z_n\Rightarrow A^{-1}Z$.`,String.raw`Ánh xạ tuyến tính liên tục cho $A^{-1}Z_n\Rightarrow A^{-1}Z$.`),
      b(String.raw`Its covariance is $A^{-1}\operatorname{Cov}(Z)(A^{-1})^T=A^{-1}\Omega A^{-T}$.`,String.raw`Covariance là $A^{-1}\operatorname{Cov}(Z)(A^{-1})^T=A^{-1}\Omega A^{-T}$.`),
      b(String.raw`Adding the $o_p(1)$ remainder leaves the limit unchanged by Slutsky. If A is estimated, consistency is required; serial dependence is encoded in Ω.`,String.raw`Cộng phần dư $o_p(1)$ không đổi giới hạn theo Slutsky. Nếu ước lượng A, cần tính nhất quán; phụ thuộc thời gian được mã hóa trong Ω.`),
    ],
    companions: [
      {prompt:b(String.raw`For scalar $A=2$ and score long-run variance $\Omega=12$, compute the asymptotic variance of $\sqrt n(\hat\theta-\theta_0)$.`,String.raw`Với $A=2$ vô hướng và phương sai dài hạn score $\Omega=12$, hãy tính phương sai tiệm cận của $\sqrt n(\hat\theta-\theta_0)$.`),solution:[
        b(String.raw`The inverse Jacobian is $A^{-1}=1/2$.`,String.raw`Jacobian nghịch đảo là $A^{-1}=1/2$.`),
        b(String.raw`The sandwich variance is $(1/2)(12)(1/2)$.`,String.raw`Phương sai sandwich là $(1/2)(12)(1/2)$.`),
        b(String.raw`Thus it equals 3.`,String.raw`Vậy kết quả bằng 3.`),
      ]},
      {prompt:b(String.raw`Let $A=\begin{pmatrix}1&1\\0&2\end{pmatrix}$ and $\Omega=I_2$. Compute the sandwich matrix and verify symmetry.`,String.raw`Cho $A=\begin{pmatrix}1&1\\0&2\end{pmatrix}$ và $\Omega=I_2$. Hãy tính ma trận sandwich và kiểm tra tính đối xứng.`),solution:[
        b(String.raw`The inverse is $A^{-1}=\begin{pmatrix}1&-1/2\\0&1/2\end{pmatrix}$.`,String.raw`Ma trận nghịch đảo là $A^{-1}=\begin{pmatrix}1&-1/2\\0&1/2\end{pmatrix}$.`),
        b(String.raw`Because $\Omega=I$, the sandwich is $A^{-1}A^{-T}=\begin{pmatrix}5/4&-1/4\\-1/4&1/4\end{pmatrix}$.`,String.raw`Vì $\Omega=I$, sandwich là $A^{-1}A^{-T}=\begin{pmatrix}5/4&-1/4\\-1/4&1/4\end{pmatrix}$.`),
        b(String.raw`The off-diagonal entries match, as any covariance matrix must be symmetric.`,String.raw`Hai phần tử ngoài đường chéo bằng nhau, đúng như mọi ma trận covariance phải đối xứng.`),
      ]},
      {prompt:b(String.raw`Suppose scores have lag-zero covariance 2 and lag-one covariance 0.5 in both directions, with all other lags zero. For scalar $A=1$, compare the correct sandwich variance with a lag-zero-only substitution.`,String.raw`Giả sử score có covariance lag không bằng 2, covariance lag một bằng 0.5 theo cả hai hướng, các lag khác bằng không. Với $A=1$, hãy so sánh phương sai sandwich đúng với thay thế chỉ dùng lag không.`),solution:[
        b(String.raw`The long-run score variance is $\Omega=2+0.5+0.5=3$.`,String.raw`Phương sai score dài hạn là $\Omega=2+0.5+0.5=3$.`),
        b(String.raw`With $A=1$, the correct sandwich variance is $1^{-1}(3)1^{-1}=3$.`,String.raw`Với $A=1$, phương sai sandwich đúng là $1^{-1}(3)1^{-1}=3$.`),
        b(String.raw`Using only lag zero gives 2 and omits serial covariance, understating the variance here.`,String.raw`Chỉ dùng lag không cho 2, bỏ covariance chuỗi và đánh giá thấp phương sai ở đây.`),
      ]},
    ],
    reviewNote: 'Checked covariance transformation order, nonsingularity of A, Slutsky remainder, and consistency needed for estimated A. Restriction: IID information is valid only when its covariance identity matches Ω.',
    sourceIds: ['o-neweywest'],
  },
  'm2-w077-e4': {
    application: b(String.raw`Overlapping multi-step forecast targets can couple loss differences across adjacent origins. Pairing preserves the comparison at each origin but does not make the time series independent.`,String.raw`Mục tiêu dự báo nhiều bước chồng lấn có thể nối kết chênh lệch tổn thất giữa các thời điểm dự báo liền nhau. Ghép cặp giữ so sánh cùng thời điểm nhưng không làm chuỗi độc lập.`),
    formula: b(String.raw`For h-step targets, origins separated by $k<h$ share $h-k$ returns. Estimate uncertainty for the paired series $d_t=\ell_{A,t}-\ell_{B,t}$ using HAC or blocks under appropriate stationarity and weak-dependence conditions.`,String.raw`Với mục tiêu h bước, hai thời điểm cách nhau $k<h$ chia sẻ $h-k$ lợi suất. Ước lượng bất định cho chuỗi ghép cặp $d_t=\ell_{A,t}-\ell_{B,t}$ bằng HAC hoặc block dưới điều kiện dừng và phụ thuộc yếu phù hợp.`),
    steps: [
      b(String.raw`Write the target windows for origins t and t+k: $[t+1,t+h]$ and $[t+k+1,t+k+h]$.`,String.raw`Viết cửa sổ mục tiêu tại thời điểm t và t+k: $[t+1,t+h]$ và $[t+k+1,t+k+h]$.`),
      b(String.raw`For $1\le k<h$, their intersection contains $h-k$ returns; overlapping inputs may therefore induce dependence through lag h−1.`,String.raw`Với $1\le k<h$, giao của chúng có $h-k$ lợi suất; dữ liệu chồng lấn do đó có thể gây phụ thuộc đến lag h−1.`),
      b(String.raw`Form the matched-origin difference $d_t$ before estimating its mean and long-run variance.`,String.raw`Tạo chênh lệch $d_t$ tại từng thời điểm ghép cặp trước khi ước lượng trung bình và phương sai dài hạn.`),
      b(String.raw`Use HAC with bandwidth covering overlap and suitable asymptotics, or a block method with justified stationarity/dependence assumptions. Overlap can induce, but does not logically force, nonzero covariance.`,String.raw`Dùng HAC có băng thông bao phủ phần chồng lấn và tiệm cận phù hợp, hoặc block với giả thiết dừng/phụ thuộc có căn cứ. Chồng lấn có thể gây, nhưng không tất yếu tạo, covariance khác không.`),
    ],
    primarySolution: [
      b(String.raw`At origin t the h-day target uses returns $t+1,\ldots,t+h$; at t+k it uses $t+k+1,\ldots,t+k+h$.`,String.raw`Tại thời điểm t, mục tiêu h ngày dùng lợi suất $t+1,\ldots,t+h$; tại t+k dùng $t+k+1,\ldots,t+k+h$.`),
      b(String.raw`For $k=1,\ldots,h-1$, the shared segment has $h-k$ returns, so losses may be serially dependent through at least lag h−1.`,String.raw`Với $k=1,\ldots,h-1$, đoạn chung có $h-k$ lợi suất, nên tổn thất có thể phụ thuộc chuỗi đến ít nhất lag h−1.`),
      b(String.raw`Pair by forecast origin and analyze $d_t=\ell_{A,t}-\ell_{B,t}$, preserving the intended estimand $E[d_t]$.`,String.raw`Ghép theo thời điểm dự báo rồi phân tích $d_t=\ell_{A,t}-\ell_{B,t}$, giữ đúng estimand $E[d_t]$.`),
      b(String.raw`A HAC estimator with justified bandwidth or a valid block method can estimate uncertainty under stated dependence assumptions. Paired dates are not IID evidence.`,String.raw`Ước lượng HAC với băng thông có căn cứ hoặc phương pháp block hợp lệ có thể ước lượng bất định dưới giả thiết phụ thuộc đã nêu. Các thời điểm ghép cặp không phải bằng chứng IID.`),
    ],
    companions: [
      {prompt:b(String.raw`For 4-step forecasts, count shared returns for origin pairs at lags $k=1,2,3$. Which minimum bandwidth covers these overlap lags?`,String.raw`Với dự báo 4 bước, hãy đếm lợi suất chung cho các cặp thời điểm có lag $k=1,2,3$. Băng thông tối thiểu nào bao phủ các lag chồng lấn này?`),solution:[
        b(String.raw`The target windows each contain four returns.`,String.raw`Mỗi cửa sổ mục tiêu có bốn lợi suất.`),
        b(String.raw`The intersections have $4-k$ returns: 3 at k=1, 2 at k=2, and 1 at k=3.`,String.raw`Giao nhau có $4-k$ lợi suất: 3 tại k=1, 2 tại k=2 và 1 tại k=3.`),
        b(String.raw`Thus overlap can extend through lag 3, so bandwidth should include at least lag 3 before any additional dependence considerations.`,String.raw`Vì vậy chồng lấn có thể kéo dài đến lag 3; băng thông nên bao gồm ít nhất lag 3 trước khi xét phụ thuộc khác.`),
      ]},
      {prompt:b(String.raw`At three matched origins losses are $A=(2,5,1)$ and $B=(3,4,4)$. Form the paired series, its mean contrast, and state what uncertainty procedure estimates.`,String.raw`Tại ba thời điểm ghép cặp, tổn thất $A=(2,5,1)$ và $B=(3,4,4)$. Hãy tạo chuỗi paired, chênh lệch trung bình và nêu thủ tục bất định ước lượng gì.`),solution:[
        b(String.raw`Subtract B from A origin by origin to get $d=(-1,1,-3)$.`,String.raw`Trừ B khỏi A theo từng thời điểm được $d=(-1,1,-3)$.`),
        b(String.raw`The sample mean is $(-1+1-3)/3=-1$.`,String.raw`Trung bình mẫu là $(-1+1-3)/3=-1$.`),
        b(String.raw`A dependence-aware HAC or block interval targets uncertainty in the time-series mean contrast $E[d_t]$, under its assumptions.`,String.raw`Khoảng HAC hoặc block có xét phụ thuộc nhắm đến bất định của chênh lệch trung bình chuỗi $E[d_t]$, dưới các giả thiết tương ứng.`),
      ]},
      {prompt:b(String.raw`Two 3-step losses have target windows $[1,2,3]$ and $[4,5,6]$ with no overlap. Does this alone prove their losses independent? Explain a safer inference.`,String.raw`Hai tổn thất dự báo 3 bước có cửa sổ mục tiêu $[1,2,3]$ và $[4,5,6]$ không chồng lấn. Riêng điều này có chứng minh tổn thất độc lập không? Hãy nêu suy luận an toàn hơn.`),solution:[
        b(String.raw`The targets are disjoint, so this particular overlap mechanism does not link the observations.`,String.raw`Mục tiêu rời nhau, nên cơ chế chồng lấn cụ thể này không nối các quan sát.`),
        b(String.raw`But losses may still share predictors, fitted parameters, latent shocks, or other serially dependent inputs.`,String.raw`Nhưng tổn thất vẫn có thể chung biến dự báo, tham số đã khớp, cú sốc ẩn hay đầu vào phụ thuộc thời gian khác.`),
        b(String.raw`Therefore disjoint targets do not prove independence; assess the dependence structure of the full forecast-and-loss process.`,String.raw`Vì vậy mục tiêu rời nhau không chứng minh độc lập; cần đánh giá cấu trúc phụ thuộc của toàn quá trình dự báo và tổn thất.`),
      ]},
    ],
    reviewNote: 'Counted target-window intersections and retained the A−B matched-origin estimand. Restriction: overlap permits serial dependence but is not sufficient to prove nonzero covariance; HAC/block validity needs process assumptions.',
    sourceIds: ['o-neweywest'],
  },
  'm2-w077-e5': {
    application: b(String.raw`An unweighted covariance truncation can be negative even when its terms look like a variance sum. Bartlett tapering has a PSD construction that an arbitrary lag window lacks.`,String.raw`Cắt covariance không trọng số có thể âm dù trông như tổng phương sai. Taper Bartlett có cấu trúc bán xác định dương mà cửa sổ lag tùy ý không có.`),
    formula: b(String.raw`Raw lag-one truncation is $\hat\gamma_0+2\hat\gamma_1$. Bartlett with $b=1$ is $\hat\gamma_0+2(1/2)\hat\gamma_1$, nonnegative by the moving-window square identity.`,String.raw`Cắt lag một thô là $\hat\gamma_0+2\hat\gamma_1$. Bartlett với $b=1$ là $\hat\gamma_0+2(1/2)\hat\gamma_1$, không âm nhờ đồng nhất thức tổng cửa sổ bình phương.`),
    steps: [
      b(String.raw`The raw truncation assigns unit weight to lag one and its negative-lag counterpart.`,String.raw`Cắt thô gán trọng số một cho lag một và lag âm đối xứng.`),
      b(String.raw`Substitute the supplied values: $1+2(-0.8)=-0.6$.`,String.raw`Thế dữ liệu đã cho: $1+2(-0.8)=-0.6$.`),
      b(String.raw`For Bartlett $b=1$, the lag-one weight is $1-1/2=1/2$.`,String.raw`Với Bartlett $b=1$, trọng số lag một là $1-1/2=1/2$.`),
      b(String.raw`The tapered result is $1+2(1/2)(-0.8)=0.2\ge0$; PSD comes from the window construction, not arbitrary truncation.`,String.raw`Kết quả taper là $1+2(1/2)(-0.8)=0.2\ge0$; tính PSD theo từ cấu trúc cửa sổ, không phải cắt tùy ý.`),
    ],
    primarySolution: [
      b(String.raw`The raw estimate is $\hat\gamma_0+2\hat\gamma_1$.`,String.raw`Ước lượng thô là $\hat\gamma_0+2\hat\gamma_1$.`),
      b(String.raw`Numerically it is $1+2(-0.8)= -0.6$, an impossible negative variance estimate.`,String.raw`Thay số được $1+2(-0.8)=-0.6$, một ước lượng phương sai âm bất khả thi.`),
      b(String.raw`Bartlett uses weight $1-1/(1+1)=1/2$ at lag one.`,String.raw`Bartlett dùng trọng số $1-1/(1+1)=1/2$ tại lag một.`),
      b(String.raw`Then $\hat\Omega_1=1+2(1/2)(-0.8)=0.2$. Its nonnegativity follows from positive-definite Bartlett window weights.`,String.raw`Khi đó $\hat\Omega_1=1+2(1/2)(-0.8)=0.2$. Tính không âm theo từ trọng số cửa sổ Bartlett xác định dương.`),
    ],
    companions: [
      {prompt:b(String.raw`With $\hat\gamma_0=1,\hat\gamma_1=-0.6$, compare the raw truncation and Bartlett $b=1$ estimate.`,String.raw`Với $\hat\gamma_0=1,\hat\gamma_1=-0.6$, hãy so sánh cắt thô và ước lượng Bartlett $b=1$.`),solution:[
        b(String.raw`The raw value is $1+2(-0.6)=-0.2$.`,String.raw`Giá trị thô là $1+2(-0.6)=-0.2$.`),
        b(String.raw`Bartlett halves the lag-one weight, giving $1+2(1/2)(-0.6)$.`,String.raw`Bartlett giảm một nửa trọng số lag một, cho $1+2(1/2)(-0.6)$.`),
        b(String.raw`The tapered result is $0.4\ge0$, whereas raw truncation is negative.`,String.raw`Kết quả taper là $0.4\ge0$, trong khi cắt thô âm.`),
      ]},
      {prompt:b(String.raw`Let $\hat\gamma_0=2,\hat\gamma_1=-1.2$. Compute both lag-one estimates and explain why PSD is a structural guarantee.`,String.raw`Cho $\hat\gamma_0=2,\hat\gamma_1=-1.2$. Hãy tính hai ước lượng lag một và giải thích vì sao PSD là bảo đảm cấu trúc.`),solution:[
        b(String.raw`Raw truncation is $2+2(-1.2)=-0.4$.`,String.raw`Cắt thô là $2+2(-1.2)=-0.4$.`),
        b(String.raw`Bartlett $b=1$ gives $2+2(1/2)(-1.2)=0.8$.`,String.raw`Bartlett $b=1$ cho $2+2(1/2)(-1.2)=0.8$.`),
        b(String.raw`The Bartlett quadratic-form identity makes the estimate a sum of squares divided by a positive constant; raw truncation has no such representation.`,String.raw`Đồng nhất thức dạng toàn phương Bartlett làm ước lượng thành tổng bình phương chia hằng số dương; cắt thô không có biểu diễn đó.`),
      ]},
      {prompt:b(String.raw`For $\hat\gamma_0=0.5,\hat\gamma_1=-0.4$, find the raw value and the tapered value, then explain which one has a universal PSD argument.`,String.raw`Với $\hat\gamma_0=0.5,\hat\gamma_1=-0.4$, hãy tìm giá trị thô và giá trị taper, rồi giải thích giá trị nào có lập luận PSD tổng quát.`),solution:[
        b(String.raw`Raw truncation is $0.5+2(-0.4)=-0.3$.`,String.raw`Cắt thô là $0.5+2(-0.4)=-0.3$.`),
        b(String.raw`Bartlett gives $0.5+2(1/2)(-0.4)=0.1$.`,String.raw`Bartlett cho $0.5+2(1/2)(-0.4)=0.1$.`),
        b(String.raw`The Bartlett value is PSD by its positive-window quadratic identity; this does not make every possible covariance truncation nonnegative.`,String.raw`Giá trị Bartlett PSD nhờ đồng nhất thức toàn phương cửa sổ dương; điều đó không làm mọi kiểu cắt covariance đều không âm.`),
      ]},
    ],
    reviewNote: 'Recomputed raw −0.6 and Bartlett 0.2 with the b=1 weight 1/2. Restriction: nonnegativity follows from Bartlett’s quadratic-form construction and does not generalize to arbitrary truncation.',
    sourceIds: ['o-neweywest'],
  },
  'm2-w078-e1': {
    application: b(String.raw`A moving-block replicate preserves observed ordering inside each sampled block. Joins between sampled blocks are artificial, so only local within-block adjacency is retained.`,String.raw`Mẫu bootstrap block trượt giữ thứ tự quan sát bên trong block được lấy. Mối nối giữa các block là nhân tạo, nên chỉ quan hệ kề cục bộ trong block được giữ.`),
    formula: b(String.raw`For series $x_1,\ldots,x_n$ and block length b, a block starting at j is $(x_j,\ldots,x_{j+b-1})$. Concatenate the listed blocks in order; with $k=\lfloor n/b\rfloor$, replicate length is kb and its mean divides by kb.`,String.raw`Với chuỗi $x_1,\ldots,x_n$ và độ dài block b, block bắt đầu tại j là $(x_j,\ldots,x_{j+b-1})$. Ghép các block theo thứ tự đã nêu; với $k=\lfloor n/b\rfloor$, độ dài mẫu là kb và trung bình chia cho kb.`),
    steps: [
      b(String.raw`Read starts 1, 3 and 5 using 1-based indexing.`,String.raw`Đọc điểm đầu 1, 3, 5 theo chỉ số bắt đầu từ 1.`),
      b(String.raw`Taking two consecutive observations gives blocks $(2,3)$, $(8,9)$ and $(4,5)$.`,String.raw`Lấy hai quan sát liên tiếp cho các block $(2,3)$, $(8,9)$ và $(4,5)$.`),
      b(String.raw`Their concatenation has six entries, so it meets the requested replicate length.`,String.raw`Ghép lại có sáu phần tử, đúng độ dài mẫu yêu cầu.`),
      b(String.raw`The sum is 31 and the mean is $31/6\approx5.167$. Within-block pairs are retained; the joins 3-to-8 and 9-to-4 need not be original neighbors.`,String.raw`Tổng là 31 và trung bình $31/6\approx5.167$. Các cặp trong block được giữ; mối nối 3–8 và 9–4 không cần là láng giềng ban đầu.`),
    ],
    primarySolution: [
      b(String.raw`Start 1 yields $(2,3)$; start 3 yields $(8,9)$; start 5 yields $(4,5)$.`,String.raw`Bắt đầu 1 cho $(2,3)$; bắt đầu 3 cho $(8,9)$; bắt đầu 5 cho $(4,5)$.`),
      b(String.raw`Concatenating in the stated order gives $(2,3,8,9,4,5)$, six observations as required.`,String.raw`Ghép theo thứ tự cho $(2,3,8,9,4,5)$, đủ sáu quan sát.`),
      b(String.raw`The sum is $31$, hence the replicate mean is $31/6\approx5.167$.`,String.raw`Tổng bằng $31$, nên trung bình mẫu là $31/6\approx5.167$.`),
      b(String.raw`Each original adjacent pair inside a block remains intact; adjacency across the two sampled joins is artificial.`,String.raw`Mỗi cặp kề ban đầu trong block được giữ nguyên; quan hệ kề tại hai mối nối lấy mẫu là nhân tạo.`),
    ],
    companions: [
      {prompt:b(String.raw`For $x=(0,5,1,8,2,9)$, block length 2 and starts 2, 4, 5, construct the length-6 replicate and its mean.`,String.raw`Với $x=(0,5,1,8,2,9)$, độ dài block 2 và các điểm đầu 2, 4, 5, hãy dựng mẫu dài 6 và tính trung bình.`),solution:[
        b(String.raw`The blocks are $(5,1)$, $(8,2)$ and $(2,9)$.`,String.raw`Các block là $(5,1)$, $(8,2)$ và $(2,9)$.`),
        b(String.raw`Concatenation gives $(5,1,8,2,2,9)$, with six observations.`,String.raw`Ghép lại được $(5,1,8,2,2,9)$, gồm sáu quan sát.`),
        b(String.raw`Its sum is 27, so its mean is $27/6=4.5$.`,String.raw`Tổng là 27, nên trung bình bằng $27/6=4.5$.`),
      ]},
      {prompt:b(String.raw`For $x=(3,7,4,10,6,1)$, use block length 3 and starts 1 and 4. Give the replicate mean and distinguish retained from artificial adjacency.`,String.raw`Với $x=(3,7,4,10,6,1)$, dùng block dài 3 và điểm đầu 1,4. Hãy cho trung bình mẫu và phân biệt quan hệ kề được giữ với quan hệ nhân tạo.`),solution:[
        b(String.raw`The blocks are $(3,7,4)$ and $(10,6,1)$.`,String.raw`Hai block là $(3,7,4)$ và $(10,6,1)$.`),
        b(String.raw`The replicate is $(3,7,4,10,6,1)$, whose sum is 31.`,String.raw`Mẫu bootstrap là $(3,7,4,10,6,1)$, có tổng 31.`),
        b(String.raw`The mean is $31/6$. The two within-block pairs in each block retain order, while the 4-to-10 join is a sampled boundary.`,String.raw`Trung bình là $31/6$. Các cặp bên trong từng block giữ thứ tự, còn mối nối 4–10 là biên lấy mẫu.`),
      ]},
      {prompt:b(String.raw`A series has n=7 and moving-block length b=3; the bootstrap draws k=floor(n/b) blocks. What is the replicate length, and what extra convention would be needed to return n rows?`,String.raw`Chuỗi có n=7, độ dài block b=3; bootstrap lấy k=floor(n/b) block. Mẫu có độ dài bao nhiêu, và cần quy ước gì thêm để trả về n dòng?`),solution:[
        b(String.raw`The number of blocks is $k=\lfloor7/3\rfloor=2$.`,String.raw`Số block là $k=\lfloor7/3\rfloor=2$.`),
        b(String.raw`Concatenation has length $kb=2\cdot3=6$, not 7.`,String.raw`Ghép lại có độ dài $kb=2\cdot3=6$, không phải 7.`),
        b(String.raw`To return seven rows, specify a padding or truncation convention (often take one extra block and truncate); that convention changes the construction.`,String.raw`Để có bảy dòng, cần quy ước đệm hoặc cắt (thường lấy thêm block rồi cắt); quy ước đó làm đổi cách dựng mẫu.`),
      ]},
    ],
    reviewNote: 'Checked 1-based block endpoints, concatenated length and arithmetic mean. Restriction: sampled joins do not preserve the original dependence, and kb need not equal n without an explicit remainder convention.',
    sourceIds: ['o-kunsch'],
  },
  'm2-w078-e2': {
    application: b(String.raw`For bounded stationary finite-dependent data, overlapping block sums estimate long-run variance through Bartlett-weighted covariances. Growing blocks retain dependence, while the rate condition controls fluctuations across the many overlapping blocks.`,String.raw`Với dữ liệu dừng, bị chặn và phụ thuộc hữu hạn, tổng block chồng lấn ước lượng phương sai dài hạn qua covariance có trọng số Bartlett. Block tăng dần giữ phụ thuộc, còn điều kiện tốc độ kiểm soát dao động giữa các block chồng lấn.`),
    formula: b(String.raw`Let $N=n-b+1$, $S_j=\sum_{t=j}^{j+b-1}Z_t$, $A_n=(Nb)^{-1}\sum_{j=1}^N S_j^2$, and $M_n=(Nb)^{-1}\sum_jS_j$. For centered bounded stationary m-dependent $Z_t$, $EA_n=\sum_{|h|<b}(1-|h|/b)\gamma(h)\to\Omega$, $\operatorname{Var}(A_n)=O(b^3/n)$, and $bM_n^2=o_p(1)$ if $b\to\infty,b^3/n\to0$.`,String.raw`Đặt $N=n-b+1$, $S_j=\sum_{t=j}^{j+b-1}Z_t$, $A_n=(Nb)^{-1}\sum_{j=1}^N S_j^2$, $M_n=(Nb)^{-1}\sum_jS_j$. Với $Z_t$ dừng, có tâm, bị chặn, phụ thuộc m hữu hạn, $EA_n=\sum_{|h|<b}(1-|h|/b)\gamma(h)\to\Omega$, $\operatorname{Var}(A_n)=O(b^3/n)$ và $bM_n^2=o_p(1)$ nếu $b\to\infty,b^3/n\to0$.`),
    steps: [
      b(String.raw`Stationarity expands $E S_1^2/b$ into $\sum_{|h|<b}(1-|h|/b)\gamma(h)$. Fixed m-dependence makes $\gamma(h)=0$ for $|h|>m$, so as b grows this tends to $\Omega$.`,String.raw`Tính dừng khai triển $E S_1^2/b$ thành $\sum_{|h|<b}(1-|h|/b)\gamma(h)$. Phụ thuộc m cố định làm $\gamma(h)=0$ khi $|h|>m$, nên tổng tiến đến $\Omega$ khi b tăng.`),
      b(String.raw`Since $|Z_t|\le B$, each $S_j^2$ is bounded by $b^2B^2$. Two block squares are independent when their starts are farther apart than $b+m$, leaving $O(N(b+m))$ potentially nonzero covariance pairs.`,String.raw`Vì $|Z_t|\le B$, mỗi $S_j^2$ bị chặn bởi $b^2B^2$. Hai bình phương block độc lập khi điểm đầu cách nhau quá $b+m$, nên chỉ còn $O(N(b+m))$ cặp covariance có thể khác không.`),
      b(String.raw`Each remaining covariance is $O(b^4)$; dividing the total by $N^2b^2$ gives $\operatorname{Var}(A_n)=O((b+m)b^2/n)=O(b^3/n)$ for fixed m and growing b.`,String.raw`Mỗi covariance còn lại là $O(b^4)$; chia tổng cho $N^2b^2$ cho $\operatorname{Var}(A_n)=O((b+m)b^2/n)=O(b^3/n)$ với m cố định và b tăng.`),
      b(String.raw`Chebyshev then gives $A_n-EA_n\to_p0$. Edge multiplicities imply $M_n=\bar Z_n+O(b/n)$; with $\bar Z_n=O_p(n^{-1/2})$, $(a+c)^2\le2a^2+2c^2$ gives $bM_n^2=o_p(1)$.`,String.raw`Chebyshev cho $A_n-EA_n\to_p0$. Đếm biên cho $M_n=\bar Z_n+O(b/n)$; với $\bar Z_n=O_p(n^{-1/2})$, $(a+c)^2\le2a^2+2c^2$ suy ra $bM_n^2=o_p(1)$.`),
      b(String.raw`Also $\sqrt{kb}|M_n-\bar Z_n|=O(b/\sqrt n)=o(1)$, since $kb\asymp n$ and $b^3/n\to0$.`,String.raw`Ngoài ra $\sqrt{kb}|M_n-\bar Z_n|=O(b/\sqrt n)=o(1)$ vì $kb\asymp n$ và $b^3/n\to0$.`),
      b(String.raw`Conditionally, $\operatorname{Var}_*(\sqrt{kb}(\bar Z^*-\bar Z_n))=A_n-bM_n^2\to_p\Omega$. The theorem's distributional bootstrap limit needs all its hypotheses; this variance calculation alone is not a CLT proof.`,String.raw`Có điều kiện theo mẫu, $\operatorname{Var}_*(\sqrt{kb}(\bar Z^*-\bar Z_n))=A_n-bM_n^2\to_p\Omega$. Giới hạn phân phối bootstrap cần đủ giả thiết định lý; riêng phép tính phương sai này không chứng minh CLT.`),
    ],
    primarySolution: [
      b(String.raw`For a block $S_j$, expand its squared sum and count $b-|h|$ pairs at lag h. Then $E S_j^2/b=\sum_{|h|<b}(1-|h|/b)\gamma(h)\to\Omega$ because only $|h|\le m$ covariances survive.`,String.raw`Với block $S_j$, khai triển bình phương và đếm $b-|h|$ cặp tại lag h. Khi đó $E S_j^2/b=\sum_{|h|<b}(1-|h|/b)\gamma(h)\to\Omega$ vì chỉ covariance $|h|\le m$ còn lại.`),
      b(String.raw`For $A_n$, each squared block is $O(b^2)$ and only $O(N(b+m))$ block pairs can covary; each covariance is $O(b^4)$. Hence $\operatorname{Var}(A_n)=O(b^3/n)\to0$.`,String.raw`Với $A_n$, mỗi bình phương block là $O(b^2)$ và chỉ $O(N(b+m))$ cặp block có thể covariance; mỗi covariance là $O(b^4)$. Do đó $\operatorname{Var}(A_n)=O(b^3/n)\to0$.`),
      b(String.raw`Edge-counting gives $M_n=\bar Z_n+O(b/n)$. Since $\bar Z_n=O_p(n^{-1/2})$, $(a+c)^2\le2a^2+2c^2$ yields $bM_n^2=O_p(b/n)+O(b^3/n^2)=o_p(1)$.`,String.raw`Đếm biên cho $M_n=\bar Z_n+O(b/n)$. Vì $\bar Z_n=O_p(n^{-1/2})$, $(a+c)^2\le2a^2+2c^2$ cho $bM_n^2=O_p(b/n)+O(b^3/n^2)=o_p(1)$.`),
      b(String.raw`Also $\sqrt{kb}|M_n-\bar Z_n|=O(b/\sqrt n)=o(1)$, since $kb\asymp n$ and $b^3/n\to0$.`,String.raw`Ngoài ra $\sqrt{kb}|M_n-\bar Z_n|=O(b/\sqrt n)=o(1)$ vì $kb\asymp n$ và $b^3/n\to0$.`),
      b(String.raw`The conditional variance of the resampled mean centered at $\bar Z_n$, scaled by $\sqrt{kb}$, is $A_n-bM_n^2$ and converges in probability to $\Omega$.`,String.raw`Phương sai có điều kiện của trung bình mẫu lại đã trừ $\bar Z_n$, co giãn $\sqrt{kb}$, bằng $A_n-bM_n^2$ và hội tụ theo xác suất đến $\Omega$.`),
      b(String.raw`The dependent-data regime explicitly uses $b\to\infty$ and $b^3/n\to0$. For IID data, b=1 is a separate valid case: the conditional variance is the empirical variance, which converges by LLN.`,String.raw`Chế độ dữ liệu phụ thuộc tường minh cần $b\to\infty$ và $b^3/n\to0$. Với dữ liệu IID, b=1 là trường hợp riêng hợp lệ: phương sai có điều kiện là phương sai thực nghiệm, hội tụ theo LLN.`),
    ],
    companions: [
      {prompt:b(String.raw`For centered stationary m-dependent data with $\gamma(0)=3,\gamma(\pm1)=0.75$ and other lags zero, compute $E[S_1^2/b]$ at $b=2$ and its limit as b grows.`,String.raw`Với dữ liệu dừng, có tâm, phụ thuộc m hữu hạn, $\gamma(0)=3,\gamma(\pm1)=0.75$, các lag khác bằng không, hãy tính $E[S_1^2/b]$ khi $b=2$ và giới hạn khi b tăng.`),solution:[
        b(String.raw`At b=2, the Bartlett factor on each lag-one covariance is $1-1/2=1/2$.`,String.raw`Với b=2, hệ số Bartlett của mỗi covariance lag một là $1-1/2=1/2$.`),
        b(String.raw`Thus $E[S_1^2/b]=3+2(1/2)(0.75)=3.75$.`,String.raw`Vậy $E[S_1^2/b]=3+2(1/2)(0.75)=3.75$.`),
        b(String.raw`As b grows, the lag-one weight tends to one and no other lag contributes, so the limit is $\Omega=3+2(0.75)=4.5$.`,String.raw`Khi b tăng, trọng số lag một tiến đến một và lag khác không góp phần, nên giới hạn $\Omega=3+2(0.75)=4.5$.`),
      ]},
      {prompt:b(String.raw`For IID centered bounded data and block length b=1, identify the conditional variance of $\sqrt n(\bar Z^*-\bar Z)$ and its probability limit.`,String.raw`Với dữ liệu IID có tâm, bị chặn và độ dài block b=1, hãy xác định phương sai có điều kiện của $\sqrt n(\bar Z^*-\bar Z)$ và giới hạn theo xác suất.`),solution:[
        b(String.raw`Length-one resampling draws individual observations IID from the empirical distribution.`,String.raw`Lấy block dài một nghĩa là rút từng quan sát độc lập từ phân phối thực nghiệm.`),
        b(String.raw`The conditional variance of $\sqrt n(\bar Z^*-\bar Z)$ is the empirical variance with denominator n.`,String.raw`Phương sai có điều kiện của $\sqrt n(\bar Z^*-\bar Z)$ là phương sai thực nghiệm mẫu số n.`),
        b(String.raw`The LLN makes this converge in probability to $\operatorname{Var}(Z_t)=\Omega$ for IID data.`,String.raw`LLN làm đại lượng này hội tụ theo xác suất về $\operatorname{Var}(Z_t)=\Omega$ với dữ liệu IID.`),
        b(String.raw`This IID boundary case does not contradict the growing-block condition used for dependent observations.`,String.raw`Trường hợp biên IID này không mâu thuẫn điều kiện block tăng dần dùng cho quan sát phụ thuộc.`),
      ]},
      {prompt:b(String.raw`For $Z_t=\epsilon_t+\epsilon_{t-1}$ with IID centered variance-one noise, compare the true long-run variance with what length-one blocks retain.`,String.raw`Với $Z_t=\epsilon_t+\epsilon_{t-1}$ và nhiễu IID tâm không phương sai một, hãy so sánh phương sai dài hạn thật với phần được giữ bởi block dài một.`),solution:[
        b(String.raw`Here $\gamma(0)=2$ and $\gamma(\pm1)=1$, since adjacent observations share one innovation.`,String.raw`Ở đây $\gamma(0)=2$, $\gamma(\pm1)=1$ vì quan sát liền kề chung một innovation.`),
        b(String.raw`Therefore the long-run variance is $\Omega=2+1+1=4$.`,String.raw`Vì vậy phương sai dài hạn là $\Omega=2+1+1=4$.`),
        b(String.raw`Length-one blocks only see the marginal variance $\gamma(0)=2$, omitting both lag-one terms.`,String.raw`Block dài một chỉ thấy phương sai biên $\gamma(0)=2$, bỏ hai số hạng lag một.`),
        b(String.raw`Fixed block length therefore misses serial covariance here; dependent-data consistency requires growing b under the stated regime.`,String.raw`Vì vậy độ dài block cố định bỏ lỡ covariance chuỗi; tính nhất quán với dữ liệu phụ thuộc cần b tăng theo chế độ đã nêu.`),
      ]},
    ],
    reviewNote: 'Checked Bartlett expectation weights, finite-dependence pair count, O(b³/n) rate, edge-centering order and conditional variance identity. Restriction: theorem assumes bounded stationary m-dependent data and Ω>0; IID b=1 is a separate exception.',
    sourceIds: ['o-kunsch'],
  },
  'm2-w078-e3': {
    application: b(String.raw`Forecast comparison should preserve matched origins by forming the loss difference at each date. Dependence-aware uncertainty targets the mean contrast, not independent evidence or guaranteed future profit.`,String.raw`So sánh dự báo nên giữ ghép cặp cùng thời điểm bằng cách lập chênh lệch tổn thất từng ngày. Bất định có xét phụ thuộc nhắm đến chênh lệch trung bình, không phải bằng chứng độc lập hay lợi nhuận tương lai bảo đảm.`),
    formula: b(String.raw`Define $d_t=\ell_{A,t}-\ell_{B,t}$. The sample contrast is $\bar d=n^{-1}\sum_td_t$; HAC/block uncertainty concerns $E[d_t]$ and its long-run variance under suitable stationarity/dependence assumptions.`,String.raw`Đặt $d_t=\ell_{A,t}-\ell_{B,t}$. Chênh lệch mẫu là $\bar d=n^{-1}\sum_td_t$; bất định HAC/block liên quan đến $E[d_t]$ và phương sai dài hạn dưới giả thiết dừng/phụ thuộc phù hợp.`),
    steps: [
      b(String.raw`Subtract B's loss from A's at each common origin to form d.`,String.raw`Tại mỗi thời điểm chung, lấy tổn thất B trừ khỏi A để tạo d.`),
      b(String.raw`For the supplied vectors, d is $(-1,0,2,-2)$.`,String.raw`Với các vector đã cho, d là $(-1,0,2,-2)$.`),
      b(String.raw`Its sum is -1, so $\bar d=-1/4=-0.25$ under the A−B convention.`,String.raw`Tổng bằng -1, nên $\bar d=-1/4=-0.25$ theo quy ước A−B.`),
      b(String.raw`A dependence-aware interval targets the stationary mean contrast $E[d_t]$; it does not make origins independent or guarantee future performance.`,String.raw`Khoảng có xét phụ thuộc nhắm đến chênh lệch trung bình dừng $E[d_t]$; nó không làm các thời điểm độc lập hay bảo đảm hiệu quả tương lai.`),
    ],
    primarySolution: [
      b(String.raw`Pair observations at each of the four origins and compute $d=A-B=(-1,0,2,-2)$.`,String.raw`Ghép quan sát tại bốn thời điểm rồi tính $d=A-B=(-1,0,2,-2)$.`),
      b(String.raw`The sum of differences is $-1+0+2-2=-1$.`,String.raw`Tổng chênh lệch là $-1+0+2-2=-1$.`),
      b(String.raw`Divide by four to get mean difference $\bar d=-1/4=-0.25$.`,String.raw`Chia cho bốn được chênh lệch trung bình $\bar d=-1/4=-0.25$.`),
      b(String.raw`A HAC or block interval estimates uncertainty in the stationary mean contrast, if its assumptions hold; it is not a future-profit guarantee.`,String.raw`Khoảng HAC hoặc block ước lượng bất định của chênh lệch trung bình dừng nếu giả thiết đúng; nó không bảo đảm lợi nhuận tương lai.`),
    ],
    companions: [
      {prompt:b(String.raw`At three matched origins let $A=(2,0,5)$ and $B=(1,3,4)$. Compute the paired difference and its sample mean; interpret the sign.`,String.raw`Tại ba thời điểm ghép cặp, cho $A=(2,0,5)$ và $B=(1,3,4)$. Hãy tính chênh lệch paired và trung bình mẫu; diễn giải dấu.`),solution:[
        b(String.raw`Subtract origin by origin to get $d=(1,-3,1)$.`,String.raw`Trừ theo từng thời điểm được $d=(1,-3,1)$.`),
        b(String.raw`The sum is -1, so $\bar d=-1/3$.`,String.raw`Tổng bằng -1, nên $\bar d=-1/3$.`),
        b(String.raw`Because d is A−B, the negative sample mean favors A's smaller loss in this sample.`,String.raw`Vì d là A−B, trung bình mẫu âm nghĩa là tổn thất A nhỏ hơn trong mẫu này.`),
      ]},
      {prompt:b(String.raw`For matched losses $A=(4,2,6,1)$ and $B=(3,5,4,3)$, find $\bar d$ and state the estimand of a valid HAC interval.`,String.raw`Với tổn thất ghép cặp $A=(4,2,6,1)$ và $B=(3,5,4,3)$, hãy tìm $\bar d$ và nêu estimand của khoảng HAC hợp lệ.`),solution:[
        b(String.raw`The matched differences are $d=(1,-3,2,-2)$.`,String.raw`Chênh lệch ghép cặp là $d=(1,-3,2,-2)$.`),
        b(String.raw`Their sum is -2, so the average contrast is $\bar d=-1/2$.`,String.raw`Tổng bằng -2, nên chênh lệch trung bình $\bar d=-1/2$.`),
        b(String.raw`Under a stationary dependent sampling model, HAC uncertainty targets the population mean contrast $E[d_t]$, not the mean of two unpaired samples.`,String.raw`Dưới mô hình lấy mẫu phụ thuộc dừng, bất định HAC nhắm đến chênh lệch trung bình tổng thể $E[d_t]$, không phải hiệu hai trung bình không ghép cặp.`),
      ]},
      {prompt:b(String.raw`A paired loss series has sample mean -0.4 and noticeable serial correlation. What does a block interval quantify, and what conclusion would exceed its scope?`,String.raw`Chuỗi chênh lệch tổn thất ghép cặp có trung bình mẫu -0.4 và tự tương quan đáng kể. Khoảng block định lượng gì, và kết luận nào vượt quá phạm vi của nó?`),solution:[
        b(String.raw`The point estimate is the matched-origin average A−B contrast.`,String.raw`Ước lượng điểm là trung bình chênh lệch A−B tại các thời điểm ghép cặp.`),
        b(String.raw`A valid block interval quantifies sampling uncertainty in the stationary mean contrast while retaining local dependence.`,String.raw`Khoảng block hợp lệ định lượng bất định lấy mẫu của chênh lệch trung bình dừng, đồng thời giữ phụ thuộc cục bộ.`),
        b(String.raw`It does not show the forecast origins are independent or guarantee that A will earn more in future periods.`,String.raw`Nó không chứng minh các thời điểm dự báo độc lập hay bảo đảm A sẽ sinh lợi nhiều hơn trong tương lai.`),
      ]},
    ],
    reviewNote: 'Checked every matched subtraction, sample mean, A−B sign interpretation and target estimand. Restriction: HAC/block inference requires its own stationarity and dependence conditions.',
    sourceIds: ['o-kunsch'],
  },
  'm2-w078-e4': {
    application: b(String.raw`A sign-flip test is exact when the joint conditional law is invariant under all independent sign changes given the magnitudes. Ties must remain in the upper tail; coordinatewise symmetry alone is insufficient.`,String.raw`Kiểm định đổi dấu chính xác khi luật có điều kiện chung bất biến dưới mọi phép đổi dấu độc lập theo độ lớn. Phải giữ các trường hợp hòa trong đuôi trên; đối xứng từng tọa độ chưa đủ.`),
    formula: b(String.raw`Under conditionally independent fair signs, the $N=2^n$ sign configurations are equiprobable. Define $p(d)=N^{-1}\#\{g:T(gd)\ge T(d)\}$ counting multiplicity. Then $P(p\le\alpha\mid |d|)\le\lfloor\alpha N\rfloor/N\le\alpha$.`,String.raw`Với dấu công bằng độc lập có điều kiện, $N=2^n$ cấu hình đổi dấu đồng xác suất. Đặt $p(d)=N^{-1}\#\{g:T(gd)\ge T(d)\}$, tính cả bội số. Khi đó $P(p\le\alpha\mid |d|)\le\lfloor\alpha N\rfloor/N\le\alpha$.`),
    steps: [
      b(String.raw`Condition on magnitudes; independent fair signs make each of the $2^n$ sign vectors equally likely.`,String.raw`Điều kiện theo độ lớn; dấu công bằng độc lập làm mỗi vector trong $2^n$ vector có xác suất như nhau.`),
      b(String.raw`Rank the statistic values from largest downward, counting sign vectors with multiplicity.`,String.raw`Xếp giá trị thống kê từ lớn xuống, tính bội số các vector dấu.`),
      b(String.raw`Because the tail uses $\ge$, a tied group is admitted only when its entire upper-tail count is at most $\alpha N$.`,String.raw`Vì đuôi dùng $\ge$, một nhóm hòa chỉ được nhận khi toàn bộ số phần tử trong đuôi trên không vượt $\alpha N$.`),
      b(String.raw`Thus at most $\lfloor\alpha N\rfloor$ configurations have p-value at most alpha, proving conditional super-uniformity.`,String.raw`Do đó nhiều nhất $\lfloor\alpha N\rfloor$ cấu hình có p-value không quá alpha, chứng minh tính siêu đều có điều kiện.`),
      b(String.raw`For $(Z,Z)$ the true statistic $|\bar d|=1$; independent flips yield values 1,0,0,1, so p=1/2 always and a level-1/2 rejection occurs with probability one.`,String.raw`Với $(Z,Z)$, thống kê thật $|\bar d|=1$; đổi dấu độc lập cho các giá trị 1,0,0,1, nên p=1/2 luôn và kiểm định mức 1/2 bác bỏ với xác suất một.`),
    ],
    primarySolution: [
      b(String.raw`Given fixed magnitudes, the stated independent fair-sign assumption makes all $2^n$ sign configurations equally likely, with multiplicity retained.`,String.raw`Với độ lớn cố định, giả thiết dấu công bằng độc lập làm mọi cấu hình trong $2^n$ cấu hình đồng xác suất, vẫn giữ bội số.`),
      b(String.raw`For each observed configuration, p is the fraction of configurations whose statistic is at least as large. Ties are included in this tail count.`,String.raw`Với mỗi cấu hình quan sát, p là tỷ lệ cấu hình có thống kê lớn ít nhất bằng nó. Các trường hợp hòa được giữ trong số đếm đuôi.`),
      b(String.raw`If p≤α, its whole statistic tie group lies among configurations with upper-tail count at most αN; hence no more than $\lfloor\alpha N\rfloor$ configurations qualify.`,String.raw`Nếu p≤α, cả nhóm thống kê hòa nằm trong các cấu hình có số đếm đuôi trên không quá αN; vì vậy nhiều nhất $\lfloor\alpha N\rfloor$ cấu hình đạt.`),
      b(String.raw`Dividing by N proves conditional probability at most α. For $(Z,Z)$, the four independent flips give statistics $(1,0,0,1)$ and p=2/4=1/2.`,String.raw`Chia cho N chứng minh xác suất có điều kiện không quá α. Với $(Z,Z)$, bốn phép đổi dấu độc lập cho thống kê $(1,0,0,1)$ và p=2/4=1/2.`),
      b(String.raw`Since the true paired vector always has this p-value, $P(p\le1/2)=1>1/2$. Each coordinate is symmetric but the joint law is not invariant under arbitrary separate sign flips.`,String.raw`Vì vector paired thật luôn có p-value này, $P(p\le1/2)=1>1/2$. Mỗi tọa độ đối xứng nhưng luật chung không bất biến dưới đổi dấu riêng tùy ý.`),
    ],
    companions: [
      {prompt:b(String.raw`For fixed magnitudes $(1,2)$ and observed signs $(+,+)$, use $T(d)=|\bar d|$ to enumerate the four sign flips and compute the upper-tail p-value.`,String.raw`Với độ lớn cố định $(1,2)$ và dấu quan sát $(+,+)$, dùng $T(d)=|\bar d|$ để liệt kê bốn phép đổi dấu và tính p-value đuôi trên.`),solution:[
        b(String.raw`The four signed vectors are $(1,2),(1,-2),(-1,2),(-1,-2)$.`,String.raw`Bốn vector dấu là $(1,2),(1,-2),(-1,2),(-1,-2)$.`),
        b(String.raw`Their absolute means are $1.5,0.5,0.5,1.5$.`,String.raw`Trị tuyệt đối trung bình là $1.5,0.5,0.5,1.5$.`),
        b(String.raw`Two of four are at least the observed 1.5, so $p=1/2$, including both ties.`,String.raw`Hai trong bốn giá trị lớn ít nhất 1.5 như quan sát, nên $p=1/2$, tính cả hai trường hợp hòa.`),
      ]},
      {prompt:b(String.raw`With n=3 equal magnitudes $a_i=1$ and $T(d)=|\sum_i d_i|$, find the p-value for an all-positive observed vector and the rejection probability at level 1/4.`,String.raw`Với n=3, mọi độ lớn $a_i=1$, $T(d)=|\sum_i d_i|$, hãy tìm p-value khi vector quan sát toàn dấu dương và xác suất bác bỏ ở mức 1/4.`),solution:[
        b(String.raw`There are eight equally likely sign vectors; two have absolute sum 3 and six have absolute sum 1.`,String.raw`Có tám vector dấu đồng xác suất; hai vector có tổng trị tuyệt đối 3 và sáu vector có trị tuyệt đối 1.`),
        b(String.raw`At the all-positive observation, the statistic is 3, so the upper-tail p-value is $2/8=1/4$, counting its tie.`,String.raw`Ở quan sát toàn dương, thống kê bằng 3 nên p-value đuôi trên là $2/8=1/4$, tính cả trường hợp hòa.`),
        b(String.raw`Only those two vectors have p≤1/4; rejection probability is $2/8=1/4$, illustrating super-uniformity with ties.`,String.raw`Chỉ hai vector đó có p≤1/4; xác suất bác bỏ là $2/8=1/4$, minh họa tính siêu đều khi có hòa.`),
      ]},
      {prompt:b(String.raw`Let the true paired data be $(Z,2Z)$ for one fair sign Z and again use $T=|\bar d|$. What p-value results from independent coordinate flips, and why is it invalid at level 1/2?`,String.raw`Cho dữ liệu paired thật $(Z,2Z)$ với Z là dấu công bằng, tiếp tục dùng $T=|\bar d|$. Đổi dấu độc lập từng tọa độ cho p-value nào, và vì sao không hợp lệ ở mức 1/2?`),solution:[
        b(String.raw`The observed vector is either $(1,2)$ or $(-1,-2)$, so $T=1.5$.`,String.raw`Vector quan sát là $(1,2)$ hoặc $(-1,-2)$, nên $T=1.5$.`),
        b(String.raw`Independent flips enumerate absolute means $1.5,0.5,0.5,1.5$, giving p=1/2 for either observed sign.`,String.raw`Đổi dấu độc lập liệt kê trị tuyệt đối trung bình $1.5,0.5,0.5,1.5$, cho p=1/2 với cả hai dấu quan sát.`),
        b(String.raw`The p-value is always at most 1/2, so the nominal level-1/2 test rejects with probability one.`,String.raw`P-value luôn không quá 1/2, nên kiểm định danh nghĩa mức 1/2 bác bỏ với xác suất một.`),
        b(String.raw`The true vector has a common sign, not independent coordinate signs; conditional joint invariance fails.`,String.raw`Vector thật có dấu chung chứ không phải các dấu tọa độ độc lập; tính bất biến chung có điều kiện bị vi phạm.`),
      ]},
    ],
    reviewNote: 'Checked the finite orbit count, inclusion of tied statistics, and invalid paired examples under arbitrary coordinate flips. Restriction: exactness requires joint conditional sign invariance, not merely marginal symmetry.',
    sourceIds: ['o-kunsch'],
  },
  'm2-w078-e5': {
    application: b(String.raw`A pooled block bootstrap treats blocks as draws from one stable time-series law. A structural break changes the mean over time, so resampling pooled blocks randomizes regime composition and boundary placement.`,String.raw`Bootstrap block gộp xem block là mẫu từ một luật chuỗi ổn định. Điểm gãy cấu trúc làm kỳ vọng đổi theo thời gian, nên lấy lại block gộp ngẫu nhiên hóa thành phần chế độ và vị trí biên.`),
    formula: b(String.raw`For $X_t=\epsilon_t$ before the break and $X_t=5+\epsilon_t$ after it, the regime means are 0 and 5. A stationary block-bootstrap theorem does not apply to this time-varying mean process.`,String.raw`Với $X_t=\epsilon_t$ trước điểm gãy và $X_t=5+\epsilon_t$ sau đó, kỳ vọng hai chế độ là 0 và 5. Định lý bootstrap block dừng không áp dụng cho quá trình có kỳ vọng biến đổi này.`),
    steps: [
      b(String.raw`Before the break, $E X_t=E\epsilon_t=0$.`,String.raw`Trước điểm gãy, $E X_t=E\epsilon_t=0$.`),
      b(String.raw`After the break, $E X_t=5+E\epsilon_t=5$.`,String.raw`Sau điểm gãy, $E X_t=5+E\epsilon_t=5$.`),
      b(String.raw`There is no single time-invariant marginal mean; with equal regime lengths the pooled mean is about 2.5.`,String.raw`Không có một kỳ vọng biên bất biến theo thời gian; nếu hai chế độ dài bằng nhau, trung bình gộp xấp xỉ 2.5.`),
      b(String.raw`Pooled blocks mix the two regimes and relocate boundaries, so they do not estimate sampling uncertainty for one stationary mean.`,String.raw`Block gộp trộn hai chế độ và dời vị trí biên, nên không ước lượng bất định lấy mẫu của một trung bình dừng duy nhất.`),
    ],
    primarySolution: [
      b(String.raw`For $t\le n/2$, $X_t=\epsilon_t$, so the first regime mean is zero.`,String.raw`Với $t\le n/2$, $X_t=\epsilon_t$, nên kỳ vọng chế độ đầu bằng không.`),
      b(String.raw`For $t>n/2$, $X_t=5+\epsilon_t$, so the second regime mean is five.`,String.raw`Với $t>n/2$, $X_t=5+\epsilon_t$, nên kỳ vọng chế độ sau bằng năm.`),
      b(String.raw`The pooled series therefore has a changing mean and is not one stationary process with a common mean.`,String.raw`Vì vậy chuỗi gộp có kỳ vọng thay đổi, không phải một quá trình dừng với trung bình chung.`),
      b(String.raw`Resampled blocks draw from both regimes and create random regime proportions and joins; the stationary-block sampling theorem does not describe this distribution.`,String.raw`Block lấy lại đến từ cả hai chế độ, tạo tỷ lệ chế độ và mối nối ngẫu nhiên; định lý lấy mẫu block dừng không mô tả phân phối này.`),
      b(String.raw`Model the break, resample within prespecified stable regimes, or state a regime-specific estimand instead.`,String.raw`Hãy mô hình hóa điểm gãy, lấy mẫu trong các chế độ ổn định định trước, hoặc nêu estimand riêng cho từng chế độ.`),
    ],
    companions: [
      {prompt:b(String.raw`A sample has 40 observations with mean 1 followed by 40 observations with mean 7. Compute the equally weighted pooled mean and explain why pooled blocks do not represent one regime's uncertainty.`,String.raw`Mẫu có 40 quan sát kỳ vọng 1, tiếp theo 40 quan sát kỳ vọng 7. Hãy tính kỳ vọng gộp có trọng số đều và giải thích vì sao block gộp không biểu diễn bất định của một chế độ.`),solution:[
        b(String.raw`The regime lengths are equal, so the combined mean is $(1+7)/2=4$.`,String.raw`Hai chế độ dài bằng nhau, nên trung bình kết hợp là $(1+7)/2=4$.`),
        b(String.raw`Observations within the first and second halves still have different means, so the sequence has a break.`,String.raw`Quan sát ở nửa đầu và nửa sau vẫn có kỳ vọng khác nhau, nên chuỗi có điểm gãy.`),
        b(String.raw`Pooled blocks mix regimes; they do not approximate repeated samples from either fixed-regime mean.`,String.raw`Block gộp trộn chế độ; chúng không xấp xỉ mẫu lặp từ trung bình của một chế độ cố định.`),
      ]},
      {prompt:b(String.raw`In a broken series, a resampled block contains observations from both sides of the original change point. Explain what new joins and regime compositions the bootstrap can create.`,String.raw`Trong chuỗi có điểm gãy, một block lấy mẫu chứa quan sát từ hai phía điểm đổi ban đầu. Hãy giải thích các mối nối và thành phần chế độ mới mà bootstrap tạo được.`),solution:[
        b(String.raw`The observed data switch from one mean level to another at a fixed time.`,String.raw`Dữ liệu quan sát chuyển từ một mức kỳ vọng sang mức khác tại thời điểm cố định.`),
        b(String.raw`Resampling blocks without their original calendar positions can place the pre-break tail beside a post-break segment or reverse such joins.`,String.raw`Lấy block mà bỏ vị trí lịch gốc có thể ghép đuôi trước gãy với đoạn sau gãy hoặc tạo mối nối ngược lại.`),
        b(String.raw`Across replicates, the number of observations from each regime becomes random rather than matching the original design.`,String.raw`Qua các mẫu lặp, số quan sát mỗi chế độ trở thành ngẫu nhiên thay vì khớp thiết kế gốc.`),
        b(String.raw`This alters the target sampling law; a stationary-block justification cannot be used unchanged.`,String.raw`Điều này làm đổi luật lấy mẫu mục tiêu; không thể dùng nguyên xi biện minh block dừng.`),
      ]},
      {prompt:b(String.raw`A planned analysis knows the break date and wants uncertainty for the post-break mean. Give a resampling strategy and the estimand it targets.`,String.raw`Phân tích biết ngày điểm gãy và muốn đo bất định của kỳ vọng sau gãy. Hãy nêu chiến lược lấy mẫu lại và estimand được nhắm đến.`),solution:[
        b(String.raw`Define the target as the post-break mean, such as $E[X_t\mid t>\tau]$, not the full-sample pooled mean.`,String.raw`Định nghĩa mục tiêu là kỳ vọng sau gãy, chẳng hạn $E[X_t\mid t>\tau]$, không phải trung bình gộp toàn mẫu.`),
        b(String.raw`Use only the prespecified post-break stable segment for resampling, with blocks if its residuals remain serially dependent.`,String.raw`Chỉ dùng đoạn sau gãy ổn định đã định trước để lấy mẫu; dùng block nếu residual còn phụ thuộc chuỗi.`),
        b(String.raw`This targets uncertainty for the post-regime mean under stationarity and block-validity conditions within that segment.`,String.raw`Cách này nhắm đến bất định của kỳ vọng chế độ sau dưới điều kiện dừng và tính hợp lệ block trong đoạn đó.`),
      ]},
    ],
    reviewNote: 'Checked both regime means and the consequence of pooled calendar-free resampling. Restriction: stationary-block validity requires a stable stationary target; break-aware modeling or a regime-specific target changes the analysis.',
    sourceIds: ['o-kunsch'],
  },
  'm2-w079-e1': {
    application: b(String.raw`A Kalman update combines the prior state estimate with an observation innovation. Shape checks and eigenvalues catch transposition errors that can silently produce an invalid covariance.`,String.raw`Cập nhật Kalman kết hợp ước lượng trạng thái tiên nghiệm với innovation quan sát. Kiểm tra kích thước và trị riêng phát hiện lỗi chuyển vị có thể âm thầm tạo covariance không hợp lệ.`),
    formula: b(String.raw`For prior $(m^-,P^-)$ and observation $y=Hm+v$, with independent $v\sim N(0,R)$, define $S=HP^-H^T+R$, $K=P^-H^TS^{-1}$, $m^+=m^-+K(y-Hm^-)$, and $P^+=P^- -P^-H^TS^{-1}HP^-$.`,String.raw`Với tiên nghiệm $(m^-,P^-)$ và quan sát $y=Hm+v$, nhiễu $v\sim N(0,R)$ độc lập, đặt $S=HP^-H^T+R$, $K=P^-H^TS^{-1}$, $m^+=m^-+K(y-Hm^-)$, $P^+=P^- -P^-H^TS^{-1}HP^-$.`),
    steps: [
      b(String.raw`Check dimensions: $P^-$ is $2\times2$, H is $1\times2$, S scalar, and K is $2\times1$.`,String.raw`Kiểm tra kích thước: $P^-$ là $2\times2$, H là $1\times2$, S vô hướng, K là $2\times1$.`),
      b(String.raw`Compute $HP^-H^T=(1,1)\begin{pmatrix}2&1\\1&2\end{pmatrix}(1,1)^T=6$, so $S=6+1=7$.`,String.raw`Tính $HP^-H^T=(1,1)\begin{pmatrix}2&1\\1&2\end{pmatrix}(1,1)^T=6$, nên $S=6+1=7$.`),
      b(String.raw`Then $P^-H^T=(3,3)^T$, $K=(3/7,3/7)^T$, and innovation is $2-(0)=2$, giving $m^+=(6/7,6/7)^T$.`,String.raw`Khi đó $P^-H^T=(3,3)^T$, $K=(3/7,3/7)^T$, innovation $2-(0)=2$, nên $m^+=(6/7,6/7)^T$.`),
      b(String.raw`The covariance update gives $P^+=\begin{pmatrix}5/7&-2/7\\-2/7&5/7\end{pmatrix}$. Its eigenvalues are $3/7$ and 1, so it is symmetric PSD.`,String.raw`Cập nhật covariance cho $P^+=\begin{pmatrix}5/7&-2/7\\-2/7&5/7\end{pmatrix}$. Trị riêng là $3/7$ và 1, nên ma trận đối xứng PSD.`),
    ],
    primarySolution: [
      b(String.raw`The innovation covariance is $S=HP^-H^T+R=6+1=7$.`,String.raw`Covariance innovation là $S=HP^-H^T+R=6+1=7$.`),
      b(String.raw`The gain is $K=P^-H^T/S=(3/7,3/7)^T$.`,String.raw`Gain là $K=P^-H^T/S=(3/7,3/7)^T$.`),
      b(String.raw`The prior innovation is $y-Hm^-=2$, so $m^+=K(2)=(6/7,6/7)^T$.`,String.raw`Innovation tiên nghiệm là $y-Hm^-=2$, nên $m^+=K(2)=(6/7,6/7)^T$.`),
      b(String.raw`Subtracting $(1/7)\begin{pmatrix}9&9\\9&9\end{pmatrix}$ from $P^-$ gives $P^+=\begin{pmatrix}5/7&-2/7\\-2/7&5/7\end{pmatrix}$. Its eigenvalues $3/7,1$ confirm nonnegativity.`,String.raw`Trừ $(1/7)\begin{pmatrix}9&9\\9&9\end{pmatrix}$ khỏi $P^-$ cho $P^+=\begin{pmatrix}5/7&-2/7\\-2/7&5/7\end{pmatrix}$. Trị riêng $3/7,1$ xác nhận PSD.`),
    ],
    companions: [
      {prompt:b(String.raw`For scalar prior $m^-=2,P^-=5$, observation coefficient H=1, noise variance R=1 and y=4, compute S,K,m⁺,P⁺.`,String.raw`Với tiên nghiệm vô hướng $m^-=2,P^-=5$, hệ số quan sát H=1, phương sai nhiễu R=1 và y=4, hãy tính S,K,m⁺,P⁺.`),solution:[
        b(String.raw`The innovation variance is $S=1(5)1+1=6$.`,String.raw`Phương sai innovation là $S=1(5)1+1=6$.`),
        b(String.raw`The gain is $K=5/6$ and the innovation $y-Hm^-=4-2=2$.`,String.raw`Gain là $K=5/6$ và innovation $y-Hm^-=4-2=2$.`),
        b(String.raw`Thus $m^+=2+(5/6)2=11/3$ and $P^+=5-25/6=5/6>0$.`,String.raw`Vậy $m^+=2+(5/6)2=11/3$ và $P^+=5-25/6=5/6>0$.`),
      ]},
      {prompt:b(String.raw`Let $P^-=\operatorname{diag}(4,1)$, $H=(1,0)$, $R=2$, $m^-=(1,-1)^T$ and y=3. Find the posterior mean and covariance.`,String.raw`Cho $P^-=\operatorname{diag}(4,1)$, $H=(1,0)$, $R=2$, $m^-=(1,-1)^T$ và y=3. Hãy tìm trung bình và covariance hậu nghiệm.`),solution:[
        b(String.raw`Here $S=HP^-H^T+R=4+2=6$ and $K=P^-H^T/S=(2/3,0)^T$.`,String.raw`Ở đây $S=HP^-H^T+R=4+2=6$ và $K=P^-H^T/S=(2/3,0)^T$.`),
        b(String.raw`The innovation is $3-Hm^-=2$, giving $m^+=(1,-1)^T+(4/3,0)^T=(7/3,-1)^T$.`,String.raw`Innovation là $3-Hm^-=2$, nên $m^+=(1,-1)^T+(4/3,0)^T=(7/3,-1)^T$.`),
        b(String.raw`Only the observed coordinate changes: $P^+=\operatorname{diag}(4-16/6,1)=\operatorname{diag}(4/3,1)$, which is PSD.`,String.raw`Chỉ tọa độ được quan sát đổi: $P^+=\operatorname{diag}(4-16/6,1)=\operatorname{diag}(4/3,1)$, là PSD.`),
      ]},
      {prompt:b(String.raw`Suppose $P^-=\begin{pmatrix}2&0\\0&1\end{pmatrix}$, $H=(0,0)$ and $R=3$. Determine the gain and covariance update. What does this boundary observation mean?`,String.raw`Giả sử $P^-=\begin{pmatrix}2&0\\0&1\end{pmatrix}$, $H=(0,0)$ và $R=3$. Hãy xác định gain và cập nhật covariance. Quan sát biên này có ý nghĩa gì?`),solution:[
        b(String.raw`The innovation covariance is $S=HP^-H^T+R=3$, which is invertible.`,String.raw`Covariance innovation là $S=HP^-H^T+R=3$, khả nghịch.`),
        b(String.raw`Because $P^-H^T=0$, the gain is the zero vector.`,String.raw`Vì $P^-H^T=0$, gain là vector không.`),
        b(String.raw`The update subtracts zero, so $P^+=P^-$ and the observation provides no information about the state.`,String.raw`Cập nhật trừ đi không, nên $P^+=P^-$ và quan sát không cung cấp thông tin về trạng thái.`),
      ]},
    ],
    reviewNote: 'Checked matrix shapes, innovation variance, gain, mean update, covariance subtraction and eigenvalues 3/7 and 1. Restriction: the formula assumes independent observation noise and invertible S; R>0 ensures this scalar fixture.',
    sourceIds: ['o-sarkka'],
  },
  'm2-w079-e2': {
    application: b(String.raw`The Kalman gain makes the updated residual uncorrelated with the observation. Joint Gaussianity upgrades this linear projection into the full conditional mean and independence statement.`,String.raw`Gain Kalman làm residual sau cập nhật không tương quan với quan sát. Tính Gaussian chung nâng phép chiếu tuyến tính này thành kỳ vọng có điều kiện đầy đủ và kết luận độc lập.`),
    formula: b(String.raw`For $e=x-m$, $r=He+v$, with independent Gaussian $e,v$, let $S=HPH^T+R\succ0$. Then $\operatorname{Cov}(e,r)=PH^T$, and setting $\operatorname{Cov}(e-Kr,r)=0$ gives $K=PH^TS^{-1}$. Joint Gaussianity makes the residual independent of r.`,String.raw`Với $e=x-m$, $r=He+v$, hai biến Gaussian độc lập $e,v$, đặt $S=HPH^T+R\succ0$. Khi đó $\operatorname{Cov}(e,r)=PH^T$; điều kiện $\operatorname{Cov}(e-Kr,r)=0$ cho $K=PH^TS^{-1}$. Tính Gaussian chung làm residual độc lập với r.`),
    steps: [
      b(String.raw`Independence gives $\operatorname{Cov}(e,r)=\operatorname{Cov}(e,He+v)=PH^T$.`,String.raw`Tính độc lập cho $\operatorname{Cov}(e,r)=\operatorname{Cov}(e,He+v)=PH^T$.`),
      b(String.raw`Also $\operatorname{Cov}(r)=HPH^T+R=S$; with R positive definite, S is invertible.`,String.raw`Ngoài ra $\operatorname{Cov}(r)=HPH^T+R=S$; nếu R xác định dương thì S khả nghịch.`),
      b(String.raw`Set $PH^T-KS=0$ and solve on the right to obtain $K=PH^TS^{-1}$.`,String.raw`Đặt $PH^T-KS=0$ rồi giải bên phải, được $K=PH^TS^{-1}$.`),
      b(String.raw`The residual $e-Kr$ and r are jointly Gaussian and uncorrelated, hence independent; its conditional expectation given r is zero.`,String.raw`Residual $e-Kr$ và r Gaussian chung, không tương quan nên độc lập; kỳ vọng của residual có điều kiện theo r bằng không.`),
      b(String.raw`Therefore $E[e\mid r]=Kr$. Without joint Gaussianity K is only the best linear projection coefficient, not generally the full conditional law or mean.`,String.raw`Vì vậy $E[e\mid r]=Kr$. Nếu không Gaussian chung, K chỉ là hệ số chiếu tuyến tính tốt nhất, không phải luật hay kỳ vọng có điều kiện đầy đủ nói chung.`),
    ],
    primarySolution: [
      b(String.raw`From $r=He+v$ and independent v, $\operatorname{Cov}(e,r)=\operatorname{Cov}(e,e)H^T=PH^T$.`,String.raw`Từ $r=He+v$ và v độc lập, $\operatorname{Cov}(e,r)=\operatorname{Cov}(e,e)H^T=PH^T$.`),
      b(String.raw`The residual covariance is $\operatorname{Cov}(r)=HPH^T+R=S$.`,String.raw`Covariance residual quan sát là $\operatorname{Cov}(r)=HPH^T+R=S$.`),
      b(String.raw`Orthogonality requires $\operatorname{Cov}(e-Kr,r)=PH^T-KS=0$, hence $K=PH^TS^{-1}$ when S is invertible.`,String.raw`Trực giao yêu cầu $\operatorname{Cov}(e-Kr,r)=PH^T-KS=0$, nên $K=PH^TS^{-1}$ khi S khả nghịch.`),
      b(String.raw`If e and v are jointly Gaussian, then $(e-Kr,r)$ are jointly Gaussian; zero cross-covariance implies independence.`,String.raw`Nếu e và v Gaussian chung thì $(e-Kr,r)$ Gaussian chung; covariance chéo bằng không suy ra độc lập.`),
      b(String.raw`Thus $E[e-Kr\mid r]=0$ and $E[x\mid y]=m+K(y-Hm)$. For non-Gaussian variables, orthogonality alone establishes only the $L^2$ linear predictor.`,String.raw`Do đó $E[e-Kr\mid r]=0$ và $E[x\mid y]=m+K(y-Hm)$. Với biến không Gaussian, riêng tính trực giao chỉ xác lập bộ dự báo tuyến tính $L^2$.`),
    ],
    companions: [
      {prompt:b(String.raw`For scalar independent Gaussian $e\sim N(0,4)$ and $v\sim N(0,1)$ with $r=2e+v$, compute the linear gain and state why it equals the conditional-mean coefficient.`,String.raw`Với $e\sim N(0,4)$ và $v\sim N(0,1)$ Gaussian độc lập, $r=2e+v$, hãy tính gain tuyến tính và nêu vì sao nó bằng hệ số kỳ vọng có điều kiện.`),solution:[
        b(String.raw`Here $\operatorname{Cov}(e,r)=2\operatorname{Var}(e)=8$.`,String.raw`Ở đây $\operatorname{Cov}(e,r)=2\operatorname{Var}(e)=8$.`),
        b(String.raw`The observation variance is $S=2^2(4)+1=17$, so $K=8/17$.`,String.raw`Phương sai quan sát là $S=2^2(4)+1=17$, nên $K=8/17$.`),
        b(String.raw`The pair is jointly Gaussian, so the orthogonal residual is independent of r and $E[e\mid r]=(8/17)r$.`,String.raw`Cặp Gaussian chung, nên residual trực giao độc lập với r và $E[e\mid r]=(8/17)r$.`),
      ]},
      {prompt:b(String.raw`Let U be uniform on $\{-2,-1,1,2\}$ and observe $R=U^2$. Show U and R are uncorrelated but dependent, so zero covariance cannot give conditional independence.`,String.raw`Cho U đều trên $\{-2,-1,1,2\}$ và quan sát $R=U^2$. Hãy chứng minh U,R không tương quan nhưng phụ thuộc, nên covariance bằng không không cho độc lập có điều kiện.`),solution:[
        b(String.raw`Symmetry gives $EU=0$ and $ER=E[U^2]=5/2$.`,String.raw`Đối xứng cho $EU=0$ và $ER=E[U^2]=5/2$.`),
        b(String.raw`Since $UR=U^3$ and the distribution is symmetric, $E[UR]=0$, hence $\operatorname{Cov}(U,R)=0$.`,String.raw`Vì $UR=U^3$ và phân phối đối xứng, $E[UR]=0$, nên $\operatorname{Cov}(U,R)=0$.`),
        b(String.raw`But $R=U^2$ is a nonconstant deterministic function of U, so U and R are dependent.`,String.raw`Nhưng $R=U^2$ là hàm tất định không hằng của U, nên U và R phụ thuộc.`),
        b(String.raw`Thus an orthogonality equation alone does not make residual and observation independent outside a joint-Gaussian model.`,String.raw`Vì vậy phương trình trực giao riêng không làm residual và quan sát độc lập ngoài mô hình Gaussian chung.`),
      ]},
      {prompt:b(String.raw`For a non-Gaussian state error U uniform on $\{-1,0,1\}$ and independent noise V uniform on $\{-1,1\}$, let R=U+V. Compute the linear gain and compare it with $E[U\mid R=2]$.`,String.raw`Với sai số trạng thái U không Gaussian, đều trên $\{-1,0,1\}$, và nhiễu V độc lập, đều trên $\{-1,1\}$, đặt R=U+V. Hãy tính gain tuyến tính và so sánh với $E[U\mid R=2]$.`),solution:[
        b(String.raw`The variances are $\operatorname{Var}(U)=2/3$ and $\operatorname{Var}(V)=1$, so $\operatorname{Var}(R)=5/3$.`,String.raw`Phương sai là $\operatorname{Var}(U)=2/3$, $\operatorname{Var}(V)=1$, nên $\operatorname{Var}(R)=5/3$.`),
        b(String.raw`The linear gain is $\operatorname{Cov}(U,R)/\operatorname{Var}(R)=(2/3)/(5/3)=2/5$.`,String.raw`Gain tuyến tính là $\operatorname{Cov}(U,R)/\operatorname{Var}(R)=(2/3)/(5/3)=2/5$.`),
        b(String.raw`The event R=2 forces U=1,V=1, so $E[U\mid R=2]=1$, not $(2/5)2=4/5$.`,String.raw`Biến cố R=2 buộc U=1,V=1, nên $E[U\mid R=2]=1$, khác $(2/5)2=4/5$.`),
        b(String.raw`This explicit non-Gaussian case shows the LMMSE line need not equal the nonlinear conditional mean.`,String.raw`Ví dụ không Gaussian này cho thấy đường LMMSE không nhất thiết bằng kỳ vọng có điều kiện phi tuyến.`),
      ]},
    ],
    reviewNote: 'Checked Cov(e,r), S, the right-sided solve for K, and the Gaussian uncorrelated-implies-independent step. Restriction: outside joint Gaussianity the formula is only LMMSE in general, not the full conditional distribution or mean.',
    sourceIds: ['o-sarkka'],
  },
  'm2-w079-e3': {
    application: b(String.raw`State prediction propagates uncertainty through the dynamics and then adds independent process noise. Omitting Q understates the forecast covariance.`,String.raw`Dự báo trạng thái truyền bất định qua động lực rồi cộng nhiễu quá trình độc lập. Bỏ Q làm đánh giá thấp covariance dự báo.`),
    formula: b(String.raw`If $x_t=Fx_{t-1}+w_t$, with $w_t$ independent of $x_{t-1}$, then $P_t^-=FP_{t-1}^+F^T+Q$.`,String.raw`Nếu $x_t=Fx_{t-1}+w_t$, với $w_t$ độc lập với $x_{t-1}$, thì $P_t^-=FP_{t-1}^+F^T+Q$.`),
    steps: [
      b(String.raw`For a linear transform, $\operatorname{Cov}(Fx)=F\operatorname{Cov}(x)F^T=FPF^T$.`,String.raw`Với phép biến đổi tuyến tính, $\operatorname{Cov}(Fx)=F\operatorname{Cov}(x)F^T=FPF^T$.`),
      b(String.raw`Independence makes both cross-covariance terms between Fx and w vanish.`,String.raw`Tính độc lập làm hai số hạng covariance chéo giữa Fx và w bằng không.`),
      b(String.raw`The remaining process-noise covariance adds, giving $P^-=FPF^T+Q$.`,String.raw`Covariance nhiễu quá trình còn lại được cộng vào, cho $P^-=FPF^T+Q$.`),
      b(String.raw`For the given F and P=I, $FF^T=\begin{pmatrix}2&1\\1&1\end{pmatrix}$; adding Q gives $\begin{pmatrix}2.1&1\\1&1.2\end{pmatrix}$.`,String.raw`Với F và P=I đã cho, $FF^T=\begin{pmatrix}2&1\\1&1\end{pmatrix}$; cộng Q được $\begin{pmatrix}2.1&1\\1&1.2\end{pmatrix}$.`),
    ],
    primarySolution: [
      b(String.raw`The deterministic part transforms covariance as $FPF^T$. With the supplied F and $P=I$, multiplication gives $FF^T=\begin{pmatrix}2&1\\1&1\end{pmatrix}$.`,String.raw`Phần tất định biến đổi covariance thành $FPF^T$. Với F và $P=I$ đã cho, phép nhân cho $FF^T=\begin{pmatrix}2&1\\1&1\end{pmatrix}$.`),
      b(String.raw`Because w is independent, cross terms vanish; add $Q=\operatorname{diag}(0.1,0.2)$.`,String.raw`Vì w độc lập, số hạng chéo triệt tiêu; cộng $Q=\operatorname{diag}(0.1,0.2)$.`),
      b(String.raw`The predicted covariance is $P^-=\begin{pmatrix}2.1&1\\1&1.2\end{pmatrix}$.`,String.raw`Covariance dự báo là $P^-=\begin{pmatrix}2.1&1\\1&1.2\end{pmatrix}$.`),
      b(String.raw`Without Q the diagonal variances would each be understated by the corresponding process-noise variance.`,String.raw`Nếu bỏ Q, từng phương sai đường chéo sẽ bị đánh giá thấp đúng lượng phương sai nhiễu quá trình tương ứng.`),
    ],
    companions: [
      {prompt:b(String.raw`For $F=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, $P=2I$ and $Q=I$, calculate the predicted covariance.`,String.raw`Với $F=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, $P=2I$ và $Q=I$, hãy tính covariance dự báo.`),solution:[
        b(String.raw`This F is orthogonal, so $FF^T=I$.`,String.raw`Ma trận F trực giao, nên $FF^T=I$.`),
        b(String.raw`Thus $FPF^T=2FF^T=2I$.`,String.raw`Vì vậy $FPF^T=2FF^T=2I$.`),
        b(String.raw`Adding process noise yields $P^-=2I+I=3I$.`,String.raw`Cộng nhiễu quá trình cho $P^-=2I+I=3I$.`),
      ]},
      {prompt:b(String.raw`Let $F=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, $P=\operatorname{diag}(1,2)$ and $Q=\operatorname{diag}(0.2,0.5)$. Compute $FPF^T+Q$.`,String.raw`Cho $F=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, $P=\operatorname{diag}(1,2)$, $Q=\operatorname{diag}(0.2,0.5)$. Hãy tính $FPF^T+Q$.`),solution:[
        b(String.raw`First $FP=\begin{pmatrix}1&2\\0&2\end{pmatrix}$.`,String.raw`Trước hết $FP=\begin{pmatrix}1&2\\0&2\end{pmatrix}$.`),
        b(String.raw`Multiplying by $F^T$ gives $FPF^T=\begin{pmatrix}3&2\\2&2\end{pmatrix}$.`,String.raw`Nhân tiếp với $F^T$ cho $FPF^T=\begin{pmatrix}3&2\\2&2\end{pmatrix}$.`),
        b(String.raw`Add Q to obtain $P^-=\begin{pmatrix}3.2&2\\2&2.5\end{pmatrix}$.`,String.raw`Cộng Q thu được $P^-=\begin{pmatrix}3.2&2\\2&2.5\end{pmatrix}$.`),
      ]},
      {prompt:b(String.raw`For scalar F=−2, prior variance P=0.5 and independent process variance Q=0.25, compute the forecast variance and quantify the omission error if Q is dropped.`,String.raw`Với F=−2 vô hướng, phương sai tiên nghiệm P=0.5 và phương sai nhiễu độc lập Q=0.25, hãy tính phương sai dự báo và sai số nếu bỏ Q.`),solution:[
        b(String.raw`The transformed prior variance is $F^2P=(-2)^2(0.5)=2$.`,String.raw`Phương sai tiên nghiệm sau biến đổi là $F^2P=(-2)^2(0.5)=2$.`),
        b(String.raw`Adding process noise gives $P^-=2+0.25=2.25$.`,String.raw`Cộng nhiễu quá trình cho $P^-=2+0.25=2.25$.`),
        b(String.raw`Dropping Q reports 2 and understates the variance by exactly 0.25.`,String.raw`Bỏ Q sẽ báo 2 và đánh giá thấp phương sai đúng 0.25.`),
      ]},
    ],
    reviewNote: 'Checked FPFᵀ multiplication, dimensions, vanishing cross terms under independence and addition of Q. Restriction: without independence the covariance expansion needs cross-covariance terms.',
    sourceIds: ['o-sarkka'],
  },
  'm2-w079-e4': {
    application: b(String.raw`Observability is deterministic identifiability of the initial state from a finite output stack. Full column rank gives uniqueness; a null direction produces indistinguishable states.`,String.raw`Tính quan sát là khả năng nhận diện tất định trạng thái ban đầu từ vector đầu ra hữu hạn. Hạng cột đầy đủ cho tính duy nhất; hướng kernel tạo các trạng thái không phân biệt được.`),
    formula: b(String.raw`For $x_{t+1}=Fx_t,y_t=Hx_t$, stacking $y_0,\ldots,y_{d-1}$ gives $Y=Ox_0$ with $O=[H;HF;\ldots;HF^{d-1}]$. The state is uniquely determined for every output-compatible state iff $\operatorname{rank}(O)=d$.`,String.raw`Với $x_{t+1}=Fx_t,y_t=Hx_t$, ghép $y_0,\ldots,y_{d-1}$ được $Y=Ox_0$, trong đó $O=[H;HF;\ldots;HF^{d-1}]$. Trạng thái được xác định duy nhất khi và chỉ khi $\operatorname{rank}(O)=d$.`),
    steps: [
      b(String.raw`Repeated substitution gives $y_0=Hx_0$, $y_1=HFx_0$, and generally $y_j=HF^jx_0$.`,String.raw`Thế lặp cho $y_0=Hx_0$, $y_1=HFx_0$ và tổng quát $y_j=HF^jx_0$.`),
      b(String.raw`Stacking these d equations yields $Y=Ox_0$.`,String.raw`Ghép d phương trình này thu được $Y=Ox_0$.`),
      b(String.raw`If O has full column rank, $O\delta=0$ implies $\delta=0$, so two states producing the same Y must coincide.`,String.raw`Nếu O đủ hạng cột, $O\delta=0$ suy ra $\delta=0$, nên hai trạng thái tạo cùng Y phải trùng nhau.`),
      b(String.raw`If rank is deficient, choose $\delta\ne0$ in $\ker O$; $x_0$ and $x_0+\delta$ produce identical outputs, disproving uniqueness.`,String.raw`Nếu hạng thiếu, chọn $\delta\ne0$ trong $\ker O$; $x_0$ và $x_0+\delta$ tạo đầu ra giống nhau, bác bỏ tính duy nhất.`),
    ],
    primarySolution: [
      b(String.raw`For each $j=0,\ldots,d-1$, the dynamics give $x_j=F^jx_0$, so $y_j=HF^jx_0$.`,String.raw`Với mỗi $j=0,\ldots,d-1$, động lực cho $x_j=F^jx_0$, nên $y_j=HF^jx_0$.`),
      b(String.raw`Stacking yields $Y=Ox_0$ with the stated observability matrix.`,String.raw`Ghép lại được $Y=Ox_0$ với ma trận quan sát đã nêu.`),
      b(String.raw`If rank O=d, the null space is zero; equality $Ox_0=Ox'_0$ then forces $x_0=x'_0$.`,String.raw`Nếu hạng O=d, kernel bằng không; đẳng thức $Ox_0=Ox'_0$ buộc $x_0=x'_0$.`),
      b(String.raw`Conversely, if rank O<d, take $\delta\ne0$ in its null space. Then $O(x_0+\delta)=Ox_0$, so uniqueness fails. This proves both directions.`,String.raw`Ngược lại, nếu hạng O<d, lấy vector kernel $\delta\ne0$. Khi đó $O(x_0+\delta)=Ox_0$, nên tính duy nhất thất bại. Điều này chứng minh cả hai chiều.`),
    ],
    companions: [
      {prompt:b(String.raw`For $F=I_2$ and $H=(1,1)$ with d=2 observations, construct O and a null direction.`,String.raw`Với $F=I_2$, $H=(1,1)$ và d=2 quan sát, hãy dựng O và một hướng kernel.`),solution:[
        b(String.raw`Since $HF=H$, the matrix is $O=\begin{pmatrix}1&1\\1&1\end{pmatrix}$.`,String.raw`Vì $HF=H$, ma trận là $O=\begin{pmatrix}1&1\\1&1\end{pmatrix}$.`),
        b(String.raw`Its two rows coincide, so rank O=1<2.`,String.raw`Hai hàng trùng nhau, nên hạng O=1<2.`),
        b(String.raw`The vector $\delta=(1,-1)^T$ satisfies $O\delta=0$, making states along this direction invisible.`,String.raw`Vector $\delta=(1,-1)^T$ thỏa $O\delta=0$, làm hướng trạng thái này không quan sát được.`),
      ]},
      {prompt:b(String.raw`For $F=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ and $H=(1,0)$, find O and recover $x_0$ from $y_0=2,y_1=5$.`,String.raw`Với $F=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, $H=(1,0)$, hãy tìm O và khôi phục $x_0$ từ $y_0=2,y_1=5$.`),solution:[
        b(String.raw`Compute $HF=(1,1)$, so $O=\begin{pmatrix}1&0\\1&1\end{pmatrix}$.`,String.raw`Tính $HF=(1,1)$, nên $O=\begin{pmatrix}1&0\\1&1\end{pmatrix}$.`),
        b(String.raw`Its determinant is 1, so it has full rank and the state is identifiable.`,String.raw`Định thức bằng 1, nên ma trận đủ hạng và trạng thái nhận diện được.`),
        b(String.raw`The equations give $x_{01}=2$ and $x_{01}+x_{02}=5$, hence $x_0=(2,3)^T$.`,String.raw`Phương trình cho $x_{01}=2$ và $x_{01}+x_{02}=5$, nên $x_0=(2,3)^T$.`),
      ]},
      {prompt:b(String.raw`Let $F=\operatorname{diag}(1,1.001)$ and $H=(1,1)$. Is the d=2 observability matrix full rank, and what numerical caution follows?`,String.raw`Cho $F=\operatorname{diag}(1,1.001)$ và $H=(1,1)$. Ma trận quan sát d=2 có đủ hạng không, và cần lưu ý số nào?`),solution:[
        b(String.raw`Here $O=\begin{pmatrix}1&1\\1&1.001\end{pmatrix}$.`,String.raw`Ở đây $O=\begin{pmatrix}1&1\\1&1.001\end{pmatrix}$.`),
        b(String.raw`Its determinant is $0.001\ne0$, so the state is uniquely identifiable in exact arithmetic.`,String.raw`Định thức là $0.001\ne0$, nên trạng thái được nhận diện duy nhất trong số học chính xác.`),
        b(String.raw`The rows are nearly parallel, so O is ill-conditioned; small observation errors can cause large state errors despite uniqueness.`,String.raw`Hai hàng gần song song nên O kém điều kiện; sai số quan sát nhỏ có thể gây sai số trạng thái lớn dù nghiệm duy nhất.`),
      ]},
    ],
    reviewNote: 'Checked stacked dynamics, null-space necessity and full-rank sufficiency. Restriction: full rank proves exact noiseless uniqueness; noisy estimation also depends on conditioning and measurement noise.',
    sourceIds: ['o-sarkka'],
  },
  'm2-w079-e5': {
    application: b(String.raw`A scalar sensor can observe only one projection of a two-component static state. A prior may yield a posterior distribution, but it cannot make an invisible direction identifiable from data.`,String.raw`Cảm biến vô hướng chỉ quan sát một phép chiếu của trạng thái tĩnh hai thành phần. Tiên nghiệm có thể tạo phân phối hậu nghiệm nhưng không làm hướng vô hình nhận diện từ dữ liệu.`),
    formula: b(String.raw`For $F=I_2,H=(1,0)$ and d=2, $O=[H;HF]=\begin{pmatrix}1&0\\1&0\end{pmatrix}$. Its null space contains $(0,1)^T$, so the second state coordinate is unobservable.`,String.raw`Với $F=I_2,H=(1,0)$ và d=2, $O=[H;HF]=\begin{pmatrix}1&0\\1&0\end{pmatrix}$. Kernel chứa $(0,1)^T$, nên tọa độ trạng thái thứ hai không quan sát được.`),
    steps: [
      b(String.raw`The first block row is $H=(1,0)$.`,String.raw`Hàng khối đầu là $H=(1,0)$.`),
      b(String.raw`Since $F=I_2$, the next row is $HF=H=(1,0)$.`,String.raw`Vì $F=I_2$, hàng tiếp theo $HF=H=(1,0)$.`),
      b(String.raw`Thus O has duplicate rows and rank one, below the state dimension two.`,String.raw`Vậy O có hai hàng trùng và hạng một, thấp hơn số chiều trạng thái hai.`),
      b(String.raw`The vector $(0,1)^T$ is in its null space, so changing that component leaves both observations unchanged.`,String.raw`Vector $(0,1)^T$ thuộc kernel, nên đổi thành phần đó không làm đổi hai quan sát.`),
    ],
    primarySolution: [
      b(String.raw`With $F=I_2$, $HF=H=(1,0)$, giving $O=\begin{pmatrix}1&0\\1&0\end{pmatrix}$.`,String.raw`Với $F=I_2$, $HF=H=(1,0)$, nên $O=\begin{pmatrix}1&0\\1&0\end{pmatrix}$.`),
      b(String.raw`Both rows measure only the first state coordinate; rank O=1<2.`,String.raw`Cả hai hàng chỉ đo tọa độ trạng thái thứ nhất; hạng O=1<2.`),
      b(String.raw`Take $\delta=(0,1)^T$. Then $O\delta=0$, so this direction is invisible at every stacked observation.`,String.raw`Lấy $\delta=(0,1)^T$. Khi đó $O\delta=0$, nên hướng này vô hình trong mọi quan sát ghép.`),
      b(String.raw`Adding a prior can regularize or constrain the estimate but does not create data identifiability of the second coordinate.`,String.raw`Thêm tiên nghiệm có thể chính quy hóa hay ràng buộc ước lượng nhưng không tạo khả năng nhận diện dữ liệu cho tọa độ thứ hai.`),
    ],
    companions: [
      {prompt:b(String.raw`For $F=I_2,H=(1,1)$ and two noiseless observations, find the repeated output and an invisible direction.`,String.raw`Với $F=I_2,H=(1,1)$ và hai quan sát không nhiễu, hãy tìm hàng đầu ra lặp lại và hướng vô hình.`),solution:[
        b(String.raw`The observability rows are H and HF, both $(1,1)$.`,String.raw`Các hàng quan sát là H và HF, đều bằng $(1,1)$.`),
        b(String.raw`Thus $O=\begin{pmatrix}1&1\\1&1\end{pmatrix}$ has rank 1.`,String.raw`Vậy $O=\begin{pmatrix}1&1\\1&1\end{pmatrix}$ có hạng 1.`),
        b(String.raw`The vector $(1,-1)^T$ is invisible because $O(1,-1)^T=0$.`,String.raw`Vector $(1,-1)^T$ vô hình vì $O(1,-1)^T=0$.`),
      ]},
      {prompt:b(String.raw`With $F=\operatorname{diag}(1,2)$ and $H=(1,0)$, form O for d=2 and identify which coordinate remains unseen.`,String.raw`Với $F=\operatorname{diag}(1,2)$ và $H=(1,0)$, hãy lập O khi d=2 và xác định tọa độ không được thấy.`),solution:[
        b(String.raw`Compute $HF=(1,0)$, so both rows of O are $(1,0)$.`,String.raw`Tính $HF=(1,0)$, nên cả hai hàng O là $(1,0)$.`),
        b(String.raw`Therefore O has rank one, not two.`,String.raw`Vì vậy O có hạng một, không phải hai.`),
        b(String.raw`The second coordinate is unobserved; $(0,1)^T$ is a null direction.`,String.raw`Tọa độ thứ hai không quan sát được; $(0,1)^T$ là hướng kernel.`),
      ]},
      {prompt:b(String.raw`Suppose a posterior estimate assigns a precise value to the unobserved second coordinate in the primary setup. Does that value come from these data? Explain the role of the prior.`,String.raw`Giả sử ước lượng hậu nghiệm gán giá trị chính xác cho tọa độ thứ hai không quan sát trong bài chính. Giá trị đó có đến từ dữ liệu này không? Hãy giải thích vai trò tiên nghiệm.`),solution:[
        b(String.raw`The measurement matrix and dynamics leave the second coordinate in the null space, so the observations carry no direct information about it.`,String.raw`Ma trận đo và động lực giữ tọa độ thứ hai trong kernel, nên quan sát không chứa thông tin trực tiếp về nó.`),
        b(String.raw`A prior or regularization may select a value or concentrate a posterior under additional assumptions.`,String.raw`Tiên nghiệm hoặc chính quy hóa có thể chọn giá trị hay làm hậu nghiệm tập trung dưới giả thiết bổ sung.`),
        b(String.raw`That precision comes from the prior/model restriction, not from data identifiability in the rank-deficient observation stack.`,String.raw`Độ chính xác đó đến từ tiên nghiệm/ràng buộc mô hình, không phải nhận diện dữ liệu trong ma trận quan sát thiếu hạng.`),
      ]},
    ],
    reviewNote: 'Checked both stacked rows, matrix rank and explicit null vector. Restriction: a posterior can use prior information, but rank deficiency means the data alone do not identify the second coordinate.',
    sourceIds: ['o-sarkka'],
  },
  'm2-w080-e1': {
    application: b(String.raw`A one-step innovation likelihood scores an observation relative to its predicted conditional variance. The log determinant and Mahalanobis term both matter; the result is one conditional contribution.`,String.raw`Likelihood innovation một bước chấm quan sát theo phương sai có điều kiện dự báo. Cả log định thức và số hạng Mahalanobis đều quan trọng; kết quả là một đóng góp có điều kiện.`),
    formula: b(String.raw`For an m-dimensional innovation $r\mid\mathcal F_{t-1}\sim N(0,S)$ with $S\succ0$, $\ell=-\tfrac12[m\log(2\pi)+\log|S|+r^TS^{-1}r]$.`,String.raw`Với innovation m chiều $r\mid\mathcal F_{t-1}\sim N(0,S)$, $S\succ0$, $\ell=-\tfrac12[m\log(2\pi)+\log|S|+r^TS^{-1}r]$.`),
    steps: [
      b(String.raw`Here m=1 and $r=-1.5,S=2.25$.`,String.raw`Ở đây m=1 và $r=-1.5,S=2.25$.`),
      b(String.raw`The standardized quadratic is $r^2/S=2.25/2.25=1$.`,String.raw`Số hạng quadratic chuẩn hóa là $r^2/S=2.25/2.25=1$.`),
      b(String.raw`Substitute to obtain $-\tfrac12[\log(2\pi)+\log(2.25)+1]$.`,String.raw`Thế vào được $-\tfrac12[\log(2\pi)+\log(2.25)+1]$.`),
      b(String.raw`Numerically this is about $-1.8244$. It is the conditional log-likelihood contribution for this observation.`,String.raw`Giá trị số xấp xỉ $-1.8244$. Đây là đóng góp log-likelihood có điều kiện của quan sát này.`),
    ],
    primarySolution: [
      b(String.raw`The scalar Mahalanobis term is $r^2/S=(-1.5)^2/2.25=1$.`,String.raw`Số hạng Mahalanobis vô hướng là $r^2/S=(-1.5)^2/2.25=1$.`),
      b(String.raw`Use the scalar log determinant $\log|S|=\log(2.25)$.`,String.raw`Dùng log định thức vô hướng $\log|S|=\log(2.25)$.`),
      b(String.raw`The contribution is $-\tfrac12[\log(2\pi)+\log(2.25)+1]$.`,String.raw`Đóng góp là $-\tfrac12[\log(2\pi)+\log(2.25)+1]$.`),
      b(String.raw`Since $\log(2\pi)\approx1.83788$ and $\log(2.25)\approx0.81093$, it equals approximately $-1.8244$.`,String.raw`Vì $\log(2\pi)\approx1.83788$ và $\log(2.25)\approx0.81093$, giá trị xấp xỉ $-1.8244$.`),
    ],
    companions: [
      {prompt:b(String.raw`For scalar innovation $r=2,S=4$, compute its conditional Gaussian log-likelihood contribution to four decimals.`,String.raw`Với innovation vô hướng $r=2,S=4$, hãy tính đóng góp log-likelihood Gaussian có điều kiện đến bốn chữ số thập phân.`),solution:[
        b(String.raw`The standardized quadratic is $r^2/S=4/4=1$.`,String.raw`Số hạng quadratic chuẩn hóa là $r^2/S=4/4=1$.`),
        b(String.raw`Insert the scalar normal terms: $-\tfrac12[\log(2\pi)+\log4+1]$.`,String.raw`Thế các số hạng chuẩn vô hướng: $-\tfrac12[\log(2\pi)+\log4+1]$.`),
        b(String.raw`Using $\log(2\pi)+\log4+1\approx4.22417$ gives approximately $-2.1121$.`,String.raw`Dùng $\log(2\pi)+\log4+1\approx4.22417$ được giá trị xấp xỉ $-2.1121$.`),
      ]},
      {prompt:b(String.raw`For a two-dimensional innovation $r=(1,-2)^T$ with $S=\operatorname{diag}(1,4)$, compute the Gaussian log-likelihood contribution.`,String.raw`Với innovation hai chiều $r=(1,-2)^T$ và $S=\operatorname{diag}(1,4)$, hãy tính đóng góp log-likelihood Gaussian.`),solution:[
        b(String.raw`The determinant is $|S|=4$, so $\log|S|=\log4$.`,String.raw`Định thức là $|S|=4$, nên $\log|S|=\log4$.`),
        b(String.raw`The quadratic is $r^TS^{-1}r=1^2/1+(-2)^2/4=2$.`,String.raw`Số hạng quadratic là $r^TS^{-1}r=1^2/1+(-2)^2/4=2$.`),
        b(String.raw`With m=2 the contribution is $-\tfrac12[2\log(2\pi)+\log4+2]\approx-3.5310$.`,String.raw`Với m=2, đóng góp là $-\tfrac12[2\log(2\pi)+\log4+2]\approx-3.5310$.`),
      ]},
      {prompt:b(String.raw`Two scalar observations have the same residual magnitude $r=3$, but predicted variances $S=1$ and $S=9$. Compute each contribution and explain the variance scaling.`,String.raw`Hai quan sát vô hướng cùng độ lớn residual $r=3$, nhưng phương sai dự báo lần lượt $S=1$ và $S=9$. Hãy tính mỗi đóng góp và giải thích co giãn phương sai.`),solution:[
        b(String.raw`For S=1, the bracket is $\log(2\pi)+0+9$, giving $\ell_1\approx-5.4189$.`,String.raw`Với S=1, ngoặc là $\log(2\pi)+0+9$, nên $\ell_1\approx-5.4189$.`),
        b(String.raw`For S=9, the quadratic is $9/9=1$ and the log variance is $\log9$, giving $\ell_9=-\tfrac12[\log(2\pi)+\log9+1]\approx-2.5176$.`,String.raw`Với S=9, quadratic là $9/9=1$, log phương sai là $\log9$, nên $\ell_9=-\tfrac12[\log(2\pi)+\log9+1]\approx-2.5176$.`),
        b(String.raw`The same residual is less extreme relative to the larger predicted variance, though the log-variance penalty is also included.`,String.raw`Cùng residual ít cực đoan hơn so với phương sai dự báo lớn, dù penalty log phương sai cũng được tính.`),
      ]},
    ],
    reviewNote: 'Recomputed r²/S, scalar log determinant and log constants against the stated formula. Restriction: ordinary Gaussian density needs S>0; this is a conditional contribution, not a model diagnostic.',
    sourceIds: ['o-sarkka'],
  },
  'm2-w080-e2': {
    application: b(String.raw`The chain rule factors a joint likelihood into history-conditional terms even when observations are dependent. In a linear Gaussian model, dependence enters through each conditional mean and covariance.`,String.raw`Quy tắc dây chuyền phân tích likelihood chung thành các số hạng có điều kiện theo lịch sử ngay cả khi quan sát phụ thuộc. Trong mô hình Gaussian tuyến tính, phụ thuộc đi qua trung bình và covariance có điều kiện từng bước.`),
    formula: b(String.raw`For any joint density, $p(y_{1:T}\mid\theta)=\prod_{t=1}^Tp(y_t\mid y_{1:t-1},\theta)$. If each conditional is $N(\mu_t,S_t)$ with $S_t\succ0$, then $\log p=-\tfrac12\sum_t[m\log(2\pi)+\log|S_t|+r_t^TS_t^{-1}r_t]$, where $r_t=y_t-\mu_t$.`,String.raw`Với mọi mật độ chung, $p(y_{1:T}\mid\theta)=\prod_{t=1}^Tp(y_t\mid y_{1:t-1},\theta)$. Nếu mỗi điều kiện là $N(\mu_t,S_t)$, $S_t\succ0$, thì $\log p=-\tfrac12\sum_t[m\log(2\pi)+\log|S_t|+r_t^TS_t^{-1}r_t]$, với $r_t=y_t-\mu_t$.`),
    steps: [
      b(String.raw`Apply the probability chain rule to the joint density; no independence or identical-distribution assumption is used.`,String.raw`Áp dụng quy tắc dây chuyền xác suất cho mật độ chung; không dùng giả thiết độc lập hay phân phối đồng nhất.`),
      b(String.raw`Under the model, insert the history-dependent conditional Gaussian factor with mean $\mu_t$ and covariance $S_t$.`,String.raw`Theo mô hình, thế nhân tử Gaussian có điều kiện phụ thuộc lịch sử với trung bình $\mu_t$ và covariance $S_t$.`),
      b(String.raw`Its log density contributes $-\tfrac12[m\log(2\pi)+\log|S_t|+r_t^TS_t^{-1}r_t]$.`,String.raw`Log mật độ đóng góp $-\tfrac12[m\log(2\pi)+\log|S_t|+r_t^TS_t^{-1}r_t]$.`),
      b(String.raw`Taking the log of the product sums these terms. Serial dependence is encoded by conditioning history in $\mu_t,S_t$.`,String.raw`Lấy log tích sẽ cộng các số hạng này. Phụ thuộc chuỗi được mã hóa qua lịch sử điều kiện trong $\mu_t,S_t$.`),
    ],
    primarySolution: [
      b(String.raw`The chain rule gives $p(y_{1:T}\mid\theta)=p(y_1\mid\theta)\prod_{t=2}^Tp(y_t\mid y_{1:t-1},\theta)$.`,String.raw`Quy tắc dây chuyền cho $p(y_{1:T}\mid\theta)=p(y_1\mid\theta)\prod_{t=2}^Tp(y_t\mid y_{1:t-1},\theta)$.`),
      b(String.raw`The state-space model supplies each factor as a conditional Gaussian $N(\mu_t,S_t)$, not as an IID marginal.`,String.raw`Mô hình trạng thái cung cấp mỗi nhân tử là Gaussian có điều kiện $N(\mu_t,S_t)$, không phải phân phối biên IID.`),
      b(String.raw`Insert its density and define innovation $r_t=y_t-\mu_t$; positive-definite $S_t$ makes the determinant and inverse valid.`,String.raw`Thế mật độ vào và đặt innovation $r_t=y_t-\mu_t$; $S_t$ xác định dương làm định thức và nghịch đảo hợp lệ.`),
      b(String.raw`Taking logs changes the product to the stated sum. This factorization is exact by the chain rule; dependence is represented in history-conditioned parameters.`,String.raw`Lấy log đổi tích thành tổng đã nêu. Phân tích này chính xác theo quy tắc dây chuyền; phụ thuộc nằm trong tham số có điều kiện theo lịch sử.`),
    ],
    companions: [
      {prompt:b(String.raw`Suppose $Y_1\sim N(0,1)$ and $Y_2\mid Y_1\sim N(0.5Y_1,2)$. Write the joint density factorization and explain why it is not an IID product.`,String.raw`Giả sử $Y_1\sim N(0,1)$ và $Y_2\mid Y_1\sim N(0.5Y_1,2)$. Hãy viết phân tích mật độ chung và giải thích vì sao đây không phải tích IID.`),solution:[
        b(String.raw`By the chain rule, $p(y_1,y_2)=p(y_1)p(y_2\mid y_1)$.`,String.raw`Theo quy tắc dây chuyền, $p(y_1,y_2)=p(y_1)p(y_2\mid y_1)$.`),
        b(String.raw`The first factor is $\phi(y_1)$; the second is the normal density with mean $0.5y_1$ and variance 2.`,String.raw`Nhân tử đầu là $\phi(y_1)$; nhân tử sau là mật độ chuẩn có trung bình $0.5y_1$, phương sai 2.`),
        b(String.raw`Because the second conditional mean depends on the first observation, the factorization is not a product of identical independent marginals.`,String.raw`Vì trung bình có điều kiện thứ hai phụ thuộc quan sát đầu, phân tích không phải tích các phân phối biên IID độc lập.`),
      ]},
      {prompt:b(String.raw`For a scalar two-step model, let $Y_1\sim N(1,4)$ and $Y_2\mid Y_1\sim N(Y_1,1)$. State the conditional parameters and the chain-rule log likelihood at observations (2,3).`,String.raw`Với mô hình vô hướng hai bước, cho $Y_1\sim N(1,4)$ và $Y_2\mid Y_1\sim N(Y_1,1)$. Hãy nêu tham số có điều kiện và log-likelihood quy tắc dây chuyền tại quan sát (2,3).`),solution:[
        b(String.raw`The first residual is $2-1=1$ with variance 4; the second conditional residual is $3-2=1$ with variance 1.`,String.raw`Residual đầu là $2-1=1$, phương sai 4; residual có điều kiện sau là $3-2=1$, phương sai 1.`),
        b(String.raw`The log density is the sum $-\tfrac12[\log(2\pi)+\log4+1/4]-\tfrac12[\log(2\pi)+0+1]$.`,String.raw`Log mật độ là tổng $-\tfrac12[\log(2\pi)+\log4+1/4]-\tfrac12[\log(2\pi)+0+1]$.`),
        b(String.raw`The product is valid despite dependence because the second factor is conditional on the observed first value.`,String.raw`Tích này hợp lệ dù có phụ thuộc vì nhân tử thứ hai là có điều kiện theo giá trị đầu đã quan sát.`),
      ]},
      {prompt:b(String.raw`A model has conditional factors $Y_t\mid Y_{1:t-1}\sim N(\mu_t,S_t)$ with $S_t>0$. Is the likelihood factorization still exact if the observations are dependent? State the needed distinction.`,String.raw`Mô hình có các nhân tử có điều kiện $Y_t\mid Y_{1:t-1}\sim N(\mu_t,S_t)$, $S_t>0$. Phân tích likelihood còn chính xác nếu quan sát phụ thuộc không? Hãy nêu điểm phân biệt cần thiết.`),solution:[
        b(String.raw`The chain rule always factors a joint density into conditional densities when the density exists.`,String.raw`Quy tắc dây chuyền luôn phân tích mật độ chung thành các mật độ có điều kiện khi mật độ tồn tại.`),
        b(String.raw`Dependence changes the conditional parameters and does not invalidate the product.`,String.raw`Phụ thuộc làm đổi tham số có điều kiện nhưng không làm tích mất hiệu lực.`),
        b(String.raw`The Gaussian log formula additionally requires the stated conditional Gaussian model and positive conditional variances; it does not require independent observations.`,String.raw`Công thức log Gaussian còn cần mô hình Gaussian có điều kiện và phương sai có điều kiện dương; không cần các quan sát độc lập.`),
      ]},
    ],
    reviewNote: 'Checked chain-rule indexing, conditional Gaussian normalization, determinant term and positive-definite condition. Restriction: exact factorization is general, but the displayed Gaussian factors require a correctly specified conditional Gaussian model.',
    sourceIds: ['o-sarkka'],
  },
  'm2-w080-e3': {
    application: b(String.raw`The scalar Riccati update reduces uncertainty by the information in an observation. Positive observation noise prevents a perfect zero-variance collapse in the supplied fixture.`,String.raw`Cập nhật Riccati vô hướng giảm bất định theo thông tin quan sát. Nhiễu quan sát dương ngăn phương sai sụp về không hoàn toàn trong ví dụ đã cho.`),
    formula: b(String.raw`For scalar prior variance $P^-$, observation coefficient H and noise variance R, $S=H^2P^-+R$, $K=P^-H/S$, and $P^+=P^--(P^-H)^2/S=P^-R/S$.`,String.raw`Với phương sai tiên nghiệm vô hướng $P^-$, hệ số quan sát H và phương sai nhiễu R, $S=H^2P^-+R$, $K=P^-H/S$, và $P^+=P^--(P^-H)^2/S=P^-R/S$.`),
    steps: [
      b(String.raw`Compute $S=2^2(3)+1=13$.`,String.raw`Tính $S=2^2(3)+1=13$.`),
      b(String.raw`The gain is $K=3(2)/13=6/13$.`,String.raw`Gain là $K=3(2)/13=6/13$.`),
      b(String.raw`The reduction is $(P^-H)^2/S=6^2/13=36/13$.`,String.raw`Mức giảm là $(P^-H)^2/S=6^2/13=36/13$.`),
      b(String.raw`Thus $P^+=3-36/13=3/13>0$, also equal to $P^-R/S$.`,String.raw`Vậy $P^+=3-36/13=3/13>0$, cũng bằng $P^-R/S$.`),
    ],
    primarySolution: [
      b(String.raw`Use the observation equation to compute $S=HP^-H^T+R=4(3)+1=13$.`,String.raw`Dùng phương trình quan sát tính $S=HP^-H^T+R=4(3)+1=13$.`),
      b(String.raw`Then $K=P^-H/S=6/13$.`,String.raw`Khi đó $K=P^-H/S=6/13$.`),
      b(String.raw`The covariance reduction is $P^-H S^{-1}H P^-=36/13$.`,String.raw`Mức giảm covariance là $P^-H S^{-1}H P^-=36/13$.`),
      b(String.raw`So $P^+=3-36/13=3/13\approx0.2308\ge0$; equivalently $P^-R/S=3/13$.`,String.raw`Do đó $P^+=3-36/13=3/13\approx0.2308\ge0$; tương đương $P^-R/S=3/13$.`),
    ],
    companions: [
      {prompt:b(String.raw`For $P^-=2,H=1,R=2$, calculate S,K and posterior variance.`,String.raw`Với $P^-=2,H=1,R=2$, hãy tính S,K và phương sai hậu nghiệm.`),solution:[
        b(String.raw`The innovation variance is $S=1^2(2)+2=4$.`,String.raw`Phương sai innovation là $S=1^2(2)+2=4$.`),
        b(String.raw`The gain is $K=2/4=1/2$.`,String.raw`Gain là $K=2/4=1/2$.`),
        b(String.raw`The posterior variance is $P^+=2-4/4=1$, also $P^-R/S=1$.`,String.raw`Phương sai hậu nghiệm là $P^+=2-4/4=1$, cũng bằng $P^-R/S=1$.`),
      ]},
      {prompt:b(String.raw`For $P^-=1.5,H=-2,R=0.5$, compute S, K and P⁺, checking that the negative H changes the gain sign but not the variance reduction sign.`,String.raw`Với $P^-=1.5,H=-2,R=0.5$, hãy tính S,K,P⁺; kiểm tra H âm làm đổi dấu gain nhưng không đổi dấu mức giảm phương sai.`),solution:[
        b(String.raw`The innovation variance is $S=4(1.5)+0.5=6.5$.`,String.raw`Phương sai innovation là $S=4(1.5)+0.5=6.5$.`),
        b(String.raw`The gain is $K=(1.5)(-2)/6.5=-6/13$.`,String.raw`Gain là $K=(1.5)(-2)/6.5=-6/13$.`),
        b(String.raw`The reduction squares $P^-H=-3$, so $P^+=1.5-9/6.5=3/26\approx0.1154>0$.`,String.raw`Mức giảm bình phương $P^-H=-3$, nên $P^+=1.5-9/6.5=3/26\approx0.1154>0$.`),
      ]},
      {prompt:b(String.raw`Set $P^-=3,H=2,R=0$ as a noiseless scalar observation. Compute S,K,P⁺ and contrast it with positive R.`,String.raw`Đặt $P^-=3,H=2,R=0$ cho quan sát vô hướng không nhiễu. Hãy tính S,K,P⁺ và so sánh với R dương.`),solution:[
        b(String.raw`Here $S=H^2P^-=4(3)=12>0$, so the scalar inverse exists despite R=0.`,String.raw`Ở đây $S=H^2P^-=4(3)=12>0$, nên nghịch đảo vô hướng tồn tại dù R=0.`),
        b(String.raw`The gain is $K=6/12=1/2$.`,String.raw`Gain là $K=6/12=1/2$.`),
        b(String.raw`The posterior variance is $3-36/12=0$: exact noiseless measurement collapses uncertainty in this scalar observed direction.`,String.raw`Phương sai hậu nghiệm là $3-36/12=0$: phép đo chính xác không nhiễu triệt tiêu bất định ở hướng vô hướng được quan sát.`),
      ]},
    ],
    reviewNote: 'Recomputed S=13, K=6/13, reduction 36/13 and P⁺=3/13; checked the equivalent P⁻R/S identity. Restriction: R>0 prevents collapse here; R=0 can be valid if S remains invertible.',
    sourceIds: ['o-sarkka'],
  },
  'm2-w080-e4': {
    application: b(String.raw`Innovation diagnostics separate marginal calibration from temporal whiteness. A pooled histogram can look plausible while ordered residuals retain dependence.`,String.raw`Chẩn đoán innovation tách hiệu chỉnh biên khỏi tính trắng theo thời gian. Histogram gộp có thể trông hợp lý trong khi residual theo thứ tự vẫn phụ thuộc.`),
    formula: b(String.raw`Under a correctly specified Gaussian model with fixed true parameters and $S_t\succ0$, $e_t=S_t^{-1/2}r_t$ has conditional law $N(0,I)$ given the past; the innovation sequence is independent over time. Marginal and serial diagnostics test different features.`,String.raw`Dưới mô hình Gaussian đúng với tham số thật cố định và $S_t\succ0$, $e_t=S_t^{-1/2}r_t$ có luật có điều kiện $N(0,I)$ theo quá khứ; dãy innovation độc lập theo thời gian. Chẩn đoán biên và chuỗi kiểm tra các tính chất khác nhau.`),
    steps: [
      b(String.raw`Whitening by $S_t^{-1/2}$ transforms conditional covariance $S_t$ to identity and mean zero.`,String.raw`Làm trắng bằng $S_t^{-1/2}$ biến covariance có điều kiện $S_t$ thành ma trận đơn vị và kỳ vọng về không.`),
      b(String.raw`The Gaussian model therefore predicts $e_t\mid\mathcal F_{t-1}\sim N(0,I)$. A marginal QQ plot checks shape and quantile calibration.`,String.raw`Vì vậy mô hình Gaussian dự báo $e_t\mid\mathcal F_{t-1}\sim N(0,I)$. QQ plot biên kiểm tra dạng và hiệu chỉnh phân vị.`),
      b(String.raw`An ACF or portmanteau test checks serial correlation, which a pooled histogram cannot detect.`,String.raw`ACF hoặc kiểm định portmanteau kiểm tra tương quan chuỗi, điều histogram gộp không phát hiện.`),
      b(String.raw`With the true conditional law fixed, constant Gaussian conditional distributions imply independent innovations through sequential factorization; estimated parameters complicate that exact statement.`,String.raw`Khi luật có điều kiện thật đã cố định, các phân phối Gaussian điều kiện không đổi hàm ý innovation độc lập qua phân tích tuần tự; tham số ước lượng làm phát biểu chính xác phức tạp hơn.`),
    ],
    primarySolution: [
      b(String.raw`If $S_t$ is positive definite, multiplying $r_t$ by its inverse square root gives zero conditional mean and identity covariance.`,String.raw`Nếu $S_t$ xác định dương, nhân $r_t$ với căn nghịch đảo cho kỳ vọng có điều kiện không và covariance đơn vị.`),
      b(String.raw`Under the correctly specified Gaussian model, this yields $S_t^{-1/2}r_t\mid y_{1:t-1}\sim N(0,I)$.`,String.raw`Theo mô hình Gaussian đúng, điều này cho $S_t^{-1/2}r_t\mid y_{1:t-1}\sim N(0,I)$.`),
      b(String.raw`Check marginal mean, scale, tails and quantiles with summaries or a QQ plot.`,String.raw`Kiểm tra trung bình biên, thang đo, đuôi và phân vị bằng thống kê tóm tắt hoặc QQ plot.`),
      b(String.raw`Separately inspect the ordered ACF or a portmanteau statistic. A histogram discards order and cannot diagnose serial dependence.`,String.raw`Riêng biệt, xem ACF theo thứ tự hoặc thống kê portmanteau. Histogram bỏ thứ tự nên không chẩn đoán phụ thuộc chuỗi.`),
      b(String.raw`These are diagnostics, not proof; exact independence pertains to innovations under the true fixed-parameter conditional model, not automatically residuals after fitting.`,String.raw`Đây là chẩn đoán, không phải chứng minh; độc lập chính xác nói về innovation dưới mô hình có điều kiện với tham số thật cố định, không tự động đúng cho residual sau khi khớp.`),
    ],
    companions: [
      {prompt:b(String.raw`A standardized scalar innovation has empirical mean 0.02, variance 0.98 and a near-normal QQ plot, but sample ACF at lag 1 is 0.45. Which diagnostic signal is present and what does the histogram miss?`,String.raw`Innovation chuẩn hóa có trung bình thực nghiệm 0.02, phương sai 0.98, QQ gần chuẩn nhưng ACF mẫu lag 1 bằng 0.45. Có tín hiệu chẩn đoán nào, và histogram bỏ sót gì?`),solution:[
        b(String.raw`The mean and scale look close to their nominal values, and the QQ plot assesses marginal shape.`,String.raw`Trung bình và thang đo gần giá trị danh nghĩa; QQ plot đánh giá dạng biên.`),
        b(String.raw`An ACF of 0.45 signals substantial lag-one serial correlation for investigation.`,String.raw`ACF 0.45 báo hiệu tương quan chuỗi lag một đáng xem xét.`),
        b(String.raw`The histogram pools values without order, so it cannot reveal this temporal pattern.`,String.raw`Histogram gộp giá trị mà bỏ thứ tự, nên không thể lộ ra mẫu thời gian này.`),
      ]},
      {prompt:b(String.raw`For a two-dimensional innovation with $S=\begin{pmatrix}4&0\\0&9\end{pmatrix}$ and $r=(2,-3)^T$, standardize it and state its model-based conditional law.`,String.raw`Với innovation hai chiều có $S=\begin{pmatrix}4&0\\0&9\end{pmatrix}$ và $r=(2,-3)^T$, hãy chuẩn hóa và nêu luật có điều kiện theo mô hình.`),solution:[
        b(String.raw`The symmetric inverse square root is $S^{-1/2}=\operatorname{diag}(1/2,1/3)$.`,String.raw`Căn nghịch đảo đối xứng là $S^{-1/2}=\operatorname{diag}(1/2,1/3)$.`),
        b(String.raw`Multiplication gives standardized residual $(1,-1)^T$.`,String.raw`Phép nhân cho residual chuẩn hóa $(1,-1)^T$.`),
        b(String.raw`Under a correctly specified fixed-parameter Gaussian model, its random conditional law is $N(0,I_2)$; this one realized vector is not itself the distribution.`,String.raw`Theo mô hình Gaussian đúng với tham số cố định, luật ngẫu nhiên có điều kiện là $N(0,I_2)$; một vector quan sát không phải chính phân phối đó.`),
      ]},
      {prompt:b(String.raw`A fitted model's standardized residuals have a symmetric histogram but their squared values show strong lag-one autocorrelation. What feature does this suggest, and which diagnostic detects it?`,String.raw`Residual chuẩn hóa của mô hình khớp có histogram đối xứng nhưng bình phương residual có tự tương quan lag một mạnh. Điều này gợi ý gì và chẩn đoán nào phát hiện?`),solution:[
        b(String.raw`Symmetric pooled values address marginal sign balance but do not rule out changing conditional variance.`,String.raw`Giá trị gộp đối xứng nói về cân bằng dấu biên nhưng không loại trừ phương sai có điều kiện thay đổi.`),
        b(String.raw`Autocorrelation in squared residuals suggests volatility clustering or conditional heteroskedasticity.`,String.raw`Tự tương quan của bình phương residual gợi ý cụm biến động hoặc phương sai thay đổi có điều kiện.`),
        b(String.raw`Use an ACF or portmanteau diagnostic on squared innovations, alongside checks on the raw sequence.`,String.raw`Dùng ACF hoặc portmanteau trên innovation bình phương, cùng với kiểm tra chuỗi residual gốc.`),
      ]},
    ],
    reviewNote: 'Checked whitening covariance, conditional Gaussian law, distinction between marginal and temporal diagnostics, and fixed-parameter caveat. Restriction: diagnostics provide evidence, not proof of specification.',
    sourceIds: ['o-sarkka'],
  },
  'm2-w080-e5': {
    application: b(String.raw`Ordering can reveal dependence that pooled residual summaries hide. An alternating standardized sequence has balanced marginal signs but extreme negative lag-one association.`,String.raw`Thứ tự có thể lộ phụ thuộc mà thống kê residual gộp che đi. Dãy chuẩn hóa luân phiên có dấu biên cân bằng nhưng liên hệ lag một âm mạnh.`),
    formula: b(String.raw`For a long even alternating sequence $e_t=(-1)^t$, the mean is zero and marginal variance is one, while $e_te_{t-1}=-1$ at every adjacent pair. Thus the lag-one sample correlation approaches −1.`,String.raw`Với dãy luân phiên dài chẵn $e_t=(-1)^t$, trung bình bằng không, phương sai biên bằng một, nhưng $e_te_{t-1}=-1$ ở mọi cặp kề. Vì vậy tương quan mẫu lag một tiến đến −1.`),
    steps: [
      b(String.raw`Equal counts of +1 and −1 give pooled mean zero and unit second moment.`,String.raw`Số lượng +1 và −1 bằng nhau cho trung bình gộp không và moment bậc hai bằng một.`),
      b(String.raw`Every adjacent product is $-1$, so the lag-one cross-product average is near $-1$.`,String.raw`Mọi tích kề bằng $-1$, nên trung bình tích chéo lag một gần $-1$.`),
      b(String.raw`The exact alternating two-point marginal is not Gaussian, and the serial dependence also violates independent innovations.`,String.raw`Phân phối biên hai điểm luân phiên chính xác không Gaussian, còn phụ thuộc chuỗi cũng vi phạm giả thiết innovation độc lập.`),
      b(String.raw`A histogram ignores ordering; inspect the residual ACF or portmanteau statistic to expose the near −1 lag-one correlation.`,String.raw`Histogram bỏ thứ tự; xem ACF residual hoặc thống kê portmanteau để thấy tương quan lag một gần −1.`),
    ],
    primarySolution: [
      b(String.raw`The equal numbers of +1 and −1 make the pooled mean zero; each squared value is one, so the pooled variance is one.`,String.raw`Số lượng +1 và −1 bằng nhau làm trung bình gộp bằng không; bình phương mỗi giá trị là một, nên phương sai gộp bằng một.`),
      b(String.raw`Each consecutive product is $-1$. For n observations, the usual lag-one sample correlation is approximately $-(n-1)/n$, near −1.`,String.raw`Mỗi tích hai giá trị liên tiếp bằng $-1$. Với n quan sát, tương quan mẫu lag một thường xấp xỉ $-(n-1)/n$, gần −1.`),
      b(String.raw`The exact two-point marginal also fails a Gaussian innovation model; at minimum, temporal independence is plainly false.`,String.raw`Phân phối biên hai điểm chính xác cũng không đúng mô hình innovation Gaussian; ít nhất tính độc lập thời gian rõ ràng sai.`),
      b(String.raw`An ordered ACF or Ljung–Box-type statistic detects the pattern, whereas a pooled histogram discards the temporal order.`,String.raw`ACF theo thứ tự hoặc thống kê kiểu Ljung–Box phát hiện mẫu này, còn histogram gộp bỏ mất thứ tự thời gian.`),
    ],
    companions: [
      {prompt:b(String.raw`For $e=(1,-1,1,-1,1,-1)$, compute its mean, second moment and lag-one cross-product average using denominator n−1.`,String.raw`Với $e=(1,-1,1,-1,1,-1)$, hãy tính trung bình, moment bậc hai và trung bình tích lag một với mẫu số n−1.`),solution:[
        b(String.raw`There are three +1 and three −1 values, so the mean is zero.`,String.raw`Có ba giá trị +1 và ba giá trị −1, nên trung bình bằng không.`),
        b(String.raw`Every square is one, so the empirical second moment is one.`,String.raw`Bình phương mỗi số bằng một, nên moment bậc hai thực nghiệm bằng một.`),
        b(String.raw`All five adjacent products equal −1, so their average with denominator n−1 is −1.`,String.raw`Cả năm tích kề bằng −1, nên trung bình với mẫu số n−1 bằng −1.`),
      ]},
      {prompt:b(String.raw`A residual sequence has a symmetric unit-scale histogram but sample lag-one ACF 0.7. Which model property is contradicted and what is a suitable diagnostic follow-up?`,String.raw`Chuỗi residual có histogram đối xứng, thang đo một nhưng ACF mẫu lag một bằng 0.7. Tính chất mô hình nào bị mâu thuẫn và chẩn đoán tiếp theo nào phù hợp?`),solution:[
        b(String.raw`The pooled histogram concerns marginal shape and scale only.`,String.raw`Histogram gộp chỉ liên quan dạng biên và thang đo.`),
        b(String.raw`A large lag-one ACF conflicts with the model's temporal independence/whiteness implication.`,String.raw`ACF lag một lớn mâu thuẫn với hàm ý độc lập/tính trắng theo thời gian của mô hình.`),
        b(String.raw`Inspect the ordered ACF and a portmanteau test, then examine model conditioning and possible omitted dynamics.`,String.raw`Xem ACF theo thứ tự và kiểm định portmanteau, rồi xét điều kiện hóa mô hình và động lực có thể bị bỏ sót.`),
      ]},
      {prompt:b(String.raw`Suppose standardized residuals alternate but their pooled variance is exactly one. Does that establish Gaussian innovations? Give two separate checks.`,String.raw`Giả sử residual chuẩn hóa luân phiên nhưng phương sai gộp đúng bằng một. Điều này có xác lập innovation Gaussian không? Hãy nêu hai kiểm tra riêng.`),solution:[
        b(String.raw`Unit variance checks only a second moment and cannot establish a normal marginal distribution.`,String.raw`Phương sai một chỉ kiểm tra moment bậc hai, không xác lập phân phối biên chuẩn.`),
        b(String.raw`A normal QQ plot or tail/quantile calibration check assesses the marginal Gaussian shape.`,String.raw`QQ plot chuẩn hoặc kiểm tra đuôi/hiệu chỉnh phân vị đánh giá dạng Gaussian biên.`),
        b(String.raw`An ACF or portmanteau diagnostic on the ordered residuals separately checks independence-related temporal structure.`,String.raw`ACF hoặc portmanteau trên residual có thứ tự kiểm tra riêng cấu trúc thời gian liên quan độc lập.`),
      ]},
    ],
    reviewNote: 'Checked centered unit moments, adjacent products and the distinction between non-Gaussian marginal shape and temporal dependence. Restriction: residual diagnostics flag model mismatch; fitted-parameter estimation also affects exact innovation independence claims.',
    sourceIds: ['o-sarkka'],
  },
};

export default lessons;
