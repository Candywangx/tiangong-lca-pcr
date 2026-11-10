---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.injection-moulded-mechanical-construction-toy-set
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: reviewed
---

# 完整注塑机械拼搭玩具套装制造

## 1. 范围与适用性

制造一份配置完整的机械塑料拼搭玩具套装，含真实规定的互锁玩具元件及实际已装配机械子部件，起点为外购完整热塑性粒料制剂及明确识别的成品组件供货。纳入接收/仓储、输送、真实调湿、仅独立供料时的配色、熔融塑化、充模/保压、冷却/脱模、浇口飞边修整、受控内部回磨、真实元件装饰/干燥、部件装配、计数配齐、功能说明以及整套检查和唯一首次质量放行。实际发生的销售盒/内袋包装纳入，但包装质量排除净玩具Q。来源：lego-whole-set-process; lego-material-purpose; lego-profile-manufacturing; ifc-plastic-products-2007。

这是厂家整套路线与一般非反应塑料/环境指南的透明技术综合；独立ILCD仅支持有条件的归因建模。LEGO来源同属一个出版者，不是独立工厂证据，也不声称同一当代SKU/订单。材料用途实例说明并非每个元件都是ABS：HIPS、PA、arMABS、MTPO、PC、bio-PE、POM、PP、TPU、SEBS、TP为全ABS配方的相邻反例，不是必需组分；各卡由真实等级、配方、自制/外购记录决定。厂家温度、压力、周期、测试力/高度、组分比例、件数和耐用描述均非PCR默认值或证书。不提供默认密度、套重、良率、寿命、年龄等级或排放因子；IFC潜在烟气实例不证明正常运行实际分子排放。

排除电动火车/轨道信号系统、电动机、电池、照明、无线/遥控、动力车辆、以反应热固性工艺为主的路线、金属/木质主体构建套件、以单个备件积木为终端、通用树脂制造、以注塑机/模具制造为终端、外购整套成品重新包装、拼图、使用和终寿。此较窄路线不证明适用于整个分类。真实新增聚合物、外供组件、燃料、制冷剂、化学品、印刷/胶、包装、水相及废物出口，须以各自有证据原子流补入，不能藏进other-material或零值集合；否则具体数据集不完整。

UN CPC3.0解释性注释38540还包括电动/非电动玩具车辆及附件、非电动玩具马达、娱乐缩尺模型及其套件和娱乐全尺寸复制品，明确排除电动玩具马达。本法在较宽类别内选择有证据的构建套装/积木路线；邻近拼图和其他玩具类别不能替代完整拼搭套装。来源：un-cpc3-38540-scope。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.injection-moulded-mechanical-construction-toy-set |
| classification_refs | CPC 3.0 38540; narrower product and route boundary |
| covered_products | 真实必需内容齐全的完整机械热塑性拼搭套装 |
| excluded_products | 排除电动火车/轨道信号系统、电动机、电池、照明、无线/遥控、动力车辆、以反应热固性工艺为主的路线、金属/木质主体构建套件、以单个备件积木为终端、通用树脂制造、以注塑机/模具制造为终端、外购整套成品重新包装、拼图、使用和终寿。此较窄路线不证明适用于整个分类。真实新增聚合物、外供组件、燃料、制冷剂、化学品、印刷/胶、包装、水相及废物出口，须以各自有证据原子流补入，不能藏进other-material或零值集合；否则具体数据集不完整。 |
| representative_product | 一份规定配置完整拼搭积木套装，不是单个松散积木 |
| production_route | 真实粒料制剂及明示成品组件；调湿/混配；注塑；真实装饰/组件装配；整套配齐及首次放行 |
| market_state | 完整首次质量放行套装；原cohort门内真实观测服务另计 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一份完整配置机械拼搭游戏系统 |
| How much | 1 kg新增首次放行完整套装净内容；等质量不代表等游戏功能/性能 |
| How well | 规定元件及真实子总成齐全；真实功能说明；厂家规格、实际测试及验收/处置，不设PCR性能等级 |
| How long or cycle | 一次唯一首次放行制造cohort；使用寿命排除；真实后续服务用原Q_H及观测H |
| reference_flow_link | finished_release |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 玩具电动火车及其轨道、信号灯和其他配件，缩小尺寸（"比例"）模型组装套件和其他建筑套件及建筑玩具 `2bd3de2a-c26e-4e9b-a00e-f1ec12763eea` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 完整套装配置及必需元件数量; 各元件真实材料/等级及自制外购状态; 完整供货制剂和含水; 实际注塑/装饰/组件装配路线; 纸质说明书纳入情况及净内容边界; 明确排除的电气功能; 供方场址及上游边界; 唯一首次放行身份/时点及真实验收规格/测试; 校准完整净质量及包装皮重; 原料/WIP/非WIP继承逐交换向量; 真实湿库存及实物毛事件; 包装池和上游所有权; 原cohort Q_H及观测服务区间H; 真实provider/原生限制和未解决身份 |

该原生 Product flow 是工厂生产混合的已制造构建玩具产品族；完整原生范围包括玩具车辆及附件、非电动玩具马达/蒸汽机、娱乐缩尺模型、模型材料零件套件以及构建套装/积木，排除电动玩具马达。本参考角色仅代表一种配置齐全的机械塑料拼搭套装：所有必需玩具元件、实际已装配子部件、固着装饰和随附的功能性纸质说明书，经唯一首次放行。树脂、单个备件积木、模具、火车零件或仅待重新包装的外购整套成品均不能占据该角色。宽泛身份不固定CAS、聚合物配方、等级、地理、尺寸、年龄、性能或电气设备；必须核对真实整套规格及上游边界。

上述每项限定信息必须在具体数据包中声明。

Q0是唯一首次验收事件账：每真实完整套装净质量及配置锁定至原套装批次身份。制造Q=Q0，后续原Q_H=Q0；不以当前交付退回损坏收缩或改装质量替代历史验收质量。全部原验收身份按原验收质量划入互斥净剩余交付、全部真实厂内已验收状态（含存储留置样品损坏退回重工）、不可逆整套损失及其他终端处置；所有真实状态出口保持可见。仅证实其他验收后状态出口全不存在时可用交付加期末FG简化桥。水零件油墨纸张局部损失是独立实物变化，不补回幸存物又加出口。退回复用重验重工再次放行不造新Q0。全部当前原料WIP/FG/资产/容器湿存量及实物转移独立于原事件账。即使套装全消失，服务仍保留原Q0；零或未知基准保留原量无单位结果。

真实采购整份制剂整件只链接一个真实完整生产者清单，或互斥展开其真实制造历史。供应成品元件只替代自身已完成作业，不替代其后整套制造；生产者须含与交付状态相应的真实材料准备成型装饰子装配公用损失废物接口。真实现场配制印刷干燥成型公用生产或受控外协，即使组织上称上游也仍纳入。UUID、发票或未来SOP承诺本身不供上游负荷或补缺关键分析基质程序。真实未决核心方法仍作hold；软件成功或限定词不悄悄关闭。供方品级及真实事件量独立采集，不编同厂SKU限制、配方得率剂量效率质量寿命。

