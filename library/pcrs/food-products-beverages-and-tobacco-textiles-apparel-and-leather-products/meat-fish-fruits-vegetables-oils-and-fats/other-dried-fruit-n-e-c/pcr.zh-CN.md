---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-dried-fruit-n-e-c
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 其他未另分类干果

## 1. 范围与适用性

本 PCR 覆盖 CPC 3.0 子类 21419 中通过自然或人工方式去除整果、果块或水果混合物水分而制得的适销干果。它适用于未被葡萄干独立类别表示的单一水果和混合水果产品。前景边界从食品级鲜果进厂，或从已披露的同类别干果配料进厂开始，到包装干果在加工厂门口交付为止。种植、外购公用工程与材料生产、分销、零售、使用和包装报废，按下述规则连接背景数据集或排除。

主要依靠糖保存的产品、未声明后续干燥步骤且以渗透脱水为定义性保存路线的产品、果汁、果酱、果泥或果膏、冷冻水果、喷雾干燥果粉和脱水蔬菜不在范围内。干果与坚果混合物仅在销售产品仍属于 CPC 21419，且每种进厂干果和坚果组分的质量与身份分别报告时适用。

生产者必须声明水果种类和品种或混合配方、进厂状态、制备形态、预处理与添加剂、干燥技术与能源、最终水分或水分活度规格、包装形式、储存条件、生产地域和参考期。这些声明用于避免把实质不同的干燥路线和产品状态视为可互换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-dried-fruit-n-e-c |
| classification_refs | CPC 3.0：21419，其他未另分类干果 |
| covered_products | 苹果干、杏干、牛油果干、香蕉或大蕉干、浆果干、椰枣干、无花果干、番石榴干、芒果干、甜瓜干、柑橘类水果干、木瓜干、桃干、柿饼、菠萝干、石榴干、其他干果，以及符合条件的干果混合物或坚果与干果混合物。 |
| excluded_products | 葡萄干；糖渍或蜜饯水果；果汁、果酱、果冻、果泥或果膏；冷冻水果；喷雾干燥果粉；脱水蔬菜；已声明身份属于另一 CPC 子类的产品。 |
| representative_product | 装入密封软包装袋、可直接销售或供进一步食品加工的货架稳定型干果块。 |
| production_route | 接收与制备；可选漂烫；可选硫熏或亚硫酸盐处理；自然、太阳能、对流、热泵、真空、微波辅助或冷冻干燥；均湿与分选；包装；有条件的受控储存。 |
| market_state | 加工厂门口的包装干果，已声明水分或水分活度规格，不假定分销、零售或食用阶段。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在加工厂门口提供符合所声明水果身份和加工路线的适销包装干果。 |
| How much | 1 kg 干果净质量，不含包装质量。 |
| How well | 满足所声明的水果组成、制备形态、水分含量或水分活度、添加剂处理、食品安全和包装完整性销售规格。 |
| How long or cycle | 加工厂门口交付的一次生产输出；不含货架期、分销和使用。 |
| reference_flow_link | 参考流是实现功能单位所需的合格干果净质量。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 干果净质量 |
| 参考产品流 | 其他未另分类干果 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 水果种类及品种或混合配方；产地和进厂状态；整果、切片、切丁、果丹皮或其他制备形态；预处理与添加剂身份；干燥技术；热源和电力来源；最终水分含量及基准或水分活度；产品净质量；包装组件及质量；采用受控储存时的温度和时长；生产地域；参考期；分配选择 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告不含包装的干果净质量；由毛重和皮重推导净重时保留两项原始测量。 |
| `material_mass` | 水果、添加剂、按质量销售的燃料、制冷剂、包装、废物和直接排放 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录实测质量，或用适用于测量温度和组成的有文件依据密度从体积换算。 |
| `moisture_basis` | 进厂、中间和成品水果 | 质量分数 | kg 水/kg 湿产品或 kg 水/kg 干物质 | 每项水分结果声明湿基或干基；未经明确换算不得合并不同基准结果。 |
| `electricity_measurement` | 电力 | 能量 | kWh | 使用电表或账单数据，并用有文件依据的运行记录分配共用电表。 |
| `thermal_energy_measurement` | 外购热或蒸汽 | 能量 | MJ | 报告交付能量；仅测得蒸汽质量和状态时，根据有文件依据的压力、温度和冷凝水回流计算焓。 |
| `fuel_measurement` | 天然气、液化石油气、柴油和木颗粒 | 记录所用的质量、体积和能量 | kg、m3、L 或 MJ | 保留采购单位，以供应商或辖区特定热值和密度换算，并保留使用低位还是高位热值。 |
| `water_measurement` | 工艺与清洁用水 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实测水质量，或用有文件依据的水密度换算计量体积；循环水与补充水分开。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工厂接收的食品级鲜果，或用于符合条件混合物的已披露外购干果或坚果配料。 |
| starting_condition_role | 加工厂门口前景入口；上游种植、采收和供应商加工由连接的上游数据集表示。 |
| product_classification_scope | 仅限 CPC 3.0 子类 21419，并受本 PCR 的排除项和已声明市场身份约束。 |
| recursive_input_rule | 同类别外购干果作为产品投入记录一次并连接其上游数据集；不在本前景数据包内递归重建其生产。 |
| upstream_dataset_requirement | 将水果、其他配料、包装组件、电力、热、燃料、供水、化学品、制冷剂和外部废物处理连接到地域和技术代表性适当的上游数据集。 |
| disclosure | 披露水果身份、制备和干燥路线、可选过程、公用工程产生方式、场内或外部处理、包装形式、储存、截断、分配以及任何缺失的上游数据集。 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_foreground_steps` | 前景生产 | 纳入接收、分选、清洗与制备、每项实际预处理、干燥、均湿、包装、清洁，以及场内实际发生的受控储存或废水处理。 | `fao-processing-dried-fruits-2004`; `codex-cxc-3-1969` |
| `boundary_complete_inventory` | 材料、能源、废物和基本流 | 清点跨越所声明边界的每项环境相关投入、废物和直接排放；不得仅因数量小而遗漏。 | `eu-pef-2021-2279` |
| `boundary_upstream_links` | 外购投入 | 用上游数据集表示鲜果、外购干果配料、公用工程、燃料、化学品、制冷剂和包装的生产，不得将其作为无负荷投入。 | `eu-pef-2021-2279` |
| `boundary_downstream_exclusions` | 下游阶段 | 除非研究目标明确扩展边界，否则排除分销、零售、消费者储存与使用及包装报废；任何扩展均单独声明。 | `eu-pef-2021-2279` |
| `boundary_hygiene_controls` | 食品接触作业 | 纳入实际卫生和危害控制产生的实测清洁用水、化学品、能源、废水和废弃产品。 | `codex-cxc-1-1969`; `codex-cxc-3-1969` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receive_and_prepare` | 水果接收、分选、清洗和制备 | `required` | 始终纳入。 | 前景原料制备。 | kg 待干燥水果 |
| `blanching` | 水果漂烫 | `conditional` | 采用热水或蒸汽漂烫时纳入。 | 前景预处理。 | kg 待干燥水果 |
| `sulphiting` | 水果硫熏或亚硫酸盐处理 | `conditional` | 使用单质硫、焦亚硫酸钠或焦亚硫酸钾时纳入。 | 前景预处理与保藏。 | kg 待干燥水果 |
| `drying` | 水果干燥 | `required` | 始终纳入；声明实际技术和热源。 | 前景去除水分。 | kg 干果 |
| `conditioning` | 干果均湿、检验和分选 | `required` | 始终纳入。 | 前景产品整理。 | kg 均湿后干果 |
| `packaging` | 干果包装 | `required` | 始终纳入。 | 前景包装和参考产品输出。 | 1 kg 包装干果净质量 |
| `cold_storage` | 受控冷藏 | `conditional` | 加工厂门口交付前使用制冷时纳入。 | 前景储存。 | kg 包装干果及储存时长 |
| `sanitation` | 食品接触设备清洗消毒 | `required` | 纳入被表示生产实际执行的卫生方案。 | 前景卫生支持。 | 生产批次或 kg 参考产品 |
| `wastewater_treatment` | 场内废水处理 | `conditional` | 任何工艺废水在前景设施内处理或排放时纳入。 | 前景处理与直接排放。 | kg 进水废水 |

