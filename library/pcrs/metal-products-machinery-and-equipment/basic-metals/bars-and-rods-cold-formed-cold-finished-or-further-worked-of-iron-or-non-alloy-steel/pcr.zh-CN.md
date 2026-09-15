---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-cold-formed-cold-finished-or-further-worked-of-iron-or-non-alloy-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铁或非合金钢冷成形、冷加工或进一步加工的棒材和杆材

## 1. 范围与适用性

本 PCR 适用于将热轧铁或非合金钢棒材或杆材在场址内加工为直条产品的门到门过程，其产品状态由冷成形、冷加工或进一步加工所界定。覆盖的作业包括冷拉、磨削、剥皮、矫直、抛光、定径以及路线所需的退火。产品以未涂镀棒材或杆材状态离开前景场址，并应声明钢号、几何形状、表面状态、热处理状态和精整路线。

边界起点为进入加工场址的已声明热轧或外部预处理棒材或杆材，终点为该场址验收合格的成品。上游炼铁、炼钢、铸造、热轧以及外购能源和材料的生产应采用单独的上游数据集。钢丝、合金钢棒材或杆材、角材、型材、断面材、管材、空心型材、仅经热加工的产品，以及以金属涂镀为界定性工序的产品均不在本 PCR 范围内。

联合国 CPC 正式结构确定分类身份；欧盟委员会黑色金属加工 BREF 支持独立的过程边界：该文件将钢棒冷拉描述为以热轧钢棒为原料进行冷拉、磨削或剥皮，并指出冷加工后可能需要退火。首个清单数值应由场址记录产生，而不是采用通用外部平均值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-cold-formed-cold-finished-or-further-worked-of-iron-or-non-alloy-steel |
| classification_refs | CPC 3.0：41261（精确分类参考；映射接受另行治理） |
| covered_products | 以直条交付，交付状态为冷拉、冷成形、磨削、剥皮、抛光、矫直、定径或其他进一步加工的未涂镀铁或非合金钢棒材和杆材 |
| excluded_products | 钢丝；未加工为直条棒材或杆材而直接销售的盘条；合金钢棒材或杆材；角材、型材和断面材；管材和空心型材；仅经锻造、热轧、热拉拔或热挤压的产品；按涂镀工序分类的产品 |
| representative_product | 以热轧棒材为原料，经冷拉或剥皮/磨削并可选退火制得，按直条商业长度、干燥且未涂镀状态在加工场址门口交付的非合金钢光亮棒材 |
| production_route | 已声明原料接收；条件性表面预处理；至少一种冷成形或冷精整作业；条件性退火；最终定径、检验与验收 |
| market_state | 加工场址门口验收合格的直条棒材或杆材；声明钢号、横截面、尺寸与公差、表面精度、热处理状态、涂镀状态及干燥/残油状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足已声明尺寸、表面和力学性能规范的铁或非合金钢冷成形、冷加工或进一步加工棒材或杆材 |
| How much | 1,000 kg 净合格产品 |
| How well | 符合已声明钢号、横截面、尺寸公差、表面精度规范、力学性能状态和验收试验方案 |
| How long or cycle | 截至厂门验收的一次生产周期；不赋予使用阶段服务寿命 |
| reference_flow_link | `finished_bar_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 净合格产品 |
| 参考产品流 | 铁或非合金钢冷成形、冷加工或进一步加工的棒材和杆材 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 铁或非合金钢钢号及规范；碳及已声明合金元素成分或材质证明；棒材或杆材名称；横截面形状；公称尺寸及公差；交付长度；冷成形/冷加工/进一步加工路线；适用时的面积或直径减缩率；表面精度等级；热处理状态；涂镀状态；残油或干燥交付状态；生产场址与地域；参考期；不合格品及内部循环处理 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用最终检验后的经核实净质量。排除托盘、捆带、包裹物、垫木及不合格材料。所有交换归一化至 1,000 kg 合格产品。 |
| `internal_transfer_mass` | 棒材或杆材中间品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 计量每项内部转移或对其进行质量平衡，不得将同一中间品同时计作外部输入和输出；保持钢号与物理状态连续。 |
| `electricity_energy` | 交流电输入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表读数及换算基础。原始记录为 kWh 时按物理恒等式 1 kWh = 3.6 MJ 换算，并同时保留电表值与换算值。 |
| `gas_volume_conditions` | 天然气和保护氮气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 每项气体体积均应报告参比温度、参比压力、干/湿基准及仪表修正；不得合并不同气体。 |
| `waste_wet_dry_basis` | 废酸液、酸性漂洗废水、氧化铁皮、边角料、废润滑油和捕集粉尘 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按适用情况声明湿基或干基以及实测含水率或夹带液体处理；无记录换算时不得推算干质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入加工场址的热轧铁或非合金钢棒材或杆材，或在外部已完成表面预处理的同类原料；声明质量、钢号、几何形状、表面状态及上游数据集 |
| starting_condition_role | 冷成形、冷加工或进一步加工前景系统的外购或转入上游产品输入 |
| product_classification_scope | 以冷成形、冷加工或进一步加工为交付界定性工序的铁或非合金钢棒材和杆材；CPC 3.0 代码 41261 是精确分类参考，但不拥有 PCR 身份 |
| recursive_input_rule | 已属于本 PCR 类别的外购输入必须采用其上游数据集，不得递归重启本 PCR；声明其已有精整状态，并仅核算报告场址新增的前景加工 |
| upstream_dataset_requirement | 按适用情况，为炼钢、铸造、热轧、外部酸洗或除鳞、外购电力、天然气、氮气、盐酸、水、润滑油及场外废物处理采用单独上游数据集 |
| disclosure | 声明原料来源和状态、纳入及排除作业、每项条件路线决定、内部循环、酸再生或漂洗水循环、退火气氛和燃料、排放控制边界、废物去向，以及运输或包装是否位于数据集之外 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start_end` | 前景系统 | 始于已声明热轧或外部预处理棒材/杆材的接收，止于加工场址门口未涂镀成品验收。 | `unstats-cpc-3-0-structure-2025`; `eu-jrc-fmp-bref-2022` |
| `boundary_route_disclosure` | 条件性作业 | 仅纳入实际发生的作业，但应将表面预处理、冷拉/冷成形、磨削、剥皮、矫直、抛光、退火及最终定径分别声明为纳入、不适用或外部提供。 | `eu-jrc-fmp-bref-2022` |
| `boundary_upstream_separation` | 上游生产 | 炼钢、铸造、热轧、外购材料生产、外购能源生产及场外处理采用关联上游数据集，不在本前景清单中重复建立。 | `eu-jrc-fmp-bref-2022` |
| `boundary_no_unlisted_emissions` | 直接排放 | 每项实测或计算的直接排放必须按单一化学物种和环境区室报告；不得使用笼统的“向空气排放”行。 | `eu-jrc-fmp-bref-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `surface_preparation` | 表面预处理与盐酸酸洗 | `conditional` | 报告场址内发生除鳞或盐酸酸洗/漂洗时纳入；采用其他已声明单一药剂或机械路线时排除盐酸专用行 | 前景调理 | 转入冷加工的预处理棒材或杆材质量 |
| `cold_finishing` | 冷成形与冷加工 | `required` | 纳入实际确立产品类别状态的冷拉、磨削、剥皮、矫直、抛光或定径作业 | 前景生产 | 转入后续工序的冷加工棒材或杆材质量 |
| `intermediate_annealing` | 中间退火 | `conditional` | 为取得已声明冶金或力学状态而在冷加工后实施热处理时纳入 | 前景热处理 | 转入最终定径的退火棒材或杆材质量 |
| `final_sizing_inspection` | 最终定径、检验与验收 | `required` | 纳入最终切断/定径、检验、不合格材料核算及参考产品验收 | 前景精整 | 1,000 kg 净合格参考产品 |

### 过程：表面预处理与盐酸酸洗（`surface_preparation`）

#### 输入

##### 产品流

###### 热轧棒材或杆材原料（`hot_rolled_bar_input`）

记录跨越表面预处理边界的热轧铁或非合金钢棒材或杆材，并保留钢号、几何形状、质量、表面状态和上游数据集身份。

- 选定流：热轧铁或非合金钢棒材或杆材
- 流属性/单位：Mass / kg
- 数量规则：进入范围内表面预处理的实测原料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_materials`
- 来源：`unstats-cpc-3-0-structure-2025`; `eu-jrc-fmp-bref-2022`

