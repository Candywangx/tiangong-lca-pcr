---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.peas-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷冻豌豆

## 1. 范围与适用性

本 PCR 规定以幼嫩的 *Pisum sativum* L. 豌豆生产无调味速冻豌豆的前景数据生产要求。范围从鲜豌豆接收开始，包括需要时的脱荚、清理、分选、清洗、漂烫、冷却与沥水、速冻、检验、包装，以及出厂冷库放行前的场内冷冻储存。申报产品呈现方式后，可适用于散装或零售包装、分级或未分级、单体速冻（IQF）或块冻豌豆。

农业种植、收获豌豆运至工厂、外购能源/水/包装/制冷剂的生产、出厂后的配送与零售、烹饪食用和生命末期均不在前景边界内。构建完整生命周期模型时应连接相应上游或下游数据集。罐藏、干制、鲜食、混合、调味、带酱或其他非冷冻保藏豌豆不属于本类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.peas-frozen |
| classification_refs | CPC 3.0：21312，Peas, frozen，精确范围参考 |
| covered_products | *Pisum sativum* L. 整粒绿豌豆或菜豌豆速冻产品；分级或未分级；IQF 或块冻；散装或包装；允许含适用产品规范准许且已申报的可选配料 |
| excluded_products | 鲜绿豌豆；干豌豆；罐藏豌豆；非冷冻的其他调制或保藏豌豆；*Vigna* 属田豌豆；豌豆蔬菜混合物；调味或带酱豌豆菜肴；不符合所声明成品规范的后续工业加工用产品 |
| representative_product | 无调味、单体速冻菜豌豆，包装或散装，在工厂冷库放行 |
| production_route | 鲜豌豆接收及可选脱荚；清理、分选与清洗；漂烫；冷却与沥水；速冻；检验与包装；冷冻储存 |
| market_state | 工厂冷库门口的冷冻成品，热中心冻结已完成且产品保持在 -18 °C 或以下，仅允许主管机关规定的已申报温度容差 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 保持所声明产品质量、适合冷链配送及后续烹饪或食用的冷冻食用豌豆 |
| How much | 1 kg 净产品质量，不含任何包装 |
| How well | 洁净、完好、整粒、幼嫩的 *Pisum sativum* 豌豆；充分漂烫并速冻；符合所声明等级、粒径和配料规范；温度稳定后热中心温度不高于 -18 °C |
| How long or cycle | 一个已申报生产批次，直至工厂冷库放行；报告场内储存时长 |
| reference_flow_link | `reference_frozen_peas` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净冷冻豌豆 |
| 参考产品流 | Peas, frozen `7ee41d34-76b1-42c5-8f39-c3cdae327118` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 豌豆物种及声明的品种或类型；分级与否及声明粒径等级；IQF 或块冻呈现；配料与添加剂说明；适用等级或质量规范；散装或包装形式；净质量基准；鲜豌豆接收状态；生产地域与期间；冻结技术；产品放行温度；场内冷冻储存时长；前景分配方法；冷链边界 |