LEGO工艺及材料用途页面保留为完整实质网页工具文本捕获，不是本地出版者HTML、PDF或OCR；对应本地出版者原件在本证据集中缺失，文本捕获不等于已取得该原件。另有完整出版者Company Profile PDF，作为历史厂家证据支持真实成型加工包装及配料检验语境。三来源属同一出版者，不是独立工厂、共同当前SKU或量化工况资格。IFC是独立非反应型塑料定性筛查，保留项目特定适用及相邻反应型橡胶金属限制，不识别真实工厂分子或量。ILCD仅支持有条件归因方法。完整来源限制保留，不把温压周期件数测试载荷高度材料比例排放因子证书环境优越寿命转为PCR默认。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| first_release_mass | finished_release | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为唯一首次放行完整套装净内容的校准质量之和，配置玩具内容及功能印刷说明书、真实留墨/含水各一次，扣销售/运输包装皮重及拒品，不用目录件数猜质量。 |
| native_quantities | all inventory rows | 各卡真实原生广延属性 | 逐卡原生kg、MJ或m3 | 质量不替代能量/体积；凭独立状态密度/分析一次转换原单位，仅真实速率积分，已积分体积不乘时间，不由次级系数或标称套重/机重推量。 |
| single_denominator | all inventory rows | 各卡原生属性 | 每kg参考产品的原生分子单位 | 采未除原始分子，第8节负责唯一商。负荷A/A_H与实物毛V/V_H分通道，卡/aggregation基准仅引用同一结果，不再除、库存校正或分配实物。Q或Q_H=0保留负荷但不出单位结果。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收门的真实完整热塑性粒料制剂及独立已完成组件供货 |
| starting_condition_role | 供完整剩余整套制造的原制剂/组件接收 |
| product_classification_scope | CPC38540机械塑料拼搭套装子范围，不自动涵盖更广火车/模型套件 |
| recursive_input_rule | 从真实完整树脂制剂及明示的独立已完成组件供货开始，纳入至整套放行的所有剩余工序。供方完成组件仅替代其自身上游/本地工序。整份供货制剂/整件只采购一次；颜料、溶剂、载水、内衬、线为非加和组成子账。真实厂内配制改采每项真实外购料及混配能耗/损失；核对整件/组分桥并抵消内部交接，不能递归采购整套成品替代制造。 |
| upstream_dataset_requirement | 逐真实采购核对完整制剂、供货整件状态/材料/路线/地理及一个provider owner；未解链接明示。外供原树脂合成为上游，不在前景重复单体生产。 |
| disclosure | 完整终端/BOM及供货起态；全部实际阶段/失败；放行与服务；湿物理库存和继承向量；单位转换；provider/身份缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | all inventory rows | 从真实完整树脂制剂及明示的独立已完成组件供货开始，纳入至整套放行的所有剩余工序。供方完成组件仅替代其自身上游/本地工序。整份供货制剂/整件只采购一次；颜料、溶剂、载水、内衬、线为非加和组成子账。真实厂内配制改采每项真实外购料及混配能耗/损失；核对整件/组分桥并抵消内部交接，不能递归采购整套成品替代制造。 | `lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_release | all inventory rows | Q为新增唯一首次质量放行完整套装净质量之和，真实净留存组分/装饰/水及功能性印刷说明书各一次，排除销售/运输包装及未放行拒品。已放行期末FG已入Q，不能把Q和该期末FG同时作生产输出，也不扣原制造；交付、复验、退回、返工不造Q。注塑中间积木在规定套装内容配齐前仍为WIP。保留所有失败、零产出、启停、空转、清理、检验、返工负荷；Q=0保留真实记录但不出单位结果。 | `lego-whole-set-process`; `lego-profile-manufacturing`; `ilcd-2010-attributional` |
| b_stocks | all inventory rows | 完整保留原料、WIP、未分配非WIP材料/服务存储、在装流体/资产及已放行FG的实物湿期初/期末和每交换继承负荷向量。制造B_close仅原料/WIP及真实未使用/未分配非WIP负荷，不含已放行FG或已执行服务。已库存校正耗用不再校正；真实新增材料/水即使留期末也保留入流及完整湿期末质量。X_in/X_out仅与其他同侧入/出流项去重，不冲库存、对侧或真实卡的存在。 | `ilcd-2010-attributional` |
| b_physical | all inventory rows | 独立闭合真实总质量及实测相关C/H/O/N等元素账。制造门：期初原料/未放行WIP加外部物料/物种接收，对首次放行净内容、真实外部废物/气体及期末原料/未放行WIP/非WIP材料。FG/服务门：期初已放行FG加匹配首次放行交接及真实退回/材料水变化，对毛发运、期末FG及真实拒品/废物/返回。合并仅抵消匹配内部交接。每实物毛腿V保留完整质量/原生量，不按经济、服务或负荷份额缩；元素衡算本身不识别气体、VOC、COD或反应水物种，一个残差不能拟两个未知。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_service | all inventory rows | 唯一放行后仅记录观测H内实际执行的包装/仓储/搬运/发运/测试/作业，保留原cohort Q_H、历史及增量原始负荷。不能因FG留库扣已执行原cohort服务，仅真正未使用/未分配服务或负荷结转。真实放行后作业欲主张持续合格须有厂家/规格许可、作业后测试、接受及处置；未获准、失败或拒收作业仍保留全部实际输入/输出/负荷及原cohort hold/废物结果，不假定破损可恢复。自然湿交换不虚构许可或维修；未观测未来H为未知。净交付研究须独立完整期初/期末FG历史负荷及毛发运G/退回R/原交付撤销D_rev桥，不能套首次放行Q。 | `lego-profile-manufacturing`; `ilcd-2010-attributional` |
| b_pack | all inventory rows | 各真实单一包装池：期初空件/附着WIP/附着FG/复用存量+P+I+ER+真实互斥组件/水入流=期末完整湿存量+毛S+EO+W+真实互斥组件/水出流。P为独立采购，I为有一次上游owner的真实供方随货带入，ER外返接收、S实物毛发运、EO外退、W真实废物。整湿P/I/ER与组分不重复，新水/维修入流不能因留存被删。内部复用抵消，不入产品Q、不再采购、不自动信用。真实唯一混废Waste出口带独立实测非加和originW，仅实际分出口用分W交换。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_utilities | all inventory rows | 电力、各真实燃料/热、每种材料/制剂、水相、气体物种、包装整件、新旧部件、流体和废物出口均原子化。现场公用工程输入/输出与外购整份公用工程provider须互斥或核对，不重复。真实外部载热Product供/回用实测质量/相态/T/P/焓及供方热水owner，不虚构蒸汽/锅炉/凝水回路。实物资产存量及完整毛收发与实际服务负荷分开；不设机器/模具寿命、质量或替换率；真实未列原子须补卡而非省略。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_original_acceptance_context | all applicable conditions | Q0是唯一首次验收事件账：每真实完整套装净质量及配置锁定至原套装批次身份。制造Q=Q0，后续原Q_H=Q0；不以当前交付退回损坏收缩或改装质量替代历史验收质量。全部原验收身份按原验收质量划入互斥净剩余交付、全部真实厂内已验收状态（含存储留置样品损坏退回重工）、不可逆整套损失及其他终端处置；所有真实状态出口保持可见。仅证实其他验收后状态出口全不存在时可用交付加期末FG简化桥。水零件油墨纸张局部损失是独立实物变化，不补回幸存物又加出口。退回复用重验重工再次放行不造新Q0。全部当前原料WIP/FG/资产/容器湿存量及实物转移独立于原事件账。即使套装全消失，服务仍保留原Q0；零或未知基准保留原量无单位结果。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_complete_producer_context | all applicable conditions | 真实采购整份制剂整件只链接一个真实完整生产者清单，或互斥展开其真实制造历史。供应成品元件只替代自身已完成作业，不替代其后整套制造；生产者须含与交付状态相应的真实材料准备成型装饰子装配公用损失废物接口。真实现场配制印刷干燥成型公用生产或受控外协，即使组织上称上游也仍纳入。UUID、发票或未来SOP承诺本身不供上游负荷或补缺关键分析基质程序。真实未决核心方法仍作hold；软件成功或限定词不悄悄关闭。供方品级及真实事件量独立采集，不编同厂SKU限制、配方得率剂量效率质量寿命。 | `lego-whole-set-process`; `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_whole_waste_context | all applicable conditions | 每真实整件污染布过滤件容器或混废流，Qt为完整实物转移，含基材滞留聚合物油墨清洗剂固体和水一次。干基材组分分析是内含非加总账，除非出门前真分离。完整真实接收转移及已履行供方总需求，与互不重叠原批负荷服务向量A/Q或A_H/Q_H分开。仅实物毛V披露不再采购表征处理同一材料，归属A不改称缩水实物出口。多批共享一事件不每批再计完整Qt。完整供方汇总与展开处理历史互斥；方法组成接收归属未知仍未决。每真实独立出口须独立原子卡，一个真实混出口拥有总量，来源池W不是额外出口。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_complete_source_context | all applicable conditions | LEGO工艺及材料用途页面保留为完整实质网页工具文本捕获，不是本地出版者HTML、PDF或OCR；对应本地出版者原件在本证据集中缺失，文本捕获不等于已取得该原件。另有完整出版者Company Profile PDF，作为历史厂家证据支持真实成型加工包装及配料检验语境。三来源属同一出版者，不是独立工厂、共同当前SKU或量化工况资格。IFC是独立非反应型塑料定性筛查，保留项目特定适用及相邻反应型橡胶金属限制，不识别真实工厂分子或量。ILCD仅支持有条件归因方法。完整来源限制保留，不把温压周期件数测试载荷高度材料比例排放因子证书环境优越寿命转为PCR默认。 | `lego-whole-set-process`; `lego-material-purpose`; `lego-profile-manufacturing`; `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_full_scope_context | complete applicability | 制造一份配置完整的机械塑料拼搭玩具套装，含真实规定的互锁玩具元件及实际已装配机械子部件，起点为外购完整热塑性粒料制剂及明确识别的成品组件供货。纳入接收/仓储、输送、真实调湿、仅独立供料时的配色、熔融塑化、充模/保压、冷却/脱模、浇口飞边修整、受控内部回磨、真实元件装饰/干燥、部件装配、计数配齐、功能说明以及整套检查和唯一首次质量放行。实际发生的销售盒/内袋包装纳入，但包装质量排除净玩具Q。来源：lego-whole-set-process; lego-material-purpose; lego-profile-manufacturing; ifc-plastic-products-2007。 这是厂家整套路线与一般非反应塑料/环境指南的透明技术综合；独立ILCD仅支持有条件的归因建模。LEGO来源同属一个出版者，不是独立工厂证据，也不声称同一当代SKU/订单。材料用途实例说明并非每个元件都是ABS：HIPS、PA、arMABS、MTPO、PC、bio-PE、POM、PP、TPU、SEBS、TP为全ABS配方的相邻反例，不是必需组分；各卡由真实等级、配方、自制/外购记录决定。厂家温度、压力、周期、测试力/高度、组分比例、件数和耐用描述均非PCR默认值或证书。不提供默认密度、套重、良率、寿命、年龄等级或排放因子；IFC潜在烟气实例不证明正常运行实际分子排放。 排除电动火车/轨道信号系统、电动机、电池、照明、无线/遥控、动力车辆、以反应热固性工艺为主的路线、金属/木质主体构建套件、以单个备件积木为终端、通用树脂制造、以注塑机/模具制造为终端、外购整套成品重新包装、拼图、使用和终寿。此较窄路线不证明适用于整个分类。真实新增聚合物、外供组件、燃料、制冷剂、化学品、印刷/胶、包装、水相及废物出口，须以各自有证据原子流补入，不能藏进other-material或零值集合；否则具体数据集不完整。 UN CPC3.0解释性注释38540还包括电动/非电动玩具车辆及附件、非电动玩具马达、娱乐缩尺模型及其套件和娱乐全尺寸复制品，明确排除电动玩具马达。本法在较宽类别内选择有证据的构建套装/积木路线；邻近拼图和其他玩具类别不能替代完整拼搭套装。来源：un-cpc3-38540-scope。 | `lego-whole-set-process`; `lego-material-purpose`; `lego-profile-manufacturing`; `ifc-plastic-products-2007`; `un-cpc3-38540-scope` |
| b_full_reference_context | complete native/reference/producer/source/cohort | 该原生 Product flow 是工厂生产混合的已制造构建玩具产品族；完整原生范围包括玩具车辆及附件、非电动玩具马达/蒸汽机、娱乐缩尺模型、模型材料零件套件以及构建套装/积木，排除电动玩具马达。本参考角色仅代表一种配置齐全的机械塑料拼搭套装：所有必需玩具元件、实际已装配子部件、固着装饰和随附的功能性纸质说明书，经唯一首次放行。树脂、单个备件积木、模具、火车零件或仅待重新包装的外购整套成品均不能占据该角色。宽泛身份不固定CAS、聚合物配方、等级、地理、尺寸、年龄、性能或电气设备；必须核对真实整套规格及上游边界。 上述每项限定信息必须在具体数据包中声明。 Q0是唯一首次验收事件账：每真实完整套装净质量及配置锁定至原套装批次身份。制造Q=Q0，后续原Q_H=Q0；不以当前交付退回损坏收缩或改装质量替代历史验收质量。全部原验收身份按原验收质量划入互斥净剩余交付、全部真实厂内已验收状态（含存储留置样品损坏退回重工）、不可逆整套损失及其他终端处置；所有真实状态出口保持可见。仅证实其他验收后状态出口全不存在时可用交付加期末FG简化桥。水零件油墨纸张局部损失是独立实物变化，不补回幸存物又加出口。退回复用重验重工再次放行不造新Q0。全部当前原料WIP/FG/资产/容器湿存量及实物转移独立于原事件账。即使套装全消失，服务仍保留原Q0；零或未知基准保留原量无单位结果。 真实采购整份制剂整件只链接一个真实完整生产者清单，或互斥展开其真实制造历史。供应成品元件只替代自身已完成作业，不替代其后整套制造；生产者须含与交付状态相应的真实材料准备成型装饰子装配公用损失废物接口。真实现场配制印刷干燥成型公用生产或受控外协，即使组织上称上游也仍纳入。UUID、发票或未来SOP承诺本身不供上游负荷或补缺关键分析基质程序。真实未决核心方法仍作hold；软件成功或限定词不悄悄关闭。供方品级及真实事件量独立采集，不编同厂SKU限制、配方得率剂量效率质量寿命。 LEGO工艺及材料用途页面保留为完整实质网页工具文本捕获，不是本地出版者HTML、PDF或OCR；对应本地出版者原件在本证据集中缺失，文本捕获不等于已取得该原件。另有完整出版者Company Profile PDF，作为历史厂家证据支持真实成型加工包装及配料检验语境。三来源属同一出版者，不是独立工厂、共同当前SKU或量化工况资格。IFC是独立非反应型塑料定性筛查，保留项目特定适用及相邻反应型橡胶金属限制，不识别真实工厂分子或量。ILCD仅支持有条件归因方法。完整来源限制保留，不把温压周期件数测试载荷高度材料比例排放因子证书环境优越寿命转为PCR默认。 | `lego-whole-set-process`; `lego-material-purpose`; `lego-profile-manufacturing`; `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_machine_fulfilled_service | `machine_fulfilled_service` | 仅声明配置及原批的实际已观测服务，记录真实工况使用期间、产能及正当相容供方或自有资产负荷向量。新旧购入退回退役、在装流体部件及完整湿持有另记，不把留存机器按每kg玩具耗用。已含部件充注与独立供货卡互斥。不设名义寿命机器质量服务产能或替换期。h仅用于实际计时服务及相容实测换算；供方产能换算未知仍未决。复用布保留实际清洗污染整件退役历史，一次布耗用不再收费复用服务。 | `ilcd-2010-attributional` |
| b_inventory_mould_fulfilled_service | `mould_fulfilled_service` | 仅声明配置及原批的实际已观测服务，记录真实工况使用期间、产能及正当相容供方或自有资产负荷向量。新旧购入退回退役、在装流体部件及完整湿持有另记，不把留存机器按每kg玩具耗用。已含部件充注与独立供货卡互斥。不设名义寿命机器质量服务产能或替换期。h仅用于实际计时服务及相容实测换算；供方产能换算未知仍未决。复用布保留实际清洗污染整件退役历史，一次布耗用不再收费复用服务。 | `ilcd-2010-attributional` |
| b_inventory_cloth_fulfilled_service | `cloth_fulfilled_service` | 仅声明配置及原批的实际已观测服务，记录真实工况使用期间、产能及正当相容供方或自有资产负荷向量。新旧购入退回退役、在装流体部件及完整湿持有另记，不把留存机器按每kg玩具耗用。已含部件充注与独立供货卡互斥。不设名义寿命机器质量服务产能或替换期。h仅用于实际计时服务及相容实测换算；供方产能换算未知仍未决。复用布保留实际清洗污染整件退役历史，一次布耗用不再收费复用服务。 | `ilcd-2010-attributional` |
| b_inventory_make_contaminated_wipe_treatment | `make_contaminated_wipe_treatment` | 完整转移Qt所对应真实完整已履行供方需求，含整基材滞留料水及真实接收工序相容性。供方总量一次且各原批归属向量互不重叠，不缩实物出口或每批重复总量。同一实物事件的混出口供方与本独立供方互斥，整份供方汇总与展开历史不重复。接收方法归属未知仍未决，不假处理信用。 | `ilcd-2010-attributional` |
| b_inventory_abs_feed | `abs_feed` | 接收真实完整的本色或预着色ABS粒料制剂，上游生产只继承一次。原生Product为ABS粒料，Mass/kg，不固定等级、CAS、添加剂、地理或加工路线。仅用于实际供货状态已说明的ABS粒料，不用于单体、粉末、板材、EPS、未知填充共混物或成品积木。供方已含色料/稳定剂/水只作非加和子账；另购色母粒仅在尚未包含时另计，不能假定整套都是ABS。 | `lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_inventory_pp_feed | `pp_feed` | 按真实BOM和独立供货条件纳入，整份供货制剂只继承一次。原生Product为工厂生产混合的PP粒料，上游丙烯聚合；仅用于成分相容的真实独立外供PP粒料，不替代再生PP、PE或成品，不能假设均聚/共聚等级或比例。 | `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_inventory_hips_feed | `hips_feed` | 按真实BOM和独立供货条件纳入，整份供货制剂只继承一次。原生Product为工厂生产混合的HIPS粒料，抗冲改性苯乙烯聚合；必须是真实HIPS粒料和相符的橡胶改性聚合物，GPPS、EPS、ABS分别区别。原生恢复来源保留物理身份，不提供再生比例、等级或工厂配方。 | `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_inventory_pc_feed | `pc_feed` | 按真实BOM和独立供货条件纳入，整份供货制剂只继承一次。原生Product为全球工厂生产混合的PC粒料，不固定路线、等级或CAS。仅用于真实聚碳酸酯粒料，不替代MABS、PC/ABS共混物、成品连接件或任意透明塑料。GLO身份不证明供方地理或provider代表性。 | `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_inventory_pa6_feed | `pa6_feed` | 仅当真实材料独立证实为PA6时纳入；通用PA证据不决定PA6还是PA66。供货配方及含水整份只计一次。 | `lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_inventory_pom_feed | `pom_feed` | 真实POM粒料供货时纳入，区别真实均聚/共聚等级和添加剂，硅烷等查询邻近物不是POM。 | `lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_inventory_sebs_feed | `sebs_feed` | 仅真实整份SEBS配混粒料时纳入，区别SBS、橡胶硫化、油/填料含量和外供成品轮胎，不默认存在弹性体零件。 | `lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_inventory_tpu_feed | `tpu_feed` | 真实TPU粒料时纳入，区别反应型热固性聚氨酯和其他热塑性弹性体；不由玩具实例推定树脂配方。 | `lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_inventory_colour_masterbatch | `colour_masterbatch` | 仅真实独立采购且与元件相容的一份ABS载体色母粒制剂。载体/颜料/添加剂分析不构成再次采购；真实其他载体需另卡。不能用助剂反应代理或纯颜料替代，不设添加率。 | `lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_inventory_decoration_ink | `decoration_ink` | 仅在实际印刷元件时记录一份真实溶剂/水/粘结料/颜料状态的外供装饰油墨。采SDS、完整配方身份、施印/干燥规格和留膜质量，不预设水性、喷墨、凹版或平版。已含载水/溶剂不再采购；真实厂内配墨时用逐项外购原料及配制能耗损失替代重叠的整份制剂。 | `lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_inventory_ipa_cleaner | `ipa_cleaner` | 实际外供整份异丙醇水性清洗剂时纳入，载水/添加剂只计一次，实测浓度；不默认70%或纯度，不使用基本流异丙醇排放或限定光学装配的Product。 | `lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_inventory_ipa_neat | `ipa_neat` | 仅实际另购用于厂内稀释或清洗的纯异丙醇，独立计量，与外购油墨/清洗剂内已含异丙醇不重叠。真实稀释水及制备损失分别计；CAS67-63-0液体物料，不采用不相容的供方限定原生行。 | `lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_inventory_instructions | `instructions` | 仅实际随附纸质说明时，从真实印刷/装订供方采购一份完整说明书。它是套装的功能性信息组件，属于净Q，不是运输包装；上游纸、墨、装订由外供说明书只承担一次，不能重复购买。真实厂内印刷须各真实纸/墨/能源/损失卡并取消重叠整件投入；仅数字说明不能推定纸数量。 | `lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_inventory_bought_abs_element | `bought_abs_element` | 条件纳入一个身份明确的外部已完成ABS玩具元件，真实形状/颜色/印刷/状态及供方注塑/装饰负荷齐全；仅替代该部件制造，不能替代整套。按组件核对自制/外购，不对同一供货元件同时计树脂和本地注塑；火车专用注塑件不是本通用构建元件。 | `lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_inventory_bought_subassembly | `bought_subassembly` | 仅条件纳入真实外部完成的机械小人子总成，完整实测材料组成及供方路线。不是电机、遥控单元或整套拼搭成品；整件与组分投入必须互斥，或桥接并抵消内部交接。 | `lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_inventory_cotton_wipe | `cotton_wipe` | 真实清洗/检验棉布时纳入；整块供货质量与吸附液独立测量，吸附水不得重复加总，不是纸巾或整份清洗剂。 | `lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_inventory_mineral_lube | `mineral_lube` | 真实矿物油基整份润滑制剂时纳入，原生PAO全合成润滑油不能互换。整份供货、在装/排出流体与服务使用分别追踪，不能每kg产品购买整次充注。 | `lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_inventory_coolant | `coolant` | 仅真实整份丙二醇水性冷却液，独立量测浓度、载水、相态和服务状态。制剂已含水为子账而非第二供水，在装存量与真实补加/排出均保留；其他真实冷却液化学品另卡。 | `lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007` |
| b_inventory_electricity_make | `electricity_make` | 计量接收/实际调湿干燥、熔融充模/冷却脱模、修边、内部回磨、零件搬运、装饰干燥、组件装配、计数、测试、公用工程及全部失败/启停/空转/清理/返工用电。原生Product为中国低于1kV低压交流电，电网平均消费组合到用户，以Net calorific value作为MJ电能接口，不是Mass或燃料燃烧。核对真实地理/电压/provider/时段；kWh以3.6一次转MJ，其他供电另用相容行。 真实首次放行前包装/计数/查错用电纳入一次；放行后包装用电仅归service_electricity。 | `lego-whole-set-process`; `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_tap_make | `tap_make` | 真实供方处理市政饮用液态水用于独立调湿、清洗、测试或冷却补水。原生Product为工厂生产混合的制水/供水，参考Mass/kg；次级Volume不是实测密度。逐用途和水态记录，必要时用独立实测密度转换原单位；不假设冷却回路，不作基本流淡水开采，不重复采购制剂载水。 | `ifc-plastic-products-2007` |
| b_inventory_hydraulic_fill | `hydraulic_fill` | 仅真实液压系统的完整工程液压流体，矿物或合成基础油及真实添加剂。原生Product参考Volume/m3，不是Mass/kg。独立计量供货液体体积及状态对应密度用于湿质量账，不能从别的系数或水反推。实际全电机器可能无此流体。在装存量、真实新充/补加、排出互不重叠，服务负荷不是每kg分配整份实物存量。 原生分类置于石油润滑剂，而物理备注允许矿物或合成基础油，须单独披露此分类局限；它不证明任何石油比例，也不允许忽视真实液体制剂相容性。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_delivered_heat | `delivered_heat` | 仅真实外供有效热，记录供方热源、真实质量/相态/T/P/焓和供回约定，不预设燃气锅炉、蒸汽或燃料；另列载热质量腿不重复购买热provider。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_carrier_in | `carrier_in` | 真实外部热液水载体进入，以完整实物毛V记录，配独立实测回流状态，明确热/水供方所有权，不自动另购水或蒸汽。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_air_supply | `air_supply` | 仅真实外购整份压缩空气混合物，记录压力/组分/含湿及供方能耗边界。现场压缩改采真实电力和环境物种摄入；选择互斥采购或整份/组分桥接，同一空气供货组分不能再计一份环境摄入。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_machine_in | `machine_in` | 仅真实外部接收的新/旧完整注塑机，身份明确。实物毛质量V与继承向量存量区别于使用服务负荷；不假设机重、寿命、射次或每kg一整机。真实在装流体/部件与整机核对只计一次。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_mould_in | `mould_in` | 仅真实配置完整钢制模具接收，明确型腔/镶件/冷却/浇注界面和供方工装负荷。毛质量V不按经济份额缩，实际使用服务向量凭因果证据只提取一次；不设寿命或射次，同一成品模具不再买原钢材。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_pin_new | `pin_new` | 真实单独新更换钢制顶针，不是整模、焊接维修总成或钢材炉料。即使新增量仍留期末备件库，也保留入流及完整在装/未用存量。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_make_n2_in | `make_n2_in` | 本物理边界真实氮气环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_make_o2_in | `make_o2_in` | 本物理边界真实氧气环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_make_ar_in | `make_ar_in` | 本物理边界真实氩气环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_make_h2o_in | `make_h2o_in` | 本物理边界真实水蒸气环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 本行仅为非包装未放行原料/WIP/室内/过程水事件；已单列包装湿交换仅归pack_water_in/out，从本同侧总事件去重，绝不冲库存。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_make_co2_in | `make_co2_in` | 本物理边界真实二氧化碳环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_finished_release | `finished_release` | 该原生 Product flow 是工厂生产混合的已制造构建玩具产品族；完整原生范围包括玩具车辆及附件、非电动玩具马达/蒸汽机、娱乐缩尺模型、模型材料零件套件以及构建套装/积木，排除电动玩具马达。本参考角色仅代表一种配置齐全的机械塑料拼搭套装：所有必需玩具元件、实际已装配子部件、固着装饰和随附的功能性纸质说明书，经唯一首次放行。树脂、单个备件积木、模具、火车零件或仅待重新包装的外购整套成品均不能占据该角色。宽泛身份不固定CAS、聚合物配方、等级、地理、尺寸、年龄、性能或电气设备；必须核对真实整套规格及上游边界。 | `lego-whole-set-process`; `lego-material-purpose`; `lego-profile-manufacturing` |
| b_inventory_carrier_return | `carrier_return` | 仅真实向热/水供方的外部Product返回，实测质量/相态/T/P/焓；完整毛V，不是Waste，不自动credit、不重复供方或虚构蒸汽回路。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_make_contaminated_wipe | `make_contaminated_wipe` | 仅一个真实实物分收的完整棉布出口，含基材滞留聚合物油墨清洗剂水一次。完整湿Qt、实际组成及接收处理总需求与各批A/Q或A_H/Q_H独立。若归真实混废出口，本项仅非加总来源子账，不新增外部废物供方。发生未知不是零，只有实物分离才有独立组分出口。 | `ilcd-2010-attributional` |
| b_inventory_abs_sprue_waste | `abs_sprue_waste` | 仅真实单独外送的一股已识别ABS浇口流道废物。清洁内部回磨为有谱系及损失的WIP，不造新树脂采购/信用。普通废物销售保留制造和搬运/处理负荷。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_rejected_set | `rejected_set` | 真实分出口的不合格整套，实际状态完整净内容；从未放行者不入Q，已唯一放行者保留原cohort。失败样品/被拒返工保留真实废物/hold，不假定可恢复产品。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_polymer_dust | `polymer_dust` | 真实单股捕集颗粒废物，测聚合物组成及湿质量，不再作为空气排放；仅混废处置时作该唯一出口的非加和来源子账。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_spent_ink | `spent_ink` | 真实单独移出的整份余墨，量测载液及实际污染，不暗含溶剂蒸发、与新墨相同或自动共产品销售。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_make_effluent | `make_effluent` | 一股真实独立湿清洗废水出口，实测液体及固体整份一次，披露处理provider及去向；COD/TOC/VOC是指标，不是特定化学质量，不采用锰渣洗涤废水。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_coolant_removed | `coolant_removed` | 真实排出整份冷却液，载水/溶质及污染独立测量；继承服务和废物处理只归一次，不叠加整份与组分出口。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_hydraulic_removed | `hydraulic_removed` | 真实排出液压流体湿质量及独立体积/状态，不假设排出等于新充；保留真实期末在机流体和实际入流。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_pin_removed | `pin_removed` | 真实移出旧顶针，自有实测质量/cohort；不假定与新针等重，也不是整模。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_mould_scrap | `mould_scrap` | 真实整模退役/外送，完整毛V；核对已拆镶件及留存模具避免重复，不自动给再生信用或扣既有已执行服务。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_machine_scrap | `machine_scrap` | 真实整机外送，完整实测湿毛V；排出流体/部件与余机质量互斥核对，不按分配缩实物，也不抹去已执行服务。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_mixed_waste | `mixed_waste` | 仅真实实物混合出口时使用一个出口，整份湿质量及处理/provider一次；拒品、布、尘及各包装池originW独立量测为非加和子账，不虚构分出口，不叠加总量及来源。普通处置/销售不转走制造负荷。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_make_n2_out | `make_n2_out` | 本物理边界真实氮气空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_make_o2_out | `make_o2_out` | 本物理边界真实氧气空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_make_ar_out | `make_ar_out` | 本物理边界真实氩气空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_make_h2o_out | `make_h2o_out` | 本物理边界真实水蒸气空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 本行仅为非包装未放行原料/WIP/室内/过程水事件；已单列包装湿交换仅归pack_water_in/out，从本同侧总事件去重，绝不冲库存。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_make_co2_out | `make_co2_out` | 本物理边界真实二氧化碳空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_make_styrene_air | `make_styrene_air` | 仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。 | `ifc-plastic-products-2007` |
| b_inventory_make_phenol_air | `make_phenol_air` | 仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。 | `ifc-plastic-products-2007` |
| b_inventory_make_butadiene_air | `make_butadiene_air` | 仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。 | `ifc-plastic-products-2007` |
| b_inventory_make_ipa_air | `make_ipa_air` | 仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。 | `ifc-plastic-products-2007` |
| b_inventory_make_fossilco2_air | `make_fossilco2_air` | 仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。 | `ifc-plastic-products-2007` |
| b_inventory_make_bioco2_air | `make_bioco2_air` | 仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。 | `ifc-plastic-products-2007` |
| b_inventory_pallet_wood_in | `pallet_wood_in` | 真实独立供应单件维修锯木，测树种/等级/水分，不是整托盘。X_in仅与其他同侧入流去重，不冲库存；新增量即使留在期末湿托盘/备件中也保留。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_pallet_nail_in | `pallet_nail_in` | 真实独立维修钢钉，不是整托盘或钢螺钉。原外供托盘已含原钉一次，真实新增钢钉入流与完整期末存量保留。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_set_box_p | `set_box_p` | 一个真实外供完整印刷折叠纸板销售盒，纸板/印刷/胶/水态整份一次，不是玩具净内容或瓦楞运输纸箱。 P单独采购空件：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_set_box_i | `set_box_i` | 一个真实外供完整印刷折叠纸板销售盒，纸板/印刷/胶/水态整份一次，不是玩具净内容或瓦楞运输纸箱。 I供方随货带入：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_set_box_er | `set_box_er` | 一个真实外供完整印刷折叠纸板销售盒，纸板/印刷/胶/水态整份一次，不是玩具净内容或瓦楞运输纸箱。 ER外部返回接收：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_inner_bag_p | `inner_bag_p` | 一个真实外供完整涂覆纸内袋，纸/PE涂层/封口/水整份一次，不能用纯牛皮纸、PE膜或另购纸加涂层替代整件；真实纯纸袋或塑料袋需各自实际身份。 P单独采购空件：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_inner_bag_i | `inner_bag_i` | 一个真实外供完整涂覆纸内袋，纸/PE涂层/封口/水整份一次，不能用纯牛皮纸、PE膜或另购纸加涂层替代整件；真实纯纸袋或塑料袋需各自实际身份。 I供方随货带入：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_inner_bag_er | `inner_bag_er` | 一个真实外供完整涂覆纸内袋，纸/PE涂层/封口/水整份一次，不能用纯牛皮纸、PE膜或另购纸加涂层替代整件；真实纯纸袋或塑料袋需各自实际身份。 ER外部返回接收：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_pe_wrap_p | `pe_wrap_p` | 原生Product为CAS9002-88-4聚乙烯薄膜，工厂生产混合，已成膜，不固定等级/密度/地理。仅真实聚乙烯包裹膜，不是PET、PVC、涂覆纸袋或整包；原生备注将PET列作对比，不使其成为同义物。 P单独采购空件：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_pe_wrap_i | `pe_wrap_i` | 原生Product为CAS9002-88-4聚乙烯薄膜，工厂生产混合，已成膜，不固定等级/密度/地理。仅真实聚乙烯包裹膜，不是PET、PVC、涂覆纸袋或整包；原生备注将PET列作对比，不使其成为同义物。 I供方随货带入：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_pe_wrap_er | `pe_wrap_er` | 原生Product为CAS9002-88-4聚乙烯薄膜，工厂生产混合，已成膜，不固定等级/密度/地理。仅真实聚乙烯包裹膜，不是PET、PVC、涂覆纸袋或整包；原生备注将PET列作对比，不使其成为同义物。 ER外部返回接收：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_carton_p | `carton_p` | 一个真实完整瓦楞运输纸箱，实际组成/湿态；不能使用被原生声明排除质量衡算的未知组成包装，也不强设16.6/83.4纤维配方。整箱一次承担供方制造/印刷/胶负荷。 P单独采购空件：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_carton_i | `carton_i` | 一个真实完整瓦楞运输纸箱，实际组成/湿态；不能使用被原生声明排除质量衡算的未知组成包装，也不强设16.6/83.4纤维配方。整箱一次承担供方制造/印刷/胶负荷。 I供方随货带入：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_carton_er | `carton_er` | 一个真实完整瓦楞运输纸箱，实际组成/湿态；不能使用被原生声明排除质量衡算的未知组成包装，也不强设16.6/83.4纤维配方。整箱一次承担供方制造/印刷/胶负荷。 ER外部返回接收：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_pallet_p | `pallet_p` | 原生Product为工厂生产混合的已制造木制便携承载平台，产品族还含装载板/围板，本角色仅一个真实完整托盘。不固定欧标尺寸、树种、水分、处理、寿命或钉比例；整托盘原含木/钉为非加和组成，真实维修木/钉/水各自原子卡。 P单独采购空件：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_pallet_i | `pallet_i` | 原生Product为工厂生产混合的已制造木制便携承载平台，产品族还含装载板/围板，本角色仅一个真实完整托盘。不固定欧标尺寸、树种、水分、处理、寿命或钉比例；整托盘原含木/钉为非加和组成，真实维修木/钉/水各自原子卡。 I供方随货带入：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_pallet_er | `pallet_er` | 原生Product为工厂生产混合的已制造木制便携承载平台，产品族还含装载板/围板，本角色仅一个真实完整托盘。不固定欧标尺寸、树种、水分、处理、寿命或钉比例；整托盘原含木/钉为非加和组成，真实维修木/钉/水各自原子卡。 ER外部返回接收：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_resin_sack_p | `resin_sack_p` | 一个真实整份编织PP树脂供货袋，真实PE内衬/缝线/封口/水分一次，组成及内衬存在须供方证据。另购内衬或线仅真实互斥替换时另卡，不能再次购买同一整袋组分。 P单独采购空件：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_resin_sack_i | `resin_sack_i` | 一个真实整份编织PP树脂供货袋，真实PE内衬/缝线/封口/水分一次，组成及内衬存在须供方证据。另购内衬或线仅真实互斥替换时另卡，不能再次购买同一整袋组分。 I供方随货带入：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_resin_sack_er | `resin_sack_er` | 一个真实整份编织PP树脂供货袋，真实PE内衬/缝线/封口/水分一次，组成及内衬存在须供方证据。另购内衬或线仅真实互斥替换时另卡，不能再次购买同一整袋组分。 ER外部返回接收：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_ink_pail_p | `ink_pail_p` | 一个真实外供带盖HDPE油墨桶，实际材质及湿残留状态，不是PET、钢桶、液态油墨或纸袋。桶内余墨用互不重叠的内容/容器桥核对。 P单独采购空件：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_ink_pail_i | `ink_pail_i` | 一个真实外供带盖HDPE油墨桶，实际材质及湿残留状态，不是PET、钢桶、液态油墨或纸袋。桶内余墨用互不重叠的内容/容器桥核对。 I供方随货带入：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_ink_pail_er | `ink_pail_er` | 一个真实外供带盖HDPE油墨桶，实际材质及湿残留状态，不是PET、钢桶、液态油墨或纸袋。桶内余墨用互不重叠的内容/容器桥核对。 ER外部返回接收：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_fluid_drum_p | `fluid_drum_p` | 一个真实液压/冷却/润滑流体供货用整份碳钢桶，真实封口/内涂层一次；流体是内容而非桶，整湿桶与相同内装液不能重叠加总。 P单独采购空件：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_fluid_drum_i | `fluid_drum_i` | 一个真实液压/冷却/润滑流体供货用整份碳钢桶，真实封口/内涂层一次；流体是内容而非桶，整湿桶与相同内装液不能重叠加总。 I供方随货带入：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_fluid_drum_er | `fluid_drum_er` | 一个真实液压/冷却/润滑流体供货用整份碳钢桶，真实封口/内涂层一次；流体是内容而非桶，整湿桶与相同内装液不能重叠加总。 ER外部返回接收：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_pack_water_in | `pack_water_in` | 普通仓储/搬运时本包装池实际独立吸收的环境H2O水蒸气，与非包装service_h2o_in分开量测，不虚构维修许可。整湿P/I/ER已含水一次。X_in仅与其他同侧入流去重，新增吸水及完整湿期末存量均保留。真实外供维修/清洗液态水改由service_water承担其Product owner并作非加和池子账。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_set_box_s | `set_box_s` | 一个真实外供完整印刷折叠纸板销售盒，纸板/印刷/胶/水态整份一次，不是玩具净内容或瓦楞运输纸箱。 S实物毛发运：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_set_box_eo | `set_box_eo` | 一个真实外供完整印刷折叠纸板销售盒，纸板/印刷/胶/水态整份一次，不是玩具净内容或瓦楞运输纸箱。 EO向外返回：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_inner_bag_s | `inner_bag_s` | 一个真实外供完整涂覆纸内袋，纸/PE涂层/封口/水整份一次，不能用纯牛皮纸、PE膜或另购纸加涂层替代整件；真实纯纸袋或塑料袋需各自实际身份。 S实物毛发运：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_inner_bag_eo | `inner_bag_eo` | 一个真实外供完整涂覆纸内袋，纸/PE涂层/封口/水整份一次，不能用纯牛皮纸、PE膜或另购纸加涂层替代整件；真实纯纸袋或塑料袋需各自实际身份。 EO向外返回：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_pe_wrap_s | `pe_wrap_s` | 原生Product为CAS9002-88-4聚乙烯薄膜，工厂生产混合，已成膜，不固定等级/密度/地理。仅真实聚乙烯包裹膜，不是PET、PVC、涂覆纸袋或整包；原生备注将PET列作对比，不使其成为同义物。 S实物毛发运：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_pe_wrap_eo | `pe_wrap_eo` | 原生Product为CAS9002-88-4聚乙烯薄膜，工厂生产混合，已成膜，不固定等级/密度/地理。仅真实聚乙烯包裹膜，不是PET、PVC、涂覆纸袋或整包；原生备注将PET列作对比，不使其成为同义物。 EO向外返回：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_carton_s | `carton_s` | 一个真实完整瓦楞运输纸箱，实际组成/湿态；不能使用被原生声明排除质量衡算的未知组成包装，也不强设16.6/83.4纤维配方。整箱一次承担供方制造/印刷/胶负荷。 S实物毛发运：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_carton_eo | `carton_eo` | 一个真实完整瓦楞运输纸箱，实际组成/湿态；不能使用被原生声明排除质量衡算的未知组成包装，也不强设16.6/83.4纤维配方。整箱一次承担供方制造/印刷/胶负荷。 EO向外返回：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_pallet_s | `pallet_s` | 原生Product为工厂生产混合的已制造木制便携承载平台，产品族还含装载板/围板，本角色仅一个真实完整托盘。不固定欧标尺寸、树种、水分、处理、寿命或钉比例；整托盘原含木/钉为非加和组成，真实维修木/钉/水各自原子卡。 S实物毛发运：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_pallet_eo | `pallet_eo` | 原生Product为工厂生产混合的已制造木制便携承载平台，产品族还含装载板/围板，本角色仅一个真实完整托盘。不固定欧标尺寸、树种、水分、处理、寿命或钉比例；整托盘原含木/钉为非加和组成，真实维修木/钉/水各自原子卡。 EO向外返回：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_resin_sack_s | `resin_sack_s` | 一个真实整份编织PP树脂供货袋，真实PE内衬/缝线/封口/水分一次，组成及内衬存在须供方证据。另购内衬或线仅真实互斥替换时另卡，不能再次购买同一整袋组分。 S实物毛发运：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_resin_sack_eo | `resin_sack_eo` | 一个真实整份编织PP树脂供货袋，真实PE内衬/缝线/封口/水分一次，组成及内衬存在须供方证据。另购内衬或线仅真实互斥替换时另卡，不能再次购买同一整袋组分。 EO向外返回：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_ink_pail_s | `ink_pail_s` | 一个真实外供带盖HDPE油墨桶，实际材质及湿残留状态，不是PET、钢桶、液态油墨或纸袋。桶内余墨用互不重叠的内容/容器桥核对。 S实物毛发运：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_ink_pail_eo | `ink_pail_eo` | 一个真实外供带盖HDPE油墨桶，实际材质及湿残留状态，不是PET、钢桶、液态油墨或纸袋。桶内余墨用互不重叠的内容/容器桥核对。 EO向外返回：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_fluid_drum_s | `fluid_drum_s` | 一个真实液压/冷却/润滑流体供货用整份碳钢桶，真实封口/内涂层一次；流体是内容而非桶，整湿桶与相同内装液不能重叠加总。 S实物毛发运：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_fluid_drum_eo | `fluid_drum_eo` | 一个真实液压/冷却/润滑流体供货用整份碳钢桶，真实封口/内涂层一次；流体是内容而非桶，整湿桶与相同内装液不能重叠加总。 EO向外返回：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_pallet_wood_out | `pallet_wood_out` | 本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。真实拆出木废件，完整湿质量及来源，与整托盘报废互斥。X_out只与其他同侧出流去重，不冲期末存量或入流。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_pallet_nail_out | `pallet_nail_out` | 本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。真实旧钢钉废物单独称量，不假设新旧等重。若实物混废则为唯一混废出口来源子账，不虚构单独外送。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_set_box_w | `set_box_w` | 本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。一个真实外供完整印刷折叠纸板销售盒，纸板/印刷/胶/水态整份一次，不是玩具净内容或瓦楞运输纸箱。 W单独外送废物：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_inner_bag_w | `inner_bag_w` | 本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。一个真实外供完整涂覆纸内袋，纸/PE涂层/封口/水整份一次，不能用纯牛皮纸、PE膜或另购纸加涂层替代整件；真实纯纸袋或塑料袋需各自实际身份。 W单独外送废物：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_pe_wrap_w | `pe_wrap_w` | 本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。来源供货Product为CAS9002-88-4聚乙烯薄膜，工厂生产混合，已成膜，不固定等级/密度/地理。仅真实聚乙烯包裹膜，不是PET、PVC、涂覆纸袋或整包；原生备注将PET列作对比，不使其成为同义物。 W单独外送废物：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_carton_w | `carton_w` | 本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。一个真实完整瓦楞运输纸箱，实际组成/湿态；不能使用被原生声明排除质量衡算的未知组成包装，也不强设16.6/83.4纤维配方。整箱一次承担供方制造/印刷/胶负荷。 W单独外送废物：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_pallet_w | `pallet_w` | 本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。来源供货Product为工厂生产混合的已制造木制便携承载平台，产品族还含装载板/围板，本角色仅一个真实完整托盘。不固定欧标尺寸、树种、水分、处理、寿命或钉比例；整托盘原含木/钉为非加和组成，真实维修木/钉/水各自原子卡。 W单独外送废物：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_resin_sack_w | `resin_sack_w` | 本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。一个真实整份编织PP树脂供货袋，真实PE内衬/缝线/封口/水分一次，组成及内衬存在须供方证据。另购内衬或线仅真实互斥替换时另卡，不能再次购买同一整袋组分。 W单独外送废物：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_ink_pail_w | `ink_pail_w` | 本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。一个真实外供带盖HDPE油墨桶，实际材质及湿残留状态，不是PET、钢桶、液态油墨或纸袋。桶内余墨用互不重叠的内容/容器桥核对。 W单独外送废物：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_fluid_drum_w | `fluid_drum_w` | 本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。一个真实液压/冷却/润滑流体供货用整份碳钢桶，真实封口/内涂层一次；流体是内容而非桶，整湿桶与相同内装液不能重叠加总。 W单独外送废物：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_pack_water_out | `pack_water_out` | 普通仓储/搬运或真实作业时本包装池独立蒸发的H2O水蒸气，独立量测并排除非包装service_h2o_out。整湿S/EO/W已含留存水一次，不能另加重叠游离水总量。X_out仅与其他同侧出流去重，不冲库存或入水；许可/合格状态不能删实际事件。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_service_contaminated_wipe_treatment | `service_contaminated_wipe_treatment` | 完整转移Qt所对应真实完整已履行供方需求，含整基材滞留料水及真实接收工序相容性。供方总量一次且各原批归属向量互不重叠，不缩实物出口或每批重复总量。同一实物事件的混出口供方与本独立供方互斥，整份供方汇总与展开历史不重复。接收方法归属未知仍未决，不假处理信用。 | `ilcd-2010-attributional` |
| b_inventory_fg_received | `fg_received` | 该原生 Product flow 是工厂生产混合的已制造构建玩具产品族；完整原生范围包括玩具车辆及附件、非电动玩具马达/蒸汽机、娱乐缩尺模型、模型材料零件套件以及构建套装/积木，排除电动玩具马达。本参考角色仅代表一种配置齐全的机械塑料拼搭套装：所有必需玩具元件、实际已装配子部件、固着装饰和随附的功能性纸质说明书，经唯一首次放行。树脂、单个备件积木、模具、火车零件或仅待重新包装的外购整套成品均不能占据该角色。宽泛身份不固定CAS、聚合物配方、等级、地理、尺寸、年龄、性能或电气设备；必须核对真实整套规格及上游边界。 本服务事件保留原首次放行身份/cohort Q_H及实际观测H。完整实物毛V_H保留真实材料/水状态变化；独立测原/当前内容及状况，不假设接收/退回等重。内部首次放行交接仅为匹配抵消台账，不是另一次外购或Q；本行不得再次承担原制造。 本行仅真实外部接收的已放行套装服务事件，排除由fg_return记录的交付退回；不是内部首次放行交接。每个真实入流事件仅进一个互斥接收类别。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_fg_return | `fg_return` | 该原生 Product flow 是工厂生产混合的已制造构建玩具产品族；完整原生范围包括玩具车辆及附件、非电动玩具马达/蒸汽机、娱乐缩尺模型、模型材料零件套件以及构建套装/积木，排除电动玩具马达。本参考角色仅代表一种配置齐全的机械塑料拼搭套装：所有必需玩具元件、实际已装配子部件、固着装饰和随附的功能性纸质说明书，经唯一首次放行。树脂、单个备件积木、模具、火车零件或仅待重新包装的外购整套成品均不能占据该角色。宽泛身份不固定CAS、聚合物配方、等级、地理、尺寸、年龄、性能或电气设备；必须核对真实整套规格及上游边界。 本服务事件保留原首次放行身份/cohort Q_H及实际观测H。完整实物毛V_H保留真实材料/水状态变化；独立测原/当前内容及状况，不假设接收/退回等重。内部首次放行交接仅为匹配抵消台账，不是另一次外购或Q；本行不得再次承担原制造。 本行仅已有先前交付的真实外部退回，追溯原交付/cohort并独立测当前质量/状态；从fg_received排除此同一事件。内部返回为匹配内部WIP/FG交接，不是此外部接收。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_service_electricity | `service_electricity` | 观测H内真实放行后仓储/搬运/包装/复验/获准或失败作业用电，与制造分表。原生为中国低于1kV交流电电网平均消费到用户，Net calorific value/MJ电能接口，不是kg；核对真实场址/电压/时段/provider，实测kWh一次乘3.6。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_service_water | `service_water` | 真实服务清洗/测试/包材维修的额外市政处理液态水，存在时纳入。原生Product为工厂制水供水，Mass/kg，不能由次级系数推密度；新增水入流与完整湿期末FG/包装/存量同时保留，自然湿交换独立计。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_service_n2_in | `service_n2_in` | 本物理边界真实氮气环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_service_o2_in | `service_o2_in` | 本物理边界真实氧气环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_service_ar_in | `service_ar_in` | 本物理边界真实氩气环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_service_h2o_in | `service_h2o_in` | 本物理边界真实水蒸气环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 本行仅为非包装FG/室内/过程水事件；已单列包装湿交换仅归pack_water_in/out，从本同侧总事件去重，绝不冲库存。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_service_co2_in | `service_co2_in` | 本物理边界真实二氧化碳环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_fg_dispatch | `fg_dispatch` | 该原生 Product flow 是工厂生产混合的已制造构建玩具产品族；完整原生范围包括玩具车辆及附件、非电动玩具马达/蒸汽机、娱乐缩尺模型、模型材料零件套件以及构建套装/积木，排除电动玩具马达。本参考角色仅代表一种配置齐全的机械塑料拼搭套装：所有必需玩具元件、实际已装配子部件、固着装饰和随附的功能性纸质说明书，经唯一首次放行。树脂、单个备件积木、模具、火车零件或仅待重新包装的外购整套成品均不能占据该角色。宽泛身份不固定CAS、聚合物配方、等级、地理、尺寸、年龄、性能或电气设备；必须核对真实整套规格及上游边界。 本服务事件保留原首次放行身份/cohort Q_H及实际观测H。完整实物毛V_H保留真实材料/水状态变化；独立测原/当前内容及状况，不假设接收/退回等重。内部首次放行交接仅为匹配抵消台账，不是另一次外购或Q；本行不得再次承担原制造。 本行仅实际外发事件，排除由fg_return_out记录的向所有者返还。同一实物外发仅在发运/所有者返回互斥桥计一次，不能同车货两边都加。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_fg_return_out | `fg_return_out` | 该原生 Product flow 是工厂生产混合的已制造构建玩具产品族；完整原生范围包括玩具车辆及附件、非电动玩具马达/蒸汽机、娱乐缩尺模型、模型材料零件套件以及构建套装/积木，排除电动玩具马达。本参考角色仅代表一种配置齐全的机械塑料拼搭套装：所有必需玩具元件、实际已装配子部件、固着装饰和随附的功能性纸质说明书，经唯一首次放行。树脂、单个备件积木、模具、火车零件或仅待重新包装的外购整套成品均不能占据该角色。宽泛身份不固定CAS、聚合物配方、等级、地理、尺寸、年龄、性能或电气设备；必须核对真实整套规格及上游边界。 本服务事件保留原首次放行身份/cohort Q_H及实际观测H。完整实物毛V_H保留真实材料/水状态变化；独立测原/当前内容及状况，不假设接收/退回等重。内部首次放行交接仅为匹配抵消台账，不是另一次外购或Q；本行不得再次承担原制造。 本行仅真实向所有者外返，与fg_dispatch互斥。同一实物发运若为此所有者返还，不再另计一份毛发运；保留完整湿质量和一个真实增量服务owner。 | `lego-whole-set-process`; `ilcd-2010-attributional` |
| b_inventory_service_contaminated_wipe | `service_contaminated_wipe` | 仅一个真实实物分收的完整棉布出口，含基材滞留聚合物油墨清洗剂水一次。完整湿Qt、实际组成及接收处理总需求与各批A/Q或A_H/Q_H独立。若归真实混废出口，本项仅非加总来源子账，不新增外部废物供方。发生未知不是零，只有实物分离才有独立组分出口。 | `ilcd-2010-attributional` |
| b_inventory_service_effluent | `service_effluent` | 真实放行后作业独立实测湿废水，包含失败/未获准作业，处理一次，不能因试验失败就虚构不存在。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_service_reject | `service_reject` | 真实受损/撤回已放行套装归原cohort，保留状况/湿质量、原制造及增量作业/处理，不造负Q，不假定维修恢复。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_service_mixed | `service_mixed` | 仅一个真实混废出口，整份湿毛V_H及一个provider/处理；各包装originW及真实部件/材料独立量测为非加和子账，不强造重复出口。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_service_n2_out | `service_n2_out` | 本物理边界真实氮气空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_service_o2_out | `service_o2_out` | 本物理边界真实氧气空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_service_ar_out | `service_ar_out` | 本物理边界真实氩气空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_service_h2o_out | `service_h2o_out` | 本物理边界真实水蒸气空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 本行仅为非包装FG/室内/过程水事件；已单列包装湿交换仅归pack_water_in/out，从本同侧总事件去重，绝不冲库存。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_service_co2_out | `service_co2_out` | 本物理边界真实二氧化碳空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| b_inventory_service_styrene_air | `service_styrene_air` | 仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。 | `ifc-plastic-products-2007` |
| b_inventory_service_phenol_air | `service_phenol_air` | 仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。 | `ifc-plastic-products-2007` |
| b_inventory_service_butadiene_air | `service_butadiene_air` | 仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。 | `ifc-plastic-products-2007` |
| b_inventory_service_ipa_air | `service_ipa_air` | 仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。 | `ifc-plastic-products-2007` |
| b_inventory_service_fossilco2_air | `service_fossilco2_air` | 仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。 | `ifc-plastic-products-2007` |
| b_inventory_service_bioco2_air | `service_bioco2_air` | 仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。 | `ifc-plastic-products-2007` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| make | 完整套装制造 | required | 真实供料到完整套装首次放行 | foreground | 1 kg首次放行完整套装净内容 |
| pack | 跨首次放行包装池 | conditional | 放行前后每真实包装事件，明确时点 | foreground | 放行前每kg制造Q；放行后每kg原Q_H |
| service | 原cohort真实门内服务 | conditional | 首次放行后观测H内实际执行 | foreground | 每kg原首次放行Q_H，不造新Q |