###### 盐酸溶液（`hydrochloric_acid_input`）

仅在已声明路线采用盐酸酸洗时记录跨界盐酸溶液，并声明交付浓度、新酸/回收酸状态及酸再生边界。

- 选定流：盐酸溶液
- 流属性/单位：Mass / kg
- 数量规则：实测净新酸及补充溶液质量，内部回收酸不计作外部输入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_materials`
- 来源：`eu-jrc-fmp-bref-2022`

###### 漂洗水（`rinse_water_input`）

记录进入酸洗后漂洗工序的工艺用水。UUID 仅确定工艺用水流身份；应保留漂洗用途、水源、水质、地域、密度换算和交付边界限定信息，并将补充水与内部循环水分开计量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测净补充漂洗水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_materials`
- 来源：`eu-jrc-fmp-bref-2022`

###### 酸洗线电力（`pickling_electricity`）

记录范围内泵、传动、通风、抽风、漂洗及表面预处理设备消耗的交流电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / MJ
- 数量规则：无分配的分表电量；无专用电表时采用有文件依据的设备电表计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_energy`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理棒材或杆材中间品（`pretreated_bar_intermediate`）

记录内部转入冷加工的除鳞棒材或杆材。除非在本 PCR 结果之外另行报告，否则该中间品不是市场参考产品。

- 选定流：预处理铁或非合金钢棒材或杆材中间品
- 流属性/单位：Mass / kg
- 数量规则：表面预处理及沥液后的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_outputs`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