构建前景数据包时，`必需限定信息` 中每项信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中明确声明。缺失限定信息即视为参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 冷冻豌豆参考输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将前景清单归一化为工厂冷库放行的恰好 1 kg 净冷冻豌豆；不计初级、次级和三级包装质量。 |
| `wet_mass_release_basis` | 鲜豌豆、中间豌豆和成品豌豆质量 | Mass | kg | 使用记录过程点的湿基实称质量。记录去皮、秤具标识和称量时间；除非另有披露的计算需要，不转换为干物质。 |
| `water_volume_basis` | 外购水和循环水 | Volume | m3 | 将净外购水与内部循环水分开记录。循环水不得作为新的技术系统输入重复计量；披露任何密度换算。 |
| `energy_carrier_separation` | 电力、燃料和外购蒸汽或热 | Energy or Mass | kWh、MJ 或 kg | 保留计量的能源载体及单位。仅使用有记录的因子换算，清单发布前不得合并电力与热能。 |
| `cold_chain_temperature` | 冻结出口和冷库 | Temperature | °C | 温度稳定后测量产品热中心或经验证的代表性包装温度，并保留记录证明放行及场内储存期间为 -18 °C 或以下。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工场址门口接收的鲜豌豆，并声明是否带荚、收获状态、供应商、产地、接收质量、接收时间及温度 |
| starting_condition_role | 将鲜豌豆转化为冷冻豌豆成品的前景起始条件 |
| product_classification_scope | 以 CPC 3.0 代码 21312 为精确分类参考的 *Pisum sativum* L. 整粒速冻豌豆 |
| recursive_input_rule | 同一批次内产生的冷冻豌豆返工料保留在内部质量平衡中，不作为新的产品输入。外购冷冻豌豆作为独立技术系统输入并连接其上游数据集，不递归地重新建模为本前景路线。 |
| upstream_dataset_requirement | 为接收的鲜豌豆、研究纳入时的进厂运输、电力、燃料或外购热、水供应、包装材料、制冷剂补充量及场外废物/废水处理连接上游数据集 |
| disclosure | 声明脱荚责任、工艺技术、纳入的清洁和公用工程、起止门口、储存时长、温度历史、排除项、分配选择、返工处理及全部上游/下游数据集连接 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景生产 | 纳入接收和可选脱荚、清理、分选、清洗、漂烫、冷却、沥水、速冻、检验、包装、场内冷冻储存、清洁、直接排放、有机剔除物、包装废物和废水，直至工厂冷库放行。 | `codex-cxs-320-2015`; `codex-cxc-8-1976`; `usda-frozen-peas-standard`; `eu-jrc-fdm-bref-2019` |
| `boundary_upstream_links` | 外购输入和场外处理 | 外购输入的生产及场外处理不纳入前景过程，但每项物质量均须连接地域和时间适宜的上游数据集。 | `eu-pef-2021-2279` |
| `boundary_cold_chain` | 场内及下游冷链 | 纳入场内制冷直至放行。出厂冷藏运输、配送和零售属于下游；在生命周期模型中纳入时连接独立冷链数据集并保留温度记录。 | `codex-cxc-8-1976` |
| `boundary_foreground_completeness` | 实测前景流 | 记录全部实测材料、水、能源输入、产品与废物输出、废水和制冷剂直接排放。不得仅因量小而省略前景流；披露无法获得的测量。 | `eu-pef-2021-2279`; `eu-jrc-fdm-bref-2019` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `pea_receipt_preparation` | 豌豆接收与预处理 | required | 始终纳入；豌豆带荚进厂时纳入脱荚 | 前景材料预处理 | 分选清洗后离开的预处理豌豆 kg |
| `blanching_cooling` | 漂烫、冷却与沥水 | required | 本 PCR 产品始终纳入 | 前景酶失活与调理 | 冷却漂烫豌豆 kg |
| `quick_freezing` | 速冻 | required | 始终纳入 | 前景冻结 | 冻结出口冷冻豌豆 kg |
| `packing_cold_storage` | 检验、包装及场内冷库储存 | required | 始终纳入；声明无包装散装转移时包装材料可为零 | 前景成品处理与储存 | 工厂冷库放行的 1 kg 净冷冻豌豆 |

### 过程：豌豆接收与预处理（`pea_receipt_preparation`）

#### 输入

##### 产品流

###### 接收鲜豌豆（`fresh_peas_input`）

记录跨越场址门口的鲜豌豆接收质量；仅当脱荚在前景边界内时包含豆荚。