### 过程：水果接收、分选、清洗和制备（`receive_and_prepare`）

#### 输入

##### 产品流

###### 接收鲜果（`raw_fruit`）

食品级水果入厂后，在分选和制备前按批称量。

- 选定流：待干燥鲜果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按水果种类、品种、产地和批次实测进厂净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`codex-cxc-3-1969`

###### 清洗用水（`wash_water`）

进入水果清洗的饮用水与循环水分开记录。

- 选定流：饮用水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：水果清洗的计量或槽体平衡补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 待干燥水果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater`
- 来源：`codex-cxc-3-1969`

###### 制备用电（`preparation_electricity`）

输送、清洗、去皮、切分及制备通风用电由电表或运行记录分配。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：实测电量或有文件依据的共用电表分摊量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 待干燥水果
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_fuel`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 待干燥水果（`prepared_fruit_output`）

验收、清洗并制备后的水果在预处理或直接干燥前称量。

- 选定流：待干燥水果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：转入预处理或干燥的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每制备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`fao-processing-dried-fruits-2004`

##### 废物流

###### 剔除鲜果（`rejected_fruit`）

损伤、腐烂、污染或其他不合格水果在确定处理去向前称量。

- 选定流：剔除鲜果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按去向实测剔除质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 待干燥水果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`codex-cxc-3-1969`

###### 果皮废物（`peel_waste`）

采用去皮时，去除的果皮单独记录。

- 选定流：果皮废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按处理或回收去向实测果皮质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 待干燥水果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

###### 果核和硬核废物（`pit_stone_waste`）

去除的果核或硬核与其他制备残余物分开称量。

- 选定流：果核和硬核废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按去向实测果核和硬核质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 待干燥水果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

###### 果心废物（`core_waste`）

采用去芯时，果心单独称量。

- 选定流：果心废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按去向实测果心质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 待干燥水果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

###### 水果清洗废水（`washing_wastewater`）

水果清洗排出的废水在场内或外部处理前计量。

- 选定流：水果清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量排放量或水量平衡，并记录处理去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 待干燥水果
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_wastewater`
- 来源：`codex-cxc-3-1969`

##### 基本流

### 过程：水果漂烫（`blanching`）

#### 输入

##### 产品流

###### 进入漂烫的水果（`fruit_input_blanching`）

进入有条件漂烫作业的制备水果按批称量。

- 选定流：漂烫用制备水果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每漂烫批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`fao-processing-dried-fruits-2004`

###### 漂烫用水（`blanching_water`）

采用热水漂烫时记录补充水。

- 选定流：饮用水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量或槽体平衡补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 漂烫水果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater`
- 来源：`fao-processing-dried-fruits-2004`

###### 漂烫蒸汽（`blanching_steam`）

采用蒸汽漂烫时，外购蒸汽与其他热载体分开记录。

- 选定流：蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：根据实测蒸汽质量和有文件依据的状态计算交付能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 漂烫水果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_fuel`
- 来源：

###### 漂烫用电（`blanching_electricity`）

运行漂烫时记录泵、控制装置和漂烫设备用电。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：实测电量或有文件依据的共用电表分摊量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 漂烫水果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_fuel`
- 来源：

###### 柠檬酸（`citric_acid`）

防褐变或预处理浴使用食品级柠檬酸时按批记录。

