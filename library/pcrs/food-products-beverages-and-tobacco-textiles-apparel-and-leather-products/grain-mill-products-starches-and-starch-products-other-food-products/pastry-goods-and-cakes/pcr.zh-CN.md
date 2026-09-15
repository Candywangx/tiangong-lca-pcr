---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.pastry-goods-and-cakes
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 糕点和蛋糕

## 1. 范围与适用性

本 PCR 规定以新鲜或保藏、可直接食用状态在制造工厂门口交付的糕点和蛋糕前景数据生产规则。范围包括产品特定的原料称量与准备、混合、成型、包馅或分层、条件性的静置或发酵、烘焙/蒸制/油炸等热加工、冷却、后处理、包装、清洁、公用工程以及条件性的受控储存。

本类别包括有馅或无馅糕点、蛋糕、中式糕点及成品身份属于糕点或蛋糕的类似产品。面包及本类别之外的其他焙烤制品、饼干、华夫饼、威化饼、姜饼、糖果、作为中间产品销售的生面团，以及产品离开制造工厂门口后的餐饮制作不在范围内。

天工产品流 `Chinese Pastry / 中式糕点` 是选定的代表性参考身份。它证明类别中存在相关产品，但不定义默认配方、馅料、发酵路线、技术、包装或市场组合。因此，每个前景数据包都必须按实际产品和配方采集，并声明产品是否采用酵母发酵、化学膨松或不膨松路线，是否烘焙、蒸制、油炸、包馅、涂层、冷藏、冷冻或常温稳定。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.pastry-goods-and-cakes |
| classification_refs | CPC 3.0：23430，Pastry goods and cakes，精确范围语境 |
| covered_products | 以成品食品交付的新鲜或保藏糕点和蛋糕，包括有馅或无馅糕点、蛋糕和中式糕点 |
| excluded_products | 本类别之外的面包和其他焙烤制品；姜饼、甜饼干、华夫饼和威化饼；糖果；作为中间产品销售的生面团；餐饮制作 |
| representative_product | Chinese Pastry / 中式糕点；只代表身份，不代表配方或定量默认值 |
| production_route | 原料接收和称量；混合；成型/包馅；条件性的静置或发酵；烘焙、蒸制、油炸或其他热定型；冷却/后处理；包装；清洁和公用工程；条件性的受控储存 |
| market_state | 制造工厂门口的净可销售成品，并声明保藏状态、包装形式和储存条件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足所声明市场和储存条件、安全且可销售的特定糕点或蛋糕 |
| How much | 1 kg 净产品质量；除非明确作为所声明产品的一部分，否则不含二级和三级运输包装 |
| How well | 符合所声明的产品规格、配方、馅料或表面装饰、水分/保藏状态、包装形式及适用食品安全要求 |
| How long or cycle | 完成一次生产和包装周期并到达制造工厂门口；保质期是必需限定信息，但不是服务时长乘数 |
| reference_flow_link | 参考流为 `cooling_finishing_and_packaging` 的 1 kg 净可销售输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净可销售糕点或蛋糕 |
| 参考产品流 | Chinese Pastry / 中式糕点 `06ce1f04-75f8-43b5-bea0-af398fdd46b4` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类型；配方标识；原料和过敏原构成；馅料/表面装饰/涂层；膨松路线；热加工路线；净水分或保藏状态；包装形式及纳入的包装层级；生产场址和地理范围；储存条件和保质期；代表性生产期间；分配选择 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有报告数量归一化到 1 kg 净可销售成品；运输包装不计入净产品质量，纳入边界的包装单独报告。 |
| `batch_normalization` | 批次和产线记录 | Mass | kg/kg 参考产品 | 同一代表批次或经核对期间的批次投入、产出、损失、公用工程和排放除以实测合格净产品输出。 |
| `recipe_mass_basis` | 原料和工艺用水 | Mass | kg | 记录实际投用的原料质量，包括加水、馅料、涂层、装饰、保留在产品中的加工助剂和回用物料；明确区分干物质或浓缩物换算。 |
| `energy_carrier_separation` | 电力、蒸汽、燃料和热 | Energy 或燃料质量/体积 | kWh、MJ、kg 或 m3 | 保留实测能源载体和单位；仅使用有记录的因子换算，清单建模前不得合并电力和热能。 |
| `packaging_mass_separation` | 一级、二级和三级包装 | Mass | kg | 按材料和包装层级分别记录，并说明制造工厂门口边界纳入哪些层级。 |
| `moisture_and_yield_consistency` | 配制物、热加工产品和成品 | Mass | kg | 核对水分变化、保留的馅料/涂层、次品、返工和可销售输出，确保产率和质量平衡使用一致的产品状态。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 到达制造场址的原料、加工助剂、包装材料、公用工程和外购中间品，并声明数量、供应商/地理范围和来料状态 |
| starting_condition_role | 前景制造系统的进入产品和公用工程投入 |
| product_classification_scope | 糕点和蛋糕这一语义产品类别；CPC 3.0 代码 23430 仅为分类语境，不单独构成已接受映射 |
| recursive_input_rule | 作为原料或中间品采购的糕点或蛋糕只记录一次进入产品流并链接供应商工厂门口上游数据集；不得在接收方前景系统内递归重建其制造过程 |
| upstream_dataset_requirement | 为面粉和其他谷物、糖/糖浆、油脂、蛋、乳、坚果/籽、可可/水果/馅料、添加剂、包装、电力、燃料/热、水供应、废水和废物处理以及研究纳入的运输链接代表性上游数据集 |
| disclosure | 声明配方、生产路线和设备、场址/地理范围、产品和包装状态、代表期间和产品组合、产率与返工、能源和水覆盖、直接排放、废物处理、冷链条件和分配选择 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing_gate` | 前景制造 | 纳入从原料接收和称量到制造工厂门口净可销售包装产品的全部前景操作，包括清洁、公用工程、次品、废水、直接排放和场内处理。 | `epd-food-beverage-pcr-2025-03`; `eu-fdm-bref-2019` |
| `boundary_upstream_links` | 外购投入 | 通过链接数据集表示上游原料、能源、水、包装、运输和处理负荷；不得将外购投入视为无负荷。 | `eu-pef-2021-2279` |
| `boundary_downstream_default` | 分销、零售、使用和生命末期 | 本前景制造数据包默认不含下游阶段；若研究明确扩展边界，应单独报告新增阶段。 | `eu-pef-2021-2279`; `epd-food-beverage-pcr-2025-03` |
| `boundary_route_conditionals` | 产品特定操作 | 发酵/醒发、油炸、冷藏/冷冻、包馅/涂层、受控储存和排放控制仅在实际配方和路线使用时纳入；应明确记录不适用。 | `us-epa-bakery-act-1992`; `eu-fdm-bref-2019` |
| `boundary_product_specificity` | 代表性产品 | 不得把 Chinese Pastry 身份作为默认配方或清单；必须采集产品、配方、场址和期间特定的前景数据。 | `china-gb-7099-2015`; `china-gb-8957-2016` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `formulation_and_mixing` | 配方、称量和混合 | required | 始终纳入 | 将实测配方投入转化为配制的面糊、面团或糕点坯料 | kg 配制物 |
| `fermentation_and_resting` | 发酵、醒发或受控静置 | conditional | 配方需要酵母作用、醒发、静置、起酥调温或受控温湿度时纳入 | 热加工前调理配制物 | kg 调理物 |
| `forming_and_thermal_processing` | 成型、包馅和热加工 | required | 始终纳入；选择实际烘焙、蒸制、油炸或其他路线 | 生产热定型糕点或蛋糕并记录过程损失和直接排放 | kg 热加工产品 |
| `cooling_finishing_and_packaging` | 冷却、后处理和包装 | required | 始终纳入 | 生产净可销售参考产品并形成包装清单 | 1 kg 净可销售产品 |
| `cleaning_and_utility_support` | 清洁、卫生和公用工程支持 | required | 始终纳入并分配到代表性生产 | 记录工艺用水、清洁剂、公用工程、废水和残渣 | 所支持的 kg 净可销售产品 |
| `conditioned_storage` | 场内冷藏、冷冻或控湿储存 | conditional | 制造工厂门口前发生受控储存时纳入 | 发运前维持所声明产品状态 | kg 产品 × 所声明储存时长 |

### 过程：配方、称量和混合（`formulation_and_mixing`）

#### 输入

##### 产品流

###### 产品特定的配方原料（`recipe_ingredients`）

按实际批次配方和领用记录分别记录每种原料，包括面粉/淀粉、糖/糖浆、油脂、蛋、乳、坚果/籽、水果/可可、馅料、膨松剂、添加剂、盐和保留在产品中的加工助剂。

- 选定流：产品特定原料流；在构建前景数据包时选择 UUID
- 流属性/单位：Mass / kg
- 数量规则：代表批次或经核对生产期间实际投用的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_and_batch_mass`
- 来源：`epd-food-beverage-pcr-2025-03`
- 数量范围：暂定配方投入质量平衡筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：2.5
  - 单位：kg 原料/kg 净可销售产品
  - 基准：水分损失和废物发生前的总实际投用原料质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 配方加水和工艺加水（`recipe_water`）