- 选定流：Fresh green peas
- 流属性/单位：Mass / kg
- 数量规则：归属于生产批次的已接收及剔除质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净冷冻豌豆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_quality`
- 来源：`codex-cxs-320-2015`; `usda-frozen-peas-standard`
- 数量范围：暂定鲜豌豆输入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.02
  - 上限：1.30
  - 单位：kg
  - 基准：每 1 kg 放行净冷冻豌豆；待经评审的产率证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理用水（`preparation_water`）

记录清洗、输送和预处理的净外购水；循环水单独计量且不重复作为外购输入。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：预处理工段计量或与发票核对的净供水量，以过程表计或有记录工程计算分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 加工原料豌豆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_metering`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：冷冻果蔬用水筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：5
  - 上限：43
  - 单位：m3
  - 基准：每 1,000 kg 原料果蔬；仅作宽泛筛选比较，不作为默认值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-jrc-fdm-bref-2019`

###### 预处理电力（`preparation_electricity`）

记录输送机、脱荚机、分选机、清洗机及预处理设备的电力。

- 选定流：Electricity
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或运行小时乘以实测设备功率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 冷冻豌豆成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：预处理电力筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：28
  - 单位：kWh
  - 基准：每 1,000 kg 冷冻蔬菜成品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理豌豆（`prepared_peas_output`）

记录脱荚、清理、分选与清洗后合格并送往漂烫的中间产品。

- 选定流：Prepared green peas
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或鲜豌豆输入减实测预处理剔除物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净冷冻豌豆
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_quality`
- 来源：`usda-frozen-peas-standard`

##### 废物流

###### 预处理剔除物（`preparation_rejects`）

按去向和监管状态记录豆荚、石块、泥土、外来植物材料及预处理中剔除的豌豆。

- 选定流：Organic and field preparation residues
- 流属性/单位：Mass / kg
- 数量规则：按去向实测剔除质量；未应用分配规则不得扣除可销售材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净冷冻豌豆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_wastewater`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定预处理剔除率筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：0.30
  - 单位：kg
  - 基准：每 1 kg 放行净冷冻豌豆；待经评审的工厂数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：漂烫、冷却与沥水（`blanching_cooling`）

#### 输入

##### 产品流

###### 进入漂烫机的预处理豌豆（`prepared_peas_input`）

记录转移的预处理豌豆质量，不重复增加上游负荷。

- 选定流：Prepared green peas
- 流属性/单位：Mass / kg
- 数量规则：记录转移损失后等于 `prepared_peas_output`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净冷冻豌豆
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_quality`
- 来源：`usda-frozen-peas-standard`

###### 漂烫热能（`blanching_thermal_energy`）

记录达到经验证漂烫计划所用的外购蒸汽、燃料或热，各载体分开保留。

- 选定流：Purchased steam, fuel or heat
- 流属性/单位：Energy or Mass / MJ、kWh 或 kg
- 数量规则：计量的载体用量，或由锅炉燃料和有记录效率计算的用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷却漂烫豌豆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`
- 来源：`codex-cxc-8-1976`; `eu-jrc-fdm-bref-2019`
- 数量范围：暂定蒸汽当量筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：0.50
  - 单位：kg steam-equivalent
  - 基准：每 1 kg 冷却漂烫豌豆；待经评审证据替换的宽泛技术估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 漂烫与冷却电力（`blanching_electricity`）

记录分配给该阶段的漂烫机驱动、泵、风机和过程冷却电力。

- 选定流：Electricity
- 流属性/单位：Energy / kWh
- 数量规则：分表用电，或运行小时乘实测设备功率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 冷冻豌豆成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：漂烫机电力筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：1
  - 上限：30
  - 单位：kWh
  - 基准：每 1,000 kg 冷冻蔬菜成品，涵盖所引漂烫和冷却配置
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷却漂烫豌豆（`cooled_blanched_peas`）

记录经验证漂烫计划、冷却和沥水后、速冻前的豌豆。

- 选定流：Cooled blanched peas
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量；与预处理豌豆质量、去除固体及废水所带产品损失核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净冷冻豌豆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_quality`
- 来源：`codex-cxs-320-2015`; `codex-cxc-8-1976`

##### 废物流

###### 漂烫与冷却废水（`blanching_wastewater`）

记录内部回用后的漂烫和冷却排水，并记录处理去向及可获得的污染负荷指标。

