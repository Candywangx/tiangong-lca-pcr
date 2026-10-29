---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.calcinated-or-agglomerated-dolomite
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 回转窑煅烧未消化白云石灰

## 1. 范围与适用性

适用于碳酸盐白云岩经回转窑完全煅烧制成的、首次裸成品质量验收时未消化且非烧结的整份白云石灰。终端是具有实测残余碳酸盐、杂质及热工活性等级的Ca-Mg氧化物产品，不以纯组分分析当量代替整份质量。CPC37450仅为较宽分类语境；不将每个分类叶自动造为canonical。方法为公开primary原件的透明技术综合，未来具体场址的供料工况及数量须真实采集。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.calcinated-or-agglomerated-dolomite |
| classification_refs | CPC 3.0 37450；narrower；当前接受关系及决定以`classifications/mappings/cpc-3.0-to-pcr.yaml`及其引用ADR为准，不表示整类覆盖或科学/翻译批准 |
| covered_products | 回转窑完全煅烧、未消化、非烧结白云石灰整份成品 |
| excluded_products | 生白云石; 半烧料; 烧结死烧双程熟料; 粘结团聚料; 纯CaO或MgO; 外购纯氧化物混配; 消化灰; 耐火砖 |
| representative_product | 裸态粒状白云石灰，在实测等级的首次质量放行门 |
| production_route | 白云岩供料及上游负荷→实际预处理→回转窑煅烧→空气冷却筛分→首次裸成品质检放行 |
| market_state | 厂内未消化非烧结整份成品；后续仓储包装发运另服务账 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 提供具有实测规格的未消化白云石灰供后续用途 |
| How much | 1 kg 整份首次放行裸成品净质量 |
| How well | 实际场址及报告期; 碳酸盐供料来源及上游预处理和provider; 回转窑及真实预热器冷却器配置; 完全煅烧未消化非烧结Ca-Mg氧化物成品; 实测Ca/Mg物相及残余碳酸盐游离水; 实际杂质和热工活性等级; 粒度及验收规格; 校准称量整份裸成品净质量; 首次质量放行Q及唯一cohort; 全部失败启停空载清理记录; 期初期末实物及每交换继承向量; 独立观测FG服务窗口及原cohort的Q_o; 实际燃料及热值基准; 气体干湿状态及物种来源; 水相及接收介质; 供货附带包装上游owner及六个实物流腿; 资产和维修材料液体历史; 分配及provider覆盖; 原生身份限制 |
| How long or cycle | 一个明确首次放行cohort及制造报告期，后续实际观测服务窗口另列，不编寿命 |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 锻烧或焙烧的白云石 `1d730977-86da-46c8-a0c6-ccf0d6ee02db` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际场址及报告期; 碳酸盐供料来源及上游预处理和provider; 回转窑及真实预热器冷却器配置; 完全煅烧未消化非烧结Ca-Mg氧化物成品; 实测Ca/Mg物相及残余碳酸盐游离水; 实际杂质和热工活性等级; 粒度及验收规格; 校准称量整份裸成品净质量; 首次质量放行Q及唯一cohort; 全部失败启停空载清理记录; 期初期末实物及每交换继承向量; 独立观测FG服务窗口及原cohort的Q_o; 实际燃料及热值基准; 气体干湿状态及物种来源; 水相及接收介质; 供货附带包装上游owner及六个实物流腿; 资产和维修材料液体历史; 分配及provider覆盖; 原生身份限制 |

原生Product/Mass为厂内已制造的煅烧或团聚白云石产品族，未固定CAS、等级、粒度、组成或地域。本卡仅用于实际完全煅烧、未消化、非烧结回转窑白云石灰。其通用备注误写375混凝土水泥灰泥制品，与其他一致的37450身份不符；披露该元数据瑕疵但不改产品族。不能代指生碳酸盐、纯CaO或MgO、外购氧化物混合物、消化灰或成形耐火砖。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | Q为唯一新增首次质量放行批次的整份裸成品实测收货状态净kg，排除可拆包装、失败物、期初已放行FG、重验和交付。新增已放行期末FG已在Q中，不能再作为B_close扣制造向量或再增输出。制造B_close仅含未放行原料WIP及独立核对未分配非WIP在装存量。保留湿态质量及实测游离水物相限定，不擅改成假定干基或纯氧化物分母。 |
| native_numerators | all inventory rows | Declared native extensive property | kg; MJ; item | 按每行原生广延属性保留单位；质量规则不套用电力MJ或件数。item与Item(s)因子1不推kg；calc_raw_conversion先换算，calc_reference唯一除Q。 |
| phase_evidence | manufacture | Mass | kg | 分别独立测全湿质量、游离水、残余Ca/Mg碳酸盐、真实CaO/MgO物相、杂质及气体。CaO/MgO当量不证明游离氧化物，烧减不是水；不默认纯度、收率、CO2因子、密度、反应水或活性。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 具有独立上游采石预处理及供给负荷的实际碳酸盐白云岩喂料 |
| starting_condition_role | 外供原料，不是购买成品白云石灰后只包装 |
| product_classification_scope | 较宽CPC37450中的未消化非烧结回转窑完全煅烧产品子集 |
| recursive_input_rule | 同类外购白云石灰需独立provider，不能替代本次原料至终端制造；内部返尘抵消并保留继承向量。 |
| upstream_dataset_requirement | 原料、整份燃料、电、水、真实辅助材料、资产及废物治理各有唯一适用上游负荷和缺口披露。 |
| disclosure | 实际场址及报告期; 碳酸盐供料来源及上游预处理和provider; 回转窑及真实预热器冷却器配置; 完全煅烧未消化非烧结Ca-Mg氧化物成品; 实测Ca/Mg物相及残余碳酸盐游离水; 实际杂质和热工活性等级; 粒度及验收规格; 校准称量整份裸成品净质量; 首次质量放行Q及唯一cohort; 全部失败启停空载清理记录; 期初期末实物及每交换继承向量; 独立观测FG服务窗口及原cohort的Q_o; 实际燃料及热值基准; 气体干湿状态及物种来源; 水相及接收介质; 供货附带包装上游owner及六个实物流腿; 资产和维修材料液体历史; 分配及provider覆盖; 原生身份限制 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | manufacture | 从真实外供碳酸盐白云岩及其完整采石预处理运输负荷起，纳入实际接收、厂内粒度处理水洗、燃料预处理、预热、回转窑脱碳、空气冷却、筛分、首次裸成品检测放行、治理及应归资产维修。本技术综合由BREF与MPA支持，不假称同一实测工厂或SKU；不规定通用温度、时间、纯度、密度、燃料、能耗、收率、反应因子或寿命。 | `jrc-clm-bref-2013`; `mpa-making-dolime` |
| boundary_exclusions | product | 排除以玻璃配合料生白云石或生碳酸盐矿物为终端、半烧CaCO3/MgO、烧结死烧或双程致密化、加粘结剂团聚、外购纯氧化物混配、主动水化消化、砂浆配制和耐火砖成形。BREF也允许竖窑，MPA回转窑及固体燃料说法属区域语境，不证明竖窑不能制造；其他状态路线另评适用性。 | `jrc-clm-bref-2013`; `mpa-making-dolime` |
| boundary_first_release | all inventory rows | Q为唯一新增首次质量放行批次的整份裸成品实测收货状态净kg，排除可拆包装、失败物、期初已放行FG、重验和交付。新增已放行期末FG已在Q中，不能再作为B_close扣制造向量或再增输出。制造B_close仅含未放行原料WIP及独立核对未分配非WIP在装存量。保留湿态质量及实测游离水物相限定，不擅改成假定干基或纯氧化物分母。 | `jrc-clm-bref-2013` |
| boundary_history | all inventory rows | 保留期初期末原料、燃料、WIP、捕集返尘、FG、包装、在装资产液体实物和每交换继承负荷向量。失败批次、零产出、启停、空载、清理及真实重工均留真实负荷。X_in/X_out记录尚未由其他流入/流出FLOW流项表示的独立实测真实材料/水流入与流出；仅对其他真实流项去重，绝不对期初期末存量去重，不因材料水留存期末而删除真实外部进入；完整湿态期末质量与对应真实输入同时保留。普通废品、样品、破损、废物出售外运不扣制造负荷；仅真实独立cohort功能及正当分配移交才转一次向量，不能按份额缩实物总质量。 独立保留每项原料、WIP和未分配非WIP期初期末实物数量及每个继承交换向量。声明毛接收/入池量或已作存量调整的净耗用及每项已含修正；同一净原料耗用不得再次作相同存量修正。 | `jrc-ilcd-2010` |
| boundary_service | service | 放行后仓储包装搬运发运另建每个原cohort及观测窗口的真实服务账，使用原Q_o而非当期新增Q，已执行服务只计一次。核对期初FG加Q内部转入、真实退货及新增水料，与期末FG、毛发运、真实废物损失物种。D_rev须追原发运历史，不能假定R=D_rev。重工须制造商规格许可、工后检测及处置，水化或破损不自动可恢复。合并时抵消内部Q及cohort向量转移，服务重验不造新产量。 | `jrc-ilcd-2010` |
| boundary_additions | all inventory rows | 卡片为逐个条件性交换，不是通用工厂配方。使用数据集前把其他真实燃料、整份化学制剂、维修件、水相、捕集外售产品、废物及分子排放逐项补成具体原子行，并有相符身份属性单位provider及协议。未知不是零或not_applicable。外购整份制剂只采购一次，化验、活性分数、载水、灰分、组分为子账；真实厂内配制逐项计采购能耗损失。不编未来蒸汽锅炉添加剂信用。 | `jrc-clm-bref-2013`; `jrc-ilcd-2010` |
| packaging_receipt_basis | each packaging receipt | 对每个真实包装制品，将每次完整外部接收且仅接收一次归类。P为有偿采购，包括虽无单独发票但已随其他供货付费的包装。I为全部首次非采购外部入流，包括单独赠与、借用、租赁或周转池接收，以及未采购的供方随附包装；随附仅是I的子集。ER必须是本场所先前已向外发出、且能以同一制品或可审计同构型批次匹配原外发记录的真实退回；仅有保管权或他方使用史不证明退回。P、I、ER互斥。已有I卡及其原始协议按相同物理制品覆盖这些I来源，不预设新材料、UUID或数量。X_in/X_out仍仅为互斥的材料或水变化项，不能代替整制品接收。保留毛实物量、所有者/保管者、付费或非采购依据、来源、所需原外发链接、原生状态单位和继承的制造/服务向量。非采购不等于新制造或自动零负荷：实际已用服务和新增运输搬运按正确原批群及其分母归属一次，未用服务另留，不设默认寿命或抵扣。这是声明的守恒前景核算实现，不声称引用原文规定这些变量名称。 | `jrc-ilcd-2010` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 供料至首次放行白云石灰 | required | 实际回转窑制造至首次裸成品验收 | 前景生产或独立实际服务 | 每 1 kg 参考流 |
| assets | 制造资产与维修 | conditional | 仅真实在装总成及组成具体的新旧维修材料 | 前景生产或独立实际服务 | 每 1 kg 参考流 |
| service | 实测放行后服务 | conditional | 原cohort真实仓储搬运包装发运退回 | 前景生产或独立实际服务 | 每 1 kg 参考流 |
| packaging | 单一包装实物账 | conditional | 仅实际供料或放行后包装，散装可无包装 | 前景生产或独立实际服务 | 每 1 kg 参考流 |

本节全部卡片继承第5节适用门、库存向量及第7节归属规则。每卡仅一个真实原子交换；未发生、实测零和未知须区别。制造以原Q、放行后服务以原Q_o，同一calc_reference只执行一次。供货整份材料及制剂计一次；组分不是再采购。

### 过程：供料至首次放行白云石灰（`manufacture`）

#### 输入

##### 产品流

###### 粒度分级白云岩窑喂料（`raw_feed`）

接收实际碳酸盐白云岩，采石、预处理和运输上游负荷及供货附带包装各计一次。记录整份湿态供货质量；水分及碳酸盐化验仅作组分子账，不再采购。实际厂内破碎筛分或水洗另计真实能耗、水、粉尘及废料，上游已做工序不重复。 原生Product/Mass粒度分级白云岩喂料未固定品级、矿区、粒度限值、CAS或预处理路线；须确认实际碳酸盐物相及窑喂料状态。保留的399分类属于来源历史，不证明已制造化学产品。本交换不采用玻璃配合料输入Dolomite身份。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：白云岩窑喂料（粒度分级） `21d4c1dc-0a6e-4856-9452-376ff4f6d61e`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_raw_feed 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw_feed`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 制造电力（`mfg_electricity`）

分别计量原料预处理、输送、燃料预处理、窑驱动、风机、冷却、筛分、检测和治理用电；包括启停、空载、清理、失败及Q=0。 原生Product电力限中国1–35kV电网平均消费组合、到用户。其原生Net calorific value以MJ表达电能，不是燃料热量；计量kWh仅乘3.6一次。须匹配电压、地域、交付及供方损耗边界，其他电网或自发电另取相符身份和provider；原生通用合规文字不等于PCR批准。 精确参考属性 Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`; 参考单位 MJ. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：使用本行唯一计算的x_i结果；由 cp_mfg_electricity 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mfg_electricity`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 条件性窑用天然气（`natural_gas`）

仅在实际工业窑燃烧或点火用气时采集，不规定必须用气。整份供气采购一次，独立保留载体质量、组分及高位热值，不再另购同一热量。 原生Product天然气为GLO厂内生产混合、工业炉燃烧，参考属性为Gross calorific value/MJ；未固定CAS、组分、热值因子或密度。采集实际高位热量及独立载体质量组分，低位热值须实测换算而非互换；不采用固定江苏NGCC-CHP燃气或甲烷CAS压缩气候选。 精确参考属性 Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`; 参考单位 MJ. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：天然气 `4bfd1abb-9106-495a-a291-ce410f205691`
- 流属性/单位：Gross calorific value / MJ
- 数量规则：使用本行唯一计算的x_i结果；由 cp_natural_gas 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_natural_gas`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 厂内搬运柴油（`diesel`）

仅计制造边界内实际装卸搬运发动机，整份燃料采购一次，保留实际质量、热值基准及独立实测燃烧物种，不重复供方运输。 原生Product/Mass柴油未限定牌号、配方、炼制路线、地域、密度、热值和provider；须匹配整份实际柴油及上游provider，不编这些参数。该流及其量不再另计一个热产品。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_diesel 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_diesel`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 制造补水（`water_makeup`）

