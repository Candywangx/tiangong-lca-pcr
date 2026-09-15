---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.malt-whether-or-not-roasted
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 麦芽（无论是否烘焙）

## 1. 范围与适用性

本 PCR 适用于以食品级或酿造级谷物为原料，经受控发芽后干燥，并可选择焙炒、焦糖化、熏制、调配和包装而制得麦芽的厂门生产。覆盖普通干燥麦芽和烘焙麦芽，包括由大麦、小麦、黑麦、燕麦、高粱或其他明确声明谷物制成的浅色、着色、水晶/焦糖、熏制及浅度或深度烘焙麦芽。

前景边界从谷物进入制麦厂开始，至可销售净麦芽以散装或声明包装形式放行结束。纳入接收、清理分级、浸麦、发芽、干燥或声明的直接焙炒路线、条件性焙炒、冷却、除根、调配、储存、包装、清洁消毒、公用工程、废水、残余物、废物和直接排放。谷物种植及进厂运输属于上游。啤酒和蒸馏酒生产、麦芽提取物或麦芽粉制造、使用麦芽的食品制造、分销、使用及生命末期不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.malt-whether-or-not-roasted |
| classification_refs | CPC 3.0: 24320 麦芽（无论是否烘焙）（`exact`） |
| covered_products | 干燥谷物麦芽和烘焙谷物麦芽；以受控谷物发芽和声明热处理制得的浅色、着色、水晶/焦糖、熏制及特种麦芽 |
| excluded_products | 未发芽烘焙谷物；麦芽提取物、麦芽糖浆、麦芽糖浆制品、麦芽粉、啤酒、蒸馏酒、预制食品、谷物种植及通用制麦服务 |
| representative_product | 制麦厂发运门口的谷物麦芽（干燥或烘焙） |
| production_route | 声明谷物接收与清理；浸麦；发芽；干燥或声明的直接焙炒路线；条件性焙炒/熏制；冷却、除根、调配、储存和发运 |
| market_state | 干燥食品级或酿造级整粒麦芽，散装或包装；声明谷物种类、麦芽类型、色度、水分、处理路线和发运形式 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制麦厂发运门口提供普通干燥或烘焙谷物麦芽 |
| How much | 1,000 kg 可销售净麦芽，不含包装 |
| How well | 符合声明的谷物身份、麦芽类型、水分、色度、浸出物或预定用途规格、食品安全放行准则及包装完整性 |
| How long or cycle | 一个完成生产并放行的批次；储存时长和保质期作为限定信息声明 |
| reference_flow_link | `cereal_malt_dried_or_roasted_at_maltings_gate` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 净产品 |
| 参考产品流 | 谷物麦芽（干燥或烘焙） |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 谷物种类和品种；谷物产地与作物年份；普通干燥、水晶/焦糖、烘焙或熏制路线；浸麦与发芽条件；干燥与焙炒时间-温度-水分曲线；成品水分和色度；适用时的浸出物或用途规格；麦根和筛余物去向；散装或包装配置；地理；技术；数据期 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失任一必需限定信息时，该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考麦芽及按质量归一化的交换 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化至 1,000 kg 放行净麦芽；包装不计入参考质量，进料谷物、中间绿麦芽、麦根、筛余物、粉尘和损失分别保留收货基与干物质基。 |
| `malt_moisture_basis` | 谷物与麦芽质量平衡 | 质量与水分分数 | kg 和 % | 对进厂谷物、绿麦芽、干燥/烘焙麦芽和可销售产品保留原始质量与实测水分，并声明所用麦芽专用水分方法。 |
| `water_separation` | 浸麦、发芽喷淋、清洁和公用水 | 质量或体积 | kg 或 m3 | 各用途分别计量；由体积换算质量时保留原始体积及密度假设。 |
| `energy_separation` | 电力、蒸汽、外购热力和燃料 | 能量 | kWh 或 MJ | 电力、蒸汽、外购热力、天然气、瓦斯油和燃料油分别记录，并保留低位或高位热值基准及换算因子。 |
| `refrigerant_mass` | 各制冷剂补充与损失 | 质量 | kg | 按化学身份逐种记录制冷剂，并以库存平衡和维修记录计算大气损失。 |
| `packaging_mass` | 各包装组件 | 质量 | kg | 纸袋、聚乙烯、聚丙烯、瓦楞纸板、缠绕膜和木托盘分别记录投放市场质量。 |
| `wastewater_load` | 各直接水排放 | 质量 | kg | 以匹配的排水量和浓度记录，分别计算 COD、总氮、总磷和总悬浮物。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 食品级或酿造级谷物到达制麦厂门口，并声明种类、品种、作物年份、产地、水分和上游覆盖 |
| starting_condition_role | 谷物清理、浸麦、发芽、热处理、整理和发运的前景起点 |
| product_classification_scope | 干燥谷物麦芽，无论普通干燥或烘焙；不含未发芽烘焙谷物及进一步加工的麦芽提取物、糖浆、粉、饮料和食品 |
| recursive_input_rule | 外购绿麦芽、干燥麦芽或烘焙麦芽用于后续处理时，只作为一项上游产品投入记录，不在接收过程中递归重建其生产。 |
| upstream_dataset_requirement | 每种谷物、电力、蒸汽、外购热力、燃料、制冷剂、化学品、包装材料、进厂运输及厂外处理服务均连接具有代表性的上游数据集。 |
| disclosure | 声明谷物与麦芽类型、起始谷物状态、路线、热处理曲线、场址与期间、公用工程、清洁剂、制冷剂、共产品、废物、废水去向、直接排放、包装、分配和外包步骤。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_complete_malting` | maltings_foreground | 纳入清理分级、浸麦、发芽、干燥或声明替代热处理路线、条件性焙炒、冷却、除根、储存/调配、发运准备、清洁消毒、公用工程、残余物、废水和直接排放。 | `eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024` |
| `boundary_roasted_route` | roasted_and_crystal_malt | 声明焙炒机接收绿麦芽还是已干燥麦芽，并纳入实际糖化、焙炒、冷却、抽风及排放控制操作。 | `eu-jrc-fdm-bref-2019`; `prado-specialty-malts-2021` |
| `boundary_food_hygiene` | food_contact_operations | 对谷物接收、过程水、清洁消毒、虫害控制、储存和产品放行实施有记录的良好卫生规范及基于危害的控制。 | `fao-who-cxc-1-1969` |
| `boundary_upstream_downstream` | lifecycle_model | 谷物种植与进厂运输属于上游，酿造、蒸馏、后续食品加工、分销、使用和生命末期属于下游；研究扩展至制麦厂门外时才连接这些阶段。 | `unsd-cpc-v3-2025`; `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `base_malt_production` | 谷物接收、清理、浸麦、发芽和干燥 | `required` | 所有产品；直接焙炒水晶麦芽声明由焙炒替代最终干燥 | 将声明谷物转化为稳定基麦芽或绿麦芽 | 每 1,000 kg 可销售净麦芽 |
| `roasting` | 焙炒、焦糖化或熏制 | `conditional` | 烘焙、水晶/焦糖、着色或熏制麦芽纳入 | 形成声明的特种色泽和风味 | 每 1,000 kg 可销售净麦芽 |
| `finishing_dispatch` | 冷却、除根、调配、储存、包装和发运 | `required` | 所有产品；包装卡仅适用于实际发运配置 | 形成放行的散装或包装麦芽 | 每 1,000 kg 可销售净麦芽 |
| `sanitation_wastewater` | 清洁、消毒和废水处理 | `required` | 纳入归属本产品的操作，并透明分配共享系统 | 记录清洁消毒资源及处理输出 | 每 1,000 kg 可销售净麦芽 |