按真实工序分别采料批、机台/模具/型腔、颜色、调湿/干燥、塑化充模、保压冷却脱模、修边/回磨、装饰/干燥、子部件装配、零件存储配齐及整套测试。部件可由不同模具/工厂供货，须保留实测追溯与内部WIP交接，不能把仅外箱拼装当全部制造。各卡条件控制适用性，不能删除已发生作业；数量规则中的同一次商是唯一归一化。每个实际额外单一交换须在完成具体数据集前补卡；无身份或数量不是零。

### 过程：完整套装制造 (`make`)

#### 输入

##### 产品流

###### 实际已履行注塑机服务（`machine_fulfilled_service`）

仅声明配置及原批的实际已观测服务，记录真实工况使用期间、产能及正当相容供方或自有资产负荷向量。新旧购入退回退役、在装流体部件及完整湿持有另记，不把留存机器按每kg玩具耗用。已含部件充注与独立供货卡互斥。不设名义寿命机器质量服务产能或替换期。h仅用于实际计时服务及相容实测换算；供方产能换算未知仍未决。复用布保留实际清洗污染整件退役历史，一次布耗用不再收费复用服务。

- 选定流：实际已履行注塑机服务
- 流属性/单位：Time / h
- 数量规则：真实原单位转换及独立正当分子批次记账后，仅使用第8节已存唯一a，不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_actual_asset_service`
- 来源：`ilcd-2010-attributional`

###### 实际已履行钢制注塑模具服务（`mould_fulfilled_service`）

仅声明配置及原批的实际已观测服务，记录真实工况使用期间、产能及正当相容供方或自有资产负荷向量。新旧购入退回退役、在装流体部件及完整湿持有另记，不把留存机器按每kg玩具耗用。已含部件充注与独立供货卡互斥。不设名义寿命机器质量服务产能或替换期。h仅用于实际计时服务及相容实测换算；供方产能换算未知仍未决。复用布保留实际清洗污染整件退役历史，一次布耗用不再收费复用服务。

- 选定流：实际已履行钢制注塑模具服务
- 流属性/单位：Time / h
- 数量规则：真实原单位转换及独立正当分子批次记账后，仅使用第8节已存唯一a，不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_actual_asset_service`
- 来源：`ilcd-2010-attributional`