对原料水洗、烟气调温洗涤及清理的实际互斥补水支路分别计量及追踪去向。补水不等于主动消化dolime，意外水化须更改物相、验收及水账。 原生Product/Mass工艺用水指经过处理的工业用水；新水、再生水、循环水等同义标签不使内部循环成为新采购。须确认处理、水质、液态、供水点及provider，不代指环境取水、液体排放或外购蒸汽。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_water_makeup 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_makeup`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 窑用烟煤粉（`pulverized_coal`）

仅在实际燃煤时记录；称量含水及灰分的整份煤，保留实测元素、工业分析、高低位热值及燃料预处理。不得编配方、用量或热值，灰分不另采购；实际其他燃料使用前逐项增加具体卡片。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：窑用烟煤粉
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pulverized_coal 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pulverized_coal`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 液态换热水（`cooling_water_in`）

仅用于实际对外换热供水；记录载体kg、液态、入口温压焓及供方水能约定，不假设蒸汽或锅炉。与直接注入补水分开。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：液态换热水
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_cooling_water_in 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooling_water_in`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

##### 废物流

##### 基本流

###### 大气二氮吸入（`air_n2_in`）

用独立测量的干湿气体体积、湿度、组分及实际状态分别计此吸入物种。总空气仅作物理总账，不另作重复基本流；不等同外购分离工业气体。 原生Elementary/Mass N2、CAS7727-37-9限大气可再生元素资源吸入，不是外购分离气体或排放。仅用真实普通气态N2，液态、同位素、离子或激发态同义标签不授权这些不同状态。原生未固定地域、等级、密度或浓度。按真实状态与来源分账测本单一物种实物总量，不再计总空气或假定组分；须匹配真实介质，区分实物穿过及净表征。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_air_n2_in 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_n2_in`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 大气氧气吸入（`air_o2_in`）

用独立测量的干湿气体体积、湿度、组分及实际状态分别计此吸入物种。总空气仅作物理总账，不另作重复基本流；不等同外购分离工业气体。 原生Elementary/Mass O2、CAS7782-44-7限大气可再生元素资源吸入，不是外购分离气体或排放。仅用真实普通气态O2，液态、同位素、离子或激发态同义标签不授权这些不同状态。原生未固定地域、等级、密度或浓度。按真实状态与来源分账测本单一物种实物总量，不再计总空气或假定组分；须匹配真实介质，区分实物穿过及净表征。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_air_o2_in 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_o2_in`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 大气氩气吸入（`air_ar_in`）

用独立测量的干湿气体体积、湿度、组分及实际状态分别计此吸入物种。总空气仅作物理总账，不另作重复基本流；不等同外购分离工业气体。 原生Elementary/Mass Ar、CAS7440-37-1限大气可再生元素资源吸入，不是外购分离气体或排放。仅用真实普通气态Ar，液态、同位素、离子或激发态同义标签不授权这些不同状态。原生未固定地域、等级、密度或浓度。按真实状态与来源分账测本单一物种实物总量，不再计总空气或假定组分；须匹配真实介质，区分实物穿过及净表征。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_air_ar_in 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_ar_in`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 大气水蒸气吸入（`air_h2o_in`）

用独立测量的干湿气体体积、湿度、组分及实际状态分别计此吸入物种。总空气仅作物理总账，不另作重复基本流；不等同外购分离工业气体。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：大气水蒸气吸入
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_air_h2o_in 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_h2o_in`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 大气二氧化碳吸入（`air_co2_in`）

用独立测量的干湿气体体积、湿度、组分及实际状态分别计此吸入物种。总空气仅作物理总账，不另作重复基本流；不等同外购分离工业气体。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：大气二氧化碳吸入
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_air_co2_in 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_co2_in`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

#### 输出

##### 产品流

###### 液态换热回水（`cooling_water_return`）

仅计实际向供方外返的回水，保留真实载体质量、出口状态焓及独立进出损失；Product回流既不等于废水处置，也不产生自动避热信用。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：液态换热回水
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_cooling_water_return 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooling_water_return`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 首次放行未消化白云石灰（`final_product`）

实际煅烧、冷却及粒度验收后的唯一首次质量放行转移为Q。净称整份成品，含真实残余碳酸盐、杂质及游离水，不含可拆包装及废品；不视为纯CaO或纯MgO。 原生Product/Mass为厂内已制造的煅烧或团聚白云石产品族，未固定CAS、等级、粒度、组成或地域。本卡仅用于实际完全煅烧、未消化、非烧结回转窑白云石灰。其通用备注误写375混凝土水泥灰泥制品，与其他一致的37450身份不符；披露该元数据瑕疵但不改产品族。不能代指生碳酸盐、纯CaO或MgO、外购氧化物混合物、消化灰或成形耐火砖。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：锻烧或焙烧的白云石 `1d730977-86da-46c8-a0c6-ccf0d6ee02db`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_final_product`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

##### 废物流

###### 筛出白云岩废料（`raw_reject`）

仅记实际独立识别废物流及去向，保留湿态总质量、游离水及干物相化验。厂内返料作为保留继承向量的内部抵消转移，不再计外部废物或采购；保留全部处理负荷，普通出售或外运不扣制造负荷。废水整份溶液计一次，溶解组分为子账，除非真实越过治理边界排放。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：筛出白云岩废料
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_raw_reject 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_raw_reject`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 不合格未消化煅烧白云石灰（`calcined_reject`）

仅记实际独立识别废物流及去向，保留湿态总质量、游离水及干物相化验。厂内返料作为保留继承向量的内部抵消转移，不再计外部废物或采购；保留全部处理负荷，普通出售或外运不扣制造负荷。废水整份溶液计一次，溶解组分为子账，除非真实越过治理边界排放。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：不合格未消化煅烧白云石灰
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_calcined_reject 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_calcined_reject`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 捕集白云石灰窑尘（`captured_dust`）

仅记实际独立识别废物流及去向，保留湿态总质量、游离水及干物相化验。厂内返料作为保留继承向量的内部抵消转移，不再计外部废物或采购；保留全部处理负荷，普通出售或外运不扣制造负荷。废水整份溶液计一次，溶解组分为子账，除非真实越过治理边界排放。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：捕集白云石灰窑尘
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_captured_dust 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_captured_dust`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 白云岩水洗滤饼（`wash_cake`）

仅记实际独立识别废物流及去向，保留湿态总质量、游离水及干物相化验。厂内返料作为保留继承向量的内部抵消转移，不再计外部废物或采购；保留全部处理负荷，普通出售或外运不扣制造负荷。废水整份溶液计一次，溶解组分为子账，除非真实越过治理边界排放。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：白云岩水洗滤饼
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_wash_cake 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wash_cake`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 白云石灰烟气洗涤污泥（`scrubber_sludge`）

仅记实际独立识别废物流及去向，保留湿态总质量、游离水及干物相化验。厂内返料作为保留继承向量的内部抵消转移，不再计外部废物或采购；保留全部处理负荷，普通出售或外运不扣制造负荷。废水整份溶液计一次，溶解组分为子账，除非真实越过治理边界排放。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：白云石灰烟气洗涤污泥
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_scrubber_sludge 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_scrubber_sludge`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 白云石灰工艺废水（`wastewater`）

仅记实际独立识别废物流及去向，保留湿态总质量、游离水及干物相化验。厂内返料作为保留继承向量的内部抵消转移，不再计外部废物或采购；保留全部处理负荷，普通出售或外运不扣制造负荷。废水整份溶液计一次，溶解组分为子账，除非真实越过治理边界排放。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：白云石灰工艺废水
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_wastewater 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

##### 基本流

###### 地质碳酸盐二氧化碳排气（`calcination_co2`）

仅记治理后的真实排气，独立确认分子、物相及来源。配对浓度与相符的已积分干湿气体体积，或仅对真正速率积分一次。不得用NOx、总碳、氧化物当量、总颗粒或质量残差拟此物种。地质碳酸盐CO2与化石燃料CO2及入气CO2分开，无默认因子或碳化信用。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：地质碳酸盐二氧化碳排气
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_calcination_co2 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_calcination_co2`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 化石燃料二氧化碳排气（`combustion_co2`）

仅记治理后的真实排气，独立确认分子、物相及来源。配对浓度与相符的已积分干湿气体体积，或仅对真正速率积分一次。不得用NOx、总碳、氧化物当量、总颗粒或质量残差拟此物种。地质碳酸盐CO2与化石燃料CO2及入气CO2分开，无默认因子或碳化信用。 原生Elementary/Mass分子CO2、CAS124-38-9限化石源、未指定空气排放；本卡仅用独立确认的化石燃料燃烧CO2。同位素、离子和干冰同义词不是另行采用的身份；地质碳酸盐CO2保留为单独未绑定来源行，不代指土地利用变化、生物源或捕集产品。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_combustion_co2 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_co2`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 一氧化氮排气（`nitric_oxide`）

仅记治理后的真实排气，独立确认分子、物相及来源。配对浓度与相符的已积分干湿气体体积，或仅对真正速率积分一次。不得用NOx、总碳、氧化物当量、总颗粒或质量残差拟此物种。地质碳酸盐CO2与化石燃料CO2及入气CO2分开，无默认因子或碳化信用。  数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。 原生Elementary/Mass的一氧化氮，CAS10102-43-9，为未细分空气区室排放。仅用于独立识别的真实气态分子及相符介质/状态；NO/NO2不是总NOx或NO2当量指标，化石源CO/CH4须有实际化石来源证据，不能推作矿物/生物源或再次计入上游已含泄漏。含噪声的同位素/离子/液态/二聚体/碳别名不授权这些不同状态或将纯组分当供应产品。保留独立毛物种观测与来源分账，不假定浓度、密度、产率或排放因子。精确参考属性质量 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → kg。

- 选定流: 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_nitric_oxide 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_nitric_oxide`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 二氧化氮排气（`nitrogen_dioxide`）

仅记治理后的真实排气，独立确认分子、物相及来源。配对浓度与相符的已积分干湿气体体积，或仅对真正速率积分一次。不得用NOx、总碳、氧化物当量、总颗粒或质量残差拟此物种。地质碳酸盐CO2与化石燃料CO2及入气CO2分开，无默认因子或碳化信用。  数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。 原生Elementary/Mass的二氧化氮，CAS10102-44-0，为未细分空气区室排放。仅用于独立识别的真实气态分子及相符介质/状态；NO/NO2不是总NOx或NO2当量指标，化石源CO/CH4须有实际化石来源证据，不能推作矿物/生物源或再次计入上游已含泄漏。含噪声的同位素/离子/液态/二聚体/碳别名不授权这些不同状态或将纯组分当供应产品。保留独立毛物种观测与来源分账，不假定浓度、密度、产率或排放因子。精确参考属性质量 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → kg。

- 选定流: 二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_nitrogen_dioxide 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_nitrogen_dioxide`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 二氧化硫排气（`sulfur_dioxide`）

仅记治理后的真实排气，独立确认分子、物相及来源。配对浓度与相符的已积分干湿气体体积，或仅对真正速率积分一次。不得用NOx、总碳、氧化物当量、总颗粒或质量残差拟此物种。地质碳酸盐CO2与化石燃料CO2及入气CO2分开，无默认因子或碳化信用。 原生Elementary/Mass气态SO2、CAS7446-09-5限未指定空气排放，须确认真实对外排放。制剂、粉末、液体同义词不代指外购药剂、硫酸盐或SOx总指标；另查的室内空气记录不相符，未采用。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_sulfur_dioxide 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sulfur_dioxide`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 化石源一氧化碳排气（`carbon_monoxide`）

仅记治理后的真实排气，独立确认分子、物相及来源。配对浓度与相符的已积分干湿气体体积，或仅对真正速率积分一次。不得用NOx、总碳、氧化物当量、总颗粒或质量残差拟此物种。地质碳酸盐CO2与化石燃料CO2及入气CO2分开，无默认因子或碳化信用。  数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。 原生Elementary/Mass的一氧化碳（化石源），CAS630-08-0，为未细分空气区室排放。仅用于独立识别的真实气态分子及相符介质/状态；NO/NO2不是总NOx或NO2当量指标，化石源CO/CH4须有实际化石来源证据，不能推作矿物/生物源或再次计入上游已含泄漏。含噪声的同位素/离子/液态/二聚体/碳别名不授权这些不同状态或将纯组分当供应产品。保留独立毛物种观测与来源分账，不假定浓度、密度、产率或排放因子。精确参考属性质量 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → kg。

