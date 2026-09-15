---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.soups-and-broths-and-preparations-thereof
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 汤、肉汤及其制品

## 1. 范围与适用性

本 PCR 适用于成品汤、肉汤、bouillon、consommé 以及用于制成汤或肉汤的制品之制造前景数据包。范围包括即食、冷藏、冷冻产品，以液体、半液体或膏状销售的浓缩产品，以及粉末、颗粒、片剂、块状或类似形态的脱水产品。产品可含肉类、禽类、鱼类、蔬菜、豆类、谷物、油脂、调味料、提取物、水解物或其他配方原料。

类别边界覆盖 CPC 3.0 子类 23992 的完整语义。Codex CXS 117-1981 为肉汤和 consommé 的即食、浓缩、冷冻及脱水形态提供权威细节，但不得据此把更宽的 CPC 类别缩窄为仅清澈肉汤。只要主要以汤或肉汤销售，含固形配料或泥蓉的汤仍在范围内。

范围不包括另行分类的婴幼儿用或均质复合制品、酱汁与混合调味品、主要产品身份并非汤或肉汤的预制菜肴、单独销售的肉类或蔬菜提取物，以及不作为汤、肉汤或其制品销售的原料。使用独立销售原料进行的零售、餐饮或家庭烹饪不属于制造前景；除非所声明产品本身是汤制品且研究明确纳入使用阶段。

本 PCR 生成工厂门制造数据集。原料、包装、燃料、电力、供水与处理服务的上游生产由关联上游数据集表示。配送、零售、消费者制备与食用及生命周期末端不属于前景，可在下游生命周期模型中加入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.soups-and-broths-and-preparations-thereof |
| classification_refs | CPC 3.0: 23992, Soups and broths and preparations thereof（精确映射） |
| covered_products | 即食、冷藏、冷冻、浓缩、液体、半液体、膏状、干燥、粉末、颗粒、片剂、块状或类似市场形态的成品汤、肉汤及其制品 |
| excluded_products | 婴幼儿用或均质复合制品；酱汁与混合调味品；主要身份并非汤或肉汤的预制菜肴；单独销售的提取物；不作为汤、肉汤或其制品销售的原料 |
| representative_product | 以声明的销售形态在工厂门交付的包装汤或肉汤；类别流仅代表 CPC 23992 层级，不预设特定配方、浓度、保藏路线或包装 |
| production_route | 原料接收与制备；配料、提取、烹煮或混合；按路线进行浓缩、脱水、热处理、冷藏或冷冻；灌装、密封与包装；清洗、公用工程与残余物管理 |
| market_state | 处于所声明销售物理形态、浓度、保藏状态和包装配置的工厂门成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以声明的销售形态制造并在工厂门提供汤、肉汤或其制品 |
| How much | 1 kg 合格成品净质量，不含包装质量 |
| How well | 符合声明的配方、浓度或复原说明、物理形态、保藏条件、质量规格和适用食品要求 |
| How long or cycle | 一个完整生产与包装周期；声明的货架期作为元数据，在储存损失或包装影响货架期属于范围时于下游建模 |
| reference_flow_link | `filling_and_packaging` 的参考产品输出，归一化为工厂门 1 kg 合格净产品 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 按销售形态计的成品净质量 |
| 参考产品流 | 汤和肉汤及其制品 `6cd389be-4748-4401-96a4-ecdc07c041a3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品身份或配方族；液体、浓缩、冷冻、脱水、块状、粉末或其他市场形态；净质量；相关时的固形物或水分基准；相关时的浓缩倍数或制备/复原说明；主要原料基础；保藏路线；储存条件；包装形式和包装质量；地理；技术；生产期间 |

类别级参考流覆盖 CPC 23992 的完整身份，但不得静默替代更精确的真实产品流。当已审查的公开 Tiangong 产品流更精确地匹配实际汤或肉汤形态及产品身份时，应改用该流，保留 CPC 23992 分类语境，并在该特定流没有经审查替代要求时维持同一质量属性和单位基准。无论采用哪一流，实际产品限定信息均为必需。

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。比较即食产品与浓缩或脱水产品时，还必须按声明说明报告制得成品的质量或份数；不同形态不得仅按 1 kg 销售质量视为功能等同。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部清单结果归一化为工厂门 1 kg 按销售形态计的合格净产品。参考数量不含一级、二级和三级包装质量，包装须单独报告。 |
| `ingredient_mass_basis` | 配方原料、工艺用水、中间体及产品损失 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录接收湿质量；当干物质、水分、浓度或固形物含量影响质量平衡或可比性时予以披露。 |
| `reconstitution_basis` | 浓缩或脱水产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 制得产品/kg 销售产品 | 依据制造商声明的制备或复原说明计算制得产品质量。保留按 1 kg 销售产品的参考结果，并将制得产品换算作为附加元数据报告。 |
| `packaging_mass_separation` | 包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按每 1 kg 净产品分别记录各包装材料与组件质量；不得计入产品净质量。 |
| `energy_carrier_consistency` | 电力、燃料、蒸汽、加热、冷却、制冷、压缩空气及真空 | 所选真实流的能量或服务属性 | kWh、MJ、kg 蒸汽或有记录的服务单位 | 保留所选上游流的单位和属性，记录换算及热值基准；热能和电能不得不加区分地合并。 |
| `water_use_and_discharge` | 配料水、工艺水、清洗水、冷却水及废水 | 所选真实流的体积或质量属性 | m3 或 kg | 区分产品内水与洗涤、清洗、冷却、锅炉及其他技术用水；区分取水、循环、消耗与排放，并记录密度换算。 |

## 5. 系统边界

前景始于配方原料、水、包装、能源载体及其他供应品进入制造场址，终于合格产品完成灌装、密封和包装并可离开工厂门。纳入现场直接操作、产品和材料损失、清洗消毒、共享公用工程、现场废水或残余物处理，以及可归属于产品的直接排放。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原料和汤或肉汤中间制品以已声明的供应商身份、质量、重要时的水分或固形物基准、地理及上游数据集引用进入工厂；包装与公用工程作为独立投入接收 |
| starting_condition_role | 前景制造数据集的工厂门投入起始条件 |
| product_classification_scope | 对应 CPC 3.0 子类 23992 完整语义的成品汤、肉汤及其制品，不依赖特定配方或物理形态 |
| recursive_input_rule | 购入投入若本身属于汤、肉汤或其制品，应按实际接收形态和数量仅记录一次技术系统产品投入；不得在当前前景系统内递归重建其制造 |
| upstream_dataset_requirement | 每项购入原料、同类别中间体、包装材料、燃料、电力供应、供水与场外处理服务均需匹配地理和技术的上游数据集，或披露代理 |
| disclosure | 声明产品形态、配方族、浓度或复原基准、保藏路线、储存条件、包装配置、设施地理、生产期间、过程纳入与排除，以及全部代理和分配选择 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景制造 | 纳入原料接收与制备、配料或烹煮、路线特定稳定化、灌装包装、清洗、公用工程、直接排放、产品损失及现场废物或废水处理，直至工厂门。 | eu-jrc-fdm-bref-2019; eu-pef-2021-2279 |
| `boundary_upstream_links` | 购入投入与服务 | 通过关联上游数据集表示购入原料、包装、能源、水及场外处理的生产，不得静默排除这些负荷。 | eu-pef-2021-2279 |
| `boundary_route_conditionals` | 浓缩、脱水、冷藏、冷冻、热保藏或无菌加工 | 纳入声明市场形态和保藏路线实际使用的全部操作，并明确标示不适用路线过程。 | fao-who-cxs-117-1981; eu-jrc-fdm-bref-2019 |
| `boundary_downstream_separation` | 配送、零售、使用与生命周期末端 | 从本工厂门数据集中排除下游阶段；仅在明确标识的生命周期模型中加入，并在相关时纳入复原能耗和水、储存损失及包装生命周期末端。 | eu-pef-2021-2279 |
| `boundary_no_unreported_cutoff` | 全部前景流 | 记录所有已知材料、水、能源、产品、共产品、废物和直接基本流。任何省略均须量化重要性并披露；本类别不授予默认截断。 | eu-pef-2021-2279 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `ingredient_preparation` | 原料接收、储存、制备与配批 | required | 始终 | 按实际情况接收、储存、清洗、修整、切分、研磨、溶解、解冻并计量配方材料 | kg 制得配方料或已配批原料 |
| `cooking_and_blending` | 提取、烹煮、配料与混合 | required | 始终；选择实际使用操作 | 由制备原料和配料水制得汤或肉汤配方基料 | kg 烹煮或混合散装基料 |
| `route_stabilization` | 浓缩、脱水、热稳定、冷藏或冷冻 | conditional | 纳入形成声明市场形态和保藏状态所用的每项稳定化操作 | 建立产品浓度、水分、微生物稳定性与储存状态 | kg 稳定化散装产品 |
| `filling_and_packaging` | 灌装、密封、检验与包装 | required | 始终 | 生成工厂门合格包装产品 | 1 kg 合格成品净质量 |
| `cleaning_utilities_and_residues` | 清洗、共享公用工程、废水与残余物管理 | required | 始终；尽可能拆分重要跨过程服务 | 提供清洗和公用工程并记录场址废物及直接排放 | 分配至 1 kg 合格成品净质量的服务与残余物 |

### 过程：原料接收、储存、制备与配批（`ingredient_preparation`）

#### 输入

##### 产品流

###### 接收的配方原料（`recipe_ingredients`）

按实际产品身份和接收质量记录每项原料，包括肉类、禽类、鱼类、蔬菜、豆类、谷物、淀粉、油脂、盐、调味料、提取物、水解物、添加剂及使用的同类别返还中间体。不得用单一通用食品投入替代配方。

- 选定流：每项实际原料对应的产品特定 Tiangong 流；仅在没有充分真实流时使用有记录的代理
- 流属性/单位：Mass / kg
- 数量规则：经退货和库存变化校正的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 离开 `ingredient_preparation` 的制得配方料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_batch_materials`
- 来源：unsd-cpc-3-0-explanatory-notes-2025; fao-who-cxs-117-1981