###### 含溶解铁的废盐酸酸洗液（`spent_pickling_liquor`）

废盐酸酸洗液离开前景过程进行回收或处理时记录，并声明酸浓度、溶解金属浓度及去向。

- 选定流：含溶解铁的废盐酸酸洗液
- 流属性/单位：Mass / kg
- 数量规则：扣除内部循环后离开前景过程的实测湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_outputs`
- 来源：`eu-jrc-fmp-bref-2022`

###### 含氯化铁的酸性漂洗废水（`acidic_rinse_water`）

记录离开表面预处理系统的特定酸性漂洗废水；不得与废酸洗液或场址其他水流合并。

- 选定流：含氯化铁的酸性漂洗废水
- 流属性/单位：Mass / kg
- 数量规则：扣除循环后排放或转入处理的实测湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_outputs`
- 来源：`eu-jrc-fmp-bref-2022`

###### 捕集氧化铁皮（`iron_oxide_scale_waste`）

记录机械除鳞或表面预处理设备捕集的氧化铁皮，并声明湿/干质量基准及回收去向。

- 选定流：捕集氧化铁皮
- 流属性/单位：Mass / kg
- 数量规则：离开前景过程的实测捕集氧化铁皮质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_outputs`
- 来源：`eu-jrc-fmp-bref-2022`

##### 基本流

###### 排放至空气的氯化氢（`hydrogen_chloride_air`）

记录经范围内捕集和治理后跨越烟囱或无组织排放边界的氯化氢。UUID 确定物质及未特指空气子类别；烟囱排放与无组织排放的监测基准不同时应分别保留记录，且不得将 HCl 与其他酸性气体合并。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：治理后实测烟囱 HCl 质量与量化无组织 HCl 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_emissions`
- 来源：`eu-jrc-fmp-bref-2022`

### 过程：冷成形与冷加工（`cold_finishing`）

#### 输入

##### 产品流

###### 冷加工棒材或杆材原料（`steel_bar_feed`）

记录进入冷加工的单一热轧或预处理铁或非合金钢棒材/杆材。表面预处理内部转移不得同时计作外购输入。

- 选定流：进入冷加工的铁或非合金钢棒材或杆材原料
- 流属性/单位：Mass / kg
- 数量规则：进入实际冷拉、磨削、剥皮、矫直、抛光或定径设备的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_inputs`
- 来源：`eu-jrc-fmp-bref-2022`

###### 冷加工电力（`rolling_electricity`）

记录已声明冷成形和冷加工设备消耗的交流电，仅纳入本过程边界内设备。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / MJ
- 数量规则：冷拉、磨削、剥皮、矫直、抛光和定径的分表电量或有文件依据的设备电表计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_inputs`
- 来源：`eu-jrc-fmp-bref-2022`

