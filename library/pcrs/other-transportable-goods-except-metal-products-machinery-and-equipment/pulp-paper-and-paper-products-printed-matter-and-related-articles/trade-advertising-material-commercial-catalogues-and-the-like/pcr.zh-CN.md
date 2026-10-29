---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.trade-advertising-material-commercial-catalogues-and-the-like
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 贸易广告材料与商业目录：单张纸胶印金属丝骑马钉产品目录

## 1. 范围与适用性

本PCR限定一个较窄实物子集：受卖方委托、用于推广其商品并支持采购的完整纸质商业产品目录，采用未涂布内页、柔性未涂布无覆膜纸封面、常规CMYK单张纸湿润胶印吸收/氧化定着、免处理CTP印版、折页/配帖、圆截面镀锌碳钢丝骑马钉及三面裁切。交付为印刷厂门验收货物，包装后用于声明的后续商业分发目的。册中含商品说明/图片及采购/联系途径；用作业委托、实际内容、目标受众与分发证据确定商业用途，不能只凭名称或装订分类。

联合国CPC3.0代码32620及上级3262识别贸易广告材料/商业目录；官方代码页及解释注释152页均未规定频率、纸张、装订、页数或制造要求。本PCR结构为明确技术选择，不宣称覆盖整叶。相邻148–150页区分系统编排联系信息名录、一般书籍及有各自频率条件的报刊。定期更新价格的目录不自动成为期刊，商业名录也不自动成为广告；混合内容有歧义的版次需分类审查。本稿不援引HS定义。[unsd-cpc3]

排除普通联系名录、教材/参考/一般书籍、乐谱、编辑性报刊、散页传单/海报、自封或硬壳结构、锁线/线圈/完美胶订/PUR/EVA装订、数码/无水/凹版/柔版/热固轮转/冷固轮转/辐射固化印刷、覆膜/烫箔/上光/插入件、非纸基材与一体化造纸。未交付该实物的创意/出版/印刷服务、在线广告、邮政配送、消费者使用/寿终以及广告触达/销售转化均不是参考输出。厂门交接后外运不在本交付门内，下游研究需要时须另建模。

第一方原件证明单张纸、骑马钉、整份订书丝及免处理版技术可行，不证明某一现场的组合设备、配方或计量。印刷厂和设备来源提供多种路线；PGM目录能力为热固轮转，仅反证全部目录都遵循本方法的说法。非参考数量均为后续前景采集义务，不默认配方、性能寿命、废品率、钢钉数、单册质量或排放因子。[breese-sheetfed, demago-catalogues, mm-primera, bekaert-stitching-wire, kodak-process-free, pgm-counterexample]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.trade-advertising-material-commercial-catalogues-and-the-like |
| classification_refs | CPC 3.0 32620；narrower；当前接受关系及决定以`classifications/mappings/cpc-3.0-to-pcr.yaml`及其引用ADR为准，不表示整类覆盖或科学/翻译批准 |
| covered_products | 符合声明纸张、常规单张纸与圆丝骑马钉结构，且核实商品推广/订购目的的卖方商业产品目录。 |
| excluded_products | 普通名录/书籍/编辑性报刊; 散页/折叠广告纸; 其他基材、印刷/固化、装订与整饰; 在线/出版/广告/配送服务。 |
| representative_product | 完整未涂布内页、独立柔性未涂布纸封目录，CMYK湿润单张纸胶印、圆截面镀锌碳钢丝骑马钉，裁切并质量放行。 |
| production_route | 印前/CTP → 开机/湿润单张纸印刷/定着 → 折页/配帖/进封 → 丝成形/穿订/裁切 → 检验/包装/厂门交接。 |
| market_state | 厂门验收完整实物目录; 包装组件及发运/退回毛量与净参考质量分别记录。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以验收完整实物目录交付声明卖方的商品推广与订购内容。 |
| How much | 同一声明设计及首次放行批次的完整验收目录净量1千克; 册数/页数随实测质量披露。 |
| How well | 实际约定印刷可读性/色彩规格、页完整性/页序、折裁尺寸、钢钉完整性/位置及安全翻阅验收; 不默认不同设计功能等价。 |
| How long or cycle | 一制造批次的厂门状态; 实际版次/活动日期是限定信息，不是已量化广告效果寿命。 |
| reference_flow_link | `catalogue` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 贸易广告材料、商业目录等 `65e0a956-9e06-4fc3-8d4d-720826b93fd1` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 卖方/设计与版次; 实际内容及商业推广/订购目的; 目标受众与分发交接; 首次放行批次及验收净质量; 册数/页数与裁切尺寸; 内页/封面等级/浆料/定量/含水率; 完整CMYK油墨SKU/定着/碳源; 免处理版结构/涂层; 实际润版/清洗组成及交付稀释状态; 圆丝钢材/涂层/直径及装订验收; 无胶/线和排除整饰证明; 实际场址/设备/期间; 电压/电网和热/燃料调查; 供方/处理责任; 组件获取/退回历史; 分配与不确定度 |