###### 原料与制备用水（`ingredient_preparation_water`）

记录掺入配方或用于洗涤、浸泡、溶解、解冻和输送原料的饮用水。掺入产品的水与制备后排放水分开记录。

- 选定流：与设施供水匹配的饮用水或工艺水流
- 流属性/单位：Volume / m3 或 Mass / kg
- 数量规则：供应至原料制备的计量或批记录水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开 `ingredient_preparation` 的制得配方料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_water`
- 来源：fao-who-cxs-117-1981; eu-jrc-fdm-bref-2019

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 制备原料或配方料（`prepared_formulation`）

记录转送至烹煮或混合的实测质量；在闭合产品质量平衡所需时记录水分或固形物含量。

- 选定流：产品特定的制得汤或肉汤配方中间体
- 流属性/单位：Mass / kg
- 数量规则：由批次、罐体或管线记录取得的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 离开 `ingredient_preparation` 的制得配方料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_batch_materials`
- 来源：eu-jrc-fdm-bref-2019

##### 废物流

###### 蔬菜修整残余物（`ingredient_residue_vegetable`）

将蔬菜修整残余物按材料身份和实际去向分开，在回收或处理前记录。

- 选定流：蔬菜制备残余或废物流
- 流属性/单位：Mass / kg
- 数量规则：实测残余量，或由有记录的原料制备质量平衡求差
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开 `ingredient_preparation` 的制备配方
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_batch_materials`
- 来源：eu-jrc-fdm-bref-2019

###### 动物组织制备残余物（`ingredient_residue_animal`）

将动物组织制备残余物按材料身份和实际去向分开，在回收或处理前记录。

- 选定流：动物组织食品残余或废物流
- 流属性/单位：Mass / kg
- 数量规则：实测残余量，或由有记录的原料制备质量平衡求差
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开 `ingredient_preparation` 的制备配方
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_batch_materials`
- 来源：eu-jrc-fdm-bref-2019

###### 筛余与过滤固体（`ingredient_residue_screenings`）

将筛余与过滤固体按材料身份和实际去向分开，在回收或处理前记录。

- 选定流：食品加工筛余或过滤残余废物流
- 流属性/单位：Mass / kg
- 数量规则：实测残余量，或由有记录的原料制备质量平衡求差
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开 `ingredient_preparation` 的制备配方
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_batch_materials`
- 来源：eu-jrc-fdm-bref-2019

###### 洒漏或不合格原料（`ingredient_residue_offspec`）

将洒漏或不合格原料按材料身份和实际去向分开，在回收或处理前记录。

- 选定流：原料特定的食品残余废物流
- 流属性/单位：Mass / kg
- 数量规则：实测残余量，或由有记录的原料制备质量平衡求差
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开 `ingredient_preparation` 的制备配方
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_batch_materials`
- 来源：eu-jrc-fdm-bref-2019

###### 原料制备废水（`ingredient_preparation_wastewater`）

记录洗涤、浸泡、解冻与制备产生且进入现场处理前的废水；可得时分开记录高浓度流。

- 选定流：与接收处理路线匹配的废水流
- 流属性/单位：Volume / m3 或 Mass / kg
- 数量规则：计量排放或原料制备水量平衡计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开 `ingredient_preparation` 的制得配方料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_water`
- 来源：eu-jrc-fdm-bref-2019

##### 基本流

### 过程：提取、烹煮、配料与混合（`cooking_and_blending`）

#### 输入

##### 产品流

###### 制得配方料投入（`prepared_formulation_input`）

记录进入烹煮、提取、溶解或混合的实际制备原料或配方质量。

- 选定流：与 `prepared_formulation` 相同的产品特定中间体
- 流属性/单位：Mass / kg
- 数量规则：进入烹煮或混合线的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_batch`
- 来源：fao-who-cxs-117-1981; eu-jrc-fdm-bref-2019

###### 烹煮或混合时加入的配料水（`cooking_recipe_water`）

记录提取、烹煮、稀释、溶解或配料时有意掺入的水，并与清洗水和公用工程水分开。

- 选定流：与设施供水匹配的饮用水或工艺水流
- 流属性/单位：Volume / m3 或 Mass / kg
- 数量规则：计量或批记录的加水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_batch`
- 来源：fao-who-cxs-117-1981; eu-jrc-fdm-bref-2019

###### 烹煮与混合外购电力（`cooking_electricity`）

记录提取、烹煮、混合、均质和泵送设备使用的电网或供应商电力。

- 选定流：与设施电压等级和地域匹配的外购电力供应
- 流属性/单位：Energy / kWh
- 数量规则：专用仪表读数，或由实测设备需求和运行时间分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_energy`
- 来源：eu-jrc-fdm-bref-2019

###### 烹煮与混合外购蒸汽（`cooking_steam`）

将外购蒸汽与现场燃烧燃料分开记录，并保留压力、温度和冷凝水回流条件。

- 选定流：与声明蒸汽条件匹配的外购蒸汽供应
- 流属性/单位：Energy 或 Mass / MJ 或 kg 蒸汽
- 数量规则：按声明条件和有记录的冷凝水回流修正的蒸汽仪表读数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_energy`
- 来源：eu-jrc-fdm-bref-2019

###### 烹煮与混合外购热水（`cooking_hot_water`）

记录作为热载体的外购热水；不得与配方水或清洗水合并。

- 选定流：与声明供回水温度匹配的外购热水供应
- 流属性/单位：Energy / MJ
- 数量规则：热量表读数，或实测质量乘以有记录的温差和比热容
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_energy`
- 来源：eu-jrc-fdm-bref-2019

###### 烹煮与混合天然气（`cooking_natural_gas`）

将烹煮与混合设备燃烧的天然气与其他燃料分开记录。

