---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.other-non-alcoholic-caloric-beverages-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他未另分类的无酒精含热量饮料

## 1. 范围与适用性

本 PCR 适用于含有热量且未在其他类别中得到更具体分类的无酒精饮料。当产品作为饮料或饮料制备品销售时，涵盖即饮型和浓缩型产品。产品可为碳酸或非碳酸、澄清或浑浊，并可含颗粒物。代表性形态包括含热量的风味软饮料、潘趣饮料和果味饮料、运动/能量/电解质饮料，以及相应的含热量饮料浓缩物。产品边界以 CPC 3.0 子类定义为准；Codex 饮料类别仅用于说明代表性商业形态，不将 CPC 边界扩展至无热量产品。

本 PCR 不涵盖未加糖且未调味的瓶装水、非动物乳、无醇葡萄酒、无醇啤酒、酒精饮料、已归入更具体类别的果蔬汁或其他饮料，以及完全无热量饮料。食品安全、营养、添加剂限量和法定标签仍由适用法规和产品标准管理，不由本 LCA PCR 确定。

Tiangong 流 `Carbonated beverage` 仅代表碳酸即饮形态，并非整个类别的静默代理。其他形态的前景数据包若存在能忠实匹配真实产品的更具体公开 Tiangong 产品流，必须改用该流；否则只有在明确披露范围限制并提供全部必需限定信息时，方可保留该代表流。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.other-non-alcoholic-caloric-beverages-n-e-c |
| classification_refs | CPC 3.0 `24499` — 其他未另分类的无酒精含热量饮料（exact） |
| covered_products | 未另分类的无酒精含热量饮料，包括含热量的碳酸和非碳酸水基风味饮料、运动/能量/电解质饮料、潘趣饮料和果味饮料、含颗粒饮料，以及作为此类饮料制备品销售的含热量液体、冷冻、糖浆或粉末浓缩物，但须服从真实产品分类。 |
| excluded_products | 具有更具体分类的产品，包括未加糖/未调味瓶装水、非动物乳、无醇葡萄酒、无醇啤酒、已具体分类的果蔬汁或饮料、酒精饮料、完全无热量饮料，以及不作为饮料或饮料制备品销售的配料。 |
| representative_product | `Carbonated beverage` 仅代表碳酸即饮形态。实际饮料身份、配方类别、浓度和碳酸化状态限定适用范围。 |
| production_route | 水和配料的接收与制备；配方投料与混合；过滤、均质或热处理等条件性调理；条件性碳酸化；灌装包装；清洗、消毒、废物和废水处理。 |
| market_state | 制造厂门处的成品饮料或饮料浓缩物，处于声明的销售浓度和温度条件；包装画像与饮料净质量分开报告。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 本 PCR 范围内、处于声明销售浓度和商业形态的无酒精含热量饮料。 |
| How much | 1 kg 饮料净产品，不含一级、二级和三级包装。 |
| How well | 符合所代表生产批次的声明配方、热量状态、浓度或稀释说明、碳酸化状态、颗粒状态和放行规范。 |
| How long or cycle | 在制造厂门交付的一个生产批次；不赋予使用寿命。 |
| reference_flow_link | `rf_net_beverage_mass` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 处于销售浓度的饮料净产品。 |
| 参考产品流 | Carbonated beverage `b6cb89fa-5fac-4d09-85d6-f6e1934200b2` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际产品名称和配方类别；热量配料及热量状态依据；即饮型或浓缩型；销售浓度及适用时的制备稀释比；碳酸或非碳酸状态及适用时的碳酸化规范；澄清/浑浊/含颗粒状态；饮料净质量；包装类型和灌装规格；生产技术；地理范围；参考期；代表性 Tiangong 流为精确匹配还是有限代理的明确说明。 |

构建前景数据包时，`必需限定信息` 中的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失任一必需限定信息时，该数据包的参考流定义不完整。若存在更具体且匹配实际饮料的公开 Tiangong 产品流，必须以其替换 `Carbonated beverage`；除非所选公开记录要求经评审的替代方案，否则仍使用 Mass 属性、Units of mass 单位组和 kg 参考单位。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考饮料产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1 kg 销售浓度下的饮料净质量。排除包装质量，并保留用于确定净质量的称量或灌装记录。 |
| `concentrate_state` | 浓缩型饮料产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流保持为 1 kg 销售状态产品。任何饮用状态结果必须按声明制备比作为单独情景计算，禁止混合销售状态与饮用状态清单。 |
| `carbonation_mass` | 添加或放空的二氧化碳 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先使用供应商质量、质量流量或钢瓶库存。由体积记录换算时，保留温度、压力、气体组成、换算公式和源数据。 |
| `packaging_separation` | 一级、二级和三级包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 包装作为每 1 kg 饮料净产品的独立产品投入报告；不得计入参考数量。 |
| `batch_mass_balance` | 各前景过程及设施汇总 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 物料投入、产品、返工、次品、废物和实测损失使用一致湿质量基准；披露体积质量换算和未解释平衡差。 |

## 5. 系统边界

前景边界始于外购物料水、饮料配料、食品级二氧化碳、包装、公用工程和清洗材料进入制造场址，止于包装饮料或饮料制备品在制造厂门放行。外购投入仍须链接上游数据集。配送、零售冷藏、客户制备、消费和包装报废默认不属于前景数据包；仅可作为明确声明的下游情景加入。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购或转入的水、配料、二氧化碳、包装、公用工程和清洗材料处于制造场址接收边界，并记录供应商身份、状态、浓度和数量。 |
| starting_condition_role | 饮料前景制造的起始条件；上游生产和入厂运输通过独立数据集链接，不在前景过程中重建。 |
| product_classification_scope | 其他未另分类的无酒精含热量饮料；以第 1、2 节的具体产品形态和排除项为准。 |
| recursive_input_rule | 同一产品类别的外购饮料基料、浓缩物或返工流仅作为产品投入记录一次并链接上游数据集。不得递归应用本 PCR 重建该投入，也不得将已纳入场内过程之间的转移重复算作新增外部投入。 |
| upstream_dataset_requirement | 为外购配料、适用时的供水、二氧化碳、能源、包装、清洗材料、废物处理和纳入研究边界的入厂运输链接时间、地理和技术代表性适当的数据集。 |
| disclosure | 披露场址和产线、产品身份和销售浓度、配方路线、已纳入及条件性过程、数据期、分配、截断或遗漏、上游数据选择、包装画像、下游排除项以及代表流的代理使用。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_manufacturing_operations` | 前景制造 | 纳入水制备、配料制备与混合、实际采用的全部调理、适用时的碳酸化、灌装包装、生产损失、清洗消毒，以及前景废物与废水处理。 | `eu-fdm-bat-2019` |
| `sb_purchased_inputs` | 上游链接 | 在接收边界量化外购物料、能源和包装，并链接上游数据集及纳入的入厂运输；不得用无文件依据的零负荷代替。 | `ghg-protocol-product-2011`; `epd-food-beverage-pcr-2025` |
| `sb_packaging` | 包装系统 | 纳入声明产出所用一级、二级、三级包装，并分别记录产线损耗和退回或重复使用包装。 | `epd-food-beverage-pcr-2025` |
| `sb_losses_and_emissions` | 损失、废物和排放 | 纳入饮料损失、配料泄漏、包装废物、清洗排放、废水流，以及可归属于已纳入过程的直接空气或水体排放。 | `eu-fdm-bat-2019` |
| `sb_downstream_scenarios` | 配送、使用和报废 | 默认制造厂门前景数据包排除下游阶段。仅在声明的生命周期模型中加入具有情景特定运输、储存、制备和报废假设的下游阶段。 | `ghg-protocol-product-2011` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `water_preparation` | 水接收与制备 | required | 始终纳入；只有供应水不经场内处理时方可报告处理量为零。 | 前景供水与制备 | 转入配方过程的 kg 制备水 |
| `formulation_blending` | 配料制备、投料与混合 | required | 按真实配方始终纳入。 | 前景配方和饮料混合 | 产出的 kg 混合饮料 |
| `product_conditioning` | 过滤、均质、脱气或热处理 | conditional | 纳入真实产品采用的每项调理操作；仅可凭明确路线证据省略。 | 前景产品调理 | 产出的 kg 调理后饮料 |
| `carbonation` | 二氧化碳投加与碳酸化 | conditional | 场内添加二氧化碳或控制碳酸化时纳入。 | 前景碳酸化 | 离开碳酸化过程的 kg 饮料 |
| `filling_packaging` | 灌装、封口、贴标与装箱 | required | 销售产品始终纳入；散装产出须声明真实容器系统。 | 前景最终生产 | 制造厂门处 1 kg 合格饮料净产品 |
| `cleaning_wastewater` | 清洗、消毒与废水处理 | required | 始终纳入分配后的清洗和消毒；运行场内废水处理时一并纳入。 | 前景辅助操作与排放控制 | 可归属于声明产出的清洗批次和废水 |

### 过程：水接收与制备 (`water_preparation`)

#### 输入

##### 产品流

###### 进入场址的市政自来水 (`source_water_tap`)

将进入场址的市政自来水作为一项独立交换记录。

- 选定流：Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 适用条件：仅用于市政供水；同一数量不得同时计入外购地表原水和直接取水行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或结算水量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_preparation`
- 来源：

