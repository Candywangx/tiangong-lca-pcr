---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.synthetic-staple-fibres-carded-combed-or-otherwise-processed-for-spinning
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 经梳理、精梳或其他纺纱前加工的合成短纤维

## 1. 范围与适用性

本 PCR 适用于已经开松、混合、梳理、精梳、并条或以其他方式完成纺纱前准备、但仍保持未纺纤维状态的合成短纤维前景数据包。聚酯、聚酰胺、聚烯烃、腈纶/改性腈纶以及含弹性纤维的路线，仅在产出经确认属于 CPC 26210 时适用。合成-合成混纤须逐一声明质量分数；合成纤维与天然或人造纤维混纤不得自动归入本 PCR，必须另作分类判定。

常见边界为接收合成短纤维后进行干式开松、喂入、混合和实际采用的纤维排列/准备工序。精梳、并条、润滑剂或抗静电剂施加、湿法清洗、热调理及除尘，仅在报告场址实际发生时纳入。聚合物种类、混纤组成、原生或回收来源、设备路线与可选处理路线必须分别建模；没有前景同质性证据时不得平均。

聚合物合成、初级化学纤维制造、在起始边界前完成的丝束切断、纺纱、加捻、络筒、上浆、机织、针织、非织造、染色、印花、涂层和后整理均不在本 PCR 前景边界内。产出是可进入下一纺纱工序的纤维，不是纱线，更不是机织或其他织物。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.synthetic-staple-fibres-carded-combed-or-otherwise-processed-for-spinning |
| classification_refs | CPC 3.0: 26210 - Synthetic staple fibres, carded, combed or otherwise processed for spinning |
| covered_products | 经梳理、精梳、并条、开松/混合或其他已声明纺纱前加工，且经确认属于 CPC 26210 的未纺合成短纤维；已声明的合成-合成混纤 |
| excluded_products | CPC 26210 之外的未加工短纤维；人造/再生短纤维；起始边界前的连续长丝或丝束；纱线和线；机织、针织、簇绒、非织造或其他织物；染色、印花、涂层或后整理产品 |
| representative_product | 干态散纤维、纤网、条子、无纱线捻度的粗纱状准备物或打包物，聚合物组成及加工状态已声明，可进入下一纺纱工序 |
| production_route | 路线特定的干式开松、喂入、混合和纤维排列/准备；条件性精梳/并条、润滑或抗静电剂、湿法清洗、热调理及包装；禁止跨路线或跨聚合物无条件平均 |
| market_state | 加工设施大门处的净纤维质量，不含包装，调湿/含水状态已声明，交付形态为已声明的散纤维、纤网、条子或包 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已完成纺纱前加工、但未转化为纱线或织物的合成短纤维 |
| How much | 1,000 kg 加工后合成短纤维净质量，不含包装 |
| How well | 满足聚合物、混纤质量分数、纤维长度与线密度、卷曲、油剂/润滑剂含量、加工状态、杂质和水分的已声明采购方或生产规范，并可进入已声明的下一纺纱工序 |
| How long or cycle | 加工设施大门处一个生产批次；不适用使用寿命 |
| reference_flow_link | 功能单位由声明调湿状态下恰好 1,000 kg 净参考产品实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 加工后纤维净质量 |
| 参考产品流 | Synthetic Fiber Cloth `95a493a4-1e51-4eb5-9b7c-e06bf912e993` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CPC 26210 范围确认；材料状态为已作纺纱前加工的合成短纤维且明确不是 cloth；聚合物种类；各混纤组分及质量分数；原生或回收来源；纤维长度分布；线密度；卷曲；油剂、润滑剂及抗静电剂含量；梳理、精梳、并条或其他加工状态；湿法/热处理状态；水分基准；散纤维、纤网、条子或包的交付形态；生产地域；技术路线；报告期 |

