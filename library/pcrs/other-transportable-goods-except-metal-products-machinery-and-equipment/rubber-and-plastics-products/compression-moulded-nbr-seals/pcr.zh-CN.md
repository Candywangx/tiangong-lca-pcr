---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.compression-moulded-nbr-seals
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 购入未硫化胶料压缩模塑的无嵌件丁腈橡胶密封件


## 1. 范围与适用性

适用于工厂以购入可硫化的硫黄硫化型胶料，经电热压缩模塑及手工撕边制造一种指定 SKU 的无嵌件、无增强、无涂层实心 NBR 弹性体密封件，包括 O 形圈及模压垫片。参考门为中国工厂新增质量放行密封件净质量，可拆包装独立报告。须采集实际材质牌号、几何、硫化程序及验收试验；不提供默认配方、温度、周期、收率、密度、寿命或排放因子。这是按质量的制造参考，不能证明不同密封设计功能等价。生产者白皮书支持压缩模压及手工修边；生产者工厂页确认 NBR 与密封件能力，但不证明所列每种材料工艺组合均适用。[trelleborg-custom-rubber; trelleborg-reynosa]

排除硬质胶、硬质橡胶制品、乳胶浸渍手套、轮胎制造再生、NBR 原生聚合、未硫化胶料制造、挤出胶管型材、输送带、涂胶织物、购入已硫化片材模切、注射转移模塑、金属塑料织物嵌件、粘接密封件、硅胶/HNBR/EPDM 替代物、溶剂涂覆以及低温研磨去边。这些路线须独立审查适用性和实际交换。不向本橡胶加工路线移植化工 BREF 或轮胎试验配方。[epa-rubber-2008]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.compression-moulded-nbr-seals |
| classification_refs | CPC 3.0:36270; proposed narrower; acceptance remains external |
| covered_products | 指定 SKU 的无嵌件实心硫黄硫化 NBR O 形圈或模压垫片 |
| excluded_products | 硬质胶及第 1 节排除的路线 |
| representative_product | 一种指定手工修边压缩模塑 NBR O 形圈 |
| production_route | 购入未硫化胶料接收 → 预成型 → 电热压缩硫化 → 冷却 → 手工撕边 → 检验 → 质量放行及实际包装 |
| market_state | 中国工厂质量放行的固体弹性体密封成品，供装配安装而非已安装服务 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为指定密封工况提供声明几何与材质的密封件 |
| How much | 1 kg 新增质量放行密封件净质量 |
| How well | 实际 SKU 图纸、尺寸公差、硫化状态、硬度、缺陷及应用特定验收试验；无通用压力额定值 |
| How long or cycle | 完整匹配报告期间；寿命与更换频率须有应用证据 |
| reference_flow_link | product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 密封件 `a9943e4e-1a21-412c-859e-df09a2b5ee6f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | SKU图纸; NBR牌号配方及硫黄硫化; 无嵌件增强涂层状态; 几何公差; 硫化修边检验; 实际供方及中国工厂; 低压电热路线; 新增净放行Q; 期间及在制品成品继承负荷; 包装发运门 |


## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 密封件净质量排除可拆包装，使用校准称量扣皮核对指定验收SKU。件数体积记录须实测SKU特定净重密度，不能假定单件质量；全部清单量按每1 kg参考流。 |
| state_compatibility | water; electricity; compound | 对应行参考属性 | kg; MJ | 保留原件真实参考属性单位，次级属性不是通用密度能量因子。配方基准、活性含量及整份混合物供货质量须区分。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 可硫化购入 NBR 胶料在厂验收，声明配方、硫化体系、水溶剂及输入负荷身份 |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | 仅 36270 内的模压 NBR 密封件，不覆盖全叶或硬质胶 |
| recursive_input_rule | 购入已硫化密封件为带完整上游数据集的投入，不得改称未硫化胶料或新增制造输出；内部预成型件与在制品为链接交接，不是递归新供货。 |
| upstream_dataset_requirement | 链接组成兼容的摇篮到工厂胶料、电力、水及包装供方，并纳入实际入厂运输；未核实供方兼容时定量模型不完整，单有 UUID 身份不足。 |
| disclosure | 实际工厂、技术、期间、批群、输入状态、截断、未决身份、供方限制及分开的在制品成品包装发运账 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_line | seal_line | 纳入预备加工、电热压机及液压、全部硫化冷却排放、冷却、手工修边、检验、实际包装和质量放行。本生产门不含放行后仓储发运作业，但保留其独立实物与结转负荷账。在一个综合过程中保留分工序计量和实物链接，不重复中间参考产品。定量使用前，实际维护材料、清洗剂、脱模剂、外购压缩空气、制冷剂、运输、废物及其他排放物种均须独立原子行计量；已列卡片不是通用配方。 | trelleborg-custom-rubber; epa-rubber-2008 |
| boundary_stock | seal_line | Q 为新增质量放行净产量，绝不能再加期末成品。保留期初末在制品数量、组成及全部继承负荷；扣除期末在制品负荷并结转，纳入已消耗期初在制品负荷及本批真实废品返工。已放行成品即使入库存放也已跨本参考门，须在成品账中完整结转负荷而不从 Q 扣除；发运期初成品不是新增 Q。实际净毛发运及附随在制品成品发运的可拆包装分别保留实物账，内部链接两端同量。 | ilcd-handbook-2010 |
| boundary_air | 全部空气行 | 逐种映射实测物种及受纳介质。两张有机物卡仅为条件性示例，不是完整排放清单。筛查实际供方配方、硫化体系、残余单体、助剂及治理设施，记录每种检出或有依据排放。VOC/TOC 总量用于核对，不得与组分作为另一份基本质量相加。确认实际颗粒物是否存在，存在时增列实测互斥粒径区间，捕集粉尘另作废物，不重复嵌套总量。不假设厂内燃烧；实际燃烧须独立燃料锅炉边界和原始计量。 | epa-rubber-2008; epa-method18-2017 |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| seal_line | 一体化压缩模塑修边放行 | required | 声明路线内，保留工序账 | foreground | 1 kg 参考流 |

### 过程：综合密封件制造（`seal_line`）

#### 输入

##### 产品流

###### 购入未硫化 NBR 密封件胶料（`compound`）

一种供货固体胶料，包含其实际填料、硫化体系和加工助剂。采集供应方配方牌号、NBR 比例、添加物身份、硫化体系、载水溶剂及验收记录。其既不是纯 NBR 聚合物，也不是轮胎胶料。整份供货胶料仅跨本边界一次，已含组分不得再次作为前景投入；要求组成兼容的上游胶料数据集，UUID 未解决不能删除负荷。

- 选定流：未硫化硫黄硫化型 NBR 密封件胶料
- 流属性/单位：Mass / kg
- 数量规则：按第8节将实测原始批群分子按每参考流仅报告一次，保留本行适用条件与单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`trelleborg-custom-rubber`; `epa-rubber-2008`

###### 压机与辅助设施计量电力（`electricity`）

仅用于与原件电压、供货地点及路线一致的中国用户侧低于 1 kV 电网平均交流电。纳入电热压机、液压、预备加工、抽风、冷却及归属本放行群的实际后处理检验搬运。记录设备状态、预热、待机及废品周期。采集 kWh，以物理单位恒等式 1 kWh = 3.6 MJ 换算；原件属性为 Net calorific value，不授权燃料热值换算。使用前核实实际供电和供方边界，不得将此 UUID 用于中高压或特定发电技术。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按第8节将实测原始批群分子按每参考流仅报告一次，保留本行适用条件与单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`trelleborg-custom-rubber`

###### 冷却循环补水（`water`）

仅在实际水冷系统存在时纳入。此处理后市政自来水身份包括工业供水，不是环境直接取水、去离子水或冷却服务。计量外来新补水而非内部循环量，记录实际水质与供方。实测液体体积用对应温度实测密度换算，不能把原件次级筛查系数当作通用密度；风冷线须记录其不存在。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：按第8节将实测原始批群分子按每参考流仅报告一次，保留本行适用条件与单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`trelleborg-reynosa`

###### PE 防护内衬（`film`）

仅用于实际单一 PE 薄膜，CAS 9002-88-4；核实牌号、添加物、厚度及供方背景。保留实物薄膜身份，manifest 披露原件箱包分类瑕疵。称量附随质量放行群的薄膜及实际包装损耗；胶黏剂、封口件、标签或其他聚合物须各自拆行，不因原件提及竞争材料 PET 而视其等同。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：按第8节将实测原始批群分子按每参考流仅报告一次，保留本行适用条件与单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`trelleborg-custom-rubber`

###### 瓦楞运输纸箱（`carton`）

仅在使用时纳入：一个实际完整瓦楞纸箱，排除已独立列出的内衬。采集纤维配比、涂层胶黏剂、纸板结构、皮重及供方。不得默认数据库某纸箱的固定原生回收纤维组成，也不得用通用包装集合代替此具体纸箱。

- 选定流：瓦楞纸板运输箱
- 流属性/单位：Mass / kg
- 数量规则：按第8节将实测原始批群分子按每参考流仅报告一次，保留本行适用条件与单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`trelleborg-custom-rubber`

#### 输出

##### 产品流

###### 质量放行 NBR 密封成品（`product`）

唯一参考输出。原件广义身份包含 O 形圈、垫片、密封圈，在中国工厂、供装配安装用。本稿严格限定一种无嵌件、无增强、无涂层、实心硫黄硫化 NBR 密封件 SKU，经压缩模塑、手工撕边并在工厂质量放行。其不是安装服务、硬质胶、金属垫片或已装配粘接组件。Q 只计新增质量放行密封件净质量一次，排除可拆包装与既有成品库存；成品仓库转运及发货不再产生参考输出。

- 选定流：密封件 `a9943e4e-1a21-412c-859e-df09a2b5ee6f`
- 流属性/单位：Mass / kg
- 数量规则：1 kg
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_release`
- 来源：`trelleborg-custom-rubber`; `trelleborg-reynosa`