###### 进入场址的外购地表原水 (`source_water_purchased_surface`)

将进入场址的外购地表原水作为一项独立交换记录。

- 选定流：Raw surface water
- 适用条件：仅用于外购地表原水；同一数量不得同时计入河水和湖水直接取水行。
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量或结算水量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_preparation`
- 来源：

###### 水制备低于 1 kV电力 (`water_prep_electricity_lv`)

将水制备低于 1 kV电力作为一项独立交换记录。

- 选定流：Alternating current, below 1 kV, consumption mix, to user
- 适用条件：仅用于低于 1 kV供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_preparation`
- 来源：

###### 水制备1–35 kV电力 (`water_prep_electricity_mv`)

将水制备1–35 kV电力作为一项独立交换记录。

- 选定流：Alternating current, 1-35 kV, consumption mix, to user
- 适用条件：仅用于1–35 kV供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_preparation`
- 来源：

###### 水制备35–330 kV电力 (`water_prep_electricity_hv`)

将水制备35–330 kV电力作为一项独立交换记录。

- 选定流：Alternating current, 35-330 kV, consumption mix, to user
- 适用条件：仅用于35–330 kV供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_preparation`
- 来源：

###### 水制备场内光伏电力 (`water_prep_electricity_pv`)

将水制备场内光伏电力作为一项独立交换记录。

- 选定流：Photovoltaic alternating current, on-site generation
- 适用条件：仅用于场内光伏供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_preparation`
- 来源：

##### 废物流

未定义该类交换。

##### 基本流

###### 直接取用地下水 (`source_water_ground`)

将直接取用地下水作为一项独立交换记录。

- 选定流：ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- 适用条件：仅用于直接取用地下水；同一数量不得同时计入外购水和另两项直接取水行。
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量或结算水量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_preparation`
- 来源：

###### 直接取用河水 (`source_water_river`)

将直接取用河水作为一项独立交换记录。

- 选定流：river water `805a7346-1664-4483-afe3-4b224be5e361`
- 适用条件：仅用于直接取用河水；同一数量不得同时计入外购水和另两项直接取水行。
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量或结算水量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_preparation`
- 来源：

###### 直接取用湖水 (`source_water_lake`)

将直接取用湖水作为一项独立交换记录。

- 选定流：lake water `c506b970-7b92-452f-8d6f-05d4f203d958`
- 适用条件：仅用于直接取用湖水；同一数量不得同时计入外购水和另两项直接取水行。
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量或结算水量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_preparation`
- 来源：

#### 输出

##### 产品流

###### 制备后的工艺用水 (`prepared_process_water`)

将制备后的工艺用水作为一项独立交换记录。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 适用条件：用于非去离子制备水；同一转移量不得同时计入去离子水行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转移量或质量平衡。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 制备水产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_preparation`
- 来源：

###### 制备后的去离子水 (`prepared_deionised_water`)

将制备后的去离子水作为一项独立交换记录。

- 选定流：Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- 适用条件：仅用于去离子水产出；同一转移量不得同时计入一般工艺用水行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转移量或质量平衡。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 制备水产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_preparation`
- 来源：

##### 废物流

###### 水处理浓水 (`water_treatment_concentrate`)

将水处理浓水作为一项独立交换记录。

- 选定流：Water-treatment concentrate wastewater
- 适用条件：仅在水处理浓水跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_preparation`
- 来源：

###### 废水处理滤芯 (`water_treatment_spent_filter`)

将废水处理滤芯作为一项独立交换记录。

- 选定流：Spent water-treatment filter cartridge
- 适用条件：仅在废水处理滤芯跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_preparation`
- 来源：

###### 水处理污泥 (`water_treatment_sludge`)

将水处理污泥作为一项独立交换记录。

- 选定流：Water-treatment sludge
- 适用条件：仅在水处理污泥跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_preparation`
- 来源：

##### 基本流

未定义该类交换。

### 过程：配料制备、投料与混合 (`formulation_blending`)

#### 输入

##### 产品流

###### 绵白糖 (`ingredient_soft_white_sugar`)

将绵白糖作为一项独立交换记录。

- 选定流：Soft white sugar `d3dfedfb-7d93-4553-aba3-02940edaf6aa`
- 适用条件：仅在绵白糖跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 葡萄糖浆 (`ingredient_glucose_syrup`)

将葡萄糖浆作为一项独立交换记录。

- 选定流：Glucose syrup
- 适用条件：仅在葡萄糖浆跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 高果糖玉米糖浆 (`ingredient_high_fructose_corn_syrup`)

将高果糖玉米糖浆作为一项独立交换记录。

- 选定流：High-fructose corn syrup
- 适用条件：仅在高果糖玉米糖浆跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 浓缩果汁 (`ingredient_fruit_juice_concentrate`)

将浓缩果汁作为一项独立交换记录。

- 选定流：Fruit juice concentrate
- 适用条件：仅在浓缩果汁跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 麦芽糊精 (`ingredient_maltodextrin`)

将麦芽糊精作为一项独立交换记录。

- 选定流：Maltodextrin `4f3e862f-2f27-4b33-b63b-f724621c0d96`
- 适用条件：仅在麦芽糊精跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 柠檬酸 (`ingredient_citric_acid`)

将柠檬酸作为一项独立交换记录。

- 选定流：Citric Acid `80e2772b-119c-4565-a919-a70939d89dff`
- 适用条件：仅在柠檬酸跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 磷酸 (`ingredient_phosphoric_acid`)

将磷酸作为一项独立交换记录。

- 选定流：Phosphoric acid `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- 适用条件：仅在磷酸跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 食用盐 (`ingredient_food_salt`)

将食用盐作为一项独立交换记录。

- 选定流：Salt `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- 适用条件：仅在食用盐跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 柠檬酸钠 (`ingredient_sodium_citrate`)

将柠檬酸钠作为一项独立交换记录。

- 选定流：Sodium citrate
- 适用条件：仅在柠檬酸钠跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 液体香精制剂 (`ingredient_liquid_flavour`)

将液体香精制剂作为一项独立交换记录。

- 选定流：Liquid flavour preparation
- 适用条件：仅在液体香精制剂跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 焦糖色 (`ingredient_caramel_colour`)

将焦糖色作为一项独立交换记录。

- 选定流：Caramel colour
- 适用条件：仅在焦糖色跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 果胶 (`ingredient_pectin`)

将果胶作为一项独立交换记录。

- 选定流：Pectin
- 适用条件：仅在果胶跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 苯甲酸钠 (`ingredient_sodium_benzoate`)

将苯甲酸钠作为一项独立交换记录。

- 选定流：Sodium benzoate
- 适用条件：仅在苯甲酸钠跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 山梨酸钾 (`ingredient_potassium_sorbate`)

将山梨酸钾作为一项独立交换记录。

- 选定流：Potassium sorbate
- 适用条件：仅在山梨酸钾跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 抗坏血酸 (`ingredient_ascorbic_acid`)

将抗坏血酸作为一项独立交换记录。

- 选定流：Ascorbic acid
- 适用条件：仅在抗坏血酸跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 咖啡因 (`ingredient_caffeine`)

将咖啡因作为一项独立交换记录。

- 选定流：Caffeine
- 适用条件：仅在咖啡因跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 果肉 (`ingredient_fruit_pulp`)

将果肉作为一项独立交换记录。

- 选定流：Fruit pulp
- 适用条件：仅在果肉跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 配方用工艺用水 (`formulation_process_water`)

将配方用工艺用水作为一项独立交换记录。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 适用条件：用于非去离子工艺用水；同一数量不得同时计入去离子水行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或结算水量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 配方用去离子水 (`formulation_deionised_water`)

将配方用去离子水作为一项独立交换记录。

- 选定流：Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- 适用条件：仅用于去离子水；同一数量不得同时计入工艺用水行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或结算水量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 混合低于 1 kV电力 (`blending_electricity_lv`)

将混合低于 1 kV电力作为一项独立交换记录。

- 选定流：Alternating current, below 1 kV, consumption mix, to user
- 适用条件：仅用于低于 1 kV供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 混合1–35 kV电力 (`blending_electricity_mv`)

将混合1–35 kV电力作为一项独立交换记录。

- 选定流：Alternating current, 1-35 kV, consumption mix, to user
- 适用条件：仅用于1–35 kV供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 混合35–330 kV电力 (`blending_electricity_hv`)

将混合35–330 kV电力作为一项独立交换记录。

- 选定流：Alternating current, 35-330 kV, consumption mix, to user
- 适用条件：仅用于35–330 kV供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 混合场内光伏电力 (`blending_electricity_pv`)

将混合场内光伏电力作为一项独立交换记录。

- 选定流：Photovoltaic alternating current, on-site generation
- 适用条件：仅用于场内光伏供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 混合外购蒸汽 (`blending_steam`)

将混合外购蒸汽作为一项独立交换记录。

- 选定流：Heat from steam `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- 适用条件：仅在蒸汽跨越场址边界时使用；同一热负荷不得将上游锅炉燃料计作场内燃料。
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 混合外购热水 (`blending_hot_water`)