- 选定流：柠檬酸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：投入漂烫或预处理浴的柠檬酸实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 漂烫水果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`fao-processing-dried-fruits-2004`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 待干燥漂烫水果（`blanched_fruit_output`）

漂烫水果沥水后、干燥或进一步预处理前称量。

- 选定流：待干燥漂烫水果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测沥水后输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每漂烫批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

##### 废物流

###### 漂烫废水（`blanching_wastewater`）

废漂烫水和沥出浴液在处理前计量。

- 选定流：水果漂烫废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量排放量或浴液质量平衡，并记录处理去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 漂烫水果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_wastewater`
- 来源：

##### 基本流

### 过程：水果硫熏或亚硫酸盐处理（`sulphiting`）

#### 输入

##### 产品流

###### 进入亚硫酸盐处理的水果（`fruit_input_sulphiting`）

进入硫处理的制备或漂烫水果按批称量。

- 选定流：亚硫酸盐处理用制备水果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`codex-cxc-3-1969`; `fao-processing-dried-fruits-2004`

###### 亚硫酸盐处理用水（`sulphiting_water`）

采用湿法亚硫酸盐处理时，配制浸渍液的水单独计量。

- 选定流：饮用水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：配制亚硫酸盐溶液的实测用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 亚硫酸盐处理水果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater`
- 来源：`fao-processing-dried-fruits-2004`

###### 焦亚硫酸钠（`sodium_metabisulphite`）

使用食品级焦亚硫酸钠时独立记录。

- 选定流：焦亚硫酸钠
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按批实测投加质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 亚硫酸盐处理水果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`fao-processing-dried-fruits-2004`

###### 焦亚硫酸钾（`potassium_metabisulphite`）

以焦亚硫酸钾替代焦亚硫酸钠时独立记录。

- 选定流：焦亚硫酸钾
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按批实测投加质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 亚硫酸盐处理水果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`fao-processing-dried-fruits-2004`

###### 单质硫（`elemental_sulphur`）

采用干法硫熏时，硫熏室内燃烧的单质硫独立记录。

- 选定流：硫
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测硫投加量，并记录返回或废弃的未燃残余物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 硫熏水果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`fao-processing-dried-fruits-2004`

###### 亚硫酸盐处理用电（`sulphiting_electricity`）

溶液配制、泵送和硫熏室通风用电在实际使用时记录。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：实测电量或有文件依据的共用电表分摊量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 亚硫酸盐处理水果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_fuel`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 待干燥亚硫酸盐处理水果（`sulphited_fruit_output`）

处理水果在沥水或硫熏室处理后、干燥前称量。

- 选定流：待干燥亚硫酸盐处理水果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测处理后输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

##### 废物流

###### 废亚硫酸盐溶液（`spent_sulphite_solution`）

废亚硫酸盐浸渍液与其他废水分开计量并进入实际处理路线。

- 选定流：废亚硫酸盐溶液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测浴液排放质量及残余亚硫酸盐浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 亚硫酸盐处理水果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater`
- 来源：`fao-processing-dried-fruits-2004`

##### 基本流

###### 硫熏二氧化硫排入空气（`sulphur_dioxide_sulphiting`）

硫熏室释放的二氧化硫根据用硫量、经核验的捕集量或残余记录计算，或直接测量。

- 选定流：二氧化硫，空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：场址测量，或扣除产品残留硫和回收残余物的批次硫平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 硫熏水果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`codex-cxc-3-1969`

### 过程：水果干燥（`drying`）

#### 输入

##### 产品流

###### 待干燥水果（`fruit_input_drying`）

进入所声明干燥技术的水果称量并记录水分基准。

- 选定流：待干燥水果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测投入质量，并记录水分含量及湿基或干基
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每干燥批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_operation`
- 来源：`sagar-kumar-drying-2010`

###### 干燥用电（`drying_electricity`）

风机、热泵、真空泵、制冷、微波或红外发生器、控制与输送用电合并为一个电力交换，但不与热或燃料合并。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：被表示生产的干燥系统实测电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_fuel`
- 来源：`sagar-kumar-drying-2010`

###### 干燥外购蒸汽（`purchased_steam`）

使用外购蒸汽时，跨越干燥边界的蒸汽单独记录。

- 选定流：蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：根据蒸汽质量及有文件依据的供汽与冷凝水状态计算交付能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_fuel`
- 来源：

###### 场内干燥供热用天然气（`natural_gas`）

场内燃烧供干燥热的天然气与其他燃料分开记录。

- 选定流：天然气
- 流属性/单位：能量 / MJ
- 数量规则：计量燃料并以有文件依据的热值换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_fuel`
- 来源：

###### 场内干燥供热用液化石油气（`liquefied_petroleum_gas`）

场内燃烧供干燥热的液化石油气与天然气和柴油分开记录。

- 选定流：液化石油气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据账单和库存变化计算实测液化石油气质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_fuel`
- 来源：

###### 场内干燥供热用柴油（`diesel_fuel`）

场内干燥供热或专用发电机使用的柴油单独记录。

- 选定流：柴油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：根据交付和库存记录计算实测柴油质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_fuel`
- 来源：

###### 场内干燥供热用木颗粒（`wood_pellets`）

场内燃烧供干燥热的木颗粒与化石燃料分开记录。

- 选定流：木颗粒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测木颗粒质量并记录水分与热值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_fuel`
- 来源：

###### 干燥设备 R134a 制冷剂补充量（`refrigerant_r134a_drying`）

热泵或制冷辅助干燥设备使用 R134a 时独立记录其补充量。

- 选定流：1,1,1,2-四氟乙烷（R134a）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采购量加期初库存，减期末库存和回收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`
- 来源：

###### 干燥设备氨 R717 制冷剂补充量（`refrigerant_r717_drying`）

制冷辅助干燥设备使用 R717 时独立记录氨补充量。

- 选定流：氨（R717）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采购量加期初库存，减期末库存和回收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 干果输出（`dried_fruit_output`）

