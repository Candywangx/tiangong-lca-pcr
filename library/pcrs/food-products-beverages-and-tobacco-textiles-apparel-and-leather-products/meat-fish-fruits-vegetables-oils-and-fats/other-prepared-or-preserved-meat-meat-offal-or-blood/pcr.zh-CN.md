---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-prepared-or-preserved-meat-meat-offal-or-blood
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他配制或保藏的肉、食用内脏或血液制品

## 1. 范围与适用性

本 PCR 适用于 CPC 21189 的产品特定前景数据集：来自声明的陆生哺乳动物、海生哺乳动物、鸟类或蛙类的肉、可食用解剖组织或血液，通过冷冻、盐腌、盐水保藏、熏制或干制以外的方法配制或保藏。数据集必须逐项识别动物物种、解剖组织、血液来源、配方投入、最终产品形态、包装制品、市场温度状态和保藏路线，不得使用合并身份。

覆盖路线包括声明的煮制、油炸、烘烤、蒸制、填充、密封罐藏、醋腌、调味、绞碎、糜酱、肝酱、rillettes 肉酱或 galantine 肉冻卷路线，但所得产品仍须属于 CPC 21189。仅有路线名称不能证明类别身份，还必须声明准确的非香肠产品形态和配方物料清单。

以下内容不属于本 PCR：主要通过冷冻保藏的产品；CPC 21181—21183 的盐腌、盐水保藏、干制或熏制产品；CPC 21184 的香肠或类似产品；CPC 21185 的肉提取物或肉汁；CPC 21186 的完整菜肴或餐食；均质婴幼儿类制品；所述哺乳动物和蛙类范围之外的鱼、甲壳类、软体动物或其他水生动物制品；以及上游动物养殖、捕获、屠宰、入厂运输、下游配送、零售、消费者制备和寿命终止。综合设施可把被排除的生命周期阶段作为单独识别的关联过程报告，不得悄然扩大本前景边界。

本候选 PCR 中任何清单数量或范围都不是类别默认值。所有非参考数量均来自前景记录，或由采集记录计算得到。未列出的身份必须新增原子卡并接受审查；不得以集合或选择器标签替代。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-prepared-or-preserved-meat-meat-offal-or-blood` |
| classification_refs | UN CPC 3.0：`21189` — Other prepared or preserved meat, meat offal or blood（`exact`） |
| covered_products | 陆生哺乳动物、海生哺乳动物、鸟类或蛙类的肉、可食用解剖组织或血液的声明非香肠制品；清单示例包括煮制肉块、油炸肉块、烘烤肉块、蒸制蛙腿、填充肉卷、罐藏肉块、醋腌肉块、调味绞肉饼、肝酱、肉糜酱、rillettes 肉酱、galantine 肉冻卷和蒸制血凝块。 |
| excluded_products | CPC 21181—21183 的盐腌、盐水保藏、干制或熏制产品；CPC 21184 香肠；CPC 21185 提取物或肉汁；CPC 21186 完整菜肴或餐食；均质婴幼儿类制品；以冷冻界定的最终产品；鱼、甲壳类或软体动物制品。 |
| representative_product | 一种声明的净合格 CPC 21189 产品，具有准确物种与解剖配方、一种具体非香肠形态、一条锁定保藏路线，以及声明的常温或冷藏市场状态。 |
| production_route | 工厂门口接收与温控；预处理和配方；具名热加工路线、密封罐藏或腌制/调味三者中恰好一个适用保藏分支；最终包装与放行；卫生清洗；条件性场内废水处理。 |
| market_state | 制造工厂门口的净可销售产品，按声明为常温货架稳定或冷藏；包装计入清单但不计入参考产品质量，且冷冻不是界定性保藏路线。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供 CPC 21189 范围内一种声明的配制或保藏肉、可食用解剖组织或血液产品。 |
| How much | 制造工厂门口放行的 1 kg 净合格产品。 |
| How well | 满足声明的配方、解剖身份、产品形态、保藏工艺、包装完整性、食品安全、合法市场和放行规格；不含包装质量。 |
| How long or cycle | 一个生产批次，从工厂门口接收至成品放行；贮存时间和温度采用批次特定记录。 |
| reference_flow_link | 1 kg 净参考数量是 `packaging_storage_release` 的带 UUID 产出；所有前景交换通过实测阶段转移量归一化至该产出。 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg 净合格产品，不含包装。 |
| Reference product flow | Other prepared or preserved meat, meat offal or blood `61b39162-1ed6-4d66-b54b-9c0889bd9fc4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 准确动物物种；每项动物源性配方投入的准确解剖组织或血液来源；来料冷藏或冷冻状态；具体非香肠产品形态；恰好一条保藏路线；配方和添加剂规格；最终常温或冷藏状态；初级和次级包装规格；净质量方法；批次和场址；时间期；分配选择；废物和共产品去向；相关时的合法来源声明。 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| mu_ref_net_mass | 参考产品 | Mass | kg | 在经校准设备上确定净合格产品质量，扣除每个包装部件、不合格产品、未销售留样，以及未纳入声明产品规格的可测游离液体。 |
| mu_stage_mass | 动物原料、配料、转移流、产品、共产品和固体废物 | Mass | kg | 保留毛重读数和皮重记录；按准确原子身份报告净质量，并仅在阶段质量平衡闭合后归一化。 |
| mu_package_count | 包装制品 | Mass | kg | 采购记录采用件数时，以件数乘以批次特定的实测单件质量；每个容器、封口件、薄膜、标签、胶黏剂、托盘或捆扎带均单独记录。 |
| mu_energy_carrier | 电网电力 | Energy | kWh | 保留以 kWh 计量的电力，不得与蒸汽、热水、天然气、柴油、液化石油气或压缩空气合并。 |
| mu_thermal_carrier | 蒸汽、热水、天然气、柴油、液化石油气 | Energy | MJ | 使用有据开票能量基准或实测低位热值逐载体换算；不得建立合并热能值。 |
| mu_compressed_air | 外购压缩空气 | Volume | m3 | 采用在声明参考条件下单独计量的交付体积，并披露这些条件。 |
| mu_water_source | 市政水、地下水、地表水、废水 | Mass | kg | 各水源或产生点流保持分开；仅可使用有据密度和温度假设换算体积。 |
| mu_refrigerant | 制冷剂补充、回收和各泄漏物种 | Mass | kg | 按具名制冷剂闭合库存平衡；依据供应商组成记录，把 R404A 损失拆为 HFC-125、HFC-134a 和 HFC-143a 排放。 |
| mu_effluent_load | 每种废水物质 | Mass | kg | 对同一时间区间的匹配出水流量和实验室浓度逐污染物计算；保留单位、采样基准、未检出值处理和排放环境介质。 |
| mu_route_yield | 每项过程转移 | Mass | kg | 按过程和批次计算投入、合格产出、共产品、废物和库存变化；不得借用另一产品形态或路线推算缺失流。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂门口接收分别识别的冷藏或冷冻肉、解剖组织或血液，以及准确配方原料、能源载体、水源、制冷剂和包装制品。 |
| starting_condition_role | 进入配制产品前景系统的外购上游产品投入和基本流水取用。 |
| product_classification_scope | 准确 CPC 21189。正确排除交叉引用为 CPC 21182 和 CPC 21183，而不是已核验参考流备注中错误的 22182 和 22183。 |
| recursive_input_rule | 若某项投入本身是 CPC 21189 配制产品，则将其作为单独识别的外购配料记录，并带有自身生产者阶段来源、产品形态、路线和 UUID 状态；不得以本 PCR 参考流递归替代该投入。 |
| upstream_dataset_requirement | 把动物源性投入、配方原料、燃料、电力、供水、制冷剂和包装制品连接至质量经评估的上游数据集。实际位于上游时，把屠宰或动物副产品操作作为单独关联数据集；不得强制并入非综合配制产品工厂。 |
| disclosure | 声明场址、报告期、准确物料清单、接收状态、一个保藏分支、过程设备、时间—温度或计划热处理记录、成品状态、包装规格、制冷系统、水源、废水去向、共产品用途、分配和所有被排除的生命周期阶段。 |

前景边界包括接收与温控暂存、检验、声明的预处理和配方操作、所选保藏分支、作为该分支组成部分的冷却、最终包装、成品贮存与放行、卫生清洗，以及条件性场内废水处理。入厂前供应商操作和运输、下游配送、零售、消费者使用和寿命终止仍在本前景边界之外，除非作为单独识别的关联过程建模。

热加工分支要求准确声明煮制、油炸、烘烤或蒸制方法。罐藏分支要求密封装填、封口、有据计划热处理、冷却、完整性审查和偏差记录。不得用腌制或调味分支重新标记以盐腌、盐水保藏、熏制、干制或冷冻为界定性保藏方法的产品。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receipt` | 原料接收与温控暂存 | `required` | 始终纳入，从工厂门口接收至向预处理环节放行。 | 前景生产 | 向预处理放行 1 kg 合格动物源性原料 |
| `preparation_formulation` | 预处理、配方、绞碎、混合与成型 | `required` | 始终纳入；仅记录声明的切割、去骨、绞碎、混合、调味、填充或成型操作。 | 前景生产 | 放行 1 kg 声明路线的前体物 |
| `thermal_preservation` | 声明的煮制、油炸、烘烤或蒸制路线 | `conditional` | 当锁定的保藏路线为煮制、油炸、烘烤或蒸制时纳入；选择一个具名路线和一个具体产品形态转移流。 | 前景生产 | 放行 1 kg 热加工产品 |
| `hermetic_canning` | 密封装填、封口、热处理与冷却 | `conditional` | 仅对采用经记录的计划热处理制成的密封罐藏产品纳入。 | 前景生产 | 放行 1 kg 净罐藏产品，不含容器质量 |
| `pickling_seasoning` | 声明的腌制或调味保藏路线 | `conditional` | 当腌制或调味为锁定路线，且冷冻、盐腌、盐水保藏、熏制和干制不是界定性保藏方法时纳入。 | 前景生产 | 放行 1 kg 腌制或调味产品 |
| `packaging_storage_release` | 最终包装、成品贮存与放行 | `required` | 始终纳入；最终状态为常温货架稳定或冷藏，且主要保藏方式不是冷冻。 | 前景生产 | 放行 1 kg 净合格参考产品 |
| `sanitation_wastewater` | 卫生清洗与条件性场内废水处理 | `required` | 卫生清洗始终纳入；仅当报告设施运行场内废水处理时纳入该处理。 | 前景支持 | 分摊到同一生产批次的卫生清洗记录 |

### 过程：原料接收与温控暂存（`raw_material_receipt`）

本过程以向预处理放行 1 kg 合格动物源性原料为定量参考。仅应用与锁定物料清单、包装、设备、去向和路线匹配的具体卡片；缺失必须由记录证明，不得用合并交换替代。

#### 输入

##### 产品流

###### 电网电力投入（`raw_material_receipt_grid_electricity`）

电网电力是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：记录本过程单独计量或开票的电网电力用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_resource`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 外购蒸汽投入（`raw_material_receipt_purchased_steam`）

外购蒸汽是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的外购蒸汽用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_resource`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 外购热水投入（`raw_material_receipt_purchased_hot_water`）

外购热水是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的外购热水用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_resource`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 天然气投入（`raw_material_receipt_natural_gas`）

天然气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的天然气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_resource`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 柴油投入（`raw_material_receipt_diesel`）

柴油是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Diesel
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的柴油用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_resource`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 液化石油气投入（`raw_material_receipt_liquefied_petroleum_gas`）

液化石油气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的液化石油气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_resource`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 外购压缩空气投入（`raw_material_receipt_purchased_compressed_air`）

外购压缩空气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased compressed air
- 流属性/单位：Volume / m3
- 数量规则：记录本过程单独计量或开票的外购压缩空气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_resource`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 市政饮用水投入（`raw_material_receipt_potable_mains_water`）

市政饮用水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Potable mains water
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的市政饮用水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_resource`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### R717 氨制冷剂补充（`raw_material_receipt_ammonia_refrigerant_r717`）

R717 氨制冷剂补充是一项单独产品交换，仅对具名的已安装制冷系统记录。

- 选定流：Ammonia refrigerant R717
- 流属性/单位：Mass / kg
- 数量规则：根据所声明制冷系统的维护领用记录，记录实际制冷剂补充质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_resource`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### HFC-134a 1,1,1,2-四氟乙烷制冷剂补充（`raw_material_receipt_1_1_1_2_tetrafluoroethane_refrigerant_hfc_134a`）

HFC-134a 1,1,1,2-四氟乙烷制冷剂补充是一项单独产品交换，仅对具名的已安装制冷系统记录。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant HFC-134a
- 流属性/单位：Mass / kg
- 数量规则：根据所声明制冷系统的维护领用记录，记录实际制冷剂补充质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_resource`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### R404A 制冷剂混合物补充（`raw_material_receipt_r404a_refrigerant_blend`）

R404A 制冷剂混合物补充是一项单独产品交换，仅对具名的已安装制冷系统记录。

- 选定流：R404A refrigerant blend
- 流属性/单位：Mass / kg
- 数量规则：根据所声明制冷系统的维护领用记录，记录实际制冷剂补充质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_resource`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 饮用冰投入（`raw_material_receipt_potable_ice`）

饮用冰在接收时直接接触产品或用于温控时单独记录。

- 选定流：Potable ice
- 流属性/单位：Mass / kg
- 数量规则：根据经校准的前景记录，记录跨越本过程边界的净投入量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_resource`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 冷藏牛骨骼肌投入（`raw_material_receipt_input_chilled_beef_skeletal_muscle`）

冷藏牛骨骼肌是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Chilled beef skeletal muscle
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷藏动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷冻牛骨骼肌投入（`raw_material_receipt_input_frozen_beef_skeletal_muscle`）

冷冻牛骨骼肌是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Frozen beef skeletal muscle
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷冻动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷藏猪骨骼肌投入（`raw_material_receipt_input_chilled_pork_skeletal_muscle`）

冷藏猪骨骼肌是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Chilled pork skeletal muscle
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷藏动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷冻猪骨骼肌投入（`raw_material_receipt_input_frozen_pork_skeletal_muscle`）

冷冻猪骨骼肌是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Frozen pork skeletal muscle
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷冻动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷藏绵羊骨骼肌投入（`raw_material_receipt_input_chilled_mutton_skeletal_muscle`）

冷藏绵羊骨骼肌是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Chilled mutton skeletal muscle
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷藏动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷冻绵羊骨骼肌投入（`raw_material_receipt_input_frozen_mutton_skeletal_muscle`）

冷冻绵羊骨骼肌是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Frozen mutton skeletal muscle
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷冻动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷藏兔肉投入（`raw_material_receipt_input_chilled_rabbit_meat`）

冷藏兔肉是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Chilled rabbit meat
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷藏动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷冻兔肉投入（`raw_material_receipt_input_frozen_rabbit_meat`）

冷冻兔肉是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Frozen rabbit meat
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷冻动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷藏鸡肉投入（`raw_material_receipt_input_chilled_chicken_meat`）

冷藏鸡肉是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Chilled chicken meat
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷藏动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷冻鸡肉投入（`raw_material_receipt_input_frozen_chicken_meat`）

冷冻鸡肉是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Frozen chicken meat
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷冻动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷藏鸭肉投入（`raw_material_receipt_input_chilled_duck_meat`）

冷藏鸭肉是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Chilled duck meat
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷藏动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷冻鸭肉投入（`raw_material_receipt_input_frozen_duck_meat`）

冷冻鸭肉是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Frozen duck meat
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷冻动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷藏蛙腿投入（`raw_material_receipt_input_chilled_frog_legs`）

冷藏蛙腿是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Chilled frog legs
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷藏动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷冻蛙腿投入（`raw_material_receipt_input_frozen_frog_legs`）

冷冻蛙腿是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Frozen frog legs
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷冻动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷藏海豹肉投入（`raw_material_receipt_input_chilled_seal_meat`）

冷藏海豹肉是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Chilled seal meat
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷藏动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷冻海豹肉投入（`raw_material_receipt_input_frozen_seal_meat`）

冷冻海豹肉是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Frozen seal meat
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷冻动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷藏鲸肉投入（`raw_material_receipt_input_chilled_whale_meat`）

冷藏鲸肉是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Chilled whale meat
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷藏动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷冻鲸肉投入（`raw_material_receipt_input_frozen_whale_meat`）

冷冻鲸肉是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Frozen whale meat
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷冻动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷藏牛肝投入（`raw_material_receipt_input_chilled_beef_liver`）

冷藏牛肝是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Chilled beef liver
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷藏动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷冻牛肝投入（`raw_material_receipt_input_frozen_beef_liver`）

冷冻牛肝是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Frozen beef liver
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷冻动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷藏猪肝投入（`raw_material_receipt_input_chilled_pork_liver`）

冷藏猪肝是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Chilled pork liver
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷藏动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷冻猪肝投入（`raw_material_receipt_input_frozen_pork_liver`）

冷冻猪肝是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Frozen pork liver
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷冻动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷藏牛心投入（`raw_material_receipt_input_chilled_beef_heart`）

冷藏牛心是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Chilled beef heart
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷藏动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷冻牛心投入（`raw_material_receipt_input_frozen_beef_heart`）

冷冻牛心是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Frozen beef heart
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷冻动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷藏牛舌投入（`raw_material_receipt_input_chilled_beef_tongue`）

冷藏牛舌是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Chilled beef tongue
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷藏动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷冻牛舌投入（`raw_material_receipt_input_frozen_beef_tongue`）

冷冻牛舌是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Frozen beef tongue
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷冻动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷藏猪血投入（`raw_material_receipt_input_chilled_pig_blood`）

冷藏猪血是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Chilled pig blood
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷藏动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷冻猪血投入（`raw_material_receipt_input_frozen_pig_blood`）

冷冻猪血是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Frozen pig blood
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷冻动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷藏牛血投入（`raw_material_receipt_input_chilled_bovine_blood`）

冷藏牛血是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Chilled bovine blood
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷藏动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 冷冻牛血投入（`raw_material_receipt_input_frozen_bovine_blood`）

冷冻牛血是跨越工厂门口边界的一项准确动物源性原料，不代表其他物种、组织、血液来源或接收状态。

- 选定流：Frozen bovine blood
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确冷冻动物、组织或血液身份的净接收质量，扣除运输包装；保留供应商批次和接收温度记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

##### 废物流

本过程在该流类型组中不规定交换。

##### 基本流

###### 地下水投入（`raw_material_receipt_groundwater`）

地下水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Groundwater
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的地下水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_resource`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 地表水投入（`raw_material_receipt_surface_water`）

地表水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Surface water
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的地表水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_resource`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

#### 输出

##### 产品流

###### 合格牛骨骼肌（`raw_material_receipt_output_accepted_beef_skeletal_muscle`）

合格牛骨骼肌是接收检验后的单一内部产品转移流，并保留物种和解剖身份。

- 选定流：Accepted beef skeletal muscle
- 流属性/单位：Mass / kg
- 数量规则：记录检验后向预处理放行的合格质量；在批次元数据中保留来料冷藏或冷冻状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格猪骨骼肌（`raw_material_receipt_output_accepted_pork_skeletal_muscle`）

合格猪骨骼肌是接收检验后的单一内部产品转移流，并保留物种和解剖身份。

- 选定流：Accepted pork skeletal muscle
- 流属性/单位：Mass / kg
- 数量规则：记录检验后向预处理放行的合格质量；在批次元数据中保留来料冷藏或冷冻状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格绵羊骨骼肌（`raw_material_receipt_output_accepted_mutton_skeletal_muscle`）

合格绵羊骨骼肌是接收检验后的单一内部产品转移流，并保留物种和解剖身份。

- 选定流：Accepted mutton skeletal muscle
- 流属性/单位：Mass / kg
- 数量规则：记录检验后向预处理放行的合格质量；在批次元数据中保留来料冷藏或冷冻状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格兔肉（`raw_material_receipt_output_accepted_rabbit_meat`）

合格兔肉是接收检验后的单一内部产品转移流，并保留物种和解剖身份。

- 选定流：Accepted rabbit meat
- 流属性/单位：Mass / kg
- 数量规则：记录检验后向预处理放行的合格质量；在批次元数据中保留来料冷藏或冷冻状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格鸡肉（`raw_material_receipt_output_accepted_chicken_meat`）

合格鸡肉是接收检验后的单一内部产品转移流，并保留物种和解剖身份。

- 选定流：Accepted chicken meat
- 流属性/单位：Mass / kg
- 数量规则：记录检验后向预处理放行的合格质量；在批次元数据中保留来料冷藏或冷冻状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格鸭肉（`raw_material_receipt_output_accepted_duck_meat`）

合格鸭肉是接收检验后的单一内部产品转移流，并保留物种和解剖身份。

- 选定流：Accepted duck meat
- 流属性/单位：Mass / kg
- 数量规则：记录检验后向预处理放行的合格质量；在批次元数据中保留来料冷藏或冷冻状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格蛙腿（`raw_material_receipt_output_accepted_frog_legs`）

合格蛙腿是接收检验后的单一内部产品转移流，并保留物种和解剖身份。

- 选定流：Accepted frog legs
- 流属性/单位：Mass / kg
- 数量规则：记录检验后向预处理放行的合格质量；在批次元数据中保留来料冷藏或冷冻状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格海豹肉（`raw_material_receipt_output_accepted_seal_meat`）

合格海豹肉是接收检验后的单一内部产品转移流，并保留物种和解剖身份。

- 选定流：Accepted seal meat
- 流属性/单位：Mass / kg
- 数量规则：记录检验后向预处理放行的合格质量；在批次元数据中保留来料冷藏或冷冻状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格鲸肉（`raw_material_receipt_output_accepted_whale_meat`）

合格鲸肉是接收检验后的单一内部产品转移流，并保留物种和解剖身份。

- 选定流：Accepted whale meat
- 流属性/单位：Mass / kg
- 数量规则：记录检验后向预处理放行的合格质量；在批次元数据中保留来料冷藏或冷冻状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格牛肝（`raw_material_receipt_output_accepted_beef_liver`）

合格牛肝是接收检验后的单一内部产品转移流，并保留物种和解剖身份。

- 选定流：Accepted beef liver
- 流属性/单位：Mass / kg
- 数量规则：记录检验后向预处理放行的合格质量；在批次元数据中保留来料冷藏或冷冻状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格猪肝（`raw_material_receipt_output_accepted_pork_liver`）

合格猪肝是接收检验后的单一内部产品转移流，并保留物种和解剖身份。

- 选定流：Accepted pork liver
- 流属性/单位：Mass / kg
- 数量规则：记录检验后向预处理放行的合格质量；在批次元数据中保留来料冷藏或冷冻状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格牛心（`raw_material_receipt_output_accepted_beef_heart`）

合格牛心是接收检验后的单一内部产品转移流，并保留物种和解剖身份。

- 选定流：Accepted beef heart
- 流属性/单位：Mass / kg
- 数量规则：记录检验后向预处理放行的合格质量；在批次元数据中保留来料冷藏或冷冻状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格牛舌（`raw_material_receipt_output_accepted_beef_tongue`）

合格牛舌是接收检验后的单一内部产品转移流，并保留物种和解剖身份。

- 选定流：Accepted beef tongue
- 流属性/单位：Mass / kg
- 数量规则：记录检验后向预处理放行的合格质量；在批次元数据中保留来料冷藏或冷冻状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格猪血（`raw_material_receipt_output_accepted_pig_blood`）

合格猪血是接收检验后的单一内部产品转移流，并保留物种和解剖身份。

- 选定流：Accepted pig blood
- 流属性/单位：Mass / kg
- 数量规则：记录检验后向预处理放行的合格质量；在批次元数据中保留来料冷藏或冷冻状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格牛血（`raw_material_receipt_output_accepted_bovine_blood`）

合格牛血是接收检验后的单一内部产品转移流，并保留物种和解剖身份。

- 选定流：Accepted bovine blood
- 流属性/单位：Mass / kg
- 数量规则：记录检验后向预处理放行的合格质量；在批次元数据中保留来料冷藏或冷冻状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_material`
- 来源：`unsd-cpc-3-21189`、`eu-reg-853-2004`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

##### 废物流

###### 回收的R717 氨制冷剂（`raw_material_receipt_recovered_ammonia_refrigerant_r717`）

回收的R717 氨制冷剂是所声明制冷系统的一项独立维护废物流。

- 选定流：Recovered Ammonia refrigerant R717
- 流属性/单位：Mass / kg
- 数量规则：根据维护记录，记录为再生或受控处置而回收的制冷剂质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 回收的HFC-134a 1,1,1,2-四氟乙烷制冷剂（`raw_material_receipt_recovered_1_1_1_2_tetrafluoroethane_refrigerant_hfc_134a`）

回收的HFC-134a 1,1,1,2-四氟乙烷制冷剂是所声明制冷系统的一项独立维护废物流。