将混合外购热水作为一项独立交换记录。

- 选定流：Purchased hot water
- 适用条件：仅在热水跨越场址边界时使用；同一热负荷不得同时计入外购蒸汽和场内燃料。
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 混合天然气 (`blending_natural_gas`)

将混合天然气作为一项独立交换记录。

- 选定流：Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- 适用条件：仅用于场内天然气燃烧；同一燃烧器热负荷不得同时计入外购热量和另两项燃料行。
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 混合液化石油气 (`blending_lpg`)

将混合液化石油气作为一项独立交换记录。

- 选定流：Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 适用条件：仅用于场内液化石油气燃烧；同一燃烧器热负荷不得同时计入外购热量和另两项燃料行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 混合柴油 (`blending_diesel`)

将混合柴油作为一项独立交换记录。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- 适用条件：仅用于场内柴油燃烧；同一燃烧器热负荷不得同时计入外购热量和另两项燃料行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 混合压缩空气 (`blending_compressed_air`)

将混合压缩空气作为一项独立交换记录。

- 选定流：Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 适用条件：仅在压缩空气跨越本过程边界时使用；本行不得重复计入空气压缩机电力。
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

##### 废物流

未定义该类交换。

##### 基本流

未定义该类交换。

#### 输出

##### 产品流

###### 混合饮料中间体 (`blended_beverage`)

将混合饮料中间体作为一项独立交换记录。

- 选定流：Blended beverage intermediate
- 适用条件：仅在混合饮料中间体跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转移量或质量平衡。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 混合饮料产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

##### 废物流

###### 废弃绵白糖 (`formulation_discard_soft_white_sugar`)

将废弃绵白糖作为一项独立交换记录。

- 选定流：Discarded Soft white sugar
- 适用条件：仅在废弃绵白糖跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 废弃葡萄糖浆 (`formulation_discard_glucose_syrup`)

将废弃葡萄糖浆作为一项独立交换记录。

- 选定流：Discarded Glucose syrup
- 适用条件：仅在废弃葡萄糖浆跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 废弃高果糖玉米糖浆 (`formulation_discard_high_fructose_corn_syrup`)

将废弃高果糖玉米糖浆作为一项独立交换记录。

- 选定流：Discarded High-fructose corn syrup
- 适用条件：仅在废弃高果糖玉米糖浆跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 废弃浓缩果汁 (`formulation_discard_fruit_juice_concentrate`)

将废弃浓缩果汁作为一项独立交换记录。

- 选定流：Discarded Fruit juice concentrate
- 适用条件：仅在废弃浓缩果汁跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 废弃麦芽糊精 (`formulation_discard_maltodextrin`)

将废弃麦芽糊精作为一项独立交换记录。

- 选定流：Discarded Maltodextrin
- 适用条件：仅在废弃麦芽糊精跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 废弃柠檬酸 (`formulation_discard_citric_acid`)

将废弃柠檬酸作为一项独立交换记录。

- 选定流：Discarded Citric Acid
- 适用条件：仅在废弃柠檬酸跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 废弃磷酸 (`formulation_discard_phosphoric_acid`)

将废弃磷酸作为一项独立交换记录。

- 选定流：Discarded Phosphoric acid
- 适用条件：仅在废弃磷酸跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 废弃食用盐 (`formulation_discard_food_salt`)

将废弃食用盐作为一项独立交换记录。

- 选定流：Discarded Salt
- 适用条件：仅在废弃食用盐跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 废弃柠檬酸钠 (`formulation_discard_sodium_citrate`)

将废弃柠檬酸钠作为一项独立交换记录。

- 选定流：Discarded Sodium citrate
- 适用条件：仅在废弃柠檬酸钠跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 废弃液体香精制剂 (`formulation_discard_liquid_flavour`)

将废弃液体香精制剂作为一项独立交换记录。

- 选定流：Discarded Liquid flavour preparation
- 适用条件：仅在废弃液体香精制剂跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 废弃焦糖色 (`formulation_discard_caramel_colour`)

将废弃焦糖色作为一项独立交换记录。

- 选定流：Discarded Caramel colour
- 适用条件：仅在废弃焦糖色跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 废弃果胶 (`formulation_discard_pectin`)

将废弃果胶作为一项独立交换记录。

- 选定流：Discarded Pectin
- 适用条件：仅在废弃果胶跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 废弃苯甲酸钠 (`formulation_discard_sodium_benzoate`)

将废弃苯甲酸钠作为一项独立交换记录。

- 选定流：Discarded Sodium benzoate
- 适用条件：仅在废弃苯甲酸钠跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 废弃山梨酸钾 (`formulation_discard_potassium_sorbate`)

将废弃山梨酸钾作为一项独立交换记录。

- 选定流：Discarded Potassium sorbate
- 适用条件：仅在废弃山梨酸钾跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 废弃抗坏血酸 (`formulation_discard_ascorbic_acid`)

将废弃抗坏血酸作为一项独立交换记录。

- 选定流：Discarded Ascorbic acid
- 适用条件：仅在废弃抗坏血酸跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 废弃咖啡因 (`formulation_discard_caffeine`)

将废弃咖啡因作为一项独立交换记录。

- 选定流：Discarded Caffeine
- 适用条件：仅在废弃咖啡因跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 废弃果肉 (`formulation_discard_fruit_pulp`)

将废弃果肉作为一项独立交换记录。

- 选定流：Discarded Fruit pulp
- 适用条件：仅在废弃果肉跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

###### 不合格混合饮料 (`formulation_offspec_beverage`)

将不合格混合饮料作为一项独立交换记录。

- 选定流：Off-specification blended beverage
- 适用条件：仅在不合格混合饮料跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_formulation_batch`
- 来源：

##### 基本流

未定义该类交换。

### 过程：过滤、均质、脱气或热处理 (`product_conditioning`)

#### 输入

##### 产品流

###### 进入调理的混合饮料 (`conditioning_feed_blended`)

将进入调理的混合饮料作为一项独立交换记录。

- 选定流：Blended beverage intermediate
- 适用条件：仅在进入调理的混合饮料跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转移量或质量平衡。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 调理后饮料产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### 调理低于 1 kV电力 (`conditioning_electricity_lv`)

将调理低于 1 kV电力作为一项独立交换记录。

- 选定流：Alternating current, below 1 kV, consumption mix, to user
- 适用条件：仅用于低于 1 kV供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### 调理1–35 kV电力 (`conditioning_electricity_mv`)

将调理1–35 kV电力作为一项独立交换记录。

- 选定流：Alternating current, 1-35 kV, consumption mix, to user
- 适用条件：仅用于1–35 kV供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### 调理35–330 kV电力 (`conditioning_electricity_hv`)

将调理35–330 kV电力作为一项独立交换记录。

- 选定流：Alternating current, 35-330 kV, consumption mix, to user
- 适用条件：仅用于35–330 kV供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### 调理场内光伏电力 (`conditioning_electricity_pv`)

将调理场内光伏电力作为一项独立交换记录。

- 选定流：Photovoltaic alternating current, on-site generation
- 适用条件：仅用于场内光伏供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### 调理外购蒸汽 (`conditioning_steam`)

将调理外购蒸汽作为一项独立交换记录。

- 选定流：Heat from steam `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- 适用条件：仅在蒸汽跨越场址边界时使用；同一热负荷不得将上游锅炉燃料计作场内燃料。
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### 调理外购热水 (`conditioning_hot_water`)

将调理外购热水作为一项独立交换记录。

- 选定流：Purchased hot water
- 适用条件：仅在热水跨越场址边界时使用；同一热负荷不得同时计入外购蒸汽和场内燃料。
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### 调理天然气 (`conditioning_natural_gas`)

将调理天然气作为一项独立交换记录。

- 选定流：Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- 适用条件：仅用于场内天然气燃烧；同一燃烧器热负荷不得同时计入外购热量和另两项燃料行。
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### 调理液化石油气 (`conditioning_lpg`)

将调理液化石油气作为一项独立交换记录。

- 选定流：Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 适用条件：仅用于场内液化石油气燃烧；同一燃烧器热负荷不得同时计入外购热量和另两项燃料行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### 调理柴油 (`conditioning_diesel`)