###### 实际已履行棉质清洗布服务（`cloth_fulfilled_service`）

仅声明配置及原批的实际已观测服务，记录真实工况使用期间、产能及正当相容供方或自有资产负荷向量。新旧购入退回退役、在装流体部件及完整湿持有另记，不把留存机器按每kg玩具耗用。已含部件充注与独立供货卡互斥。不设名义寿命机器质量服务产能或替换期。h仅用于实际计时服务及相容实测换算；供方产能换算未知仍未决。复用布保留实际清洗污染整件退役历史，一次布耗用不再收费复用服务。

- 选定流：实际已履行棉质清洗布服务
- 流属性/单位：Time / h
- 数量规则：真实原单位转换及独立正当分子批次记账后，仅使用第8节已存唯一a，不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_actual_asset_service`
- 来源：`ilcd-2010-attributional`

###### 制造完整污染棉布实际处理服务（`make_contaminated_wipe_treatment`）

完整转移Qt所对应真实完整已履行供方需求，含整基材滞留料水及真实接收工序相容性。供方总量一次且各原批归属向量互不重叠，不缩实物出口或每批重复总量。同一实物事件的混出口供方与本独立供方互斥，整份供方汇总与展开历史不重复。接收方法归属未知仍未决，不假处理信用。

- 选定流：制造完整污染棉布实际处理服务
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：真实原单位转换及独立正当分子批次记账后，仅使用第8节已存唯一a，不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ilcd-2010-attributional`