### 过程：谷物接收、清理、浸麦、发芽和干燥（`base_malt_production`）

#### 输入

##### 产品流

###### 大麦籽粒（`barley_grain_input`）

大麦籽粒 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：大麦籽粒
- 适用条件：仅用于大麦麦芽批次。
- 流属性/单位：质量 / kg
- 数量规则：校准接收秤记录的净接收大麦质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024`

###### 小麦籽粒（`wheat_grain_input`）

小麦籽粒 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：小麦籽粒
- 适用条件：仅用于小麦麦芽批次。
- 流属性/单位：质量 / kg
- 数量规则：校准接收秤记录的净接收小麦质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-jrc-fdm-bref-2019`; `bauer-malting-parameters-2022`

###### 黑麦籽粒（`rye_grain_input`）

黑麦籽粒 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：黑麦籽粒
- 适用条件：仅用于黑麦麦芽批次。
- 流属性/单位：质量 / kg
- 数量规则：校准接收秤记录的净接收黑麦质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-jrc-fdm-bref-2019`

###### 燕麦籽粒（`oat_grain_input`）

燕麦籽粒 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：燕麦籽粒
- 适用条件：仅用于燕麦麦芽批次。
- 流属性/单位：质量 / kg
- 数量规则：校准接收秤记录的净接收燕麦质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-jrc-fdm-bref-2019`

###### 高粱籽粒（`sorghum_grain_input`）