- 选定流：Food-processing wastewater
- 流属性/单位：Volume / m3
- 数量规则：分配至批次的实测排水量；可获得时保留 BOD、COD、悬浮物、氮和磷分析
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷冻豌豆成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_wastewater`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定废水量筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：43
  - 单位：m3
  - 基准：每 1,000 kg 原料豌豆；以上游宽泛冷冻果蔬用水证据为边界，待排水数据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：速冻（`quick_freezing`）

#### 输入

##### 产品流

###### 进入冻结机的冷却豌豆（`cooled_peas_input`）

记录转入速冻设备的沥水冷却豌豆。

- 选定流：Cooled blanched peas
- 流属性/单位：Mass / kg
- 数量规则：记录转移损失后等于 `cooled_blanched_peas`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净冷冻豌豆
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_quality`
- 来源：`codex-cxc-8-1976`

###### 冻结电力（`freezing_electricity`）

记录冻结系统、风机、输送机、泵及所分配除霜作业电力，不含另行记录的冷库电力。

- 选定流：Electricity
- 流属性/单位：Energy / kWh
- 数量规则：分表电力，或以有记录运行数据分配的压缩机系统电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 冻结出口冷冻豌豆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：深度冻结电力筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：80
  - 上限：280
  - 单位：kWh
  - 基准：每 1,000 kg 冷冻蔬菜成品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-jrc-fdm-bref-2019`

###### 制冷剂补充量（`refrigerant_makeup`）

记录服务冻结和场内冷库系统的制冷剂购买或添加量，并用维修记录分配。

- 选定流：Refrigerant, technology-specific
- 流属性/单位：Mass / kg
- 数量规则：期初库存加购入减期末库存和有记录回收量，并在冻结和储存间分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行净冷冻豌豆
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- 来源：`codex-cxc-8-1976`
- 数量范围：暂定制冷剂补充筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.005
  - 单位：kg
  - 基准：每 1 kg 放行净冷冻豌豆；待系统特定证据替换的宽泛估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冻结出口冷冻豌豆（`frozen_peas_bulk`）

仅在温度稳定后热中心达到 -18 °C 或以下时记录冷冻豌豆。

- 选定流：Peas, frozen `7ee41d34-76b1-42c5-8f39-c3cdae327118`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转往检验包装的冷冻豌豆净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净冷冻豌豆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_quality`
- 来源：`codex-cxs-320-2015`; `codex-cxc-8-1976`

##### 废物流

##### 基本流

###### 释放到空气的制冷剂（`refrigerant_emission`）

按制冷剂种类记录经核实泄漏；存在回收或库存变化记录时不得将全部补充量当作排放。

- 选定流：Refrigerant emission to air, species-specific
- 流属性/单位：Mass / kg
- 数量规则：制冷剂质量平衡减有记录回收量与留存库存，分配至生产期间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行净冷冻豌豆
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- 来源：`codex-cxc-8-1976`
- 数量范围：暂定直接排放筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.005
  - 单位：kg
  - 基准：每 1 kg 放行净冷冻豌豆；待设备证据替换的宽泛上限筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：检验、包装及场内冷库储存（`packing_cold_storage`）

#### 输入

##### 产品流

###### 进入成品处理的冷冻豌豆（`frozen_peas_bulk_input`）

记录速冻过程的转移，不重复增加上游产品负荷。

- 选定流：Peas, frozen `7ee41d34-76b1-42c5-8f39-c3cdae327118`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录转移损失后等于 `frozen_peas_bulk`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净冷冻豌豆
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_quality`
- 来源：`codex-cxc-8-1976`

###### 包装材料（`packaging_materials`）

按材料和质量记录初级、次级及可归属的三级包装，包括散装内衬与托盘。

- 选定流：Packaging materials, material-specific
- 流属性/单位：Mass / kg
- 数量规则：采购或物料清单质量经库存变化调整，分配至包装净产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净冷冻豌豆
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-cxc-8-1976`; `eu-pef-2021-2279`
- 数量范围：暂定包装质量筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：0.20
  - 单位：kg
  - 基准：每 1 kg 放行净冷冻豌豆；覆盖散装与零售形式，待包装数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷库电力（`cold_storage_electricity`）