将调理柴油作为一项独立交换记录。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- 适用条件：仅用于场内柴油燃烧；同一燃烧器热负荷不得同时计入外购热量和另两项燃料行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### 调理压缩空气 (`conditioning_compressed_air`)

将调理压缩空气作为一项独立交换记录。

- 选定流：Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 适用条件：仅在压缩空气跨越本过程边界时使用；本行不得重复计入空气压缩机电力。
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### 调理冷却水 (`conditioning_cooling_water`)

将调理冷却水作为一项独立交换记录。

- 选定流：Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- 适用条件：仅用于冷却水回路；同一冷负荷不得同时计入冷冻水行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或结算水量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### 调理冷冻水 (`conditioning_chilled_water`)

将调理冷冻水作为一项独立交换记录。

- 选定流：Chilled water
- 适用条件：仅用于外购或单独计量的冷冻水路线；同一冷负荷不得同时计入冷却水行。
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### 调理滤芯 (`conditioning_filter_cartridge`)

将调理滤芯作为一项独立交换记录。

- 选定流：Beverage-process filter cartridge
- 适用条件：仅在调理滤芯跨越本过程边界时纳入；否则省略。
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### 反渗透组件 (`conditioning_ro_component`)

将反渗透组件作为一项独立交换记录。

- 选定流：Reverse Osmosis Component `948219f7-52b6-43d7-bfdd-52dcc1121659`
- 适用条件：仅在反渗透组件跨越本过程边界时纳入；否则省略。
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### R717 氨制冷剂 (`conditioning_refrigerant_r717`)

将R717 氨制冷剂作为一项独立交换记录。

- 选定流：Refrigerant R717 ammonia
- 适用条件：仅在R717 氨制冷剂跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### R744 二氧化碳制冷剂 (`conditioning_refrigerant_r744`)

将R744 二氧化碳制冷剂作为一项独立交换记录。

- 选定流：Refrigerant R744 carbon dioxide
- 适用条件：仅在R744 二氧化碳制冷剂跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### R134a 制冷剂 (`conditioning_refrigerant_r134a`)

将R134a 制冷剂作为一项独立交换记录。

- 选定流：Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- 适用条件：仅在R134a 制冷剂跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### R404A 制冷剂 (`conditioning_refrigerant_r404a`)

将R404A 制冷剂作为一项独立交换记录。

- 选定流：Refrigerant R404A `76513c71-a148-484e-865f-2ab54afb4331`
- 适用条件：仅在R404A 制冷剂跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

##### 废物流

未定义该类交换。

##### 基本流

未定义该类交换。

#### 输出

##### 产品流

###### 调理后饮料中间体 (`conditioned_beverage`)

将调理后饮料中间体作为一项独立交换记录。

- 选定流：Conditioned beverage intermediate
- 适用条件：仅在调理后饮料中间体跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转移量或质量平衡。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 调理后饮料产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

##### 废物流

###### 调理不合格饮料 (`conditioning_reject_beverage`)

将调理不合格饮料作为一项独立交换记录。

- 选定流：Conditioning reject beverage
- 适用条件：仅在调理不合格饮料跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### 废调理滤芯 (`conditioning_spent_filter`)

将废调理滤芯作为一项独立交换记录。

- 选定流：Spent conditioning filter cartridge
- 适用条件：仅在废调理滤芯跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### 废反渗透膜 (`conditioning_spent_membrane`)

将废反渗透膜作为一项独立交换记录。

- 选定流：Spent reverse-osmosis membrane
- 适用条件：仅在废反渗透膜跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_conditioning_operation`
- 来源：

##### 基本流

###### 氨向空气泄漏 (`conditioning_ammonia_air`)

将氨向空气泄漏作为一项独立交换记录。

- 选定流：ammonia, to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 适用条件：仅在氨向空气泄漏跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量或依据匹配活动记录和质量平衡计算。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### HFC-134a 向空气泄漏 (`conditioning_r134a_air`)

将HFC-134a 向空气泄漏作为一项独立交换记录。

- 选定流：HFC-134a, to air, unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 适用条件：仅在HFC-134a 向空气泄漏跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量或依据匹配活动记录和质量平衡计算。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### R404A 向空气泄漏 (`conditioning_r404a_air`)

将R404A 向空气泄漏作为一项独立交换记录。

- 选定流：R404A refrigerant, to air
- 适用条件：仅在R404A 向空气泄漏跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量或依据匹配活动记录和质量平衡计算。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_conditioning_operation`
- 来源：

###### R744 二氧化碳向空气泄漏 (`conditioning_r744_air`)

将R744 二氧化碳向空气泄漏作为一项独立交换记录。

- 选定流：R744 carbon dioxide, to air
- 适用条件：仅在R744 二氧化碳向空气泄漏跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量或依据匹配活动记录和质量平衡计算。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_conditioning_operation`
- 来源：

### 过程：二氧化碳投加与碳酸化 (`carbonation`)

#### 输入

##### 产品流

###### 进入碳酸化的混合饮料 (`carbonation_feed_blended`)

将进入碳酸化的混合饮料作为一项独立交换记录。

- 选定流：Blended beverage intermediate
- 适用条件：仅用于碳酸化直接接续混合且无调理的路线；同一质量不得计入调理后进料行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转移量或质量平衡。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 离开碳酸化的饮料
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_carbonation_run`
- 来源：

###### 进入碳酸化的调理后饮料 (`carbonation_feed_conditioned`)

将进入碳酸化的调理后饮料作为一项独立交换记录。

- 选定流：Conditioned beverage intermediate
- 适用条件：仅用于碳酸化接续调理的路线；同一质量不得计入混合饮料进料行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转移量或质量平衡。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 离开碳酸化的饮料
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_carbonation_run`
- 来源：

###### 食品级二氧化碳 (`carbonation_food_grade_co2`)

将食品级二氧化碳作为一项独立交换记录。

- 选定流：Food-grade carbon dioxide
- 适用条件：仅在食品级二氧化碳跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_carbonation_run`
- 来源：

###### 碳酸化低于 1 kV电力 (`carbonation_electricity_lv`)

将碳酸化低于 1 kV电力作为一项独立交换记录。

- 选定流：Alternating current, below 1 kV, consumption mix, to user
- 适用条件：仅用于低于 1 kV供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_carbonation_run`
- 来源：

###### 碳酸化1–35 kV电力 (`carbonation_electricity_mv`)

将碳酸化1–35 kV电力作为一项独立交换记录。

- 选定流：Alternating current, 1-35 kV, consumption mix, to user
- 适用条件：仅用于1–35 kV供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_carbonation_run`
- 来源：

###### 碳酸化35–330 kV电力 (`carbonation_electricity_hv`)

将碳酸化35–330 kV电力作为一项独立交换记录。

- 选定流：Alternating current, 35-330 kV, consumption mix, to user
- 适用条件：仅用于35–330 kV供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_carbonation_run`
- 来源：

###### 碳酸化场内光伏电力 (`carbonation_electricity_pv`)

将碳酸化场内光伏电力作为一项独立交换记录。

- 选定流：Photovoltaic alternating current, on-site generation
- 适用条件：仅用于场内光伏供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_carbonation_run`
- 来源：

###### 碳酸化冷却水 (`carbonation_cooling_water`)

将碳酸化冷却水作为一项独立交换记录。

- 选定流：Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- 适用条件：仅用于冷却水回路；同一冷负荷不得同时计入冷冻水行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或结算水量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_carbonation_run`
- 来源：

###### 碳酸化冷冻水 (`carbonation_chilled_water`)

将碳酸化冷冻水作为一项独立交换记录。

- 选定流：Chilled water
- 适用条件：仅用于外购或单独计量的冷冻水路线；同一冷负荷不得同时计入冷却水行。
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_carbonation_run`
- 来源：

##### 废物流

未定义该类交换。

##### 基本流

未定义该类交换。

#### 输出

##### 产品流

###### 碳酸饮料中间体 (`carbonated_beverage`)

将碳酸饮料中间体作为一项独立交换记录。

- 选定流：Carbonated beverage `b6cb89fa-5fac-4d09-85d6-f6e1934200b2`
- 适用条件：仅在碳酸饮料中间体跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转移量或质量平衡。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 离开碳酸化的饮料
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_carbonation_run`
- 来源：

##### 废物流

###### 不合格碳酸饮料 (`carbonation_loss`)

将不合格碳酸饮料作为一项独立交换记录。

- 选定流：Off-specification carbonated beverage
- 适用条件：仅在不合格碳酸饮料跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_carbonation_run`
- 来源：

##### 基本流

###### 向空气放空的生物源二氧化碳 (`carbonation_co2_biogenic_air`)

将向空气放空的生物源二氧化碳作为一项独立交换记录。

- 选定流：carbon dioxide (biogenic), to air, unspecified `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 适用条件：仅用于生物源二氧化碳和未指定空气介质；同一质量不得计入化石源行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量或依据匹配活动记录和质量平衡计算。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_carbonation_run`
- 来源：