经核验的天工产品流为 state_code=100 的 Product flow，CPC 26210 语义精确，但名称 “Synthetic Fiber Cloth” 会误导。该 UUID 仅作为天工数据库身份使用。每个前景数据包必须在限定信息和产品描述中明确写明“经纺纱前加工的合成短纤维，不是机织物”，绝不得据此名称纳入机织或任何织物制造。分类范围由 `un-cpc-v3-2025` 支持，产品状态区分由 `ec-jrc-txt-bref-2023` 和 `ifc-textile-ehs-2007` 支持。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1,000 kg 加工后纤维净质量；托盘、包膜、打包带、纸箱等包装不得计入。 |
| `conditioned_mass_basis` | 纤维投入、中间纤维和参考产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在声明的调湿/含水状态下称量；记录水分或调湿方法，未经实测换算不得混合干基和收到基数据。 |
| `composition_mass_fraction` | 混纤投入和产出 | 质量分数 | kg/kg | 各聚合物及非合成组分分别记录，质量分数之和须与产品组成一致；混合纤维产出必须另作分类判定。 |
| `auxiliary_product_mass` | 油剂、润滑剂、抗静电剂和湿处理化学品 | 质量 | kg | 分别记录商品质量及已知的有效/干物质分数，不得把商品质量当作有效成分质量。 |
| `energy_carrier_separation` | 电力、燃料、蒸汽和购入热 | 能量 | kWh 或 MJ | 每种能源载体与计量基准分别保留；换算因子须披露，电力和热能不得合并为一个数量。 |
| `water_balance_units` | 条件性湿法准备 | 体积或质量 | m3 或 kg | 一致记录取水、回用、蒸发、产品带出和废水；质量/体积换算须声明水密度。 |
| `stock_change_balance` | 生产线物料平衡 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对期初和期末在制品进行核对，使批次或期间投入与产出具有相同时间边界。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入范围内加工前接收的合成短纤维；须声明供应商、聚合物、混纤质量分数、原生/回收来源、此前加工、油剂/润滑剂、水分基准和交付形态 |
| starting_condition_role | 采购或设施间产品投入；其上游聚合物和纤维制造负荷由纤维与路线特定的上游数据集提供 |
| product_classification_scope | 仅 CPC 26210：梳理、精梳或其他有记录的纺纱前加工后的未纺合成短纤维；有歧义的混纤须分类审查 |
| recursive_input_rule | 若投入已属于本 PCR 类别，将其作为带供应商数据集的上游产品流，只核算新增场内加工，不重复重建上游已代表的加工。 |
| upstream_dataset_requirement | 聚合物生产、化学纤维制造及收货前加工须使用供应商或路线特定的从摇篮到大门数据；不得在聚酯、聚酰胺、聚烯烃、腈纶/改性腈纶、弹性或回收纤维路线之间无条件取平均。 |
| disclosure | 声明投入边界、聚合物与混纤、回收含量基准、实际工序、梳理/精梳/并条或替代加工状态、助剂、除尘、条件性湿/热工序、产出形态、水分、包装、排除的纺纱/织物阶段及上游数据缺口。 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景加工设施 | 纳入合成短纤维接收与场内搬运、实际开松/喂入/混合、使其可纺的工序、范围内除尘、实际使用的准备助剂和处理，以及包装至设施大门。 | `un-cpc-v3-2025`; `ec-jrc-txt-bref-2023`; `ifc-textile-ehs-2007` |
| `boundary_route_separation` | 聚合物、混纤与技术路线 | 对 materially different 的聚合物、混纤、原料来源和准备路线分别建模；只有过程记录证明投入、得率、助剂、控制与排放可比且披露汇总方法时方可合并。 | `ec-jrc-txt-bref-2023`; `eu-pef-method-2021` |
| `boundary_excluded_transformation` | 上下游转化 | 前景大门前排除聚合物合成、初级化学纤维制造和此前丝束切断；产品大门后排除纺纱、加捻、络筒、上浆、机织、针织、非织造、染色、印花、涂层与后整理，以独立上下游数据集表示。 | `un-cpc-v3-2025`; `ec-jrc-txt-bref-2023`; `ifc-textile-ehs-2007` |
| `boundary_dust_and_rejects` | 机械搬运与纤维准备 | 纳入实际设备的捕集纤维粉尘、不合格品、过滤残留、治理电耗和剩余颗粒物排放；场内回用纤维与外送废物分开。 | `ifc-textile-ehs-2007`; `eu-textiles-bat-2022` |
| `boundary_conditional_wet_thermal` | 湿法清洗或热调理 | 仅在实际发生且为纺纱前准备服务时纳入水、能源、逐种化学品、逐种废水/污泥和逐种排放；干式路线不得引入染色或后整理负荷。 | `ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_same_category_input` | 已加工合成短纤维投入 | 上游产品及数据集只记录一次，随后仅核算场内新增加工并披露继承的加工状态。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fibre_preparation_line` | 开松、混合与初级纤维准备 | required | 始终纳入；记录实际使产出达到纺纱前加工状态的操作 | 前景机械准备与生产线物料平衡 | 每 1,000 kg 净参考产品 |
| `combing_drawing` | 精梳、并条或进一步排列 | conditional | 仅在初级准备后实际发生精梳、并条、牵伸或其他排列时纳入 | 路线特定的进一步纺纱前准备 | 受影响路线每 1,000 kg 净参考产品 |
| `wet_thermal_conditioning` | 湿法清洗或热调理 | conditional | 仅在场内实际使用水、热或化学品使纤维可纺时纳入 | 路线特定辅助准备 | 处理路线每 1,000 kg 净参考产品 |
| `packing_dispatch` | 包装和产品出厂 | required | 始终纳入；仅无包装内部转移可为零并须披露 | 最终净质量参考产出及独立包装清单 | 每 1,000 kg 净参考产品 |

以下 62 张原子流卡片与英文规范逐卡对应。`process_id`、`row_id`、direction、`flow_type`、`value_mode`、`specificity`、`basis_kind`、`evidence_kind`、UUID、采集协议和来源 id 保持机器标记不变。每张卡片只表示一个可独立映射的产品、能源载体、物质、废物或基本流；互斥路线由适用条件控制，不得合并为集合型流。

### 过程：开松、混合与初级纤维准备（`fibre_preparation_line`）

#### 输入

##### 产品流

###### Received polyester staple fibre (`received_polyester_staple_fibre`)

Record polyester (PET) staple fibre as its own input at the declared moisture state. For a blend, keep its mass separate from every other component.

- 选定流：Polyester staple fibre, unspun, before in-scope preparation
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only for polyester-containing product lots; omit otherwise
- 流属性/单位：Mass / kg
- 数量规则：Weighed receipts adjusted for opening and closing stock and normalized to 1,000 kg net reference output
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Product-specific (`product_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_material_receipt`
- 来源/状态：`cp_material_receipt`; unresolved Tiangong flow mapping
- 来源：`un-cpc-v3-2025`
- 数量范围：Provisional incoming-fibre mass-balance screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：1500
  - 单位：kg
  - 基准：per 1,000 kg net reference product; broad provisional screen pending route-specific foreground distributions
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Received polyamide staple fibre (`received_polyamide_staple_fibre`)

Record polyamide staple fibre as a separate input and do not combine it with polyester or another polymer.

- 选定流：Polyamide staple fibre, unspun, before in-scope preparation
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only for polyamide-containing product lots; omit otherwise
- 流属性/单位：Mass / kg
- 数量规则：Weighed receipts adjusted for stock change and normalized to 1,000 kg net reference output
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Product-specific (`product_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_material_receipt`
- 来源/状态：`cp_material_receipt`; unresolved Tiangong flow mapping
- 来源：`ifc-textile-ehs-2007`
- 数量范围：Provisional incoming-polyamide mass-balance screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：1500
  - 单位：kg
  - 基准：per 1,000 kg net reference product; zero when not applicable and replace with foreground distribution
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Received polypropylene staple fibre (`received_polypropylene_staple_fibre`)

Record polypropylene staple fibre as a separate input and do not combine it with another polyolefin or polymer.

- 选定流：Polypropylene staple fibre, unspun, before in-scope preparation
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only for polypropylene-containing product lots; omit otherwise
- 流属性/单位：Mass / kg
- 数量规则：Weighed receipts adjusted for stock change and normalized to 1,000 kg net reference output
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Product-specific (`product_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_material_receipt`
- 来源/状态：`cp_material_receipt`; unresolved Tiangong flow mapping
- 来源：`ifc-textile-ehs-2007`
- 数量范围：Provisional incoming-polypropylene mass-balance screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：1500
  - 单位：kg
  - 基准：per 1,000 kg net reference product; zero when not applicable and replace with foreground distribution
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Received acrylic staple fibre (`received_acrylic_staple_fibre`)

Record acrylic staple fibre as a separate input from modacrylic and every other polymer.

- 选定流：Acrylic staple fibre, unspun, before in-scope preparation
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only for acrylic-containing product lots; omit otherwise
- 流属性/单位：Mass / kg
- 数量规则：Weighed receipts adjusted for stock change and normalized to 1,000 kg net reference output
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Product-specific (`product_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_material_receipt`
- 来源/状态：`cp_material_receipt`; unresolved Tiangong flow mapping
- 来源：`ifc-textile-ehs-2007`
- 数量范围：Provisional incoming-acrylic mass-balance screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：1500
  - 单位：kg
  - 基准：per 1,000 kg net reference product; zero when not applicable and replace with foreground distribution
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Received modacrylic staple fibre (`received_modacrylic_staple_fibre`)

Record modacrylic staple fibre as a separate input from acrylic and every other polymer.

- 选定流：Modacrylic staple fibre, unspun, before in-scope preparation
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only for modacrylic-containing product lots; omit otherwise
- 流属性/单位：Mass / kg
- 数量规则：Weighed receipts adjusted for stock change and normalized to 1,000 kg net reference output
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Product-specific (`product_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_material_receipt`
- 来源/状态：`cp_material_receipt`; unresolved Tiangong flow mapping
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional incoming-modacrylic mass-balance screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：1500
  - 单位：kg
  - 基准：per 1,000 kg net reference product; zero when not applicable and replace with foreground distribution
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Received polyurethane elastane staple fibre (`received_elastane_staple_fibre`)

Record polyurethane elastane staple fibre as a separate blend input because its preparation-agent load and route can differ materially.

- 选定流：Polyurethane elastane staple fibre, unspun, before in-scope preparation
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only for elastane-containing product lots; omit otherwise
- 流属性/单位：Mass / kg
- 数量规则：Weighed receipts adjusted for stock change and normalized to 1,000 kg net reference output
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Product-specific (`product_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_material_receipt`
- 来源/状态：`cp_material_receipt`; unresolved Tiangong flow mapping
- 来源：`ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`
- 数量范围：Provisional incoming-elastane mass-balance screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：1500
  - 单位：kg
  - 基准：per 1,000 kg net reference product; zero when not applicable and replace with foreground distribution
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Electricity for opening, feeding, blending and primary preparation (`primary_electricity`)

Record metered electricity for bale opening, conveying, feeding, blending, carding or the declared alternative preparation, ventilation and integrated dust extraction.

- 选定流：Site electricity supply
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Required for electrically driven preparation equipment; omit only with evidence that no electricity crosses this process boundary
- 流属性/单位：Energy / kWh
- 数量规则：Submetered electricity or a documented equipment-level calculation from power and operating time
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Technology-specific (`technology_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_energy_records`
- 来源/状态：`cp_energy_records`; unresolved Tiangong energy-flow mapping
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional electricity screening range
  - 范围角色：Default estimate (`default_estimate`)
  - 下限：1
  - 上限：1000
  - 单位：kWh
  - 基准：per 1,000 kg net reference product; replace with route-specific metered distribution
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Polydimethylsiloxane spin finish (`polydimethylsiloxane_finish`)

Record polydimethylsiloxane spin finish as its own chemical input.

- 选定流：Polydimethylsiloxane spin finish
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when this substance is dosed; omit otherwise
- 流属性/单位：Mass / kg commercial product
- 数量规则：Metered addition, batch dosing record or stock-change calculation; preserve active or dry fraction separately when known
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Product-specific (`product_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_auxiliary_records`
- 来源/状态：`cp_auxiliary_records`; unresolved Tiangong flow mapping
- 来源：`ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`
- 数量范围：Provisional polydimethylsiloxane-use screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg commercial product
  - 基准：per 1,000 kg net reference product; route- and fibre-specific foreground data must replace this screen
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Mineral-oil spinning lubricant (`mineral_oil_lubricant`)

Record mineral-oil spinning lubricant separately from silicone and glycol products.

- 选定流：Mineral-oil spinning lubricant
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when this lubricant is dosed; omit otherwise
- 流属性/单位：Mass / kg commercial product
- 数量规则：Metered addition, batch dosing record or stock-change calculation
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Product-specific (`product_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_auxiliary_records`
- 来源/状态：`cp_auxiliary_records`; unresolved Tiangong flow mapping
- 来源：`ec-jrc-txt-bref-2023`
- 数量范围：Provisional mineral-oil-lubricant screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg commercial product
  - 基准：per 1,000 kg net reference product; replace with chemical-specific dosing records
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Polyethylene-glycol antistatic agent (`polyethylene_glycol_antistatic`)

Record polyethylene-glycol antistatic agent as its own input and do not combine it with lubricants.

- 选定流：Polyethylene-glycol antistatic agent
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when this antistatic agent is dosed; omit otherwise
- 流属性/单位：Mass / kg commercial product
- 数量规则：Metered addition, batch dosing record or stock-change calculation
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Product-specific (`product_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_auxiliary_records`
- 来源/状态：`cp_auxiliary_records`; unresolved Tiangong flow mapping
- 来源：`ec-jrc-txt-bref-2023`
- 数量范围：Provisional polyethylene-glycol-use screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg commercial product
  - 基准：per 1,000 kg net reference product; replace with chemical-specific dosing records
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### Carded synthetic staple fibre (`carded_fibre`)

Record the mass of carded web or sliver separately from merely opened/blended fibre and from combed/drawn fibre.

- 选定流：Carded synthetic staple fibre, unspun
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when carding is the qualifying preparation; instantiate one row per declared polymer or blend lot
- 流属性/单位：Mass / kg
- 数量规则：Weighed transfer or line mass balance for the actual route
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Technology-specific (`technology_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_process_mass_balance`
- 来源/状态：`cp_process_mass_balance`; unresolved Tiangong internal-product mapping
- 来源：`ec-jrc-txt-bref-2023`; `ifc-textile-ehs-2007`
- 数量范围：Provisional intermediate-mass uncertainty interval
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：1500
  - 单位：kg
  - 基准：per 1,000 kg net reference product; replace with matched lot balance
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Opened and blended synthetic staple fibre (`opened_blended_fibre`)

Record opened/blended fibre separately when another documented preparation, rather than carding or combing, qualifies the output for spinning.

- 选定流：Opened and blended synthetic staple fibre, unspun
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only for an otherwise-processed route without carding; instantiate one row per declared polymer or blend lot
- 流属性/单位：Mass / kg
- 数量规则：Weighed transfer or line mass balance
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Technology-specific (`technology_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_process_mass_balance`
- 来源/状态：`cp_process_mass_balance`; unresolved Tiangong internal-product mapping
- 来源：`un-cpc-v3-2025`
- 数量范围：Provisional opened/blended-output uncertainty interval
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：1500
  - 单位：kg
  - 基准：per 1,000 kg net reference product; replace with matched lot balance
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### Captured synthetic fibre dust (`primary_captured_fibre_dust`)

Record fibre dust captured by extraction and filtration as one waste flow. Do not combine it with off-spec fibre or filter media.

- 选定流：Captured synthetic fibre dust
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include when captured dust leaves the line as waste; omit verified same-line recirculation
- 流属性/单位：Mass / kg
- 数量规则：Weighed waste containers plus documented stock change; subtract only verified same-line returns
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_process_mass_balance`
- 来源/状态：`cp_process_mass_balance`; unresolved Tiangong waste-flow mapping
- 来源：`ifc-textile-ehs-2007`; `eu-textiles-bat-2022`
- 数量范围：Provisional captured-fibre-dust screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：500
  - 单位：kg
  - 基准：per 1,000 kg net reference product; broad screen pending facility mass-balance evidence
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Off-spec synthetic staple fibre (`primary_offspec_fibre`)