- 选定流：Recovered 1,1,1,2-Tetrafluoroethane refrigerant HFC-134a
- 流属性/单位：Mass / kg
- 数量规则：根据维护记录，记录为再生或受控处置而回收的制冷剂质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 回收的R404A 制冷剂混合物（`raw_material_receipt_recovered_r404a_refrigerant_blend`）

回收的R404A 制冷剂混合物是所声明制冷系统的一项独立维护废物流。

- 选定流：Recovered R404A refrigerant blend
- 流属性/单位：Mass / kg
- 数量规则：根据维护记录，记录为再生或受控处置而回收的制冷剂质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 拒收牛骨骼肌（`raw_material_receipt_waste_rejected_beef_skeletal_muscle`）

拒收牛骨骼肌是接收检验产生的一项物种和组织特定废物流。

- 选定流：Rejected beef skeletal muscle
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的拒收质量和有据的废物去向；不得与合格原料相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 拒收猪骨骼肌（`raw_material_receipt_waste_rejected_pork_skeletal_muscle`）

拒收猪骨骼肌是接收检验产生的一项物种和组织特定废物流。

- 选定流：Rejected pork skeletal muscle
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的拒收质量和有据的废物去向；不得与合格原料相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 拒收绵羊骨骼肌（`raw_material_receipt_waste_rejected_mutton_skeletal_muscle`）

拒收绵羊骨骼肌是接收检验产生的一项物种和组织特定废物流。

- 选定流：Rejected mutton skeletal muscle
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的拒收质量和有据的废物去向；不得与合格原料相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 拒收兔肉（`raw_material_receipt_waste_rejected_rabbit_meat`）

拒收兔肉是接收检验产生的一项物种和组织特定废物流。

- 选定流：Rejected rabbit meat
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的拒收质量和有据的废物去向；不得与合格原料相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 拒收鸡肉（`raw_material_receipt_waste_rejected_chicken_meat`）

拒收鸡肉是接收检验产生的一项物种和组织特定废物流。

- 选定流：Rejected chicken meat
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的拒收质量和有据的废物去向；不得与合格原料相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 拒收鸭肉（`raw_material_receipt_waste_rejected_duck_meat`）

拒收鸭肉是接收检验产生的一项物种和组织特定废物流。

- 选定流：Rejected duck meat
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的拒收质量和有据的废物去向；不得与合格原料相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 拒收蛙腿（`raw_material_receipt_waste_rejected_frog_legs`）

拒收蛙腿是接收检验产生的一项物种和组织特定废物流。

- 选定流：Rejected frog legs
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的拒收质量和有据的废物去向；不得与合格原料相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 拒收海豹肉（`raw_material_receipt_waste_rejected_seal_meat`）

拒收海豹肉是接收检验产生的一项物种和组织特定废物流。

- 选定流：Rejected seal meat
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的拒收质量和有据的废物去向；不得与合格原料相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 拒收鲸肉（`raw_material_receipt_waste_rejected_whale_meat`）

拒收鲸肉是接收检验产生的一项物种和组织特定废物流。

- 选定流：Rejected whale meat
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的拒收质量和有据的废物去向；不得与合格原料相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 拒收牛肝（`raw_material_receipt_waste_rejected_beef_liver`）

拒收牛肝是接收检验产生的一项物种和组织特定废物流。

- 选定流：Rejected beef liver
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的拒收质量和有据的废物去向；不得与合格原料相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 拒收猪肝（`raw_material_receipt_waste_rejected_pork_liver`）

拒收猪肝是接收检验产生的一项物种和组织特定废物流。

- 选定流：Rejected pork liver
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的拒收质量和有据的废物去向；不得与合格原料相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 拒收牛心（`raw_material_receipt_waste_rejected_beef_heart`）

拒收牛心是接收检验产生的一项物种和组织特定废物流。

- 选定流：Rejected beef heart
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的拒收质量和有据的废物去向；不得与合格原料相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 拒收牛舌（`raw_material_receipt_waste_rejected_beef_tongue`）

拒收牛舌是接收检验产生的一项物种和组织特定废物流。

- 选定流：Rejected beef tongue
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的拒收质量和有据的废物去向；不得与合格原料相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 拒收猪血（`raw_material_receipt_waste_rejected_pig_blood`）

拒收猪血是接收检验产生的一项物种和组织特定废物流。

- 选定流：Rejected pig blood
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的拒收质量和有据的废物去向；不得与合格原料相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 拒收牛血（`raw_material_receipt_waste_rejected_bovine_blood`）

拒收牛血是接收检验产生的一项物种和组织特定废物流。

- 选定流：Rejected bovine blood
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的拒收质量和有据的废物去向；不得与合格原料相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废弃低密度聚乙烯原料内衬（`raw_material_receipt_discarded_low_density_polyethylene_raw_material_liner`）

废弃低密度聚乙烯原料内衬是一项材料特定的来料包装废物交换。

- 选定流：Discarded low-density polyethylene raw-material liner
- 流属性/单位：Mass / kg
- 数量规则：记录接收环节单独称量并成为废物的材料；排除退回再使用的物品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`eu-pef-2021-2279`

###### 废弃瓦楞纤维板原料箱（`raw_material_receipt_discarded_corrugated_fibreboard_raw_material_box`）

废弃瓦楞纤维板原料箱是一项材料特定的来料包装废物交换。

- 选定流：Discarded corrugated fibreboard raw-material box
- 流属性/单位：Mass / kg
- 数量规则：记录接收环节单独称量并成为废物的材料；排除退回再使用的物品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`eu-pef-2021-2279`

###### 废弃高密度聚乙烯原料周转箱（`raw_material_receipt_discarded_high_density_polyethylene_raw_material_tote`）

废弃高密度聚乙烯原料周转箱是一项材料特定的来料包装废物交换。

- 选定流：Discarded high-density polyethylene raw-material tote
- 流属性/单位：Mass / kg
- 数量规则：记录接收环节单独称量并成为废物的材料；排除退回再使用的物品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`eu-pef-2021-2279`

###### 废弃木质原料托盘（`raw_material_receipt_discarded_wooden_raw_material_pallet`）

废弃木质原料托盘是一项材料特定的来料包装废物交换。

- 选定流：Discarded wooden raw-material pallet
- 流属性/单位：Mass / kg
- 数量规则：记录接收环节单独称量并成为废物的材料；排除退回再使用的物品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`eu-pef-2021-2279`

###### 原料解冻废水（`raw_material_receipt_raw_material_thawing_wastewater`）

原料解冻废水是接收处理产生的一项独立水性废物流，不与其他过程废水卡合并。

- 选定流：Raw-material thawing wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录实测废水质量，或用有据密度把体积换算为质量，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 原料滴液废水（`raw_material_receipt_raw_material_drip_loss_wastewater`）

原料滴液废水是接收处理产生的一项独立水性废物流，不与其他过程废水卡合并。

- 选定流：Raw-material drip-loss wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录实测废水质量，或用有据密度把体积换算为质量，并保留其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_receipt_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

##### 基本流

###### 化石二氧化碳排放至空气（`raw_material_receipt_carbon_dioxide_fossil_to_air`）

化石二氧化碳排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Carbon dioxide, fossil to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_raw_material_receipt_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 一氧化氮排放至空气（`raw_material_receipt_nitrogen_monoxide_to_air`）

一氧化氮排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_raw_material_receipt_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 二氧化氮排放至空气（`raw_material_receipt_nitrogen_dioxide_to_air`）

二氧化氮排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_raw_material_receipt_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 二氧化硫排放至空气（`raw_material_receipt_sulfur_dioxide_to_air`）

二氧化硫排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_raw_material_receipt_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 小于 2.5 微米颗粒物排放至空气（`raw_material_receipt_particulate_matter_below_2_5_micrometres_to_air`）

小于 2.5 微米颗粒物排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_raw_material_receipt_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 2.5 至 10 微米颗粒物排放至空气（`raw_material_receipt_particulate_matter_from_2_5_to_10_micrometres_to_air`）

2.5 至 10 微米颗粒物排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Particulate matter from 2.5 to 10 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_raw_material_receipt_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 氨排放至空气（`raw_material_receipt_ammonia_to_air`）

氨排放至空气是一种排放至空气的制冷剂物种，不得与其他制冷剂物种合并。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：依据有据的制冷剂库存平衡计算排放质量；R404A 损失须按供应商组成记录拆分为各个 HFC 组分。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_raw_material_receipt_emission`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### HFC-134a 1,1,1,2-四氟乙烷排放至空气（`raw_material_receipt_1_1_1_2_tetrafluoroethane_hfc_134a_to_air`）

HFC-134a 1,1,1,2-四氟乙烷排放至空气是一种排放至空气的制冷剂物种，不得与其他制冷剂物种合并。

- 选定流：1,1,1,2-Tetrafluoroethane HFC-134a to air
- 流属性/单位：Mass / kg
- 数量规则：依据有据的制冷剂库存平衡计算排放质量；R404A 损失须按供应商组成记录拆分为各个 HFC 组分。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_raw_material_receipt_emission`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### HFC-125 五氟乙烷排放至空气（`raw_material_receipt_pentafluoroethane_hfc_125_to_air`）

HFC-125 五氟乙烷排放至空气是一种排放至空气的制冷剂物种，不得与其他制冷剂物种合并。

- 选定流：Pentafluoroethane HFC-125 to air
- 流属性/单位：Mass / kg
- 数量规则：依据有据的制冷剂库存平衡计算排放质量；R404A 损失须按供应商组成记录拆分为各个 HFC 组分。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_raw_material_receipt_emission`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### HFC-143a 1,1,1-三氟乙烷排放至空气（`raw_material_receipt_1_1_1_trifluoroethane_hfc_143a_to_air`）

HFC-143a 1,1,1-三氟乙烷排放至空气是一种排放至空气的制冷剂物种，不得与其他制冷剂物种合并。

- 选定流：1,1,1-Trifluoroethane HFC-143a to air
- 流属性/单位：Mass / kg
- 数量规则：依据有据的制冷剂库存平衡计算排放质量；R404A 损失须按供应商组成记录拆分为各个 HFC 组分。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_raw_material_receipt_emission`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

### 过程：预处理、配方、绞碎、混合与成型（`preparation_formulation`）

本过程以放行 1 kg 声明路线的前体物为定量参考。仅应用与锁定物料清单、包装、设备、去向和路线匹配的具体卡片；缺失必须由记录证明，不得用合并交换替代。

#### 输入

##### 产品流

###### 电网电力投入（`preparation_formulation_grid_electricity`）

电网电力是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：记录本过程单独计量或开票的电网电力用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 外购蒸汽投入（`preparation_formulation_purchased_steam`）

外购蒸汽是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的外购蒸汽用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 外购热水投入（`preparation_formulation_purchased_hot_water`）

外购热水是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的外购热水用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 天然气投入（`preparation_formulation_natural_gas`）

天然气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的天然气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 柴油投入（`preparation_formulation_diesel`）

柴油是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Diesel
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的柴油用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 液化石油气投入（`preparation_formulation_liquefied_petroleum_gas`）

液化石油气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的液化石油气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 外购压缩空气投入（`preparation_formulation_purchased_compressed_air`）

外购压缩空气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased compressed air
- 流属性/单位：Volume / m3
- 数量规则：记录本过程单独计量或开票的外购压缩空气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 市政饮用水投入（`preparation_formulation_potable_mains_water`）

市政饮用水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Potable mains water
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的市政饮用水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格牛骨骼肌投入（`preparation_formulation_input_accepted_beef_skeletal_muscle`）

合格牛骨骼肌是进入预处理与配方环节的一项准确内部原料转移流。

- 选定流：Accepted beef skeletal muscle
- 流属性/单位：Mass / kg
- 数量规则：根据接收批次记录，记录进入预处理的合格质量；保留准确物种和解剖身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格猪骨骼肌投入（`preparation_formulation_input_accepted_pork_skeletal_muscle`）

合格猪骨骼肌是进入预处理与配方环节的一项准确内部原料转移流。

- 选定流：Accepted pork skeletal muscle
- 流属性/单位：Mass / kg
- 数量规则：根据接收批次记录，记录进入预处理的合格质量；保留准确物种和解剖身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格绵羊骨骼肌投入（`preparation_formulation_input_accepted_mutton_skeletal_muscle`）

合格绵羊骨骼肌是进入预处理与配方环节的一项准确内部原料转移流。

- 选定流：Accepted mutton skeletal muscle
- 流属性/单位：Mass / kg
- 数量规则：根据接收批次记录，记录进入预处理的合格质量；保留准确物种和解剖身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格兔肉投入（`preparation_formulation_input_accepted_rabbit_meat`）

合格兔肉是进入预处理与配方环节的一项准确内部原料转移流。

- 选定流：Accepted rabbit meat
- 流属性/单位：Mass / kg
- 数量规则：根据接收批次记录，记录进入预处理的合格质量；保留准确物种和解剖身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格鸡肉投入（`preparation_formulation_input_accepted_chicken_meat`）

合格鸡肉是进入预处理与配方环节的一项准确内部原料转移流。

- 选定流：Accepted chicken meat
- 流属性/单位：Mass / kg
- 数量规则：根据接收批次记录，记录进入预处理的合格质量；保留准确物种和解剖身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格鸭肉投入（`preparation_formulation_input_accepted_duck_meat`）

合格鸭肉是进入预处理与配方环节的一项准确内部原料转移流。

- 选定流：Accepted duck meat
- 流属性/单位：Mass / kg
- 数量规则：根据接收批次记录，记录进入预处理的合格质量；保留准确物种和解剖身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格蛙腿投入（`preparation_formulation_input_accepted_frog_legs`）

合格蛙腿是进入预处理与配方环节的一项准确内部原料转移流。

- 选定流：Accepted frog legs
- 流属性/单位：Mass / kg
- 数量规则：根据接收批次记录，记录进入预处理的合格质量；保留准确物种和解剖身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格海豹肉投入（`preparation_formulation_input_accepted_seal_meat`）

合格海豹肉是进入预处理与配方环节的一项准确内部原料转移流。

- 选定流：Accepted seal meat
- 流属性/单位：Mass / kg
- 数量规则：根据接收批次记录，记录进入预处理的合格质量；保留准确物种和解剖身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格鲸肉投入（`preparation_formulation_input_accepted_whale_meat`）

合格鲸肉是进入预处理与配方环节的一项准确内部原料转移流。

- 选定流：Accepted whale meat
- 流属性/单位：Mass / kg
- 数量规则：根据接收批次记录，记录进入预处理的合格质量；保留准确物种和解剖身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格牛肝投入（`preparation_formulation_input_accepted_beef_liver`）

合格牛肝是进入预处理与配方环节的一项准确内部原料转移流。

- 选定流：Accepted beef liver
- 流属性/单位：Mass / kg
- 数量规则：根据接收批次记录，记录进入预处理的合格质量；保留准确物种和解剖身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格猪肝投入（`preparation_formulation_input_accepted_pork_liver`）

合格猪肝是进入预处理与配方环节的一项准确内部原料转移流。

- 选定流：Accepted pork liver
- 流属性/单位：Mass / kg
- 数量规则：根据接收批次记录，记录进入预处理的合格质量；保留准确物种和解剖身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格牛心投入（`preparation_formulation_input_accepted_beef_heart`）

合格牛心是进入预处理与配方环节的一项准确内部原料转移流。

- 选定流：Accepted beef heart
- 流属性/单位：Mass / kg
- 数量规则：根据接收批次记录，记录进入预处理的合格质量；保留准确物种和解剖身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格牛舌投入（`preparation_formulation_input_accepted_beef_tongue`）

合格牛舌是进入预处理与配方环节的一项准确内部原料转移流。

- 选定流：Accepted beef tongue
- 流属性/单位：Mass / kg
- 数量规则：根据接收批次记录，记录进入预处理的合格质量；保留准确物种和解剖身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格猪血投入（`preparation_formulation_input_accepted_pig_blood`）

合格猪血是进入预处理与配方环节的一项准确内部原料转移流。

- 选定流：Accepted pig blood
- 流属性/单位：Mass / kg
- 数量规则：根据接收批次记录，记录进入预处理的合格质量；保留准确物种和解剖身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 合格牛血投入（`preparation_formulation_input_accepted_bovine_blood`）

合格牛血是进入预处理与配方环节的一项准确内部原料转移流。

- 选定流：Accepted bovine blood
- 流属性/单位：Mass / kg
- 数量规则：根据接收批次记录，记录进入预处理的合格质量；保留准确物种和解剖身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 牛脂配方投入（`preparation_formulation_beef_tallow`）

牛脂是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Beef tallow
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的牛脂质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 猪脂配方投入（`preparation_formulation_pork_lard`）

猪脂是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Pork lard
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的猪脂质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 鸡脂配方投入（`preparation_formulation_chicken_fat`）

鸡脂是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Chicken fat
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的鸡脂质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 氯化钠配方投入（`preparation_formulation_sodium_chloride`）

氯化钠是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Sodium chloride
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的氯化钠质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 蔗糖配方投入（`preparation_formulation_sucrose`）

蔗糖是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Sucrose
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的蔗糖质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 黑胡椒粉配方投入（`preparation_formulation_black_pepper_powder`）

黑胡椒粉是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Black pepper powder
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的黑胡椒粉质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 红椒粉配方投入（`preparation_formulation_paprika_powder`）

红椒粉是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Paprika powder
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的红椒粉质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 大蒜粉配方投入（`preparation_formulation_garlic_powder`）

大蒜粉是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Garlic powder
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的大蒜粉质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 洋葱粉配方投入（`preparation_formulation_onion_powder`）

洋葱粉是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Onion powder
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的洋葱粉质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 亚硝酸钠配方投入（`preparation_formulation_sodium_nitrite`）

亚硝酸钠是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Sodium nitrite
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的亚硝酸钠质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 硝酸钠配方投入（`preparation_formulation_sodium_nitrate`）

硝酸钠是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Sodium nitrate
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的硝酸钠质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 异抗坏血酸钠配方投入（`preparation_formulation_sodium_erythorbate`）

异抗坏血酸钠是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Sodium erythorbate
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的异抗坏血酸钠质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 抗坏血酸钠配方投入（`preparation_formulation_sodium_ascorbate`）

抗坏血酸钠是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Sodium ascorbate
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的抗坏血酸钠质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 三聚磷酸钠配方投入（`preparation_formulation_sodium_tripolyphosphate`）

三聚磷酸钠是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Sodium tripolyphosphate
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的三聚磷酸钠质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 卡拉胶配方投入（`preparation_formulation_carrageenan`）

卡拉胶是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Carrageenan
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的卡拉胶质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 马铃薯淀粉配方投入（`preparation_formulation_potato_starch`）

马铃薯淀粉是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Potato starch
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的马铃薯淀粉质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 玉米淀粉配方投入（`preparation_formulation_maize_starch`）

玉米淀粉是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Maize starch
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的玉米淀粉质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 大豆分离蛋白配方投入（`preparation_formulation_soy_protein_isolate`）

大豆分离蛋白是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Soy protein isolate
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的大豆分离蛋白质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 浓缩乳蛋白配方投入（`preparation_formulation_milk_protein_concentrate`）

浓缩乳蛋白是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Milk protein concentrate
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的浓缩乳蛋白质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 干蛋白配方投入（`preparation_formulation_dried_egg_white`）

干蛋白是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Dried egg white
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的干蛋白质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 乙酸配方投入（`preparation_formulation_acetic_acid`）

乙酸是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Acetic acid
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的乙酸质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 乳酸配方投入（`preparation_formulation_lactic_acid`）

乳酸是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Lactic acid
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的乳酸质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 柠檬酸配方投入（`preparation_formulation_citric_acid`）

柠檬酸是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Citric acid
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的柠檬酸质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 小麦面包糠配方投入（`preparation_formulation_wheat_breadcrumbs`）

小麦面包糠是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Wheat breadcrumbs
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的小麦面包糠质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 菠菜叶配方投入（`preparation_formulation_spinach_leaves`）

菠菜叶是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Spinach leaves
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的菠菜叶质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 胡萝卜块配方投入（`preparation_formulation_carrot_pieces`）

胡萝卜块是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Carrot pieces
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的胡萝卜块质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 猪肉高汤配方投入（`preparation_formulation_pork_stock`）

猪肉高汤是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Pork stock
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的猪肉高汤质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 牛肉高汤配方投入（`preparation_formulation_beef_stock`）

牛肉高汤是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Beef stock
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的牛肉高汤质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 食用牛明胶配方投入（`preparation_formulation_edible_bovine_gelatine`）

食用牛明胶是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Edible bovine gelatine
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的食用牛明胶质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 乳酸钠配方投入（`preparation_formulation_sodium_lactate`）

乳酸钠是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Sodium lactate
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的乳酸钠质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 山梨酸钾配方投入（`preparation_formulation_potassium_sorbate`）

山梨酸钾是一项准确配方原料或添加剂，仅在锁定的产品配方适用时使用，不代表其他原料。

- 选定流：Potassium sorbate
- 流属性/单位：Mass / kg
- 数量规则：记录配方批次领用的山梨酸钾质量；适用时保留供应商规格、食品法规符合性、批次和过敏原声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

##### 废物流

本过程在该流类型组中不规定交换。

##### 基本流

###### 地下水投入（`preparation_formulation_groundwater`）

地下水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Groundwater
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的地下水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 地表水投入（`preparation_formulation_surface_water`）

地表水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Surface water
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的地表水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

#### 输出

##### 产品流

###### 煮制用调味牛骨骼肌肉块前体物（`preparation_formulation_output_seasoned_beef_pieces`）

煮制用调味牛骨骼肌肉块是一项具体产品形态转移流，数据包仅在声明的配方与路线匹配时选用。

- 选定流：Seasoned beef skeletal-muscle pieces for cooking
- 流属性/单位：Mass / kg
- 数量规则：根据批次秤记录，记录向唯一声明保藏路线放行的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 油炸用裹衣鸡肉块前体物（`preparation_formulation_output_coated_chicken_pieces`）

油炸用裹衣鸡肉块是一项具体产品形态转移流，数据包仅在声明的配方与路线匹配时选用。

- 选定流：Coated chicken meat pieces for frying
- 流属性/单位：Mass / kg
- 数量规则：根据批次秤记录，记录向唯一声明保藏路线放行的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 烘烤用调味猪骨骼肌肉块前体物（`preparation_formulation_output_seasoned_pork_pieces`）

烘烤用调味猪骨骼肌肉块是一项具体产品形态转移流，数据包仅在声明的配方与路线匹配时选用。

- 选定流：Seasoned pork skeletal-muscle pieces for roasting
- 流属性/单位：Mass / kg
- 数量规则：根据批次秤记录，记录向唯一声明保藏路线放行的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 蒸制用调味蛙腿前体物（`preparation_formulation_output_seasoned_frog_legs`）

蒸制用调味蛙腿是一项具体产品形态转移流，数据包仅在声明的配方与路线匹配时选用。

- 选定流：Seasoned frog legs for steaming
- 流属性/单位：Mass / kg
- 数量规则：根据批次秤记录，记录向唯一声明保藏路线放行的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 烘烤用填充鸭肉卷前体物（`preparation_formulation_output_stuffed_duck_roll`）

烘烤用填充鸭肉卷是一项具体产品形态转移流，数据包仅在声明的配方与路线匹配时选用。

- 选定流：Stuffed duck meat roll for roasting
- 流属性/单位：Mass / kg
- 数量规则：根据批次秤记录，记录向唯一声明保藏路线放行的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 煮制用猪肝酱混合物前体物（`preparation_formulation_output_pork_liver_pate`）

煮制用猪肝酱混合物是一项具体产品形态转移流，数据包仅在声明的配方与路线匹配时选用。

- 选定流：Pork liver pâté mixture for cooking
- 流属性/单位：Mass / kg
- 数量规则：根据批次秤记录，记录向唯一声明保藏路线放行的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 煮制用牛肉糜酱混合物前体物（`preparation_formulation_output_beef_meat_paste`）

煮制用牛肉糜酱混合物是一项具体产品形态转移流，数据包仅在声明的配方与路线匹配时选用。

- 选定流：Beef meat-paste mixture for cooking
- 流属性/单位：Mass / kg
- 数量规则：根据批次秤记录，记录向唯一声明保藏路线放行的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 煮制用猪肉酱混合物前体物（`preparation_formulation_output_pork_rillettes`）

煮制用猪肉酱混合物是一项具体产品形态转移流，数据包仅在声明的配方与路线匹配时选用。

- 选定流：Pork rillettes mixture for cooking
- 流属性/单位：Mass / kg
- 数量规则：根据批次秤记录，记录向唯一声明保藏路线放行的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 煮制用鸡肉冻卷混合物前体物（`preparation_formulation_output_chicken_galantine`）

煮制用鸡肉冻卷混合物是一项具体产品形态转移流，数据包仅在声明的配方与路线匹配时选用。

- 选定流：Chicken galantine mixture for cooking
- 流属性/单位：Mass / kg
- 数量规则：根据批次秤记录，记录向唯一声明保藏路线放行的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 蒸制用猪血凝块混合物前体物（`preparation_formulation_output_pig_blood_curd`）