采用容积、托盘空间、质量-时间或直接分表计量冻结出口至工厂放行间的场内储存电力。

- 选定流：Electricity
- 流属性/单位：Energy / kWh
- 数量规则：分表用电，或按冷库电量、占用体积和储存时长进行有记录分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 占用冷库容积每年
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_temperature_storage`
- 来源：`eu-jrc-fdm-bref-2019`; `codex-cxc-8-1976`
- 数量范围：冷冻蔬菜储存电力筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：20
  - 上限：65
  - 单位：kWh
  - 基准：每 m3 占用冷库容积每年
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷冻豌豆参考输出（`reference_frozen_peas`）

该包装或声明散装冷冻豌豆输出在工厂冷库放行时实现功能单位。

- 选定流：Peas, frozen `7ee41d34-76b1-42c5-8f39-c3cdae327118`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰好 1 kg 净产品；不含包装
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 放行净冷冻豌豆
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`codex-cxs-320-2015`; `eu-pef-2021-2279`

##### 废物流

###### 包装与成品剔除物（`packing_rejects`）

按材料和去向记录损坏包装、不合格豌豆及撒漏；单独识别返回系统的产品返工料。

- 选定流：Packaging and frozen-product rejects
- 流属性/单位：Mass / kg
- 数量规则：实测剔除质量减有记录内部返工质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净冷冻豌豆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_wastewater`
- 来源：`codex-cxc-8-1976`
- 数量范围：暂定成品剔除筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg
  - 基准：每 1 kg 放行净冷冻豌豆；待经评审批次数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用过程及公用工程 | 通过过程细分及过程表计、批次质量、运行时间、冷库占用容积和储存时长避免分配。仅在能证明并报告额外功能与被替代系统时使用系统扩展。 | `eu-pef-2021-2279` |
