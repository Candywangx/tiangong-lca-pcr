---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.crystalline-hexamine-by-liquid-phase-ammoniation
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: reviewed
sync_with: pcr.en-US.md
---

# 液相氨化制晶体六亚甲基四胺

## 1. 范围与适用性

本 PCR 适用于以甲醛水溶液和无水液氨进行液相反应，经反应热控制、蒸发/结晶、离心分离、干燥及成品首次验收制得的未稳定化晶体六亚甲基四胺（乌洛托品，CAS100-97-0，C6H12N4）。产品不含有意添加的稳定剂、抑尘剂或其他配制组分。须声明实际含量、残余水、粒子形态及杂质；不规定通用数值牌号、纯度、进料浓度、配方、收率或操作条件。

排除气相甲醛进料路线、有意稳定化/配制牌号、作为产品出售的溶液、燃料片剂、树脂制造、三聚氰胺及其他杂环物，以及外购成品六亚甲基四胺的简单重包装。购入原料及外部公用工程须保留实际兼容生产与物流负荷。本有界路线使用真实外供蒸汽及实际存在时的冷却水服务；场内锅炉、燃烧器、上游甲醛装置或重要不同反应路线在使用前须明确增加单元操作与原子交换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.crystalline-hexamine-by-liquid-phase-ammoniation |
| classification_refs | CPC 3.0 35230; narrower product and route boundary |
| covered_products | 声明液相合成路线的未稳定化固态晶体六亚甲基四胺CAS100-97-0 |
| excluded_products | 稳定化或复配牌号；出售溶液；片剂；树脂；三聚氰胺；仅重包装及气相进料路线 |
| representative_product | 无有意添加剂的实际验收工业晶体/颗粒粉体；不作食品/药品符合性声明 |
| production_route | 甲醛水溶液与无水液氨；热量控制、蒸发/结晶、离心及干燥 |
| market_state | 首次验收完整晶体净产品，不含包装；保留实际游离水/含量约定 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应化学身份明确的未稳定化工业六亚甲基四胺 |
| How much | 每参考流1千克 |
| How well | 实际认可的批次含量、杂质及水分方法；声明粒子状态；不与其他杂环物作功能等同 |
| How long or cycle | 一次唯一成品批次首次验收及原生产批群；后续操作保留该基准 |
| reference_flow_link | finished_hexamine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 六亚甲基四胺 `6968b0c9-fa93-43e1-8171-224bc2ed91e5` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CAS100-97-0及未稳定化身份; 实际含量与杂质方法; 晶体粒子状态; 完整产品净质量及水的约定; 甲醛水溶液组成与分析基准; 无水液氨进料; 液相反应及干燥路线; 场址与连续时段; 唯一首次验收门及批群; 实际公用工程/供应方界面; 包装及滤件配置; 库存与负荷谱系; 实际相连场内处理生产单元及成对相态界面 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 固定门的完整验收净产品，以总质量减实际皮重计量。干基含量、氮含量及后续交付质量是伴随基准，不能替代分母。 |
| feed_basis | aqueous_formaldehyde, liquid_ammonia, process_water | 质量 | kg | 完整进料质量仅计一次。CH2O等效含量不是游离HCHO物种分数或游离水质量；实际水合物/低聚物、稳定剂/甲醇及载水约定须独立保留。 |
| electricity_basis | electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 实际原生交流电流采用该MJ属性；实测千瓦时按1 kWh = 3.6 MJ作电气单位换算，不推断燃料、燃烧或发电组合。 |
| utility_mass | steam_in, condensate_return, cooling_water_in, cooling_water_return | 质量 | kg | 两侧均记录实际流体质量及热力学状态。热量/供应方换算须实测兼容焓值与单位；千克和MJ不能互换，不重复购入质量蒸汽及其嵌入热量。 |
| pack_tare | sack_in, sack_delivered, sack_returned, liner_in, liner_delivered, liner_returned | 质量 | kg | 计量实际包装组分皮重及配置；件数换算采用实测同配置质量，附着产品/水为单独嵌套内容物。 |
| whole_waste | mother_liquor_purge, offspec_hexamine, spent_centrifuge_cloth, spent_dust_filter_bag, sack_scrap, liner_scrap, evaporator_condensate_to_treatment, evaporator_gas_to_treatment | 质量 | kg | 实际完整接收方转移Qt包含全部基材、化学品及水组分，仅计一次。模型仅使用有据且不重叠的兼容供应方单位批群处理需求A_c / 原Q_c；Qt/Q_c仅作分析，未知份额保持未解决。 |
| air_species | formaldehyde_air, ammonia_air, methanol_air, hexamine_air, water_vapour_air | 质量 | kg | 明确物种及环境介质，保留分析等效量换算、气体条件及未检出界限。总VOC/PM/COD不是物种质量，不能据此把全部残余归为六亚甲基四胺。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 合成场址实际购入甲醛水溶液、无水液氨、补给水及外供公用工程 |
| starting_condition_role | 前景交接界面；实际上游甲醛/氨制造与物流仍为相连负荷 |
| product_classification_scope | 仅拟议35230子集中具名未稳定化晶体六亚甲基四胺 |
| recursive_input_rule | 内部母液、分离粉尘及返工保留谱系和一次继承负荷；购入同类产品须具实际上游历史，不是新增场内合成 |
| upstream_dataset_requirement | 每项原料、公用工程、部件及处理服务须匹配实际组成、相态、牌号、时空、供应方单位及返还/回收边界 |
| disclosure | 实际工艺图、库存/批群事件、原始量、杂质/物种及水约定、公用工程闭合、包装/滤件历史、供应方缺口及测量覆盖 |

### 完整规范范围与核算上下文

本 PCR 适用于以甲醛水溶液和无水液氨进行液相反应，经反应热控制、蒸发/结晶、离心分离、干燥及成品首次验收制得的未稳定化晶体六亚甲基四胺（乌洛托品，CAS100-97-0，C6H12N4）。产品不含有意添加的稳定剂、抑尘剂或其他配制组分。须声明实际含量、残余水、粒子形态及杂质；不规定通用数值牌号、纯度、进料浓度、配方、收率或操作条件。