净质量包含全部留存内页/封面纸、油墨、转移版涂层、粉剂、钢丝及锌，并保留实测含水率；排除运输包装。UUID身份不提供现场配方或定量背景。全部限定信息须记录于数据集元数据、参考流说明或等效证据。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 首次质量放行后用校准称量取得完整目录净质量，含留存钢钉/墨/粉，排除运输包装; 采用cp_release采集。 |
| `cohort_basis` | 所有清单行 | 兼容批次交换属性 | kg; MJ | 最终基准为每 1 kg 参考流。Qc为新批唯一首次放行净千克，新验收期末成品计一次; 旧批沿用原Qc，不采用当月销售/投纸/只计发运的分母。 |
| `formulation_unit` | 化学品行 | 供货配方质量 | kg | 保留整配方与组分/稀释状态以及实测密度、含量和碳源。化验组分不能与整配方供方重复。 |
| `energy_unit` | 电力 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 实际千瓦时乘3.6换为MJ; 保留电表电压/地区/年份/供方基准，电力不是购热或蒸汽焓。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 印刷厂门收到购入未印干纸、成品免处理涂层版、完整供货配方和镀层订书丝。 |
| starting_condition_role | foreground_collection_gate |
| product_classification_scope | 仅32620中声明的商业产品目录实物子集; 不覆盖全叶或全部工艺。 |
| recursive_input_rule | 购入已印目录不是原纸或新生产; 保留来源/批次/继承交换向量及原参考基准，同件退回/返工不能再次形成首次放行产出。 |
| upstream_dataset_requirement | 实际兼容造纸、印版/涂层、整墨/润版/清洗/镀层丝、公用工程、包装获取及废物处理背景各一次，匹配交付状态、数量和责任。 |
| disclosure | 设计/场址/期间; 交付门及实际商业交接; 阶段/外协; 排除路线与现场热/燃料调查; physicalV、burdenA及库存责任; 未决身份/供方/数量与范围。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `b_route` | 目录制造 | 纳入印前/CTP、开机、内页/封面湿润单张纸印刷定着、折页/配帖、进封、丝成形/穿订、裁切、检验、包装及归属冷却/空压/收集/清理/待机。供方技术存在不证明现场配置或数量。 | `epa-eiip-2002`; `epa-ctg-2006`; `mm-primera`; `breese-sheetfed` |
| `b_content` | 适用性 | 独立于名称/装订核实卖方商品推广/订购内容、委托和分发目的。排除服务、书籍/名录/编辑性报刊及不兼容结构; 本方法不对32620施加出版频率阈值。 | `unsd-cpc3`; `demago-catalogues` |
| `b_utilities` | 有界全电前景 | 选定配置为电驱阶段及电力辅助服务，无现场燃烧、购入蒸汽/供热或热力油墨烘干炉。实际调查须证明范围，缺证不是零。若实际发生燃料/热/制冷剂损失或其他排除操作，保留数量，声明完整前须另评原子交换扩展。 | `epa-ctg-2006`; `breese-sheetfed` |
| `b_heat_guard` | 任何拟议供热扩展 | 独立计量供/回质量，按实际压力/温度/品质/焓参考态保留独立入/出焓流; 核对真实泄漏/排污/冷凝/储能项。只有同边界质量匹配证明成立才用质量×(供焓−回焓)，不造效率，不将电力MJ等同交付蒸汽热。本守则不批准未经评估的热路线。 | `ilcd-2010` |
| `b_stage` | 阶段及库存账 | 逐材料/状态、逐阶段保留S0 + 外来收货 + internal_in + 真实转化形成 = S1 + 外移各腿 + internal_out + 真实转化消耗。全部损失/排放及已证物种转化须记录; 形成/消耗为真实转换，不是同态转库。internal_out与接收internal_in的身份/状态/批次/数量须一致，合并后相消。化验组分账嵌套于整品，不能再加质量。 | `epa-eiip-2002`; `ilcd-2010` |
| `b_cohort` | 首次放行及后续处理 | raw/WIP/新FG/旧FG/reusable库存位置互斥。新实物只在首次质量放行记入Qc，新验收期末成品计一次。期初FG、旧验收品、真实同件外来退回、返工、重包装或后续服务不造Q。逐交换继承向量保留原所有人/批次/Qc; 实际新增服务按原基准或明确经审服务参考添加。Q=0/待机/清理/失败负荷保留待归属，不能仅因月份一致就除当前新Q。 | `ilcd-2010` |
| `b_packaging` | 每包装组件 | 首次外来采购记P，包含整批总价而无单独发票仍为P; 真实首次非购借用/租用/委托/随货记N_ext; 仅有同件先前外移证据才记ER。保留所有人/批次/继承向量及raw/WIP/附新FG/附旧FG/reusable互斥位置。发运毛量、退还所有人、废物及每条实际运输腿分别保留，不能net相抵。零价格不等于零负荷; 整容器与组件制造负荷只能归属一方。 | `ilcd-2010` |
| `b_backgrounds` | 上游及废物 | 投入生产/交付及外送接收处理各链接一次; 整墨/润版/清洗/镀层丝/完整包装已含的组分不能再计生产。直接室外物种为现场治理后交换; 移交废水为处理交接，已收尘为废物，环境进气不是新增工艺排放。 | `epa-ctg-2006`; `ilcd-2010` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `catalogue_manufacture` | 商业产品目录，湿润单张纸与金属丝骑马钉 | required | 核实商业目的、声明完整结构及全电场址范围 | foreground | 1千克验收完整目录净量 |

实物阶段：印前/CTP → 内页/封面印刷定着 → 折页/配帖/进封 → 丝成形/穿订/裁切 → 放行 → 包装/发运毛量。按b_stage保留逐阶段物料状态、涂层/墨/水转化、计量与内部链接。只有一个最终参考产出，外移包装不扩大Q。

每卡一项原子实物材料/物流，重复广义UUID不合并不同角色或所有人。以下数量为cp_cohorts归属后的兼容批次清单，独立保留未分配physicalV、burdenA及库存结转。未知发生不是零。调查实际维护件/橡皮布/润滑剂、耗用线轴/卷芯、来货包材、处理药剂、其他润版/清洗组分、制冷剂及物种; 每个实际额外交换须有具体原子行、单位/供方/数量和范围审查后，数据集才可完整。不造更换寿命，也不用泛混合卡填缺口。

### 过程：商业目录制造（`catalogue_manufacture`）

#### 输入

##### 产品流

###### 未涂布印刷书写纸和包装纸（`body_paper`）

购入未印刷、干燥的未涂布内页纸。记录实际浆料、回收纤维份额、定量、含水率、尺寸、纸纹与供方；广义身份不是纸厂配方。开机纸损与裁边分别核算。

- 选定流：未涂布印刷书写纸和包装纸 `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_materials和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`epa-eiip-2002`

###### 未涂布印刷书写纸和包装纸（`cover_paper`）

单独的柔性未涂布纸封面；即使与内页共用UUID也须分别称量。不含硬壳纸板、薄膜、上光或预印封面。核实实际封面强度与折叠/压痕验收。

- 选定流：未涂布印刷书写纸和包装纸 `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_materials和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`demago-catalogues`

###### 成品免处理感光铝基胶印印版（`plate`）

购入完整带涂层的CTP印版，不是切割/磨版/阳极氧化版基。记录涂层化学、整版质量/数量、曝光、在机涂层去向及开机损耗。本路线无独立显影液/印版处理机；仍须计入版材生产和印刷废物。

- 选定流：成品免处理感光铝基胶印印版
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_materials和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`kodak-process-free`

###### 溶剂型平版油墨（`ink_black`）

一份供货态完整黑色常规油基浆状配方。须有兼容非辐射单张纸定着、实际SKU、全部组分/溶剂及化石/生物碳记录。原生广义胶印同义词支持身份；乙二醇酯举例及按热需求分类不规定配方或热固烘干炉。逐色记录；供方整墨生产只计一次，组分化验仅作嵌套分析账。

- 选定流：溶剂型平版油墨 `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_formulations和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_formulations`
- 来源：`epa-ctg-2006`; `huber-sheetfed-ink`

###### 溶剂型平版油墨（`ink_cyan`）