- 选定流: 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_carbon_monoxide 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_carbon_monoxide`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 化石源甲烷排气（`methane`）

仅记治理后的真实排气，独立确认分子、物相及来源。配对浓度与相符的已积分干湿气体体积，或仅对真正速率积分一次。不得用NOx、总碳、氧化物当量、总颗粒或质量残差拟此物种。地质碳酸盐CO2与化石燃料CO2及入气CO2分开，无默认因子或碳化信用。  数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。 原生Elementary/Mass的甲烷 (化石源)，CAS74-82-8，为未细分空气区室排放。仅用于独立识别的真实气态分子及相符介质/状态；NO/NO2不是总NOx或NO2当量指标，化石源CO/CH4须有实际化石来源证据，不能推作矿物/生物源或再次计入上游已含泄漏。含噪声的同位素/离子/液态/二聚体/碳别名不授权这些不同状态或将纯组分当供应产品。保留独立毛物种观测与来源分账，不假定浓度、密度、产率或排放因子。精确参考属性质量 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → kg。

- 选定流: 甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_methane 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_methane`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 氧化钙颗粒排气（`calcium_oxide_dust`）

仅记治理后的真实排气，独立确认分子、物相及来源。配对浓度与相符的已积分干湿气体体积，或仅对真正速率积分一次。不得用NOx、总碳、氧化物当量、总颗粒或质量残差拟此物种。地质碳酸盐CO2与化石燃料CO2及入气CO2分开，无默认因子或碳化信用。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：氧化钙颗粒排气
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_calcium_oxide_dust 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_calcium_oxide_dust`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 氧化镁颗粒排气（`magnesium_oxide_dust`）

仅记治理后的真实排气，独立确认分子、物相及来源。配对浓度与相符的已积分干湿气体体积，或仅对真正速率积分一次。不得用NOx、总碳、氧化物当量、总颗粒或质量残差拟此物种。地质碳酸盐CO2与化石燃料CO2及入气CO2分开，无默认因子或碳化信用。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：氧化镁颗粒排气
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_magnesium_oxide_dust 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_magnesium_oxide_dust`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 碳酸钙颗粒排气（`calcium_carbonate_dust`）

仅记治理后的真实排气，独立确认分子、物相及来源。配对浓度与相符的已积分干湿气体体积，或仅对真正速率积分一次。不得用NOx、总碳、氧化物当量、总颗粒或质量残差拟此物种。地质碳酸盐CO2与化石燃料CO2及入气CO2分开，无默认因子或碳化信用。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：碳酸钙颗粒排气
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_calcium_carbonate_dust 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_calcium_carbonate_dust`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 碳酸钙镁颗粒排气（`dolomite_dust`）

仅记治理后的真实排气，独立确认分子、物相及来源。配对浓度与相符的已积分干湿气体体积，或仅对真正速率积分一次。不得用NOx、总碳、氧化物当量、总颗粒或质量残差拟此物种。地质碳酸盐CO2与化石燃料CO2及入气CO2分开，无默认因子或碳化信用。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：碳酸钙镁颗粒排气
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_dolomite_dust 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_dolomite_dust`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 原料游离水蒸气排气（`feed_evaporation`）

分别保留出口实物总量与来源分账，不将烟气总质量当此分子。水须以独立燃料氢、物相及反应证据区分入气湿度、游离液水蒸发及真实反应生成水。无水碳酸盐分解生成CO2，不按化学计量生成水。净表征不得重复计吸入和穿过的一对交换。 原生Elementary/Mass普通H2O、CAS7732-18-5限未指定空气排放。仅用普通气态水；混杂液水、冰、重水、氚水同义词不建立物相或同位素等价。不是Product蒸汽供给、取水或废水；须匹配真实介质，各来源分账只合计一次。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_feed_evaporation 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feed_evaporation`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 燃烧反应水蒸气排气（`combustion_water`）

分别保留出口实物总量与来源分账，不将烟气总质量当此分子。水须以独立燃料氢、物相及反应证据区分入气湿度、游离液水蒸发及真实反应生成水。无水碳酸盐分解生成CO2，不按化学计量生成水。净表征不得重复计吸入和穿过的一对交换。 原生Elementary/Mass普通H2O、CAS7732-18-5限未指定空气排放。仅用普通气态水；混杂液水、冰、重水、氚水同义词不建立物相或同位素等价。不是Product蒸汽供给、取水或废水；须匹配真实介质，各来源分账只合计一次。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_combustion_water 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_water`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 工艺液水蒸发排气（`process_evaporation`）

分别保留出口实物总量与来源分账，不将烟气总质量当此分子。水须以独立燃料氢、物相及反应证据区分入气湿度、游离液水蒸发及真实反应生成水。无水碳酸盐分解生成CO2，不按化学计量生成水。净表征不得重复计吸入和穿过的一对交换。 原生Elementary/Mass普通H2O、CAS7732-18-5限未指定空气排放。仅用普通气态水；混杂液水、冰、重水、氚水同义词不建立物相或同位素等价。不是Product蒸汽供给、取水或废水；须匹配真实介质，各来源分账只合计一次。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_process_evaporation 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_evaporation`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 穿过系统的大气水蒸气（`humidity_out`）

分别保留出口实物总量与来源分账，不将烟气总质量当此分子。水须以独立燃料氢、物相及反应证据区分入气湿度、游离液水蒸发及真实反应生成水。无水碳酸盐分解生成CO2，不按化学计量生成水。净表征不得重复计吸入和穿过的一对交换。 原生Elementary/Mass普通H2O、CAS7732-18-5限未指定空气排放。仅用普通气态水；混杂液水、冰、重水、氚水同义词不建立物相或同位素等价。不是Product蒸汽供给、取水或废水；须匹配真实介质，各来源分账只合计一次。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_humidity_out 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_humidity_out`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 二氮排气（`air_n2_out`）

分别保留出口实物总量与来源分账，不将烟气总质量当此分子。水须以独立燃料氢、物相及反应证据区分入气湿度、游离液水蒸发及真实反应生成水。无水碳酸盐分解生成CO2，不按化学计量生成水。净表征不得重复计吸入和穿过的一对交换。 原生Elementary/Mass N2、CAS7727-37-9限未指定空气排放，不是大气资源吸入。仅用真实普通气态N2，液态、同位素、离子或激发态同义标签不授权这些不同状态。原生未固定地域、等级、密度或浓度。按真实状态与来源分账测本单一物种实物总量，不再计总空气或假定组分；须匹配真实介质，区分实物穿过及净表征。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_air_n2_out 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_n2_out`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 氧气排气（`air_o2_out`）

分别保留出口实物总量与来源分账，不将烟气总质量当此分子。水须以独立燃料氢、物相及反应证据区分入气湿度、游离液水蒸发及真实反应生成水。无水碳酸盐分解生成CO2，不按化学计量生成水。净表征不得重复计吸入和穿过的一对交换。 原生Elementary/Mass O2、CAS7782-44-7限未指定空气排放，不是大气资源吸入。仅用真实普通气态O2，液态、同位素、离子或激发态同义标签不授权这些不同状态。原生未固定地域、等级、密度或浓度。按真实状态与来源分账测本单一物种实物总量，不再计总空气或假定组分；须匹配真实介质，区分实物穿过及净表征。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_air_o2_out 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_o2_out`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 氩气排气（`air_ar_out`）

分别保留出口实物总量与来源分账，不将烟气总质量当此分子。水须以独立燃料氢、物相及反应证据区分入气湿度、游离液水蒸发及真实反应生成水。无水碳酸盐分解生成CO2，不按化学计量生成水。净表征不得重复计吸入和穿过的一对交换。 原生Elementary/Mass Ar、CAS7440-37-1限未指定空气排放，不是大气资源吸入。仅用真实普通气态Ar，液态、同位素、离子或激发态同义标签不授权这些不同状态。原生未固定地域、等级、密度或浓度。按真实状态与来源分账测本单一物种实物总量，不再计总空气或假定组分；须匹配真实介质，区分实物穿过及净表征。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_air_ar_out 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_ar_out`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

###### 穿过系统的大气二氧化碳（`ambient_co2_out`）

分别保留出口实物总量与来源分账，不将烟气总质量当此分子。水须以独立燃料氢、物相及反应证据区分入气湿度、游离液水蒸发及真实反应生成水。无水碳酸盐分解生成CO2，不按化学计量生成水。净表征不得重复计吸入和穿过的一对交换。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：穿过系统的大气二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_ambient_co2_out 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_ambient_co2_out`
- 来源：`jrc-clm-bref-2013`; `mpa-making-dolime`

### 过程：制造资产与维修（`assets`）

#### 输入

##### 产品流

###### 白云石灰回转窑总成（`kiln_asset`）

仅在实际取得、安装、维修或拆除该确切总成或材料时记录。资产账保留实物收退总量、完整期初期末在装材料、留存液体及水分；当期服务负荷按独立证明的因果使用及原继承向量计，不按每kg一整机或编固定寿命。新旧维修件及水分变化逐流记录，实际其他材料使用前另增卡片。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：白云石灰回转窑总成
- 流属性/单位：Number of items / item
- 数量规则：使用本行唯一计算的x_i结果；由 cp_kiln_asset 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_kiln_asset`
- 来源：`jrc-ilcd-2010`

###### 碳钢窑壳维修钢板（`steel_repair_new`）

仅在实际取得、安装、维修或拆除该确切总成或材料时记录。资产账保留实物收退总量、完整期初期末在装材料、留存液体及水分；当期服务负荷按独立证明的因果使用及原继承向量计，不按每kg一整机或编固定寿命。新旧维修件及水分变化逐流记录，实际其他材料使用前另增卡片。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：碳钢窑壳维修钢板
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_steel_repair_new 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_steel_repair_new`
- 来源：`jrc-ilcd-2010`

###### 烧成镁质窑衬砖（`lining_new`）

仅在实际取得、安装、维修或拆除该确切总成或材料时记录。资产账保留实物收退总量、完整期初期末在装材料、留存液体及水分；当期服务负荷按独立证明的因果使用及原继承向量计，不按每kg一整机或编固定寿命。新旧维修件及水分变化逐流记录，实际其他材料使用前另增卡片。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：烧成镁质窑衬砖
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_lining_new 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lining_new`
- 来源：`jrc-ilcd-2010`

###### 矿物润滑油（`oil_new`）

仅在实际取得、安装、维修或拆除该确切总成或材料时记录。资产账保留实物收退总量、完整期初期末在装材料、留存液体及水分；当期服务负荷按独立证明的因果使用及原继承向量计，不按每kg一整机或编固定寿命。新旧维修件及水分变化逐流记录，实际其他材料使用前另增卡片。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：矿物润滑油
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_oil_new 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_oil_new`
- 来源：`jrc-ilcd-2010`

###### 聚酯除尘滤袋（`filter_new`）

仅在实际取得、安装、维修或拆除该确切总成或材料时记录。资产账保留实物收退总量、完整期初期末在装材料、留存液体及水分；当期服务负荷按独立证明的因果使用及原继承向量计，不按每kg一整机或编固定寿命。新旧维修件及水分变化逐流记录，实际其他材料使用前另增卡片。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：聚酯除尘滤袋
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_filter_new 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_filter_new`
- 来源：`jrc-ilcd-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 报废白云石灰回转窑总成（`kiln_retired`）

仅在实际取得、安装、维修或拆除该确切总成或材料时记录。资产账保留实物收退总量、完整期初期末在装材料、留存液体及水分；当期服务负荷按独立证明的因果使用及原继承向量计，不按每kg一整机或编固定寿命。新旧维修件及水分变化逐流记录，实际其他材料使用前另增卡片。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：报废白云石灰回转窑总成
- 流属性/单位：Number of items / item
- 数量规则：使用本行唯一计算的x_i结果；由 cp_kiln_retired 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_kiln_retired`
- 来源：`jrc-ilcd-2010`

###### 拆下碳钢窑壳钢板（`steel_repair_old`）

仅在实际取得、安装、维修或拆除该确切总成或材料时记录。资产账保留实物收退总量、完整期初期末在装材料、留存液体及水分；当期服务负荷按独立证明的因果使用及原继承向量计，不按每kg一整机或编固定寿命。新旧维修件及水分变化逐流记录，实际其他材料使用前另增卡片。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：拆下碳钢窑壳钢板
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_steel_repair_old 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_steel_repair_old`
- 来源：`jrc-ilcd-2010`

###### 废镁质窑衬砖（`lining_old`）

仅在实际取得、安装、维修或拆除该确切总成或材料时记录。资产账保留实物收退总量、完整期初期末在装材料、留存液体及水分；当期服务负荷按独立证明的因果使用及原继承向量计，不按每kg一整机或编固定寿命。新旧维修件及水分变化逐流记录，实际其他材料使用前另增卡片。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：废镁质窑衬砖
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_lining_old 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lining_old`
- 来源：`jrc-ilcd-2010`

###### 废矿物润滑油（`oil_old`）

仅在实际取得、安装、维修或拆除该确切总成或材料时记录。资产账保留实物收退总量、完整期初期末在装材料、留存液体及水分；当期服务负荷按独立证明的因果使用及原继承向量计，不按每kg一整机或编固定寿命。新旧维修件及水分变化逐流记录，实际其他材料使用前另增卡片。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：废矿物润滑油
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_oil_old 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_oil_old`
- 来源：`jrc-ilcd-2010`

###### 废聚酯除尘滤袋（`filter_old`）