排除气相甲醛进料路线、有意稳定化/配制牌号、作为产品出售的溶液、燃料片剂、树脂制造、三聚氰胺及其他杂环物，以及外购成品六亚甲基四胺的简单重包装。购入原料及外部公用工程须保留实际兼容生产与物流负荷。本有界路线使用真实外供蒸汽及实际存在时的冷却水服务；场内锅炉、燃烧器、上游甲醛装置或重要不同反应路线在使用前须明确增加单元操作与原子交换。

原生准入对象为完整Product：CAS100-97-0六亚甲基四胺，白色晶体化合物、工厂生产混合，无硬性牌号、合成路线或地域限定。仍须独立匹配实际未稳定化晶体牌号；UUID不提供供应方、数量、食品/药品批准或安全结论。正式中文baseName“六亚甲基四胺”原样保留，注释中污染的中文别名不用于化学身份。原生34150分类作为源端差异披露。现行CPC3.0的PDF170列出35230指定杂环族，WCO2022第29章PDF18在三嗪标题下定义2933.69，USITC2025明确把具名六亚甲基四胺列于2933.69.50。这些主要区别支持较窄提案，不构成自动映射接受或所有杂环物的重分类。

USITC记载工业反应、结晶、离心、干燥及纯产品与稳定化牌号的区别，其生产商数据和操作案例不是默认值。ATEC另行说明甲醛水溶液/无水液氨的液相变体以及独立气相进料变体，本范围仅纳入液相进料。USITC案例中一体化甲醛生产仍是实际上游生产；购入原料交接界面须保留真实兼容生产商数据，不能抹去甲醇氧化或其他供应方操作。

接收并计量完整液体原料→受控液相合成→蒸发/结晶→离心→干燥→取样/包装及首次验收→实际合格库存/发货。保留实际母液回流、反应冷却、真空/冷凝、洗涤、治理及清洁。不能因初始卡片未列而删去实际工序；声称完整研究前，每种实际新增试剂、润滑剂、吸附剂、公用工程、包装组分、废物、回收产品或环境物种均须单独加卡。

配平理论关系6CH2O + 4NH3 → C6H12N4 + 6H2O是在所声明无水等效约定上的物种/元素检验，不是配方、转化、收率、购入原料量或产水因子。甲醛水溶液分析常以CH2O等效量报告，并可包含水合/低聚形态；该含量不自动等于游离分子HCHO分数或游离水质量。完整进料千克量、实际稳定剂/甲醇、甲醛等效含量、分子物种及水约定须分别保留。不能假定反应中HCHO或NH3守恒、完全反应、无副产物或通用反应产水量；采用实际反应程度/物种证据，独立核对C/H/N/O和总质量，明示未解决残差而不拟合。

水账区分实际载水/游离水/化学结合水、所声明物种约定下的反应生成/消耗、洗涤与冷却补水、产品水分、母液、湿废物、冷凝液、水蒸气、排水及库存变化。已包含于完整进料的溶液载水或甲醇不能再作购入输入；不能在组分约定中计水合水后，又把它算为新生成水。存在其他挥发物时，干燥失重不是化学特异性水测定。原始蒸发/冷凝是物理相变，不证明反应水，也不是闭合流。

实际外供蒸汽及冷却流体须保留进/返质量、温度、压力、相态/干度、焓值及供应方条件。实测热平衡区分反应热、内部回收热、进口热、散热、蓄热及损失。实际流体转移与兼容模型供应方需求分别保存；不重复计算质量蒸汽及其已嵌入热量，不编造质量至MJ因子。外部公用工程生产商保留真实能源、燃料、水及排放负荷。场内燃烧路线须有实际燃料、空气/O2、生成水、物种及热界面，不能藏于本购入公用工程卡内。

采用三个相连生产账户。完整物理账包含外部接收/退回/发货、原料/在制品/成品/不合格品库存、母液、粉尘、样品、包装、滤件实物群及全部实际废物/排放。等量内部转移仅在汇总边界抵消。参考事件账在一个固定门按唯一首次成品批次验收独立计算Q = sum(m_e)，锁定原事件ID、净质量、水分及批群。归属负荷账对自有期初在制品向量仅继承一次，记录不重叠新前景/上游向量、期末结转及终端归属。供应方汇总量与其嵌入拆分只能择一，不能重复叠加。Q为参考事件账户，不是额外外部物理输出。

对每个原验收批群，按原验收基准将Q0核对到互斥净剩余交付量、全部实际场内验收状态、不可逆损失及其他终端处置。退货/复检/返工/粉尘回用不再形成首次验收事件。仅在证明无其他验收后状态/出口时可用交付加新成品期末库存；期初成品发货不是新增验收。不能把已损固体或水恢复到幸存产品后又计该损失。后续外部水/新增物是物理输入，须从原批群等效量中扣除，不编造闭合项。后续操作、服务及处理沿用原批群基准；Q为零/未知时原始记录保留，归一化结果未解决。

对实际采用的聚丙烯编织袋和聚乙烯内衬，分别保留组分ID、实际皮重/结构、接收/交付/可复用返还/客户退回/报废量及期初期末空/装料库存。这些是具体条件组分，不是默认包装，也不允许省略其他实际组分。净六亚甲基四胺不含任何包装。复用不生成再次制造、参考产品、共同功能或回收抵扣。污染物件所带产品/液体/水为嵌套内容物，不是空皮重或虚构额外物流。

每个实际离心滤布和实际聚酯除尘滤袋须各自保留材质、尺寸、基材质量/件数、安装/拆除/清洁历史、期初期末实物群、附着化学品/水及接收方。供应方制造/服务需求须具实际兼容单位及跨全部服务原批群的实际历史，不猜部件质量、寿命、更换率或年化，不能因当期批群仅承担部分服务负荷而缩小完整废滤件外运量。

每项废物转移在接收方账内仅记录一次实际完整Qt、实际组成及供应方全量处理需求/单位。基材、化学品、水及已观测物理批群来源仅在已知时作嵌套出处账。单独模型账将有据且不重叠的兼容供应方单位处理需求A_c或负荷向量归属实际服务批群，再除以各原Q_c。Qt/Q_c是分析比率，不是第二模型交换，也不能向每个批群都计全部Qt。未知份额/历史/供应方基准保留未解决。袋/内衬共享归属仅在有实际共享接收/服务历史时采用。不按负荷份额拆分物理外运；除非跨界前已经物理分离且独立实际物流总和只核对一次，否则不增列附着粉体/液体交换或额外处理需求。