一份供货态完整青色常规油基浆状配方。须有兼容非辐射单张纸定着、实际SKU、全部组分/溶剂及化石/生物碳记录。原生广义胶印同义词支持身份；乙二醇酯举例及按热需求分类不规定配方或热固烘干炉。逐色记录；供方整墨生产只计一次，组分化验仅作嵌套分析账。

- 选定流：溶剂型平版油墨 `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_formulations和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_formulations`
- 来源：`epa-ctg-2006`; `huber-sheetfed-ink`

###### 溶剂型平版油墨（`ink_magenta`）

一份供货态完整品红色常规油基浆状配方。须有兼容非辐射单张纸定着、实际SKU、全部组分/溶剂及化石/生物碳记录。原生广义胶印同义词支持身份；乙二醇酯举例及按热需求分类不规定配方或热固烘干炉。逐色记录；供方整墨生产只计一次，组分化验仅作嵌套分析账。

- 选定流：溶剂型平版油墨 `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_formulations和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_formulations`
- 来源：`epa-ctg-2006`; `huber-sheetfed-ink`

###### 溶剂型平版油墨（`ink_yellow`）

一份供货态完整黄色常规油基浆状配方。须有兼容非辐射单张纸定着、实际SKU、全部组分/溶剂及化石/生物碳记录。原生广义胶印同义词支持身份；乙二醇酯举例及按热需求分类不规定配方或热固烘干炉。逐色记录；供方整墨生产只计一次，组分化验仅作嵌套分析账。

- 选定流：溶剂型平版油墨 `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_formulations和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_formulations`
- 来源：`epa-ctg-2006`; `huber-sheetfed-ink`

###### 圆截面镀锌碳钢订书丝（`stitch_wire`）

一股线轴供货的成品订书丝，在折脊处成形、裁断、穿订并弯脚。记录钢牌号、圆截面、实测直径、锌/涂层质量、供货路线、线轴皮重、留存书钉及裁断/错订废料。厂家能力只证明技术存在，不代表现场规格/剂量。整份镀层丝背景已含钢/锌时不得重复添加组分生产。

- 选定流：圆截面镀锌碳钢订书丝
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_stitch和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_stitch`
- 来源：`bekaert-stitching-wire`; `mm-primera`; `demago-catalogues`

###### 水性胶印润版浓缩液（`fount_concentrate`）

一份购入的完整水性浓缩液SKU，尚未现场稀释。称量供货整配方，取得包括SDS省略份额在内的完整组成、载体水、活性含量与记录条件下密度。组分生产及载水不再重复添加。广义普通型润版液记录不能建立浓缩液/即用液供方基准。

- 选定流：水性胶印润版浓缩液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_formulations和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_formulations`
- 来源：`epa-ctg-2006`

###### 另加入润版回路的异丙醇（`ipa_addition`）

仅实际另行供应异丙醇时适用，CAS67-63-0，保留实际纯度/载体质量及供方范围。只计浓缩液以外的另加量。不采用限定光学装配用途的候选。无醇作业须有不存在证据，不能规定正流量或默认零。

- 选定流：另加入润版回路的异丙醇
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_formulations和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_formulations`
- 来源：`epa-ctg-2006`

###### 常规胶印橡皮布清洗用石油馏分配方（`wash`）

一份完整供货橡皮布/墨辊清洗液；取得实际UVCB/CAS、馏程、组分、载水、碳源与非热固适用证明。不是煤焦油洗油或喷墨头清洗剂。逐组分核对产品留存、废液/废布与通风去向；改用酯类须另评化学身份/路线。

- 选定流：常规胶印橡皮布清洗用石油馏分配方
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_formulations和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_formulations`
- 来源：`epa-ctg-2006`

###### 棉布（`cloth`）

条件项为实际干棉擦拭布。原生织物/棉布同义词支持织物身份；原棉分类与作物说明保留为源质量债务。须有成品布供方背景，不能仅用原棉种植。新获取、同件洗涤退回与污染分别记录，不设通用更换寿命。

- 选定流：棉布 `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_materials和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`epa-ctg-2006`

###### 淀粉（`powder`）

条件项为实际未改性淀粉防蹭脏粉，不假定疏水涂层。取得实际等级/原料及施用、留存、收集、空气数量。涂层或混合粉须另列配方/组分；文献粒径或湿度建议不是默认LCI值。

- 选定流：淀粉 `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_materials和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`heidelberg-powder`

###### 自来水（`water`）

另行供应的处理后市政水用于润版稀释与清洗，分表计量。采购水行排除浓缩液/清洗配方载水，但水平衡只计其一次。体积换质量须实测兼容密度与温度；原生次级体积系数不是通用密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_water和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`epa-ctg-2006`

###### 交流电（`electricity`）

仅实际匹配时采用用户侧中国(CN)1–35千伏电网平均交流电；原生供货地区为CN，不是全球电网。计量印前、CTP、开机/印刷、冷却/压缩空气、折页、骑马钉、裁切、收尘、包装和归属待机/清理。保留实际电网/地区/年份/损耗责任。原生参考属性为净热值/MJ，不是蒸汽交付焓。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组：`93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_energy和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`epa-eiip-2002`; `mm-primera`

###### 成品瓦楞运输纸箱（`carton_in`）

实际完整运输纸箱；取得等级、整箱质量与实际原生/回收纤维配方。不将固定16.6%原生/83.4%回收纤维的候选赋给未知纸箱。按cp_packaging区分P/N_ext/ER并保留全部实物腿；供方制造只计一次。

- 选定流：成品瓦楞运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_packaging和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`ilcd-2010`

###### 聚乙烯薄膜（`film_in`）

一项PE发运膜组件，CAS9002-88-4，不是目录覆膜。原生名称/CAS及薄膜说明支持身份，但行李制品分类保留为元数据债务。取得实际聚合物/助剂/等级/厚度和质量；保留组件责任及毛运输记录，不用PET或薄膜加工服务替代。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_packaging和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`ilcd-2010`

###### 木制托盘、箱式托盘和其他装载板，木制托盘套环（`pallet_in`）

仅此广义原生类别中的一件实际成品木托盘。记录整托质量、结构、处理、紧固件、所有人及获取/批次历史。不是散木条或光伏安装专用托盘。首次购买、真实首次非购入与同件退回分开；整托与组件不能同时拥有制造负荷。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_packaging和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`ilcd-2010`

##### 废物流

选定结构此组无交换，须以场址调查核实不存在。

##### 基本流

选定结构此组无交换，须以场址调查核实不存在。

#### 输出

##### 产品流

###### 贸易广告材料、商业目录等（`catalogue`）

仅指本方法选定已验收完整商业产品目录：纸内页/纸封面、留存墨/粉及圆截面镀层钢钉，排除发运包装。裁切后检验可读性、页序与装订并称量。每件新实物仅首次质量放行计量，新验收期末成品计一次。广义商业身份不提供单册质量或供方制造均值。

- 选定流：贸易广告材料、商业目录等 `65e0a956-9e06-4fc3-8d4d-720826b93fd1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：`unsd-cpc3`; `demago-catalogues`

