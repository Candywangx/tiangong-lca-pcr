---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.cider-perry-mead-and-other-fermented-beverages-except-wine-of-fresh-grapes-and-beer-mad-fd13b130
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 苹果酒、梨酒、蜂蜜酒及其他发酵饮料，鲜葡萄酒和麦芽啤酒除外

## 1. 范围与适用性

本 PCR 适用于苹果酒、梨酒、蜂蜜酒及其他以酒精发酵形成产品特征的饮料前景数据包，但不包括鲜葡萄酒和麦芽啤酒。前景边界从水果、蜂蜜、其他明确声明的可发酵含糖原料或已披露的本类别中间产品进入工厂开始，包括醪液制备、发酵、路线特定的后处理、可选的调质或碳酸化，直至以散装或已声明包装形式达到工厂发运状态。

本类别包括苹果酒、梨酒、蜂蜜酒、以其他水果或明确声明的含糖原料制成的发酵饮料，以及仍保持发酵饮料特征的静态或起泡产品。鲜葡萄酒、麦芽啤酒、非发酵饮料、醋、蒸馏酒，以及产品特征主要由添加蒸馏酒精而非发酵形成的饮料不在范围内。数据包应声明产品名称、适用法域产品标准、可发酵原料、实际酒精度、适用时的残糖或甜度类别、静态或起泡状态、碳酸化路线、热处理路线、散装或包装市场状态，以及实际采用的每项生产过程。所引来源中的苹果酒、梨酒和蜂蜜酒规范仅作为路线证据，不构成完整类别的全球统一配方阈值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.cider-perry-mead-and-other-fermented-beverages-except-wine-of-fresh-grapes-and-beer-mad-fd13b130 |
| classification_refs | CPC 3.0: 24230 |
| covered_products | 苹果酒；梨酒；蜂蜜酒；其他以水果、蜂蜜或明确声明的可发酵含糖原料经酒精发酵并保持其特征的饮料；静态、自然起泡或外加二氧化碳的产品 |
| excluded_products | 鲜葡萄酒；麦芽啤酒；非发酵饮料；醋；蒸馏酒；不再保持发酵饮料特征的产品 |
| representative_product | 在生产工厂发运口交付的本类别某一种市场就绪发酵饮料 |
| production_route | 水果醪、蜂蜜醪或其他含糖原料醪的路线特定制备；酒精发酵；条件性澄清、过滤、熟化、稳定、二次发酵、巴氏杀菌、碳酸化、散装制备和包装 |
| market_state | 散装液体或包装液体；声明原料路线、酒精度、甜度、碳酸化状态、热处理状态、包装配置、法域产品名称、地理范围及生产周期 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产工厂发运口提供本产品类别的一种市场就绪发酵饮料 |
| How much | 1,000 kg 净可售参考产品 |
| How well | 符合已声明法域的产品、组成、酒精、食品安全、质量和标签规范，并保持发酵饮料特征 |
| How long or cycle | 一个完整批次或生产周期，直至达到可发运状态 |
| reference_flow_link | 扣除已计量的过程损失和灌装损失后的净可售产出，不包括下游配送、零售、消费和寿命终结 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 本产品类别发酵饮料 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | product_name; fermentable_raw_material; jurisdictional_product_standard; actual_alcohol_content; residual_sugar_or_sweetness_class; still_or_sparkling; carbonation_route; heat_treatment_route; bulk_or_packaged; packaging_configuration_and_fill_quantity; geography; production_campaign; technology_route |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和按质量归一化的交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1,000 kg 净可售参考产品，并将每项交换归一化至该质量。 |
| `liquid_mass_conversion` | 以体积计量的饮料、醪液、水和液态物料记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用物料和温度特定的密度记录将体积换算为质量；保留原始体积、温度、密度及计算。 |
| `packaging_mass` | 每个包装组件 | Mass | kg | 以组件数量与核实的单位质量或直接领料平衡，分别记录每个组件的投放市场质量。 |
| `energy_separation` | 电力、蒸汽、天然气、液化石油气和轻质燃料油 | Energy | kWh 或 MJ | 每种载能体保持为独立交换，并记录能量单位换算及每种燃料的低位或高位热值基准。 |
| `wastewater_load` | 每项直接水排放指标 | Mass | kg | 使用匹配的排放体积和浓度记录分别计算每项污染物负荷；不得合并 COD、BOD5、TSS、氮或磷。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 水果、天然蜂蜜、其他明确声明的可发酵含糖原料，或在生产工厂门口接收并明确披露的本类别醪液或散装发酵饮料投入 |
| starting_condition_role | 路线特定饮料制造的前景进入点 |
| product_classification_scope | CPC 3.0 24230 发酵饮料；不包括鲜葡萄酒、麦芽啤酒、非发酵饮料、醋和蒸馏产品 |
| recursive_input_rule | 将采购的本类别醪液或散装发酵饮料作为一个原子产品投入，并关联一个上游数据集记录一次；不得在接收过程内部递归重建其生产。 |
| upstream_dataset_requirement | 每种原料、本类别中间产品、酵母、添加剂、加工助剂、水源、载能体、制冷剂、包装组件、进厂运输和厂外处理服务均应使用具有代表性的上游数据集。 |
| disclosure | 披露产品定义、原料路线、纳入及外包工序、排除的生命周期阶段、发酵和调质路线、产品与酒精损失、废水路线、废物与共产品去向、包装配置和分配选择。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_facility_gate` | 前景饮料系统 | 从已声明原料或递归的本类别投入进入工厂开始，纳入直至净可售产品发运的全部可归属工序，包括路线制备、发酵、后处理、灌装或散装制备、清洗、制冷、厂内公用工程、直接排放、废水、残余物和废物。 | `un-cpc-3-2025`; `ec-jrc-fdm-bref-2019`; `eu-pef-2021` |
| `boundary_route_selection` | 产品路线 | 采用且仅采用一条有记录的原料制备路线；仅纳入实际实施的后处理、二次发酵、巴氏杀菌、碳酸化和包装路线，并明确标识每项不适用过程。 | `uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `eu-czworniak-mead-2016`; `iglesias-mead-2014` |
| `boundary_complete_exchanges` | 每项纳入过程 | 将每种物料、公用工程、制冷剂、包装组件、产品、残余物、废物、废水流和直接排放作为单独的原子交换清单化。缺失上游数据应披露为数据缺口，不得按零负荷处理。 | `ec-jrc-fdm-bref-2019`; `eu-pef-2021` |
| `boundary_downstream` | 生命周期模型 | 配送、零售制冷、饮用、消费、包装寿命终结及其他下游阶段不在本工厂门到门数据集内；建立完整生命周期时需链接相应数据集。 | `eu-pef-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fruit_must_preparation` | 水果接收、破碎和醪液制备 | conditional | fermentable_raw_material=fruit | 将接收水果转化为水果醪并分离果渣 | 1,000 kg 参考产品 |
| `honey_must_preparation` | 蜂蜜醪制备 | conditional | fermentable_raw_material=honey | 混合蜂蜜与水并实施已声明的热制备 | 1,000 kg 参考产品 |
| `other_must_preparation` | 其他含糖原料醪制备 | conditional | fermentable_raw_material=other_sugar_material | 制备用于发酵的已具体声明的非水果、非蜂蜜可发酵原料 | 1,000 kg 参考产品 |
| `alcoholic_fermentation` | 酒精发酵 | required | 范围内所有产品 | 将可发酵糖转化为含酒精饮料和生物源二氧化碳 | 1,000 kg 参考产品 |
| `finishing_maturation` | 澄清、过滤、熟化和稳定 | conditional | 实施任何列明的后处理工序 | 生产后处理散装饮料，并记录加工助剂、损失、残余物和公用工程 | 1,000 kg 参考产品 |
| `conditioning_carbonation` | 二次发酵或外加二氧化碳 | conditional | 产品采用瓶内调质、瓶内二次发酵、罐内调质或外加二氧化碳 | 形成已声明的起泡或碳酸化饮料状态 | 1,000 kg 参考产品 |
| `packaging_dispatch` | 灌装、包装和发运制备 | conditional | 产品在发运前包装 | 灌装并装配已声明的包装，各组件不得合并 | 1,000 kg 参考产品 |
| `site_services_wastewater` | 场址公用工程、清洗、制冷和废水处理 | required | 记录共享服务；处理产出仅在前景控制范围内适用 | 分别记录各载能体、化学品、制冷剂、废水、污泥和直接排放 | 1,000 kg 参考产品 |

