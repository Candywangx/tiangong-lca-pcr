---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cocoa-powder-sweetened
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 加糖可可粉

## 1. 范围与适用性

本 PCR 适用于以可可粉和糖类为特征性配料，并以加糖可可粉、加糖可可、饮用巧克力粉或等效产品名称投放市场的干燥、货架稳定混合物。若配方和适用销售规格已声明，则常规可可粉和减脂可可粉变体均在覆盖范围内。

前景制造范围始于制造场址接收可可粉、糖类、可选的获准干配料、包装、外购能源和水。范围包括配料储存与输送、计量投料、干混、条件性调质或团聚、筛分和异物控制、灌装及包装。可可粉、糖类、其他配料、包装、能源载体和水的上游生产由关联的供应方数据集表示。

未加糖可可粉、可可液块、可可脂、固体巧克力、加糖可可粉以外的散装或零售巧克力制品、即饮可可饮料，以及不以可可粉与糖类混合物为类别特征的乳基饮料粉均不在本 PCR 范围内。工厂大门之后的配送、消费者制备和包装生命末期不属于按本 PCR 建立的厂内门到门数据集，可由下游生命周期模型另行加入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cocoa-powder-sweetened |
| classification_refs | CPC 3.0：23640，Cocoa powder, sweetened |
| covered_products | 以可可粉和糖类为特征并以加糖可可粉、加糖可可、饮用巧克力粉或等效市场名称销售的干混合物；在已声明时包括减脂变体 |
| excluded_products | 未加糖可可粉；可可液块或可可脂；固体巧克力及其他含可可食品制品；即饮饮料；并非主要由可可粉与糖类构成的乳基饮料粉 |
| representative_product | 以外购可可粉和糖经计量、混合、筛分并在制造场址包装而成的干燥、流动性良好的加糖可可粉 |
| production_route | 配料与包装接收和储存 -> 计量投料 -> 干混 -> 条件性调质或团聚 -> 筛分和异物控制 -> 灌装与包装 |
| market_state | 制造场址大门处、采用已声明散装或零售包装的干燥货架稳定成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造场址大门处提供作为干燥食品配料或饮料制备混合物的加糖可可粉 |
| How much | 1 kg 加糖可可粉成品净质量 |
| How well | 符合已声明配方、可可粉含量、水分或固形物规格，并在适用时符合粒度或分散性规格及目的市场销售名称；在欧盟以饮用巧克力粉、加糖可可或加糖可可粉销售的产品至少含 25% 可可粉 |
| How long or cycle | 在工厂大门交付的一个生产批次；不包括出厂后的储存和产品制备 |
| reference_flow_link | 工厂大门处 1 kg 已声明参考成品 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Cocoa powder, sweetened `75c1ef5f-a7df-489a-8c49-07a90f6c4d66` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 可可粉质量分数；糖或甜味料类型；减脂或常规可可粉；碱化或未碱化可可粉；可选配料和香料；速溶化或非速溶化路线；水分或固形物规格；包装形式；目的市场和适用产品规格；生产地理范围；生产期间 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考成品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告不含一级、二级和三级包装的产品净销售质量；所有清单结果归一化为 1 kg 合格成品。 |
| `ingredient_mass_basis` | 可可粉、糖类、可选配料、返工料和产品损失 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按一致的接收状态记录称量的批次或生产期质量，干物质或水分校正应另行声明。 |
| `recipe_fraction_check` | 成品组成 | Mass fraction | kg/kg | 以投料质量除以合格成品净质量计算各配料比例；区分新鲜投入和内部返工料，并根据适用销售规格核验已声明可可粉比例。 |
| `energy_unit_conversion` | 电力和燃料 | Energy | kWh and MJ | 保留计量表或账单的原始单位，记录换算系数和热值基准，并避免外购电力、燃料、蒸汽或热量重复计数。 |
| `packaging_mass_basis` | 一级、二级和三级包装 | Mass | kg | 按材料以每个包装单元的实测质量乘以消耗单元数计算包装质量，并扣除有记录的退回或重复使用包装。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 可可粉、糖类、可选配料、包装材料、外购能源载体和水已送达制造场址，并且其身份、质量、供应商、来源及供应方数据集引用可用。 |
| starting_condition_role | 干混中间食品的门到门制造起点 |
| product_classification_scope | CPC 3.0 代码 23640 所表示的加糖可可粉；分类仅是映射上下文，不能替代语义产品边界。 |
| recursive_input_rule | 若同一产品类别的加糖可可粉作为投入，则将其记录一次为带供应方数据集的上游产品流；不得在该前景数据包内递归复现其制造清单。 |
| upstream_dataset_requirement | 为可可粉、糖类、可选配料、包装材料、电力、燃料、水和外部处置废物关联从摇篮到大门的供应方数据集；披露供应商特定数据缺口和代理数据。 |
| disclosure | 声明设施及地理范围、报告期间、产品配方和可可粉比例、可可粉类型、产品水分或固形物规格、纳入的过程步骤、速溶化或团聚路线、包装形式、分配选择、省略流以及对本边界的任何偏离。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 前景制造 | 纳入配料接收与储存、内部转运、计量投料、混合、条件性调质或团聚、筛分和异物控制、灌装、包装、可直接归属的清洁、场内公用工程使用、产品损失、废物、废水和直接排放。 | `eu-pef-2021-2279` |
| `boundary_upstream_links` | 外购产品和服务 | 通过供应方数据集表示可可粉、糖类、其他配料、包装、外购能源、水、已纳入供应方边界的运输和外部废物处理的生产，而不得省略其上游负荷。 | `eu-pef-2021-2279` |
| `boundary_intermediate_product_gate` | 下游阶段 | 将参考产品视为制造场址大门处的中间产品；排除下游配送、储存、使用或制备和生命末期，除非更宽范围的已声明模型加入这些阶段。 | `eu-pef-2021-2279` |
| `boundary_omission_disclosure` | 清单完整性 | 不得因流难以测量而有意省略；记录并论证任何不可得或不重要的流、其预期显著性以及所用代理或数据缺口处理。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `ingredient_receiving` | 配料和包装接收、储存与转运 | `required` | 始终 | 建立可追溯起始质量并将配料和包装送入生产 | 每 1 kg 合格成品发出的配料或包装 kg 数 |
| `dosing_blending` | 配料计量和干混 | `required` | 始终 | 按已声明配方生产均匀的加糖可可粉混合物 | 转入后处理的 1 kg 散装混合物 |
| `conditioning` | 调质、团聚或速溶化 | `conditional` | 当已声明产品在干混后进行调质、团聚、卵磷脂化、干燥或其他处理时纳入 | 赋予已声明的分散性、密度、水分或操作性能 | 调质粉末输出 kg 数 |
| `finishing_packaging` | 筛分、异物控制、灌装与包装 | `required` | 始终 | 在工厂大门生产合格包装产品并量化损失和包装 | 1 kg 净合格成品 |