将有意加入面糊、面团、糖浆、馅料、接触蒸汽或其他产品形成步骤的水与清洁用水分开记录。

- 选定流：Process water；在构建前景数据包时选择 UUID
- 流属性/单位：Mass / kg
- 数量规则：实测或按批次配方记录的产品形成用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_and_batch_mass`
- 来源：`eu-fdm-bref-2019`
- 数量范围：暂定加水量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.5
  - 单位：kg 水/kg 净可销售产品
  - 基准：产品水分损失前加入的水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 混合用电（`mixing_electricity`）

记录称量、输送、筛分、混合、打发、研磨、泵送和局部控制的电力。

- 选定流：场址电力供应；在构建前景数据包时选择 UUID
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或由实测设备功率和运行时间计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`eu-fdm-bref-2019`
- 数量范围：暂定混合用电筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kWh/kg 净可销售产品
  - 基准：人工到机械化配制路线的宽泛候选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 配制的面糊、面团或糕点坯料（`prepared_mix`）

记录转入成型、静置、发酵或热加工的实测配制物质量。

- 选定流：产品特定的配制中间品
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量或由批次记录进行质量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_recipe_and_batch_mass`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 配制损失和未回用残渣（`preparation_waste`）

记录洒落原料、边料、过期预混料、过滤残渣以及未作为有记录返工回流的配制物。