### 过程：水果接收、破碎和醪液制备（`fruit_must_preparation`）

#### 输入

##### 产品流

###### 新鲜水果原料（`fresh_fermentation_fruit`）

记录为压榨、打浆或直接制醪而接收的具体声明水果的合格质量。

- 选定流：发酵用新鲜水果
- 流属性/单位：Mass / kg
- 数量规则：校准后的接收质量，扣除有记录的不合格整批原料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### 水果清洗和制醪用水（`fruit_preparation_water`）

供应给水果清洗和制醪的水应单独计量或按批次估算。

- 选定流：过程水
- 流属性/单位：Volume / m3
- 数量规则：计量进入水果制备过程的水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `ec-jrc-fdm-bref-2019`

###### 水果破碎和压榨用电（`fruit_preparation_electricity`）

本路线的清洗、分选、破碎、压榨、泵送和控制所用电力在此记录。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：水果制备过程的计量或有可靠分表依据的用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `ec-jrc-fdm-bref-2019`

###### 水果制醪用果胶酶（`fruit_pectinase`）

仅在为提高出汁或澄清而添加果胶酶时记录。

- 选定流：果胶酶
- 流属性/单位：Mass / kg
- 数量规则：领用于水果醪批次的已称量制剂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_records`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### 脱氮凝胶澄清用氯化钙（`fruit_calcium_chloride`）

仅在已声明的 keeving 路线中记录食品级氯化钙。

- 选定流：氯化钙
- 流属性/单位：Mass / kg
- 数量规则：添加到批次中的已称量氯化钙质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_records`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`

#### 输出

##### 产品流

###### 转入发酵的水果醪（`fruit_must_output`）

水果醪在转移时计量，并保持与其他醪液身份分离。

- 选定流：发酵饮料生产用水果醪
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量，或使用匹配密度由校准体积换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`

##### 废物流

###### 破碎和压榨产生的果渣（`fruit_pomace`）

湿果渣应单独称量，并声明其有益利用、处理或处置去向。

- 选定流：发酵水果果渣
- 流属性/单位：Mass / kg
- 数量规则：从水果制备过程移除的已计量湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `ec-jrc-fdm-bref-2019`

###### 水果制备废水（`fruit_preparation_wastewater`）

水果清洗、压榨设备和路线清洗产生的废水按来源和去向记录。

- 选定流：水果制备废水
- 流属性/单位：Volume / m3
- 数量规则：水果制备过程计量或经验证的批次排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-fdm-bref-2019`

### 过程：蜂蜜醪制备（`honey_must_preparation`）

#### 输入

##### 产品流

###### 天然蜂蜜原料（`natural_honey`）

天然蜂蜜按批次称量，并与其他可发酵原料分开。

- 选定流：天然蜂蜜
- 流属性/单位：Mass / kg
- 数量规则：领用于蜂蜜醪制备的已称量蜂蜜
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-czworniak-mead-2016`; `iglesias-mead-2014`

###### 蜂蜜醪稀释用水（`honey_must_water`）

与蜂蜜混合的水属于配制醪液的一部分，应单独计量。

- 选定流：过程水
- 流属性/单位：Mass / kg
- 数量规则：计量水质量，或按实测温度将校准体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-czworniak-mead-2016`; `iglesias-mead-2014`

###### 蜂蜜醪制备用电（`honey_must_electricity`）

混合、泵送、冷却和控制的用电在本路线记录。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：计量或有可靠分配依据的路线用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-czworniak-mead-2016`; `ec-jrc-fdm-bref-2019`

###### 熟制蜂蜜醪用蒸汽（`honey_must_steam`）

仅在已声明的蜂蜜酒路线以蒸汽加热或煮制蜂蜜醪时记录外购蒸汽。

- 选定流：工业设施蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量输送到蜂蜜醪制备过程的蒸汽能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-czworniak-mead-2016`

#### 输出

##### 产品流

###### 转入发酵的蜂蜜醪（`honey_must_output`）

制得的蜂蜜醪在混合、任何加热和冷却后计量。

- 选定流：蜂蜜酒生产用蜂蜜醪
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量，或使用匹配密度由校准体积换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-czworniak-mead-2016`; `iglesias-mead-2014`

### 过程：其他含糖原料醪制备（`other_must_preparation`）

#### 输入

##### 产品流

###### 其他可发酵含糖原料（`other_sugar_material`）

数据包应指明一种具体含糖原料，并将其与水果和蜂蜜分开记录。

- 选定流：其他可发酵含糖原料
- 流属性/单位：Mass / kg
- 数量规则：领用于批次的已称量具体含糖原料数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`un-cpc-3-2025`

###### 其他含糖原料制醪用水（`other_must_water`）

掺入该醪液的水应单独计量。

- 选定流：过程水
- 流属性/单位：Mass / kg
- 数量规则：计量水质量，或按实测温度将校准体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 其他含糖原料制醪用电（`other_must_electricity`）

处理、溶解、混合、泵送和冷却的用电在本路线记录。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：计量或有可靠分配依据的路线用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 其他含糖原料制醪用蒸汽（`other_must_steam`）