### 过程：配料和包装接收、储存与转运（`ingredient_receiving`）

#### 输入

##### 产品流

###### 外购可可粉（`cocoa_powder_input`）

外购常规或减脂可可粉是进入场址边界的特征性可可配料。

- 选定流：Cocoa powder, not sweetened
- 流属性/单位：Mass / kg
- 数量规则：发往生产的称量质量，不含内部返工料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格加糖可可粉成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_materials`
- 来源：`eu-cocoa-directive-2000-36`

###### 糖类和已声明甜味料（`sugars_input`）

分别记录各种糖或其他已声明甜味配料，使配方和供应方数据集保持可追溯。

- 选定流：Sugar or declared sweetener, by type
- 流属性/单位：Mass / kg
- 数量规则：按配料和供应商批次称量的生产发料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格加糖可可粉成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_materials`
- 来源：`eu-cocoa-directive-2000-36`

###### 可选配料（`optional_ingredients_input`）

仅在实际使用时纳入香料、盐、乳化剂、乳配料、抗结剂、载体或其他配方投入，并分别披露其身份和质量。

- 选定流：Optional food ingredient, by substance or commercial preparation
- 流属性/单位：Mass / kg
- 数量规则：批次投加的称量或计量数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格加糖可可粉成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_materials`
- 来源：

###### 接收的包装材料（`packaging_materials_input`）

按材料和形式追踪一级、二级和三级包装，包括内衬、标签、封口、纸箱、袋和托盘缠绕膜。

- 选定流：Packaging material, by material and format
- 流属性/单位：Mass / kg
- 数量规则：包装消耗单元数乘以经核验的单元质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格加糖可可粉成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 发往生产的配料和包装（`materials_issued_output`）

记录转移的材料，不在下一过程中重复计算其上游负荷。

- 选定流：Materials issued to sweetened cocoa powder production
- 流属性/单位：Mass / kg
- 数量规则：与生产接收量和库存变化核对后的库存发料质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格加糖可可粉成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_recipe_materials`
- 来源：