###### 成品瓦楞运输纸箱（`carton_out`）

仅实际作为包装组件向外跨界的纸箱。发运毛量、真实退还所有人及转交其他批次须保留独立交易腿，记录原所有人/批次/继承向量。兼容总量不能与退回量相抵，也不是第二种新制造参考产品。外移实物质量不自动建立避免生产信用；保留每条实际运输腿。

- 选定流：成品瓦楞运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_packaging和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`ilcd-2010`

###### 聚乙烯薄膜（`film_out`）

仅实际作为包装组件向外跨界的PE薄膜。发运毛量、真实退还所有人及转交其他批次须保留独立交易腿，记录原所有人/批次/继承向量。兼容总量不能与退回量相抵，也不是第二种新制造参考产品。外移实物质量不自动建立避免生产信用；保留每条实际运输腿。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_packaging和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`ilcd-2010`

###### 木制托盘、箱式托盘和其他装载板，木制托盘套环（`pallet_out`）

仅实际作为包装组件向外跨界的木托盘。发运毛量、真实退还所有人及转交其他批次须保留独立交易腿，记录原所有人/批次/继承向量。兼容总量不能与退回量相抵，也不是第二种新制造参考产品。外移实物质量不自动建立避免生产信用；保留每条实际运输腿。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_packaging和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`ilcd-2010`

##### 废物流

###### 废纸（未指定）（`paper_trim`）

一股独立收集的未装订裁边/开机废纸。保留含水率、油墨组成与接收方；纸包装废物另计。带钉完整废目录不能按纯纸量计入。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_waste和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-eiip-2002`; `ilcd-2010`

###### 固体废物（`catalogue_reject`）

一股实际固态外送完整废目录，包含留存钢/锌、纸、墨和水。称量整股；化验组件不是额外废物交换。内部返工不是外移废物。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_waste和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-eiip-2002`; `ilcd-2010`

###### 固体废物（`plate_waste`）

一股单独移交的废涂层铝版，含实际残墨/涂层。广义工业固体身份不声明纯铝、再熔炼、危险类别或回收信用，接收方与路线须匹配。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_waste和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-eiip-2002`; `ilcd-2010`

###### 废油墨（`ink_waste`）

一股从容器/印机分出的常规胶印残墨；保留实际整股组成和接收处理。留在抹布、废液、废纸或目录内的墨不得重复计入。

- 选定流：废油墨 `468ac05a-00a0-4153-a4ba-4084ef981e4c`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_waste和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-eiip-2002`; `ilcd-2010`

###### 废液（`wash_waste`）

一股实际液态外送废橡皮布清洗混合液，含墨/溶剂/水；须测整液质量/体积、兼容密度/温度、水专属性分数及独立固体/挥发组分。非水质量不自动等于干固体；广义说明不建立危险废物默认值。

- 选定流：废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_waste和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-eiip-2002`; `ilcd-2010`

###### 废液（`fount_waste`）

一股单独移交管网处理或厂外处理的废润版液，保留接收方及实际配方/墨/水。与废清洗液分开；移交处理不是水介质直接排放。

- 选定流：废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_waste和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-eiip-2002`; `ilcd-2010`

###### 固体废物（`cloth_waste`）

一股弃置的污染固态棉布流，含留存液体/墨；须有整股质量和组成。可复用布洗涤交接仍为同件有主服务回路，保留实际运输/服务，不在每轮重计新布制造与处置。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_waste和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-eiip-2002`; `ilcd-2010`

###### 镀锌订书丝废料（`wire_waste`）

一股单独收集的裁断/错订订书丝。核实钢/锌/污染与接收方及整股质量；与废目录留存钢钉分开。晶圆制造废钢丝不能建立此身份。

- 选定流：镀锌订书丝废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_waste和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-eiip-2002`; `ilcd-2010`

###### 塑料包装废物（`film_waste`）

一股产生状态外送PE包膜边料。核实聚合物/助剂/污染与处理接收方；不是清洗后再生树脂或PET废料。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_waste和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-eiip-2002`; `ilcd-2010`

###### 包装废弃物，纸板（`carton_waste`）

一股包装阶段产生并外送的纸板运输箱废物，按实测含水率及涂层/污染计整股质量。不是目录纸边，也不自动给回收信用；不采用原生说明中的2%专家估计量。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_waste和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-eiip-2002`; `ilcd-2010`

###### 弃置完整木托盘（`pallet_waste`）

一股真实弃置托盘流，含紧固件/涂层，并在正确记录的含水率下计整股质量。退还所有人的托盘不是废物；原生生产木残余或压块燃料流不能建立此身份。

- 选定流：弃置完整木托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_waste和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-eiip-2002`; `ilcd-2010`

###### 已收集切纸粉尘（`paper_dust`）

一股移交处理的已收集切纸粉尘，包含实际墨、水和可能的粉剂污染。不是空气排放，也不假定为干燥纯纤维素。

- 选定流：已收集切纸粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_waste和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-eiip-2002`; `ilcd-2010`

###### 固体废物（`powder_waste`）

一股单独收集的固态淀粉喷粉残余。记录实际水/墨和接收方；排除目录留粉、其他箱中粉尘及已测空气颗粒。来源能力不证明正数量。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_waste和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-eiip-2002`; `ilcd-2010`

##### 基本流

###### 异丙醇（`ipa_air`）

CAS67-63-0；仅在实际组分调查、匹配通风/出口监测和治理后记录室外物种排放。 原生子介质为空气排放/未特指；已知位置细节时须另核更具体介质。不得采用室内暴露、TVOC以碳计/物种质量等同或重复出口汇总；颗粒区间互斥，已收尘另计，缺测不是零。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_air和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-method18`; `epa-method25a`; `heidelberg-powder`

###### 庚烷（`heptane_air`）

CAS142-82-5；仅经核实清洗/配方及有效物种分析后记录实际正庚烷；不能代表全部石油烃。 原生子介质为空气排放/未特指；已知位置细节时须另核更具体介质。不得采用室内暴露、TVOC以碳计/物种质量等同或重复出口汇总；颗粒区间互斥，已收尘另计，缺测不是零。