所选液体废物界面为向实际合格接收方计量外运，不是假定无废水，也不能掩盖直接排水。母液、冷凝液及洗涤液须区分实际去向与内部回流。直接液体环境释放、回收可售产品、处理药剂或其他物种在研究完成前须分别增列实际原子行并核对供应方/环境介质。捕集粉尘属于内部回用或实测外运残渣，不能同时作空气排放。

保留含1990修订的IS4306:1987作为历史工业六亚甲基四胺方法源：其非水电位含量测定及规定的干燥失重/氨测试各自保留试样、试剂、终点、空白及报告约定。JECFA是按其规定干燥试样进行的另一酸分解/返滴定方法；不得把其当量与非水法混用，或把收到状态完整产品质量默换为干基含量质量。保留完整IS扫描原件及完整JECFA专论，不采用其数值牌号/纯度界限、食品用途、认证或临床结论。实际实验室方法选择、取样、干扰/回收及不确定性须匹配真实未稳定化固体基质。干燥失重不单独证明水，也不证明工厂废水/空气物种。

CWW2016提供化工物流清单及监测质量背景，不提供六亚甲基四胺排放因子或已验证工厂测试。须建立实际控制后物种、气流量/水分/温度/压力、取样回收/干扰、检出限、启动/旁路/无组织路径及不确定性。CH2O等效分析报告、总VOC、氨氮、总氮、COD/TOC或总粉尘须有明确物种基准/不重叠判断，不能全归给某个可检索UUID。实际基质的特定分析程序未建立时，相应范围未解决；未来SOP承诺或有限检查不能闭合。实际实验室试剂/废物负荷纳入研究边界时须各设原子交换。

废物卡遵循实际物理总成。编织袋与其内衬一同离厂时，sack_scrap为包含内衬及全部附着物的单一完整污染总成，内衬/基材/化学品/水作嵌套分账；仅实际独立废内衬物流采用liner_scrap。实际过滤总成及组分同样处理。不得编造分离，同时外运完整总成及其嵌套组分，或重复供应方处理。CH2O等效量、氨氮及其他等效量是伴随分析观测，不是可与水合物、分子或水相加的额外物理组分；组分/元素闭合须采用明确互斥且一致的化学基准。

USITC图1.2明确画出第一效→汽提/催化氧化系统→馏出液。该已知操作不能由独立母液排放物卡替代，不能假定外包或置零负荷。对该配置，须保留真实、完整且单独建模的场内处理生产单元，并注明实际来源/所有方、过程边界、场址/时段及供应方参考单位。两端须核对实际发送/接收转移ID、完整质量、相态、组成、温度/压力及去向。示意图本身不确定所选界面是冷凝水性液体、蒸发顶气还是独立实际物流；须建立实际相界，不能编造分相或在内部冷凝时重复同一流。条件冷凝液与气体卡仅用于物理真实物流；仅在实际处理混合物返入本单元时采用馏出液接收卡，其他生产单元出口保留实际去向，不假定纯水、淡水排放或抵扣。

相连汽提/CatOx生产单元须保留实际配置中全部真实试剂、燃料、空气/O2、水、公用工程、排放、残渣、热及返流界面，独立核对反应/物种/水守恒，并有完整源据清单。不得用泛化处置替代、假定氧化配方、声称已有合格背景，或省略实际操作。完整研究使用前须核验真实完整生产单元及相匹配来源证据；本PCR不提供该工厂数据集。跨全部进/出口界面及所服务原批群，实际联合需求/负荷向量仅表达一次，采用有据兼容供应方单位及不重叠A_c/Q_c。不能对各相态卡分别重复全部生产单元负荷，也不能对返馏出液再计。成对内部流仅在合并时抵消，完整生产单元负荷仍保留一次。生产单元、相态/组成、控制/基质或单位未知时，相应结果未解决并妨碍完整清单结论；未来SOP或有限检查不能解决。实际不同且有文件支持的工厂变体须明确其实际控制边界，不能从ATEC简述推断不存在。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | hexamine_production | 纳入声明液相反应至首次验收及实际控制/储存/操作工序，不以重包装替代。 | usitc-hexamine-2025; atec-hexamine-process |
| boundary_upstream | all inputs | 保留真实兼容生产商负荷及实际界面，不重复供应方汇总量与嵌入拆分。 | jrc-cww-2016 |
| boundary_species | all outputs | 实际化学/水生成、捕集、回用及接收方/环境去向分别记录，不设零值或闭合默认。 | usitc-hexamine-2025; jrc-cww-2016 |
| boundary_complete | all inventory rows | 完整清单使用前增列每项实际原子交换并披露缺失范围。 | jrc-cww-2016 |
| boundary_identity | finished_hexamine | 须匹配实际完整未稳定化晶体CAS100-97-0的Product并披露源端差异。具名HS证据及现行CPC族背景仅支持拟议较窄关系，不自动接受映射。 | usitc-hexamine-2025; jecfa-hexamine; unsd-cpc3-2025; wco-hs29-2022 |
| boundary_methods | cp_accept | 保留完整所选固体试样含量/质量程序及其不同基质/试样/当量限制，技术采用IS/JECFA不构成数值牌号、食品或认证结论。 | bis-is4306-1987; jecfa-hexamine |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| hexamine_production | 六亚甲基四胺液相合成及整理 | required | 实际声明路线及完整纳入工序 | 前景生产 | 每参考流1千克 |

### 过程：液相合成及整理（`hexamine_production`）

#### 输入

##### 产品流

###### 甲醛水溶液进料 (`aqueous_formaldehyde`)

称量实际完整进料，测定CH2O等效含量、实际分子/水合及水约定、稳定剂/甲醇与杂质；不得换成纯气体或固定甲醇含量福尔马林。

- 选定流：工业甲醛进料水溶液
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_feed。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_feed
- 来源：atec-hexamine-process; usitc-hexamine-2025