##### 废物流

###### 受损或受污染的来料和包装（`receiving_waste_output`）

按废物类型和处理路线记录跨过场址边界后被拒收或受损的材料。

- 选定流：Rejected ingredient or packaging waste, by material
- 流属性/单位：Mass / kg
- 数量规则：送往回收、处理或处置的称量拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格加糖可可粉成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste`
- 来源：

##### 基本流

### 过程：配料计量和干混（`dosing_blending`）

#### 输入

##### 产品流

###### 投入混合机的配料（`ingredients_charged_input`）

记录每个批次或生产期投入的可可粉、糖类、可选配料及单独识别的内部返工料。

- 选定流：Recipe ingredients charged to blending
- 流属性/单位：Mass / kg
- 数量规则：按配料汇总核验过的批次投料质量；内部返工料单独报告
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 散装混合物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_materials`
- 来源：

###### 输送、计量、抽风和混合用电（`blending_electricity_input`）

纳入可直接归属于输送、称量、除尘和混合设备的用电。

- 选定流：Electricity, supplier or grid mix
- 流属性/单位：Energy / kWh
- 数量规则：分表计量用电，或依据设备运行小时和额定或实测功率进行有记录的分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 散装混合物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_utilities`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 散装加糖可可粉混合物（`bulk_blend_output`）

记录包装前转入调质或后处理的均匀散装混合物。

- 选定流：Bulk sweetened cocoa powder blend
- 流属性/单位：Mass / kg
- 数量规则：在记录混合损失后的实测转移质量或批次物料平衡质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 散装混合物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_yield_waste`
- 来源：

##### 废物流

###### 混合洒落物、清机料和未返工的不合格粉末（`blending_waste_output`）

将返回系统的内部返工料与作为废物离开产品系统的材料分开。

- 选定流：Cocoa-and-sugar powder waste
- 流属性/单位：Mass / kg
- 数量规则：按去向和处理路线称量的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 散装混合物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste`
- 来源：

##### 基本流

###### 释放到空气的未捕集粉尘颗粒物（`blending_dust_air_output`）

在扣除作为产品返工料或废物记录的捕集物料后，纳入转运和混合产生的直接颗粒物排放。

- 选定流：Particulate matter to air, applicable size fraction
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或依据控制装置及运行记录形成的有文件依据的工程计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 散装混合物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

### 过程：调质、团聚或速溶化（`conditioning`）

#### 输入

##### 产品流

###### 送入调质的散装混合物（`conditioning_blend_input`）

仅当已声明路线对混合物进行调质、团聚、卵磷脂化、干燥或其他处理时纳入此投入。

- 选定流：Bulk sweetened cocoa powder blend
- 流属性/单位：Mass / kg
- 数量规则：送入调质步骤的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 调质粉末输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste`
- 来源：

###### 调质用公用工程和添加物（`conditioning_inputs`）