###### ABS粒料供货 (`abs_feed`)

接收真实完整的本色或预着色ABS粒料制剂，上游生产只继承一次。原生Product为ABS粒料，Mass/kg，不固定等级、CAS、添加剂、地理或加工路线。仅用于实际供货状态已说明的ABS粒料，不用于单体、粉末、板材、EPS、未知填充共混物或成品积木。供方已含色料/稳定剂/水只作非加和子账；另购色母粒仅在尚未包含时另计，不能假定整套都是ABS。

- 选定流：丙烯腈-丁二烯-苯乙烯共聚物粒料（ABS） `4f197be0-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007`

###### PP元件 (`pp_feed`)

按真实BOM和独立供货条件纳入，整份供货制剂只继承一次。原生Product为工厂生产混合的PP粒料，上游丙烯聚合；仅用于成分相容的真实独立外供PP粒料，不替代再生PP、PE或成品，不能假设均聚/共聚等级或比例。

- 选定流：聚丙烯粒料（PP） `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-material-purpose`; `ifc-plastic-products-2007`

###### HIPS元件 (`hips_feed`)

按真实BOM和独立供货条件纳入，整份供货制剂只继承一次。原生Product为工厂生产混合的HIPS粒料，抗冲改性苯乙烯聚合；必须是真实HIPS粒料和相符的橡胶改性聚合物，GPPS、EPS、ABS分别区别。原生恢复来源保留物理身份，不提供再生比例、等级或工厂配方。

- 选定流：高抗冲聚苯乙烯粒料（HIPS） `4f19a303-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-material-purpose`; `ifc-plastic-products-2007`

###### PC元件 (`pc_feed`)

按真实BOM和独立供货条件纳入，整份供货制剂只继承一次。原生Product为全球工厂生产混合的PC粒料，不固定路线、等级或CAS。仅用于真实聚碳酸酯粒料，不替代MABS、PC/ABS共混物、成品连接件或任意透明塑料。GLO身份不证明供方地理或provider代表性。

- 选定流：聚碳酸酯颗粒 `f4ad7c9a-3141-4c38-b932-45b7e67e05c6`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-material-purpose`; `ifc-plastic-products-2007`

###### 聚酰胺6粒料 (`pa6_feed`)

仅当真实材料独立证实为PA6时纳入；通用PA证据不决定PA6还是PA66。供货配方及含水整份只计一次。

- 选定流：聚酰胺6粒料
- 流属性/单位：质量 / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007`

###### 聚甲醛粒料 (`pom_feed`)

真实POM粒料供货时纳入，区别真实均聚/共聚等级和添加剂，硅烷等查询邻近物不是POM。

- 选定流：聚甲醛粒料
- 流属性/单位：质量 / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007`

###### 苯乙烯-乙烯-丁烯-苯乙烯配混粒料 (`sebs_feed`)

仅真实整份SEBS配混粒料时纳入，区别SBS、橡胶硫化、油/填料含量和外供成品轮胎，不默认存在弹性体零件。

- 选定流：苯乙烯-乙烯-丁烯-苯乙烯配混粒料
- 流属性/单位：质量 / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007`

###### 热塑性聚氨酯配混粒料 (`tpu_feed`)

真实TPU粒料时纳入，区别反应型热固性聚氨酯和其他热塑性弹性体；不由玩具实例推定树脂配方。

- 选定流：热塑性聚氨酯配混粒料
- 流属性/单位：质量 / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007`

###### ABS载体色母粒 (`colour_masterbatch`)

仅真实独立采购且与元件相容的一份ABS载体色母粒制剂。载体/颜料/添加剂分析不构成再次采购；真实其他载体需另卡。不能用助剂反应代理或纯颜料替代，不设添加率。

- 选定流：ABS载体色母粒
- 流属性/单位：质量 / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007`

###### 玩具元件装饰油墨制剂 (`decoration_ink`)

仅在实际印刷元件时记录一份真实溶剂/水/粘结料/颜料状态的外供装饰油墨。采SDS、完整配方身份、施印/干燥规格和留膜质量，不预设水性、喷墨、凹版或平版。已含载水/溶剂不再采购；真实厂内配墨时用逐项外购原料及配制能耗损失替代重叠的整份制剂。

- 选定流：玩具元件装饰油墨制剂
- 流属性/单位：质量 / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007`

###### 异丙醇水溶液清洗制剂 (`ipa_cleaner`)

实际外供整份异丙醇水性清洗剂时纳入，载水/添加剂只计一次，实测浓度；不默认70%或纯度，不使用基本流异丙醇排放或限定光学装配的Product。

- 选定流：异丙醇水溶液清洗制剂
- 流属性/单位：质量 / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007`

###### 异丙醇液体试剂 (`ipa_neat`)

仅实际另购用于厂内稀释或清洗的纯异丙醇，独立计量，与外购油墨/清洗剂内已含异丙醇不重叠。真实稀释水及制备损失分别计；CAS67-63-0液体物料，不采用不相容的供方限定原生行。

- 选定流：异丙醇液体试剂
- 流属性/单位：质量 / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007`

###### 拼搭套装印刷说明书 (`instructions`)

仅实际随附纸质说明时，从真实印刷/装订供方采购一份完整说明书。它是套装的功能性信息组件，属于净Q，不是运输包装；上游纸、墨、装订由外供说明书只承担一次，不能重复购买。真实厂内印刷须各真实纸/墨/能源/损失卡并取消重叠整件投入；仅数字说明不能推定纸数量。

- 选定流：拼搭套装印刷说明书
- 流属性/单位：质量 / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007`

###### ABS拼搭玩具成品元件 (`bought_abs_element`)

条件纳入一个身份明确的外部已完成ABS玩具元件，真实形状/颜色/印刷/状态及供方注塑/装饰负荷齐全；仅替代该部件制造，不能替代整套。按组件核对自制/外购，不对同一供货元件同时计树脂和本地注塑；火车专用注塑件不是本通用构建元件。

- 选定流：ABS拼搭玩具成品元件
- 流属性/单位：质量 / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007`

###### 已装配机械拼搭玩具小人 (`bought_subassembly`)

仅条件纳入真实外部完成的机械小人子总成，完整实测材料组成及供方路线。不是电机、遥控单元或整套拼搭成品；整件与组分投入必须互斥，或桥接并抵消内部交接。

- 选定流：已装配机械拼搭玩具小人
- 流属性/单位：质量 / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007`

###### 棉质清洁布 (`cotton_wipe`)

真实清洗/检验棉布时纳入；整块供货质量与吸附液独立测量，吸附水不得重复加总，不是纸巾或整份清洗剂。

- 选定流：棉质清洁布
- 流属性/单位：质量 / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007`

###### 矿物润滑油制剂 (`mineral_lube`)

真实矿物油基整份润滑制剂时纳入，原生PAO全合成润滑油不能互换。整份供货、在装/排出流体与服务使用分别追踪，不能每kg产品购买整次充注。

- 选定流：矿物润滑油制剂
- 流属性/单位：质量 / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007`

###### 丙二醇水性冷却液制剂 (`coolant`)

仅真实整份丙二醇水性冷却液，独立量测浓度、载水、相态和服务状态。制剂已含水为子账而非第二供水，在装存量与真实补加/排出均保留；其他真实冷却液化学品另卡。

- 选定流：丙二醇水性冷却液制剂
- 流属性/单位：质量 / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-whole-set-process`; `lego-material-purpose`; `ifc-plastic-products-2007`

###### 制造用电 (`electricity_make`)

计量接收/实际调湿干燥、熔融充模/冷却脱模、修边、内部回磨、零件搬运、装饰干燥、组件装配、计数、测试、公用工程及全部失败/启停/空转/清理/返工用电。原生Product为中国低于1kV低压交流电，电网平均消费组合到用户，以Net calorific value作为MJ电能接口，不是Mass或燃料燃烧。核对真实地理/电压/provider/时段；kWh以3.6一次转MJ，其他供电另用相容行。 真实首次放行前包装/计数/查错用电纳入一次；放行后包装用电仅归service_electricity。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`lego-whole-set-process`; `ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 制造自来水 (`tap_make`)

真实供方处理市政饮用液态水用于独立调湿、清洗、测试或冷却补水。原生Product为工厂生产混合的制水/供水，参考Mass/kg；次级Volume不是实测密度。逐用途和水态记录，必要时用独立实测密度转换原单位；不假设冷却回路，不作基本流淡水开采，不重复采购制剂载水。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`

###### 液压流体供货 (`hydraulic_fill`)

仅真实液压系统的完整工程液压流体，矿物或合成基础油及真实添加剂。原生Product参考Volume/m3，不是Mass/kg。独立计量供货液体体积及状态对应密度用于湿质量账，不能从别的系数或水反推。实际全电机器可能无此流体。在装存量、真实新充/补加、排出互不重叠，服务负荷不是每kg分配整份实物存量。 原生分类置于石油润滑剂，而物理备注允许矿物或合成基础油，须单独披露此分类局限；它不证明任何石油比例，也不允许忽视真实液体制剂相容性。

- 选定流：液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 热水传递工艺热 (`delivered_heat`)

仅真实外供有效热，记录供方热源、真实质量/相态/T/P/焓和供回约定，不预设燃气锅炉、蒸汽或燃料；另列载热质量腿不重复购买热provider。

- 选定流：热水传递工艺热
- 流属性/单位：能量 / MJ
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 热液态水载热介质 (`carrier_in`)

真实外部热液水载体进入，以完整实物毛V记录，配独立实测回流状态，明确热/水供方所有权，不自动另购水或蒸汽。

- 选定流：热液态水载热介质
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 压缩空气 (`air_supply`)

仅真实外购整份压缩空气混合物，记录压力/组分/含湿及供方能耗边界。现场压缩改采真实电力和环境物种摄入；选择互斥采购或整份/组分桥接，同一空气供货组分不能再计一份环境摄入。

- 选定流：压缩空气
- 流属性/单位：质量 / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A、D=制造Q。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 完整注塑机 (`machine_in`)

仅真实外部接收的新/旧完整注塑机，身份明确。实物毛质量V与继承向量存量区别于使用服务负荷；不假设机重、寿命、射次或每kg一整机。真实在装流体/部件与整机核对只计一次。

- 选定流：完整注塑机
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 完整钢制注塑模具 (`mould_in`)

仅真实配置完整钢制模具接收，明确型腔/镶件/冷却/浇注界面和供方工装负荷。毛质量V不按经济份额缩，实际使用服务向量凭因果证据只提取一次；不设寿命或射次，同一成品模具不再买原钢材。

- 选定流：完整钢制注塑模具
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 钢制顶针 (`pin_new`)

真实单独新更换钢制顶针，不是整模、焊接维修总成或钢材炉料。即使新增量仍留期末备件库，也保留入流及完整在装/未用存量。

- 选定流：钢制顶针
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

##### 废物流

##### 基本流

###### 氮气摄入 (`make_n2_in`)

本物理边界真实氮气环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。

- 选定流：氮气
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 氧气摄入 (`make_o2_in`)

本物理边界真实氧气环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。

- 选定流：氧气
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 氩气摄入 (`make_ar_in`)

本物理边界真实氩气环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。

- 选定流：氩气
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 水蒸气摄入 (`make_h2o_in`)

本物理边界真实水蒸气环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 本行仅为非包装未放行原料/WIP/室内/过程水事件；已单列包装湿交换仅归pack_water_in/out，从本同侧总事件去重，绝不冲库存。

- 选定流：水蒸气
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 二氧化碳摄入 (`make_co2_in`)

本物理边界真实二氧化碳环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。

- 选定流：二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

#### 输出

##### 产品流

###### 完整套装首次放行 (`finished_release`)

该原生 Product flow 是工厂生产混合的已制造构建玩具产品族；完整原生范围包括玩具车辆及附件、非电动玩具马达/蒸汽机、娱乐缩尺模型、模型材料零件套件以及构建套装/积木，排除电动玩具马达。本参考角色仅代表一种配置齐全的机械塑料拼搭套装：所有必需玩具元件、实际已装配子部件、固着装饰和随附的功能性纸质说明书，经唯一首次放行。树脂、单个备件积木、模具、火车零件或仅待重新包装的外购整套成品均不能占据该角色。宽泛身份不固定CAS、聚合物配方、等级、地理、尺寸、年龄、性能或电气设备；必须核对真实整套规格及上游边界。

- 选定流：玩具电动火车及其轨道、信号灯和其他配件，缩小尺寸（"比例"）模型组装套件和其他建筑套件及建筑玩具 `2bd3de2a-c26e-4e9b-a00e-f1ec12763eea`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：`lego-whole-set-process`; `lego-material-purpose`; `lego-profile-manufacturing`

###### 返回液态水载热介质 (`carrier_return`)

仅真实向热/水供方的外部Product返回，实测质量/相态/T/P/焓；完整毛V，不是Waste，不自动credit、不重复供方或虚构蒸汽回路。

- 选定流：返回液态水载热介质
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

##### 废物流

###### 制造完整污染棉布废物（`make_contaminated_wipe`）

仅一个真实实物分收的完整棉布出口，含基材滞留聚合物油墨清洗剂水一次。完整湿Qt、实际组成及接收处理总需求与各批A/Q或A_H/Q_H独立。若归真实混废出口，本项仅非加总来源子账，不新增外部废物供方。发生未知不是零，只有实物分离才有独立组分出口。

- 选定流：制造完整污染棉布废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：真实原单位转换及独立正当分子批次记账后，仅使用第8节已存唯一a，不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ilcd-2010-attributional`

###### ABS浇口流道废物 (`abs_sprue_waste`)

仅真实单独外送的一股已识别ABS浇口流道废物。清洁内部回磨为有谱系及损失的WIP，不造新树脂采购/信用。普通废物销售保留制造和搬运/处理负荷。

- 选定流：ABS浇口流道废物
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 不合格机械拼搭玩具套装 (`rejected_set`)

真实分出口的不合格整套，实际状态完整净内容；从未放行者不入Q，已唯一放行者保留原cohort。失败样品/被拒返工保留真实废物/hold，不假定可恢复产品。

- 选定流：不合格机械拼搭玩具套装
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 捕集热塑性成型粉尘 (`polymer_dust`)

真实单股捕集颗粒废物，测聚合物组成及湿质量，不再作为空气排放；仅混废处置时作该唯一出口的非加和来源子账。

- 选定流：捕集热塑性成型粉尘
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 废玩具装饰油墨制剂 (`spent_ink`)

真实单独移出的整份余墨，量测载液及实际污染，不暗含溶剂蒸发、与新墨相同或自动共产品销售。

- 选定流：废玩具装饰油墨制剂
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 塑料玩具制造清洗废水 (`make_effluent`)

一股真实独立湿清洗废水出口，实测液体及固体整份一次，披露处理provider及去向；COD/TOC/VOC是指标，不是特定化学质量，不采用锰渣洗涤废水。

