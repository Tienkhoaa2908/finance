import {b,type ReviewedLesson} from './types';
type Pair=readonly [string,string];
const bi=([en,vi]:Pair)=>b(String.raw`${en}`,String.raw`${vi}`);
const q=(prompt:Pair,solution:Pair[])=>({prompt:bi(prompt),solution:solution.map(bi)});
const reviewed:Record<string,ReviewedLesson>={
  'f-w017-e1': {
    title: bi(['Counting unions by inclusion–exclusion', 'Đếm hợp bằng bao hàm–loại trừ']),
    application: bi(['Survey counts overlap when people belong to several categories; inclusion–exclusion corrects repeated counts before taking a complement.', 'Số liệu khảo sát bị đếm trùng khi người thuộc nhiều nhóm; bao hàm–loại trừ sửa phần đếm lặp trước khi lấy phần bù.']),
    formula: bi(['For finite sets, $|A\\cup B|=|A|+|B|-|A\\cap B|$; for three sets, $|A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|A\\cap C|-|B\\cap C|+|A\\cap B\\cap C|$.', 'Với các tập hữu hạn, $|A\\cup B|=|A|+|B|-|A\\cap B|$; với ba tập, $|A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|A\\cap C|-|B\\cap C|+|A\\cap B\\cap C|$.']),
    steps: [
      bi(['For two categories, add their sizes and subtract the overlap counted twice.', 'Với hai nhóm, cộng kích thước rồi trừ phần giao bị đếm hai lần.']),
      bi(['For three categories, subtract each pairwise overlap and add the triple overlap back.', 'Với ba nhóm, trừ mỗi giao đôi và cộng lại giao ba.']),
      bi(['Subtract the union from the finite population to count those in none.', 'Lấy tổng dân số hữu hạn trừ hợp để đếm người không thuộc nhóm nào.']),
      bi(['Check that intersections fit their containing sets and the result lies within the population.', 'Kiểm tra các giao phù hợp với tập chứa và kết quả nằm trong dân số.'])
    ],
    primarySolution: [
      bi(['For the two language groups $P,R$, inclusion–exclusion gives $|P\\cup R|=22+18-10=30$.', 'Với hai nhóm ngôn ngữ $P,R$, bao hàm–loại trừ cho $|P\\cup R|=22+18-10=30$.']),
      bi(['Subtract $10$ because those people were counted in both group totals.', 'Trừ $10$ vì những người đó đã được tính trong cả hai tổng nhóm.']),
      bi(['Out of $40$ people, $40-30=10$ know neither language.', 'Trong $40$ người, có $40-30=10$ người không biết ngôn ngữ nào.']),
      bi(['The counts are consistent: $10\\le18$, $10\\le22$, and $30\\le40$.', 'Các số liệu nhất quán: $10\\le18$, $10\\le22$ và $30\\le40$.'])
    ],
    companions: [
      q(['In a population of $60$, clubs have sizes $|A|=25$, $|B|=20$, $|C|=18$, pairwise intersections $7,6,5$, and triple intersection $2$. Find the union size and the number in none.', 'Trong dân số $60$ người, các câu lạc bộ có kích thước $|A|=25$, $|B|=20$, $|C|=18$, giao đôi $7,6,5$ và giao ba $2$. Tìm kích thước hợp và số người không thuộc nhóm nào.'], [
        ['Three-set inclusion–exclusion gives $|A\\cup B\\cup C|=25+20+18-7-6-5+2$.', 'Bao hàm–loại trừ ba tập cho $|A\\cup B\\cup C|=25+20+18-7-6-5+2$.'],
        ['The singles total $63$, pair intersections total $18$, so the union is $63-18+2=47$.', 'Tổng số đơn là $63$, tổng giao đôi là $18$, nên hợp là $63-18+2=47$.'],
        ['Therefore $60-47=13$ people belong to none.', 'Vì vậy $60-47=13$ người không thuộc nhóm nào.']
      ]),
      q(['Among $50$ students, $31$ study French, $24$ study German, and $12$ study both. Find the counts studying at least one and neither.', 'Trong $50$ sinh viên, có $31$ người học tiếng Pháp, $24$ học tiếng Đức và $12$ học cả hai. Tìm số người học ít nhất một và không học thứ tiếng nào.'], [
        ['The union is $31+24-12=43$, subtracting the students counted in both groups.', 'Hợp là $31+24-12=43$, trừ các sinh viên đã được đếm ở cả hai nhóm.'],
        ['The complement count is $50-43=7$.', 'Số người phần bù là $50-43=7$.'],
        ['The data are feasible because $12\\le24$, $12\\le31$, and $43\\le50$.', 'Số liệu khả thi vì $12\\le24$, $12\\le31$ và $43\\le50$.']
      ]),
      q(['Explain the three-set formula by checking a point that lies in one, two, or all three sets.', 'Giải thích công thức ba tập bằng cách xét điểm thuộc một, hai hoặc cả ba tập.'], [
        ['A point in exactly one set is counted once, so its coefficient is $1$.', 'Điểm thuộc đúng một tập được đếm một lần, nên hệ số là $1$.'],
        ['A point in exactly two is counted twice and subtracted once: $2-1=1$.', 'Điểm thuộc đúng hai tập được đếm hai lần rồi trừ một lần: $2-1=1$.'],
        ['A point in all three is counted $3$ times, subtracted $3$ times, and added once: $3-3+1=1$.', 'Điểm thuộc cả ba được đếm $3$ lần, trừ $3$ lần rồi cộng một lần: $3-3+1=1$.']
      ])
    ],
    reviewNote: 'Checked the two-set survey arithmetic and three-set coefficients; the original title implied three sets although its worked data use two, so the bilingual title is corrected.',
    sourceIds: ['f-6041sc']
  },
  'f-w017-e2': {
    application: bi(['Probability weights outcomes by their stated chances; counting favorable outcomes works only when elementary outcomes are equally likely.', 'Xác suất gán trọng số cho kết quả theo cơ hội đã cho; đếm kết quả thuận lợi chỉ đúng khi các kết quả cơ bản đồng xác suất.']),
    formula: bi(['For disjoint $A,B$, $P(A\\cup B)=P(A)+P(B)$; a count ratio represents probability only under a uniform distribution on the elementary outcomes.', 'Với $A,B$ rời nhau, $P(A\\cup B)=P(A)+P(B)$; tỷ số phép đếm chỉ biểu diễn xác suất khi phân phối đều trên các kết quả cơ bản.']),
    steps: [
      bi(['Check the probability of each elementary outcome before replacing probabilities with counts.', 'Kiểm tra xác suất của từng kết quả cơ bản trước khi thay xác suất bằng phép đếm.']),
      bi(['For a disjoint union, add the given event probabilities.', 'Với hợp rời nhau, cộng các xác suất biến cố đã cho.']),
      bi(['Use a count ratio only if all elementary outcomes have equal probability.', 'Chỉ dùng tỷ số phép đếm nếu mọi kết quả cơ bản có xác suất bằng nhau.']),
      bi(['A count can coincide numerically with the weighted probability by chance without becoming a valid method.', 'Phép đếm có thể tình cờ trùng số với xác suất có trọng số nhưng không vì thế trở thành phương pháp hợp lệ.'])
    ],
    primarySolution: [
      bi(['The spinner sectors have probabilities $0.5$, $0.3$, and $0.2$, so they are not equally likely.', 'Các vùng vòng quay có xác suất $0.5$, $0.3$ và $0.2$, nên chúng không đồng khả năng.']),
      bi(['Events $A,B$ are disjoint, so $P(A\\cup B)=0.5+0.3=0.8$.', 'Biến cố $A,B$ rời nhau, nên $P(A\\cup B)=0.5+0.3=0.8$.']),
      bi(['Counting two sectors out of three would give $2/3$, but that assumes equal sector probabilities and contradicts the stated weights.', 'Đếm hai vùng trong ba sẽ cho $2/3$, nhưng điều đó giả sử các vùng đồng xác suất và trái với trọng số đã cho.']),
      bi(['The requested probability is therefore $0.8$, computed from the actual distribution.', 'Vì vậy xác suất cần tìm là $0.8$, tính theo phân phối thực tế.'])
    ],
    companions: [
      q(['A spinner lands in sectors $A,B,C$ with probabilities $0.4,0.35,0.25$. If $E$ is landing in $A$ or $C$, find $P(E)$ and explain why counting sectors fails.', 'Vòng quay rơi vào các vùng $A,B,C$ với xác suất $0.4,0.35,0.25$. Nếu $E$ là rơi vào $A$ hoặc $C$, hãy tìm $P(E)$ và giải thích vì sao phép đếm vùng không đúng.'], [
        ['The two landing events are disjoint, so $P(E)=0.4+0.25=0.65$.', 'Hai biến cố rơi vào vùng rời nhau, nên $P(E)=0.4+0.25=0.65$.'],
        ['The sector count ratio is $2/3$, different from $0.65$ because the sectors do not have equal probabilities.', 'Tỷ số số vùng là $2/3$, khác $0.65$ vì các vùng không đồng xác suất.'],
        ['The weighted sum, rather than a count, gives the probability under the stated model.', 'Tổng có trọng số, thay vì phép đếm, cho xác suất theo mô hình đã nêu.']
      ]),
      q(['A random outcome takes one of three labels with probabilities $0.1,0.2,0.7$. Event $E$ occurs for the second or third label. Compute its probability and compare with the count ratio.', 'Một kết quả ngẫu nhiên nhận một trong ba nhãn với xác suất $0.1,0.2,0.7$. Biến cố $E$ xảy ra khi nhận nhãn thứ hai hoặc thứ ba. Tính xác suất và so với tỷ số phép đếm.'], [
        ['The selected labels are disjoint outcomes, so $P(E)=0.2+0.7=0.9$.', 'Các nhãn được chọn là kết quả rời nhau, nên $P(E)=0.2+0.7=0.9$.'],
        ['Counting gives $2/3$, which is not $0.9$ because the labels have unequal weights.', 'Phép đếm cho $2/3$, khác $0.9$ vì các nhãn có trọng số không bằng nhau.'],
        ['Thus use the probability sum $0.9$, not the count ratio.', 'Vậy dùng tổng xác suất $0.9$, không dùng tỷ số phép đếm.']
      ]),
      q(['A game has four outcomes with probabilities $0.1,0.2,0.3,0.4$. Event $F$ consists of the first and fourth outcomes. Find $P(F)$ and state the assumption required for a count-based answer.', 'Một trò chơi có bốn kết quả với xác suất $0.1,0.2,0.3,0.4$. Biến cố $F$ gồm kết quả thứ nhất và thứ tư. Tìm $P(F)$ và nêu giả thiết cần có để dùng phép đếm.'], [
        ['Add the two disjoint outcome probabilities: $P(F)=0.1+0.4=0.5$.', 'Cộng xác suất hai kết quả rời nhau: $P(F)=0.1+0.4=0.5$.'],
        ['The count ratio is $2/4=0.5$ in this choice, but the numerical match is coincidental.', 'Tỷ số phép đếm là $2/4=0.5$ ở lựa chọn này, nhưng sự trùng khớp chỉ là tình cờ.'],
        ['A count ratio is generally justified only if all four outcomes are equally likely; here the weighted sum happens to match.', 'Tỷ số phép đếm nói chung chỉ hợp lệ nếu cả bốn kết quả đồng xác suất; ở đây tổng trọng số tình cờ trùng với nó.']
      ])
    ],
    reviewNote: 'Added disjoint probabilities directly and checked each weighted sum; the final example distinguishes a coincidental count match from a valid uniform model.',
    sourceIds: ['f-6041sc']
  },
  'f-w017-e3': {
    application: bi(['The complement identity follows by splitting all outcomes into an event and everything outside it.', 'Đồng nhất thức phần bù xuất phát từ việc chia mọi kết quả thành biến cố và phần bên ngoài.']),
    formula: bi(['For any event $A$, the sets $A$ and $A^c$ are disjoint and cover $\\Omega$; finite additivity gives $1=P(\\Omega)=P(A)+P(A^c)$, hence $P(A^c)=1-P(A)$.', 'Với mọi biến cố $A$, hai tập $A$ và $A^c$ rời nhau và phủ $\\Omega$; tính cộng hữu hạn cho $1=P(\\Omega)=P(A)+P(A^c)$, suy ra $P(A^c)=1-P(A)$.']),
    steps: [
      bi(['Show $A\\cap A^c=\\varnothing$, allowing finite additivity on their union.', 'Chỉ ra $A\\cap A^c=\\varnothing$, nhờ đó dùng được tính cộng hữu hạn trên hợp.']),
      bi(['Use exhaustiveness $A\\cup A^c=\\Omega$ and the axiom $P(\\Omega)=1$.', 'Dùng tính phủ hết $A\\cup A^c=\\Omega$ và tiên đề $P(\\Omega)=1$.']),
      bi(['Add the two disjoint probabilities and rearrange to isolate the complement probability.', 'Cộng hai xác suất rời nhau rồi chuyển vế để tách xác suất phần bù.'])
    ],
    primarySolution: [
      bi(['An event and its complement are disjoint: $A\\cap A^c=\\varnothing$.', 'Một biến cố và phần bù của nó rời nhau: $A\\cap A^c=\\varnothing$.']),
      bi(['Together they fill the sample space: $A\\cup A^c=\\Omega$.', 'Hai tập hợp lại phủ không gian mẫu: $A\\cup A^c=\\Omega$.']),
      bi(['Finite additivity and normalization give $P(A)+P(A^c)=P(\\Omega)=1$.', 'Tính cộng hữu hạn và chuẩn hóa cho $P(A)+P(A^c)=P(\\Omega)=1$.']),
      bi(['Rearranging yields $P(A^c)=1-P(A)$.', 'Chuyển vế được $P(A^c)=1-P(A)$.'])
    ],
    companions: [
      q(['If an event $E$ has probability $0.37$, calculate the probability that $E$ does not occur and justify the calculation.', 'Nếu biến cố $E$ có xác suất $0.37$, hãy tính xác suất $E$ không xảy ra và giải thích.'], [
        ['The event and its complement partition the sample space into disjoint pieces.', 'Biến cố và phần bù chia không gian mẫu thành hai phần rời nhau.'],
        ['Their probabilities sum to one, so $P(E^c)=1-P(E)=1-0.37=0.63$.', 'Tổng xác suất của chúng bằng một, nên $P(E^c)=1-P(E)=1-0.37=0.63$.'],
        ['Thus the probability of no occurrence is $0.63$.', 'Vậy xác suất biến cố không xảy ra là $0.63$.']
      ]),
      q(['A fair die is rolled and $A$ is the event that the result is $1$ or $2$. Find $P(A^c)$ in two ways.', 'Gieo một xúc xắc cân đối và $A$ là biến cố kết quả bằng $1$ hoặc $2$. Tìm $P(A^c)$ theo hai cách.'], [
        ['Directly, $A^c=\\{3,4,5,6\\}$ has four of the six equally likely outcomes, so $P(A^c)=4/6=2/3$.', 'Trực tiếp, $A^c=\\{3,4,5,6\\}$ gồm bốn trong sáu kết quả đồng xác suất, nên $P(A^c)=4/6=2/3$.'],
        ['Also $P(A)=2/6=1/3$, so the complement identity gives $P(A^c)=1-1/3=2/3$.', 'Mặt khác $P(A)=2/6=1/3$, nên đồng nhất thức phần bù cho $P(A^c)=1-1/3=2/3$.'],
        ['The two methods agree, as required for a partition.', 'Hai cách cho cùng kết quả, đúng như tính chất phân hoạch.']
      ]),
      q(['Prove the complement identity using indicator variables rather than finite additivity.', 'Chứng minh đồng nhất thức phần bù bằng biến chỉ thị thay vì tính cộng hữu hạn.'], [
        ['For every outcome $\\omega$, exactly one of $\\mathbf1_A(\\omega)$ and $\\mathbf1_{A^c}(\\omega)$ equals one, so $\\mathbf1_A+\\mathbf1_{A^c}=1$.', 'Với mỗi kết quả $\\omega$, đúng một trong $\\mathbf1_A(\\omega)$ và $\\mathbf1_{A^c}(\\omega)$ bằng một, nên $\\mathbf1_A+\\mathbf1_{A^c}=1$.'],
        ['Take expectations and use $E[\\mathbf1_A]=P(A)$ and $E[\\mathbf1_{A^c}]=P(A^c)$.', 'Lấy kỳ vọng và dùng $E[\\mathbf1_A]=P(A)$, $E[\\mathbf1_{A^c}]=P(A^c)$.'],
        ['This gives $P(A)+P(A^c)=1$, hence $P(A^c)=1-P(A)$.', 'Ta được $P(A)+P(A^c)=1$, suy ra $P(A^c)=1-P(A)$.']
      ])
    ],
    reviewNote: 'Checked disjointness, exhaustiveness, and probability normalization in the proof; both numerical examples sum to one.',
    sourceIds: ['f-6041sc']
  },
  'f-w017-e4': {
    application: bi(['Unordered sampling without replacement is counted with combinations; the hypergeometric law counts marked and unmarked selections separately.', 'Lấy mẫu không thứ tự không hoàn lại được đếm bằng tổ hợp; phân phối siêu bội tách số cách chọn phần tử được đánh dấu và không đánh dấu.']),
    formula: bi(['For $N$ items with $K$ marked, a uniform sample of size $n$ has $P(R=r)=\\binom Kr\\binom{N-K}{n-r}/\\binom Nn$, where $\\max(0,n-(N-K))\\le r\\le\\min(n,K)$.', 'Với $N$ vật có $K$ vật được đánh dấu, mẫu đều cỡ $n$ có $P(R=r)=\\binom Kr\\binom{N-K}{n-r}/\\binom Nn$, trong đó $\\max(0,n-(N-K))\\le r\\le\\min(n,K)$.']),
    steps: [
      bi(['Count samples with exactly $r$ marked items by choosing marked and unmarked items separately.', 'Đếm mẫu có đúng $r$ vật được đánh dấu bằng cách chọn riêng vật đánh dấu và không đánh dấu.']),
      bi(['Divide by all equally likely unordered samples of size $n$.', 'Chia cho mọi mẫu không thứ tự cỡ $n$ có cùng khả năng.']),
      bi(['Check that the requested $r$ is feasible given the marked, unmarked, and sample counts.', 'Kiểm tra $r$ yêu cầu khả thi theo số vật đánh dấu, không đánh dấu và cỡ mẫu.'])
    ],
    primarySolution: [
      bi(['A five-card hand is an unordered sample from $52$ cards, so all $\\binom{52}{5}$ hands are equally likely.', 'Tay bài năm lá là mẫu không thứ tự từ $52$ lá, nên có $\\binom{52}{5}$ tay đồng xác suất.']),
      bi(['Choose exactly two of the four aces in $\\binom42$ ways.', 'Chọn đúng hai trong bốn lá ách theo $\\binom42$ cách.']),
      bi(['Choose the remaining three cards from the $48$ non-aces in $\\binom{48}{3}$ ways.', 'Chọn ba lá còn lại từ $48$ lá không phải ách theo $\\binom{48}{3}$ cách.']),
      bi(['Therefore $P(\\text{exactly 2 aces})=\\binom42\\binom{48}{3}/\\binom{52}{5}$.', 'Vì vậy $P(\\text{đúng 2 lá ách})=\\binom42\\binom{48}{3}/\\binom{52}{5}$.'])
    ],
    companions: [
      q(['An urn has $4$ red and $6$ blue balls. Three balls are drawn uniformly without replacement. Find the probability of exactly two red balls.', 'Một bình có $4$ bi đỏ và $6$ bi xanh. Rút ngẫu nhiên đều ba viên không hoàn lại. Tìm xác suất đúng hai viên đỏ.'], [
        ['Choose two red balls in $\\binom42=6$ ways and one blue ball in $\\binom61=6$ ways.', 'Chọn hai bi đỏ theo $\\binom42=6$ cách và một bi xanh theo $\\binom61=6$ cách.'],
        ['There are $\\binom{10}{3}=120$ equally likely three-ball samples.', 'Có $\\binom{10}{3}=120$ mẫu ba viên đồng xác suất.'],
        ['Thus the probability is $6\\cdot6/120=36/120=3/10$.', 'Vậy xác suất là $6\\cdot6/120=36/120=3/10$.']
      ]),
      q(['A box has $3$ marked and $5$ unmarked items; choose $2$ uniformly without replacement. Find the probability of at least one marked item.', 'Một hộp có $3$ vật được đánh dấu và $5$ vật không đánh dấu; chọn đều $2$ vật không hoàn lại. Tìm xác suất có ít nhất một vật được đánh dấu.'], [
        ['There are $\\binom82=28$ equally likely pairs in total.', 'Có tổng cộng $\\binom82=28$ cặp đồng xác suất.'],
        ['It is easier to count the complement: choosing no marked items can be done in $\\binom52=10$ ways.', 'Đếm phần bù dễ hơn: chọn không vật đánh dấu có $\\binom52=10$ cách.'],
        ['Therefore $P(\\text{at least one})=1-10/28=18/28=9/14$.', 'Do đó $P(\\text{ít nhất một})=1-10/28=18/28=9/14$.']
      ]),
      q(['A collection has $5$ red and $7$ other cards. Four are chosen uniformly without replacement. Find the probability of exactly one red card.', 'Một bộ có $5$ thẻ đỏ và $7$ thẻ khác. Chọn đều bốn thẻ không hoàn lại. Tìm xác suất đúng một thẻ đỏ.'], [
        ['Choose one red and three other cards in $\\binom51\\binom73=5\\cdot35=175$ ways.', 'Chọn một thẻ đỏ và ba thẻ khác theo $\\binom51\\binom73=5\\cdot35=175$ cách.'],
        ['The total number of four-card samples is $\\binom{12}{4}=495$.', 'Tổng số mẫu bốn thẻ là $\\binom{12}{4}=495$.'],
        ['The probability is $175/495=35/99$, after dividing numerator and denominator by $5$.', 'Xác suất là $175/495=35/99$, sau khi chia tử và mẫu cho $5$.']
      ])
    ],
    reviewNote: 'Checked each favorable count, denominator, and feasible marked count; all selections are unordered and without replacement.',
    sourceIds: ['f-6041sc']
  },
  'f-w017-e5': {
    application: bi(['The union bound gives a conservative ceiling for the chance of any failure even when event dependence is unknown.', 'Cận hợp cho trần bảo thủ của xác suất có lỗi bất kỳ dù chưa biết sự phụ thuộc giữa các biến cố.']),
    formula: bi(['For any finite collection of events, $P(\\bigcup_i A_i)\\le\\sum_iP(A_i)$; independence is not required.', 'Với mọi họ hữu hạn biến cố, $P(\\bigcup_i A_i)\\le\\sum_iP(A_i)$; không cần giả thiết độc lập.']),
    steps: [
      bi(['Represent “any event occurs” as the union of the individual events.', 'Biểu diễn “có biến cố bất kỳ xảy ra” bằng hợp các biến cố riêng.']),
      bi(['Add the individual probability upper bounds.', 'Cộng các cận trên xác suất riêng.']),
      bi(['The result is an upper bound without independence; exact union probability needs overlap information.', 'Kết quả là cận trên không cần độc lập; xác suất hợp chính xác cần thông tin giao nhau.'])
    ],
    primarySolution: [
      bi(['Let $A_1,A_2,A_3$ be the three failure events with probabilities at most $0.02,0.03,0.01$.', 'Gọi $A_1,A_2,A_3$ là ba biến cố lỗi có xác suất không quá $0.02,0.03,0.01$.']),
      bi(['The union bound gives $P(A_1\\cup A_2\\cup A_3)\\le0.02+0.03+0.01=0.06$.', 'Cận hợp cho $P(A_1\\cup A_2\\cup A_3)\\le0.02+0.03+0.01=0.06$.']),
      bi(['This holds whether the failures overlap or not; no independence assumption is used.', 'Điều này đúng dù các lỗi có giao nhau hay không; không dùng giả thiết độc lập.']),
      bi(['An exact union probability would need intersections or the full joint distribution.', 'Muốn tính xác suất hợp chính xác cần biết các giao hoặc phân phối chung.'])
    ],
    companions: [
      q(['Four component-failure events have probabilities at most $0.01,0.02,0.005,0.015$. Bound the probability that at least one component fails.', 'Bốn biến cố hỏng linh kiện có xác suất không quá $0.01,0.02,0.005,0.015$. Chặn xác suất có ít nhất một linh kiện hỏng.'], [
        ['The event of any failure is the union of the four component events.', 'Biến cố có lỗi bất kỳ là hợp của bốn biến cố linh kiện.'],
        ['Apply the union bound: the probability is at most $0.01+0.02+0.005+0.015$.', 'Áp dụng cận hợp: xác suất không quá $0.01+0.02+0.005+0.015$.'],
        ['The sum is $0.05$, so $P(\\text{any failure})\\le0.05$ regardless of dependence.', 'Tổng bằng $0.05$, nên $P(\\text{có lỗi})\\le0.05$ bất kể phụ thuộc.']
      ]),
      q(['Events $A,B$ satisfy $P(A)=0.3$, $P(B)=0.4$, and $P(A\\cap B)=0.2$. Find their exact union probability and compare with the union bound.', 'Biến cố $A,B$ thỏa $P(A)=0.3$, $P(B)=0.4$ và $P(A\\cap B)=0.2$. Tìm xác suất hợp chính xác và so với cận hợp.'], [
        ['Two-event inclusion–exclusion gives $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.', 'Bao hàm–loại trừ hai biến cố cho $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.'],
        ['The exact value is $0.3+0.4-0.2=0.5$.', 'Giá trị chính xác là $0.3+0.4-0.2=0.5$.'],
        ['The union bound gives $0.3+0.4=0.7$, a valid but looser upper bound.', 'Cận hợp cho $0.3+0.4=0.7$, là cận trên đúng nhưng lỏng hơn.']
      ]),
      q(['Three events are identical and each has probability $0.25$. Apply the union bound and find the exact union probability.', 'Ba biến cố trùng nhau và mỗi biến cố có xác suất $0.25$. Áp dụng cận hợp và tìm xác suất hợp chính xác.'], [
        ['The union bound gives $P(A_1\\cup A_2\\cup A_3)\\le3(0.25)=0.75$.', 'Cận hợp cho $P(A_1\\cup A_2\\cup A_3)\\le3(0.25)=0.75$.'],
        ['Because all events are the same set, their union is just that event, with probability $0.25$.', 'Vì cả ba biến cố là cùng một tập, hợp chỉ là biến cố đó, có xác suất $0.25$.'],
        ['The inequality is valid but loose here; dependence information explains the difference, and independence was never needed for the bound.', 'Bất đẳng thức đúng nhưng lỏng; thông tin phụ thuộc giải thích khác biệt, còn tính độc lập không cần cho cận.']
      ])
    ],
    reviewNote: 'Verified the stated risk sum and the two comparison cases; the union bound needs no independence and can be sharp or loose.',
    sourceIds: ['f-6041sc']
  },
  'f-w018-e1': {
    application: bi(['A sensor alarm’s meaning depends on fault prevalence as well as sensitivity and false-alarm rate.', 'Ý nghĩa cảnh báo phụ thuộc vào tỷ lệ lỗi nền cũng như độ nhạy và tỷ lệ báo giả.']),
    formula: bi(['If $P(A)>0$, $P(F\\mid A)=\\frac{P(A\\mid F)P(F)}{P(A\\mid F)P(F)+P(A\\mid F^c)P(F^c)}$; the denominator counts alarms from faulty and nonfaulty units.', 'Nếu $P(A)>0$, $P(F\\mid A)=\\frac{P(A\\mid F)P(F)}{P(A\\mid F)P(F)+P(A\\mid F^c)P(F^c)}$; mẫu số tính báo động từ thiết bị lỗi và không lỗi.']),
    steps: [
      bi(['Multiply prior fault probability by sensitivity to get the joint probability of fault and alarm.', 'Nhân xác suất lỗi tiên nghiệm với độ nhạy để được xác suất đồng thời lỗi và báo động.']),
      bi(['Use total probability to add the alarm contribution from nonfaulty units and get $P(A)$.', 'Dùng xác suất toàn phần để cộng phần báo động từ thiết bị tốt và tính $P(A)$.']),
      bi(['Divide the fault-and-alarm joint probability by the full alarm probability.', 'Chia xác suất đồng thời lỗi và báo động cho toàn bộ xác suất báo động.'])
    ],
    primarySolution: [
      bi(['The faulty-and-alarm probability is $P(F\\cap A)=0.03\\cdot0.8=0.024$.', 'Xác suất lỗi và báo động là $P(F\\cap A)=0.03\\cdot0.8=0.024$.']),
      bi(['The nonfaulty alarm contribution is $0.97\\cdot0.02=0.0194$.', 'Phần báo động từ thiết bị không lỗi là $0.97\\cdot0.02=0.0194$.']),
      bi(['Thus $P(A)=0.024+0.0194=0.0434$, including both sources.', 'Vậy $P(A)=0.024+0.0194=0.0434$, gồm cả hai nguồn.']),
      bi(['Bayes gives $P(F\\mid A)=0.024/0.0434=120/217\\approx0.553$.', 'Bayes cho $P(F\\mid A)=0.024/0.0434=120/217\\approx0.553$.'])
    ],
    companions: [
      q(['A condition affects $2\\%$ of people. A test has sensitivity $95\\%$ and false-positive rate $5\\%$. Given a positive result, find the probability the person has the condition.', 'Một tình trạng ảnh hưởng $2\\%$ dân số. Xét nghiệm có độ nhạy $95\\%$ và tỷ lệ dương tính giả $5\\%$. Khi kết quả dương tính, tìm xác suất người đó có tình trạng này.'], [
        ['The joint condition-and-positive probability is $0.02\\cdot0.95=0.019$.', 'Xác suất đồng thời có tình trạng và dương tính là $0.02\\cdot0.95=0.019$.'],
        ['The false-positive contribution is $0.98\\cdot0.05=0.049$, so $P(+)=0.019+0.049=0.068$.', 'Phần dương tính giả là $0.98\\cdot0.05=0.049$, nên $P(+)=0.019+0.049=0.068$.'],
        ['The posterior is $0.019/0.068=19/68\\approx0.2794$.', 'Xác suất hậu nghiệm là $0.019/0.068=19/68\\approx0.2794$.']
      ]),
      q(['A machine is faulty with probability $0.1$. An alarm sounds with probability $0.9$ when faulty and $0.1$ when not faulty. Find the fault probability given an alarm.', 'Một máy bị lỗi với xác suất $0.1$. Báo động bật với xác suất $0.9$ khi máy lỗi và $0.1$ khi không lỗi. Tìm xác suất máy lỗi khi có báo động.'], [
        ['The faulty-and-alarm probability is $0.1\\cdot0.9=0.09$.', 'Xác suất máy lỗi và có báo động là $0.1\\cdot0.9=0.09$.'],
        ['The nonfaulty alarm probability is $0.9\\cdot0.1=0.09$, so total alarm probability is $0.18$.', 'Xác suất máy tốt nhưng báo động là $0.9\\cdot0.1=0.09$, nên tổng xác suất báo động là $0.18$.'],
        ['Therefore $P(F\\mid A)=0.09/0.18=0.5$.', 'Vì vậy $P(F\\mid A)=0.09/0.18=0.5$.']
      ]),
      q(['A defect occurs with probability $0.01$. A test detects it with probability $0.99$ and has false-positive probability $0.01$. Find the defect probability after a positive test.', 'Lỗi xảy ra với xác suất $0.01$. Xét nghiệm phát hiện lỗi với xác suất $0.99$ và có xác suất dương tính giả $0.01$. Tìm xác suất có lỗi sau kết quả dương tính.'], [
        ['The true-positive contribution is $0.01\\cdot0.99=0.0099$.', 'Phần dương tính thật là $0.01\\cdot0.99=0.0099$.'],
        ['The false-positive contribution is $0.99\\cdot0.01=0.0099$, so $P(+)=0.0198$.', 'Phần dương tính giả là $0.99\\cdot0.01=0.0099$, nên $P(+)=0.0198$.'],
        ['The posterior is $0.0099/0.0198=1/2$, so the base rate belongs in Bayes’ denominator.', 'Xác suất hậu nghiệm là $0.0099/0.0198=1/2$, nên tỷ lệ nền phải có trong mẫu số Bayes.']
      ])
    ],
    reviewNote: 'Checked both alarm-source terms and posterior ratios; each denominator is the full positive-alarm probability.',
    sourceIds: ['f-6041sc']
  },
  'f-w018-e2': {
    application: bi(['Independence means observing one event leaves the probability of the other unchanged; for events it is checked by a product identity.', 'Độc lập nghĩa là biết một biến cố không đổi xác suất của biến cố kia; với biến cố, kiểm tra bằng đồng nhất thức tích.']),
    formula: bi(['Events $A,B$ are independent iff $P(A\\cap B)=P(A)P(B)$; if $P(B)>0$, this is equivalent to $P(A\\mid B)=P(A)$.', 'Hai biến cố $A,B$ độc lập khi và chỉ khi $P(A\\cap B)=P(A)P(B)$; nếu $P(B)>0$, điều này tương đương $P(A\\mid B)=P(A)$.']),
    steps: [
      bi(['Compute the product of the marginal probabilities.', 'Tính tích các xác suất biên.']),
      bi(['Compare it with the intersection probability.', 'So sánh với xác suất giao.']),
      bi(['Equality verifies independence; a conditional check also requires the conditioning event to have positive probability.', 'Đẳng thức xác nhận độc lập; kiểm tra có điều kiện cũng cần biến cố điều kiện có xác suất dương.'])
    ],
    primarySolution: [
      bi(['The marginal product is $P(A)P(B)=0.3\\cdot0.4=0.12$.', 'Tích biên là $P(A)P(B)=0.3\\cdot0.4=0.12$.']),
      bi(['The table gives $P(A\\cap B)=0.12$, equal to the product.', 'Bảng cho $P(A\\cap B)=0.12$, bằng tích.']),
      bi(['Thus $A,B$ are independent by the product criterion.', 'Vậy $A,B$ độc lập theo tiêu chuẩn tích.']),
      bi(['Since $P(B)=0.4>0$, $P(A\\mid B)=0.12/0.4=0.3=P(A)$.', 'Vì $P(B)=0.4>0$, $P(A\\mid B)=0.12/0.4=0.3=P(A)$.'])
    ],
    companions: [
      q(['A joint table has cells $0.18,0.12,0.12,0.58$ in the order $A\\cap B,A\\cap B^c,A^c\\cap B,A^c\\cap B^c$. Are $A,B$ independent?', 'Bảng chung có các ô $0.18,0.12,0.12,0.58$ theo thứ tự $A\\cap B,A\\cap B^c,A^c\\cap B,A^c\\cap B^c$. $A,B$ có độc lập không?'], [
        ['The cells sum to $1$ and give $P(A)=0.30$, $P(B)=0.30$.', 'Các ô có tổng bằng $1$ và cho $P(A)=0.30$, $P(B)=0.30$.'],
        ['Their product is $0.30\\cdot0.30=0.09$.', 'Tích của chúng là $0.30\\cdot0.30=0.09$.'],
        ['Since $P(A\\cap B)=0.18\\ne0.09$, the events are dependent.', 'Vì $P(A\\cap B)=0.18\\ne0.09$, hai biến cố phụ thuộc.']
      ]),
      q(['A joint table has cells $0.10,0.15,0.30,0.45$ in the same order. Verify whether its events are independent.', 'Bảng chung có các ô $0.10,0.15,0.30,0.45$ theo cùng thứ tự. Kiểm tra các biến cố có độc lập không.'], [
        ['The cells sum to $1$; the marginals are $P(A)=0.10+0.15=0.25$ and $P(B)=0.10+0.30=0.40$.', 'Các ô có tổng bằng $1$; xác suất biên là $P(A)=0.10+0.15=0.25$ và $P(B)=0.10+0.30=0.40$.'],
        ['The product is $0.25\\cdot0.40=0.10$.', 'Tích là $0.25\\cdot0.40=0.10$.'],
        ['It equals the intersection cell $0.10$, so the events are independent.', 'Nó bằng ô giao $0.10$, nên hai biến cố độc lập.']
      ]),
      q(['Suppose $P(A)=0.2$, $P(B)=0.5$, and $P(A\\cap B)=0.1$. Check independence with both criteria.', 'Giả sử $P(A)=0.2$, $P(B)=0.5$ và $P(A\\cap B)=0.1$. Kiểm tra độc lập bằng cả hai tiêu chuẩn.'], [
        ['The product is $0.2\\cdot0.5=0.1$, matching the intersection.', 'Tích là $0.2\\cdot0.5=0.1$, bằng xác suất giao.'],
        ['Because $P(B)>0$, $P(A\\mid B)=0.1/0.5=0.2$.', 'Vì $P(B)>0$, $P(A\\mid B)=0.1/0.5=0.2$.'],
        ['Both tests agree with $P(A)=0.2$, so $A,B$ are independent.', 'Cả hai khớp $P(A)=0.2$, nên $A,B$ độc lập.']
      ])
    ],
    reviewNote: 'Recomputed marginals before applying the product criterion; conditional checks are used only when the conditioning event has positive probability.',
    sourceIds: ['f-6041sc']
  },
  'f-w018-e3': {
    application: bi(['Conditioning restricts the sample space to cases compatible with the observed information, so both favorable counts and the denominator change.', 'Lấy điều kiện giới hạn không gian mẫu vào các trường hợp phù hợp thông tin đã biết, nên cả số thuận lợi và mẫu số đều đổi.']),
    formula: bi(['For equally likely outcomes and $P(B)>0$, $P(A\\mid B)=|A\\cap B|/|B|$; generally $P(A\\mid B)=P(A\\cap B)/P(B)$.', 'Với các kết quả đồng xác suất và $P(B)>0$, $P(A\\mid B)=|A\\cap B|/|B|$; tổng quát $P(A\\mid B)=P(A\\cap B)/P(B)$.']),
    steps: [
      bi(['Identify the information event $B$ and verify that $P(B)>0$.', 'Xác định biến cố thông tin $B$ và kiểm tra $P(B)>0$.']),
      bi(['Restrict attention to outcomes in $B$ and count or measure those also in $A$.', 'Chỉ xét kết quả thuộc $B$ rồi đếm hoặc đo phần cũng thuộc $A$.']),
      bi(['Divide the joint probability by $P(B)$, or use the restricted count ratio under equal likelihood.', 'Chia xác suất giao cho $P(B)$, hoặc dùng tỷ số đếm bị giới hạn khi các kết quả đồng khả năng.'])
    ],
    primarySolution: [
      bi(['For a fair die, $A=\\{2,4,6\\}$ has three of six outcomes, so $P(A)=1/2$.', 'Với xúc xắc cân đối, $A=\\{2,4,6\\}$ gồm ba trong sáu kết quả, nên $P(A)=1/2$.']),
      bi(['The information event is $B=\\{1,2,3\\}$, which has probability $3/6>0$.', 'Biến cố thông tin là $B=\\{1,2,3\\}$, có xác suất $3/6>0$.']),
      bi(['The intersection is $A\\cap B=\\{2\\}$, so $P(A\\cap B)=1/6$.', 'Giao là $A\\cap B=\\{2\\}$, nên $P(A\\cap B)=1/6$.']),
      bi(['Thus $P(A\\mid B)=(1/6)/(3/6)=1/3$, which differs from the unconditional $1/2$.', 'Vậy $P(A\\mid B)=(1/6)/(3/6)=1/3$, khác xác suất không điều kiện $1/2$.'])
    ],
    companions: [
      q(['Two fair coins are tossed. Let $A$ mean at least one head occurs and $B$ mean the first coin is heads. Find $P(A)$ and $P(A\\mid B)$.', 'Tung hai đồng xu cân đối. Gọi $A$ là có ít nhất một mặt ngửa và $B$ là đồng thứ nhất ngửa. Tìm $P(A)$ và $P(A\\mid B)$.'], [
        ['The equally likely outcomes are $HH,HT,TH,TT$, and three contain a head, so $P(A)=3/4$.', 'Các kết quả đồng xác suất là $HH,HT,TH,TT$; ba kết quả có mặt ngửa nên $P(A)=3/4$.'],
        ['Given $B$, only $HH$ and $HT$ remain; both are in $A$.', 'Khi biết $B$, chỉ còn $HH$ và $HT$; cả hai đều thuộc $A$.'],
        ['Therefore $P(A\\mid B)=2/2=1$, showing the conditioning changes the probability.', 'Do đó $P(A\\mid B)=2/2=1$, cho thấy điều kiện làm xác suất thay đổi.']
      ]),
      q(['Draw one card uniformly from a standard deck. Let $A$ be “heart” and $B$ be “red card.” Compare $P(A)$ and $P(A\\mid B)$.', 'Rút đều một lá từ bộ bài chuẩn. Gọi $A$ là “cơ” và $B$ là “lá đỏ.” So sánh $P(A)$ và $P(A\\mid B)$.'], [
        ['There are $13$ hearts among $52$ cards, so $P(A)=13/52=1/4$.', 'Có $13$ lá cơ trong $52$ lá, nên $P(A)=13/52=1/4$.'],
        ['There are $26$ red cards, of which $13$ are hearts, so $P(A\\mid B)=13/26=1/2$.', 'Có $26$ lá đỏ, trong đó $13$ lá cơ, nên $P(A\\mid B)=13/26=1/2$.'],
        ['The conditional denominator is the red-card count, not the full deck; the probability rises from $1/4$ to $1/2$.', 'Mẫu số có điều kiện là số lá đỏ, không phải cả bộ; xác suất tăng từ $1/4$ lên $1/2$.']
      ]),
      q(['An urn contains $3$ red and $2$ blue balls. Two are drawn without replacement. Let $A$ be “the second ball is red” and $B$ be “the first is red.” Find $P(A)$ and $P(A\\mid B)$.', 'Một bình có $3$ bi đỏ và $2$ bi xanh. Rút hai viên không hoàn lại. Gọi $A$ là “viên thứ hai đỏ” và $B$ là “viên đầu đỏ.” Tìm $P(A)$ và $P(A\\mid B)$.'], [
        ['By symmetry of draw positions, $P(A)=3/5$.', 'Do tính đối xứng giữa vị trí rút, $P(A)=3/5$.'],
        ['Given the first ball is red, $2$ red balls remain among $4$, so $P(A\\mid B)=2/4=1/2$.', 'Khi viên đầu đỏ, còn $2$ bi đỏ trong $4$ viên, nên $P(A\\mid B)=2/4=1/2$.'],
        ['The conditional probability is smaller because observing a first red removes one red from the urn.', 'Xác suất có điều kiện nhỏ hơn vì quan sát viên đỏ đầu tiên làm giảm số bi đỏ trong bình.']
      ])
    ],
    reviewNote: 'Checked each conditioning denominator against the restricted sample space; all conditioning events have positive probability.',
    sourceIds: ['f-6041sc']
  },
  'f-w018-e4': {
    application: bi(['A partition decomposes a target event into disjoint cases, so its total probability is a weighted sum of conditional probabilities.', 'Phân hoạch tách biến cố đích thành các trường hợp rời nhau, nên xác suất tổng là tổng có trọng số của các xác suất điều kiện.']),
    formula: bi(['For a finite partition $B_1,\\ldots,B_k$ of $\\Omega$, $P(A)=\\sum_{i:P(B_i)>0}P(A\\mid B_i)P(B_i)$; zero-probability cells contribute zero.', 'Với phân hoạch hữu hạn $B_1,\\ldots,B_k$ của $\\Omega$, $P(A)=\\sum_{i:P(B_i)>0}P(A\\mid B_i)P(B_i)$; ô xác suất không đóng góp bằng không.']),
    steps: [
      bi(['Use exhaustiveness to write $A=A\\cap\\Omega=\\bigcup_i(A\\cap B_i)$.', 'Dùng tính phủ hết để viết $A=A\\cap\\Omega=\\bigcup_i(A\\cap B_i)$.']),
      bi(['The pieces are disjoint, so add their probabilities.', 'Các phần rời nhau nên cộng xác suất của chúng.']),
      bi(['For each positive-mass cell, substitute $P(A\\cap B_i)=P(A\\mid B_i)P(B_i)$.', 'Với mỗi ô có xác suất dương, thay $P(A\\cap B_i)=P(A\\mid B_i)P(B_i)$.']),
      bi(['Omit zero-mass cells because they contribute zero and conditional probabilities there may be undefined.', 'Bỏ ô xác suất không vì chúng đóng góp bằng không và xác suất điều kiện tại đó có thể không xác định.'])
    ],
    primarySolution: [
      bi(['Because $B_1,\\ldots,B_k$ partition $\\Omega$, every outcome in $A$ lies in exactly one cell, so $A=\\bigcup_i(A\\cap B_i)$.', 'Vì $B_1,\\ldots,B_k$ phân hoạch $\\Omega$, mỗi kết quả trong $A$ nằm đúng một ô, nên $A=\\bigcup_i(A\\cap B_i)$.']),
      bi(['The sets $A\\cap B_i$ are pairwise disjoint; finite additivity gives $P(A)=\\sum_iP(A\\cap B_i)$.', 'Các tập $A\\cap B_i$ đôi một rời nhau; tính cộng hữu hạn cho $P(A)=\\sum_iP(A\\cap B_i)$.']),
      bi(['For each cell with $P(B_i)>0$, conditional probability gives $P(A\\cap B_i)=P(A\\mid B_i)P(B_i)$.', 'Với mỗi ô có $P(B_i)>0$, xác suất có điều kiện cho $P(A\\cap B_i)=P(A\\mid B_i)P(B_i)$.']),
      bi(['Cells with $P(B_i)=0$ contribute zero, yielding $P(A)=\\sum_{i:P(B_i)>0}P(A\\mid B_i)P(B_i)$.', 'Các ô có $P(B_i)=0$ đóng góp bằng không, nên $P(A)=\\sum_{i:P(B_i)>0}P(A\\mid B_i)P(B_i)$.'])
    ],
    companions: [
      q(['Factory $1$ makes $70\\%$ of a product with a $1\\%$ defect rate; factory $2$ makes the rest with a $4\\%$ defect rate. Find the total defect probability.', 'Nhà máy $1$ sản xuất $70\\%$ sản phẩm với tỷ lệ lỗi $1\\%$; nhà máy $2$ sản xuất phần còn lại với tỷ lệ lỗi $4\\%$. Tìm xác suất lỗi tổng thể.'], [
        ['The factory events partition production, with weights $0.7$ and $0.3$.', 'Các biến cố nhà máy phân hoạch sản lượng, với trọng số $0.7$ và $0.3$.'],
        ['The total-probability sum is $0.7\\cdot0.01+0.3\\cdot0.04$.', 'Tổng xác suất là $0.7\\cdot0.01+0.3\\cdot0.04$.'],
        ['This equals $0.007+0.012=0.019$, so $1.9\\%$ of items are defective.', 'Giá trị bằng $0.007+0.012=0.019$, nên $1.9\\%$ sản phẩm bị lỗi.']
      ]),
      q(['Students are in group $G_1$ with probability $0.4$ or group $G_2$ with probability $0.6$. Pass probabilities are $0.8$ and $0.2$, respectively. Find the overall pass probability.', 'Sinh viên thuộc nhóm $G_1$ với xác suất $0.4$ hoặc nhóm $G_2$ với xác suất $0.6$. Xác suất đỗ tương ứng là $0.8$ và $0.2$. Tìm xác suất đỗ tổng thể.'], [
        ['The two groups form a partition, so weight each conditional pass probability by its group probability.', 'Hai nhóm tạo thành phân hoạch, nên nhân mỗi xác suất đỗ có điều kiện với xác suất nhóm.'],
        ['Compute $P(\\text{pass})=0.4\\cdot0.8+0.6\\cdot0.2$.', 'Tính $P(\\text{đỗ})=0.4\\cdot0.8+0.6\\cdot0.2$.'],
        ['The result is $0.32+0.12=0.44$.', 'Kết quả là $0.32+0.12=0.44$.']
      ]),
      q(['Two routes are used with probabilities $0.25$ and $0.75$. An item arrives on time with conditional probabilities $0.9$ and $0.6$. Find the probability it arrives late.', 'Hai tuyến được dùng với xác suất $0.25$ và $0.75$. Sản phẩm đến đúng giờ với xác suất có điều kiện $0.9$ và $0.6$. Tìm xác suất đến trễ.'], [
        ['The conditional late probabilities are $1-0.9=0.1$ on route $1$ and $1-0.6=0.4$ on route $2$.', 'Xác suất trễ có điều kiện là $1-0.9=0.1$ ở tuyến $1$ và $1-0.6=0.4$ ở tuyến $2$.'],
        ['Weight by the route partition: $P(\\text{late})=0.25\\cdot0.1+0.75\\cdot0.4$.', 'Lấy trọng số theo phân hoạch tuyến: $P(\\text{trễ})=0.25\\cdot0.1+0.75\\cdot0.4$.'],
        ['The total is $0.025+0.30=0.325$.', 'Tổng bằng $0.025+0.30=0.325$.']
      ])
    ],
    reviewNote: 'Verified the partition proof including zero-probability cells, and checked each weighted sum with its conditioning cell.',
    sourceIds: ['f-6041sc']
  },
  'f-w018-e5': {
    application: bi(['If two positive-probability events are mutually exclusive, their zero intersection cannot equal the positive product required for independence.', 'Nếu hai biến cố xác suất dương loại trừ nhau, giao bằng không không thể bằng tích dương cần có để độc lập.']),
    formula: bi(['Independence requires $P(A\\cap B)=P(A)P(B)$; if $A,B$ are disjoint with $P(A)>0$ and $P(B)>0$, then $0\\ne P(A)P(B)$, so they are dependent.', 'Độc lập đòi hỏi $P(A\\cap B)=P(A)P(B)$; nếu $A,B$ rời nhau và $P(A)>0$, $P(B)>0$, thì $0\\ne P(A)P(B)$, nên chúng phụ thuộc.']),
    steps: [
      bi(['Write the intersection probability forced by mutual exclusion.', 'Viết xác suất giao bị buộc bởi tính loại trừ.']),
      bi(['Compute the positive product of the marginal probabilities.', 'Tính tích dương của các xác suất biên.']),
      bi(['The conflicting values rule out independence; positivity of both marginals matters.', 'Hai giá trị mâu thuẫn loại trừ độc lập; tính dương của cả hai xác suất biên là quan trọng.'])
    ],
    primarySolution: [
      bi(['The given marginals have product $P(A)P(B)=0.1\\cdot0.1=0.01$.', 'Các xác suất biên đã cho có tích $P(A)P(B)=0.1\\cdot0.1=0.01$.']),
      bi(['Mutual exclusion means $P(A\\cap B)=0$.', 'Loại trừ nhau nghĩa là $P(A\\cap B)=0$.']),
      bi(['Since $0\\ne0.01$, the independence identity fails.', 'Vì $0\\ne0.01$, đồng nhất thức độc lập không đúng.']),
      bi(['Therefore no mutually exclusive events with these positive marginals can be independent.', 'Vì vậy các biến cố loại trừ nhau với xác suất biên dương này không thể độc lập.'])
    ],
    companions: [
      q(['Events $C,D$ are disjoint, with $P(C)=0.4$ and $P(D)=0.2$. Decide whether they can be independent.', 'Biến cố $C,D$ rời nhau, có $P(C)=0.4$ và $P(D)=0.2$. Xác định chúng có thể độc lập không.'], [
        ['Disjointness gives $P(C\\cap D)=0$.', 'Tính rời nhau cho $P(C\\cap D)=0$.'],
        ['The product required for independence is $0.4\\cdot0.2=0.08$.', 'Tích cần để độc lập là $0.4\\cdot0.2=0.08$.'],
        ['Since the values differ and both marginals are positive, the events are dependent.', 'Vì hai giá trị khác nhau và cả hai xác suất biên dương, các biến cố phụ thuộc.']
      ]),
      q(['On $\\Omega=\\{1,2,3,4,5,6,7,8,9,10\\}$ with equally likely outcomes, let $E=\\{1,2\\}$ and $F=\\{3,4,5\\}$. Check independence.', 'Trên $\\Omega=\\{1,2,3,4,5,6,7,8,9,10\\}$ với các kết quả đồng xác suất, đặt $E=\\{1,2\\}$ và $F=\\{3,4,5\\}$. Kiểm tra độc lập.'], [
        ['The events are disjoint, so $P(E\\cap F)=0$; their marginals are $2/10$ and $3/10$.', 'Hai biến cố rời nhau nên $P(E\\cap F)=0$; xác suất biên lần lượt là $2/10$ và $3/10$.'],
        ['Their marginal product is $(2/10)(3/10)=6/100>0$.', 'Tích biên là $(2/10)(3/10)=6/100>0$.'],
        ['The product differs from the intersection, so they are not independent.', 'Tích khác xác suất giao, nên chúng không độc lập.']
      ]),
      q(['Let $E$ be an impossible event and $F$ have probability $0.4$. They are disjoint. Are they independent? Explain the zero-probability exception.', 'Gọi $E$ là biến cố bất khả và $F$ có xác suất $0.4$. Chúng rời nhau. Hai biến cố có độc lập không? Giải thích ngoại lệ xác suất bằng không.'], [
        ['Since $P(E)=0$, the intersection also has probability $P(E\\cap F)=0$.', 'Vì $P(E)=0$, giao cũng có xác suất $P(E\\cap F)=0$.'],
        ['The product is $P(E)P(F)=0\\cdot0.4=0$, equal to that intersection.', 'Tích là $P(E)P(F)=0\\cdot0.4=0$, bằng xác suất giao.'],
        ['Thus the events satisfy the independence identity; the impossibility of independent disjoint events requires both marginals to be positive.', 'Vậy các biến cố thỏa đồng nhất thức độc lập; điều kiện “rời nhau thì không độc lập” cần cả hai xác suất biên dương.']
      ])
    ],
    reviewNote: 'Checked the product-identity contradiction for positive marginals and retained the valid zero-probability exception.',
    sourceIds: ['f-6041sc']
  },
  'f-w019-e1': {
    application: bi(['Expectation of a transformed variable averages the transformed values with probability weights; variance measures spread around the mean.', 'Kỳ vọng của biến đổi lấy trung bình các giá trị đã biến đổi theo trọng số xác suất; phương sai đo độ phân tán quanh trung bình.']),
    formula: bi(['For a finite-valued $X$, $E[g(X)]=\\sum_xg(x)P(X=x)$ and $\\operatorname{Var}(X)=E[X^2]-(E[X])^2$, provided the second moment is finite.', 'Với $X$ hữu hạn giá trị, $E[g(X)]=\\sum_xg(x)P(X=x)$ và $\\operatorname{Var}(X)=E[X^2]-(E[X])^2$, khi moment bậc hai hữu hạn.']),
    steps: [
      bi(['For each possible value, apply the transformation before multiplying by its probability.', 'Với mỗi giá trị có thể, áp dụng phép biến đổi trước khi nhân với xác suất.']),
      bi(['Sum the weighted values to obtain the expectation.', 'Cộng các giá trị có trọng số để được kỳ vọng.']),
      bi(['For variance, compute $E[X^2]$ and subtract $(E[X])^2$.', 'Với phương sai, tính $E[X^2]$ rồi trừ $(E[X])^2$.'])
    ],
    primarySolution: [
      bi(['The mean is $E[X]=(-1)(0.2)+0(0.5)+2(0.3)=0.4$.', 'Trung bình là $E[X]=(-1)(0.2)+0(0.5)+2(0.3)=0.4$.']),
      bi(['The second moment is $E[X^2]=1(0.2)+0+4(0.3)=1.4$.', 'Moment bậc hai là $E[X^2]=1(0.2)+0+4(0.3)=1.4$.']),
      bi(['Thus $\\operatorname{Var}(X)=1.4-(0.4)^2=1.24$.', 'Do đó $\\operatorname{Var}(X)=1.4-(0.4)^2=1.24$.']),
      bi(['For the absolute-value transform, $E[|X|]=1(0.2)+0+2(0.3)=0.8$.', 'Với phép biến đổi trị tuyệt đối, $E[|X|]=1(0.2)+0+2(0.3)=0.8$.'])
    ],
    companions: [
      q(['A variable takes values $-2,1,3$ with probabilities $0.25,0.5,0.25$. Find its mean, second moment, and variance.', 'Một biến nhận các giá trị $-2,1,3$ với xác suất $0.25,0.5,0.25$. Tìm trung bình, moment bậc hai và phương sai.'], [
        ['The mean is $(-2)(0.25)+1(0.5)+3(0.25)=0.75$.', 'Trung bình là $(-2)(0.25)+1(0.5)+3(0.25)=0.75$.'],
        ['The second moment is $4(0.25)+1(0.5)+9(0.25)=3.75$.', 'Moment bậc hai là $4(0.25)+1(0.5)+9(0.25)=3.75$.'],
        ['Variance is $3.75-(0.75)^2=3.1875$.', 'Phương sai là $3.75-(0.75)^2=3.1875$.']
      ]),
      q(['A variable $X$ takes values $0,2,5$ with probabilities $0.2,0.5,0.3$. Compute $E[|X-2|]$ and explain the weighting.', 'Biến $X$ nhận giá trị $0,2,5$ với xác suất $0.2,0.5,0.3$. Tính $E[|X-2|]$ và giải thích trọng số.'], [
        ['The transformed values are $|0-2|=2$, $|2-2|=0$, and $|5-2|=3$.', 'Các giá trị sau biến đổi là $|0-2|=2$, $|2-2|=0$ và $|5-2|=3$.'],
        ['Weight each by its probability: $E[|X-2|]=2(0.2)+0(0.5)+3(0.3)$.', 'Nhân từng giá trị với xác suất: $E[|X-2|]=2(0.2)+0(0.5)+3(0.3)$.'],
        ['The result is $0.4+0+0.9=1.3$.', 'Kết quả là $0.4+0+0.9=1.3$.']
      ]),
      q(['Let $X$ be equally likely to be $-1$ or $1$, and set $g(x)=x^2+2x$. Find $E[g(X)]$ both by transformation and by linearity.', 'Cho $X$ nhận đều $-1$ hoặc $1$, và đặt $g(x)=x^2+2x$. Tìm $E[g(X)]$ bằng phép biến đổi trực tiếp và tính tuyến tính.'], [
        ['Directly, $g(-1)=-1$ and $g(1)=3$, so $E[g(X)]=(-1)(1/2)+3(1/2)=1$.', 'Tính trực tiếp, $g(-1)=-1$ và $g(1)=3$, nên $E[g(X)]=(-1)(1/2)+3(1/2)=1$.'],
        ['Linearity gives $E[X^2+2X]=E[X^2]+2E[X]$.', 'Tính tuyến tính cho $E[X^2+2X]=E[X^2]+2E[X]$.'],
        ['Here $E[X^2]=1$ and $E[X]=0$, yielding $1+2(0)=1$, consistent with direct weighting.', 'Ở đây $E[X^2]=1$ và $E[X]=0$, nên $1+2(0)=1$, khớp với phép gán trọng số trực tiếp.']
      ])
    ],
    reviewNote: 'Recomputed the weighted mean, second moment, variance, and transformed expectations from their finite probability tables.',
    sourceIds: ['f-6041sc']
  },
  'f-w019-e2': {
    application: bi(['Expectation is linear because finite sums distribute, even when random variables are dependent.', 'Kỳ vọng tuyến tính vì tổng hữu hạn phân phối qua phép cộng, kể cả khi các biến ngẫu nhiên phụ thuộc.']),
    formula: bi(['For integrable random variables, $E[aX+bY]=aE[X]+bE[Y]$; no independence assumption is required.', 'Với các biến ngẫu nhiên khả tích, $E[aX+bY]=aE[X]+bE[Y]$; không cần giả thiết độc lập.']),
    steps: [
      bi(['Write the expectation as a sum over outcomes in the common sample space.', 'Viết kỳ vọng thành tổng trên các kết quả của không gian mẫu chung.']),
      bi(['Distribute the finite weighted sum across the linear combination.', 'Phân phối tổng có trọng số hữu hạn qua tổ hợp tuyến tính.']),
      bi(['Recognize the resulting terms as individual expectations; no product factorization is used.', 'Nhận ra các số hạng thu được là kỳ vọng riêng; không phân tích tích nào được dùng.'])
    ],
    primarySolution: [
      bi(['For finite-valued $X,Y$ on outcomes $\\omega$, $E[X+Y]=\\sum_\\omega(X(\\omega)+Y(\\omega))P(\\omega)$.', 'Với $X,Y$ hữu hạn giá trị trên kết quả $\\omega$, $E[X+Y]=\\sum_\\omega(X(\\omega)+Y(\\omega))P(\\omega)$.']),
      bi(['Distribute the sum: $\\sum_\\omega X(\\omega)P(\\omega)+\\sum_\\omega Y(\\omega)P(\\omega)$.', 'Phân phối tổng được $\\sum_\\omega X(\\omega)P(\\omega)+\\sum_\\omega Y(\\omega)P(\\omega)$.']),
      bi(['These sums are $E[X]$ and $E[Y]$, so $E[X+Y]=E[X]+E[Y]$.', 'Hai tổng này là $E[X]$ và $E[Y]$, nên $E[X+Y]=E[X]+E[Y]$.']),
      bi(['No step uses independence, which is why the identity holds for dependent variables too.', 'Không bước nào dùng tính độc lập, nên đồng nhất thức cũng đúng với biến phụ thuộc.'])
    ],
    companions: [
      q(['Let $X=Y$ be a Bernoulli variable with $P(X=1)=0.3$. Verify linearity for $X+Y$ even though the variables are dependent.', 'Cho $X=Y$ là biến Bernoulli với $P(X=1)=0.3$. Kiểm tra tính tuyến tính cho $X+Y$ dù hai biến phụ thuộc.'], [
        ['Since $X$ is $1$ with probability $0.3$, $E[X]=E[Y]=0.3$.', 'Vì $X$ bằng $1$ với xác suất $0.3$, $E[X]=E[Y]=0.3$.'],
        ['The variables are dependent because $Y=X$ exactly.', 'Hai biến phụ thuộc vì chính xác $Y=X$.'],
        ['Linearity gives $E[X+Y]=0.3+0.3=0.6$; indeed $X+Y$ is $2$ with probability $0.3$ and zero otherwise.', 'Tính tuyến tính cho $E[X+Y]=0.3+0.3=0.6$; thật vậy $X+Y$ bằng $2$ với xác suất $0.3$ và bằng không nếu không.']
      ]),
      q(['Events $A,B$ are mutually exclusive with probabilities $0.4,0.35$. For $N=\\mathbf1_A+\\mathbf1_B$, find $E[N]$ without assuming independence.', 'Biến cố $A,B$ loại trừ nhau và có xác suất $0.4,0.35$. Với $N=\\mathbf1_A+\\mathbf1_B$, tìm $E[N]$ mà không giả sử độc lập.'], [
        ['For an indicator, $E[\\mathbf1_A]=P(A)=0.4$ and $E[\\mathbf1_B]=P(B)=0.35$.', 'Với biến chỉ thị, $E[\\mathbf1_A]=P(A)=0.4$ và $E[\\mathbf1_B]=P(B)=0.35$.'],
        ['Linearity yields $E[N]=0.4+0.35=0.75$.', 'Tính tuyến tính cho $E[N]=0.4+0.35=0.75$.'],
        ['The events are dependent because they are disjoint with positive probabilities, but that does not affect this expectation.', 'Các biến cố phụ thuộc vì rời nhau và có xác suất dương, nhưng điều đó không ảnh hưởng kỳ vọng này.']
      ]),
      q(['On a finite sample space, prove $E[3X-2Y]=3E[X]-2E[Y]$ directly from the expectation sum.', 'Trên không gian mẫu hữu hạn, chứng minh trực tiếp từ tổng kỳ vọng rằng $E[3X-2Y]=3E[X]-2E[Y]$.'], [
        ['Start with $E[3X-2Y]=\\sum_\\omega(3X(\\omega)-2Y(\\omega))P(\\omega)$.', 'Bắt đầu với $E[3X-2Y]=\\sum_\\omega(3X(\\omega)-2Y(\\omega))P(\\omega)$.'],
        ['Distribute: $3\\sum_\\omega X(\\omega)P(\\omega)-2\\sum_\\omega Y(\\omega)P(\\omega)$.', 'Phân phối được $3\\sum_\\omega X(\\omega)P(\\omega)-2\\sum_\\omega Y(\\omega)P(\\omega)$.'],
        ['The two sums are $E[X]$ and $E[Y]$, giving the result without any condition on dependence.', 'Hai tổng là $E[X]$ và $E[Y]$, cho kết quả mà không cần điều kiện về sự phụ thuộc.']
      ])
    ],
    reviewNote: 'Checked the finite-sum derivation and dependent examples; expectations add without factoring joint probabilities.',
    sourceIds: ['f-6041sc']
  },
  'f-w019-e3': {
    application: bi(['Covariance contributes a signed cross term to the variance of a sum, revealing how correlated quantities affect total spread.', 'Hiệp phương sai tạo số hạng chéo có dấu trong phương sai tổng, cho thấy các đại lượng tương quan làm đổi độ phân tán ra sao.']),
    formula: bi(['For finite-second-moment $X,Y$, $\\operatorname{Var}(aX+bY)=a^2\\operatorname{Var}(X)+b^2\\operatorname{Var}(Y)+2ab\\operatorname{Cov}(X,Y)$.', 'Với $X,Y$ có moment bậc hai hữu hạn, $\\operatorname{Var}(aX+bY)=a^2\\operatorname{Var}(X)+b^2\\operatorname{Var}(Y)+2ab\\operatorname{Cov}(X,Y)$.']),
    steps: [
      bi(['Identify the coefficients $a,b$, both variances, and the covariance.', 'Xác định hệ số $a,b$, hai phương sai và hiệp phương sai.']),
      bi(['Substitute into the identity, retaining the sign of every coefficient and covariance.', 'Thế vào đồng nhất thức, giữ đúng dấu của từng hệ số và hiệp phương sai.']),
      bi(['Compute the cross term $2ab\\operatorname{Cov}(X,Y)$ separately before adding.', 'Tính riêng số hạng chéo $2ab\\operatorname{Cov}(X,Y)$ trước khi cộng.']),
      bi(['The finite-second-moment assumption ensures the variances and covariance in the formula are defined.', 'Giả thiết moment bậc hai hữu hạn bảo đảm các phương sai và hiệp phương sai trong công thức được xác định.'])
    ],
    primarySolution: [
      bi(['For $2X-Y$, take $a=2$, $b=-1$, $\\operatorname{Var}(X)=4$, $\\operatorname{Var}(Y)=9$, and $\\operatorname{Cov}(X,Y)=-2$.', 'Với $2X-Y$, lấy $a=2$, $b=-1$, $\\operatorname{Var}(X)=4$, $\\operatorname{Var}(Y)=9$ và $\\operatorname{Cov}(X,Y)=-2$.']),
      bi(['The first two contributions are $a^2\\operatorname{Var}(X)=4\\cdot4=16$ and $b^2\\operatorname{Var}(Y)=1\\cdot9=9$.', 'Hai phần đầu là $a^2\\operatorname{Var}(X)=4\\cdot4=16$ và $b^2\\operatorname{Var}(Y)=1\\cdot9=9$.']),
      bi(['The cross term is $2ab\\operatorname{Cov}(X,Y)=2\\cdot2\\cdot(-1)\\cdot(-2)=8$.', 'Số hạng chéo là $2ab\\operatorname{Cov}(X,Y)=2\\cdot2\\cdot(-1)\\cdot(-2)=8$.']),
      bi(['Adding gives $\\operatorname{Var}(2X-Y)=16+9+8=33$; the two negative signs make the cross term positive.', 'Cộng lại được $\\operatorname{Var}(2X-Y)=16+9+8=33$; hai dấu âm làm số hạng chéo dương.'])
    ],
    companions: [
      q(['Suppose $\\operatorname{Var}(X)=2$, $\\operatorname{Var}(Y)=5$, and $\\operatorname{Cov}(X,Y)=0.5$. Find $\\operatorname{Var}(3X+2Y)$.', 'Giả sử $\\operatorname{Var}(X)=2$, $\\operatorname{Var}(Y)=5$ và $\\operatorname{Cov}(X,Y)=0.5$. Tìm $\\operatorname{Var}(3X+2Y)$.'], [
        ['Here $a=3$, $b=2$, so the variance terms are $9(2)=18$ and $4(5)=20$.', 'Ở đây $a=3$, $b=2$, nên các số hạng phương sai là $9(2)=18$ và $4(5)=20$.'],
        ['The cross term is $2(3)(2)(0.5)=6$.', 'Số hạng chéo là $2(3)(2)(0.5)=6$.'],
        ['Therefore $\\operatorname{Var}(3X+2Y)=18+20+6=44$.', 'Vì vậy $\\operatorname{Var}(3X+2Y)=18+20+6=44$.']
      ]),
      q(['Let $\\operatorname{Var}(U)=1$, $\\operatorname{Var}(V)=4$, and $\\operatorname{Cov}(U,V)=-0.5$. Compute $\\operatorname{Var}(2U+V)$.', 'Cho $\\operatorname{Var}(U)=1$, $\\operatorname{Var}(V)=4$ và $\\operatorname{Cov}(U,V)=-0.5$. Tính $\\operatorname{Var}(2U+V)$.'], [
        ['The separate variance terms are $2^2(1)=4$ and $1^2(4)=4$.', 'Các số hạng phương sai riêng là $2^2(1)=4$ và $1^2(4)=4$.'],
        ['The cross term is $2(2)(1)(-0.5)=-2$.', 'Số hạng chéo là $2(2)(1)(-0.5)=-2$.'],
        ['Thus $\\operatorname{Var}(2U+V)=4+4-2=6$.', 'Vậy $\\operatorname{Var}(2U+V)=4+4-2=6$.']
      ]),
      q(['Given $\\operatorname{Var}(A)=7$, $\\operatorname{Var}(B)=2$, and $\\operatorname{Cov}(A,B)=1$, find $\\operatorname{Var}(A-3B)$.', 'Cho $\\operatorname{Var}(A)=7$, $\\operatorname{Var}(B)=2$ và $\\operatorname{Cov}(A,B)=1$. Tìm $\\operatorname{Var}(A-3B)$.'], [
        ['Use $a=1$ and $b=-3$; the individual terms are $1^2(7)=7$ and $(-3)^2(2)=18$.', 'Dùng $a=1$, $b=-3$; các số hạng riêng là $1^2(7)=7$ và $(-3)^2(2)=18$.'],
        ['The cross term is $2(1)(-3)(1)=-6$.', 'Số hạng chéo là $2(1)(-3)(1)=-6$.'],
        ['The result is $\\operatorname{Var}(A-3B)=7+18-6=19$.', 'Kết quả là $\\operatorname{Var}(A-3B)=7+18-6=19$.']
      ])
    ],
    reviewNote: 'Rechecked the signs in all cross terms and the stated finite-moment condition; the resulting variances are nonnegative.',
    sourceIds: ['f-6041sc']
  },
  'f-w019-e4': {
    application: bi(['Covariance detects linear co-movement only; a nonlinear deterministic relationship can leave covariance zero while preserving dependence.', 'Hiệp phương sai chỉ nhận diện biến thiên tuyến tính cùng nhau; quan hệ phi tuyến tất định vẫn có thể phụ thuộc dù hiệp phương sai bằng không.']),
    formula: bi(['For finite second moments, $\\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]$; zero covariance does not in general imply independence.', 'Với moment bậc hai hữu hạn, $\\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]$; hiệp phương sai bằng không nói chung không suy ra độc lập.']),
    steps: [
      bi(['Compute the means and product expectation to evaluate covariance.', 'Tính các kỳ vọng và kỳ vọng tích để tìm hiệp phương sai.']),
      bi(['Use symmetry to identify which odd moments cancel.', 'Dùng tính đối xứng để xác định các moment lẻ triệt tiêu.']),
      bi(['Test independence separately with an event determined by both variables.', 'Kiểm tra độc lập riêng bằng một biến cố phụ thuộc vào cả hai biến.']),
      bi(['A deterministic nonlinear relation can show dependence even when the covariance calculation gives zero.', 'Quan hệ phi tuyến tất định có thể chứng minh phụ thuộc dù phép tính hiệp phương sai cho không.'])
    ],
    primarySolution: [
      bi(['For $X$ uniform on $\\{-1,0,1\\}$, symmetry gives $E[X]=0$ and $E[X^3]=0$; with $Y=X^2$, $E[Y]=(1+0+1)/3=2/3$.', 'Với $X$ đều trên $\\{-1,0,1\\}$, đối xứng cho $E[X]=0$ và $E[X^3]=0$; với $Y=X^2$, $E[Y]=(1+0+1)/3=2/3$.']),
      bi(['Since $XY=X^3$, $E[XY]=0$, so $\\operatorname{Cov}(X,Y)=0-(0)(2/3)=0$.', 'Vì $XY=X^3$, $E[XY]=0$, nên $\\operatorname{Cov}(X,Y)=0-(0)(2/3)=0$.']),
      bi(['But events $\\{X=0\\}$ and $\\{Y=0\\}$ coincide and have probability $1/3$, whereas their probability product is $1/9$.', 'Nhưng hai biến cố $\\{X=0\\}$ và $\\{Y=0\\}$ trùng nhau, có xác suất $1/3$, trong khi tích xác suất của chúng là $1/9$.']),
      bi(['The product test fails, so $X,Y$ are dependent despite zero covariance.', 'Tiêu chuẩn tích không đúng, nên $X,Y$ phụ thuộc dù hiệp phương sai bằng không.'])
    ],
    companions: [
      q(['Let $X$ be uniform on $\\{-2,-1,1,2\\}$ and $Y=X^2$. Find the covariance and use an event test to show dependence.', 'Cho $X$ đều trên $\\{-2,-1,1,2\\}$ và $Y=X^2$. Tìm hiệp phương sai và dùng biến cố để chứng minh phụ thuộc.'], [
        ['Symmetry gives $E[X]=0$ and $E[X^3]=0$; also $E[Y]=(4+1+1+4)/4=5/2$.', 'Đối xứng cho $E[X]=0$ và $E[X^3]=0$; đồng thời $E[Y]=(4+1+1+4)/4=5/2$.'],
        ['Because $XY=X^3$, $E[XY]=0$, hence $\\operatorname{Cov}(X,Y)=0-(0)(5/2)=0$.', 'Vì $XY=X^3$, $E[XY]=0$, nên $\\operatorname{Cov}(X,Y)=0-(0)(5/2)=0$.'],
        ['Events $\\{X=1\\}$ and $\\{Y=1\\}$ have probabilities $1/4$ and $1/2$ and intersection $1/4\\ne1/8$, so they are dependent.', 'Hai biến cố $\\{X=1\\}$ và $\\{Y=1\\}$ có xác suất $1/4$ và $1/2$, giao $1/4\\ne1/8$, nên chúng phụ thuộc.']
      ]),
      q(['Let $X$ be uniform on $[-1,1]$ and $Y=X^2$. Compute covariance and test independence using events $\\{|X|\\le1/2\\}$ and $\\{Y\\le1/4\\}$.', 'Cho $X$ đều trên $[-1,1]$ và $Y=X^2$. Tính hiệp phương sai rồi kiểm tra độc lập bằng các biến cố $\\{|X|\\le1/2\\}$ và $\\{Y\\le1/4\\}$.'], [
        ['Symmetry gives $E[X]=0$ and $E[X^3]=0$, while $E[Y]=E[X^2]=1/3$.', 'Đối xứng cho $E[X]=0$ và $E[X^3]=0$, còn $E[Y]=E[X^2]=1/3$.'],
        ['Since $XY=X^3$, covariance is $E[X^3]-E[X]E[Y]=0$.', 'Vì $XY=X^3$, hiệp phương sai là $E[X^3]-E[X]E[Y]=0$.'],
        ['The two events coincide and each has probability $1/2$; their intersection is $1/2$, not the product $1/4$, so $X,Y$ are dependent.', 'Hai biến cố trùng nhau và mỗi biến cố có xác suất $1/2$; giao là $1/2$, không phải tích $1/4$, nên $X,Y$ phụ thuộc.']
      ]),
      q(['Assume $X,Y$ are independent and have finite second moments. Prove their covariance is zero, and explain why the converse needs a counterexample.', 'Giả sử $X,Y$ độc lập và có moment bậc hai hữu hạn. Chứng minh hiệp phương sai bằng không và giải thích vì sao chiều đảo cần phản ví dụ.'], [
        ['Independence and integrability give $E[XY]=E[X]E[Y]$.', 'Độc lập và khả tích cho $E[XY]=E[X]E[Y]$.'],
        ['Substitute into the definition: $\\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]=0$.', 'Thế vào định nghĩa: $\\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]=0$.'],
        ['This proves independence implies zero covariance; the primary example shows zero covariance can still coexist with dependence.', 'Điều này chứng minh độc lập kéo theo hiệp phương sai bằng không; ví dụ chính cho thấy hiệp phương sai bằng không vẫn có thể đi cùng phụ thuộc.']
      ])
    ],
    reviewNote: 'Recomputed the symmetric moments and event products; each dependence claim is checked separately from covariance.',
    sourceIds: ['f-6041sc']
  },
  'f-w019-e5': {
    application: bi(['Indicators turn a count into a sum of zero-one variables, so its expected value is easy to compute even when the events depend.', 'Biến chỉ thị biến một số đếm thành tổng các biến không-hay-một, nên kỳ vọng dễ tính kể cả khi các biến cố phụ thuộc.']),
    formula: bi(['If $N=\\sum_{i=1}^m\\mathbf1_{A_i}$, then $E[N]=\\sum_{i=1}^mE[\\mathbf1_{A_i}]=\\sum_{i=1}^mP(A_i)$ by linearity; independence is unnecessary.', 'Nếu $N=\\sum_{i=1}^m\\mathbf1_{A_i}$ thì $E[N]=\\sum_{i=1}^mE[\\mathbf1_{A_i}]=\\sum_{i=1}^mP(A_i)$ theo tính tuyến tính; không cần độc lập.']),
    steps: [
      bi(['Represent each event occurrence by an indicator equal to one when it occurs and zero otherwise.', 'Biểu diễn mỗi lần biến cố xảy ra bằng biến chỉ thị bằng một khi xảy ra và bằng không khi không.']),
      bi(['Add the indicators to obtain the count or weighted count.', 'Cộng các biến chỉ thị để được số đếm hoặc số đếm có trọng số.']),
      bi(['Use $E[\\mathbf1_A]=P(A)$ and linearity to add expectations.', 'Dùng $E[\\mathbf1_A]=P(A)$ và tính tuyến tính để cộng kỳ vọng.']),
      bi(['No independence is required for this expectation calculation.', 'Không cần tính độc lập cho phép tính kỳ vọng này.'])
    ],
    primarySolution: [
      bi(['Let $I_i$ be the indicator that device $i$ fails; the total is $N=I_1+I_2+I_3$.', 'Gọi $I_i$ là biến chỉ thị thiết bị $i$ hỏng; tổng số lỗi là $N=I_1+I_2+I_3$.']),
      bi(['Each indicator has expectation equal to its failure probability: $E[I_1]=0.1$, $E[I_2]=0.2$, $E[I_3]=0.3$.', 'Mỗi biến chỉ thị có kỳ vọng bằng xác suất lỗi: $E[I_1]=0.1$, $E[I_2]=0.2$, $E[I_3]=0.3$.']),
      bi(['Linearity gives $E[N]=E[I_1]+E[I_2]+E[I_3]$.', 'Tính tuyến tính cho $E[N]=E[I_1]+E[I_2]+E[I_3]$.']),
      bi(['Thus the expected failure count is $0.1+0.2+0.3=0.6$, regardless of dependence.', 'Vậy số lỗi kỳ vọng là $0.1+0.2+0.3=0.6$, bất kể phụ thuộc.'])
    ],
    companions: [
      q(['Five components fail with probabilities $0.02,0.03,0.10,0.12,0.05$. Find the expected number of failures without assuming independence.', 'Năm linh kiện hỏng với xác suất $0.02,0.03,0.10,0.12,0.05$. Tìm số lỗi kỳ vọng mà không giả sử độc lập.'], [
        ['Write the count as the sum of five failure indicators.', 'Viết số lỗi thành tổng năm biến chỉ thị hỏng.'],
        ['The expectation is the sum of the indicator means: $0.02+0.03+0.10+0.12+0.05$.', 'Kỳ vọng là tổng kỳ vọng biến chỉ thị: $0.02+0.03+0.10+0.12+0.05$.'],
        ['The sum is $0.32$ expected failures; dependence does not change it.', 'Tổng là $0.32$ lỗi kỳ vọng; phụ thuộc không làm đổi kết quả.']
      ]),
      q(['In a survey, four people-owning-pet indicators have probabilities $0.3,0.4,0.25,0.6$. Find the expected number of owners; their answers may be dependent.', 'Trong khảo sát, bốn biến chỉ thị sở hữu thú cưng có xác suất $0.3,0.4,0.25,0.6$. Tìm số người sở hữu kỳ vọng; câu trả lời có thể phụ thuộc nhau.'], [
        ['Let $N$ be the sum of those four indicators.', 'Gọi $N$ là tổng bốn biến chỉ thị đó.'],
        ['Linearity gives $E[N]=0.3+0.4+0.25+0.6$.', 'Tính tuyến tính cho $E[N]=0.3+0.4+0.25+0.6$.'],
        ['Hence $E[N]=1.55$ owners, even without an independence assumption.', 'Vậy $E[N]=1.55$ người sở hữu, dù không giả sử độc lập.']
      ]),
      q(['Events $A$ and $B=A^c$ satisfy $P(A)=0.25$. Find the expected value of the weighted count $W=2\\mathbf1_A+\\mathbf1_B$.', 'Biến cố $A$ và $B=A^c$ thỏa $P(A)=0.25$. Tìm kỳ vọng số đếm có trọng số $W=2\\mathbf1_A+\\mathbf1_B$.'], [
        ['Since $B=A^c$, $P(B)=1-0.25=0.75$; the indicators are dependent and cannot occur together.', 'Vì $B=A^c$, $P(B)=1-0.25=0.75$; các biến chỉ thị phụ thuộc và không thể cùng bằng một.'],
        ['Linearity gives $E[W]=2P(A)+P(B)$.', 'Tính tuyến tính cho $E[W]=2P(A)+P(B)$.'],
        ['Thus $E[W]=2(0.25)+0.75=1.25$, with no need for independence.', 'Vậy $E[W]=2(0.25)+0.75=1.25$, không cần độc lập.']
      ])
    ],
    reviewNote: 'Checked the indicator identity and sums; the weighted complement example confirms linearity under dependence.',
    sourceIds: ['f-6041sc']
  },
  'f-w020-e1': {
    application: bi(['A density constant is determined by total probability one; probabilities of intervals are then areas under the normalized density.', 'Hằng số mật độ được xác định từ tổng xác suất bằng một; xác suất các khoảng sau đó là diện tích dưới mật độ đã chuẩn hóa.']),
    formula: bi(['A density must be nonnegative and integrate to $1$ on its support; for $f(x)=cx$ on $(0,2)$, $\\int_0^2cx\\,dx=1$ gives $c=1/2$.', 'Mật độ phải không âm và có tích phân bằng $1$ trên giá; với $f(x)=cx$ trên $(0,2)$, $\\int_0^2cx\\,dx=1$ cho $c=1/2$.']),
    steps: [
      bi(['Integrate the unnormalized density over its entire support.', 'Tích phân mật độ chưa chuẩn hóa trên toàn bộ miền giá.']),
      bi(['Set the integral equal to one and solve for the constant, checking it is nonnegative.', 'Đặt tích phân bằng một rồi giải hằng số, đồng thời kiểm tra nó không âm.']),
      bi(['Integrate the normalized density over the requested event interval.', 'Tích phân mật độ đã chuẩn hóa trên khoảng biến cố cần tính.'])
    ],
    primarySolution: [
      bi(['Normalization requires $\\int_0^2cx\\,dx=c[x^2/2]_0^2=2c=1$.', 'Chuẩn hóa đòi hỏi $\\int_0^2cx\\,dx=c[x^2/2]_0^2=2c=1$.']),
      bi(['Solving gives $c=1/2$, so the density is $f(x)=x/2$ on $(0,2)$.', 'Giải được $c=1/2$, nên mật độ là $f(x)=x/2$ trên $(0,2)$.']),
      bi(['The requested probability is $P(X>1)=\\int_1^2x/2\\,dx=[x^2/4]_1^2=(4-1)/4$.', 'Xác suất cần tìm là $P(X>1)=\\int_1^2x/2\\,dx=[x^2/4]_1^2=(4-1)/4$.']),
      bi(['Thus $P(X>1)=3/4$; the endpoint distinction does not affect a continuous density.', 'Vậy $P(X>1)=3/4$; khác biệt tại đầu mút không ảnh hưởng mật độ liên tục.'])
    ],
    companions: [
      q(['A density is $g(x)=c(1-x)$ for $0<x<1$ and zero elsewhere. Find $c$ and $P(X<1/2)$.', 'Mật độ $g(x)=c(1-x)$ với $0<x<1$ và bằng không ngoài khoảng. Tìm $c$ và $P(X<1/2)$.'], [
        ['Set the total mass to one: $1=\\int_0^1c(1-x)\\,dx=c(1-1/2)=c/2$.', 'Đặt khối lượng tổng bằng một: $1=\\int_0^1c(1-x)\\,dx=c(1-1/2)=c/2$.'],
        ['Thus $c=2$, a nonnegative normalization constant.', 'Vậy $c=2$, là hằng số chuẩn hóa không âm.'],
        ['Then $P(X<1/2)=\\int_0^{1/2}2(1-x)\\,dx=2(1/2-1/8)=3/4$.', 'Khi đó $P(X<1/2)=\\int_0^{1/2}2(1-x)\\,dx=2(1/2-1/8)=3/4$.']
      ]),
      q(['Let $h(x)=cx^2$ on $0<x<3$, zero elsewhere. Normalize it and find $P(X>3/2)$.', 'Cho $h(x)=cx^2$ trên $0<x<3$, bằng không ngoài khoảng. Chuẩn hóa và tìm $P(X>3/2)$.'], [
        ['The total integral is $c\\int_0^3x^2\\,dx=c(27/3)=9c$, so $c=1/9$.', 'Tích phân tổng là $c\\int_0^3x^2\\,dx=c(27/3)=9c$, nên $c=1/9$.'],
        ['The upper-tail probability is $\\int_{3/2}^3x^2/9\\,dx=1-(3/2)^3/27$.', 'Xác suất đuôi trên là $\\int_{3/2}^3x^2/9\\,dx=1-(3/2)^3/27$.'],
        ['Since $(3/2)^3/27=1/8$, the probability is $7/8$.', 'Vì $(3/2)^3/27=1/8$, xác suất bằng $7/8$.']
      ]),
      q(['A constant density $f(x)=c$ is supported on $[-2,2]$. Find $c$ and $P(|X|\\le1)$.', 'Mật độ hằng $f(x)=c$ có giá trên $[-2,2]$. Tìm $c$ và $P(|X|\\le1)$.'], [
        ['The support length is $4$, so normalization gives $4c=1$ and $c=1/4$.', 'Độ dài miền giá là $4$, nên chuẩn hóa cho $4c=1$ và $c=1/4$.'],
        ['The event $|X|\\le1$ is the interval $[-1,1]$ of length $2$.', 'Biến cố $|X|\\le1$ là đoạn $[-1,1]$ có độ dài $2$.'],
        ['Its probability is $2(1/4)=1/2$.', 'Xác suất là $2(1/4)=1/2$.']
      ])
    ],
    reviewNote: 'Checked total mass, nonnegativity, integration bounds, and each interval probability directly.',
    sourceIds: ['f-6041sc']
  },
  'f-w020-e2': {
    application: bi(['A joint density describes two variables together; integrating across the other coordinate gives each marginal, and support can reveal dependence.', 'Mật độ chung mô tả hai biến cùng nhau; tích phân theo tọa độ kia cho mật độ biên, còn miền giá có thể bộc lộ phụ thuộc.']),
    formula: bi(['For $f(x,y)=2$ on $0<x<y<1$, $f_X(x)=\\int_x^1 2\\,dy=2(1-x)$ and $f_Y(y)=\\int_0^y2\\,dx=2y$ for $0<x,y<1$.', 'Với $f(x,y)=2$ trên $0<x<y<1$, $f_X(x)=\\int_x^1 2\\,dy=2(1-x)$ và $f_Y(y)=\\int_0^y2\\,dx=2y$ khi $0<x,y<1$.']),
    steps: [
      bi(['Check that the joint density integrates to one over its triangular support.', 'Kiểm tra mật độ chung có tích phân bằng một trên miền tam giác.']),
      bi(['For $f_X(x)$, hold $x$ fixed and integrate over the allowable $y$-range; reverse the roles for $f_Y(y)$.', 'Với $f_X(x)$, giữ $x$ cố định và tích phân trên miền $y$ cho phép; đổi vai để tính $f_Y(y)$.']),
      bi(['To test independence, compare the joint density with the product of marginals on the full support.', 'Để kiểm tra độc lập, so sánh mật độ chung với tích mật độ biên trên toàn miền.']),
      bi(['A triangular support excludes positive-area regions where the marginal product is positive, so factorization fails.', 'Miền tam giác loại một vùng diện tích dương nơi tích biên vẫn dương, nên không phân tích thành tích được.'])
    ],
    primarySolution: [
      bi(['First, $\\int_0^1\\int_0^y2\\,dx\\,dy=\\int_0^1 2y\\,dy=1$, so the joint density is normalized.', 'Trước hết, $\\int_0^1\\int_0^y2\\,dx\\,dy=\\int_0^1 2y\\,dy=1$, nên mật độ chung đã chuẩn hóa.']),
      bi(['For fixed $x\\in(0,1)$, the support has $x<y<1$, giving $f_X(x)=\\int_x^1 2\\,dy=2(1-x)$.', 'Với $x\\in(0,1)$ cố định, miền giá có $x<y<1$, nên $f_X(x)=\\int_x^1 2\\,dy=2(1-x)$.']),
      bi(['For fixed $y\\in(0,1)$, the support has $0<x<y$, giving $f_Y(y)=\\int_0^y2\\,dx=2y$.', 'Với $y\\in(0,1)$ cố định, miền giá có $0<x<y$, nên $f_Y(y)=\\int_0^y2\\,dx=2y$.']),
      bi(['The joint density is zero for $x\\ge y$ but $f_X(x)f_Y(y)>0$ there for interior points; hence the variables are dependent.', 'Mật độ chung bằng không khi $x\\ge y$ nhưng $f_X(x)f_Y(y)>0$ tại các điểm trong miền đó; vì vậy hai biến phụ thuộc.'])
    ],
    companions: [
      q(['A joint density equals $2$ on the triangle $0<y<x<1$. Find both marginals and decide whether the variables are independent.', 'Mật độ chung bằng $2$ trên tam giác $0<y<x<1$. Tìm hai mật độ biên và xác định các biến có độc lập không.'], [
        ['For fixed $x$, integrate $y$ from $0$ to $x$: $f_X(x)=\\int_0^x2\\,dy=2x$.', 'Với $x$ cố định, tích phân $y$ từ $0$ đến $x$: $f_X(x)=\\int_0^x2\\,dy=2x$.'],
        ['For fixed $y$, integrate $x$ from $y$ to $1$: $f_Y(y)=\\int_y^1 2\\,dx=2(1-y)$.', 'Với $y$ cố định, tích phân $x$ từ $y$ đến $1$: $f_Y(y)=\\int_y^1 2\\,dx=2(1-y)$.'],
        ['The triangle excludes $y\\ge x$ although both marginal densities are positive inside $(0,1)$, so the joint cannot factor and the variables are dependent.', 'Tam giác loại $y\\ge x$ dù cả hai mật độ biên dương trong $(0,1)$, nên mật độ chung không thể phân tích và hai biến phụ thuộc.']
      ]),
      q(['A joint density equals $2$ on $x>0,y>0,x+y<1$. Compute the marginals and test independence.', 'Mật độ chung bằng $2$ trên $x>0,y>0,x+y<1$. Tính mật độ biên và kiểm tra độc lập.'], [
        ['For a fixed $x\\in(0,1)$, $0<y<1-x$, so $f_X(x)=\\int_0^{1-x}2\\,dy=2(1-x)$.', 'Với $x\\in(0,1)$ cố định, $0<y<1-x$, nên $f_X(x)=\\int_0^{1-x}2\\,dy=2(1-x)$.'],
        ['By symmetry, $f_Y(y)=2(1-y)$ for $0<y<1$.', 'Do đối xứng, $f_Y(y)=2(1-y)$ với $0<y<1$.'],
        ['The marginals are positive throughout the square interior but the joint vanishes where $x+y\\ge1$, so the variables are dependent.', 'Hai mật độ biên dương trong lòng hình vuông nhưng mật độ chung bằng không khi $x+y\\ge1$, nên hai biến phụ thuộc.']
      ]),
      q(['The joint density is $f(x,y)=1$ on the unit square $0<x<1,0<y<1$. Find the marginals and verify independence.', 'Mật độ chung là $f(x,y)=1$ trên hình vuông đơn vị $0<x<1,0<y<1$. Tìm mật độ biên và xác minh độc lập.'], [
        ['Integrating over $y$ gives $f_X(x)=\\int_0^1 1\\,dy=1$ for $0<x<1$.', 'Tích phân theo $y$ cho $f_X(x)=\\int_0^1 1\\,dy=1$ với $0<x<1$.'],
        ['Integrating over $x$ similarly gives $f_Y(y)=1$ for $0<y<1$.', 'Tương tự, tích phân theo $x$ cho $f_Y(y)=1$ với $0<y<1$.'],
        ['On the whole square, $f_X(x)f_Y(y)=1=f(x,y)$, so the variables are independent.', 'Trên toàn hình vuông, $f_X(x)f_Y(y)=1=f(x,y)$, nên hai biến độc lập.']
      ])
    ],
    reviewNote: 'Checked normalization, variable-specific integration limits, and factorization on the entire support.',
    sourceIds: ['f-6041sc']
  },
  'f-w020-e3': {
    application: bi(['A monotone transformation changes a continuous density by the absolute derivative of the inverse map and carries the support to a new interval.', 'Phép biến đổi đơn điệu đổi mật độ liên tục theo trị tuyệt đối đạo hàm của hàm ngược và chuyển miền giá sang khoảng mới.']),
    formula: bi(['If $g$ is one-to-one and differentiable with differentiable inverse on the support, then $f_Y(y)=f_X(g^{-1}(y))|(g^{-1})\\prime(y)|$ on the transformed support, zero outside.', 'Nếu $g$ một-một và khả vi với hàm ngược khả vi trên miền giá, thì $f_Y(y)=f_X(g^{-1}(y))|(g^{-1})\\prime(y)|$ trên miền giá biến đổi, bằng không ngoài miền.']),
    steps: [
      bi(['Map the original support through $g$ to determine the new support.', 'Ánh xạ miền giá ban đầu qua $g$ để tìm miền giá mới.']),
      bi(['Solve $y=g(x)$ for the inverse $x=g^{-1}(y)$.', 'Giải $y=g(x)$ để tìm hàm ngược $x=g^{-1}(y)$.']),
      bi(['Multiply the original density at the inverse point by the absolute inverse derivative.', 'Nhân mật độ ban đầu tại điểm ngược với trị tuyệt đối đạo hàm hàm ngược.']),
      bi(['Check that the transformed density integrates to one over the new support.', 'Kiểm tra mật độ biến đổi có tích phân bằng một trên miền giá mới.'])
    ],
    primarySolution: [
      bi(['Since $X$ is uniform on $(0,1)$ and $Y=-\\ln X$, the transformed support is $y>0$.', 'Vì $X$ đều trên $(0,1)$ và $Y=-\\ln X$, miền giá biến đổi là $y>0$.']),
      bi(['Invert: $x=e^{-y}$, with $|dx/dy|=e^{-y}$.', 'Đảo hàm: $x=e^{-y}$, với $|dx/dy|=e^{-y}$.']),
      bi(['The original density is $f_X(x)=1$ on $(0,1)$, so $f_Y(y)=1\\cdot e^{-y}=e^{-y}$ for $y>0$.', 'Mật độ ban đầu là $f_X(x)=1$ trên $(0,1)$, nên $f_Y(y)=1\\cdot e^{-y}=e^{-y}$ với $y>0$.']),
      bi(['It is normalized because $\\int_0^\\infty e^{-y}\\,dy=1$.', 'Mật độ chuẩn hóa vì $\\int_0^\\infty e^{-y}\\,dy=1$.'])
    ],
    companions: [
      q(['Let $X$ be uniform on $(0,1)$ and set $Y=X^2$. Find the density and support of $Y$.', 'Cho $X$ đều trên $(0,1)$ và đặt $Y=X^2$. Tìm mật độ và miền giá của $Y$.'], [
        ['The map is increasing on the support, so $0<Y<1$ and the inverse is $x=\\sqrt y$.', 'Ánh xạ tăng trên miền giá, nên $0<Y<1$ và hàm ngược là $x=\\sqrt y$.'],
        ['The inverse derivative is $dx/dy=1/(2\\sqrt y)$, while $f_X(x)=1$.', 'Đạo hàm hàm ngược là $dx/dy=1/(2\\sqrt y)$, còn $f_X(x)=1$.'],
        ['Thus $f_Y(y)=1/(2\\sqrt y)$ for $0<y<1$, and its integral is $[\\sqrt y]_0^1=1$.', 'Vậy $f_Y(y)=1/(2\\sqrt y)$ với $0<y<1$, có tích phân $[\\sqrt y]_0^1=1$.']
      ]),
      q(['If $X$ is uniform on $(0,1)$ and $Y=3X+1$, derive the density and support of $Y$.', 'Nếu $X$ đều trên $(0,1)$ và $Y=3X+1$, hãy suy ra mật độ và miền giá của $Y$.'], [
        ['The increasing map sends $(0,1)$ to $(1,4)$, and its inverse is $x=(y-1)/3$.', 'Ánh xạ tăng đưa $(0,1)$ thành $(1,4)$, và hàm ngược là $x=(y-1)/3$.'],
        ['The inverse derivative has magnitude $|dx/dy|=1/3$.', 'Đạo hàm hàm ngược có độ lớn $|dx/dy|=1/3$.'],
        ['Since $f_X=1$, the transformed density is $f_Y(y)=1/3$ on $(1,4)$; its total mass is $(4-1)/3=1$.', 'Vì $f_X=1$, mật độ biến đổi là $f_Y(y)=1/3$ trên $(1,4)$; tổng khối lượng là $(4-1)/3=1$.']
      ]),
      q(['Let $X$ be uniform on $(0,1)$ and $Y=X/(1-X)$. Find the support and density of $Y$.', 'Cho $X$ đều trên $(0,1)$ và $Y=X/(1-X)$. Tìm miền giá và mật độ của $Y$.'], [
        ['The map is increasing from $(0,1)$ onto $(0,\\infty)$; solving gives $x=y/(1+y)$.', 'Ánh xạ tăng từ $(0,1)$ lên $(0,\\infty)$; giải được $x=y/(1+y)$.'],
        ['Differentiate the inverse: $dx/dy=1/(1+y)^2$.', 'Lấy đạo hàm hàm ngược: $dx/dy=1/(1+y)^2$.'],
        ['With $f_X=1$, $f_Y(y)=1/(1+y)^2$ for $y>0$; the integral $\\int_0^\\infty(1+y)^{-2}\\,dy=1$ confirms normalization.', 'Với $f_X=1$, $f_Y(y)=1/(1+y)^2$ khi $y>0$; tích phân $\\int_0^\\infty(1+y)^{-2}\\,dy=1$ xác nhận chuẩn hóa.']
      ])
    ],
    reviewNote: 'Checked monotonicity, transformed supports, inverse derivatives, and density normalization in each example.',
    sourceIds: ['f-6041sc']
  },
  'f-w020-e4': {
    application: bi(['A conditional density renormalizes a joint density along the slice where the conditioning variable is fixed.', 'Mật độ có điều kiện chuẩn hóa lại mật độ chung trên lát cắt khi cố định biến điều kiện.']),
    formula: bi(['When $f_Y(y)>0$, $f_{X\\mid Y}(x\\mid y)=f(x,y)/f_Y(y)$ on the conditional support; it must integrate to $1$ in $x$.', 'Khi $f_Y(y)>0$, $f_{X\\mid Y}(x\\mid y)=f(x,y)/f_Y(y)$ trên miền có điều kiện; mật độ phải tích phân bằng $1$ theo $x$.']),
    steps: [
      bi(['Find the marginal density of the conditioning variable by integrating the joint density.', 'Tìm mật độ biên của biến điều kiện bằng cách tích phân mật độ chung.']),
      bi(['Restrict to conditioning values with positive marginal density.', 'Chỉ xét giá trị điều kiện có mật độ biên dương.']),
      bi(['Divide the joint density by that marginal on the corresponding slice of the support.', 'Chia mật độ chung cho mật độ biên trên lát cắt tương ứng của miền giá.']),
      bi(['Integrate the conditional density over its allowed variable range to verify it is normalized.', 'Tích phân mật độ có điều kiện trên miền biến được phép để xác minh chuẩn hóa.'])
    ],
    primarySolution: [
      bi(['The joint density is $2$ on $0<x<y<1$; integrating $x$ from $0$ to $y$ gives $f_Y(y)=2y$ for $0<y<1$.', 'Mật độ chung bằng $2$ trên $0<x<y<1$; tích phân $x$ từ $0$ đến $y$ cho $f_Y(y)=2y$ với $0<y<1$.']),
      bi(['For a fixed $0<y<1$, $f_Y(y)=2y>0$, and the conditional support is $0<x<y$.', 'Với $0<y<1$ cố định, $f_Y(y)=2y>0$, còn miền có điều kiện là $0<x<y$.']),
      bi(['Divide: $f_{X\\mid Y}(x\\mid y)=2/(2y)=1/y$ on that interval.', 'Chia được $f_{X\\mid Y}(x\\mid y)=2/(2y)=1/y$ trên khoảng đó.']),
      bi(['Normalization holds: $\\int_0^y(1/y)\\,dx=1$.', 'Chuẩn hóa đúng: $\\int_0^y(1/y)\\,dx=1$.'])
    ],
    companions: [
      q(['For joint density $2$ on $0<x<y<1$, find the conditional density of $Y$ given $X=x$, for $0<x<1$.', 'Với mật độ chung bằng $2$ trên $0<x<y<1$, tìm mật độ có điều kiện của $Y$ khi biết $X=x$, với $0<x<1$.'], [
        ['For fixed $x$, integrate over $x<y<1$ to get $f_X(x)=2(1-x)>0$.', 'Với $x$ cố định, tích phân trên $x<y<1$ cho $f_X(x)=2(1-x)>0$.'],
        ['Divide the joint density by that marginal: $f_{Y\\mid X}(y\\mid x)=2/[2(1-x)]=1/(1-x)$ for $x<y<1$.', 'Chia mật độ chung cho mật độ biên: $f_{Y\\mid X}(y\\mid x)=2/[2(1-x)]=1/(1-x)$ khi $x<y<1$.'],
        ['Its integral is $\\int_x^1(1/(1-x))\\,dy=1$, verifying normalization.', 'Tích phân là $\\int_x^1(1/(1-x))\\,dy=1$, xác nhận chuẩn hóa.']
      ]),
      q(['A joint density is $2$ on $0<y<x<1$. Find the conditional density of $Y$ given $X=x$.', 'Mật độ chung bằng $2$ trên $0<y<x<1$. Tìm mật độ có điều kiện của $Y$ khi biết $X=x$.'], [
        ['Integrating over $0<y<x$ gives the marginal $f_X(x)=2x$ for $0<x<1$.', 'Tích phân trên $0<y<x$ cho mật độ biên $f_X(x)=2x$ với $0<x<1$.'],
        ['For fixed positive $x$, divide: $f_{Y\\mid X}(y\\mid x)=2/(2x)=1/x$ on $0<y<x$.', 'Với $x$ dương cố định, chia được $f_{Y\\mid X}(y\\mid x)=2/(2x)=1/x$ trên $0<y<x$.'],
        ['The conditional mass is $\\int_0^x(1/x)\\,dy=1$.', 'Khối lượng có điều kiện là $\\int_0^x(1/x)\\,dy=1$.']
      ]),
      q(['On the unit square, let $f(x,y)=2y$ for $0<x<1,0<y<1$. Find $f_{X\\mid Y}(x\\mid y)$ and decide whether $X,Y$ are independent.', 'Trên hình vuông đơn vị, cho $f(x,y)=2y$ với $0<x<1,0<y<1$. Tìm $f_{X\\mid Y}(x\\mid y)$ và xác định $X,Y$ có độc lập không.'], [
        ['Integrating over $x$ gives $f_Y(y)=\\int_0^1 2y\\,dx=2y>0$ for $0<y<1$.', 'Tích phân theo $x$ cho $f_Y(y)=\\int_0^1 2y\\,dx=2y>0$ với $0<y<1$.'],
        ['Divide to obtain $f_{X\\mid Y}(x\\mid y)=2y/(2y)=1$ on $0<x<1$.', 'Chia được $f_{X\\mid Y}(x\\mid y)=2y/(2y)=1$ trên $0<x<1$.'],
        ['Also $f_X(x)=1$ and $f_X(x)f_Y(y)=2y=f(x,y)$ on the square, so the variables are independent.', 'Ngoài ra $f_X(x)=1$ và $f_X(x)f_Y(y)=2y=f(x,y)$ trên hình vuông, nên hai biến độc lập.']
      ])
    ],
    reviewNote: 'Verified each positive marginal denominator, conditional support, and integral-one check.',
    sourceIds: ['f-6041sc']
  },
  'f-w020-e5': {
    application: bi(['Symmetry can cancel a covariance even when one variable is fully determined by another; test dependence separately from covariance.', 'Đối xứng có thể triệt tiêu hiệp phương sai dù một biến được xác định hoàn toàn bởi biến kia; hãy kiểm tra phụ thuộc riêng.']),
    formula: bi(['If $X\\sim\\operatorname{Uniform}(-1,1)$ and $Y=X^2$, then $E[X]=E[X^3]=0$, $E[Y]=1/3$, and $\\operatorname{Cov}(X,Y)=E[X^3]-E[X]E[Y]=0$.', 'Nếu $X\\sim\\operatorname{Uniform}(-1,1)$ và $Y=X^2$, thì $E[X]=E[X^3]=0$, $E[Y]=1/3$ và $\\operatorname{Cov}(X,Y)=E[X^3]-E[X]E[Y]=0$.']),
    steps: [
      bi(['Use symmetry to compute the odd moment $E[X]$ and the moment $E[X^3]$.', 'Dùng đối xứng để tính moment lẻ $E[X]$ và moment $E[X^3]$.']),
      bi(['Compute $E[Y]$ and substitute into the covariance formula.', 'Tính $E[Y]$ rồi thế vào công thức hiệp phương sai.']),
      bi(['Find events whose relationship is determined by $Y=X^2$ and compare their intersection with the product.', 'Tìm các biến cố có quan hệ xác định bởi $Y=X^2$ rồi so sánh giao với tích xác suất.'])
    ],
    primarySolution: [
      bi(['The uniform density is $1/2$ on $[-1,1]$, so symmetry gives $E[X]=0$ and $E[X^3]=0$.', 'Mật độ đều bằng $1/2$ trên $[-1,1]$, nên đối xứng cho $E[X]=0$ và $E[X^3]=0$.']),
      bi(['Also $E[Y]=E[X^2]=\\frac12\\int_{-1}^1x^2\\,dx=1/3$.', 'Ngoài ra $E[Y]=E[X^2]=\\frac12\\int_{-1}^1x^2\\,dx=1/3$.']),
      bi(['Since $XY=X^3$, covariance is $E[X^3]-E[X]E[Y]=0$.', 'Vì $XY=X^3$, hiệp phương sai là $E[X^3]-E[X]E[Y]=0$.']),
      bi(['The events $\\{|X|\\le1/2\\}$ and $\\{Y\\le1/4\\}$ coincide and each has probability $1/2$, so their intersection is $1/2\\ne1/4$; thus the variables are dependent.', 'Hai biến cố $\\{|X|\\le1/2\\}$ và $\\{Y\\le1/4\\}$ trùng nhau, mỗi biến cố có xác suất $1/2$, nên giao là $1/2\\ne1/4$; do đó hai biến phụ thuộc.'])
    ],
    companions: [
      q(['Let $X$ be uniform on $[-1,1]$ and $Y=|X|$. Show the covariance is zero but the variables are dependent.', 'Cho $X$ đều trên $[-1,1]$ và $Y=|X|$. Chứng minh hiệp phương sai bằng không nhưng hai biến phụ thuộc.'], [
        ['Symmetry gives $E[X]=0$ and $E[X|X|]=0$, so $\\operatorname{Cov}(X,Y)=0$.', 'Đối xứng cho $E[X]=0$ và $E[X|X|]=0$, nên $\\operatorname{Cov}(X,Y)=0$.'],
        ['Let $A=\\{X>1/2\\}$ and $B=\\{Y>1/2\\}$. Their probabilities are $1/4$ and $1/2$.', 'Đặt $A=\\{X>1/2\\}$ và $B=\\{Y>1/2\\}$. Xác suất của chúng là $1/4$ và $1/2$.'],
        ['Their intersection has probability $1/4$, not $(1/4)(1/2)=1/8$, so the variables are dependent.', 'Giao có xác suất $1/4$, khác $(1/4)(1/2)=1/8$, nên hai biến phụ thuộc.']
      ]),
      q(['Let $X,Y$ be independent uniform variables on $(0,1)$. Compute their covariance and explain what the joint density shows.', 'Cho $X,Y$ độc lập và đều trên $(0,1)$. Tính hiệp phương sai và giải thích mật độ chung cho thấy điều gì.'], [
        ['Each mean is $1/2$, and independence gives $E[XY]=E[X]E[Y]=1/4$.', 'Mỗi kỳ vọng bằng $1/2$, còn tính độc lập cho $E[XY]=E[X]E[Y]=1/4$.'],
        ['Thus $\\operatorname{Cov}(X,Y)=1/4-(1/2)(1/2)=0$.', 'Vậy $\\operatorname{Cov}(X,Y)=1/4-(1/2)(1/2)=0$.'],
        ['The joint density is $1=f_X(x)f_Y(y)$ on the unit square, directly verifying independence.', 'Mật độ chung bằng $1=f_X(x)f_Y(y)$ trên hình vuông đơn vị, trực tiếp xác minh độc lập.']
      ]),
      q(['Let $X$ be uniform on $[-1,1]$ and $Y=2X+1$. Find the covariance and infer dependence.', 'Cho $X$ đều trên $[-1,1]$ và $Y=2X+1$. Tìm hiệp phương sai và suy ra sự phụ thuộc.'], [
        ['Here $E[X]=0$ and $\\operatorname{Var}(X)=1/3$.', 'Ở đây $E[X]=0$ và $\\operatorname{Var}(X)=1/3$.'],
        ['Since adding a constant does not affect covariance, $\\operatorname{Cov}(X,Y)=\\operatorname{Cov}(X,2X+1)=2\\operatorname{Var}(X)=2/3$.', 'Cộng hằng số không đổi hiệp phương sai, nên $\\operatorname{Cov}(X,Y)=\\operatorname{Cov}(X,2X+1)=2\\operatorname{Var}(X)=2/3$.'],
        ['A nonzero covariance rules out independence, so $X,Y$ are dependent.', 'Hiệp phương sai khác không loại trừ độc lập, nên $X,Y$ phụ thuộc.']
      ])
    ],
    reviewNote: 'Checked the symmetric integrals and event products; covariance and independence are evaluated by separate criteria.',
    sourceIds: ['f-6041sc']
  },
  'f-w021-e1': {
    application: bi(['Markov converts a finite mean of a nonnegative quantity into an upper bound on the chance it reaches a positive threshold.', 'Markov chuyển kỳ vọng hữu hạn của đại lượng không âm thành cận trên cho xác suất đạt ngưỡng dương.']),
    formula: bi(['If $X\\ge0$ almost surely, $E[X]<\\infty$, and $t>0$, then $P(X\\ge t)\\le E[X]/t$.', 'Nếu $X\\ge0$ hầu chắc chắn, $E[X]<\\infty$ và $t>0$, thì $P(X\\ge t)\\le E[X]/t$.']),
    steps: [
      bi(['Use the pointwise inequality $X\\ge t\\mathbf1_{\\{X\\ge t\\}}$, which relies on nonnegativity outside the event.', 'Dùng bất đẳng thức điểm $X\\ge t\\mathbf1_{\\{X\\ge t\\}}$, cần tính không âm ở ngoài biến cố.']),
      bi(['Take expectations to get $E[X]\\ge tP(X\\ge t)$.', 'Lấy kỳ vọng được $E[X]\\ge tP(X\\ge t)$.']),
      bi(['Divide by the positive threshold $t$; the finite-mean condition makes the bound meaningful.', 'Chia cho ngưỡng dương $t$; điều kiện kỳ vọng hữu hạn làm cận có ý nghĩa.']),
      bi(['Equality can occur when $X$ takes only $0$ and $t$.', 'Dấu bằng có thể xảy ra khi $X$ chỉ nhận $0$ và $t$.'])
    ],
    primarySolution: [
      bi(['The random variable is nonnegative with $E[X]=5$, and the threshold is $t=20>0$.', 'Biến ngẫu nhiên không âm có $E[X]=5$, còn ngưỡng là $t=20>0$.']),
      bi(['Markov’s inequality gives $P(X\\ge20)\\le E[X]/20$.', 'Bất đẳng thức Markov cho $P(X\\ge20)\\le E[X]/20$.']),
      bi(['Substitute the mean: $P(X\\ge20)\\le5/20=1/4$.', 'Thế kỳ vọng: $P(X\\ge20)\\le5/20=1/4$.']),
      bi(['This bound is sharp: if $X=20$ with probability $1/4$ and $X=0$ otherwise, then $E[X]=5$ and the tail probability equals $1/4$.', 'Cận này đạt được: nếu $X=20$ với xác suất $1/4$ và $X=0$ nếu không, thì $E[X]=5$ và xác suất đuôi đúng bằng $1/4$.'])
    ],
    companions: [
      q(['A nonnegative random variable has mean $12$. Bound $P(X\\ge20)$ using Markov and state all required hypotheses.', 'Biến ngẫu nhiên không âm có trung bình $12$. Dùng Markov chặn $P(X\\ge20)$ và nêu các giả thiết cần thiết.'], [
        ['The variable is nonnegative and has finite mean $E[X]=12$; the threshold $20$ is positive.', 'Biến không âm và có kỳ vọng hữu hạn $E[X]=12$; ngưỡng $20$ dương.'],
        ['Markov gives $P(X\\ge20)\\le12/20$.', 'Markov cho $P(X\\ge20)\\le12/20$.'],
        ['Reduce the fraction: $12/20=3/5=0.6$.', 'Rút gọn phân số: $12/20=3/5=0.6$.']
      ]),
      q(['Let $Z\\ge0$ with $E[Z]=6$. Find Markov’s bound for $P(Z\\ge15)$ and interpret it.', 'Cho $Z\\ge0$ với $E[Z]=6$. Tìm cận Markov cho $P(Z\\ge15)$ và diễn giải.'], [
        ['The hypotheses hold: $Z$ is nonnegative, its mean is finite, and $15>0$.', 'Các giả thiết đúng: $Z$ không âm, kỳ vọng hữu hạn và $15>0$.'],
        ['The bound is $P(Z\\ge15)\\le E[Z]/15=6/15$.', 'Cận là $P(Z\\ge15)\\le E[Z]/15=6/15$.'],
        ['Thus $P(Z\\ge15)\\le2/5=0.4$; it is a guarantee, not an estimate of the exact probability.', 'Vậy $P(Z\\ge15)\\le2/5=0.4$; đây là bảo đảm cận trên, không phải ước lượng xác suất chính xác.']
      ]),
      q(['A nonnegative variable equals $30$ with probability $0.2$ and $0$ otherwise. Check Markov’s bound at threshold $30$ and test equality.', 'Biến không âm bằng $30$ với xác suất $0.2$ và bằng $0$ nếu không. Kiểm tra cận Markov tại ngưỡng $30$ và xét dấu bằng.'], [
        ['Its mean is $E[X]=30(0.2)+0(0.8)=6$.', 'Kỳ vọng là $E[X]=30(0.2)+0(0.8)=6$.'],
        ['Markov gives $P(X\\ge30)\\le6/30=0.2$.', 'Markov cho $P(X\\ge30)\\le6/30=0.2$.'],
        ['The exact tail probability is $0.2$, so equality holds for this two-point distribution.', 'Xác suất đuôi chính xác là $0.2$, nên phân phối hai điểm này đạt dấu bằng.']
      ])
    ],
    reviewNote: 'Checked nonnegativity, finite mean, positive thresholds, and the equality example directly.',
    sourceIds: ['f-6041sc']
  },
  'f-w021-e2': {
    application: bi(['Chebyshev uses variance alone to guarantee a sample-mean error rate, so it gives a distribution-free sample-size design when observations are independent.', 'Chebyshev chỉ dùng phương sai để bảo đảm xác suất sai số trung bình mẫu, nên thiết kế cỡ mẫu không phụ thuộc phân phối khi các quan sát độc lập.']),
    formula: bi(['For IID observations with finite variance $\\sigma^2$, $\\operatorname{Var}(\\bar X)=\\sigma^2/n$ and for $\\varepsilon>0$, $P(|\\bar X-\\mu|\\ge\\varepsilon)\\le\\sigma^2/(n\\varepsilon^2)$.', 'Với quan sát IID có phương sai hữu hạn $\\sigma^2$, $\\operatorname{Var}(\\bar X)=\\sigma^2/n$ và với $\\varepsilon>0$, $P(|\\bar X-\\mu|\\ge\\varepsilon)\\le\\sigma^2/(n\\varepsilon^2)$.']),
    steps: [
      bi(['Use independence and the common variance to get $\\operatorname{Var}(\\bar X)=\\sigma^2/n$.', 'Dùng tính độc lập và phương sai chung để có $\\operatorname{Var}(\\bar X)=\\sigma^2/n$.']),
      bi(['Apply Chebyshev at the positive error threshold $\\varepsilon$.', 'Áp dụng Chebyshev tại ngưỡng sai số dương $\\varepsilon$.']),
      bi(['Set the resulting bound no larger than the target failure probability.', 'Đặt cận thu được không lớn hơn xác suất thất bại mục tiêu.']),
      bi(['Solve for $n$ and round up to the next integer if necessary.', 'Giải theo $n$ và làm tròn lên số nguyên kế tiếp nếu cần.'])
    ],
    primarySolution: [
      bi(['With IID variance $16$, independence gives $\\operatorname{Var}(\\bar X)=16/n$.', 'Với phương sai IID bằng $16$, tính độc lập cho $\\operatorname{Var}(\\bar X)=16/n$.']),
      bi(['At error threshold $\\varepsilon=0.2$, Chebyshev gives $P(|\\bar X-\\mu|\\ge0.2)\\le(16/n)/(0.2)^2=400/n$.', 'Tại ngưỡng sai số $\\varepsilon=0.2$, Chebyshev cho $P(|\\bar X-\\mu|\\ge0.2)\\le(16/n)/(0.2)^2=400/n$.']),
      bi(['To make the bound at most $0.01$, require $400/n\\le0.01$.', 'Để cận không quá $0.01$, cần $400/n\\le0.01$.']),
      bi(['Solving yields $n\\ge40000$ observations.', 'Giải được $n\\ge40000$ quan sát.'])
    ],
    companions: [
      q(['IID observations have variance $9$. How large must $n$ be so Chebyshev guarantees $P(|\\bar X-\\mu|\\ge0.3)\\le0.05$?', 'Các quan sát IID có phương sai $9$. Cần $n$ ít nhất bao nhiêu để Chebyshev bảo đảm $P(|\\bar X-\\mu|\\ge0.3)\\le0.05$?'], [
        ['The sample-mean variance is $9/n$, and Chebyshev divides it by $(0.3)^2=0.09$.', 'Phương sai trung bình mẫu là $9/n$, rồi Chebyshev chia cho $(0.3)^2=0.09$.'],
        ['The upper bound is $(9/n)/0.09=100/n$.', 'Cận trên là $(9/n)/0.09=100/n$.'],
        ['Require $100/n\\le0.05$, giving $n\\ge2000$.', 'Cần $100/n\\le0.05$, suy ra $n\\ge2000$.']
      ]),
      q(['IID observations have variance $4$. Find the minimum sample size that makes the Chebyshev bound for error at least $0.5$ no more than $0.02$.', 'Các quan sát IID có phương sai $4$. Tìm cỡ mẫu nhỏ nhất để cận Chebyshev cho sai số ít nhất $0.5$ không quá $0.02$.'], [
        ['The bound is $4/(n(0.5)^2)=16/n$.', 'Cận là $4/(n(0.5)^2)=16/n$.'],
        ['Set $16/n\\le0.02$ and solve by multiplying both sides by $n>0$.', 'Đặt $16/n\\le0.02$ rồi nhân hai vế với $n>0$ để giải.'],
        ['This gives $n\\ge800$, so $800$ is the minimum integer sample size.', 'Suy ra $n\\ge800$, nên cỡ mẫu nguyên nhỏ nhất là $800$.']
      ]),
      q(['Four independent observations have variances $1,4,1,2$. Find the variance of their sample mean and Chebyshev’s bound for error at least $2$.', 'Bốn quan sát độc lập có phương sai $1,4,1,2$. Tìm phương sai trung bình mẫu và cận Chebyshev cho sai số ít nhất $2$.'], [
        ['For independent but not necessarily identical observations, $\\operatorname{Var}(\\bar X)=\\sum_i\\operatorname{Var}(X_i)/4^2$.', 'Với các quan sát độc lập nhưng không nhất thiết cùng phân phối, $\\operatorname{Var}(\\bar X)=\\sum_i\\operatorname{Var}(X_i)/4^2$.'],
        ['The variance is $(1+4+1+2)/16=8/16=1/2$.', 'Phương sai là $(1+4+1+2)/16=8/16=1/2$.'],
        ['Chebyshev gives $P(|\\bar X-E\\bar X|\\ge2)\\le(1/2)/2^2=1/8$.', 'Chebyshev cho $P(|\\bar X-E\\bar X|\\ge2)\\le(1/2)/2^2=1/8$.']
      ])
    ],
    reviewNote: 'Checked that IID is used for the primary variance reduction, then used the general independent-variance sum in the fourth companion; sample sizes are rounded upward.',
    sourceIds: ['f-6041sc']
  },
  'f-w021-e3': {
    application: bi(['Chebyshev provides a distribution-free upper bound, not a substitute for computing an exact probability; its bound can be tight or vacuous.', 'Chebyshev cho cận trên không phụ thuộc phân phối, không thay thế việc tính xác suất chính xác; cận có thể chặt hoặc vô ích.']),
    formula: bi(['If $E[X]=\\mu$, $\\operatorname{Var}(X)=\\sigma^2<\\infty$, and $t>0$, then $P(|X-\\mu|\\ge t)\\le\\min(1,\\sigma^2/t^2)$.', 'Nếu $E[X]=\\mu$, $\\operatorname{Var}(X)=\\sigma^2<\\infty$ và $t>0$, thì $P(|X-\\mu|\\ge t)\\le\\min(1,\\sigma^2/t^2)$.']),
    steps: [
      bi(['Compute the mean and finite variance, then identify the positive deviation threshold.', 'Tính trung bình, phương sai hữu hạn rồi xác định ngưỡng độ lệch dương.']),
      bi(['Find the exact event probability separately if the distribution is specified.', 'Tính riêng xác suất biến cố chính xác nếu phân phối đã cho.']),
      bi(['Compute the Chebyshev ratio $\\sigma^2/t^2$ and cap it at one.', 'Tính tỷ số Chebyshev $\\sigma^2/t^2$ và chặn trên bởi một.']),
      bi(['Compare the bound with the exact probability; a valid upper bound need not be close.', 'So sánh cận với xác suất chính xác; cận trên đúng không nhất thiết gần.'])
    ],
    primarySolution: [
      bi(['For Bernoulli$(0.5)$, the mean is $\\mu=0.5$ and the variance is $\\sigma^2=0.25$.', 'Với Bernoulli$(0.5)$, trung bình là $\\mu=0.5$ và phương sai là $\\sigma^2=0.25$.']),
      bi(['At $t=0.5$, both outcomes are exactly $0.5$ from the mean, so the event has probability $1$.', 'Tại $t=0.5$, cả hai kết quả cách trung bình đúng $0.5$, nên biến cố có xác suất $1$.']),
      bi(['Chebyshev gives $\\min(1,0.25/(0.5)^2)=1$, which is exact at this threshold.', 'Chebyshev cho $\\min(1,0.25/(0.5)^2)=1$, đúng bằng xác suất tại ngưỡng này.']),
      bi(['At $t=0.4$, the exact probability remains $1$ but the raw ratio is $0.25/(0.4)^2=25/16>1$; after capping, the bound is the vacuous value $1$, not an estimate.', 'Tại $t=0.4$, xác suất chính xác vẫn là $1$ nhưng tỷ số thô là $0.25/(0.4)^2=25/16>1$; sau khi chặn, cận bằng $1$ vô ích chứ không phải ước lượng.'])
    ],
    companions: [
      q(['Let $X$ be equally likely to be $-1$ or $1$. For threshold $t=1.5$, find the exact deviation probability and the Chebyshev bound.', 'Cho $X$ nhận đều $-1$ hoặc $1$. Với ngưỡng $t=1.5$, tìm xác suất độ lệch chính xác và cận Chebyshev.'], [
        ['The mean is $0$ and variance is $1$.', 'Trung bình bằng $0$ và phương sai bằng $1$.'],
        ['Both outcomes have deviation $1<1.5$, so $P(|X-0|\\ge1.5)=0$.', 'Cả hai kết quả có độ lệch $1<1.5$, nên $P(|X-0|\\ge1.5)=0$.'],
        ['Chebyshev gives $P(|X|\\ge1.5)\\le1/(1.5)^2=4/9$; this valid positive bound is not the exact probability.', 'Chebyshev cho $P(|X|\\ge1.5)\\le1/(1.5)^2=4/9$; cận dương này đúng nhưng không phải xác suất chính xác.']
      ]),
      q(['For $X$ uniform on $[-1,1]$, compare the exact probability $P(|X|\\ge0.9)$ with its Chebyshev bound.', 'Với $X$ đều trên $[-1,1]$, so sánh xác suất chính xác $P(|X|\\ge0.9)$ với cận Chebyshev.'], [
        ['The mean is $0$ and variance is $1/3$.', 'Trung bình bằng $0$ và phương sai bằng $1/3$.'],
        ['The two tail intervals have total length $0.2$ in an interval of length $2$, so the exact probability is $0.1=1/10$.', 'Hai khoảng đuôi có tổng độ dài $0.2$ trong đoạn dài $2$, nên xác suất chính xác là $0.1=1/10$.'],
        ['Chebyshev gives $(1/3)/(0.9)^2=100/243$, a larger upper bound rather than an estimate of the tail.', 'Chebyshev cho $(1/3)/(0.9)^2=100/243$, một cận trên lớn hơn chứ không phải ước lượng xác suất đuôi.']
      ]),
      q(['A Bernoulli variable has success probability $0.2$. For $t=0.9$, compare the exact centered-tail probability and Chebyshev’s bound.', 'Biến Bernoulli có xác suất thành công $0.2$. Với $t=0.9$, so sánh xác suất đuôi quanh trung bình chính xác với cận Chebyshev.'], [
        ['Its mean is $0.2$ and variance is $0.2(0.8)=0.16$.', 'Trung bình là $0.2$ và phương sai là $0.2(0.8)=0.16$.'],
        ['The outcomes differ from the mean by $0.2$ or $0.8$, both below $0.9$, so the exact tail probability is $0$.', 'Các kết quả lệch trung bình $0.2$ hoặc $0.8$, đều dưới $0.9$, nên xác suất đuôi chính xác bằng $0$.'],
        ['The bound is $0.16/(0.9)^2=16/81>0$; it remains only a valid upper bound.', 'Cận là $0.16/(0.9)^2=16/81>0$; nó vẫn chỉ là cận trên đúng.']
      ])
    ],
    reviewNote: 'Preserved the two source thresholds: the bound is exact at $t=0.5$ and vacuous after capping at $t=0.4$; companion exact probabilities were checked separately.',
    sourceIds: ['f-6041sc']
  },
  'f-w021-e4': {
    application: bi(['Applying Markov to squared deviation gives Chebyshev, with a finite second central moment required for a finite bound.', 'Áp dụng Markov cho bình phương độ lệch cho Chebyshev; cần moment trung tâm bậc hai hữu hạn để có cận hữu hạn.']),
    formula: bi(['If $E[X]=\\mu$, $\\operatorname{Var}(X)<\\infty$, and $t>0$, then $P(|X-\\mu|\\ge t)=P((X-\\mu)^2\\ge t^2)\\le\\operatorname{Var}(X)/t^2$.', 'Nếu $E[X]=\\mu$, $\\operatorname{Var}(X)<\\infty$ và $t>0$, thì $P(|X-\\mu|\\ge t)=P((X-\\mu)^2\\ge t^2)\\le\\operatorname{Var}(X)/t^2$.']),
    steps: [
      bi(['For $t>0$, square the absolute-deviation event without changing its meaning.', 'Với $t>0$, bình phương biến cố độ lệch tuyệt đối mà không đổi nội dung.']),
      bi(['The squared deviation $Z=(X-\\mu)^2$ is nonnegative, so Markov applies at threshold $t^2>0$.', 'Bình phương độ lệch $Z=(X-\\mu)^2$ không âm, nên áp dụng Markov tại ngưỡng $t^2>0$.']),
      bi(['Its expectation is $E[Z]=\\operatorname{Var}(X)$, which must be finite for a finite conclusion.', 'Kỳ vọng của nó là $E[Z]=\\operatorname{Var}(X)$, phải hữu hạn để có kết luận hữu hạn.']),
      bi(['Substitute this expectation into Markov’s ratio.', 'Thế kỳ vọng này vào tỷ số Markov.'])
    ],
    primarySolution: [
      bi(['Let $Z=(X-\\mu)^2$. Then $Z\\ge0$ and $E[Z]=\\operatorname{Var}(X)<\\infty$.', 'Đặt $Z=(X-\\mu)^2$. Khi đó $Z\\ge0$ và $E[Z]=\\operatorname{Var}(X)<\\infty$.']),
      bi(['Because $t>0$, $|X-\\mu|\\ge t$ is equivalent to $Z\\ge t^2$.', 'Vì $t>0$, $|X-\\mu|\\ge t$ tương đương $Z\\ge t^2$.']),
      bi(['Apply Markov to $Z$ at positive threshold $t^2$: $P(Z\\ge t^2)\\le E[Z]/t^2$.', 'Áp dụng Markov cho $Z$ tại ngưỡng dương $t^2$: $P(Z\\ge t^2)\\le E[Z]/t^2$.']),
      bi(['Thus $P(|X-\\mu|\\ge t)\\le\\operatorname{Var}(X)/t^2$; finite variance and $t>0$ are essential to the finite bound.', 'Vậy $P(|X-\\mu|\\ge t)\\le\\operatorname{Var}(X)/t^2$; phương sai hữu hạn và $t>0$ cần thiết để có cận hữu hạn.'])
    ],
    companions: [
      q(['A variable has mean $10$ and variance $9$. Use Chebyshev to bound $P(|X-10|\\ge6)$.', 'Một biến có trung bình $10$ và phương sai $9$. Dùng Chebyshev chặn $P(|X-10|\\ge6)$.'], [
        ['The variance is finite and the threshold $6$ is positive, so Chebyshev applies.', 'Phương sai hữu hạn và ngưỡng $6$ dương, nên áp dụng được Chebyshev.'],
        ['The bound is $9/6^2=9/36$.', 'Cận là $9/6^2=9/36$.'],
        ['Reduce to $1/4$; this is an upper bound, not the exact tail probability.', 'Rút gọn thành $1/4$; đây là cận trên, không phải xác suất đuôi chính xác.']
      ]),
      q(['A variable has finite variance $5$. Find the Chebyshev bound at threshold $t=\\sqrt{20}$.', 'Một biến có phương sai hữu hạn $5$. Tìm cận Chebyshev tại ngưỡng $t=\\sqrt{20}$.'], [
        ['The threshold is positive and the variance is finite.', 'Ngưỡng dương và phương sai hữu hạn.'],
        ['Square the threshold: $t^2=20$.', 'Bình phương ngưỡng: $t^2=20$.'],
        ['Chebyshev yields $P(|X-\\mu|\\ge\\sqrt{20})\\le5/20=1/4$.', 'Chebyshev cho $P(|X-\\mu|\\ge\\sqrt{20})\\le5/20=1/4$.']
      ]),
      q(['For $n\\ge1$, define $P(X=n)=c/n^3$, where $c=(\\sum_{n=1}^\\infty n^{-3})^{-1}$. Explain why this law has finite mean but no finite-variance Chebyshev bound.', 'Với $n\\ge1$, định nghĩa $P(X=n)=c/n^3$, trong đó $c=(\\sum_{n=1}^\\infty n^{-3})^{-1}$. Giải thích vì sao luật này có trung bình hữu hạn nhưng không có cận Chebyshev hữu hạn.'], [
        ['The constant $c$ is positive and finite because $\\sum n^{-3}$ converges, so the probabilities sum to one.', 'Hằng số $c$ dương và hữu hạn vì $\\sum n^{-3}$ hội tụ, nên tổng xác suất bằng một.'],
        ['The mean is $E[X]=c\\sum_{n=1}^\\infty n^{-2}<\\infty$.', 'Trung bình là $E[X]=c\\sum_{n=1}^\\infty n^{-2}<\\infty$.'],
        ['But $E[X^2]=c\\sum_{n=1}^\\infty n^{-1}=\\infty$, so the variance is infinite.', 'Nhưng $E[X^2]=c\\sum_{n=1}^\\infty n^{-1}=\\infty$, nên phương sai vô hạn.'],
        ['Markov on squared deviation has an infinite expectation, so it supplies no finite Chebyshev upper bound.', 'Kỳ vọng của bình phương độ lệch trong Markov là vô hạn, nên không cho cận Chebyshev hữu hạn.']
      ])
    ],
    reviewNote: 'Checked the event equivalence for positive thresholds and the finite-variance premise; the heavy-tail example has convergent first-moment and divergent second-moment series.',
    sourceIds: ['f-6041sc']
  },
  'f-w021-e5': {
    application: bi(['A union bound controls the chance that any one of several model components fails by summing their individual upper risks.', 'Cận hợp kiểm soát xác suất có thành phần mô hình nào đó thất bại bằng cách cộng các rủi ro riêng.']),
    formula: bi(['For events $A_1,\\ldots,A_m$, $P(\\bigcup_{i=1}^mA_i)\\le\\sum_{i=1}^mP(A_i)$, regardless of dependence.', 'Với các biến cố $A_1,\\ldots,A_m$, $P(\\bigcup_{i=1}^mA_i)\\le\\sum_{i=1}^mP(A_i)$, bất kể sự phụ thuộc.']),
    steps: [
      bi(['Write the event “at least one failure” as a union.', 'Viết biến cố “ít nhất một lỗi” thành hợp.']),
      bi(['Apply the union bound without assuming independence.', 'Áp dụng cận hợp mà không giả sử độc lập.']),
      bi(['Add the supplied upper probabilities and report the result as a bound.', 'Cộng các xác suất trên đã cho và báo cáo kết quả là một cận.']),
      bi(['Overlap can make the bound loose, but cannot invalidate it.', 'Các biến cố giao nhau có thể làm cận lỏng, nhưng không làm cận mất hiệu lực.'])
    ],
    primarySolution: [
      bi(['Let $A_1,\\ldots,A_5$ be the five component-error events, each with probability at most $0.004$.', 'Gọi $A_1,\\ldots,A_5$ là năm biến cố lỗi thành phần, mỗi biến cố có xác suất không quá $0.004$.']),
      bi(['The event of any error is their union, $\\bigcup_{i=1}^5A_i$.', 'Biến cố có lỗi bất kỳ là hợp $\\bigcup_{i=1}^5A_i$.']),
      bi(['The union bound gives $P(\\bigcup_{i=1}^5A_i)\\le5(0.004)=0.02$.', 'Cận hợp cho $P(\\bigcup_{i=1}^5A_i)\\le5(0.004)=0.02$.']),
      bi(['This guarantee holds regardless of dependence among the components.', 'Bảo đảm này đúng bất kể các thành phần phụ thuộc nhau ra sao.'])
    ],
    companions: [
      q(['Four subsystems have failure probabilities at most $0.01,0.02,0.005,0.015$. Bound the probability that at least one fails.', 'Bốn phân hệ có xác suất lỗi không quá $0.01,0.02,0.005,0.015$. Chặn xác suất có ít nhất một phân hệ lỗi.'], [
        ['The system-failure event is the union of the four subsystem events.', 'Biến cố hệ thống lỗi là hợp của bốn biến cố phân hệ.'],
        ['The union bound is $0.01+0.02+0.005+0.015$.', 'Cận hợp là $0.01+0.02+0.005+0.015$.'],
        ['The sum is $0.05$, so the probability of any failure is at most $0.05$.', 'Tổng là $0.05$, nên xác suất có lỗi bất kỳ không quá $0.05$.']
      ]),
      q(['Three error events each have probability $0.004$ and are identical. Compare the exact union probability with the union bound.', 'Ba biến cố lỗi cùng có xác suất $0.004$ và trùng nhau. So sánh xác suất hợp chính xác với cận hợp.'], [
        ['The union bound gives $P(A_1\\cup A_2\\cup A_3)\\le3(0.004)=0.012$.', 'Cận hợp cho $P(A_1\\cup A_2\\cup A_3)\\le3(0.004)=0.012$.'],
        ['Since the events are identical, their union is one event and has exact probability $0.004$.', 'Vì các biến cố trùng nhau, hợp chỉ là một biến cố và có xác suất chính xác $0.004$.'],
        ['The bound is valid but loose because overlap is complete; no independence assumption was used.', 'Cận đúng nhưng lỏng vì giao nhau hoàn toàn; không dùng giả thiết độc lập.']
      ]),
      q(['Five failure events are pairwise disjoint and each has probability $0.004$. Find the exact union probability and check the bound.', 'Năm biến cố lỗi đôi một rời nhau và mỗi biến cố có xác suất $0.004$. Tìm xác suất hợp chính xác và kiểm tra cận.'], [
        ['Disjointness makes the probability of the union the sum of the five probabilities.', 'Tính rời nhau làm xác suất hợp bằng tổng năm xác suất.'],
        ['The exact value is $5(0.004)=0.02$.', 'Giá trị chính xác là $5(0.004)=0.02$.'],
        ['The union bound gives the same value, so it is sharp in this disjoint case.', 'Cận hợp cho cùng giá trị, nên đạt dấu bằng trong trường hợp rời nhau này.']
      ])
    ],
    reviewNote: 'Checked the five-event sum and both overlap extremes: identical events make a loose bound, while disjoint events attain it.',
    sourceIds: ['f-6041sc']
  },
};
export default reviewed;