- 选定流：与设施地域和压力等级匹配的天然气供应
- 流属性/单位：Energy 或 Volume / MJ（低位热值）或 Nm3
- 数量规则：燃料仪表读数，并记录低位热值和标准状态换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_energy`
- 来源：eu-jrc-fdm-bref-2019

###### 烹煮与混合液化石油气（`cooking_lpg`）

将烹煮与混合设备燃烧的液化石油气作为独立载体记录。

- 选定流：与设施市场匹配的液化石油气供应
- 流属性/单位：Mass 或 Energy / kg 或 MJ（低位热值）
- 数量规则：实测交付量或储罐库存平衡，并记录低位热值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_energy`
- 来源：eu-jrc-fdm-bref-2019

###### 烹煮与混合柴油（`cooking_diesel`）

将纳入边界、服务于烹煮和混合的热力或移动设备所用柴油与其他燃料分开记录。

- 选定流：与设施市场匹配的柴油供应
- 流属性/单位：Mass 或 Energy / kg 或 MJ（低位热值）
- 数量规则：实测领用量或储罐库存平衡，并记录密度和低位热值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_energy`
- 来源：eu-jrc-fdm-bref-2019

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 烹煮或混合的汤/肉汤基料（`bulk_soup_base`）

记录转往稳定化或直接灌装的散装基料实测质量及声明的固形物或水分状态。

- 选定流：产品特定的散装汤、肉汤或制品中间体
- 流属性/单位：Mass / kg
- 数量规则：烹煮或混合后合格产品的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_batch`
- 来源：fao-who-cxs-117-1981

##### 废物流

###### 烹煮或提取骨残余（`cooking_residue_bones`）

将烹煮或提取骨残余按实际材料身份和去向分开，在回收或处理前记录。

- 选定流：骨类食品残余废物流
- 流属性/单位：Mass / kg
- 数量规则：实测残余量，或由有记录的烹煮批次质量平衡求差
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_batch`
- 来源：eu-jrc-fdm-bref-2019

###### 废蔬菜与原料固体（`cooking_residue_spent_solids`）

将废蔬菜与原料固体按实际材料身份和去向分开，在回收或处理前记录。

- 选定流：与主要材料匹配的废食品固体残余流
- 流属性/单位：Mass / kg
- 数量规则：实测残余量，或由有记录的烹煮批次质量平衡求差
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_batch`
- 来源：eu-jrc-fdm-bref-2019

###### 烹煮过滤残余（`cooking_residue_filter_solids`）

将烹煮过滤残余按实际材料身份和去向分开，在回收或处理前记录。

- 选定流：食品加工过滤残余废物流
- 流属性/单位：Mass / kg
- 数量规则：实测残余量，或由有记录的烹煮批次质量平衡求差
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_batch`
- 来源：eu-jrc-fdm-bref-2019

###### 不合格散装汤或肉汤（`cooking_residue_offspec_product`）

将不合格散装汤或肉汤按实际材料身份和去向分开，在回收或处理前记录。

- 选定流：汤或肉汤产品残余废物流
- 流属性/单位：Mass / kg
- 数量规则：实测残余量，或由有记录的烹煮批次质量平衡求差
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_batch`
- 来源：eu-jrc-fdm-bref-2019

##### 基本流

###### 烹煮化石二氧化碳（`cooking_emission_co2_fossil`）

记录纳入烹煮燃料燃烧直接释放的化石 CO2；燃料供应上游排放保留在燃料数据集中。

- 选定流：化石二氧化碳基本流
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或采集燃料用量乘以有记录的污染物特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_emissions`
- 来源：eu-jrc-fdm-bref-2019

###### 烹煮生物源二氧化碳（`cooking_emission_co2_biogenic`）

记录纳入烹煮燃料燃烧直接释放的生物源 CO2；燃料供应上游排放保留在燃料数据集中。

- 选定流：生物源二氧化碳基本流
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或采集燃料用量乘以有记录的污染物特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_emissions`
- 来源：eu-jrc-fdm-bref-2019

###### 烹煮燃烧甲烷（`cooking_emission_ch4`）

记录纳入烹煮燃料燃烧直接释放的CH4；燃料供应上游排放保留在燃料数据集中。

- 选定流：排放至空气的甲烷基本流
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或采集燃料用量乘以有记录的污染物特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_emissions`
- 来源：eu-jrc-fdm-bref-2019

###### 烹煮燃烧氧化亚氮（`cooking_emission_n2o`）

记录纳入烹煮燃料燃烧直接释放的N2O；燃料供应上游排放保留在燃料数据集中。

- 选定流：排放至空气的氧化亚氮基本流
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或采集燃料用量乘以有记录的污染物特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_emissions`
- 来源：eu-jrc-fdm-bref-2019

###### 烹煮燃烧氮氧化物（`cooking_emission_nox`）

记录纳入烹煮燃料燃烧直接释放的NOx；燃料供应上游排放保留在燃料数据集中。

- 选定流：排放至空气的氮氧化物基本流
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或采集燃料用量乘以有记录的污染物特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_emissions`
- 来源：eu-jrc-fdm-bref-2019

###### 烹煮燃烧二氧化硫（`cooking_emission_so2`）

记录纳入烹煮燃料燃烧直接释放的SO2；燃料供应上游排放保留在燃料数据集中。

- 选定流：排放至空气的二氧化硫基本流
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或采集燃料用量乘以有记录的污染物特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_emissions`
- 来源：eu-jrc-fdm-bref-2019

###### 烹煮燃烧颗粒物（`cooking_emission_pm`）

记录纳入烹煮燃料燃烧直接释放的颗粒物；燃料供应上游排放保留在燃料数据集中。

- 选定流：与实测粒径级别匹配的排放至空气颗粒物基本流
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或采集燃料用量乘以有记录的污染物特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 散装汤或肉汤基料输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_emissions`
- 来源：eu-jrc-fdm-bref-2019

### 过程：浓缩、脱水、热稳定、冷藏或冷冻（`route_stabilization`）

#### 输入

##### 产品流

###### 稳定化用散装汤或肉汤基料（`stabilization_bulk_input`）

记录进入实际浓缩、脱水、巴氏杀菌、灭菌、无菌、冷藏或冷冻步骤的散装产品；跳过声明路线未采用的操作。

- 选定流：与 `bulk_soup_base` 相同的产品特定中间体
- 流属性/单位：Mass / kg
- 数量规则：进入每项纳入稳定化操作的实测投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stabilization_batch`
- 来源：fao-who-cxs-117-1981; eu-jrc-fdm-bref-2019

###### 稳定化电力（`stabilization_electricity`）

记录浓缩、脱水、热处理、冷藏或冷冻设备使用的电力。

- 选定流：与设施电压等级和地域匹配的外购电力供应
- 流属性/单位：Energy / kWh
- 数量规则：路线分表读数，或由实测设备需求和运行时间分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization_energy`
- 来源：eu-jrc-fdm-bref-2019

###### 稳定化蒸汽（`stabilization_steam`）

记录蒸发器、干燥机、巴氏杀菌、灭菌或后处理设备使用的外购蒸汽。

- 选定流：与声明蒸汽条件匹配的外购蒸汽供应
- 流属性/单位：Energy 或 Mass / MJ 或 kg 蒸汽
- 数量规则：按声明条件和冷凝水回流修正的蒸汽仪表读数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization_energy`
- 来源：eu-jrc-fdm-bref-2019

###### 稳定化天然气（`stabilization_natural_gas`）

将纳入稳定化设备燃烧的天然气与其他燃料和外购热量分开记录。

- 选定流：与设施地域和压力等级匹配的天然气供应
- 流属性/单位：Energy 或 Volume / MJ（低位热值）或 Nm3
- 数量规则：燃料仪表读数，并记录低位热值和标准状态换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization_energy`
- 来源：eu-jrc-fdm-bref-2019

###### 稳定化冷却补水（`stabilization_cooling_water`）

记录供给稳定化路线的新鲜冷却补水；循环水单独跟踪，不得重复计量。

- 选定流：与设施水源匹配的过程水供应
- 流属性/单位：Volume / m3
- 数量规则：分开循环量和排污量后的补水仪表读数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization_energy`
- 来源：eu-jrc-fdm-bref-2019