蒸制用猪血凝块混合物是一项具体产品形态转移流，数据包仅在声明的配方与路线匹配时选用。

- 选定流：Pig-blood curd mixture for steaming
- 流属性/单位：Mass / kg
- 数量规则：根据批次秤记录，记录向唯一声明保藏路线放行的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 罐藏用调味海豹肉块前体物（`preparation_formulation_output_seal_meat_canning`）

罐藏用调味海豹肉块是一项具体产品形态转移流，数据包仅在声明的配方与路线匹配时选用。

- 选定流：Seasoned seal meat pieces for canning
- 流属性/单位：Mass / kg
- 数量规则：根据批次秤记录，记录向唯一声明保藏路线放行的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 罐藏用调味鲸肉块前体物（`preparation_formulation_output_whale_meat_canning`）

罐藏用调味鲸肉块是一项具体产品形态转移流，数据包仅在声明的配方与路线匹配时选用。

- 选定流：Seasoned whale meat pieces for canning
- 流属性/单位：Mass / kg
- 数量规则：根据批次秤记录，记录向唯一声明保藏路线放行的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 醋腌用猪骨骼肌肉块前体物（`preparation_formulation_output_pork_vinegar_pickling`）

醋腌用猪骨骼肌肉块是一项具体产品形态转移流，数据包仅在声明的配方与路线匹配时选用。

- 选定流：Pork skeletal-muscle pieces for vinegar pickling
- 流属性/单位：Mass / kg
- 数量规则：根据批次秤记录，记录向唯一声明保藏路线放行的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 未保藏调味绞碎绵羊肉饼前体物（`preparation_formulation_output_mutton_patty`）

未保藏调味绞碎绵羊肉饼是一项具体产品形态转移流，数据包仅在声明的配方与路线匹配时选用。

- 选定流：Unpreserved seasoned minced mutton patty
- 流属性/单位：Mass / kg
- 数量规则：根据批次秤记录，记录向唯一声明保藏路线放行的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 牛骨共产品（`preparation_formulation_bovine_bone`）

牛骨仅在具有有据功能和市场去向时作为一项动物特定共产品交换。

- 选定流：Bovine bone
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并进入有据有益用途的回收骨质量；否则在数据包中按相应废物去向分类。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 猪骨共产品（`preparation_formulation_porcine_bone`）

猪骨仅在具有有据功能和市场去向时作为一项动物特定共产品交换。

- 选定流：Porcine bone
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并进入有据有益用途的回收骨质量；否则在数据包中按相应废物去向分类。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 绵羊骨共产品（`preparation_formulation_ovine_bone`）

绵羊骨仅在具有有据功能和市场去向时作为一项动物特定共产品交换。

- 选定流：Ovine bone
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并进入有据有益用途的回收骨质量；否则在数据包中按相应废物去向分类。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 兔骨共产品（`preparation_formulation_rabbit_bone`）

兔骨仅在具有有据功能和市场去向时作为一项动物特定共产品交换。

- 选定流：Rabbit bone
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并进入有据有益用途的回收骨质量；否则在数据包中按相应废物去向分类。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 鸡骨共产品（`preparation_formulation_chicken_bone`）

鸡骨仅在具有有据功能和市场去向时作为一项动物特定共产品交换。

- 选定流：Chicken bone
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并进入有据有益用途的回收骨质量；否则在数据包中按相应废物去向分类。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 鸭骨共产品（`preparation_formulation_duck_bone`）

鸭骨仅在具有有据功能和市场去向时作为一项动物特定共产品交换。

- 选定流：Duck bone
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并进入有据有益用途的回收骨质量；否则在数据包中按相应废物去向分类。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 蛙骨共产品（`preparation_formulation_frog_bone`）

蛙骨仅在具有有据功能和市场去向时作为一项动物特定共产品交换。

- 选定流：Frog bone
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并进入有据有益用途的回收骨质量；否则在数据包中按相应废物去向分类。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 海豹骨共产品（`preparation_formulation_seal_bone`）

海豹骨仅在具有有据功能和市场去向时作为一项动物特定共产品交换。

- 选定流：Seal bone
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并进入有据有益用途的回收骨质量；否则在数据包中按相应废物去向分类。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 鲸骨共产品（`preparation_formulation_whale_bone`）

鲸骨仅在具有有据功能和市场去向时作为一项动物特定共产品交换。

- 选定流：Whale bone
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并进入有据有益用途的回收骨质量；否则在数据包中按相应废物去向分类。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 供炼制的牛脂肪组织（`preparation_formulation_beef_adipose_tissue_for_rendering`）

供炼制的牛脂肪组织在回收有据时是一项动物特定共产品转移流。

- 选定流：Beef adipose tissue for rendering
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并进入有据炼制用途的脂肪组织；无证据时不得赋予共产品功能。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 供炼制的猪脂肪组织（`preparation_formulation_pork_adipose_tissue_for_rendering`）

供炼制的猪脂肪组织在回收有据时是一项动物特定共产品转移流。

- 选定流：Pork adipose tissue for rendering
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并进入有据炼制用途的脂肪组织；无证据时不得赋予共产品功能。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 供炼制的绵羊脂肪组织（`preparation_formulation_mutton_adipose_tissue_for_rendering`）

供炼制的绵羊脂肪组织在回收有据时是一项动物特定共产品转移流。

- 选定流：Mutton adipose tissue for rendering
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并进入有据炼制用途的脂肪组织；无证据时不得赋予共产品功能。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 供炼制的兔脂肪组织（`preparation_formulation_rabbit_adipose_tissue_for_rendering`）

供炼制的兔脂肪组织在回收有据时是一项动物特定共产品转移流。

- 选定流：Rabbit adipose tissue for rendering
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并进入有据炼制用途的脂肪组织；无证据时不得赋予共产品功能。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 供炼制的鸡脂肪组织（`preparation_formulation_chicken_adipose_tissue_for_rendering`）

供炼制的鸡脂肪组织在回收有据时是一项动物特定共产品转移流。

- 选定流：Chicken adipose tissue for rendering
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并进入有据炼制用途的脂肪组织；无证据时不得赋予共产品功能。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 供炼制的鸭脂肪组织（`preparation_formulation_duck_adipose_tissue_for_rendering`）

供炼制的鸭脂肪组织在回收有据时是一项动物特定共产品转移流。

- 选定流：Duck adipose tissue for rendering
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并进入有据炼制用途的脂肪组织；无证据时不得赋予共产品功能。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 供炼制的海豹脂肪组织（`preparation_formulation_seal_adipose_tissue_for_rendering`）

供炼制的海豹脂肪组织在回收有据时是一项动物特定共产品转移流。

- 选定流：Seal adipose tissue for rendering
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并进入有据炼制用途的脂肪组织；无证据时不得赋予共产品功能。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 供炼制的鲸脂肪组织（`preparation_formulation_whale_adipose_tissue_for_rendering`）

供炼制的鲸脂肪组织在回收有据时是一项动物特定共产品转移流。

- 选定流：Whale adipose tissue for rendering
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并进入有据炼制用途的脂肪组织；无证据时不得赋予共产品功能。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_material`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

##### 废物流

###### 不合格煮制用调味牛骨骼肌肉块（`preparation_formulation_waste_rejected_seasoned_beef_pieces`）

不合格煮制用调味牛骨骼肌肉块是一项产品形态特定的过程废物。

- 选定流：Rejected seasoned beef skeletal-muscle pieces for cooking
- 流属性/单位：Mass / kg
- 数量规则：记录保藏处理前单独称量的不合格前体物及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格油炸用裹衣鸡肉块（`preparation_formulation_waste_rejected_coated_chicken_pieces`）

不合格油炸用裹衣鸡肉块是一项产品形态特定的过程废物。

- 选定流：Rejected coated chicken meat pieces for frying
- 流属性/单位：Mass / kg
- 数量规则：记录保藏处理前单独称量的不合格前体物及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格烘烤用调味猪骨骼肌肉块（`preparation_formulation_waste_rejected_seasoned_pork_pieces`）

不合格烘烤用调味猪骨骼肌肉块是一项产品形态特定的过程废物。

- 选定流：Rejected seasoned pork skeletal-muscle pieces for roasting
- 流属性/单位：Mass / kg
- 数量规则：记录保藏处理前单独称量的不合格前体物及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格蒸制用调味蛙腿（`preparation_formulation_waste_rejected_seasoned_frog_legs`）

不合格蒸制用调味蛙腿是一项产品形态特定的过程废物。

- 选定流：Rejected seasoned frog legs for steaming
- 流属性/单位：Mass / kg
- 数量规则：记录保藏处理前单独称量的不合格前体物及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格烘烤用填充鸭肉卷（`preparation_formulation_waste_rejected_stuffed_duck_roll`）

不合格烘烤用填充鸭肉卷是一项产品形态特定的过程废物。

- 选定流：Rejected stuffed duck meat roll for roasting
- 流属性/单位：Mass / kg
- 数量规则：记录保藏处理前单独称量的不合格前体物及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格煮制用猪肝酱混合物（`preparation_formulation_waste_rejected_pork_liver_pate`）

不合格煮制用猪肝酱混合物是一项产品形态特定的过程废物。

- 选定流：Rejected pork liver pâté mixture for cooking
- 流属性/单位：Mass / kg
- 数量规则：记录保藏处理前单独称量的不合格前体物及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格煮制用牛肉糜酱混合物（`preparation_formulation_waste_rejected_beef_meat_paste`）

不合格煮制用牛肉糜酱混合物是一项产品形态特定的过程废物。

- 选定流：Rejected beef meat-paste mixture for cooking
- 流属性/单位：Mass / kg
- 数量规则：记录保藏处理前单独称量的不合格前体物及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格煮制用猪肉酱混合物（`preparation_formulation_waste_rejected_pork_rillettes`）

不合格煮制用猪肉酱混合物是一项产品形态特定的过程废物。

- 选定流：Rejected pork rillettes mixture for cooking
- 流属性/单位：Mass / kg
- 数量规则：记录保藏处理前单独称量的不合格前体物及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格煮制用鸡肉冻卷混合物（`preparation_formulation_waste_rejected_chicken_galantine`）

不合格煮制用鸡肉冻卷混合物是一项产品形态特定的过程废物。

- 选定流：Rejected chicken galantine mixture for cooking
- 流属性/单位：Mass / kg
- 数量规则：记录保藏处理前单独称量的不合格前体物及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格蒸制用猪血凝块混合物（`preparation_formulation_waste_rejected_pig_blood_curd`）

不合格蒸制用猪血凝块混合物是一项产品形态特定的过程废物。

- 选定流：Rejected pig-blood curd mixture for steaming
- 流属性/单位：Mass / kg
- 数量规则：记录保藏处理前单独称量的不合格前体物及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格罐藏用调味海豹肉块（`preparation_formulation_waste_rejected_seal_meat_canning`）

不合格罐藏用调味海豹肉块是一项产品形态特定的过程废物。

- 选定流：Rejected seasoned seal meat pieces for canning
- 流属性/单位：Mass / kg
- 数量规则：记录保藏处理前单独称量的不合格前体物及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格罐藏用调味鲸肉块（`preparation_formulation_waste_rejected_whale_meat_canning`）

不合格罐藏用调味鲸肉块是一项产品形态特定的过程废物。

- 选定流：Rejected seasoned whale meat pieces for canning
- 流属性/单位：Mass / kg
- 数量规则：记录保藏处理前单独称量的不合格前体物及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格醋腌用猪骨骼肌肉块（`preparation_formulation_waste_rejected_pork_vinegar_pickling`）

不合格醋腌用猪骨骼肌肉块是一项产品形态特定的过程废物。

- 选定流：Rejected pork skeletal-muscle pieces for vinegar pickling
- 流属性/单位：Mass / kg
- 数量规则：记录保藏处理前单独称量的不合格前体物及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格未保藏调味绞碎绵羊肉饼（`preparation_formulation_waste_rejected_mutton_patty`）

不合格未保藏调味绞碎绵羊肉饼是一项产品形态特定的过程废物。

- 选定流：Rejected unpreserved seasoned minced mutton patty
- 流属性/单位：Mass / kg
- 数量规则：记录保藏处理前单独称量的不合格前体物及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 牛骨骼肌修整废料（`preparation_formulation_waste_trimming_beef_skeletal_muscle`）

牛骨骼肌修整废料是一项物种和组织特定的固体废物流。

- 选定流：Beef skeletal muscle trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确动物或解剖身份的单独称量修整废料质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 猪骨骼肌修整废料（`preparation_formulation_waste_trimming_pork_skeletal_muscle`）

猪骨骼肌修整废料是一项物种和组织特定的固体废物流。

- 选定流：Pork skeletal muscle trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确动物或解剖身份的单独称量修整废料质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 绵羊骨骼肌修整废料（`preparation_formulation_waste_trimming_mutton_skeletal_muscle`）

绵羊骨骼肌修整废料是一项物种和组织特定的固体废物流。

- 选定流：Mutton skeletal muscle trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确动物或解剖身份的单独称量修整废料质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 兔肉修整废料（`preparation_formulation_waste_trimming_rabbit_meat`）

兔肉修整废料是一项物种和组织特定的固体废物流。

- 选定流：Rabbit meat trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确动物或解剖身份的单独称量修整废料质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 鸡肉修整废料（`preparation_formulation_waste_trimming_chicken_meat`）

鸡肉修整废料是一项物种和组织特定的固体废物流。

- 选定流：Chicken meat trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确动物或解剖身份的单独称量修整废料质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 鸭肉修整废料（`preparation_formulation_waste_trimming_duck_meat`）

鸭肉修整废料是一项物种和组织特定的固体废物流。

- 选定流：Duck meat trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确动物或解剖身份的单独称量修整废料质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 蛙腿修整废料（`preparation_formulation_waste_trimming_frog_legs`）

蛙腿修整废料是一项物种和组织特定的固体废物流。

- 选定流：Frog legs trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确动物或解剖身份的单独称量修整废料质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 海豹肉修整废料（`preparation_formulation_waste_trimming_seal_meat`）

海豹肉修整废料是一项物种和组织特定的固体废物流。

- 选定流：Seal meat trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确动物或解剖身份的单独称量修整废料质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 鲸肉修整废料（`preparation_formulation_waste_trimming_whale_meat`）

鲸肉修整废料是一项物种和组织特定的固体废物流。

- 选定流：Whale meat trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确动物或解剖身份的单独称量修整废料质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 牛肝修整废料（`preparation_formulation_waste_trimming_beef_liver`）

牛肝修整废料是一项物种和组织特定的固体废物流。

- 选定流：Beef liver trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确动物或解剖身份的单独称量修整废料质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 猪肝修整废料（`preparation_formulation_waste_trimming_pork_liver`）

猪肝修整废料是一项物种和组织特定的固体废物流。

- 选定流：Pork liver trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确动物或解剖身份的单独称量修整废料质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 牛心修整废料（`preparation_formulation_waste_trimming_beef_heart`）

牛心修整废料是一项物种和组织特定的固体废物流。

- 选定流：Beef heart trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确动物或解剖身份的单独称量修整废料质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 牛舌修整废料（`preparation_formulation_waste_trimming_beef_tongue`）

牛舌修整废料是一项物种和组织特定的固体废物流。

- 选定流：Beef tongue trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确动物或解剖身份的单独称量修整废料质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 猪血修整废料（`preparation_formulation_waste_trimming_pig_blood`）

猪血修整废料是一项物种和组织特定的固体废物流。

- 选定流：Pig blood trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确动物或解剖身份的单独称量修整废料质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 牛血修整废料（`preparation_formulation_waste_trimming_bovine_blood`）

牛血修整废料是一项物种和组织特定的固体废物流。

- 选定流：Bovine blood trimming waste
- 流属性/单位：Mass / kg
- 数量规则：记录这一准确动物或解剖身份的单独称量修整废料质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 切割设备清洗废水（`preparation_formulation_cutting_equipment_wash_wastewater`）

切割设备清洗废水是一项按产生点区分的水性废物流，不与其他废水卡合并。

- 选定流：Cutting-equipment wash wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录实测废水质量，或用有据密度把体积换算为质量，并保留产生点和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 绞碎设备清洗废水（`preparation_formulation_mincing_equipment_wash_wastewater`）

绞碎设备清洗废水是一项按产生点区分的水性废物流，不与其他废水卡合并。

- 选定流：Mincing-equipment wash wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录实测废水质量，或用有据密度把体积换算为质量，并保留产生点和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 配方设备清洗废水（`preparation_formulation_formulation_equipment_wash_wastewater`）

配方设备清洗废水是一项按产生点区分的水性废物流，不与其他废水卡合并。

- 选定流：Formulation-equipment wash wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录实测废水质量，或用有据密度把体积换算为质量，并保留产生点和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废弃牛皮纸配料袋（`preparation_formulation_discarded_kraft_paper_ingredient_bag`）

废弃牛皮纸配料袋是一项材料特定的空配料包装废物交换。

- 选定流：Discarded kraft-paper ingredient bag
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并成为废物的空配料包装；保留材料身份和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`eu-pef-2021-2279`

###### 废弃低密度聚乙烯配料内衬（`preparation_formulation_discarded_low_density_polyethylene_ingredient_liner`）

废弃低密度聚乙烯配料内衬是一项材料特定的空配料包装废物交换。

- 选定流：Discarded low-density polyethylene ingredient liner
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并成为废物的空配料包装；保留材料身份和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`eu-pef-2021-2279`

###### 废弃高密度聚乙烯配料桶（`preparation_formulation_discarded_high_density_polyethylene_ingredient_drum`）

废弃高密度聚乙烯配料桶是一项材料特定的空配料包装废物交换。

- 选定流：Discarded high-density polyethylene ingredient drum
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量并成为废物的空配料包装；保留材料身份和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_formulation_residue`
- 来源：`eu-pef-2021-2279`

##### 基本流

###### 化石二氧化碳排放至空气（`preparation_formulation_carbon_dioxide_fossil_to_air`）

化石二氧化碳排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Carbon dioxide, fossil to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_formulation_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 一氧化氮排放至空气（`preparation_formulation_nitrogen_monoxide_to_air`）

一氧化氮排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_formulation_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 二氧化氮排放至空气（`preparation_formulation_nitrogen_dioxide_to_air`）

二氧化氮排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_formulation_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 二氧化硫排放至空气（`preparation_formulation_sulfur_dioxide_to_air`）

二氧化硫排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_formulation_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 小于 2.5 微米颗粒物排放至空气（`preparation_formulation_particulate_matter_below_2_5_micrometres_to_air`）

小于 2.5 微米颗粒物排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_formulation_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 2.5 至 10 微米颗粒物排放至空气（`preparation_formulation_particulate_matter_from_2_5_to_10_micrometres_to_air`）

2.5 至 10 微米颗粒物排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Particulate matter from 2.5 to 10 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_formulation_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

### 过程：声明的煮制、油炸、烘烤或蒸制路线（`thermal_preservation`）

本过程以放行 1 kg 热加工产品为定量参考。仅应用与锁定物料清单、包装、设备、去向和路线匹配的具体卡片；缺失必须由记录证明，不得用合并交换替代。

#### 输入

##### 产品流

###### 电网电力投入（`thermal_preservation_grid_electricity`）

电网电力是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：记录本过程单独计量或开票的电网电力用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 外购蒸汽投入（`thermal_preservation_purchased_steam`）

外购蒸汽是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的外购蒸汽用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 外购热水投入（`thermal_preservation_purchased_hot_water`）

外购热水是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的外购热水用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 天然气投入（`thermal_preservation_natural_gas`）

天然气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的天然气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 柴油投入（`thermal_preservation_diesel`）

柴油是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Diesel
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的柴油用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 液化石油气投入（`thermal_preservation_liquefied_petroleum_gas`）

液化石油气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的液化石油气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 外购压缩空气投入（`thermal_preservation_purchased_compressed_air`）

外购压缩空气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased compressed air
- 流属性/单位：Volume / m3
- 数量规则：记录本过程单独计量或开票的外购压缩空气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 市政饮用水投入（`thermal_preservation_potable_mains_water`）

市政饮用水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Potable mains water
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的市政饮用水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 煮制用调味牛骨骼肌肉块投入（`thermal_preservation_input_seasoned_beef_pieces`）

煮制用调味牛骨骼肌肉块是进入其具名热处理的一项具体前体物，不可与其他产品形态互换。

- 选定流：Seasoned beef skeletal-muscle pieces for cooking
- 流属性/单位：Mass / kg
- 数量规则：根据批次转移记录，记录进入唯一锁定热加工路线的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 油炸用裹衣鸡肉块投入（`thermal_preservation_input_coated_chicken_pieces`）

油炸用裹衣鸡肉块是进入其具名热处理的一项具体前体物，不可与其他产品形态互换。

- 选定流：Coated chicken meat pieces for frying
- 流属性/单位：Mass / kg
- 数量规则：根据批次转移记录，记录进入唯一锁定热加工路线的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 烘烤用调味猪骨骼肌肉块投入（`thermal_preservation_input_seasoned_pork_pieces`）

烘烤用调味猪骨骼肌肉块是进入其具名热处理的一项具体前体物，不可与其他产品形态互换。

- 选定流：Seasoned pork skeletal-muscle pieces for roasting
- 流属性/单位：Mass / kg
- 数量规则：根据批次转移记录，记录进入唯一锁定热加工路线的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 蒸制用调味蛙腿投入（`thermal_preservation_input_seasoned_frog_legs`）

蒸制用调味蛙腿是进入其具名热处理的一项具体前体物，不可与其他产品形态互换。

- 选定流：Seasoned frog legs for steaming
- 流属性/单位：Mass / kg
- 数量规则：根据批次转移记录，记录进入唯一锁定热加工路线的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 烘烤用填充鸭肉卷投入（`thermal_preservation_input_stuffed_duck_roll`）

烘烤用填充鸭肉卷是进入其具名热处理的一项具体前体物，不可与其他产品形态互换。

- 选定流：Stuffed duck meat roll for roasting
- 流属性/单位：Mass / kg
- 数量规则：根据批次转移记录，记录进入唯一锁定热加工路线的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 煮制用猪肝酱混合物投入（`thermal_preservation_input_pork_liver_pate`）

煮制用猪肝酱混合物是进入其具名热处理的一项具体前体物，不可与其他产品形态互换。

- 选定流：Pork liver pâté mixture for cooking
- 流属性/单位：Mass / kg
- 数量规则：根据批次转移记录，记录进入唯一锁定热加工路线的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 煮制用牛肉糜酱混合物投入（`thermal_preservation_input_beef_meat_paste`）

煮制用牛肉糜酱混合物是进入其具名热处理的一项具体前体物，不可与其他产品形态互换。

- 选定流：Beef meat-paste mixture for cooking
- 流属性/单位：Mass / kg
- 数量规则：根据批次转移记录，记录进入唯一锁定热加工路线的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 煮制用猪肉酱混合物投入（`thermal_preservation_input_pork_rillettes`）

煮制用猪肉酱混合物是进入其具名热处理的一项具体前体物，不可与其他产品形态互换。

- 选定流：Pork rillettes mixture for cooking
- 流属性/单位：Mass / kg
- 数量规则：根据批次转移记录，记录进入唯一锁定热加工路线的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 煮制用鸡肉冻卷混合物投入（`thermal_preservation_input_chicken_galantine`）

煮制用鸡肉冻卷混合物是进入其具名热处理的一项具体前体物，不可与其他产品形态互换。

- 选定流：Chicken galantine mixture for cooking
- 流属性/单位：Mass / kg
- 数量规则：根据批次转移记录，记录进入唯一锁定热加工路线的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 蒸制用猪血凝块混合物投入（`thermal_preservation_input_pig_blood_curd`）

蒸制用猪血凝块混合物是进入其具名热处理的一项具体前体物，不可与其他产品形态互换。

- 选定流：Pig-blood curd mixture for steaming
- 流属性/单位：Mass / kg
- 数量规则：根据批次转移记录，记录进入唯一锁定热加工路线的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 菜籽油油炸投入（`thermal_preservation_rapeseed_oil`）

菜籽油是一项准确油炸介质交换，仅在实际使用该油时适用。

- 选定流：Rapeseed oil
- 流属性/单位：Mass / kg
- 数量规则：根据领用记录和炸锅库存变化记录投入炸锅的菜籽油；不得与另一种油炸用油合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 葵花籽油油炸投入（`thermal_preservation_sunflower_oil`）

葵花籽油是一项准确油炸介质交换，仅在实际使用该油时适用。

- 选定流：Sunflower oil
- 流属性/单位：Mass / kg
- 数量规则：根据领用记录和炸锅库存变化记录投入炸锅的葵花籽油；不得与另一种油炸用油合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

##### 废物流

本过程在该流类型组中不规定交换。

##### 基本流

###### 地下水投入（`thermal_preservation_groundwater`）