- 选定流：产品特定食品生产废物
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废物；排除在代表系统内回流的有记录同产品返工
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste_and_rework`
- 数量范围：暂定配制损失筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kg 废物/kg 净可销售产品
  - 基准：未回用配制损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：发酵、醒发或受控静置（`fermentation_and_resting`）

#### 输入

##### 产品流

###### 进入调理的配制物（`conditioning_input`）

记录进入条件性调理步骤的配制面糊或面团。

- 选定流：产品特定配制中间品
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 调理输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_and_batch_mass`
- 来源：`us-epa-bakery-act-1992`

###### 调理用电或热（`conditioning_energy`）

记录醒发箱、静置室、湿度控制、面团冷却或起酥调温的能源。

- 选定流：场址特定电力、蒸汽或热载体
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：实测能源，或设备功率/燃料消耗乘运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`us-epa-bakery-act-1992`; `eu-fdm-bref-2019`
- 数量范围：暂定调理能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kWh-equivalent/kg 净可销售产品
  - 基准：路线筛查宽范围；清单保留实际载体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调理后的面糊或面团（`conditioned_mix`）

记录转入成型或热加工的调理物；适用时保留酵母用量和作用时间。

- 选定流：产品特定调理中间品
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 调理输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_parameters`
- 来源：`us-epa-bakery-act-1992`

##### 废物流

##### 基本流

###### 发酵产生并排入空气的二氧化碳（`fermentation_co2`）

对酵母膨松产品，在选定建模方法要求时报告发酵生物源二氧化碳，并与化石燃烧排放区分。

- 选定流：Carbon dioxide, biogenic, to air；在构建前景数据包时选择 UUID
- 流属性/单位：Mass / kg
- 数量规则：实测或依据有记录的发酵化学和配方计算；否则披露为未解决
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`us-epa-bakery-act-1992`

### 过程：成型、包馅和热加工（`forming_and_thermal_processing`）

#### 输入

##### 产品流

###### 配制或调理后的加工物（`thermal_process_input`）

记录进入成型、包馅、烘焙、蒸制、油炸或其他热定型的质量。

- 选定流：产品特定配制或调理中间品
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热加工输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste_and_rework`
- 来源：`us-epa-bakery-act-1992`

###### 热能和工艺燃料（`thermal_energy`）

分别记录烤炉、蒸制设备、油炸设备、热板和热控制使用的电力、蒸汽、气体、油、生物质或其他能源载体。

- 选定流：场址特定电力、燃料、蒸汽或热载体
- 流属性/单位：Energy 或燃料数量 / kWh、MJ、kg 或 m3
- 数量规则：计量的载体消耗，或由经校准设备和运行记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`eu-fdm-bref-2019`
- 数量范围：暂定热能筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：MJ delivered energy/kg 净可销售产品
  - 基准：烘焙、蒸制和油炸路线的宽泛候选范围；保留实际载体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 补充油炸油（`frying_oil_makeup`）

油炸产品应记录新油补充量以及产品中保留或移出的净油量；循环库存与净消耗分开报告。

- 选定流：产品特定油炸油
- 流属性/单位：Mass / kg
- 数量规则：新油加入量减可回收油库存变化，并与产品吸油和废油核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_recipe_and_batch_mass`
- 数量范围：暂定油炸油筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg 净油投入/kg 净可销售产品
  - 基准：仅适用于油炸路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 热加工糕点或蛋糕（`thermally_processed_product`）

记录热定型后、后处理和包装前的合格及不合格输出。

- 选定流：产品特定热加工糕点或蛋糕
- 流属性/单位：Mass / kg
- 数量规则：在所声明后处理水分状态实测输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热加工输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste_and_rework`
- 来源：`china-gb-7099-2015`