###### 无水液氨进料 (`liquid_ammonia`)

实际工业液体进料；内部氨回流不是新购入，记录汽化/泵送及供应方实际相态/基准。

- 选定流：氨，无水，液体 `6928be4f-282b-4448-8f2a-f8c746621303`
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_feed。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_feed
- 来源：atec-hexamine-process

###### 新鲜工艺补水 (`process_water`)

仅实际单独购入的补给/清洁水；进料载水、内部母液及返冷凝水不是本新鲜投入。

- 选定流：工艺补给水
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_feed。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_feed
- 来源：jrc-cww-2016

###### 电动设备及控制用电 (`electricity`)

计量实际反应循环、冷却/真空泵、离心、干燥、抽风、包装及可归属待机/返工；供应方/电压仍须实际核对。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_power。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_power
- 来源：

###### 进口工艺蒸汽 (`steam_in`)

实际蒸汽流体，具实测压力/温度/干度及进口焓；须兼容真实生产商负荷，不设热因子或删除场内燃烧器。

- 选定流：进口工艺蒸汽
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_utilities。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_utilities
- 来源：usitc-hexamine-2025; jrc-cww-2016

###### 外供冷却水进口 (`cooling_water_in`)

实际冷却服务界面存在时纳入；保留进口质量/状态及同一返流闭合，区分新鲜水消耗与实际生产商服务。

- 选定流：外部循环冷却水
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_utilities。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_utilities
- 来源：usitc-hexamine-2025

###### 离心滤布 (`centrifuge_cloth`)

实际离心滤布存在时纳入，须有实际材质/尺寸/历史及兼容供应方单位；这是完整滤布，不是裸聚合物或默认寿命。

- 选定流：过滤布 `117b035a-6255-425d-92b9-6c65ff1be2ab`
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_asset。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_asset
- 来源：

###### 聚酯除尘滤袋 (`dust_filter_bag`)

实际聚酯除尘袋存在时纳入，库存/服务历史独立于离心滤布；其他实际介质须另设卡。

- 选定流：聚酯除尘滤袋
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_asset。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_asset
- 来源：jrc-cww-2016

###### 聚丙烯编织袋 (`sack_in`)

实际袋结构存在时纳入，记录皮重及上游制造；不采用种子专用袋UUID或规定包装容量。

- 选定流：聚丙烯编织包装袋
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_pack。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：usitc-hexamine-2025

###### 聚乙烯内衬 (`liner_in`)

实际聚乙烯内衬存在时纳入，分别称量及追踪；历史IS包装背景不是通用内衬强制要求。

- 选定流：聚乙烯袋内衬
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_pack。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：bis-is4306-1987


###### 实际接收处理后六亚甲基四胺工艺馏出液 (`treated_distillate_received`)

仅在实际完整处理混合物由合格场内汽提/CatOx生产单元返入时采用。匹配实际出口事件、相态及实测组成；不假定返还或纯水身份，不重复嵌入生产单元需求。

- 选定流：实际接收处理后六亚甲基四胺工艺馏出液
- 流属性/单位：质量 / kg
- 数量规则：归属原批群的实际成对接收馏出液质量 / 正原Q_c，合并时抵消内部成对转移，不作新购入或第二次处理负荷。 cp_accept；cp_treatment。未知相态/生产单元/基准保持未解决。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_treatment
- 来源：usitc-hexamine-2025; jrc-cww-2016

#### 输出

##### 产品流

###### 首次验收未稳定化晶体 (`finished_hexamine`)

唯一首次门的完整验收固体净量；Q不是额外物理发货，且不含任何包装组分。

- 选定流：六亚甲基四胺 `6968b0c9-fa93-43e1-8171-224bc2ed91e5`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_accept
- 来源：usitc-hexamine-2025; atec-hexamine-process

###### 蒸汽冷凝水返还 (`condensate_return`)

实际实测返还质量、相态/状态及供应方处理边界，不自动抵扣热或水。

- 选定流：返还蒸汽冷凝水
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_utilities。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_utilities
- 来源：jrc-cww-2016

###### 外供冷却水返流 (`cooling_water_return`)

实际返流与其进口配对，测定焓/温度，损失或排污另记。

- 选定流：返还外部冷却水
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_utilities。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_utilities
- 来源：jrc-cww-2016

###### 随产品交付编织袋 (`sack_delivered`)

实际交付组分皮重，不是产品质量或第二共同功能；附着内容物保留嵌套产品谱系。

- 选定流：聚丙烯编织包装袋
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_pack。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：

###### 返还复用编织袋 (`sack_returned`)

仅实际可继续使用且返还场外的组分；内部复用不是新购入，污染报废物属于废物。

- 选定流：聚丙烯编织包装袋
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_pack。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：

###### 随产品交付内衬 (`liner_delivered`)

实际交付组分皮重，不是产品质量或第二共同功能；附着内容物保留嵌套产品谱系。

- 选定流：聚乙烯袋内衬
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_pack。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：

###### 返还复用内衬 (`liner_returned`)

仅实际可继续使用且返还场外的组分；内部复用不是新购入，污染报废物属于废物。

- 选定流：聚乙烯袋内衬
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_pack。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：

##### 废物流

###### 外运母液排放物 (`mother_liquor_purge`)

向实际外部接收方转移的单一完整水性混合物，实测六亚甲基四胺/甲醛等效量/氨/甲醇/水及杂质作嵌套组成；内部回流不是外运，本行不是直接淡水排放。

- 选定流：六亚甲基四胺合成水性母液排放物
- 流属性/单位：质量 / kg
- 数量规则：经核实兼容供应方千克等效单位且不重叠的完整混合物模型处理需求A_c / 正原Q_c；cp_accept；cp_waste。实际完整Qt及接收方全量需求各记一次，Qt/Q_c仅作分析；未知归属或单位保持未解决。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste
- 来源：usitc-hexamine-2025; jrc-cww-2016

###### 分离的不合格六亚甲基四胺残渣 (`offspec_hexamine`)

物理独立且实测的固体残渣；内部保留的捕集/洒落产品不是外运，仍附着滤布/袋/内衬的物料嵌套于其完整污染物件，除非跨界前实际分离。