###### 氨制冷剂补充量（`stabilization_r717_makeup`）

记录为弥补纳入冷藏或冷冻系统损失而补充的 R717（氨）制冷剂。

- 选定流：氨（R717）制冷剂产品流
- 流属性/单位：Mass / kg
- 数量规则：维修日志补充质量按所代表路线分配；不得把循环充注量作为消耗量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization_energy`
- 来源：eu-jrc-fdm-bref-2019

###### R404A 制冷剂补充量（`stabilization_r404a_makeup`）

记录为弥补纳入冷藏或冷冻系统损失而补充的 R404A 制冷剂。

- 选定流：R404A 制冷剂产品流
- 流属性/单位：Mass / kg
- 数量规则：维修日志补充质量按所代表路线分配；不得把循环充注量作为消耗量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization_energy`
- 来源：eu-jrc-fdm-bref-2019

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 稳定化散装产品（`stabilized_bulk_product`）

记录放行至灌装的产品质量、物理形态、浓度或固形物含量、相关时的温度或冻结状态及保藏路线。

- 选定流：产品特定的稳定化汤、肉汤或制品中间体
- 流属性/单位：Mass / kg
- 数量规则：由稳定化转至灌装的实测合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stabilization_batch`
- 来源：fao-who-cxs-117-1981

##### 废物流

###### 稳定化冷凝液（`stabilization_condensate`）

将稳定化冷凝液按回收或处理去向分开，并在任何净额处理前记录。

- 选定流：过程冷凝液流
- 流属性/单位：Volume / m3
- 数量规则：任何回收或排放前的实测冷凝液量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization_residues`
- 来源：eu-jrc-fdm-bref-2019

###### 稳定化废水（`stabilization_wastewater`）

将稳定化废水按回收或处理去向分开，并在任何净额处理前记录。

- 选定流：与接收处理路线匹配的废水流
- 流属性/单位：Volume / m3
- 数量规则：分开冷凝液后的计量排放量或稳定化水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization_residues`
- 来源：eu-jrc-fdm-bref-2019

###### 稳定化不合格产品（`stabilization_rejected_product`）

将稳定化不合格产品按回收或处理去向分开，并在任何净额处理前记录。

- 选定流：汤或肉汤产品残余废物流
- 流属性/单位：Mass / kg
- 数量规则：返工、回收或处理前的实测不合格产品量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization_residues`
- 来源：eu-jrc-fdm-bref-2019

##### 基本流

###### 稳定化化石二氧化碳（`stabilization_emission_co2_fossil`）

记录纳入稳定化设备直接释放的化石 CO2；载体供应上游排放保留在载体数据集中。

- 选定流：化石二氧化碳基本流
- 流属性/单位：Mass / kg
- 数量规则：实测释放，或采集活动量乘以有记录的物质特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization_residues`
- 来源：eu-jrc-fdm-bref-2019

###### 稳定化生物源二氧化碳（`stabilization_emission_co2_biogenic`）

记录纳入稳定化设备直接释放的生物源 CO2；载体供应上游排放保留在载体数据集中。

- 选定流：生物源二氧化碳基本流
- 流属性/单位：Mass / kg
- 数量规则：实测释放，或采集活动量乘以有记录的物质特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization_residues`
- 来源：eu-jrc-fdm-bref-2019

###### 稳定化燃烧甲烷（`stabilization_emission_ch4`）

记录纳入稳定化设备直接释放的CH4；载体供应上游排放保留在载体数据集中。

- 选定流：排放至空气的甲烷基本流
- 流属性/单位：Mass / kg
- 数量规则：实测释放，或采集活动量乘以有记录的物质特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization_residues`
- 来源：eu-jrc-fdm-bref-2019

###### 稳定化燃烧氧化亚氮（`stabilization_emission_n2o`）

记录纳入稳定化设备直接释放的N2O；载体供应上游排放保留在载体数据集中。

- 选定流：排放至空气的氧化亚氮基本流
- 流属性/单位：Mass / kg
- 数量规则：实测释放，或采集活动量乘以有记录的物质特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization_residues`
- 来源：eu-jrc-fdm-bref-2019

###### 稳定化燃烧氮氧化物（`stabilization_emission_nox`）

记录纳入稳定化设备直接释放的NOx；载体供应上游排放保留在载体数据集中。

- 选定流：排放至空气的氮氧化物基本流
- 流属性/单位：Mass / kg
- 数量规则：实测释放，或采集活动量乘以有记录的物质特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization_residues`
- 来源：eu-jrc-fdm-bref-2019

###### 稳定化燃烧二氧化硫（`stabilization_emission_so2`）

记录纳入稳定化设备直接释放的SO2；载体供应上游排放保留在载体数据集中。

- 选定流：排放至空气的二氧化硫基本流
- 流属性/单位：Mass / kg
- 数量规则：实测释放，或采集活动量乘以有记录的物质特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization_residues`
- 来源：eu-jrc-fdm-bref-2019

###### 稳定化燃烧颗粒物（`stabilization_emission_pm`）

记录纳入稳定化设备直接释放的颗粒物；载体供应上游排放保留在载体数据集中。

- 选定流：与实测粒径级别匹配的排放至空气颗粒物基本流
- 流属性/单位：Mass / kg
- 数量规则：实测释放，或采集活动量乘以有记录的物质特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization_residues`
- 来源：eu-jrc-fdm-bref-2019

###### 氨制冷剂排放（`stabilization_emission_r717`）

记录纳入稳定化设备直接释放的R717 制冷剂；载体供应上游排放保留在载体数据集中。

- 选定流：排放至空气的氨（R717）基本流
- 流属性/单位：Mass / kg
- 数量规则：实测释放，或采集活动量乘以有记录的物质特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization_residues`
- 来源：eu-jrc-fdm-bref-2019

###### R404A 制冷剂排放（`stabilization_emission_r404a`）

记录纳入稳定化设备直接释放的R404A 制冷剂；载体供应上游排放保留在载体数据集中。

- 选定流：排放至空气的 R404A 基本流
- 流属性/单位：Mass / kg
- 数量规则：实测释放，或采集活动量乘以有记录的物质特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 稳定化散装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization_residues`
- 来源：eu-jrc-fdm-bref-2019

### 过程：灌装、密封、检验与包装（`filling_and_packaging`）

#### 输入

##### 产品流

###### 供应至灌装的散装产品（`filling_bulk_input`）

记录进入灌装的实测合格散装产品质量，无论其绕过单独稳定化步骤或从该步骤进入。

- 选定流：产品特定的散装汤、肉汤或制品中间体
- 流属性/单位：Mass / kg
- 数量规则：进入灌装机的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product`
- 来源：eu-jrc-fdm-bref-2019

###### 镀锡钢或钢制包装（`packaging_steel`）

记录镀锡钢或其他钢制罐、盖和封口；铝组件不得计入本行。

- 选定流：镀锡钢或钢制包装产品流
- 流属性/单位：Mass / kg
- 数量规则：经核实的钢组件质量乘以消耗数量，并包括实测开机和不合格损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### 铝制包装（`packaging_aluminium`）

将铝罐、铝盖、铝箔或复合层与钢和塑料分开记录。

- 选定流：铝制包装产品流
- 流属性/单位：Mass / kg
- 数量规则：经核实的铝组件质量乘以消耗数量，并包括实测开机和不合格损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### 玻璃包装（`packaging_glass`）

记录玻璃罐或瓶，不得合并其金属、塑料或纸制封口和标签。

- 选定流：容器玻璃包装产品流
- 流属性/单位：Mass / kg
- 数量规则：经核实的玻璃容器质量乘以消耗数量，并包括实测开机和不合格损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### PET 包装（`packaging_pet`）

将聚对苯二甲酸乙二醇酯容器、托盘或复合层作为独立聚合物行记录。

- 选定流：聚对苯二甲酸乙二醇酯包装产品流
- 流属性/单位：Mass / kg
- 数量规则：经核实的 PET 组件质量乘以消耗数量，并包括实测开机和不合格损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### 聚丙烯包装（`packaging_pp`）