###### 向城市近地空气放空的化石源二氧化碳 (`carbonation_co2_fossil_urban_air`)

将向城市近地空气放空的化石源二氧化碳作为一项独立交换记录。

- 选定流：carbon dioxide (fossil), to urban air close to ground `08a91e70-3ddc-11dd-9c12-0050c2490048`
- 适用条件：仅用于化石源二氧化碳向城市近地空气排放；同一质量不得计入高架源和生物源行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量或依据匹配活动记录和质量平衡计算。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_carbonation_run`
- 来源：

###### 由高架源放空的化石源二氧化碳 (`carbonation_co2_fossil_high_stack`)

将由高架源放空的化石源二氧化碳作为一项独立交换记录。

- 选定流：carbon dioxide (fossil), to non-urban air or from high stacks `08a91e70-3ddc-11dd-9c13-0050c2490048`
- 适用条件：仅用于化石源二氧化碳向非城市空气或高架源排放；同一质量不得计入城市近地和生物源行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量或依据匹配活动记录和质量平衡计算。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_carbonation_run`
- 来源：

### 过程：灌装、封口、贴标与装箱 (`filling_packaging`)

#### 输入

##### 产品流

###### 送入灌装的混合饮料 (`filling_feed_blended`)

将送入灌装的混合饮料作为一项独立交换记录。

- 选定流：Blended beverage intermediate
- 适用条件：仅用于无调理且无碳酸化的路线；同一质量不得计入另两项进料行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转移量或质量平衡。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 合格饮料净产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 送入灌装的调理后饮料 (`filling_feed_conditioned`)

将送入灌装的调理后饮料作为一项独立交换记录。

- 选定流：Conditioned beverage intermediate
- 适用条件：仅用于调理后的非碳酸路线；同一质量不得计入另两项进料行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转移量或质量平衡。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 合格饮料净产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 送入灌装的碳酸饮料 (`filling_feed_carbonated`)

将送入灌装的碳酸饮料作为一项独立交换记录。

- 选定流：Carbonated beverage `b6cb89fa-5fac-4d09-85d6-f6e1934200b2`
- 适用条件：仅用于碳酸路线；同一质量不得计入另两项进料行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转移量或质量平衡。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 合格饮料净产出
- 基准类型：过程产出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### PET 饮料瓶 (`packaging_pet_bottle`)

将PET 饮料瓶作为一项独立交换记录。

- 选定流：PET beverage bottle
- 适用条件：仅用于本一级容器路线；同一销售单元不得计入另四项一级容器行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用量扣除经核实的退回量和期末库存，并与包装产出及产线废物核对。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 玻璃瓶罐 (`packaging_glass_jar`)

将玻璃瓶罐作为一项独立交换记录。

- 选定流：Glass Jar `eca48ea8-ab83-444f-98b2-15ab82570c80`
- 适用条件：仅用于本一级容器路线；同一销售单元不得计入另四项一级容器行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用量扣除经核实的退回量和期末库存，并与包装产出及产线废物核对。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 铝制饮料罐 (`packaging_aluminium_can`)

将铝制饮料罐作为一项独立交换记录。

- 选定流：Aluminium beverage can
- 适用条件：仅用于本一级容器路线；同一销售单元不得计入另四项一级容器行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用量扣除经核实的退回量和期末库存，并与包装产出及产线废物核对。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 钢制食品罐 (`packaging_steel_can`)

将钢制食品罐作为一项独立交换记录。

- 选定流：Steel food can `f09b782f-b3db-4b1e-8473-597edcc5b6d7`
- 适用条件：仅用于本一级容器路线；同一销售单元不得计入另四项一级容器行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用量扣除经核实的退回量和期末库存，并与包装产出及产线废物核对。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 无菌饮料纸盒 (`packaging_aseptic_carton`)

将无菌饮料纸盒作为一项独立交换记录。

- 选定流：Aseptic beverage carton
- 适用条件：仅用于本一级容器路线；同一销售单元不得计入另四项一级容器行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用量扣除经核实的退回量和期末库存，并与包装产出及产线废物核对。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### HDPE 瓶盖 (`packaging_hdpe_closure`)

将HDPE 瓶盖作为一项独立交换记录。

- 选定流：HDPE closure
- 适用条件：仅在HDPE 瓶盖跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用量扣除经核实的退回量和期末库存，并与包装产出及产线废物核对。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 聚丙烯瓶盖 (`packaging_pp_closure`)

将聚丙烯瓶盖作为一项独立交换记录。

- 选定流：Polypropylene closure
- 适用条件：仅在聚丙烯瓶盖跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用量扣除经核实的退回量和期末库存，并与包装产出及产线废物核对。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 铝制螺旋盖 (`packaging_aluminium_closure`)

将铝制螺旋盖作为一项独立交换记录。

- 选定流：Aluminium screw cap closure `c37f87ea-0b43-43d6-a300-b142ea358cb7`
- 适用条件：仅在铝制螺旋盖跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用量扣除经核实的退回量和期末库存，并与包装产出及产线废物核对。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 纸质标签 (`packaging_paper_label`)

将纸质标签作为一项独立交换记录。

- 选定流：Label, paper `7b25a54f-baa6-4593-9670-4240a3315eed`
- 适用条件：仅在纸质标签跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用量扣除经核实的退回量和期末库存，并与包装产出及产线废物核对。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 塑料标签 (`packaging_plastic_label`)

将塑料标签作为一项独立交换记录。

- 选定流：Plastic label
- 适用条件：仅在塑料标签跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用量扣除经核实的退回量和期末库存，并与包装产出及产线废物核对。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 瓦楞纸箱 (`packaging_corrugated_box`)

将瓦楞纸箱作为一项独立交换记录。

- 选定流：corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 适用条件：仅在瓦楞纸箱跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用量扣除经核实的退回量和期末库存，并与包装产出及产线废物核对。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### LDPE 收缩膜 (`packaging_ldpe_shrink_film`)

将LDPE 收缩膜作为一项独立交换记录。

- 选定流：LDPE shrink film
- 适用条件：仅在LDPE 收缩膜跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用量扣除经核实的退回量和期末库存，并与包装产出及产线废物核对。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 木托盘 (`packaging_wooden_pallet`)

将木托盘作为一项独立交换记录。

- 选定流：Wooden pallet
- 适用条件：仅在木托盘跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用量扣除经核实的退回量和期末库存，并与包装产出及产线废物核对。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 灌装与装箱低于 1 kV电力 (`filling_electricity_lv`)

将灌装与装箱低于 1 kV电力作为一项独立交换记录。

- 选定流：Alternating current, below 1 kV, consumption mix, to user
- 适用条件：仅用于低于 1 kV供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 灌装与装箱1–35 kV电力 (`filling_electricity_mv`)

将灌装与装箱1–35 kV电力作为一项独立交换记录。

- 选定流：Alternating current, 1-35 kV, consumption mix, to user
- 适用条件：仅用于1–35 kV供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 灌装与装箱35–330 kV电力 (`filling_electricity_hv`)

将灌装与装箱35–330 kV电力作为一项独立交换记录。

- 选定流：Alternating current, 35-330 kV, consumption mix, to user
- 适用条件：仅用于35–330 kV供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 灌装与装箱场内光伏电力 (`filling_electricity_pv`)

将灌装与装箱场内光伏电力作为一项独立交换记录。

- 选定流：Photovoltaic alternating current, on-site generation
- 适用条件：仅用于场内光伏供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 灌装压缩空气 (`filling_compressed_air`)

将灌装压缩空气作为一项独立交换记录。

- 选定流：Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 适用条件：仅在灌装压缩空气跨越本过程边界时纳入；否则省略。
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_filling_packaging`
- 来源：

##### 废物流

未定义该类交换。

##### 基本流

未定义该类交换。

#### 输出

##### 产品流

###### 制造厂门处合格饮料净产品 (`reference_beverage_output`)

将制造厂门处合格饮料净产品作为一项独立交换记录。

- 选定流：Carbonated beverage `b6cb89fa-5fac-4d09-85d6-f6e1934200b2`
- 适用条件：仅按第 3 节参考流身份及强制替换规则使用。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1 kg 销售浓度下的合格饮料净产品，不含包装
- 数值来源模式：固定值 (`fixed_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：身份引用 (`identity_reference`)
- 来源：

##### 废物流

###### 灌装不合格饮料 (`filling_offspec_beverage`)

将灌装不合格饮料作为一项独立交换记录。

- 选定流：Filling reject beverage
- 适用条件：仅在灌装不合格饮料跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### PET 瓶产线废物 (`packaging_waste_pet`)

将PET 瓶产线废物作为一项独立交换记录。