- 选定流：塑料玩具制造清洗废水
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 废丙二醇水性冷却液 (`coolant_removed`)

真实排出整份冷却液，载水/溶质及污染独立测量；继承服务和废物处理只归一次，不叠加整份与组分出口。

- 选定流：废丙二醇水性冷却液
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 废液压流体 (`hydraulic_removed`)

真实排出液压流体湿质量及独立体积/状态，不假设排出等于新充；保留真实期末在机流体和实际入流。

- 选定流：废液压流体
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 报废钢制顶针 (`pin_removed`)

真实移出旧顶针，自有实测质量/cohort；不假定与新针等重，也不是整模。

- 选定流：报废钢制顶针
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 报废钢制注塑模具 (`mould_scrap`)

真实整模退役/外送，完整毛V；核对已拆镶件及留存模具避免重复，不自动给再生信用或扣既有已执行服务。

- 选定流：报废钢制注塑模具
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 报废注塑机 (`machine_scrap`)

真实整机外送，完整实测湿毛V；排出流体/部件与余机质量互斥核对，不按分配缩实物，也不抹去已执行服务。

- 选定流：报废注塑机
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 塑料玩具制造混合固体废物 (`mixed_waste`)

仅真实实物混合出口时使用一个出口，整份湿质量及处理/provider一次；拒品、布、尘及各包装池originW独立量测为非加和子账，不虚构分出口，不叠加总量及来源。普通处置/销售不转走制造负荷。

- 选定流：塑料玩具制造混合固体废物
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

##### 基本流

###### 氮气流出 (`make_n2_out`)

本物理边界真实氮气空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。

- 选定流：氮气
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 氧气流出 (`make_o2_out`)

本物理边界真实氧气空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。

- 选定流：氧气
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 氩气流出 (`make_ar_out`)

本物理边界真实氩气空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。

- 选定流：氩气
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 水蒸气流出 (`make_h2o_out`)

本物理边界真实水蒸气空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 本行仅为非包装未放行原料/WIP/室内/过程水事件；已单列包装湿交换仅归pack_water_in/out，从本同侧总事件去重，绝不冲库存。

- 选定流：水蒸气
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 二氧化碳流出 (`make_co2_out`)

本物理边界真实二氧化碳空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。

- 选定流：二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 苯乙烯排放 (`make_styrene_air`)

仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。

- 选定流：苯乙烯
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`

###### 苯酚排放 (`make_phenol_air`)

仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。

- 选定流：苯酚
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`

###### 1,3-丁二烯排放 (`make_butadiene_air`)

仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。

- 选定流：1,3-丁二烯
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`

###### 异丙醇排放 (`make_ipa_air`)

仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。

- 选定流：异丙醇
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`

###### 化石碳源二氧化碳排放 (`make_fossilco2_air`)

仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。

- 选定流：化石碳源二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`

###### 生物碳源二氧化碳排放 (`make_bioco2_air`)

仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。

- 选定流：生物碳源二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V、D=制造Q。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_make`
- 来源：`ifc-plastic-products-2007`

### 过程：跨首次放行的包装池 (`pack`)

#### 输入

##### 产品流

###### 托盘维修锯木件 (`pallet_wood_in`)

真实独立供应单件维修锯木，测树种/等级/水分，不是整托盘。X_in仅与其他同侧入流去重，不冲库存；新增量即使留在期末湿托盘/备件中也保留。

- 选定流：托盘维修锯木件
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 托盘维修钢钉 (`pallet_nail_in`)

真实独立维修钢钉，不是整托盘或钢螺钉。原外供托盘已含原钉一次，真实新增钢钉入流与完整期末存量保留。

- 选定流：托盘维修钢钉
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### P单独采购空件——印刷折叠纸板套装盒 (`set_box_p`)

一个真实外供完整印刷折叠纸板销售盒，纸板/印刷/胶/水态整份一次，不是玩具净内容或瓦楞运输纸箱。 P单独采购空件：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：印刷折叠纸板套装盒
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### I供方随货带入——印刷折叠纸板套装盒 (`set_box_i`)

一个真实外供完整印刷折叠纸板销售盒，纸板/印刷/胶/水态整份一次，不是玩具净内容或瓦楞运输纸箱。 I供方随货带入：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：印刷折叠纸板套装盒
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### ER外部返回接收——印刷折叠纸板套装盒 (`set_box_er`)

一个真实外供完整印刷折叠纸板销售盒，纸板/印刷/胶/水态整份一次，不是玩具净内容或瓦楞运输纸箱。 ER外部返回接收：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：印刷折叠纸板套装盒
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### P单独采购空件——纸-聚乙烯复合内袋 (`inner_bag_p`)

一个真实外供完整涂覆纸内袋，纸/PE涂层/封口/水整份一次，不能用纯牛皮纸、PE膜或另购纸加涂层替代整件；真实纯纸袋或塑料袋需各自实际身份。 P单独采购空件：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：纸-聚乙烯复合内袋
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### I供方随货带入——纸-聚乙烯复合内袋 (`inner_bag_i`)

一个真实外供完整涂覆纸内袋，纸/PE涂层/封口/水整份一次，不能用纯牛皮纸、PE膜或另购纸加涂层替代整件；真实纯纸袋或塑料袋需各自实际身份。 I供方随货带入：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：纸-聚乙烯复合内袋
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### ER外部返回接收——纸-聚乙烯复合内袋 (`inner_bag_er`)

一个真实外供完整涂覆纸内袋，纸/PE涂层/封口/水整份一次，不能用纯牛皮纸、PE膜或另购纸加涂层替代整件；真实纯纸袋或塑料袋需各自实际身份。 ER外部返回接收：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：纸-聚乙烯复合内袋
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### P单独采购空件——PE包裹薄膜 (`pe_wrap_p`)

原生Product为CAS9002-88-4聚乙烯薄膜，工厂生产混合，已成膜，不固定等级/密度/地理。仅真实聚乙烯包裹膜，不是PET、PVC、涂覆纸袋或整包；原生备注将PET列作对比，不使其成为同义物。 P单独采购空件：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### I供方随货带入——PE包裹薄膜 (`pe_wrap_i`)

原生Product为CAS9002-88-4聚乙烯薄膜，工厂生产混合，已成膜，不固定等级/密度/地理。仅真实聚乙烯包裹膜，不是PET、PVC、涂覆纸袋或整包；原生备注将PET列作对比，不使其成为同义物。 I供方随货带入：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### ER外部返回接收——PE包裹薄膜 (`pe_wrap_er`)

原生Product为CAS9002-88-4聚乙烯薄膜，工厂生产混合，已成膜，不固定等级/密度/地理。仅真实聚乙烯包裹膜，不是PET、PVC、涂覆纸袋或整包；原生备注将PET列作对比，不使其成为同义物。 ER外部返回接收：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### P单独采购空件——瓦楞运输纸箱 (`carton_p`)

一个真实完整瓦楞运输纸箱，实际组成/湿态；不能使用被原生声明排除质量衡算的未知组成包装，也不强设16.6/83.4纤维配方。整箱一次承担供方制造/印刷/胶负荷。 P单独采购空件：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：瓦楞运输纸箱
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### I供方随货带入——瓦楞运输纸箱 (`carton_i`)

一个真实完整瓦楞运输纸箱，实际组成/湿态；不能使用被原生声明排除质量衡算的未知组成包装，也不强设16.6/83.4纤维配方。整箱一次承担供方制造/印刷/胶负荷。 I供方随货带入：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：瓦楞运输纸箱
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### ER外部返回接收——瓦楞运输纸箱 (`carton_er`)

一个真实完整瓦楞运输纸箱，实际组成/湿态；不能使用被原生声明排除质量衡算的未知组成包装，也不强设16.6/83.4纤维配方。整箱一次承担供方制造/印刷/胶负荷。 ER外部返回接收：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：瓦楞运输纸箱
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### P单独采购空件——木制搬运托盘 (`pallet_p`)

原生Product为工厂生产混合的已制造木制便携承载平台，产品族还含装载板/围板，本角色仅一个真实完整托盘。不固定欧标尺寸、树种、水分、处理、寿命或钉比例；整托盘原含木/钉为非加和组成，真实维修木/钉/水各自原子卡。 P单独采购空件：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### I供方随货带入——木制搬运托盘 (`pallet_i`)

原生Product为工厂生产混合的已制造木制便携承载平台，产品族还含装载板/围板，本角色仅一个真实完整托盘。不固定欧标尺寸、树种、水分、处理、寿命或钉比例；整托盘原含木/钉为非加和组成，真实维修木/钉/水各自原子卡。 I供方随货带入：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### ER外部返回接收——木制搬运托盘 (`pallet_er`)

原生Product为工厂生产混合的已制造木制便携承载平台，产品族还含装载板/围板，本角色仅一个真实完整托盘。不固定欧标尺寸、树种、水分、处理、寿命或钉比例；整托盘原含木/钉为非加和组成，真实维修木/钉/水各自原子卡。 ER外部返回接收：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### P单独采购空件——带PE内衬及缝线的编织聚丙烯树脂袋 (`resin_sack_p`)

一个真实整份编织PP树脂供货袋，真实PE内衬/缝线/封口/水分一次，组成及内衬存在须供方证据。另购内衬或线仅真实互斥替换时另卡，不能再次购买同一整袋组分。 P单独采购空件：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：带PE内衬及缝线的编织聚丙烯树脂袋
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### I供方随货带入——带PE内衬及缝线的编织聚丙烯树脂袋 (`resin_sack_i`)

一个真实整份编织PP树脂供货袋，真实PE内衬/缝线/封口/水分一次，组成及内衬存在须供方证据。另购内衬或线仅真实互斥替换时另卡，不能再次购买同一整袋组分。 I供方随货带入：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：带PE内衬及缝线的编织聚丙烯树脂袋
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### ER外部返回接收——带PE内衬及缝线的编织聚丙烯树脂袋 (`resin_sack_er`)

一个真实整份编织PP树脂供货袋，真实PE内衬/缝线/封口/水分一次，组成及内衬存在须供方证据。另购内衬或线仅真实互斥替换时另卡，不能再次购买同一整袋组分。 ER外部返回接收：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：带PE内衬及缝线的编织聚丙烯树脂袋
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### P单独采购空件——带盖HDPE油墨桶 (`ink_pail_p`)

一个真实外供带盖HDPE油墨桶，实际材质及湿残留状态，不是PET、钢桶、液态油墨或纸袋。桶内余墨用互不重叠的内容/容器桥核对。 P单独采购空件：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：带盖HDPE油墨桶
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### I供方随货带入——带盖HDPE油墨桶 (`ink_pail_i`)

一个真实外供带盖HDPE油墨桶，实际材质及湿残留状态，不是PET、钢桶、液态油墨或纸袋。桶内余墨用互不重叠的内容/容器桥核对。 I供方随货带入：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：带盖HDPE油墨桶
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### ER外部返回接收——带盖HDPE油墨桶 (`ink_pail_er`)

一个真实外供带盖HDPE油墨桶，实际材质及湿残留状态，不是PET、钢桶、液态油墨或纸袋。桶内余墨用互不重叠的内容/容器桥核对。 ER外部返回接收：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：带盖HDPE油墨桶
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### P单独采购空件——碳钢流体桶 (`fluid_drum_p`)

一个真实液压/冷却/润滑流体供货用整份碳钢桶，真实封口/内涂层一次；流体是内容而非桶，整湿桶与相同内装液不能重叠加总。 P单独采购空件：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：碳钢流体桶
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### I供方随货带入——碳钢流体桶 (`fluid_drum_i`)

一个真实液压/冷却/润滑流体供货用整份碳钢桶，真实封口/内涂层一次；流体是内容而非桶，整湿桶与相同内装液不能重叠加总。 I供方随货带入：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：碳钢流体桶
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### ER外部返回接收——碳钢流体桶 (`fluid_drum_er`)

一个真实液压/冷却/润滑流体供货用整份碳钢桶，真实封口/内涂层一次；流体是内容而非桶，整湿桶与相同内装液不能重叠加总。 ER外部返回接收：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：碳钢流体桶
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

##### 废物流

##### 基本流

###### 包装吸收水 (`pack_water_in`)

普通仓储/搬运时本包装池实际独立吸收的环境H2O水蒸气，与非包装service_h2o_in分开量测，不虚构维修许可。整湿P/I/ER已含水一次。X_in仅与其他同侧入流去重，新增吸水及完整湿期末存量均保留。真实外供维修/清洗液态水改由service_water承担其Product owner并作非加和池子账。

- 选定流：包装吸收水
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

#### 输出

##### 产品流

###### S实物毛发运——印刷折叠纸板套装盒 (`set_box_s`)

一个真实外供完整印刷折叠纸板销售盒，纸板/印刷/胶/水态整份一次，不是玩具净内容或瓦楞运输纸箱。 S实物毛发运：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：印刷折叠纸板套装盒
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### EO向外返回——印刷折叠纸板套装盒 (`set_box_eo`)

一个真实外供完整印刷折叠纸板销售盒，纸板/印刷/胶/水态整份一次，不是玩具净内容或瓦楞运输纸箱。 EO向外返回：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：印刷折叠纸板套装盒
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### S实物毛发运——纸-聚乙烯复合内袋 (`inner_bag_s`)

一个真实外供完整涂覆纸内袋，纸/PE涂层/封口/水整份一次，不能用纯牛皮纸、PE膜或另购纸加涂层替代整件；真实纯纸袋或塑料袋需各自实际身份。 S实物毛发运：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：纸-聚乙烯复合内袋
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### EO向外返回——纸-聚乙烯复合内袋 (`inner_bag_eo`)

一个真实外供完整涂覆纸内袋，纸/PE涂层/封口/水整份一次，不能用纯牛皮纸、PE膜或另购纸加涂层替代整件；真实纯纸袋或塑料袋需各自实际身份。 EO向外返回：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：纸-聚乙烯复合内袋
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### S实物毛发运——PE包裹薄膜 (`pe_wrap_s`)

原生Product为CAS9002-88-4聚乙烯薄膜，工厂生产混合，已成膜，不固定等级/密度/地理。仅真实聚乙烯包裹膜，不是PET、PVC、涂覆纸袋或整包；原生备注将PET列作对比，不使其成为同义物。 S实物毛发运：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### EO向外返回——PE包裹薄膜 (`pe_wrap_eo`)

原生Product为CAS9002-88-4聚乙烯薄膜，工厂生产混合，已成膜，不固定等级/密度/地理。仅真实聚乙烯包裹膜，不是PET、PVC、涂覆纸袋或整包；原生备注将PET列作对比，不使其成为同义物。 EO向外返回：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### S实物毛发运——瓦楞运输纸箱 (`carton_s`)

一个真实完整瓦楞运输纸箱，实际组成/湿态；不能使用被原生声明排除质量衡算的未知组成包装，也不强设16.6/83.4纤维配方。整箱一次承担供方制造/印刷/胶负荷。 S实物毛发运：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：瓦楞运输纸箱
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### EO向外返回——瓦楞运输纸箱 (`carton_eo`)

一个真实完整瓦楞运输纸箱，实际组成/湿态；不能使用被原生声明排除质量衡算的未知组成包装，也不强设16.6/83.4纤维配方。整箱一次承担供方制造/印刷/胶负荷。 EO向外返回：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：瓦楞运输纸箱
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### S实物毛发运——木制搬运托盘 (`pallet_s`)

原生Product为工厂生产混合的已制造木制便携承载平台，产品族还含装载板/围板，本角色仅一个真实完整托盘。不固定欧标尺寸、树种、水分、处理、寿命或钉比例；整托盘原含木/钉为非加和组成，真实维修木/钉/水各自原子卡。 S实物毛发运：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### EO向外返回——木制搬运托盘 (`pallet_eo`)

原生Product为工厂生产混合的已制造木制便携承载平台，产品族还含装载板/围板，本角色仅一个真实完整托盘。不固定欧标尺寸、树种、水分、处理、寿命或钉比例；整托盘原含木/钉为非加和组成，真实维修木/钉/水各自原子卡。 EO向外返回：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### S实物毛发运——带PE内衬及缝线的编织聚丙烯树脂袋 (`resin_sack_s`)