Record off-spec fibre removed from the preparation line separately from captured dust.

- 选定流：Off-spec synthetic staple fibre, unspun
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include when off-spec fibre is exported as waste; omit verified same-line recirculation
- 流属性/单位：Mass / kg
- 数量规则：Weighed waste containers adjusted for stock change
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_process_mass_balance`
- 来源/状态：`cp_process_mass_balance`; unresolved Tiangong waste-flow mapping
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional off-spec-fibre screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：500
  - 单位：kg
  - 基准：per 1,000 kg net reference product; replace with facility mass balance
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

##### 基本流

###### Residual particulate releases to air (`primary_particulate_air`)

Record residual fibre particulate released after enclosure, local exhaust, extraction and filtration. Do not report captured filter material again as an elementary flow.

- 选定流：Synthetic fibre particulate matter to air
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include for measured or calculated residual release from primary preparation; omit only with documented zero release
- 流属性/单位：Mass / kg
- 数量规则：Stack or workplace-exhaust measurement integrated over production, or documented concentration-times-flow calculation
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_air_emissions`
- 来源/状态：`cp_air_emissions`; unresolved Tiangong elementary-flow mapping
- 来源：`ifc-textile-ehs-2007`; `eu-textiles-bat-2022`
- 数量范围：Provisional particulate screening range, not an emission limit
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：50
  - 单位：kg particulate
  - 基准：per 1,000 kg net reference product; replace with measured facility emissions and applicable legal limits
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

### 过程：精梳、并条或进一步排列（`combing_drawing`）

#### 输入

##### 产品流

###### Fibre entering additional alignment (`alignment_input_fibre`)

Record the intermediate fibre transferred from primary preparation only for routes that actually use this conditional process.

- 选定流：Carded synthetic staple fibre, unspun
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only for lots entering combing, drawing or drafting; instantiate one row per declared polymer or blend lot
- 流属性/单位：Mass / kg
- 数量规则：Weighed transfer or reconciled internal movement
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Technology-specific (`technology_specific`)
- 归一化基准：per 1,000 kg net reference product for the affected route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_process_mass_balance`
- 来源/状态：`cp_process_mass_balance`; unresolved Tiangong internal-product mapping
- 来源：`ec-jrc-txt-bref-2023`; `ifc-textile-ehs-2007`
- 数量范围：Provisional alignment-input uncertainty interval
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：1500
  - 单位：kg
  - 基准：per 1,000 kg net reference product for an included route; replace with matched transfer record
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Electricity for combing, drawing or drafting (`alignment_electricity`)

Record electricity for the disclosed combination of combing, drawing, drafting, conveying, ventilation and local extraction.

- 选定流：Site electricity supply
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when the conditional alignment process operates; omit otherwise
- 流属性/单位：Energy / kWh
- 数量规则：Submetered electricity or documented equipment-level calculation
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Technology-specific (`technology_specific`)
- 归一化基准：per 1,000 kg net reference product for the affected route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_energy_records`
- 来源/状态：`cp_energy_records`; unresolved Tiangong energy-flow mapping
- 来源：`ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`
- 数量范围：Provisional alignment-electricity screen
  - 范围角色：Default estimate (`default_estimate`)
  - 下限：0
  - 上限：1000
  - 单位：kWh
  - 基准：per 1,000 kg net reference product for an included route; replace with metered distribution
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### Combed, drawn or otherwise aligned fibre (`aligned_fibre`)

Record the output mass, state and transfer destination without including subsequent spinning, twisting or winding.

- 选定流：Combed and drawn synthetic staple fibre, unspun
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only for the actual aligned product lot; instantiate one row per declared polymer or blend
- 流属性/单位：Mass / kg
- 数量规则：Weighed output or line mass balance
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Technology-specific (`technology_specific`)
- 归一化基准：per 1,000 kg net reference product for the affected route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_process_mass_balance`
- 来源/状态：`cp_process_mass_balance`; unresolved Tiangong internal-product mapping
- 来源：`ec-jrc-txt-bref-2023`; `ifc-textile-ehs-2007`
- 数量范围：Provisional aligned-output uncertainty interval
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：1500
  - 单位：kg
  - 基准：per 1,000 kg net reference product for an included route; replace with matched output record
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### Synthetic staple-fibre noils (`alignment_noils`)

Record noils removed by combing as a separate waste flow, with destination and polymer identity retained.

- 选定流：Synthetic staple-fibre noils
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when combing produces noils that leave the line; omit otherwise
- 流属性/单位：Mass / kg
- 数量规则：Weighed removal reconciled with input and aligned output
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Technology-specific (`technology_specific`)
- 归一化基准：per 1,000 kg net reference product for the affected route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_process_mass_balance`
- 来源/状态：`cp_process_mass_balance`; unresolved Tiangong waste-flow mapping
- 来源：`ec-jrc-txt-bref-2023`
- 数量范围：Provisional noils screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：500
  - 单位：kg
  - 基准：per 1,000 kg net reference product for an included route; replace with route-specific mass balance
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Off-spec fibre from drawing or drafting (`alignment_offspec_fibre`)

Record fibre rejected during drawing or drafting separately from combing noils.

- 选定流：Off-spec synthetic staple fibre from drawing or drafting
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when drawing or drafting rejects leave the line; omit otherwise
- 流属性/单位：Mass / kg
- 数量规则：Weighed removal reconciled with input and aligned output
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Technology-specific (`technology_specific`)
- 归一化基准：per 1,000 kg net reference product for the affected route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_process_mass_balance`
- 来源/状态：`cp_process_mass_balance`; unresolved Tiangong waste-flow mapping
- 来源：`ec-jrc-txt-bref-2023`
- 数量范围：Provisional drawing-reject screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：500
  - 单位：kg
  - 基准：per 1,000 kg net reference product for an included route; replace with route-specific mass balance
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

##### 基本流

###### Residual alignment particulate releases to air (`alignment_particulate_air`)

Record residual particulate from combing, drawing, drafting and associated extraction separately when this process is included.

- 选定流：Synthetic fibre particulate matter to air from combing and drawing
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when the conditional alignment process releases particulate; omit otherwise
- 流属性/单位：Mass / kg
- 数量规则：Measurement or documented concentration-times-flow calculation for the conditional equipment
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the affected route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_air_emissions`
- 来源/状态：`cp_air_emissions`; unresolved Tiangong elementary-flow mapping
- 来源：`ifc-textile-ehs-2007`; `eu-textiles-bat-2022`
- 数量范围：Provisional alignment-particulate screen, not an emission limit
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：50
  - 单位：kg particulate
  - 基准：per 1,000 kg net reference product for an included route; replace with measured facility emissions
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

### 过程：湿法清洗或热调理（`wet_thermal_conditioning`）

#### 输入

##### 产品流

###### Fibre entering wet or thermal conditioning (`conditioning_input_fibre`)

Record the actual prepared-fibre intermediate only when wet cleaning, drying, heat-setting or another in-scope conditioning operation occurs before the spinning-ready product gate.