仅在实际取得、安装、维修或拆除该确切总成或材料时记录。资产账保留实物收退总量、完整期初期末在装材料、留存液体及水分；当期服务负荷按独立证明的因果使用及原继承向量计，不按每kg一整机或编固定寿命。新旧维修件及水分变化逐流记录，实际其他材料使用前另增卡片。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：废聚酯除尘滤袋
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_filter_old 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_filter_old`
- 来源：`jrc-ilcd-2010`

##### 基本流

### 过程：实测放行后服务（`service`）

#### 输入

##### 产品流

###### 放行后仓储包装电力（`service_electricity`）

仅计实际观测服务窗口并归原首次放行cohort的Q_o。保留期初期末成品实物和继承负荷、毛发运G、实际退回R及可追溯原发运冲回D_rev；水分、损失及维修变化须独立测量，不能假定质量相等。重验和交付不新增Q；重工须制造商或规格许可、工后检测及处置，水化或失败退货不能默用此未消化产品身份。 原生Product电力限中国1–35kV电网平均消费组合、到用户。其原生Net calorific value以MJ表达电能，不是燃料热量；计量kWh仅乘3.6一次。须匹配电压、地域、交付及供方损耗边界，其他电网或自发电另取相符身份和provider；原生通用合规文字不等于PCR批准。 精确参考属性 Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`; 参考单位 MJ. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：使用本行唯一计算的x_i结果；由 cp_service_electricity 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service_electricity`
- 来源：`jrc-ilcd-2010`

###### 放行后搬运柴油（`service_diesel`）

仅计实际观测服务窗口并归原首次放行cohort的Q_o。保留期初期末成品实物和继承负荷、毛发运G、实际退回R及可追溯原发运冲回D_rev；水分、损失及维修变化须独立测量，不能假定质量相等。重验和交付不新增Q；重工须制造商或规格许可、工后检测及处置，水化或失败退货不能默用此未消化产品身份。 原生Product/Mass柴油未限定牌号、配方、炼制路线、地域、密度、热值和provider；须匹配整份实际柴油及上游provider，不编这些参数。该流及其量不再另计一个热产品。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_service_diesel 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service_diesel`
- 来源：`jrc-ilcd-2010`

###### 放行后清理用水（`service_water`）

仅计实际观测服务窗口并归原首次放行cohort的Q_o。保留期初期末成品实物和继承负荷、毛发运G、实际退回R及可追溯原发运冲回D_rev；水分、损失及维修变化须独立测量，不能假定质量相等。重验和交付不新增Q；重工须制造商或规格许可、工后检测及处置，水化或失败退货不能默用此未消化产品身份。 原生Product/Mass工艺用水指经过处理的工业用水；新水、再生水、循环水等同义标签不使内部循环成为新采购。须确认处理、水质、液态、供水点及provider，不代指环境取水、液体排放或外购蒸汽。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_service_water 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service_water`
- 来源：`jrc-ilcd-2010`

###### 退回已放行白云石灰（`fg_return`）

仅计实际观测服务窗口并归原首次放行cohort的Q_o。保留期初期末成品实物和继承负荷、毛发运G、实际退回R及可追溯原发运冲回D_rev；水分、损失及维修变化须独立测量，不能假定质量相等。重验和交付不新增Q；重工须制造商或规格许可、工后检测及处置，水化或失败退货不能默用此未消化产品身份。 原生Product/Mass为厂内已制造的煅烧或团聚白云石产品族，未固定CAS、等级、粒度、组成或地域。本卡仅用于实际完全煅烧、未消化、非烧结回转窑白云石灰。其通用备注误写375混凝土水泥灰泥制品，与其他一致的37450身份不符；披露该元数据瑕疵但不改产品族。不能代指生碳酸盐、纯CaO或MgO、外购氧化物混合物、消化灰或成形耐火砖。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：锻烧或焙烧的白云石 `1d730977-86da-46c8-a0c6-ccf0d6ee02db`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_fg_return 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg_return`
- 来源：`jrc-ilcd-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 毛发运已放行白云石灰（`fg_dispatch`）

仅计实际观测服务窗口并归原首次放行cohort的Q_o。保留期初期末成品实物和继承负荷、毛发运G、实际退回R及可追溯原发运冲回D_rev；水分、损失及维修变化须独立测量，不能假定质量相等。重验和交付不新增Q；重工须制造商或规格许可、工后检测及处置，水化或失败退货不能默用此未消化产品身份。 原生Product/Mass为厂内已制造的煅烧或团聚白云石产品族，未固定CAS、等级、粒度、组成或地域。本卡仅用于实际完全煅烧、未消化、非烧结回转窑白云石灰。其通用备注误写375混凝土水泥灰泥制品，与其他一致的37450身份不符；披露该元数据瑕疵但不改产品族。不能代指生碳酸盐、纯CaO或MgO、外购氧化物混合物、消化灰或成形耐火砖。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：锻烧或焙烧的白云石 `1d730977-86da-46c8-a0c6-ccf0d6ee02db`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_fg_dispatch 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg_dispatch`
- 来源：`jrc-ilcd-2010`

##### 废物流

###### 退回煅烧白云石灰废料（`service_reject`）

实际拒收退货或搬运失败须保留原cohort向量及新增水料损失，不假设复烧即可恢复，不因出售扣负荷；实际服务排水和化学物种逐项新增后再使用数据集。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：退回煅烧白云石灰废料
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_service_reject 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service_reject`
- 来源：`jrc-ilcd-2010`

##### 基本流

### 过程：单一包装实物账（`packaging`）

#### 输入

##### 产品流

###### 聚丙烯编织集装袋（`pp_purchase`）

本P卡记录这一相同物理制品的有偿采购，含单独或随货付费；首次非采购接收及真实退回分别用I和ER。仅在对应实物事件实际发生时记录单独新采购，区分制造供货与后续服务的真实cohort及上游owner。保留全部六个互斥实物流腿和期初期末空置、附着WIP、附着FG及可重复使用存量。供货附带进入保留实物质量及唯一上游owner；内部再用抵消，不新增采购、Q或共产品；废弃物不作新Product且保留真实处理负荷。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：聚丙烯编织集装袋
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pp_purchase 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pp_purchase`
- 来源：`jrc-ilcd-2010`

###### 聚丙烯编织集装袋（`pp_supplier`）

本I卡记录这一相同物理制品的首次非采购接收，包括单独赠与、借用、租赁/周转池或未付费供方随附接收，排除P和真实ER。仅在真实首次非采购外部接收时记录此单一制品，实际使用另记，区分制造供货与后续服务的真实cohort及上游owner。保留全部六个互斥实物流腿和期初期末空置、附着WIP、附着FG及可重复使用存量。首次非采购外部入流保留实物质量及唯一上游owner；内部再用抵消，不新增采购、Q或共产品；废弃物不作新Product且保留真实处理负荷。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：聚丙烯编织集装袋
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pp_supplier 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pp_supplier`
- 来源：`jrc-ilcd-2010`

###### 聚丙烯编织集装袋（`pp_return_in`）

仅在对应实物事件实际发生时记录接收外部退回，区分制造供货与后续服务的真实cohort及上游owner。保留全部六个互斥实物流腿和期初期末空置、附着WIP、附着FG及可重复使用存量。供货附带进入保留实物质量及唯一上游owner；内部再用抵消，不新增采购、Q或共产品；废弃物不作新Product且保留真实处理负荷。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：聚丙烯编织集装袋
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pp_return_in 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pp_return_in`
- 来源：`jrc-ilcd-2010`

###### 聚乙烯薄膜（`pe_purchase`）

本P卡记录这一相同物理制品的有偿采购，含单独或随货付费；首次非采购接收及真实退回分别用I和ER。仅在对应实物事件实际发生时记录单独新采购，区分制造供货与后续服务的真实cohort及上游owner。保留全部六个互斥实物流腿和期初期末空置、附着WIP、附着FG及可重复使用存量。供货附带进入保留实物质量及唯一上游owner；内部再用抵消，不新增采购、Q或共产品；废弃物不作新Product且保留真实处理负荷。 原生Product/Mass聚乙烯薄膜CAS9002-88-4为厂内薄膜，未限定厚度、支链或牌号。分类误落箱包皮革制品，保留一致的PE薄膜实物身份；备注的PET仅为竞争聚合物，不是本材料。仅匹配实际单一PE薄膜，不代指复合袋、PP、树脂或废物。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pe_purchase 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pe_purchase`
- 来源：`jrc-ilcd-2010`

###### 聚乙烯薄膜（`pe_supplier`）

本I卡记录这一相同物理制品的首次非采购接收，包括单独赠与、借用、租赁/周转池或未付费供方随附接收，排除P和真实ER。仅在真实首次非采购外部接收时记录此单一制品，实际使用另记，区分制造供货与后续服务的真实cohort及上游owner。保留全部六个互斥实物流腿和期初期末空置、附着WIP、附着FG及可重复使用存量。首次非采购外部入流保留实物质量及唯一上游owner；内部再用抵消，不新增采购、Q或共产品；废弃物不作新Product且保留真实处理负荷。 原生Product/Mass聚乙烯薄膜CAS9002-88-4为厂内薄膜，未限定厚度、支链或牌号。分类误落箱包皮革制品，保留一致的PE薄膜实物身份；备注的PET仅为竞争聚合物，不是本材料。仅匹配实际单一PE薄膜，不代指复合袋、PP、树脂或废物。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pe_supplier 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pe_supplier`
- 来源：`jrc-ilcd-2010`

###### 聚乙烯薄膜（`pe_return_in`）

仅在对应实物事件实际发生时记录接收外部退回，区分制造供货与后续服务的真实cohort及上游owner。保留全部六个互斥实物流腿和期初期末空置、附着WIP、附着FG及可重复使用存量。供货附带进入保留实物质量及唯一上游owner；内部再用抵消，不新增采购、Q或共产品；废弃物不作新Product且保留真实处理负荷。 原生Product/Mass聚乙烯薄膜CAS9002-88-4为厂内薄膜，未限定厚度、支链或牌号。分类误落箱包皮革制品，保留一致的PE薄膜实物身份；备注的PET仅为竞争聚合物，不是本材料。仅匹配实际单一PE薄膜，不代指复合袋、PP、树脂或废物。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pe_return_in 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pe_return_in`
- 来源：`jrc-ilcd-2010`

###### 木质运输托盘（`wood_purchase`）

本P卡记录这一相同物理制品的有偿采购，含单独或随货付费；首次非采购接收及真实退回分别用I和ER。仅在对应实物事件实际发生时记录单独新采购，区分制造供货与后续服务的真实cohort及上游owner。保留全部六个互斥实物流腿和期初期末空置、附着WIP、附着FG及可重复使用存量。供货附带进入保留实物质量及唯一上游owner；内部再用抵消，不新增采购、Q或共产品；废弃物不作新Product且保留真实处理负荷。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：木质运输托盘
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_wood_purchase 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wood_purchase`
- 来源：`jrc-ilcd-2010`

###### 木质运输托盘（`wood_supplier`）

本I卡记录这一相同物理制品的首次非采购接收，包括单独赠与、借用、租赁/周转池或未付费供方随附接收，排除P和真实ER。仅在真实首次非采购外部接收时记录此单一制品，实际使用另记，区分制造供货与后续服务的真实cohort及上游owner。保留全部六个互斥实物流腿和期初期末空置、附着WIP、附着FG及可重复使用存量。首次非采购外部入流保留实物质量及唯一上游owner；内部再用抵消，不新增采购、Q或共产品；废弃物不作新Product且保留真实处理负荷。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：木质运输托盘
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_wood_supplier 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wood_supplier`
- 来源：`jrc-ilcd-2010`

###### 木质运输托盘（`wood_return_in`）

仅在对应实物事件实际发生时记录接收外部退回，区分制造供货与后续服务的真实cohort及上游owner。保留全部六个互斥实物流腿和期初期末空置、附着WIP、附着FG及可重复使用存量。供货附带进入保留实物质量及唯一上游owner；内部再用抵消，不新增采购、Q或共产品；废弃物不作新Product且保留真实处理负荷。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：木质运输托盘
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_wood_return_in 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wood_return_in`
- 来源：`jrc-ilcd-2010`

###### 实际包装维修木料 (`pack_repair_wood`)

仅实际包装维修另供的替换木料/木板，不是整托盘或假定配方。记录木种、处理、干物质、游离/吸附水、保管归属及唯一所有者；实际其他紧固件/胶逐项另列。仅实际独立分测且不重叠的实物腿作交换；已被同侧另一总表/收集总量包含时只留互斥原始来源用途子账，不叠交换/供方。保留真实留库入流及完整期末湿存量；缺量保持未知。 本腿由真实独立测量制造Q或原Q_o/H归属，不假维修、用量或制品组成。

- 选定流：实际包装维修木料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pack_repair_wood 采未除原量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack_repair_wood
- 来源：`jrc-clm-bref-2013`; `jrc-ilcd-2010`

###### 实际处理后包装工艺用水 (`pack_repair_water`)

仅包装清洗/维修真实供入工艺用水，记录真实状态与供方，不假定煅烧白云石水化；已含于service_water总表时仅留互斥用途来源子账，不另叠交换/采购。仅实际独立分测且不重叠的实物腿作交换；已被同侧另一总表/收集总量包含时只留互斥原始来源用途子账，不叠交换/供方。保留真实留库入流及完整期末湿存量；缺量保持未知。 原生Product/Mass处理后工业用水，须真实液态等级/处理/供应点/供方；内循环非新供入，不代环境取水或蒸汽。 本腿由真实独立测量制造Q或原Q_o/H归属，不假维修、用量或制品组成。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pack_repair_water 采未除原量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack_repair_water
- 来源：`jrc-clm-bref-2013`; `jrc-ilcd-2010`

##### 废物流

##### 基本流

###### 进入包装的环境水蒸气 (`pack_humidity_in`)

原H_c内普通储存/搬运或实际作业中环境空气普通H2O蒸气进入包装的独立实测量，记录真实相态/状态和库存变化；不要求维修事件，不假湿度或密度。不是外购水或整湿件已含水。仅实际独立分测且不重叠的实物腿作交换；已被同侧另一总表/收集总量包含时只留互斥原始来源用途子账，不叠交换/供方。保留真实留库入流及完整期末湿存量；缺量保持未知。 本腿由真实独立测量制造Q或原Q_o/H归属，不假维修、用量或制品组成。