- 选定流：Waste PET bottles `8874aca6-2ff9-4aef-be62-5cd02f20dc97`
- 适用条件：仅在PET 瓶产线废物跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 玻璃容器产线废物 (`packaging_waste_glass`)

将玻璃容器产线废物作为一项独立交换记录。

- 选定流：Glass-container waste
- 适用条件：仅在玻璃容器产线废物跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 铝包装废料 (`packaging_waste_aluminium`)

将铝包装废料作为一项独立交换记录。

- 选定流：Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 适用条件：仅在铝包装废料跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 钢包装废料 (`packaging_waste_steel`)

将钢包装废料作为一项独立交换记录。

- 选定流：Scrap steel `c2d4cf7a-d512-4afb-9184-c81f5dd2ed4a`
- 适用条件：仅在钢包装废料跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 无菌饮料纸盒产线废物 (`packaging_waste_carton`)

将无菌饮料纸盒产线废物作为一项独立交换记录。

- 选定流：Aseptic-carton waste
- 适用条件：仅在无菌饮料纸盒产线废物跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 聚乙烯膜产线废物 (`packaging_waste_polyethylene`)

将聚乙烯膜产线废物作为一项独立交换记录。

- 选定流：Waste polyethylene `7e78f0a8-c042-47ca-a742-3bac92be1477`
- 适用条件：仅在聚乙烯膜产线废物跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 聚丙烯瓶盖产线废物 (`packaging_waste_polypropylene`)

将聚丙烯瓶盖产线废物作为一项独立交换记录。

- 选定流：Polypropylene Wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- 适用条件：仅在聚丙烯瓶盖产线废物跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 瓦楞纸板产线废物 (`packaging_waste_cardboard`)

将瓦楞纸板产线废物作为一项独立交换记录。

- 选定流：Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- 适用条件：仅在瓦楞纸板产线废物跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_filling_packaging`
- 来源：

###### 木托盘产线废物 (`packaging_waste_wood`)

将木托盘产线废物作为一项独立交换记录。

- 选定流：Wooden-pallet waste
- 适用条件：仅在木托盘产线废物跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_filling_packaging`
- 来源：

##### 基本流

未定义该类交换。

### 过程：清洗、消毒与废水处理 (`cleaning_wastewater`)

#### 输入

##### 产品流

###### 清洗用自来水 (`cleaning_tap_water`)

将清洗用自来水作为一项独立交换记录。

- 选定流：Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 适用条件：仅用于市政供水；同一数量不得计入工艺用水和再生水行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或结算水量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

###### 清洗用工艺用水 (`cleaning_process_water`)

将清洗用工艺用水作为一项独立交换记录。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 适用条件：仅用于制备工艺用水；同一数量不得计入自来水和再生水行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或结算水量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

###### 清洗用再生水 (`cleaning_reclaimed_water`)

将清洗用再生水作为一项独立交换记录。

- 选定流：Reclaimed water `8c86c0f7-24f0-4c12-852f-93d9dd1980e7`
- 适用条件：仅用于再生水；同一数量不得计入自来水和工艺用水行。
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量或结算水量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

###### 氢氧化钠 (`cleaning_chemical_sodium_hydroxide`)

将氢氧化钠作为一项独立交换记录。

- 选定流：Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 适用条件：仅在氢氧化钠跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

###### 50% 硝酸水溶液 (`cleaning_chemical_nitric_acid`)

将50% 硝酸水溶液作为一项独立交换记录。

- 选定流：Nitric acid, 50% aqueous solution `db613797-10b0-4252-b818-659b99ce85dd`
- 适用条件：仅在50% 硝酸水溶液跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

###### 过氧乙酸 (`cleaning_chemical_peracetic_acid`)

将过氧乙酸作为一项独立交换记录。

- 选定流：Peracetic acid
- 适用条件：仅在过氧乙酸跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

###### 次氯酸钠 (`cleaning_chemical_sodium_hypochlorite`)

将次氯酸钠作为一项独立交换记录。

- 选定流：Sodium hypochlorite `28c4ca0f-c924-4d2a-93dd-b9ac93009d25`
- 适用条件：仅在次氯酸钠跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

###### 30% 过氧化氢 (`cleaning_chemical_hydrogen_peroxide`)

将30% 过氧化氢作为一项独立交换记录。

- 选定流：Hydrogen peroxide (30%) `b21960ac-f3c4-4f00-ba92-527ca1dd5d12`
- 适用条件：仅在30% 过氧化氢跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次领用、投加或库存平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

###### 清洗与处理低于 1 kV电力 (`cleaning_electricity_lv`)

将清洗与处理低于 1 kV电力作为一项独立交换记录。

- 选定流：Alternating current, below 1 kV, consumption mix, to user
- 适用条件：仅用于低于 1 kV供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

###### 清洗与处理1–35 kV电力 (`cleaning_electricity_mv`)

将清洗与处理1–35 kV电力作为一项独立交换记录。

- 选定流：Alternating current, 1-35 kV, consumption mix, to user
- 适用条件：仅用于1–35 kV供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

###### 清洗与处理35–330 kV电力 (`cleaning_electricity_hv`)

将清洗与处理35–330 kV电力作为一项独立交换记录。

- 选定流：Alternating current, 35-330 kV, consumption mix, to user
- 适用条件：仅用于35–330 kV供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

###### 清洗与处理场内光伏电力 (`cleaning_electricity_pv`)

将清洗与处理场内光伏电力作为一项独立交换记录。

- 选定流：Photovoltaic alternating current, on-site generation
- 适用条件：仅用于场内光伏供电路线；同一电量不得同时计入其余三项供电行。
- 流属性/单位：Energy / kWh
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

###### 清洗与处理外购蒸汽 (`cleaning_steam`)

将清洗与处理外购蒸汽作为一项独立交换记录。

- 选定流：Heat from steam `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- 适用条件：仅在蒸汽跨越场址边界时使用；同一热负荷不得将上游锅炉燃料计作场内燃料。
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

###### 清洗与处理外购热水 (`cleaning_hot_water`)

将清洗与处理外购热水作为一项独立交换记录。

- 选定流：Purchased hot water
- 适用条件：仅在热水跨越场址边界时使用；同一热负荷不得同时计入外购蒸汽和场内燃料。
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

###### 清洗与处理天然气 (`cleaning_natural_gas`)

将清洗与处理天然气作为一项独立交换记录。

- 选定流：Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- 适用条件：仅用于场内天然气燃烧；同一燃烧器热负荷不得同时计入外购热量和另两项燃料行。
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

###### 清洗与处理液化石油气 (`cleaning_lpg`)

将清洗与处理液化石油气作为一项独立交换记录。

- 选定流：Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 适用条件：仅用于场内液化石油气燃烧；同一燃烧器热负荷不得同时计入外购热量和另两项燃料行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

###### 清洗与处理柴油 (`cleaning_diesel`)

将清洗与处理柴油作为一项独立交换记录。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- 适用条件：仅用于场内柴油燃烧；同一燃烧器热负荷不得同时计入外购热量和另两项燃料行。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

###### 清洗与处理压缩空气 (`cleaning_compressed_air`)

将清洗与处理压缩空气作为一项独立交换记录。

- 选定流：Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 适用条件：仅在压缩空气跨越本过程边界时使用；本行不得重复计入空气压缩机电力。
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量用量或工程分配量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

##### 废物流

未定义该类交换。

##### 基本流

未定义该类交换。

#### 输出

##### 产品流

###### 回收再生水 (`recovered_reclaimed_water`)

将回收再生水作为一项独立交换记录。

- 选定流：Reclaimed water `8c86c0f7-24f0-4c12-852f-93d9dd1980e7`
- 适用条件：仅在回收再生水跨越本过程边界时纳入；否则省略。
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量转移量或质量平衡。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

###### 回收氢氧化钠清洗液 (`recovered_caustic_solution`)

将回收氢氧化钠清洗液作为一项独立交换记录。

- 选定流：Recovered sodium-hydroxide cleaning solution
- 适用条件：仅在回收氢氧化钠清洗液跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转移量或质量平衡。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：

##### 废物流

###### 饮料制造废水 (`beverage_wastewater`)

将饮料制造废水作为一项独立交换记录。

- 选定流：Beverage-manufacturing wastewater
- 适用条件：仅在饮料制造废水跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：`eu-fdm-bat-2019`

###### 饮料废水处理污泥 (`wastewater_treatment_sludge`)

将饮料废水处理污泥作为一项独立交换记录。

- 选定流：Beverage wastewater-treatment sludge
- 适用条件：仅在饮料废水处理污泥跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：`eu-fdm-bat-2019`

###### 饮料废水筛渣 (`wastewater_screenings`)

将饮料废水筛渣作为一项独立交换记录。

- 选定流：Beverage wastewater screenings
- 适用条件：仅在饮料废水筛渣跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的称量、计量或质量平衡数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：`eu-fdm-bat-2019`

##### 基本流

###### 向水体排放的化学需氧量 (`direct_water_cod`)

将向水体排放的化学需氧量作为一项独立交换记录。

- 选定流：Chemical Oxygen Demand, to water, unspecified `e57fc631-2c77-457a-aa30-be79e357792b`
- 适用条件：仅在向水体排放的化学需氧量跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量或依据匹配活动记录和质量平衡计算。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：`eu-fdm-bat-2019`

###### 向水体排放的生物需氧量 (`direct_water_bod`)

将向水体排放的生物需氧量作为一项独立交换记录。

- 选定流：biological oxygen demand, to water, unspecified `08a91e70-3ddc-11dd-97e0-0050c2490048`
- 适用条件：仅在向水体排放的生物需氧量跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量或依据匹配活动记录和质量平衡计算。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：`eu-fdm-bat-2019`

###### 向淡水排放的总氮 (`direct_water_tn`)

将向淡水排放的总氮作为一项独立交换记录。

- 选定流：nitrogen, total (excluding N2), to fresh water `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- 适用条件：仅在向淡水排放的总氮跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量或依据匹配活动记录和质量平衡计算。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：`eu-fdm-bat-2019`

