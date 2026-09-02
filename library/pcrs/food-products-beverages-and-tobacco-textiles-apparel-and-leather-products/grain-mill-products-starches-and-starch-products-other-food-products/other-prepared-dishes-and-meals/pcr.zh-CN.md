---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-prepared-dishes-and-meals
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他准备好的菜肴和饭菜

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 23997 范围内的工厂制造预制菜肴和餐食。纳入产品含至少两种不同的主要配料，已经制备、调味和烹熟，并以真空包装、罐装或冷冻形式提供。示例包括冷冻披萨和乳蛋饼，以蛋、奶酪、豆腐或肉类替代品为基础的菜肴，以及其他未另分类的预制菜肴和餐食。

本 PCR 不涵盖以肉类为主要基础的餐食；以鱼、软体动物或甲壳类动物为主要基础的餐食；以蔬菜、豆类或马铃薯为主要基础的餐食；填馅意面或古斯米菜肴；婴儿食品等均质复合食品制剂；以及新鲜或以其他方式保藏但未冷冻的披萨或乳蛋饼。CPC 的精确纳入和排除边界以 `un-cpc-v3-2025` 为准。

前景边界始于制造场址接收的配料、加工助剂、包装组件和公用工程，终止于工厂门口的净可售成品。分销、零售、消费者复热和生命周期末端不属于本前景生产数据集；下游生命周期模型可另行增加这些阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-prepared-dishes-and-meals |
| classification_refs | CPC 3.0：23997，精确映射 |
| covered_products | 含至少两种不同主要配料、经过制备、调味和烹熟并以真空包装、罐装或冷冻形式提供的菜肴和餐食；冷冻披萨和乳蛋饼；以蛋、奶酪、豆腐或肉类替代品为基础的预制菜肴；其他未另分类的预制菜肴和餐食 |
| excluded_products | 以肉类为基础的餐食（21186）；以鱼、软体动物或甲壳类动物为基础的餐食（21241）；以蔬菜、豆类或马铃薯为基础的餐食（21391）；填馅意面和古斯米菜肴（23722）；包括婴儿食品在内的均质复合食品制剂（23991）；新鲜或保藏但未冷冻的披萨和乳蛋饼（23430） |
| representative_product | CPC 23997 范围内成品的生产组合，按配方系列和保藏路线声明 |
| production_route | 配料接收与预处理；配方调制与调味；烹调或其他经验证的热处理；组装或灌装；包装成形与密封；路线特定的真空包装、罐装/杀菌、冷却或速冻；成品暂存 |
| market_state | 工厂门口净可售的真空包装、罐装或冷冻成品；冷藏产品仅在其他产品身份符合 CPC 23997 边界且不属于被排除的非冷冻披萨或乳蛋饼时纳入 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合 CPC 23997 的已制备、调味和烹熟的多配料菜肴或餐食 |
| How much | 1,000 kg 净可售成品 |
| How well | 符合所声明配方、主要配料分类、保藏路线、包装配置和经验证的食品安全规格 |
| How long or cycle | 一个制造报告期，具有批次或生产活动可追溯性，不含消费者储存或使用时长 |
| reference_flow_link | 作为 `finished_product` 记录的归一化工厂门口产出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 净可售成品 |
| 参考产品流 | 其他准备好的菜肴和饭菜 `92b0b2f5-905b-45e9-8182-b0ad6ed26cfc` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 配方系列；至少两种不同主要配料的身份和质量占比；主要配料分类依据；制备和烹调路线；保藏路线（`vacuum_packed`、`canned`、`frozen` 或符合条件的 `chilled`）；包装组件身份和质量；净含量；场址和地理；生产期；分配方法；每项废物和废水流的处理去向；消费者复热是否排除或在下游纳入 |