地下水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Groundwater
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的地下水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 地表水投入（`thermal_preservation_surface_water`）

地表水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Surface water
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的地表水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

#### 输出

##### 产品流

###### 煮制牛骨骼肌肉块产出（`thermal_preservation_output_seasoned_beef_pieces`）

煮制牛骨骼肌肉块是一项具体加工产品转移流，仅由匹配的声明热加工路线产生。

- 选定流：Cooked beef skeletal-muscle pieces
- 流属性/单位：Mass / kg
- 数量规则：记录完成有据时间—温度处理和冷却步骤后放行的净合格产品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 油炸鸡肉块产出（`thermal_preservation_output_coated_chicken_pieces`）

油炸鸡肉块是一项具体加工产品转移流，仅由匹配的声明热加工路线产生。

- 选定流：Fried chicken meat pieces
- 流属性/单位：Mass / kg
- 数量规则：记录完成有据时间—温度处理和冷却步骤后放行的净合格产品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 烘烤猪骨骼肌肉块产出（`thermal_preservation_output_seasoned_pork_pieces`）

烘烤猪骨骼肌肉块是一项具体加工产品转移流，仅由匹配的声明热加工路线产生。

- 选定流：Roasted pork skeletal-muscle pieces
- 流属性/单位：Mass / kg
- 数量规则：记录完成有据时间—温度处理和冷却步骤后放行的净合格产品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 蒸制蛙腿产出（`thermal_preservation_output_seasoned_frog_legs`）

蒸制蛙腿是一项具体加工产品转移流，仅由匹配的声明热加工路线产生。

- 选定流：Steamed frog legs
- 流属性/单位：Mass / kg
- 数量规则：记录完成有据时间—温度处理和冷却步骤后放行的净合格产品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 烘烤填充鸭肉卷产出（`thermal_preservation_output_stuffed_duck_roll`）

烘烤填充鸭肉卷是一项具体加工产品转移流，仅由匹配的声明热加工路线产生。

- 选定流：Roasted stuffed duck meat roll
- 流属性/单位：Mass / kg
- 数量规则：记录完成有据时间—温度处理和冷却步骤后放行的净合格产品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 煮制猪肝酱产出（`thermal_preservation_output_pork_liver_pate`）

煮制猪肝酱是一项具体加工产品转移流，仅由匹配的声明热加工路线产生。

- 选定流：Cooked pork liver pâté
- 流属性/单位：Mass / kg
- 数量规则：记录完成有据时间—温度处理和冷却步骤后放行的净合格产品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 煮制牛肉糜酱产出（`thermal_preservation_output_beef_meat_paste`）

煮制牛肉糜酱是一项具体加工产品转移流，仅由匹配的声明热加工路线产生。

- 选定流：Cooked beef meat paste
- 流属性/单位：Mass / kg
- 数量规则：记录完成有据时间—温度处理和冷却步骤后放行的净合格产品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 煮制猪肉酱产出（`thermal_preservation_output_pork_rillettes`）

煮制猪肉酱是一项具体加工产品转移流，仅由匹配的声明热加工路线产生。

- 选定流：Cooked pork rillettes
- 流属性/单位：Mass / kg
- 数量规则：记录完成有据时间—温度处理和冷却步骤后放行的净合格产品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 煮制鸡肉冻卷产出（`thermal_preservation_output_chicken_galantine`）

煮制鸡肉冻卷是一项具体加工产品转移流，仅由匹配的声明热加工路线产生。

- 选定流：Cooked chicken galantine
- 流属性/单位：Mass / kg
- 数量规则：记录完成有据时间—温度处理和冷却步骤后放行的净合格产品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 蒸制猪血凝块产出（`thermal_preservation_output_pig_blood_curd`）

蒸制猪血凝块是一项具体加工产品转移流，仅由匹配的声明热加工路线产生。

- 选定流：Steamed pig-blood curd
- 流属性/单位：Mass / kg
- 数量规则：记录完成有据时间—温度处理和冷却步骤后放行的净合格产品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 回收牛肉煮制汤液（`thermal_preservation_recovered_beef_cooking_broth`）

回收牛肉煮制汤液是一项具名共产品交换，以具有有据有益用途为条件。

- 选定流：Recovered beef cooking broth
- 流属性/单位：Mass / kg
- 数量规则：仅在材料具有有据功能和市场去向时记录单独称量的回收量；否则使用相应废物卡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 回收猪肝煮制汤液（`thermal_preservation_recovered_pork_liver_cooking_broth`）

回收猪肝煮制汤液是一项具名共产品交换，以具有有据有益用途为条件。

- 选定流：Recovered pork-liver cooking broth
- 流属性/单位：Mass / kg
- 数量规则：仅在材料具有有据功能和市场去向时记录单独称量的回收量；否则使用相应废物卡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 回收鸡肉煮制汤液（`thermal_preservation_recovered_chicken_cooking_broth`）

回收鸡肉煮制汤液是一项具名共产品交换，以具有有据有益用途为条件。

- 选定流：Recovered chicken cooking broth
- 流属性/单位：Mass / kg
- 数量规则：仅在材料具有有据功能和市场去向时记录单独称量的回收量；否则使用相应废物卡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 猪肉烘烤滴液（`thermal_preservation_pork_roasting_drippings`）

猪肉烘烤滴液是一项具名共产品交换，以具有有据有益用途为条件。

- 选定流：Pork roasting drippings
- 流属性/单位：Mass / kg
- 数量规则：仅在材料具有有据功能和市场去向时记录单独称量的回收量；否则使用相应废物卡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 鸭肉烘烤滴液（`thermal_preservation_duck_roasting_drippings`）

鸭肉烘烤滴液是一项具名共产品交换，以具有有据有益用途为条件。

- 选定流：Duck roasting drippings
- 流属性/单位：Mass / kg
- 数量规则：仅在材料具有有据功能和市场去向时记录单独称量的回收量；否则使用相应废物卡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_material`
- 来源：`fao-meat-processing-2007`、`eu-pef-2021-2279`

##### 废物流

###### 不合格煮制牛骨骼肌肉块（`thermal_preservation_waste_rejected_seasoned_beef_pieces`）

不合格煮制牛骨骼肌肉块是一项产品形态特定废物流。

- 选定流：Rejected cooked beef skeletal-muscle pieces
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的不合格加工产品及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格油炸鸡肉块（`thermal_preservation_waste_rejected_coated_chicken_pieces`）

不合格油炸鸡肉块是一项产品形态特定废物流。

- 选定流：Rejected fried chicken meat pieces
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的不合格加工产品及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格烘烤猪骨骼肌肉块（`thermal_preservation_waste_rejected_seasoned_pork_pieces`）

不合格烘烤猪骨骼肌肉块是一项产品形态特定废物流。

- 选定流：Rejected roasted pork skeletal-muscle pieces
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的不合格加工产品及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格蒸制蛙腿（`thermal_preservation_waste_rejected_seasoned_frog_legs`）

不合格蒸制蛙腿是一项产品形态特定废物流。

- 选定流：Rejected steamed frog legs
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的不合格加工产品及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格烘烤填充鸭肉卷（`thermal_preservation_waste_rejected_stuffed_duck_roll`）

不合格烘烤填充鸭肉卷是一项产品形态特定废物流。

- 选定流：Rejected roasted stuffed duck meat roll
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的不合格加工产品及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格煮制猪肝酱（`thermal_preservation_waste_rejected_pork_liver_pate`）

不合格煮制猪肝酱是一项产品形态特定废物流。

- 选定流：Rejected cooked pork liver pâté
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的不合格加工产品及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格煮制牛肉糜酱（`thermal_preservation_waste_rejected_beef_meat_paste`）

不合格煮制牛肉糜酱是一项产品形态特定废物流。

- 选定流：Rejected cooked beef meat paste
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的不合格加工产品及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格煮制猪肉酱（`thermal_preservation_waste_rejected_pork_rillettes`）

不合格煮制猪肉酱是一项产品形态特定废物流。

- 选定流：Rejected cooked pork rillettes
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的不合格加工产品及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格煮制鸡肉冻卷（`thermal_preservation_waste_rejected_chicken_galantine`）

不合格煮制鸡肉冻卷是一项产品形态特定废物流。

- 选定流：Rejected cooked chicken galantine
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的不合格加工产品及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格蒸制猪血凝块（`thermal_preservation_waste_rejected_pig_blood_curd`）

不合格蒸制猪血凝块是一项产品形态特定废物流。

- 选定流：Rejected steamed pig-blood curd
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的不合格加工产品及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废菜籽油炸油（`thermal_preservation_spent_rapeseed_frying_oil`）

废菜籽油炸油是一项油种特定的废油炸介质交换。

- 选定流：Spent rapeseed frying oil
- 流属性/单位：Mass / kg
- 数量规则：记录单独排出的废油质量及有据回收或处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废葵花籽油炸油（`thermal_preservation_spent_sunflower_frying_oil`）

废葵花籽油炸油是一项油种特定的废油炸介质交换。

- 选定流：Spent sunflower frying oil
- 流属性/单位：Mass / kg
- 数量规则：记录单独排出的废油质量及有据回收或处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废牛肉煮制液（`thermal_preservation_spent_beef_cooking_liquor`）

废牛肉煮制液是一项产品来源特定的液体废物流。

- 选定流：Spent beef cooking liquor
- 流属性/单位：Mass / kg
- 数量规则：记录送往有据废物去向的单独实测材料；不得同时作为回收共产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 废猪肝煮制液（`thermal_preservation_spent_pork_liver_cooking_liquor`）

废猪肝煮制液是一项产品来源特定的液体废物流。

- 选定流：Spent pork-liver cooking liquor
- 流属性/单位：Mass / kg
- 数量规则：记录送往有据废物去向的单独实测材料；不得同时作为回收共产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 废鸡肉煮制液（`thermal_preservation_spent_chicken_cooking_liquor`）

废鸡肉煮制液是一项产品来源特定的液体废物流。

- 选定流：Spent chicken cooking liquor
- 流属性/单位：Mass / kg
- 数量规则：记录送往有据废物去向的单独实测材料；不得同时作为回收共产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 废猪肉烘烤滴液（`thermal_preservation_spent_pork_roasting_drippings`）

废猪肉烘烤滴液是一项产品来源特定的液体废物流。

- 选定流：Spent pork roasting drippings
- 流属性/单位：Mass / kg
- 数量规则：记录送往有据废物去向的单独实测材料；不得同时作为回收共产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 废鸭肉烘烤滴液（`thermal_preservation_spent_duck_roasting_drippings`）

废鸭肉烘烤滴液是一项产品来源特定的液体废物流。

- 选定流：Spent duck roasting drippings
- 流属性/单位：Mass / kg
- 数量规则：记录送往有据废物去向的单独实测材料；不得同时作为回收共产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`fao-meat-processing-2007`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 煮制锅废水（`thermal_preservation_cooking_kettle_wastewater`）

煮制锅废水是一项按路线和产生点区分的废水交换。

- 选定流：Cooking-kettle wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录实测废水质量，或用有据密度把体积换算为质量，并保留产生点和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 炸锅清洗废水（`thermal_preservation_fryer_cleaning_wastewater`）

炸锅清洗废水是一项按路线和产生点区分的废水交换。

- 选定流：Fryer-cleaning wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录实测废水质量，或用有据密度把体积换算为质量，并保留产生点和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 烘烤炉清洗废水（`thermal_preservation_roasting_oven_wash_wastewater`）

烘烤炉清洗废水是一项按路线和产生点区分的废水交换。

- 选定流：Roasting-oven wash wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录实测废水质量，或用有据密度把体积换算为质量，并保留产生点和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 蒸制设备冷凝废水（`thermal_preservation_steam_cooker_condensate_wastewater`）

蒸制设备冷凝废水是一项按路线和产生点区分的废水交换。

- 选定流：Steam-cooker condensate wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录实测废水质量，或用有据密度把体积换算为质量，并保留产生点和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_preservation_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

##### 基本流

###### 化石二氧化碳排放至空气（`thermal_preservation_carbon_dioxide_fossil_to_air`）

化石二氧化碳排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Carbon dioxide, fossil to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_preservation_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 一氧化氮排放至空气（`thermal_preservation_nitrogen_monoxide_to_air`）

一氧化氮排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_preservation_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 二氧化氮排放至空气（`thermal_preservation_nitrogen_dioxide_to_air`）

二氧化氮排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_preservation_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 二氧化硫排放至空气（`thermal_preservation_sulfur_dioxide_to_air`）

二氧化硫排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_preservation_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 小于 2.5 微米颗粒物排放至空气（`thermal_preservation_particulate_matter_below_2_5_micrometres_to_air`）

小于 2.5 微米颗粒物排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_preservation_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 2.5 至 10 微米颗粒物排放至空气（`thermal_preservation_particulate_matter_from_2_5_to_10_micrometres_to_air`）

2.5 至 10 微米颗粒物排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Particulate matter from 2.5 to 10 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_preservation_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 菜籽油气溶胶排放至空气（`thermal_preservation_rapeseed_oil_aerosol_to_air`）

菜籽油气溶胶排放至空气是油炸产生的一项油种特定直接空气交换。

- 选定流：Rapeseed oil aerosol to air
- 流属性/单位：Mass / kg
- 数量规则：根据实测捕集系统负荷、排气流采样或有据场址特定质量平衡计算油排放质量；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_preservation_emission`
- 来源：`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 葵花籽油气溶胶排放至空气（`thermal_preservation_sunflower_oil_aerosol_to_air`）

葵花籽油气溶胶排放至空气是油炸产生的一项油种特定直接空气交换。

- 选定流：Sunflower oil aerosol to air
- 流属性/单位：Mass / kg
- 数量规则：根据实测捕集系统负荷、排气流采样或有据场址特定质量平衡计算油排放质量；本 PCR 不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_preservation_emission`
- 来源：`fao-meat-processing-2007`、`eu-pef-2021-2279`

### 过程：密封装填、封口、热处理与冷却（`hermetic_canning`）

本过程以放行 1 kg 净罐藏产品，不含容器质量为定量参考。仅应用与锁定物料清单、包装、设备、去向和路线匹配的具体卡片；缺失必须由记录证明，不得用合并交换替代。

#### 输入

##### 产品流

###### 电网电力投入（`hermetic_canning_grid_electricity`）

电网电力是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：记录本过程单独计量或开票的电网电力用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_resource`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 外购蒸汽投入（`hermetic_canning_purchased_steam`）

外购蒸汽是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的外购蒸汽用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_resource`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 外购热水投入（`hermetic_canning_purchased_hot_water`）

外购热水是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的外购热水用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_resource`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 天然气投入（`hermetic_canning_natural_gas`）

天然气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的天然气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_resource`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 柴油投入（`hermetic_canning_diesel`）

柴油是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Diesel
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的柴油用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_resource`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 液化石油气投入（`hermetic_canning_liquefied_petroleum_gas`）

液化石油气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的液化石油气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_resource`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 外购压缩空气投入（`hermetic_canning_purchased_compressed_air`）

外购压缩空气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased compressed air
- 流属性/单位：Volume / m3
- 数量规则：记录本过程单独计量或开票的外购压缩空气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_resource`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 市政饮用水投入（`hermetic_canning_potable_mains_water`）

市政饮用水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Potable mains water
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的市政饮用水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_resource`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 罐藏用调味海豹肉块投入（`hermetic_canning_input_seal_meat_canning`）

罐藏用调味海豹肉块是一项具体罐藏前体物，不可与其他动物来源互换。

- 选定流：Seasoned seal meat pieces for canning
- 流属性/单位：Mass / kg
- 数量规则：根据批次记录，记录装入声明密封容器的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_material`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 罐藏用调味鲸肉块投入（`hermetic_canning_input_whale_meat_canning`）

罐藏用调味鲸肉块是一项具体罐藏前体物，不可与其他动物来源互换。

- 选定流：Seasoned whale meat pieces for canning
- 流属性/单位：Mass / kg
- 数量规则：根据批次记录，记录装入声明密封容器的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_material`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 镀锡钢罐身投入（`hermetic_canning_tinplate_steel_can_body`）

镀锡钢罐身是一项准确密封容器部件或封合材料。

- 选定流：Tinplate steel can body
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他容器部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_material`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 镀锡钢罐盖投入（`hermetic_canning_tinplate_steel_can_end`）

镀锡钢罐盖是一项准确密封容器部件或封合材料。

- 选定流：Tinplate steel can end
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他容器部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_material`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 铝罐身投入（`hermetic_canning_aluminium_can_body`）

铝罐身是一项准确密封容器部件或封合材料。

- 选定流：Aluminium can body
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他容器部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_material`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 铝罐盖投入（`hermetic_canning_aluminium_can_end`）

铝罐盖是一项准确密封容器部件或封合材料。

- 选定流：Aluminium can end
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他容器部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_material`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 玻璃罐投入（`hermetic_canning_glass_jar`）

玻璃罐是一项准确密封容器部件或封合材料。

- 选定流：Glass jar
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他容器部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_material`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 钢制旋开盖投入（`hermetic_canning_steel_twist_off_lid`）

钢制旋开盖是一项准确密封容器部件或封合材料。

- 选定流：Steel twist-off lid
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他容器部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_material`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 聚对苯二甲酸乙二醇酯—铝—聚丙烯蒸煮袋投入（`hermetic_canning_polyethylene_terephthalate_aluminium_polypropylene_retort_pouch`）

聚对苯二甲酸乙二醇酯—铝—聚丙烯蒸煮袋是一项准确密封容器部件或封合材料。

- 选定流：Polyethylene terephthalate–aluminium–polypropylene retort pouch
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他容器部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_material`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 丁基橡胶罐缝密封剂投入（`hermetic_canning_butyl_rubber_can_seam_sealant`）

丁基橡胶罐缝密封剂是一项准确密封容器部件或封合材料。

- 选定流：Butyl-rubber can-seam sealant
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他容器部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_material`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

##### 废物流

本过程在该流类型组中不规定交换。

##### 基本流

###### 地下水投入（`hermetic_canning_groundwater`）

地下水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Groundwater
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的地下水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_resource`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 地表水投入（`hermetic_canning_surface_water`）

地表水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Surface water
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的地表水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_resource`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

#### 输出

##### 产品流

###### 罐藏海豹肉块产出（`hermetic_canning_output_seal_meat_canning`）

罐藏海豹肉块是一项具体密封罐藏产品转移流，产品质量不含容器质量。

- 选定流：Canned seal meat pieces
- 流属性/单位：Mass / kg
- 数量规则：记录完成有据计划热处理、冷却和容器完整性放行后的沥干或净合格产品质量；不含容器质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_material`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 罐藏鲸肉块产出（`hermetic_canning_output_whale_meat_canning`）

罐藏鲸肉块是一项具体密封罐藏产品转移流，产品质量不含容器质量。

- 选定流：Canned whale meat pieces
- 流属性/单位：Mass / kg
- 数量规则：记录完成有据计划热处理、冷却和容器完整性放行后的沥干或净合格产品质量；不含容器质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_material`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

##### 废物流

###### 不合格罐藏海豹肉块（`hermetic_canning_waste_rejected_seal_meat_canning`）

不合格罐藏海豹肉块是一项动物来源特定的罐藏不合格物流。

- 选定流：Rejected canned seal meat pieces
- 流属性/单位：Mass / kg
- 数量规则：记录因计划热处理或完整性审查不合格而剔除容器内产品的单独称量质量及其受控去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_residue`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 不合格罐藏鲸肉块（`hermetic_canning_waste_rejected_whale_meat_canning`）

不合格罐藏鲸肉块是一项动物来源特定的罐藏不合格物流。

- 选定流：Rejected canned whale meat pieces
- 流属性/单位：Mass / kg
- 数量规则：记录因计划热处理或完整性审查不合格而剔除容器内产品的单独称量质量及其受控去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_residue`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 不合格镀锡钢罐身（`hermetic_canning_rejected_tinplate_steel_can_body`）

不合格镀锡钢罐身是一项材料特定罐藏包装废物交换。

- 选定流：Rejected tinplate steel can body
- 流属性/单位：Mass / kg
- 数量规则：记录封口、完整性或生产线检验产生的不合格部件单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_residue`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 不合格镀锡钢罐盖（`hermetic_canning_rejected_tinplate_steel_can_end`）

不合格镀锡钢罐盖是一项材料特定罐藏包装废物交换。

- 选定流：Rejected tinplate steel can end
- 流属性/单位：Mass / kg
- 数量规则：记录封口、完整性或生产线检验产生的不合格部件单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_residue`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 不合格铝罐身（`hermetic_canning_rejected_aluminium_can_body`）

不合格铝罐身是一项材料特定罐藏包装废物交换。

- 选定流：Rejected aluminium can body
- 流属性/单位：Mass / kg
- 数量规则：记录封口、完整性或生产线检验产生的不合格部件单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_residue`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 不合格铝罐盖（`hermetic_canning_rejected_aluminium_can_end`）

不合格铝罐盖是一项材料特定罐藏包装废物交换。

- 选定流：Rejected aluminium can end
- 流属性/单位：Mass / kg
- 数量规则：记录封口、完整性或生产线检验产生的不合格部件单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_residue`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 不合格玻璃罐（`hermetic_canning_rejected_glass_jar`）

不合格玻璃罐是一项材料特定罐藏包装废物交换。

- 选定流：Rejected glass jar
- 流属性/单位：Mass / kg
- 数量规则：记录封口、完整性或生产线检验产生的不合格部件单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_residue`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 不合格钢制旋开盖（`hermetic_canning_rejected_steel_twist_off_lid`）

不合格钢制旋开盖是一项材料特定罐藏包装废物交换。

- 选定流：Rejected steel twist-off lid
- 流属性/单位：Mass / kg
- 数量规则：记录封口、完整性或生产线检验产生的不合格部件单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_residue`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 不合格聚对苯二甲酸乙二醇酯—铝—聚丙烯蒸煮袋（`hermetic_canning_rejected_polyethylene_terephthalate_aluminium_polypropylene_retort_pouch`）

不合格聚对苯二甲酸乙二醇酯—铝—聚丙烯蒸煮袋是一项材料特定罐藏包装废物交换。

- 选定流：Rejected polyethylene terephthalate–aluminium–polypropylene retort pouch
- 流属性/单位：Mass / kg
- 数量规则：记录封口、完整性或生产线检验产生的不合格部件单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_residue`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 不合格丁基橡胶罐缝密封剂（`hermetic_canning_rejected_butyl_rubber_can_seam_sealant`）

不合格丁基橡胶罐缝密封剂是一项材料特定罐藏包装废物交换。

- 选定流：Rejected butyl-rubber can-seam sealant
- 流属性/单位：Mass / kg
- 数量规则：记录封口、完整性或生产线检验产生的不合格部件单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_residue`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 容器冲洗废水（`hermetic_canning_container_rinse_wastewater`）

容器冲洗废水是一项罐藏阶段水性废物流，与其他废水流分开。

- 选定流：Container-rinse wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录实测废水质量，或用有据密度把体积换算为质量，并保留批次和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_residue`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

###### 杀菌釜冷却废水（`hermetic_canning_retort_cooling_wastewater`）

杀菌釜冷却废水是一项罐藏阶段水性废物流，与其他废水流分开。

- 选定流：Retort-cooling wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录实测废水质量，或用有据密度把体积换算为质量，并保留批次和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hermetic_canning_residue`
- 来源：`codex-cxc-23-1979`、`fao-meat-processing-2007`、`eu-pef-2021-2279`

##### 基本流

###### 化石二氧化碳排放至空气（`hermetic_canning_carbon_dioxide_fossil_to_air`）

化石二氧化碳排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Carbon dioxide, fossil to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_hermetic_canning_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 一氧化氮排放至空气（`hermetic_canning_nitrogen_monoxide_to_air`）

一氧化氮排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_hermetic_canning_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 二氧化氮排放至空气（`hermetic_canning_nitrogen_dioxide_to_air`）

二氧化氮排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_hermetic_canning_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 二氧化硫排放至空气（`hermetic_canning_sulfur_dioxide_to_air`）

二氧化硫排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_hermetic_canning_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 小于 2.5 微米颗粒物排放至空气（`hermetic_canning_particulate_matter_below_2_5_micrometres_to_air`）

小于 2.5 微米颗粒物排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_hermetic_canning_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 2.5 至 10 微米颗粒物排放至空气（`hermetic_canning_particulate_matter_from_2_5_to_10_micrometres_to_air`）

2.5 至 10 微米颗粒物排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Particulate matter from 2.5 to 10 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_hermetic_canning_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

### 过程：声明的腌制或调味保藏路线（`pickling_seasoning`）

本过程以放行 1 kg 腌制或调味产品为定量参考。仅应用与锁定物料清单、包装、设备、去向和路线匹配的具体卡片；缺失必须由记录证明，不得用合并交换替代。

#### 输入

##### 产品流

###### 电网电力投入（`pickling_seasoning_grid_electricity`）