高粱籽粒 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：高粱籽粒
- 适用条件：仅用于高粱麦芽批次。
- 流属性/单位：质量 / kg
- 数量规则：校准接收秤记录的净接收高粱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-jrc-fdm-bref-2019`

###### 浸麦水（`steeping_water`）

浸麦水 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：饮用级过程水
- 流属性/单位：质量 / kg
- 数量规则：计量进入湿浸和发芽喷淋的水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024`

###### 制麦线电力（`base_malt_electricity`）

制麦线电力 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量或分表记录输送、通风、翻麦、泵、风机、控制及制冷用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024`

###### 干燥外购蒸汽（`kilning_steam`）

干燥外购蒸汽 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：计量送至干燥热交换器的外购蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 干燥外购热力（`kilning_purchased_heat`）

干燥外购热力 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：外购热力
- 流属性/单位：能量 / MJ
- 数量规则：计量送至干燥设备的非蒸汽热量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 干燥燃烧天然气（`kilning_natural_gas`）

干燥燃烧天然气 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：天然气
- 流属性/单位：能量 / MJ
- 数量规则：按声明热值基准计量天然气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`
- 来源：`eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024`

###### 干燥燃烧瓦斯油（`kilning_gas_oil`）

干燥燃烧瓦斯油 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：瓦斯油（轻质燃料油）
- 流属性/单位：能量 / MJ
- 数量规则：按声明热值基准计量瓦斯油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 干燥燃烧燃料油（`kilning_fuel_oil`）

干燥燃烧燃料油 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：燃料油
- 流属性/单位：能量 / MJ
- 数量规则：按声明热值基准计量燃料油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 氨制冷剂补充（`ammonia_makeup`）

氨制冷剂补充 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：氨
- 流属性/单位：质量 / kg
- 数量规则：由制冷维修和库存记录分配的补充质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：

###### R134a 制冷剂补充（`r134a_makeup`）

R134a 制冷剂补充 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：R134a 制冷剂
- 流属性/单位：质量 / kg
- 数量规则：由制冷维修和库存记录分配的补充质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：

###### R404A 制冷剂补充（`r404a_makeup`）

R404A 制冷剂补充 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：R404A 制冷剂
- 流属性/单位：质量 / kg
- 数量规则：由制冷维修和库存记录分配的补充质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：

#### 输出

##### 产品流

###### 转出的干燥麦芽或绿麦芽（`base_malt_output`）

转出的干燥麦芽或绿麦芽 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：谷物麦芽（声明中间状态）
- 流属性/单位：质量 / kg
- 数量规则：实测转出质量，并记录水分和路线状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024`

##### 废物流

###### 谷物筛余物（`cereal_screenings`）

谷物筛余物 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：谷物筛余物
- 流属性/单位：质量 / kg
- 数量规则：按去向实测筛余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 收集的谷物粉尘（`collected_cereal_dust`）

收集的谷物粉尘 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：谷物粉尘废物
- 流属性/单位：质量 / kg
- 数量规则：实测抽风和过滤设备清除的粉尘质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 废浸麦水（`spent_steep_water`）

废浸麦水 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：制麦浸麦废水
- 流属性/单位：质量 / kg
- 数量规则：计量排至声明处理去向的废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024`

##### 基本流

###### 干燥燃烧产生的化石二氧化碳（`kiln_fossil_co2`）

干燥燃烧产生的化石二氧化碳 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：化石二氧化碳，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：按每种燃料的实测用量和核准因子分别计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 发芽产生的生物源二氧化碳（`germination_biogenic_co2`）

发芽产生的生物源二氧化碳 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：生物源二氧化碳，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：实测或以碳质量平衡估算谷物呼吸排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024`

###### 干燥燃烧氮氧化物（`kiln_nox`）

干燥燃烧氮氧化物 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：氮氧化物，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：烟气实测或按燃料特定因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 干燥燃烧二氧化硫（`kiln_so2`）

干燥燃烧二氧化硫 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：二氧化硫，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：烟气实测或按实际燃料含硫量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 物料处理与干燥颗粒物（`base_malt_pm`）

物料处理与干燥颗粒物 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：颗粒物，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：控制设施后有组织排放实测量与无组织排放估算量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 发芽与干燥非甲烷挥发性有机物（`base_malt_nmvoc`）

发芽与干燥非甲烷挥发性有机物 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：非甲烷挥发性有机物，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：纳入排气口的有组织排放实测量或有记录估算量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 氨制冷剂排放至空气（`ammonia_to_air`）

氨制冷剂排放至空气 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：氨，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：由制冷剂库存平衡计算损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：

###### R134a 制冷剂排放至空气（`r134a_to_air`）

R134a 制冷剂排放至空气 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：R134a 制冷剂，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：由制冷剂库存平衡计算损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：

###### R404A 制冷剂排放至空气（`r404a_to_air`）

R404A 制冷剂排放至空气 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：R404A 制冷剂，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：由制冷剂库存平衡计算损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：

### 过程：焙炒、焦糖化或熏制（`roasting`）

#### 输入

##### 产品流

###### 水晶麦芽焙炒用绿麦芽（`green_malt_to_roaster`）

水晶麦芽焙炒用绿麦芽 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：绿谷物麦芽
- 适用条件：仅适用于水晶/焦糖路线。
- 流属性/单位：质量 / kg
- 数量规则：实测绿麦芽投料质量并记录水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_roasting_batch_records`
- 来源：`eu-jrc-fdm-bref-2019`; `prado-specialty-malts-2021`