###### 金属加工润滑油（`metalworking_lubricant_input`）

使用润滑油时，记录供应至冷加工设备的实际单一种类润滑油，并声明产品名称、黏度等级及新油/回收油状态。

- 选定流：金属加工润滑油
- 流属性/单位：Mass / kg
- 数量规则：跨越过程边界的实测净新油及补充润滑油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_inputs`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷加工棒材或杆材中间品（`cold_finished_bar_intermediate`）

记录转入条件性退火或直接进入最终定径与检验的冷加工中间品，并保留钢号、几何形状、路线及加工硬化状态。

- 选定流：冷加工铁或非合金钢棒材或杆材中间品
- 流属性/单位：Mass / kg
- 数量规则：离开冷加工工序的实测合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_outputs`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

###### 冷加工钢边角料（`steel_offcuts_cold_finishing`）

记录冷加工产生并离开过程供内部循环或外部回收的清洁铁或非合金钢边角料。

- 选定流：冷加工产生的清洁铁或非合金钢边角料
- 流属性/单位：Mass / kg
- 数量规则：按去向实测的质量，排除过程输出计量前已内部返回的材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_outputs`
- 来源：`eu-jrc-fmp-bref-2022`

###### 废金属加工润滑油（`spent_lubricant_oil`）

记录从已声明设备排出并送往处理或回收的废润滑油；实测时声明水分及金属细粉含量。

- 选定流：废金属加工润滑油
- 流属性/单位：Mass / kg
- 数量规则：扣除过滤后内部返回油品的实测离开过程湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_outputs`
- 来源：`eu-jrc-fmp-bref-2022`

###### 捕集钢磨削粉尘（`captured_grinding_dust`）

实施磨削时，记录捕集的铁或非合金钢磨削粉尘；捕集固体废物应与实测颗粒物空气排放分开。

- 选定流：捕集铁或非合金钢磨削粉尘
- 流属性/单位：Mass / kg
- 数量规则：离开除尘设备的实测捕集干质量或湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_outputs`
- 来源：`eu-jrc-fmp-bref-2022`

##### 基本流

### 过程：中间退火（`intermediate_annealing`）

#### 输入

##### 产品流

###### 进入退火的冷加工棒材或杆材（`cold_finished_bar_to_annealing`）

当已声明产品状态需要热处理时，记录转入退火的加工硬化冷加工棒材或杆材。

- 选定流：进入退火的冷加工铁或非合金钢棒材或杆材中间品
- 流属性/单位：Mass / kg
- 数量规则：进入退火炉的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_inputs`
- 来源：`eu-jrc-fmp-bref-2022`

###### 退火用天然气（`natural_gas_input`）

记录为退火炉跨越场址边界的气态天然气，并声明供应地域、燃烧器技术、低位/高位热值口径及参比体积条件。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：经修正的炉窑分表体积；仅可按直接分表或有文件依据的运行时间计算分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_inputs`
- 来源：`eu-jrc-fmp-bref-2022`

###### 退火电力（`annealing_electricity`）

记录炉窑传动、风机、控制、冷却及其他范围内退火设备消耗的交流电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / MJ
- 数量规则：退火分表电量或有文件依据的设备电表计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_inputs`
- 来源：`eu-jrc-fmp-bref-2022`

###### 保护氮气（`protective_nitrogen`）

使用保护气氛时记录供应至退火炉的氮气。不得用氧气替代，也不得将氮气与氢气或其他气氛气体合并。

- 选定流：退火保护气氛用氮气
- 流属性/单位：Volume / m3
- 数量规则：经修正的补充气和吹扫气仪表体积，排除内部循环气氛
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_inputs`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 退火棒材或杆材中间品（`annealed_bar_intermediate`）

记录转入最终定径和检验的退火铁或非合金钢棒材或杆材，并保留炉次、气氛和所得冶金状态。

- 选定流：退火铁或非合金钢棒材或杆材中间品
- 流属性/单位：Mass / kg
- 数量规则：退火及冷却后的实测合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_outputs`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