一个真实整份编织PP树脂供货袋，真实PE内衬/缝线/封口/水分一次，组成及内衬存在须供方证据。另购内衬或线仅真实互斥替换时另卡，不能再次购买同一整袋组分。 S实物毛发运：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：带PE内衬及缝线的编织聚丙烯树脂袋
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### EO向外返回——带PE内衬及缝线的编织聚丙烯树脂袋 (`resin_sack_eo`)

一个真实整份编织PP树脂供货袋，真实PE内衬/缝线/封口/水分一次，组成及内衬存在须供方证据。另购内衬或线仅真实互斥替换时另卡，不能再次购买同一整袋组分。 EO向外返回：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：带PE内衬及缝线的编织聚丙烯树脂袋
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### S实物毛发运——带盖HDPE油墨桶 (`ink_pail_s`)

一个真实外供带盖HDPE油墨桶，实际材质及湿残留状态，不是PET、钢桶、液态油墨或纸袋。桶内余墨用互不重叠的内容/容器桥核对。 S实物毛发运：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：带盖HDPE油墨桶
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### EO向外返回——带盖HDPE油墨桶 (`ink_pail_eo`)

一个真实外供带盖HDPE油墨桶，实际材质及湿残留状态，不是PET、钢桶、液态油墨或纸袋。桶内余墨用互不重叠的内容/容器桥核对。 EO向外返回：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：带盖HDPE油墨桶
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### S实物毛发运——碳钢流体桶 (`fluid_drum_s`)

一个真实液压/冷却/润滑流体供货用整份碳钢桶，真实封口/内涂层一次；流体是内容而非桶，整湿桶与相同内装液不能重叠加总。 S实物毛发运：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：碳钢流体桶
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### EO向外返回——碳钢流体桶 (`fluid_drum_eo`)

一个真实液压/冷却/润滑流体供货用整份碳钢桶，真实封口/内涂层一次；流体是内容而非桶，整湿桶与相同内装液不能重叠加总。 EO向外返回：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：碳钢流体桶
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

##### 废物流

###### 拆出托盘维修木件 (`pallet_wood_out`)

本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。真实拆出木废件，完整湿质量及来源，与整托盘报废互斥。X_out只与其他同侧出流去重，不冲期末存量或入流。

- 选定流：拆出托盘维修木件
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 拆出托盘钢钉 (`pallet_nail_out`)

本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。真实旧钢钉废物单独称量，不假设新旧等重。若实物混废则为唯一混废出口来源子账，不虚构单独外送。

- 选定流：拆出托盘钢钉
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### W单独外送废物——印刷折叠纸板套装盒 (`set_box_w`)

本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。一个真实外供完整印刷折叠纸板销售盒，纸板/印刷/胶/水态整份一次，不是玩具净内容或瓦楞运输纸箱。 W单独外送废物：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：印刷折叠纸板套装盒废物
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### W单独外送废物——纸-聚乙烯复合内袋 (`inner_bag_w`)

本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。一个真实外供完整涂覆纸内袋，纸/PE涂层/封口/水整份一次，不能用纯牛皮纸、PE膜或另购纸加涂层替代整件；真实纯纸袋或塑料袋需各自实际身份。 W单独外送废物：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：纸-聚乙烯复合内袋废物
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### W单独外送废物——PE包裹薄膜 (`pe_wrap_w`)

本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。来源供货Product为CAS9002-88-4聚乙烯薄膜，工厂生产混合，已成膜，不固定等级/密度/地理。仅真实聚乙烯包裹膜，不是PET、PVC、涂覆纸袋或整包；原生备注将PET列作对比，不使其成为同义物。 W单独外送废物：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：PE包裹薄膜废物
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### W单独外送废物——瓦楞运输纸箱 (`carton_w`)

本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。一个真实完整瓦楞运输纸箱，实际组成/湿态；不能使用被原生声明排除质量衡算的未知组成包装，也不强设16.6/83.4纤维配方。整箱一次承担供方制造/印刷/胶负荷。 W单独外送废物：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：瓦楞运输纸箱废物
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### W单独外送废物——木制搬运托盘 (`pallet_w`)

本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。来源供货Product为工厂生产混合的已制造木制便携承载平台，产品族还含装载板/围板，本角色仅一个真实完整托盘。不固定欧标尺寸、树种、水分、处理、寿命或钉比例；整托盘原含木/钉为非加和组成，真实维修木/钉/水各自原子卡。 W单独外送废物：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：木制搬运托盘废物
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### W单独外送废物——带PE内衬及缝线的编织聚丙烯树脂袋 (`resin_sack_w`)

本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。一个真实整份编织PP树脂供货袋，真实PE内衬/缝线/封口/水分一次，组成及内衬存在须供方证据。另购内衬或线仅真实互斥替换时另卡，不能再次购买同一整袋组分。 W单独外送废物：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：带PE内衬及缝线的编织聚丙烯树脂袋废物
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### W单独外送废物——带盖HDPE油墨桶 (`ink_pail_w`)

本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。一个真实外供带盖HDPE油墨桶，实际材质及湿残留状态，不是PET、钢桶、液态油墨或纸袋。桶内余墨用互不重叠的内容/容器桥核对。 W单独外送废物：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：带盖HDPE油墨桶废物
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### W单独外送废物——碳钢流体桶 (`fluid_drum_w`)

本选定交换为Waste，没有采用原生Product UUID。以下来源整件材料限制描述被废弃整件，不构成Product绑定。一个真实液压/冷却/润滑流体供货用整份碳钢桶，真实封口/内涂层一次；流体是内容而非桶，整湿桶与相同内装液不能重叠加总。 W单独外送废物：仅本池真实发生该事件时使用，整湿P/I/ER一次。保留空件、附着WIP、附着FG、可复用件的期初/期末。必须记录真实事件时点；首次放行前用完整原生实物毛V及制造Q，首次放行后用完整毛V_H及原Q_H，不用A_H、库存差、经济份额或净产品Q。P可有一次真实采购；I保留一个明示上游owner，ER/S/EO不再购买且不自动credit。W仅在真实独立分出口时为外部卡；若实际仅一股混废，originW在该出口/池独立测量子账，不另加实物出口。内部复用抵消，真实放行前包装作业归制造Q，真实放行后作业归原cohort Q_H及观测H；一个事件及其负荷owner仅进入一个时段，不能两边重复。

- 选定流：碳钢流体桶废物
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

##### 基本流

###### 包装蒸发水 (`pack_water_out`)

普通仓储/搬运或真实作业时本包装池独立蒸发的H2O水蒸气，独立量测并排除非包装service_h2o_out。整湿S/EO/W已含留存水一次，不能另加重叠游离水总量。X_out仅与其他同侧出流去重，不冲库存或入水；许可/合格状态不能删实际事件。

- 选定流：包装蒸发水
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：实际放行前事件N=完整毛腿V、D=制造Q；实际放行后事件N=完整毛腿V_H、D=原Q_H。按事件时点二者互斥；负荷owner另一次归制造A或服务A_H，实物不作库存差/经济缩量/重复采购/自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

### 过程：原cohort实际门内服务 (`service`)

#### 输入

##### 产品流

###### 原批次服务完整污染棉布实际处理服务（`service_contaminated_wipe_treatment`）

完整转移Qt所对应真实完整已履行供方需求，含整基材滞留料水及真实接收工序相容性。供方总量一次且各原批归属向量互不重叠，不缩实物出口或每批重复总量。同一实物事件的混出口供方与本独立供方互斥，整份供方汇总与展开历史不重复。接收方法归属未知仍未决，不假处理信用。

- 选定流：原批次服务完整污染棉布实际处理服务
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：真实原单位转换及独立正当分子批次记账后，仅使用第8节已存唯一a，不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ilcd-2010-attributional`

###### 已放行整套接收 (`fg_received`)

该原生 Product flow 是工厂生产混合的已制造构建玩具产品族；完整原生范围包括玩具车辆及附件、非电动玩具马达/蒸汽机、娱乐缩尺模型、模型材料零件套件以及构建套装/积木，排除电动玩具马达。本参考角色仅代表一种配置齐全的机械塑料拼搭套装：所有必需玩具元件、实际已装配子部件、固着装饰和随附的功能性纸质说明书，经唯一首次放行。树脂、单个备件积木、模具、火车零件或仅待重新包装的外购整套成品均不能占据该角色。宽泛身份不固定CAS、聚合物配方、等级、地理、尺寸、年龄、性能或电气设备；必须核对真实整套规格及上游边界。 本服务事件保留原首次放行身份/cohort Q_H及实际观测H。完整实物毛V_H保留真实材料/水状态变化；独立测原/当前内容及状况，不假设接收/退回等重。内部首次放行交接仅为匹配抵消台账，不是另一次外购或Q；本行不得再次承担原制造。 本行仅真实外部接收的已放行套装服务事件，排除由fg_return记录的交付退回；不是内部首次放行交接。每个真实入流事件仅进一个互斥接收类别。

- 选定流：玩具电动火车及其轨道、信号灯和其他配件，缩小尺寸（"比例"）模型组装套件和其他建筑套件及建筑玩具 `2bd3de2a-c26e-4e9b-a00e-f1ec12763eea`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### 外部已放行整套退回 (`fg_return`)

该原生 Product flow 是工厂生产混合的已制造构建玩具产品族；完整原生范围包括玩具车辆及附件、非电动玩具马达/蒸汽机、娱乐缩尺模型、模型材料零件套件以及构建套装/积木，排除电动玩具马达。本参考角色仅代表一种配置齐全的机械塑料拼搭套装：所有必需玩具元件、实际已装配子部件、固着装饰和随附的功能性纸质说明书，经唯一首次放行。树脂、单个备件积木、模具、火车零件或仅待重新包装的外购整套成品均不能占据该角色。宽泛身份不固定CAS、聚合物配方、等级、地理、尺寸、年龄、性能或电气设备；必须核对真实整套规格及上游边界。 本服务事件保留原首次放行身份/cohort Q_H及实际观测H。完整实物毛V_H保留真实材料/水状态变化；独立测原/当前内容及状况，不假设接收/退回等重。内部首次放行交接仅为匹配抵消台账，不是另一次外购或Q；本行不得再次承担原制造。 本行仅已有先前交付的真实外部退回，追溯原交付/cohort并独立测当前质量/状态；从fg_received排除此同一事件。内部返回为匹配内部WIP/FG交接，不是此外部接收。

- 选定流：玩具电动火车及其轨道、信号灯和其他配件，缩小尺寸（"比例"）模型组装套件和其他建筑套件及建筑玩具 `2bd3de2a-c26e-4e9b-a00e-f1ec12763eea`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### 实际门内服务用电 (`service_electricity`)

观测H内真实放行后仓储/搬运/包装/复验/获准或失败作业用电，与制造分表。原生为中国低于1kV交流电电网平均消费到用户，Net calorific value/MJ电能接口，不是kg；核对真实场址/电压/时段/provider，实测kWh一次乘3.6。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A_H、D=原cohort Q_H，限定实际观测H。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 实际门内服务自来水 (`service_water`)

真实服务清洗/测试/包材维修的额外市政处理液态水，存在时纳入。原生Product为工厂制水供水，Mass/kg，不能由次级系数推密度；新增水入流与完整湿期末FG/包装/存量同时保留，自然湿交换独立计。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：未除原负荷先原单位转换及逐交换正当归属；仅引用第8节同一次a，N=A_H、D=原cohort Q_H，限定实际观测H。不再除；实物完整毛量另独立记录且不随负荷份额缩。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

##### 废物流

##### 基本流

###### 氮气摄入 (`service_n2_in`)

本物理边界真实氮气环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。

- 选定流：氮气
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 氧气摄入 (`service_o2_in`)

本物理边界真实氧气环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。

- 选定流：氧气
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 氩气摄入 (`service_ar_in`)

本物理边界真实氩气环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。

- 选定流：氩气
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 水蒸气摄入 (`service_h2o_in`)

本物理边界真实水蒸气环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 本行仅为非包装FG/室内/过程水事件；已单列包装湿交换仅归pack_water_in/out，从本同侧总事件去重，绝不冲库存。

- 选定流：水蒸气
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 二氧化碳摄入 (`service_co2_in`)

本物理边界真实二氧化碳环境空气摄入，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。

- 选定流：二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

#### 输出

##### 产品流

###### 整套实物毛发运 (`fg_dispatch`)

该原生 Product flow 是工厂生产混合的已制造构建玩具产品族；完整原生范围包括玩具车辆及附件、非电动玩具马达/蒸汽机、娱乐缩尺模型、模型材料零件套件以及构建套装/积木，排除电动玩具马达。本参考角色仅代表一种配置齐全的机械塑料拼搭套装：所有必需玩具元件、实际已装配子部件、固着装饰和随附的功能性纸质说明书，经唯一首次放行。树脂、单个备件积木、模具、火车零件或仅待重新包装的外购整套成品均不能占据该角色。宽泛身份不固定CAS、聚合物配方、等级、地理、尺寸、年龄、性能或电气设备；必须核对真实整套规格及上游边界。 本服务事件保留原首次放行身份/cohort Q_H及实际观测H。完整实物毛V_H保留真实材料/水状态变化；独立测原/当前内容及状况，不假设接收/退回等重。内部首次放行交接仅为匹配抵消台账，不是另一次外购或Q；本行不得再次承担原制造。 本行仅实际外发事件，排除由fg_return_out记录的向所有者返还。同一实物外发仅在发运/所有者返回互斥桥计一次，不能同车货两边都加。

- 选定流：玩具电动火车及其轨道、信号灯和其他配件，缩小尺寸（"比例"）模型组装套件和其他建筑套件及建筑玩具 `2bd3de2a-c26e-4e9b-a00e-f1ec12763eea`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

###### 整套向所有者外退 (`fg_return_out`)

该原生 Product flow 是工厂生产混合的已制造构建玩具产品族；完整原生范围包括玩具车辆及附件、非电动玩具马达/蒸汽机、娱乐缩尺模型、模型材料零件套件以及构建套装/积木，排除电动玩具马达。本参考角色仅代表一种配置齐全的机械塑料拼搭套装：所有必需玩具元件、实际已装配子部件、固着装饰和随附的功能性纸质说明书，经唯一首次放行。树脂、单个备件积木、模具、火车零件或仅待重新包装的外购整套成品均不能占据该角色。宽泛身份不固定CAS、聚合物配方、等级、地理、尺寸、年龄、性能或电气设备；必须核对真实整套规格及上游边界。 本服务事件保留原首次放行身份/cohort Q_H及实际观测H。完整实物毛V_H保留真实材料/水状态变化；独立测原/当前内容及状况，不假设接收/退回等重。内部首次放行交接仅为匹配抵消台账，不是另一次外购或Q；本行不得再次承担原制造。 本行仅真实向所有者外返，与fg_dispatch互斥。同一实物发运若为此所有者返还，不再另计一份毛发运；保留完整湿质量和一个真实增量服务owner。

- 选定流：玩具电动火车及其轨道、信号灯和其他配件，缩小尺寸（"比例"）模型组装套件和其他建筑套件及建筑玩具 `2bd3de2a-c26e-4e9b-a00e-f1ec12763eea`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`lego-whole-set-process`; `ilcd-2010-attributional`

##### 废物流

###### 原批次服务完整污染棉布废物（`service_contaminated_wipe`）

仅一个真实实物分收的完整棉布出口，含基材滞留聚合物油墨清洗剂水一次。完整湿Qt、实际组成及接收处理总需求与各批A/Q或A_H/Q_H独立。若归真实混废出口，本项仅非加总来源子账，不新增外部废物供方。发生未知不是零，只有实物分离才有独立组分出口。

- 选定流：原批次服务完整污染棉布废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：真实原单位转换及独立正当分子批次记账后，仅使用第8节已存唯一a，不再除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ilcd-2010-attributional`

###### 门内服务清洗废水 (`service_effluent`)

真实放行后作业独立实测湿废水，包含失败/未获准作业，处理一次，不能因试验失败就虚构不存在。

- 选定流：门内服务清洗废水
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 废弃已放行拼搭玩具套装 (`service_reject`)

真实受损/撤回已放行套装归原cohort，保留状况/湿质量、原制造及增量作业/处理，不造负Q，不假定维修恢复。

- 选定流：废弃已放行拼搭玩具套装
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 门内服务混合固体废物 (`service_mixed`)

