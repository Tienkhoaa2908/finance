import {b, type ReviewedLesson} from './types';

type Pair = readonly [string, string];
const bi = ([en, vi]: Pair) => b(String.raw`${en}`, String.raw`${vi}`);
const q = (prompt: Pair, solution: Pair[]) => ({prompt: bi(prompt), solution: solution.map(bi)});

const reviewed: Record<string, ReviewedLesson> = {
  'f-w007-e1': {
    application: bi(['A symmetric quadratic energy is nonnegative in every direction exactly when none of its eigen-directions carries negative energy.', 'Năng lượng toàn phương đối xứng không âm theo mọi hướng khi và chỉ khi không hướng riêng nào mang năng lượng âm.']),
    formula: bi(['For a real symmetric $A=Q\\Lambda Q^T$, $x^TAx=\\sum_i\\lambda_i z_i^2$ with $z=Q^Tx$; hence $A\\succeq0$ iff every $\\lambda_i\\ge0$.', 'Với $A=Q\\Lambda Q^T$ đối xứng thực, $x^TAx=\\sum_i\\lambda_i z_i^2$ với $z=Q^Tx$; do đó $A\\succeq0$ khi và chỉ khi mọi $\\lambda_i\\ge0$.']),
    steps: [
      bi(['Assume $A$ is real symmetric, so the spectral theorem supplies an orthonormal eigenbasis $Q$.', 'Giả sử $A$ đối xứng thực, nên định lý phổ cho cơ sở riêng trực chuẩn $Q$.']),
      bi(['Write $z=Q^Tx$; then $x^TAx=z^T\\Lambda z=\\sum_i\\lambda_i z_i^2$.', 'Đặt $z=Q^Tx$; khi đó $x^TAx=z^T\\Lambda z=\\sum_i\\lambda_i z_i^2$.']),
      bi(['If all eigenvalues are nonnegative, each summand is nonnegative for every $x$.', 'Nếu mọi trị riêng không âm, từng số hạng không âm với mọi $x$.']),
      bi(['If some $\\lambda_j<0$, the unit eigenvector $q_j$ gives $q_j^TAq_j=\\lambda_j<0$, contradicting PSD.', 'Nếu có $\\lambda_j<0$, vector riêng đơn vị $q_j$ cho $q_j^TAq_j=\\lambda_j<0$, trái với PSD.'])
    ],
    primarySolution: [
      bi(['Because $A$ is real symmetric, write $A=Q\\Lambda Q^T$ with $Q$ orthogonal and real diagonal $\\Lambda$.', 'Vì $A$ đối xứng thực, viết $A=Q\\Lambda Q^T$ với $Q$ trực giao và $\\Lambda$ chéo thực.']),
      bi(['For any $x$, set $z=Q^Tx$; then $x^TAx=\\sum_i\\lambda_i z_i^2$.', 'Với mọi $x$, đặt $z=Q^Tx$; khi đó $x^TAx=\\sum_i\\lambda_i z_i^2$.']),
      bi(['If every $\\lambda_i\\ge0$, this sum is nonnegative, proving $A$ is PSD.', 'Nếu mọi $\\lambda_i\\ge0$, tổng này không âm, nên $A$ là PSD.']),
      bi(['If $A$ is PSD but some $\\lambda_j<0$, its unit eigenvector $q_j$ yields $q_j^TAq_j=\\lambda_j<0$, a contradiction.', 'Nếu $A$ PSD mà có $\\lambda_j<0$, vector riêng đơn vị $q_j$ cho $q_j^TAq_j=\\lambda_j<0$, mâu thuẫn.'])
    ],
    companions: [
      q(['For $A=\\begin{pmatrix}2&0\\\\0&0\\end{pmatrix}$, determine whether $A$ is PSD or positive definite and give a nonzero vector with zero quadratic value.', 'Với $A=\\begin{pmatrix}2&0\\\\0&0\\end{pmatrix}$, xác định $A$ PSD hay xác định dương và nêu vector khác không có giá trị toàn phương bằng không.'], [
        ['The eigenvalues are $2$ and $0$, so both are nonnegative but not both positive.', 'Hai trị riêng là $2$ và $0$, đều không âm nhưng không đều dương.'],
        ['For $x=(a,b)^T$, $x^TAx=2a^2\\ge0$, so $A$ is PSD.', 'Với $x=(a,b)^T$, $x^TAx=2a^2\\ge0$, nên $A$ PSD.'],
        ['Taking $x=(0,1)^T$ gives value $0$; thus strict positivity for every nonzero vector fails.', 'Chọn $x=(0,1)^T$ cho giá trị $0$; vì vậy tính dương nghiêm với mọi vector khác không không đúng.']
      ]),
      q(['Prove that a real symmetric matrix $A$ is positive definite exactly when every eigenvalue is strictly positive.', 'Chứng minh ma trận đối xứng thực $A$ xác định dương khi và chỉ khi mọi trị riêng dương nghiêm.'], [
        ['Write $A=Q\\Lambda Q^T$; then $x^TAx=\\sum_i\\lambda_i z_i^2$ for $z=Q^Tx$.', 'Viết $A=Q\\Lambda Q^T$; khi đó $x^TAx=\\sum_i\\lambda_i z_i^2$ với $z=Q^Tx$.'],
        ['If all $\\lambda_i>0$ and $x\\ne0$, then $z\\ne0$, so at least one positive term makes the sum strictly positive.', 'Nếu mọi $\\lambda_i>0$ và $x\\ne0$, thì $z\\ne0$, nên có ít nhất một số hạng dương làm tổng dương nghiêm.'],
        ['If $A$ is positive definite, testing each unit eigenvector gives $\\lambda_i=q_i^TAq_i>0$.', 'Nếu $A$ xác định dương, thử từng vector riêng đơn vị cho $\\lambda_i=q_i^TAq_i>0$.']
      ]),
      q(['The symmetric matrix $B=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$ has positive diagonal entries. Give a vector proving it is not PSD.', 'Ma trận đối xứng $B=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$ có các phần tử đường chéo dương. Hãy nêu vector chứng minh ma trận không PSD.'], [
        ['Choose $x=(1,-1)^T$, which tests a direction not detected by checking diagonal entries alone.', 'Chọn $x=(1,-1)^T$, là hướng không được phát hiện chỉ bằng cách kiểm tra đường chéo.'],
        ['Then $Bx=(-1,1)^T$, so $x^TBx=-2<0$.', 'Khi đó $Bx=(-1,1)^T$, nên $x^TBx=-2<0$.'],
        ['A negative quadratic value violates the definition of PSD despite both diagonal entries being positive.', 'Giá trị toàn phương âm vi phạm định nghĩa PSD dù cả hai phần tử đường chéo đều dương.']
      ])
    ],
    reviewNote: 'Checked both directions under the real-symmetry hypothesis; the eigenvector test also distinguishes PSD from positive definite.',
    sourceIds: ['f-1806sc']
  },
  'f-w007-e2': {
    application: bi(['The Rayleigh quotient is quadratic energy per squared length; for a symmetric matrix it averages eigenvalues using squared coordinates as weights.', 'Thương Rayleigh là năng lượng toàn phương trên bình phương độ dài; với ma trận đối xứng, nó lấy trung bình trị riêng theo trọng số là bình phương tọa độ.']),
    formula: bi(['For real symmetric $A$ with spectrum in $[m,M]$ and $x\\ne0$, $m\\le x^TAx/\\|x\\|^2\\le M$; endpoint equality means $x$ lies in the corresponding eigenspace.', 'Với $A$ đối xứng thực có phổ trong $[m,M]$ và $x\\ne0$, $m\\le x^TAx/\\|x\\|^2\\le M$; đẳng thức đầu mút nghĩa là $x$ thuộc không gian riêng tương ứng.']),
    steps: [
      bi(['Use symmetry to choose an orthonormal eigenbasis $q_i$ and express $x=\\sum_i c_iq_i$.', 'Dùng tính đối xứng để chọn cơ sở riêng trực chuẩn $q_i$ và biểu diễn $x=\\sum_i c_iq_i$.']),
      bi(['The quotient becomes $\\sum_i\\lambda_i c_i^2/\\sum_i c_i^2$, a weighted average with nonnegative weights summing to one.', 'Thương trở thành $\\sum_i\\lambda_i c_i^2/\\sum_i c_i^2$, một trung bình trọng số không âm có tổng bằng một.']),
      bi(['A weighted average lies between the least and greatest eigenvalues; equality at an endpoint forces all nonzero coordinates into that eigenspace.', 'Trung bình trọng số nằm giữa trị riêng nhỏ nhất và lớn nhất; đẳng thức đầu mút buộc mọi tọa độ khác không thuộc không gian riêng đó.']),
      bi(['Symmetry matters because a nonsymmetric matrix need not have an orthonormal eigenbasis, and its quadratic quotient can leave the eigenvalue interval.', 'Tính đối xứng quan trọng vì ma trận không đối xứng có thể không có cơ sở riêng trực chuẩn, khiến thương toàn phương vượt khoảng trị riêng.'])
    ],
    primarySolution: [
      bi(['By the spectral theorem, choose orthonormal eigenvectors $q_i$ with eigenvalues $1,4,7$ and write $x=\\sum_i c_iq_i$.', 'Theo định lý phổ, chọn vector riêng trực chuẩn $q_i$ ứng với trị riêng $1,4,7$ rồi viết $x=\\sum_i c_iq_i$.']),
      bi(['Then $x^TAx/\\|x\\|^2=(c_1^2+4c_2^2+7c_3^2)/(c_1^2+c_2^2+c_3^2)$, a convex weighted average.', 'Khi đó $x^TAx/\\|x\\|^2=(c_1^2+4c_2^2+7c_3^2)/(c_1^2+c_2^2+c_3^2)$, là trung bình lồi có trọng số.']),
      bi(['It lies in $[1,7]$; equality at $1$ or $7$ requires $x$ to belong entirely to the corresponding eigenspace.', 'Thương nằm trong $[1,7]$; đẳng thức tại $1$ hoặc $7$ đòi hỏi $x$ chỉ thuộc không gian riêng tương ứng.']),
      bi(['For a counterexample without symmetry, take $B=\\begin{pmatrix}1&10&0\\\\0&4&0\\\\0&0&7\\end{pmatrix}$. It has eigenvalues $1,4,7$, but $x=(1,1,0)^T$ gives $x^TBx/\\|x\\|^2=15/2>7$.', 'Lấy phản ví dụ khi thiếu đối xứng: $B=\\begin{pmatrix}1&10&0\\\\0&4&0\\\\0&0&7\\end{pmatrix}$. Ma trận có trị riêng $1,4,7$, nhưng $x=(1,1,0)^T$ cho $x^TBx/\\|x\\|^2=15/2>7$.'])
    ],
    companions: [
      q(['Let $A=\\operatorname{diag}(2,5,9)$ and $x=(1,2,2)^T$. Compute the Rayleigh quotient and say whether it is an endpoint.', 'Cho $A=\\operatorname{diag}(2,5,9)$ và $x=(1,2,2)^T$. Tính thương Rayleigh và cho biết có phải đầu mút không.'], [
        ['The squared coordinates are $1,4,4$, with total $9$.', 'Bình phương tọa độ là $1,4,4$, tổng bằng $9$.'],
        ['The quadratic value is $2(1)+5(4)+9(4)=58$, hence the quotient is $58/9$.', 'Giá trị toàn phương là $2(1)+5(4)+9(4)=58$, nên thương bằng $58/9$.'],
        ['Since $2<58/9<9$, it is strictly between the endpoint eigenvalues; the vector has components in multiple eigenspaces.', 'Vì $2<58/9<9$, thương nằm nghiêm ngặt giữa hai trị riêng đầu mút; vector có thành phần ở nhiều không gian riêng.']
      ]),
      q(['For $A=\\operatorname{diag}(2,2,6)$, characterize all $x\\ne0$ attaining the minimum Rayleigh quotient.', 'Với $A=\\operatorname{diag}(2,2,6)$, mô tả mọi $x\\ne0$ đạt thương Rayleigh nhỏ nhất.'], [
        ['The least eigenvalue is $2$, whose eigenspace is $\\{(a,b,0)^T:a,b\\in\\mathbb R\\}$.', 'Trị riêng nhỏ nhất là $2$, có không gian riêng $\\{(a,b,0)^T:a,b\\in\\mathbb R\\}$.'],
        ['For any nonzero vector in this plane, $x^TAx=2\\|x\\|^2$, so the quotient is $2$.', 'Với mọi vector khác không trong mặt phẳng này, $x^TAx=2\\|x\\|^2$, nên thương bằng $2$.'],
        ['Any vector with a nonzero third coordinate adds weight on eigenvalue $6$, making the quotient larger than $2$.', 'Vector có tọa độ thứ ba khác không thêm trọng số ở trị riêng $6$, làm thương lớn hơn $2$.']
      ]),
      q(['The matrix $C=\\begin{pmatrix}0&4\\\\0&1\\end{pmatrix}$ has eigenvalues $0,1$. Find a vector whose quadratic quotient exceeds $1$.', 'Ma trận $C=\\begin{pmatrix}0&4\\\\0&1\\end{pmatrix}$ có trị riêng $0,1$. Tìm vector có thương toàn phương lớn hơn $1$.'], [
        ['Take $x=(1,1)^T$; then $Cx=(4,1)^T$.', 'Chọn $x=(1,1)^T$; khi đó $Cx=(4,1)^T$.'],
        ['Compute $x^TCx=5$ and $\\|x\\|^2=2$, so the quotient is $5/2$.', 'Tính $x^TCx=5$ và $\\|x\\|^2=2$, nên thương bằng $5/2$.'],
        ['Since $5/2>1$, the symmetric-matrix Rayleigh bound fails here; $C$ is not symmetric.', 'Vì $5/2>1$, chặn Rayleigh cho ma trận đối xứng không đúng ở đây; $C$ không đối xứng.']
      ])
    ],
    reviewNote: 'Checked the weighted-average proof and equality spaces; the nonsymmetric counterexamples have the stated eigenvalues and quotients.',
    sourceIds: ['f-1806sc']
  },
  'f-w007-e3': {
    application: bi(['A zero-variance linear contrast means the measured variables obey an exact affine relation almost surely, which appears as a null direction of their covariance matrix.', 'Tổ hợp tuyến tính có phương sai bằng không nghĩa là các biến đo tuân theo quan hệ affine chính xác gần chắc chắn; điều này hiện ra như hướng kernel của ma trận hiệp phương sai.']),
    formula: bi(['If $X$ has finite second moments and covariance $\\Sigma$, then $v^T\\Sigma v=\\operatorname{Var}(v^TX)$; it is zero exactly when $v^TX=\\mathbb E[v^TX]$ almost surely.', 'Nếu $X$ có moment bậc hai hữu hạn và ma trận hiệp phương sai $\\Sigma$, thì $v^T\\Sigma v=\\operatorname{Var}(v^TX)$; giá trị này bằng không đúng khi $v^TX=\\mathbb E[v^TX]$ gần chắc chắn.']),
    steps: [
      bi(['Start from $\\Sigma=\\mathbb E[(X-\\mathbb EX)(X-\\mathbb EX)^T]$ and multiply on both sides by $v$.', 'Bắt đầu từ $\\Sigma=\\mathbb E[(X-\\mathbb EX)(X-\\mathbb EX)^T]$ rồi nhân hai phía với $v$.']),
      bi(['This gives $v^T\\Sigma v=\\mathbb E[(v^TX-\\mathbb E[v^TX])^2]$, the variance of the scalar contrast.', 'Ta được $v^T\\Sigma v=\\mathbb E[(v^TX-\\mathbb E[v^TX])^2]$, tức phương sai của tổ hợp vô hướng.']),
      bi(['The integrand is nonnegative; its expectation is zero iff it vanishes almost surely.', 'Biểu thức dưới kỳ vọng không âm; kỳ vọng bằng không khi và chỉ khi nó bằng không gần chắc chắn.']),
      bi(['Thus the contrast equals its mean almost surely, and the converse follows by substituting that constant relation.', 'Vì vậy tổ hợp bằng kỳ vọng của nó gần chắc chắn; chiều ngược lại có ngay khi thế quan hệ hằng số ấy.'])
    ],
    primarySolution: [
      bi(['Finite second moments make $v^TX$ square-integrable, and covariance algebra gives $v^T\\Sigma v=\\mathbb E[(v^T(X-\\mathbb EX))^2]$.', 'Moment bậc hai hữu hạn làm $v^TX$ có bình phương khả tích; khai triển hiệp phương sai cho $v^T\\Sigma v=\\mathbb E[(v^T(X-\\mathbb EX))^2]$.']),
      bi(['The right side is $\\operatorname{Var}(v^TX)$, a nonnegative expectation.', 'Vế phải là $\\operatorname{Var}(v^TX)$, một kỳ vọng không âm.']),
      bi(['If this expectation is zero, its squared random variable is zero almost surely, so $v^TX=v^T\\mathbb EX$ almost surely.', 'Nếu kỳ vọng bằng không, biến bình phương phải bằng không gần chắc chắn, nên $v^TX=v^T\\mathbb EX$ gần chắc chắn.']),
      bi(['If $v^TX$ is almost surely constant, its variance and therefore $v^T\\Sigma v$ are zero.', 'Nếu $v^TX$ hằng gần chắc chắn, phương sai và do đó $v^T\\Sigma v$ bằng không.'])
    ],
    companions: [
      q(['Suppose $\\Sigma=\\begin{pmatrix}4&4\\\\4&4\\end{pmatrix}$. Find every $v$ with $v^T\\Sigma v=0$ and state the implied relation for a random vector $X=(X_1,X_2)^T$.', 'Cho $\\Sigma=\\begin{pmatrix}4&4\\\\4&4\\end{pmatrix}$. Tìm mọi $v$ thỏa $v^T\\Sigma v=0$ và nêu quan hệ suy ra cho vector ngẫu nhiên $X=(X_1,X_2)^T$.'], [
        ['For $v=(a,b)^T$, $v^T\\Sigma v=4(a+b)^2$.', 'Với $v=(a,b)^T$, $v^T\\Sigma v=4(a+b)^2$.'],
        ['This is zero exactly when $b=-a$, so the null directions are multiples of $(1,-1)^T$.', 'Giá trị bằng không đúng khi $b=-a$, nên các hướng kernel là bội của $(1,-1)^T$.'],
        ['The contrast $X_1-X_2$ has variance zero and hence is almost surely constant; its value is the difference of the means.', 'Tổ hợp $X_1-X_2$ có phương sai bằng không nên hằng gần chắc chắn; giá trị là hiệu hai kỳ vọng.']
      ]),
      q(['Let $X=(Z,2Z+1)^T$ where $\\operatorname{Var}(Z)=3$. Compute $\\Sigma$ and verify the contrast $2X_1-X_2$ is constant.', 'Cho $X=(Z,2Z+1)^T$ với $\\operatorname{Var}(Z)=3$. Tính $\\Sigma$ và kiểm tra tổ hợp $2X_1-X_2$ là hằng.'], [
        ['The centered vector is $(Z-\\mathbb EZ,2(Z-\\mathbb EZ))^T$, so $\\Sigma=3\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}$.', 'Vector đã trừ kỳ vọng là $(Z-\\mathbb EZ,2(Z-\\mathbb EZ))^T$, nên $\\Sigma=3\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}$.'],
        ['For $v=(2,-1)^T$, $v^T\\Sigma v=3(4-8+4)=0$.', 'Với $v=(2,-1)^T$, $v^T\\Sigma v=3(4-8+4)=0$.'],
        ['Directly, $2X_1-X_2=2Z-(2Z+1)=-1$ for every outcome.', 'Tính trực tiếp, $2X_1-X_2=2Z-(2Z+1)=-1$ với mọi kết quả.']
      ]),
      q(['Let $W=(Z,Z)^T$ for a square-integrable scalar $Z$. Explain why $(1,-1)^TW$ has zero variance and identify a covariance null vector.', 'Cho vector $W=(Z,Z)^T$ với biến vô hướng $Z$ có bình phương khả tích. Giải thích vì sao $(1,-1)^TW$ có phương sai bằng không và nêu một hướng kernel hiệp phương sai.'], [
        ['The contrast equals $Z-Z=0$ for every outcome, so it is constant almost surely.', 'Tổ hợp bằng $Z-Z=0$ với mọi kết quả, nên hằng gần chắc chắn.'],
        ['Writing $\\Sigma=\\operatorname{Var}(Z)\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$ gives $\\Sigma(1,-1)^T=0$.', 'Viết $\\Sigma=\\operatorname{Var}(Z)\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$ cho $\\Sigma(1,-1)^T=0$.'],
        ['Thus $(1,-1)^T$ lies in the covariance nullspace and its quadratic form is zero.', 'Vì vậy $(1,-1)^T$ thuộc kernel hiệp phương sai và dạng toàn phương theo hướng này bằng không.']
      ])
    ],
    reviewNote: 'Verified the covariance identity under finite second moments and checked the null-contrast examples by direct substitution.',
    sourceIds: ['f-1806sc']
  },
  'f-w007-e4': {
    application: bi(['A real nonsymmetric transformation can rotate every real direction, so its eigenvalues need not be real and the symmetric spectral theorem cannot be assumed.', 'Phép biến đổi thực không đối xứng có thể quay mọi hướng thực, nên trị riêng không nhất thiết thực và không thể mặc nhiên dùng định lý phổ đối xứng.']),
    formula: bi(['For $R=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$, $\\det(R-\\lambda I)=\\lambda^2+1$, whose roots are $\\pm i$; also $R^T\\ne R$.', 'Với $R=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$, $\\det(R-\\lambda I)=\\lambda^2+1$ có nghiệm $\\pm i$; đồng thời $R^T\\ne R$.']),
    steps: [
      bi(['Choose a quarter-turn matrix whose entries are real but whose off-diagonal entries have opposite signs.', 'Chọn ma trận quay một phần tư vòng có phần tử thực nhưng hai phần tử ngoài đường chéo trái dấu.']),
      bi(['Compute its characteristic polynomial and solve it over the complex numbers.', 'Tính đa thức đặc trưng rồi giải trên trường số phức.']),
      bi(['Check directly that the transpose differs from the matrix; the real-symmetric hypothesis is absent.', 'Kiểm tra trực tiếp chuyển vị khác ma trận; giả thiết đối xứng thực không được thỏa.']),
      bi(['Therefore its nonreal eigenvalues do not contradict the theorem, which only covers real symmetric matrices.', 'Do đó trị riêng không thực không mâu thuẫn định lý, vì định lý chỉ áp dụng cho ma trận đối xứng thực.'])
    ],
    primarySolution: [
      bi(['Take $A=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$, a real matrix representing a quarter-turn.', 'Lấy $A=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$, ma trận thực biểu diễn phép quay một phần tư vòng.']),
      bi(['Its characteristic polynomial is $\\det(A-\\lambda I)=\\lambda^2+1$, with roots $\\lambda=\\pm i$.', 'Đa thức đặc trưng là $\\det(A-\\lambda I)=\\lambda^2+1$, có nghiệm $\\lambda=\\pm i$.']),
      bi(['Since $A^T\\ne A$, the matrix is not symmetric.', 'Vì $A^T\\ne A$, ma trận không đối xứng.']),
      bi(['The real symmetric spectral theorem requires $A^T=A$, so it makes no claim about this example.', 'Định lý phổ đối xứng thực đòi hỏi $A^T=A$, nên không phát biểu điều gì về ví dụ này.'])
    ],
    companions: [
      q(['Consider $B=\\begin{pmatrix}1&-3\\\\3&1\\end{pmatrix}$. Find its eigenvalues and explain why they are not real.', 'Xét $B=\\begin{pmatrix}1&-3\\\\3&1\\end{pmatrix}$. Tìm trị riêng và giải thích vì sao chúng không thực.'], [
        ['The characteristic equation is $(1-\\lambda)^2+9=0$.', 'Phương trình đặc trưng là $(1-\\lambda)^2+9=0$.'],
        ['Thus $1-\\lambda=\\pm3i$, giving $\\lambda=1\\mp3i$.', 'Suy ra $1-\\lambda=\\pm3i$, nên $\\lambda=1\\mp3i$.'],
        ['The matrix is real but nonsymmetric, so complex eigenvalues are allowed and the symmetric theorem does not apply.', 'Ma trận thực nhưng không đối xứng, nên trị riêng phức có thể xảy ra và định lý đối xứng không áp dụng.']
      ]),
      q(['Let $C=\\begin{pmatrix}1&8\\\\0&1\\end{pmatrix}$, whose only eigenvalue is $1$. Compute its quadratic quotient at $x=(1,1)^T$ and compare it with $1$.', 'Cho $C=\\begin{pmatrix}1&8\\\\0&1\\end{pmatrix}$ có trị riêng duy nhất là $1$. Tính thương toàn phương tại $x=(1,1)^T$ và so sánh với $1$.'], [
        ['Multiplication gives $Cx=(9,1)^T$, so $x^TCx=10$.', 'Nhân ma trận cho $Cx=(9,1)^T$, nên $x^TCx=10$.'],
        ['Since $x^Tx=2$, the quotient is $10/2=5$.', 'Vì $x^Tx=2$, thương bằng $10/2=5$.'],
        ['The value $5$ exceeds the sole eigenvalue $1$; this illustrates that symmetric Rayleigh bounds need symmetry.', 'Giá trị $5$ lớn hơn trị riêng duy nhất $1$; điều này cho thấy chặn Rayleigh cho ma trận đối xứng cần tính đối xứng.']
      ]),
      q(['Show that the real matrix $D=\\begin{pmatrix}0&-2\\\\2&0\\end{pmatrix}$ has no real eigenvector by solving $Dv=\\lambda v$ for real $v\\ne0$.', 'Chứng minh ma trận thực $D=\\begin{pmatrix}0&-2\\\\2&0\\end{pmatrix}$ không có vector riêng thực bằng cách giải $Dv=\\lambda v$ với $v\\ne0$ thực.'], [
        ['Its characteristic polynomial is $\\lambda^2+4$, which is strictly positive for every real $\\lambda$.', 'Đa thức đặc trưng là $\\lambda^2+4$, luôn dương với mọi $\\lambda$ thực.'],
        ['Therefore no real scalar $\\lambda$ makes $D-\\lambda I$ singular, so no nonzero real vector solves the eigenvector equation.', 'Vì thế không có số thực $\\lambda$ nào làm $D-\\lambda I$ suy biến, nên không vector thực khác không nào giải phương trình riêng.'],
        ['The matrix is nonsymmetric, so this does not violate the real symmetric spectral theorem.', 'Ma trận không đối xứng, nên điều này không vi phạm định lý phổ đối xứng thực.']
      ])
    ],
    reviewNote: 'Checked each characteristic polynomial; every example is real and nonsymmetric, outside the theorem hypothesis.',
    sourceIds: ['f-1806sc']
  },
  'f-w007-e5': {
    application: bi(['Minimizing a symmetric quadratic form over unit vectors finds its smallest eigenvalue; an attaining vector lies in the associated eigenspace.', 'Tối thiểu hóa dạng toàn phương đối xứng trên các vector đơn vị cho trị riêng nhỏ nhất; vector đạt cực tiểu thuộc không gian riêng tương ứng.']),
    formula: bi(['For real symmetric $A$, $\\min_{\\|x\\|_2=1}x^TAx=\\lambda_{\\min}(A)$; equality holds for unit vectors in the minimum-eigenvalue eigenspace.', 'Với $A$ đối xứng thực, $\\min_{\\|x\\|_2=1}x^TAx=\\lambda_{\\min}(A)$; đẳng thức đúng với vector đơn vị trong không gian riêng trị riêng nhỏ nhất.']),
    steps: [
      bi(['Find the eigenvalues from $\\det(A-\\lambda I)=0$ and select the least one.', 'Tìm trị riêng bằng $\\det(A-\\lambda I)=0$ rồi chọn trị riêng nhỏ nhất.']),
      bi(['Use the Rayleigh weighted-average bound to show every unit vector has quadratic value at least that eigenvalue.', 'Dùng chặn trung bình trọng số Rayleigh để thấy mọi vector đơn vị có giá trị toàn phương ít nhất bằng trị riêng đó.']),
      bi(['Solve $(A-\\lambda_{\\min}I)x=0$ for an eigenvector and normalize it.', 'Giải $(A-\\lambda_{\\min}I)x=0$ để tìm vector riêng rồi chuẩn hóa.']),
      bi(['Substitution into the spectral expansion verifies the normalized eigenvector attains the lower bound.', 'Thế vào khai triển phổ xác nhận vector riêng đã chuẩn hóa đạt chặn dưới.'])
    ],
    primarySolution: [
      bi(['Compute $\\det(A-\\lambda I)=(4-\\lambda)(2-\\lambda)-1=\\lambda^2-6\\lambda+7$, giving $\\lambda=3\\pm\\sqrt2$.', 'Tính $\\det(A-\\lambda I)=(4-\\lambda)(2-\\lambda)-1=\\lambda^2-6\\lambda+7$, được $\\lambda=3\\pm\\sqrt2$.']),
      bi(['The least eigenvalue is $3-\\sqrt2$, so the Rayleigh minimum on the unit circle is $3-\\sqrt2$.', 'Trị riêng nhỏ nhất là $3-\\sqrt2$, nên cực tiểu Rayleigh trên đường tròn đơn vị bằng $3-\\sqrt2$.']),
      bi(['Solving $(A-(3-\\sqrt2)I)x=0$ gives $x_2=-(1+\\sqrt2)x_1$.', 'Giải $(A-(3-\\sqrt2)I)x=0$ cho $x_2=-(1+\\sqrt2)x_1$.']),
      bi(['Normalize, for example $x=(1,-1-\\sqrt2)^T/\\sqrt{1+(1+\\sqrt2)^2}$; it is a unit eigenvector and attains the minimum.', 'Chuẩn hóa, chẳng hạn $x=(1,-1-\\sqrt2)^T/\\sqrt{1+(1+\\sqrt2)^2}$; đây là vector riêng đơn vị đạt cực tiểu.']),
      bi(['To diagonalize fully, set $u_-=x$ and $u_+=(1,\\sqrt2-1)^T/\\sqrt{1+(\\sqrt2-1)^2}$. Their dot product is zero, and each has norm one. Thus $Q=[u_-\\ u_+]$ is orthogonal and $Q^TAQ=\\operatorname{diag}(3-\\sqrt2,3+\\sqrt2)$.', 'Để chéo hóa đầy đủ, đặt $u_-=x$, $u_+=(1,\\sqrt2-1)^T/\\sqrt{1+(\\sqrt2-1)^2}$. Tích vô hướng bằng không, mỗi vector có chuẩn một. Vậy $Q=[u_-\\ u_+]$ trực giao và $Q^TAQ=\\operatorname{diag}(3-\\sqrt2,3+\\sqrt2)$.']),
      bi(['For any vector $v=Qz$, the quadratic form is $v^TAv=(3-\\sqrt2)z_1^2+(3+\\sqrt2)z_2^2$. This supplies the diagonalized form as well as the requested minimum.', 'Với vector bất kỳ $v=Qz$, dạng toàn phương là $v^TAv=(3-\\sqrt2)z_1^2+(3+\\sqrt2)z_2^2$. Đây là dạng đã chéo hóa cùng cực tiểu đề yêu cầu.'])
    ],
    companions: [
      q(['For $A=\\begin{pmatrix}3&1\\\\1&3\\end{pmatrix}$, find the minimum of $x^TAx$ on $\\|x\\|_2=1$ and give a unit vector attaining it.', 'Với $A=\\begin{pmatrix}3&1\\\\1&3\\end{pmatrix}$, tìm cực tiểu $x^TAx$ khi $\\|x\\|_2=1$ và nêu vector đơn vị đạt được.'], [
        ['The characteristic polynomial is $(3-\\lambda)^2-1$, so the eigenvalues are $2$ and $4$.', 'Đa thức đặc trưng là $(3-\\lambda)^2-1$, nên các trị riêng là $2$ và $4$.'],
        ['The minimum Rayleigh value is the smaller eigenvalue $2$.', 'Giá trị Rayleigh nhỏ nhất là trị riêng nhỏ hơn $2$.'],
        ['The vector $(1,-1)^T/\\sqrt2$ is a unit eigenvector for $2$, so it attains the minimum.', 'Vector $(1,-1)^T/\\sqrt2$ là vector riêng đơn vị ứng với $2$, nên đạt cực tiểu.']
      ]),
      q(['Let $B=\\operatorname{diag}(1,5,8)$. Characterize all unit vectors minimizing $x^TBx$.', 'Cho $B=\\operatorname{diag}(1,5,8)$. Mô tả mọi vector đơn vị tối thiểu hóa $x^TBx$.'], [
        ['The least eigenvalue is $1$, with eigenspace spanned by $e_1=(1,0,0)^T$.', 'Trị riêng nhỏ nhất là $1$, có không gian riêng sinh bởi $e_1=(1,0,0)^T$.'],
        ['A unit vector has quotient a weighted average of $1,5,8$, so its value is at least $1$.', 'Vector đơn vị có thương là trung bình trọng số của $1,5,8$, nên giá trị ít nhất là $1$.'],
        ['Equality requires zero coordinates in the other eigenspaces; thus the minimizers are $e_1$ and $-e_1$.', 'Đẳng thức đòi hỏi tọa độ ở các không gian riêng khác bằng không; vậy các vector đạt cực tiểu là $e_1$ và $-e_1$.']
      ]),
      q(['For $C=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$, verify directly that $u=(1,-1)^T/\\sqrt2$ gives the minimum quadratic value on the unit circle.', 'Với $C=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$, kiểm tra trực tiếp $u=(1,-1)^T/\\sqrt2$ cho giá trị toàn phương nhỏ nhất trên đường tròn đơn vị.'], [
        ['The characteristic polynomial is $(2-\\lambda)^2-1$, with eigenvalues $1$ and $3$.', 'Đa thức đặc trưng là $(2-\\lambda)^2-1$, có trị riêng $1$ và $3$.'],
        ['Multiplication gives $Cu=u$, so $u$ is an eigenvector for the least eigenvalue $1$.', 'Nhân ma trận cho $Cu=u$, nên $u$ là vector riêng ứng với trị riêng nhỏ nhất $1$.'],
        ['Since $\\|u\\|=1$, its quadratic value is $u^TCu=1$, equal to the Rayleigh lower bound.', 'Vì $\\|u\\|=1$, giá trị toàn phương là $u^TCu=1$, bằng chặn dưới Rayleigh.']
      ])
    ],
    reviewNote: 'Checked the characteristic polynomial, minimum eigenvalue, eigenvector equation and normalization. Second reading supplied both orthonormal eigenvectors and the full diagonalized quadratic requested in the prompt.',
    sourceIds: ['f-1806sc']
  },

  'f-w008-e1': {
    application: bi(['The singular value decomposition separates input directions that are ignored from those that are scaled and sent to orthogonal output directions.', 'Phân tích giá trị kỳ dị tách các hướng đầu vào bị triệt tiêu khỏi các hướng được co giãn và đưa tới các hướng đầu ra trực giao.']),
    formula: bi(['Every real $m\\times n$ matrix has $A=U\\Sigma V^T$ with orthogonal $U,V$ and nonnegative singular values; they are the square roots of eigenvalues of $A^TA$.', 'Mọi ma trận thực $m\\times n$ có $A=U\\Sigma V^T$ với $U,V$ trực giao và giá trị kỳ dị không âm; chúng là căn bậc hai trị riêng của $A^TA$.']),
    steps: [
      bi(['Compute $A^TA$ to identify the squared singular values and right singular directions.', 'Tính $A^TA$ để tìm bình phương giá trị kỳ dị và các hướng kỳ dị phải.']),
      bi(['Normalize its eigenvectors to form $V$; their images under $A$ determine the left singular directions.', 'Chuẩn hóa vector riêng để tạo $V$; ảnh của chúng qua $A$ xác định hướng kỳ dị trái.']),
      bi(['Place singular values on the rectangular diagonal of $\\Sigma$ and complete orthonormal bases if a full SVD is required.', 'Đặt giá trị kỳ dị lên đường chéo chữ nhật của $\\Sigma$ và hoàn chỉnh cơ sở trực chuẩn nếu cần SVD đầy đủ.']),
      bi(['Right singular vectors with singular value zero span $\\operatorname{null}(A)$.', 'Các vector kỳ dị phải có giá trị kỳ dị bằng không sinh ra $\\operatorname{null}(A)$.'])
    ],
    primarySolution: [
      bi(['Here $A^TA=\\begin{pmatrix}4&0\\\\0&0\\end{pmatrix}$, so its eigenvalues are $4,0$ and the singular values are $2,0$.', 'Ở đây $A^TA=\\begin{pmatrix}4&0\\\\0&0\\end{pmatrix}$, có trị riêng $4,0$ nên giá trị kỳ dị là $2,0$.']),
      bi(['Choose $U=I_3$, $V=I_2$, and $\\Sigma=\\begin{pmatrix}2&0\\\\0&0\\\\0&0\\end{pmatrix}$.', 'Chọn $U=I_3$, $V=I_2$ và $\\Sigma=\\begin{pmatrix}2&0\\\\0&0\\\\0&0\\end{pmatrix}$.']),
      bi(['Then $U\\Sigma V^T=A$, giving a full SVD with the required dimensions.', 'Khi đó $U\\Sigma V^T=A$, là SVD đầy đủ với kích thước phù hợp.']),
      bi(['The second coordinate is mapped to zero, hence $\\operatorname{null}(A)=\\operatorname{span}\\{(0,1)^T\\}$.', 'Tọa độ thứ hai bị ánh xạ về không, nên $\\operatorname{null}(A)=\\operatorname{span}\\{(0,1)^T\\}$.'])
    ],
    companions: [
      q(['For $B=\\begin{pmatrix}0&3\\\\0&0\\end{pmatrix}$, give its singular values, one SVD, and its nullspace.', 'Với $B=\\begin{pmatrix}0&3\\\\0&0\\end{pmatrix}$, hãy nêu giá trị kỳ dị, một SVD và không gian kernel.'], [
        ['The matrix $B^TB=\\begin{pmatrix}0&0\\\\0&9\\end{pmatrix}$ has eigenvalues $9,0$, so the singular values are $3,0$.', 'Ma trận $B^TB=\\begin{pmatrix}0&0\\\\0&9\\end{pmatrix}$ có trị riêng $9,0$, nên giá trị kỳ dị là $3,0$.'],
        ['Take $U=I_2$, $\\Sigma=\\operatorname{diag}(3,0)$, and $V=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$; then $U\\Sigma V^T=B$.', 'Chọn $U=I_2$, $\\Sigma=\\operatorname{diag}(3,0)$ và $V=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$; khi đó $U\\Sigma V^T=B$.'],
        ['Since $Bx=(3x_2,0)^T$, the nullspace is $\\operatorname{span}\\{(1,0)^T\\}$.', 'Vì $Bx=(3x_2,0)^T$, không gian kernel là $\\operatorname{span}\\{(1,0)^T\\}$.']
      ]),
      q(['Find an SVD and nullspace for $C=\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$.', 'Tìm SVD và không gian kernel của $C=\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$.'], [
        ['The matrix $C^TC=C^2$ has eigenvalues $4,0$, with unit right singular vectors $(1,1)^T/\\sqrt2$ and $(1,-1)^T/\\sqrt2$.', 'Ma trận $C^TC=C^2$ có trị riêng $4,0$, với vector kỳ dị phải đơn vị $(1,1)^T/\\sqrt2$ và $(1,-1)^T/\\sqrt2$.'],
        ['Set $U=V=\\frac1{\\sqrt2}\\begin{pmatrix}1&-1\\\\1&1\\end{pmatrix}$ and $\\Sigma=\\operatorname{diag}(2,0)$; then $U\\Sigma V^T=C$.', 'Đặt $U=V=\\frac1{\\sqrt2}\\begin{pmatrix}1&-1\\\\1&1\\end{pmatrix}$ và $\\Sigma=\\operatorname{diag}(2,0)$; khi đó $U\\Sigma V^T=C$.'],
        ['The zero singular direction is $(1,-1)^T$, so $\\operatorname{null}(C)=\\operatorname{span}\\{(1,-1)^T\\}$.', 'Hướng kỳ dị có giá trị không là $(1,-1)^T$, nên $\\operatorname{null}(C)=\\operatorname{span}\\{(1,-1)^T\\}$.']
      ]),
      q(['Let $D=\\begin{pmatrix}0&4&0\\\\0&0&0\\end{pmatrix}$. Describe its nonzero singular value and nullspace, and explain the input-output action.', 'Cho $D=\\begin{pmatrix}0&4&0\\\\0&0&0\\end{pmatrix}$. Mô tả giá trị kỳ dị khác không, không gian kernel và tác động đầu vào-đầu ra.'], [
        ['The only nonzero row has length $4$, and $D^TD=\\operatorname{diag}(0,16,0)$, so the singular values are $4,0$.', 'Hàng khác không duy nhất có độ dài $4$, còn $D^TD=\\operatorname{diag}(0,16,0)$, nên giá trị kỳ dị là $4,0$.'],
        ['For $x=(x_1,x_2,x_3)^T$, $Dx=(4x_2,0)^T$; only the second input coordinate is measured.', 'Với $x=(x_1,x_2,x_3)^T$, $Dx=(4x_2,0)^T$; chỉ tọa độ đầu vào thứ hai được giữ lại.'],
        ['Thus the nullspace is $\\{x:x_2=0\\}=\\operatorname{span}\\{e_1,e_3\\}$, two independent input directions annihilated by the map. For this wide matrix, $D^TD$ has two zero eigenvalues although the usual list of two singular values contains one zero.', 'Vì vậy kernel là $\\{x:x_2=0\\}=\\operatorname{span}\\{e_1,e_3\\}$, gồm hai hướng đầu vào độc lập bị ánh xạ về không. Với ma trận rộng này, $D^TD$ có hai trị riêng không dù danh sách hai giá trị kỳ dị thông thường chỉ có một giá trị không.']
      ])
    ],
    reviewNote: 'Checked each $A^TA$ spectrum and verified the displayed orthogonal factors multiply to the stated matrix.',
    sourceIds: ['f-1806sc']
  },
  'f-w008-e2': {
    application: bi(['When many coefficient vectors fit equally well, the Moore–Penrose pseudoinverse selects the one with the smallest Euclidean norm.', 'Khi nhiều vector hệ số khớp dữ liệu như nhau, giả nghịch đảo Moore–Penrose chọn vector có chuẩn Euclid nhỏ nhất.']),
    formula: bi(['For any real $A$, $A^+b$ minimizes $\\|Ax-b\\|_2$ and has minimum norm among all minimizers; if $A$ has full row rank, $A^+=A^T(AA^T)^{-1}$.', 'Với mọi ma trận thực $A$, $A^+b$ tối thiểu hóa $\\|Ax-b\\|_2$ và có chuẩn nhỏ nhất trong các nghiệm tối thiểu; nếu $A$ đủ hạng hàng, $A^+=A^T(AA^T)^{-1}$.']),
    steps: [
      bi(['First characterize all least-squares minimizers by their fitted vector, or solve the residual minimization directly.', 'Trước hết mô tả mọi nghiệm tối thiểu qua vector dự đoán, hoặc giải trực tiếp bài toán tối thiểu phần dư.']),
      bi(['Among these candidates, minimize $\\|x\\|_2$; geometrically, choose the solution orthogonal to $\\operatorname{null}(A)$.', 'Trong các ứng viên đó, tối thiểu $\\|x\\|_2$; về hình học, chọn nghiệm trực giao với $\\operatorname{null}(A)$.']),
      bi(['For a full-row-rank matrix use $A^+=A^T(AA^T)^{-1}$, then multiply by $b$.', 'Với ma trận đủ hạng hàng, dùng $A^+=A^T(AA^T)^{-1}$ rồi nhân với $b$.']),
      bi(['Verify the residual is least-squares optimal and compare norms across the full solution family.', 'Kiểm tra phần dư đạt tối thiểu bình phương và so sánh chuẩn trong toàn bộ họ nghiệm.'])
    ],
    primarySolution: [
      bi(['The equation $x_1+x_2=2$ gives every exact fit, so all least-squares solutions are $(t,2-t)^T$.', 'Phương trình $x_1+x_2=2$ cho mọi nghiệm khớp chính xác, nên toàn bộ nghiệm bình phương tối thiểu là $(t,2-t)^T$.']),
      bi(['Minimize $t^2+(2-t)^2=2t^2-4t+4$; its derivative is $4t-4$, which vanishes at $t=1$.', 'Tối thiểu $t^2+(2-t)^2=2t^2-4t+4$; đạo hàm là $4t-4$, bằng không tại $t=1$.']),
      bi(['Thus the unique minimum-norm fit is $x^+=(1,1)^T$.', 'Vậy nghiệm khớp có chuẩn nhỏ nhất duy nhất là $x^+=(1,1)^T$.']),
      bi(['Since $AA^T=2$, the full-row-rank formula gives $A^+=A^T/(AA^T)=(1/2,1/2)^T$, and $A^+b=(1,1)^T$.', 'Vì $AA^T=2$, công thức đủ hạng hàng cho $A^+=A^T/(AA^T)=(1/2,1/2)^T$ và $A^+b=(1,1)^T$.'])
    ],
    companions: [
      q(['For $A=[2\\ -1]$ and $b=3$, find every least-squares solution and the minimum-norm one.', 'Với $A=[2\\ -1]$ và $b=3$, tìm mọi nghiệm bình phương tối thiểu và nghiệm có chuẩn nhỏ nhất.'], [
        ['Exact fits satisfy $2x_1-x_2=3$, so write $x_2=2x_1-3$.', 'Nghiệm khớp chính xác thỏa $2x_1-x_2=3$, nên đặt $x_2=2x_1-3$.'],
        ['The minimum-norm solution is parallel to the row vector $(2,-1)^T$, giving $x^+=\\frac{3}{2^2+(-1)^2}(2,-1)^T=(6/5,-3/5)^T$.', 'Nghiệm có chuẩn nhỏ nhất song song với vector hàng $(2,-1)^T$, nên $x^+=\\frac{3}{2^2+(-1)^2}(2,-1)^T=(6/5,-3/5)^T$.'],
        ['Every vector on the line $2x_1-x_2=3$ has zero residual; the chosen point is its orthogonal projection closest to the origin.', 'Mọi vector trên đường $2x_1-x_2=3$ có phần dư bằng không; điểm đã chọn là hình chiếu vuông góc gần gốc nhất.']
      ]),
      q(['For $A=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$ and $b=(3,4)^T$, find all least-squares minimizers and the minimum-norm one.', 'Với $A=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$ và $b=(3,4)^T$, tìm mọi nghiệm tối thiểu bình phương và nghiệm có chuẩn nhỏ nhất.'], [
        ['For $x=(x_1,x_2)^T$, the residual is $(x_1-3,-4)^T$, so the squared error is $(x_1-3)^2+16$.', 'Với $x=(x_1,x_2)^T$, phần dư là $(x_1-3,-4)^T$, nên sai số bình phương là $(x_1-3)^2+16$.'],
        ['The minimum requires $x_1=3$; $x_2$ is unconstrained, so all minimizers are $(3,t)^T$.', 'Giá trị nhỏ nhất đòi hỏi $x_1=3$; $x_2$ tự do, nên mọi nghiệm tối thiểu có dạng $(3,t)^T$.'],
        ['The norm $9+t^2$ is smallest at $t=0$, giving $x^+ = (3,0)^T$ and residual $(0,-4)^T$.', 'Chuẩn bình phương $9+t^2$ nhỏ nhất tại $t=0$, cho $x^+=(3,0)^T$ và phần dư $(0,-4)^T$.']
      ]),
      q(['Let $A=\\begin{pmatrix}1&1&0\\\\1&1&0\\end{pmatrix}$ and $b=(2,2)^T$. Find every exact fit and the one of minimum norm.', 'Cho $A=\\begin{pmatrix}1&1&0\\\\1&1&0\\end{pmatrix}$ và $b=(2,2)^T$. Tìm mọi nghiệm khớp chính xác và nghiệm có chuẩn nhỏ nhất.'], [
        ['Both rows impose the same equation $x_1+x_2=2$; $x_3$ is also free.', 'Hai hàng cùng áp đặt phương trình $x_1+x_2=2$; $x_3$ cũng tự do.'],
        ['For fixed sum $2$, $x_1^2+x_2^2\\ge (x_1+x_2)^2/2=2$, with equality at $x_1=x_2=1$.', 'Với tổng cố định bằng $2$, $x_1^2+x_2^2\\ge (x_1+x_2)^2/2=2$, đẳng thức khi $x_1=x_2=1$.'],
        ['The free coordinate contributes $x_3^2$, minimized at zero; hence $x^+=(1,1,0)^T$.', 'Tọa độ tự do đóng góp $x_3^2$, nhỏ nhất tại không; vậy $x^+=(1,1,0)^T$.']
      ])
    ],
    reviewNote: 'Checked solution families, residual minima, and minimum-norm choices; the pseudoinverse formula is used only under full row rank.',
    sourceIds: ['f-1806sc']
  },
  'f-w008-e3': {
    application: bi(['Normal equations square the singular-value spread of a full-column-rank design, increasing sensitivity to rounding and perturbations.', 'Phương trình chuẩn bình phương độ chênh giá trị kỳ dị của thiết kế đủ hạng cột, làm tăng độ nhạy với làm tròn và nhiễu.']),
    formula: bi(['For full-column-rank $X$, $\\lambda_i(X^TX)=\\sigma_i(X)^2>0$; therefore $\\kappa_2(X^TX)=\\kappa_2(X)^2$.', 'Với $X$ đủ hạng cột, $\\lambda_i(X^TX)=\\sigma_i(X)^2>0$; do đó $\\kappa_2(X^TX)=\\kappa_2(X)^2$.']),
    steps: [
      bi(['Full column rank makes every singular value of $X$ positive and $X^TX$ positive definite.', 'Hạng cột đầy đủ làm mọi giá trị kỳ dị của $X$ dương và $X^TX$ xác định dương.']),
      bi(['The eigenvalues of $X^TX$ are precisely the squared singular values of $X$.', 'Các trị riêng của $X^TX$ chính là bình phương giá trị kỳ dị của $X$.']),
      bi(['For a positive definite matrix, $\\kappa_2$ is the ratio of largest to smallest eigenvalue.', 'Với ma trận xác định dương, $\\kappa_2$ là tỷ số trị riêng lớn nhất và nhỏ nhất.']),
      bi(['Substitute $\\sigma_{\\max}^2$ and $\\sigma_{\\min}^2$ to obtain the square of $\\sigma_{\\max}/\\sigma_{\\min}$.', 'Thế $\\sigma_{\\max}^2$ và $\\sigma_{\\min}^2$ vào để được bình phương của $\\sigma_{\\max}/\\sigma_{\\min}$.'])
    ],
    primarySolution: [
      bi(['Because $X$ has full column rank, its smallest singular value $\\sigma_{\\min}$ is positive.', 'Vì $X$ đủ hạng cột, giá trị kỳ dị nhỏ nhất $\\sigma_{\\min}$ dương.']),
      bi(['The eigenvalues of $X^TX$ are $\\sigma_i(X)^2$, so its largest and smallest are $\\sigma_{\\max}^2$ and $\\sigma_{\\min}^2$.', 'Các trị riêng của $X^TX$ là $\\sigma_i(X)^2$, nên lớn nhất và nhỏ nhất lần lượt là $\\sigma_{\\max}^2$ và $\\sigma_{\\min}^2$.']),
      bi(['Thus $\\kappa_2(X^TX)=\\sigma_{\\max}^2/\\sigma_{\\min}^2$.', 'Vậy $\\kappa_2(X^TX)=\\sigma_{\\max}^2/\\sigma_{\\min}^2$.']),
      bi(['Since $\\kappa_2(X)=\\sigma_{\\max}/\\sigma_{\\min}$, the result is $\\kappa_2(X^TX)=\\kappa_2(X)^2$.', 'Vì $\\kappa_2(X)=\\sigma_{\\max}/\\sigma_{\\min}$, suy ra $\\kappa_2(X^TX)=\\kappa_2(X)^2$.'])
    ],
    companions: [
      q(['A full-column-rank matrix $X$ has singular values $4$ and $1$. Compute $\\kappa_2(X)$ and $\\kappa_2(X^TX)$.', 'Ma trận $X$ đủ hạng cột có giá trị kỳ dị $4$ và $1$. Tính $\\kappa_2(X)$ và $\\kappa_2(X^TX)$.'], [
        ['The singular-value ratio gives $\\kappa_2(X)=4/1=4$.', 'Tỷ số giá trị kỳ dị cho $\\kappa_2(X)=4/1=4$.'],
        ['The eigenvalues of $X^TX$ are $16$ and $1$.', 'Các trị riêng của $X^TX$ là $16$ và $1$.'],
        ['Their ratio is $16$, so $\\kappa_2(X^TX)=16=4^2$.', 'Tỷ số bằng $16$, nên $\\kappa_2(X^TX)=16=4^2$.']
      ]),
      q(['Suppose a full-column-rank design has $\\sigma_{\\max}=6$ and $\\sigma_{\\min}=1/2$. Find the two condition numbers.', 'Giả sử thiết kế đủ hạng cột có $\\sigma_{\\max}=6$ và $\\sigma_{\\min}=1/2$. Tính hai số điều kiện.'], [
        ['The design condition number is $6/(1/2)=12$.', 'Số điều kiện của thiết kế là $6/(1/2)=12$.'],
        ['The Gram matrix has extreme eigenvalues $36$ and $1/4$.', 'Ma trận Gram có trị riêng biên là $36$ và $1/4$.'],
        ['Their ratio is $144$, agreeing with $12^2$.', 'Tỷ số bằng $144$, đúng bằng $12^2$.']
      ]),
      q(['Why is full column rank needed for the finite identity $\\kappa_2(X^TX)=\\kappa_2(X)^2$? Give a rank-deficient example.', 'Vì sao cần hạng cột đầy đủ để có đẳng thức hữu hạn $\\kappa_2(X^TX)=\\kappa_2(X)^2$? Nêu ví dụ thiếu hạng.'], [
        ['If $X$ is rank deficient, then $\\sigma_{\\min}=0$ and $X^TX$ has a zero eigenvalue.', 'Nếu $X$ thiếu hạng, thì $\\sigma_{\\min}=0$ và $X^TX$ có trị riêng bằng không.'],
        ['For $X=\\begin{pmatrix}1&1\\\\0&0\\end{pmatrix}$, the columns are dependent, so both $X$ and $X^TX$ are singular.', 'Với $X=\\begin{pmatrix}1&1\\\\0&0\\end{pmatrix}$, các cột phụ thuộc, nên cả $X$ và $X^TX$ đều suy biến.'],
        ['Their usual spectral condition numbers are infinite or undefined, so the finite positive-ratio proof does not apply.', 'Số điều kiện phổ thông thường là vô hạn hoặc không xác định, nên chứng minh bằng tỷ số dương hữu hạn không áp dụng.']
      ])
    ],
    reviewNote: 'Verified the full-rank assumption is exactly what keeps the smallest singular value positive; numerical ratios were squared correctly.',
    sourceIds: ['f-1806sc']
  },
  'f-w008-e4': {
    prompt:bi(['A full-column-rank design matrix X has $\\kappa_2(X)=10^6$. Compare the condition number of $X^TX$ and explain which solve is safer in finite precision.','Ma trận thiết kế X đủ hạng cột có $\\kappa_2(X)=10^6$. So số điều kiện của $X^TX$ và giải thích cách giải nào an toàn hơn trong độ chính xác hữu hạn.']),
    application: bi(['A QR solve works with the design matrix itself and avoids explicitly forming normal equations, whose condition number is squared.', 'Giải bằng QR thao tác trực tiếp trên ma trận thiết kế và tránh lập tường minh phương trình chuẩn vốn có số điều kiện bị bình phương.']),
    formula: bi(['For full-column-rank $X$, $\\kappa_2(X^TX)=\\kappa_2(X)^2$; QR avoids this explicit squaring, though it cannot remove the problem’s intrinsic sensitivity.', 'Với $X$ đủ hạng cột, $\\kappa_2(X^TX)=\\kappa_2(X)^2$; QR tránh phép bình phương tường minh này nhưng không xóa độ nhạy vốn có của bài toán.']),
    steps: [
      bi(['Confirm $X$ is full column rank so the finite condition numbers are defined.', 'Xác nhận $X$ đủ hạng cột để số điều kiện hữu hạn được xác định.']),
      bi(['Square the reported condition number to quantify the normal-equation system’s condition.', 'Bình phương số điều kiện đã cho để đo độ điều kiện của hệ phương trình chuẩn.']),
      bi(['Explain that QR avoids explicitly forming $X^TX$ and is generally safer in finite precision.', 'Giải thích QR tránh lập tường minh $X^TX$ và thường an toàn hơn trong tính toán hữu hạn.']),
      bi(['Retain the caveat that a large $\\kappa_2(X)$ still makes the original least-squares solution sensitive.', 'Giữ lưu ý rằng $\\kappa_2(X)$ lớn vẫn làm nghiệm bình phương tối thiểu gốc nhạy.'])
    ],
    primarySolution: [
      bi(['The condition-number identity applies to a full-column-rank design, so $\\kappa_2(X^TX)=(10^6)^2$.', 'Đẳng thức số điều kiện áp dụng cho thiết kế đủ hạng cột, nên $\\kappa_2(X^TX)=(10^6)^2$.']),
      bi(['Therefore $\\kappa_2(X^TX)=10^{12}$.', 'Do đó $\\kappa_2(X^TX)=10^{12}$.']),
      bi(['QR works directly with $X$ and avoids introducing this squared condition number explicitly.', 'QR thao tác trực tiếp với $X$ và tránh đưa tường minh số điều kiện đã bình phương này vào hệ.']),
      bi(['QR is generally safer in finite precision, although $\\kappa_2(X)=10^6$ still signals substantial sensitivity.', 'QR thường an toàn hơn trong độ chính xác hữu hạn, dù $\\kappa_2(X)=10^6$ vẫn báo hiệu độ nhạy đáng kể.'])
    ],
    companions: [
      q(['For full-column-rank X with $\\kappa_2(X)=10^3$, what is the condition number of the normal-equation matrix, and which method avoids forming it?', 'Với X đủ hạng cột và $\\kappa_2(X)=10^3$, số điều kiện của ma trận phương trình chuẩn là bao nhiêu và phương pháp nào tránh lập ma trận đó?'], [
        ['For full column rank, $\\kappa_2(X^TX)=\\kappa_2(X)^2$.', 'Với hạng cột đầy đủ, $\\kappa_2(X^TX)=\\kappa_2(X)^2$.'],
        ['Thus $\\kappa_2(X^TX)=(10^3)^2=10^6$.', 'Vậy $\\kappa_2(X^TX)=(10^3)^2=10^6$.'],
        ['A QR factorization uses $X$ directly and avoids explicitly forming the more ill-conditioned Gram system.', 'Phân tích QR dùng trực tiếp $X$ và tránh lập tường minh hệ Gram kém điều kiện hơn.']
      ]),
      q(['A full-column-rank design has $\\kappa_2(X)=2\\times10^4$. Compute the normal-equation condition number and state the remaining limitation of QR.', 'Thiết kế đủ hạng cột có $\\kappa_2(X)=2\\times10^4$. Tính số điều kiện phương trình chuẩn và nêu hạn chế còn lại của QR.'], [
        ['Squaring gives $\\kappa_2(X^TX)=(2\\times10^4)^2=4\\times10^8$.', 'Bình phương cho $\\kappa_2(X^TX)=(2\\times10^4)^2=4\\times10^8$.'],
        ['QR avoids explicitly solving that squared-condition system.', 'QR tránh phải giải tường minh hệ có số điều kiện đã bình phương ấy.'],
        ['But the original matrix still has condition number $2\\times10^4$, so data perturbations can still affect the solution.', 'Nhưng ma trận gốc vẫn có số điều kiện $2\\times10^4$, nên nhiễu dữ liệu vẫn có thể ảnh hưởng nghiệm.']
      ]),
      q(['For a full-column-rank design with $\\kappa_2(X)=100$, compare the condition number of $X^TX$ with that of $X$ and explain the numerical concern.', 'Với thiết kế đủ hạng cột có $\\kappa_2(X)=100$, so sánh số điều kiện $X^TX$ với $X$ và giải thích lo ngại số học.'], [
        ['The Gram matrix condition number is $100^2=10^4$, one hundred times larger.', 'Số điều kiện ma trận Gram là $100^2=10^4$, lớn gấp một trăm lần.'],
        ['Forming $X^TX$ can magnify roundoff because its small singular scale is squared along with the large one.', 'Lập $X^TX$ có thể khuếch đại sai số làm tròn vì cả thang kỳ dị nhỏ cũng bị bình phương cùng thang lớn.'],
        ['QR avoids explicitly creating that squared system, while the conditioning of $X$ itself remains relevant.', 'QR tránh tạo tường minh hệ đã bình phương, còn số điều kiện của chính $X$ vẫn quan trọng.']
      ])
    ],
    reviewNote: 'Checked each squared condition number and distinguished algorithmic stability from intrinsic conditioning. Second reading made full column rank explicit in every prompt; full row rank of a wide matrix would not suffice.',
    sourceIds: ['f-1806sc']
  },
  'f-w008-e5': {
    prompt: bi(['For singular values $(5,2,0.1)$, what is the spectral error of rank-$1$ truncation? Why does a small discarded singular value alone not certify predictive accuracy?', 'Với các giá trị kỳ dị $(5,2,0.1)$, sai số phổ khi cắt cụt hạng $1$ là bao nhiêu? Vì sao riêng giá trị kỳ dị bị bỏ nhỏ không chứng nhận độ chính xác dự báo?']),
    application: bi(['A low-rank SVD approximation controls matrix reconstruction error in a specified norm, but predictive performance also depends on how discarded directions interact with targets and future data.', 'Xấp xỉ SVD hạng thấp khống chế sai số tái tạo ma trận theo một chuẩn cụ thể, nhưng hiệu quả dự báo còn tùy hướng bị bỏ tương tác với mục tiêu và dữ liệu tương lai.']),
    formula: bi(['By the Eckart–Young theorem, the best rank-$k$ approximation in spectral norm has error $\\sigma_{k+1}$; this is a matrix-norm guarantee, not an out-of-sample prediction guarantee.', 'Theo định lý Eckart–Young, xấp xỉ hạng $k$ tốt nhất theo chuẩn phổ có sai số $\\sigma_{k+1}$; đây là bảo đảm theo chuẩn ma trận, không phải bảo đảm dự báo ngoài mẫu.']),
    steps: [
      bi(['Order the singular values from largest to smallest and identify the first discarded one.', 'Sắp các giá trị kỳ dị từ lớn đến nhỏ rồi xác định giá trị đầu tiên bị bỏ.']),
      bi(['Apply Eckart–Young in the requested norm: rank-$k$ spectral error equals $\\sigma_{k+1}$.', 'Áp dụng Eckart–Young theo chuẩn được yêu cầu: sai số phổ hạng $k$ bằng $\\sigma_{k+1}$.']),
      bi(['Separate reconstruction error from prediction error; the latter depends on targets, coefficients, and the future data distribution.', 'Phân biệt sai số tái tạo với sai số dự báo; sai số sau còn phụ thuộc mục tiêu, hệ số và phân phối dữ liệu tương lai.']),
      bi(['Give a concrete discarded direction whose target effect is large despite small matrix norm.', 'Nêu hướng bị bỏ có ảnh hưởng mục tiêu lớn dù chuẩn ma trận nhỏ.'])
    ],
    primarySolution: [
      bi(['For rank-$1$ truncation, the first discarded singular value is $\\sigma_2=2$.', 'Khi cắt cụt hạng $1$, giá trị kỳ dị đầu tiên bị bỏ là $\\sigma_2=2$.']),
      bi(['Eckart–Young therefore gives spectral reconstruction error $2$.', 'Vì vậy định lý Eckart–Young cho sai số tái tạo theo chuẩn phổ bằng $2$.']),
      bi(['That guarantee concerns the matrix in spectral norm only; it does not specify how the approximation performs on a prediction target.', 'Bảo đảm đó chỉ nói về ma trận theo chuẩn phổ; nó không xác định xấp xỉ hoạt động ra sao trên mục tiêu dự báo.']),
      bi(['A discarded direction may align with a large target effect or become important after the validation distribution shifts.', 'Hướng bị bỏ có thể trùng với ảnh hưởng mục tiêu lớn hoặc trở nên quan trọng khi phân phối kiểm định thay đổi.'])
    ],
    companions: [
      q(['A matrix has singular values $(7,3,0.5)$. What is the spectral error of its best rank-$2$ approximation?', 'Ma trận có các giá trị kỳ dị $(7,3,0.5)$. Sai số phổ của xấp xỉ hạng $2$ tốt nhất là bao nhiêu?'], [
        ['Rank $2$ retains singular values $7$ and $3$, so the first omitted one is $\\sigma_3=0.5$.', 'Hạng $2$ giữ các giá trị $7$ và $3$, nên giá trị đầu tiên bị bỏ là $\\sigma_3=0.5$.'],
        ['Eckart–Young states that the minimum spectral-norm error equals that omitted singular value.', 'Định lý Eckart–Young nói sai số chuẩn phổ nhỏ nhất bằng giá trị kỳ dị bị bỏ đó.'],
        ['Therefore the optimal rank-$2$ spectral error is $0.5$.', 'Vì vậy sai số phổ tối ưu hạng $2$ là $0.5$.']
      ]),
      q(['For $A=\\operatorname{diag}(4,2,1)$, compare the spectral and Frobenius errors after rank-$1$ truncation.', 'Với $A=\\operatorname{diag}(4,2,1)$, so sánh sai số phổ và sai số Frobenius sau khi cắt cụt hạng $1$.'], [
        ['The rank-$1$ truncation is $A_1=\\operatorname{diag}(4,0,0)$, so $A-A_1=\\operatorname{diag}(0,2,1)$.', 'Xấp xỉ hạng $1$ là $A_1=\\operatorname{diag}(4,0,0)$, nên $A-A_1=\\operatorname{diag}(0,2,1)$.'],
        ['Its spectral norm is the largest discarded singular value, $2$.', 'Chuẩn phổ bằng giá trị kỳ dị bị bỏ lớn nhất, là $2$.'],
        ['Its Frobenius norm is $\\sqrt{2^2+1^2}=\\sqrt5$, showing that the norm choice changes the error measure.', 'Chuẩn Frobenius là $\\sqrt{2^2+1^2}=\\sqrt5$, cho thấy chọn chuẩn làm thay đổi cách đo sai số.']
      ]),
      q(['Let $A=\\operatorname{diag}(1,0.01)$ and coefficient vector $\\beta=(0,100)^T$. Compare predictions from $A$ and its rank-$1$ truncation.', 'Cho $A=\\operatorname{diag}(1,0.01)$ và vector hệ số $\\beta=(0,100)^T$. So sánh dự đoán từ $A$ và xấp xỉ hạng $1$.'], [
        ['The spectral error of truncating the second direction is only $0.01$.', 'Sai số phổ khi bỏ hướng thứ hai chỉ là $0.01$.'],
        ['Yet $A\\beta=(0,1)^T$, whereas $A_1=\\operatorname{diag}(1,0)$ gives $A_1\\beta=(0,0)^T$.', 'Nhưng $A\\beta=(0,1)^T$, trong khi $A_1=\\operatorname{diag}(1,0)$ cho $A_1\\beta=(0,0)^T$.'],
        ['The prediction error is $1$ because the coefficient amplifies the discarded direction; a small matrix error alone is not a prediction certificate.', 'Sai số dự báo bằng $1$ vì hệ số khuếch đại hướng bị bỏ; riêng sai số ma trận nhỏ không chứng nhận dự báo chính xác.']
      ])
    ],
    reviewNote: 'Corrected the source VI prompt typo from $(5,2,0,1)$ to $(5,2,0.1)$ to match EN; checked Eckart–Young errors and the amplified discarded-direction example.',
    sourceIds: ['f-1806sc']
  },
  'f-w009-e1': {
    application: bi(['A chain of differentiable models composes by multiplying Jacobians in output-to-input order; their dimensions give a quick check on the derivative.', 'Chuỗi mô hình khả vi được hợp thành bằng tích các Jacobian theo thứ tự đầu ra về đầu vào; kích thước giúp kiểm tra nhanh đạo hàm.']),
    formula: bi(['If $f:\\mathbb R^n\\to\\mathbb R^m$ and $g:\\mathbb R^m\\to\\mathbb R^p$ are differentiable, then $D(g\\circ f)(x)=Dg(f(x))Df(x)$ with sizes $p\\times m$ times $m\\times n$.', 'Nếu $f:\\mathbb R^n\\to\\mathbb R^m$ và $g:\\mathbb R^m\\to\\mathbb R^p$ khả vi, thì $D(g\\circ f)(x)=Dg(f(x))Df(x)$ với kích thước $p\\times m$ nhân $m\\times n$.']),
    steps: [
      bi(['Differentiate each component of $f$ to form the $m\\times n$ Jacobian $Df(x)$.', 'Lấy đạo hàm từng thành phần của $f$ để tạo Jacobian $m\\times n$ là $Df(x)$.']),
      bi(['Evaluate the outer derivative $Dg$ at the intermediate value $f(x)$, not at $x$.', 'Tính đạo hàm ngoài $Dg$ tại giá trị trung gian $f(x)$, không phải tại $x$.']),
      bi(['Multiply $Dg(f(x))Df(x)$ and verify the inner dimensions agree.', 'Nhân $Dg(f(x))Df(x)$ và kiểm tra kích thước giữa khớp nhau.']),
      bi(['Interpret the resulting $p\\times n$ matrix as the derivative from the original input to the final output.', 'Diễn giải ma trận $p\\times n$ thu được là đạo hàm từ đầu vào ban đầu đến đầu ra cuối.'])
    ],
    primarySolution: [
      bi(['Differentiate $f$ to get $Df=\\begin{pmatrix}1&1\\\\y&x\\\\2x&0\\end{pmatrix}$, hence $Df(1,2)=\\begin{pmatrix}1&1\\\\2&1\\\\2&0\\end{pmatrix}$.', 'Lấy đạo hàm $f$ được $Df=\\begin{pmatrix}1&1\\\\y&x\\\\2x&0\\end{pmatrix}$, nên $Df(1,2)=\\begin{pmatrix}1&1\\\\2&1\\\\2&0\\end{pmatrix}$.']),
      bi(['Since $f(1,2)=(3,2,1)$ and $g(a,b,c)=ab+c$, its derivative there is $Dg=[b,a,1]=[2,3,1]$.', 'Vì $f(1,2)=(3,2,1)$ và $g(a,b,c)=ab+c$, đạo hàm tại đó là $Dg=[b,a,1]=[2,3,1]$.']),
      bi(['The dimensions are $(1\\times3)(3\\times2)$; multiplying gives $[2,3,1]Df(1,2)=[10,5]$.', 'Kích thước là $(1\\times3)(3\\times2)$; nhân ma trận cho $[2,3,1]Df(1,2)=[10,5]$.']),
      bi(['Thus $D(g\\circ f)(1,2)=[10,5]$, a row derivative for a scalar-valued output.', 'Vậy $D(g\\circ f)(1,2)=[10,5]$, là đạo hàm dạng hàng cho đầu ra vô hướng.'])
    ],
    companions: [
      q(['Let $f(x,y)=(x+y,x-y)$ and $g(a,b)=ab$. Compute $D(g\\circ f)(1,2)$ using Jacobians.', 'Cho $f(x,y)=(x+y,x-y)$ và $g(a,b)=ab$. Tính $D(g\\circ f)(1,2)$ bằng Jacobian.'], [
        ['At $(1,2)$, $f=(3,-1)$ and $Dg=[b,a]=[-1,3]$.', 'Tại $(1,2)$, $f=(3,-1)$ và $Dg=[b,a]=[-1,3]$.'],
        ['The inner Jacobian is $Df=\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$.', 'Jacobian trong là $Df=\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$.'],
        ['Multiplication gives $DgDf=[2,-4]$, matching the gradient of $x^2-y^2$.', 'Nhân ma trận cho $DgDf=[2,-4]$, đúng với gradient của $x^2-y^2$.']
      ]),
      q(['Define $f(x,y)=(x,y,xy)$ and $g(a,b,c)=(a+b,c)$. Find the $2\\times2$ derivative matrix of $g\\circ f$ at $(1,2)$.', 'Đặt $f(x,y)=(x,y,xy)$ và $g(a,b,c)=(a+b,c)$. Tìm ma trận đạo hàm $2\\times2$ của $g\\circ f$ tại $(1,2)$.'], [
        ['The inner Jacobian is $Df=\\begin{pmatrix}1&0\\\\0&1\\\\y&x\\end{pmatrix}$, so $Df(1,2)=\\begin{pmatrix}1&0\\\\0&1\\\\2&1\\end{pmatrix}$.', 'Jacobian trong là $Df=\\begin{pmatrix}1&0\\\\0&1\\\\y&x\\end{pmatrix}$, nên $Df(1,2)=\\begin{pmatrix}1&0\\\\0&1\\\\2&1\\end{pmatrix}$.'],
        ['The outer Jacobian is constant, $Dg=\\begin{pmatrix}1&1&0\\\\0&0&1\\end{pmatrix}$.', 'Jacobian ngoài không đổi, $Dg=\\begin{pmatrix}1&1&0\\\\0&0&1\\end{pmatrix}$.'],
        ['The product is $DgDf=\\begin{pmatrix}1&1\\\\2&1\\end{pmatrix}$, with the required $2\\times3$ by $3\\times2$ dimensions.', 'Tích là $DgDf=\\begin{pmatrix}1&1\\\\2&1\\end{pmatrix}$, đúng kích thước $2\\times3$ nhân $3\\times2$.']
      ]),
      q(['Let $f(x,y)=x^2+y$ and $g(t)=(t,2t)$. Compute the derivative of $g\\circ f:\\mathbb R^2\\to\\mathbb R^2$ at $(1,2)$.', 'Cho $f(x,y)=x^2+y$ và $g(t)=(t,2t)$. Tính đạo hàm của $g\\circ f:\\mathbb R^2\\to\\mathbb R^2$ tại $(1,2)$.'], [
        ['At $(1,2)$, $Df=[2x,1]=[2,1]$.', 'Tại $(1,2)$, $Df=[2x,1]=[2,1]$.'],
        ['The outer derivative is the column $Dg=(1,2)^T$.', 'Đạo hàm ngoài là cột $Dg=(1,2)^T$.'],
        ['Their product is $DgDf=\\begin{pmatrix}2&1\\\\4&2\\end{pmatrix}$, a $2\\times2$ Jacobian.', 'Tích là $DgDf=\\begin{pmatrix}2&1\\\\4&2\\end{pmatrix}$, một Jacobian $2\\times2$.']
      ])
    ],
    reviewNote: 'Checked the intermediate point, each Jacobian dimension, and all matrix products against direct composition.',
    sourceIds: ['f-1802sc']
  },
  'f-w009-e2': {
    application: bi(['A directional derivative measures change per unit distance along a direction, so a nonunit vector must be normalized before taking its dot product with the gradient.', 'Đạo hàm theo hướng đo mức thay đổi trên một đơn vị khoảng cách, nên cần chuẩn hóa vector chưa đơn vị trước khi tích vô hướng với gradient.']),
    formula: bi(['For differentiable scalar $f$ and unit direction $u$, $D_uf(x)=\\nabla f(x)\\cdot u$; for a nonzero direction $v$, use $u=v/\\|v\\|_2$.', 'Với hàm vô hướng khả vi $f$ và hướng đơn vị $u$, $D_uf(x)=\\nabla f(x)\\cdot u$; với hướng khác không $v$, dùng $u=v/\\|v\\|_2$.']),
    steps: [
      bi(['Compute the gradient at the point, keeping its coordinates in the same order as the variables.', 'Tính gradient tại điểm và giữ thứ tự tọa độ trùng với thứ tự biến.']),
      bi(['Normalize the specified direction by dividing by its Euclidean norm.', 'Chuẩn hóa hướng đã cho bằng cách chia cho chuẩn Euclid của nó.']),
      bi(['Take the dot product of the gradient and unit vector to obtain rate per unit distance.', 'Tính tích vô hướng giữa gradient và vector đơn vị để được tốc độ trên một đơn vị khoảng cách.']),
      bi(['Keep the sign: a negative value means decrease along the chosen orientation.', 'Giữ dấu của kết quả: giá trị âm nghĩa là hàm giảm theo chiều đã chọn.'])
    ],
    primarySolution: [
      bi(['The gradient is $\\nabla f=(2x+3y,3x)$, so at $(1,-1)$ it equals $(-1,3)$.', 'Gradient là $\\nabla f=(2x+3y,3x)$, nên tại $(1,-1)$ có giá trị $(-1,3)$.']),
      bi(['The direction has norm $\\sqrt{3^2+4^2}=5$, so the unit direction is $u=(3/5,4/5)$.', 'Hướng có chuẩn $\\sqrt{3^2+4^2}=5$, nên hướng đơn vị là $u=(3/5,4/5)$.']),
      bi(['The directional derivative is $(-1,3)\\cdot(3/5,4/5)=-3/5+12/5$.', 'Đạo hàm theo hướng là $(-1,3)\\cdot(3/5,4/5)=-3/5+12/5$.']),
      bi(['Therefore the rate of change per unit distance is $9/5$.', 'Vì vậy tốc độ thay đổi trên một đơn vị khoảng cách bằng $9/5$.'])
    ],
    companions: [
      q(['For $f(x,y)=x^2+y^2$, find the directional derivative at $(1,2)$ toward $v=(0,5)$.', 'Với $f(x,y)=x^2+y^2$, tìm đạo hàm theo hướng tại $(1,2)$ theo $v=(0,5)$.'], [
        ['The gradient at the point is $\\nabla f(1,2)=(2,4)$.', 'Gradient tại điểm là $\\nabla f(1,2)=(2,4)$.'],
        ['The vector has norm $5$, so its unit direction is $(0,1)$.', 'Vector có chuẩn $5$, nên hướng đơn vị là $(0,1)$.'],
        ['The directional derivative is $(2,4)\\cdot(0,1)=4$.', 'Đạo hàm theo hướng là $(2,4)\\cdot(0,1)=4$.']
      ]),
      q(['For $f(x,y)=xy$, find the unit-direction derivative at $(2,3)$ toward $v=(1,-1)$.', 'Với $f(x,y)=xy$, tìm đạo hàm theo hướng đơn vị tại $(2,3)$ theo $v=(1,-1)$.'], [
        ['The gradient is $\\nabla f=(y,x)$, which equals $(3,2)$ at the point.', 'Gradient là $\\nabla f=(y,x)$, bằng $(3,2)$ tại điểm.'],
        ['The direction norm is $\\sqrt2$, giving $u=(1,-1)/\\sqrt2$.', 'Chuẩn hướng là $\\sqrt2$, nên $u=(1,-1)/\\sqrt2$.'],
        ['The rate is $(3,2)\\cdot(1,-1)/\\sqrt2=1/\\sqrt2$.', 'Tốc độ là $(3,2)\\cdot(1,-1)/\\sqrt2=1/\\sqrt2$.']
      ]),
      q(['For $f(x,y)=x+y^2$, compute the directional derivative at $(0,1)$ per unit distance toward $v=(0,2)$ and compare it with the parameter derivative along $v$.', 'Với $f(x,y)=x+y^2$, tính đạo hàm theo hướng trên một đơn vị khoảng cách tại $(0,1)$ theo $v=(0,2)$ rồi so sánh với đạo hàm theo tham số dọc $v$.'], [
        ['At the point, $\\nabla f=(1,2)$.', 'Tại điểm đã cho, $\\nabla f=(1,2)$.'],
        ['The unit direction is $u=(0,1)$, so the per-distance derivative is $(1,2)\\cdot(0,1)=2$.', 'Hướng đơn vị là $u=(0,1)$, nên đạo hàm theo khoảng cách là $(1,2)\\cdot(0,1)=2$.'],
        ['Using the unnormalized velocity gives $\\nabla f\\cdot v=4$, twice as large because $\\|v\\|=2$.', 'Dùng vận tốc chưa chuẩn hóa cho $\\nabla f\\cdot v=4$, gấp đôi vì $\\|v\\|=2$.']
      ])
    ],
    reviewNote: 'Recomputed gradients, unit vectors, and directional rates; distinguished unit-distance rates from parameter speeds.',
    sourceIds: ['f-1802sc']
  },
  'f-w009-e3': {
    application: bi(['Coordinate partials inspect only axis-aligned changes; differentiability requires one linear approximation to control errors along every path.', 'Đạo hàm riêng theo tọa độ chỉ xét thay đổi dọc các trục; khả vi đòi hỏi một xấp xỉ tuyến tính kiểm soát sai số theo mọi đường đi.']),
    formula: bi(['Differentiability at $(0,0)$ requires $f(h)=f(0)+L(h)+o(\\|h\\|)$; existence of both partial derivatives alone does not ensure continuity.', 'Khả vi tại $(0,0)$ đòi hỏi $f(h)=f(0)+L(h)+o(\\|h\\|)$; riêng sự tồn tại của hai đạo hàm riêng không bảo đảm liên tục.']),
    steps: [
      bi(['Compute each partial derivative from its one-variable difference quotient along an axis.', 'Tính từng đạo hàm riêng từ thương sai phân một biến dọc theo trục.']),
      bi(['Choose a curved path approaching the origin and substitute it into the full function.', 'Chọn một đường cong tiến về gốc rồi thế vào hàm đầy đủ.']),
      bi(['If the path limit differs from the function value, continuity fails, which rules out differentiability.', 'Nếu giới hạn theo đường đi khác giá trị hàm tại gốc, tính liên tục thất bại và do đó không thể khả vi.']),
      bi(['Even when continuity holds, test whether the residual divided by distance tends to zero.', 'Ngay cả khi liên tục, hãy kiểm tra phần dư chia cho khoảng cách có tiến về không hay không.'])
    ],
    primarySolution: [
      bi(['On the coordinate axes, the numerator is zero, so $f(h,0)=f(0,h)=0$ for nonzero $h$.', 'Trên hai trục tọa độ, tử số bằng không, nên $f(h,0)=f(0,h)=0$ với $h$ khác không.']),
      bi(['Both partial difference quotients at the origin are therefore $0$.', 'Vì vậy cả hai thương sai phân riêng tại gốc đều bằng $0$.']),
      bi(['Along $(x,y)=(t,t^2)$ with $t\\ne0$, $f(t,t^2)=t^4/(t^4+t^4)=1/2$.', 'Dọc $(x,y)=(t,t^2)$ với $t\\ne0$, $f(t,t^2)=t^4/(t^4+t^4)=1/2$.']),
      bi(['This path limit differs from $f(0,0)=0$, so $f$ is discontinuous and hence not differentiable at the origin.', 'Giới hạn theo đường này khác $f(0,0)=0$, nên $f$ không liên tục và do đó không khả vi tại gốc.'])
    ],
    companions: [
      q(['Define $h(0,0)=0$ and $h(x,y)=xy/\\sqrt{x^2+y^2}$ elsewhere. Show its partials at the origin exist but it is not differentiable there.', 'Đặt $h(0,0)=0$ và $h(x,y)=xy/\\sqrt{x^2+y^2}$ ở nơi khác. Chứng minh đạo hàm riêng tại gốc tồn tại nhưng hàm không khả vi tại đó.'], [
        ['On either coordinate axis $h$ is zero, so both partial derivatives at the origin are $0$.', 'Trên mỗi trục tọa độ, $h$ bằng không, nên cả hai đạo hàm riêng tại gốc bằng $0$.'],
        ['For any point, $|xy|\\le(x^2+y^2)/2$, so $|h(x,y)|\\le\\sqrt{x^2+y^2}/2$; this also shows continuity at the origin.', 'Với mọi điểm, $|xy|\\le(x^2+y^2)/2$, nên $|h(x,y)|\\le\\sqrt{x^2+y^2}/2$; điều này cũng chứng minh liên tục tại gốc.'],
        ['Along $(t,t)$, $h(t,t)/\\|(t,t)\\|=1/2$, not $0$; the only possible derivative from the partials is zero, so differentiability fails.', 'Dọc $(t,t)$, $h(t,t)/\\|(t,t)\\|=1/2$, không tiến về $0$; đạo hàm duy nhất có thể có từ các đạo hàm riêng là không, nên hàm không khả vi.']
      ]),
      q(['Define $p(0,0)=0$ and $p(x,y)=xy/(x^2+y^2)$ elsewhere. Find its partials at the origin and test continuity along $y=x$.', 'Đặt $p(0,0)=0$ và $p(x,y)=xy/(x^2+y^2)$ ở nơi khác. Tìm đạo hàm riêng tại gốc và kiểm tra liên tục dọc $y=x$.'], [
        ['On the axes the function is zero, so both partial difference quotients at the origin equal $0$.', 'Trên hai trục, hàm bằng không nên cả hai thương sai phân riêng tại gốc bằng $0$.'],
        ['For $x\\ne0$, substitution of $y=x$ gives $p(x,x)=x^2/(2x^2)=1/2$.', 'Với $x\\ne0$, thế $y=x$ cho $p(x,x)=x^2/(2x^2)=1/2$.'],
        ['The path limit is not $p(0,0)$, so the function is discontinuous and cannot be differentiable.', 'Giới hạn theo đường đi khác $p(0,0)$, nên hàm không liên tục và không thể khả vi.']
      ]),
      q(['State a standard sufficient condition that upgrades partial derivatives to differentiability at a point, and explain why it is stronger than mere existence of the partials.', 'Nêu điều kiện đủ thường dùng để suy từ đạo hàm riêng sang khả vi tại một điểm, và giải thích vì sao nó mạnh hơn sự tồn tại đơn thuần của các đạo hàm riêng.'], [
        ['If all first partial derivatives exist on a neighborhood and are continuous at the point, then the function is differentiable there.', 'Nếu mọi đạo hàm riêng bậc nhất tồn tại trong lân cận và liên tục tại điểm đó, thì hàm khả vi tại điểm.'],
        ['Continuity of the partials controls how the linear coefficients vary nearby, not just the values along coordinate axes.', 'Tính liên tục của các đạo hàm riêng kiểm soát sự biến thiên gần đó của hệ số tuyến tính, chứ không chỉ giá trị dọc các trục.'],
        ['The primary function has partials at one point but fails continuity along a curved path, showing why pointwise existence alone is insufficient.', 'Hàm trong bài chính có đạo hàm riêng tại một điểm nhưng mất liên tục dọc đường cong, cho thấy tồn tại tại một điểm là chưa đủ.']
      ])
    ],
    reviewNote: 'Checked the axis quotients and curved-path limits; the first companion is continuous yet its zero candidate derivative fails the required remainder test.',
    sourceIds: ['f-1802sc']
  },
  'f-w009-e4': {
    application: bi(['Implicit differentiation tracks how a constrained response changes without solving explicitly for it, provided the constraint changes with the response variable.', 'Đạo hàm ẩn theo dõi sự thay đổi của đáp ứng bị ràng buộc mà không cần giải tường minh, miễn ràng buộc có biến thiên theo biến đáp ứng.']),
    formula: bi(['If $F(x(t),y(t))=0$ and $F_y\\ne0$, then $F_x\\,x^{\\prime}+F_y\\,y^{\\prime}=0$ and $y^{\\prime}=-F_x\\,x^{\\prime}/F_y$.', 'Nếu $F(x(t),y(t))=0$ và $F_y\\ne0$, thì $F_x\\,x^{\\prime}+F_y\\,y^{\\prime}=0$ và $y^{\\prime}=-F_x\\,x^{\\prime}/F_y$.']),
    steps: [
      bi(['Differentiate the constraint identity with respect to the parameter $t$ using the multivariable chain rule.', 'Lấy đạo hàm đẳng thức ràng buộc theo tham số $t$ bằng quy tắc dây chuyền nhiều biến.']),
      bi(['Collect the terms involving $x^{\\prime}(t)$ and $y^{\\prime}(t)$.', 'Gom các số hạng chứa $x^{\\prime}(t)$ và $y^{\\prime}(t)$.']),
      bi(['Divide by $F_y$ only when the stated nonzero condition holds.', 'Chỉ chia cho $F_y$ khi điều kiện khác không đã nêu được thỏa.']),
      bi(['Evaluate both partial derivatives at the specified point before substituting the parameter speed.', 'Tính hai đạo hàm riêng tại điểm đã cho trước khi thế tốc độ tham số.'])
    ],
    primarySolution: [
      bi(['Differentiate $F(x(t),y(t))=0$ to obtain $F_x\\,x^{\\prime}+F_y\\,y^{\\prime}=0$.', 'Lấy đạo hàm $F(x(t),y(t))=0$ để được $F_x\\,x^{\\prime}+F_y\\,y^{\\prime}=0$.']),
      bi(['Because $F_y\\ne0$, solve for $y^{\\prime}=-F_x\\,x^{\\prime}/F_y$.', 'Vì $F_y\\ne0$, giải được $y^{\\prime}=-F_x\\,x^{\\prime}/F_y$.']),
      bi(['For $F=x^2+y^2-25$ at $(3,4)$, $F_x=6$ and $F_y=8$.', 'Với $F=x^2+y^2-25$ tại $(3,4)$, ta có $F_x=6$ và $F_y=8$.']),
      bi(['Substitute $x^{\\prime}=2$ to get $y^{\\prime}=-(6)(2)/8=-3/2$.', 'Thế $x^{\\prime}=2$ cho $y^{\\prime}=-(6)(2)/8=-3/2$.'])
    ],
    companions: [
      q(['On the curve $4x^2+y^2=25$, find $y^{\\prime}$ at $(2,3)$ when $x^{\\prime}=1$.', 'Trên đường cong $4x^2+y^2=25$, tìm $y^{\\prime}$ tại $(2,3)$ khi $x^{\\prime}=1$.'], [
        ['Set $F(x,y)=4x^2+y^2-25$; then $F_x=8x$ and $F_y=2y$.', 'Đặt $F(x,y)=4x^2+y^2-25$; khi đó $F_x=8x$ và $F_y=2y$.'],
        ['At $(2,3)$, these are $F_x=16$ and $F_y=6$, so the nonzero denominator condition holds.', 'Tại $(2,3)$, chúng bằng $F_x=16$ và $F_y=6$, nên mẫu số khác không.'],
        ['The formula gives $y^{\\prime}=-(16)(1)/6=-8/3$.', 'Công thức cho $y^{\\prime}=-(16)(1)/6=-8/3$.']
      ]),
      q(['For the constraint $xy=6$ at $(2,3)$, compute $y^{\\prime}$ when $x^{\\prime}=2$.', 'Với ràng buộc $xy=6$ tại $(2,3)$, tính $y^{\\prime}$ khi $x^{\\prime}=2$.'], [
        ['Let $F(x,y)=xy-6$; its partial derivatives are $F_x=y$ and $F_y=x$.', 'Đặt $F(x,y)=xy-6$; các đạo hàm riêng là $F_x=y$ và $F_y=x$.'],
        ['At the point, $F_x=3$ and $F_y=2\\ne0$.', 'Tại điểm ấy, $F_x=3$ và $F_y=2\\ne0$.'],
        ['Thus $y^{\\prime}=-(3)(2)/2=-3$.', 'Vậy $y^{\\prime}=-(3)(2)/2=-3$.']
      ]),
      q(['Suppose $x+y^2=5$ near $(1,2)$ and $x^{\\prime}=3$. Find $y^{\\prime}$ and explain the role of the denominator.', 'Giả sử $x+y^2=5$ gần $(1,2)$ và $x^{\\prime}=3$. Tìm $y^{\\prime}$ và giải thích vai trò của mẫu số.'], [
        ['For $F=x+y^2-5$, the partials are $F_x=1$ and $F_y=2y$.', 'Với $F=x+y^2-5$, các đạo hàm riêng là $F_x=1$ và $F_y=2y$.'],
        ['At $(1,2)$, $F_y=4\\ne0$, allowing the equation to be solved locally for $y$ as a function of $x$.', 'Tại $(1,2)$, $F_y=4\\ne0$, cho phép giải cục bộ $y$ thành hàm của $x$.'],
        ['Implicit differentiation yields $y^{\\prime}=-(1)(3)/4=-3/4$.', 'Đạo hàm ẩn cho $y^{\\prime}=-(1)(3)/4=-3/4$.']
      ])
    ],
    reviewNote: 'Checked the chain-rule derivative, evaluated partials at each point, and verified every denominator is nonzero.',
    sourceIds: ['f-1802sc']
  },
  'f-w009-e5': {
    application: bi(['A coordinate Jacobian tells how a tiny parameter rectangle changes area; integration uses the absolute determinant to count that local scale.', 'Jacobian tọa độ cho biết hình chữ nhật tham số nhỏ đổi diện tích ra sao; tích phân dùng định thức tuyệt đối để đo tỷ lệ cục bộ đó.']),
    formula: bi(['For a differentiable one-to-one coordinate map $(u,v)\\mapsto(x,y)$ with nonzero Jacobian, $dx\\,dy=|\\det D\\Phi(u,v)|\\,du\\,dv$ locally.', 'Với phép tọa độ khả vi đơn ánh $(u,v)\\mapsto(x,y)$ có Jacobian khác không, cục bộ $dx\\,dy=|\\det D\\Phi(u,v)|\\,du\\,dv$.']),
    steps: [
      bi(['Differentiate each output coordinate with respect to each input coordinate to form $D\\Phi$.', 'Lấy đạo hàm từng tọa độ đầu ra theo từng tọa độ đầu vào để lập $D\\Phi$.']),
      bi(['Compute the determinant and take its absolute value for area, since orientation may reverse.', 'Tính định thức rồi lấy trị tuyệt đối để đo diện tích, vì định hướng có thể bị đảo.']),
      bi(['State the coordinate domain where the map is locally one-to-one and the determinant is nonzero.', 'Nêu miền tọa độ nơi ánh xạ đơn ánh cục bộ và định thức khác không.']),
      bi(['For polar coordinates, note the singular boundary $r=0$, where angle is not uniquely defined.', 'Với tọa độ cực, lưu ý biên suy biến $r=0$, nơi góc không được xác định duy nhất.'])
    ],
    primarySolution: [
      bi(['Differentiate $x=r\\cos\\theta$ and $y=r\\sin\\theta$ to get $J=\\begin{pmatrix}\\cos\\theta&-r\\sin\\theta\\\\\\sin\\theta&r\\cos\\theta\\end{pmatrix}$.', 'Lấy đạo hàm $x=r\\cos\\theta$ và $y=r\\sin\\theta$ được $J=\\begin{pmatrix}\\cos\\theta&-r\\sin\\theta\\\\\\sin\\theta&r\\cos\\theta\\end{pmatrix}$.']),
      bi(['Its determinant is $r\\cos^2\\theta+r\\sin^2\\theta=r$.', 'Định thức là $r\\cos^2\\theta+r\\sin^2\\theta=r$.']),
      bi(['For the standard polar domain $r>0$ with a nonrepeating angle interval, the local area scale is $|r|=r$.', 'Trên miền cực chuẩn $r>0$ với khoảng góc không lặp, tỷ lệ diện tích cục bộ là $|r|=r$.']),
      bi(['At $r=0$ the determinant vanishes because all angles represent the same point; the area element is $r\\,dr\\,d\\theta$.', 'Tại $r=0$, định thức bằng không vì mọi góc biểu diễn cùng một điểm; phần tử diện tích là $r\\,dr\\,d\\theta$.'])
    ],
    companions: [
      q(['For the linear map $(x,y)=(u+2v,3u+v)$, find the Jacobian determinant and the area of the image of the unit square.', 'Với ánh xạ tuyến tính $(x,y)=(u+2v,3u+v)$, tìm định thức Jacobian và diện tích ảnh của hình vuông đơn vị.'], [
        ['The Jacobian is $J=\\begin{pmatrix}1&2\\\\3&1\\end{pmatrix}$.', 'Jacobian là $J=\\begin{pmatrix}1&2\\\\3&1\\end{pmatrix}$.'],
        ['Its determinant is $1-6=-5$, so the area scale is $|-5|=5$.', 'Định thức bằng $1-6=-5$, nên tỷ lệ diện tích là $|-5|=5$.'],
        ['The unit square has area $1$, hence its image parallelogram has area $5$.', 'Hình vuông đơn vị có diện tích $1$, nên hình bình hành ảnh có diện tích $5$.']
      ]),
      q(['For $(x,y)=(2u+v,u+2v)$, find the area of the image of the rectangle $0\\le u\\le2$, $0\\le v\\le1$.', 'Với $(x,y)=(2u+v,u+2v)$, tìm diện tích ảnh của hình chữ nhật $0\\le u\\le2$, $0\\le v\\le1$.'], [
        ['The linear Jacobian matrix is $\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ with determinant $3$.', 'Ma trận Jacobian tuyến tính là $\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$, có định thức $3$.'],
        ['The parameter rectangle has area $2\\cdot1=2$.', 'Hình chữ nhật tham số có diện tích $2\\cdot1=2$.'],
        ['Multiplying by the absolute determinant gives image area $3\\cdot2=6$.', 'Nhân với định thức tuyệt đối cho diện tích ảnh $3\\cdot2=6$.']
      ]),
      q(['For $(x,y)=(u,uv)$ on the domain $1<u<2$, $0<v<1$, compute the local area factor and state whether it vanishes.', 'Với $(x,y)=(u,uv)$ trên miền $1<u<2$, $0<v<1$, tính hệ số diện tích cục bộ và cho biết nó có bằng không không.'], [
        ['The Jacobian is $J=\\begin{pmatrix}1&0\\\\v&u\\end{pmatrix}$.', 'Jacobian là $J=\\begin{pmatrix}1&0\\\\v&u\\end{pmatrix}$.'],
        ['Its determinant is $u$, so the area factor is $|u|=u$ on the given domain.', 'Định thức là $u$, nên hệ số diện tích là $|u|=u$ trên miền đã cho.'],
        ['Because $u>1$, it never vanishes there; the map is locally nonsingular throughout the region.', 'Vì $u>1$, hệ số không bao giờ bằng không ở đó; ánh xạ không suy biến cục bộ trên toàn miền.']
      ])
    ],
    reviewNote: 'Recomputed the polar determinant and affine area scales; the injective-domain caveat and singular boundary are explicit.',
    sourceIds: ['f-1802sc']
  },
  'f-w010-e1': {
    application: bi(['A Lipschitz Hessian limits how fast curvature changes along a step, giving a quantitative error bound for a quadratic Taylor model.', 'Hessian Lipschitz giới hạn tốc độ độ cong thay đổi dọc theo bước, từ đó cho chặn định lượng sai số của mô hình Taylor bậc hai.']),
    formula: bi(['If $f$ is $C^2$ near the segment from $x$ to $x+h$ and $\\|H(u)-H(v)\\|_2\\le L\\|u-v\\|_2$ on that segment, then the second-order remainder satisfies $|R|\\le L\\|h\\|_2^3/6$.', 'Nếu $f$ là $C^2$ trên lân cận đoạn từ $x$ đến $x+h$ và $\\|H(u)-H(v)\\|_2\\le L\\|u-v\\|_2$ trên đoạn đó, thì phần dư Taylor bậc hai thỏa $|R|\\le L\\|h\\|_2^3/6$.']),
    steps: [
      bi(['Use the integral remainder $R=\\int_0^1(1-t)h^T[H(x+th)-H(x)]h\\,dt$.', 'Dùng phần dư tích phân $R=\\int_0^1(1-t)h^T[H(x+th)-H(x)]h\\,dt$.']),
      bi(['The operator-norm inequality bounds the quadratic factor by $\\|h\\|_2^2 L\\|th\\|_2=L t\\|h\\|_2^3$.', 'Bất đẳng thức chuẩn toán tử chặn thừa số toàn phương bởi $\\|h\\|_2^2 L\\|th\\|_2=L t\\|h\\|_2^3$.']),
      bi(['Integrate the scalar weight: $\\int_0^1t(1-t)\\,dt=1/6$.', 'Tích phân trọng số vô hướng: $\\int_0^1t(1-t)\\,dt=1/6$.']),
      bi(['Taking absolute values gives $|R|\\le L\\|h\\|_2^3/6$.', 'Lấy trị tuyệt đối cho $|R|\\le L\\|h\\|_2^3/6$.'])
    ],
    primarySolution: [
      bi(['Taylor’s integral remainder is $R=\\int_0^1(1-t)h^T[H(x+th)-H(x)]h\\,dt$.', 'Phần dư tích phân Taylor là $R=\\int_0^1(1-t)h^T[H(x+th)-H(x)]h\\,dt$.']),
      bi(['Using $|h^TMh|\\le\\|h\\|_2^2\\|M\\|_2$ and the Lipschitz assumption, the integrand magnitude is at most $(1-t)Lt\\|h\\|_2^3$.', 'Dùng $|h^TMh|\\le\\|h\\|_2^2\\|M\\|_2$ và giả thiết Lipschitz, độ lớn tích phân bị chặn bởi $(1-t)Lt\\|h\\|_2^3$.']),
      bi(['Therefore $|R|\\le L\\|h\\|_2^3\\int_0^1t(1-t)\\,dt$.', 'Do đó $|R|\\le L\\|h\\|_2^3\\int_0^1t(1-t)\\,dt$.']),
      bi(['Since the integral equals $1/6$, $|R|\\le L\\|h\\|_2^3/6$.', 'Vì tích phân bằng $1/6$, ta có $|R|\\le L\\|h\\|_2^3/6$.'])
    ],
    companions: [
      q(['If the Hessian Lipschitz constant is $L=3$ and $\\|h\\|_2=0.2$, compute the guaranteed second-order Taylor error bound.', 'Nếu hằng số Lipschitz của Hessian là $L=3$ và $\\|h\\|_2=0.2$, hãy tính chặn sai số Taylor bậc hai được bảo đảm.'], [
        ['The bound is $L\\|h\\|_2^3/6$.', 'Chặn sai số là $L\\|h\\|_2^3/6$.'],
        ['Substitution gives $3(0.2)^3/6=3(0.008)/6$.', 'Thế số được $3(0.2)^3/6=3(0.008)/6$.'],
        ['Thus $|R|\\le0.004$.', 'Vì vậy $|R|\\le0.004$.']
      ]),
      q(['For a displacement with $\\|h\\|_2=0.3$ and Hessian Lipschitz constant $L=2$, derive the error bound and its cubic scaling.', 'Với độ dời có $\\|h\\|_2=0.3$ và hằng số Lipschitz Hessian $L=2$, suy ra chặn sai số và sự phụ thuộc bậc ba.'], [
        ['The theorem requires the Hessian to be $L$-Lipschitz along the entire segment from $x$ to $x+h$.', 'Định lý yêu cầu Hessian $L$-Lipschitz trên toàn đoạn từ $x$ đến $x+h$.'],
        ['The bound is $2(0.3)^3/6=0.054/6$.', 'Chặn là $2(0.3)^3/6=0.054/6$.'],
        ['Hence $|R|\\le0.009$; halving the step length would reduce this bound by a factor of $2^3=8$.', 'Do đó $|R|\\le0.009$; giảm nửa độ dài bước sẽ giảm chặn này theo hệ số $2^3=8$.']
      ]),
      q(['In one dimension let $f(t)=|t|^{5/2}$ at $t=0$. Show why no finite Lipschitz-Hessian constant near $0$ can give a cubic remainder bound there.', 'Trong một chiều, cho $f(t)=|t|^{5/2}$ tại $t=0$. Giải thích vì sao không có hằng số Hessian Lipschitz hữu hạn gần $0$ để cho chặn phần dư bậc ba tại đó.'], [
        ['For $t\\ne0$, $f^{\\prime\\prime}(t)=\\frac{15}{4}|t|^{1/2}$ and $f^{\\prime\\prime}(0)=0$, so $f$ is $C^2$.', 'Với $t\\ne0$, $f^{\\prime\\prime}(t)=\\frac{15}{4}|t|^{1/2}$ và $f^{\\prime\\prime}(0)=0$, nên $f$ là $C^2$.'],
        ['But $|f^{\\prime\\prime}(t)-f^{\\prime\\prime}(0)|/|t|=\\frac{15}{4}|t|^{-1/2}$ is unbounded as $t\\to0$.', 'Nhưng $|f^{\\prime\\prime}(t)-f^{\\prime\\prime}(0)|/|t|=\\frac{15}{4}|t|^{-1/2}$ không bị chặn khi $t\\to0$.'],
        ['The quadratic Taylor polynomial at zero is $0$, while the remainder is $|h|^{5/2}$; its ratio to $|h|^3$ diverges, so the Lipschitz hypothesis is essential.', 'Đa thức Taylor bậc hai tại không bằng $0$, còn phần dư là $|h|^{5/2}$; tỷ số với $|h|^3$ phân kỳ, nên giả thiết Lipschitz là thiết yếu.']
      ])
    ],
    reviewNote: 'Verified the integral remainder constant and numeric bounds; the counterexample is C2 but has non-Lipschitz Hessian and noncubic remainder.',
    sourceIds: ['f-1802sc']
  },
  'f-w010-e2': {
    application: bi(['At a stationary point of a twice continuously differentiable objective, curvature in every direction classifies a strict minimum, maximum, or saddle when the Hessian is definite or indefinite.', 'Tại điểm dừng của hàm mục tiêu khả vi liên tục bậc hai, độ cong theo mọi hướng phân loại cực tiểu, cực đại nghiêm hoặc điểm yên ngựa khi Hessian xác định hoặc bất định.']),
    formula: bi(['At a stationary point of $f\\in C^2$, a symmetric positive-definite Hessian gives a strict local minimum; an indefinite Hessian gives a saddle, while semidefinite cases may be inconclusive.', 'Tại điểm dừng của $f\\in C^2$, Hessian đối xứng xác định dương cho cực tiểu địa phương nghiêm; Hessian bất định cho điểm yên ngựa, còn trường hợp bán xác định có thể chưa kết luận được.']),
    steps: [
      bi(['Verify the gradient vanishes at the candidate point before applying the second-derivative test.', 'Kiểm tra gradient bằng không tại điểm ứng viên trước khi áp dụng phép thử đạo hàm bậc hai.']),
      bi(['Compute the symmetric Hessian and test definiteness using its eigenvalues or principal-minor criteria.', 'Tính Hessian đối xứng và kiểm tra tính xác định bằng trị riêng hoặc tiêu chuẩn định thức con chính.']),
      bi(['A positive-definite Hessian gives positive quadratic change in every nonzero direction and hence a strict local minimum.', 'Hessian xác định dương cho biến thiên toàn phương dương theo mọi hướng khác không, nên có cực tiểu địa phương nghiêm.']),
      bi(['If the Hessian is only semidefinite, inspect higher-order behavior rather than declaring a minimum or saddle.', 'Nếu Hessian chỉ bán xác định, hãy xét bậc cao hơn thay vì vội kết luận cực tiểu hay yên ngựa.'])
    ],
    primarySolution: [
      bi(['Both gradients vanish at the origin because each function is homogeneous quadratic.', 'Cả hai gradient đều bằng không tại gốc vì mỗi hàm là dạng toàn phương thuần nhất.']),
      bi(['For $f$, $H_f=\\begin{pmatrix}6&2\\\\2&2\\end{pmatrix}$ has first entry $6>0$ and determinant $12-4=8>0$.', 'Với $f$, $H_f=\\begin{pmatrix}6&2\\\\2&2\\end{pmatrix}$ có phần tử đầu $6>0$ và định thức $12-4=8>0$.']),
      bi(['For $g$, $H_g=\\begin{pmatrix}6&2\\\\2&4\\end{pmatrix}$ has first entry $6>0$ and determinant $24-4=20>0$.', 'Với $g$, $H_g=\\begin{pmatrix}6&2\\\\2&4\\end{pmatrix}$ có phần tử đầu $6>0$ và định thức $24-4=20>0$.']),
      bi(['The $2\\times2$ positive-definiteness criterion applies to both Hessians, so the origin is a strict local minimum for each function.', 'Tiêu chuẩn xác định dương $2\\times2$ áp dụng cho cả hai Hessian, nên gốc là cực tiểu địa phương nghiêm của mỗi hàm.'])
    ],
    companions: [
      q(['Classify the origin for $q(x,y)=x^2-2xy+3y^2$.', 'Phân loại gốc của $q(x,y)=x^2-2xy+3y^2$.'], [
        ['The gradient vanishes at $(0,0)$, and the Hessian is $H=\\begin{pmatrix}2&-2\\\\-2&6\\end{pmatrix}$.', 'Gradient bằng không tại $(0,0)$, và Hessian là $H=\\begin{pmatrix}2&-2\\\\-2&6\\end{pmatrix}$.'],
        ['Its leading entry is $2>0$ and determinant is $12-4=8>0$, so $H$ is positive definite.', 'Phần tử đầu là $2>0$ và định thức là $12-4=8>0$, nên $H$ xác định dương.'],
        ['Therefore the origin is a strict local minimum; in fact $q=(x-y)^2+2y^2>0$ away from the origin.', 'Vì vậy gốc là cực tiểu địa phương nghiêm; thật vậy $q=(x-y)^2+2y^2>0$ ngoài gốc.']
      ]),
      q(['Classify the stationary point at the origin for $r(x,y)=x^2-y^2$.', 'Phân loại điểm dừng tại gốc của $r(x,y)=x^2-y^2$.'], [
        ['The gradient is zero at the origin and the Hessian is $\\operatorname{diag}(2,-2)$.', 'Gradient bằng không tại gốc và Hessian là $\\operatorname{diag}(2,-2)$.'],
        ['The quadratic change is positive along $(t,0)$ and negative along $(0,t)$ for $t\\ne0$.', 'Biến thiên toàn phương dương dọc $(t,0)$ và âm dọc $(0,t)$ khi $t\\ne0$.'],
        ['Values on opposite sides of zero show that the origin is a saddle point.', 'Giá trị trái dấu quanh không cho thấy gốc là điểm yên ngựa.']
      ]),
      q(['The Hessian of $s(x,y)=x^4-y^4$ at the origin is the zero matrix. Use paths to classify the origin and explain the limitation of the Hessian test.', 'Hessian của $s(x,y)=x^4-y^4$ tại gốc là ma trận không. Dùng các đường đi để phân loại gốc và giải thích giới hạn của phép thử Hessian.'], [
        ['The origin is stationary and the Hessian has no negative or positive eigenvalue, so the second-order test is inconclusive.', 'Gốc là điểm dừng và Hessian không có trị riêng âm hay dương, nên phép thử bậc hai chưa kết luận được.'],
        ['Along $(t,0)$, $s=t^4>0$; along $(0,t)$, $s=-t^4<0$ for $t\\ne0$.', 'Dọc $(t,0)$, $s=t^4>0$; dọc $(0,t)$, $s=-t^4<0$ khi $t\\ne0$.'],
        ['Thus the origin is a saddle, showing that a zero Hessian alone does not classify higher-order behavior.', 'Vậy gốc là điểm yên ngựa, cho thấy riêng Hessian không không phân loại được hành vi bậc cao.']
      ])
    ],
    reviewNote: 'Recomputed the two Hessians and determinants; companion path tests distinguish definite, indefinite, and inconclusive cases.',
    sourceIds: ['f-1802sc']
  },
  'f-w010-e3': {
    application: bi(['At a regular equality constraint, an objective’s gradient at a constrained extremum must be normal to the feasible surface, allowing the multiplier equations to locate candidates.', 'Với ràng buộc đẳng thức chính quy, gradient mục tiêu tại cực trị có ràng buộc phải vuông góc mặt khả thi, giúp phương trình nhân tử xác định ứng viên.']),
    formula: bi(['For $f,c\\in C^1$ near a constrained local extremum with $c(x_*)=0$ and $\\nabla c(x_*)\\ne0$, the necessary multiplier equations are $\\nabla f(x_*)=\\lambda\\nabla c(x_*)$ and $c(x_*)=0$.','Với $f,c\\in C^1$ gần cực trị địa phương có ràng buộc, $c(x_*)=0$, $\\nabla c(x_*)\\ne0$, phương trình nhân tử cần thiết là $\\nabla f(x_*)=\\lambda\\nabla c(x_*)$ và $c(x_*)=0$.']),
    steps: [
      bi(['Check the regularity condition $\\nabla c\\ne0$ at feasible candidate points.', 'Kiểm tra điều kiện chính quy $\\nabla c\\ne0$ tại các điểm khả thi ứng viên.']),
      bi(['Set the objective gradient equal to a scalar multiple of the constraint gradient.', 'Đặt gradient mục tiêu bằng một bội vô hướng của gradient ràng buộc.']),
      bi(['Solve these component equations together with the original constraint.', 'Giải các phương trình thành phần cùng với ràng buộc ban đầu.']),
      bi(['Compare candidates and use convexity or direct argument to decide which is a minimum or maximum.', 'So sánh các ứng viên và dùng tính lồi hoặc lập luận trực tiếp để xác định cực tiểu hay cực đại.'])
    ],
    primarySolution: [
      bi(['Let $f=x^2+y^2$ and $c=x+2y-6$; then $\\nabla f=(2x,2y)$ and $\\nabla c=(1,2)\\ne0$.', 'Đặt $f=x^2+y^2$ và $c=x+2y-6$; khi đó $\\nabla f=(2x,2y)$ và $\\nabla c=(1,2)\\ne0$.']),
      bi(['The multiplier equations are $(2x,2y)=\\lambda(1,2)$, so $x=\\lambda/2$ and $y=\\lambda$.', 'Phương trình nhân tử là $(2x,2y)=\\lambda(1,2)$, nên $x=\\lambda/2$ và $y=\\lambda$.']),
      bi(['Substitute into $x+2y=6$: $(1/2+2)\\lambda=6$, so $\\lambda=12/5$.', 'Thế vào $x+2y=6$: $(1/2+2)\\lambda=6$, nên $\\lambda=12/5$.']),
      bi(['The candidate is $(x,y)=(6/5,12/5)$; strict convexity of $x^2+y^2$ on the line makes it the unique global minimum.', 'Ứng viên là $(x,y)=(6/5,12/5)$; tính lồi nghiêm của $x^2+y^2$ trên đường thẳng khiến đây là cực tiểu toàn cục duy nhất.'])
    ],
    companions: [
      q(['Minimize $x^2+4y^2$ subject to $2x-y=3$ using Lagrange multipliers.', 'Tối thiểu hóa $x^2+4y^2$ với ràng buộc $2x-y=3$ bằng nhân tử Lagrange.'], [
        ['Set $c=2x-y-3$; its gradient $(2,-1)$ is nonzero everywhere, so the constraint is regular.', 'Đặt $c=2x-y-3$; gradient $(2,-1)$ khác không ở mọi điểm, nên ràng buộc chính quy.'],
        ['The equations $(2x,8y)=\\lambda(2,-1)$ give $x=\\lambda$ and $y=-\\lambda/8$; the constraint yields $17\\lambda/8=3$.', 'Phương trình $(2x,8y)=\\lambda(2,-1)$ cho $x=\\lambda$ và $y=-\\lambda/8$; ràng buộc cho $17\\lambda/8=3$.'],
        ['Thus $(x,y)=(24/17,-3/17)$ and the minimum value is $x^2+4y^2=36/17$.', 'Vậy $(x,y)=(24/17,-3/17)$ và giá trị nhỏ nhất là $x^2+4y^2=36/17$.']
      ]),
      q(['Find the minimum and maximum of $f(x,y)=x$ on the unit circle $x^2+y^2=1$ using the multiplier equations.', 'Tìm cực tiểu và cực đại của $f(x,y)=x$ trên đường tròn đơn vị $x^2+y^2=1$ bằng phương trình nhân tử.'], [
        ['The constraint gradient $(2x,2y)$ is nonzero everywhere on the circle.', 'Gradient ràng buộc $(2x,2y)$ khác không ở mọi điểm trên đường tròn.'],
        ['The equation $(1,0)=\\lambda(2x,2y)$ forces $y=0$; feasibility then gives $x=\\pm1$.', 'Phương trình $(1,0)=\\lambda(2x,2y)$ buộc $y=0$; tính khả thi cho $x=\\pm1$.'],
        ['The objective values are $-1$ at $(-1,0)$ and $1$ at $(1,0)$, giving the global minimum and maximum.', 'Giá trị mục tiêu là $-1$ tại $(-1,0)$ và $1$ tại $(1,0)$, lần lượt là cực tiểu và cực đại toàn cục.']
      ]),
      q(['Find the point closest to the origin subject to $3x+4y=10$ by a multiplier argument.', 'Tìm điểm gần gốc nhất thỏa $3x+4y=10$ bằng lập luận nhân tử.'], [
        ['Minimize $x^2+y^2$ with $c=3x+4y-10$; $\\nabla c=(3,4)\\ne0$.', 'Tối thiểu hóa $x^2+y^2$ với $c=3x+4y-10$; $\\nabla c=(3,4)\\ne0$.'],
        ['The stationarity equation $(2x,2y)=\\lambda(3,4)$ makes $(x,y)$ parallel to $(3,4)$.', 'Phương trình dừng $(2x,2y)=\\lambda(3,4)$ khiến $(x,y)$ song song với $(3,4)$.'],
        ['Using the constraint gives $(x,y)=(6/5,8/5)$, whose squared distance is $4$; strict convexity makes it the unique closest point.', 'Dùng ràng buộc được $(x,y)=(6/5,8/5)$, có bình phương khoảng cách bằng $4$; tính lồi nghiêm cho đây là điểm gần nhất duy nhất.']
      ])
    ],
    reviewNote: 'Checked regularity and multiplier equations for each constraint, then verified candidate feasibility and objective comparisons.',
    sourceIds: ['f-1802sc']
  },
  'f-w010-e4': {
    application: bi(['A singular constraint gradient can invalidate the usual Lagrange necessary condition; an equality constraint may have an optimum even when no multiplier represents it.', 'Gradient ràng buộc suy biến có thể làm mất điều kiện cần Lagrange thông thường; bài toán có thể có cực trị dù không nhân tử nào biểu diễn được.']),
    formula: bi(['The standard multiplier condition requires $\\nabla c(x_*)\\ne0$; if this fails, $\\nabla f=\\lambda\\nabla c$ need not hold at a feasible optimum.', 'Điều kiện nhân tử chuẩn đòi hỏi $\\nabla c(x_*)\\ne0$; nếu điều này thất bại, $\\nabla f=\\lambda\\nabla c$ có thể không đúng tại cực trị khả thi.']),
    steps: [
      bi(['Determine the feasible set directly from the constraint, rather than relying on the multiplier equation.', 'Xác định trực tiếp tập khả thi từ ràng buộc thay vì dựa vào phương trình nhân tử.']),
      bi(['Find the objective optimum on that feasible set.', 'Tìm cực trị mục tiêu trên tập khả thi ấy.']),
      bi(['Evaluate the constraint gradient at the optimum and check whether it vanishes.', 'Tính gradient ràng buộc tại cực trị và kiểm tra nó có bằng không không.']),
      bi(['If it vanishes, explain why the regular-constraint theorem gives no necessary multiplier equation there.', 'Nếu gradient bằng không, giải thích vì sao định lý ràng buộc chính quy không cho phương trình nhân tử cần thiết tại đó.'])
    ],
    primarySolution: [
      bi(['The constraint $x^2=0$ has the singleton feasible set $\\{0\\}$, so $x=0$ is automatically its global minimum for $f(x)=x$.', 'Ràng buộc $x^2=0$ có tập khả thi duy nhất $\\{0\\}$, nên $x=0$ tự động là cực tiểu toàn cục của $f(x)=x$.']),
      bi(['At this point, $f^{\\prime}(0)=1$ but $c^{\\prime}(0)=0$.', 'Tại điểm này, $f^{\\prime}(0)=1$ nhưng $c^{\\prime}(0)=0$.']),
      bi(['The proposed equation would be $1=\\lambda\\cdot0$, which has no solution for any real $\\lambda$.', 'Phương trình đề xuất là $1=\\lambda\\cdot0$, vô nghiệm với mọi $\\lambda$ thực.']),
      bi(['The regularity hypothesis fails, so this optimum is not covered by the usual Lagrange necessary condition.', 'Giả thiết chính quy thất bại, nên cực trị này không thuộc phạm vi điều kiện cần Lagrange thông thường.'])
    ],
    companions: [
      q(['Minimize $f(x,y)=x+y^2$ subject to $c(x,y)=x^2=0$. Show the feasible optimum cannot satisfy the regular multiplier equation.', 'Tối thiểu hóa $f(x,y)=x+y^2$ với $c(x,y)=x^2=0$. Chứng minh cực trị khả thi không thỏa phương trình nhân tử chính quy.'], [
        ['Feasibility forces $x=0$, leaving $f(0,y)=y^2$, whose unique minimum is $(0,0)$.', 'Tính khả thi buộc $x=0$, còn $f(0,y)=y^2$ có cực tiểu duy nhất tại $(0,0)$.'],
        ['At that point $\\nabla f=(1,0)$ while $\\nabla c=(2x,0)=(0,0)$.', 'Tại điểm ấy $\\nabla f=(1,0)$ còn $\\nabla c=(2x,0)=(0,0)$.'],
        ['No scalar $\\lambda$ can make $(1,0)=\\lambda(0,0)$, and the constraint qualification is exactly what failed.', 'Không số vô hướng $\\lambda$ nào làm $(1,0)=\\lambda(0,0)$; điều kiện chính quy của ràng buộc chính là phần đã thất bại.']
      ]),
      q(['Minimize $f(x,y)=x+y$ subject to $x^2+y^2=0$. Identify the feasible optimum and explain why no multiplier exists.', 'Tối thiểu hóa $f(x,y)=x+y$ với $x^2+y^2=0$. Xác định cực trị khả thi và giải thích vì sao không có nhân tử.'], [
        ['The only feasible point is $(0,0)$, so it is the global minimum on the feasible set.', 'Điểm khả thi duy nhất là $(0,0)$, nên đó là cực tiểu toàn cục trên tập khả thi.'],
        ['At the point, $\\nabla f=(1,1)$ and $\\nabla c=(2x,2y)=(0,0)$.', 'Tại điểm đó, $\\nabla f=(1,1)$ và $\\nabla c=(2x,2y)=(0,0)$.'],
        ['The equation $(1,1)=\\lambda(0,0)$ is impossible; the constraint is singular at its feasible point.', 'Phương trình $(1,1)=\\lambda(0,0)$ vô nghiệm; ràng buộc suy biến tại điểm khả thi.']
      ]),
      q(['For $f(x,y)=x^2+y^2$ subject to $c(x,y)=x^2+y^2=0$, inspect the multiplier equation and explain why its apparent solutions do not restore regularity.', 'Với $f(x,y)=x^2+y^2$ và ràng buộc $c(x,y)=x^2+y^2=0$, xét phương trình nhân tử và giải thích vì sao nghiệm hình thức không khôi phục tính chính quy.'], [
        ['The feasible set is only $(0,0)$, where both gradients vanish: $\\nabla f=\\nabla c=(0,0)$.', 'Tập khả thi chỉ gồm $(0,0)$, nơi cả hai gradient đều bằng không: $\\nabla f=\\nabla c=(0,0)$.'],
        ['Thus $\\nabla f=\\lambda\\nabla c$ holds for every $\\lambda$, so the equation supplies no information about the extremum.', 'Vì thế $\\nabla f=\\lambda\\nabla c$ đúng với mọi $\\lambda$, nên phương trình không cung cấp thông tin về cực trị.'],
        ['Because $\\nabla c(0,0)=0$, the regularity hypothesis still fails; satisfying a vacuous equation is not a regularity certificate.', 'Vì $\\nabla c(0,0)=0$, giả thiết chính quy vẫn thất bại; thỏa một phương trình rỗng không chứng nhận tính chính quy.']
      ])
    ],
    reviewNote: 'Verified feasible sets and gradients directly; examples show both a missing multiplier and an uninformative vacuous equation.',
    sourceIds: ['f-1802sc']
  },
  'f-w010-e5': {
    application: bi(['A bounded Hessian limits the curvature penalty along a gradient step, so a sufficiently short step decreases a differentiable objective.', 'Hessian bị chặn giới hạn chi phí độ cong dọc bước gradient, nên bước đủ ngắn sẽ làm giảm hàm mục tiêu khả vi.']),
    formula: bi(['If $g=\\nabla f(x)\\ne0$ and $\\|H\\|_2\\le M$ on the segment from $x$ to $x-\\alpha g$, then $f(x-\\alpha g)-f(x)\\le-\\alpha\\|g\\|_2^2+(M/2)\\alpha^2\\|g\\|_2^2$; for $M>0$, require $0<\\alpha<2/M$.', 'Nếu $g=\\nabla f(x)\\ne0$ và $\\|H\\|_2\\le M$ trên đoạn từ $x$ đến $x-\\alpha g$, thì $f(x-\\alpha g)-f(x)\\le-\\alpha\\|g\\|_2^2+(M/2)\\alpha^2\\|g\\|_2^2$; khi $M>0$, cần $0<\\alpha<2/M$.']),
    steps: [
      bi(['Set the displacement to $h=-\\alpha g$ in the second-order Taylor bound.', 'Đặt độ dời $h=-\\alpha g$ trong chặn Taylor bậc hai.']),
      bi(['The linear term is $\\nabla f(x)^Th=-\\alpha\\|g\\|_2^2$.', 'Số hạng tuyến tính là $\\nabla f(x)^Th=-\\alpha\\|g\\|_2^2$.']),
      bi(['The Hessian term is at most $(M/2)\\alpha^2\\|g\\|_2^2$.', 'Số hạng Hessian không vượt quá $(M/2)\\alpha^2\\|g\\|_2^2$.']),
      bi(['Choose $\\alpha$ so the negative linear term dominates and ensure the whole segment remains inside the region where the Hessian bound holds.', 'Chọn $\\alpha$ để số hạng tuyến tính âm chiếm ưu thế và bảo đảm toàn đoạn nằm trong miền có chặn Hessian.'])
    ],
    primarySolution: [
      bi(['Let $g=\\nabla f(x)\\ne0$ and suppose the Hessian bound holds on a ball of radius $r$ around $x$.', 'Đặt $g=\\nabla f(x)\\ne0$ và giả sử chặn Hessian đúng trên quả cầu bán kính $r$ quanh $x$.']),
      bi(['Taylor’s theorem with $h=-\\alpha g$ gives $f(x-\\alpha g)-f(x)\\le-\\alpha\\|g\\|^2+(M/2)\\alpha^2\\|g\\|^2$.', 'Định lý Taylor với $h=-\\alpha g$ cho $f(x-\\alpha g)-f(x)\\le-\\alpha\\|g\\|^2+(M/2)\\alpha^2\\|g\\|^2$.']),
      bi(['Factor the bound as $-\\alpha(1-M\\alpha/2)\\|g\\|^2$. For $M>0$, it is negative if $0<\\alpha<2/M$.', 'Phân tích chặn thành $-\\alpha(1-M\\alpha/2)\\|g\\|^2$. Với $M>0$, chặn âm nếu $0<\\alpha<2/M$.']),
      bi(['Also require $\\alpha\\|g\\|<r$ to stay in the ball. For $M>0$, choose $0<\\alpha<\\min\\{2/M,r/\\|g\\|\\}$. For $M=0$, use $0<\\alpha<r/\\|g\\|$; the bound is then $-\\alpha\\|g\\|^2<0$ without dividing by zero.', 'Còn cần $\\alpha\\|g\\|<r$ để ở trong quả cầu. Với $M>0$, chọn $0<\\alpha<\\min\\{2/M,r/\\|g\\|\\}$. Với $M=0$, dùng $0<\\alpha<r/\\|g\\|$; chặn khi đó là $-\\alpha\\|g\\|^2<0$, không chia cho không.'])
    ],
    companions: [
      q(['Suppose $M=4$, $\\|g\\|_2=3$, the Hessian bound holds within radius $1$, and choose $\\alpha=1/4$. Verify the Taylor guarantee gives a decrease.', 'Giả sử $M=4$, $\\|g\\|_2=3$, chặn Hessian đúng trong bán kính $1$, và chọn $\\alpha=1/4$. Kiểm tra chặn Taylor bảo đảm hàm giảm.'], [
        ['The step length is $\\alpha\\|g\\|=(1/4)3=3/4<1$, so the segment remains in the bounded-Hessian region.', 'Độ dài bước là $\\alpha\\|g\\|=(1/4)3=3/4<1$, nên đoạn bước nằm trong miền Hessian bị chặn.'],
        ['The Taylor upper bound is $-(1/4)9+(4/2)(1/16)9=-9/4+9/8=-9/8$.', 'Chặn trên Taylor là $-(1/4)9+(4/2)(1/16)9=-9/4+9/8=-9/8$.'],
        ['Since $-9/8<0$, the objective decreases by at least $9/8$ according to this bound.', 'Vì $-9/8<0$, theo chặn này hàm mục tiêu giảm ít nhất $9/8$.']
      ]),
      q(['If $M=0$ on a ball of radius $r=2$ and $\\|g\\|_2=5$, give a positive step-size condition ensuring the segment stays in the ball and explain the descent bound.', 'Nếu $M=0$ trong quả cầu bán kính $r=2$ và $\\|g\\|_2=5$, nêu điều kiện bước dương để đoạn nằm trong quả cầu và giải thích chặn giảm.'], [
        ['The segment length is $\\alpha\\|g\\|_2=5\\alpha$, so it suffices to choose $0<\\alpha<2/5$.', 'Độ dài đoạn là $\\alpha\\|g\\|_2=5\\alpha$, nên chỉ cần chọn $0<\\alpha<2/5$.'],
        ['With $M=0$, the Taylor bound reduces to $f(x-\\alpha g)-f(x)\\le-\\alpha\\|g\\|_2^2=-25\\alpha$.', 'Với $M=0$, chặn Taylor rút về $f(x-\\alpha g)-f(x)\\le-\\alpha\\|g\\|_2^2=-25\\alpha$.'],
        ['Every such positive step therefore has a strictly negative upper bound while remaining in the region.', 'Vì vậy mọi bước dương như vậy có chặn trên âm nghiêm và vẫn nằm trong miền.']
      ]),
      q(['For the one-dimensional quadratic $f(x)=Mx^2/2$ at $x=1$ with $M>0$, compute the change after the gradient step $x-\\alpha f^{\\prime}(x)$ at $\\alpha=2/M$.', 'Với hàm bậc hai một chiều $f(x)=Mx^2/2$ tại $x=1$, $M>0$, tính biến thiên sau bước gradient $x-\\alpha f^{\\prime}(x)$ khi $\\alpha=2/M$.'], [
        ['The gradient at $1$ is $f^{\\prime}(1)=M$, so the new point is $1-(2/M)M=-1$.', 'Gradient tại $1$ là $f^{\\prime}(1)=M$, nên điểm mới là $1-(2/M)M=-1$.'],
        ['The function is even, so $f(-1)=f(1)=M/2$ and the change is zero.', 'Hàm chẵn nên $f(-1)=f(1)=M/2$ và biến thiên bằng không.'],
        ['At the boundary step size $2/M$ there is no strict decrease, which explains why the sufficient condition uses $\\alpha<2/M$.', 'Tại bước biên $2/M$ không có giảm nghiêm, giải thích vì sao điều kiện đủ dùng $\\alpha<2/M$.']
      ])
    ],
    reviewNote: 'Checked the Taylor bound, radius requirement, numerical decrease, and the equality case at the step-size boundary.',
    sourceIds: ['f-1802sc']
  },
  'f-w011-e1': {
    prompt:bi(['Let f be continuous on $D=\\{(x,y):0\\le x\\le y\\le1\\}$. Rewrite $\\int_0^1\\int_x^1 f(x,y)\\,dy\\,dx$ in the order $dx\\,dy$, then evaluate it for $f=1$.','Cho f liên tục trên $D=\\{(x,y):0\\le x\\le y\\le1\\}$. Viết lại $\\int_0^1\\int_x^1 f(x,y)\\,dy\\,dx$ theo thứ tự $dx\\,dy$, rồi tính khi $f=1$.']),
    application: bi(['Reversing integration order can simplify a region when its boundary is easier to describe using the other coordinate.', 'Đổi thứ tự tích phân có thể đơn giản hóa miền khi biên dễ mô tả hơn theo tọa độ còn lại.']),
    formula: bi(['For an integrable function on a bounded region, Fubini permits either order; the triangle $0\\le x\\le1$, $x\\le y\\le1$ is $0\\le y\\le1$, $0\\le x\\le y$.', 'Với hàm khả tích trên miền bị chặn, Fubini cho phép đổi thứ tự; tam giác $0\\le x\\le1$, $x\\le y\\le1$ tương đương $0\\le y\\le1$, $0\\le x\\le y$.']),
    steps: [
      bi(['Sketch or describe the inequalities defining the original region.', 'Phác họa hoặc mô tả các bất đẳng thức xác định miền ban đầu.']),
      bi(['Fix the new outer variable and determine the full range of the inner variable.', 'Cố định biến ngoài mới rồi xác định toàn bộ khoảng của biến trong.']),
      bi(['Rewrite the iterated integral with the new limits and same integrand.', 'Viết lại tích phân lặp với cận mới và giữ nguyên hàm dưới dấu tích phân.']),
      bi(['If requested, evaluate the new integral and compare it with the region’s area when the integrand is one.', 'Nếu đề yêu cầu, tính tích phân mới và so sánh với diện tích miền khi hàm dưới dấu tích phân bằng một.'])
    ],
    primarySolution: [
      bi(['The original bounds describe $0\\le x\\le y\\le1$.', 'Cận ban đầu mô tả miền $0\\le x\\le y\\le1$.']),
      bi(['With $y$ fixed, it ranges from $0$ to $1$, and $x$ ranges from $0$ to $y$.', 'Khi cố định $y$, biến này chạy từ $0$ đến $1$, còn $x$ chạy từ $0$ đến $y$.']),
      bi(['Thus the reversed integral is $\\int_0^1\\int_0^y f(x,y)\\,dx\\,dy$.', 'Vậy tích phân đổi thứ tự là $\\int_0^1\\int_0^y f(x,y)\\,dx\\,dy$.']),
      bi(['For $f=1$, its value is $\\int_0^1 y\\,dy=1/2$, the area of the triangular region.', 'Với $f=1$, giá trị là $\\int_0^1 y\\,dy=1/2$, bằng diện tích miền tam giác.'])
    ],
    companions: [
      q(['Reverse the order in $\\int_0^1\\int_0^x(x+y)\\,dy\\,dx$ and evaluate the integral.', 'Đổi thứ tự trong $\\int_0^1\\int_0^x(x+y)\\,dy\\,dx$ rồi tính tích phân.'], [
        ['The region is $0\\le y\\le x\\le1$; fixing $y$ gives $y\\le x\\le1$.', 'Miền là $0\\le y\\le x\\le1$; cố định $y$ cho $y\\le x\\le1$.'],
        ['The reversed integral is $\\int_0^1\\int_y^1(x+y)\\,dx\\,dy$.', 'Tích phân đảo thứ tự là $\\int_0^1\\int_y^1(x+y)\\,dx\\,dy$.'],
        ['The inner integral is $(1-y^2)/2+y(1-y)$; integrating this from $0$ to $1$ gives $1/2$.', 'Tích phân trong là $(1-y^2)/2+y(1-y)$; tích phân biểu thức này từ $0$ đến $1$ bằng $1/2$.']
      ]),
      q(['Rewrite $\\int_0^2\\int_{x/2}^1 1\\,dy\\,dx$ in the order $dx\\,dy$ and find the region’s area.', 'Viết lại $\\int_0^2\\int_{x/2}^1 1\\,dy\\,dx$ theo thứ tự $dx\\,dy$ và tìm diện tích miền.'], [
        ['The bounds describe $0\\le x\\le2$ and $x/2\\le y\\le1$.', 'Cận mô tả $0\\le x\\le2$ và $x/2\\le y\\le1$.'],
        ['Solving for $x$ gives $0\\le y\\le1$ and $0\\le x\\le2y$.', 'Giải theo $x$ được $0\\le y\\le1$ và $0\\le x\\le2y$.'],
        ['The reversed integral is $\\int_0^1\\int_0^{2y}1\\,dx\\,dy=\\int_0^1 2y\\,dy=1$.', 'Tích phân đảo là $\\int_0^1\\int_0^{2y}1\\,dx\\,dy=\\int_0^1 2y\\,dy=1$.']
      ]),
      q(['Reverse the order for the area between $y=x^2$ and $y=x$ on $0\\le x\\le1$, then compute that area.', 'Đổi thứ tự để tính diện tích giữa $y=x^2$ và $y=x$ trên $0\\le x\\le1$.'], [
        ['The curves meet at $x=0,1$, and for each such $x$ the vertical range is $x^2\\le y\\le x$.', 'Hai đường cong gặp nhau tại $x=0,1$; với mỗi $x$ trong khoảng, cận đứng là $x^2\\le y\\le x$.'],
        ['For fixed $0\\le y\\le1$, the inequalities become $y\\le x\\le\\sqrt y$.', 'Với $0\\le y\\le1$ cố định, các bất đẳng thức trở thành $y\\le x\\le\\sqrt y$.'],
        ['The area is $\\int_0^1(\\sqrt y-y)\\,dy=2/3-1/2=1/6$.', 'Diện tích là $\\int_0^1(\\sqrt y-y)\\,dy=2/3-1/2=1/6$.']
      ])
    ],
    reviewNote: 'Checked each region inequality after fixing the new outer variable and evaluated the three resulting areas or integrals.',
    sourceIds: ['f-1802sc']
  },
  'f-w011-e2': {
    application: bi(['Polar coordinates turn radial densities over disks and annuli into one-dimensional radial integrals, with the Jacobian supplying the area factor $r$.', 'Tọa độ cực biến mật độ theo bán kính trên đĩa và vành khăn thành tích phân một chiều theo bán kính; Jacobian bổ sung hệ số diện tích $r$.']),
    formula: bi(['On a disk or annulus with $r\\ge0$ and an angle interval of length $2\\pi$, $x^2+y^2=r^2$ and $dA=r\\,dr\\,d\\theta$.', 'Trên đĩa hoặc vành khăn với $r\\ge0$ và khoảng góc dài $2\\pi$, ta có $x^2+y^2=r^2$ và $dA=r\\,dr\\,d\\theta$.']),
    steps: [
      bi(['Describe the region using radial bounds and a complete angular interval.', 'Mô tả miền bằng cận bán kính và khoảng góc đầy đủ.']),
      bi(['Replace $x^2+y^2$ by $r^2$ and multiply by the Jacobian factor $r$.', 'Thay $x^2+y^2$ bằng $r^2$ và nhân với hệ số Jacobian $r$.']),
      bi(['Integrate first in $r$ and then over the angle range.', 'Tích phân theo $r$ trước rồi theo khoảng góc.']),
      bi(['Check that the radial limits match the disk or annulus and that the origin is handled as a measure-zero boundary.', 'Kiểm tra cận bán kính đúng với đĩa hoặc vành khăn và gốc được xử lý như biên có diện tích bằng không.'])
    ],
    primarySolution: [
      bi(['On the radius-$2$ disk, use $0\\le r\\le2$ and $0\\le\\theta\\le2\\pi$.', 'Trên đĩa bán kính $2$, dùng $0\\le r\\le2$ và $0\\le\\theta\\le2\\pi$.']),
      bi(['The density becomes $x^2+y^2=r^2$, and the area element contributes another factor $r$.', 'Mật độ trở thành $x^2+y^2=r^2$, và phần tử diện tích đóng góp thêm hệ số $r$.']),
      bi(['The integral is $\\int_0^{2\\pi}\\int_0^2r^3\\,dr\\,d\\theta=2\\pi[r^4/4]_0^2$.', 'Tích phân là $\\int_0^{2\\pi}\\int_0^2r^3\\,dr\\,d\\theta=2\\pi[r^4/4]_0^2$.']),
      bi(['Since $[r^4/4]_0^2=4$, the value is $8\\pi$.', 'Vì $[r^4/4]_0^2=4$, kết quả bằng $8\\pi$.'])
    ],
    companions: [
      q(['Compute the integral of density $1$ over the disk of radius $3$ using polar coordinates.', 'Tính tích phân của mật độ $1$ trên đĩa bán kính $3$ bằng tọa độ cực.'], [
        ['The radial range is $0\\le r\\le3$ and the angle range is $0\\le\\theta\\le2\\pi$.', 'Cận bán kính là $0\\le r\\le3$ và cận góc là $0\\le\\theta\\le2\\pi$.'],
        ['Including the Jacobian gives $\\int_0^{2\\pi}\\int_0^3 r\\,dr\\,d\\theta$.', 'Tính cả Jacobian được $\\int_0^{2\\pi}\\int_0^3 r\\,dr\\,d\\theta$.'],
        ['The radial integral is $9/2$, so the area integral is $2\\pi(9/2)=9\\pi$.', 'Tích phân bán kính bằng $9/2$, nên tích phân diện tích là $2\\pi(9/2)=9\\pi$.']
      ]),
      q(['Integrate the radial density $x^2+y^2$ over the annulus $1\\le\\sqrt{x^2+y^2}\\le2$.', 'Tính tích phân mật độ theo bán kính $x^2+y^2$ trên vành khăn $1\\le\\sqrt{x^2+y^2}\\le2$.'], [
        ['The annulus has $1\\le r\\le2$ and full angle $0\\le\\theta\\le2\\pi$.', 'Vành khăn có $1\\le r\\le2$ và góc đầy đủ $0\\le\\theta\\le2\\pi$.'],
        ['The transformed integrand including area scale is $r^2r=r^3$.', 'Hàm dưới dấu tích phân sau đổi biến, gồm cả hệ số diện tích, là $r^2r=r^3$.'],
        ['The value is $2\\pi\\int_1^2r^3\\,dr=2\\pi(15/4)=15\\pi/2$.', 'Giá trị là $2\\pi\\int_1^2r^3\\,dr=2\\pi(15/4)=15\\pi/2$.']
      ]),
      q(['Compute $\\iint_{x^2+y^2\\le1}e^{-(x^2+y^2)}\\,dA$ by polar coordinates.', 'Tính $\\iint_{x^2+y^2\\le1}e^{-(x^2+y^2)}\\,dA$ bằng tọa độ cực.'], [
        ['The disk maps to $0\\le r\\le1$, $0\\le\\theta\\le2\\pi$, and the transformed integrand is $e^{-r^2}r$.', 'Đĩa biến thành $0\\le r\\le1$, $0\\le\\theta\\le2\\pi$, hàm dưới dấu tích phân là $e^{-r^2}r$.'],
        ['Integrating in angle gives $2\\pi\\int_0^1e^{-r^2}r\\,dr$.', 'Tích phân theo góc cho $2\\pi\\int_0^1e^{-r^2}r\\,dr$.'],
        ['With $s=r^2$, the radial integral is $(1-e^{-1})/2$, so the result is $\\pi(1-e^{-1})$.', 'Đặt $s=r^2$, tích phân bán kính là $(1-e^{-1})/2$, nên kết quả là $\\pi(1-e^{-1})$.']
      ])
    ],
    reviewNote: 'Checked the polar Jacobian factor and radial antiderivatives on the disk, annulus, and exponential-density examples.',
    sourceIds: ['f-1802sc']
  },
  'f-w011-e3': {
    application: bi(['An affine coordinate map sends rectangles and other regions to parallelograms or polygons, scaling their area by the absolute determinant of its linear part.', 'Phép affine gửi hình chữ nhật và miền khác thành hình bình hành hoặc đa giác, co giãn diện tích theo trị tuyệt đối định thức của phần tuyến tính.']),
    formula: bi(['For $\\Phi(u)=Ju+b$ with invertible $J$, area scales by $|\\det J|$; for an integrand $g$, $dx=|\\det J|\\,du$.', 'Với $\\Phi(u)=Ju+b$ có $J$ khả nghịch, diện tích nhân với $|\\det J|$; với hàm $g$, ta có $dx=|\\det J|\\,du$.']),
    steps: [
      bi(['Differentiate the affine map; its Jacobian is the constant matrix $J$.', 'Lấy đạo hàm ánh xạ affine; Jacobian của nó là ma trận hằng $J$.']),
      bi(['Compute $\\det J$ and take the absolute value to account for any orientation reversal.', 'Tính $\\det J$ rồi lấy trị tuyệt đối để tính cả trường hợp đảo định hướng.']),
      bi(['Multiply the source-region area by $|\\det J|$ to obtain the image area.', 'Nhân diện tích miền nguồn với $|\\det J|$ để có diện tích ảnh.']),
      bi(['For integrals, transform the density as well as the area element.', 'Khi đổi tích phân, hãy đổi cả mật độ lẫn phần tử diện tích.'])
    ],
    primarySolution: [
      bi(['The Jacobian matrix of $(x,y)=(2u+v,u+3v)$ is $J=\\begin{pmatrix}2&1\\\\1&3\\end{pmatrix}$.', 'Ma trận Jacobian của $(x,y)=(2u+v,u+3v)$ là $J=\\begin{pmatrix}2&1\\\\1&3\\end{pmatrix}$.']),
      bi(['Its determinant is $2\\cdot3-1\\cdot1=5$, so its absolute area factor is $5$.', 'Định thức bằng $2\\cdot3-1\\cdot1=5$, nên hệ số diện tích tuyệt đối là $5$.']),
      bi(['The unit square has area $1$.', 'Hình vuông đơn vị có diện tích $1$.']),
      bi(['Therefore its image parallelogram has area $1\\cdot5=5$.', 'Vì vậy hình bình hành ảnh có diện tích $1\\cdot5=5$.'])
    ],
    companions: [
      q(['The affine map $(x,y)=(u+3v+4,2u-v-2)$ acts on the unit square. Find the image area and explain separately the negative determinant and the translation.', 'Phép affine $(x,y)=(u+3v+4,2u-v-2)$ tác động lên hình vuông đơn vị. Tìm diện tích ảnh và giải thích riêng định thức âm cùng phép tịnh tiến.'], [
        ['The Jacobian is $J=\\begin{pmatrix}1&3\\\\2&-1\\end{pmatrix}$, with determinant $-1-6=-7$.','Jacobian là $J=\\begin{pmatrix}1&3\\\\2&-1\\end{pmatrix}$, có định thức $-1-6=-7$.'],
        ['The negative determinant reverses orientation, while the area multiplier is $|-7|=7$.','Định thức âm đảo định hướng, còn hệ số nhân diện tích là $|-7|=7$.'],
        ['Translation by $(4,-2)$ moves the parallelogram without changing its area. The unit square therefore has image area seven.','Tịnh tiến theo $(4,-2)$ dịch hình bình hành mà không đổi diện tích. Do đó ảnh của hình vuông đơn vị có diện tích bảy.']
      ]),
      q(['Map $0\\le u\\le3$, $0\\le v\\le2$ by $(x,y)=(3u-v,u+2v)$. Compute the image area by comparing the source and image edge vectors.', 'Ánh xạ $0\\le u\\le3$, $0\\le v\\le2$ bằng $(x,y)=(3u-v,u+2v)$. Tính diện tích ảnh bằng cách so vector cạnh nguồn và ảnh.'], [
        ['The source edges are $(3,0)$ and $(0,2)$, so the source area is six.','Các cạnh nguồn là $(3,0)$ và $(0,2)$ nên diện tích nguồn bằng sáu.'],
        ['Their images are $(9,3)$ and $(-2,4)$. The parallelogram area is $|9(4)-(-2)(3)|=42$.','Ảnh của chúng là $(9,3)$ và $(-2,4)$. Diện tích hình bình hành bằng $|9(4)-(-2)(3)|=42$.'],
        ['The derivative matrix has determinant $\\det\\begin{pmatrix}3&-1\\\\1&2\\end{pmatrix}=7$. Its predicted area is $7(6)=42$, agreeing with the edge calculation.','Ma trận đạo hàm có định thức $\\det\\begin{pmatrix}3&-1\\\\1&2\\end{pmatrix}=7$. Diện tích suy ra là $7(6)=42$, trùng cách tính từ cạnh.']
      ]),
      q(['The affine map $(x,y)=(3u+v,u+v)$ sends the triangle $u\\ge0$, $v\\ge0$, $u+v\\le1$ to a new region. Find its area.', 'Phép affine $(x,y)=(3u+v,u+v)$ gửi tam giác $u\\ge0$, $v\\ge0$, $u+v\\le1$ sang miền mới. Tìm diện tích miền ảnh.'], [
        ['The Jacobian matrix is $\\begin{pmatrix}3&1\\\\1&1\\end{pmatrix}$, with determinant $2$.', 'Ma trận Jacobian là $\\begin{pmatrix}3&1\\\\1&1\\end{pmatrix}$, có định thức $2$.'],
        ['The source triangle has base and height $1$, so its area is $1/2$.', 'Tam giác nguồn có đáy và chiều cao bằng $1$, nên diện tích là $1/2$.'],
        ['The image area is $|2|(1/2)=1$.', 'Diện tích ảnh là $|2|(1/2)=1$.']
      ])
    ],
    reviewNote: 'Recomputed determinants and source-region areas; negative determinants were converted to positive area factors.',
    sourceIds: ['f-1802sc']
  },
  'f-w011-e4': {
    application: bi(['A change-of-variables formula with one inverse counts a region once; a many-to-one map must be split into one-to-one branches and their contributions added.', 'Công thức đổi biến với một nghịch đảo đếm miền một lần; ánh xạ nhiều-một phải tách thành các nhánh đơn ánh rồi cộng các đóng góp.']),
    formula: bi(['For a piecewise one-to-one map $y=\\Phi(u)$, sum the inverse-Jacobian contributions over every branch; a single inverse is valid only where the map is injective.', 'Với ánh xạ từng khúc đơn ánh $y=\\Phi(u)$, cộng các phần theo Jacobian nghịch đảo trên từng nhánh; một nghịch đảo duy nhất chỉ hợp lệ khi ánh xạ đơn ánh.']),
    steps: [
      bi(['Check whether distinct input points can share an output; if so, the one-inverse theorem does not apply globally.', 'Kiểm tra liệu các điểm đầu vào khác nhau có thể cho cùng đầu ra không; nếu có, định lý một nghịch đảo không áp dụng toàn cục.']),
      bi(['Partition the domain into intervals or regions where the map is injective and the Jacobian is nonzero in the interior.', 'Chia miền thành các khoảng hoặc miền con nơi ánh xạ đơn ánh và Jacobian khác không ở phần trong.']),
      bi(['Apply change of variables separately on each branch using the absolute inverse-Jacobian factor.', 'Áp dụng đổi biến riêng trên từng nhánh bằng hệ số Jacobian nghịch đảo tuyệt đối.']),
      bi(['Add the branch integrals; shared boundary points have measure zero when applicable.', 'Cộng các tích phân nhánh; các điểm biên chung có độ đo bằng không khi điều đó áp dụng.'])
    ],
    primarySolution: [
      bi(['On $[-1,1]$, $\\Phi(u)=u^2$ is not injective because $u$ and $-u$ have the same image.', 'Trên $[-1,1]$, $\\Phi(u)=u^2$ không đơn ánh vì $u$ và $-u$ có cùng ảnh.']),
      bi(['For $0<y\\le1$, the inverse values are $u=\\sqrt y$ and $u=-\\sqrt y$, so there is no single inverse on the whole interval.', 'Với $0<y\\le1$, các giá trị nghịch đảo là $u=\\sqrt y$ và $u=-\\sqrt y$, nên không có một nghịch đảo duy nhất trên toàn khoảng.']),
      bi(['Split the domain into $[-1,0]$ and $[0,1]$, where $\\Phi$ is monotone and one-to-one on each branch.', 'Chia miền thành $[-1,0]$ và $[0,1]$, nơi $\\Phi$ đơn điệu và đơn ánh trên mỗi nhánh.']),
      bi(['Apply the one-dimensional formula on both branches with $|\\Phi^{\\prime}(u)|=2|u|$ and add them; the shared endpoint $u=0$ has measure zero.', 'Áp dụng công thức một chiều trên cả hai nhánh với $|\\Phi^{\\prime}(u)|=2|u|$ rồi cộng lại; đầu mút chung $u=0$ có độ đo bằng không.'])
    ],
    companions: [
      q(['Use the two inverse branches of $y=u^2$ to transform $\\int_{-1}^1 1\\,du$ into an integral over $0<y<1$.', 'Dùng hai nhánh nghịch đảo của $y=u^2$ để đổi $\\int_{-1}^1 1\\,du$ thành tích phân trên $0<y<1$.'], [
        ['The branches are $u=\\sqrt y$ and $u=-\\sqrt y$, and each has $|du/dy|=1/(2\\sqrt y)$.', 'Hai nhánh là $u=\\sqrt y$ và $u=-\\sqrt y$, mỗi nhánh có $|du/dy|=1/(2\\sqrt y)$.'],
        ['Each branch contributes $\\int_0^1(1/(2\\sqrt y))\\,dy$, so together the transformed integral is $\\int_0^1y^{-1/2}\\,dy$.', 'Mỗi nhánh đóng góp $\\int_0^1(1/(2\\sqrt y))\\,dy$, nên tổng là $\\int_0^1y^{-1/2}\\,dy$.'],
        ['The integral equals $2$, matching the length of $[-1,1]$; the singularity at zero is integrable.', 'Tích phân bằng $2$, đúng bằng độ dài $[-1,1]$; điểm kỳ dị tại không khả tích được.']
      ]),
      q(['Transform $\\int_{-1}^1u^2\\,du$ using $y=u^2$, splitting the branches and evaluating the result.', 'Đổi $\\int_{-1}^1u^2\\,du$ bằng $y=u^2$, tách các nhánh rồi tính kết quả.'], [
        ['On each branch, $u^2=y$ and $|du/dy|=1/(2\\sqrt y)$.', 'Trên mỗi nhánh, $u^2=y$ và $|du/dy|=1/(2\\sqrt y)$.'],
        ['The two contributions sum to $\\int_0^1y\\,(1/\\sqrt y)\\,dy=\\int_0^1\\sqrt y\\,dy$.', 'Hai đóng góp cộng lại thành $\\int_0^1y\\,(1/\\sqrt y)\\,dy=\\int_0^1\\sqrt y\\,dy$.'],
        ['The value is $[2y^{3/2}/3]_0^1=2/3$, agreeing with direct integration.', 'Giá trị là $[2y^{3/2}/3]_0^1=2/3$, khớp với phép tích phân trực tiếp.']
      ]),
      q(['Transform $\\int_{-2}^1 1\\,du$ under $y=u^2$ and account for the unequal branch coverage.', 'Đổi $\\int_{-2}^1 1\\,du$ dưới ánh xạ $y=u^2$ và xét độ phủ không đều của các nhánh.'], [
        ['For $0<y<1$, both inverse branches $u=\\pm\\sqrt y$ occur, giving total density $1/\\sqrt y$.', 'Với $0<y<1$, cả hai nhánh $u=\\pm\\sqrt y$ xuất hiện, cho mật độ tổng $1/\\sqrt y$.'],
        ['For $1<y<4$, only the negative branch lies in $[-2,1]$, contributing $1/(2\\sqrt y)$.', 'Với $1<y<4$, chỉ nhánh âm thuộc $[-2,1]$, đóng góp $1/(2\\sqrt y)$.'],
        ['The total is $\\int_0^1y^{-1/2}\\,dy+\\int_1^4(2\\sqrt y)^{-1}\\,dy=2+1=3$, the original interval length.', 'Tổng là $\\int_0^1y^{-1/2}\\,dy+\\int_1^4(2\\sqrt y)^{-1}\\,dy=2+1=3$, bằng độ dài khoảng ban đầu.']
      ])
    ],
    reviewNote: 'Checked branch counts and inverse derivatives, including unequal image coverage and the integrable endpoint singularity.',
    sourceIds: ['f-1802sc']
  },
  'f-w011-e5': {
    application: bi(['Squaring a one-dimensional Gaussian integral creates a two-dimensional radial integral, where polar coordinates evaluate the normalization exactly.', 'Bình phương tích phân Gaussian một chiều tạo tích phân hai chiều theo bán kính, nơi tọa độ cực tính được hằng số chuẩn hóa chính xác.']),
    formula: bi(['If $I=\\int_{-\\infty}^{\\infty}e^{-x^2}\\,dx$ is finite and positive, Tonelli gives $I^2=\\iint_{\\mathbb R^2}e^{-(x^2+y^2)}\\,dA=2\\pi\\int_0^\\infty e^{-r^2}r\\,dr=\\pi$, hence $I=\\sqrt\\pi$.', 'Nếu $I=\\int_{-\\infty}^{\\infty}e^{-x^2}\\,dx$ hữu hạn và dương, Tonelli cho $I^2=\\iint_{\\mathbb R^2}e^{-(x^2+y^2)}\\,dA=2\\pi\\int_0^\\infty e^{-r^2}r\\,dr=\\pi$, nên $I=\\sqrt\\pi$.']),
    steps: [
      bi(['Write $I^2$ as the product of two equal nonnegative integrals and apply Tonelli to obtain a double integral.', 'Viết $I^2$ thành tích hai tích phân không âm bằng nhau rồi dùng Tonelli để thu được tích phân kép.']),
      bi(['Recognize the integrand as radial and convert the plane integral using $dA=r\\,dr\\,d\\theta$.', 'Nhận ra hàm dưới dấu tích phân chỉ phụ thuộc bán kính và đổi tích phân mặt phẳng bằng $dA=r\\,dr\\,d\\theta$.']),
      bi(['Integrate the angle over $[0,2\\pi]$ and substitute $s=r^2$ in the radial integral.', 'Tích phân góc trên $[0,2\\pi]$ và đặt $s=r^2$ trong tích phân bán kính.']),
      bi(['Use the positive sign of $I$ to select the positive square root.', 'Dùng tính dương của $I$ để chọn căn bậc hai dương.'])
    ],
    primarySolution: [
      bi(['Because the integrand is nonnegative, Tonelli permits $I^2=\\iint_{\\mathbb R^2}e^{-(x^2+y^2)}\\,dx\\,dy$.', 'Vì hàm dưới dấu tích phân không âm, Tonelli cho phép viết $I^2=\\iint_{\\mathbb R^2}e^{-(x^2+y^2)}\\,dx\\,dy$.']),
      bi(['The integrand is radial; polar coordinates give $I^2=2\\pi\\int_0^\\infty e^{-r^2}r\\,dr$.', 'Hàm chỉ phụ thuộc bán kính; tọa độ cực cho $I^2=2\\pi\\int_0^\\infty e^{-r^2}r\\,dr$.']),
      bi(['With $s=r^2$, $\\int_0^\\infty e^{-r^2}r\\,dr=\\frac12\\int_0^\\infty e^{-s}\\,ds=1/2$.', 'Đặt $s=r^2$, ta có $\\int_0^\\infty e^{-r^2}r\\,dr=\\frac12\\int_0^\\infty e^{-s}\\,ds=1/2$.']),
      bi(['Thus $I^2=\\pi$; since $I>0$, conclude $I=\\sqrt\\pi$.', 'Vậy $I^2=\\pi$; vì $I>0$, suy ra $I=\\sqrt\\pi$.'])
    ],
    companions: [
      q(['For $a>0$, use scaling to derive $\\int_{-\\infty}^{\\infty}e^{-ax^2}\\,dx$ from $\\int_{-\\infty}^{\\infty}e^{-x^2}\\,dx=\\sqrt\\pi$.', 'Với $a>0$, dùng phép co giãn để suy ra $\\int_{-\\infty}^{\\infty}e^{-ax^2}\\,dx$ từ $\\int_{-\\infty}^{\\infty}e^{-x^2}\\,dx=\\sqrt\\pi$.'], [
        ['Set $u=\\sqrt a\\,x$, so $dx=du/\\sqrt a$ and the exponent becomes $-u^2$.', 'Đặt $u=\\sqrt a\\,x$, khi đó $dx=du/\\sqrt a$ và số mũ thành $-u^2$.'],
        ['The limits remain the full real line because $a>0$.', 'Cận vẫn là toàn trục thực vì $a>0$.'],
        ['Therefore the integral equals $\\frac1{\\sqrt a}\\int_{-\\infty}^{\\infty}e^{-u^2}\\,du=\\sqrt{\\pi/a}$.', 'Vì vậy tích phân bằng $\\frac1{\\sqrt a}\\int_{-\\infty}^{\\infty}e^{-u^2}\\,du=\\sqrt{\\pi/a}$.']
      ]),
      q(['Evaluate $\\int_{-\\infty}^{\\infty}e^{-x^2/2}\\,dx$ using the Gaussian integral and a change of scale.', 'Tính $\\int_{-\\infty}^{\\infty}e^{-x^2/2}\\,dx$ bằng tích phân Gaussian và phép đổi thang đo.'], [
        ['Match the exponent to $-ax^2$ with $a=1/2>0$.', 'So khớp số mũ với $-ax^2$ khi $a=1/2>0$.'],
        ['The scaling formula gives $\\sqrt{\\pi/(1/2)}$.', 'Công thức co giãn cho $\\sqrt{\\pi/(1/2)}$.'],
        ['Hence the integral is $\\sqrt{2\\pi}$.', 'Vậy tích phân bằng $\\sqrt{2\\pi}$.']
      ]),
      q(['Compute $\\iint_{\\mathbb R^2}e^{-2(x^2+y^2)}\\,dA$ in polar coordinates and verify it is finite.', 'Tính $\\iint_{\\mathbb R^2}e^{-2(x^2+y^2)}\\,dA$ bằng tọa độ cực và kiểm tra tính hữu hạn.'], [
        ['The radial integral is $2\\pi\\int_0^\\infty e^{-2r^2}r\\,dr$.', 'Tích phân bán kính là $2\\pi\\int_0^\\infty e^{-2r^2}r\\,dr$.'],
        ['With $s=2r^2$, $ds=4r\\,dr$, so the radial integral is $2\\pi(1/4)\\int_0^\\infty e^{-s}\\,ds$.', 'Đặt $s=2r^2$, $ds=4r\\,dr$, nên tích phân là $2\\pi(1/4)\\int_0^\\infty e^{-s}\\,ds$.'],
        ['The exponential integral is $1$, giving the finite value $\\pi/2$.', 'Tích phân mũ bằng $1$, cho giá trị hữu hạn $\\pi/2$.']
      ])
    ],
    reviewNote: 'Checked Tonelli’s nonnegative-integrand use, the polar Jacobian, the radial substitution, and the positive square-root choice.',
    sourceIds: ['f-1802sc']
  },
};
export default reviewed;