##### 废物流

###### 弃置未硫化 NBR 胶料（`uncured_scrap`）

实际污染、过期或不能使用且交指定接收方的未硫化胶料，记录配方、水分、污染和处理验收条件。洁净预成型料在同线内回用属于内部实物流，不是废物外运、避免生产抵扣或新增购入胶料。

- 选定流：送外部处理的未硫化 NBR 密封胶料边料
- 流属性/单位：Mass / kg
- 数量规则：按第8节将实测原始批群分子按每参考流仅报告一次，保留本行适用条件与单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`trelleborg-custom-rubber`

###### 硫化飞边及不合格密封件（`cured_scrap`）

作为废物实际出厂的固体硫化 NBR 飞边和废品，保留组成、污染与接收条件。原件广义废胶包含非轮胎橡胶制品且无仅限轮胎的硬处理限定，但不证明回收技术或抵扣。与未硫化废胶分开；硫化边料不能通过简单开炼变回未硫化胶料，实际再生转化须另列计量过程并保留全部负荷。

- 选定流：废旧橡胶 `b4818cb7-cbef-403a-9fc3-a12fe8baf092`
- 流属性/单位：Mass / kg
- 数量规则：按第8节将实测原始批群分子按每参考流仅报告一次，保留本行适用条件与单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`trelleborg-custom-rubber`; `epa-rubber-2008`