干燥机输出冷却后称量，并按所声明水分或水分活度规格检测。

- 选定流：干果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测合格干燥机输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每干燥批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_operation`
- 来源：`codex-cxc-3-1969`

##### 废物流

###### 干燥冷凝水（`drying_condensate`）

热泵、真空或冷冻干燥系统排出的冷凝水与清洗废水分开计量。

- 选定流：水果干燥冷凝水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量或容器平衡得到的送处理或回用冷凝水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_wastewater`
- 来源：

##### 基本流

###### 蒸发水排入空气（`evaporated_water`）

水果中去除并排入空气的水，根据实测水果水分平衡扣除收集冷凝水后得到。

- 选定流：水，空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据投入水果、干燥输出、收集冷凝水和其他实测水损失进行水分质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_operation`
- 来源：

###### 燃烧化石二氧化碳（`carbon_dioxide_fossil`）

场内天然气、液化石油气或柴油燃烧的化石二氧化碳与生物源二氧化碳分开报告。

- 选定流：二氧化碳，化石源，空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：烟气测量，或以采集燃料量、碳含量和氧化因子进行燃料特定计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### 燃烧生物源二氧化碳（`carbon_dioxide_biogenic`）

木颗粒燃烧的生物源二氧化碳与化石二氧化碳分开报告。

- 选定流：二氧化碳，生物源，空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：烟气测量，或以木颗粒量、碳含量和氧化因子进行生物质碳平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### 燃烧甲烷（`methane_combustion`）

所有场内干燥燃料燃烧的甲烷按燃料特定记录汇总为单一污染物流。

- 选定流：甲烷，空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：烟气测量，或各燃料量乘有文件依据的甲烷因子后求和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### 燃烧氧化亚氮（`nitrous_oxide_combustion`）

场内干燥燃料燃烧的氧化亚氮独立量化。

- 选定流：氧化亚氮，空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：烟气测量，或各燃料量乘有文件依据的氧化亚氮因子后求和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### 燃烧氮氧化物（`nitrogen_oxides_combustion`）

场内干燥燃料燃烧的氮氧化物与其他空气污染物分开量化。

- 选定流：氮氧化物，空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：烟气测量，或各燃料量乘有文件依据的氮氧化物因子后求和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### 燃烧二氧化硫（`sulphur_dioxide_combustion`）

场内燃料燃烧的二氧化硫与硫熏排放分开量化。

- 选定流：二氧化硫，空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：烟气测量，或利用采集燃料组成进行燃料硫平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### 燃烧一氧化碳（`carbon_monoxide_combustion`）

场内干燥燃料燃烧的一氧化碳独立量化。

- 选定流：一氧化碳，空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：烟气测量，或各燃料量乘有文件依据的一氧化碳因子后求和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### 燃烧细颗粒物（`particulate_matter_2_5_combustion`）

场内燃烧燃料时，空气动力学直径不大于 2.5 微米的颗粒物独立量化。

- 选定流：颗粒物，小于 2.5 微米，空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：烟气测量，或各燃料量乘有文件依据的 PM2.5 因子后求和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### 干燥设备 R134a 泄漏（`r134a_leak_drying`）

干燥设备排放的 R134a 由制冷剂平衡计算并单独报告。

- 选定流：1,1,1,2-四氟乙烷（R134a），空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：制冷剂平衡减去回收和转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`
- 来源：

###### 干燥设备氨 R717 泄漏（`r717_leak_drying`）

干燥设备排放的氨由制冷剂平衡计算并单独报告。

- 选定流：氨（R717），空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：制冷剂平衡减去回收和转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干果输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`
- 来源：

### 过程：干果均湿、检验和分选（`conditioning`）

#### 输入

##### 产品流

###### 进入均湿的干果（`dried_fruit_input_conditioning`）

从干燥机转出的干果在均湿和最终分选前称量。

- 选定流：干果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每均湿批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`fao-processing-dried-fruits-2004`

###### 均湿用电（`conditioning_electricity`）

输送、检验、分级和均湿设备用电单独记录。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：实测电量或有文件依据的共用电表分摊量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 均湿后干果
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_fuel`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 均湿后干果（`conditioned_dried_fruit`）

水分均衡、检验和分选后的合格干果在包装前称量。

- 选定流：均湿后干果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每均湿批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

##### 废物流

###### 干果碎屑（`dried_fruit_fines`）

分级去除的小颗粒和碎屑称量并记录实际去向。

- 选定流：干果碎屑
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按去向实测碎屑质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 均湿后干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

###### 均湿分选废品（`conditioning_rejects`）

最终检验去除的霉变、焦糊、污染或其他不合格干果单独称量。

- 选定流：废弃干果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按原因和去向实测废品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 均湿后干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`codex-cxc-3-1969`

##### 基本流

### 过程：干果包装（`packaging`）

#### 输入

##### 产品流

###### 包装用均湿后干果（`conditioned_fruit_input_packaging`）

进入包装的均湿后干果与包装材料分开称量。

- 选定流：均湿后干果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：进入灌装机的实测水果净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

###### 低密度聚乙烯袋膜（`ldpe_film`）

作为主包装袋或热封层的 LDPE 在使用时独立称量。

- 选定流：低密度聚乙烯薄膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：领用膜质量减退回可用膜，并与包装件数核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装干果
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`fao-processing-dried-fruits-2004`

###### 聚丙烯袋膜（`polypropylene_film`）

包装中使用聚丙烯薄膜时独立称量。

- 选定流：聚丙烯薄膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：领用膜质量减退回可用膜，并与包装件数核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装干果
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：

###### 聚对苯二甲酸乙二醇酯袋膜（`pet_film`）

PET 作为复合层或主膜时独立称量。

- 选定流：聚对苯二甲酸乙二醇酯薄膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：领用膜质量减退回可用膜，并与包装件数核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装干果
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：