在使用时分别记录电力、热能、水、蒸汽、压缩空气、卵磷脂或其他添加物。

- 选定流：Conditioning input, by utility or ingredient
- 流属性/单位：Energy or Mass / kWh, MJ, or kg as applicable
- 数量规则：可归属于调质步骤的计量公用工程用量和称量添加物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 调质粉末输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调质后的加糖可可粉（`conditioned_powder_output`）

记录完成调质并放行到后处理、带有已声明水分、堆积密度或分散性能的粉末。

- 选定流：Conditioned sweetened cocoa powder
- 流属性/单位：Mass / kg
- 数量规则：实测合格调质输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 调质粉末输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_quality`
- 来源：

##### 废物流

###### 调质残余物和废水（`conditioning_waste_output`）

纳入调质时，按组成和处理路线分别记录不合格固体和废水。

- 选定流：Conditioning residue or wastewater, by route
- 流属性/单位：Mass / kg
- 数量规则：作为废物离开调质过程的实测数量或物料平衡数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 调质粉末输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_yield_waste`
- 来源：

##### 基本流

###### 调质过程直接空气排放（`conditioning_air_output`）

在适用时记录场内热力设备的直接颗粒物和燃烧排放。

- 选定流：Direct emission to air, by elementary flow
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或依据燃料和控制装置记录形成的有文件依据的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 调质粉末输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

### 过程：筛分、异物控制、灌装与包装（`finishing_packaging`）

#### 输入

##### 产品流

###### 送入后处理的散装粉末（`bulk_powder_finishing_input`）

记录进入最终筛分和包装的合格散装混合物或调质粉末。

- 选定流：Bulk sweetened cocoa powder
- 流属性/单位：Mass / kg
- 数量规则：进入后处理的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste`
- 来源：

###### 消耗的包装（`packaging_consumed_input`）

按材料和形式记录包装，并区分可重复使用或退回的三级包装。

- 选定流：Packaging material, by material and format
- 流属性/单位：Mass / kg
- 数量规则：包装消耗单元数乘以经核验的单元质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 后处理和包装用电（`packing_electricity_input`）

纳入筛分、磁选或金属检测、输送、抽风、灌装、封口、打码及可直接归属的包装设备用电。

- 选定流：Electricity, supplier or grid mix
- 流属性/单位：Energy / kWh
- 数量规则：分表计量用电，或依据设备运行小时和额定或实测功率进行有记录的分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_utilities`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂大门处合格加糖可可粉（`sweetened_cocoa_reference_output`）

这是最终质量放行后的定量参考输出，不包含包装质量。

- 选定流：Cocoa powder, sweetened `75c1ef5f-a7df-489a-8c49-07a90f6c4d66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 合格成品净质量的固定参考数量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：工厂大门处 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_output_quality`
- 来源：

##### 废物流

###### 被拒粉末和包装废物（`finishing_waste_output`）

按材料和处理路线记录未作为返工料返回的不合格粉末以及被拒包装。