电网电力是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：记录本过程单独计量或开票的电网电力用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 外购蒸汽投入（`pickling_seasoning_purchased_steam`）

外购蒸汽是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的外购蒸汽用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 外购热水投入（`pickling_seasoning_purchased_hot_water`）

外购热水是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的外购热水用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 天然气投入（`pickling_seasoning_natural_gas`）

天然气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的天然气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 柴油投入（`pickling_seasoning_diesel`）

柴油是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Diesel
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的柴油用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 液化石油气投入（`pickling_seasoning_liquefied_petroleum_gas`）

液化石油气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的液化石油气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 外购压缩空气投入（`pickling_seasoning_purchased_compressed_air`）

外购压缩空气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased compressed air
- 流属性/单位：Volume / m3
- 数量规则：记录本过程单独计量或开票的外购压缩空气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 市政饮用水投入（`pickling_seasoning_potable_mains_water`）

市政饮用水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Potable mains water
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的市政饮用水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 醋腌用猪骨骼肌肉块投入（`pickling_seasoning_input_pork_vinegar_pickling`）

醋腌用猪骨骼肌肉块是进入其具名保藏路线的一项具体前体物。

- 选定流：Pork skeletal-muscle pieces for vinegar pickling
- 流属性/单位：Mass / kg
- 数量规则：根据批次记录，记录进入声明腌制或调味路线的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 未保藏调味绞碎绵羊肉饼投入（`pickling_seasoning_input_mutton_patty`）

未保藏调味绞碎绵羊肉饼是进入其具名保藏路线的一项具体前体物。

- 选定流：Unpreserved seasoned minced mutton patty
- 流属性/单位：Mass / kg
- 数量规则：根据批次记录，记录进入声明腌制或调味路线的净前体物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 蒸馏白醋投入（`pickling_seasoning_distilled_white_vinegar`）

蒸馏白醋是一项准确腌制介质，不是泛化酸混合物选择器。

- 选定流：Distilled white vinegar
- 流属性/单位：Mass / kg
- 数量规则：记录声明腌制批次领用的白醋质量；与纯乙酸分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

##### 废物流

本过程在该流类型组中不规定交换。

##### 基本流

###### 地下水投入（`pickling_seasoning_groundwater`）

地下水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Groundwater
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的地下水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 地表水投入（`pickling_seasoning_surface_water`）

地表水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Surface water
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的地表水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_resource`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

#### 输出

##### 产品流

###### 醋腌猪骨骼肌肉块产出（`pickling_seasoning_output_pork_vinegar_pickling`）

醋腌猪骨骼肌肉块是一项具体保藏产品转移流，仅由匹配的声明路线产生。

- 选定流：Vinegar-pickled pork skeletal-muscle pieces
- 流属性/单位：Mass / kg
- 数量规则：记录完成有据停留时间和配方控制后放行的净合格产品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 调味绞碎绵羊肉饼产出（`pickling_seasoning_output_mutton_patty`）

调味绞碎绵羊肉饼是一项具体保藏产品转移流，仅由匹配的声明路线产生。

- 选定流：Seasoned minced mutton patty
- 流属性/单位：Mass / kg
- 数量规则：记录完成有据停留时间和配方控制后放行的净合格产品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_material`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

##### 废物流

###### 不合格醋腌猪骨骼肌肉块（`pickling_seasoning_waste_rejected_pork_vinegar_pickling`）

不合格醋腌猪骨骼肌肉块是一项产品形态特定废物流。

- 选定流：Rejected vinegar-pickled pork skeletal-muscle pieces
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的不合格产品及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 不合格调味绞碎绵羊肉饼（`pickling_seasoning_waste_rejected_mutton_patty`）

不合格调味绞碎绵羊肉饼是一项产品形态特定废物流。

- 选定流：Rejected seasoned minced mutton patty
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的不合格产品及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废醋腌液（`pickling_seasoning_spent_vinegar_liquor`）

废醋腌液是一项腌制阶段水性废物流，不与其他废水流合并。

- 选定流：Spent vinegar liquor
- 流属性/单位：Mass / kg
- 数量规则：记录实测废物质量，或用有据密度把体积换算为质量，并保留去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 腌制容器清洗废水（`pickling_seasoning_pickling_vessel_wash_wastewater`）

腌制容器清洗废水是一项腌制阶段水性废物流，不与其他废水流合并。

- 选定流：Pickling-vessel wash wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录实测废物质量，或用有据密度把体积换算为质量，并保留去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_seasoning_residue`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

##### 基本流

###### 化石二氧化碳排放至空气（`pickling_seasoning_carbon_dioxide_fossil_to_air`）

化石二氧化碳排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Carbon dioxide, fossil to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pickling_seasoning_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 一氧化氮排放至空气（`pickling_seasoning_nitrogen_monoxide_to_air`）

一氧化氮排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pickling_seasoning_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 二氧化氮排放至空气（`pickling_seasoning_nitrogen_dioxide_to_air`）

二氧化氮排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pickling_seasoning_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 二氧化硫排放至空气（`pickling_seasoning_sulfur_dioxide_to_air`）

二氧化硫排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pickling_seasoning_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 小于 2.5 微米颗粒物排放至空气（`pickling_seasoning_particulate_matter_below_2_5_micrometres_to_air`）

小于 2.5 微米颗粒物排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pickling_seasoning_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 2.5 至 10 微米颗粒物排放至空气（`pickling_seasoning_particulate_matter_from_2_5_to_10_micrometres_to_air`）

2.5 至 10 微米颗粒物排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Particulate matter from 2.5 to 10 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pickling_seasoning_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 乙酸排放至空气（`pickling_seasoning_acetic_acid_to_air`）

乙酸排放至空气是声明腌制路线的一项化学物质特定直接排放。

- 选定流：Acetic acid to air
- 流属性/单位：Mass / kg
- 数量规则：根据实测排气流量和浓度或有据场址特定质量平衡计算乙酸排放质量；不提供默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pickling_seasoning_emission`
- 来源：`fao-meat-processing-2007`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

### 过程：最终包装、成品贮存与放行（`packaging_storage_release`）

本过程以放行 1 kg 净合格参考产品为定量参考。仅应用与锁定物料清单、包装、设备、去向和路线匹配的具体卡片；缺失必须由记录证明，不得用合并交换替代。

#### 输入

##### 产品流

###### 电网电力投入（`packaging_storage_release_grid_electricity`）

电网电力是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：记录本过程单独计量或开票的电网电力用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_resource`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 外购蒸汽投入（`packaging_storage_release_purchased_steam`）

外购蒸汽是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的外购蒸汽用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_resource`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 外购热水投入（`packaging_storage_release_purchased_hot_water`）

外购热水是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的外购热水用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_resource`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 天然气投入（`packaging_storage_release_natural_gas`）

天然气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的天然气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_resource`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 柴油投入（`packaging_storage_release_diesel`）

柴油是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Diesel
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的柴油用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_resource`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 液化石油气投入（`packaging_storage_release_liquefied_petroleum_gas`）

液化石油气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的液化石油气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_resource`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 外购压缩空气投入（`packaging_storage_release_purchased_compressed_air`）

外购压缩空气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased compressed air
- 流属性/单位：Volume / m3
- 数量规则：记录本过程单独计量或开票的外购压缩空气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_resource`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 市政饮用水投入（`packaging_storage_release_potable_mains_water`）

市政饮用水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Potable mains water
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的市政饮用水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_resource`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### R717 氨制冷剂补充（`packaging_storage_release_ammonia_refrigerant_r717`）

R717 氨制冷剂补充是一项单独产品交换，仅对具名的已安装制冷系统记录。

- 选定流：Ammonia refrigerant R717
- 流属性/单位：Mass / kg
- 数量规则：根据所声明制冷系统的维护领用记录，记录实际制冷剂补充质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_resource`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### HFC-134a 1,1,1,2-四氟乙烷制冷剂补充（`packaging_storage_release_1_1_1_2_tetrafluoroethane_refrigerant_hfc_134a`）

HFC-134a 1,1,1,2-四氟乙烷制冷剂补充是一项单独产品交换，仅对具名的已安装制冷系统记录。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant HFC-134a
- 流属性/单位：Mass / kg
- 数量规则：根据所声明制冷系统的维护领用记录，记录实际制冷剂补充质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_resource`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### R404A 制冷剂混合物补充（`packaging_storage_release_r404a_refrigerant_blend`）

R404A 制冷剂混合物补充是一项单独产品交换，仅对具名的已安装制冷系统记录。

- 选定流：R404A refrigerant blend
- 流属性/单位：Mass / kg
- 数量规则：根据所声明制冷系统的维护领用记录，记录实际制冷剂补充质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_resource`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 煮制牛骨骼肌肉块转入（`packaging_storage_release_input_seasoned_beef_pieces`）

煮制牛骨骼肌肉块是进入最终包装或放行的一项具体路线产出，不得代表其他产品形态。

- 选定流：Cooked beef skeletal-muscle pieces
- 流属性/单位：Mass / kg
- 数量规则：记录进入最终包装或成品贮存的净合格产品质量；保留准确产品形态和路线身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 油炸鸡肉块转入（`packaging_storage_release_input_coated_chicken_pieces`）

油炸鸡肉块是进入最终包装或放行的一项具体路线产出，不得代表其他产品形态。

- 选定流：Fried chicken meat pieces
- 流属性/单位：Mass / kg
- 数量规则：记录进入最终包装或成品贮存的净合格产品质量；保留准确产品形态和路线身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 烘烤猪骨骼肌肉块转入（`packaging_storage_release_input_seasoned_pork_pieces`）

烘烤猪骨骼肌肉块是进入最终包装或放行的一项具体路线产出，不得代表其他产品形态。

- 选定流：Roasted pork skeletal-muscle pieces
- 流属性/单位：Mass / kg
- 数量规则：记录进入最终包装或成品贮存的净合格产品质量；保留准确产品形态和路线身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 蒸制蛙腿转入（`packaging_storage_release_input_seasoned_frog_legs`）

蒸制蛙腿是进入最终包装或放行的一项具体路线产出，不得代表其他产品形态。

- 选定流：Steamed frog legs
- 流属性/单位：Mass / kg
- 数量规则：记录进入最终包装或成品贮存的净合格产品质量；保留准确产品形态和路线身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 烘烤填充鸭肉卷转入（`packaging_storage_release_input_stuffed_duck_roll`）

烘烤填充鸭肉卷是进入最终包装或放行的一项具体路线产出，不得代表其他产品形态。

- 选定流：Roasted stuffed duck meat roll
- 流属性/单位：Mass / kg
- 数量规则：记录进入最终包装或成品贮存的净合格产品质量；保留准确产品形态和路线身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 煮制猪肝酱转入（`packaging_storage_release_input_pork_liver_pate`）

煮制猪肝酱是进入最终包装或放行的一项具体路线产出，不得代表其他产品形态。

- 选定流：Cooked pork liver pâté
- 流属性/单位：Mass / kg
- 数量规则：记录进入最终包装或成品贮存的净合格产品质量；保留准确产品形态和路线身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 煮制牛肉糜酱转入（`packaging_storage_release_input_beef_meat_paste`）

煮制牛肉糜酱是进入最终包装或放行的一项具体路线产出，不得代表其他产品形态。

- 选定流：Cooked beef meat paste
- 流属性/单位：Mass / kg
- 数量规则：记录进入最终包装或成品贮存的净合格产品质量；保留准确产品形态和路线身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 煮制猪肉酱转入（`packaging_storage_release_input_pork_rillettes`）

煮制猪肉酱是进入最终包装或放行的一项具体路线产出，不得代表其他产品形态。

- 选定流：Cooked pork rillettes
- 流属性/单位：Mass / kg
- 数量规则：记录进入最终包装或成品贮存的净合格产品质量；保留准确产品形态和路线身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 煮制鸡肉冻卷转入（`packaging_storage_release_input_chicken_galantine`）

煮制鸡肉冻卷是进入最终包装或放行的一项具体路线产出，不得代表其他产品形态。

- 选定流：Cooked chicken galantine
- 流属性/单位：Mass / kg
- 数量规则：记录进入最终包装或成品贮存的净合格产品质量；保留准确产品形态和路线身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 蒸制猪血凝块转入（`packaging_storage_release_input_pig_blood_curd`）

蒸制猪血凝块是进入最终包装或放行的一项具体路线产出，不得代表其他产品形态。

- 选定流：Steamed pig-blood curd
- 流属性/单位：Mass / kg
- 数量规则：记录进入最终包装或成品贮存的净合格产品质量；保留准确产品形态和路线身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 罐藏海豹肉块转入（`packaging_storage_release_input_seal_meat_canning`）

罐藏海豹肉块是进入最终包装或放行的一项具体路线产出，不得代表其他产品形态。

- 选定流：Canned seal meat pieces
- 流属性/单位：Mass / kg
- 数量规则：记录进入最终包装或成品贮存的净合格产品质量；保留准确产品形态和路线身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 罐藏鲸肉块转入（`packaging_storage_release_input_whale_meat_canning`）

罐藏鲸肉块是进入最终包装或放行的一项具体路线产出，不得代表其他产品形态。

- 选定流：Canned whale meat pieces
- 流属性/单位：Mass / kg
- 数量规则：记录进入最终包装或成品贮存的净合格产品质量；保留准确产品形态和路线身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 醋腌猪骨骼肌肉块转入（`packaging_storage_release_input_pork_vinegar_pickling`）

醋腌猪骨骼肌肉块是进入最终包装或放行的一项具体路线产出，不得代表其他产品形态。

- 选定流：Vinegar-pickled pork skeletal-muscle pieces
- 流属性/单位：Mass / kg
- 数量规则：记录进入最终包装或成品贮存的净合格产品质量；保留准确产品形态和路线身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 调味绞碎绵羊肉饼转入（`packaging_storage_release_input_mutton_patty`）

调味绞碎绵羊肉饼是进入最终包装或放行的一项具体路线产出，不得代表其他产品形态。

- 选定流：Seasoned minced mutton patty
- 流属性/单位：Mass / kg
- 数量规则：记录进入最终包装或成品贮存的净合格产品质量；保留准确产品形态和路线身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 聚对苯二甲酸乙二醇酯托盘投入（`packaging_storage_release_polyethylene_terephthalate_tray`）

聚对苯二甲酸乙二醇酯托盘是一项准确包装制品或材料，仅在所选产品形态声明使用时适用。

- 选定流：Polyethylene terephthalate tray
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他包装部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 聚丙烯托盘投入（`packaging_storage_release_polypropylene_tray`）

聚丙烯托盘是一项准确包装制品或材料，仅在所选产品形态声明使用时适用。

- 选定流：Polypropylene tray
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他包装部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 铝箔托盘投入（`packaging_storage_release_aluminium_foil_tray`）

铝箔托盘是一项准确包装制品或材料，仅在所选产品形态声明使用时适用。

- 选定流：Aluminium foil tray
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他包装部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 聚酰胺—乙烯-乙烯醇—聚乙烯阻隔膜投入（`packaging_storage_release_polyamide_ethylene_vinyl_alcohol_polyethylene_barrier_film`）

聚酰胺—乙烯-乙烯醇—聚乙烯阻隔膜是一项准确包装制品或材料，仅在所选产品形态声明使用时适用。

- 选定流：Polyamide–ethylene-vinyl alcohol–polyethylene barrier film
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他包装部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 低密度聚乙烯薄膜投入（`packaging_storage_release_low_density_polyethylene_film`）

低密度聚乙烯薄膜是一项准确包装制品或材料，仅在所选产品形态声明使用时适用。

- 选定流：Low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他包装部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 聚丙烯杯投入（`packaging_storage_release_polypropylene_cup`）

聚丙烯杯是一项准确包装制品或材料，仅在所选产品形态声明使用时适用。

- 选定流：Polypropylene cup
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他包装部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 纸板折叠盒投入（`packaging_storage_release_paperboard_folding_carton`）

纸板折叠盒是一项准确包装制品或材料，仅在所选产品形态声明使用时适用。

- 选定流：Paperboard folding carton
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他包装部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 瓦楞纤维板运输箱投入（`packaging_storage_release_corrugated_fibreboard_shipping_box`）

瓦楞纤维板运输箱是一项准确包装制品或材料，仅在所选产品形态声明使用时适用。

- 选定流：Corrugated fibreboard shipping box
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他包装部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 木质托盘投入（`packaging_storage_release_wooden_pallet`）

木质托盘是一项准确包装制品或材料，仅在所选产品形态声明使用时适用。

- 选定流：Wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他包装部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 低密度聚乙烯缠绕膜投入（`packaging_storage_release_low_density_polyethylene_stretch_film`）

低密度聚乙烯缠绕膜是一项准确包装制品或材料，仅在所选产品形态声明使用时适用。

- 选定流：Low-density polyethylene stretch film
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他包装部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 纸质压敏标签投入（`packaging_storage_release_paper_pressure_sensitive_label`）

纸质压敏标签是一项准确包装制品或材料，仅在所选产品形态声明使用时适用。

- 选定流：Paper pressure-sensitive label
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他包装部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 丙烯酸压敏胶投入（`packaging_storage_release_acrylic_pressure_sensitive_adhesive`）

丙烯酸压敏胶是一项准确包装制品或材料，仅在所选产品形态声明使用时适用。

- 选定流：Acrylic pressure-sensitive adhesive
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他包装部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 聚酯捆扎带投入（`packaging_storage_release_polyester_strapping`）

聚酯捆扎带是一项准确包装制品或材料，仅在所选产品形态声明使用时适用。

- 选定流：Polyester strapping
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他包装部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 聚丙烯捆扎带投入（`packaging_storage_release_polypropylene_strapping`）

聚丙烯捆扎带是一项准确包装制品或材料，仅在所选产品形态声明使用时适用。

- 选定流：Polypropylene strapping
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他包装部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 脱氧剂小袋投入（`packaging_storage_release_oxygen_absorber_sachet`）

脱氧剂小袋是一项准确包装制品或材料，仅在所选产品形态声明使用时适用。

- 选定流：Oxygen-absorber sachet
- 流属性/单位：Mass / kg
- 数量规则：记录领用质量，或用批次特定实测单件质量将件数换算为质量；与其他包装部件分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 氮气包装投入（`packaging_storage_release_nitrogen_gas`）

氮气是一项气体物种特定的气调包装交换。

- 选定流：Nitrogen gas
- 流属性/单位：Mass / kg
- 数量规则：记录声明包装气氛中氮气的单独计量或钢瓶平衡质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 二氧化碳气体包装投入（`packaging_storage_release_carbon_dioxide_gas`）

二氧化碳气体是一项气体物种特定的气调包装交换。

- 选定流：Carbon dioxide gas
- 流属性/单位：Mass / kg
- 数量规则：记录声明包装气氛中二氧化碳气体的单独计量或钢瓶平衡质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 氧气包装投入（`packaging_storage_release_oxygen_gas`）

氧气是一项气体物种特定的气调包装交换。

- 选定流：Oxygen gas
- 流属性/单位：Mass / kg
- 数量规则：记录声明包装气氛中氧气的单独计量或钢瓶平衡质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

##### 废物流

本过程在该流类型组中不规定交换。

##### 基本流

###### 地下水投入（`packaging_storage_release_groundwater`）

地下水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Groundwater
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的地下水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_resource`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 地表水投入（`packaging_storage_release_surface_water`）

地表水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Surface water
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的地表水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_resource`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

#### 输出

##### 产品流

###### 参考产品产出（`packaging_storage_release_reference_product`）

这是唯一带 UUID 的参考产品交换。数据包必须锁定一个具体动物或组织配方、一个列示的非香肠产品形态、一条保藏路线，以及常温或冷藏市场状态。

- 选定流：Other prepared or preserved meat, meat offal or blood `61b39162-1ed6-4d66-b54b-9c0889bd9fc4`
- 流属性/单位：Mass / kg
- 数量规则：将实测净合格产品质量归一化为恰好 1 kg；产品质量不含任何包装部件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_material`
- 来源：`unsd-cpc-3-21189`、`eu-pef-2021-2279`

##### 废物流

###### 回收的R717 氨制冷剂（`packaging_storage_release_recovered_ammonia_refrigerant_r717`）

回收的R717 氨制冷剂是所声明制冷系统的一项独立维护废物流。

- 选定流：Recovered Ammonia refrigerant R717
- 流属性/单位：Mass / kg
- 数量规则：根据维护记录，记录为再生或受控处置而回收的制冷剂质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 回收的HFC-134a 1,1,1,2-四氟乙烷制冷剂（`packaging_storage_release_recovered_1_1_1_2_tetrafluoroethane_refrigerant_hfc_134a`）

回收的HFC-134a 1,1,1,2-四氟乙烷制冷剂是所声明制冷系统的一项独立维护废物流。

- 选定流：Recovered 1,1,1,2-Tetrafluoroethane refrigerant HFC-134a
- 流属性/单位：Mass / kg
- 数量规则：根据维护记录，记录为再生或受控处置而回收的制冷剂质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 回收的R404A 制冷剂混合物（`packaging_storage_release_recovered_r404a_refrigerant_blend`）

回收的R404A 制冷剂混合物是所声明制冷系统的一项独立维护废物流。

- 选定流：Recovered R404A refrigerant blend
- 流属性/单位：Mass / kg
- 数量规则：根据维护记录，记录为再生或受控处置而回收的制冷剂质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 煮制牛骨骼肌肉块包装不合格品（`packaging_storage_release_waste_rejected_seasoned_beef_pieces`）

煮制牛骨骼肌肉块包装不合格品是一项产品形态特定废物交换。

- 选定流：Packaging reject for cooked beef skeletal-muscle pieces
- 流属性/单位：Mass / kg
- 数量规则：记录因封合、标签、包装完整性、温度或放行检验而剔除产品的单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 油炸鸡肉块包装不合格品（`packaging_storage_release_waste_rejected_coated_chicken_pieces`）

油炸鸡肉块包装不合格品是一项产品形态特定废物交换。

- 选定流：Packaging reject for fried chicken meat pieces
- 流属性/单位：Mass / kg
- 数量规则：记录因封合、标签、包装完整性、温度或放行检验而剔除产品的单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 烘烤猪骨骼肌肉块包装不合格品（`packaging_storage_release_waste_rejected_seasoned_pork_pieces`）

烘烤猪骨骼肌肉块包装不合格品是一项产品形态特定废物交换。

- 选定流：Packaging reject for roasted pork skeletal-muscle pieces
- 流属性/单位：Mass / kg
- 数量规则：记录因封合、标签、包装完整性、温度或放行检验而剔除产品的单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 蒸制蛙腿包装不合格品（`packaging_storage_release_waste_rejected_seasoned_frog_legs`）

蒸制蛙腿包装不合格品是一项产品形态特定废物交换。

- 选定流：Packaging reject for steamed frog legs
- 流属性/单位：Mass / kg
- 数量规则：记录因封合、标签、包装完整性、温度或放行检验而剔除产品的单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 烘烤填充鸭肉卷包装不合格品（`packaging_storage_release_waste_rejected_stuffed_duck_roll`）

烘烤填充鸭肉卷包装不合格品是一项产品形态特定废物交换。

- 选定流：Packaging reject for roasted stuffed duck meat roll
- 流属性/单位：Mass / kg
- 数量规则：记录因封合、标签、包装完整性、温度或放行检验而剔除产品的单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 煮制猪肝酱包装不合格品（`packaging_storage_release_waste_rejected_pork_liver_pate`）

煮制猪肝酱包装不合格品是一项产品形态特定废物交换。

- 选定流：Packaging reject for cooked pork liver pâté
- 流属性/单位：Mass / kg
- 数量规则：记录因封合、标签、包装完整性、温度或放行检验而剔除产品的单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 煮制牛肉糜酱包装不合格品（`packaging_storage_release_waste_rejected_beef_meat_paste`）

煮制牛肉糜酱包装不合格品是一项产品形态特定废物交换。

- 选定流：Packaging reject for cooked beef meat paste
- 流属性/单位：Mass / kg
- 数量规则：记录因封合、标签、包装完整性、温度或放行检验而剔除产品的单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 煮制猪肉酱包装不合格品（`packaging_storage_release_waste_rejected_pork_rillettes`）

煮制猪肉酱包装不合格品是一项产品形态特定废物交换。

- 选定流：Packaging reject for cooked pork rillettes
- 流属性/单位：Mass / kg
- 数量规则：记录因封合、标签、包装完整性、温度或放行检验而剔除产品的单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 煮制鸡肉冻卷包装不合格品（`packaging_storage_release_waste_rejected_chicken_galantine`）

煮制鸡肉冻卷包装不合格品是一项产品形态特定废物交换。

- 选定流：Packaging reject for cooked chicken galantine
- 流属性/单位：Mass / kg
- 数量规则：记录因封合、标签、包装完整性、温度或放行检验而剔除产品的单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 蒸制猪血凝块包装不合格品（`packaging_storage_release_waste_rejected_pig_blood_curd`）

蒸制猪血凝块包装不合格品是一项产品形态特定废物交换。