###### 排放至空气的化石源二氧化碳（`fossil_co2_air`）

记录范围内天然气燃烧产生的直接化石源二氧化碳，并采用场址监测或有文件依据的燃料碳计算边界。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测烟囱质量，或依据计量燃料及经核实燃料成分进行场址计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_outputs`
- 来源：`eu-jrc-fmp-bref-2022`

###### 排放至空气的氮氧化物（`nitrogen_oxides_air`）

采用已声明报告物种记录退火燃烧源氮氧化物，通常以 NO2 质量当量报告，并使用范围内治理后的空气区室。

- 选定流：排放至空气的氮氧化物（以二氧化氮质量当量报告）
- 流属性/单位：Mass / kg
- 数量规则：由浓度和修正干烟气流量计算的实测烟囱质量，保留氧基准和报告物种
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_outputs`
- 来源：`eu-jrc-fmp-bref-2022`

### 过程：最终定径、检验与验收（`final_sizing_inspection`）

#### 输入

##### 产品流

###### 进入最终作业的未退火冷加工棒材或杆材（`cold_finished_bar_to_final`）

仅在不实施退火且冷加工中间品直接进入最终定径和检验时记录本内部转移。

- 选定流：未退火冷加工铁或非合金钢棒材或杆材中间品
- 流属性/单位：Mass / kg
- 数量规则：退火不适用时进入最终作业的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_operations`
- 来源：`eu-jrc-fmp-bref-2022`

###### 进入最终作业的退火棒材或杆材（`annealed_bar_to_final`）

仅在产品经过退火路线时记录本内部转移；同一产品批次不得同时记录两个替代转移行。

- 选定流：进入最终作业的退火铁或非合金钢棒材或杆材中间品
- 流属性/单位：Mass / kg
- 数量规则：退火后进入最终作业的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_operations`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格冷成形、冷加工或进一步加工棒材或杆材（`finished_bar_product`）

本行为参考产品。仅记录通过已声明尺寸、表面、力学性能及产品状态验收要求的净质量。

- 选定流：铁或非合金钢冷成形、冷加工或进一步加工的棒材和杆材
- 流属性/单位：Mass / kg
- 数量规则：按定义为 1,000 kg 净合格参考产品，并以校准的最终质量记录支持
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_operations`
- 来源：`unstats-cpc-3-0-structure-2025`; `eu-jrc-fmp-bref-2022`

##### 废物流

###### 最终定径钢边角料（`final_steel_offcuts`）

记录最终切断或定径产生的清洁铁或非合金钢边角料；场址记录中应单独保留不合格成品，并声明是否内部返工。

- 选定流：最终定径产生的清洁铁或非合金钢边角料
- 流属性/单位：Mass / kg
- 数量规则：按去向实测的离开最终定径质量，扣除内部返工
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_operations`
- 来源：`eu-jrc-fmp-bref-2022`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用前景设备与仪表 | 优先按已声明产品钢号、几何形状和路线细分生产周期、设备时间、材料领用及专用仪表，避免分配。 |  |
| `allocation_internal_recycle` | 棒材、边角料、氧化铁皮、酸、水或润滑油的内部返回 | 不得将内部循环同时计作外部输出和新的外部输入；仅记录净边界交换，并披露循环及清单计量点。 |  |
| `allocation_recoverable_material` | 送往回收的边角料、氧化铁皮、废酸、废润滑油及捕集粉尘 | 报告实测输出流及处理或回收去向；不得在本前景数据集中计入避免负荷收益，下游回收建模属于关联处理数据集或生命周期模型。 |  |
| `allocation_unavoidable_shared_burden` | 细分后仍存在的共用负荷 | 若无法直接计量和细分，则在同一生产周期内按净合格产品质量分配残余共用负荷，披露受影响交换及比例；当分配显著改变结果时进行敏感性检验。 |  |