- 选定流：Carded synthetic staple fibre entering wet or thermal conditioning
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when carded fibre enters conditioning without combing/drawing; instantiate one row per declared polymer or blend
- 流属性/单位：Mass / kg
- 数量规则：Weighed transfer or reconciled internal movement
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Route-specific (`route_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_process_mass_balance`
- 来源/状态：`cp_process_mass_balance`; unresolved Tiangong internal-product mapping
- 来源：`ec-jrc-txt-bref-2023`
- 数量范围：Provisional conditioning-input uncertainty interval
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：1500
  - 单位：kg
  - 基准：per 1,000 kg net reference product for an included route; replace with matched transfer record
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Combed and drawn fibre entering conditioning (`aligned_conditioning_input`)

Record combed/drawn fibre as a separate conditioning input from carded fibre.

- 选定流：Combed and drawn synthetic staple fibre entering wet or thermal conditioning
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when aligned fibre enters conditioning; instantiate one row per declared polymer or blend
- 流属性/单位：Mass / kg
- 数量规则：Weighed transfer or reconciled internal movement
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Route-specific (`route_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_process_mass_balance`
- 来源/状态：`cp_process_mass_balance`; unresolved Tiangong internal-product mapping
- 来源：`ec-jrc-txt-bref-2023`
- 数量范围：Provisional aligned-conditioning-input uncertainty interval
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：1500
  - 单位：kg
  - 基准：per 1,000 kg net reference product for an included route; replace with matched transfer record
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Municipal freshwater for wet preparation (`municipal_freshwater`)

Record metered municipal freshwater separately from reused process water.

- 选定流：Municipal freshwater
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when municipal water is consumed by the wet route; omit otherwise
- 流属性/单位：Volume / m3
- 数量规则：Metered intake and reuse allocated to the treated route
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_water_wastewater_records`
- 来源/状态：`cp_water_wastewater_records`; unresolved Tiangong water-flow mapping
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional wet-route water screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：m3
  - 基准：per 1,000 kg net reference product for an included wet route; not applicable to an excluded dry route and replace with metered data
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Reused process water for wet preparation (`reused_process_water`)

Record water recovered inside or outside the line as a separate product input and disclose its source and treatment.

- 选定流：Reused process water
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when reused water enters the wet process; omit otherwise
- 流属性/单位：Volume / m3
- 数量规则：Metered reused-water input allocated to the treated route
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_water_wastewater_records`
- 来源/状态：`cp_water_wastewater_records`; unresolved Tiangong water-flow mapping
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional reused-water screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：m3
  - 基准：per 1,000 kg net reference product for an included wet route; replace with metered data
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Sodium carbonate for wet preparation (`sodium_carbonate`)

Record sodium carbonate separately when it is used in the declared wet-preparation recipe.

- 选定流：Sodium carbonate
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when sodium carbonate is dosed; omit otherwise
- 流属性/单位：Mass / kg commercial product
- 数量规则：Batch dosing, metered addition or stock-change record
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Product-specific (`product_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_auxiliary_records`
- 来源/状态：`cp_auxiliary_records`; unresolved Tiangong chemical-flow mapping
- 来源：`ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`
- 数量范围：Provisional sodium-carbonate screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：200
  - 单位：kg commercial product
  - 基准：per 1,000 kg net reference product for an included route; replace with product-specific dosing records
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Sodium hydroxide for wet preparation (`sodium_hydroxide`)

Record sodium hydroxide separately when it is used; do not combine it with sodium carbonate or peroxide.

- 选定流：Sodium hydroxide, purity 95-98% `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- UUID 状态：confirmed Tiangong Product flow; state code 100; supplied product has 95-98% purity
- 适用条件：Include only for sodium hydroxide supplied at 95-98% purity; represent another concentration as a separate atomic flow
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg commercial product
- 数量规则：Batch dosing, metered addition or stock-change record
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Product-specific (`product_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_auxiliary_records`
- 来源/状态：confirmed by `flow-hybrid-search` and Tiangong `flow get`; dosing evidence from `cp_auxiliary_records`
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional sodium-hydroxide screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：200
  - 单位：kg commercial product
  - 基准：per 1,000 kg net reference product for an included route; replace with dosing records
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Hydrogen peroxide for wet preparation (`hydrogen_peroxide`)

Record hydrogen peroxide separately when it is used; retain supplied concentration.

- 选定流：Hydrogen peroxide solution, 50% in water `d834d970-3c7c-428d-baf6-d2516bebd0c7`
- UUID 状态：confirmed Tiangong Product flow; state code 100; textile wet-processing product supplied at 50% in water
- 适用条件：Include only for hydrogen peroxide supplied at 50% in water; represent another concentration as a separate atomic flow
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg commercial solution
- 数量规则：Batch dosing, metered addition or stock-change record with supplied concentration
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Product-specific (`product_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_auxiliary_records`
- 来源/状态：confirmed by `flow-hybrid-search` and Tiangong `flow get`; dosing evidence from `cp_auxiliary_records`
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional hydrogen-peroxide-solution screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：200
  - 单位：kg commercial solution
  - 基准：per 1,000 kg net reference product for an included route; replace with dosing records
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Electricity for wet or thermal conditioning (`conditioning_electricity`)

Record conditioning electricity as a separate energy-carrier input.

- 选定流：Electricity, site supply
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when electricity is consumed by the conditional process; omit otherwise
- 流属性/单位：Energy / kWh
- 数量规则：Metered electricity or documented equipment-level calculation
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Technology-specific (`technology_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_energy_records`
- 来源/状态：`cp_energy_records`; unresolved Tiangong energy-flow mapping
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional conditioning-electricity screen
  - 范围角色：Default estimate (`default_estimate`)
  - 下限：0
  - 上限：3000
  - 单位：kWh
  - 基准：per 1,000 kg net reference product for an included route; replace with metered electricity
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Purchased steam for wet or thermal conditioning (`purchased_steam`)

Record purchased steam separately from fuel and hot water.

- 选定流：Heat from steam, industrial boiler `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- UUID 状态：confirmed Tiangong Product flow; state code 100; industrial-boiler steam heat
- 适用条件：Include only when steam heat crosses the facility or process boundary; omit when on-site fuel rows fully represent the supplied heat
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：Metered steam energy or steam mass converted with documented pressure, temperature and enthalpy
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_energy_records`
- 来源/状态：confirmed by `flow-hybrid-search` and Tiangong `flow get`; metering evidence from `cp_energy_records`
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional purchased-steam screen
  - 范围角色：Default estimate (`default_estimate`)
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：per 1,000 kg net reference product for an included route; replace with metered steam
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Purchased hot water for wet conditioning (`purchased_hot_water`)

Record purchased hot water separately from steam and freshwater volume.

- 选定流：Purchased hot water
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when hot water crosses the process boundary; omit otherwise
- 流属性/单位：Energy / MJ
- 数量规则：Metered volume and temperatures converted to delivered heat with disclosed heat-capacity assumptions
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_energy_records`
- 来源/状态：`cp_energy_records`; unresolved Tiangong energy-flow mapping
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional purchased-hot-water screen
  - 范围角色：Default estimate (`default_estimate`)
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：per 1,000 kg net reference product for an included route; replace with measured heat delivery
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Natural gas for on-site conditioning heat (`natural_gas`)

Record natural gas separately from LPG, diesel and purchased heat.

- 选定流：Natural gas
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when natural gas is combusted for the conditional process; omit otherwise
- 流属性/单位：Energy / MJ lower heating value
- 数量规则：Metered gas volume converted with supplier heating value
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_energy_records`
- 来源/状态：`cp_energy_records`; unresolved Tiangong fuel-flow mapping
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional natural-gas screen
  - 范围角色：Default estimate (`default_estimate`)
  - 下限：0
  - 上限：10000
  - 单位：MJ lower heating value
  - 基准：per 1,000 kg net reference product for an included route; replace with metered fuel
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Diesel for on-site conditioning heat (`diesel_fuel`)

Record diesel separately from natural gas and LPG.

- 选定流：Diesel fuel
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when diesel is combusted for the conditional process; omit otherwise
- 流属性/单位：Energy / MJ lower heating value
- 数量规则：Fuel issue mass or volume converted with supplier density and heating value
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_energy_records`
- 来源/状态：`cp_energy_records`; unresolved Tiangong fuel-flow mapping
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional diesel screen
  - 范围角色：Default estimate (`default_estimate`)
  - 下限：0
  - 上限：10000
  - 单位：MJ lower heating value
  - 基准：per 1,000 kg net reference product for an included route; replace with fuel records
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Liquefied petroleum gas for on-site conditioning heat (`lpg_fuel`)

Record LPG separately from natural gas and diesel.

- 选定流：Liquefied petroleum gas
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when LPG is combusted for the conditional process; omit otherwise
- 流属性/单位：Energy / MJ lower heating value
- 数量规则：Fuel issue mass converted with supplier heating value
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_energy_records`
- 来源/状态：`cp_energy_records`; unresolved Tiangong fuel-flow mapping
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional LPG screen
  - 范围角色：Default estimate (`default_estimate`)
  - 下限：0
  - 上限：10000
  - 单位：MJ lower heating value
  - 基准：per 1,000 kg net reference product for an included route; replace with fuel records
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Compressed air for fibre conditioning (`compressed_air`)

Record compressed air separately from electricity; upstream compressor electricity must not be duplicated if included in the electricity row.

- 选定流：Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- UUID 状态：confirmed Tiangong Product flow; state code 100; volume reference property
- 适用条件：Include only when compressed air crosses the selected process boundary; declare pressure and reference conditions
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / Nm3 at declared reference conditions
- 数量规则：Metered normalized volume or documented compressor allocation with pressure disclosed
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_energy_records`
- 来源/状态：confirmed by `flow-hybrid-search` and Tiangong `flow get`; metering evidence from `cp_energy_records`
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional compressed-air screen
  - 范围角色：Default estimate (`default_estimate`)
  - 下限：0
  - 上限：10000
  - 单位：Nm3
  - 基准：per 1,000 kg net reference product for an included route; replace with metered normalized volume
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### R-134a refrigerant make-up (`r134a_refrigerant_makeup`)

Record R-134a make-up as a specific substance input; another refrigerant requires its own additional atomic row.

- 选定流：Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- UUID 状态：confirmed Tiangong Product flow; state code 100; processing-plant refrigerant make-up
- 适用条件：Include only when R-134a is added to in-scope cooling equipment; represent another refrigerant as a separate atomic flow
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：Cylinder issue mass minus returned mass, attributed to the in-scope equipment
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_energy_records`
- 来源/状态：confirmed by `flow-hybrid-search` and Tiangong `flow get`; cylinder evidence from `cp_energy_records`
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional R-134a make-up screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：per 1,000 kg net reference product for an included route; replace with cylinder records
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### Conditioned prepared fibre (`conditioned_fibre`)

Record treated fibre mass and the wet or thermal process state. This intermediate remains unspun and is transferred to packing.

- 选定流：Conditioned synthetic staple fibre prepared for spinning
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only for the conditioned lot; instantiate one row per declared polymer or blend
- 流属性/单位：Mass / kg
- 数量规则：Weighed output corrected only with measured moisture data
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Route-specific (`route_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_process_mass_balance`
- 来源/状态：`cp_process_mass_balance`; unresolved Tiangong internal-product mapping
- 来源：`ec-jrc-txt-bref-2023`
- 数量范围：Provisional conditioned-output uncertainty interval
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：1500
  - 单位：kg
  - 基准：per 1,000 kg net reference product for an included route; replace with matched output record
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### Wastewater sent to treatment (`conditioning_wastewater`)

Record wastewater volume, destination and measured characteristics. Keep direct releases after treatment in the elementary-flow inventory rather than double-counting them here.

- 选定流：Wastewater from synthetic staple-fibre wet preparation
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when this aqueous waste stream leaves the wet-preparation process; omit otherwise
- 流属性/单位：Volume / m3
- 数量规则：Metered discharge reconciled with water intake, reuse, evaporation and product carry-over
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_water_wastewater_records`
- 来源/状态：`cp_water_wastewater_records`; unresolved Tiangong waste-flow mapping
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional wastewater-volume screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：m3
  - 基准：per 1,000 kg net reference product for an included wet route; replace with metered balance
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Wastewater-treatment sludge (`conditioning_sludge`)

Record wastewater-treatment sludge separately from filter media and other solid waste.

- 选定流：Wastewater-treatment sludge from synthetic staple-fibre wet preparation
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when attributable sludge leaves the foreground boundary; omit otherwise
- 流属性/单位：Mass / kg
- 数量规则：Weighed removal with moisture basis and allocation method disclosed
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_waste_records`
- 来源/状态：`cp_waste_records`; unresolved Tiangong waste-flow mapping
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional sludge-and-residue screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：500
  - 单位：kg as recorded with moisture basis
  - 基准：per 1,000 kg net reference product for an included route; replace with weighed facility distribution
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Spent fabric-filter media (`spent_filter_media`)

Record removed fabric-filter media separately from captured fibre dust and wastewater sludge.

- 选定流：Spent fabric-filter media from fibre-dust control
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when filter media is replaced within the reporting period; omit otherwise
- 流属性/单位：Mass / kg
- 数量规则：Weighed removed media minus reusable hardware, with disposal destination
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_waste_records`
- 来源/状态：`cp_waste_records`; unresolved Tiangong waste-flow mapping
- 来源：`ifc-textile-ehs-2007`; `eu-textiles-bat-2022`
- 数量范围：Provisional spent-filter-media screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：50
  - 单位：kg
  - 基准：per 1,000 kg net reference product; replace with maintenance records
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

##### 基本流

###### Fossil carbon dioxide to air (`fossil_carbon_dioxide_air`)

Record fossil carbon dioxide from in-scope natural-gas, diesel or LPG combustion as its own elementary flow.

- 选定流：carbon dioxide (fossil), emissions to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- UUID 状态：confirmed Tiangong Elementary flow; state code 100; compartment is emissions to air, unspecified
- 适用条件：Include only for in-scope fossil-fuel combustion; keep biogenic carbon dioxide separate
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CO2
- 数量规则：Direct measurement or activity data multiplied by a disclosed applicable emission factor
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_air_emissions`
- 来源/状态：confirmed by `flow-hybrid-search` and Tiangong `flow get`; activity or measurement evidence from `cp_air_emissions`
- 来源：`ifc-textile-ehs-2007`; `eu-textiles-bat-2022`
- 数量范围：Provisional fossil-carbon-dioxide screen, not an emission limit
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：kg CO2
  - 基准：per 1,000 kg net reference product for an included route; replace with measured or source-backed substance-specific values
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Nitrogen oxides to air (`nitrogen_oxides_air`)

Record nitrogen oxides from in-scope combustion separately from carbon monoxide and particulate matter.

- 选定流：Nitrogen oxides, as NO2, to air
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only for in-scope combustion with measured or applicable factor data; omit otherwise
- 流属性/单位：Mass / kg NO2
- 数量规则：Direct measurement or fuel activity multiplied by a disclosed applicable factor
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_air_emissions`
- 来源/状态：`cp_air_emissions`; unresolved Tiangong elementary-flow mapping
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional nitrogen-oxides screen, not an emission limit
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg NO2
  - 基准：per 1,000 kg net reference product for an included route; replace with measured or factor-based data
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Carbon monoxide to air (`carbon_monoxide_air`)

Record carbon monoxide from in-scope combustion as its own elementary flow.

- 选定流：carbon monoxide (fossil), emissions to air, unspecified `08a91e70-3ddc-11dd-924e-0050c2490048`
- UUID 状态：confirmed Tiangong Elementary flow; state code 100; fossil carbon monoxide in the emissions-to-air-unspecified compartment
- 适用条件：Include only for in-scope combustion with measured or applicable factor data; omit otherwise
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CO
- 数量规则：Direct measurement or fuel activity multiplied by a disclosed applicable factor
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_air_emissions`
- 来源/状态：confirmed by `flow-hybrid-search` and Tiangong `flow get`; activity or measurement evidence from `cp_air_emissions`
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional carbon-monoxide screen, not an emission limit
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg CO
  - 基准：per 1,000 kg net reference product for an included route; replace with measured or factor-based data
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Combustion particulate matter to air (`combustion_particulate_air`)

Record combustion particulate separately from fibre dust emitted by mechanical operations.

- 选定流：Particulate matter from combustion to air
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only for in-scope combustion with measured or applicable factor data; omit otherwise
- 流属性/单位：Mass / kg particulate
- 数量规则：Direct measurement or fuel activity multiplied by a disclosed applicable factor
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_air_emissions`
- 来源/状态：`cp_air_emissions`; unresolved Tiangong elementary-flow mapping
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional combustion-particulate screen, not an emission limit
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg particulate
  - 基准：per 1,000 kg net reference product for an included route; replace with measured or factor-based data
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### R-134a refrigerant to air (`r134a_air`)

Record R-134a leakage as its own elementary flow and reconcile it with refrigerant make-up and equipment stock change.

- 选定流：HFC-134a, emissions to air, unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- UUID 状态：confirmed Tiangong Elementary flow; state code 100; compartment is emissions to air, unspecified
- 适用条件：Include only when R-134a leakage is attributable to in-scope cooling equipment; omit otherwise
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：Refrigerant make-up minus documented recovery and equipment stock change
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_air_emissions`
- 来源/状态：confirmed by `flow-hybrid-search` and Tiangong `flow get`; refrigerant-balance evidence from `cp_air_emissions`
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional R-134a leakage screen, not an emission limit
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：10
  - 单位：kg R-134a
  - 基准：per 1,000 kg net reference product for an included route; replace with refrigerant balance
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Synthetic fibre particles to water (`synthetic_fibre_particles_water`)

Record synthetic fibre particles discharged after on-site treatment separately from dissolved preparation agents.

- 选定流：Synthetic fibre particles to water
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when a direct discharge crosses the environment boundary and this pollutant is measured; omit otherwise
- 流属性/单位：Mass / kg
- 数量规则：Measured concentration multiplied by matched discharge volume over the same period
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_water_wastewater_records`
- 来源/状态：`cp_water_wastewater_records`; unresolved Tiangong elementary-flow mapping
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional fibre-particle discharge screen, not an emission limit
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg synthetic fibre particles
  - 基准：per 1,000 kg net reference product for an included route; replace with matched measured loads and applicable legal limits
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Mineral oil to water (`mineral_oil_water`)

Record discharged mineral oil separately when the wet route uses a mineral-oil lubricant and monitoring identifies it.

- 选定流：white mineral oil (petroleum), emissions to fresh water `3c5e539b-bfd4-44dd-b000-3f990d2f3f3c`
- UUID 状态：confirmed Tiangong Elementary flow; state code 100; compartment is emissions to fresh water
- 适用条件：Include only for a direct fresh-water discharge with measured white mineral oil; represent another oil or receiving compartment separately
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：Matched mineral-oil concentration multiplied by discharge volume
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_water_wastewater_records`
- 来源/状态：confirmed by `flow-hybrid-search` and Tiangong `flow get`; matched discharge evidence from `cp_water_wastewater_records`
- 来源：`ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`
- 数量范围：Provisional mineral-oil discharge screen, not an emission limit
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg mineral oil
  - 基准：per 1,000 kg net reference product for an included route; replace with measured load
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Polydimethylsiloxane to water (`polydimethylsiloxane_water`)

Record discharged polydimethylsiloxane separately when monitoring identifies it.

- 选定流：Polydimethylsiloxane to water
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only for a direct discharge with measured polydimethylsiloxane; omit otherwise
- 流属性/单位：Mass / kg
- 数量规则：Matched concentration multiplied by discharge volume
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_water_wastewater_records`
- 来源/状态：`cp_water_wastewater_records`; unresolved Tiangong elementary-flow mapping
- 来源：`ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`
- 数量范围：Provisional polydimethylsiloxane discharge screen, not an emission limit
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg polydimethylsiloxane
  - 基准：per 1,000 kg net reference product for an included route; replace with measured load
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Polyethylene glycol to water (`polyethylene_glycol_water`)

Record discharged polyethylene glycol separately when monitoring identifies it.

- 选定流：Polyethylene glycol to water
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only for a direct discharge with measured polyethylene glycol; omit otherwise
- 流属性/单位：Mass / kg
- 数量规则：Matched concentration multiplied by discharge volume
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product for the treated route
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_water_wastewater_records`
- 来源/状态：`cp_water_wastewater_records`; unresolved Tiangong elementary-flow mapping
- 来源：`ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`
- 数量范围：Provisional polyethylene-glycol discharge screen, not an emission limit
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg polyethylene glycol
  - 基准：per 1,000 kg net reference product for an included route; replace with measured load
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

### 过程：包装和产品出厂（`packing_dispatch`）

#### 输入

##### 产品流

###### Carded fibre entering packing (`carded_packing_input`)

Record carded fibre entering packing separately from aligned and conditioned fibre.

- 选定流：Carded synthetic staple fibre entering packing
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only for a carded route without later alignment or conditioning; instantiate one row per declared polymer or blend
- 流属性/单位：Mass / kg
- 数量规则：Weighed internal transfer reconciled to the final net product mass
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Route-specific (`route_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_reference_output`
- 来源/状态：`cp_reference_output`; unresolved Tiangong internal-product mapping
- 来源：`un-cpc-v3-2025`
- 数量范围：Provisional packing-input uncertainty interval
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：1000
  - 上限：1500
  - 单位：kg
  - 基准：per 1,000 kg net reference product; replace with matched packing transfer and tare record
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Combed and drawn fibre entering packing (`aligned_packing_input`)

Record combed/drawn fibre entering packing separately from carded and conditioned fibre.

- 选定流：Combed and drawn synthetic staple fibre entering packing
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only for an aligned route without later conditioning; instantiate one row per declared polymer or blend
- 流属性/单位：Mass / kg
- 数量规则：Weighed internal transfer reconciled to final net product mass
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Route-specific (`route_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_reference_output`
- 来源/状态：`cp_reference_output`; unresolved Tiangong internal-product mapping
- 来源：`un-cpc-v3-2025`
- 数量范围：Provisional aligned-packing-input uncertainty interval
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：1000
  - 上限：1500
  - 单位：kg
  - 基准：per 1,000 kg net reference product; replace with matched packing transfer
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Conditioned fibre entering packing (`conditioned_packing_input`)

Record wet- or thermally-conditioned fibre entering packing separately from untreated prepared fibre.

- 选定流：Conditioned synthetic staple fibre entering packing
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only for an included conditioning route; instantiate one row per declared polymer or blend
- 流属性/单位：Mass / kg
- 数量规则：Weighed internal transfer reconciled to final net product mass
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Route-specific (`route_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_reference_output`
- 来源/状态：`cp_reference_output`; unresolved Tiangong internal-product mapping
- 来源：`un-cpc-v3-2025`
- 数量范围：Provisional conditioned-packing-input uncertainty interval
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：1000
  - 上限：1500
  - 单位：kg
  - 基准：per 1,000 kg net reference product; replace with matched packing transfer
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Polyethylene bale film (`polyethylene_bale_film`)

Record polyethylene bale film as its own packaging input.

- 选定流：Polyethylene bale film
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when polyethylene film leaves with the product; omit otherwise
- 流属性/单位：Mass / kg
- 数量规则：Purchase issue, bill of materials, weighed packaging or stock-change record
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Product-specific (`product_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_packaging_records`
- 来源/状态：`cp_packaging_records`; unresolved Tiangong packaging-flow mapping
- 来源：`eu-pef-method-2021`
- 数量范围：Provisional polyethylene-film screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：200
  - 单位：kg packaging
  - 基准：per 1,000 kg net reference product; replace with product-specific packaging records
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Polypropylene bale strapping (`polypropylene_strapping`)

Record polypropylene strapping separately from film, board and pallets.

- 选定流：Polypropylene bale strapping
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when polypropylene strapping leaves with the product; omit otherwise
- 流属性/单位：Mass / kg
- 数量规则：Unit mass multiplied by used straps or weighed packaging issue
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Product-specific (`product_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_packaging_records`
- 来源/状态：`cp_packaging_records`; unresolved Tiangong packaging-flow mapping
- 来源：`eu-pef-method-2021`
- 数量范围：Provisional polypropylene-strapping screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：per 1,000 kg net reference product; replace with product-specific packaging records
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Corrugated-board packaging (`corrugated_board_packaging`)

Record corrugated board separately from polymer packaging and pallets.

- 选定流：Corrugated cardboard, type C, E or F, fibre content at least 80% `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- UUID 状态：confirmed Tiangong Product flow; state code 100; CPC 32151
- 适用条件：Include only for the stated corrugated-board grade leaving with the product; represent another grade as a separate atomic flow
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：Unit mass multiplied by packages used or weighed packaging issue
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Product-specific (`product_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_packaging_records`
- 来源/状态：confirmed by `flow-hybrid-search` and Tiangong `flow get`; packaging evidence from `cp_packaging_records`
- 来源：`eu-pef-method-2021`
- 数量范围：Provisional corrugated-board screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：200
  - 单位：kg
  - 基准：per 1,000 kg net reference product; replace with product-specific packaging records
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Wooden pallet (`wooden_pallet`)

Record wooden pallets separately and disclose reuse cycles when a pallet pool is used.

- 选定流：Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- UUID 状态：confirmed Tiangong Product flow; state code 100; CPC 31702
- 适用条件：Include only when a pallet is attributable to the shipped product; omit otherwise
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：Pallet unit mass times attributable units divided by documented reuse cycles where applicable
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Product-specific (`product_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_packaging_records`
- 来源/状态：confirmed by `flow-hybrid-search` and Tiangong `flow get`; pallet and reuse evidence from `cp_packaging_records`
- 来源：`eu-pef-method-2021`
- 数量范围：Provisional wooden-pallet screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：200
  - 单位：kg attributable pallet mass
  - 基准：per 1,000 kg net reference product; replace with pallet and reuse records
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Electricity for packing and internal dispatch (`packing_electricity`)

Record electricity for baling, compression, wrapping, conveying and dispatch equipment within the facility gate.

- 选定流：Site electricity supply
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include when baling, wrapping, conveying or dispatch uses electricity; omit only for documented zero-electricity transfer
- 流属性/单位：Energy / kWh
- 数量规则：Submetered electricity or documented equipment-level calculation
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Technology-specific (`technology_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_energy_records`
- 来源/状态：`cp_energy_records`; unresolved Tiangong energy-flow mapping
- 来源：`eu-textiles-bat-2022`
- 数量范围：Provisional packing-electricity screen
  - 范围角色：Default estimate (`default_estimate`)
  - 下限：0
  - 上限：500
  - 单位：kWh
  - 基准：per 1,000 kg net reference product; replace with metered or equipment-specific data
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### Net prepared synthetic staple fibre output (`reference_output`)

This is the reference output. It represents synthetic staple fibre processed for spinning and explicitly does not represent cloth, yarn or fabric despite the selected Tiangong flow name.

- 选定流：Synthetic Fiber Cloth `95a493a4-1e51-4eb5-9b7c-e06bf912e993`
- UUID 状态：confirmed Tiangong Product flow; CPC 26210 semantic identity only; misleading name does not denote cloth
- 适用条件：Required reference output for every conforming data package
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：fixed reference amount of 1,000 kg net fibre excluding packaging at the declared moisture state
- 数值来源模式：Fixed value (`fixed_value`)
- 适用范围：Product-specific (`product_specific`)
- 归一化基准：exactly 1,000 kg net prepared synthetic staple fibre
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Identity reference (`identity_reference`)
- 采集协议：
- 来源/状态：confirmed product UUID; net-mass release record `cp_reference_output`
- 来源：`un-cpc-v3-2025`
- 数量范围：Exact reference-amount interval
  - 范围角色：Allowed range (`allowed_range`)
  - 下限：1000
  - 上限：1000
  - 单位：kg net prepared fibre
  - 基准：exact PCR reference amount excluding packaging
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Source rule (`source_rule`)

##### 废物流

###### Waste polyethylene bale film (`waste_polyethylene_film`)

Record waste polyethylene film separately from other packaging waste.

- 选定流：Waste polyethylene `7e78f0a8-c042-47ca-a742-3bac92be1477`
- UUID 状态：confirmed Tiangong Waste flow; state code 100; plastic waste CPC 39270
- 适用条件：Include only when polyethylene bale film becomes waste inside the foreground boundary; retain the film origin in the exchange documentation
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：Weighed waste or packaging input minus packaging shipped and documented stock change
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_packaging_records`
- 来源/状态：confirmed by `flow-hybrid-search` and Tiangong `flow get`; packaging balance from `cp_packaging_records`
- 来源：`eu-pef-method-2021`
- 数量范围：Provisional waste-polyethylene-film screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：200
  - 单位：kg
  - 基准：per 1,000 kg net reference product; replace with facility packaging balance
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Waste polypropylene strapping (`waste_polypropylene_strapping`)

Record waste polypropylene strapping separately from film, board and wood.

- 选定流：Polypropylene wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- UUID 状态：confirmed Tiangong Waste flow; state code 100; plastic waste CPC 39270
- 适用条件：Include only when polypropylene strapping becomes waste inside the foreground boundary; retain the strapping origin in the exchange documentation
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：Weighed waste or input minus shipped strapping and stock change
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_packaging_records`
- 来源/状态：confirmed by `flow-hybrid-search` and Tiangong `flow get`; packaging balance from `cp_packaging_records`
- 来源：`eu-pef-method-2021`
- 数量范围：Provisional waste-polypropylene-strapping screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：per 1,000 kg net reference product; replace with packaging balance
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Waste corrugated board (`waste_corrugated_board`)

Record waste corrugated board separately from polymer packaging and wood.

- 选定流：Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- UUID 状态：confirmed Tiangong Waste flow; state code 100; cardboard packaging waste
- 适用条件：Include only when corrugated board becomes waste inside the foreground boundary; omit otherwise
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：Weighed waste or input minus shipped board and stock change
- 数值来源模式：Calculated value (`calculated_value`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Calculated from collection (`calculated_from_collection`)
- 采集协议：`cp_packaging_records`
- 来源/状态：confirmed by `flow-hybrid-search` and Tiangong `flow get`; packaging balance from `cp_packaging_records`
- 来源：`eu-pef-method-2021`
- 数量范围：Provisional waste-corrugated-board screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：200
  - 单位：kg
  - 基准：per 1,000 kg net reference product; replace with packaging balance
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### Waste wooden pallet (`waste_wooden_pallet`)

Record discarded wooden pallets separately from reused pallets and other packaging waste.

- 选定流：Waste wooden pallet
- UUID 状态：unresolved - requires foreground mapping
- 适用条件：Include only when a pallet is discarded inside the foreground boundary; omit otherwise
- 流属性/单位：Mass / kg
- 数量规则：Weighed discarded pallet mass attributed to the product route
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg net reference product
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_packaging_records`
- 来源/状态：`cp_packaging_records`; unresolved Tiangong waste-flow mapping
- 来源：`eu-pef-method-2021`
- 数量范围：Provisional waste-pallet screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：200
  - 单位：kg
  - 基准：per 1,000 kg net reference product; replace with pallet records
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

##### 基本流
## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 多产出或共用准备工序 | 优先用分表、分批、分路线或过程细分避免分配，只纳入归属于声明产品的投入产出。 | `eu-pef-method-2021`; `iso-14044-2006` |
| `allocation_physical_relation` | 无法细分的共用工序 | 仅在能代表资源因果性时，采用机器时间、产量、计量能源或质量等物理关系，并保持聚合物和路线结果分开。 | `eu-pef-method-2021` |
| `allocation_other_relation_fallback` | 无合理物理关系的剩余多功能性 | 只有在说明细分和物理分配为何不可行、价格基准与期间并提供敏感性结果后，才可采用经济等其他关系。 | `eu-pef-method-2021` |
| `allocation_internal_recirculation` | 返回同一前景生产线的纤维 | 经证实的同线回用作为内部循环，不得同时计为外送共产品和新外部投入；保留总流转和净流转记录。 | `eu-textiles-bat-2022` |
| `allocation_exported_fibre_material` | 可销售落棉、不合格纤维或其他外送材料 | 只有具备产品状态和去向证据时才列为共产品，否则列为废物；披露分配，禁止默默施加避免负荷信用。 | `eu-pef-method-2021`; `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipt` | `fibre_preparation_line` | 各聚合物投入身份与质量 | 供应商规范、收货和库存 | 批次、供应商、聚合物、混纤、来源、状态、净质量、水分 | 逐批匹配规范并用库存核对净质量 | kg, kg/kg | 每批 | 与产出一致 | 全部代表场址/生产线 | 仅同质批次可汇总 | 秤校准、供应商证书、批次追溯 |
| `cp_energy_records` | `fibre_preparation_line` | 各原子能源/公用工程流 | 电表、燃料、蒸汽、设备记录 | 载体、表计、燃料量、热值、功率、时间、过程 | 优先分表，否则按有记录的因果驱动计算 | kWh, MJ, Nm3, kg | 连续/每批 | 与生产一致 | 每个纳入过程 | 载体分别汇总 | 表计校准、发票、运行记录、换算因子 |
| `cp_auxiliary_records` | `fibre_preparation_line` | 各原子化学品 | 投料单、流量计、库存 | 产品、供应商、功能、组成、有效分数、投料、批次 | 逐种记录商品质量并核对库存 | kg 商品/有效物 | 每次投料 | 与产品路线一致 | 所有投料线 | 不同物质不得合并 | 投料校准、SDS、批次单、库存核对 |
| `cp_process_mass_balance` | `fibre_preparation_line` | 中间产品、回流与逐种废物 | 称量、计数、库存 | 过程、批次、投入、产出、回流、逐种废物、在制品、水分 | 同一调湿基准建立过程平衡 | kg | 每批/班/活动 | 含在制品变化 | 每条路线 | 路线分别汇总 | 秤校准、平衡表、差异说明、去向 |
| `cp_air_emissions` | `fibre_preparation_line` | 每种空气排放 | 烟道测试、监测或物质特定计算 | 排口、物质、浓度、气量、时间、治理、产量、方法 | 匹配浓度与气量，或用适用因子 | kg, mg/Nm3, Nm3 | 许可/风险频率 | 代表工况 | 每个相关排口 | 逐物质计算，不合并 | 实验室报告、校准、采样和运行记录 |
| `cp_water_wastewater_records` | `wet_thermal_conditioning` | 逐种水流、废水和水排放 | 水表、排水表、化验 | 水源、取水、回用、排水、参数、浓度、处理、产量 | 建立水量平衡并匹配浓度与流量 | m3, kg, mg/L | 每批/连续 | 与处理路线一致 | 全部湿法过程与排口 | 新水、回用水、废水和各排放分别记录 | 表计校准、样品链、实验室、许可记录 |
| `cp_waste_records` | `wet_thermal_conditioning` | 污泥和滤材 | 称量、联单、处置回执 | 废物、过程、净质量、水分、去向、日期 | 每次外送称量并链接产生过程 | kg 湿/干 | 每次 | 与处理产出一致 | 全部条件过程 | 逐种废物和去向汇总 | 称量、联单、回执、水分分析 |
| `cp_packaging_records` | `packing_dispatch` | PE、PP、纸板、木托盘及对应废物 | BOM、领用、规格、废物称量 | 包装种类、材料、单位质量、使用/损坏/废弃数量、库存 | 各材料分别计算出厂和废弃质量 | kg | 每批/活动 | 与参考产出一致 | 全部包装形式 | 材料分别汇总 | 规格、单位质量、库存、废物回执 |
| `cp_reference_output` | `packing_dispatch` | 净产出与限定信息 | 校准秤、放行单、产品规范 | 批次、毛重、包装皮重、净质量、水分、聚合物、混纤、纤维性质、状态、路线 | 毛重减实测包装皮重并核验限定信息 | kg | 每批 | 与所有投入产出一致 | 全部产品/路线 | 路线和产品分别汇总 | 秤校准、放行证、规范、追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 放行产品 | net_fibre_mass = gross_shipped_mass - measured_packaging_tare | gross_shipped_mass; measured_packaging_tare | kg 净纤维 | `eu-pef-method-2021` |
| `calc_normalize_1000kg` | 每个前景量 | normalized_amount = period_or_lot_amount / matched_net_fibre_mass * 1000 kg | period_or_lot_amount; matched_net_fibre_mass | 每 1,000 kg 净产品的量 | `eu-pef-method-2021` |
| `calc_conditioned_mass` | 水分状态换算 | converted_mass = measured_mass * (1 - measured_initial_moisture_fraction) / (1 - declared_target_moisture_fraction) | measured_mass; measured_initial_moisture_fraction; declared_target_moisture_fraction | 声明水分状态下 kg |  |
| `calc_line_mass_balance` | 每过程/期间 | unexplained_difference = inputs + opening_work_in_progress - outputs - exported_waste - closing_work_in_progress；内部回流在同边界抵消 | input_mass; output_mass; exported_waste_mass; opening_work_in_progress; closing_work_in_progress; internal_returns | kg 未解释差异 | `eu-textiles-bat-2022` |
| `calc_shared_energy` | 共用表计 | 仅在设备和负荷有记录时按运行时间×负荷分配，否则披露缺口 | shared_meter_use; equipment_operating_time; measured_or_rated_load; production_mass | 各过程 kWh/MJ | `eu-pef-method-2021`; `eu-textiles-bat-2022` |
| `calc_air_mass_load` | 有组织排放 | substance_mass = concentration * matched_gas_flow * operating_time，并披露基准状态和单位换算 | concentration; gas_flow; operating_time; reference_conditions | 每种物质 kg | `eu-textiles-bat-2022` |
| `calc_water_pollutant_load` | 处理后直接排水 | pollutant_mass = matched_concentration * matched_discharge_volume | concentration; discharge_volume; sample_and_flow_period | 每种物质/参数 kg | `eu-textiles-bat-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 投入和参考产出 | 从供应商、收货、实际路线追溯到放行批次，包含聚合物、混纤、来源、此前加工和产出状态。 | 供应商规范、收货、路线单、放行证；`un-cpc-v3-2025` |
| `dq_route_representativeness` | 汇总数据集 | 未经代表性检验不得合并不同聚合物、混纤、回收含量、助剂、湿/热或设备路线。 | 路线分层清单；`ec-jrc-txt-bref-2023`; `eu-pef-method-2021` |
| `dq_temporal_match` | 全部前景数据 | 使用代表正常运行的近期期间，使投入、产出、在制品、排放和公用工程时间匹配，并识别异常工况。 | 日期化账册、运行和表计记录；`eu-pef-method-2021`; `eu-textiles-bat-2022` |
| `dq_measurement_quality` | 质量、能源、水和排放 | 保留仪器、校准、方法、检出限和换算，逐值声明实测、计算或估计。 | 校准、实验室、发票、表计和计算表；`eu-pef-method-2021`; `eu-textiles-bat-2022` |
| `dq_completeness` | 投入产出清单 | 纳入已知物料、逐种能源/水/化学品、产品、共产品、逐种废物和直接排放；禁止无记录截断。 | 投入产出清单、质量/水量平衡、联单和排口清单；`eu-textiles-bat-2022` |
| `dq_estimate_replacement` | 暂定范围与模型值 | 所有 `reasoned_estimate` 仅为非约束性编制/QA 筛查；发布前须用前景分布或经审查路线证据替换。 | 估计登记、替换决定及来源/前景分布 |
| `dq_source_currency` | 外部指南与标准 | 数据集放行时核查法规、BAT、标准和分类状态，披露为可比性保留的已取代来源。 | 来源复核；`un-cpc-v3-2025`; `eu-textiles-bat-2022`; `iso-14044-2006` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流和产品描述 | 必须使用产品流 UUID 95a493a4-1e51-4eb5-9b7c-e06bf912e993、Mass UUID 93a60a56-a3c8-11da-a746-0800200b9a66、Units of mass UUID 93a60a57-a4c8-11da-a746-0800200c9a66 和 kg；把 “Synthetic Fiber Cloth” 解释为织物而非 CPC 26210 加工后短纤维时拒绝。 | `un-cpc-v3-2025` |
| `validation_scope_state` | 产品类别 | 确认产出是已梳理、精梳或其他纺纱前加工的未纺合成短纤维；拒绝纱线、连续长丝、机织、针织、簇绒、非织造、染色、印花、涂层或后整理产品。 | `un-cpc-v3-2025`; `ec-jrc-txt-bref-2023`; `ifc-textile-ehs-2007` |
| `validation_required_qualifiers` | 参考产品元数据 | 缺失聚合物/混纤、原料来源、纤维性质、加工状态、可选处理、水分、产出形态、地域、路线或报告期时判不完整。 | `eu-pef-method-2021`; `ec-jrc-txt-bref-2023` |
| `validation_route_conditioning` | 数据集汇总 | 拒绝跨聚合物、混纤、原生/回收以及干式、精梳/并条、湿式或热路线的无条件平均，要求路线记录或同质性检验。 | `ec-jrc-txt-bref-2023`; `eu-pef-method-2021` |
| `validation_process_inclusion` | 过程图 | 必须纳入 `fibre_preparation_line` 和 `packing_dispatch`；仅条件满足时纳入 `combing_drawing`、`wet_thermal_conditioning`，拒绝无说明的下游纺织工序流。 | `ec-jrc-txt-bref-2023`; `ifc-textile-ehs-2007` |
| `validation_mass_and_stock_balance` | 物料清单 | 要求净质量排除包装、水分基准匹配、在制品调整，并对未解释物料差异签署说明。 | `eu-textiles-bat-2022`; `eu-pef-method-2021` |
| `validation_dust_and_emissions` | 机械及条件处理路线 | 捕集粉尘、不合格品、治理运行及残余排放须分开；纳入湿/热处理时，水、逐种能源/化学品、逐种废水/废物和排放须同时存在。 | `ifc-textile-ehs-2007`; `eu-textiles-bat-2022` |
| `validation_allocation` | 共用或多产出工序 | 核验优先尝试细分，物理或其他分配须有因果驱动、计算记录和所需敏感性披露；拒绝默示避免负荷信用。 | `eu-pef-method-2021`; `iso-14044-2006` |
| `validation_evidence_status` | 定量值 | 区分采集、计算、外部来源和推理估算；`reasoned_estimate` 不是实测值、法定限值或可发布默认值，必须有替换决定。 | `eu-pef-method-2021` |
| `validation_temporal_completeness` | 前景数据包 | 核验投入、产出、公用工程、废物和排放覆盖同一代表性运行窗口，并披露排除项、异常期间和缺测。 | `eu-pef-method-2021`; `eu-textiles-bat-2022` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 加工设施大门处合成短纤维纺纱前加工的路线、产品和设施特定前景数据集 |
| downstream_use | 只有在方法审查、UUID 补全以及暂定证据替换或批准后，方可作为纱线/纺织品系统的 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 用于已声明 CPC 26210 聚合物、混纤、原料来源、准备路线、地域、期间和产品状态，并连接独立上游纤维制造与下游纺纱数据集 |
| excluded_use | 机织或其他 cloth 制造；纺纱/加捻；初级聚合物或化学纤维制造；人造/再生短纤维；未判定混纤；无条件代理其他聚合物、回收路线、湿/热路线、地域或技术 |
| required_metadata | canonical PCR id；CPC；参考 UUID 和语义限制；聚合物/混纤；原生/回收；纤维长度、线密度、卷曲和油剂；工序；可选处理；水分；产出形态；设施/地域；技术；报告期；分配；上游数据；所有者；审查状态 |
| required_quality_disclosure | 前景/次级值；仪器校准；时间和路线覆盖；质量、水量和库存核对；汇总和分配；未解析 UUID；估计登记；来源版本；异常期间；完整性缺口和不确定性 |
| update_trigger | 新前景测量或审查范围；原子流 UUID 解析；聚合物、混纤、回收含量、化学品、设备、工序、除尘、湿/热处理、包装、分配、上游数据、法规、BAT、分类或参考流语义变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC Version 3.0 Explanatory Notes，26210，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf，检索于 2026-08-12 | 类别身份、纺纱前加工状态及与人造短纤维和人造纤维纱线的区分 |
| `ec-jrc-txt-bref-2023` | 官方指南（`official_guidance`） | 欧盟委员会 JRC，Best Available Techniques Reference Document for the Textiles Industry，TXT BREF，2023，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry，检索于 2026-08-12 | 工序分解、聚合物/路线条件化、准备剂，以及纤维准备、纱线制造和织物制造边界 |
| `eu-textiles-bat-2022` | 官方指南（`official_guidance`） | Commission Implementing Decision (EU) 2022/2508，ELI http://data.europa.eu/eli/dec_impl/2022/2508/oj，检索于 2026-08-12 | 投入产出、能源、水、化学品、废物、排放、监测和管理要求 |
| `ifc-textile-ehs-2007` | 官方指南（`official_guidance`） | IFC，Environmental, Health, and Safety Guidelines for Textile Manufacturing，2007-04-30，https://www.ifc.org/content/dam/ifc/doc/2000/2007-textiles-manufacturing-ehs-guidelines-en.pdf，检索于 2026-08-12 | 合成短纤维与纱线工序区分、人造纤维种类、粉尘来源及封闭/抽风/过滤控制 |
| `eu-pef-method-2021` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279，Annex I PEF Method，ELI http://data.europa.eu/eli/reco/2021/2279/oj，检索于 2026-08-12 | 功能单位归一化、场址投入产出数据、数据质量、细分与分配层级 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006（含 Amd 1:2017 与 Amd 2:2020），https://www.iso.org/standard/38498.html，检索于 2026-08-12 | LCA/LCI 要求、报告框架及欧盟 PEF 引用的分配层级 |