构建前景数据包时，每项必需限定信息都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息会使参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有前景交换归一化至 1,000 kg 净可售成品，不计入不随产品销售的二级运输包装。 |
| `net_saleable_output` | 成品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 根据经核验的净含量质量和合格可售件数确定产出；不合格品、留样和赠品不属于可售产出。 |
| `ingredient_mass` | 每种配方配料 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按接收状态质量分别记录每种配料；当水分或固形物会实质影响配方比较时保留相关信息。 |
| `package_component_mass` | 每个一级或二级包装组件 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别称量每个包装组件，或以组件单位质量乘以包装件数计算；合并的包装材料总量不符合要求。 |
| `energy_preservation` | 电力、天然气和外购蒸汽 | 能量 | 按计量记录采用 kWh、MJ 或 kg 蒸汽 | 保留原始计量表或账单单位，并记录用于参考流归一化的每项换算因子。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 工厂门口前景 | 纳入配料接收、储存与预处理；配方调制与调味；烹调或经验证的热处理；组装或灌装；包装成形与密封；路线特定的冷却、速冻、杀菌或真空包装；成品暂存；清洁；直接控制的公用工程；不合格品；包装废料；制冷剂损失；直接燃烧排放；以及由生产者运营时的场内废水处理。 | `un-cpc-v3-2025`; `codex-cxc-8-1976`; `jrc-fdm-bref-2019`; `schmidt-rivera-2019` |
| `boundary_upstream_inputs` | 外购投入 | 为每种配料、加工化学品、包装组件、电力供应、燃料、蒸汽和场外处理服务关联符合所声明地理、技术和时期的上游数据集。 | `eu-pef-2021` |
| `boundary_downstream_exclusion` | 分销、零售、使用和生命周期末端 | 从前景生产数据集中排除分销、零售储存、消费者复热和产品/包装生命周期末端并披露该排除；仅在明确扩展的下游生命周期模型中纳入。 | `eu-pef-2021`; `schmidt-rivera-2019` |
| `boundary_no_hidden_cutoff` | 物料和能源完整性 | 不得因实际配料、包装组件、燃料、制冷剂、废物流或直接释放污染物数量较小而将其省略；任何缺少的二级数据集必须记录为数据缺口或披露的代理。 | `eu-pef-2021` |
| `boundary_wastewater_route` | 废水 | 将加工废水建模为送往场外处理的废物流，或纳入场内处理并分别记录排放水和每个监测污染指标；同一废水量不得同时计入两条路线。 | `jrc-fdm-bref-2019` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 以实际采购状态在制造场址接收的配料、加工助剂、包装组件和公用工程 |
| starting_condition_role | 前景门到门起点条件；上游生产仍由关联数据集表示 |
| product_classification_scope | 仅限符合 CPC 3.0 子类 23997 及其明确排除项的成品 |
| recursive_input_rule | 自身属于本 PCR 类别的外购预制组件仍作为单独量化的上游产品投入。关联其供应商数据集，不在接收过程内递归展开；披露其质量、配方状态和供应商边界。 |
| upstream_dataset_requirement | 对每项外购投入使用具有地理、时间和技术代表性的上游数据集，并披露代理或缺失数据集 |
| disclosure | 声明配方系列、主要配料基础、保藏路线、包装配置、产品状态、前景起止点、场内与场外处理、排除的下游阶段和分配方法 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `prepared_meal_manufacturing` | 预制餐食制造、保藏与包装 | `required` | 始终纳入 | 从接收配料至可售包装成品的前景生产 | 1,000 kg 净可售成品 |
| `on_site_wastewater_treatment` | 场内废水处理与排放 | `conditional` | 仅在生产者于前景边界内运营处理设施时纳入；否则将 `process_wastewater` 送往场外处理数据集 | 制造废水的前景处理 | 处理废水的 kg 或 m3，归一化至 1,000 kg 成品 |

下列卡片均为原子交换，并非穷尽所有配方。具体数据集必须把其他每种实际配料、加工化学品、包装组件、废物和排放分别添加为原子交换。仅名为“配料”“包装材料”“能源载体”或“废水和残余物”的行被禁止。经审查的研究均为单一案例或具有实质不同的配方边界，因此未保留定量清单范围；前景实测是强制要求。

### 过程：预制餐食制造、保藏与包装（`prepared_meal_manufacturing`）

#### 输入

##### 产品流

###### 小麦粉配方投入（`wheat_flour`）

仅在小麦粉是实际配料时记录，例如冷冻披萨或乳蛋饼的饼底。

- 选定流：小麦粉
- 流属性/单位：质量 / kg
- 数量规则：发往合格生产的接收状态面粉质量，扣除单独记录的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_inputs`
- 来源：`un-cpc-v3-2025`; `schmidt-rivera-2019`

###### 全蛋液配方投入（`liquid_whole_egg`）

仅在全蛋液是实际配方配料时记录。

- 选定流：全蛋液
- 流属性/单位：质量 / kg
- 数量规则：计量或称量发往合格生产的接收状态全蛋液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_inputs`
- 来源：`un-cpc-v3-2025`

###### 切达奶酪配方投入（`cheddar_cheese`）

仅在实际使用切达奶酪时记录；其他奶酪必须用单独、精确命名的行记录。

- 选定流：切达奶酪
- 流属性/单位：质量 / kg
- 数量规则：称量发往合格生产的接收状态奶酪
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_inputs`
- 来源：`un-cpc-v3-2025`

###### 豆腐配方投入（`tofu`）

仅对实际使用豆腐的配方记录。

- 选定流：豆腐
- 流属性/单位：质量 / kg
- 数量规则：称量发往合格生产的接收状态豆腐
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_inputs`
- 来源：`un-cpc-v3-2025`; `schmidt-rivera-2019`

###### 面筋配方投入（`seitan`）

仅对实际使用这种肉类替代品的配方记录。