- 选定流：进入包装的环境水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pack_humidity_in 采未除原量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack_humidity_in
- 来源：`jrc-clm-bref-2013`; `jrc-ilcd-2010`

#### 输出

##### 产品流

###### 聚丙烯编织集装袋（`pp_gross_out`）

仅在对应实物事件实际发生时记录随毛实物发运外出，区分制造供货与后续服务的真实cohort及上游owner。保留全部六个互斥实物流腿和期初期末空置、附着WIP、附着FG及可重复使用存量。供货附带进入保留实物质量及唯一上游owner；内部再用抵消，不新增采购、Q或共产品；废弃物不作新Product且保留真实处理负荷。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：聚丙烯编织集装袋
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pp_gross_out 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pp_gross_out`
- 来源：`jrc-ilcd-2010`

###### 聚丙烯编织集装袋（`pp_return_out`）

仅在对应实物事件实际发生时记录单独对外返还，区分制造供货与后续服务的真实cohort及上游owner。保留全部六个互斥实物流腿和期初期末空置、附着WIP、附着FG及可重复使用存量。供货附带进入保留实物质量及唯一上游owner；内部再用抵消，不新增采购、Q或共产品；废弃物不作新Product且保留真实处理负荷。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：聚丙烯编织集装袋
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pp_return_out 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pp_return_out`
- 来源：`jrc-ilcd-2010`

###### 聚乙烯薄膜（`pe_gross_out`）

仅在对应实物事件实际发生时记录随毛实物发运外出，区分制造供货与后续服务的真实cohort及上游owner。保留全部六个互斥实物流腿和期初期末空置、附着WIP、附着FG及可重复使用存量。供货附带进入保留实物质量及唯一上游owner；内部再用抵消，不新增采购、Q或共产品；废弃物不作新Product且保留真实处理负荷。 原生Product/Mass聚乙烯薄膜CAS9002-88-4为厂内薄膜，未限定厚度、支链或牌号。分类误落箱包皮革制品，保留一致的PE薄膜实物身份；备注的PET仅为竞争聚合物，不是本材料。仅匹配实际单一PE薄膜，不代指复合袋、PP、树脂或废物。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pe_gross_out 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pe_gross_out`
- 来源：`jrc-ilcd-2010`

###### 聚乙烯薄膜（`pe_return_out`）

仅在对应实物事件实际发生时记录单独对外返还，区分制造供货与后续服务的真实cohort及上游owner。保留全部六个互斥实物流腿和期初期末空置、附着WIP、附着FG及可重复使用存量。供货附带进入保留实物质量及唯一上游owner；内部再用抵消，不新增采购、Q或共产品；废弃物不作新Product且保留真实处理负荷。 原生Product/Mass聚乙烯薄膜CAS9002-88-4为厂内薄膜，未限定厚度、支链或牌号。分类误落箱包皮革制品，保留一致的PE薄膜实物身份；备注的PET仅为竞争聚合物，不是本材料。仅匹配实际单一PE薄膜，不代指复合袋、PP、树脂或废物。 精确参考属性 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg. 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pe_return_out 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pe_return_out`
- 来源：`jrc-ilcd-2010`

###### 木质运输托盘（`wood_gross_out`）

仅在对应实物事件实际发生时记录随毛实物发运外出，区分制造供货与后续服务的真实cohort及上游owner。保留全部六个互斥实物流腿和期初期末空置、附着WIP、附着FG及可重复使用存量。供货附带进入保留实物质量及唯一上游owner；内部再用抵消，不新增采购、Q或共产品；废弃物不作新Product且保留真实处理负荷。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：木质运输托盘
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_wood_gross_out 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wood_gross_out`
- 来源：`jrc-ilcd-2010`

###### 木质运输托盘（`wood_return_out`）

仅在对应实物事件实际发生时记录单独对外返还，区分制造供货与后续服务的真实cohort及上游owner。保留全部六个互斥实物流腿和期初期末空置、附着WIP、附着FG及可重复使用存量。供货附带进入保留实物质量及唯一上游owner；内部再用抵消，不新增采购、Q或共产品；废弃物不作新Product且保留真实处理负荷。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：木质运输托盘
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_wood_return_out 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wood_return_out`
- 来源：`jrc-ilcd-2010`

##### 废物流

###### 聚丙烯编织集装袋（`pp_waste`）

仅在对应实物事件实际发生时记录废弃制品，区分制造供货与后续服务的真实cohort及上游owner。保留全部六个互斥实物流腿和期初期末空置、附着WIP、附着FG及可重复使用存量。供货附带进入保留实物质量及唯一上游owner；内部再用抵消，不新增采购、Q或共产品；废弃物不作新Product且保留真实处理负荷。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：聚丙烯编织集装袋
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pp_waste 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pp_waste`
- 来源：`jrc-ilcd-2010`

###### 聚乙烯薄膜（`pe_waste`）

仅在对应实物事件实际发生时记录废弃制品，区分制造供货与后续服务的真实cohort及上游owner。保留全部六个互斥实物流腿和期初期末空置、附着WIP、附着FG及可重复使用存量。供货附带进入保留实物质量及唯一上游owner；内部再用抵消，不新增采购、Q或共产品；废弃物不作新Product且保留真实处理负荷。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：聚乙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pe_waste 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pe_waste`
- 来源：`jrc-ilcd-2010`

###### 木质运输托盘（`wood_waste`）

仅在对应实物事件实际发生时记录废弃制品，区分制造供货与后续服务的真实cohort及上游owner。保留全部六个互斥实物流腿和期初期末空置、附着WIP、附着FG及可重复使用存量。供货附带进入保留实物质量及唯一上游owner；内部再用抵消，不新增采购、Q或共产品；废弃物不作新Product且保留真实处理负荷。 具体原子身份未绑定UUID，须匹配实际形态路线介质type与provider后再用于具体数据集。 数量衔接：本行的x_i仅是calc_reference同一次结果；由本行协议采未除原量，经calc_raw_conversion、calc_history及真实分配后生成，同一1kg参考基准，不是逐件转kg，之后不得再除。