###### 干式焙炒用干燥麦芽（`kilned_malt_to_roaster`）

干式焙炒用干燥麦芽 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：干燥谷物麦芽
- 适用条件：仅适用于干式烘焙麦芽路线。
- 流属性/单位：质量 / kg
- 数量规则：实测干燥麦芽投料质量并记录水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_roasting_batch_records`
- 来源：`eu-jrc-fdm-bref-2019`; `prado-specialty-malts-2021`

###### 焙炒电力（`roasting_electricity`）

焙炒电力 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量焙炒机驱动、风机、抽风和冷却用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 焙炒燃烧天然气（`roasting_natural_gas`）

焙炒燃烧天然气 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：天然气
- 流属性/单位：能量 / MJ
- 数量规则：按声明热值基准计量天然气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`
- 来源：`eu-jrc-fdm-bref-2019`; `prado-specialty-malts-2021`

#### 输出

##### 产品流

###### 烘焙麦芽（`roasted_malt_output`）

烘焙麦芽 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：烘焙谷物麦芽
- 流属性/单位：质量 / kg
- 数量规则：实测冷却后产出，并记录水分、色度和焙炒曲线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_roasting_batch_records`
- 来源：`eu-jrc-fdm-bref-2019`; `prado-specialty-malts-2021`

##### 基本流

###### 焙炒化石二氧化碳（`roasting_fossil_co2`）

焙炒化石二氧化碳 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：化石二氧化碳，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：按焙炒燃料种类和实测用量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 焙炒颗粒物（`roasting_pm`）

焙炒颗粒物 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：颗粒物，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：抽风控制后的排放实测量或计算量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 焙炒非甲烷挥发性有机物（`roasting_nmvoc`）

焙炒非甲烷挥发性有机物 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：非甲烷挥发性有机物，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：有组织排放实测量或有记录估算量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-fdm-bref-2019`; `prado-specialty-malts-2021`

### 过程：冷却、除根、调配、储存、包装和发运（`finishing_dispatch`）

#### 输入

##### 产品流

###### 整理与发运电力（`finishing_electricity`）

整理与发运电力 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量冷却、除根、输送、调配、仓储通风和包装用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`evans-malting-efficiency-2024`

###### 纸袋（`paper_sack`）

纸袋 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：纸袋
- 流属性/单位：质量 / kg
- 数量规则：投放市场的纸袋质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 聚乙烯内衬（`polyethylene_liner`）

聚乙烯内衬 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：聚乙烯内衬
- 流属性/单位：质量 / kg
- 数量规则：投放市场的内衬质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 聚丙烯柔性集装袋（`polypropylene_fibc`）

聚丙烯柔性集装袋 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：聚丙烯柔性集装袋
- 流属性/单位：质量 / kg
- 数量规则：投放市场的集装袋质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 瓦楞纸板（`corrugated_cardboard`）

瓦楞纸板 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：瓦楞纸板
- 流属性/单位：质量 / kg
- 数量规则：投放市场的瓦楞纸板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 聚乙烯缠绕膜（`polyethylene_stretch_film`）

聚乙烯缠绕膜 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：聚乙烯缠绕膜
- 流属性/单位：质量 / kg
- 数量规则：投放市场的缠绕膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 木托盘（`wood_pallet`）

木托盘 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：木托盘
- 流属性/单位：质量 / kg
- 数量规则：分配至发运麦芽的新托盘或损耗补充托盘净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

#### 输出

##### 产品流

###### 可销售谷物麦芽（`saleable_malt`）