- 选定流：面筋
- 流属性/单位：质量 / kg
- 数量规则：称量发往合格生产的接收状态面筋
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_inputs`
- 来源：`un-cpc-v3-2025`; `schmidt-rivera-2019`

###### 精炼植物油配方投入（`refined_vegetable_oil`）

在精炼植物油加入配方或用于烹调时记录。

- 选定流：精炼植物油
- 流属性/单位：质量 / kg
- 数量规则：储罐领用、批次分配，或经核验的合格生产采购至库存平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_inputs`
- 来源：`schmidt-rivera-2019`

###### 氯化钠配方投入（`sodium_chloride`）

在氯化钠作为调味料加入时记录。

- 选定流：氯化钠
- 流属性/单位：质量 / kg
- 数量规则：称量加入合格生产批次的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_inputs`
- 来源：`schmidt-rivera-2019`

###### 饮用水投入（`potable_water`）

进入前景过程的全部饮用水仅记录一次，同时在原始字段中分别保留配方接触、清洗、清洁和补水用途。

- 选定流：饮用水
- 流属性/单位：体积 / m3
- 数量规则：分表计量用水；若一只水表服务多项用途，则协调末端读数或有文件依据的工程估算，且不得重复场址总量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_utilities`
- 来源：`jrc-fdm-bref-2019`; `codex-cxc-1-1969`

###### 电网电力投入（`grid_electricity`）

记录预处理、烹调、灌装、密封、冷却、冷冻、冷藏和清洁设备使用的外购电网电力。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：过程分表总量；否则按 `calc_shared_utility` 分配经核验的场址总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_utilities`
- 来源：`jrc-fdm-bref-2019`; `schmidt-rivera-2019`

###### 天然气投入（`natural_gas`）

仅在天然气于前景边界内用于烹调、杀菌、热水或蒸汽发生时记录。

- 选定流：天然气
- 流属性/单位：低位热值 / MJ
- 数量规则：计量燃气体积乘以供应商声明的低位热值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 外购蒸汽投入（`purchased_steam`）

当蒸汽跨越前景边界时，将外购蒸汽与场内燃料和电力分别记录。

- 选定流：蒸汽
- 流属性/单位：质量 / kg
- 数量规则：供应商流量计或账单数量；适用时扣除经核验的凝结水回流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 镀锡钢罐包装组件（`tinplate_can`）

仅在使用这种包装时，将罐身和罐盖作为一个经称量的钢罐组件记录。

- 选定流：镀锡钢罐
- 流属性/单位：质量 / kg
- 数量规则：经核验的空罐质量乘以合格包装件数，并另行记录过程废料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：`jrc-fdm-bref-2019`

###### 聚丙烯托盘包装组件（`polypropylene_tray`）

仅在使用这种包装组件时记录聚丙烯托盘。

- 选定流：聚丙烯托盘
- 流属性/单位：质量 / kg
- 数量规则：经核验的托盘单位质量乘以合格包装件数，并另行记录过程废料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：`jrc-fdm-bref-2019`; `schmidt-rivera-2019`

###### 聚乙烯封口膜包装组件（`polyethylene_lidding_film`）

将聚乙烯封口膜或真空膜与刚性托盘和纸盒分别记录。

- 选定流：聚乙烯封口膜
- 流属性/单位：质量 / kg
- 数量规则：领用卷膜质量减去退回卷膜和单独记录的薄膜废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`jrc-fdm-bref-2019`; `codex-cxc-8-1976`

###### 纸板盒包装组件（`paperboard_carton`）

将零售纸板盒与食品接触型一级包装分别记录。

- 选定流：纸板盒
- 流属性/单位：质量 / kg
- 数量规则：经核验的纸盒单位质量乘以合格包装件数，并另行记录过程废料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：`jrc-fdm-bref-2019`

###### R-404A 制冷剂补充量（`r404a_refrigerant`）

仅在直接控制的冷却或冷冻设备使用 R-404A 时记录；其他每种制冷剂都需要单独卡片。

- 选定流：R-404A 制冷剂
- 流属性/单位：质量 / kg
- 数量规则：报告期内采购或补充的制冷剂，按 `calc_refrigerant_loss` 与期初、期末和回收量核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- 来源：`jrc-fdm-bref-2019`; `schmidt-rivera-2019`

##### 废物流

_没有进入本过程的废物流。_

##### 基本流

_没有进入本过程的基本流。_

#### 输出

##### 产品流

###### 净可售成品（`finished_product`）

这是最终质量验收和包装密封后的定量参考产出。

- 选定流：其他准备好的菜肴和饭菜 `92b0b2f5-905b-45e9-8182-b0ad6ed26cfc`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `calc_reference_normalization` 将验收净含量质量归一化至恰好 1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_finished_product`
- 来源：`un-cpc-v3-2025`

##### 废物流

###### 预制食品废物（`food_waste`）

记录本过程排出的可食或不可食不合格和损失预制食品，并披露处理去向。

- 选定流：废弃预制食品
- 流属性/单位：质量 / kg
- 数量规则：称量离开前景过程的不合格品、洒落物和留样废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`schmidt-rivera-2019`

###### 食品加工废水（`process_wastewater`）