仅在加热或巴氏杀菌制得醪液时记录外购蒸汽。

- 选定流：工业设施蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量输送到该路线的蒸汽能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-fdm-bref-2019`

#### 输出

##### 产品流

###### 转入发酵的其他含糖原料醪（`other_must_output`）

制得醪液保留具体声明原料路线的身份。

- 选定流：发酵饮料生产用其他含糖原料醪
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量，或使用匹配密度由校准体积换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`un-cpc-3-2025`

### 过程：酒精发酵（`alcoholic_fermentation`）

#### 输入

##### 产品流

###### 进入发酵的水果醪（`fermentation_fruit_must`）

本投入仅适用于水果路线，不与蜂蜜醪或其他醪液合并。

- 选定流：发酵饮料生产用水果醪
- 流属性/单位：Mass / kg
- 数量规则：从 `fruit_must_preparation` 计量的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### 进入发酵的蜂蜜醪（`fermentation_honey_must`）

本投入仅适用于蜂蜜酒路线。

- 选定流：蜂蜜酒生产用蜂蜜醪
- 流属性/单位：Mass / kg
- 数量规则：从 `honey_must_preparation` 计量的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-czworniak-mead-2016`; `iglesias-mead-2014`

###### 进入发酵的其他含糖原料醪（`fermentation_other_must`）

本投入仅适用于已声明的其他含糖原料路线。

- 选定流：发酵饮料生产用其他含糖原料醪
- 流属性/单位：Mass / kg
- 数量规则：从 `other_must_preparation` 计量的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`un-cpc-3-2025`

###### 活性干饮料酵母（`fermentation_yeast`）

采用接种发酵时记录外购酵母；自发发酵应披露本行不适用。

- 选定流：活性干饮料酵母
- 流属性/单位：Mass / kg
- 数量规则：添加至发酵罐的已称量干酵母
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_records`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `eu-czworniak-mead-2016`; `iglesias-mead-2014`

###### 磷酸氢二铵酵母营养剂（`diammonium_phosphate`）

使用营养补充时单独记录磷酸氢二铵。

- 选定流：磷酸氢二铵
- 流属性/单位：Mass / kg
- 数量规则：添加到批次中的已称量营养剂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_records`
- 来源：`iglesias-mead-2014`

###### 焦亚硫酸钾添加剂（`potassium_metabisulfite`）

仅在用于微生物控制或抗氧化时记录焦亚硫酸钾。

- 选定流：焦亚硫酸钾
- 流属性/单位：Mass / kg
- 数量规则：添加到醪液或饮料的已称量制剂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_records`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### 发酵控制用电（`fermentation_electricity`）

泵、搅拌、控制、冷却设备和罐操作的用电在此记录。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：计量或有可靠分表依据的发酵用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-fdm-bref-2019`

#### 输出

##### 产品流

###### 转入后处理或发运的发酵饮料（`fermented_beverage_output`）

发酵后饮料在路线特定的后处理、调质或包装前计量。

- 选定流：后处理前发酵饮料
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量，或使用匹配密度由校准体积换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `eu-czworniak-mead-2016`; `iglesias-mead-2014`

##### 废物流

###### 废发酵酵母（`spent_fermentation_yeast`）

从发酵中分离的废酵母应称量并指定一个有记录的去向。

- 选定流：废发酵酵母
- 流属性/单位：Mass / kg
- 数量规则：发酵、倒罐或发酵罐清洗期间移除的已计量湿酵母质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `eu-czworniak-mead-2016`

###### 发酵酒泥（`fermentation_lees`）

从发酵中分离的酒泥应与废酵母分开称量并指定一个有记录的去向。

- 选定流：发酵酒泥
- 流属性/单位：Mass / kg
- 数量规则：倒罐或发酵罐清洗期间移除的已计量湿酒泥质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `eu-czworniak-mead-2016`

###### 发酵废水（`fermentation_wastewater`）

发酵罐、输送管线和倒罐清洗废水按来源和去向记录。

- 选定流：发酵废水
- 流属性/单位：Volume / m3
- 数量规则：发酵操作计量或经验证的批次排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-fdm-bref-2019`

##### 基本流

###### 发酵产生的生物源二氧化碳（`fermentation_co2_biogenic`）

酒精发酵形成的二氧化碳通过计量或已记录的可发酵糖平衡计算。

- 选定流：排放到空气的生物源二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：计量尾气或 `calc_fermentation_co2`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`iglesias-mead-2014`; `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

### 过程：澄清、过滤、熟化和稳定（`finishing_maturation`）

#### 输入

##### 产品流

###### 进入后处理的发酵饮料（`finishing_beverage_input`）

转入饮料的质量应与后处理散装产出、残余物和损失核对。

- 选定流：后处理前发酵饮料
- 流属性/单位：Mass / kg
- 数量规则：从 `alcoholic_fermentation` 计量的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-czworniak-mead-2016`; `iglesias-mead-2014`; `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### 后处理和熟化用电（`finishing_electricity`）

泵送、过滤、离心、储存、冷却和控制的用电应单独记录。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：计量或有可靠分表依据的后处理用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 后处理过程用水（`finishing_water`）

路线特定产品制备或设备服务用水与清洗化学品分开记录。

- 选定流：过程水
- 流属性/单位：Volume / m3
- 数量规则：计量进入后处理操作的水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 热后处理用蒸汽（`finishing_steam`）

仅在本过程中包括热稳定、巴氏杀菌或热清洗时记录外购蒸汽。

- 选定流：工业设施蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量输送到后处理过程的蒸汽能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-czworniak-mead-2016`; `ec-jrc-fdm-bref-2019`

###### 膨润土澄清剂（`bentonite`）

仅在已声明饮料使用膨润土时记录。

- 选定流：膨润土
- 流属性/单位：Mass / kg
- 数量规则：添加到后处理过程的已称量干膨润土
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_records`
- 来源：`iglesias-mead-2014`

###### 硅藻土助滤剂（`diatomaceous_earth`）

仅在采用该助滤剂的路线中记录硅藻土。