可销售谷物麦芽 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：谷物麦芽（干燥或烘焙）
- 流属性/单位：质量 / kg
- 数量规则：扣除麦根、粉尘和不合格品损失后的 1,000 kg 放行净麦芽
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-balance-identity`

###### 作为饲料材料销售的麦根（`malt_rootlets`）

作为饲料材料销售的麦根 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：麦芽根
- 流属性/单位：质量 / kg
- 数量规则：按去向实测麦根质量；仅在有据可查地转移作有益用途时作为共产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`eu-jrc-fdm-bref-2019`; `habschied-malting-byproducts-2020`

##### 废物流

###### 不合格麦芽（`off_spec_malt`）

不合格麦芽 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：不合格谷物麦芽废物
- 流属性/单位：质量 / kg
- 数量规则：按去向实测被拒收麦芽质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：

###### 收集的麦芽粉尘（`collected_malt_dust`）

收集的麦芽粉尘 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：麦芽粉尘废物
- 流属性/单位：质量 / kg
- 数量规则：实测除根、输送、调配和包装中清除的粉尘质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024`

##### 基本流

###### 整理过程颗粒物（`finishing_pm`）

整理过程颗粒物 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：颗粒物，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：粉尘控制后有组织排放实测量及无组织排放估算量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-fdm-bref-2019`

### 过程：清洁、消毒和废水处理（`sanitation_wastewater`）

#### 输入

##### 产品流

###### 清洁消毒用水（`sanitation_water`）

清洁消毒用水 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：饮用级过程水
- 流属性/单位：质量 / kg
- 数量规则：计量用于清洁和消毒的水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`fao-who-cxc-1-1969`

###### 氢氧化钠清洗剂（`sodium_hydroxide_cleaner`）

氢氧化钠清洗剂 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：氢氧化钠
- 流属性/单位：质量 / kg
- 数量规则：由领用制剂质量和浓度计算活性氢氧化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_records`
- 来源：`fao-who-cxc-1-1969`

###### 硝酸清洗剂（`nitric_acid_cleaner`）

硝酸清洗剂 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：硝酸
- 流属性/单位：质量 / kg
- 数量规则：由领用制剂质量和浓度计算活性硝酸质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_records`
- 来源：`fao-who-cxc-1-1969`

###### 过氧乙酸消毒剂（`peracetic_acid_disinfectant`）

过氧乙酸消毒剂 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：过氧乙酸
- 流属性/单位：质量 / kg
- 数量规则：由领用制剂质量和浓度计算活性过氧乙酸质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_records`
- 来源：`fao-who-cxc-1-1969`

###### 次氯酸钠消毒剂（`sodium_hypochlorite_disinfectant`）

次氯酸钠消毒剂 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：次氯酸钠
- 流属性/单位：质量 / kg
- 数量规则：由领用制剂质量和浓度计算活性次氯酸钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_records`
- 来源：`fao-who-cxc-1-1969`

###### 废水处理电力（`wastewater_electricity`）

废水处理电力 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量或分配归属本产品处理的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`

#### 输出

##### 废物流

###### 制麦废水（`maltings_wastewater`）

制麦废水 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：制麦废水
- 流属性/单位：质量 / kg
- 数量规则：计量送至声明处理去向的废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 废水处理污泥（`wastewater_sludge`）

废水处理污泥 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：废水处理污泥
- 流属性/单位：质量 / kg
- 数量规则：按去向实测污泥湿质量和干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 空化学品容器废物（`chemical_container_waste`）

空化学品容器废物 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：空化学品容器废物
- 流属性/单位：质量 / kg
- 数量规则：按去向实测废弃容器质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`fao-who-cxc-1-1969`

##### 基本流

###### 排放至水体的化学需氧量（`cod_to_water`）

排放至水体的化学需氧量 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：化学需氧量，排放至水体
- 流属性/单位：质量 / kg
- 数量规则：匹配排水量乘以 COD 浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 排放至水体的总氮（`total_nitrogen_to_water`）

排放至水体的总氮 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：总氮，排放至水体
- 流属性/单位：质量 / kg
- 数量规则：匹配排水量乘以总氮浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 排放至水体的总磷（`total_phosphorus_to_water`）

排放至水体的总磷 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：总磷，排放至水体
- 流属性/单位：质量 / kg
- 数量规则：匹配排水量乘以总磷浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 排放至水体的总悬浮物（`tss_to_water`）

排放至水体的总悬浮物 在本过程边界作为独立原子交换记录；其数量按下述规则确定。

