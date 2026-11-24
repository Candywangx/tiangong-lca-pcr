---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.used-pneumatic-tyres-of-rubber
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 可翻新商用卡车旧胎体的首次现场购入验收

## 1. 范围与适用性

本归因方法涵盖卖方现场对已实际使用、完整且无轮辋的商用卡车橡胶充气旧胎体（本供料周期尚未翻新，须记录既往翻新历史）进行干式检查、称量与分级，以首次有凭据的验收、付款及作为可翻新胎体的所有权交接为终点。纳入实际源头搬运、检查人员出行、检查设备及未成功检查的工作。产品是尚未翻新的旧胎体，不是新胎或翻新成品。这是准备与资格确认供料活动，不是制造新胎体。转售、内部调拨、复检或后续翻新厂验收不产生新的生产量。资料支持限定技术综合，不代表实测工厂或批次。


实物路线限定为无包装、散装胎体的干式检查，不含托盘或包装池、清洗、主动切割、打磨、修补、贴胎面或硫化。使用前须以实际记录核实这些活动确实不存在；若实际使用包装、化学品或出现其他交换，须逐项增设具体卡片并审查范围，不得默认其为零。排除可直接行驶的二手胎零售、乘用车胎、航空胎及工程胎、新胎（36111–36113）、翻新成品（36120）、独立胎面或翻胎条（36115）、轮辋/内胎/垫带，以及确实无法再用的轮胎与材料回收废料（39250 语境）。整胎形态本身不能证明可翻新性或 39260 适用性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.used-pneumatic-tyres-of-rubber |
| classification_refs | CPC 3.0 39260; narrower |
| covered_products | 逐件验收用于翻新的已使用商用卡车橡胶充气整胎体 |
| excluded_products | 新胎及翻新成品；确实无法再用的废料；可行驶二手胎零售；分离橡胶或胎面 |
| representative_product | 一组尺寸与等级可追溯、未装轮辋且尚未翻新的卡车旧胎体 |
| production_route | 原持有人出示 → 保管交接与配对称量 → 逐件干式检查分级 → 首次现场购入验收/付款/所有权交接 |
| market_state | 卖方交接门的可翻新胎体，尚未运至翻新厂或加工；披露实际法律与经济状态 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应用于后续翻新的合格卡车旧胎体 |
| How much | 首次验收的 1 kg 净胎体质量 |
| How well | 逐件检查胎面、胎侧、胎圈及内部状态，符合有记录的采购方可翻新标准；不设通用数值阈值，不保证后续翻新厂必然接收 |
| How long or cycle | 一次唯一的首次商业验收；不声明行驶里程或第二次寿命 |
| reference_flow_link | released_whole_tyres |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 可翻新商用卡车橡胶充气旧胎体 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际使用史、既往翻新历史与持有人；商用卡车类别、尺寸、结构、状态及检查标准/结果；完整、无轮辋/独立内胎/垫带且未翻新的状态；净质量及排除游离水/土/包装；法律经济状态与继承负担；来源及检查方；验收/付款/所有权/保管交接时间；首次放行批次 Q；拒收及未购买批次；在制品/成品存量与退回链接；地域时期；实际设备/电力供方；外包检查/出行覆盖；散装无包装路线证据；分配键 |