- 选定流：硅藻土
- 流属性/单位：Mass / kg
- 数量规则：领用于过滤过程的已称量干助滤剂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_records`
- 来源：`ec-jrc-fdm-bref-2019`

#### 输出

##### 产品流

###### 后处理散装发酵饮料（`finished_bulk_beverage`）

完成路线特定的澄清、过滤、熟化和稳定后计量散装饮料。

- 选定流：后处理散装发酵饮料
- 流属性/单位：Mass / kg
- 数量规则：扣除保留残余物和损失后的已计量后处理散装质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-czworniak-mead-2016`; `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

##### 废物流

###### 废膨润土（`spent_bentonite`）

废膨润土应与其他过滤和澄清残余物分开称量。

- 选定流：废膨润土
- 流属性/单位：Mass / kg
- 数量规则：从后处理过程移除的已计量湿废膨润土质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 废硅藻土（`spent_diatomaceous_earth`）

废硅藻土应单独称量并指定处理去向。

- 选定流：废硅藻土
- 流属性/单位：Mass / kg
- 数量规则：从过滤过程移除的已计量湿助滤剂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 后处理不合格饮料（`finishing_beverage_loss`）

不合格或损失的饮料应单独计量，不得并入废水。

- 选定流：不合格发酵饮料
- 流属性/单位：Mass / kg
- 数量规则：后处理期间报废、溢出或移除的已计量产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 后处理废水（`finishing_wastewater`）

过滤、熟化容器、稳定和后处理清洗废水按去向记录。

- 选定流：后处理废水
- 流属性/单位：Volume / m3
- 数量规则：后处理过程计量或经验证的批次排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-fdm-bref-2019`

### 过程：二次发酵或外加二氧化碳（`conditioning_carbonation`）

#### 输入

##### 产品流

###### 进入调质的后处理饮料（`conditioning_beverage_input`）

在添加糖、酵母或二氧化碳前计量转入调质的饮料。

- 选定流：后处理散装发酵饮料
- 流属性/单位：Mass / kg
- 数量规则：从后处理或直接发酵路线计量的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### 二次发酵用蔗糖（`conditioning_sucrose`）

仅在已声明的二次发酵路线中记录用于启动发酵的蔗糖。

- 选定流：蔗糖
- 流属性/单位：Mass / kg
- 数量规则：添加到调质批次的已称量蔗糖
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_records`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### 二次发酵用酵母（`conditioning_yeast`）

二次发酵酵母与一次发酵酵母分开记录。

- 选定流：活性干饮料酵母
- 流属性/单位：Mass / kg
- 数量规则：二次发酵添加的已称量干酵母
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_records`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### 外加碳酸化用饮料级二氧化碳（`beverage_carbon_dioxide`）

外购二氧化碳仅用于外加碳酸化时记录，不得与发酵二氧化碳相抵。

- 选定流：饮料级二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：钢瓶、储罐或质量流量计平衡得到的产品加气量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_records`
- 来源：`eu-cider-perry-market-standards-2023`

###### 调质用电（`conditioning_electricity`）

调质罐、转瓶、除渣、冷却和碳酸化设备用电应单独记录。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：计量或有可靠分配依据的调质用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `ec-jrc-fdm-bref-2019`

#### 输出

##### 产品流

###### 调质发酵饮料（`conditioned_beverage`）

起泡或碳酸化饮料在最终灌装或发运前计量。

- 选定流：调质发酵饮料
- 流属性/单位：Mass / kg
- 数量规则：扣除除渣和转移损失后的已计量调质饮料质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`

##### 废物流

###### 二次发酵酒泥（`secondary_fermentation_lees`）

转瓶、除渣或罐内调质期间去除的酒泥应单独记录。

- 选定流：二次发酵酒泥
- 流属性/单位：Mass / kg
- 数量规则：二次发酵后处理期间移除的已计量湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`

### 过程：灌装、包装和发运制备（`packaging_dispatch`）

#### 输入

##### 产品流

###### 送往灌装的散装饮料（`packaging_beverage_input`）

转入灌装线的散装饮料应在包装损失前计量。

- 选定流：后处理散装发酵饮料
- 流属性/单位：Mass / kg
- 数量规则：计量转入包装过程的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`ec-jrc-fdm-bref-2019`

###### 包装线用电（`packaging_electricity`）

冲洗、灌装、封口、贴标、输送和托盘制备的用电应单独记录。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：计量或有可靠分配依据的包装线用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 包装线用水（`packaging_water`）

灌装线用水与其他过程用水分开计量。

- 选定流：过程水
- 流属性/单位：Volume / m3
- 数量规则：计量进入包装操作的水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 玻璃瓶（`glass_bottle`）

仅在玻璃瓶包装路线中记录玻璃瓶质量。

- 选定流：玻璃瓶
- 流属性/单位：Mass / kg
- 数量规则：灌装瓶数乘以核实的空瓶质量，再加已计量废品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### 铝制饮料罐（`aluminium_can`）

仅在易拉罐路线中记录铝罐质量。

- 选定流：铝制饮料罐
- 流属性/单位：Mass / kg
- 数量规则：灌装罐数乘以核实的空罐质量，再加已计量废品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021`

###### 钢制皇冠盖（`steel_crown_closure`）

钢制皇冠盖与瓶体及其他封口类型分开记录。

- 选定流：钢制皇冠盖
- 流属性/单位：Mass / kg
- 数量规则：使用数量乘以核实的单位质量，再加已计量废品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### 铝制螺旋盖（`aluminium_screw_cap`）

仅在使用时记录铝制螺旋盖，并与皇冠盖分开。

- 选定流：铝制螺旋盖
- 流属性/单位：Mass / kg
- 数量规则：使用数量乘以核实的单位质量，再加已计量废品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021`

###### 纸标签（`paper_label`）

纸标签与容器、封口件和纸箱分开记录。

- 选定流：纸标签
- 流属性/单位：Mass / kg
- 数量规则：使用数量乘以核实的单位质量，再加已计量废品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021`

###### 瓦楞纸箱（`corrugated_board_carton`）

按已声明的二次包装配置记录纸箱质量。

- 选定流：瓦楞纸箱
- 流属性/单位：Mass / kg
- 数量规则：纸箱数量乘以核实的单位质量，再加已计量废品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021`

###### 低密度聚乙烯收缩膜（`ldpe_shrink_film`）

收缩膜质量与纸箱及其他包装组件分开记录。

- 选定流：低密度聚乙烯收缩膜
- 流属性/单位：Mass / kg
- 数量规则：发出膜卷质量扣除退回质量，再加已计量生产线边角料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021`

#### 输出

##### 产品流

###### 市场就绪参考产品（`reference_product_output`）

这是已声明散装或包装发酵饮料的唯一参考产品交换。

- 选定流：本产品类别发酵饮料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：扣除灌装和发运制备损失后的固定净可售参考数量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：恰好 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`un-cpc-3-2025`; `eu-pef-2021`

##### 废物流

###### 灌装不合格饮料（`packaging_beverage_loss`）

不足量灌装、过量灌装、开线产品、溢出和不合格灌装产品应单独计量，不得并入废水。

- 选定流：不合格发酵饮料
- 流属性/单位：Mass / kg
- 数量规则：灌装线报废或损失的已计量饮料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 破损玻璃包装（`broken_glass`）

破损或不合格玻璃与金属、纸和塑料包装废物分开称量。

- 选定流：破损玻璃包装
- 流属性/单位：Mass / kg
- 数量规则：包装线已计量玻璃废品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 铝罐废料（`aluminium_can_scrap`）

不合格铝罐与盖件废料及其他包装废物分开称量。