默认不假设共产品。可销售次级输出应作为单独的具体产品流表示，并在采用残余分配规则前接受审查；不得隐含于边角料或废物流中。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_surface_materials` | `surface_preparation` | 原料、盐酸溶液和漂洗水 | 称重单、罐区领用、购入/转移记录和水表 | lot_id; steel_grade; feed_mass_kg; acid_solution_mass_kg; acid_concentration; recovered_acid_mass_kg; rinse_makeup_water_kg | 校准衡器、罐体质量平衡及专用水表 | kg | 每批，按月核对 | 有代表性的连续 12 个月或完整声明周期 | 所有范围内表面预处理线 | 汇总净外部输入并按合格参考产品质量归一化 | 校准记录、酸库存核对、浓度分析及仪表完整性 |
| `cp_surface_energy` | `surface_preparation` | 交流电输入 | 电表及设备运行记录 | meter_start; meter_end; kWh; equipment_id; production_lot | 优先专用分表；否则采用与场址总表核对的功率×运行时间计算 | kWh and MJ | 每批或每班，按月核对 | 与产品输出相同期间 | 所有范围内酸洗、抽风、泵送和漂洗设备 | 扣除有记录的非过程负荷，kWh 换算 MJ，并按合格产品归一化 | 仪表校准、负荷边界图、运行日志及核对 |
| `cp_surface_outputs` | `surface_preparation` | 预处理转移和特定废物流 | 转移衡器、废物联单、罐体液位差和固体记录 | transfer_mass_kg; spent_liquor_mass_kg; acid_content; dissolved_iron; rinse_waste_mass_kg; scale_mass_kg; wet_dry_basis; destination | 校准衡器、罐体质量平衡及外运记录 | kg | 每批或每次清运 | 与产品输出相同期间 | 完整表面预处理系统至废物交接 | 按原子流和去向汇总并扣除内部循环 | 质量平衡闭合、实验室分析、含水记录及联单 |
| `cp_surface_emissions` | `surface_preparation` | 排放至空气的氯化氢 | 烟道测试、连续/定期监测及无组织评估 | HCl_concentration; gas_flow; run_time; capture_status; abatement_status; method | 经批准烟道方法及有文件依据的无组织量化 | kg HCl | 许可规定频率，并记录批次运行小时 | 与产品输出相同期间 | 过程边界内全部 HCl 排放点 | 浓度×修正烟气流量×运行时间，加同物种量化无组织质量 | 测试报告、检出限、烟气修正及治理设备运行记录 |
| `cp_cold_inputs` | `cold_finishing` | 钢原料、电力和润滑油 | 转移衡器、电表、润滑油领用及设备运行记录 | lot_id; feed_mass_kg; kWh; equipment_id; lubricant_product; lubricant_mass_kg; recovered_lubricant_mass_kg | 校准衡器、专用分表及材料领用记录 | kg; kWh; MJ | 每批或每班 | 有代表性的连续 12 个月或完整声明周期 | 所有范围内冷加工设备 | 按产品批次汇总净边界输入并按合格产品归一化 | 校准、路线日志、库存核对及仪表完整性 |
| `cp_cold_outputs` | `cold_finishing` | 冷加工转移及特定固体或液体废物 | 转移衡器、废钢箱、润滑油排放和除尘器记录 | transfer_mass_kg; offcut_mass_kg; spent_oil_mass_kg; dust_mass_kg; wet_dry_basis; internal_return_mass_kg; destination | 校准衡器及容器特定清运记录 | kg | 每批或每次清运 | 与产品输出相同期间 | 全部冷加工线及捕集设备 | 汇总每项原子输出，扣除有记录内部返回，并按合格产品归一化 | 质量平衡闭合、联单、含水记录及除尘器维护日志 |
| `cp_annealing_inputs` | `intermediate_annealing` | 棒材转移、天然气、电力和氮气 | 转移衡器、修正气体流量计、电表及炉批日志 | lot_id; transfer_mass_kg; gas_m3; gas_reference_conditions; kWh; nitrogen_m3; atmosphere_recirculation; furnace_cycle | 校准衡器及专用修正仪表 | kg; m3; kWh; MJ | 每炉批，按月核对 | 有代表性的连续 12 个月或完整声明周期 | 所有范围内退火炉 | 汇总净补充输入并按合格产品归一化 | 校准、参比条件记录、燃料发票核对及批次追溯 |
| `cp_annealing_outputs` | `intermediate_annealing` | 退火转移和直接燃烧排放 | 转移衡器、燃料碳计算记录及烟道监测 | annealed_mass_kg; fossil_CO2_kg; NOx_concentration; NOx_reporting_species; gas_flow; oxygen_reference; run_time; abatement_status | 校准衡器、经核实燃料碳计算或烟道测量及经批准 NOx 方法 | kg | 转移按每批，排放按规定监测间隔 | 与产品输出相同期间 | 炉窑及所有关联范围内烟囱 | 汇总合格转移及直接排放，并按合格参考产品归一化 | 质量平衡、计算工作簿、燃料分析、烟道报告、检出限及治理记录 |
| `cp_final_operations` | `final_sizing_inspection` | 替代内部原料、合格产品和最终边角料 | 转移和最终衡器、检验记录、废钢箱及返工日志 | lot_id; feed_route; input_mass_kg; accepted_mass_kg; offcut_mass_kg; rejected_mass_kg; rework_mass_kg; grade; dimensions; tolerance; surface_class; heat_treatment_state | 与批次检验和处置记录关联的校准衡器 | kg | 每批 | 有代表性的连续 12 个月或完整声明周期 | 所有最终定径和检验工位 | 仅计一个替代原料路线；汇总净合格输出和净外部边角料，并归一化至 1,000 kg 合格产品 | 校准、材质证明、尺寸和力学试验、不合格/返工追溯及质量平衡闭合 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项外部清单交换 | 归一化量 = 期间交换量 / 期间净合格产品质量 × 1,000 kg | 原子交换记录；合格产品质量 | 每 1,000 kg 合格产品的交换量 |  |
| `calc_electricity_conversion` | 电力行 | MJ = 实测 kWh × 3.6；保留原始 kWh 值及仪表边界 | kWh; meter boundary | MJ 交流电 |  |
| `calc_net_external_material` | 酸、水、润滑油、氮气、废物及内部循环 | 净边界量 = 总加入或移出量 − 有记录的同过程内部返回；不得将场外返回扣作内部循环 | gross records; internal return records; destination | 净外部原子流 |  |
| `calc_stack_mass` | HCl 和 NOx 排放 | 在单位一致并声明氧及参比条件下，排放质量 = 修正浓度 × 修正干烟气流量 × 运行时间；仅对同物种增加单独量化的无组织质量 | concentration; gas flow; time; correction factors; fugitive assessment | kg 排放物种 | `eu-jrc-fmp-bref-2022` |
| `calc_mass_balance_check` | 含钢流 | 闭合差 = 钢原料质量 − 合格产品 − 净含钢废物 − 库存变化；调查残差，不得强制填入废物流 | feed, transfers, product, steel-bearing wastes, inventory change | 质量平衡残差和闭合率 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和含钢输入 | 保持钢号证明、原料状态、路线、横截面、尺寸、公差、表面等级、热处理状态、涂镀状态及合格质量的批次级关联。 | 证明书、工艺流转卡、检验记录及批次核对 |
| `dq_temporal_representativeness` | 全部前景记录 | 在可行时采用有代表性的连续 12 个月；否则披露完整生产周期、季节或利用率限制及其代表性理由。 | 带日期仪表导出、生产日历及周期说明 |
| `dq_completeness` | 过程图和清单 | 核对每个必需过程及每个适用条件过程。仅在有不适用证据时报告零；不得因 UUID 或范围未解决而遗漏适用原子交换。 | 过程适用性矩阵、质量/能源核对及未解决流登记表 |
| `dq_meter_quality` | 质量、电力、气体、水和排放测量 | 保留校准状态、分辨率、覆盖率、估算数据比例及修正方法；估算部分应标识，重要时进行敏感性检验。 | 校准证书、仪表 QA 记录及估算日志 |
| `dq_waste_and_emissions` | 废物和直接排放 | 保留原子身份、湿/干基准、适用时浓度、去向、区室、报告物种、检出限及治理边界。 | 联单、分析、烟道报告及处理合同 |
| `dq_source_boundary` | 上游和场外数据集 | 核实关联数据集不重复前景作业，并披露地域、技术、时间及产品状态差异。 | 数据集映射及边界交叉表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 最终产品不是 1,000 kg 净合格铁或非合金钢棒材/杆材，或缺失任何必需限定信息时，校验失败。 | `unstats-cpc-3-0-structure-2025`; `prc-mof-tariff-terminology-2026` |
| `validate_process_coverage` | 过程图 | 必须包含 `cold_finishing` 和 `final_sizing_inspection`；必须依据路线记录明确判断 `surface_preparation` 和 `intermediate_annealing` 的适用性。 | `eu-jrc-fmp-bref-2022` |
| `validate_atomic_inventory` | 清单行 | 拒绝合并公用工程、合并燃料、合并化学品、笼统废水、笼统残余物、笼统排放以及不能表示单一原子交换的行。 |  |
| `validate_uuid_status` | 参考流和清单流 | 含 UUID 行必须与 Tiangong 直读的基本名称、流类型、分类、属性和单位组相符；每个 UUID 空缺行必须保留在清单未解决项中。 |  |
| `validate_electricity_identity` | 所有电力行 | 仅在声明供应商、地域、电压、技术和交付边界限定信息时使用已采用交流电 UUID；不得替换为未经核实的特定电压消费组合。 |  |
| `validate_material_balance` | 含钢系统 | 调查非零钢质量平衡残差，不得把无法解释的损失强制归入氧化铁皮、粉尘、边角料或排放。 |  |
| `validate_alternative_transfer` | 最终定径输入 | 同一产品批次只能记录 `cold_finished_bar_to_final` 或 `annealed_bar_to_final` 之一，不得同时记录。 | `eu-jrc-fmp-bref-2022` |
| `validate_range_evidence` | 数量范围 | 外部推断范围仅在至少两项相互独立、经原文核实且系统边界、功能单位和产品状态相容的来源支持时方可发布；未解决需求继续采用前景采集要求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 铁或非合金钢冷成形、冷加工或进一步加工棒材和杆材的前景产品转化数据集 |
| downstream_use | `secondary_dataset`; 完成代表性及上游关联审查后可作为 `background_dataset` |
| allowed_use | 在已声明产品、地域、技术和时间覆盖范围内，需要厂门棒材或杆材转化数据集的产品碳足迹、LCA、供应链和过程改进研究 |
| excluded_use | 炼钢或热轧平均值；钢丝、合金钢、型材、管材、涂镀产品、使用阶段或寿命终止代理；未经代表性审查的通用全球数据集 |
| required_metadata | PCR id 及版本状态；CPC 参考；钢号及证明基础；棒材/杆材名称；几何形状和公差；冷加工路线；适用时的面积或直径减缩率；表面等级；退火状态；涂镀及残油状态；场址地域；参考期；产能利用率；原料及上游数据集身份；路线适用性；分配；内部循环；废物去向；排放控制；数据质量及未解决身份披露 |
| required_quality_disclosure | 前景记录覆盖率；实测与估算比例；仪表和衡器校准；质量平衡闭合；条件路线决定；缺失的精确 Tiangong UUID；缺失的独立范围证据；上游地域/技术/时间差异；不确定性及敏感性结果 |
| update_trigger | 钢号系列、原料状态、冷成形或冷加工技术、减缩率或几何形状、退火炉或气氛、能源供应、酸再生或水循环、排放控制、废物去向、分配、场址或代表期改变；或重要 UUID/范围证据缺口解决 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《中央产品分类 3.0 版结构》，代码 41261，2025。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-03） | 正式分类身份，以及与相邻棒材、钢丝、型材、合金钢和管材类别的区分 |
| `eu-jrc-fmp-bref-2022` | `official_guidance` | 欧盟委员会联合研究中心，《黑色金属加工业最佳可行技术（BAT）参考文件》，2022，DOI 10.2760/196475。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf（检索日期 2026-09-03） | 语义生产边界；热轧钢棒的冷拉、磨削和剥皮；条件性退火；表面预处理、能源、材料、废物、水及直接排放采集结构 |
| `prc-mof-tariff-terminology-2026` | `official_guidance` | 中华人民共和国财政部，2026 年税则表，HS 721510/721550/721590 术语。https://m.mof.gov.cn/zcfb/202604/P020260428407579725260.pdf（检索日期 2026-09-03） | 铁或非合金钢、冷加工/冷成形以及条杆类产品的专业中文术语与产品限定信息对齐 |