记录从制造过程流出并送往场内或场外处理的废水。不得与固体食品废物合并。

- 选定流：食品加工废水
- 流属性/单位：体积 / m3
- 数量规则：制造废水汇集点的出水流量计，或经核验的水平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`jrc-fdm-bref-2019`

###### 废聚乙烯输出（`waste_polyethylene`）

分别记录聚乙烯边料和不合格封口膜或真空膜。

- 选定流：废聚乙烯
- 流属性/单位：质量 / kg
- 数量规则：按处理去向称量离开过程的聚乙烯废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`jrc-fdm-bref-2019`

###### 废聚丙烯输出（`waste_polypropylene`）

分别记录不合格聚丙烯托盘。

- 选定流：废聚丙烯
- 流属性/单位：质量 / kg
- 数量规则：按处理去向称量离开过程的聚丙烯废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`jrc-fdm-bref-2019`

###### 废纸板输出（`waste_paperboard`）

分别记录不合格纸板盒和洁净纸板边料。

- 选定流：废纸板
- 流属性/单位：质量 / kg
- 数量规则：按处理去向称量离开过程的纸板废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`jrc-fdm-bref-2019`

###### 废镀锡钢输出（`waste_tinplate`）

分别记录不合格镀锡钢罐和金属边料。

- 选定流：废镀锡钢
- 流属性/单位：质量 / kg
- 数量规则：按处理去向称量离开过程的镀锡钢废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`jrc-fdm-bref-2019`

##### 基本流

###### 化石二氧化碳排放（`fossil_carbon_dioxide`）

记录场内燃料燃烧产生的直接化石二氧化碳；不含燃料上游生命周期排放。

- 选定流：二氧化碳（化石源），排放到空气
- 流属性/单位：质量 / kg
- 数量规则：烟气实测，或按 `calc_direct_combustion_emission` 以天然气用量乘以披露的辖区适用因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 甲烷排放（`methane_air`）

将场内燃料燃烧产生的直接甲烷与二氧化碳分别记录。

- 选定流：甲烷，排放到空气
- 流属性/单位：质量 / kg
- 数量规则：烟气实测，或按 `calc_direct_combustion_emission` 以天然气用量乘以披露的辖区适用因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 氧化亚氮排放（`nitrous_oxide_air`）

分别记录场内燃料燃烧产生的直接氧化亚氮。

- 选定流：氧化亚氮，排放到空气
- 流属性/单位：质量 / kg
- 数量规则：烟气实测，或按 `calc_direct_combustion_emission` 以天然气用量乘以披露的辖区适用因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 一氧化氮排放（`nitrogen_monoxide_air`）

在实测或使用因子计算时，将一氧化氮作为单独的直接空气排放记录。

- 选定流：一氧化氮，排放到空气
- 流属性/单位：质量 / kg
- 数量规则：烟气实测，或按 `calc_direct_combustion_emission` 以天然气用量乘以披露的物种特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 二氧化氮排放（`nitrogen_dioxide_air`）

在实测或使用因子计算时，将二氧化氮与一氧化氮分别记录。

- 选定流：二氧化氮，排放到空气
- 流属性/单位：质量 / kg
- 数量规则：烟气实测，或按 `calc_direct_combustion_emission` 以天然气用量乘以披露的物种特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`jrc-fdm-bref-2019`

###### R-404A 制冷剂排放（`r404a_air`）

将前景冷却或冷冻设备的直接 R-404A 损失作为单独空气排放记录。

- 选定流：R-404A 制冷剂，排放到空气
- 流属性/单位：质量 / kg
- 数量规则：按 `calc_refrigerant_loss` 以期初充注量加补充量减期末充注量和回收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- 来源：`jrc-fdm-bref-2019`; `schmidt-rivera-2019`

### 过程：场内废水处理与排放（`on_site_wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理电力（`wastewater_treatment_electricity`）

纳入废水处理过程时，将场内废水处理用电与制造用电分别记录。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：处理厂分表总量，归一化至归属于合格生产的处理废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_inputs`
- 来源：`jrc-fdm-bref-2019`

###### 氢氧化钠处理投入（`sodium_hydroxide`）

仅在场内处理过程投加氢氧化钠时记录。

- 选定流：氢氧化钠
- 流属性/单位：质量 / kg
- 数量规则：在报告期内核对交付、储罐或加药泵记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_inputs`
- 来源：`jrc-fdm-bref-2019`

###### 氯化铁处理投入（`ferric_chloride`）

仅在投加氯化铁以去除磷或固体时记录。