###### 送处理的冷却排污水（`cooling_blowdown`）

仅指实际送污水处理运营方的排污水。计量水及溶解悬浮组分、添加物、污染、质量体积、接收方与处理路线。其属技术系统废物转移，不是淡水直接排放、锰渣洗水或洁净凝结水。实际出口若直接入环境，须用对应受纳介质的液态水及逐种实测污染物代替此转移，同一份水不得两端重复计算。

- 选定流：送外部处理的冷却循环排污水
- 流属性/单位：Mass / kg
- 数量规则：按第8节将实测原始批群分子按每参考流仅报告一次，保留本行适用条件与单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`epa-rubber-2008`

##### 基本流

###### 排向室外空气的丙酮（`acetone_air`）

条件性筛查卡，不表示每种 NBR 硫化均排放丙酮。仅在实际配方工艺筛查和物种特定测量确认 CAS 67-64-1 跨厂界排向未特指室外空气时使用。控制设施后的有组织出口和逸散排放仅计一次；不得使用室内、水、土壤、长期或修正流。原件未分化石生物来源，数量为化学物种质量而非碳当量。

- 选定流：丙酮 `08a91e70-3ddc-11dd-9520-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按第8节将实测原始批群分子按每参考流仅报告一次，保留本行适用条件与单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-rubber-2008`; `epa-method18-2017`