##### 废物流

###### 热加工次品和废油（`thermal_process_waste`）

分别按处理去向记录焦糊、未熟、破损或污染产品及废油。

- 选定流：产品特定食品废物或废油
- 流属性/单位：Mass / kg
- 数量规则：按类型和去向实测未回用废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste_and_rework`
- 数量范围：暂定热加工次品筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.4
  - 单位：kg 废物/kg 净可销售产品
  - 基准：未回用热加工损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排入空气的焙烤炉挥发性有机物（`oven_voc`）

对符合所引 EPA 方法范围的酵母膨松烘焙产品，使用产品特定酵母用量和作用时间记录计算或测量烤炉 VOC。其他糕点和蛋糕不得类推使用该公式，应使用实测或适用司法辖区方法，否则披露缺口。

- 选定流：Volatile organic compounds to air；在构建前景数据包时选择 UUID
- 流属性/单位：Mass / kg
- 数量规则：场址实测，或满足适用条件时使用 `calc_yeast_baking_voc`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`us-epa-ap42-9-9-6`; `us-epa-bakery-act-1992`

### 过程：冷却、后处理和包装（`cooling_finishing_and_packaging`）

#### 输入

##### 产品流

###### 热加工产品和焙后组件（`finishing_input`）

记录热加工基础产品及热加工后加入的产品特定馅料、涂层、糖衣、装饰和其他组件。

- 选定流：产品特定热加工产品和后处理原料
- 流属性/单位：Mass / kg
- 数量规则：实测转移和加入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_and_batch_mass`
- 来源：`china-gb-7099-2015`

###### 包装材料（`packaging_materials`）

按材料、组件、再生含量和包装层级记录一级、二级和纳入范围的三级包装。

- 选定流：材料特定包装流；在构建前景数据包时选择 UUID
- 流属性/单位：Mass / kg
- 数量规则：包装 BOM 与领用组件和包装可销售单元核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- 来源：`eu-pef-2021-2279`; `epd-food-beverage-pcr-2025-03`
- 数量范围：暂定包装质量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.6
  - 单位：kg 包装/kg 净可销售产品
  - 基准：声明的制造工厂门口边界纳入的所有包装层级
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷却、后处理和包装用电（`finishing_electricity`）

记录冷却风机/隧道、输送、泵送、涂层、切片、金属检测、封口、喷码和包装设备用电。

- 选定流：场址电力供应；在构建前景数据包时选择 UUID
- 流属性/单位：Energy / kWh
- 数量规则：分表计量或由实测功率和运行时间计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`eu-fdm-bref-2019`
- 数量范围：暂定后处理用电筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh/kg 净可销售产品
  - 基准：常温和机械冷却路线的宽泛候选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净可销售糕点或蛋糕（`reference_product`）

该行是定量参考输出。只记录合格净产品质量；包装件数和毛重作为支持记录保留。

- 选定流：Chinese Pastry / 中式糕点 `06ce1f04-75f8-43b5-bea0-af398fdd46b4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 净可销售成品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 后处理次品和包装废物（`finishing_packaging_waste`）

按材料和去向分别记录未回用产品次品和包装边角料。

- 选定流：产品特定食品废物和材料特定包装废物
- 流属性/单位：Mass / kg
- 数量规则：按类型和处理去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste_and_rework`
- 数量范围：暂定后处理和包装废物筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kg 废物/kg 净可销售产品
  - 基准：未回用产品和包装废物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：清洁、卫生和公用工程支持（`cleaning_and_utility_support`）

#### 输入

##### 产品流

###### 清洁和卫生用水（`cleaning_water`）

记录湿法清洁、漂洗、消毒、原位清洗和公用工程支持用水，并与配方用水区分。

- 选定流：Process water；在构建前景数据包时选择 UUID
- 流属性/单位：Mass / kg 或 volume / m3
- 数量规则：实测用水，或从场址总表合理分配到代表性生产
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_cleaning_and_wastewater`
- 来源：`eu-fdm-bref-2019`; `china-gb-8957-2016`
- 数量范围：暂定清洁用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg 水/kg 净可销售产品
  - 基准：干法清洁到湿法清洁设施的宽泛候选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洁和消毒剂（`cleaning_agents`）

按购入产品记录配制洗涤剂、消毒剂和其他清洁化学品，并保留稀释计算所用浓度。

- 选定流：产品特定清洁剂
- 流属性/单位：Mass / kg
- 数量规则：领用或采购核对，并修正库存变化和稀释
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_cleaning_and_wastewater`
- 来源：`china-gb-8957-2016`; `eu-fdm-bref-2019`
- 数量范围：暂定清洁剂筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg 配制剂/kg 净可销售产品
  - 基准：购入的配制清洁和消毒剂
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 清洁和生产废水（`process_wastewater`）