- 选定流：Packaging reject for steamed pig-blood curd
- 流属性/单位：Mass / kg
- 数量规则：记录因封合、标签、包装完整性、温度或放行检验而剔除产品的单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 罐藏海豹肉块包装不合格品（`packaging_storage_release_waste_rejected_seal_meat_canning`）

罐藏海豹肉块包装不合格品是一项产品形态特定废物交换。

- 选定流：Packaging reject for canned seal meat pieces
- 流属性/单位：Mass / kg
- 数量规则：记录因封合、标签、包装完整性、温度或放行检验而剔除产品的单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 罐藏鲸肉块包装不合格品（`packaging_storage_release_waste_rejected_whale_meat_canning`）

罐藏鲸肉块包装不合格品是一项产品形态特定废物交换。

- 选定流：Packaging reject for canned whale meat pieces
- 流属性/单位：Mass / kg
- 数量规则：记录因封合、标签、包装完整性、温度或放行检验而剔除产品的单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 醋腌猪骨骼肌肉块包装不合格品（`packaging_storage_release_waste_rejected_pork_vinegar_pickling`）

醋腌猪骨骼肌肉块包装不合格品是一项产品形态特定废物交换。

- 选定流：Packaging reject for vinegar-pickled pork skeletal-muscle pieces
- 流属性/单位：Mass / kg
- 数量规则：记录因封合、标签、包装完整性、温度或放行检验而剔除产品的单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 调味绞碎绵羊肉饼包装不合格品（`packaging_storage_release_waste_rejected_mutton_patty`）

调味绞碎绵羊肉饼包装不合格品是一项产品形态特定废物交换。

- 选定流：Packaging reject for seasoned minced mutton patty
- 流属性/单位：Mass / kg
- 数量规则：记录因封合、标签、包装完整性、温度或放行检验而剔除产品的单独称量质量及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 废弃聚对苯二甲酸乙二醇酯托盘（`packaging_storage_release_discarded_polyethylene_terephthalate_tray`）

废弃聚对苯二甲酸乙二醇酯托盘是一项材料特定包装废物交换。

- 选定流：Discarded polyethylene terephthalate tray
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的未使用、裁切、破损或不合格材料及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 废弃聚丙烯托盘（`packaging_storage_release_discarded_polypropylene_tray`）

废弃聚丙烯托盘是一项材料特定包装废物交换。

- 选定流：Discarded polypropylene tray
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的未使用、裁切、破损或不合格材料及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 废弃铝箔托盘（`packaging_storage_release_discarded_aluminium_foil_tray`）

废弃铝箔托盘是一项材料特定包装废物交换。

- 选定流：Discarded aluminium foil tray
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的未使用、裁切、破损或不合格材料及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 废弃聚酰胺—乙烯-乙烯醇—聚乙烯阻隔膜（`packaging_storage_release_discarded_polyamide_ethylene_vinyl_alcohol_polyethylene_barrier_film`）

废弃聚酰胺—乙烯-乙烯醇—聚乙烯阻隔膜是一项材料特定包装废物交换。

- 选定流：Discarded polyamide–ethylene-vinyl alcohol–polyethylene barrier film
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的未使用、裁切、破损或不合格材料及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 废弃低密度聚乙烯薄膜（`packaging_storage_release_discarded_low_density_polyethylene_film`）

废弃低密度聚乙烯薄膜是一项材料特定包装废物交换。

- 选定流：Discarded low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的未使用、裁切、破损或不合格材料及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 废弃聚丙烯杯（`packaging_storage_release_discarded_polypropylene_cup`）

废弃聚丙烯杯是一项材料特定包装废物交换。

- 选定流：Discarded polypropylene cup
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的未使用、裁切、破损或不合格材料及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 废弃纸板折叠盒（`packaging_storage_release_discarded_paperboard_folding_carton`）

废弃纸板折叠盒是一项材料特定包装废物交换。

- 选定流：Discarded paperboard folding carton
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的未使用、裁切、破损或不合格材料及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 废弃瓦楞纤维板运输箱（`packaging_storage_release_discarded_corrugated_fibreboard_shipping_box`）

废弃瓦楞纤维板运输箱是一项材料特定包装废物交换。

- 选定流：Discarded corrugated fibreboard shipping box
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的未使用、裁切、破损或不合格材料及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 废弃木质托盘（`packaging_storage_release_discarded_wooden_pallet`）

废弃木质托盘是一项材料特定包装废物交换。

- 选定流：Discarded wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的未使用、裁切、破损或不合格材料及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 废弃低密度聚乙烯缠绕膜（`packaging_storage_release_discarded_low_density_polyethylene_stretch_film`）

废弃低密度聚乙烯缠绕膜是一项材料特定包装废物交换。

- 选定流：Discarded low-density polyethylene stretch film
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的未使用、裁切、破损或不合格材料及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 废弃纸质压敏标签（`packaging_storage_release_discarded_paper_pressure_sensitive_label`）

废弃纸质压敏标签是一项材料特定包装废物交换。

- 选定流：Discarded paper pressure-sensitive label
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的未使用、裁切、破损或不合格材料及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 废弃丙烯酸压敏胶（`packaging_storage_release_discarded_acrylic_pressure_sensitive_adhesive`）

废弃丙烯酸压敏胶是一项材料特定包装废物交换。

- 选定流：Discarded acrylic pressure-sensitive adhesive
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的未使用、裁切、破损或不合格材料及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 废弃聚酯捆扎带（`packaging_storage_release_discarded_polyester_strapping`）

废弃聚酯捆扎带是一项材料特定包装废物交换。

- 选定流：Discarded polyester strapping
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的未使用、裁切、破损或不合格材料及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 废弃聚丙烯捆扎带（`packaging_storage_release_discarded_polypropylene_strapping`）

废弃聚丙烯捆扎带是一项材料特定包装废物交换。

- 选定流：Discarded polypropylene strapping
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的未使用、裁切、破损或不合格材料及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 废弃脱氧剂小袋（`packaging_storage_release_discarded_oxygen_absorber_sachet`）

废弃脱氧剂小袋是一项材料特定包装废物交换。

- 选定流：Discarded oxygen-absorber sachet
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量的未使用、裁切、破损或不合格材料及其有据去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 废弃纸质离型衬纸（`packaging_storage_release_discarded_paper_release_liner`）

废弃纸质离型衬纸是一项纤维基标签施加废物交换。

- 选定流：Discarded paper release liner
- 流属性/单位：Mass / kg
- 数量规则：记录标签施加产生的单独称量离型衬纸废物及其去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`codex-cxc-23-1979`、`eu-pef-2021-2279`

###### 包装线清洗废水（`packaging_storage_release_packaging_line_wash_wastewater`）

包装线清洗废水是一项按产生点区分的水性废物流。

- 选定流：Packaging-line wash wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录实测废水质量，或用有据密度把体积换算为质量，并保留去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_release_residue`
- 来源：`codex-cxc-58-2005`、`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

##### 基本流

###### 化石二氧化碳排放至空气（`packaging_storage_release_carbon_dioxide_fossil_to_air`）

化石二氧化碳排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Carbon dioxide, fossil to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 一氧化氮排放至空气（`packaging_storage_release_nitrogen_monoxide_to_air`）

一氧化氮排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 二氧化氮排放至空气（`packaging_storage_release_nitrogen_dioxide_to_air`）

二氧化氮排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 二氧化硫排放至空气（`packaging_storage_release_sulfur_dioxide_to_air`）

二氧化硫排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 小于 2.5 微米颗粒物排放至空气（`packaging_storage_release_particulate_matter_below_2_5_micrometres_to_air`）

小于 2.5 微米颗粒物排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 2.5 至 10 微米颗粒物排放至空气（`packaging_storage_release_particulate_matter_from_2_5_to_10_micrometres_to_air`）

2.5 至 10 微米颗粒物排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Particulate matter from 2.5 to 10 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 氨排放至空气（`packaging_storage_release_ammonia_to_air`）

氨排放至空气是一种排放至空气的制冷剂物种，不得与其他制冷剂物种合并。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：依据有据的制冷剂库存平衡计算排放质量；R404A 损失须按供应商组成记录拆分为各个 HFC 组分。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_emission`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### HFC-134a 1,1,1,2-四氟乙烷排放至空气（`packaging_storage_release_1_1_1_2_tetrafluoroethane_hfc_134a_to_air`）

HFC-134a 1,1,1,2-四氟乙烷排放至空气是一种排放至空气的制冷剂物种，不得与其他制冷剂物种合并。

- 选定流：1,1,1,2-Tetrafluoroethane HFC-134a to air
- 流属性/单位：Mass / kg
- 数量规则：依据有据的制冷剂库存平衡计算排放质量；R404A 损失须按供应商组成记录拆分为各个 HFC 组分。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_emission`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### HFC-125 五氟乙烷排放至空气（`packaging_storage_release_pentafluoroethane_hfc_125_to_air`）

HFC-125 五氟乙烷排放至空气是一种排放至空气的制冷剂物种，不得与其他制冷剂物种合并。

- 选定流：Pentafluoroethane HFC-125 to air
- 流属性/单位：Mass / kg
- 数量规则：依据有据的制冷剂库存平衡计算排放质量；R404A 损失须按供应商组成记录拆分为各个 HFC 组分。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_emission`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### HFC-143a 1,1,1-三氟乙烷排放至空气（`packaging_storage_release_1_1_1_trifluoroethane_hfc_143a_to_air`）

HFC-143a 1,1,1-三氟乙烷排放至空气是一种排放至空气的制冷剂物种，不得与其他制冷剂物种合并。

- 选定流：1,1,1-Trifluoroethane HFC-143a to air
- 流属性/单位：Mass / kg
- 数量规则：依据有据的制冷剂库存平衡计算排放质量；R404A 损失须按供应商组成记录拆分为各个 HFC 组分。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_release_emission`
- 来源：`codex-cxc-58-2005`、`eu-pef-2021-2279`

### 过程：卫生清洗与条件性场内废水处理（`sanitation_wastewater`）

本过程以分摊到同一生产批次的卫生清洗记录为定量参考。仅应用与锁定物料清单、包装、设备、去向和路线匹配的具体卡片；缺失必须由记录证明，不得用合并交换替代。

#### 输入

##### 产品流

###### 电网电力投入（`sanitation_wastewater_grid_electricity`）

电网电力是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：记录本过程单独计量或开票的电网电力用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_resource`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 外购蒸汽投入（`sanitation_wastewater_purchased_steam`）

外购蒸汽是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的外购蒸汽用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_resource`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 外购热水投入（`sanitation_wastewater_purchased_hot_water`）

外购热水是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的外购热水用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_resource`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 天然气投入（`sanitation_wastewater_natural_gas`）

天然气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的天然气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_resource`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 柴油投入（`sanitation_wastewater_diesel`）

柴油是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Diesel
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的柴油用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_resource`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 液化石油气投入（`sanitation_wastewater_liquefied_petroleum_gas`）

液化石油气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程单独计量或开票的液化石油气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_resource`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 外购压缩空气投入（`sanitation_wastewater_purchased_compressed_air`）

外购压缩空气是本过程的一项独立外购资源。即使共用仪表需要有据分摊，也必须保留为单独卡片。

- 选定流：Purchased compressed air
- 流属性/单位：Volume / m3
- 数量规则：记录本过程单独计量或开票的外购压缩空气用量；不得与其他能源载体合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_resource`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 市政饮用水投入（`sanitation_wastewater_potable_mains_water`）

市政饮用水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Potable mains water
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的市政饮用水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_resource`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 氢氧化钠投入（`sanitation_wastewater_sodium_hydroxide`）

氢氧化钠是一项准确清洗、消毒或废水处理药剂，仅在实际投加时适用。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：根据浓度特定采购和投加记录，记录实际氢氧化钠领用质量；不得与其他清洗、消毒或处理药剂合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_material`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 硝酸投入（`sanitation_wastewater_nitric_acid`）

硝酸是一项准确清洗、消毒或废水处理药剂，仅在实际投加时适用。

- 选定流：Nitric acid
- 流属性/单位：Mass / kg
- 数量规则：根据浓度特定采购和投加记录，记录实际硝酸领用质量；不得与其他清洗、消毒或处理药剂合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_material`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 磷酸投入（`sanitation_wastewater_phosphoric_acid`）

磷酸是一项准确清洗、消毒或废水处理药剂，仅在实际投加时适用。

- 选定流：Phosphoric acid
- 流属性/单位：Mass / kg
- 数量规则：根据浓度特定采购和投加记录，记录实际磷酸领用质量；不得与其他清洗、消毒或处理药剂合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_material`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 次氯酸钠投入（`sanitation_wastewater_sodium_hypochlorite`）

次氯酸钠是一项准确清洗、消毒或废水处理药剂，仅在实际投加时适用。

- 选定流：Sodium hypochlorite
- 流属性/单位：Mass / kg
- 数量规则：根据浓度特定采购和投加记录，记录实际次氯酸钠领用质量；不得与其他清洗、消毒或处理药剂合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_material`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 过氧乙酸投入（`sanitation_wastewater_peracetic_acid`）

过氧乙酸是一项准确清洗、消毒或废水处理药剂，仅在实际投加时适用。

- 选定流：Peracetic acid
- 流属性/单位：Mass / kg
- 数量规则：根据浓度特定采购和投加记录，记录实际过氧乙酸领用质量；不得与其他清洗、消毒或处理药剂合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_material`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 过氧化氢投入（`sanitation_wastewater_hydrogen_peroxide`）

过氧化氢是一项准确清洗、消毒或废水处理药剂，仅在实际投加时适用。

- 选定流：Hydrogen peroxide
- 流属性/单位：Mass / kg
- 数量规则：根据浓度特定采购和投加记录，记录实际过氧化氢领用质量；不得与其他清洗、消毒或处理药剂合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_material`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 苯扎氯铵投入（`sanitation_wastewater_benzalkonium_chloride`）

苯扎氯铵是一项准确清洗、消毒或废水处理药剂，仅在实际投加时适用。

- 选定流：Benzalkonium chloride
- 流属性/单位：Mass / kg
- 数量规则：根据浓度特定采购和投加记录，记录实际苯扎氯铵领用质量；不得与其他清洗、消毒或处理药剂合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_material`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 乙醇投入（`sanitation_wastewater_ethanol`）

乙醇是一项准确清洗、消毒或废水处理药剂，仅在实际投加时适用。

- 选定流：Ethanol
- 流属性/单位：Mass / kg
- 数量规则：根据浓度特定采购和投加记录，记录实际乙醇领用质量；不得与其他清洗、消毒或处理药剂合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_material`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 氯化铁投入（`sanitation_wastewater_ferric_chloride`）

氯化铁是一项准确清洗、消毒或废水处理药剂，仅在实际投加时适用。

- 选定流：Ferric chloride
- 流属性/单位：Mass / kg
- 数量规则：根据浓度特定采购和投加记录，记录实际氯化铁领用质量；不得与其他清洗、消毒或处理药剂合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_material`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 硫酸铝投入（`sanitation_wastewater_aluminium_sulfate`）

硫酸铝是一项准确清洗、消毒或废水处理药剂，仅在实际投加时适用。

- 选定流：Aluminium sulfate
- 流属性/单位：Mass / kg
- 数量规则：根据浓度特定采购和投加记录，记录实际硫酸铝领用质量；不得与其他清洗、消毒或处理药剂合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_material`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 氢氧化钙投入（`sanitation_wastewater_calcium_hydroxide`）

氢氧化钙是一项准确清洗、消毒或废水处理药剂，仅在实际投加时适用。

- 选定流：Calcium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：根据浓度特定采购和投加记录，记录实际氢氧化钙领用质量；不得与其他清洗、消毒或处理药剂合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_material`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 阴离子聚丙烯酰胺投入（`sanitation_wastewater_anionic_polyacrylamide`）

阴离子聚丙烯酰胺是一项准确清洗、消毒或废水处理药剂，仅在实际投加时适用。

- 选定流：Anionic polyacrylamide
- 流属性/单位：Mass / kg
- 数量规则：根据浓度特定采购和投加记录，记录实际阴离子聚丙烯酰胺领用质量；不得与其他清洗、消毒或处理药剂合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_material`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

##### 废物流

###### 原料解冻废水处理投入（`sanitation_wastewater_input_raw_material_receipt_raw_material_thawing_wastewater`）

原料解冻废水是进入条件性场内处理的一项可追溯产生点废物投入。

- 选定流：Raw-material thawing wastewater
- 流属性/单位：Mass / kg
- 数量规则：仅根据匹配产生点记录，记录转入场内处理的质量；直接送往外部管理时不记录该处理投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 原料滴液废水处理投入（`sanitation_wastewater_input_raw_material_receipt_raw_material_drip_loss_wastewater`）

原料滴液废水是进入条件性场内处理的一项可追溯产生点废物投入。

- 选定流：Raw-material drip-loss wastewater
- 流属性/单位：Mass / kg
- 数量规则：仅根据匹配产生点记录，记录转入场内处理的质量；直接送往外部管理时不记录该处理投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 切割设备清洗废水处理投入（`sanitation_wastewater_input_preparation_formulation_cutting_equipment_wash_wastewater`）

切割设备清洗废水是进入条件性场内处理的一项可追溯产生点废物投入。

- 选定流：Cutting-equipment wash wastewater
- 流属性/单位：Mass / kg
- 数量规则：仅根据匹配产生点记录，记录转入场内处理的质量；直接送往外部管理时不记录该处理投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 绞碎设备清洗废水处理投入（`sanitation_wastewater_input_preparation_formulation_mincing_equipment_wash_wastewater`）

绞碎设备清洗废水是进入条件性场内处理的一项可追溯产生点废物投入。

- 选定流：Mincing-equipment wash wastewater
- 流属性/单位：Mass / kg
- 数量规则：仅根据匹配产生点记录，记录转入场内处理的质量；直接送往外部管理时不记录该处理投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 配方设备清洗废水处理投入（`sanitation_wastewater_input_preparation_formulation_formulation_equipment_wash_wastewater`）

配方设备清洗废水是进入条件性场内处理的一项可追溯产生点废物投入。

- 选定流：Formulation-equipment wash wastewater
- 流属性/单位：Mass / kg
- 数量规则：仅根据匹配产生点记录，记录转入场内处理的质量；直接送往外部管理时不记录该处理投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废牛肉煮制液处理投入（`sanitation_wastewater_input_thermal_preservation_spent_beef_cooking_liquor`）

废牛肉煮制液是进入条件性场内处理的一项可追溯产生点废物投入。

- 选定流：Spent beef cooking liquor
- 流属性/单位：Mass / kg
- 数量规则：仅根据匹配产生点记录，记录转入场内处理的质量；直接送往外部管理时不记录该处理投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废猪肝煮制液处理投入（`sanitation_wastewater_input_thermal_preservation_spent_pork_liver_cooking_liquor`）

废猪肝煮制液是进入条件性场内处理的一项可追溯产生点废物投入。

- 选定流：Spent pork-liver cooking liquor
- 流属性/单位：Mass / kg
- 数量规则：仅根据匹配产生点记录，记录转入场内处理的质量；直接送往外部管理时不记录该处理投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废鸡肉煮制液处理投入（`sanitation_wastewater_input_thermal_preservation_spent_chicken_cooking_liquor`）

废鸡肉煮制液是进入条件性场内处理的一项可追溯产生点废物投入。

- 选定流：Spent chicken cooking liquor
- 流属性/单位：Mass / kg
- 数量规则：仅根据匹配产生点记录，记录转入场内处理的质量；直接送往外部管理时不记录该处理投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 煮制锅废水处理投入（`sanitation_wastewater_input_thermal_preservation_cooking_kettle_wastewater`）

煮制锅废水是进入条件性场内处理的一项可追溯产生点废物投入。

- 选定流：Cooking-kettle wastewater
- 流属性/单位：Mass / kg
- 数量规则：仅根据匹配产生点记录，记录转入场内处理的质量；直接送往外部管理时不记录该处理投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 炸锅清洗废水处理投入（`sanitation_wastewater_input_thermal_preservation_fryer_cleaning_wastewater`）

炸锅清洗废水是进入条件性场内处理的一项可追溯产生点废物投入。

- 选定流：Fryer-cleaning wastewater
- 流属性/单位：Mass / kg
- 数量规则：仅根据匹配产生点记录，记录转入场内处理的质量；直接送往外部管理时不记录该处理投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 烘烤炉清洗废水处理投入（`sanitation_wastewater_input_thermal_preservation_roasting_oven_wash_wastewater`）

烘烤炉清洗废水是进入条件性场内处理的一项可追溯产生点废物投入。

- 选定流：Roasting-oven wash wastewater
- 流属性/单位：Mass / kg
- 数量规则：仅根据匹配产生点记录，记录转入场内处理的质量；直接送往外部管理时不记录该处理投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 蒸制设备冷凝废水处理投入（`sanitation_wastewater_input_thermal_preservation_steam_cooker_condensate_wastewater`）

蒸制设备冷凝废水是进入条件性场内处理的一项可追溯产生点废物投入。

- 选定流：Steam-cooker condensate wastewater
- 流属性/单位：Mass / kg
- 数量规则：仅根据匹配产生点记录，记录转入场内处理的质量；直接送往外部管理时不记录该处理投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 容器冲洗废水处理投入（`sanitation_wastewater_input_hermetic_canning_container_rinse_wastewater`）

容器冲洗废水是进入条件性场内处理的一项可追溯产生点废物投入。

- 选定流：Container-rinse wastewater
- 流属性/单位：Mass / kg
- 数量规则：仅根据匹配产生点记录，记录转入场内处理的质量；直接送往外部管理时不记录该处理投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 杀菌釜冷却废水处理投入（`sanitation_wastewater_input_hermetic_canning_retort_cooling_wastewater`）

杀菌釜冷却废水是进入条件性场内处理的一项可追溯产生点废物投入。

- 选定流：Retort-cooling wastewater
- 流属性/单位：Mass / kg
- 数量规则：仅根据匹配产生点记录，记录转入场内处理的质量；直接送往外部管理时不记录该处理投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废醋腌液处理投入（`sanitation_wastewater_input_pickling_seasoning_spent_vinegar_liquor`）

废醋腌液是进入条件性场内处理的一项可追溯产生点废物投入。

- 选定流：Spent vinegar liquor
- 流属性/单位：Mass / kg
- 数量规则：仅根据匹配产生点记录，记录转入场内处理的质量；直接送往外部管理时不记录该处理投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 腌制容器清洗废水处理投入（`sanitation_wastewater_input_pickling_seasoning_pickling_vessel_wash_wastewater`）

腌制容器清洗废水是进入条件性场内处理的一项可追溯产生点废物投入。

- 选定流：Pickling-vessel wash wastewater
- 流属性/单位：Mass / kg
- 数量规则：仅根据匹配产生点记录，记录转入场内处理的质量；直接送往外部管理时不记录该处理投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 包装线清洗废水处理投入（`sanitation_wastewater_input_packaging_storage_release_packaging_line_wash_wastewater`）

包装线清洗废水是进入条件性场内处理的一项可追溯产生点废物投入。

- 选定流：Packaging-line wash wastewater
- 流属性/单位：Mass / kg
- 数量规则：仅根据匹配产生点记录，记录转入场内处理的质量；直接送往外部管理时不记录该处理投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

##### 基本流

###### 地下水投入（`sanitation_wastewater_groundwater`）

地下水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Groundwater
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的地下水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_resource`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 地表水投入（`sanitation_wastewater_surface_water`）

地表水是本过程的一项独立水源交换，不与其他水源合并。

- 选定流：Surface water
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表记录本过程取用或供应的地表水；与其他水源分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_resource`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

#### 输出

##### 产品流

本过程在该流类型组中不规定交换。

##### 废物流

###### 废氢氧化钠清洗液（`sanitation_wastewater_spent_sodium_hydroxide_cleaning_solution`）

废氢氧化钠清洗液是一项有效化学物质特定的卫生清洗废物流。

- 选定流：Spent sodium-hydroxide cleaning solution
- 流属性/单位：Mass / kg
- 数量规则：记录单独实测废液质量及其场内处理或外部管理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废硝酸清洗液（`sanitation_wastewater_spent_nitric_acid_cleaning_solution`）

废硝酸清洗液是一项有效化学物质特定的卫生清洗废物流。

- 选定流：Spent nitric-acid cleaning solution
- 流属性/单位：Mass / kg
- 数量规则：记录单独实测废液质量及其场内处理或外部管理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废磷酸清洗液（`sanitation_wastewater_spent_phosphoric_acid_cleaning_solution`）

废磷酸清洗液是一项有效化学物质特定的卫生清洗废物流。

- 选定流：Spent phosphoric-acid cleaning solution
- 流属性/单位：Mass / kg
- 数量规则：记录单独实测废液质量及其场内处理或外部管理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废次氯酸钠消毒液（`sanitation_wastewater_spent_sodium_hypochlorite_sanitising_solution`）

废次氯酸钠消毒液是一项有效化学物质特定的卫生清洗废物流。