- 选定流：总悬浮物，排放至水体
- 流属性/单位：质量 / kg
- 数量规则：匹配排水量乘以总悬浮物浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净麦芽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-fdm-bref-2019`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | process_subdivision | 通过路线特定批次、公用工程、焙炒、包装、废水和排放的分表或分项采集避免分配。 | `eu-pef-method-2021` |
| `allocation_rootlets` | rootlets_and_screenings | 麦根或筛余物仅在有记录地离厂用于有益用途时作为共产品；优先系统扩展或合理细分。仍需分配时，若干质量关系反映因果则采用并披露物理分配，否则采用期间价格匹配的经济分配并做敏感性分析。 | `eu-pef-method-2021`; `habschied-malting-byproducts-2020` |
| `allocation_waste` | wastes_and_treatment | 不向废弃粉尘、污泥、不合格麦芽或废水分配负荷；在到达废物或回收系统边界前，收集和处理负荷归于麦芽生产。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `base_malt_production`; `finishing_dispatch` | 谷物投入、中间麦芽、可销售麦芽 | 地磅、批次和实验室记录 | 种类；品种；批号；湿质量；水分；转移/产出质量；拒收物 | 校准秤和麦芽专用水分试验 | kg；% | 每批 | 代表性 12 个月或完整生产季 | 所有纳入产线 | 仅在比较干物质时进行水分校正；归一化至放行麦芽 | 校准、实验室方法、平衡核对 |
| `cp_route_conditions` | `base_malt_production`; `roasting` | 浸麦、发芽、干燥、焙炒 | 控制系统历史记录和批记录 | 湿浸/干休；温度；谷物水分；风量；时长；干燥/焙炒曲线；色度 | 直接传感器和批记录 | h；°C；%；风量单位 | 连续并逐批放行 | 每个代表批次 | 各容器/干燥炉/焙炒机 | 保留曲线并按质量加权批次 | 传感器校准、放行记录 |
| `cp_water_records` | all | 浸麦及清洁消毒用水 | 水表和批票 | 表起止数；用途；批次；回用；排放 | 校准分表或批次计量 | kg 或 m3 | 逐批/每日 | 代表期 | 各用水区 | 按用途求和；没有双向转移记录不得净扣回用水 | 水表校准和水质记录 |
| `cp_energy_records` | all | 电力、蒸汽、外购热力 | 公用工程表和发票 | 载能体；表计；数量；单位；蒸汽/热力压力温度 | 校准表计并与发票核对 | kWh 或 MJ | 连续/每月 | 代表期 | 所有纳入设备 | 以可辩护运行驱动因子分配共享用量 | 表计检查和发票核对 |
| `cp_fuel_records` | `base_malt_production`; `roasting` | 各燃料 | 表计、罐存和发票 | 燃料身份；数量；密度；热值基准；批次/期间 | 校准表计或库存平衡 | kg、m3、MJ | 每日/每月 | 代表期 | 各燃烧单元 | 各燃料分别换算为 MJ | 发票、库存和热值证据 |
| `cp_refrigerant_records` | `base_malt_production` | 各制冷剂 | 设备和维修记录 | 化学品；充注；补充；回收；处置；泄漏事件 | 年度库存平衡 | kg | 每次维修/年度 | 代表期 | 各回路 | 损失=补充+期初库存-回收-期末库存 | 签字维修记录 |
| `cp_roasting_batch_records` | `roasting` | 焙炒路线物料和产出 | 批次和实验室记录 | 投入状态/质量/水分；时间-温度曲线；产出质量/水分/色度 | 秤、历史记录及 EBC/声明试验 | kg；%；°C；h；色度单位 | 每批 | 所有代表焙炒批次 | 各焙炒机 | 按可销售产出质量加权 | 试验方法和批放行 |
| `cp_packaging_records` | `finishing_dispatch` | 各包装组件 | 物料清单和领用记录 | 组件；材料；单重；数量；回用/损耗 | 供应商质量和产线计数 | kg | 每 SKU/批 | 代表期 | 所有发运形式 | 组件质量×净数量，回用单独建模 | 供应商规格和数量核对 |
| `cp_chemical_records` | `sanitation_wastewater` | 各清洗剂/消毒剂 | 领用、浓度和清洁消毒记录 | 产品；活性成分；浓度；领用质量；退回质量；用途 | 库存核对 | kg 活性物质 | 每次清洁消毒 | 代表期 | 所有纳入系统 | 活性质量=净制剂质量×活性分数 | SDS/规格和领用记录 |
| `cp_residue_records` | all | 各共产品和废物 | 秤和转移单 | 残余物身份；湿/干质量；水分；去向；收入/状态 | 校准秤和去向记录 | kg | 每次转移 | 代表期 | 所有纳入产线 | 按身份和去向分别汇总 | 称量单和接收方证据 |
| `cp_wastewater_records` | `base_malt_production`; `sanitation_wastewater` | 废水及各污染物 | 流量计和匹配样品 | 水量；COD；TN；TP；TSS；采样时间；去向 | 连续流量加代表性混合样 | m3；mg/L；kg | 连续并按许可/采样频率 | 代表期 | 各排口 | 负荷=匹配水量×浓度 | 实验室资质和流量校准 |
| `cp_air_emissions` | `base_malt_production`; `roasting`; `finishing_dispatch` | 各直接空气排放 | 烟气试验、CEMS、收尘和燃料记录 | 排放源；运行时长；流量；浓度；燃料；控制效率 | 优先直接测量，否则使用核准因子 | kg | 许可频率及各代表燃料/路线 | 代表期 | 各排放源 | 各污染物分别计算 | 试验报告、因子引用和运行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalise` | all exchanges | 每参考流交换量=期间交换量×1,000/放行净麦芽质量 | 期间交换量；放行麦芽质量 | 每 1,000 kg 麦芽的交换量 | `mass-balance-identity` |
| `calc_dry_matter` | grain and malt | 干物质=收货质量×（1-水分分数） | 质量；水分 | kg 干物质 | `mass-balance-identity`; `ebc-analytica-malt` |
| `calc_refrigerant_loss` | each refrigerant | 损失=期初库存+补充-回收-期末库存 | 库存与维修记录 | kg 化学品排放 | `mass-balance-identity` |
| `calc_water_pollutant` | each water pollutant | 负荷=匹配排水量×浓度并进行单位换算 | m3；mg/L | kg 污染物 | `eu-jrc-fdm-bref-2019` |
| `calc_combustion` | each fuel and pollutant | 无直接测量时，排放=实测燃料活动量×污染物特定核准因子 | 燃料活动量；因子 | kg 污染物 | `eu-jrc-fdm-bref-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | 保留谷物种类/品种、作物年份、麦芽类型、热处理路线、水分、色度和发运形式；不得在未披露生产加权的情况下平均普通与烘焙路线。 | 批放行和产品规格 |
| `dq_completeness` | foreground inventory | 核对谷物、水、干物质、可销售麦芽、麦根、筛余物、粉尘、废水、污泥和其他损失；每种公用工程、燃料、制冷剂、化学品、包装、废物和排放保持原子化。 | 签字平衡和异常记录 |
| `dq_temporal` | all data | 使用代表性 12 个月或完整生产季，并解释停机、异常批次和产品组合变化。 | 带日期表计、发票和批记录 |
| `dq_hygiene` | product-contact operations | 保留水适用性、清洁消毒验证、虫害控制、危害分析、纠正措施和放行证据。 | GHP/HACCP 记录 |
| `dq_method` | malt quality | 声明水分、色度、浸出物、改良度/脆度及其他声称属性所用方法。 | EBC、MEBAK 或等效验证方法记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | dataset_metadata | 数据包未识别谷物种类、麦芽类型、普通干燥或烘焙/水晶/熏制路线、成品水分以及散装或包装形式时拒绝。 | `unsd-cpc-v3-2025`; `ebc-analytica-malt` |
| `validate_steeping_context` | steeping_and_germination | 必须记录实际湿浸/干休、温度、水分和时长。12-16 °C、1-2 天和 42-45% 谷物水分仅作为两份独立兼容原文共同支持的审查背景，不替代场址记录，也不是普遍合规限值。 | `eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024` |
| `validate_kilning_context` | ordinary_kilned_malt | 必须记录实际分阶段干燥曲线。50-85 °C 仅作为两份独立兼容原文共同支持的浅色普通麦芽背景；更高温类型必须声明产品特定曲线。 | `eu-jrc-fdm-bref-2019`; `evans-malting-efficiency-2024` |
| `validate_roasting_context` | roasted_or_crystal_malt | 必须记录投入状态、适用时的糖化停留及完整时间-温度-水分曲线。130-230 °C 仅作为两份独立兼容原文共同支持的烘焙麦芽背景；产品按声明规格放行。 | `eu-jrc-fdm-bref-2019`; `prado-specialty-malts-2021` |
| `validate_atomic_inventory` | process_inventory | 任一合并载能体、多燃料、多制冷剂、多化学品、包装集合、废物集合或排放集合行均判失败。 | `eu-jrc-fdm-bref-2019` |
| `validate_mass_balance` | foreground_inventory | 必须提供说明充分的湿质量与干物质平衡，连接谷物投入、可销售麦芽、麦根、筛余物、粉尘、废水及其他损失。 | `mass-balance-identity`; `evans-malting-efficiency-2024` |
| `validate_range_evidence` | quantitative_ranges | 仅由一篇论文、一个工厂、一个批次或一个点支持的经验库存范围应拒绝；至少需要两份独立且边界兼容的原文，或权威文件明确规定的合规区间。 | `eu-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 每 1,000 kg 干燥谷物净麦芽的厂门前景数据集，普通或烘焙路线按声明 |
| downstream_use | `secondary_dataset`；`background_dataset`；作为与声明麦芽身份匹配的酿造、蒸馏、麦芽食品及其他生命周期模型投入 |
| allowed_use | 谷物种类、麦芽类型、地理、技术、期间、水分、色度及包装形式相容的产品与路线特定研究 |
| excluded_use | 不得替代未发芽烘焙谷物、麦芽提取物/糖浆/粉、啤酒、蒸馏酒、通用食品，或作为未披露的普通与烘焙路线平均数据 |
| required_metadata | PCR id；谷物与作物身份；麦芽类型；过程路线和条件曲线；参考水分/色度/规格；地理；技术；期间；散装/包装形式；分配；上游连接；共产品/废物去向 |
| required_quality_disclosure | 数据覆盖与代表性；计量；实验室方法；质量平衡闭合；路线加权；未解决 UUID 和范围；分配敏感性；废水和空气排放方法 |
| update_trigger | 谷物组合、麦芽类型、干燥炉/焙炒机、燃料或制冷系统、能源、水回用、清洁消毒化学品、包装、分配、排放控制、产品规格、地理或代表期改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | `official_guidance` | 联合国统计司，《中央产品分类》第 3.0 版结构和解释性说明。https://unstats.un.org/unsd/classifications/econ | 产品类别范围和排除项 |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | 欧盟委员会联合研究中心，《食品、饮料和乳品行业最佳可行技术参考文件》，2019 年，第 16.9 章“制麦”。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf | 完整工艺分解、普通与烘焙路线、能源、水、残余物、废水及各项空气排放 |
| `ebc-analytica-malt` | `standard` | 欧洲酿造公约，Analytica EBC 麦芽分析方法，包括 4.2 水分、4.5.1 浸出物、4.7.1 色度、4.12 糖化力、4.14 改良度和 4.15 脆度。https://dev.brewup.brewersofeurope.eu/ebc-analytica/category/chemical-physical/malt | 麦芽质量计量和放行方法披露 |
| `fao-who-cxc-1-1969` | `standard` | FAO/WHO，《食品卫生通则》CXC 1-1969，2022 年修订/2023 年版。https://www.fao.org/fao-who-codexalimentarius/publications/en/ | GHP、HACCP、水、清洁、消毒、储存和验证规则 |
| `evans-malting-efficiency-2024` | `literature` | Evans, D.E., Shen, W. and Brookes, P.A. Malting - 'the middle parts of fortune' - a history of innovation and the enduring quest for efficiency. Journal of the Institute of Brewing 130 (2024) 126-181. https://doi.org/10.58430/jib.v130i3.58 | 完整制麦路线、独立相容的浸麦/干燥背景、能源、水、损失、麦根和储存 |
| `prado-specialty-malts-2021` | `literature` | Prado, R. et al. Aroma and color development during the production of specialty malts: A review. Comprehensive Reviews in Food Science and Food Safety (2021). https://doi.org/10.1111/1541-4337.12806 | 烘焙与水晶麦芽路线、独立相容的焙炒背景和产品定义条件 |
| `bauer-malting-parameters-2022` | `literature` | Bauer, A. et al. The malting parameters: steeping, germination, withering, and kilning temperature and aeration rate as possibilities for styrene mitigation in wheat beer. European Food Research and Technology 248 (2022). https://doi.org/10.1007/s00217-021-03852-5 | 大麦与小麦制麦身份、路线条件记录和除根 |
| `habschied-malting-byproducts-2020` | `literature` | Habschied, K. et al. By-Products in the Malting and Brewing Industries-Re-Usage Possibilities. Fermentation 6 (2020) 82. https://doi.org/10.3390/fermentation6030082 | 麦根身份、去除及有益用途判定 |
| `eu-pef-method-2021` | `official_guidance` | 欧盟委员会建议（EU）2021/2279，环境足迹方法，附件 I。https://eur-lex.europa.eu/eli/reco/2021/2279/oj | 边界披露、分配层级、数据质量和范围证据纪律 |
| `mass-balance-identity` | `method_factor` | 应用于实测前景记录的质量守恒恒等式。 | 归一化、干物质、库存平衡和质量平衡校验 |