全部限定信息须在数据集元数据或等效字段中声明。唯一参考产品的 UUID 尚未解决；正式数据集使用前须验证相容的原生 Product。Mass/kg 支持不代表胎体身份、等级、密度或默认单胎质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_reference | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的配对毛重/皮重及单独实测的游离水、土和外部物品。Q 为唯一首次验收的净胎体 kg；件数换算须有实测批次质量，不得采用通用单胎重量。 |
| electric_conversion | site_electricity | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | MJ | 电表 kWh × 3.6 = MJ。Energy 指向能量单位组 93a60a57-a3c8-11da-a746-0800200c9a66（MJ=1；kWh=3.6）。这仅支持计量；实际供方原生属性及系数须独立核实，共用单位组不能推出其属性为净热值。 |
| raw_conversion | all inventory rows | 行分子 | original unit | 保留原始单位；各分子先换算后归属，仅除以 Q 一次。人员车辆 km 不等于货物 t*km；打包服务不得再次加入同一供方电力/出行。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 合法持有人在源头出示用于干式检查的实际卡车旧胎体，披露保管交接及继承历史 |
| starting_condition_role | 前景准备/资格确认起点；不是制造，也不自动免除继承负担 |
| product_classification_scope | 39260 内较窄的可翻新胎体子集；不声明覆盖整个叶级 |
| recursive_input_rule | 已放行胎体追溯原批次；上游负担只链接一次，仅增加实际增量服务，不因转售新增 Q |
| upstream_dataset_requirement | 实际胎体历史/负担约定、相容的检查与人员出行供方、实际用电供方；不自动计信用 |
| disclosure | 场址时期、保管与所有权区分、检查结果、拒收批次、供方重叠、散装路线、存量负担向量、待定身份及下游排除 |


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | whole_supply | 纳入首次现场验收前全部源头准备/称量/检查及人员出行。供方执行的操作须通过一套有归属的服务清单纳入；合同/付款本身不能证明已实际检查或覆盖范围。分别记录保管与所有权事件。 | `cash-casing-terms`; `cash-casing-faq` |
| boundary_gate | released_whole_tyres | 以有凭据的检查及购入/所有权交接冻结首次验收 Q。后续装载、储存、运至翻新厂、翻新厂独立检查及退回均进入关联的放行后服务账，不产生另一份 Q。验收前暂存/返工仍属放行前。 | `cash-casing-terms`; `jrc-ilcd-attributional-2010` |
| boundary_route | whole_supply | 核实本散装干式路线无包装/托盘池及材料转化。若实际存在包装，接受该范围前须逐种建立购买、首次非购买外部接收（包括随来料/借入/无偿调拨）、可追溯同件真实退回、存量及去向账，并仅归属一次负担。废料处置与成品翻新是不同功能。 | `cash-casing-terms`; `wco-hs2022-rubber` |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| whole_supply | 源头干式胎体资格确认 | required | 声明的首次购入胎体路线 | foreground | released_whole_tyres |


### 过程：源头干式胎体资格确认（`whole_supply`）

#### 输入

##### 产品流

###### 待分级商用卡车橡胶充气旧胎体 (`offered_casing`)

仅记录分级前真实实物保管接收，与仅出示但未接管的物品区分。追溯实际使用史、完整无轮辋状态、来源负担及法律经济状态。存档 Waste Tire 记录类型为 Product flow，但其废物/热解描述不能确立可翻新胎体资格。保留橡胶/钢/织物是组成子账，不是新购原料。


- 选定流：待分级商用卡车橡胶充气旧胎体

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：使用第 8 节对本行原始分子的一次归一化，原始记录见 cp_mass。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：per reference flow

- 基准类型：`process_output`

- 证据类型：`collected_record`

- 采集协议：`cp_mass`

- 来源：`cash-casing-terms`; `cash-casing-faq`; `jrc-ilcd-attributional-2010`



###### 胎体检查用外购电力 (`site_electricity`)

仅在实际存在时记录，包括称量、检查、待机及清理电表负荷。流 UUID 及供方原生属性尚未核实；Energy/MJ 表示计量需求，不代表已选择背景过程或电压/电力组合。人工检查不表示场址负荷为零。


- 选定流：胎体检查用外购电力

- 流属性/单位：Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ

- 数量规则：使用第 8 节对本行原始分子的一次归一化，原始记录见 cp_energy。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：per reference flow

- 基准类型：`process_output`

- 证据类型：`collected_record`

- 采集协议：`cp_energy`

- 来源：`cash-casing-terms`; `cash-casing-faq`; `jrc-ilcd-attributional-2010`



###### 外包卡车胎体干式检查服务 (`inspection_service`)

仅在实际外包时记录外部检查服务，披露批次、标准、实测活动及包含资源。供方负责的工作仅使用一次其清单，不重复所含本地电力或出行。自营工作不得虚构购买服务。


- 选定流：外包卡车胎体干式检查服务

- 流属性/单位：检查服务 / inspection event

- 数量规则：使用第 8 节对本行原始分子的一次归一化，原始记录见 cp_services。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：per reference flow

- 基准类型：`process_output`

- 证据类型：`collected_record`

- 采集协议：`cp_services`