- 选定流：Spent sodium-hypochlorite sanitising solution
- 流属性/单位：Mass / kg
- 数量规则：记录单独实测废液质量及其场内处理或外部管理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废过氧乙酸消毒液（`sanitation_wastewater_spent_peracetic_acid_sanitising_solution`）

废过氧乙酸消毒液是一项有效化学物质特定的卫生清洗废物流。

- 选定流：Spent peracetic-acid sanitising solution
- 流属性/单位：Mass / kg
- 数量规则：记录单独实测废液质量及其场内处理或外部管理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废过氧化氢消毒液（`sanitation_wastewater_spent_hydrogen_peroxide_sanitising_solution`）

废过氧化氢消毒液是一项有效化学物质特定的卫生清洗废物流。

- 选定流：Spent hydrogen-peroxide sanitising solution
- 流属性/单位：Mass / kg
- 数量规则：记录单独实测废液质量及其场内处理或外部管理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废苯扎氯铵消毒液（`sanitation_wastewater_spent_benzalkonium_chloride_sanitising_solution`）

废苯扎氯铵消毒液是一项有效化学物质特定的卫生清洗废物流。

- 选定流：Spent benzalkonium-chloride sanitising solution
- 流属性/单位：Mass / kg
- 数量规则：记录单独实测废液质量及其场内处理或外部管理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废乙醇消毒液（`sanitation_wastewater_spent_ethanol_sanitising_solution`）

废乙醇消毒液是一项有效化学物质特定的卫生清洗废物流。

- 选定流：Spent ethanol sanitising solution
- 流属性/单位：Mass / kg
- 数量规则：记录单独实测废液质量及其场内处理或外部管理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 送入下水道的已处理配制肉制品废水（`sanitation_wastewater_treated_prepared_meat_effluent_sent_to_sewer`）

送入下水道的已处理配制肉制品废水是一项具名处理产出废物流，与其他残余物分开。

- 选定流：Treated prepared-meat effluent sent to sewer
- 流属性/单位：Mass / kg
- 数量规则：记录离开声明处理操作的单独实测质量及其有据去向；不得与去除的污染负荷相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废水进水筛渣（`sanitation_wastewater_wastewater_inlet_screen_residue`）

废水进水筛渣是一项具名处理产出废物流，与其他残余物分开。

- 选定流：Wastewater inlet-screen residue
- 流属性/单位：Mass / kg
- 数量规则：记录离开声明处理操作的单独实测质量及其有据去向；不得与去除的污染负荷相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 溶气气浮污泥（`sanitation_wastewater_dissolved_air_flotation_sludge`）

溶气气浮污泥是一项具名处理产出废物流，与其他残余物分开。

- 选定流：Dissolved-air-flotation sludge
- 流属性/单位：Mass / kg
- 数量规则：记录离开声明处理操作的单独实测质量及其有据去向；不得与去除的污染负荷相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 生物废水处理污泥（`sanitation_wastewater_biological_wastewater_treatment_sludge`）

生物废水处理污泥是一项具名处理产出废物流，与其他残余物分开。

- 选定流：Biological wastewater-treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：记录离开声明处理操作的单独实测质量及其有据去向；不得与去除的污染负荷相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废水处理废活性炭（`sanitation_wastewater_wastewater_treatment_spent_activated_carbon`）

废水处理废活性炭是一项具名处理产出废物流，与其他残余物分开。

- 选定流：Wastewater-treatment spent activated carbon
- 流属性/单位：Mass / kg
- 数量规则：记录离开声明处理操作的单独实测质量及其有据去向；不得与去除的污染负荷相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废弃聚合物废水处理膜（`sanitation_wastewater_discarded_polymeric_wastewater_treatment_membrane`）

废弃聚合物废水处理膜是一项具名处理产出废物流，与其他残余物分开。

- 选定流：Discarded polymeric wastewater-treatment membrane
- 流属性/单位：Mass / kg
- 数量规则：记录离开声明处理操作的单独实测质量及其有据去向；不得与去除的污染负荷相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 废水处理砂砾（`sanitation_wastewater_wastewater_treatment_grit`）

废水处理砂砾是一项具名处理产出废物流，与其他残余物分开。