###### 瓦楞纸板运输箱（`corrugated_board`）

二次包装用瓦楞纸板与主包装分开称量。

- 选定流：瓦楞纸板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：纸箱数乘经核验单件质量，并与收货和库存变化核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装干果
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：

###### 纸标签（`paper_label`）

使用纸标签时作为独立包装组件记录。

- 选定流：纸标签
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：标签数乘经核验单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装干果
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：

###### 包装用电（`packaging_electricity`）

灌装、封口、打码、贴标和装箱用电与包装材料分开记录。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：实测电量或有文件依据的共用电表分摊量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装干果
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_fuel`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装其他未另分类干果（`reference_product_output`）

合格包装干果按水果净质量报告；包装质量保留在各投入行。

- 选定流：其他未另分类干果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 kg 合格干果净输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：
- 来源：`eu-pef-2021-2279`

##### 废物流

###### LDPE 包装边角料（`packaging_scrap_ldpe`）

LDPE 修边料和不合格 LDPE 包装单独称量。

- 选定流：废低密度聚乙烯薄膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按去向实测边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

###### 聚丙烯包装边角料（`packaging_scrap_polypropylene`）

聚丙烯修边料和不合格包装单独称量。

- 选定流：废聚丙烯薄膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按去向实测边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

###### PET 包装边角料（`packaging_scrap_pet`）

PET 修边料和不合格包装单独称量。

- 选定流：废聚对苯二甲酸乙二醇酯薄膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按去向实测边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

###### 瓦楞纸板包装废料（`packaging_scrap_corrugated_board`）

损坏纸箱和瓦楞纸板边角料与塑料废料分开称量。

- 选定流：废瓦楞纸板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按去向实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

###### 纸标签废料（`packaging_scrap_paper`）

不合格纸标签和离型纸废物在相关时单独称量。

- 选定流：废纸标签
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按去向实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 包装干果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

##### 基本流

### 过程：受控冷藏（`cold_storage`）

#### 输入

##### 产品流

###### 进入冷藏的包装干果（`packaged_fruit_input_storage`）

进入受控冷藏的包装干果按质量和停留时间记录。

- 选定流：包装干果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测产品质量和储存时长
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 kg 冷藏包装干果
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage`
- 来源：`codex-cxc-3-1969`

###### 冷藏用电（`cold_storage_electricity`）

制冷、风机、照明和控制用电按实测储存负荷与时长分配。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：按有文件依据的质量-时间或库房记录分配实测冷藏电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 kg 冷藏包装干果及所声明时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_storage`
- 来源：

###### 冷藏 R134a 制冷剂补充量（`refrigerant_r134a_storage`）

冷藏系统使用 R134a 时独立记录补充量。

- 选定流：1,1,1,2-四氟乙烷（R134a）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采购量加期初库存，减期末库存和回收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 冷藏包装干果及所声明时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`
- 来源：

###### 冷藏 R404A 制冷剂补充量（`refrigerant_r404a_storage`）

冷藏系统使用 R404A 时独立记录补充量。

- 选定流：R404A 制冷剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采购量加期初库存，减期末库存和回收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 冷藏包装干果及所声明时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 离开冷藏的包装干果（`packaged_fruit_output_storage`）

出库包装产品称量，并与冻结、废弃和期初库存核对。

- 选定流：包装干果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测放行产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每储存批次
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage`
- 来源：

##### 废物流

##### 基本流

###### 冷藏 R134a 泄漏（`r134a_leak_storage`）

冷藏系统排放的 R134a 由制冷剂平衡计算。

- 选定流：1,1,1,2-四氟乙烷（R134a），空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：制冷剂平衡减去回收和转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 冷藏包装干果及所声明时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`
- 来源：

###### 冷藏 R404A 泄漏（`r404a_leak_storage`）

冷藏系统排放的 R404A 由制冷剂平衡计算。

- 选定流：R404A 制冷剂，空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：制冷剂平衡减去回收和转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 冷藏包装干果及所声明时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`
- 来源：

### 过程：食品接触设备清洗消毒（`sanitation`）

#### 输入

##### 产品流

###### 清洁用水（`sanitation_water`）

食品接触设备和房间清洁用饮用水与水果清洗水分开计量。

- 选定流：饮用水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：分配给被表示生产批次的实测清洁用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation`
- 来源：`codex-cxc-1-1969`; `codex-cxc-3-1969`

###### 氢氧化钠清洗剂（`sodium_hydroxide_cleaning`）

碱性清洗液使用的氢氧化钠独立记录。

- 选定流：氢氧化钠
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：投入清洗液的实测活性氢氧化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation`
- 来源：

###### 过氧乙酸消毒剂（`peracetic_acid_sanitizer`）

消毒用过氧乙酸与碱性清洗剂分开记录。

- 选定流：过氧乙酸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：投入消毒液的实测活性过氧乙酸质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation`
- 来源：

###### 清洁用电（`sanitation_electricity`）

泵、高压清洗机和清洁加热控制用电单独记录。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：实测电量或有文件依据的共用电表分摊量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 清洗废水（`cleaning_wastewater`）

废清洗消毒液与工艺废水分开计量。

- 选定流：食品加工清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量排放量或清洁用水和溶液平衡，并记录处理去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation`
- 来源：

##### 基本流

### 过程：场内废水处理（`wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理用电（`wastewater_treatment_electricity`）

场内废水泵送、曝气、混合和脱水用电单独记录。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：依据进水记录分配给干果废水的实测处理电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：

###### 废水处理用氢氧化钠（`wastewater_treatment_sodium_hydroxide`）

场内处理调节 pH 投加的氢氧化钠与清洗用途分开记录。

- 选定流：氢氧化钠
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测投加的活性氢氧化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：

##### 废物流

###### 水果清洗废水进水（`washing_wastewater_input_treatment`）