仅一个真实混废出口，整份湿毛V_H及一个provider/处理；各包装originW及真实部件/材料独立量测为非加和子账，不强造重复出口。

- 选定流：门内服务混合固体废物
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

##### 基本流

###### 氮气流出 (`service_n2_out`)

本物理边界真实氮气空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。

- 选定流：氮气
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 氧气流出 (`service_o2_out`)

本物理边界真实氧气空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。

- 选定流：氧气
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 氩气流出 (`service_ar_out`)

本物理边界真实氩气空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。

- 选定流：氩气
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 水蒸气流出 (`service_h2o_out`)

本物理边界真实水蒸气空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。 本行仅为非包装FG/室内/过程水事件；已单列包装湿交换仅归pack_water_in/out，从本同侧总事件去重，绝不冲库存。

- 选定流：水蒸气
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 二氧化碳流出 (`service_co2_out`)

本物理边界真实二氧化碳空气穿透流出，逐物种/相态/位置和积分气体状态独立量测；按真实情况涵盖干燥、通风、压缩机摄入、普通仓储吸脱湿及搬运。不假设空气配比、排放因子或维修事件。整份外供空气/流体与这些原子须互斥或桥接核对；不变穿透量不是第二来源排放。新生CO2须有独立来源增量证据，毛V绝不按负荷份额缩。

- 选定流：二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`; `ilcd-2010-attributional`

###### 苯乙烯排放 (`service_styrene_air`)

仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。

- 选定流：苯乙烯
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`

###### 苯酚排放 (`service_phenol_air`)

仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。

- 选定流：苯酚
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`

###### 1,3-丁二烯排放 (`service_butadiene_air`)

仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。

- 选定流：1,3-丁二烯
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`

###### 异丙醇排放 (`service_ipa_air`)

仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。

- 选定流：异丙醇
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`

###### 化石碳源二氧化碳排放 (`service_fossilco2_air`)

仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。

- 选定流：化石碳源二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`

###### 生物碳源二氧化碳排放 (`service_bioco2_air`)

仅有独立证据的真实分子及来源增量进入真实空气介质时纳入。IFC表4包含过热情景的潜在物质，不是正常运行默认排放；不得由VOC/NOx/COD/总碳或一个残差拟此分子，不假设反应水或碳源。捕集/处理另计，避免总/物种和环境/新生重复。

- 选定流：生物碳源二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：仅引用第8节同一次a：N=本真实完整毛腿V_H、D=原cohort Q_H；保留观测H。N不是负荷A/A_H或库存差，不按经济/服务份额缩实物，不再除、不重复采购/provider或自动信用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ifc-plastic-products-2007`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_scope | all inventory rows | 本节仅用于归因且确需分配的多功能情景；实物毛账独立于负荷归属。 | `ilcd-2010-attributional` |
| a_framework | all inventory rows | 本法仅用于明确归因且分配为适用多功能处理路线的研究。识别真实产品/功能及交换owner，工业厂家证据不授予LCA分配。不能任意选经济或物理规则，不设固定比例、替代或自动避免产品信用。 | `ilcd-2010-attributional` |
| a_subdivide | all inventory rows | 先按专属元件/产线/装饰/装配/公用工程独立采集，尽物理可证范围进行真实或虚拟细分。对每个剩余不可分交换，凭计量/工程及真实配置识别与真实共功能的决定性物理因果关系；质量、件数、周期、机时不自动适用于所有交换，须说明真实决定量及守恒负荷向量。 | `ilcd-2010-attributional` |
| a_residual | all inventory rows | 仅真正剩余未解负荷使用同一共享过程门、真实共产品实际状态的同期特定市场价值，记录数量/货币/时段/质量及下游状态回调。未知价值保留敏感性/不确定性，不设固定兜底份额。实物毛量绝不继承分配份额；普通废料/拒品/样品/废物销售或外部处理不自动扣生产/处理负荷，T_other须真实独立功能/cohort及一次正当向量移交。 | `ilcd-2010-attributional` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | make | 完整套装首次放行 | foreground_record | 套装id; 配置; 元件数; 组件自制外购; 说明书状态; 净内容质量; 实际留膜/水; 包装皮重; 校准; 唯一放行时间; 测试; 拒品/失败处置; 原Q_H | 逐完整验收套装内容校准称量，或以可追溯真实内容质量/配置和独立包装皮重对应同批完整放行套装。核对必需内容齐全及实际测试，保留原始套重和唯一放行事件，不预除或虚构件重换算。 | kg | 每实际事件及期末核对 | 完整声明cohort含Q0及原cohort观测H | 真实供方/制造/服务边界 | 每参考流 | 原始签认记录；校准；独立核对；真实状态/身份及明确未知 |
| cp_make | make | 制造全部交换及继承向量 | foreground_record | row id; 事件; 材料/组件批次; 模具/型腔/机器; 工序; 配置; 原单位; 速率/积分标记; 真实T/P/相态; 分析/密度; 完整收用出; 原料/WIP/非WIP期初末; 每继承交换向量; 已库存校正标记; provider owner; 失败/空转/清理/测试/返工; 分子及元素独立数据 | 按真实工序/原子流以校准称表、供方BOM/SDS及独立分析采未除原生广延记录。独立量测湿库存和气/水相，追踪上游和内部WIP且不重购；保留真实未列原子及失败/Q0，真实未知保留缺失。 | native extensive unit per row | 每实际事件及期末核对 | 完整声明cohort含Q0及原cohort观测H | 真实供方/制造/服务边界 | 每参考流 | 原始签认记录；校准；独立核对；真实状态/身份及明确未知 |
| cp_service | service | 实际观测原cohort服务 | foreground_record | row id; 原cohort; Q_H; H; 真实A_H/V_H; 已放行FG期初末; 历史及继承向量; 毛发运/退回; 净内容真实变化; 湿度; 许可; 作业后测试; 接受; hold/废物处置; 供方热水质量/相态/T/P/焓及owner | 量测每个实际执行事件，含未获准/失败作业和自然仓储湿交换。真实退回及增量绑定原唯一放行，不假设退回等于原交付或重复制造；保留留库FG已执行服务，未来H为未知。 | native extensive unit per row | 每实际事件及期末核对 | 完整声明cohort含Q0及原cohort观测H | 真实供方/制造/服务边界 | 每参考流 | 原始签认记录；校准；独立核对；真实状态/身份及明确未知 |
| cp_pack | pack | 具体包装六方向池 | foreground_record | 池; 首次放行前/后event_phase; 制造Q或原Q_H; 真实整件/制剂; 材料; 上游owner; P; I; ER; 毛S; EO; W; 完整湿空件/附着WIP/附着FG/复用期初末; 新旧维修件; 自然/作业水; 同侧X_in/X_out; 整件/组分桥; 混废独立originW; 原Q_H; H | 逐真实池/事件以校准湿重/皮重和供方owner独立量测；放行前实物V连制造Q和一次制造A，放行后V_H连原Q_H/H和一次服务A_H，互不重复；闭合六真实方向；无事件须证据，不虚构物流。整袋/内衬/线或湿制剂一次；X仅去其他同侧重叠，不能取消留存新增入流或完整湿库存。仅混废时独立量测originW，不叠加来源和总量或多provider。 | kg | 每实际事件及期末核对 | 完整声明cohort含Q0及原cohort观测H | 真实供方/制造/服务边界 | 每参考流 | 原始签认记录；校准；独立核对；真实状态/身份及明确未知 |
| cp_assets | make | 实物资产部件流体及使用服务负荷 | foreground_record | 资产id; 新旧完整接收; 毛实物转移; 实际在装/拆出部件; 各流体状态及原生量; 完整湿期初末; 继承向量存量; 实际服务提取; 真未用/未分配负荷; 因果决定量; 真实时段/cohort; 同侧X_in/X_out | 完整实物收发/库存与服务负荷独立采集。核对整机/整模与互斥部件/流体；留存新增入流及完整湿期末质量均保留。流体质量用真实体积/独立密度，不猜寿命或单机重；凭真实决定量提取逐交换服务向量，不每kg重购整库存。 | native extensive unit per row | 每实际事件及期末核对 | 完整声明cohort含Q0及原cohort观测H | 真实供方/制造/服务边界 | 每参考流 | 原始签认记录；校准；独立核对；真实状态/身份及明确未知 |
| cp_actual_asset_service | make | machine_fulfilled_service; mould_fulfilled_service; cloth_fulfilled_service | 实际实物持有和已履行服务记录 | asset/configuration; original_cohort/Q0; H; actual_start/end; duty/capacity; provider_unit/vector; opening/closing_wet_fleet; new/used/return/retire; included_parts/fluids; own_history; uncertainty | 测实际计时服务并独立守恒新旧完整实物持有及湿在装库存；唯一链接真实相容产能供方历史，不设寿命或当期采购。未知换算仍未决，保留失败零产出已履行服务及原批。只用唯一已存a，不再除法。 | h | 每真实使用事件及结存 | 完整原历史及观测H | 真实在装供方门 | 每参考流 | 原使用产能日志；校准；实际供方；实物持有充注桥；互斥向量所有权 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| attributable_raw | all inventory rows | 仅制造负荷维度先原单位转换及逐交换正当归属：A = B_open + U - B_close - T_other。B_close受b_stocks限制，已库存校正耗用不再校正。T_other须真实独立功能/cohort及一次正当向量移交，不因普通废物/拒品/样品销售或外部处置而扣。实物毛V绝不用此库存式。 | B_open; U; B_close; T_other; cp_make; cp_assets | A | `ilcd-2010-attributional` |
| service_raw | all inventory rows | A_H为观测H内已为原cohort Q_H实际执行的增量服务向量，含正确继承服务提取、真实失败作业/处理及逐交换正当归属。仅真实未用/未分配服务/负荷结转，不能扣已执行留库FG服务。完整毛V_H独立，不作库存校正或负荷缩量。 | cp_service; cp_pack; Q_H; H | A_H | `ilcd-2010-attributional` |
| single_quotient | all inventory rows | 仅一次：a = N / D。制造负荷N=A、D=Q；制造实物毛卡N=完整真实毛腿V、D=Q；放行后服务负荷N=A_H、D=原Q_H；放行后实物毛卡N=完整真实毛腿V_H、D=原Q_H。各原生分子单位按每kg保留。卡/aggregation仅引用同一个a，不再除、不再库存校正、不分配实物毛质量、不再采购/provider收费或自动信用。D=0保留真实数据但不出单位结果。 | N; D; cp_release; cp_make; cp_service; cp_pack; cp_assets | a | `ilcd-2010-attributional` |
| gross_pack_balance | all inventory rows | 各池：opening + P + I + ER + CP_in = closing + 毛S + EO + W + CP_out，均真实完整湿态。CP仅真实互斥组件/自然或作业水变化。X_in/X_out仅去其他同侧入/出流项重叠，不去留在库存的新增入流或完整期末质量。整湿件与组分、混废总量与originW不加和。内部复用不造采购或信用。 | P; I; ER; S; EO; W; CP_in; CP_out; cp_pack | closed_pool_ledger | `ilcd-2010-attributional` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_complete | all inventory rows | 完整真实套装/路线、每原子/卡字段/description/原生限制、source链接和规范上下文，全部失败/零产出及继承向量，不以未知当零或方法批准。 | 真实BOM、供货状态、工序记录、测试及独立账 |
| dq_uncertainty | all inventory rows | 披露真实配置/场址/时段代表性、原生/provider/辅料缺口、换算/计量不确定性、分配证据/敏感性及已观测/未观测服务H，技术综合不是同一工厂清单。 | 校准、完整原件、组件/整件桥及明确缺失字段 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | all inventory rows | 核对整套终端、真实完整元件数/配置、功能说明边界、实际注塑/装饰/装配、自制外购路线、真实规格和测试。宽泛整件构建玩具族须有正面完整产品上下文才能收窄；材料/形态/路线/CAS/type/media硬冲突不能靠名字/分类相似豁免。采用原生限制须在消费卡中，不虚构年龄/强度/寿命/证书或工艺默认值。 | `lego-whole-set-process`; `lego-material-purpose`; `lego-profile-manufacturing`; `un-cpc3-38540-scope` |
| v_accounting | all inventory rows | 核对唯一首次Q、完整玩具/说明书净质量与排除包装、所有失败/Q=0负荷、逐原料/WIP/非WIP继承向量、独立制造/FG/合并物理门及实际观测原cohort服务。逐查包装六方向卡及真实混废originW关系、全部湿库存、维修材料/流体、自然湿交换、真实物种、provider/载体所有权；库存、经济份额或负荷分配不能缩实物毛卡。 | `ifc-plastic-products-2007`; `ilcd-2010-attributional` |
| v_units | all inventory rows | 建模前核对各原生广延属性及精确支持链，不能将Mass/kg套MJ或m3。真实速率才按时间积分，已积分体积不再积分；密度/分析/几何及水分须独立状态测量，次级流系数或标称玩具/资产重不提供换算。采未除原始分子，先原单位转换及真实归属，再执行唯一single_quotient一次，真实未知转换/方法保留未解。 | `ilcd-2010-attributional` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 规定完整套装首次放行制造清单，另披露实际观测原cohort门内服务 |
| allowed_use | 真实适用性、完整清单和质量核对后的归因建模 |
| excluded_use | 整个分类覆盖、电动火车/车辆外推、树脂/散件代理、游戏等效或寿命比较、无证据工厂数、无完整撤销桥的净交付、自动信用或批准 |
| required_metadata | 完整套装配置及必需元件数量; 各元件真实材料/等级及自制外购状态; 完整供货制剂和含水; 实际注塑/装饰/组件装配路线; 纸质说明书纳入情况及净内容边界; 明确排除的电气功能; 供方场址及上游边界; 唯一首次放行身份/时点及真实验收规格/测试; 校准完整净质量及包装皮重; 原料/WIP/非WIP继承逐交换向量; 真实湿库存及实物毛事件; 包装池和上游所有权; 原cohort Q_H及观测服务区间H; 真实provider/原生限制和未解决身份 |
| required_quality_disclosure | 真实source及原生/provider相容性、所有未解身份/数量、独立物理/负荷/库存账、计量不确定性、首次放行及观测服务H |
| update_trigger | 整套结构/材料、供货制剂/组件状态、主要成型/装饰路线、原生限制/地理/provider、验收规格、新原子事件或证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| lego-whole-set-process | handbook | LEGO, LEGO bricks in the making, https://www.lego.com/en-gb/service/help-topics/article/lego-bricks-in-the-making | 完整实质primary文章：粒料、注塑/冷却、转移、装饰/组件装配、整套计数、说明及查错；同一出版者，不采用工艺数字默认值 |
| lego-material-purpose | handbook | LEGO, Materials in LEGO bricks and elements, https://www.lego.com/en-gb/sustainability/product-safety/materials | 完整聚合物用途页及相邻反例；元件材料真实各异，不设通用配方或必需聚合物清单 |
| lego-profile-manufacturing | handbook | LEGO Company Profile, PDF pages10-11, printed16-18, https://www.lego.com/cdn/cs/aboutus/assets/blt4ee78e0776fce92f/LEGO_Company_Profile.pdf | 完整原PDF制造/安全跨页，真实原料/装饰油墨成分和测试上下文；历史出版者证据，不借用测试阈值或认证 |
| ifc-plastic-products-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Metal Plastic and Rubber Products Manufacturing, 30April2007, sections1.1.2 and2.0, https://www.ifc.org/content/dam/ifc/doc/2000/2007-metal-plastic-rubber-products-ehs-guidelines-en.pdf | 非反应塑料制造阶段，真实水/排放/废物筛查；保留表4高温实例及相邻反应/橡胶/金属路线限制，不设通用分子因子或LCA分配 |
| ilcd-2010-attributional | official_guidance | European Commission JRC, ILCD Handbook Detailed Guidance, first edition March2010, sections7.9.2-7.9.3, https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 有条件归因细分/虚拟细分、逐交换决定性物理因果、仅剩余真实过程门市场价值；不提供玩具配方、厂量、固定份额或自动信用 |
| un-cpc3-38540-scope | official_guidance | UNSD, CPC Ver.3.0 Explanatory Notes,30June2025, full38540 and adjacent3855/3856, PDF193, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 完整分类纳入/排除及相邻玩具反例；仅范围定位，不作为制造方法证据 |