- 选定流：Wastewater-treatment grit
- 流属性/单位：Mass / kg
- 数量规则：记录离开声明处理操作的单独实测质量及其有据去向；不得与去除的污染负荷相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_residue`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

##### 基本流

###### 化石二氧化碳排放至空气（`sanitation_wastewater_carbon_dioxide_fossil_to_air`）

化石二氧化碳排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Carbon dioxide, fossil to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 一氧化氮排放至空气（`sanitation_wastewater_nitrogen_monoxide_to_air`）

一氧化氮排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 二氧化氮排放至空气（`sanitation_wastewater_nitrogen_dioxide_to_air`）

二氧化氮排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 二氧化硫排放至空气（`sanitation_wastewater_sulfur_dioxide_to_air`）

二氧化硫排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 小于 2.5 微米颗粒物排放至空气（`sanitation_wastewater_particulate_matter_below_2_5_micrometres_to_air`）

小于 2.5 微米颗粒物排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 2.5 至 10 微米颗粒物排放至空气（`sanitation_wastewater_particulate_matter_from_2_5_to_10_micrometres_to_air`）

2.5 至 10 微米颗粒物排放至空气作为分配至本过程的场内燃烧直接基本流单独报告。

- 选定流：Particulate matter from 2.5 to 10 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：根据分别计量的燃料用量与有据的设施、设备或供应商特定因子，计算这一种排放物质的质量；不得使用无引证的 PCR 默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`eu-pef-2021-2279`

###### 化学需氧量排放至淡水（`sanitation_wastewater_chemical_oxygen_demand_to_freshwater`）

化学需氧量排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Chemical oxygen demand to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 生化需氧量排放至淡水（`sanitation_wastewater_biochemical_oxygen_demand_to_freshwater`）

生化需氧量排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Biochemical oxygen demand to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 悬浮固体排放至淡水（`sanitation_wastewater_suspended_solids_to_freshwater`）

悬浮固体排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Suspended solids to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 铵排放至淡水（`sanitation_wastewater_ammonium_to_freshwater`）

铵排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Ammonium to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 硝酸盐排放至淡水（`sanitation_wastewater_nitrate_to_freshwater`）

硝酸盐排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Nitrate to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 亚硝酸盐排放至淡水（`sanitation_wastewater_nitrite_to_freshwater`）

亚硝酸盐排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Nitrite to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 磷酸盐排放至淡水（`sanitation_wastewater_phosphate_to_freshwater`）

磷酸盐排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Phosphate to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 氯化物排放至淡水（`sanitation_wastewater_chloride_to_freshwater`）

氯化物排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Chloride to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 乙酸排放至淡水（`sanitation_wastewater_acetic_acid_to_freshwater`）

乙酸排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Acetic acid to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 过氧乙酸排放至淡水（`sanitation_wastewater_peracetic_acid_to_freshwater`）

过氧乙酸排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Peracetic acid to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 氯排放至淡水（`sanitation_wastewater_chlorine_to_freshwater`）

氯排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Chlorine to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 牛脂排放至淡水（`sanitation_wastewater_beef_tallow_to_freshwater`）

牛脂排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Beef tallow to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 猪脂排放至淡水（`sanitation_wastewater_pork_lard_to_freshwater`）

猪脂排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Pork lard to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 绵羊脂排放至淡水（`sanitation_wastewater_mutton_fat_to_freshwater`）

绵羊脂排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Mutton fat to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 兔脂排放至淡水（`sanitation_wastewater_rabbit_fat_to_freshwater`）

兔脂排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Rabbit fat to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 鸡脂排放至淡水（`sanitation_wastewater_chicken_fat_to_freshwater`）

鸡脂排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Chicken fat to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 鸭脂排放至淡水（`sanitation_wastewater_duck_fat_to_freshwater`）

鸭脂排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Duck fat to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 海豹油排放至淡水（`sanitation_wastewater_seal_oil_to_freshwater`）

海豹油排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Seal oil to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 鲸油排放至淡水（`sanitation_wastewater_whale_oil_to_freshwater`）

鲸油排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Whale oil to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 菜籽油排放至淡水（`sanitation_wastewater_rapeseed_oil_to_freshwater`）

菜籽油排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Rapeseed oil to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 葵花籽油排放至淡水（`sanitation_wastewater_sunflower_oil_to_freshwater`）

葵花籽油排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Sunflower oil to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 水排放至淡水（`sanitation_wastewater_water_to_freshwater`）

水排放至淡水是有据直接排放的一项单独量化基本流。废水进入下水道且不直接排入淡水时不报告。

- 选定流：Water to freshwater
- 流属性/单位：Mass / kg
- 数量规则：根据报告期匹配的出水流量和采样记录，计算这一种排放物质或水量；采用实验室声明的未检出值处理和单位，不使用 PCR 默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 生物源二氧化碳排放至空气（`sanitation_wastewater_carbon_dioxide_biogenic_to_air`）

生物源二氧化碳排放至空气是声明场内处理操作的一项化学物种特定直接排放。

- 选定流：Carbon dioxide, biogenic to air
- 流属性/单位：Mass / kg
- 数量规则：根据设施监测或有据场址特定处理质量平衡，计算这一项空气排放；不提供 PCR 默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 生物源甲烷排放至空气（`sanitation_wastewater_methane_biogenic_to_air`）

生物源甲烷排放至空气是声明场内处理操作的一项化学物种特定直接排放。

- 选定流：Methane, biogenic to air
- 流属性/单位：Mass / kg
- 数量规则：根据设施监测或有据场址特定处理质量平衡，计算这一项空气排放；不提供 PCR 默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 氧化亚氮排放至空气（`sanitation_wastewater_dinitrogen_monoxide_to_air`）

氧化亚氮排放至空气是声明场内处理操作的一项化学物种特定直接排放。

- 选定流：Dinitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：根据设施监测或有据场址特定处理质量平衡，计算这一项空气排放；不提供 PCR 默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 氨排放至空气（`sanitation_wastewater_ammonia_to_air`）

氨排放至空气是声明场内处理操作的一项化学物种特定直接排放。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：根据设施监测或有据场址特定处理质量平衡，计算这一项空气排放；不提供 PCR 默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

###### 硫化氢排放至空气（`sanitation_wastewater_hydrogen_sulfide_to_air`）

硫化氢排放至空气是声明场内处理操作的一项化学物种特定直接排放。

- 选定流：Hydrogen sulfide to air
- 流属性/单位：Mass / kg
- 数量规则：根据设施监测或有据场址特定处理质量平衡，计算这一项空气排放；不提供 PCR 默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 本过程产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater_emission`
- 来源：`eu-jrc-sa-bref-2024`、`codex-cxc-58-2005`、`eu-pef-2021-2279`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| al_subdivision | 所有前景操作 | 首先细分过程、仪表、批次记录和路线特定设备，在可行处采用直接归属。不得把交换分配给有记录证明未使用或未排放该交换的操作。 | `eu-pef-2021-2279` |
| al_mass_balance | 动物原料、配料、产品、共产品和废物 | 分配前闭合批次质量平衡。报告的共产品必须具有有据功能和去向；否则保留为流向实际管理路线的废物。 | `eu-pef-2021-2279`、`eu-jrc-sa-bref-2024` |
| al_avoid_double_count | 汤液、滴液、骨、脂肪组织、废液和不合格品 | 仅对有据有益产出使用产品卡，仅对有据废物管理使用废物卡。绝不得在两个备选项中同时报告同一物理质量。 | `eu-pef-2021-2279` |
| al_residual | 不可避免的共享多产出操作 | 细分后，在物理因果关系能够代表操作时采用既定物理关系。不存在可辩护物理关系时，使用时间同期、地域匹配、质量有据的价格进行经济分配并披露敏感性。 | `eu-pef-2021-2279` |
| al_waste_recovery | 送往回收的废物 | 除非所选研究方法明确要求，且替代、质量、产率和系统边界处理已有记录，否则不得在前景清单内赋予避免产品抵扣。任何下游建模前均保留废物质量和去向。 | `eu-pef-2021-2279` |
| al_upstream | 外购投入 | 保留合格供应商数据集的分配方法并披露实质偏差；除非设施综合且单独建模，否则不得在本前景过程内重建上游屠宰分配。 | `eu-pef-2021-2279`、`eu-jrc-sa-bref-2024` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_material_receipt_material` | `raw_material_receipt` | 单项原子产品投入、转移流、包装制品、共产品或合格产出 | 批次质量、件数、配方、转移、包装领用或放行记录 | lot_id; exact flow identity; supplier; animal species; tissue or blood source; product form; route; gross_mass; tare_mass; item_count; item_mass; timestamp; equipment_id; destination | 从经校准秤、配方系统、库存领用、转移票据、包装件数和放行记录采集；与同一批次核对。 | kg or converted kg | 每个生产批次及每次材料领用或转移 | 完整声明报告期 | 声明产品使用的每条前景生产线和贮存位置 | 仅在批次核对后按相同 row_id 求和；通过实测过程产出归一化。 | 校准、批次谱系、供应商规格、配方授权、放行记录和核对签字 |
| `cp_raw_material_receipt_resource` | `raw_material_receipt` | 一种具名电力、热、燃料、压缩空气、水源、冰或制冷剂交换 | 仪表、发票、储罐、钢瓶、维护或取水记录 | timestamp; process_id; meter_id; carrier_name; opening_reading; closing_reading; invoice_quantity; unit; calorific_value; water_source; refrigerant_type; opening_stock; make_up; recovered_mass; closing_stock | 具备专用仪表时读取专用仪表；否则以有据运行时间或实测负荷分摊共用读数，同时保留每个载体身份。 | native unit plus kWh, MJ, m3, or kg | 每个计量间隔、交付、批次或维护事件 | 完整声明报告期 | 向声明过程供能或供水的所有场内设备 | 仅按 process_id 和准确 row_id 汇总；不得合并能源载体、水源或制冷剂。 | 仪表校准、发票、储罐液位、钢瓶领用、维护日志、分摊工作表和审查签字 |
| `cp_raw_material_receipt_residue` | `raw_material_receipt` | 一种具名不合格品、产生点废水、废液、污泥、包装废物或处理残余物 | 秤、储罐、流量计、废物联单、去向或处理日志 | timestamp; lot_id; row_id; point_of_generation; gross_mass; tare_mass; volume; density; destination; waste_code; recovery_status; treatment_record | 在产生点或发运时测量；仅以有据密度换算体积；将内部处理投入与原始行匹配。 | kg or converted kg | 每批次、排放批次、容器或废物发运 | 完整声明报告期 | 所有前景产生点和场内处理单元 | 按准确 row_id 和去向求和；不得与共产品产出或污染物去除量相抵。 | 秤或仪表校准、联单、储罐记录、去向收据、内部转移匹配和质量平衡签字 |
| `cp_raw_material_receipt_emission` | `raw_material_receipt` | 一种具名空气物种、制冷剂物种、排水物质或排水量 | 燃料记录、因子出处、制冷剂平衡、排气测量、出水流量或实验室结果 | interval_start; interval_end; row_id; fuel_quantity; factor_value; factor_unit; factor_source; exhaust_flow; concentration; effluent_flow; sample_time; laboratory_method; detection_limit; compartment | 匹配活动和测量时间区间；逐物质和环境介质计算；保留原始观测、因子出处、未检出值处理和计算工作簿。 | kg | 每个监测或平衡区间，并汇总至报告期 | 完整声明报告期且活动覆盖匹配 | 分配至声明前景过程的每个直接排放点 | 在单位检查后仅汇总相同物种、方向和环境介质；不得跨物质聚合。 | 经认可或有据实验室结果、烟道记录、因子来源、制冷剂维护日志、计算工作簿和独立审查 |
| `cp_preparation_formulation_material` | `preparation_formulation` | 单项原子产品投入、转移流、包装制品、共产品或合格产出 | 批次质量、件数、配方、转移、包装领用或放行记录 | lot_id; exact flow identity; supplier; animal species; tissue or blood source; product form; route; gross_mass; tare_mass; item_count; item_mass; timestamp; equipment_id; destination | 从经校准秤、配方系统、库存领用、转移票据、包装件数和放行记录采集；与同一批次核对。 | kg or converted kg | 每个生产批次及每次材料领用或转移 | 完整声明报告期 | 声明产品使用的每条前景生产线和贮存位置 | 仅在批次核对后按相同 row_id 求和；通过实测过程产出归一化。 | 校准、批次谱系、供应商规格、配方授权、放行记录和核对签字 |
| `cp_preparation_formulation_resource` | `preparation_formulation` | 一种具名电力、热、燃料、压缩空气、水源、冰或制冷剂交换 | 仪表、发票、储罐、钢瓶、维护或取水记录 | timestamp; process_id; meter_id; carrier_name; opening_reading; closing_reading; invoice_quantity; unit; calorific_value; water_source; refrigerant_type; opening_stock; make_up; recovered_mass; closing_stock | 具备专用仪表时读取专用仪表；否则以有据运行时间或实测负荷分摊共用读数，同时保留每个载体身份。 | native unit plus kWh, MJ, m3, or kg | 每个计量间隔、交付、批次或维护事件 | 完整声明报告期 | 向声明过程供能或供水的所有场内设备 | 仅按 process_id 和准确 row_id 汇总；不得合并能源载体、水源或制冷剂。 | 仪表校准、发票、储罐液位、钢瓶领用、维护日志、分摊工作表和审查签字 |
| `cp_preparation_formulation_residue` | `preparation_formulation` | 一种具名不合格品、产生点废水、废液、污泥、包装废物或处理残余物 | 秤、储罐、流量计、废物联单、去向或处理日志 | timestamp; lot_id; row_id; point_of_generation; gross_mass; tare_mass; volume; density; destination; waste_code; recovery_status; treatment_record | 在产生点或发运时测量；仅以有据密度换算体积；将内部处理投入与原始行匹配。 | kg or converted kg | 每批次、排放批次、容器或废物发运 | 完整声明报告期 | 所有前景产生点和场内处理单元 | 按准确 row_id 和去向求和；不得与共产品产出或污染物去除量相抵。 | 秤或仪表校准、联单、储罐记录、去向收据、内部转移匹配和质量平衡签字 |
| `cp_preparation_formulation_emission` | `preparation_formulation` | 一种具名空气物种、制冷剂物种、排水物质或排水量 | 燃料记录、因子出处、制冷剂平衡、排气测量、出水流量或实验室结果 | interval_start; interval_end; row_id; fuel_quantity; factor_value; factor_unit; factor_source; exhaust_flow; concentration; effluent_flow; sample_time; laboratory_method; detection_limit; compartment | 匹配活动和测量时间区间；逐物质和环境介质计算；保留原始观测、因子出处、未检出值处理和计算工作簿。 | kg | 每个监测或平衡区间，并汇总至报告期 | 完整声明报告期且活动覆盖匹配 | 分配至声明前景过程的每个直接排放点 | 在单位检查后仅汇总相同物种、方向和环境介质；不得跨物质聚合。 | 经认可或有据实验室结果、烟道记录、因子来源、制冷剂维护日志、计算工作簿和独立审查 |
| `cp_thermal_preservation_material` | `thermal_preservation` | 单项原子产品投入、转移流、包装制品、共产品或合格产出 | 批次质量、件数、配方、转移、包装领用或放行记录 | lot_id; exact flow identity; supplier; animal species; tissue or blood source; product form; route; gross_mass; tare_mass; item_count; item_mass; timestamp; equipment_id; destination | 从经校准秤、配方系统、库存领用、转移票据、包装件数和放行记录采集；与同一批次核对。 | kg or converted kg | 每个生产批次及每次材料领用或转移 | 完整声明报告期 | 声明产品使用的每条前景生产线和贮存位置 | 仅在批次核对后按相同 row_id 求和；通过实测过程产出归一化。 | 校准、批次谱系、供应商规格、配方授权、放行记录和核对签字 |
| `cp_thermal_preservation_resource` | `thermal_preservation` | 一种具名电力、热、燃料、压缩空气、水源、冰或制冷剂交换 | 仪表、发票、储罐、钢瓶、维护或取水记录 | timestamp; process_id; meter_id; carrier_name; opening_reading; closing_reading; invoice_quantity; unit; calorific_value; water_source; refrigerant_type; opening_stock; make_up; recovered_mass; closing_stock | 具备专用仪表时读取专用仪表；否则以有据运行时间或实测负荷分摊共用读数，同时保留每个载体身份。 | native unit plus kWh, MJ, m3, or kg | 每个计量间隔、交付、批次或维护事件 | 完整声明报告期 | 向声明过程供能或供水的所有场内设备 | 仅按 process_id 和准确 row_id 汇总；不得合并能源载体、水源或制冷剂。 | 仪表校准、发票、储罐液位、钢瓶领用、维护日志、分摊工作表和审查签字 |
| `cp_thermal_preservation_residue` | `thermal_preservation` | 一种具名不合格品、产生点废水、废液、污泥、包装废物或处理残余物 | 秤、储罐、流量计、废物联单、去向或处理日志 | timestamp; lot_id; row_id; point_of_generation; gross_mass; tare_mass; volume; density; destination; waste_code; recovery_status; treatment_record | 在产生点或发运时测量；仅以有据密度换算体积；将内部处理投入与原始行匹配。 | kg or converted kg | 每批次、排放批次、容器或废物发运 | 完整声明报告期 | 所有前景产生点和场内处理单元 | 按准确 row_id 和去向求和；不得与共产品产出或污染物去除量相抵。 | 秤或仪表校准、联单、储罐记录、去向收据、内部转移匹配和质量平衡签字 |
| `cp_thermal_preservation_emission` | `thermal_preservation` | 一种具名空气物种、制冷剂物种、排水物质或排水量 | 燃料记录、因子出处、制冷剂平衡、排气测量、出水流量或实验室结果 | interval_start; interval_end; row_id; fuel_quantity; factor_value; factor_unit; factor_source; exhaust_flow; concentration; effluent_flow; sample_time; laboratory_method; detection_limit; compartment | 匹配活动和测量时间区间；逐物质和环境介质计算；保留原始观测、因子出处、未检出值处理和计算工作簿。 | kg | 每个监测或平衡区间，并汇总至报告期 | 完整声明报告期且活动覆盖匹配 | 分配至声明前景过程的每个直接排放点 | 在单位检查后仅汇总相同物种、方向和环境介质；不得跨物质聚合。 | 经认可或有据实验室结果、烟道记录、因子来源、制冷剂维护日志、计算工作簿和独立审查 |
| `cp_hermetic_canning_material` | `hermetic_canning` | 单项原子产品投入、转移流、包装制品、共产品或合格产出 | 批次质量、件数、配方、转移、包装领用或放行记录 | lot_id; exact flow identity; supplier; animal species; tissue or blood source; product form; route; gross_mass; tare_mass; item_count; item_mass; timestamp; equipment_id; destination | 从经校准秤、配方系统、库存领用、转移票据、包装件数和放行记录采集；与同一批次核对。 | kg or converted kg | 每个生产批次及每次材料领用或转移 | 完整声明报告期 | 声明产品使用的每条前景生产线和贮存位置 | 仅在批次核对后按相同 row_id 求和；通过实测过程产出归一化。 | 校准、批次谱系、供应商规格、配方授权、放行记录和核对签字 |
| `cp_hermetic_canning_resource` | `hermetic_canning` | 一种具名电力、热、燃料、压缩空气、水源、冰或制冷剂交换 | 仪表、发票、储罐、钢瓶、维护或取水记录 | timestamp; process_id; meter_id; carrier_name; opening_reading; closing_reading; invoice_quantity; unit; calorific_value; water_source; refrigerant_type; opening_stock; make_up; recovered_mass; closing_stock | 具备专用仪表时读取专用仪表；否则以有据运行时间或实测负荷分摊共用读数，同时保留每个载体身份。 | native unit plus kWh, MJ, m3, or kg | 每个计量间隔、交付、批次或维护事件 | 完整声明报告期 | 向声明过程供能或供水的所有场内设备 | 仅按 process_id 和准确 row_id 汇总；不得合并能源载体、水源或制冷剂。 | 仪表校准、发票、储罐液位、钢瓶领用、维护日志、分摊工作表和审查签字 |
| `cp_hermetic_canning_residue` | `hermetic_canning` | 一种具名不合格品、产生点废水、废液、污泥、包装废物或处理残余物 | 秤、储罐、流量计、废物联单、去向或处理日志 | timestamp; lot_id; row_id; point_of_generation; gross_mass; tare_mass; volume; density; destination; waste_code; recovery_status; treatment_record | 在产生点或发运时测量；仅以有据密度换算体积；将内部处理投入与原始行匹配。 | kg or converted kg | 每批次、排放批次、容器或废物发运 | 完整声明报告期 | 所有前景产生点和场内处理单元 | 按准确 row_id 和去向求和；不得与共产品产出或污染物去除量相抵。 | 秤或仪表校准、联单、储罐记录、去向收据、内部转移匹配和质量平衡签字 |
| `cp_hermetic_canning_emission` | `hermetic_canning` | 一种具名空气物种、制冷剂物种、排水物质或排水量 | 燃料记录、因子出处、制冷剂平衡、排气测量、出水流量或实验室结果 | interval_start; interval_end; row_id; fuel_quantity; factor_value; factor_unit; factor_source; exhaust_flow; concentration; effluent_flow; sample_time; laboratory_method; detection_limit; compartment | 匹配活动和测量时间区间；逐物质和环境介质计算；保留原始观测、因子出处、未检出值处理和计算工作簿。 | kg | 每个监测或平衡区间，并汇总至报告期 | 完整声明报告期且活动覆盖匹配 | 分配至声明前景过程的每个直接排放点 | 在单位检查后仅汇总相同物种、方向和环境介质；不得跨物质聚合。 | 经认可或有据实验室结果、烟道记录、因子来源、制冷剂维护日志、计算工作簿和独立审查 |
| `cp_pickling_seasoning_material` | `pickling_seasoning` | 单项原子产品投入、转移流、包装制品、共产品或合格产出 | 批次质量、件数、配方、转移、包装领用或放行记录 | lot_id; exact flow identity; supplier; animal species; tissue or blood source; product form; route; gross_mass; tare_mass; item_count; item_mass; timestamp; equipment_id; destination | 从经校准秤、配方系统、库存领用、转移票据、包装件数和放行记录采集；与同一批次核对。 | kg or converted kg | 每个生产批次及每次材料领用或转移 | 完整声明报告期 | 声明产品使用的每条前景生产线和贮存位置 | 仅在批次核对后按相同 row_id 求和；通过实测过程产出归一化。 | 校准、批次谱系、供应商规格、配方授权、放行记录和核对签字 |
| `cp_pickling_seasoning_resource` | `pickling_seasoning` | 一种具名电力、热、燃料、压缩空气、水源、冰或制冷剂交换 | 仪表、发票、储罐、钢瓶、维护或取水记录 | timestamp; process_id; meter_id; carrier_name; opening_reading; closing_reading; invoice_quantity; unit; calorific_value; water_source; refrigerant_type; opening_stock; make_up; recovered_mass; closing_stock | 具备专用仪表时读取专用仪表；否则以有据运行时间或实测负荷分摊共用读数，同时保留每个载体身份。 | native unit plus kWh, MJ, m3, or kg | 每个计量间隔、交付、批次或维护事件 | 完整声明报告期 | 向声明过程供能或供水的所有场内设备 | 仅按 process_id 和准确 row_id 汇总；不得合并能源载体、水源或制冷剂。 | 仪表校准、发票、储罐液位、钢瓶领用、维护日志、分摊工作表和审查签字 |
| `cp_pickling_seasoning_residue` | `pickling_seasoning` | 一种具名不合格品、产生点废水、废液、污泥、包装废物或处理残余物 | 秤、储罐、流量计、废物联单、去向或处理日志 | timestamp; lot_id; row_id; point_of_generation; gross_mass; tare_mass; volume; density; destination; waste_code; recovery_status; treatment_record | 在产生点或发运时测量；仅以有据密度换算体积；将内部处理投入与原始行匹配。 | kg or converted kg | 每批次、排放批次、容器或废物发运 | 完整声明报告期 | 所有前景产生点和场内处理单元 | 按准确 row_id 和去向求和；不得与共产品产出或污染物去除量相抵。 | 秤或仪表校准、联单、储罐记录、去向收据、内部转移匹配和质量平衡签字 |
| `cp_pickling_seasoning_emission` | `pickling_seasoning` | 一种具名空气物种、制冷剂物种、排水物质或排水量 | 燃料记录、因子出处、制冷剂平衡、排气测量、出水流量或实验室结果 | interval_start; interval_end; row_id; fuel_quantity; factor_value; factor_unit; factor_source; exhaust_flow; concentration; effluent_flow; sample_time; laboratory_method; detection_limit; compartment | 匹配活动和测量时间区间；逐物质和环境介质计算；保留原始观测、因子出处、未检出值处理和计算工作簿。 | kg | 每个监测或平衡区间，并汇总至报告期 | 完整声明报告期且活动覆盖匹配 | 分配至声明前景过程的每个直接排放点 | 在单位检查后仅汇总相同物种、方向和环境介质；不得跨物质聚合。 | 经认可或有据实验室结果、烟道记录、因子来源、制冷剂维护日志、计算工作簿和独立审查 |
| `cp_packaging_storage_release_material` | `packaging_storage_release` | 单项原子产品投入、转移流、包装制品、共产品或合格产出 | 批次质量、件数、配方、转移、包装领用或放行记录 | lot_id; exact flow identity; supplier; animal species; tissue or blood source; product form; route; gross_mass; tare_mass; item_count; item_mass; timestamp; equipment_id; destination | 从经校准秤、配方系统、库存领用、转移票据、包装件数和放行记录采集；与同一批次核对。 | kg or converted kg | 每个生产批次及每次材料领用或转移 | 完整声明报告期 | 声明产品使用的每条前景生产线和贮存位置 | 仅在批次核对后按相同 row_id 求和；通过实测过程产出归一化。 | 校准、批次谱系、供应商规格、配方授权、放行记录和核对签字 |
| `cp_packaging_storage_release_resource` | `packaging_storage_release` | 一种具名电力、热、燃料、压缩空气、水源、冰或制冷剂交换 | 仪表、发票、储罐、钢瓶、维护或取水记录 | timestamp; process_id; meter_id; carrier_name; opening_reading; closing_reading; invoice_quantity; unit; calorific_value; water_source; refrigerant_type; opening_stock; make_up; recovered_mass; closing_stock | 具备专用仪表时读取专用仪表；否则以有据运行时间或实测负荷分摊共用读数，同时保留每个载体身份。 | native unit plus kWh, MJ, m3, or kg | 每个计量间隔、交付、批次或维护事件 | 完整声明报告期 | 向声明过程供能或供水的所有场内设备 | 仅按 process_id 和准确 row_id 汇总；不得合并能源载体、水源或制冷剂。 | 仪表校准、发票、储罐液位、钢瓶领用、维护日志、分摊工作表和审查签字 |
| `cp_packaging_storage_release_residue` | `packaging_storage_release` | 一种具名不合格品、产生点废水、废液、污泥、包装废物或处理残余物 | 秤、储罐、流量计、废物联单、去向或处理日志 | timestamp; lot_id; row_id; point_of_generation; gross_mass; tare_mass; volume; density; destination; waste_code; recovery_status; treatment_record | 在产生点或发运时测量；仅以有据密度换算体积；将内部处理投入与原始行匹配。 | kg or converted kg | 每批次、排放批次、容器或废物发运 | 完整声明报告期 | 所有前景产生点和场内处理单元 | 按准确 row_id 和去向求和；不得与共产品产出或污染物去除量相抵。 | 秤或仪表校准、联单、储罐记录、去向收据、内部转移匹配和质量平衡签字 |
| `cp_packaging_storage_release_emission` | `packaging_storage_release` | 一种具名空气物种、制冷剂物种、排水物质或排水量 | 燃料记录、因子出处、制冷剂平衡、排气测量、出水流量或实验室结果 | interval_start; interval_end; row_id; fuel_quantity; factor_value; factor_unit; factor_source; exhaust_flow; concentration; effluent_flow; sample_time; laboratory_method; detection_limit; compartment | 匹配活动和测量时间区间；逐物质和环境介质计算；保留原始观测、因子出处、未检出值处理和计算工作簿。 | kg | 每个监测或平衡区间，并汇总至报告期 | 完整声明报告期且活动覆盖匹配 | 分配至声明前景过程的每个直接排放点 | 在单位检查后仅汇总相同物种、方向和环境介质；不得跨物质聚合。 | 经认可或有据实验室结果、烟道记录、因子来源、制冷剂维护日志、计算工作簿和独立审查 |
| `cp_sanitation_wastewater_material` | `sanitation_wastewater` | 单项原子产品投入、转移流、包装制品、共产品或合格产出 | 批次质量、件数、配方、转移、包装领用或放行记录 | lot_id; exact flow identity; supplier; animal species; tissue or blood source; product form; route; gross_mass; tare_mass; item_count; item_mass; timestamp; equipment_id; destination | 从经校准秤、配方系统、库存领用、转移票据、包装件数和放行记录采集；与同一批次核对。 | kg or converted kg | 每个生产批次及每次材料领用或转移 | 完整声明报告期 | 声明产品使用的每条前景生产线和贮存位置 | 仅在批次核对后按相同 row_id 求和；通过实测过程产出归一化。 | 校准、批次谱系、供应商规格、配方授权、放行记录和核对签字 |
| `cp_sanitation_wastewater_resource` | `sanitation_wastewater` | 一种具名电力、热、燃料、压缩空气、水源、冰或制冷剂交换 | 仪表、发票、储罐、钢瓶、维护或取水记录 | timestamp; process_id; meter_id; carrier_name; opening_reading; closing_reading; invoice_quantity; unit; calorific_value; water_source; refrigerant_type; opening_stock; make_up; recovered_mass; closing_stock | 具备专用仪表时读取专用仪表；否则以有据运行时间或实测负荷分摊共用读数，同时保留每个载体身份。 | native unit plus kWh, MJ, m3, or kg | 每个计量间隔、交付、批次或维护事件 | 完整声明报告期 | 向声明过程供能或供水的所有场内设备 | 仅按 process_id 和准确 row_id 汇总；不得合并能源载体、水源或制冷剂。 | 仪表校准、发票、储罐液位、钢瓶领用、维护日志、分摊工作表和审查签字 |
| `cp_sanitation_wastewater_residue` | `sanitation_wastewater` | 一种具名不合格品、产生点废水、废液、污泥、包装废物或处理残余物 | 秤、储罐、流量计、废物联单、去向或处理日志 | timestamp; lot_id; row_id; point_of_generation; gross_mass; tare_mass; volume; density; destination; waste_code; recovery_status; treatment_record | 在产生点或发运时测量；仅以有据密度换算体积；将内部处理投入与原始行匹配。 | kg or converted kg | 每批次、排放批次、容器或废物发运 | 完整声明报告期 | 所有前景产生点和场内处理单元 | 按准确 row_id 和去向求和；不得与共产品产出或污染物去除量相抵。 | 秤或仪表校准、联单、储罐记录、去向收据、内部转移匹配和质量平衡签字 |
| `cp_sanitation_wastewater_emission` | `sanitation_wastewater` | 一种具名空气物种、制冷剂物种、排水物质或排水量 | 燃料记录、因子出处、制冷剂平衡、排气测量、出水流量或实验室结果 | interval_start; interval_end; row_id; fuel_quantity; factor_value; factor_unit; factor_source; exhaust_flow; concentration; effluent_flow; sample_time; laboratory_method; detection_limit; compartment | 匹配活动和测量时间区间；逐物质和环境介质计算；保留原始观测、因子出处、未检出值处理和计算工作簿。 | kg | 每个监测或平衡区间，并汇总至报告期 | 完整声明报告期且活动覆盖匹配 | 分配至声明前景过程的每个直接排放点 | 在单位检查后仅汇总相同物种、方向和环境介质；不得跨物质聚合。 | 经认可或有据实验室结果、烟道记录、因子来源、制冷剂维护日志、计算工作簿和独立审查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cr_stage_normalization | 所有前景交换 | 归一化行数量 = 核对后的行数量 × 链式下游合格转移因子 ÷ 净合格参考产品质量。归一化过程中保持每个行身份不变。 | 批次数量；过程转移质量；参考净质量 | 按适用单位表示的每 1 kg 参考产品的 kg、MJ、kWh 或 m3 | `eu-pef-2021-2279` |
| cr_item_mass | 以件数记录的包装制品 | 包装质量 = 领用件数 × 由有据样本测得的批次特定平均单件质量；逐包装制品报告。 | 件数；样本单件质量；皮重记录 | 具名包装制品的 kg | `eu-pef-2021-2279` |
| cr_energy_conversion | 蒸汽、热水、天然气、柴油、液化石油气 | 载体能量 = 记录的载体数量 × 有据开票能量基准或实测低位热值。电力保留 kWh，压缩空气保留 m3。 | 载体特定仪表或发票数量；换算基准 | 同一具名载体的 MJ | `eu-pef-2021-2279` |
| cr_combustion_emission | 每种直接燃烧空气物种 | 排放质量 = 对每种单独计量燃料的燃料能量 × 该物种的有据设施、设备或供应商特定排放因子求和。不得使用无引证 PCR 因子。 | 按载体的燃料能量；因子值；因子单位；运行归属 | 一种具名空气物种的 kg | `eu-jrc-sa-bref-2024`、`eu-pef-2021-2279` |
| cr_refrigerant_balance | 每套已安装制冷系统 | 制冷剂损失 = 期初库存 + 添加入库 + 补充量 − 期末库存 − 回收量 − 有据转移量。氨和 HFC-134a 直接报告；依据供应商组成将 R404A 损失拆为 HFC-125、HFC-134a 和 HFC-143a。 | 期初库存；添加入库；补充量；期末库存；回收量；转移量；供应商组成 | 各具名制冷剂物种排放至空气的 kg | `eu-pef-2021-2279` |
| cr_effluent_load | 每个直接水排放行 | 排放负荷 = 匹配出水体积 × 实验室浓度经单位换算和有据未检出值处理后的求和。水量与污染物质量分开计算。 | 出水流量；浓度；时间区间；实验室单位；必要时的密度 | 一种具名物质或水排放至淡水的 kg | `eu-jrc-sa-bref-2024`、`eu-pef-2021-2279` |
| cr_process_mass_balance | 每个前景过程和批次 | 质量平衡差 = 材料投入 − 合格产品产出 − 共产品产出 − 废物产出 − 期末库存 + 期初库存。调查并披露差异，不得强制调零。 | 原子材料行；库存变化；过程转移 | 有据过程质量平衡和未解决差异 | `eu-pef-2021-2279` |
| cr_reference_net_mass | 参考产品 | 参考净质量 = 放行包装总质量 − 实测包装部件质量 − 放行中排除的不合格产品质量。仅在核对后归一化为恰好 1 kg。 | 放行总质量；每个包装质量；排除产品质量 | 1 kg 净合格参考产品 | `eu-pef-2021-2279` |
| cr_allocation_share | 不可避免的共享多产出操作 | 分配交换 = 共享交换 × 有据物理或经济分配份额；同一交换的全部份额之和必须为一，并保留未取整输入。 | 共享交换；因果参数或同期价格；共产品数量 | 按产品分配的原子交换 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 参考产品和动物源性投入 | 证明 CPC 21189 身份、准确物种、解剖组织或血液来源、非香肠形态、一条保藏路线，以及常温或冷藏放行状态。不得使用参考流备注中错误的 22182 或 22183 交叉引用。 | retained CPC raw 记录、产品规格、配方、标签、供应商规格和批次谱系 |
| dq_route | 保藏过程 | 保留所选分支的实际设备、运行顺序、批次、时间—温度或计划热处理记录、冷却、偏差审查和放行授权。 | 符合 Codex 的过程记录和签字放行审查 |
| dq_canning | 密封罐藏 | 保留容器规格、封口检查、计划热处理制定权限、关键因子记录、杀菌釜记录、冷却记录、容器完整性检验和偏差处置。 | 每次罐藏生产的 CXC 23 过程文件 |
| dq_temporal | 所有前景数据 | 覆盖完整声明报告期和所有纳入生产批次；披露停机、生产活动、异常事件、缺失区间和替代。 | 生产日历、仪表覆盖、批次清单、缺口日志和代表性说明 |
| dq_technology | 能源、制冷剂、包装和处理行 | 记录须匹配实际场址设备、已安装制冷剂、载体、包装规格和处理配置；不得借用另一条路线的行。 | 设备台账、公用工程图、制冷日志、包装清单和处理流程图 |
| dq_completeness | 清单 | 核对原料投入、配料、水、每种能源载体、制冷剂补充与排放、包装部件、产品、共产品、不合格品、废水、残余物以及直接空气或水交换；论证每张适用而省略的卡。 | 原子行完整性矩阵和过程质量平衡 |
| dq_measurement | 实测数量 | 使用经校准设备并保留毛重读数、皮重、单位、时间戳、批次、设备 ID、换算基准和更正记录。 | 校准证书、原始导出、发票、实验室报告和经审查计算工作簿 |
| dq_allocation | 共享操作和共产品 | 记录细分尝试、分配关系、参数、使用时的价格、废物状态、去向和敏感性。防止产品/废物备选项重复计数。 | 分配说明、价格或物理因果证据和敏感性结果 |
| dq_uuid | 流身份 | 仅已核验参考产品可带所提供 UUID。其余每个空 UUID 必须与恰好一条 manifest 未解析行匹配，直至 hybrid search 和 public state=100 direct read 确认准确身份。 | UUID 白名单和 row_id 闭合审计 |
| dq_source_use | 外部证据 | 仅在声明用途内使用官方来源支持分类和方法规则。不得把过程描述转换为默认数量、范围或排放因子。 | 来源—规则矩阵和无不受支持默认值证明 |
| dq_verification | 数据集放行 | 发布前由独立于数据准备的审查者检查身份、边界、路线、记录、计算、单位换算、质量平衡、分配、UUID 闭合和披露。 | 签字验证清单和已解决问题日志 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| vr_cpc_identity | 数据集身份 | 仅当 CPC 恰为 21189 且产品规格匹配声明纳入范围时通过；使用 22182 或 22183 作为排除引用时失败。 | `unsd-cpc-3-21189` |
| vr_exclusions | 数据集身份 | 香肠、肉提取物或肉汁、完整餐食、均质婴幼儿类制品、鱼制品，或以冷冻、盐腌、盐水保藏、熏制或干制界定的产品校验失败。 | `unsd-cpc-3-21189` |
| vr_reference_uuid | 参考产品 | 要求 UUID `61b39162-1ed6-4d66-b54b-9c0889bd9fc4`、Product 流类型、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 |  |
| vr_reference_amount | 参考产品 | 扣除包装质量和不合格产品后，要求恰好 1 kg 净合格产品。 | `eu-pef-2021-2279` |
| vr_qualifiers | 参考产品 | 缺失准确动物与解剖配方、具体产品形态、接收状态、一条保藏路线、最终状态、包装规格、批次、场址、时间期或分配披露时失败。 | `eu-pef-2021-2279` |
| vr_route_lock | 过程选择 | 要求通过热加工、密封罐藏或腌制/调味中恰好一条匹配的产品形态路线。热加工内，所选产品转移流要求恰好一种具名煮制、油炸、烘烤或蒸制方法。 | `codex-cxc-58-2005`、`codex-cxc-23-1979`、`fao-meat-processing-2007` |
| vr_canning_records | 密封罐藏 | 罐藏数据集缺少有据装填、封口、计划热处理、冷却、完整性审查、偏差处置和批次记录时失败。 | `codex-cxc-23-1979` |
| vr_atomic_flow | 清单 | 除官方宽泛参考产品外，每个选定流必须命名一种具体材料、制品、废物流、物质或环境介质交换；集合标签和 and/or 选择器校验失败。 |  |
| vr_energy_split | 清单 | 电网电力、外购蒸汽、外购热水、天然气、柴油、液化石油气和外购压缩空气必须按过程保持分开；合并能量值校验失败。 | `eu-pef-2021-2279` |
| vr_water_split | 清单 | 市政水、地下水和地表水必须保持分开；保留每项按产生点区分的废水流和排放去向。 | `eu-jrc-sa-bref-2024`、`eu-pef-2021-2279` |
| vr_refrigerant | 冷却操作 | 要求已安装制冷剂身份、补充、回收、库存平衡和各项泄漏物种；合并制冷剂排放校验失败。 | `eu-pef-2021-2279` |
| vr_package_mass | 包装 | 要求每项包装制品单独记录，并从 1 kg 产品质量中排除总包装质量。 | `eu-pef-2021-2279` |
| vr_mass_balance | 每个过程 | 要求有据质量平衡和差异，并防止同一质量同时报告为共产品和废物。 | `eu-pef-2021-2279` |
| vr_effluent | 直接排放 | 要求每项污染物和受纳环境介质具有匹配流量与实验室采样；合并污染物行或无引证默认浓度校验失败。 | `eu-jrc-sa-bref-2024`、`eu-pef-2021-2279` |
| vr_amount_mode | 所有非参考行 | 要求 `foreground_record` 或 `calculated_value`；不受支持固定值、模型估算、推理估算范围或由来源描述推导的默认值校验失败。 | `eu-pef-2021-2279` |
| vr_uuid_closure | 所有清单行 | 仅 `packaging_storage_release_reference_product` 可使用参考 UUID；其余每个空 UUID 必须有恰好一条匹配的 manifest 未解析条目，且包含候选和拒绝理由。 |  |
| vr_bilingual | PCR 投影 | 要求英文和中文的 process_id、row_id、方向、流类型、受控 token、protocol_id、来源 ID 顺序和卡片顺序完全相同。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种声明 CPC 21189 产品的产品特定前景制造数据集。 |
| downstream_use | 仅在方法审查、UUID 解析、对齐投影、数据验证和发布控制完成后，才可成为 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 仅当产品形态、动物配方、路线、场址、市场状态、时间期、技术、包装、分配和地域具有足够代表性并已披露时，方可用于比较或归因建模。 |
| excluded_use | 不是类别平均默认值；不适用于香肠、完整餐食、提取物、婴幼儿制品、鱼制品，或以冷冻、盐腌、盐水保藏、熏制或干制界定的产品；不构成海生哺乳动物来源或销售授权。 |
| required_metadata | PCR id；CPC 21189；参考 UUID；准确配方物种和解剖身份；产品形态；路线；接收和放行状态；场址；地域；时间期；过程技术；包装清单；制冷剂；水源；废水路线；分配；共产品和废物去向；来源和验证引用。 |
| required_quality_disclosure | 覆盖、缺失数据、替代、仪表分摊、实验室方法、未检出值处理、质量平衡差异、换算因子、数据质量评估、UUID 缺口、独立验证和局限。 |
| update_trigger | 配方物种或解剖身份、产品形态、保藏路线、计划热处理、设备、制冷剂、包装、场址、公用工程组合、废水处理、分配、共产品去向、报告期、分类范围、参考身份或控制性来源发生变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21189` | 官方指南（`official_guidance`） | United Nations Statistics Division, Central Product Classification Version 3.0, retained official structure CSV, subclass 21189, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (accessed 2026-08-13) | 用于锁定子类准确标题、父类语境，以及 CPC 21181—21184 和完整餐食子类 21186 的排除边界。 |
| `eu-jrc-sa-bref-2024` | 官方指南（`official_guidance`） | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and Edible Co-products Industries, JRC135916, DOI 10.2760/18199, https://doi.org/10.2760/18199 (accessed 2026-08-13) | 用于独立上游动物原料数据集、接收处理、清洗、公用工程、废水、残余物、共产品和直接排放的清单结构；未引入默认数量。 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, consolidated text, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (accessed 2026-08-13) | 用于产品特定物料清单、企业特定制造数据、完整生命周期清单、分配层级、透明度、数据质量和验证。 |
| `codex-cxc-58-2005` | 标准（`standard`） | Codex Alimentarius, Code of Hygienic Practice for Meat, CXC 58-2005, https://workspace.fao.org/sites/codex/Standards/CXC%2058-2005/CXC_058e.pdf (accessed 2026-08-13) | 用于肉制品定义、生熟分隔、过程控制、烹调记录、冷藏、包装、卫生、可追溯性和批次文件。 |
| `codex-cxc-23-1979` | 标准（`standard`） | Codex Alimentarius, Code of Hygienic Practice for Low and Acidified Low-Acid Canned Foods, CXC 23-1979, https://workspace.fao.org/sites/codex/Standards/CXC%2023-1979/CXC_023e.pdf (accessed 2026-08-13) | 用于密封容器装填与封口、计划热处理、快速冷却、容器完整性控制、偏差处置和生产记录；未引入数值型工艺默认值。 |
| `fao-meat-processing-2007` | 手册（`handbook`） | Gunter Heinz and Peter Hautzinger, Meat Processing Technology for Small- to Medium-Scale Producers, FAO Regional Office for Asia and the Pacific, RAP Publication 2007/20, ISBN 978-974-7946-99-4, https://www.fao.org/3/a-ai407e.pdf (accessed 2026-08-13) | 用于切割、绞碎、混合、成型、煮制、油炸、烘烤、蒸制、罐藏、配方原料、包装和卫生的独立工艺分解；未引入默认数量。 |
| `eu-reg-853-2004` | 标准（`standard`） | Regulation (EC) No 853/2004 laying down specific hygiene rules for food of animal origin, consolidated official text, https://eur-lex.europa.eu/eli/reg/2004/853/oj/eng (accessed 2026-08-13) | 用于配制肉制品、包括血液在内的动物源性食品及解剖产品区分的官方定义。 |