- 选定流：庚烷 `fe0acd60-3ddc-11dd-a663-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_air和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-method18`; `epa-method25a`; `heidelberg-powder`

###### 颗粒物 (PM2.5)（`pm25`）

治理后实际室外粒径至2.5微米的颗粒质量。 原生子介质为空气排放/未特指；已知位置细节时须另核更具体介质。不得采用室内暴露、TVOC以碳计/物种质量等同或重复出口汇总；颗粒区间互斥，已收尘另计，缺测不是零。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_air和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-method18`; `epa-method25a`; `heidelberg-powder`

###### 颗粒物 (PM2.5 - PM10)（`pmcoarse`）

治理后实际室外粒径大于2.5至10微米的颗粒质量。 原生子介质为空气排放/未特指；已知位置细节时须另核更具体介质。不得采用室内暴露、TVOC以碳计/物种质量等同或重复出口汇总；颗粒区间互斥，已收尘另计，缺测不是零。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_air和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-method18`; `epa-method25a`; `heidelberg-powder`

###### 颗粒物（> PM10）（`pmover10`）

治理后实际室外粒径大于10微米的颗粒质量。 原生子介质为空气排放/未特指；已知位置细节时须另核更具体介质。不得采用室内暴露、TVOC以碳计/物种质量等同或重复出口汇总；颗粒区间互斥，已收尘另计，缺测不是零。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_air和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-method18`; `epa-method25a`; `heidelberg-powder`

###### 水蒸气（`water_vapour`）

CAS7732-18-5；以匹配进/出风湿度、气流及冷凝计量得到实际室外净水蒸气，不是全部购入/配方载水或未识别平衡余量。 原生子介质为空气排放/未特指；已知位置细节时须另核更具体介质。不得采用室内暴露、TVOC以碳计/物种质量等同或重复出口汇总；颗粒区间互斥，已收尘另计，缺测不是零。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_water和cp_cohorts按每 1 kg 参考流记录兼容批次交换量，保留本行库存来源、未分配physicalV与独立归属burdenA，不设默认数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`epa-method18`; `epa-method25a`; `heidelberg-powder`

## 7. 分配与共产品处理

本稿为归因型制造清单。应用ILCD归因条款前须确定研究决策情境; 后果型比较须另审系统扩展/替代选择。EPA物料平衡仅支持有机物核算，不能作为LCA共享负荷层级的来源。[ilcd-2010]

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `a_two_ledgers` | 全部交换 | 逐阶段/状态保留未分配physicalV及所有产出/库存腿。burdenA只归属环境清单负荷，不将实际目录/废物/产出质量机械乘负荷份额来强制闭合。每个外来整品/组件供方只有一个负荷责任人。 | `ilcd-2010` |
| `a_subdivide` | 共享印刷/装订/辅助服务 | 先用实际作业/颜色计量、领料及设备记录细分或虚拟细分，区分开机、运行、清洗、待机和失败生产。可唯一归属的交换先直归，只分配剩余共享负荷。 | `ilcd-2010` |
| `a_causal` | 剩余共享交换 | 逐交换证明决定性物理因果: 实测面积/印次、含强度的加工时间、清洗需求或兼容仓储的占用体积/面积×时间。记录驱动量、包含旧品/服务的全部受益作业/批次、完整分母、不确定度及其他指标较弱的原因。页数、销售质量、价格或一个月分母不能代表全部交换; 分配须守恒原清单。 | `ilcd-2010` |
| `a_economic` | 无已证因果归属的余项 | 仅在记录无法细分/因果归属后，采用同状态、数量、币种和期间的过程门共功能价值证据，校正后续售价中可证额外运输/调质。缺失/零/负值/收费或无依据分母为具体待审项，不能任定份额、用绝对值捷径或clip零; 无实际可辩护基准不得强算。 | `ilcd-2010` |
| `a_recovery` | 纸/金属/包装回收 | 保留接收方、状态、价值及明确负荷责任。废料销售或返还所有人不自动为负投入/避免原生料信用。ILCD回收规则须识别真实共同过程、固有性质变化及实际正/负价值处理边界。缺证则具体待审，不造回收率、循环次数、负费clip或通用截断。经审独立情景也不能重复主账处理/供方清单。 | `ilcd-2010` |
| `a_cohorts` | 退回/返工/包装复用 | 物品或组件原交换向量随所有人/批次结转，不在ER再购制造或把旧FG分给当前新Q。只将实际新增处理/洗涤/仓储/运输/废物服务按原Qc或另审服务基准添加。Q=0、失败/待机负荷保留明确归属或待审，不能删除。 | `ilcd-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_release` | `catalogue_manufacture` | 完整首次放行目录 | 后续前景计量 | 卖方/设计/版次; 实际内容/委托; 受众/分发目的; 批次/物品/批号; 新首次放行; 册数/页数; 校准净质量; 皮重/含水率; 废品质量; 期初/新旧期末FG; 页序/色彩/钢钉验收 | 检查实际内容与作业委托; 裁后以校准秤称验收完整目录，排除运输包装。用同设计实测样本质量及抽样不确定度核对数量; 逐件/批去重首次放行，保留新验收期末存量。 汇总条件: 仅兼容唯一批次首次放行Qc. | kg; 册 | 每批/放行及期末 | 声明代表性作业/周期期间 | 实际印厂与声明设计 | 每 1 kg 参考流 | 内容/作业规格; 秤校准; 验收/库存记录; 抽样设计 |
| `cp_materials` | `catalogue_manufacture` | 分开的内页/封面/版/布/粉 | 后续前景计量 | 行/阶段/批次; 供方/等级; 适用P/N_ext/ER; 收货/领用/退回; raw/WIP期初末; 实际净质量; 水分; 涂层; 粉/布状态; 线轴/卷芯 | 称交付、领用及剩余并核对阶段账; 同态转移与实际印刷/形成转换分开。记录版涂层去向及开机纸损/裁边，不用默认纸张数质量系数。 汇总条件: 保留原始physicalV、结转和原Qc. | kg | 每交付/作业及期末 | 声明作业/周期期间 | 场址及实际供方 | 每 1 kg 参考流 | 称重单; 供方规格; 校准; 两端匹配阶段记录 |
| `cp_formulations` | `catalogue_manufacture` | 各整墨/润版/清洗及另加IPA | 后续前景计量 | SKU/颜色/批次; 供货质量/体积; 含量/纯度/密度/温度; 全部组分/CAS; 载水; 化石/生物来源; 调配稀释; 留存/废物/空气/库存份额; 供方责任 | 称每份完整供货配方与另加物质; 取得超出公开SDS的完整供方组成。另计稀释水; 化验仅嵌套，不作为额外供方交换。评估实际有机物种及浓度/状态兼容。 汇总条件: 兼容批次数量及唯一供方责任. | kg; m3 | 每SKU/作业/调配及期末 | 报告期内实际材料批次 | 场址及实际配方供方 | 每 1 kg 参考流 | 完整供方组成/化验; 密度/温度; 校准质量; 组分平衡 |
| `cp_stitch` | `catalogue_manufacture` | 镀层圆订书丝 | 后续前景计量 | 丝等级/路线; 直径/圆度/涂层; 线轴净/皮重; 机头设置; 实际钉数/长度; 留存/裁断/错订质量; 废目录身份 | 称整份镀层丝领退与独立废料; 核实圆丝供货路线、实测留钉及装订验收。数量仅以实测兼容几何/密度或钢钉样本称重及不确定度换质量，不用通用2钉剂量。 汇总条件: 留丝与废物互斥. | kg; 个 | 每作业/线轴/调机 | 声明作业/周期期间 | 实际装订线及丝供方 | 每 1 kg 参考流 | 丝材证明; 称重记录; 装订/拉力/翻阅验收; 核对 |
| `cp_energy` | `catalogue_manufacture` | 电力及现场公用工程调查 | 后续前景计量 | 电表/电压; 千瓦时; 阶段/作业; 电网/年份/供方; 启停/待机/清理; 强度/时长; 全部服务作业; 热/燃料/制冷剂调查; 任何供回质量/焓/温压 | 用校准分表及账单，含空压/冷却/收尘; 未分表负荷以有证因果核对。核实有界全电配置; 任何热/燃料发生均保留为超范围扩展债务，并独立记录供回及损失/储能项。 汇总条件: 仅兼容批次负荷，保留待机/失败/旧批服务. | kWh; MJ | 每阶段/作业及账期 | 含Q=0时段的代表周期 | 实际场址公用服务 | 每 1 kg 参考流 | 电表/账单; 负荷测试; 调查/不存在证据; 完整驱动分母 |
| `cp_water` | `catalogue_manufacture` | 市政/配方水及水蒸气 | 后续前景计量 | 分表; 水源/处理; 体积/质量/密度/温度; 载水; 来纸水分; 产品/废物存量; 进出风湿度/气流/温压; 冷凝 | 另加水计量，化验实际配方与纸水分，核对各实物水状态。积分实测匹配进出水蒸气、冷凝及存量变动，不能将未测余量当已识别水蒸气。 汇总条件: 逐兼容批次水量. | kg; m3 | 加/排液/批次及代表通风周期 | 实际作业/周期期间 | 场址回路及室外边界 | 每 1 kg 参考流 | 校准; 水专属检测; 湿度/气流闭合; 不确定度 |
| `cp_packaging` | `catalogue_manufacture` | 每纸箱/膜/托盘组件 | 后续组件/责任实物账 | 组件/物品/所有人/批次ID; 原Qc及继承向量; 含捆绑价首次采购P; 首次非购N_ext; ER先前外移链接; raw/WIP/附新FG/附旧FG/reusable期初末; 发运毛量; 退还所有人; 废物; 组件质量/等级; 每运输腿; 整品/组件供方 | 核合同/随货及同件历史，称量去皮并将每ER匹配真实先前外移。整包购买中的P无需独立发票; 首次借/租/委托/随货与同件退回、内部同态再领分开。位置只记一次，测实际损失/修理/运输，不造复用寿命。 汇总条件: 实际获取制造一次并把向量结转原受益批次，另计实际新增服务. | kg; 个; 距离 | 每获取/移动/发运/退回及期末 | 组件历史及声明服务期 | 场址/所有人/承运及实际接收方 | 每 1 kg 参考流 | 采购/捆绑合同; 随货/权属; 同件移动; 毛运输及库存 |
| `cp_waste` | `catalogue_manufacture` | 各独立整股外移废物 | 后续前景计量 | 物流/箱/批次; 整股质量/皮重/状态; 水专属份额; 独立固体/挥发组分; 实际组件; 体积/密度/温度; 期初末; 接收/路线/价值/收费; 运输 | 每股实际独立物流称整份; 保留湿干定义、实际污染及接收条件。处理、洗涤/返还所有人及内部返工分开; 化验组件不加到整废物上，纸/钢钉不进多个外移流。 汇总条件: 兼容批次腿及实际处理责任. | kg; m3 | 每收集/移交/期末 | 含失败批的声明期间 | 场址移交及实际接收方 | 每 1 kg 参考流 | 校准称量/化验/移交记录; 接收/费用协议; 平衡 |
| `cp_air` | `catalogue_manufacture` | 每实际室外有机物种/粒径区间 | 后续前景监测 | 来源/批次/时段; 组分/CAS调查; 进出气流/浓度/温压/湿度; 仪器响应/回收; 空白/检出限; 治理; 粒径切割/可过滤/可凝结定义; 碳源 | 由合格人员对实际挥发性/基质验证物种分析，覆盖开机、稳定印刷、清洗与储存; 积分匹配通风。GC方法18受聚合/低蒸气压限制; FIA以碳/校准气当量不等于物种质量。粒径互斥，不能重复已收尘。 汇总条件: 兼容批次物种数量，保留检出限/未知. | kg; mg/m3; m3/时间 | 代表周期及材料/治理变更 | 实际作业/周期期间 | 现场治理后室外边界 | 每 1 kg 参考流 | 校准/回收; 空白; 匹配气流/条件; 治理及样本覆盖 |
| `cp_cohorts` | `catalogue_manufacture` | physicalV与继承burdenA | 后续可追溯核算 | 全部行/阶段/状态ID; 首次放行Qc; raw/WIP/新旧FG/reusable库存; P/N_ext/ER; 内链; 转化; 外移毛量/废物; 每交换向量/所有人/供方; 直归/共享/待机/失败/服务负荷; 因果/经济证据 | 分配前核对实物阶段和互斥库存。期初/外来物品携带向量而不再加原制造; 去重获取与首次放行，只分配有证共享余项。未匹配退回、价格/费值歧义、缺向量及Q=0负荷明确待审。 汇总条件: 新兼容量用Qc，继承/后续量用原Qc或明确经审服务基准. | 行原生kg或MJ; 批次kg | 每移动/作业及期末 | 原批历史及当前服务 | 完整声明场址/供方边界 | 每 1 kg 参考流 | 原向量及验收ID; 供方责任; 阶段/库存闭合; 分配证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cohort_normalize` | 所有清单行 | 对唯一首次放行且正Qc批次，以该批兼容已归属行量除Qc，报告每1千克参考流。分配/库存归属前保留physicalV; 不对无关当月采购或旧批清单/服务执行此除法。Qc=0则保留原始负荷和归属缺口，不除。 | 行原生量; cp_cohorts; cp_release; 原Qc | 兼容归一行及明确未决负荷 | `ilcd-2010` |
| `release_count_mass` | cp_release | 唯一首次验收千克 = 同设计首次放行册数 × 校准实测完整单册净质量均值，并核对整批称量; 新验收期末FG只计一次。核对FG0 + 首次放行 + 真实ER + 匹配internal FG_in = FG1 + 发运毛量 + 退还所有人 + 转返工/废物 + 匹配internal FG_out; 已验收修复物通过匹配退回入账，不再放行造Q。 | cp_release; 校准样本质量; cp_cohorts | Qc及FG移动核对 | `ilcd-2010` |
| `stage_balance` | cp_materials; cp_stitch; cp_cohorts | 逐材料/状态、逐阶段执行b_stage，含真实转换的形成/消耗及全部损失/交接。匹配internal_out/in合并相消; 同态raw/WIP/FG/reusable转库不形成外部收货或转化产出。 | S0; S1; 实际收货/外移/损失; internal_in; internal_out; 实测转化映射 | 未分配阶段/状态physicalV及余量不确定度 | `epa-eiip-2002` |
| `component_assay` | cp_formulations; cp_waste | 化验组分质量 = 实测整份混合物质量 × 实测/核实质量份额。体积换算用记录温度下实际兼容密度。整液×(1−水专属份额)为非水量，不自动为干固体。化验嵌套，供方负荷一次。 | 整份质量; 组分/水检测; 密度/温度; cp_formulations; cp_waste | 支持一份整交换的组分平衡 | `epa-ctg-2006` |
| `electricity_conversion` | electricity | MJ = 实测千瓦时 ×3.6，再按兼容批次归属/归一，不设热效率因子。 | cp_energy; cp_cohorts | 每1千克参考流电力MJ | `ilcd-2010` |
| `air_species` | cp_air | 物种千克 = 匹配出口流量×物种浓度的积分减去匹配进风物种质量，在一致温压/湿度基准换为千克。只加互斥出口/时段; 保留符号和不确定度待审，不clip负值。互斥颗粒区间不得再加累计PM10/TSP。 | cp_air; 兼容响应/回收及气流证据 | 实际室外物种/颗粒实物质量 | `epa-method18`; `epa-method25a` |
| `burden_partition` | cp_cohorts | 先直归独占清单，只对共享余负荷用有证逐交换因果份额，或a_economic批准后的门价份额。全部归属负荷加明确待审余项须回到原清单; 实际实物产出不机械乘份额。 | 全共享清单; 全部受益批次/驱动集合; 有符号价值/费值证据; cp_cohorts | burdenA向量及守恒/待审余项检查 | `ilcd-2010` |
| `packaging_closure` | cp_packaging | 逐互斥组件位置核对S0 + P + N_ext + 有证ER + 匹配internal_in = S1 + 发运毛量 + 退还所有人 + 废物 + 匹配internal_out，真实维修/组件改变另明确。P含捆绑首次采购，N_ext为首次非购外来，ER须同件先前外移。保留原向量及全部运输，供方收费/制造只归属一次。 | cp_packaging; cp_cohorts; 组件所有人/历史; 全部毛量腿 | 组件实物闭合及获取/服务责任 | `ilcd-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 目录及每原子行 | 核实实际商业内容/分发目的、完整结构、正式双语流名、原生类型/属性/单位/状态/路线和供方兼容。UUID发现不等于现场确认或默认供方。 | 内容/作业委托; 原生身份与支持链; 供方/接收范围 |
| `dq_basis` | 全行/批次 | 保留首次放行Qc、新期末FG一次、旧批原参考及逐交换继承向量; 不用销售月分母，不在同件退回时重复制造。 | 验收ID; 原向量; 互斥库存及毛量腿 |
| `dq_composition` | 配方与产品 | 取得完整配方、水/碳来源、留存组分及真实转化; 公开SDS可省略组分。不能默认配方因子或外厂剂量。 | 供方组成/检测; 阶段/组分平衡及不确定度 |
| `dq_coverage` | 场址及期间 | 覆盖开机、失败、Q=0/待机、清理、库存/退回及每种实际额外材料/物种; 区分不存在证据、缺测和超范围扩展。 | 表计/公用工程/物料调查; 代表性监测; 明确未决清单 |
| `dq_allocation` | burdenA及供方链接 | 证明细分及各因果/价值分母，保留负费不确定度及总清单; 整品/组件、获取、处理、运输不能分别重复收同负荷。 | ILCD适用情境; 驱动/价格记录; 供方责任及核对 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `v_scope` | 参考 | 核实实际商业商品推广/订购内容、分发目的及全部结构限定。只看代码标题不足; 不宣称全32620覆盖、活动效果服务等价、出版服务或普通名录/书籍替代。 | `unsd-cpc3`; `demago-catalogues` |
| `v_release` | Qc及库存 | 核对新唯一首次质量放行、完整净质量及唯一最终产出。新期末FG一次; 期初FG/旧批/ER/返工/后续服务不造Q。每继承行用原Qc或经审服务方法; 保留Q=0/失败/待机/清理负荷及明确未决归属。 | `ilcd-2010` |
| `v_physical` | 阶段及组件 | 以internal_in/out、真实形成/消耗和互斥库存核对逐状态physicalV。同态转移不是获取或形成。核对纸/墨/水/丝/锌/粉在验收/废品内留存，整品加化验组分不得重复质量。 | `epa-eiip-2002`; `bekaert-stitching-wire` |
| `v_packaging` | 每组件 | 核实捆绑首次P、首次真实非购N_ext及同件前外移ER证据、责任和继承向量。发运毛量/退还所有人/废物及每运输腿独立; 核对整容器/组件与获取/复用供方负荷一次，零价格不豁免负荷。 | `ilcd-2010` |
| `v_allocation` | burdenA | 独立评估细分、各因果驱动和完整受益分母、剩余门价/费值证据与回收边界。缺失/负值待审，不clip零。归属加待审量回到总量，不缩放实际实物产出。 | `ilcd-2010` |
| `v_utilities` | 实际场址 | 核实声明全电范围及实际电压/电网/供方基准，实际热/燃料/制冷剂作为扩展缺口保留。热方案须独立供回质量与焓、泄漏/排污/储能核对，不默认效率。 | `epa-ctg-2006`; `ilcd-2010` |
| `v_air_water` | 排放及处理 | 确认实际物种/CAS/介质、进出基准与方法回收，颗粒区间互斥且不重复已收尘。TVOC碳当量不是物种质量; 未测水/有机物余量保留不确定度。处理交接不是直接排放。 | `epa-method18`; `epa-method25a`; `epa-ctg-2006` |
| `v_completeness` | 数据集交付 | 报告接受输入、已做/跳过检查、发现与完整性。缺实际场址/供方/数量证据或未经审扩展不能声称完成定量数据集。连贯方法草稿和身份检索不建立科学/翻译批准或映射接受。 | `ilcd-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 实际前景/供方证据及独立审查后的路线特定实物商业产品目录制造投入。 |
| allowed_use | 声明未涂布、常规CMYK湿润单张纸、圆截面镀锌丝骑马钉目录的厂门状态，具有实际计量与批次/组件责任。 |
| excluded_use | 全叶/行业均值; 书籍/名录/编辑性报刊; 其他印刷/装订/整饰; 在线/出版/配送或等效广告效果服务; 从设备能力/UUID推得即用清单。 |
| required_metadata | 全部参考限定; 实际场址/期间/路线/供方; 原批基准及交换向量; 库存和组件获取/退回历史; physicalV/burdenA; 运输/处理责任; 分配证据。 |
| required_quality_disclosure | 计量/配方/身份/供方缺口; 场址范围限制; 平衡余量; 未归属Q=0/旧批负荷; 不确定度; 已做/跳过检查/审查及不完整性。 |
| update_trigger | 设计/内容/分发交付门、纸/墨/润版/清洗/丝、印刷/定着/整饰、印版、公用工程/治理/接收/供方、批次/复用方法或证据改变。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3` | `official_guidance` | 联合国统计司CPC3.0代码32620官方详情，https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/32620 ; CPC3.0解释注释2025年6月30日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 层级326/3262/32620与PDF/印刷148–152页; 内容类别、名录/报刊区别。32620无附加频率/构造注，不推导HS或制造配方。 |
| `epa-eiip-2002` | `official_guidance` | EPA EIIP第二卷第15章，2002年5月，https://www.epa.gov/sites/default/files/2015-08/documents/ii15_may2002.pdf | PDF14–15页2.1.1节/图15.2-1的单张纸工艺; PDF27–31页物料核算和场址数据限制。不采用历史VOC/滞留因子，不是LCA分配来源。 |
| `epa-ctg-2006` | `official_guidance` | EPA-453/R-06-002，2006年9月，https://www3.epa.gov/airquality/ctg_act/200609_voc_epa453_r-06-002_litho_letterpress_printing.pdf | PDF12–14/印刷6–8页IV.A节; 常规单张纸定着、润版及清洗分开。历史溶剂份额/滞留/监管阈值不作LCI默认。 |
| `ilcd-2010` | `official_guidance` | JRC ILCD手册LCA详细通用指南，2010年3月初版，https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | PDF275–292/印刷255–272页7.9.2–7.9.3节，含情境、细分/虚拟细分、决定物理因果、串并服务、剩余过程门经济值、回收正/负值和100%规则。批次/包装公式为本PCR声明核算实现，不是引用ILCD工厂公式; 供热守则为量纲守恒，不是ILCD蒸汽因子。 |
| `demago-catalogues` | `literature` | Demago Print目录/骑马钉产品官方说明，https://www.demagoprint.com/publications-catalogues-magazines-notebooks-stapled-binding-c-562_1802.html | 装订原理、材料及备选段; 实际折叠/配页/金属丝穿订目录与未涂布选项。不证明本选定湿润胶印/场址/配方，不默认宣传2钉、页数、数量或寿命。 |
| `mm-primera` | `literature` | 马天尼PrimeraPRO，https://mullermartini.com/en/product/primera-pro/ | 骑马钉设备、配帖/穿订/出书及自动三面刀段落。不移植速度、幅面、钉数或现场配置。 |
| `bekaert-stitching-wire` | `literature` | 贝卡尔特订书丝官方产品页，https://www.bekaert.com/en/products/consumer-goods/domestic/stitching-wire | 镀层圆/扁丝、锌选项、碳钢/丝特征与成钉; 本稿仅选圆镀锌钢丝。实际等级/路线/涂层/数量仍采集，不采用名义PDF内容或默认直径/剂量。 |
| `breese-sheetfed` | `literature` | Breese Publishing印刷与印前服务，https://www.breesepub.com/services/digital-and-prepress-printing-services | 单张纸目录生产及另列骑马钉/折页能力; 同时有轮转/数码/涂层备选，能力不证明组合具体作业、未涂布配方或全电场址。 |
| `kodak-process-free` | `literature` | 柯达SONORA免处理版可持续性数据表，https://www.kodak.com/content/pdfs/print/KODAK-SONORA-Process-Free-Plates-Sustainability-datasheet-EN.pdf | PDF1页只说明该版选项无独立化学处理/冲洗。仍纳入版/涂层生产、在机涂层去向及开机，不声明环境负荷为零。 |
| `huber-sheetfed-ink` | `literature` | hubergroup RAPIDA ECO官方产品页，https://www.hubergroup.com/us/en/product-finder/product/rapida-eco | 吸收性基材的常规快定着单张纸四色及无醇备选; 无矿物油不等于完整配方、零排放或现场供方证明。 |
| `heidelberg-powder` | `literature` | 海德堡News270(2010)，https://www.heidelberg.com/global/media/en/global_media/company___publications/heidelberg_news/editorial/pdf_10/hn_270.pdf | PDF/印刷53页防蹭脏粉文章; 淀粉与碳酸钙/糖、涂层粉区别，不默认剂量、粒径范围、湿度或排放份额。 |
| `epa-method18` | `official_guidance` | EPA方法18，2025年4月1日网页副本，https://www.epa.gov/system/files/documents/2025-04/m-18-04012025_0.pdf | PDF1–2页1–4节; GC物种校准、湿度/干扰及低蒸气压/聚合限制。须合格人员验证实际基质，不声明已监测现场或监管认证。 |
| `epa-method25a` | `official_guidance` | EPA方法25A，2017年8月3日网页副本，https://www.epa.gov/sites/default/files/2017-08/documents/method_25a.pdf | PDF1页1–2节区分校准气/碳当量与单物种质量，不默认响应因子。 |
| `pgm-counterexample` | `literature` | PGM广告材料与目录，https://www.pgm.lv/en/services/advertising-materials-and-catalogues/ | 能力/设备段描述热固轮转目录及整饰备选，仅作反例，不证明选定单张纸供方、配方或数量。 |