- 来源：`cash-casing-terms`; `cash-casing-faq`; `jrc-ilcd-attributional-2010`



###### 检查人员公路车辆到访服务 (`crew_visit`)

仅在单独发生时记录人员到访：实际路线含未成功到访及返回路段、车辆类别与人数。不是货运，不得虚构载货 t*km。若已含于 inspection_service，保留活动证据并剔除重复交换负担。


- 选定流：检查人员公路车辆到访服务

- 流属性/单位：车辆行驶 / vehicle*km

- 数量规则：使用第 8 节对本行原始分子的一次归一化，原始记录见 cp_services。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：per reference flow

- 基准类型：`process_output`

- 证据类型：`collected_record`

- 采集协议：`cp_services`

- 来源：`cash-casing-terms`; `cash-casing-faq`; `jrc-ilcd-attributional-2010`



#### 输出

##### 产品流

###### 可翻新商用卡车橡胶充气旧胎体 (`released_whole_tyres`)

唯一参考 Product 行：在源头门经检查并作为可翻新胎体购入的未翻新商用卡车胎体。记录验收/付款/所有权及实际保管。无已验证产品 UUID；不得用废物、翻新成品或新胎身份替代。后续翻新适宜性与安全仍需独立检验。期末已验收存量已包含在 Q 中。


- 选定流：可翻新商用卡车橡胶充气旧胎体

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：1 千克

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：per reference flow

- 基准类型：`process_output`

- 证据类型：`collected_record`

- 采集协议：`cp_mass`

- 来源：`cash-casing-terms`; `cash-casing-faq`; `jrc-ilcd-attributional-2010`



###### 未购买而退还的可再用商用卡车旧胎体 (`returned_casing`)

仅记录因商业/尺寸原因未购买但仍可再用胎体的实际保管退回。记录原接收及原因；仅在原主处出示且未发生保管转移的物品不是实物交换。真实退回不是新生产或负购买。


- 选定流：未购买而退还的可再用商用卡车旧胎体

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：使用第 8 节对本行原始分子的一次归一化，原始记录见 cp_mass。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：per reference flow

- 基准类型：`process_output`

- 证据类型：`collected_record`

- 采集协议：`cp_mass`

- 来源：`cash-casing-terms`; `cash-casing-faq`; `jrc-ilcd-attributional-2010`



##### 废物流

###### 不可翻新的卡车整胎体废料 (`scrap_casing`)

仅记录从实际保管边界移出的、确实无法再用的轮胎废料，并留存检查拒收及合法接收记录。由原主留存处置的物品不是本方废物转移。区分购买处置功能及其供方/运输负担；负处置价格不是产品信用。不声明已验证 Waste UUID。


- 选定流：不可翻新的卡车整胎体废料

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：使用第 8 节对本行原始分子的一次归一化，原始记录见 cp_mass。

- 数值来源模式：`foreground_record`

- 适用范围：`site_specific`

- 归一化基准：per reference flow

- 基准类型：`process_output`

- 证据类型：`collected_record`

- 采集协议：`cp_mass`

- 来源：`cash-casing-terms`; `cash-casing-faq`; `jrc-ilcd-attributional-2010`



不因干式目视检查推定存在计划性基本排放。实际排放须逐个明确化学物种、环境介质、测量方法及供方归属；已在供方清单中的污染物不得再加。未知实际排放须保留为完整性待决。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | whole_supply | 记录实际胎体历史、既往使用、经济法律状态及研究特定的继承负担/再用约定。低价、废物标签或所有权交接不能确立零负担或避免新胎/橡胶/填埋信用。 | `jrc-ilcd-attributional-2010` |
| allocation_subdivision | whole_supply | 首先直接归属并细分检查、拒收、处置及放行后服务。保留未成功到访、零产出时期及有因果关系的返工。其他功能服务及原主留存拒收品须有明确活动归属，不得消去共同检查工作。 | `jrc-ilcd-attributional-2010` |
| allocation_physical | whole_supply | 对每项剩余共享交换证明决定其需求的物理原因。实测检查时间可支持设备分配；人员路线与到访目的决定出行归属。不得以胎体质量、件数或价格作为通用键。保留供方包含项并核对全部份额。 | `jrc-ilcd-attributional-2010` |
| allocation_residual | whole_supply | 仅在细分与决定性物理因果关系不能解决真正共同负担时，才对残余采用有凭据的同期同门实际状态市价进行经济分配。剔除后续运输/翻新价差，并区分处置费用与正产品价值。缺少一致价值时保持未决。 | `jrc-ilcd-attributional-2010` |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