进入场内处理的水果清洗废水作为独立进水流计量。

- 选定流：水果清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测进水质量并与制备过程输出核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：

###### 水果漂烫废水进水（`blanching_wastewater_input_treatment`）

进入场内处理的漂烫废水作为独立进水流计量。

- 选定流：水果漂烫废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测进水质量并与漂烫过程输出核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：

###### 废亚硫酸盐溶液进水（`spent_sulphite_solution_input_treatment`）

因含亚硫酸盐负荷，进入场内处理的废亚硫酸盐溶液独立计量。

- 选定流：废亚硫酸盐溶液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测进水质量并与亚硫酸盐处理过程输出核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：

###### 清洗废水进水（`cleaning_wastewater_input_treatment`）

进入场内处理的清洗废水作为独立进水流计量。

- 选定流：食品加工清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测进水质量并与清洁过程输出核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：

###### 干燥冷凝水进水（`drying_condensate_input_treatment`）

进入场内处理的干燥冷凝水与其他进水流分开计量。

- 选定流：水果干燥冷凝水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测进水质量并与干燥过程输出核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废水处理污泥（`wastewater_sludge`）

场内处理排出的污泥在所声明脱水状态下计量并记录去向。

- 选定流：废水处理污泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测湿污泥质量、干固体含量和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：

##### 基本流

###### 处理水排入地表水（`treated_water_discharge`）

排入地表水的最终处理出水与其中污染物负荷分开计量。

- 选定流：水，地表水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：排放点实测最终出水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：

###### 化学需氧量排入水体（`chemical_oxygen_demand_to_water`）

最终出水 COD 负荷由排放流量和代表性浓度测量计算。

- 选定流：化学需氧量，水体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：出水质量或体积乘实测 COD 浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：

###### 生化需氧量排入水体（`biochemical_oxygen_demand_to_water`）

最终出水 BOD 负荷与 COD 分开计算。

- 选定流：生化需氧量，水体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：出水质量或体积乘实测 BOD 浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：

###### 总氮排入水体（`total_nitrogen_to_water`）

最终出水总氮负荷作为独立基本流计算。

- 选定流：总氮，水体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：出水质量或体积乘实测总氮浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：

###### 总磷排入水体（`total_phosphorus_to_water`）

最终出水总磷负荷作为独立基本流计算。

- 选定流：总磷，水体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：出水质量或体积乘实测总磷浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：

###### 悬浮物排入水体（`suspended_solids_to_water`）

最终出水悬浮物负荷与溶解污染指标分开计算。