将聚丙烯杯、托盘、封口、薄膜或复合层作为独立聚合物行记录。

- 选定流：聚丙烯包装产品流
- 流属性/单位：Mass / kg
- 数量规则：经核实的 PP 组件质量乘以消耗数量，并包括实测开机和不合格损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### 聚乙烯包装（`packaging_pe`）

将聚乙烯薄膜、软袋、封口或复合层与 PET 和聚丙烯分开记录。

- 选定流：与声明牌号匹配的聚乙烯包装产品流
- 流属性/单位：Mass / kg
- 数量规则：经核实的 PE 组件质量乘以消耗数量，并包括实测开机和不合格损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### 纸板包装（`packaging_paperboard`）

将折叠纸盒、套筒和纸板组件与瓦楞外箱和标签分开记录。

- 选定流：纸板包装产品流
- 流属性/单位：Mass / kg
- 数量规则：经核实的纸板组件质量乘以消耗数量，并包括实测开机和不合格损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### 瓦楞纸板包装（`packaging_corrugated_board`）

将瓦楞运输箱、隔板和垫片与纸板纸盒分开记录。

- 选定流：瓦楞纸板包装产品流
- 流属性/单位：Mass / kg
- 数量规则：经核实的瓦楞组件质量乘以消耗数量，并包括实测开机和不合格损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### 纸标签（`packaging_paper_label`）

将纸标签与容器、纸盒和塑料标签分开记录。

- 选定流：纸标签产品流
- 流属性/单位：Mass / kg
- 数量规则：经核实的标签质量乘以消耗数量，并包括实测开机和不合格损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### 木托盘（`packaging_wood_pallet`）

记录木托盘的消耗或分配份额，并披露复用周转次数和损失。

- 选定流：木托盘产品流
- 流属性/单位：Mass 或 Item / kg 或托盘
- 数量规则：托盘质量或件数乘以有记录的损失或周转分配份额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### 灌装与包装电力（`packaging_electricity`）

记录灌装、卷封、旋盖、检验、喷码、输送和包装设备使用的电力。

- 选定流：与设施电压等级和地域匹配的外购电力供应
- 流属性/单位：Energy / kWh
- 数量规则：生产线仪表读数，或由实测需求和运行时间分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_energy`
- 来源：eu-jrc-fdm-bref-2019

###### 灌后处理蒸汽（`packaging_steam`）

将杀菌釜或其他灌后热处理所用外购蒸汽与生产线电力分开记录。

- 选定流：与声明蒸汽条件匹配的外购蒸汽供应
- 流属性/单位：Energy 或 Mass / MJ 或 kg 蒸汽
- 数量规则：按声明条件和冷凝水回流修正的蒸汽仪表读数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_energy`
- 来源：eu-jrc-fdm-bref-2019

###### 灌装线冷却补水（`packaging_cooling_water`）

记录灌装或杀菌后使用的新鲜冷却补水，排除循环回路内重复计量的水。

- 选定流：与设施水源匹配的过程水供应
- 流属性/单位：Volume / m3
- 数量规则：分开循环量和排污量后的补水仪表读数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_energy`
- 来源：eu-jrc-fdm-bref-2019

###### 灌后处理天然气（`packaging_natural_gas`）

记录灌装线或灌后处理专用设备燃烧的天然气。

- 选定流：与设施地域和压力等级匹配的天然气供应
- 流属性/单位：Energy 或 Volume / MJ（低位热值）或 Nm3
- 数量规则：燃料仪表读数，并记录低位热值和标准状态换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_energy`
- 来源：eu-jrc-fdm-bref-2019

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格汤、肉汤或其制品（`finished_product`）

本流为定量参考。仅记录声明销售形态的合格净产品；除非存在经审查且更特定的公开 Tiangong 产品流，否则使用类别级参考 UUID。

- 选定流：汤和肉汤及其制品 `6cd389be-4748-4401-96a4-ecdc07c041a3`，或按第 3 节替换规则使用经审查的更特定真实产品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰为 1 kg 合格成品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：工厂门 1 kg 按销售形态计的成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_final_product`
- 来源：unsd-cpc-3-0-explanatory-notes-2025

##### 废物流

###### 产品不合格品与灌装损失（`filling_product_losses`）

记录开机、换线、过量灌装、不足灌装、洒漏、封口失败、检验不合格及返还散装产品数量和实际去向。

- 选定流：产品特定的食品残余物或废物流
- 流属性/单位：Mass / kg
- 数量规则：任何回收抵扣前的实测不合格和损失质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product`
- 来源：eu-jrc-fdm-bref-2019

###### 钢制包装废物（`packaging_waste_steel`）

将破损、裁切、错印、未密封或其他不合格的钢制包装废物与其他包装材料分开，并按处理去向记录。

- 选定流：钢制包装废物流
- 流属性/单位：Mass / kg
- 数量规则：该材料领用量减去合格产出中纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019

###### 铝制包装废物（`packaging_waste_aluminium`）

将破损、裁切、错印、未密封或其他不合格的铝制包装废物与其他包装材料分开，并按处理去向记录。

- 选定流：铝制包装废物流
- 流属性/单位：Mass / kg
- 数量规则：该材料领用量减去合格产出中纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019

###### 玻璃包装废物（`packaging_waste_glass`）

将破损、裁切、错印、未密封或其他不合格的玻璃包装废物与其他包装材料分开，并按处理去向记录。

- 选定流：废容器玻璃流
- 流属性/单位：Mass / kg
- 数量规则：该材料领用量减去合格产出中纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019

###### PET 包装废物（`packaging_waste_pet`）

将破损、裁切、错印、未密封或其他不合格的PET 包装废物与其他包装材料分开，并按处理去向记录。

- 选定流：废聚对苯二甲酸乙二醇酯包装流
- 流属性/单位：Mass / kg
- 数量规则：该材料领用量减去合格产出中纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019

###### 聚丙烯包装废物（`packaging_waste_pp`）

将破损、裁切、错印、未密封或其他不合格的聚丙烯包装废物与其他包装材料分开，并按处理去向记录。

- 选定流：废聚丙烯包装流
- 流属性/单位：Mass / kg
- 数量规则：该材料领用量减去合格产出中纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019

###### 聚乙烯包装废物（`packaging_waste_pe`）

将破损、裁切、错印、未密封或其他不合格的聚乙烯包装废物与其他包装材料分开，并按处理去向记录。

- 选定流：与声明牌号匹配的废聚乙烯包装流
- 流属性/单位：Mass / kg
- 数量规则：该材料领用量减去合格产出中纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019

###### 纸板包装废物（`packaging_waste_paperboard`）

将破损、裁切、错印、未密封或其他不合格的纸板包装废物与其他包装材料分开，并按处理去向记录。

- 选定流：废纸板包装流
- 流属性/单位：Mass / kg
- 数量规则：该材料领用量减去合格产出中纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019

###### 瓦楞纸板包装废物（`packaging_waste_corrugated_board`）

将破损、裁切、错印、未密封或其他不合格的瓦楞纸板包装废物与其他包装材料分开，并按处理去向记录。

- 选定流：废瓦楞纸板包装流
- 流属性/单位：Mass / kg
- 数量规则：该材料领用量减去合格产出中纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019

###### 纸标签废物（`packaging_waste_paper_label`）

将破损、裁切、错印、未密封或其他不合格的纸标签废物与其他包装材料分开，并按处理去向记录。

- 选定流：废纸标签流
- 流属性/单位：Mass / kg
- 数量规则：该材料领用量减去合格产出中纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019

###### 木托盘废物（`packaging_waste_wood_pallet`）

将破损、裁切、错印、未密封或其他不合格的木托盘废物与其他包装材料分开，并按处理去向记录。

- 选定流：废木托盘流
- 流属性/单位：Mass / kg
- 数量规则：该材料领用量减去合格产出中纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格包装产品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：eu-jrc-fdm-bref-2019

##### 基本流