- 选定流：废弃晶体六亚甲基四胺残渣
- 流属性/单位：质量 / kg
- 数量规则：经核实兼容供应方千克等效单位且不重叠的完整混合物模型处理需求A_c / 正原Q_c；cp_accept；cp_waste。实际完整Qt及接收方全量需求各记一次，Qt/Q_c仅作分析；未知归属或单位保持未解决。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste
- 来源：jrc-cww-2016

###### 污染废离心滤布 (`spent_centrifuge_cloth`)

实际完整污染接收方转移包含基材、附着六亚甲基四胺/液体及水，仅计一次。组分/实物群/皮重为嵌套或独立物理账，服务份额不能缩小实际外运。

- 选定流：污染废离心滤布
- 流属性/单位：质量 / kg
- 数量规则：经核实兼容供应方千克等效单位且不重叠的完整混合物模型处理需求A_c / 正原Q_c；cp_accept；cp_asset。实际完整Qt及接收方全量需求各记一次，Qt/Q_c仅作分析；未知归属或单位保持未解决。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_asset
- 来源：jrc-cww-2016

###### 污染废聚酯除尘滤袋 (`spent_dust_filter_bag`)

实际完整污染接收方转移包含基材、附着六亚甲基四胺/液体及水，仅计一次。组分/实物群/皮重为嵌套或独立物理账，服务份额不能缩小实际外运。

- 选定流：污染废聚酯除尘滤袋
- 流属性/单位：质量 / kg
- 数量规则：经核实兼容供应方千克等效单位且不重叠的完整混合物模型处理需求A_c / 正原Q_c；cp_accept；cp_asset。实际完整Qt及接收方全量需求各记一次，Qt/Q_c仅作分析；未知归属或单位保持未解决。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_asset
- 来源：jrc-cww-2016

###### 污染废聚丙烯编织袋 (`sack_scrap`)

实际完整污染接收方转移包含基材、附着六亚甲基四胺/液体及水，仅计一次。组分/实物群/皮重为嵌套或独立物理账，服务份额不能缩小实际外运。

- 选定流：污染废聚丙烯编织袋总成
- 流属性/单位：质量 / kg
- 数量规则：经核实兼容供应方千克等效单位且不重叠的完整混合物模型处理需求A_c / 正原Q_c；cp_accept；cp_pack。实际完整Qt及接收方全量需求各记一次，Qt/Q_c仅作分析；未知归属或单位保持未解决。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：jrc-cww-2016

###### 污染废聚乙烯内衬 (`liner_scrap`)

实际完整污染接收方转移包含基材、附着六亚甲基四胺/液体及水，仅计一次。组分/实物群/皮重为嵌套或独立物理账，服务份额不能缩小实际外运。

- 选定流：物理独立污染废聚乙烯内衬
- 流属性/单位：质量 / kg
- 数量规则：经核实兼容供应方千克等效单位且不重叠的完整混合物模型处理需求A_c / 正原Q_c；cp_accept；cp_pack。实际完整Qt及接收方全量需求各记一次，Qt/Q_c仅作分析；未知归属或单位保持未解决。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：jrc-cww-2016


###### 送场内处理的六亚甲基四胺蒸发水性冷凝液 (`evaporator_condensate_to_treatment`)

仅用于送具名场内处理生产单元且有文件证明的实际冷凝进口相。来源示意图确认分支但未建立该相界，须匹配发送/接收完整混合物，不把同一蒸发顶流重复作液体和气体。

- 选定流：送场内处理的六亚甲基四胺蒸发水性冷凝液
- 流属性/单位：质量 / kg
- 数量规则：实际成对完整转移Qt仅保留一次，经核实兼容完整混合物供应方千克等效单位的模型份额A_c / 正原Q_c仅作单一合格联合处理生产单元需求的一部分，不能对每相重复全部生产单元。非质量生产单元单位或负荷向量在联合账内另标，不得默称千克。 cp_accept；cp_treatment。未知相态/生产单元/基准保持未解决。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_treatment
- 来源：usitc-hexamine-2025; jrc-cww-2016

###### 送场内处理的六亚甲基四胺蒸发顶气混合物 (`evaporator_gas_to_treatment`)

仅用于有文件证明的实际气相进口流，水蒸气、实际物种及温压/水分条件作为一个完整混合物测定。内部冷凝不形成第二独立外运流或再次全部处理需求。

- 选定流：送场内处理的六亚甲基四胺蒸发顶气混合物
- 流属性/单位：质量 / kg
- 数量规则：实际成对完整转移Qt仅保留一次，经核实兼容完整混合物供应方千克等效单位的模型份额A_c / 正原Q_c仅作单一合格联合处理生产单元需求的一部分，不能对每相重复全部生产单元。非质量生产单元单位或负荷向量在联合账内另标，不得默称千克。 cp_accept；cp_treatment。未知相态/生产单元/基准保持未解决。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_treatment
- 来源：usitc-hexamine-2025; jrc-cww-2016

##### 基本流

###### 甲醛排入空气 (`formaldehyde_air`)

实际控制后分子物种质量排入室外空气、子环境未特指；CH2O等效分析响应须先有换算/回收记录，才可归为物种。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_air。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：jrc-cww-2016

###### 氨排入空气 (`ammonia_air`)

实际控制后NH3质量排入室外空气、子环境未特指；氨氮为伴随分析基准，不是同一质量。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_air。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：jrc-cww-2016

###### 甲醇排入空气 (`methanol_air`)

实际进料/控制历史中存在甲醇释放时纳入，不设稳定剂分数或排放因子。

- 选定流：排入室外空气的甲醇
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_air。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：jrc-cww-2016

###### 六亚甲基四胺颗粒排入空气 (`hexamine_air`)

实际测定化学质量及环境介质；不能把总粉尘或捕集量全归六亚甲基四胺，也不能在无合理不重叠基准时再计另一颗粒物总量。

- 选定流：排入室外空气的六亚甲基四胺颗粒
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_air。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：jrc-cww-2016

###### 净水蒸气释放 (`water_vapour_air`)

实际增量水蒸气，区分环境载气水分、蒸发/冷凝及有据反应水约定，不设计量式排放默认。