- 选定流：铝罐废料
- 流属性/单位：Mass / kg
- 数量规则：包装过程已计量不合格铝罐质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 钢皇冠盖废料（`steel_crown_closure_scrap`）

不合格钢皇冠盖与罐、其他盖件及其他包装废物分开称量。

- 选定流：钢皇冠盖废料
- 流属性/单位：Mass / kg
- 数量规则：包装过程已计量不合格钢皇冠盖质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 铝螺旋盖废料（`aluminium_screw_cap_scrap`）

不合格铝螺旋盖与罐、钢盖及其他包装废物分开称量。

- 选定流：铝螺旋盖废料
- 流属性/单位：Mass / kg
- 数量规则：包装过程已计量不合格铝螺旋盖质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 纸标签废料（`paper_label_scrap`）

不合格纸标签与纸箱及其他包装废物分开记录。

- 选定流：纸标签废料
- 流属性/单位：Mass / kg
- 数量规则：包装过程已计量不合格纸标签质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 瓦楞纸板包装废料（`corrugated_board_scrap`）

不合格瓦楞纸板纸箱与标签及其他包装废物分开记录。

- 选定流：瓦楞纸板包装废料
- 流属性/单位：Mass / kg
- 数量规则：包装过程已计量不合格瓦楞纸板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 聚乙烯膜废料（`polyethylene_film_scrap`）

不合格收缩膜与所有其他包装废物分开记录。

- 选定流：聚乙烯膜废料
- 流属性/单位：Mass / kg
- 数量规则：包装过程已计量聚乙烯膜废品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 包装废水（`packaging_wastewater`）

灌装线、容器冲洗和包装清洗废水按去向记录。

- 选定流：包装废水
- 流属性/单位：Volume / m3
- 数量规则：包装操作计量或经验证的批次排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-fdm-bref-2019`

### 过程：场址公用工程、清洗、制冷和废水处理（`site_services_wastewater`）

#### 输入

##### 产品流

###### 场址共享用电（`site_electricity`）

未直接分表到其他过程的共享电力单独记录，并按因果驱动因素分配。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：使用有记录的运行或负荷驱动因素分配场址计量的共享用电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-fdm-bref-2019`; `eu-pef-2021`

###### 场内供热用天然气（`site_natural_gas`）

天然气作为一种燃料记录，不与其他燃料合并。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录热值换算的计量或发票数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 场内供热用液化石油气（`site_lpg`）

仅在使用时记录液化石油气，并与天然气和燃料油分开。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录热值换算的计量或发票数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 场内供热用轻质燃料油（`site_light_fuel_oil`）

仅在使用时记录轻质燃料油，并与气体燃料分开。

- 选定流：轻质燃料油
- 流属性/单位：Energy / MJ
- 数量规则：使用有记录热值换算的计量或发票数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 共享服务用外购蒸汽（`site_steam`）

共享热水或清洗系统使用的外购蒸汽与燃料分开计量。

- 选定流：工业设施蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量共享服务蒸汽能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 清洗和服务用水（`site_cleaning_water`）

共享在线清洗、卫生和场址服务用水与配方水分开计量。

- 选定流：过程水
- 流属性/单位：Volume / m3
- 数量规则：清洗和共享服务的计量或按事件记录的用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 氢氧化钠清洗剂（`sodium_hydroxide_cleaner`）

氢氧化钠与酸性清洗剂和消毒剂分开记录。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：由领用制剂及浓度计算的活性氢氧化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 硝酸清洗剂（`nitric_acid_cleaner`）

仅在使用酸洗步骤时记录硝酸。

- 选定流：硝酸
- 流属性/单位：Mass / kg
- 数量规则：由领用制剂及浓度计算的活性硝酸质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 过氧乙酸消毒剂（`peracetic_acid_disinfectant`）

使用过氧乙酸消毒时应单独记录。

- 选定流：过氧乙酸
- 流属性/单位：Mass / kg
- 数量规则：由领用制剂及浓度计算的活性过氧乙酸质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### R134a 制冷剂补充量（`r134a_makeup`）

仅在存在 R134a 制冷回路时按回路记录补充量。

- 选定流：R134a 制冷剂
- 流属性/单位：Mass / kg
- 数量规则：由 `calc_refrigerant_loss` 核对的维修补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### R404A 制冷剂补充量（`r404a_makeup`）

R404A 补充量与 R134a 和氨分开记录。

- 选定流：R404A 制冷剂
- 流属性/单位：Mass / kg
- 数量规则：由 `calc_refrigerant_loss` 核对的维修补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 无水氨制冷剂补充量（`ammonia_refrigerant_makeup`）

仅在使用氨制冷回路时记录无水氨补充量。

- 选定流：无水氨制冷剂
- 流属性/单位：Mass / kg
- 数量规则：由 `calc_refrigerant_loss` 核对的维修补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 来源：`ec-jrc-fdm-bref-2019`

##### 废物流

###### 进入场内处理的合并饮料过程废水（`wastewater_treatment_input`）

合并过程废水在处理入口记录，同时保持各来源过程流可追溯。

- 选定流：合并饮料过程废水
- 流属性/单位：Volume / m3
- 数量规则：与来源流核对的场内处理进水计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`ec-jrc-fdm-bref-2019`

#### 输出

##### 废物流

###### 经处理的饮料过程废水（`treated_wastewater`）

处理出水在直接排放、回用或转移前按体积和去向记录。

- 选定流：经处理的饮料过程废水
- 流属性/单位：Volume / m3
- 数量规则：计量处理出水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`ec-jrc-fdm-bref-2019`

###### 废水处理污泥（`wastewater_sludge`）

污泥按湿质量、适用时的干物质和一个有记录的去向进行记录。

- 选定流：饮料废水处理污泥
- 流属性/单位：Mass / kg
- 数量规则：从场内处理移除的已计量湿污泥质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`ec-jrc-fdm-bref-2019`

##### 基本流

###### 场内燃料燃烧的化石二氧化碳（`combustion_co2_fossil`）

化石二氧化碳按各燃料活动计算，但燃料投入不得合并。

- 选定流：排放到空气的化石二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：二氧化碳的 `calc_combustion_emissions`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-pef-2021`

###### 场内燃料燃烧的化石甲烷（`combustion_ch4`）

甲烷作为单独的直接排放计算。

- 选定流：排放到空气的化石甲烷
- 流属性/单位：Mass / kg
- 数量规则：甲烷的 `calc_combustion_emissions`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-pef-2021`

###### 场内燃料燃烧的一氧化二氮（`combustion_n2o`）

一氧化二氮作为单独的直接排放计算。