采集未经归一化的原始记录，含全部失败及待机时段。汇总基准标签不执行除法。各交换先换算和归属原始分子，仅 single_intensity 执行一次除以 Q。不规定文献默认数量。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | whole_supply | 保管/质量/质量量值 | 称量验收台账 | 批次/单件；使用史；持有人；尺寸；毛/皮重；游离水/土/外物；净 kg；件数；保管时间；胎面/胎侧/胎圈/内部结果；检查方；决定/标准；付款/所有权；首次放行；拒收；退回；期初末在制品/成品及负担向量 | 校准配对称量；独立杂物称量；签字逐件检查及商业/保管核对；不假设 kg/胎 | kg; item | 每次保管与决定 | 全批次含失败及结转 | 实际卖方及检查点 | per reference flow | 校准；配对称重单；来源史；标准；签字；付款/所有权凭据；完整存量平衡 |
| cp_energy | whole_supply | site_electricity | 电表/供方记录 | 表起止；kWh；时间；场址；电压；供方；工序；待机；清理；损失；供方包含项；分配键 | 读取校准电表差并核对账单/场址负荷；独立确认实际供方原生属性 | kWh; MJ | 每时段 | 同批次完整期间 | 实际检查点/供方 | per reference flow | 电表校准与供电原始凭据；重叠核对 |
| cp_services | whole_supply | 检查及人员出行 | 供方/活动记录 | 供方；实际批次；检查事件；设备/时间；服务清单边界；起终点；车辆；距离；失败到访；返回；其他功能；付款；包含项 | 将供方原始清单与签字实物服务及路线记录匹配；只拆分已验证包含项 | inspection event; vehicle*km | 每次到访及服务 | 全部匹配成功/失败及返回 | 实际源头及供方 | per reference flow | 签字检查记录；供方清单；路线记录；合理分配及无重叠证据 |


### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| acceptance_q | released_whole_tyres | Q = 具备匹配检查/付款/所有权凭据的唯一首次验收净胎体 kg 之和。后续转售、调拨、复检或退回不增加 Q。期末已验收成品已在 Q 内；期初已验收成品属于其历史批次。 | cp_mass | Q | `jrc-ilcd-attributional-2010`; `cash-casing-terms` |
| raw_attribution | all inventory rows | 原始记录换算到行单位后，归属专属及有依据的共享负担。A_j = 当期归属原始负荷 + 期初在制品继承负担向量 - 期末在制品继承负担向量。分别核对拒收/返工及来料历史；存量结转全部交换负担而非仅胎体 kg。此处不除以 Q。 | cp_mass; cp_energy; cp_services | A_j | `jrc-ilcd-attributional-2010`; `cash-casing-terms` |
| single_intensity | all inventory rows | 当 Q > 0 时仅计算一次 I_j = A_j / Q，单位为行分子单位/1 kg 参考流。卡片与汇总使用同一结果。Q=0 时保留全部负担，不给出单位强度；参考输出为 1 kg。 | A_j; Q | I_j | `jrc-ilcd-attributional-2010`; `cash-casing-terms` |
| physical_balance | whole_supply | 同一保管控制面：期初实物存量 + 实际外部接收 = 期末存量 + 实际外发 + 单独实测损失。未接收的出示物品既非接收亦非外发。首次验收是放行前存量至成品的内部转移，不是额外外发。杂物与组成物为非加和子账。不得虚构残差输出。 | cp_mass | physical balance | `jrc-ilcd-attributional-2010`; `cash-casing-terms` |
| post_release_service | whole_supply | 固定原批次 Qc；链接后续储存/装载/运输/退回及期初末成品服务负担向量。将实际增量服务归给该批次。交付胎体数据集须另做实际发运/存量核对。合并关联原始负担并抵消内部交接，不得再用 Q 或服务质量去除既有 I_j。 | cp_mass; cp_services; cp_energy | cohort service ledger | `jrc-ilcd-attributional-2010`; `cash-casing-terms` |


### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 核实原生流类型、双语名称、实物状态、地域、属性/参考系数及精确单位支持。名称或单位组相同不足以匹配。缺少产品 UUID 时不能完成最终身份资格确认。 | 原生直读及实际批次/供方相容性 |
| dq_grade | released_whole_tyres | 保留逐件可翻新性观察与验收标准；不设通用花纹深度、胎龄、质量、成分或寿命默认值。商业购入不证明后续翻新厂通过或道路安全。网页通用仅废胎措辞不是逐批分级证据。 | 签字检查、实际购入/保管及当地法律凭据 |
| dq_complete | whole_supply | 区分缺失数据与已验证不存在；纳入失败/待机工作、结转及全部实际实物流。声明完整清单前须解决物料损失或增设具体交换。 | 全期平衡、供方核对及不确定性登记 |


## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | released_whole_tyres | 要求全部限定信息、唯一首次验收链接、实际可翻新等级、付款/所有权/保管证据及相容原生 Product 身份。不得以确实废料或翻新成品作参考。 | `cash-casing-terms`; `cash-casing-faq`; `wco-hs2022-rubber` |
| validate_balance | whole_supply | 核对原始质量/保管、在制品/成品负担向量、实际供方、失败到访、拒收批次及全部退回。不重复 Q、供方负荷、包装或组成负担。数据缺失时不能给出完整单位结果。 | `jrc-ilcd-attributional-2010`; `cash-casing-terms` |
| validate_normalization | all inventory rows | 检查原始换算和归属先于一次 A_j/Q 除法。Schema/投影及有限计量检查不能确立实物平衡、资料适用性、原生供方相容性、科学/安全批准或翻译审查。 | `jrc-ilcd-attributional-2010` |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 源头购入门的合格可翻新来料胎体，后续交付/翻新另行建模 |
| allowed_use | 仅限匹配卡车胎体等级、干式散装路线、源头验收门、来源负担约定及经独立审查的完整数据集 |
| excluded_use | 翻新成品制造；轮胎行驶寿命/安全声明；材料回收废料；自动再用信用；转售重复计生产；整个 CPC 叶级覆盖 |
| required_metadata | 第 3 节限定信息、原始协议、批次/Q 及保管链接、供方、分配键与未决身份 |
| required_quality_disclosure | 缺失与已验证零值区分；继承负担及存量；待定原生身份；资料局限；实际法律/质量证据与不确定性 |
| update_trigger | 胎体等级/标准、路线/门、实际包装、来源法律经济状态、供方身份或实质证据变化 |


## 11. 数据源

| Source id | Type | Reference | 用途 |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 structure and complete explanatory notes, 30 June 2025, PDF p.202 (39250/39260); current registry https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/39260 | 现行类别及相邻废料标题；说明仅提供标题，不给出可翻新性阈值。较窄胎体范围是方法解释，并非 CPC 原文条款。 |
| wco-hs2022-rubber | official_guidance | World Customs Organization, HS Nomenclature 2022, Chapter 40 note 6 and headings 40.04/40.12 (4012.20). https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0740_2022e.pdf?la=en | 独立邻界反证：确实无法再用的橡胶制品即使未切割也属废料。HS2022 与 CPC3 不同，不自动跨版映射。 |
| cash-casing-terms | extension_guidance | Cash’s Tire Recycling, Terms of Service §§4.4, 5.1–5.6, 6 and 7. https://cashstirerecycling.com/terms | 第一方现场检查、购入/付款/所有权交接及拒收胎体去向。区分商业验收与后续运输/翻新。得州实践及通用废物措辞不代表当地法律许可、实测清单或通用质量标准。 |
| cash-casing-faq | extension_guidance | Cash’s Tire Recycling, FAQ, Used Commercial Tires & Casings. https://cashstirerecycling.com/faq | 真实商用卡车可翻新胎体市场及目视/结构检查维度。与条款为同一经营者，不是独立第二来源；尺寸仅为例，不是默认质量或库存保证。 |
| jrc-ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed pp.255–272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 条件性归因细分、决定性物理因果关系及残余同门实际状态市价。台账/公式实现是本 PCR 综合；不自动提供轮胎截断、信用、数值默认值或完整 ILCD 符合性。 |