- 选定流：排入室外空气的水蒸气
- 流属性/单位：质量 / kg
- 数量规则：实测且不重叠的本行归属分子 / 正原Q；cp_accept；cp_air。另行保留完整实际物理总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：usitc-hexamine-2025; jrc-cww-2016

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | hexamine_production | 先追踪实际专用进料及独立计量工序再分配；实际条件共产品须具质量/用途及决定性物理因果关系，对剩余联合负荷披露有据替代方法。不设通用份额或避免生产抵扣。 | jrc-ilcd-2010 |
| allocation_physical | all outputs | 实际物理共产品、废物及公用工程返流全量独立于负荷份额保留；内部母液/热不是销售或额外购入。 | jrc-ilcd-2010 |
| allocation_inherited | all inventory rows | 自有在制品及供应方嵌入历史仅进入一次；后续库存/资产/处理服务保留原批群及不重叠向量，不向每批群重复全部Qt。 | jrc-ilcd-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_accept | hexamine_production | finished_hexamine | 首次验收与取样 | event_id；批群；批次；总重/皮重/净m_e；水分/物种约定；含量方法/试样基准；牌号；杂质；取样计划；后续退货/状态/损失 | 校准完整产品称重并取具代表性密封样，区分IS或JECFA程序/终点/试样基准并追踪实验室质控。首次验收仅锁定一次并核对原批群状态。 汇总程序：归属分子或A_c / 原Q_c；完整原始物理总量另行保留。 | kg | 每次首次批验收及后续状态转移 | 完整连续时段及原批群 | 同一声明产品、路线及场址 | 每 1 kg 参考流 | 校准、原始记录、方法/基准证据、完整库存/出处及不确定性核查 |
| cp_feed | hexamine_production | aqueous_formaldehyde, liquid_ammonia, process_water | 完整进料及库存 | row_id；完整质量；供应方；含量及方法；游离HCHO/水合物/低聚物；CH2O等效基准；甲醇/稳定剂；水约定；杂质；原料/在制品库存；接收/投料/返还；继承向量 | 校准称重/流量计量，需要时采用实际密度；核验组成及库存平衡，区分完整进料、嵌套分析组分与归属需求。 汇总程序：归属分子或A_c / 原Q_c；完整原始物理总量另行保留。 | kg | 每次接收/投料/返还及库存边界 | 完整连续时段及原批群 | 实际进料界面及全部反应单元 | 每 1 kg 参考流 | 校准、原始记录、方法/基准证据、完整库存/出处及不确定性核查 |
| cp_power | hexamine_production | electricity | 电表 | 仪表；设备；千瓦时；时间；待机/返工；供应方；电压；交付/损耗边界；共享驱动 | 分表计量实际驱动、控制及归属辅助工序，核对总量及实测因果驱动，仅换算电气单位。 汇总程序：归属分子或A_c / 原Q_c；完整原始物理总量另行保留。 | MJ | 抄表间隔及设备工况 | 完整连续时段及原批群 | 全部纳入用电设备 | 每 1 kg 参考流 | 校准、原始记录、方法/基准证据、完整库存/出处及不确定性核查 |
| cp_utilities | hexamine_production | steam_in, condensate_return, cooling_water_in, cooling_water_return | 物理公用工程及供应方基准 | row_id；进/返质量；温度；压力；相态/干度；焓；实际供热/反应/回收/散热；损失/排污；供应方单位；生产边界；原始库存；原批群 | 计量配对物理流体界面及实际热力学状态，闭合水/热账。匹配真实生产商单位，记录实际焓换算，不重复质量与热背景需求。 汇总程序：归属分子或A_c / 原Q_c；完整原始物理总量另行保留。 | kg | 每个公用工程时段及状态变化 | 完整连续时段及原批群 | 实际外部供应方及全部纳入热/冷单元 | 每 1 kg 参考流 | 校准、原始记录、方法/基准证据、完整库存/出处及不确定性核查 |
| cp_pack | hexamine_production | sack_in, sack_delivered, sack_returned, liner_in, liner_delivered, liner_returned, sack_scrap, liner_scrap | 包装转移及归属 | component_id；结构/皮重/件数；接收/交付/返还/报废；空/装料库存；完整废物Qt；基材/产品/液体/水；接收方/供应方数量/单位；观测物理出处；实际共享历史；有据份额；A_c；原Q_c | 按谱系称每个实际包装组分/转移及库存，完整污染废物及实际接收方全量各记录一次。内容物嵌套，仅另行模型化有据兼容批群服务/处理A_c，不跨批重复全部Qt或推定袋共享历史。 汇总程序：归属分子或A_c / 原Q_c；完整原始物理总量另行保留。 | kg | 每次包装/返还/处置及库存边界 | 完整连续时段及实际历史 | 实际独立袋/内衬配置及接收方 | 每 1 kg 参考流 | 校准、原始记录、方法/基准证据、完整库存/出处及不确定性核查 |
| cp_asset | hexamine_production | centrifuge_cloth, dust_filter_bag, spent_centrifuge_cloth, spent_dust_filter_bag | 过滤实物群及服务 | component_id；实际材质/尺寸/基材质量/件数；安装/拆除/清洁；期初期末实物群；实际服役历史；原服务批群；完整污染Qt；嵌套化学品/水；接收方/供应方数量/单位；观测出处；有据份额；A_c | 分别计量实际部件/实物群及完整废物转移，不假定质量或寿命。以实际服务批群历史及兼容供应方单位建立互不重叠服务/处理向量；物理Qt及接收方全量各一次，未知份额未解决。 汇总程序：归属分子或A_c / 原Q_c；完整原始物理总量另行保留。 | kg | 每次装拆/服务及库存边界 | 跨原批群的完整实际历史 | 实际离心/除尘滤件及接收方 | 每 1 kg 参考流 | 校准、原始记录、方法/基准证据、完整库存/出处及不确定性核查 |
| cp_waste | hexamine_production | mother_liquor_purge, offspec_hexamine | 完整废物转移 | transfer_id；完整Qt；实际物种/等效基准；湿/干/水相；杂质；来源；内部返还；接收方/供应方接受及单位；原批群；物理出处；有据份额；A_c | 称每项物理独立完整混合物，保留库存/去向及嵌套组成。实际接收方/供应方总量仅一次；模型处理A_c仅依据真实不重叠批群证据及兼容单位归属，不编造额外溶质/水外运。 汇总程序：归属分子或A_c / 原Q_c；完整原始物理总量另行保留。 | kg | 每次实际转移及库存边界 | 完整连续时段及原批群 | 实际残渣/水性排放物及接收方界面 | 每 1 kg 参考流 | 校准、原始记录、方法/基准证据、完整库存/出处及不确定性核查 |
| cp_air | hexamine_production | formaldehyde_air, ammonia_air, methanol_air, hexamine_air, water_vapour_air | 控制后物种监测 | row_id；排口/介质；方法及基质；物种/等效量；浓度；气流量；水分/温度/压力；时长；校准/空白/回收；检出限；启动/旁路/无组织；载水增量；不确定性 | 采用源端适用且经验证取样/分析及兼容浓度-流量条件，积分实际控制后释放，分别处理未测路径和物种换算。不得从总VOC/PM推断物种或把未测设零。 汇总程序：归属分子或A_c / 原Q_c；完整原始物理总量另行保留。 | kg | 代表性测试及全部工况记录 | 完整连续时段含实际旁路/清洁 | 全部实际排口及无组织路径 | 每 1 kg 参考流 | 校准、原始记录、方法/基准证据、完整库存/出处及不确定性核查 |
| cp_treatment | hexamine_production | treated_distillate_received, evaporator_condensate_to_treatment, evaporator_gas_to_treatment | 实际相连场内处理生产单元界面 | treatment_run_id；实际来源/所有方/数据集；单元边界；场址/时段；参考单位；成对发送/接收事件；完整质量/相态/组成/温压；实际燃料/空气/O2/试剂/水/公用工程/排放/残渣/热记录；全部出口/去向；实际联合生产单元需求；不重叠服务批群；原Q_c；不可用范围 | 建立完整真实且具源据的汽提/CatOx生产单元，不用泛化处置代理。匹配实际成对物理界面及全部生产单元清单/负荷，跨全部相态/出口/批群的联合需求只计一次，内部流仅在合并时抵消。不声称已有合格数据集，缺实际生产单元/相态/基质/基准妨碍完整研究使用。 | kg | 每个实际生产单元运行及成对界面事件 | 同一实际连续场址时段及原批群 | 实际具名场内生产单元及完整发送/接收边界 | 每 1 kg 参考流 | 真实来源/所有方、完整成对生产单元记录、组成/相态闭合、兼容单位、实际负荷及独立资格确认 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| acceptance_Q | finished_hexamine | Q = 固定门唯一首次验收事件完整净m_e之和，原事件/批群及水分基准仅保留一次，循环及退货不形成新事件。 | event_id; m_e; cp_accept | Q千克 |  |
| normalize_cohort | all inventory rows | 行模型交换 = 有据且不重叠归属分子 / 正原批群Q_c。废物处理分子是兼容A_c或独立归属向量，不能对每个批群使用全部共享Qt。基准未知时保留原始总量及未解决结果。 | 本行归属分子; Q_c; cp_accept | 本行原单位/每1千克参考流 |  |
| cohort_bridge | cp_accept | Q0 = 原验收基准的互斥净剩余交付 + 全部实际场内验收状态 + 不可逆损失 + 其他终端处置，后续外部新增另行排除；不得把损失恢复进幸存量后再次计损。 | Q0; 实际状态; 谱系; 新增/损失 | 原批群桥及残差 |  |
| physical_and_burden | hexamine_production | 物理期初 + 外部输入 = 物理期末 + 外部输出，保留实际反应/物种及等量内部连接；另核对期初自有在制品向量 + 不重叠新向量 = 期末结转 + 终端归属向量。分配不能创造物理闭合。 | 物理库存/流; 物种/元素/水; 自有/供应方向量 | 独立物理与负荷残差 |  |
| assay_companion | cp_accept, cp_feed | 仅按实际方法记录换算收到/干燥/CH2O等效约定，不混用IS非水法与JECFA分解法当量，不从名义含量推游离水，不以分析物质量替代完整产品Q。 | 实际方法与试样基准; 实验室记录 | 有据伴随含量量值 | bis-is4306-1987; jecfa-hexamine |
| utility_and_electricity | cp_utilities, cp_power | 电气MJ = 实测千瓦时 × 3.6。蒸汽/冷却热 = 实测质量 × 兼容实际焓差，并声明符号/状态；明确匹配供应方单位，不设默认因子或重复质量/热负荷。 | 实际仪表/质量/状态/焓; 供应方参考单位 | 兼容实际公用工程量 |  |
| species_load | cp_air | 物种负荷 = 实际兼容浓度 × 气流量 × 时间的积分，明确物种/等效量及单位换算。保留载气水分和实际控制后/无组织覆盖，未知换算保持未解决。 | 实际浓度; 流量; 时间; 物种基准 | 物种质量千克 | jrc-cww-2016 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 核对完整产品/组分身份、实际相态/组成/CAS/路线、属性/单位组及供应方基准；源端分类或污染别名不能独立证明匹配。 | 完整原生记录、实际牌号及兼容供应方 |
| dq_chemistry | hexamine_production | 独立核对实际总质量/C/H/N/O、反应物种及水约定，不设理论收率或方程产水默认。 | 实际分析/物种、反应程度、相态及库存记录 |
| dq_original_cohorts | all inventory rows | 保留唯一门Q、全部后续状态、一次自有/供应方继承向量及完整失败/返工/待机时段。 | 验收谱系、物理及不重叠负荷账 |
| dq_waste_service | cp_pack, cp_asset, cp_waste | 实际完整接收方/供应方总量仅一次，已知物理出处独立于有据模型A_c/Q_c。未知共享/单位兼容未解决，不设寿命/份额/抵扣默认。 | 完整混合物磅单、组分库存、实际服务历史及供应方单位 |
| dq_methods | cp_accept, cp_air | 采用实际完整适用程序、取样、回收/空白/校准及不确定性。IS/JECFA不证明食品批准、全部工业杂质或烟气/废水方法。 | 方法版本、实际基质验证及实验室质控 |
| dq_completeness | dataset | 披露未解决输入/供应方/物种及全部测量/路径缺口，方法/模式成功不构成科学研究批准。 | 连续场址记录及明确完整性评估 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_hexamine | 须有一个完整未稳定化晶体Product输出、1千克验收门净基准及全部有序限定，不采用三聚氰胺、树脂、内酰胺或泛杂环代理。 | usitc-hexamine-2025; atec-hexamine-process |
| validate_basis | all inventory rows | 核对参考/采集/数量一致、原正Q、无重复验收及完整原批群去向桥；零/未知基准保留原始总量。 |  |
| validate_water_species | hexamine_production | 区分完整水溶液进料、CH2O等效含量、实际游离/水合/低聚物种、甲醇及水约定；理论方程不是质量/配方/水默认，也不意味着反应HCHO守恒。 | usitc-hexamine-2025 |
| validate_whole_waste | all waste outputs | 核对单一实际完整污染转移及接收方/供应方全量、嵌套组成、已知物理出处及独立有据模型批群份额/单位。不得向每批群重复全部Qt或虚构独立附着液体外运。 | jrc-ilcd-2010 |
| validate_upstream_utility | all inputs | 须有真实匹配原料/公用工程生产商历史及实际返流/焓界面，不隐藏场内锅炉或重复供应方汇总/拆分。 | jrc-cww-2016 |
| validate_completion | dataset | 完整研究使用前解决实际身份、供应方及基质方法缺口，保留未测/未定范围、来源限制及独立科学/翻译/研究状态。 | bis-is4306-1987; jecfa-hexamine; jrc-cww-2016 |
| validate_onsite_treatment | cp_treatment | 保留实际第一效–汽提/CatOx–馏出液来源分支及完整生产单元全联结。物理相态/组成、来源/所有方/单位或真实处理清单未知时未解决；省略操作、假定外包、泛化处置或重复完整生产单元需求均不能通过研究完整性。 | usitc-hexamine-2025; jrc-cww-2016 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 资格确认后的场址特定前景液相六亚甲基四胺生产 |
| downstream_use | 仅在实际化学/牌号/供应方/基准兼容时用于secondary_dataset或background_dataset |
| allowed_use | 声明路线及验收门的未稳定化晶体六亚甲基四胺供应 |
| excluded_use | 全35230覆盖；三聚氰胺、NMP/内酰胺、稳定化牌号、溶液或下游配制；食品/药品/认证或方法批准结论 |
| required_metadata | CAS/牌号；实际进料含量/物种/水；首次门/批群；连续场址时段；来源/投影身份；公用工程/供应方单位；库存/负荷历史；包装/滤件/接收方记录 |
| required_quality_disclosure | 全部身份/供应方/方法与数量缺口、不重叠/残差、实际分析与环境覆盖、不确定性、独立审查/科学/研究状态 |
| update_trigger | 牌号/添加剂/相态/进料/路线/门、供应方/公用工程整合、方法、库存/资产/接收方分配或重要原生身份变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| usitc-hexamine-2025 | official_guidance | USITC Publication5660, Hexamine (Hexamethylenetetramine) from China, September2025, PDF34 and73–77/printed1.13–1.17. https://www.usitc.gov/publications/701_731/pub5660.pdf | 具名CAS/式/晶态身份、2933.69.50分类及实际液相合成/结晶/离心/干燥、纯产品与稳定化区别，以及明确保留的汽提/CatOx至馏出液分支。生产商案例证据，不采用关税、数值配方、收率、条件、纯度、工厂负荷或环境优势。 |
| atec-hexamine-process | literature | ATEC, Hexamine Product/Process Overview, undated page snapshot2026-11-08, liquid versus vapour-phase description and stabilized/un-stabilized product table. https://atec.co.in/ProcessTechnologies_subab1f.html?val=8 | 另行工程来源的甲醛水溶液/无水液氨液相变体及商业未稳定化晶态，排除气相变体；表内牌号、目数及组成数值不作默认。 |
| bis-is4306-1987 | standard | Bureau of Indian Standards, IS4306:1987, Second Revision with Amendment1 February1990, scope1.1; AppendixA2/A5/A7 and AppendixB, scan PDF5–13. https://archive.org/details/gov.in.is.4306.1987 | 历史工业固体分析/取样方法，保留完整扫描原件并视觉阅读。保留方法约定及引用依赖，不作现行法律/认证结论或采用牌号界限；视觉来源图不是OCR/全文转录。 |
| jecfa-hexamine | official_guidance | FAO/WHO JECFA, Hexamethylenetetramine monograph, prepared1973/published1978 and1992, metals revision2004; complete2-page definition and assay. https://www.fao.org/fileadmin/user_upload/jecfa_additives/docs/Monograph1/Additive-224.pdf | CAS/式/晶态定义及独立干燥试样酸分解/返滴定程序；不采用食品批准、临床界限、纯度规格或工业/排气基质豁免。 |
| jrc-cww-2016 | official_guidance | European Commission JRC, Common Waste Water and Waste Gas Treatment/Management Systems in the Chemical Sector,2016, BAT2–5, PDF573–574/printed543–544. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf | 化工物流/反应/排放清单、去向及监测质量背景，不提供源端特定已验证测试、当地强制频率或六亚甲基四胺排放因子。 |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook Detailed Guidance, first editionMarch2010, §7.9.3, PDF277–278/printed257–258. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 虚拟细分/决定性物理因果及有界剩余经济关系，不提供通用分配/服务份额、回收抵扣或逐字批群账规定。 |
| unsd-cpc3-2025 | official_guidance | UNSD CPC3.0 Explanatory Notes,30June2025, PDF159–160 and170. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 现行35230指定杂环名称及相邻残余/酰胺类别；具名化学品较窄关系仍为推论，待独立接受。 |
| wco-hs29-2022 | official_guidance | WCO Harmonized System2022 Chapter29, PDF18,2933 triazine/lactam headings. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0629_2022e.pdf?la=en | 结合USITC具名六亚甲基四胺证据区分现行品目族；不把环结构直觉、原生34150或历史对应表当作自动现行CPC映射。 |