- 选定流：排放到空气的一氧化二氮
- 流属性/单位：Mass / kg
- 数量规则：一氧化二氮的 `calc_combustion_emissions`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-pef-2021`

###### 场内燃料燃烧的氮氧化物（`combustion_nox`）

氮氧化物与温室气体排放分开计算。

- 选定流：排放到空气的氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：氮氧化物的 `calc_combustion_emissions`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 排放到空气的 R134a（`r134a_to_air`）

R134a 损失与其他所有制冷剂分开报告。

- 选定流：排放到空气的 1,1,1,2-四氟乙烷
- 流属性/单位：Mass / kg
- 数量规则：R134a 回路的 `calc_refrigerant_loss`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 排放到空气的 R404A（`r404a_to_air`）

R404A 损失作为单独的制冷剂混合物基本流报告。

- 选定流：排放到空气的 R404A 制冷剂
- 流属性/单位：Mass / kg
- 数量规则：R404A 回路的 `calc_refrigerant_loss`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 排放到空气的氨制冷剂（`ammonia_to_air`）

无水氨损失与含氟制冷剂分开报告。

- 选定流：排放到空气的氨
- 流属性/单位：Mass / kg
- 数量规则：氨制冷回路的 `calc_refrigerant_loss`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`ec-jrc-fdm-bref-2019`

###### 排放到水体的化学需氧量（`cod_to_water`）

COD 使用匹配的出水流量和浓度记录计算。

- 选定流：排放到水体的化学需氧量
- 流属性/单位：Mass / kg
- 数量规则：COD 的 `calc_wastewater_load`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`ec-jrc-fdm-bref-2019`

###### 排放到水体的五日生化需氧量（`bod5_to_water`）

BOD5 与 COD 分开计算。

- 选定流：排放到水体的五日生化需氧量
- 流属性/单位：Mass / kg
- 数量规则：BOD5 的 `calc_wastewater_load`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`ec-jrc-fdm-bref-2019`

###### 排放到水体的总悬浮固体（`tss_to_water`）

总悬浮固体作为单独污染物负荷计算。

- 选定流：排放到水体的总悬浮固体
- 流属性/单位：Mass / kg
- 数量规则：TSS 的 `calc_wastewater_load`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`ec-jrc-fdm-bref-2019`

###### 排放到水体的总氮（`total_nitrogen_to_water`）

总氮与其他水排放指标分开计算。

- 选定流：排放到水体的总氮
- 流属性/单位：Mass / kg
- 数量规则：总氮的 `calc_wastewater_load`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`ec-jrc-fdm-bref-2019`

###### 排放到水体的总磷（`total_phosphorus_to_water`）

总磷与其他水排放指标分开计算。

- 选定流：排放到水体的总磷
- 流属性/单位：Mass / kg
- 数量规则：总磷的 `calc_wastewater_load`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`ec-jrc-fdm-bref-2019`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 所有前景过程和共享场址服务 | 首先通过批次、生产线、储罐、清洗事件、制冷回路和处理操作的分表计量或细分避免分配，使可直接归属的交换保留在已声明产品上。 | `eu-pef-2021`; `ec-jrc-fdm-bref-2019` |
| `allocation_physical_causality` | 无法细分的共享操作 | 使用产品质量、储罐占用、运行时间、热负荷、清洗事件、废水体积或污染物负荷等有记录的物理因果驱动因素分配剩余共享投入和产出，并说明为何该驱动因素反映因果关系。 | `eu-pef-2021` |
| `allocation_economic_fallback` | 不存在可辩护物理关系的多个有价值产出 | 仅在证明无法细分且无法使用物理因果关系后，才可使用同期经济价值等有记录的非物理关系；披露价格、参考期、分配因子和敏感性结果。 | `eu-pef-2021` |
| `allocation_residue_status` | 果渣、酵母、酒泥、回收二氧化碳、污泥和其他回收产出 | 只有在产出被单独计量、符合已声明规格且有记录的有益用途或市场价值时才作为共产品；否则作为废物记录。除非更广范围研究采用一致的替代方法，不得在本工厂门到门清单中扣减避免产品信用。 | `eu-pef-2021`; `ec-jrc-fdm-bref-2019` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | all | 原料、醪液、中间产品和产品质量 | 秤、储罐、密度、批次和发运记录 | batch_id; material_identity; route; timestamp; gross_mass; tare_mass; volume; temperature; density; opening_stock; closing_stock; transfer_loss | 校准秤，或使用匹配密度换算校准体积 | kg | 每次接收、批次、转移和发运 | 完整代表性生产周期 | 所有前景操作 | 归一化前核对路线特定投入、产出、库存变化、排放和有记录损失 | 校准证书；罐容表；批次核对；发运记录 |
| `cp_energy_records` | all | 电力、蒸汽和每种燃料 | 仪表、发票和设备分配记录 | carrier_identity; meter_id; timestamp; quantity; unit; heating_value_basis; process_assignment; allocation_driver | 优先直接分表；否则由工厂总表作有记录分配 | kWh; MJ | 连续或发票周期 | 完整代表性生产周期 | 前景工厂和场内处理 | 分别汇总每种载能体；不得合并为能源行 | 仪表校准；发票；分配工作表；完整性检查 |
| `cp_water_records` | all | 配方水、过程水和清洗水 | 仪表、批次和清洗事件记录 | meter_id; timestamp; volume; temperature; source; process_assignment; reuse_flag | 直接计量或经验证的事件估算 | kg; m3 | 连续、每批或每次清洗事件 | 完整代表性生产周期 | 所有前景操作 | 按来源和过程汇总；区分进入产品的水、新鲜取水和回用水 | 仪表校准；批次单；清洗日志；水平衡 |
| `cp_additive_records` | all | 酵母、营养剂、添加剂、加工助剂、糖和二氧化碳 | 称量、配方、库存领料和气体计量记录 | material_identity; supplier; active_fraction; batch_id; issued_mass; returned_mass; gas_quantity | 称量领退平衡或校准加料记录 | kg | 每次添加 | 完整代表性生产周期 | 前景饮料操作 | 按每种原子物料和路线分别汇总 | 供应商规格；秤校准；批次单；库存核对 |
| `cp_cleaning_records` | site_services_wastewater | 每种清洗或消毒化学品 | CIP 配方、浓度、电导率、库存和事件记录 | chemical_identity; formulation; active_fraction; event_id; process; solution_volume; concentration; recovered_quantity | 由领用制剂和实测浓度计算活性质量，或使用库存平衡 | kg | 每次清洗事件 | 完整代表性生产周期 | 前景清洗系统 | 分别汇总每种活性化学品；保留回用溶液和处置记录 | 供应商规格；电导率或滴定记录；库存核对 |
| `cp_refrigerant_records` | site_services_wastewater | 每种制冷剂补充和损失 | 资产台账和维修记录 | equipment_id; refrigerant_identity; opening_charge; added_mass; recovered_mass; closing_charge; service_date; process_assignment | 回路级库存平衡 | kg | 每次维修及年度或周期结算 | 与已声明生产周期重叠的期间 | 服务于前景过程的制冷系统 | 分别计算并报告每种制冷剂 | 技师记录；采购凭证；资产台账；核对 |
| `cp_packaging_records` | packaging_dispatch | 每个包装组件 | 物料清单、数量、单位质量、领用、退回和废品记录 | component_identity; supplier; specification; unit_mass; issued_count; returned_count; reject_count; reusable_cycles | 数量乘以核实的单位质量，或直接质量领料平衡 | kg | 每次包装运行 | 完整代表性生产周期 | 前景控制下的包装操作 | 分别汇总每个组件；核对产品灌装量和废品 | 供应商规格；单位质量抽检；生产线核对 |
| `cp_waste_records` | all | 每项废物、残余物或共产品 | 称重、收集、干物质、状态和去向记录 | waste_identity; wet_mass; dry_matter; batch_id; destination; market_status; specification; haulier | 校准秤，或容器数量乘以核实净质量 | kg | 每次移除 | 完整代表性生产周期 | 所有前景过程 | 分别汇总每种身份和去向；不得以销售收入抵扣投入 | 称重单；联单；分析；去向证明 |
| `cp_wastewater_records` | all | 每项来源过程废水 | 流量计、储罐、下水道、回用和处理记录 | source_process; timestamp; volume; destination; sanitary_inclusion; product_loss; treatment_route | 计量流量或经验证的罐体积平衡 | m3 | 连续或每个排放批次 | 包括清洗和生产峰值的完整周期 | 前景控制下的废水 | 聚合前保留来源流；核对进水、出水、回用和转移 | 流量计校准；排水发票；罐记录；水平衡 |
| `cp_wastewater_monitoring` | site_services_wastewater | 每项废水污染物 | 匹配的流量和实验室样品记录 | sample_id; interval; discharge_volume; cod; bod5; tss; total_nitrogen; total_phosphorus; method; detection_limit | 代表性混合采样和有记录的实验室分析 | kg; mg/L; m3 | 按许可证并足以代表生产变化 | 完整代表性生产周期 | 前景控制下的直接排放 | 将每项浓度与同一流量时段匹配，并分别计算每种污染物 | 样品流转记录；方法；实验室 QA/QC；流量计校准 |
| `cp_direct_emission_records` | all | 发酵、燃烧和制冷剂排放 | 糖、尾气、燃料、因子和资产记录 | batch_id; sugar_before; sugar_after; offgas_mass; fuel_identity; fuel_quantity; factor_id; factor_value; refrigerant_identity; refrigerant_loss | 优先直接计量；否则采用有记录的化学计量、因子或资产平衡 | kg | 每批、每个燃料期间或每次制冷剂维修 | 完整代表性生产周期 | 前景直接排放源 | 分别计算每种排放物质 | 分析记录；发票；因子来源；计算工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | 每项清单交换 | normalized_amount = campaign_amount / net_saleable_reference_product_mass × 1,000 kg | 周期交换量；净可售产品质量 | 每 1,000 kg 参考产品的交换 | `eu-pef-2021` |
| `calc_volume_to_mass` | 醪液、饮料、水和液态物料 | mass = calibrated_volume × density measured or justified for the material and temperature | 体积；温度；密度 | 物料质量 | `eu-pef-2021` |
| `calc_active_chemical` | 配制添加剂和清洗剂 | active_material_mass = formulation_mass × verified active_mass_fraction | 制剂质量；活性质量分数 | 原子活性物料质量 | `ec-jrc-fdm-bref-2019` |
| `calc_fermentation_co2` | 酒精发酵 | 可靠时使用计量尾气；否则 CO2_mass = fermentable_hexose_equivalent_consumed × 88/180，并按有记录的溶解或回收二氧化碳调整 | 发酵前后糖；批次质量；计量尾气；保留或回收二氧化碳 | 排放到空气的生物源二氧化碳 | `iglesias-mead-2014` |
| `calc_refrigerant_loss` | 每个制冷回路 | loss = opening_charge + additions - recovered_mass - closing_charge；每种制冷剂保留一个计算 | 回路级制冷剂库存 | 排放到空气的制冷剂 | `ec-jrc-fdm-bref-2019` |
| `calc_combustion_emissions` | 每种燃料和排放物质 | emission_mass = fuel_activity × documented fuel- and substance-specific emission_factor | 燃料数量；热值基准；因子身份 | 分别输出 CO2、CH4、N2O 或 NOx 排放 | `eu-pef-2021` |
| `calc_wastewater_load` | 每项直接水排放指标 | load_kg = matched_discharge_volume_m3 × concentration_mg_per_L / 1,000 | 排放体积；匹配浓度 | 分别输出 COD、BOD5、TSS、总氮或总磷负荷 | `ec-jrc-fdm-bref-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和每项交换 | 保留产品定义、原料路线、原子流身份、物料规格、包装组件、制冷剂身份、废物状态和去向。 | 产品标准；批次单；供应商规格；资产台账；废物联单 |
| `dq_temporal` | 前景数据 | 覆盖一个完整代表性生产周期，包括可归属于产品的制备、发酵、熟化、包装、清洗、制冷、库存变化和废水；披露偏差。 | 带日期的仪表导出；生产日历；期初和期末库存 |
| `dq_measurement` | 质量、体积、能源、水、化学品、包装和污染物记录 | 使用校准仪器或有记录的工程估算；保留单位、密度、活性分数、热值、检出限和分配驱动因素。 | 校准证书；实验室 QA/QC；计算工作表 |
| `dq_completeness` | 所有纳入过程 | 核对原料、产品、中间产品、产品损失、公用工程、添加剂、助剂、包装、每项废物、废水去向、制冷剂和直接排放；解释每项缺失或排除流。 | 周期平衡；签署的完整性审查；`ec-jrc-fdm-bref-2019`; `eu-pef-2021` |
| `dq_representativeness` | 前景和链接的上游数据 | 描述时间、地理、技术、精度、完整性、一致性、来源和不确定性；受控过程优先使用场址特定记录，上游使用代表性数据集。 | 数据质量评估；数据集元数据；`eu-pef-2021` |
| `dq_range_integrity` | 任何未来数量范围 | 不得将单一工厂、批次、情景或论文值转成范围。只有至少两份独立、边界兼容且已核验的原文共同支持，才可编写推断经验范围。 | 来源对比和范围审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求精确的 1,000 kg 质量基准和全部产品限定信息；在确认一个 Tiangong 产品流覆盖完整类别前，产品流 UUID 保持为空。 | `un-cpc-3-2025`; `eu-cider-perry-market-standards-2023` |
| `validate_scope` | 产品身份 | 确认酒精发酵形成产品身份，并拒绝鲜葡萄酒、麦芽啤酒、非发酵饮料、醋、蒸馏酒及不再保持发酵饮料特征的产品。 | `un-cpc-3-2025`; `eu-cn-2206-2019` |
| `validate_route` | 过程图 | 要求且仅要求一条适用制醪路线、酒精发酵，以及所有实际实施的后处理、调质、包装、公用工程、清洗、制冷和废水操作；禁止合并路线选择型交换。 | `uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `eu-czworniak-mead-2016`; `iglesias-mead-2014` |
| `validate_atomic_inventory` | 清单行 | 拒绝任何合并原料、酵母和营养剂、电力和热、多个燃料、多个制冷剂、多个化学品、过滤助剂、包装组件、废物、废水指标或空气排放的选定流。 | `ec-jrc-fdm-bref-2019`; `eu-pef-2021` |
| `validate_mass_balance` | 每项过程和生产周期 | 发布前核对期初库存加投入与产出、期末库存、发酵二氧化碳、水分或密度变化、已计量废物、废水中的产品损失和有记录损失。 | `ec-jrc-fdm-bref-2019`; `eu-pef-2021` |
| `validate_wastewater` | 废水和直接排放 | 要求来源过程体积和去向；核对场内处理进出水；在监测或要求时分别计算 COD、BOD5、TSS、总氮和总磷。 | `ec-jrc-fdm-bref-2019` |
| `validate_packaging` | 包装产品 | 核对灌装数量和净产品质量，并要求每个实际使用的容器、封口件、标签、纸箱和薄膜的独立质量，以及独立废品流。 | `eu-pef-2021` |
| `validate_allocation` | 共享操作和回收产出 | 要求有记录的细分尝试、因果驱动因素、剩余分配因子、产出状态，以及任何非物理备选方案的敏感性；禁止未披露的避免产品信用。 | `eu-pef-2021` |
| `validate_sources_and_quality` | 前景数据包 | 对外部约束规则要求 source id，对受控过程要求前景记录，对无法获得的上游数据要求有记录代理，并要求完整质量披露以及明确的 range 和 UUID 未解决项。 | `ec-jrc-fdm-bref-2019`; `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 生产工厂发运口某一种已声明本类别发酵饮料的前景生产数据集 |
| downstream_use | `secondary_dataset`; 经审查和发布后可作 `background_dataset` |
| allowed_use | 与已声明原料路线、产品标准、技术、地理、生产周期、包装和工厂门到门边界一致的产品与过程 LCA、供应链清单、环境足迹研究、热点分析和情景建模 |
| excluded_use | 鲜葡萄酒、麦芽啤酒、非发酵饮料、醋、蒸馏酒，或水果、蜂蜜和其他含糖原料路线之间未披露的替代；仅凭本工厂门到门数据集作出暗示摇篮到坟墓覆盖的消费者声明 |
| required_metadata | PCR id 和版本；产品名称及法域标准；可发酵原料；实际酒精度；残糖或甜度类别；静态或起泡状态；碳酸化和热处理路线；地理；生产周期；散装或包装状态；包装物料清单；参考质量；废水路线；废物与共产品去向；分配方法；上游数据集身份 |
| required_quality_disclosure | 一手与二手数据比例；测量和换算方法；校准和实验室证据；时间、地理和技术代表性；完整性；不确定性；分配敏感性；未解决的流 UUID；缺失的范围证据；排除项和代理数据集 |
| update_trigger | 产品身份或法律、原料路线或配方、发酵或后处理技术、能源系统、制冷剂、清洗制度、包装配置、废水路线、回收产出状态、分配方法、生产代表性或重大审查发现发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | 联合国统计司，CPC 3.0 版结构，2025 年 6 月 30 日，代码 24230：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 权威产品类别名称、纳入与排除；访问于 2026-08-23 |
| `eu-cider-perry-market-standards-2023` | official_guidance | 欧盟委员会，COM(2023) 200 final，关于苹果酒和梨酒新市场标准的报告：https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:52023DC0200 | 苹果酒和梨酒定义、果汁含量、加水加糖及生产规则因法域而异的官方证据；支持必需限定信息而非全球统一配方；访问于 2026-08-23 |
| `eu-cn-2206-2019` | standard | 欧盟，《合并关税目录解释性说明》税目 2206，2019/C 219/04：https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52019XC0701(02) | 对其他发酵饮料及产品保持发酵饮料特征要求的独立官方说明；访问于 2026-08-23 |
| `uk-welsh-cider-2015` | standard | 英国政府，《传统威尔士苹果酒产品规范》V2，2015 年 5 月 14 日：https://assets.publishing.service.gov.uk/media/5fd36b18d3bf7f03a934080c/protected-food-name-welsh-cider.pdf | 已核验全文的苹果酒路线：水果接收、清洗、破碎、压榨、接种或自发发酵、亚硫酸盐和 keeving 助剂、倒罐、静态与二次发酵包装路线及可追溯性；访问于 2026-08-23 |
| `uk-welsh-perry-2015` | standard | 英国政府，《传统威尔士梨酒产品规范》V2，2015 年 5 月 14 日：https://assets.publishing.service.gov.uk/media/5fd36afd8fa8f54d60878a81/protected-food-name-welsh-perry.pdf | 已核验全文的梨酒路线：梨压榨、发酵、酵母和允许助剂、倒罐、静态与起泡后处理、包装及可追溯性；访问于 2026-08-23 |
| `eu-czworniak-mead-2016` | standard | 欧盟，Czwórniak 传统蜂蜜酒产品规范，2016/C 188/05：https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52016XC0527(01) | 已核验官方蜂蜜酒路线：蜂蜜、水、可选水果或草本、蒸汽加热制醪、冷却、酵母接种、发酵、倒罐、熟化、过滤及最终调整；访问于 2026-08-23 |
| `iglesias-mead-2014` | literature | Iglesias, A. 等，Developments in the Fermentation Process and Quality Improvement Strategies for Mead Production，Molecules 19(8), 12577-12590，DOI：https://doi.org/10.3390/molecules190812577 | 开放获取同行评审全文，支持蜂蜜-水醪、酵母、营养剂、巴氏杀菌、发酵二氧化碳、发酵控制、发酵后处理和除杂 |
| `ec-jrc-fdm-bref-2019` | official_guidance | 欧盟委员会联合研究中心，《食品、饮料和乳制品行业最佳可行技术参考文件》，EUR 29978 EN，JRC118627，DOI：https://doi.org/10.2760/243911 | 已核验全文的过程清单、水和能源监测、清洗及 CIP 化学品、残余物拆分、制冷剂、废水表征与处理、污泥、直接排放和数据质量证据 |
| `eu-pef-2021` | official_guidance | 欧盟委员会建议 (EU) 2021/2279，环境足迹方法合并文本：https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 功能单位、参考流、系统边界、完整性、企业特定数据、包装、数据质量、核验及多功能性层级；访问于 2026-08-23 |