按去向和可获得的污染物负荷记录排放废水；若有场内处理，其投入和污泥保留在前景系统内。

- 选定流：Wastewater to treatment
- 流属性/单位：Mass / kg 或 volume / m3
- 数量规则：实测排放，或由水平衡扣除产品用水、蒸发和其他出口计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_cleaning_and_wastewater`
- 来源：`eu-fdm-bref-2019`
- 数量范围：暂定废水量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg 废水/kg 净可销售产品
  - 基准：离开前景制造系统的废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：场内冷藏、冷冻或控湿储存（`conditioned_storage`）

#### 输入

##### 产品流

###### 储存用电（`storage_electricity`）

记录发运前制冷、冷冻、湿度控制、循环风机、除霜和局部控制用电。

- 选定流：场址电力供应；在构建前景数据包时选择 UUID
- 流属性/单位：Energy / kWh
- 数量规则：实测用电，并按产品占用、质量、时间、温区和共享容量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：所声明场内储存时长下每 1 kg 净可销售产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_and_refrigerant`
- 来源：`eu-fdm-bref-2019`
- 数量范围：暂定场内储存用电筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kWh/kg 净可销售产品
  - 基准：所声明场内受控储存时长
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 受控储存后放行的产品（`stored_product`）

在相同净质量基准记录放行的可销售产品，并扣除储存损失。

- 选定流：Chinese Pastry / 中式糕点 `06ce1f04-75f8-43b5-bea0-af398fdd46b4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测放行质量，并与储存次品和库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_and_refrigerant`

##### 废物流

###### 储存次品（`storage_rejects`）

按去向记录破损、温度失控、过期或其他原因拒收的产品。