- 选定流：Product or packaging waste, by material and route
- 流属性/单位：Mass / kg
- 数量规则：转移到回收、处理或处置的称量数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_waste`
- 来源：

##### 基本流

###### 释放到空气的未捕集后处理颗粒物（`finishing_dust_air_output`）

在核算作为返工料或废物管理的捕集粉末后，纳入直接释放的粉末颗粒物。

- 选定流：Particulate matter to air, applicable size fraction
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或依据控制装置及运行记录形成的有文件依据的工程计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 专用和共享制造操作 | 通过为加糖可可粉生产线、批次或生产期分别采集配方、输出、废物、能源、公用工程和排放记录来避免分配；仅当额外功能和被替代系统均被明确建模时使用系统扩展。 | `eu-pef-2021-2279` |
| `allocation_physical_driver` | 共享公用工程和服务 | 无法细分时，使用有记录的因果物理驱动因素分配共享负荷，例如计量能源、设备运行时间、清洁面积或体积、质量吞吐量，并论证该驱动因素代表资源使用的原因。 | `eu-pef-2021-2279` |
| `allocation_economic_fallback` | 不存在可辩护物理关系的真实共产品 | 只有在记录无法采用细分、系统扩展和相关物理关系的原因后方可使用经济分配；记录价格、参考期间、分配系数和敏感性检查。 | `eu-pef-2021-2279` |
| `allocation_rework_and_waste` | 内部返工料、不合格粉末和废物 | 未跨越产品系统边界的内部返工料不获得共产品抵扣，并与新鲜投入分开追踪；离开边界的废物不得作为共产品，除非有记录的市场功能及所选多功能性方法另有充分依据。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_recipe_materials` | `ingredient_receiving`; `dosing_blending` | 配方配料、内部返工料和发出材料 | 批次配方、磅单、发料记录、供应商批次 | batch_id; product_code; ingredient_id; supplier_lot; gross_mass; tare_mass; net_mass; moisture_basis; rework_flag; timestamp | 以校准秤计量，并与批准配方和库存发料核对 | kg | 每批次或生产期 | 完整的已声明生产期间 | 所有纳入的生产线和产品 | 分别汇总新鲜投入和内部返工料；除以合格参考产品净输出 | 秤校准；批准配方；批次追溯；库存核对 |
| `cp_energy_utilities` | `dosing_blending`; `conditioning`; `finishing_packaging` | 电力、燃料、热、蒸汽、压缩空气和工艺水 | 分表、账单、燃料收据、设备运行时间 | meter_id; start_reading; end_reading; unit; fuel_quantity; heating_value_basis; equipment_hours; allocation_driver; period | 优先直接分表计量；否则采用与运行记录关联的有文件依据的工程分配 | kWh; MJ; kg; m3 | 计量间隔并按月核对 | 完整的已声明生产期间 | 所有纳入设备和共享服务 | 扣除输出和无关负荷；按获准因果驱动因素分配共享用量；归一化到过程输出和参考流 | 仪表校准；账单；运行日志；换算系数记录 |
| `cp_yield_waste` | 所有过程 | 中间输出、合格产品、返工料、损失和废物 | 磅单、生产报告、废物转移联单、库存记录 | batch_id; input_mass; intermediate_output_mass; accepted_output_mass; rework_mass; waste_mass; waste_type; destination; stock_change | 称量输出和废物，并核对批次、生产期和报告期物料平衡 | kg | 每批次或每次废物运输，并按期间核对 | 完整的已声明生产期间 | 所有纳入生产线和废物路线 | 将内部返工料留在系统内；按材料和处理路线汇总废物；报告无法解释的质量差 | 秤校准；生产放行；废物转移证据；核对签署 |
| `cp_packaging_records` | `ingredient_receiving`; `finishing_packaging` | 消耗的包装材料 | 包装物料清单、单元质量测试、发出和退回记录 | packaging_id; material; format; mass_per_unit; units_issued; units_returned; reuse_cycles; supplier_lot | 称量代表性包装单元，并核对发出、退回和已包装单元 | kg; item | 每种包装形式和生产期间 | 完整的已声明生产期间 | 所用全部一级、二级和三级包装 | 净消耗单元乘以经核验的单元质量，按材料汇总并归一化到产品净质量 | 天平校准；包装规格；发出退回核对 |
| `cp_direct_emissions` | `dosing_blending`; `conditioning`; `finishing_packaging` | 空气颗粒物和燃烧排放 | 烟道或工作场所抽风测量、燃料记录、控制装置日志、工程计算 | emission_point; pollutant; concentration; gas_flow; operating_time; fuel_use; control_efficiency; calculation_method | 要求时直接测量；否则依据活动和控制记录透明计算 | kg; mg/m3; Nm3; h | 法规或设施监测间隔 | 完整的已声明生产期间 | 所有纳入的直接排放点 | 计算已声明期间的排放质量；仅在捕集物记录为产品或废物时扣除 | 实验室报告；仪器校准；控制装置维护；计算复核 |
| `cp_output_quality` | `conditioning`; `finishing_packaging` | 调质粉末和合格参考产品 | 分析证书、放行测试、成品记录 | lot_id; net_mass; cocoa_fraction; moisture_or_solids; fat_reduced_status; alkalization_status; particle_or_dispersibility_result; release_status | 与生产批次关联的批准实验室或质量控制方法 | kg; mass fraction; specification unit | 每个放行批次 | 完整的已声明生产期间 | 所有纳入的参考产品批次 | 分母仅包括合格净输出；未放行产品计为返工料或废物 | 测试方法；实验室 QA；签字放行；产品规格 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 报告期流数量 / 报告期合格成品净质量 | 采集的流数量；来自 `cp_output_quality` 的合格净输出 | 每 1 kg 参考产品的流数量 | |
| `calc_recipe_fraction` | 可可粉、糖类和可选配料 | 配料质量分数 = 新鲜配料投料质量 / 合格成品净质量；内部返工料单独报告且不计为新鲜上游投入 | `cp_recipe_materials`; `cp_output_quality` | kg 配料/kg 成品及已声明质量分数 | `eu-cocoa-directive-2000-36` |
| `calc_energy_allocation` | 共享能源和公用工程记录 | 使用直接分表计量数量；否则将共享数量乘以纳入过程有记录的因果份额，再归一化到合格输出 | 计量表或账单数量；设备小时、实测功率、质量吞吐量或其他获准驱动因素；合格输出 | 每 kg 参考产品的 kWh、MJ、kg 或 m3 | `eu-pef-2021-2279` |
| `calc_packaging_mass` | 每种包装材料 | 包装质量 =（发出单元数 - 有记录的退回可重复使用单元数）x 经核验单元质量；再除以合格产品净质量 | `cp_packaging_records`; `cp_output_quality` | kg 包装材料/kg 参考产品 | |
| `calc_mass_reconciliation` | 每个过程和报告期间 | 无法解释的质量差 = 总质量投入 + 期初库存 - 产品输出 - 有记录的返工转移 - 废物 - 期末库存 - 已量化直接质量排放；应调查而不得无说明地分配残差 | 配方、库存、产品、返工料、废物、废水和排放记录 | 已签署的物料平衡核对及已披露残差 | |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 参考产品和配方投入 | 将每个纳入的成品批次关联到批准配方、配料和包装批次、产品限定信息及准确的 Tiangong 参考流身份。 | 批次谱系；批准配方；供应商和包装记录；数据集元数据 |
| `dq_primary_foreground` | 报告设施运行的过程 | 对配料质量、合格输出、包装、能源与公用工程、废物和直接排放使用场址或公司特定的实测或采集数据；记录任何工程计算及其输入。 | 计量表；秤记录；账单；生产报告；废物转移联单；计算文件；`eu-pef-2021-2279` |
| `dq_temporal_coverage` | 所有前景数据 | 声明起止日期并覆盖完整、有代表性的生产期间，包括日常换产、清洁、返工和损失；披露异常排除或生产期。 | 生产日历；计量覆盖；批次清单；停机和清洁日志 |
| `dq_completeness_reconciliation` | 过程和场址清单 | 核对配方、中间品、成品、返工料、废物、库存变化、废水和直接排放质量，并调查无法解释的差异。 | 已签署的过程和报告期物料平衡 |
| `dq_representativeness_precision` | 前景和供应方数据集 | 记录技术、地理和时间代表性及精度；识别代理和供应商数据缺口，并解释其预期影响。 | 使用 `eu-pef-2021-2279` 维度的数据质量评估；供应方数据集元数据 |
| `dq_calibration_and_review` | 测量和计算值 | 保留校准或核验状态、计算公式、分配驱动因素、单位换算、责任审核人及变更历史。 | 校准证书；受控计算工作簿或脚本；审核记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 确认 UUID `75c1ef5f-a7df-489a-8c49-07a90f6c4d66`、Product flow 类型、CPC 23640 分类、Mass 属性 UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、质量单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 及 kg 参考单位。 | |
| `validation_category_and_recipe` | 产品身份 | 核验可可粉和糖类构成干燥产品的类别特征，已声明必需限定信息和配方比例，排除项得到遵守，并符合适用目的市场产品规格；若声称欧盟加糖可可销售名称，则核验至少含 25% 可可粉。 | `eu-cocoa-directive-2000-36`; `codex-cxs-105-1981` |
| `validation_boundary_coverage` | 过程图和清单 | 核验从接收到合格包装产品的每个实际运行步骤、条件性调质步骤、上游供应方关联、清洁和公用工程使用、废物、废水及直接排放均已纳入；列出并论证每个省略流。 | `eu-pef-2021-2279` |
| `validation_mass_balance` | 每个过程和报告期间 | 重新计算配料比例、中间收率、合格输出、返工料、废物、库存变化和直接质量排放；标记无法解释的残差及重复计数的返工料。 | |
| `validation_allocation` | 共享过程和多功能性 | 确认已首先尝试细分，并且每个剩余分配均有因果驱动因素、完整系数组、一致分母和有记录的退回方法理由。 | `eu-pef-2021-2279` |
| `validation_data_quality` | 前景和供应方数据 | 确认时间覆盖完整、校准和追溯证据充分、供应方数据集身份明确，并已记录技术、地理、时间和精度评估；标记未解决 UUID 和代理。 | `eu-pef-2021-2279` |
| `validation_no_unlabelled_estimates` | 所有数量 | 若标称实测、计算或有来源支持的数量缺少记录、公式或引用来源，则拒绝该数量；任何未来暂定估计必须使用 `reasoned_estimate`，不得虚构来源 id，并保持可被替换。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 生产加糖可可粉至制造场址大门的设施和产品特定前景数据包或聚合门到门数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 需要已披露工厂大门加糖可可粉投入的配料供应链、食品制造、饮料制备、包装和更广产品生命周期模型 |
| excluded_use | 未加糖可可粉、可可豆或可可液块加工、巧克力制造、即饮可可饮料、消费者制备、配送，或配方、地理范围、期间、边界、分配和审核不兼容的比较声明 |
| required_metadata | PCR id 和版本上下文；Tiangong 参考流 UUID；设施和地理范围；报告期间；可可粉和糖比例；可可类型和处理；可选配料；速溶化或团聚路线；水分或固形物规格；包装形式；过程覆盖；供应方数据集；分配方法；数据所有者和审核状态 |
| required_quality_disclosure | 原始数据覆盖；测量和校准证据；物料平衡残差；分配驱动因素和系数；技术、地理、时间和精度评估；代理和 UUID 缺口；排除项；不确定性和审核限制 |
| update_trigger | 配方或可可粉比例变化；新增甜味料或可选配料；常规与减脂或碱化可可之间变化；新增或移除调质或团聚；过程、能源、收率、包装、供应商、场址或法规发生实质变化；代表性过期；UUID 或代理缺口解决 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `codex-cxs-105-1981` | `standard` | FAO/WHO Codex Alimentarius，CXS 105-1981，Standard for Cocoa Powders (Cocoas) and Dry Mixtures of Cocoa and Sugars，官方目录现行修订年份 2025，https://www.fao.org/fao-who-codexalimentarius/codex-texts/list-standards/en/（检索于 2026-08-11） | 可可粉和可可-糖干混合物的国际产品类别范围及校验参考 |
| `eu-cocoa-directive-2000-36` | `standard` | 欧洲议会和理事会关于供人食用的可可和巧克力制品的 Directive 2000/36/EC，CELEX 32000L0036，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32000L0036（检索于 2026-08-11） | 产品定义、可可粉与糖混合物身份、欧盟最低可可粉含量、组成和销售名称校验 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods，CELEX 32021H2279，https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-11） | 中间产品生命周期阶段、系统边界、公司特定数据采集、分配层级、省略披露和数据质量维度 |