### 过程：清洗、共享公用工程、废水与残余物管理（`cleaning_utilities_and_residues`）

#### 输入

##### 产品流

###### 清洗水（`cleaning_water`）

记录人工清洗、原位清洗和卫生消毒使用的新鲜水；回收和循环清洗液分开记录。

- 选定流：与设施水源匹配的过程水供应
- 流属性/单位：Volume / m3
- 数量规则：计量补水量，或经验证 CIP 配方用水量乘以完成循环数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_materials`
- 来源：eu-jrc-fdm-bref-2019

###### 氢氧化钠清洗剂（`cleaning_sodium_hydroxide`）

记录供应至清洗和 CIP 系统的氢氧化钠交付产品量及活性物质量。

- 选定流：与交付浓度匹配的氢氧化钠产品流
- 流属性/单位：Mass / kg
- 数量规则：加药记录或采购与库存平衡，并保留浓度换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_materials`
- 来源：eu-jrc-fdm-bref-2019

###### 硝酸清洗剂（`cleaning_nitric_acid`）

将供应至清洗和 CIP 系统的硝酸与其他酸分开记录。

- 选定流：与交付浓度匹配的硝酸产品流
- 流属性/单位：Mass / kg
- 数量规则：加药记录或采购与库存平衡，并保留浓度换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_materials`
- 来源：eu-jrc-fdm-bref-2019

###### 过氧乙酸消毒剂（`cleaning_peracetic_acid`）

将过氧乙酸消毒剂与洗涤剂、碱和其他消毒剂分开记录。

- 选定流：与交付浓度匹配的过氧乙酸产品流
- 流属性/单位：Mass / kg
- 数量规则：加药记录或采购与库存平衡，并保留浓度换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_materials`
- 来源：eu-jrc-fdm-bref-2019

###### 次氯酸钠消毒剂（`cleaning_sodium_hypochlorite`）

将次氯酸钠消毒剂与其他清洗化学品分开记录。

- 选定流：与交付浓度匹配的次氯酸钠产品流
- 流属性/单位：Mass / kg
- 数量规则：加药记录或采购与库存平衡，并保留有效氯换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_materials`
- 来源：eu-jrc-fdm-bref-2019

###### 剩余共享电力（`shared_electricity`）

场址与分表核对后，仅记录未直接归属其他过程的电力。

- 选定流：与设施电压等级和地域匹配的外购电力供应
- 流属性/单位：Energy / kWh
- 数量规则：采用有记录的因果物理驱动分配实测剩余电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_shared_utilities`
- 来源：eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### 剩余共享蒸汽（`shared_steam`）

仅记录未直接归属其他过程的外购蒸汽。

- 选定流：与声明蒸汽条件匹配的外购蒸汽供应
- 流属性/单位：Energy 或 Mass / MJ 或 kg 蒸汽
- 数量规则：因果分配实测剩余蒸汽，并保留蒸汽条件和冷凝水回流
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_shared_utilities`
- 来源：eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### 剩余共享天然气（`shared_natural_gas`）

仅记录未直接归属其他过程或锅炉输出的天然气。

- 选定流：与设施地域和压力等级匹配的天然气供应
- 流属性/单位：Energy 或 Volume / MJ（低位热值）或 Nm3
- 数量规则：因果分配实测剩余燃料，并保留低位热值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品净质量
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_shared_utilities`
- 来源：eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### 剩余共享柴油（`shared_diesel`）

将纳入的共享设备使用的柴油与其他燃料分开记录。

- 选定流：与设施市场匹配的柴油供应
- 流属性/单位：Mass 或 Energy / kg 或 MJ（低位热值）
- 数量规则：因果分配实测领用量或库存平衡，并保留密度和低位热值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品净质量
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_shared_utilities`
- 来源：eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### 剩余共享液化石油气（`shared_lpg`）

将纳入的共享设备使用的液化石油气与其他燃料分开记录。

- 选定流：与设施市场匹配的液化石油气供应
- 流属性/单位：Mass 或 Energy / kg 或 MJ（低位热值）
- 数量规则：因果分配实测领用量或库存平衡，并保留低位热值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品净质量
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_shared_utilities`
- 来源：eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### 共享压缩空气（`shared_compressed_air`）

记录纳入操作使用且未归属具体过程的压缩空气服务。

- 选定流：声明压力下的压缩空气公用工程服务
- 流属性/单位：Volume 或服务能量 / Nm3 或 kWh
- 数量规则：分表数量，或依据实测用气需求分配的压缩机电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_shared_utilities`
- 来源：eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### 共享制冷电力（`shared_refrigeration_electricity`）

记录未归属稳定化或灌装过程的共享冷库和制冷系统用电。

- 选定流：与设施电压等级和地域匹配的外购电力供应
- 流属性/单位：Energy / kWh
- 数量规则：制冷分表读数按实测冷负荷或有依据的温度—时间—容积驱动分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_shared_utilities`
- 来源：eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### 进入现场管理的废物与废水（`site_residue_inputs`）

记录转入现场处理的每项前景废物或废水流，不得与来源过程输出重复计数。

- 选定流：与来源过程相同的废物或废水流
- 流属性/单位：Mass / kg 或 Volume / m3
- 数量规则：与来源过程记录核对的实测转移数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_waste`
- 来源：eu-jrc-fdm-bref-2019

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 输出的回收材料或能源（`recovered_coproducts`）

在实施分配或替代前，记录离开系统的回收产品、动物饲料材料、沼气、热、电力或其他有用共产品。

- 选定流：产品特定的回收材料或能源流
- 流属性/单位：流特定属性和单位
- 数量规则：不扣减避免负荷的实测输出数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_waste`
- 来源：eu-jrc-fdm-bref-2019; eu-pef-2021-2279

##### 废物流

###### 离开场址的废水与固体残余物（`site_waste_outputs`）

按去向和处理路线记录已处理或未处理废水、污泥、食品残余物、废清洗液及其他废物。出售或回收不得作为消失处理。