- 选定流：产品特定食品废物
- 流属性/单位：Mass / kg
- 数量规则：实测拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_and_refrigerant`
- 数量范围：暂定储存损失筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg 次品/kg 净可销售产品
  - 基准：场内受控储存损失
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排入空气的制冷剂（`refrigerant_loss`）

依据维护和补充记录，按制冷剂物质区分记录受控储存的制冷剂泄漏。

- 选定流：制冷剂特定空气排放；在构建前景数据包时选择 UUID
- 流属性/单位：Mass / kg
- 数量规则：制冷剂库存平衡或经核实的补充损失，并分配至代表性产品储存
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：所声明场内储存时长下每 1 kg 净可销售产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_and_refrigerant`
- 来源：`eu-pef-2021-2279`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共享产线、烤炉、公用工程、清洁和包装 | 通过采集批次、产线、设备或产品特定数据并细分可独立测量操作来避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical_second` | 无法避免的共享负荷 | 无法细分时，采用有记录的因果物理关系，例如实测设备时间、交付能源、清洁表面/操作、产品质量或受控储存占用和时长。 | `eu-pef-2021-2279` |
| `allocation_other_last` | 剩余多功能性 | 只有在记录无法细分且不存在相关物理关系后，才使用包括经济分配在内的其他关系；披露数据期间、价格基准和敏感性。 | `eu-pef-2021-2279` |
| `allocation_rework_and_losses` | 返工、次品、可食残渣和外售副产品 | 同产品返工在代表系统内回流时视为内部循环，仅报告净损失；残渣只有在带有明确功能和去向离开时才作为共产品，并应用分配层级。 | `epd-food-beverage-pcr-2025-03`; `eu-pef-2021-2279` |
| `allocation_product_mix` | 多配方或多包装形式 | 不得将未加权场址平均值用于特定产品。使用产品特定数据，或披露配方、包装、数量和代表期间的生产质量加权组合。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_recipe_and_batch_mass` | `formulation_and_mixing`; `fermentation_and_resting`; `forming_and_thermal_processing`; `cooling_finishing_and_packaging` | 原料、水、中间转移、后处理组件、油炸油 | 批准配方、秤记录、领料单、批次日志 | product_id; recipe_version; batch_id; ingredient_id; as_used_mass; water_mass; transfer_mass; rework_mass; timestamp | 经校准秤、计量设备和核对后的批次记录 | kg | 每批次，按代表期间汇总 | 完整的声明代表性生产期间及所有纳入配方变体 | 数据集代表的所有场址和产线 | 按产品/配方汇总投入和转移；归一化到实测净可销售输出；不得用 Chinese Pastry 描述代替实际配方记录 | 校准记录；配方批准；批次核对；异常日志 |
| `cp_yield_waste_and_rework` | all manufacturing processes | 合格输出、次品、残渣、返工、废物去向 | 秤记录、生产报表、废物联单 | batch_id; process_id; input_mass; conforming_output_mass; rework_in; rework_out; waste_mass; waste_type; destination; moisture_state | 经校准秤和按去向区分的废物记录 | kg | 每批或每班 | 与配方和输出数据相同期间 | 每个代表性产线/场址 | 核对过程和总体质量平衡；内部返工只计一次；净废物按参考输出归一化 | 秤校准；签署废物记录；质量平衡核对 |
| `cp_energy_and_fuel` | `formulation_and_mixing`; `fermentation_and_resting`; `forming_and_thermal_processing`; `cooling_finishing_and_packaging`; `cleaning_and_utility_support` | 电力、燃料、蒸汽和交付热 | 仪表、账单、燃料领用、设备运行 | meter_id; carrier; opening_reading; closing_reading; fuel_quantity; power; runtime; production_mass; allocation_driver | 优先分表；否则使用经校准运行模型并与场址总量核对 | 原生载体单位及记录换算后的 kWh 或 MJ | 连续、批次、班次或账单期 | 与生产相同代表期间，含相关季节工况 | 每个代表场址和共享公用系统 | 优先直接计量；否则按第 7 节因果驱动分配并与场址总量核对 | 仪表校准；账单；换算因子；核对残差和解释 |
| `cp_packaging_bom` | `cooling_finishing_and_packaging` | 包装材料和边角料 | 包装 BOM、领用记录、单元数量、边角料记录 | product_id; package_format; component_id; material; unit_mass; units_used; recycled_content; scrap_mass; packaging_level | 组件称量和 BOM 核对 | kg | 每种包装形式或受控 BOM 变更 | 代表组合中的所有包装形式 | 每个代表性包装线/场址 | 组件质量 × 使用数量，另加实测边角料；归一化到净可销售产品质量 | BOM 批准；组件规格；抽样称量；领用核对 |
| `cp_water_cleaning_and_wastewater` | `cleaning_and_utility_support` | 清洁水、清洁剂、废水、污泥 | 水表、清洁日志、化学品领用、排放记录 | water_in; recipe_water; cleaning_water; agent_mass; dilution; wastewater_volume; pollutant_load; sludge_mass; destination | 计量和库存平衡；可用时采样 | kg、m3 和污染物特定单位 | 班次、清洁事件或仪表期间 | 与生产相同代表期间 | 每个代表场址和处理系统 | 分开配方用水；共享清洁按因果活动分配；核对水输入输出 | 仪表校准；清洁计划；化学品库存；排放/采样记录 |
| `cp_fermentation_parameters` | `fermentation_and_resting`; `forming_and_thermal_processing` | 酵母用量、作用时间、产品适用性、烤炉 VOC | 配方、醒发日志、过程控制记录、烟道测试 | product_id; yeast_type; initial_yeast_percent; initial_action_time_h; spike_yeast_percent; spike_action_time_h; leavening_route; oven_id; measured_voc | 配方和控制系统记录；可用时烟道测试 | %, h, kg VOC | 每种适用配方和生产活动 | 所有代表性酵母膨松烘焙产品 | 每个适用烤炉和产品路线 | 仅满足范围条件时使用 EPA 公式；否则使用实测或司法辖区特定方法 | 批准配方；带时间戳控制；适用性审查；烟道测试报告 |
| `cp_storage_and_refrigerant` | `conditioned_storage` | 储存用电、时长、次品、制冷剂损失 | 分区仪表、仓储库存、维护和补充日志 | zone_id; temperature; humidity; product_mass; entry_time; exit_time; electricity; refrigerant_type; charge; recharge; recovered_mass; reject_mass | 分区计量、库存记录和制冷剂质量平衡 | kWh、kg、h 或 day | 连续或每次储存事件；每次维护 | 代表生产期间内声明的场内储存期 | 服务于代表产品的每个受控区域 | 用因果占用/时间/容量模型分配用电；用经核实库存平衡计算制冷剂损失 | 仪表校准；温度日志；服务记录；制冷剂发票和回收凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景行 | 归一化数量 = 期间或批次数量 / 同范围净可销售参考产品质量 | 采集流量；净可销售质量 | 每 1 kg 参考产品的数量 | `eu-pef-2021-2279` |
| `calc_mass_balance` | 各过程和完整前景系统 | 核对投入质量 = 可销售输出 + 共产品输出 + 废物 + 直接质量排放 + 库存变化；水分转移/蒸发单列并解释残差 | 原料/中间品质量；输出；废物；排放；库存变化；水分 | 核对后的产率、损失和残差披露 | `eu-pef-2021-2279` |
| `calc_energy_intensity` | 能源使用过程 | 载体强度 = 归属于产品的实测载体用量 / 净可销售产品质量；各载体分开保留 | 仪表/燃料记录；分配驱动；净可销售质量 | 每 kg 产品的 kWh、MJ、kg 或 m3 | `eu-fdm-bref-2019` |
| `calc_packaging_intensity` | 包装 | 各组件包装强度 = 组件单元质量 × 使用数量 / 净可销售产品质量；实测边角料另加 | 组件质量；单元数量；净产品质量；边角料 | 每 kg 产品的 kg 组件和 kg 边角料 | `eu-pef-2021-2279` |
| `calc_water_balance` | 配方、清洁和废水 | 核对进水与产品保留水、蒸发、废水和其他有记录出口；不得用配方水推断清洁水 | 水表；配方水；产品水分；废水；蒸发估算 | 用水和废水强度及残差 | `eu-fdm-bref-2019` |
| `calc_yeast_baking_voc` | EPA 范围内酵母膨松烘焙产品 | VOC EF [lb VOC/short ton baked product] = 0.95 × Yi + 0.195 × ti - 0.51 × S - 0.86 × ts + 1.90；换算为 kg/kg 后乘产品输出。Yi、S 分别为初始和追加 baker's yeast 百分比，ti、ts 为相应作用时间（h）。 | 产品适用性；Yi；ti；S；ts；烘焙产品质量 | 产品特定烤炉 VOC 空气排放 | `us-epa-ap42-9-9-6`; `us-epa-bakery-act-1992` |
| `calc_refrigerant_loss` | 受控储存 | 制冷剂损失 = 期初库存 + 采购/补充 - 期末库存 - 回收/转移质量，并按有记录的因果储存驱动分配给代表产品 | 制冷剂库存和服务记录；分配驱动 | 每 kg 产品的 kg 制冷剂排放 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和投入 | 使用声明的产品/配方/包装身份和经核实的天工参考 UUID；不得由代表性 Chinese Pastry 描述推断配方或过程数据 | 产品规格；批准配方；包装 BOM；PCR 外保留的天工 UUID 回读证据 |
| `dq_technology_geography_time` | 所有前景数据 | 记录技术、地理和时间代表性，并解释任何代理、共享场址分配、缺失期间或排除路线 | 数据集元数据；场址/产线清单；代表期间；过程说明；代表性评估 |
| `dq_measurement_traceability` | 质量、能源、水、包装、废物和排放 | 保留经校准测量或经核对来源记录，并记录换算因子、分配驱动和残差 | 校准证书；仪表；发票；批次日志；核对；采样或测试报告 |
| `dq_completeness` | 完整前景系统 | 覆盖每个必需过程，并明确将条件性过程标记为适用或不适用；核算主要配方投入、公用工程、包装、废物、废水和直接排放 | 完整性清单；过程图；质量/能源/水平衡；不适用说明 |
| `dq_uncertainty_and_estimates` | 估算和模型值 | 标记模型值和暂定范围；报告方法、输入不确定性和替换计划。`reasoned_estimate` 范围是 QA 先验，不是默认前景值 | 计算工作簿；不确定性说明；审查记录；来源替换行动 |
| `dq_source_currency` | 外部规则和因子 | 数据集发布时核查来源状态和适用性；当所声明司法辖区或项目要求更新规则时替换已过时法规、PCR 或排放因子 | 来源登记；检索日期；适用性和时效性审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考产品 UUID、Mass 流属性 UUID、质量单位组 UUID 和 kg 单位必须与第 3 节一致，归一化参考输出必须等于 1 kg 净可销售产品。 |  |
| `validate_required_qualifiers` | 数据集元数据 | 第 3 节每项必需限定信息必须存在；代表性 Chinese Pastry 流不得替代产品特定配方、路线、包装或储存声明。 | `china-gb-7099-2015`; `china-gb-8957-2016` |
| `validate_process_coverage` | 过程清单 | 所有必需过程必须具有采集或计算的前景值；每个条件性过程必须以数据标记为适用，或以理由标记为不适用。 | `eu-fdm-bref-2019` |
| `validate_mass_balance` | 各过程和完整系统 | 在一致产品状态下核对投入、产品/共产品输出、废物、直接质量排放、库存变化和水分转移；任何残差必须量化并解释。 | `eu-pef-2021-2279` |
| `validate_energy_water_packaging` | 主要清单驱动 | 电力、每种热能载体、配方水、清洁水、废水和包装必须分别报告，或明确说明不适用。 | `eu-fdm-bref-2019`; `epd-food-beverage-pcr-2025-03` |
| `validate_allocation` | 共享过程和共产品 | 数据集必须记录所选分配层级步骤、驱动、范围，并在使用其他关系时报告敏感性；产品特定校验不接受未加权场址平均值。 | `eu-pef-2021-2279` |
| `validate_oven_voc_applicability` | 酵母膨松烘焙产品 | 只有记录产品和过程适用性、酵母百分比及作用时间时才可使用 EPA 烤炉 VOC 计算；否则需实测或适用司法辖区证据，或披露缺口。 | `us-epa-ap42-9-9-6`; `us-epa-bakery-act-1992` |
| `validate_data_quality` | 拟发布数据集 | 必须披露技术、地理、时间、完整性、精度/不确定性、文档和审查证据；不得将暂定推理估算静默提升为实测数据。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 糕点和蛋糕的产品与配方特定前景制造数据集 |
| downstream_use | `secondary_dataset`；经审查、具有代表性并链接上游和处理数据集时可作为 `background_dataset` |
| allowed_use | 对声明产品、配方、技术、场址/地理范围、包装、储存条件和代表期间进行制造工厂门口清单建模；有记录加权时汇总为声明生产组合 |
| excluded_use | 默认配方或全球类别平均；直接替代面包、饼干、华夫饼、糖果或生面团；显式扩展边界之外的消费者使用或生命末期主张；未经项目特定审查的比较主张 |
| required_metadata | PCR id；参考 UUID；产品子类型；配方版本；原料/过敏原构成；膨松和热加工路线；馅料/装饰/涂层；保藏和水分状态；包装形式；净重和毛重；场址/地理范围；代表期间和产品组合；储存条件/保质期；过程适用性；分配选择；来源版本 |
| required_quality_disclosure | 前景与次级数据占比；测量和校准证据；技术/地理/时间代表性；质量/能源/水平衡；分配驱动；代理数据集；缺失流；不确定性；暂定推理估算；来源适用性；审查状态 |
| update_trigger | 配方或供应商变化；重大包装变化；不同膨松/热加工或储存路线；设备或场址变化；重大能源/水/废物变化；新的直接排放证据；来源或法规修订；审查发现；代表性丧失 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `epd-food-beverage-pcr-2025-03` | standard | EPD International，PCR 2025:03 Food and beverage products (main PCR)，version 1.0.1，有效至 2030-07-14，https://www.environdec.com/pcr-library/pcr_fbd3e8c6-483c-48f5-d22f-08da0b49f7f5（检索日期 2026-08-11） | 行业声明单位、前景边界、包装、数据集画像和更新语境 |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279，Annex I Product Environmental Footprint method，OJ L 471，30.12.2021，https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索日期 2026-08-11） | 生命周期边界、分配层级、公司特定数据质量、代表性和校验 |
| `eu-fdm-bref-2019` | official_guidance | European Commission JRC，Best Available Techniques Reference Document for the Food, Drink and Milk Industries，2019，DOI 10.2760/243911，https://op.europa.eu/en/publication-detail/-/publication/ef80e416-329c-11ea-ba6e-01aa75ed71a1/language-en（检索日期 2026-08-11） | 食品制造过程覆盖、能源、水、废水、清洁、排放和监测记录 |
| `us-epa-ap42-9-9-6` | method_factor | US EPA，AP-42 Section 9.9.6 Bread Baking，February 1997，https://www.epa.gov/sites/default/files/2020-10/documents/c9s09-6.pdf（检索日期 2026-08-11） | 适用酵母膨松烘焙产品的条件性 VOC 排放公式 |
| `us-epa-bakery-act-1992` | official_guidance | US EPA，Alternative Control Technology Document for Bakery Oven Emissions，EPA-453/R-92-017，December 1992，https://www.epa.gov/sites/default/files/2020-10/documents/rel_c09s0906.pdf（检索日期 2026-08-11） | 条件性面团/发酵/烘焙过程分解、烤炉排放源和 AP-42 适用边界 |
| `china-gb-7099-2015` | standard | GB 7099-2015《食品安全国家标准 糕点、面包》；在国家卫健委截至 2025 年 9 月食品安全国家标准目录中核实，https://www.nhc.gov.cn/sps/c100087/202601/b8bc7bf0fd6243c1914d8c0708d9929a/files/%E9%A3%9F%E5%93%81%E5%AE%89%E5%85%A8%E5%9B%BD%E5%AE%B6%E6%A0%87%E5%87%86%E7%9B%AE%E5%BD%95%EF%BC%88%E6%88%AA%E8%87%B32025%E5%B9%B49%E6%9C%88%E5%85%B11725%E9%A1%B9%EF%BC%89.pdf（检索日期 2026-08-11） | 产品身份、符合性和产品特定限定信息语境；不提供 LCA 默认数量 |
| `china-gb-8957-2016` | standard | GB 8957-2016《食品安全国家标准 糕点、面包卫生规范》；在国家卫健委截至 2025 年 9 月食品安全国家标准目录中核实，官方目录 URL 同上（检索日期 2026-08-11） | 路线披露、卫生/清洁过程纳入、记录和校验语境；不提供 LCA 默认数量 |