- 选定流：悬浮物，水体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：出水质量或体积乘实测悬浮物浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid` | 多功能前景过程 | 首先通过分别计量产品特定批次、设备、电表和废物流避免分配；只有附加功能和被替代产品可证明且模型一致时才采用系统扩展。 | `eu-pef-2021-2279` |
| `allocation_physical` | 不可避免的联合生产 | 无法细分和系统扩展时，采用反映投入与共产品功能因果关系的有文件依据物理关系；不得仅因质量数据易得而默认质量分配。 | `eu-pef-2021-2279` |
| `allocation_economic` | 无可辩护物理关系 | 仅在无法证明相关物理关系时采用经济分配；使用同一参考期的代表性价格和数量记录并披露敏感性。 | `eu-pef-2021-2279` |
| `allocation_waste` | 废品、果皮、果核、果心、碎屑、包装废料和污泥 | 废弃物的收集和处理负荷保留在产品系统内。仅当残余物具有有文件依据的市场或功能时视为共产品，并应用上述层级。 | `eu-pef-2021-2279` |
| `allocation_mixtures` | 干果或坚果混合物 | 每种外购组分按自身质量和上游数据集建模；不得以混合配方为由抹平组分身份。 | `unsd-cpc-3-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `receive_and_prepare`; `blanching`; `sulphiting`; `conditioning` | 水果、添加剂、中间产品、废品和残余物 | 秤、批次单、库存和去向记录 | 批次号；水果身份；毛重；皮重；净重；水分基准；添加剂领退；残余物去向 | 经校准秤和批次核对 | kg | 每批 | 代表性连续 12 个月或完整季节批次 | 范围内所有生产线和班次 | 按过程汇总净质量并归一化到合格参考产品 | 秤校准；签字批次单；库存核对；去向凭证 |
| `cp_water_wastewater` | `receive_and_prepare`; `blanching`; `sulphiting`; `drying` | 补充水、废水、废溶液和冷凝水 | 水表、槽位、批次单和排放记录 | 表读数；槽量变化；循环量；排放去向；相关浓度 | 表计差或有文件依据的质量平衡 | kg | 每批或按日分配到批次 | 与产品清单同一期间 | 服务于各过程的全部水系统 | 扣除循环量，并按实测产量或运行时间分配共用系统 | 表计校准；平衡闭合；处理凭证 |
| `cp_energy_fuel` | 所有生产过程 | 电力、蒸汽、天然气、液化石油气、柴油和木颗粒 | 表计、账单、罐存和运行记录 | 表读数；燃料量；密度；热值基准；蒸汽状态；运行时间 | 优先直接测量；共用表采用有文件依据的分配 | kWh、MJ、kg、m3 或 L | 每批、每班或账期 | 与产品清单同一期间 | 全部纳入设备和公用工程系统 | 用有文件依据因子换算并按合格过程输出归一化 | 表计校准；账单；库存核对；因子来源 |
| `cp_drying_operation` | `drying` | 投入水果、干燥输出、去除水分、技术和运行条件 | 干燥批次日志与实验室结果 | 水果质量；初末水分及基准；冷凝水；时间；温度；湿度；压力；产品状态 | 经校准秤、传感器和经验证水分或水分活度方法 | kg 和所声明过程单位 | 每干燥批次 | 完整被表示批次 | 范围内每台干燥机和配方 | 按所声明技术和配方计算水果与水质量平衡 | 校准；试验方法；批次追溯；质量平衡闭合 |
| `cp_direct_emissions` | `sulphiting`; `drying` | 二氧化硫和燃烧污染物 | 烟气测试、连续监测、燃料分析和因子计算 | 污染物结果；流量；运行时间；燃料量；碳或硫含量；氧化和排放因子；因子来源 | 优先直接测量；否则燃料特定计算 | kg | 每项规定测试和每清单期间 | 与燃料清单同一期间 | 全部场内排放点 | 按来源汇总污染物质量并按过程输出归一化 | 认可测试报告或因子沿袭；与燃料用量核对 |
| `cp_refrigerant` | `drying`; `cold_storage` | 制冷剂补充和泄漏 | 维修日志、采购、钢瓶称重和回收记录 | 制冷剂身份；期初库存；采购；期末库存；回收；转移；设备 | 设备级年度质量平衡 | kg | 每次维修和每年 | 与产品清单同一期间 | 范围内每个制冷剂回路 | 按具名制冷剂计算损失并按设备输出或质量-时间分配 | 技师记录；钢瓶秤校准；库存核对 |
| `cp_packaging` | `packaging` | 每个包装组件及其废料 | 物料清单、收货、件数、单件质量和废料秤 | 材料身份；层或组件；件数；单件质量；领用；退回；废料；去向 | 组件质量平衡 | kg | 每包装批次 | 与产品清单同一期间 | 范围内每种包装形式 | 计算每 kg 产品每种组件和废料质量 | 供应商规格；经核验单件质量；库存与废料核对 |
| `cp_storage` | `cold_storage` | 储存产品、电力、温度和时长 | 仓储记录、表计和温度日志 | 入出库质量；时间戳；库房；温度；电量 | 质量-时间库存和计量能耗 | kg、h、kWh、degC | 连续或每次出库 | 被表示储存期间 | 范围内全部受控库房 | 按实测库房负荷或质量-时间分配电力并披露方法 | 经校准温度传感器；库存核对；表计记录 |
| `cp_sanitation` | `sanitation` | 清洁用水、活性化学品、电力和废水 | 清洁日志、配方单、表计和化学品领用记录 | 清洁事件；水；制剂质量；活性比例；电力；废水 | 事件级测量和配方计算 | kg 和 kWh | 每次清洁 | 与产品清单同一期间 | 范围内全部食品接触设备和房间 | 汇总归属于被表示生产的事件并按参考产品归一化 | 清洁签字；化学品规格；表计记录 |
| `cp_wastewater_treatment` | `wastewater_treatment` | 进水流、公用工程、污泥、最终出水和污染物负荷 | 进出水表、实验室结果、化学品投加、电力和污泥凭证 | 流身份；流量；COD；BOD；总氮；总磷；悬浮物；化学品；电力；污泥与干固体 | 流量比例采样和过程记录 | kg、浓度单位和 kWh | 连续流量并代表性采样 | 与产品清单同一期间 | 场内处理与排放点 | 以流量和浓度计算每项污染物负荷；共用处理按合理负荷驱动因子分配 | 实验室 QA；采样计划；表计校准；污泥去向 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 所有前景交换 | 以分配给合格产品的交换量除以合格干果净质量；分母不含包装质量。 | 交换量；合格干果净质量 | 每 1 kg 参考产品交换量 | `eu-pef-2021-2279` |
| `calc_water_balance` | `drying` | 去除水量等于待干燥水果水量减干果输出水量，并调整实测液体加入和排出；去除水分为收集冷凝水和排入空气水。 | 湿基与干基水分；水果质量；冷凝水；加水 | kg 冷凝水和 kg 排入空气水 | |
| `calc_shared_energy` | 共用电力和热 | 先以计量细分；剩余共用能源按有文件依据的设备运行时间与负荷、产品产量或其他因果驱动因子分配。 | 表计总量；设备时间与负荷；过程输出 | 过程特定 kWh 或 MJ | `eu-pef-2021-2279` |
| `calc_fuel_emissions` | 场内燃料燃烧 | 按燃料特定用量和有文件依据因子分别计算每项污染物；化石和生物源二氧化碳分开计算并保留因子来源与热值基准。 | 各燃料；碳或硫含量；氧化或排放因子；烟气结果 | 每项直接空气排放 kg | |
| `calc_refrigerant_loss` | 干燥和储存制冷剂 | 每种具名制冷剂期初库存加采购量，减期末库存、回收量和有文件依据转移量，等于损失。 | 设备级制冷剂记录 | 各制冷剂排放 kg | |
| `calc_effluent_load` | 最终出水污染物 | 最终出水体积乘代表性实测浓度并换算为污染物质量；不得合并 COD、BOD、氮、磷或悬浮物。 | 最终出水流量；分析物浓度 | 每项排入水体污染物 kg | |
| `calc_packaging_mass` | 包装组件 | 经核验单件质量乘合格包装件数，并对每种材料与领用、退回和废料质量核对。 | 组件件数与单件质量；领用和废料记录 | 每参考产品各包装材料 kg | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和过程路线 | 保留批次到包装的追溯以及所声明水果、预处理、干燥机、包装和储存身份。 | 批次谱系、产品规格、配方和包装物料清单 |
| `dq_temporal` | 前景记录 | 覆盖代表性连续 12 个月或完整季节批次；披露起止日期、停机和异常批次。 | 有日期表计、日志、账单和生产台账 |
| `dq_completeness` | 清单 | 核对水果质量、水量平衡、能源、燃料、包装材料、制冷剂、废物和直接排放；解释每项实质不平衡或缺失行。 | 签字平衡表和未解决数据登记 |
| `dq_measurement` | 测量数据 | 使用经校准仪器，并保留单位、水分基准、采样方法、检出限和换算因子。 | 校准证书、实验室 QA 和计算工作簿 |
| `dq_representativeness` | 前景和上游数据 | 评价技术、地域、时间代表性和精度；记录代理及适用理由。 | 与 PEF 准则一致的数据质量评价 |
| `dq_source_lineage` | 计算值 | 每项计算交换保留原始记录、公式、因子身份、因子来源和版本。 | 可审计计算沿袭和因子记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_mass` | 参考产品 | 确认分母恰为 1 kg 合格干果净质量并排除全部包装质量。 | `eu-pef-2021-2279` |
| `validate_qualifiers` | 产品身份 | 缺失水果组成、制备形态、预处理、干燥技术、最终水分或水分活度规格、包装形式、地域或参考期时判定不符合。 | `unsd-cpc-3-2025`; `codex-cxc-3-1969` |
| `validate_process_map` | 前景边界 | 确认每项实际作业均有过程清单，且每项条件过程有记录支持或明确为不适用。 | `fao-processing-dried-fruits-2004`; `codex-cxc-3-1969` |
| `validate_atomic_inventory` | 过程交换 | 电力、蒸汽、任一燃料、制冷剂、水、化学品、包装组件、废物流或直接排放与另一交换合并，或以选择器标签表示时判定不符合。 | `eu-pef-2021-2279` |
| `validate_mass_balance` | 水果和水 | 核对进厂水果与合格产品、残余物、废品、冷凝水、排入空气水和库存变化；调查无法解释的不平衡，不得强制闭合。 | `codex-cxc-1-1969` |
| `validate_energy_emissions` | 干燥公用工程与直接排放 | 将每种燃料和电力记录与所声明干燥路线核对，并确认每项场内燃烧污染物和每种具名制冷剂损失分别表示。 | `sagar-kumar-drying-2010`; `eu-pef-2021-2279` |
| `validate_wastewater` | 废水和排放 | 将每股废水核对至处理或外运；场内排放时确认 COD、BOD、总氮、总磷和悬浮物最终负荷分别表示。 | `eu-pef-2021-2279` |
| `validate_food_safety_records` | 卫生和产品放行 | 核验被表示批次的饮用水、清洁、过程控制、水分或水分活度、包装完整性、偏差和放行记录。 | `codex-cxc-1-1969`; `codex-cxc-3-1969` |
| `validate_allocation` | 共产品和共用过程 | 核验分配层级、驱动因子、相关同期间数量与价格及敏感性；无文件依据的无负荷残余物或共产品判定不符合。 | `eu-pef-2021-2279` |
| `validate_data_quality` | 数据集 | 发布前核验时间覆盖、校准、代表性、精度、完整性、代理披露和计算沿袭。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 加工厂门口其他未另分类干果的前景生产数据集。 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 为符合所声明水果、路线、水分或水分活度规格、包装、地域、技术和期间的产品构建 LCA 过程与生命周期模型。 |
| excluded_use | 未经额外审查，不得对实质不同的水果种类、加糖与未加糖产品、干燥技术、水分状态、包装形式或地域作比较声明或替代。 |
| required_metadata | PCR id 和版本；水果与混合物身份；产地和进厂状态；制备形态；预处理与添加剂；干燥技术；公用工程和燃料来源；最终水分含量及基准或水分活度；包装物料清单；储存条件；地域；技术；参考期；截断；分配；上游数据集标识。 |
| required_quality_disclosure | 覆盖和平衡结果；实测值与计算值；校准和采样；时间、技术和地域代表性；精度；代理；未解决 UUID 和 range 证据；分配敏感性；偏差。 |
| update_trigger | 水果或混合配方、进厂状态、预处理、干燥技术或燃料、包装形式、储存条件、设施、废水处理、分配、上游数据集、法定产品规格或代表性参考期变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | `official_guidance` | 联合国统计司。*CPC Ver. 3.0 Explanatory Notes*，2025-06-30 更新，子类 21419。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-24）。 | 产品类别范围、包含的干果和混合物身份。 |
| `codex-cxc-3-1969` | `standard` | Codex Alimentarius Commission. *Code of Hygienic Practice for Dried Fruits*, CXC 3-1969，1969 年采纳，2011 年编辑修订。https://www.fao.org/fao-who-codexalimentarius/sh-proxy/ro/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC+3-1969%2FCXC_003e.pdf（检索于 2026-08-24）。 | 干果范围、原料保护、饮用水、制备、晒场控制、包装、水分稳定性、储运、清洁和记录。 |
| `codex-cxc-1-1969` | `standard` | FAO 与 WHO。*General Principles of Food Hygiene*, CXC 1-1969。Rome, 2023。https://doi.org/10.4060/cc6125en（全文核验于 2026-08-24）。 | GHP 与 HACCP 控制、饮用水、清洁、监测、核验、文件、追溯和纠正措施记录。 |
| `fao-processing-dried-fruits-2004` | `extension_guidance` | International Centre for Underutilised Crops. *Processing of Dried Fruits*. FAO 托管技术指南，2004。https://www.fao.org/fileadmin/templates/inpho/documents/AE618e.pdf（检索于 2026-08-24）。 | 分选、清洗、切分、漂烫、硫熏或亚硫酸盐处理、干燥、均湿、质量控制、包装和储存的过程分解。 |
| `sagar-kumar-drying-2010` | `literature` | Sagar, V. R. 与 Suresh Kumar, P. “Recent advances in drying and dehydration of fruits and vegetables: a review.” *Journal of Food Science and Technology* 47, 15–26 (2010)。https://doi.org/10.1007/s13197-010-0010-8；PMCID: PMC3550996（全文核验于 2026-08-24）。 | 干燥技术备选路线，以及记录技术特定能源、产品质量和运行条件的必要性。 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission. *Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods*，2021-12-30 合并版。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（全文检索于 2026-08-24）。 | 参考流归一化、完整清单、企业特定数据、分配层级、截断披露、直接基本流、校验和数据质量准则。 |