###### 向淡水排放的总磷 (`direct_water_tp`)

将向淡水排放的总磷作为一项独立交换记录。

- 选定流：phosphorus, total, to fresh water `f9df3107-6b59-4067-b920-3c61cf3630c7`
- 适用条件：仅在向淡水排放的总磷跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量或依据匹配活动记录和质量平衡计算。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：`eu-fdm-bat-2019`

###### 向水体排放的悬浮物 (`direct_water_tss`)

将向水体排放的悬浮物作为一项独立交换记录。

- 选定流：Suspended solids, unspecified, to water, unspecified `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- 适用条件：仅在向水体排放的悬浮物跨越本过程边界时纳入；否则省略。
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量或依据匹配活动记录和质量平衡计算。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 饮料净产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集数据计算 (`calculated_from_collection`)
- 采集协议：`cp_cleaning_wastewater`
- 来源：`eu-fdm-bat-2019`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享过程和共产品 | 尽可能通过分表计量、批次或产线细分，或分别建模功能来避免分配。 | `ghg-protocol-product-2011` |
| `allocation_physical` | 无法避免的共享公用工程、清洗和共同过程 | 无法细分时，使用能代表因果关系的物理驱动，如计量能源、用水、加工时间、质量吞吐量或容器数量；记录驱动和全部共享产品。 | `ghg-protocol-product-2011` |
| `allocation_fallback` | 缺乏可辩护物理关系的共同过程 | 不存在可辩护物理关系时，采用经济关系或最能反映共同过程的其他有文件依据关系，披露价格和期间，并在分配实质影响结果时进行敏感性分析。 | `ghg-protocol-product-2011` |
| `allocation_rework` | 内部饮料返工和回收流 | 纳入系统内返回的场内返工视为内部转移。负荷和损失保留在系统内；除非单独销售的产品离开边界，否则不创建共产品抵扣。 | `ghg-protocol-product-2011` |
| `allocation_waste` | 无经济价值的产出 | 无经济价值的产出归类为废物，不对其进行共产品分配；将可归属的处理负荷纳入声明产品系统。 | `ghg-protocol-product-2011` |
| `allocation_packaging_returns` | 可重复使用或退回包装 | 按所选背景系统声明的重复使用周期方法建模；披露周期、损耗和负荷分担，并避免对同一退回材料重复抵扣。 | `epd-food-beverage-pcr-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_identity` | `filling_packaging` | 参考产品身份与限定信息 | 放行规范和产品主数据 | 产品名；配方版本；热量配料；销售浓度；稀释说明；碳酸化规范；颗粒状态；包装；批次；净质量 | 核对批准配方、产品规范和批次放行记录 | kg 和声明产品描述 | 每个产品和配方版本；每报告期核实 | 与前景清单相同期间 | 各代表产品、场址和产线 | 每产品/路线保留一份身份记录并链接全部纳入批次 | 批准规范、放行记录、校准净含量证据和 Tiangong 流选择理由 |
| `cp_water_preparation` | `water_preparation` | 原水、制备水、排水、电力和处理介质 | 仪表、账单、库存和维护记录 | 水源类型；期初/期末表数；制备水转移；排水；电力；介质领用；批次/时间 | 校准仪表并与账单和处理日志核对 | kg 水；kWh；kg 介质 | 连续或逐批，并按月核对 | 覆盖清洗和季节运行的代表期 | 代表场址各供水系统 | 按水源汇总，共用量仅按有文件依据方法分配后再归一化 | 仪表校准、账单核对、处理日志和平衡检查 |
| `cp_formulation_batch` | `formulation_blending` | 配料、水、能源、中间产出和损失 | 批配方、投料、库存和仪表记录 | 批次；配方版本；配料身份/浓度/领用质量；水；能源；产出；返工；损失 | 电子批记录及校准投料/公用工程仪表，并与库存核对 | kg；kWh；MJ | 每批并按报告期核对 | 覆盖声明配方的代表生产期 | 各代表产品和混合线 | 分开配方版本并按合格净产出归一化 | 投料校准、库存核对、配方批准和批次质量平衡 |
| `cp_conditioning_operation` | `product_conditioning` | 调理进料、公用工程、耗材、产出和排出物 | 运行日志、仪表、耗材领用和质量平衡 | 操作类型；设备；进出质量；温度/时间；能源；耗材；排出物 | 运行特定过程记录和校准仪表 | kg；kWh；MJ | 每次运行或连续生产批 | 与代表生产相同期间 | 各调理单元 | 仅汇总等效技术和产品状态 | 仪表校准、运行日志、放行规范和质量平衡 |
| `cp_carbonation_run` | `carbonation` | 饮料进出、CO2 投入、能源、产品保留/回收/放空和损失 | 供应库存、质量流量、产品测试和运行日志 | CO2 库存/采购/投加/回收；饮料进出；碳酸化测试；能源；损失 | 储罐/钢瓶库存核对、校准质量流量和产品规范测试 | kg；kWh；MJ | 每次运行并按报告期核对库存 | 与碳酸产品产出相同期间 | 各碳酸化器和产品 | 按运行或生产批计算净 CO2 使用和放空并按合格产出归一化 | 供应记录、秤/流量校准、库存核对和碳酸化测试 |
| `cp_filling_packaging` | `filling_packaging` | 饮料进出、包装、能源、次品和包装废物 | 灌装计量、净含量、部件领用、产线计数、废物称量和能源仪表 | 产品/批次；饮料进料；合格数量/净质量；部件身份/材料/质量；领退；次品；废物；能源 | 校准灌装记录、净含量检查、包装库存核对和废物称量 | kg；件；kWh；MJ | 每次运行并按报告期核对 | 与包装产品相同期间 | 各包装规格和灌装线 | 分开包装规格，计算每合格产出的饮料净量和包装 | 秤和仪表校准、包装清单、库存平衡和次品核对 |
| `cp_cleaning_wastewater` | `cleaning_wastewater` | 清洗水、化学品、能源、回收流、废水、残余物和排放 | 原位清洗日志、仪表、投加、实验室和废物记录 | 清洗批次/产线；水；化学品/浓度；能源；回收量；废水流量；pH；温度；相关污染物浓度；污泥质量/干物质；去向 | 校准流量和投加仪表，配合时间匹配且受质量控制的采样和废物文件 | kg；m3；kWh；MJ；浓度单位 | 逐清洗批次采集用量；连续或逐排放采集废水流量；按有依据频率采样 | 包含开机、换产和清洗的代表期 | 各产线、清洗回路和排口 | 优先按清洗批次归属，否则用有文件依据物理驱动；浓度须与对应流量匹配 | 仪表校准、化学品库存核对、采样计划、实验室 QA 和处理文件 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | 全部清单行 | 归一化数量 = 可归属报告期数量 / 销售浓度下合格饮料净质量（kg）。 | 可归属数量；合格饮料净质量 | 每 1 kg 参考流的行数量 | `ghg-protocol-product-2011` |
| `calc_concentrate_scenario` | 浓缩物的饮用状态情景 | 按产品声明的质量制备比计算制备饮料和加水量；保留销售状态 1 kg 清单作为源结果，并单独报告制备情景。 | 销售状态浓缩物质量；声明浓缩物-水比；密度换算 | 单独标识的饮用状态情景 | `codex-gsfa-beverage-forms-2025` |
| `calc_packaging_use` | 包装投入 | 包装消耗 = 期初库存 + 收货 - 期末库存 - 核实退回；归一化前与合格单元和称量包装废物核对。 | 库存、收货、退回、部件质量、产出数量和废物 | 每 1 kg 饮料净产品的各包装部件 kg | `epd-food-beverage-pcr-2025` |
| `calc_carbon_dioxide_vent` | 碳酸化直接排放 | CO2 放空 = CO2 供应 + 期初库存 - 期末库存 - 合格产品保留 CO2 - 回收 CO2 - 单独实测产品损失中的 CO2；不得报告负放空。 | 供应/库存记录；保留/回收 CO2；产品损失 | 每 1 kg 饮料净产品放空的 kg CO2 | `eu-fdm-bat-2019` |
| `calc_wastewater_load` | 直接水体排放 | 污染物负荷 = 时间匹配浓度 × 排水量，并记录单位和密度换算；仅在研究方法明确要求净去除且进出均实测时扣除进水负荷。 | 排水流量；污染物浓度；采样区间 | 每 1 kg 饮料净产品排入接收环境的污染物 kg | `eu-fdm-bat-2019` |
| `calc_mass_balance` | 各过程和设施总计 | 平衡差 = 物料投入总量 - 产品产出 - 废物产出 - 实测直接物料排放 - 库存增加。报告并调查差值，不得添加不明流强制归零。 | 一致湿质量基准的全部质量记录和库存变动 | 披露的质量平衡结果 | `eu-fdm-bat-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和参考流 | 证明产品含热量、无酒精且未得到更具体分类；保留配方、商业形态及 Tiangong 流选择或有限代理理由。 | 产品规范、配方版本、分类审查和 `cp_product_identity`；`unsd-cpc-3-2025`；`codex-gsfa-beverage-forms-2025` |
| `dq_primary_data` | 前景操作 | 物料、公用工程、产品、废物和排放使用场址、产线和产品特定的一手记录。估算须标识、说明理由，并在有实测记录后替换。 | 采集协议记录及 `ghg-protocol-product-2011` 数据管理原则 |
| `dq_temporal` | 报告期 | 覆盖常规生产、开机、换产、清洗、停机和与声明产品相关的季节效应。说明排除项及期间为何仍有代表性。 | 带日期批次、仪表、清洗、废物和生产记录 |
| `dq_completeness` | 过程和流覆盖 | 核对全部必需和已触发条件性过程。列出省略流或过程并提供量化或证据理由；无文件依据的零不可接受。 | 过程图、水/能源/原料清单、废水流清单和平衡检查；`eu-fdm-bat-2019` |
| `dq_technology_geography` | 场址和上游数据集 | 描述真实水源、配方路线、调理、碳酸化、包装、公用工程、废水处理、地理和技术；说明各上游代理。 | 场址记录、供应商信息和数据集元数据 |
| `dq_measurement` | 仪表、换算和实验室数据 | 对实质影响清单的值保留校准状态、可得的测量不确定性、换算公式、采样方法、时间匹配和实验室 QA。 | 校准证书、采样计划、实验室 QA 和计算工作簿 |
| `dq_allocation` | 共享过程 | 保留分配前总量、分配驱动、共享过程的产品、分配因子，以及结果受实质影响时的敏感性证据。 | 分配工作表和 `ghg-protocol-product-2011` |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `vr_category_identity` | 产品范围 | 缺少热量状态、无酒精状态、销售形态、配方类别或“未另分类”理由，或产品属于排除/更具体类别时，校验失败。 | `unsd-cpc-3-2025`; `codex-gsfa-beverage-forms-2025` |
| `vr_reference_flow` | 参考对象 | 要求销售浓度下恰好 1 kg 饮料净产品、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg；包装质量必须独立。 |  |
| `vr_flow_substitution` | 产品流身份 | 仅在产品匹配碳酸形态或明确披露有限代理时接受 Carbonated beverage `b6cb89fa-5fac-4d09-85d6-f6e1934200b2`。存在匹配真实产品的更具体公开 Tiangong 产品流时必须采用。 |  |
| `vr_process_coverage` | 过程清单 | 必须纳入 `water_preparation`、`formulation_blending`、`filling_packaging` 和 `cleaning_wastewater`。路线记录显示条件性过程发生时必须纳入；否则须有明确证据支持省略。 | `eu-fdm-bat-2019` |
| `vr_recursive_input` | 同类别投入 | 外购饮料基料、浓缩物或返工既链接上游数据集又被递归重建，或场内转移被算作新增外部投入时，拒绝双重计算。 | `ghg-protocol-product-2011` |
| `vr_mass_balance` | 物料清单 | 要求按一致基准披露过程和设施质量平衡。调查并披露差值，不得用不明流强制平衡。 | `eu-fdm-bat-2019` |
| `vr_water_wastewater` | 水和直接水体排放 | 要求用水和废水流数量。范围包含直接排放时，要求时间匹配的流量和相关污染物浓度，并投影物质特定基本流。 | `eu-fdm-bat-2019` |
| `vr_packaging` | 包装清单 | 要求将包装部件、材料、质量、规格、损失和回用/退回状态与饮料净质量分开记录。 | `epd-food-beverage-pcr-2025` |
| `vr_allocation` | 共享过程和共产品 | 可细分时必须细分；否则要求有文件依据的物理或后备关系、分配因子、分配前总量且无重复抵扣。 | `ghg-protocol-product-2011` |
| `vr_data_traceability` | 前景数据 | 每个采集或计算行必须具有源记录、期间、场址/产线/产品范围、采集协议、计算规则、单位换算和质量证据。 | `ghg-protocol-product-2011` |
| `vr_inventory_identity` | 非参考清单流 | 最终数据集若存在匹配公开流，必须记录实际公开 Tiangong 产品、废物和基本流 UUID；本 PCR 的语义候选标签不构成最终 UUID 证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品、场址、路线和报告期特定的前景饮料制造数据包；经评审后可发布为 secondary_dataset 或 background_dataset。 |
| downstream_use | 具有上游链接的从摇篮到厂门 LCA、产品碳足迹或生命周期模型构建；等效产品定义下的制造基准分析；带声明包装和浓度的供应链建模。 |
| allowed_use | 产品类别身份、功能/参考单位、过程覆盖、分配、上游链接、包装、数据期和质量披露满足本 PCR 及下游研究方法时使用。 |
| excluded_use | 不得用于营养或食品安全评价；不得用碳酸代表流暗示类别内全部产品等效；未协调销售/饮用状态、功能、包装、边界和数据质量时不得比较；不得将候选 PCR 当作经核证比较声明规则。 |
| required_metadata | canonical PCR id 和版本状态；实际产品名和 Tiangong 产品流 UUID；完整必需限定信息；场址、产线、地理、技术和期间；配方版本；过程图；参考流及净质量证据；销售浓度和制备比；包装清单；数据源；采集/计算协议；上游数据集版本；分配；截断和下游排除项。 |
| required_quality_disclosure | 相关过程的一手数据份额；仪表/校准和采样证据；时间、地理和技术代表性；质量平衡差；废水覆盖；分配敏感性；代理流和上游数据限制；不确定性和排除数据。 |
| update_trigger | 产品分类、配方或浓度改变；调理、碳酸化、包装规格、场址、产线、公用工程、水源、清洗或废水路线改变；更具体公开流取代代表 Tiangong 流；上游数据或分配发生实质变化；报告期不再代表当前生产时，重新评估。 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, subclass 24499, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-11） | 权威产品类别边界和“未另分类”含义。 |
| `codex-gsfa-beverage-forms-2025` | official_guidance | Codex Alimentarius GSFA Online, food categories 14.1.4.1, 14.1.4.2 and 14.1.4.3, updated through the 48th Codex Alimentarius Commission session (2025): https://www.fao.org/gsfaonline/foods/details.html?id=249 ; https://www.fao.org/gsfaonline/foods/details.html?id=250 ; https://www.fao.org/gsfaonline/foods/details.html?id=251（检索于 2026-08-11） | 碳酸、非碳酸、运动/能量/电解质、含颗粒和浓缩饮料代表形态；仅用于仍为含热量且属于 CPC 24499 的产品。 |
| `eu-fdm-bat-2019` | official_guidance | European Commission, *Commission Implementing Decision (EU) 2019/2031 establishing best available techniques conclusions for the food, drink and milk industries*, 2019. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索于 2026-08-11） | 过程流程图；水、能源、原料、废水和废气清单；水量平衡；废水数量及污染物特征要求；清洗和排放控制背景。 |
| `ghg-protocol-product-2011` | standard | WRI and WBCSD, *Greenhouse Gas Protocol Product Life Cycle Accounting and Reporting Standard*, 2011. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf（检索于 2026-08-11） | 边界记录、一手数据与数据质量管理、避免分配及物理/经济后备层级、报告和更新追溯。 |
| `epd-food-beverage-pcr-2025` | standard | International EPD System, PCR 2025:03 *Food and beverage products (main PCR)*, version 1.0.1, valid to 2030-07-14. https://environdec.com/pcr-library/pcr_fbd3e8c6-483c-48f5-d22f-08da0b49f7f5（检索于 2026-08-11） | 行业通用声明单位和数据集画像背景、包装纳入及发布用途限制。 |