- 选定流：与场外处理路线匹配的废物特定流
- 流属性/单位：Mass / kg 或 Volume / m3
- 数量规则：与处理质量平衡核对的实测外运或排放数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_waste`
- 来源：eu-jrc-fdm-bref-2019

##### 基本流

###### 公用工程与处理直接排放（`site_direct_emissions`）

记录锅炉、制冷剂损失、废水处理及其他现场公用工程或残余物管理向空气、水或土壤的污染物特定排放。

- 选定流：与监测或计算释放匹配的污染物特定基本流
- 流属性/单位：Mass / kg
- 数量规则：实测释放，或由采集活动数据和有记录因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_site_emissions`
- 来源：eu-jrc-fdm-bref-2019

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 多功能过程与共享生产线 | 在可行时通过过程拆分、独立计量、批记录或系统扩展避免分配，使汤或肉汤生产与其他产品保持物理可区分。 | eu-pef-2021-2279 |
| `allocation_causal_physical` | 共享公用工程、清洗、储存与处理 | 无法拆分时，采用有记录的因果物理驱动，如设备运行时间、计量需求、可清洗表面积与循环次数、废水负荷；仅在质量确实具有因果性时按产品质量分配。 | eu-pef-2021-2279 |
| `allocation_coproducts` | 回收食品材料、饲料材料、提取物、沼气、热或其他共产品 | 先记录共产品毛量。相关且可量化的物理关系能够表示因果性时按其分配；仅在拆分、系统扩展和可辩护物理关系均不可行时采用经济分配。 | eu-pef-2021-2279 |
| `allocation_economic_disclosure` | 经济分配 | 使用经济分配时，披露市场、价格基准、币种、平均期间、共产品状态与销售点、分配因子及价格变化敏感性。 | eu-pef-2021-2279 |
| `allocation_waste_no_credit` | 送往回收、能源回收、饲料利用、处理或处置的废物 | 不得静默扣除避免负荷。记录物理废物输出和处理或回收路线；替代或回收信用仅属于明确记录的扩展系统或生命周期模型方法。 | eu-pef-2021-2279 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_ingredient_batch_materials` | `ingredient_preparation` | 原料、制得配方料与残余物 | 批票、收货记录、库存、秤与配方系统 | 材料身份；供应商；批号；期初/期末库存；接收、退回、转移与残余质量；重要时的水分或固形物 | 校准秤及经核对库存或配方记录 | kg 与质量分数 | 每批原料和生产批次 | 代表性连续 12 个月或完整声明生产季 | 所有纳入生产线与设施 | 按材料和去向汇总，逐批核对后除以合格输出 | 秤校准、批次追溯、配方版本和质量平衡核对 |
| `cp_ingredient_water` | `ingredient_preparation` | 制备用水与废水 | 仪表、罐记录、配方与排放记录 | 水源；仪表起止；配方加水；循环；排放；密度换算 | 优先专用仪表，否则使用经验证水量平衡 | m3 与 kg | 每批或仪表区间 | 与产品输出相同期间 | 全部制备操作 | 归一化前分开掺入、循环、消耗和排放水 | 仪表校准与平衡核对 |
| `cp_cooking_batch` | `cooking_and_blending` | 配方投入、配料水、散装输出与残余物 | 批次历史、配方系统、罐秤与转移仪表 | 批次；投入质量；加水；输出质量；固形物或水分；不合格；返工 | 校准批次测量与转移核对 | kg 与质量分数 | 每批 | 与产品输出相同期间 | 全部纳入烹煮、提取与混合线 | 逐批核对投入、输出、蒸发和残余物；仅汇总合格批次 | 仪表校准、批准配方、批次放行和质量平衡 |
| `cp_cooking_energy` | `cooking_and_blending` | 烹煮与混合能源 | 电、燃料、蒸汽、热量仪表与设备运行时间 | 载体；仪表起止；蒸汽状态；设备功率；运行时间；产量 | 直接过程仪表，或依据实测运行的工程计算 | kWh、MJ、kg 蒸汽或载体单位 | 连续或每批 | 与产品输出相同期间 | 全部纳入设备 | 有证据时扣除非生产基载，并按因果需求分配 | 仪表校准、能量换算表和运行记录 |
| `cp_cooking_emissions` | `cooking_and_blending` | 烹煮直接排放 | 排放监测、燃料分析、燃料记录与批准因子 | 污染物；实测浓度与流量或燃料量；因子；氧化基准；运行时间 | 优先直接测量，否则活动数据乘有记录因子 | kg 污染物 | 监测区间或燃料期间 | 与产品输出相同期间 | 范围内全部直接排放源 | 汇总污染物质量并按散装输出归一化 | 监测 QA、实验室结果、因子来源和计算记录 |
| `cp_stabilization_batch` | `route_stabilization` | 散装投入与稳定化输出 | 批次历史、质量仪表、水分或固形物试验、温度记录 | 路线；投入/输出质量；固形物；水分；浓度；时间；温度；放行状态 | 校准测量与质量控制试验 | kg、质量分数、°C 与时间 | 每批或生产运行 | 与产品输出相同期间 | 每条纳入稳定化生产线 | 核对每项纳入操作，仅汇总放行输出 | 校准、实验室方法、路线记录与放行记录 |
| `cp_stabilization_energy` | `route_stabilization` | 能源、制冷剂与辅料 | 仪表、设备历史、制冷剂日志与采购记录 | 载体；仪表起止；运行时间；补充；泄漏；产量 | 直接计量或经验证设备计算 | 流特定单位 | 连续、每次运行或补充事件 | 与产品输出相同期间 | 全部纳入稳定化设备 | 归一化前按载体和路线分别汇总 | 仪表校准、维护记录与工程计算 |
| `cp_stabilization_residues` | `route_stabilization` | 冷凝液、废水、不合格品与直接排放 | 仪表、废物票据、质量平衡与排放记录 | 流身份；数量；回收；去向；污染物；因子或测量 | 直接测量或有记录质量/活动平衡 | kg、m3 或 kg 污染物 | 每次运行或外运 | 与产品输出相同期间 | 全部纳入稳定化操作 | 分开报告回收和损失毛流，按放行输出归一化 | 核对、废物接收单、监测 QA 与因子来源 |
| `cp_packaging_materials` | `filling_and_packaging` | 纳入和损失的包装 | 包装规格、物料清单、计数、称量、库存与不合格日志 | 组件；材料；单件质量；领用、退回、纳入与不合格数量 | 经验证组件称量与生产线计数或库存平衡 | kg 与件数 | 每包装批次或规格 | 与产品输出相同期间 | 全部一级、二级和三级包装 | 按材料和组件分别计算纳入与损失质量 | 批准规格、秤校准、库存核对和不合格日志 |
| `cp_packaging_energy` | `filling_and_packaging` | 灌装、杀菌、冷却、检验与包装能源 | 生产线仪表和设备历史 | 载体；仪表起止；需求；运行时间；生产线输出 | 直接生产线仪表或经验证工程计算 | kWh、MJ、kg 蒸汽或载体单位 | 连续或每次生产运行 | 与产品输出相同期间 | 全部纳入灌装与包装设备 | 按实测因果需求分配，灌后处理单列 | 仪表校准与生产日志 |
| `cp_final_product` | `filling_and_packaging` | 散装投入、合格产品与不合格品 | 灌装质量仪表、检重秤、批次放行、不合格与返工日志 | 散装投入；单件净质量；放行件数；不合格；返工；产品形态；批号 | 校准质量测量与放行件数 | kg 与件数 | 每批与批次 | 与其他记录相同期间 | 全部纳入产品规格与生产线 | 合格净质量等于放行件数乘经验证净质量；返工净额处理前报告不合格 | 检重秤验证、放行记录、追溯和质量平衡 |
| `cp_cleaning_materials` | `cleaning_utilities_and_residues` | 清洗水与清洗剂 | CIP 历史、仪表、化学品计量、采购与库存 | 循环；设备；水；化学品浓度；溶液回收；排放 | 直接仪表/计量记录，或经验证配方乘循环次数 | m3、kg 与浓度 | 每清洗循环 | 与产品输出相同期间 | 全部产品接触及已分配非接触清洗 | 按化学品和水汇总，仅扣除一次有记录回收溶液，并按因果分配 | 仪表校准、计量验证、循环完成和库存核对 |
| `cp_shared_utilities` | `cleaning_utilities_and_residues` | 共享能源与公用工程服务 | 场址及分表数据、公用事业账单、运行时间和生产记录 | 载体；仪表起止；分表数量；设备运行；各线输出 | 计量层级及有记录剩余量分配 | 流特定单位 | 连续或账单区间 | 与产品输出相同期间 | 完整设施并识别纳入与排除用户 | 优先直接归属；剩余量仅按因果物理驱动分配 | 仪表层级、账单核对、分配工作表和敏感性检查 |
| `cp_site_waste` | `cleaning_utilities_and_residues` | 废物、废水、回收产品与处理输出 | 流量计、废物联单、地磅、处理日志和销售记录 | 流；来源；数量；组成；处理；去向；回收输出 | 实测外运/排放与处理质量平衡 | kg 或 m3 | 每次外运、排放区间或处理批次 | 与产品输出相同期间 | 前景使用的全部现场与场外路线 | 核对来源、处理投入、回收输出、排放和最终废物，不作净额消失 | 联单、接收确认、仪表校准与处理平衡 |
| `cp_site_emissions` | `cleaning_utilities_and_residues` | 公用工程与处理直接排放 | 连续监测、定期测试、燃料/制冷剂记录、处理数据与批准因子 | 来源；污染物；浓度；流量；活动；因子；运行时间 | 优先直接测量，否则活动数据乘有记录因子 | kg 污染物 | 监测区间或活动期间 | 与产品输出相同期间 | 范围内每项向空气、水和土壤的直接释放 | 按来源计算污染物质量并在分配后归一化 | 监测 QA、实验室结果、因子来源和计算记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化数量 = 期间流数量 / 期间合格成品净质量 | 期间流数量；`finished_product` 净质量 | 每 1 kg 成品净质量的流数量 | eu-pef-2021-2279 |
| `calc_product_net_mass` | 合格产品 | 成品净质量 = Σ（放行件数 × 每件经验证产品净质量）；不含包装质量 | 放行件数；检重秤或声明并验证的净质量 | kg 合格产品 | eu-pef-2021-2279 |
| `calc_reconstituted_mass` | 浓缩或脱水产品 | 制得产品质量 = 销售产品质量 + 声明说明要求加入的水或其他制备物；报告假设与密度换算 | 销售质量；声明制备比例；制备加入物 | kg 制得产品/kg 销售产品 | fao-who-cxs-117-1981; eu-pef-2021-2279 |
| `calc_process_mass_balance` | 各材料过程 | 投入质量 = 合格转移 + 共产品 + 废物 + 实测蒸发或排放 + 库存变化；报告闭合度和测量不确定性 | 批次投入、输出、残余物、水、库存变化 | 已核对过程质量平衡 | eu-jrc-fdm-bref-2019 |
| `calc_packaging_mass` | 包装 | 包装质量 = Σ（组件单件质量 × 组件消耗数量）；分开纳入包装与损失 | 组件称量；领用、退回、放行与不合格数量 | 每 kg 产品按包装材料计的 kg | eu-jrc-fdm-bref-2019 |
| `calc_energy_allocation` | 共享与过程能源 | 优先归属直接计量需求；仅以有记录因果物理驱动分配剩余共享需求；各载体分开 | 主表与分表；运行时间或需求驱动；输出 | 每 kg 产品的载体特定能源 | eu-jrc-fdm-bref-2019; eu-pef-2021-2279 |
| `calc_direct_emissions` | 现场直接排放 | 污染物质量 = 实测浓度 × 实测尾气或排放流量 × 运行时间，或采集活动量 × 有记录排放因子 | 监测数据，或活动量与因子 | 每 kg 产品的 kg 污染物 | eu-jrc-fdm-bref-2019 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品与中间体 | 保留实际配方或产品族、市场形态、浓度或复原基准、重要时的固形物或水分、保藏路线、储存条件与包装配置；不得从类别流名称推断单一变体。 | 产品规格、批准配方、标签、制备说明与批次放行 |
| `dq_temporal` | 全部前景记录 | 常规生产采用一个代表性连续 12 个月，季节或批次生产采用完整声明生产季；分子与分母期间对齐，并披露异常停机或替代。 | 带日期仪表、批次记录、生产日历与核对 |
| `dq_geography_technology` | 前景与上游关联 | 识别设施地理和实际生产线技术；选择匹配来源地理与技术的上游数据集，或记录代理差异。 | 设施元数据、设备清单、供应商来源和数据集元数据 |
| `dq_completeness` | 全部清单 | 覆盖所有已知投入与输出，包括水、清洗、公用工程、包装、不合格品、返工、共产品、废物、废水与直接排放；量化并说明任何省略。 | 过程流程图、质量/能量/水量平衡、来源清单和省略登记 |
| `dq_measurement` | 仪表、秤、试验与计算 | 保留校准或验证状态、原始读数、单位换算、公式、因子及责任来源记录；不得以未披露估算替代缺失初级数据。 | 校准证书、实验室报告、计算表和因子引用 |
| `dq_representativeness_precision` | 发布数据集 | 评估技术、地理和时间代表性及精度，并披露重要代理和分配选择的不确定性或敏感性。 | 按声明方法编制的数据质量评估与敏感性记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | 产品身份 | 确认输出主要作为汤、肉汤、bouillon、consommé 或其制品销售，且全部必需限定信息齐全。拒绝静默用于酱汁、非汤预制餐、婴幼儿制品或范围外单独销售提取物。 | unsd-cpc-3-0-explanatory-notes-2025; fao-who-cxs-117-1981 |
| `validate_reference_uuid` | 参考流 | 确认所选类别流 UUID、Mass 属性 UUID、Units of mass UUID 和 kg 单位；或记录经审查的更特定真实 Tiangong 产品流替换。 |  |
| `validate_reference_amount` | 定量参考 | 确认归一化后输出恰为 1 kg 合格净产品，且参考数量不含包装质量。 | eu-pef-2021-2279 |
| `validate_route_coverage` | 过程图 | 确认配料、烹煮或提取、浓缩或脱水、保藏、冷藏或冷冻、灌装、灌后处理、清洗、公用工程与残余物管理的每项实际操作均已纳入或明确标示不适用。 | fao-who-cxs-117-1981; eu-jrc-fdm-bref-2019 |
| `validate_reconstitution` | 浓缩与脱水产品 | 要求声明制备说明并验证制得产品换算；禁止仅按 1 kg 销售质量与即食产品比较。 | fao-who-cxs-117-1981; eu-pef-2021-2279 |
| `validate_balances` | 材料、水与能源数据 | 验证过程及期间平衡，调查超出记录测量不确定性的闭合差，并防止循环水、回收产品、返工、共享公用工程、废物转移和处理投入重复计数。 | eu-jrc-fdm-bref-2019 |
| `validate_allocation` | 共享过程与共产品 | 验证已优先尝试拆分、物理分配采用因果关系，任何经济分配或替代均充分说明并进行敏感性检验。 | eu-pef-2021-2279 |
| `validate_data_quality` | 前景数据包 | 验证时间对齐、地理和技术代表性、完整性、精度、来源追溯、校准证据、代理披露及记录的不确定性。 | eu-pef-2021-2279 |
| `validate_atomic_inventory` | 清单流身份 | 若本 PCR 覆盖的电力、蒸汽、热水、各燃料、制冷剂、清洗化学品、包装材料、包装废物或直接燃烧/制冷剂排放仍以组合载体或组合材料占位，而不是独立可识别的流行，则判定失败。 | eu-jrc-fdm-bref-2019; eu-pef-2021-2279 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明汤、肉汤或其制品的工厂门前景制造数据集 |
| downstream_use | `secondary_dataset`；当经审查且对声明产品、地理、技术与期间具有代表性并充分记录时可作 `background_dataset` |
| allowed_use | 保留声明产品形态、浓度、路线与系统边界的前景数据包构建、产品制造清单、供应链模型及下游生命周期模型 |
| excluded_use | 不经制得产品归一化直接比较不同销售浓度；不披露限定信息而作配方无关代理；归属于范围外酱汁、预制餐、婴幼儿食品或提取物；未披露地替代产品特定流或数据集 |
| required_metadata | PCR id 与版本；产品与配方族；产品流 UUID；市场形态；净质量；相关时的固形物或水分基准；浓缩或复原说明；保藏与储存条件；包装组件及质量；地理；技术；生产期间；过程图；上游数据集引用；分配；排除 |
| required_quality_disclosure | 时间、地理和技术代表性；仪表与秤覆盖；平衡闭合与不确定性；代理；数据缺口；排除流；分配与替代选择；来源和计算追溯；审查状态 |
| update_trigger | 配方或主要原料变化；市场形态、浓度、保藏路线、包装、设施或材料技术变化；能源、水、收率、废物或排放发生重大变化；出现新的产品特定 Tiangong 流；来源要求变化；代表期间不再有效 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-explanatory-notes-2025` | `official_guidance` | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-11） | CPC 23992 类别身份及与相邻产品类别的区分 |
| `fao-who-cxs-117-1981` | `standard` | Codex Alimentarius, *Standard for Bouillons and Consommés*, CXS 117-1981, revised 2001 and 2015, amended 2021, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pl/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+117-1981%2FCXS_117e.pdf（检索于 2026-08-11） | 肉汤和 consommé 的产品形态、原料与水、即食和复原状态及限定信息要求 |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, *Best Available Techniques Reference Document in the Food, Drink and Milk Industries*, JRC118627, 2019, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf（检索于 2026-08-11） | 食品制造过程分解；能源、水、清洗、包装、废物、废水和直接排放清单要求 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, *Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods*, Annex I Product Environmental Footprint Method, ELI http://data.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-11） | 功能单位与参考流、系统边界、企业特定清单、多功能层级、完整性、代表性、精度与披露 |