- 选定流：木质运输托盘
- 流属性/单位：Mass / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_wood_waste 采未除原量。
- 数值来源模式：由采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wood_waste`
- 来源：`jrc-ilcd-2010`

###### 拆除包装维修木料 (`pack_removed_wood`)

仅包装维修真实拆除旧木料/部件，独立测干物质/水/污染及去向；不重复整托盘W出口，不自动负荷外转/信用。仅实际独立分测且不重叠的实物腿作交换；已被同侧另一总表/收集总量包含时只留互斥原始来源用途子账，不叠交换/供方。保留真实留库入流及完整期末湿存量；缺量保持未知。 本腿由真实独立测量制造Q或原Q_o/H归属，不假维修、用量或制品组成。

- 选定流：拆除包装维修木料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pack_removed_wood 采未除原量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack_removed_wood
- 来源：`jrc-clm-bref-2013`; `jrc-ilcd-2010`

###### 实际包装清洗废水 (`pack_repair_wastewater`)

实际独立收集的包装清洗/维修废水，测整湿质量、载水及溶解/悬浮物，记录处理与保管归属；不是直接环境淡水或COD分子，也非留存水或蒸气。仅实际独立分测且不重叠的实物腿作交换；已被同侧另一总表/收集总量包含时只留互斥原始来源用途子账，不叠交换/供方。保留真实留库入流及完整期末湿存量；缺量保持未知。 本腿由真实独立测量制造Q或原Q_o/H归属，不假维修、用量或制品组成。

- 选定流：实际包装清洗废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pack_repair_wastewater 采未除原量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack_repair_wastewater
- 来源：`jrc-clm-bref-2013`; `jrc-ilcd-2010`

##### 基本流

###### 水蒸气 (`pack_water_vapour`)

仅原H_c内普通储存/搬运解吸或蒸发及真实清洗/维修/干燥向实际未指定空气排放的普通分子气态H2O CAS7732-18-5，无需维修事件。区分入空气湿度、滞留液态/结合水及废水；不代重水/同位素/冰/醚或液态。原生Mass/kg，不假蒸发比例。仅实际独立分测且不重叠的实物腿作交换；已被同侧另一总表/收集总量包含时只留互斥原始来源用途子账，不叠交换/供方。保留真实留库入流及完整期末湿存量；缺量保持未知。 本腿由真实独立测量制造Q或原Q_o/H归属，不假维修、用量或制品组成。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行唯一计算的x_i结果；由 cp_pack_water_vapour 采未除原量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_pack_water_vapour
- 来源：`jrc-clm-bref-2013`; `jrc-ilcd-2010`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all inventory rows | 仅用于已声明需要分配的归因情形，先按真实支路计量、批次记录及有技术依据的边际变化，对专属工序直接归属，并作实际或虚拟细分；保留未分配清单、分母及实物账。工业制造说明不建立LCA分配方法。 | `jrc-ilcd-2010` |
| allocation_causality | joint exchanges | 对每个剩余交换识别实际共输出功能变化与该投入排放之间的决定性物理因果关系，区分与产品相关的碳酸盐碳及与工序相关的燃烧空载服务作用。不任意选择质量、能量或经济份额，不对全部交换套一个比例；保留因果证据和不确定性。 | `jrc-ilcd-2010` |
| allocation_residual | residual joint exchanges | 仅在逐项记录剩余交换无法确立决定性物理因果后，采用共同工序门实际数量状态的同期代表性市场价值。剔除下游处理包装运输价格影响以还原该门，保留敏感性与缺失值不确定性。不设固定比例、自动共产品、替代避矿物避处置碳化信用，也不因窑尘废品废金属出售扣负荷。真实独立产品功能转移须有规格去向数量及正当分配，实物总质量始终保留。 | `jrc-ilcd-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_raw_feed | manufacture | raw_feed | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o；每项原料/WIP/未分配非WIP期初期末实物数量及每个继承交换向量；毛量或已净耗用基准；全部已含存量修正 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_mfg_electricity | manufacture | mfg_electricity | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | MJ | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_natural_gas | manufacture | natural_gas | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | MJ | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_diesel | manufacture | diesel | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_water_makeup | manufacture | water_makeup | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pulverized_coal | manufacture | pulverized_coal | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_cooling_water_in | manufacture | cooling_water_in | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_cooling_water_return | manufacture | cooling_water_return | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_air_n2_in | manufacture | air_n2_in | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_air_o2_in | manufacture | air_o2_in | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_air_ar_in | manufacture | air_ar_in | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_air_h2o_in | manufacture | air_h2o_in | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_air_co2_in | manufacture | air_co2_in | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_final_product | manufacture | final_product | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 校准秤逐批称首次合格裸成品，扣真实包装皮重；独立检测Ca/Mg物相、残碳酸盐、游离水、粒度及实际等级；唯一批号证明首次Q，期末FG已含Q。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_raw_reject | manufacture | raw_reject | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_calcined_reject | manufacture | calcined_reject | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_captured_dust | manufacture | captured_dust | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_wash_cake | manufacture | wash_cake | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_scrubber_sludge | manufacture | scrubber_sludge | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_wastewater | manufacture | wastewater | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_calcination_co2 | manufacture | calcination_co2 | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_combustion_co2 | manufacture | combustion_co2 | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_nitric_oxide | manufacture | nitric_oxide | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_nitrogen_dioxide | manufacture | nitrogen_dioxide | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_sulfur_dioxide | manufacture | sulfur_dioxide | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_carbon_monoxide | manufacture | carbon_monoxide | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_methane | manufacture | methane | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_calcium_oxide_dust | manufacture | calcium_oxide_dust | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_magnesium_oxide_dust | manufacture | magnesium_oxide_dust | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_calcium_carbonate_dust | manufacture | calcium_carbonate_dust | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_dolomite_dust | manufacture | dolomite_dust | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_feed_evaporation | manufacture | feed_evaporation | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_combustion_water | manufacture | combustion_water | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_process_evaporation | manufacture | process_evaporation | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_humidity_out | manufacture | humidity_out | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_air_n2_out | manufacture | air_n2_out | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_air_o2_out | manufacture | air_o2_out | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_air_ar_out | manufacture | air_ar_out | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_ambient_co2_out | manufacture | ambient_co2_out | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_kiln_asset | assets | kiln_asset | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | item | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_kiln_retired | assets | kiln_retired | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | item | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_steel_repair_new | assets | steel_repair_new | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_steel_repair_old | assets | steel_repair_old | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_lining_new | assets | lining_new | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_lining_old | assets | lining_old | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_oil_new | assets | oil_new | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_oil_old | assets | oil_old | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_filter_new | assets | filter_new | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_filter_old | assets | filter_old | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_service_electricity | service | service_electricity | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 观测窗口; 原cohort的Q_o和已执行服务; G; R; D_rev; 新增水料; 获准重工及工后检测处置 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | MJ | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_service_diesel | service | service_diesel | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 观测窗口; 原cohort的Q_o和已执行服务; G; R; D_rev; 新增水料; 获准重工及工后检测处置 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_service_water | service | service_water | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 观测窗口; 原cohort的Q_o和已执行服务; G; R; D_rev; 新增水料; 获准重工及工后检测处置 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_fg_return | service | fg_return | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 观测窗口; 原cohort的Q_o和已执行服务; G; R; D_rev; 新增水料; 获准重工及工后检测处置 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_fg_dispatch | service | fg_dispatch | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 观测窗口; 原cohort的Q_o和已执行服务; G; R; D_rev; 新增水料; 获准重工及工后检测处置 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_service_reject | service | service_reject | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 观测窗口; 原cohort的Q_o和已执行服务; G; R; D_rev; 新增水料; 获准重工及工后检测处置 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pp_purchase | packaging | pp_purchase | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 期初期末空包装附着WIP附着FG可再用; 单独新采购; 供货附带进入; 外部退回接收; 随毛发运外出; 单独外返; 废物; 新旧维修与水分；真实互不重叠X_in/X_out干组分和游离/结合水变化；来源/相态/去向；只对其他流项去重绝不与存量去重；留存流入和完整湿存量；整件湿态接收/外流只计一次；实际修理许可/检测/验收/处置 ；包装P/I/ER来源与付费/非采购依据；同件原外发ID；继承服务所有者及向量 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。  包装接收按packaging_receipt_basis，单独非采购接收归I，不能虚构ER或X。| kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pp_supplier | packaging | pp_supplier | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 期初期末空包装附着WIP附着FG可再用; 单独新采购; 供货附带进入; 外部退回接收; 随毛发运外出; 单独外返; 废物; 新旧维修与水分；真实互不重叠X_in/X_out干组分和游离/结合水变化；来源/相态/去向；只对其他流项去重绝不与存量去重；留存流入和完整湿存量；整件湿态接收/外流只计一次；实际修理许可/检测/验收/处置 ；包装P/I/ER来源与付费/非采购依据；同件原外发ID；继承服务所有者及向量 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。  包装接收按packaging_receipt_basis，单独非采购接收归I，不能虚构ER或X。| kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pp_return_in | packaging | pp_return_in | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 期初期末空包装附着WIP附着FG可再用; 单独新采购; 供货附带进入; 外部退回接收; 随毛发运外出; 单独外返; 废物; 新旧维修与水分；真实互不重叠X_in/X_out干组分和游离/结合水变化；来源/相态/去向；只对其他流项去重绝不与存量去重；留存流入和完整湿存量；整件湿态接收/外流只计一次；实际修理许可/检测/验收/处置 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pp_gross_out | packaging | pp_gross_out | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 期初期末空包装附着WIP附着FG可再用; 单独新采购; 供货附带进入; 外部退回接收; 随毛发运外出; 单独外返; 废物; 新旧维修与水分；真实互不重叠X_in/X_out干组分和游离/结合水变化；来源/相态/去向；只对其他流项去重绝不与存量去重；留存流入和完整湿存量；整件湿态接收/外流只计一次；实际修理许可/检测/验收/处置 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pp_return_out | packaging | pp_return_out | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 期初期末空包装附着WIP附着FG可再用; 单独新采购; 供货附带进入; 外部退回接收; 随毛发运外出; 单独外返; 废物; 新旧维修与水分；真实互不重叠X_in/X_out干组分和游离/结合水变化；来源/相态/去向；只对其他流项去重绝不与存量去重；留存流入和完整湿存量；整件湿态接收/外流只计一次；实际修理许可/检测/验收/处置 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pp_waste | packaging | pp_waste | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 期初期末空包装附着WIP附着FG可再用; 单独新采购; 供货附带进入; 外部退回接收; 随毛发运外出; 单独外返; 废物; 新旧维修与水分；真实互不重叠X_in/X_out干组分和游离/结合水变化；来源/相态/去向；只对其他流项去重绝不与存量去重；留存流入和完整湿存量；整件湿态接收/外流只计一次；实际修理许可/检测/验收/处置 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pe_purchase | packaging | pe_purchase | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 期初期末空包装附着WIP附着FG可再用; 单独新采购; 供货附带进入; 外部退回接收; 随毛发运外出; 单独外返; 废物; 新旧维修与水分；真实互不重叠X_in/X_out干组分和游离/结合水变化；来源/相态/去向；只对其他流项去重绝不与存量去重；留存流入和完整湿存量；整件湿态接收/外流只计一次；实际修理许可/检测/验收/处置 ；包装P/I/ER来源与付费/非采购依据；同件原外发ID；继承服务所有者及向量 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。  包装接收按packaging_receipt_basis，单独非采购接收归I，不能虚构ER或X。| kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pe_supplier | packaging | pe_supplier | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 期初期末空包装附着WIP附着FG可再用; 单独新采购; 供货附带进入; 外部退回接收; 随毛发运外出; 单独外返; 废物; 新旧维修与水分；真实互不重叠X_in/X_out干组分和游离/结合水变化；来源/相态/去向；只对其他流项去重绝不与存量去重；留存流入和完整湿存量；整件湿态接收/外流只计一次；实际修理许可/检测/验收/处置 ；包装P/I/ER来源与付费/非采购依据；同件原外发ID；继承服务所有者及向量 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。  包装接收按packaging_receipt_basis，单独非采购接收归I，不能虚构ER或X。| kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pe_return_in | packaging | pe_return_in | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 期初期末空包装附着WIP附着FG可再用; 单独新采购; 供货附带进入; 外部退回接收; 随毛发运外出; 单独外返; 废物; 新旧维修与水分；真实互不重叠X_in/X_out干组分和游离/结合水变化；来源/相态/去向；只对其他流项去重绝不与存量去重；留存流入和完整湿存量；整件湿态接收/外流只计一次；实际修理许可/检测/验收/处置 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pe_gross_out | packaging | pe_gross_out | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 期初期末空包装附着WIP附着FG可再用; 单独新采购; 供货附带进入; 外部退回接收; 随毛发运外出; 单独外返; 废物; 新旧维修与水分；真实互不重叠X_in/X_out干组分和游离/结合水变化；来源/相态/去向；只对其他流项去重绝不与存量去重；留存流入和完整湿存量；整件湿态接收/外流只计一次；实际修理许可/检测/验收/处置 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pe_return_out | packaging | pe_return_out | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 期初期末空包装附着WIP附着FG可再用; 单独新采购; 供货附带进入; 外部退回接收; 随毛发运外出; 单独外返; 废物; 新旧维修与水分；真实互不重叠X_in/X_out干组分和游离/结合水变化；来源/相态/去向；只对其他流项去重绝不与存量去重；留存流入和完整湿存量；整件湿态接收/外流只计一次；实际修理许可/检测/验收/处置 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pe_waste | packaging | pe_waste | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 期初期末空包装附着WIP附着FG可再用; 单独新采购; 供货附带进入; 外部退回接收; 随毛发运外出; 单独外返; 废物; 新旧维修与水分；真实互不重叠X_in/X_out干组分和游离/结合水变化；来源/相态/去向；只对其他流项去重绝不与存量去重；留存流入和完整湿存量；整件湿态接收/外流只计一次；实际修理许可/检测/验收/处置 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_wood_purchase | packaging | wood_purchase | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 期初期末空包装附着WIP附着FG可再用; 单独新采购; 供货附带进入; 外部退回接收; 随毛发运外出; 单独外返; 废物; 新旧维修与水分；真实互不重叠X_in/X_out干组分和游离/结合水变化；来源/相态/去向；只对其他流项去重绝不与存量去重；留存流入和完整湿存量；整件湿态接收/外流只计一次；实际修理许可/检测/验收/处置 ；包装P/I/ER来源与付费/非采购依据；同件原外发ID；继承服务所有者及向量 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。  包装接收按packaging_receipt_basis，单独非采购接收归I，不能虚构ER或X。| kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_wood_supplier | packaging | wood_supplier | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 期初期末空包装附着WIP附着FG可再用; 单独新采购; 供货附带进入; 外部退回接收; 随毛发运外出; 单独外返; 废物; 新旧维修与水分；真实互不重叠X_in/X_out干组分和游离/结合水变化；来源/相态/去向；只对其他流项去重绝不与存量去重；留存流入和完整湿存量；整件湿态接收/外流只计一次；实际修理许可/检测/验收/处置 ；包装P/I/ER来源与付费/非采购依据；同件原外发ID；继承服务所有者及向量 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。  包装接收按packaging_receipt_basis，单独非采购接收归I，不能虚构ER或X。| kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_wood_return_in | packaging | wood_return_in | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 期初期末空包装附着WIP附着FG可再用; 单独新采购; 供货附带进入; 外部退回接收; 随毛发运外出; 单独外返; 废物; 新旧维修与水分；真实互不重叠X_in/X_out干组分和游离/结合水变化；来源/相态/去向；只对其他流项去重绝不与存量去重；留存流入和完整湿存量；整件湿态接收/外流只计一次；实际修理许可/检测/验收/处置 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_wood_gross_out | packaging | wood_gross_out | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 期初期末空包装附着WIP附着FG可再用; 单独新采购; 供货附带进入; 外部退回接收; 随毛发运外出; 单独外返; 废物; 新旧维修与水分；真实互不重叠X_in/X_out干组分和游离/结合水变化；来源/相态/去向；只对其他流项去重绝不与存量去重；留存流入和完整湿存量；整件湿态接收/外流只计一次；实际修理许可/检测/验收/处置 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_wood_return_out | packaging | wood_return_out | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 期初期末空包装附着WIP附着FG可再用; 单独新采购; 供货附带进入; 外部退回接收; 随毛发运外出; 单独外返; 废物; 新旧维修与水分；真实互不重叠X_in/X_out干组分和游离/结合水变化；来源/相态/去向；只对其他流项去重绝不与存量去重；留存流入和完整湿存量；整件湿态接收/外流只计一次；实际修理许可/检测/验收/处置 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_wood_waste | packaging | wood_waste | foreground_record | 日期; 场址; 批次cohort; 供方与上游owner; 实际形态组分温压; 原仪表单位; 未除原始量; 校准; 期初期末完整湿质量和每交换继承向量; 外部进入退出和X去重对应行; 独立物相分子及游离结构反应水证据; 实际分配依据; 原Q或Q_o; 期初期末空包装附着WIP附着FG可再用; 单独新采购; 供货附带进入; 外部退回接收; 随毛发运外出; 单独外返; 废物; 新旧维修与水分；真实互不重叠X_in/X_out干组分和游离/结合水变化；来源/相态/去向；只对其他流项去重绝不与存量去重；留存流入和完整湿存量；整件湿态接收/外流只计一次；实际修理许可/检测/验收/处置 | 按本卡具体角色称重、分支计量、校准原记录及独立相符物种采样；以原始状态和单位保留，未除Q。气体浓度与干湿体积配对，真实速率才积分；每种实物流腿互斥，未来未知不作零。 汇总方法：只汇总未除原量，换算、历史核对及真实分配后，仅由calc_reference生成一次每参考量；aggregation_rule仅标最终展示基准，不执行第二次归一。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pack_repair_wood | packaging | pack_repair_wood | foreground_record | 实际制品及相态；原Q/Q_o和实测H；分立真实木/料/水/蒸汽输入或移除出口；毛湿量及独立干物质/水量；无需维修的普通储存搬运区间；真实作业授权/结果；后检验/验收/处置；保管归属；既有总表/收集总量及非叠加来源用途重叠；供方归属 | 独立测本具体实物方向与相态；已含于同侧另一总表/收集的来源用途子项仅原始备忘，不叠LCA交换/供方。保留留库入流与整湿closing、来源W/出口总量或分量二选一、原批次历史及所有真实未批准/失败作业。不假维修、湿度、密度、干木或件重，仅用calc_reference唯一结果。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pack_repair_water | packaging | pack_repair_water | foreground_record | 实际制品及相态；原Q/Q_o和实测H；分立真实木/料/水/蒸汽输入或移除出口；毛湿量及独立干物质/水量；无需维修的普通储存搬运区间；真实作业授权/结果；后检验/验收/处置；保管归属；既有总表/收集总量及非叠加来源用途重叠；供方归属 | 独立测本具体实物方向与相态；已含于同侧另一总表/收集的来源用途子项仅原始备忘，不叠LCA交换/供方。保留留库入流与整湿closing、来源W/出口总量或分量二选一、原批次历史及所有真实未批准/失败作业。不假维修、湿度、密度、干木或件重，仅用calc_reference唯一结果。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pack_humidity_in | packaging | pack_humidity_in | foreground_record | 实际制品及相态；原Q/Q_o和实测H；分立真实木/料/水/蒸汽输入或移除出口；毛湿量及独立干物质/水量；无需维修的普通储存搬运区间；真实作业授权/结果；后检验/验收/处置；保管归属；既有总表/收集总量及非叠加来源用途重叠；供方归属 | 独立测本具体实物方向与相态；已含于同侧另一总表/收集的来源用途子项仅原始备忘，不叠LCA交换/供方。保留留库入流与整湿closing、来源W/出口总量或分量二选一、原批次历史及所有真实未批准/失败作业。不假维修、湿度、密度、干木或件重，仅用calc_reference唯一结果。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pack_removed_wood | packaging | pack_removed_wood | foreground_record | 实际制品及相态；原Q/Q_o和实测H；分立真实木/料/水/蒸汽输入或移除出口；毛湿量及独立干物质/水量；无需维修的普通储存搬运区间；真实作业授权/结果；后检验/验收/处置；保管归属；既有总表/收集总量及非叠加来源用途重叠；供方归属 | 独立测本具体实物方向与相态；已含于同侧另一总表/收集的来源用途子项仅原始备忘，不叠LCA交换/供方。保留留库入流与整湿closing、来源W/出口总量或分量二选一、原批次历史及所有真实未批准/失败作业。不假维修、湿度、密度、干木或件重，仅用calc_reference唯一结果。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pack_repair_wastewater | packaging | pack_repair_wastewater | foreground_record | 实际制品及相态；原Q/Q_o和实测H；分立真实木/料/水/蒸汽输入或移除出口；毛湿量及独立干物质/水量；无需维修的普通储存搬运区间；真实作业授权/结果；后检验/验收/处置；保管归属；既有总表/收集总量及非叠加来源用途重叠；供方归属 | 独立测本具体实物方向与相态；已含于同侧另一总表/收集的来源用途子项仅原始备忘，不叠LCA交换/供方。保留留库入流与整湿closing、来源W/出口总量或分量二选一、原批次历史及所有真实未批准/失败作业。不假维修、湿度、密度、干木或件重，仅用calc_reference唯一结果。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |
| cp_pack_water_vapour | packaging | pack_water_vapour | foreground_record | 实际制品及相态；原Q/Q_o和实测H；分立真实木/料/水/蒸汽输入或移除出口；毛湿量及独立干物质/水量；无需维修的普通储存搬运区间；真实作业授权/结果；后检验/验收/处置；保管归属；既有总表/收集总量及非叠加来源用途重叠；供方归属 | 独立测本具体实物方向与相态；已含于同侧另一总表/收集的来源用途子项仅原始备忘，不叠LCA交换/供方。保留留库入流与整湿closing、来源W/出口总量或分量二选一、原批次历史及所有真实未批准/失败作业。不假维修、湿度、密度、干木或件重，仅用calc_reference唯一结果。 | kg | 每次事件及期末核对 | 完整制造期含失败启停空载清理；服务另列真实窗口 | 同一场址和原cohort；上游及外部腿分别标识 | 每 1 kg 参考流 | 校准原记录; 独立取样化验; 供方SDS; 批号及向量审计; 平衡不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw_conversion | all inventory rows | 原始未除量仅换算一次到每行原生广延单位。kg不变，电力kWh乘3.6为MJ。天然气高位热值MJ与低位不同，按真实组分量热换算并另保留carrierMass，不再购一次燃料。item与Item(s)同物理单位、因子1，但不证明kg/item，须独立称同配置完整实物。体积按该物质实际温压组分的独立实测密度换算；仅真正速率积分，已积分气液体积不得再乘时间。 | cp_raw_feed; cp_mfg_electricity; cp_natural_gas; cp_diesel; cp_water_makeup; cp_pulverized_coal; cp_cooling_water_in; cp_cooling_water_return; cp_air_n2_in; cp_air_o2_in; cp_air_ar_in; cp_air_h2o_in; cp_air_co2_in; cp_final_product; cp_raw_reject; cp_calcined_reject; cp_captured_dust; cp_wash_cake; cp_scrubber_sludge; cp_wastewater; cp_calcination_co2; cp_combustion_co2; cp_nitric_oxide; cp_nitrogen_dioxide; cp_sulfur_dioxide; cp_carbon_monoxide; cp_methane; cp_calcium_oxide_dust; cp_magnesium_oxide_dust; cp_calcium_carbonate_dust; cp_dolomite_dust; cp_feed_evaporation; cp_combustion_water; cp_process_evaporation; cp_humidity_out; cp_air_n2_out; cp_air_o2_out; cp_air_ar_out; cp_ambient_co2_out; cp_kiln_asset; cp_kiln_retired; cp_steel_repair_new; cp_steel_repair_old; cp_lining_new; cp_lining_old; cp_oil_new; cp_oil_old; cp_filter_new; cp_filter_old; cp_service_electricity; cp_service_diesel; cp_service_water; cp_fg_return; cp_fg_dispatch; cp_service_reject; cp_pp_purchase; cp_pp_supplier; cp_pp_return_in; cp_pp_gross_out; cp_pp_return_out; cp_pp_waste; cp_pe_purchase; cp_pe_supplier; cp_pe_return_in; cp_pe_gross_out; cp_pe_return_out; cp_pe_waste; cp_wood_purchase; cp_wood_supplier; cp_wood_return_in; cp_wood_gross_out; cp_wood_return_out; cp_wood_waste; cp_pack_repair_wood; cp_pack_repair_water; cp_pack_humidity_in; cp_pack_removed_wood; cp_pack_repair_wastewater; cp_pack_water_vapour | converted undivided raw_i | `jrc-clm-bref-2013` |
| calc_history | all inventory rows | 逐交换向量核对期初继承负荷加真实归属新增和原cohort真实外返，等于期末未放行原料WIP负荷加首次放行cohort转移和真实其他去向。制造B_close仅含未放行原料WIP及独立核对未分配非WIPstores，绝不扣已在Q中的新增放行期末FG。归一前按第7节归属真实专属细分及剩余共享交换；保留失败零产出启停空载清理。X仅对其他项去重，真实进入即使全留完整湿态期末也不删。 实际归属新增采用这些相同存量修正前的当期毛入池基准；来源已是净耗用时，以独立接收/存量/移交重建相容毛入池量。X是真实独立实测互不重叠的流入/流出，仅对其他流入流出流项去重，绝不与存量去重；整件湿态接收或外流已含水料则仅在该流项计一次，不再重复加X。 仅作保管移动毛实物视图，包括实际FG/包装/资产/部件购入、移除或返还及真实外部冷却/热载体供应或产品凝结水/热水返还，A_i均为真实原生单位/状态下该具体腿独立实测完整毛V。此视图覆盖负荷库存归属，绝不取B_open+U-B_close、历史负荷、净消耗或经济/服务份额。仍用唯一Q或原Q_o及实测H商一次；另列真实供应/运行/处理/服务向量且一次所有者。载体kg/状态/T/P/焓和热MJ为同一真实约定供应方的不同维度，不作两次采购。实际返还/移动本身不生信用或额外水热采购；仅匹配内部循环抵消。 | cp_raw_feed; cp_mfg_electricity; cp_natural_gas; cp_diesel; cp_water_makeup; cp_pulverized_coal; cp_cooling_water_in; cp_cooling_water_return; cp_air_n2_in; cp_air_o2_in; cp_air_ar_in; cp_air_h2o_in; cp_air_co2_in; cp_final_product; cp_raw_reject; cp_calcined_reject; cp_captured_dust; cp_wash_cake; cp_scrubber_sludge; cp_wastewater; cp_calcination_co2; cp_combustion_co2; cp_nitric_oxide; cp_nitrogen_dioxide; cp_sulfur_dioxide; cp_carbon_monoxide; cp_methane; cp_calcium_oxide_dust; cp_magnesium_oxide_dust; cp_calcium_carbonate_dust; cp_dolomite_dust; cp_feed_evaporation; cp_combustion_water; cp_process_evaporation; cp_humidity_out; cp_air_n2_out; cp_air_o2_out; cp_air_ar_out; cp_ambient_co2_out; cp_kiln_asset; cp_kiln_retired; cp_steel_repair_new; cp_steel_repair_old; cp_lining_new; cp_lining_old; cp_oil_new; cp_oil_old; cp_filter_new; cp_filter_old; cp_service_electricity; cp_service_diesel; cp_service_water; cp_fg_return; cp_fg_dispatch; cp_service_reject; cp_pp_purchase; cp_pp_supplier; cp_pp_return_in; cp_pp_gross_out; cp_pp_return_out; cp_pp_waste; cp_pe_purchase; cp_pe_supplier; cp_pe_return_in; cp_pe_gross_out; cp_pe_return_out; cp_pe_waste; cp_wood_purchase; cp_wood_supplier; cp_wood_return_in; cp_wood_gross_out; cp_wood_return_out; cp_wood_waste; cp_pack_repair_wood; cp_pack_repair_water; cp_pack_humidity_in; cp_pack_removed_wood; cp_pack_repair_wastewater; cp_pack_water_vapour | A_i converted history-reconciled allocated undivided numerator | `jrc-ilcd-2010` |
| calc_reference | all inventory rows | x_i = A_i / Q; A_i为原首次放行cohort已换算、核对继承并真实分配但未除的分子；Q为该cohort唯一新增首次质量放行整份裸白云石灰净kg。Q>0仅除一次，Q=0保留全负荷及调查结转归属但无单位结果。独立观测后续服务以原Q_o代入同一公式，原已执行服务仅保留一次。卡片及协议汇总只引用同一结果，不再额外相除。 仅作保管移动毛实物视图，包括实际FG/包装/资产/部件购入、移除或返还及真实外部冷却/热载体供应或产品凝结水/热水返还，A_i均为真实原生单位/状态下该具体腿独立实测完整毛V。此视图覆盖负荷库存归属，绝不取B_open+U-B_close、历史负荷、净消耗或经济/服务份额。仍用唯一Q或原Q_o及实测H商一次；另列真实供应/运行/处理/服务向量且一次所有者。载体kg/状态/T/P/焓和热MJ为同一真实约定供应方的不同维度，不作两次采购。实际返还/移动本身不生信用或额外水热采购；仅匹配内部循环抵消。 | cp_raw_feed; cp_mfg_electricity; cp_natural_gas; cp_diesel; cp_water_makeup; cp_pulverized_coal; cp_cooling_water_in; cp_cooling_water_return; cp_air_n2_in; cp_air_o2_in; cp_air_ar_in; cp_air_h2o_in; cp_air_co2_in; cp_final_product; cp_raw_reject; cp_calcined_reject; cp_captured_dust; cp_wash_cake; cp_scrubber_sludge; cp_wastewater; cp_calcination_co2; cp_combustion_co2; cp_nitric_oxide; cp_nitrogen_dioxide; cp_sulfur_dioxide; cp_carbon_monoxide; cp_methane; cp_calcium_oxide_dust; cp_magnesium_oxide_dust; cp_calcium_carbonate_dust; cp_dolomite_dust; cp_feed_evaporation; cp_combustion_water; cp_process_evaporation; cp_humidity_out; cp_air_n2_out; cp_air_o2_out; cp_air_ar_out; cp_ambient_co2_out; cp_kiln_asset; cp_kiln_retired; cp_steel_repair_new; cp_steel_repair_old; cp_lining_new; cp_lining_old; cp_oil_new; cp_oil_old; cp_filter_new; cp_filter_old; cp_service_electricity; cp_service_diesel; cp_service_water; cp_fg_return; cp_fg_dispatch; cp_service_reject; cp_pp_purchase; cp_pp_supplier; cp_pp_return_in; cp_pp_gross_out; cp_pp_return_out; cp_pp_waste; cp_pe_purchase; cp_pe_supplier; cp_pe_return_in; cp_pe_gross_out; cp_pe_return_out; cp_pe_waste; cp_wood_purchase; cp_wood_supplier; cp_wood_return_in; cp_wood_gross_out; cp_wood_return_out; cp_wood_waste; cp_pack_repair_wood; cp_pack_repair_water; cp_pack_humidity_in; cp_pack_removed_wood; cp_pack_repair_wastewater; cp_pack_water_vapour | x_i per 1 kg reference flow | `jrc-ilcd-2010` |
| calc_physical | all inventory rows | 逐制造子门独立闭合湿态实物质量及相关元素：期初加真实外入，等于未放行期末加Q内部转移及其他实物总出口。FG服务：期初FG加内部Q、真实退回及新增水料，等于期末FG、毛发运及真实废物损失物种。合并门抵消内部Q及回用，不把Q与FG发运再当多一外部产品。另独立确认碳酸盐转化残余物相、分子气体、燃料氢燃烧水、游离水及真实结构水变化；烧减或一个质量残差不能解两个未知。吸入氧氮氩水汽CO2及气体总出口逐物种记账，不再另计总空气；燃料热量与载体质量是同一采购的互补观测。 | cp_raw_feed; cp_mfg_electricity; cp_natural_gas; cp_diesel; cp_water_makeup; cp_pulverized_coal; cp_cooling_water_in; cp_cooling_water_return; cp_air_n2_in; cp_air_o2_in; cp_air_ar_in; cp_air_h2o_in; cp_air_co2_in; cp_final_product; cp_raw_reject; cp_calcined_reject; cp_captured_dust; cp_wash_cake; cp_scrubber_sludge; cp_wastewater; cp_calcination_co2; cp_combustion_co2; cp_nitric_oxide; cp_nitrogen_dioxide; cp_sulfur_dioxide; cp_carbon_monoxide; cp_methane; cp_calcium_oxide_dust; cp_magnesium_oxide_dust; cp_calcium_carbonate_dust; cp_dolomite_dust; cp_feed_evaporation; cp_combustion_water; cp_process_evaporation; cp_humidity_out; cp_air_n2_out; cp_air_o2_out; cp_air_ar_out; cp_ambient_co2_out; cp_kiln_asset; cp_kiln_retired; cp_steel_repair_new; cp_steel_repair_old; cp_lining_new; cp_lining_old; cp_oil_new; cp_oil_old; cp_filter_new; cp_filter_old; cp_service_electricity; cp_service_diesel; cp_service_water; cp_fg_return; cp_fg_dispatch; cp_service_reject; cp_pp_purchase; cp_pp_supplier; cp_pp_return_in; cp_pp_gross_out; cp_pp_return_out; cp_pp_waste; cp_pe_purchase; cp_pe_supplier; cp_pe_return_in; cp_pe_gross_out; cp_pe_return_out; cp_pe_waste; cp_wood_purchase; cp_wood_supplier; cp_wood_return_in; cp_wood_gross_out; cp_wood_return_out; cp_wood_waste; cp_pack_repair_wood; cp_pack_repair_water; cp_pack_humidity_in; cp_pack_removed_wood; cp_pack_repair_wastewater; cp_pack_water_vapour | independent gross physical elemental phase and molecular closures | `jrc-clm-bref-2013`; `jrc-ilcd-2010` |
| calc_packaging | all inventory rows | 每个单一包装：期初空置加附着WIP、附着FG、可再用、有偿采购（单独或随货付费）、首次非采购外部入流、收到外部退回和真实互不重叠X_in，等于对应期末加随毛实物发运外出、单独对外返还、废物和真实互不重叠X_out。全部六个互斥外部实物流腿均保留，实测不存在可标无，未知不能作无。内部再用抵消；首次非采购外部入流保留实物与唯一上游owner及原cohort负荷，不新增产品Q或自动共产品。水分及维修组分另列。 X仅覆盖尚未计入其他流入/流出FLOW流项的独立观测材料新增/移除和游离/结合水吸收/损失。只对其他流项去重，绝不对期初期末存量去重：新增留存水料须同时保留真实流入及完整期末湿质量；移除与完整期初质量同理。整件湿态接收/外流已含实测水料则只计一次，不再额外加X。干组分/水相、来源去向、实际修理许可/规格、规定检测和验收/处置、每项负荷历史及唯一供方所有权独立保留。数据完成前为每项真实未表示的材料/水相补具体原子交换。未知是否发生/相态/数量不是零；不预设维修、吸水、干木材、木种、寿命或残差拟合数量。 普通包装储存/搬运吸湿与解吸/蒸发无需维修事件。X仅对同侧另一真实FLOW项去重，绝非对向流、库存或仅因卡存在；真实留库入流及完整期末湿库存两者保留。整份袋/托盘/薄膜内置组件与水仅一次并作组成备忘。实际另供现场组件须自有原子收货及一次供方归属。用不重叠组件贡献或核对整件：空组装皮重等于实测整采购贡献加真实新增物料/留存水减实际移除/损失，不含煅烧白云石。整件模式匹配组件交接ID，以核对整件替代组件库存/出货并抵消内部转移；不得完整组装皮重再叠同一内衬/缝线/胶贡献。一个真实混合收集出口仅需一个核实Waste交换，每来源W/池减库独立实测合总出口作非叠加原始子账。总量或不重叠分量二选一，处理/供方一次；真实分出口仍分别。散装煅烧白云石不假设包装/维修/吸湿。  每次真实P/I/ER接收均按packaging_receipt_basis区分。| cp_raw_feed; cp_mfg_electricity; cp_natural_gas; cp_diesel; cp_water_makeup; cp_pulverized_coal; cp_cooling_water_in; cp_cooling_water_return; cp_air_n2_in; cp_air_o2_in; cp_air_ar_in; cp_air_h2o_in; cp_air_co2_in; cp_final_product; cp_raw_reject; cp_calcined_reject; cp_captured_dust; cp_wash_cake; cp_scrubber_sludge; cp_wastewater; cp_calcination_co2; cp_combustion_co2; cp_nitric_oxide; cp_nitrogen_dioxide; cp_sulfur_dioxide; cp_carbon_monoxide; cp_methane; cp_calcium_oxide_dust; cp_magnesium_oxide_dust; cp_calcium_carbonate_dust; cp_dolomite_dust; cp_feed_evaporation; cp_combustion_water; cp_process_evaporation; cp_humidity_out; cp_air_n2_out; cp_air_o2_out; cp_air_ar_out; cp_ambient_co2_out; cp_kiln_asset; cp_kiln_retired; cp_steel_repair_new; cp_steel_repair_old; cp_lining_new; cp_lining_old; cp_oil_new; cp_oil_old; cp_filter_new; cp_filter_old; cp_service_electricity; cp_service_diesel; cp_service_water; cp_fg_return; cp_fg_dispatch; cp_service_reject; cp_pp_purchase; cp_pp_supplier; cp_pp_return_in; cp_pp_gross_out; cp_pp_return_out; cp_pp_waste; cp_pe_purchase; cp_pe_supplier; cp_pe_return_in; cp_pe_gross_out; cp_pe_return_out; cp_pe_waste; cp_wood_purchase; cp_wood_supplier; cp_wood_return_in; cp_wood_gross_out; cp_wood_return_out; cp_wood_waste; cp_pack_repair_wood; cp_pack_repair_water; cp_pack_humidity_in; cp_pack_removed_wood; cp_pack_repair_wastewater; cp_pack_water_vapour | article physical balance and assigned undivided burden | `jrc-ilcd-2010` |
| calc_service | all inventory rows | 逐原cohort保留完整FG向量：期初FG负荷加新增Q内部转移、真实退货原发运冲回及真实服务增量，等于期末FG负荷、毛发运去向向量及真实其他去向向量。R为实际退回实物，D_rev为追溯原发运向量，不是假定同质量；真实新增水、反应、损失及获准重工新旧件逐流保留。明确观测服务窗口及原已执行服务，不声称未来全寿命覆盖。资产收废和在装存量保留实物总量，当期仅按真实使用历史和残余向量归属有依据的服务或购置当量负荷，不编固定寿命或每kg一整窑。 对仅作台账的FG退回/发运及包装P/I/ER/S/EO/W实物流腿，calc_reference中的A_i是该腿实测换单位后的完整gross实物数量，不是制造/服务负荷向量。只用相匹配原首次放行批群分母归一一次：制造用Q，该原批群实际观察服务用Q_o。不得把继承负荷向量加进该实物量，不得对同一毛腿再次作存量修正，也不得按经济/因果负荷份额缩放毛kg。单纯存量、发运或退回流腿不新增生产Q或重复供方负荷。真实采购供应和实际已执行增量服务负荷，以有真实所有者及存量历史的独立交换向量记录，并按匹配批群基准归一一次。保留披露观察时限内原批群已经执行的服务，含held/尚未发运FG的服务；不能因未发运而删除，也不补未来服务。湿态发生变化的R仍为独立实测实物退回，D_rev仍为可追溯原发运向量，以真实水料变化和损失核对，绝不强设相等。 每个实际制造或首放后作业，无论已授权、未批准、未授权、失败或拒收，均保留真实材料/水/能源、排放、废物、保管归属和负荷。许可/规范/后检验只决定授权及等级/身份继续合格，不得抹除实际流/负荷。保留原Q_o/H和验收/处置，不假定水化/碳化逆转或新首放Q。仅真正未使用未分配库存结转，绝非已执行的留库FG服务。普通废物/废料/外送销售本身不转移制造/处理负荷或生信用；仅真实独立功能/批次且一次有据归属可转一个向量。 | cp_raw_feed; cp_mfg_electricity; cp_natural_gas; cp_diesel; cp_water_makeup; cp_pulverized_coal; cp_cooling_water_in; cp_cooling_water_return; cp_air_n2_in; cp_air_o2_in; cp_air_ar_in; cp_air_h2o_in; cp_air_co2_in; cp_final_product; cp_raw_reject; cp_calcined_reject; cp_captured_dust; cp_wash_cake; cp_scrubber_sludge; cp_wastewater; cp_calcination_co2; cp_combustion_co2; cp_nitric_oxide; cp_nitrogen_dioxide; cp_sulfur_dioxide; cp_carbon_monoxide; cp_methane; cp_calcium_oxide_dust; cp_magnesium_oxide_dust; cp_calcium_carbonate_dust; cp_dolomite_dust; cp_feed_evaporation; cp_combustion_water; cp_process_evaporation; cp_humidity_out; cp_air_n2_out; cp_air_o2_out; cp_air_ar_out; cp_ambient_co2_out; cp_kiln_asset; cp_kiln_retired; cp_steel_repair_new; cp_steel_repair_old; cp_lining_new; cp_lining_old; cp_oil_new; cp_oil_old; cp_filter_new; cp_filter_old; cp_service_electricity; cp_service_diesel; cp_service_water; cp_fg_return; cp_fg_dispatch; cp_service_reject; cp_pp_purchase; cp_pp_supplier; cp_pp_return_in; cp_pp_gross_out; cp_pp_return_out; cp_pp_waste; cp_pe_purchase; cp_pe_supplier; cp_pe_return_in; cp_pe_gross_out; cp_pe_return_out; cp_pe_waste; cp_wood_purchase; cp_wood_supplier; cp_wood_return_in; cp_wood_gross_out; cp_wood_return_out; cp_wood_waste; cp_pack_repair_wood; cp_pack_repair_water; cp_pack_humidity_in; cp_pack_removed_wood; cp_pack_repair_wastewater; cp_pack_water_vapour | separate original-cohort service and asset vectors | `jrc-ilcd-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_terminal | all datasets | 确认实际白云岩喂料、回转窑路线、完全煅烧未消化非烧结终端及独立首次放行质检称量。核心产品身份缺失、路线不支持或Q未知均构成未决hold，工程检查成功也不能豁免。不声称覆盖整个CPC37450。 | 供料及窑日志; 物相化验; 首次放行称量和规格 |
| dq_native | all inventory rows | 对照实际交换复核完整原生名、同义备注、CAS、形态、品级、路线、地域、介质、type及全部属性，使用精确参考属性单位组链，不取latest或猜次级系数。保持拒用不兼容候选。未绑定辅助流在具体数据集使用前须匹配，未知厂量不得编造，也不等于科学审批。 | 完整原生身份及精确属性单位链; 供方SDS和实际状态 |
| dq_balance | all physical gates | 检查制造子门、独立FG服务门及合并实物门，抵消内部转移但不丢来源向量。分别独立闭合总湿质量、相关Ca/Mg/C/O/H/S/N元素、原料残余碳酸盐物相、游离结构反应水及真实气体分子。烧减不是游离水，氧化物当量不等于游离CaO/MgO；不以一个残差拟两个未知。独立物相物种反应水证据缺失须保持未决。 | 独立物相和分子证据; 元素湿质量平衡; 校准不确定性 |
| dq_temporal | all inventory rows | 保持同一制造期与独立实际服务窗口；未来未知不补造，Q0全负荷保留。 | 完整事件台账; 原cohort历史; 实际观测窗口 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_terminal | all datasets | 确认实际白云岩喂料、回转窑路线、完全煅烧未消化非烧结终端及独立首次放行质检称量。核心产品身份缺失、路线不支持或Q未知均构成未决hold，工程检查成功也不能豁免。不声称覆盖整个CPC37450。 | `jrc-clm-bref-2013`; `mpa-making-dolime` |
| validate_closure | all inventory rows | 检查制造子门、独立FG服务门及合并实物门，抵消内部转移但不丢来源向量。分别独立闭合总湿质量、相关Ca/Mg/C/O/H/S/N元素、原料残余碳酸盐物相、游离结构反应水及真实气体分子。烧减不是游离水，氧化物当量不等于游离CaO/MgO；不以一个残差拟两个未知。独立物相物种反应水证据缺失须保持未决。 | `jrc-clm-bref-2013`; `jrc-ilcd-2010` |
| validate_normalization | all inventory rows | 核查原始采集未除Q，先原单位换算、库存cohort核对和真实分配，再由calc_reference唯一除一次。Q=0保留真实全负荷但不出单位结果。核查完整服务历史及包装资产实物账，实际X水料进入与湿态期末存量同时保留。 | `jrc-ilcd-2010` |
| validate_native | all UUID-bearing rows | 对照实际交换复核完整原生名、同义备注、CAS、形态、品级、路线、地域、介质、type及全部属性，使用精确参考属性单位组链，不取latest或猜次级系数。保持拒用不兼容候选。未绑定辅助流在具体数据集使用前须匹配，未知厂量不得编造，也不等于科学审批。 | `jrc-ilcd-2010` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 相符未消化白云石灰供给的下游建模；保持真实等级和边界 |
| allowed_use | 仅适用路线终端的归因清单及实际已观测服务；依provider完整性披露 |
| excluded_use | 整个CPC37450覆盖、竖窑、半烧烧结消化产品、砖制品、默认碳化信用、科学审批或未来全寿命声明 |
| required_metadata | 实际场址及报告期; 碳酸盐供料来源及上游预处理和provider; 回转窑及真实预热器冷却器配置; 完全煅烧未消化非烧结Ca-Mg氧化物成品; 实测Ca/Mg物相及残余碳酸盐游离水; 实际杂质和热工活性等级; 粒度及验收规格; 校准称量整份裸成品净质量; 首次质量放行Q及唯一cohort; 全部失败启停空载清理记录; 期初期末实物及每交换继承向量; 独立观测FG服务窗口及原cohort的Q_o; 实际燃料及热值基准; 气体干湿状态及物种来源; 水相及接收介质; 供货附带包装上游owner及六个实物流腿; 资产和维修材料液体历史; 分配及provider覆盖; 原生身份限制 分开毛实物V与供方/负荷向量；整件/组件交接和非叠加实际出口/来源W口径；普通储存搬运吸释湿；所有真实未授权/失败作业；热载体质量/热一次所有者。 |
| required_quality_disclosure | 真实数量、完整性、不确定性、原生限制、未绑定辅助流、provider缺口、窗口及未决核心关系 |
| update_trigger | 供料物相、窑路线、终端规格、燃料、地域电压、provider、控制治理、分配或新服务观测改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-clm-bref-2013 | official_guidance | European Commission JRC (2013), Best Available Techniques Reference Document for the Production of Cement, Lime and Magnesium Oxide, EUR26129EN; sections2.1.3.3,2.2.1–2.2.4,2.2.6–2.2.9.3; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/CLM_Published_def_0.pdf | 完整原件的原料、煅烧冷却、控制、存储和相邻半烧水化烧结反例；不采数值默认，不支持LCA分配。 |
| mpa-making-dolime | extension_guidance | Mineral Products Association Lime, Making Dolime, complete publisher HTML; https://lime.mineralproducts.org/About-Us/Making-Dolime.aspx | 独立行业primary的实际白云石灰终端、回转窑技术综合及完整dolime循环排除边界；区域描述不作通用唯一窑型，不采温度因子或碳化信用。 |
| jrc-ilcd-2010 | official_guidance | European Commission JRC (2010), ILCD Handbook General guide for LCA, Detailed guidance, first edition March2010, sections7.9.2–7.9.3, printed255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅支持适当归因分配情形的细分、逐交换决定性物理因果及确实剩余的共同工序门市场价值；不证明工业配方工况或未来厂量。 |