###### 排向室外空气的二硫化碳（`cs2_air`）

仅在实际硫黄硫化体系检出 CAS 75-15-0 或有论证充分的物种特定平衡时纳入；不规定通用因子或正排放。此物为二硫化碳，不是二氧化碳或硫化氢。核实未特指室外空气受纳介质以及适用检测器回收率，不得从已测控制后出口再次扣除捕集量。

- 选定流：二硫化碳 `08a91e70-3ddc-11dd-9245-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按第8节将实测原始批群分子按每参考流仅报告一次，保留本行适用条件与单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-rubber-2008`; `epa-method18-2017`

###### 蒸发排向室外空气的水（`water_vapour`）

仅指声明冷却调理系统实际跨厂界向未特指室外空气排出的蒸发水。用实测水平衡、库存变化及不确定性确认，不能把未解释差额都归为蒸发。不得虚构硫黄交联的化学计量生成水。原件归至水体或土壤的水蒸气记录不适用此出口。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按第8节将实测原始批群分子按每参考流仅报告一次，保留本行适用条件与单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`epa-rubber-2008`


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | seal_line | 先用分表及真实批次周期记录区分本 SKU 及直接流，包含预热待机废品抽风冷却。剩余共同负荷需要分配时，先用实测压机时间状态能耗关系检验决定性物理因果；仅质量相同不证明因果。只有因果上不可分余量才可按归因型 ILCD 层级采用有记录的市场价值分配，披露全部相关输出、价格、期间及敏感性；不得任意选择物理经济分配或使用固定份额。 | ilcd-handbook-2010 |
| allocation_physical | 全部交换 | 完整保留实物质量水碳组分账，另列归属后环境负荷账。分配不能缩放实物过程图中真实联产品、废物、水或内部交接量。可售降级品须增列真实产品行、实际门槛价格并论证分配；弃置边料不自动取得替代抵扣，线内返工保留能耗物料负荷。 | ilcd-handbook-2010 |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | seal_line | product | release_and_stock | SKU；批次；图纸；NBR 牌号；硫化体系；试验结果；时间；新增放行密封件净质量；皮重；期初末在制品成品数量；退货返工历史；毛净发运量 |质量称量人员使用校准秤，扣包装皮重，核对唯一放行决定及撤销链接。区分新增放行、复检、库间转运，同批不得重复计数；上游关联记录按批群保留继承负荷，与原始质量分开。 汇总新增验收净质量得到 Q，另存原始在制品成品发运账。报告基准为每 1 kg 参考流；采集时不做除法。 | kg | 每次放行与库存变动 | 一个完整匹配报告期间 | 工厂放行门及关联在制品成品库 | 每 1 kg 参考流 | 校准；批次放行撤销追溯；平衡闭合 |
| cp_material | seal_line | compound; uncured_scrap; cured_scrap | material_and_waste | row_id；批次；供方；完整配方与NBR比例；逐组分实测碳含量及干湿基；硫黄促进剂；填料油；水分；载体；净收退量；期初末原料在制品库存；内部预成型回用；硫化废胶；接收方 |物料管理员与化验员分别称量每种具体供货及废物，核对发票领料配方证书、回用污染状态及废物验收。记录原始工序链接并保证交接同量；内部回用不产生第二次采购。 按行批次保留原始质量及库存变化，不做除法；报告基准为每 1 kg 参考流。 | kg | 每次收发料废物变动 | 与 cp_release 同期同群 | 接收至质量放行 | 每 1 kg 参考流 | 秤校准；组成检测；收据；接收记录 |
| cp_energy | seal_line | electricity | meter_records | 表号；电压；供货地点；供方边界；起止kWh；时间；压机状态；周期数；冷热启动；待机；废品周期；辅助份额证据 |能源工程师读取校准电表分表，覆盖压机加热液压及实际辅助工序。外购与内部配电分开，保留物理读数及供方地区电压。 按工序汇总兼容原始读数并保留共用证据，不归一；报告基准为每 1 kg 参考流。 | kWh | 每班批次及读表期间 | 与 cp_release 同期同群 | 生产及可归属辅助设施 | 每 1 kg 参考流 | 电表校准；重叠检查；供方电压定义 |
| cp_water | seal_line | water; cooling_blowdown; water_vapour | water_balance | row_id；表号；温度；密度；体积质量；水质；库存；内部循环；排污；实测蒸发依据；添加物；接收方介质；采样不确定性 |水务工程师计量外来补水及实际外部出口，记录液体库存和物料含水，核实密度及组分化验。送处理与直接排放分开，未解释水平衡保留缺口。 分别保留原始水量状态，外部需求排除循环量。不做除法；报告基准为每 1 kg 参考流。 | kg; m3; kg/m3 | 每次读表及代表性水检 | 与 cp_release 同期同群 | 实际冷却与外部水出口 | 每 1 kg 参考流 | 校准；水化验；接收合同；平衡不确定性 |
| cp_pack | seal_line | film; carton | packaging_records | row_id；组件；供方；组成；皮重；净收退领用量；破损包装；附随在制品成品包装；毛发运包装；放行群链接 |包装人员称量各实际组件，核对收货库存损耗及各批群附随包装。可拆包装不计密封件净质量，但归属供货损耗负荷仍纳入。后续发运包装须明确位于本生产放行门之后，或以独立记录纳入声明扩展边界。 独立保留组件原始质量库存及毛发运核对，不归一；报告基准为每 1 kg 参考流。 | kg | 每组件到货及包装批次 | 与 cp_release 同期并链接批群 | 放行门包装及独立下游账 | 每 1 kg 参考流 | 皮重检验；采购规格；库存发运记录 |
| cp_air | seal_line | acetone_air; cs2_air; actual additional species | speciated_emission_records | 物种CAS；row_id；排口；介质；配方硫化；采样期间；浓度；物种或碳基准；排气体积流量；温压；湿干基；检出限；空白；校准；回收；治理状态；未捕集路线 |环保工程师与合格实验室调查真实配方硫化助剂，采用适用物种的采样及校准标准，分别保留控制后出口与有依据逸散。Method 18 排除聚合物、分析前聚合和极低蒸气压物种；排除物种及颗粒物须用验证过的其他方法。保留未检出与不确定性，不默认半检出限替代。 分别保留物种原始浓度、兼容排气状态体积及运行时间分层，不归一、不重复捕集逸散总量；报告基准为每 1 kg 参考流。 | kg/m3; m3; h; kg | 代表性硫化冷却待机状态及每次配方治理变化 | 与 cp_release 同期同群 | 全部实际排口及厂界逸散路径 | 每 1 kg 参考流 | 完整化验报告；标准回收；运行状态代表性；不确定性 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_q | product | Q = 新增质量放行密封件净质量汇总并关联撤销修正；Q > 0。不向 Q 加期初末成品或发运。 | cp_release | Q | trelleborg-custom-rubber |
| period_burdens | 全部行 | 归一前按匹配交换单位构建每个原始批群分子 A_i；继承负荷指各在制品批群中完整的同流清单向量，不是额外添加一个标量影响得分：期间实际可归属交换 + 已耗期初在制品继承负荷 - 期末在制品结转完整负荷。保留对应实物组分水平衡及内部交接；不扣已放行成品、不以分配份额乘实物输出。既有已放行退货成品返工负荷单独保留，复检不产生新 Q。 完整匹配期间的批群分子须保留失败或不合格批次、返工、预热、待机及零产出区间的全部可归属交换；不得通过仅选成功生产区间丢弃这些负荷。 | cp_release; cp_material; cp_energy; cp_water; cp_pack; cp_air | A_i | ilcd-handbook-2010 |
| physical_balances | 原始实物账 | 分别对生产物料、水和碳核对：期初原料在制品库存 + 实际外部输入 + 实际进入返工物 = 期末原料在制品库存 + 全部真实放行实物输出 + 实际外部废物排放输出。按兼容干湿基使用实测组分碳比例，并保留差额不确定性，不能以虚构排放强行闭合。新增放行 Q 是其中一项放行输出，已放行成品返工与原批群隔离且不算新增 Q。独立成品账：期初成品 + 新放行入库 + 实际成品退回 = 实际发运 + 期末成品 + 实际成品损失返工转出。附随包装单独追踪。这些是分配前实物账，不是按份额缩放的负荷账。 | cp_release; cp_material; cp_water; cp_pack; cp_air | 已核对原始账 | ilcd-handbook-2010 |
| energy_units | electricity | A_MJ = 3.6 × A_kWh；仅在同一电表边界对电能换算，再纳入原始批群分子。 | cp_energy | A_MJ |  |
| liquid_mass | water; cooling_blowdown | A_kg = V_m3 × rho_kg_per_m3，用于实际实测液体状态；保留温度水质及不确定性。 | cp_water | A_kg |  |
| air_species | 各实测空气物种 | 对于兼容的物种质量浓度 c 与排气体积 V，A_species = 各实际运行区间 sum(c × V) 加独立实测或论证的未捕集释放；体积流量情形积分 c × F × dt。显式换算化验单位并匹配温压湿干基；碳当量浓度须物种特定换算。不得将 VOC/TOC 总量与组分质量相加。 | cp_air | A_species | epa-method18-2017; epa-rubber-2008 |
| report_once | 全部非参考交换 | x_i = A_i / Q；A_i 为对应行单位的完整归属原始批群分子，Q 为新增质量放行密封件质量 kg。仅在单位换算、在制品负荷核对和有依据分配完成后做一次除法。参考输出为 1 kg，全部报告交换量基准为每 1 kg 参考流；原始采集协议不做除法。 Q 不大于零时保留完整原始分子、库存及运行期间记录供复核，不做除法，不报告零负荷归一化数据集，也不借用其他期间或批群的正分母。 | A_i; Q; cp_release | x_i | ilcd-handbook-2010 |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_raw | 全部交换 | 使用真实场址SKU供方测量、匹配时段及记录不确定性；缺失值不是默认值或零。声明模型完整前须采集完整配方与全部物料空气水输出。 | 链接cp_release批群的原始记录 |
| dq_native | 全部UUID行 | 流身份和兼容定量背景分开检查；保留来源版本、完整原件限制、介质属性单位链、供方地区电压组成及明确未决问题。 | 原件直读及供方证据 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference and 全部行 | 核验指定 NBR 硫黄硫化、无嵌件几何、压缩电热路线及手工修边。定量使用前逐项核实真实交换的原件名称CAS状态路线介质属性单位及兼容供方；辅助 UUID 缺口明确保留。拒绝轮胎硬质胶粘接异聚合物及错误电压替代记录。 | trelleborg-custom-rubber; trelleborg-reynosa |
| validate_balance | seal_line | Q 须对应唯一新增放行及净质量；分别审计原料组分、水、在制品、成品、包装、发运账及不确定性。内部链接抵消一次，完整保留实物联产品废物输出和独立负荷分配。未闭合平衡或真实物种供方缺失使定量数据包不完整，不能记零。 | ilcd-handbook-2010 |
| validate_measurement | 全部清单 | 双语均要求原始记录校准、组成供方兼容、工序覆盖、正确单位换算及唯一末端归一。条件项不存在须有路线测量证据；未检出须有检出限和不确定性。不得从本已编写方法推定生命周期批准、功能等价或现场清单已完成。 | epa-method18-2017; ilcd-handbook-2010 |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_process_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 披露供方与测量完整性的指定路线SKU制造负荷 |
| excluded_use | 整个36270覆盖、硬质胶、其他硫化聚合物成型路线及寿命功能等价主张 |
| required_metadata | 参考限定信息；工厂期间；放行门；库存批群链接；供方边界；全部实际流；有依据分配；单位换算 |
| required_quality_disclosure | 已编写方法须独立科学审核，前景测量和辅助身份供方可能仍缺失；须披露缺口，不能将不完整定量数据集呈为已验证。 |
| update_trigger | NBR牌号配方硫化、成型修边、供电供方、放行门、实测物种、分配或原始方法证据变化 |


## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| trelleborg-custom-rubber | handbook | Trelleborg Sealing Solutions, Optimizing the Production of Custom Rubber Components, undated publisher whitepaper, pp.5 and 9. https://www.trelleborg.com/seals/-/media/tss-media-repository/tss_website/services-and-tools/technical-library/whitepapers/mnr_customrubberpart_whitepaper.pdf | 压缩预成型、热压与手工撕边，并区分其他路线；无配方数量或参数默认值。 |
| trelleborg-reynosa | handbook | Trelleborg Sealing Solutions, Reynosa Manufacturing Capabilities, undated official page snapshot 2026-10-16, Strengths/Products/Materials. https://www.trelleborg.com/de-de/seals/about-us/manufacturing-capabilities/reynosa | 生产者 NBR 及密封件能力；单厂资料，不概化配方数量。 |
| epa-rubber-2008 | official_guidance | US EPA, DRAFT Final AP-42 Section 4.12 Manufacture of Rubber Products, November 2008, pp.4.12-2, 4.12-9, 4.12-16–17. https://www.epa.gov/sites/default/files/2020-10/documents/d04s12.pdf | 历史过程和测量限制，仅证明存在含硫 NBR 案例；不采用配方数值参数排放因子通用未检出规则或轮胎喷剂。 |
| epa-method18-2017 | official_guidance | US EPA Method 18, Measurement of Gaseous Organic Compound Emissions by Gas Chromatography, Internet text 8/2/2017, sections1–2 and full method. https://www.epa.gov/sites/default/files/2017-08/documents/method_18.pdf | 物种识别校准及分析排除条件；历史网络版本不证明当前法律合规，也不证明排放存在或因子。 |
| ilcd-handbook-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA – Detailed guidance, First edition March 2010, sections7.9.2–7.9.3, PDF pp.275–277 and 283. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因型细分及物理因果优先分配层级、透明清单记账；批群库存记账是本 PCR 操作规则而非行业默认值。 |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version3.0 Structure, 30 June2025, code36270. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 仅提供宽分类背景，不产生 PCR 身份或已接受覆盖。 |