- 选定流：氯化铁
- 流属性/单位：质量 / kg
- 数量规则：在报告期内核对交付、储罐或加药泵记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_inputs`
- 来源：`jrc-fdm-bref-2019`

##### 废物流

###### 制造废水投入（`wastewater_input`）

本卡接收与 `process_wastewater` 相同的物理废水；关联数量必须完全核对一致。

- 选定流：食品加工废水
- 流属性/单位：体积 / m3
- 数量规则：进入场内处理的流量计量废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`jrc-fdm-bref-2019`

##### 基本流

_没有进入本过程的基本流。_

#### 输出

##### 产品流

_没有离开本过程的产品流。_

##### 废物流

###### 废水处理污泥（`wastewater_sludge`）

将离开场内处理的脱水污泥与食品废物和包装废料分别记录。

- 选定流：废水处理污泥
- 流属性/单位：质量 / kg
- 数量规则：以声明的湿质量基准记录地磅、容器或脱水记录，并保留干固体含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`jrc-fdm-bref-2019`

##### 基本流

###### 处理水排放（`treated_water_discharge`）

当场内处理和直接排放属于范围时，记录直接排入受纳水体的水体积。

- 选定流：河流水
- 流属性/单位：体积 / m3
- 数量规则：最终出水流量计总量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`jrc-fdm-bref-2019`

###### 化学需氧量排放（`cod_to_water`）

将 COD 负荷作为单独监测的废水指标记录。

- 选定流：化学需氧量，排放到水体
- 流属性/单位：质量 / kg
- 数量规则：按 `calc_wastewater_pollutant_load` 以最终出水体积乘以代表性 COD 浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`jrc-fdm-bref-2019`

###### 五日生化需氧量排放（`bod5_to_water`）

将 BOD5 负荷与 COD 分别记录。

- 选定流：五日生化需氧量，排放到水体
- 流属性/单位：质量 / kg
- 数量规则：按 `calc_wastewater_pollutant_load` 以最终出水体积乘以代表性 BOD5 浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`jrc-fdm-bref-2019`

###### 总悬浮固体排放（`tss_to_water`）

将 TSS 负荷作为单独的废水指标记录。

- 选定流：总悬浮固体，排放到水体
- 流属性/单位：质量 / kg
- 数量规则：按 `calc_wastewater_pollutant_load` 以最终出水体积乘以代表性 TSS 浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`jrc-fdm-bref-2019`

###### 总氮排放（`total_nitrogen_to_water`）

将总氮负荷与其他废水指标分别记录。

- 选定流：总氮，排放到水体
- 流属性/单位：质量 / kg
- 数量规则：按 `calc_wastewater_pollutant_load` 以最终出水体积乘以代表性总氮浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`jrc-fdm-bref-2019`

###### 总磷排放（`total_phosphorus_to_water`）

将总磷负荷与总氮分别记录。

- 选定流：总磷，排放到水体
- 流属性/单位：质量 / kg
- 数量规则：按 `calc_wastewater_pollutant_load` 以最终出水体积乘以代表性总磷浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`jrc-fdm-bref-2019`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | 可分离的产品、批次和处理线 | 首先细分过程、计量表和记录，使每个配方系列、保藏路线和产出获得可直接归属的配料、包装、公用工程、废物和排放。 | `eu-pef-2021` |
| `shared_utility_allocation` | 共用烹调、冷却、冷冻、清洁和场址服务 | 无法直接计量时，使用最接近因果关系的运行参数分配共用公用工程，例如设备计量负荷乘以运行时间、热负荷、清洁面积或设备占用；记录参数并与场址总量核对。 | `eu-pef-2021`; `schmidt-rivera-2019` |
| `physical_output_allocation` | 具有有据物理关系且无法避免的多产出运行 | 使用反映因果关系且有文件依据的物理关系。仅当产品质量驱动共用负荷且所有产出均在一致基准上称量时，才允许质量分配。 | `eu-pef-2021` |
| `economic_allocation_last_resort` | 没有可辩护物理关系的多产出运行 | 仅将经济分配作为最后手段；披露价格来源、价格期、币种、平均方法和分配因子，并测试对实质价格变化的敏感性。 | `eu-pef-2021` |
| `waste_and_byproduct_status` | 食品残余、可回收包装废料和处理污泥 | 按适用辖区声明每项产出是废物、副产品还是回收产品；除非明确声明下游建模约定，否则不得在前景数据集内赋予避免负荷。 | `eu-pef-2021`; `jrc-fdm-bref-2019` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_recipe_inputs` | `prepared_meal_manufacturing` | 每种实际配方配料 | 批次配方、称量单、领料和退料记录 | 配料身份；供应商批次；接收状态质量；退回质量；配方系列；批次 id；实质相关时的水分或固形物 | 将批次添加量和退料与批准配方和生产订单核对 | kg | 每批次 | 具有代表性的连续 12 个月，或经说明的完整较短生产活动 | 生产所声明配方系列的所有生产线 | 按精确配料汇总净领用质量并用 `calc_reference_normalization` 归一化；不得聚合不同配料 | 校准秤；批准配方；批次可追溯；库存核对 |
| `cp_water_and_utilities` | `prepared_meal_manufacturing` | 饮用水、电力、天然气和外购蒸汽 | 计量表、账单、设备日志和生产日志 | 期初和期末读数；账单数量；计量单位；设备 id；运行时间；燃料热值；凝结水回流；生产产出 | 优先采用过程分表；否则核对场址总表或账单总量并应用 `calc_shared_utility` | 原始计量单位 | 连续记录，或按账单并每月核对 | 与成品产出相同的报告期 | 制造场址及纳入的辅助系统 | 归一化前将分配总量与经核验的场址总量核对 | 计量表校准；账单；时间日志；核对说明 |
| `cp_packaging_components` | `prepared_meal_manufacturing` | 每个包装组件 | 组件规格、单位质量测试、领用和废料记录 | 精确材料；供应商；单位质量；包装件数；领用质量；退回质量；废料质量 | 称量有代表性的空组件，并核对组件领用、包装件数和废料 | kg | 每项包装规格并每月核对 | 与成品产出相同的报告期 | 范围内所有包装线 | 分别计算每个组件；不得形成合并包装总量 | 校准秤；组件规格；库存核对 |
| `cp_finished_product` | `prepared_meal_manufacturing` | 净可售成品 | 检重秤、净含量测试、合格件数和批次放行记录 | 批次 id；配方系列；路线；合格件数；净含量；不合格品；留样；放行状态 | 仅在最终质量放行后汇总合格净含量质量 | kg | 每批次 | 完整报告期 | 所有纳入生产线 | 使用 `calc_reference_normalization` 归一化所有交换 | 校准检重秤；放行记录；生产核对 |
| `cp_waste_outputs` | `prepared_meal_manufacturing` | 每项食品或包装废物 | 容器重量、地磅单和转移联单 | 精确废物身份；毛重和皮重；去向；日期；批次或生产线；回收状态 | 转移时分别称量每项废物流 | kg | 每次转移或每个容器 | 与成品产出相同的报告期 | 所有纳入生产线 | 按原子废物身份和去向汇总；仅在有证据时扣除实测杂质 | 衡器校准；转移联单；处理接收记录 |
| `cp_refrigerant_inventory` | `prepared_meal_manufacturing` | R-404A 补充量和直接损失 | 设备充注、维护和回收记录 | 设备 id；制冷剂身份；期初充注量；补充量；期末充注量；回收质量；生产分配键 | 由技术人员核验并按设备建立制冷剂质量平衡 | kg | 每次维护事件和年度结算 | 包含期初和期末库存的报告年度 | 直接控制的制冷系统 | 应用 `calc_refrigerant_loss`；仅将设备特定损失分配给覆盖生产 | 认证维护记录；钢瓶称量；设备日志 |
| `cp_direct_air_emissions` | `prepared_meal_manufacturing` | 每种直接燃烧排放 | 烟气测试、连续监测、燃料计量和因子记录 | 污染物物种；实测浓度和流量或燃料使用量；因子值；因子来源；氧化基准；运行时间 | 优先采用代表性烟气实测；否则根据采集燃料量和披露的因子分别计算每种物种 | kg 污染物和原始燃料单位 | 监测区间或每个燃料核对期 | 与燃料使用相同的报告期 | 每台直接控制的燃烧设备 | 应用 `calc_direct_combustion_emission`；不得合并污染物物种 | 认可测试或监测 QA；校准燃料计量表；保留的因子来源 |
| `cp_wastewater_monitoring` | `prepared_meal_manufacturing`; `on_site_wastewater_treatment` | 废水体积、污泥和每个最终出水指标 | 流量计、混合样和实验室结果 | 进出水体积；采样期；COD；BOD5；TSS；TN；TP；污泥湿质量；污泥干固体；排放去向 | 可行时采用流量比例混合采样，并由认可实验室按声明方法分析 | m3、mg/L 和 kg | 连续流量记录；采样频率按许可和过程波动论证 | 与成品产出相同的报告期 | 制造汇集点和最终排放点 | 应用 `calc_wastewater_pollutant_load`；每个指标保持独立 | 流量计校准；样品流转；实验室认可；许可记录 |
| `cp_wastewater_treatment_inputs` | `on_site_wastewater_treatment` | 处理电力和每种处理化学品 | 分表、加药泵、储罐和交付记录 | 精确投入身份；计量或加药总量；浓度；期初和期末库存；处理体积 | 将分表和化学品库存变化与处理运行核对 | kWh 或 kg | 连续记录，或每次交付并每月核对 | 与废水监测相同的报告期 | 场内处理系统 | 将投入归一化至覆盖生产且不合并化学品身份 | 计量表校准；交货单；加药校准；库存核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项前景交换 | 归一化数量 = 报告期交换数量 × 1,000 kg / 报告期净可售成品质量 | 原子交换数量；合格净可售产出质量 | 每 1,000 kg 参考产品的交换数量 | `eu-pef-2021` |
| `calc_shared_utility` | 没有直接过程分表的经核验场址公用工程总量 | 按有文件依据的因果驱动因素分配；归一化前将所有分配量求和并与经核验的计量表或账单总量完全核对 | 场址总量；设备负荷；运行时间或其他因果驱动因素；覆盖产出 | 分配后的原子公用工程数量 | `eu-pef-2021`; `schmidt-rivera-2019` |
| `calc_refrigerant_loss` | 直接控制设备内的每种制冷剂 | 损失 = 期初充注量 + 补充量 − 期末充注量 − 回收制冷剂；调查并记录任何负值或无法解释的平衡 | 设备特定制冷剂库存和维护记录 | 排放到空气的制冷剂 kg | `jrc-fdm-bref-2019` |
| `calc_direct_combustion_emission` | 每种直接排放的燃烧物种 | 排放量 = 实测烟气质量，或采集燃料活动量 × 披露的物种特定排放因子；不得使用合并的空气排放行 | 烟气结果或燃料活动量；物种特定因子和来源 | 一种具名污染物的 kg | `jrc-fdm-bref-2019` |
| `calc_wastewater_pollutant_load` | 直接排放中的 COD、BOD5、TSS、TN 或 TP | 污染物负荷（kg）= 最终出水体积（m3）× 代表性浓度（mg/L）× 0.001；采用相同采样和流量期间 | 最终出水体积；一种污染物浓度 | 具名污染物指标的 kg | `jrc-fdm-bref-2019` |
| `calc_mass_reconciliation` | 配方和包装质量平衡 | 比较全部接收状态配料和包装质量与可售产品、分别命名的废物、废水转移、留样和有文件记录的库存变化；调查无法解释的差额，且不得把蒸发水作为固体废物 | 所有实测质量投入和产出；库存变化 | 核对说明和无法解释的质量结果 | `eu-pef-2021`; `jrc-fdm-bref-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_category_identity` | 成品 | 证明存在两种不同的主要配料，并记录主要配料基础为何不属于任一被排除 CPC 子类。 | 批准配方、配料质量占比、产品规格和 CPC 分类依据 |
| `dq_route_identity` | 成品 | 保留制备、烹调、冷却/冷冻或杀菌、包装密封和储存规格，并识别实际采用的路线。 | 批次路线、HACCP 计划、过程日志和包装规格 |
| `dq_temporal_alignment` | 全部前景数据 | 对投入、产出、废物和排放使用同一代表性报告期；较短生产活动必须覆盖所有活动批次并披露季节性或启动效应。 | 带日期记录和生产核对 |
| `dq_meter_and_scale_control` | 实测数量 | 使用经校准的计量表和衡器，并保留校准状态和数据采集完整性。 | 校准证书、计量检查和缺失数据日志 |
| `dq_supplier_representativeness` | 上游数据集 | 将配料、包装、能源和处理数据集与供应商地理、技术和时期匹配；披露每项代理。 | 供应商声明、数据集元数据和代理清单 |
| `dq_wastewater_sampling` | 废水指标 | 对齐最终出水体积与浓度期间，保留实验室方法和样品流转，并识别是直接排放还是送往场外处理。 | 混合样记录、认可实验室报告、流量计记录和许可 |
| `dq_allocation_reconciliation` | 共用运行 | 将分配的公用工程、废物和排放总量与经核验的场址总量核对，并披露因果驱动因素和剩余差额。 | 分配工作簿、计量总量和核对检查 |
| `dq_completeness` | 清单 | 将每种实际配料、包装组件、公用工程、制冷剂、废物和直接排放作为原子行纳入；将缺少的二级数据集记录为数据缺口，不得删除交换。 | 配方至清单、物料清单至清单、公用工程和废物核对清单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 产出 UUID 必须为 `92b0b2f5-905b-45e9-8182-b0ad6ed26cfc`，参考属性必须为质量 `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组必须为 `93a60a57-a4c8-11da-a746-0800200c9a66`，归一化数量必须为 1,000 kg。 | `un-cpc-v3-2025` |
| `validate_cpc_scope` | 产品类别 | 必须分别识别并质量量化至少两种不同主要配料，且不得将被排除的主要配料基础或产品形式归入本 PCR。 | `un-cpc-v3-2025` |
| `validate_atomic_inventory` | 全部清单行 | 每个选定流必须表示一种物理或化学交换；拒绝复数集合标签、合并公用工程、合并包装、合并废物和合并排放。 | `jrc-fdm-bref-2019` |
| `validate_recipe_completeness` | 配料清单 | 批准生产配方上的每种配料必须映射至一个单独命名的投入行，且配方质量必须与批次领料记录核对。 | `schmidt-rivera-2019` |
| `validate_package_completeness` | 包装清单 | 每个一级和二级包装组件必须映射至一个单独命名的投入；如有过程废料，必须映射至一个单独命名的废物产出。 | `jrc-fdm-bref-2019`; `codex-cxc-8-1976` |
| `validate_preservation_records` | 烹调、冷藏、冷冻、杀菌或真空路线 | 数据包必须保留实际过程路线和相关时间温度或密封记录；冷冻路线必须识别速冻和冷藏条件。 | `codex-cxc-1-1969`; `codex-cxc-8-1976` |
| `validate_wastewater_exclusivity` | 废水 | 同一废水量必须表示为送往场外处理的废物流，或通过纳入的场内处理和直接排放流表示，不得同时使用两种表示。 | `jrc-fdm-bref-2019` |
| `validate_wastewater_indicators` | 直接废水排放 | 纳入直接排放时，COD、BOD5、TSS、TN 和 TP 必须分别报告，或将每项缺少的检测记录为明确数据缺口；不得使用合并的废水污染物行。 | `jrc-fdm-bref-2019` |
| `validate_direct_air_emissions` | 场内燃烧和制冷 | 每种实测或计算污染物以及每种制冷剂都必须作为独立基本流行，且所生成数据集必须保留其方法或因子来源。 | `jrc-fdm-bref-2019` |
| `validate_normalization` | 全部前景交换 | 每项交换必须使用同一合格净可售产出分母，且报告期分配总量必须在归一化前与场址记录核对。 | `eu-pef-2021` |
| `validate_ranges` | 定量范围元数据 | 本 PCR 未授权任何来源支持的范围。以后增加的范围必须通过仓库范围证据契约；推断经验范围至少需要两个独立且边界可比的原始来源。 | — |
| `validate_unresolved_identities` | 发布就绪性 | 无 UUID 的原子流名称可用于候选编制，但 manifest 中每项未解决的 Tiangong 身份必须在发布前解决或经明确审查。 | — |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后可发布为二级或背景数据集的前景生产数据包 |
| downstream_use | 构建预制餐食生产及更广泛食品系统研究的 process 和 lifecyclemodel 数据集 |
| allowed_use | 对已声明 CPC 23997 配方系列、保藏路线、包装配置、地理和生产期进行工厂门口建模 |
| excluded_use | 直接作为被排除 CPC 餐食子类的代理；消费者餐饮服务；餐厅制备；分销、零售、复热或生命周期末端，除非扩展生命周期模型另行增加这些阶段 |
| required_metadata | canonical PCR id；CPC 坐标；配方系列；两种或更多主要配料的身份和质量占比；主要配料依据；路线；包装组件；参考 UUID/属性/单位；场址/地理/时期；分配；废水路线；上游数据集和代理清单 |
| required_quality_disclosure | 记录覆盖；计量表和衡器校准；时间、地理和技术代表性；分配驱动因素和核对；缺少的二级数据集；未解决 UUID；处理去向；直接排放和废水检测方法 |
| update_trigger | 配方或主要配料基础变化；保藏路线或包装重新设计；实质供应商或能源系统变化；处理路线变化；新来源支持的范围证据；实质计量或分配变化；Tiangong 身份解决；法规或 CPC 范围变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | `official_guidance` | 联合国统计司，《产品总分类（CPC）3.0 版解释性说明》，子类 23997，2025。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-20） | 精确纳入与排除边界；代表产品身份；符合条件的形式和主要配料基础 |
| `eu-pef-2021` | `official_guidance` | 欧盟委员会，关于使用环境足迹方法的 Commission Recommendation (EU) 2021/2279，合并文本及附件 I。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-08-20） | 生命周期边界、企业特定数据、完整性、数据质量、分配层级、代理和披露规则 |
| `jrc-fdm-bref-2019` | `official_guidance` | Giner Santonja 等，《食品、饮料和乳品工业最佳可行技术参考文件》，JRC118627，EUR 29978 EN，2019。https://doi.org/10.2760/243911（检索于 2026-08-20） | 食品制造过程用水、电力与热、包装、清洁、制冷、固体产出、直接空气排放、废水处理和单独 COD/BOD5/TSS/TN/TP 监测 |
| `codex-cxc-1-1969` | `standard` | FAO/WHO 食品法典委员会，《食品卫生通则》，CXC 1-1969，2020 和 2022 年修订。https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/（检索于 2026-08-20） | 食品过程路线记录、水质、时间温度控制、包装卫生、可追溯性和与 HACCP 一致的质量证据 |
| `codex-cxc-8-1976` | `standard` | FAO/WHO 食品法典委员会，《速冻食品加工和处理操作规范》，CXC 8-1976，2008 年修订。https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/（检索于 2026-08-20） | 冷冻路线预处理、热处理、冷却、速冻、包装、冷藏、温度监测和留存记录 |
| `schmidt-rivera-2019` | `literature` | Schmidt Rivera, X. C. 和 Azapagic, A.（2019），“Life cycle environmental impacts of ready-made meals considering different cuisines and recipes”，*Science of the Total Environment* 660:1168–1181。https://doi.org/10.1016/j.scitotenv.2019.01.069；开放原文：https://bura.brunel.ac.uk/bitstream/2438/17849/1/FullText.pdf（检索于 2026-08-20） | 多配方预制餐食过程分解、配料和包装清单、烹调与包装路线、基于制造商账单和产出的公用工程数据、共用能源分配背景；不作为范围证据 |