| `allocation_internal_rework` | 同一生产系统内返工豌豆 | 将内部返工作为内部转移，质量保留在批次平衡中，不给予避免产品信用。 | `eu-pef-2021-2279` |
| `allocation_residue_status` | 豆荚、剔除豌豆和其他有机残余 | 除非记录稳定的预期产品功能与市场，否则将残余物归为废物。如为共产品，先采用相关且可量化的物理关系；仅当物理分配不可辩护时使用经济价值等其他关系，并披露价格、期间与敏感性。 | `eu-pef-2021-2279`; `eu-jrc-fdm-bref-2019` |
| `allocation_waste_treatment` | 废物与废水处理 | 场内处理可测量时直接归属。共用处理采用废水量及污染负荷等有记录因果驱动分配；场外处理连接实测出厂废物流。 | `eu-pef-2021-2279`; `eu-jrc-fdm-bref-2019` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_quality` | `pea_receipt_preparation`; `blanching_cooling`; `quick_freezing`; `packing_cold_storage` | 豌豆输入、中间物、成品输出及产品质量 | 秤单、批记录及实验室或质量控制记录 | lot_id; timestamp; gross_mass; tare_mass; net_mass; process_point; supplier; pea_type; size_grade; reject_reason; blanch_schedule; freezer_exit_temperature; final_grade | 经校准秤具和以批次关联的书面抽样/放行检测 | kg; °C; min | 每批及每次材料转移 | 完整申报生产季；汇总至少覆盖一个完整代表性生产季 | 数据集所代表的全部前景生产线与储存位置 | 汇总可比净质量；保留批次追踪；计算每 kg 放行产品的质量加权值 | 校准记录、去皮检查、抽样计划、放行批准、异常值日志 |
| `cp_water_metering` | `pea_receipt_preparation`; `blanching_cooling` | 外购水、回用水及排水 | 表计日志、发票及回用回路记录 | meter_id; opening_reading; closing_reading; timestamp; process_area; reuse_volume; downtime; production_mass | 校准表计与发票核对；缺少表计时仅使用有记录工程计算 | m3 | 每日或每批，按月核对 | 与生产数据相同期间 | 覆盖清洗、漂烫、冷却和清洁的场址及工段表计 | 净外购水为总供水减有记录非生产用途；内部回用单列 | 表计校准、发票核对、缺失数据日志 |
| `cp_energy_metering` | `pea_receipt_preparation`; `blanching_cooling`; `quick_freezing`; `packing_cold_storage` | 电力与热能载体 | 分表、燃料发票、锅炉及设备日志 | carrier; meter_id; opening_reading; closing_reading; fuel_mass_or_volume; steam_mass; operating_hours; equipment_power; production_mass | 载体特定表计或发票核对；仅在无分表时工程计算 | kWh; MJ; kg; m3 | 连续或每日，按月核对 | 与生产数据及季节性生产季相同期间 | 全部加工、制冷、储存和所分配共用公用工程 | 保留载体；扣除有记录非生产用途；按因果驱动分配共用负荷 | 表计校准、发票核对、设备运行日志、换算因子来源 |
| `cp_waste_wastewater` | `pea_receipt_preparation`; `blanching_cooling`; `packing_cold_storage` | 固体残余、剔除物、包装废物及废水 | 地磅单、废物联单、排水表计及实验室结果 | waste_type; mass; volume; destination; regulatory_status; rework_mass; BOD; COD; TSS; nitrogen; phosphorus; sampling_time | 按流称量与计量；依场址适用方法做实验室分析 | kg; m3; mg/L | 每次外运或连续排放并代表性采样 | 与生产数据相同期间 | 全部场内废物和废水出口 | 按流及去向汇总；出厂废物中扣除有记录内部返工 | 秤具与表计检查、联单、实验室报告、样品监管链 |
| `cp_refrigerant_inventory` | `quick_freezing`; `packing_cold_storage` | 制冷剂补充、回收及排放 | 制冷剂库存、采购、维护和回收记录 | refrigerant_species; opening_inventory; purchases; additions; recovered_mass; closing_inventory; equipment_id; service_date | 按制冷剂种类和设备系统做年度或生产季质量平衡 | kg | 每次维护；每年或完整生产季核对 | 与生产数据相同期间，含停机维护 | 服务冻结和场内冷库的全部制冷设备 | 排放为期初加采购减期末库存及有记录回收量，披露未解释差额 | 合格维修记录、钢瓶称重、库存核对 |
| `cp_packaging_records` | `packing_cold_storage` | 包装材料输入 | 物料清单、采购及库存记录 | packaging_format; material; unit_mass; units_used; opening_stock; purchases; closing_stock; packed_product_mass | 经核实物料清单与库存变化核对 | kg | 每种包装形式；按月核对 | 与生产数据相同期间 | 全部初级、次级及可归属三级包装 | 每 kg 净包装产品的材料质量；有证据的无包装散装产品报零 | 供应商规范、抽样称重、库存核对 |
| `cp_temperature_storage` | `quick_freezing`; `packing_cold_storage` | 冻结完成、冷库温度及储存电力分配 | 产品探针读数、连续记录器和仓储记录 | lot_id; probe_id; location; timestamp; product_temperature; store_temperature; pallet_days; occupied_volume; electricity; alarms; corrective_action | 经验证温度探针及与库存移动关联的连续冷库监测 | °C; day; m3; kWh | 每批冻结出口；储存连续监测 | 所纳入批次的完整场内储存期 | 全部冻结出口及数据集所用冷库 | 计算质量或容积-时间加权储存需求；温度偏离单列 | 探针校准、记录完整性、报警与纠正措施记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 全部清单量 | 归一化量 = 期间或批次数量 / 放行合格冷冻豌豆净 kg | 采集的流数量；`reference_frozen_peas` 净质量 | 每 1 kg 参考流数量 | `eu-pef-2021-2279` |
| `calc_pea_mass_balance` | 四个过程的豌豆材料 | 鲜豌豆输入 + 外购冷冻豌豆输入 = 参考冷冻豌豆 + 出厂剔除物 + 实测产品损失 + 库存变化；内部转移与返工相互抵消 | `cp_lot_mass_quality` 与 `cp_waste_wastewater` 质量记录 | 已核对豌豆质量平衡及未解释差额 | `eu-pef-2021-2279` |
| `calc_net_water` | 外购水及回用水 | 净技术系统水输入 = 场址总供水 - 有记录非生产用途；内部回用报告但不重复相加 | `cp_water_metering` 表计与发票字段 | 净外购水及回用指标 | `eu-jrc-fdm-bref-2019` |
| `calc_refrigerant_release` | 制冷系统 | 排放 = 期初库存 + 采购 - 期末库存 - 有记录回收量；负值或未解释值须调查 | `cp_refrigerant_inventory` 制冷剂字段 | 分种类直接空气排放 | `codex-cxc-8-1976` |
| `calc_storage_energy` | 场内冷库 | 分配储存电力 = 冷库电力 × 批次占用容积-时间 / 总占用容积-时间；有直接分表时优先分表 | `cp_temperature_storage` 的 kWh、占用 m3 及时长 | 每 kg 参考流 kWh | `eu-jrc-fdm-bref-2019` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 产品和参考流 | 保持接收豌豆至冷冻豌豆成品放行的批次级连接，并保留精确 Tiangong 参考流 UUID、流属性 UUID 与单位组 UUID。 | 批次谱系、批记录和数据集元数据 |
| `dq_temporal_coverage` | 前景活动数据 | 季节性加工覆盖一个完整代表性生产季及所纳入全部场内储存；披露日期、停机和外推。全年运行场址优先连续 12 个月。 | 生产日历、表计覆盖及缺失数据日志 |
| `dq_measurement_quality` | 质量、水、能源、温度及制冷剂记录 | 使用经校准仪器或核对发票。无直接测量时记录估计方法、换算因子、缺失数据处理和不确定性。 | 校准证书、发票、核对及计算文件 |
| `dq_completeness` | 过程清单 | 证明豌豆质量、水和制冷剂平衡已核对；纳入全部必需过程、实测直接排放、废物和废水。量化而非静默舍弃未解释差额。 | 平衡表、废物联单、排水记录及评审签署 |
| `dq_representativeness` | 发布数据集 | 报告企业特定活动数据的技术、地域、时间代表性和精度，并声明豌豆类型、加工路线、冻结技术、包装和储存配置。 | 引用 `eu-pef-2021-2279` 的代表性评估和数据质量评审记录 |
| `dq_temperature_records` | 速冻与储存 | 保留经验证记录，证明温度稳定后热中心达到 -18 °C 或以下且场内冷链条件得到维持。 | 探针校准、冻结出口检查、连续记录和纠正措施 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 除非参考输出为恰好 1 kg 净 `Peas, frozen`，产品流 UUID 为 `7ee41d34-76b1-42c5-8f39-c3cdae327118`、Mass UUID 为 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID 为 `93a60a57-a4c8-11da-a746-0800200c9a66` 且单位为 kg，否则校验失败。 |  |
| `validate_product_scope` | 产品身份 | 产品不是 *Pisum sativum* 整粒速冻豌豆，或未经单独 PCR 判断即包含已排除混合物、调味或保藏路线时，校验失败。 | `codex-cxs-320-2015`; `usda-frozen-peas-standard` |
| `validate_required_qualifiers` | 数据集元数据 | 任一必需限定信息缺失时校验失败，包括呈现方式、质量规范、鲜豌豆接收状态、冻结技术、放行温度、储存时长和包装形式。 | `codex-cxs-320-2015`; `codex-cxc-8-1976` |
| `validate_process_coverage` | 前景边界 | 除非四个必需过程及其关联质量、水、能源、废物、废水和直接排放记录均存在，或提供有记录的零值/不适用值，否则校验失败。 | `eu-jrc-fdm-bref-2019` |
| `validate_blanching` | 漂烫过程 | 未保留漂烫计划及充分酶失活或等效声明质量结果的证据时校验失败。 | `codex-cxs-320-2015`; `codex-cxc-8-1976` |
| `validate_freezing_temperature` | 冻结出口及冷库 | 除非温度稳定后产品热中心达到 -18 °C 或以下，且场内储存记录证明维持在 -18 °C 或以下（仅允许主管机关声明容差），否则校验失败。 | `codex-cxs-320-2015`; `codex-cxc-8-1976` |
| `validate_mass_balance` | 豌豆输入与输出 | 豌豆质量平衡缺失或存在未解释差额时校验失败；数据集须披露平衡结果及剔除物和返工去向。 | `eu-pef-2021-2279` |
| `validate_allocation` | 共用公用工程及共产品 | 使用分配但未记录未采用细分/系统扩展的理由、所选因果关系、全部因子及有机残余物处理时校验失败。 | `eu-pef-2021-2279` |
| `validate_provisional_ranges` | 推理估算 | 所有 `reasoned_estimate` 范围仅作非约束筛选。若未经接受的支持证据即作为报告前景量使用，则发布评审失败。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂冷库门口冷冻豌豆的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 合格冷冻豌豆的场址、技术和产品特定 LCI 建模；在更广泛食品生命周期模型中作为制造阶段数据集连接；仅在功能单位、范围、地域、时间、质量、包装和冷链假设一致时比较 |
| excluded_use | 农业豌豆种植；鲜、罐藏、干制或其他保藏豌豆；混合或调味产品；消费者烹饪；未单独建模冷链的下游配送；未经要求评审的公开比较声明 |
| required_metadata | canonical PCR id 与版本；Tiangong 流身份；CPC 参考；豌豆物种/类型与粒径；配料和等级规范；鲜豌豆接收状态；生产地域、场址与期间；技术；包装形式；净质量；冻结出口和放行温度；场内储存时长；过程覆盖；上游数据集；分配与截断选择 |
| required_quality_disclosure | 每行数据来源；实测与计算数量；表计和秤具覆盖；质量、水和制冷剂平衡结果；缺失数据及估计方法；技术、地域和时间代表性；精度；暂定推理范围；排除项；独立评审状态 |
| update_trigger | 产品规范、原料豌豆状态、工艺路线、漂烫计划、冻结/制冷技术、制冷剂、包装形式、储存配置、分配方法、来源证据、参考 UUID 或重要前景绩效发生变化；否则在所代表生产期间不再现行时评审 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `codex-cxs-320-2015` | standard | FAO 与 WHO，CXS 320-2015，Standard for Quick-Frozen Vegetables（含豌豆附件），官方 PDF：https://www.fao.org/input/download/standards/13928/CXS_320e_2015.pdf（检索于 2026-08-11） | 产品定义、豌豆特征、漂烫、速冻完成、-18 °C 冷链条件、包装及质量要求 |
| `codex-cxc-8-1976` | official_guidance | FAO 与 WHO，CXC 8-1976，Code of Practice for the Processing and Handling of Quick Frozen Foods，官方 Codex 页面：https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/（检索于 2026-08-11） | 工艺分解、漂烫、速冻、包装、温度测量、冷冻储存、运输边界及制冷剂管理 |
| `usda-frozen-peas-standard` | standard | USDA Agricultural Marketing Service，United States Standards for Grades of Frozen Peas，官方 PDF：https://www.ams.usda.gov/sites/default/files/media/Frozen_Peas_Standard%5B1%5D.pdf（检索于 2026-08-11） | 豌豆产品身份、脱荚、清洗、漂烫、分选、沥水、冻结、保藏及质量属性 |
| `eu-jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre，Best Available Techniques Reference Document for the Food, Drink and Milk Industries，JRC118627，2019，官方 PDF：https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf（检索于 2026-08-11） | 冷冻蔬菜工艺结构；水、电力与储存范围；漂烫技术；固体残余；废水及制冷剂相关清单要求 |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279，Product Environmental Footprint Method，官方 PDF：https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279（检索于 2026-08-11） | 功能单位与参考流、生命周期清单、上游连接、前景完整性、分配层级、数据质量及验证 |
