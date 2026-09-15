---
schema_version: 1
pcr_id: "pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.artificial-fur-and-articles-thereof-except-headgear"
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 人造毛皮及其制品（不包括帽类）

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 代码 28330：卷材或制成品形态的人造毛皮以及人造毛皮制品，但不包括帽类。它覆盖申报前景边界内实际实施的合成绒毛织物形成、整理、背衬、裁剪、组装、检验和包装作业。天然毛皮、天然毛皮制品和帽类不在范围内。制造商应说明报告的输出是人造毛皮面料还是制成品，并披露所有纳入的工艺步骤。来源：`unsd-cpc-3-0-2025`、`jrc-textiles-bref-2023`、`ziouzios-et-al-2026-artificial-fur-processing`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.artificial-fur-and-articles-thereof-except-headgear` |
| classification_refs | CPC 3.0 `28330`，精确映射 |
| covered_products | 人造毛皮绒毛面料以及除帽类以外的人造毛皮制成品 |
| excluded_products | 天然毛皮；天然毛皮制品；帽类；无法识别为 CPC 28330 的输出 |
| representative_product | 工厂端的已制造人造毛皮成品或人造毛皮制品 |
| production_route | 适用时通过针织、机织或簇绒形成合成纤维绒毛；湿法或干法整理；可选的涂层或复合；可选的裁剪和缝制；检验和包装 |
| market_state | 成品，已制造；生产混合，在工厂 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 合格的人造毛皮或除帽类外的合格人造毛皮制品，并申报工艺路线和产品形态 |
| How much | 1 kg 产品净质量 |
| How well | 符合制造商的放行规格并通过最终检验 |
| How long or cycle | 一个制造报告期，通常为连续十二个月；偏离情况应予披露 |
| reference_flow_link | Tiangong 流 `ac47239d-883f-4063-bcc1-fc64b2ffc8fc`，Product flow，CPC 3.0 `28330`，状态码 `100` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | `1` |
| 参考产品流 | 人造毛皮及其制品（不包括帽类） `ac47239d-883f-4063-bcc1-fc64b2ffc8fc` |
| 参考流属性 | Mass（`93a60a56-a3c8-11da-a746-0800200b9a66`） |
| 参考单位组 | Units of mass（`93a60a57-a4c8-11da-a746-0800200c9a66`） |
| 参考单位 | kg |
| 必需限定信息 | 产品形态（面料或制成品）；按质量计的纤维组成；绒毛结构技术；背衬/涂层/复合状态；染色和整理路线；纳入的前景过程；场址和地域；报告期；生产混合；工厂端市场状态；如有，再生含量声明 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 | source_ids |
| --- | --- | --- | --- | --- | --- |
| measure_reference_mass | 参考产品和中间纺织产品 | Mass | kg | 使用经校准的秤确定产品净干质量；不计运输和销售包装。 | `pef-apparel-footwear-v3-1-2025` |
| measure_material_mass | 纤维、纱线、染料、粘结剂、胶粘剂、里料、缝纫线和包装 | Mass | kg | 根据采购、投料或批次记录分别记录每种化学或材料身份不同的输入；不得合并不同材料。 | `jrc-textiles-bref-2023`、`pef-apparel-footwear-v3-1-2025` |
| measure_water | 工艺用水和废水 | Volume | m3 | 使用过程或场址水表，并在报告期内核对取水、滞留水分和排放废水。 | `jrc-textiles-bref-2023` |
| measure_energy | 电力、蒸汽和天然气 | Energy | 电力用 kWh；蒸汽和天然气用 MJ | 分别计量每种载能体；必要时使用有记录的低位热值或焓值数据转换账单数量。 | `jrc-textiles-bref-2023`、`pef-apparel-footwear-v3-1-2025` |
| measure_waste | 每项分别管理的废物流 | Mass | kg | 在处理或移出前称量每项废物流；将回到生产的返工料与废物分开记录。 | `jrc-textiles-bref-2023`、`pef-apparel-footwear-v3-1-2025` |
| measure_air_emission | 每种直接空气污染物 | Mass | kg | 使用污染物特定的烟道监测，或根据实测燃料/化学品用量和有记录的设施特定因子计算；每种污染物应单列。 | `jrc-textiles-bref-2023` |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 申报的前景从接收的合成绒毛纤维、背衬纱线、外购人造毛皮面料或其他明确命名的中间输入开始。 |
| starting_condition_role | `starting_material` |
| product_classification_scope | CPC 3.0 `28330`；人造毛皮及其制品（不包括帽类） |
| recursive_input_rule | 本身属于 CPC 28330 的外购人造毛皮输入应建模为独立上游数据集，不得再次计作前景纤维或面料生产。 |
| upstream_dataset_requirement | 为纤维、纱线、化学品、燃料、电力、蒸汽、水、包装及其他外购输入提供可追溯的上游数据集。 |
| disclosure | 申报起始条件、所有纳入和省略的工艺步骤、同类别输入的处理方式以及工厂端终点。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_foreground_operations | 前景系统 | 从申报起始条件直至放行的工厂端产品，纳入报告制造商控制的每项作业：适用的绒毛形成、染色和整理、涂层或复合、裁剪和组装、检验、返工及包装。 | `jrc-textiles-bref-2023`、`pef-apparel-footwear-v3-1-2025`、`ziouzios-et-al-2026-artificial-fur-processing` |
| boundary_upstream_inputs | 外购输入 | 将每种外购材料和载能体链接到可追溯的上游数据集；不得将上游生产吸收到未经限定的前景输入中。 | `eu-pef-recommendation-2021-2279`、`pef-apparel-footwear-v3-1-2025` |
| boundary_same_category_input | 外购人造毛皮 | 将外购 CPC 28330 人造毛皮作为递归上游产品输入处理，披露其质量和供应商数据集；从报告前景中排除供应商生产。 | `unsd-cpc-3-0-2025`、`eu-pef-recommendation-2021-2279` |
| boundary_downstream_exclusion | 工厂端数据集 | 排除分销、零售、使用、维护和生命周期终结；若更广的生命周期模型需要这些阶段，应在本前景数据包之外明确添加。 | `eu-pef-recommendation-2021-2279` |
| boundary_losses_and_treatment | 生产损失 | 纳入每项已纳入作业产生的材料损失、返工、直接空气排放、废水和废物；单独链接场外处理。 | `jrc-textiles-bref-2023`、`pef-apparel-footwear-v3-1-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| pile_fabric_formation | 绒毛面料形成 | conditional | 当前景从纤维或纱线开始，并通过针织、机织或簇绒形成绒毛纺织品时纳入。 | 合成绒毛纺织品形成 | 1 kg 人造毛皮坯布 |
| dyeing_and_finishing | 染色和整理 | conditional | 实施湿法处理、染色、水洗、烘干、热定型、起绒、刷毛或相关整理时纳入。 | 着色和表面形成 | 1 kg 人造毛皮成品面料 |
| coating_and_lamination | 涂层和复合 | conditional | 施加并固化粘结剂、背涂层、胶粘剂、薄膜或复合层时纳入。 | 背衬稳定或复合 | 1 kg 带背衬人造毛皮面料 |
| cutting_and_assembly | 裁剪和组装 | conditional | 制造制成品，以及在前景内裁剪或缝制的任何面料产品时纳入。 | 制成品转化 | 1 kg 合格人造毛皮产品 |
| inspection_and_packaging | 检验和包装 | required | 每项放行产品均应纳入。 | 最终放行和包装 | 1 kg 参考产品 |

### 过程：绒毛面料形成（`pile_fabric_formation`）

#### 输入

##### 产品流

###### 腈纶绒毛纤维（`acrylic_pile_fibre`）

将用于形成绒毛的接收腈纶纤维记录为一项材料交换。

- 选定流：腈纶短纤维
- 流属性/单位：Mass / kg
- 数量规则：发往该过程的实测净质量，扣除有记录的退库量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pile_fabric_formation`
- 来源：`jrc-textiles-bref-2023`、`ziouzios-et-al-2026-artificial-fur-processing`

###### 聚酯绒毛纤维（`polyester_pile_fibre`）

将用于形成绒毛的接收聚酯纤维与腈纶纤维分开记录。

- 选定流：聚酯短纤维
- 流属性/单位：Mass / kg
- 数量规则：发往该过程的实测净质量，扣除有记录的退库量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pile_fabric_formation`
- 来源：`jrc-textiles-bref-2023`、`ziouzios-et-al-2026-artificial-fur-processing`

###### 聚酯背衬纱线（`polyester_backing_yarn`）

将跨入绒毛形成过程的背衬纱线记录为一项纱线交换。

- 选定流：聚酯长丝纱
- 流属性/单位：Mass / kg
- 数量规则：扣除可重复使用退料后的实测纱线净消耗量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pile_fabric_formation`
- 来源：`jrc-textiles-bref-2023`

###### 成形电力（`formation_electricity`）

记录针织、机织、簇绒、修剪和局部抽风设备使用的电力。

- 选定流：中压电
- 流属性/单位：Energy / kWh
- 数量规则：该过程的计量电力；仅按第 7 节分配剩余共用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pile_fabric_formation`
- 来源：`jrc-textiles-bref-2023`、`pef-apparel-footwear-v3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 人造毛皮坯布（`greige_artificial_fur_fabric`）

记录离开绒毛形成过程的验收合格人造毛皮坯布。

- 选定流：人造毛皮坯布
- 流属性/单位：Mass / kg
- 数量规则：过程门处实测的验收合格输出质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pile_fabric_formation`
- 来源：`jrc-textiles-bref-2023`、`ziouzios-et-al-2026-artificial-fur-processing`

##### 废物流

###### 废腈纶纤维（`waste_acrylic_fibre`）

记录送往废物管理的腈纶绒屑、边料和不合格腈纶绒毛纤维。

- 选定流：废腈纶纤维
- 流属性/单位：Mass / kg
- 数量规则：作为废腈纶纤维离开过程的实测质量；不计内部返工。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pile_fabric_formation`
- 来源：`jrc-textiles-bref-2023`、`pef-apparel-footwear-v3-1-2025`

###### 废聚酯纤维（`waste_polyester_fibre`）

记录送往废物管理的聚酯绒屑、边料和不合格聚酯绒毛纤维。

- 选定流：废聚酯纤维
- 流属性/单位：Mass / kg
- 数量规则：作为废聚酯纤维离开过程的实测质量；不计内部返工。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pile_fabric_formation`
- 来源：`jrc-textiles-bref-2023`、`pef-apparel-footwear-v3-1-2025`

##### 基本流

###### 排放到空气中的合成纤维粉尘（`synthetic_fibre_dust_to_air`）

记录治理后直接释放的合成纤维粉尘；捕集绒屑仍作为废物流记录。

- 选定流：排放到空气中的合成纤维粉尘
- 流属性/单位：Mass / kg
- 数量规则：治理后按污染物监测或计算的释放量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pile_fabric_formation`
- 来源：`jrc-textiles-bref-2023`
### 过程：染色和整理（`dyeing_and_finishing`）

实际使用的每种染料和助剂均应作为化学身份明确的独立产品流卡片加入前景数据包；以下两张染料卡仅在使用对应物质时适用。

#### 输入

##### 产品流

###### 人造毛皮坯布输入（`finishing_greige_artificial_fur_fabric`）

记录进入染色和整理的人造毛皮坯布。

- 选定流：人造毛皮坯布
- 流属性/单位：Mass / kg
- 数量规则：实测过程输入质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮成品面料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dyeing_and_finishing`
- 来源：`jrc-textiles-bref-2023`

###### 整理工艺用水（`finishing_process_water`）

将供给染色、水洗和其他湿法整理的水与蒸汽分开记录。

- 选定流：工艺用水
- 流属性/单位：Volume / m3
- 数量规则：经湿法整理区域核对的计量工艺用水取用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮成品面料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dyeing_and_finishing`
- 来源：`jrc-textiles-bref-2023`

###### 碱性染料（`basic_dye`）

当碱性染料用于腈纶着色时，将其记录为一项化学品交换。

- 选定流：碱性染料
- 流属性/单位：Mass / kg
- 数量规则：根据配方和批次记录确定实际投加的干活性染料质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮成品面料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dyeing_and_finishing`
- 来源：`jrc-textiles-bref-2023`

###### 分散染料（`disperse_dye`）

当分散染料用于聚酯着色时，将其记录为一项化学品交换。

- 选定流：分散染料
- 流属性/单位：Mass / kg
- 数量规则：根据配方和批次记录确定实际投加的干活性染料质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮成品面料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dyeing_and_finishing`
- 来源：`jrc-textiles-bref-2023`

###### 整理电力（`finishing_electricity`）

记录湿法处理、烘干、热定型、起绒、刷毛和抽风设备使用的电力。

- 选定流：中压电
- 流属性/单位：Energy / kWh
- 数量规则：计量的过程电力；仅按第 7 节分配剩余共用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮成品面料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dyeing_and_finishing`
- 来源：`jrc-textiles-bref-2023`、`pef-apparel-footwear-v3-1-2025`

###### 整理天然气（`finishing_natural_gas`）

将该过程现场燃烧的天然气与外购蒸汽分开记录。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：计量天然气，并按有记录的低位热值基准转换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮成品面料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dyeing_and_finishing`
- 来源：`jrc-textiles-bref-2023`

###### 整理外购蒸汽（`finishing_purchased_steam`）

将外购蒸汽记录为与燃料和电力不同的载能体。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量蒸汽量，并使用有记录的供汽焓值转换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮成品面料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dyeing_and_finishing`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 人造毛皮成品面料（`finished_artificial_fur_fabric`）

记录染色和整理后的验收合格面料。

- 选定流：人造毛皮成品面料
- 流属性/单位：Mass / kg
- 数量规则：调湿至申报含水状态后的实测合格输出质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮成品面料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dyeing_and_finishing`
- 来源：`jrc-textiles-bref-2023`、`ziouzios-et-al-2026-artificial-fur-processing`

##### 废物流

###### 纺织染色废水（`textile_dyeing_wastewater`）

记录转移至场内或场外废水处理的水相废物流。

- 选定流：纺织染色废水
- 流属性/单位：Volume / m3
- 数量规则：湿法整理边界处的计量排放体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮成品面料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dyeing_and_finishing`
- 来源：`jrc-textiles-bref-2023`

##### 基本流

###### 整理过程化石二氧化碳（`finishing_carbon_dioxide_fossil`）

记录现场天然气燃烧产生的直接化石二氧化碳。

- 选定流：排放到空气中的化石二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：烟道测量，或根据实测天然气用量和有记录的设施特定因子计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮成品面料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dyeing_and_finishing`
- 来源：`jrc-textiles-bref-2023`

###### 整理过程氮氧化物（`finishing_nitrogen_oxides`）

将现场燃烧产生的直接氮氧化物作为独立污染物记录。

- 选定流：排放到空气中的氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：烟道测量，或根据实测天然气用量和有记录的设施特定因子计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮成品面料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dyeing_and_finishing`
- 来源：`jrc-textiles-bref-2023`

###### 整理过程非甲烷挥发性有机化合物（`finishing_nmvoc`）

记录烘干、固化或整理产生的直接非甲烷挥发性有机化合物排放。

- 选定流：排放到空气中的非甲烷挥发性有机化合物
- 流属性/单位：Mass / kg
- 数量规则：治理后按污染物监测或计算的释放量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 人造毛皮成品面料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dyeing_and_finishing`
- 来源：`jrc-textiles-bref-2023`

### 过程：涂层和复合（`coating_and_lamination`）

实际使用的每种粘结剂、涂层组分、溶剂和胶粘剂均应分别加入；下列材料卡仅适用于已识别的对应路线。

#### 输入

##### 产品流

###### 成品面料输入（`coating_finished_artificial_fur_fabric`）

记录进入背涂或复合的人造毛皮成品面料。

- 选定流：人造毛皮成品面料
- 流属性/单位：Mass / kg
- 数量规则：实测过程输入质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 带背衬人造毛皮面料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_and_lamination`
- 来源：`jrc-textiles-bref-2023`

###### 水性丁苯胶乳（`aqueous_styrene_butadiene_latex`）

使用水性丁苯胶乳时，将其记录为一项粘结剂交换。

- 选定流：水性丁苯胶乳
- 流属性/单位：Mass / kg
- 数量规则：根据批次和采购记录确定实际投加的湿产品质量，并披露固含量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 带背衬人造毛皮面料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_and_lamination`
- 来源：`jrc-textiles-bref-2023`、`ziouzios-et-al-2026-artificial-fur-processing`

###### 聚氨酯胶粘剂（`polyurethane_adhesive`）

使用聚氨酯胶粘剂进行复合时，将其记录为一项材料交换。

- 选定流：聚氨酯胶粘剂
- 流属性/单位：Mass / kg
- 数量规则：根据批次和采购记录确定实际投加的湿产品质量，并披露固含量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 带背衬人造毛皮面料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_and_lamination`
- 来源：`jrc-textiles-bref-2023`

###### 涂层电力（`coating_electricity`）

记录涂层线、复合机、通风和固化用电。

- 选定流：中压电
- 流属性/单位：Energy / kWh
- 数量规则：计量的过程电力；仅按第 7 节分配剩余共用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 带背衬人造毛皮面料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_and_lamination`
- 来源：`jrc-textiles-bref-2023`、`pef-apparel-footwear-v3-1-2025`

###### 涂层天然气（`coating_natural_gas`）

记录现场为该过程烘干或固化而燃烧的天然气。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：计量天然气，并按有记录的低位热值基准转换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 带背衬人造毛皮面料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_and_lamination`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 带背衬人造毛皮面料（`backed_artificial_fur_fabric`）

记录验收合格的涂层或复合人造毛皮面料。

- 选定流：带背衬人造毛皮面料
- 流属性/单位：Mass / kg
- 数量规则：固化和调湿后的实测合格输出质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 带背衬人造毛皮面料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_and_lamination`
- 来源：`jrc-textiles-bref-2023`、`ziouzios-et-al-2026-artificial-fur-processing`

##### 废物流

###### 废丁苯胶乳（`waste_styrene_butadiene_latex`）

记录送往废物管理的未使用或不合格丁苯胶乳。

- 选定流：废丁苯胶乳
- 流属性/单位：Mass / kg
- 数量规则：实测废弃湿质量；不计返回同一过程的回收材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 带背衬人造毛皮面料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_and_lamination`
- 来源：`jrc-textiles-bref-2023`

###### 废聚氨酯胶粘剂（`waste_polyurethane_adhesive`）

记录送往废物管理的未使用或不合格聚氨酯胶粘剂。

- 选定流：废聚氨酯胶粘剂
- 流属性/单位：Mass / kg
- 数量规则：实测废弃湿质量；不计返回同一过程的回收材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 带背衬人造毛皮面料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_and_lamination`
- 来源：`jrc-textiles-bref-2023`

##### 基本流

###### 涂层过程化石二氧化碳（`coating_carbon_dioxide_fossil`）

记录涂层线燃烧产生的直接化石二氧化碳。

- 选定流：排放到空气中的化石二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：烟道测量，或根据实测天然气用量和有记录的设施特定因子计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 带背衬人造毛皮面料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_coating_and_lamination`
- 来源：`jrc-textiles-bref-2023`

###### 涂层过程氮氧化物（`coating_nitrogen_oxides`）

将涂层线燃烧产生的直接氮氧化物单独记录。

- 选定流：排放到空气中的氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：烟道测量，或根据实测天然气用量和有记录的设施特定因子计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 带背衬人造毛皮面料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_coating_and_lamination`
- 来源：`jrc-textiles-bref-2023`

###### 涂层过程非甲烷挥发性有机化合物（`coating_nmvoc`）

记录涂层、复合、烘干和固化产生的直接非甲烷挥发性有机化合物排放。

- 选定流：排放到空气中的非甲烷挥发性有机化合物
- 流属性/单位：Mass / kg
- 数量规则：治理后按污染物监测或计算的释放量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 带背衬人造毛皮面料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_coating_and_lamination`
- 来源：`jrc-textiles-bref-2023`

### 过程：裁剪和组装（`cutting_and_assembly`）

只记录实际消耗的面料结构；除非无背衬面料和带背衬面料都实际进入制成品，否则不得同时报告二者。

#### 输入

##### 产品流

###### 组装用无背衬面料（`assembly_finished_artificial_fur_fabric`）

记录裁剪实际消耗的无背衬人造毛皮成品面料。

- 选定流：人造毛皮成品面料
- 流属性/单位：Mass / kg
- 数量规则：发料实测质量减去返回库存的可重复使用面料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 合格人造毛皮产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_and_assembly`
- 来源：`pef-apparel-footwear-v3-1-2025`、`ziouzios-et-al-2026-artificial-fur-processing`

###### 组装用带背衬面料（`assembly_backed_artificial_fur_fabric`）

将裁剪实际消耗的带背衬人造毛皮面料与无背衬面料分开记录。

- 选定流：带背衬人造毛皮面料
- 流属性/单位：Mass / kg
- 数量规则：发料实测质量减去返回库存的可重复使用面料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 合格人造毛皮产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_and_assembly`
- 来源：`pef-apparel-footwear-v3-1-2025`、`ziouzios-et-al-2026-artificial-fur-processing`

###### 聚酯缝纫线（`polyester_sewing_thread`）

将组装使用的聚酯缝纫线记录为一项材料交换。

- 选定流：聚酯缝纫线
- 流属性/单位：Mass / kg
- 数量规则：发放的实测缝纫线质量减去有记录的退料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 合格人造毛皮产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_and_assembly`
- 来源：`pef-apparel-footwear-v3-1-2025`

###### 聚酯里料（`polyester_lining_fabric`）

当聚酯里料实际并入制成品时记录该材料。

- 选定流：聚酯里料
- 流属性/单位：Mass / kg
- 数量规则：发放的实测里料质量减去可重复使用的退料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 合格人造毛皮产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_and_assembly`
- 来源：`pef-apparel-footwear-v3-1-2025`

###### 组装电力（`assembly_electricity`）

记录裁剪、缝制、局部抽风和组装用电。

- 选定流：中压电
- 流属性/单位：Energy / kWh
- 数量规则：计量的过程电力；仅按第 7 节分配剩余共用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 合格人造毛皮产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_and_assembly`
- 来源：`pef-apparel-footwear-v3-1-2025`、`ziouzios-et-al-2026-artificial-fur-processing`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已组装人造毛皮产品（`assembled_artificial_fur_product`）

记录最终包装前的合格组装输出。

- 选定流：人造毛皮及其制品（不包括帽类） `ac47239d-883f-4063-bcc1-fc64b2ffc8fc`
- 流属性/单位：Mass（`93a60a56-a3c8-11da-a746-0800200b9a66`）/ kg
- 数量规则：销售包装前实测的合格输出质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 合格人造毛皮产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_and_assembly`
- 来源：`unsd-cpc-3-0-2025`、`pef-apparel-footwear-v3-1-2025`

##### 废物流

###### 人造毛皮裁剪边角料（`artificial_fur_cutting_offcuts`）

将复合裁剪边角料按实际管理的废物流记录，并披露其组成。

- 选定流：人造毛皮裁剪边角料
- 流属性/单位：Mass / kg
- 数量规则：离开过程的实测边角料质量；不计返回生产的可重复使用裁片。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 合格人造毛皮产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_and_assembly`
- 来源：`pef-apparel-footwear-v3-1-2025`

###### 废聚酯缝纫线（`waste_polyester_thread`）

将不合格或修剪下来的聚酯缝纫线与面料边角料分开记录。

- 选定流：废聚酯缝纫线
- 流属性/单位：Mass / kg
- 数量规则：离开过程的实测缝纫线废物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 合格人造毛皮产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_and_assembly`
- 来源：`pef-apparel-footwear-v3-1-2025`

##### 基本流

### 过程：检验和包装（`inspection_and_packaging`）

#### 输入

##### 产品流

###### 未包装人造毛皮产品（`unpacked_artificial_fur_product`）

记录进入最终放行和包装的合格或已检验产品。

- 选定流：人造毛皮及其制品（不包括帽类） `ac47239d-883f-4063-bcc1-fc64b2ffc8fc`
- 流属性/单位：Mass（`93a60a56-a3c8-11da-a746-0800200b9a66`）/ kg
- 数量规则：进入该过程的实测产品净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inspection_and_packaging`
- 来源：`unsd-cpc-3-0-2025`、`pef-apparel-footwear-v3-1-2025`

###### 低密度聚乙烯包装袋（`low_density_polyethylene_packaging_bag`）

将低密度聚乙烯袋记录为一项包装组件。

- 选定流：低密度聚乙烯包装袋
- 流属性/单位：Mass / kg
- 数量规则：并入交付包装的实测或经采购核对的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inspection_and_packaging`
- 来源：`pef-apparel-footwear-v3-1-2025`

###### 瓦楞纸箱（`corrugated_cardboard_box`）

将瓦楞纸箱与塑料和纸标签分开记录。

- 选定流：瓦楞纸箱
- 流属性/单位：Mass / kg
- 数量规则：并入交付包装的实测或经采购核对的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inspection_and_packaging`
- 来源：`pef-apparel-footwear-v3-1-2025`

###### 纸质产品标签（`paper_product_label`）

将纸质标签记录为一项包装组件。

- 选定流：纸质产品标签
- 流属性/单位：Mass / kg
- 数量规则：并入交付包装的实测或经采购核对的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inspection_and_packaging`
- 来源：`pef-apparel-footwear-v3-1-2025`

###### 包装电力（`packaging_electricity`）

记录检验、输送、封装和包装用电。

- 选定流：中压电
- 流属性/单位：Energy / kWh
- 数量规则：计量的过程电力；仅按第 7 节分配剩余共用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inspection_and_packaging`
- 来源：`pef-apparel-footwear-v3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考产品（`reference_product`）

记录一千克已放行产品净质量；包装质量作为输入，不计入参考数量。

- 选定流：人造毛皮及其制品（不包括帽类） `ac47239d-883f-4063-bcc1-fc64b2ffc8fc`
- 流属性/单位：Mass（`93a60a56-a3c8-11da-a746-0800200b9a66`）/ kg
- 数量规则：年度归一化后，每个参考流恰为 1 kg 合格产品净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inspection_and_packaging`
- 来源：`unsd-cpc-3-0-2025`、`pef-apparel-footwear-v3-1-2025`

##### 废物流

###### 不合格人造毛皮产品（`rejected_artificial_fur_product`）

记录经检验不合格并送往废物管理的产品；返工产品不属于废物。

- 选定流：不合格人造毛皮产品
- 流属性/单位：Mass / kg
- 数量规则：未返回生产的不合格产品实测净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inspection_and_packaging`
- 来源：`pef-apparel-footwear-v3-1-2025`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| avoid_allocation | 所有前景过程 | 首先细分计量过程和材料记录，或在有依据时扩展系统，以避免分配。 | `eu-pef-recommendation-2021-2279` |
| physical_allocation | 剩余共用输入和排放 | 无法细分时，采用能反映资源使用或排放变化方式且有记录的物理关系，视情况使用过程时间、计量吞吐量或产品干质量。 | `eu-pef-recommendation-2021-2279`、`pef-apparel-footwear-v3-1-2025` |
| economic_allocation_last_resort | 缺乏合理物理关系的输出 | 仅当细分、系统扩展和物理分配均不可行时使用经济分配；披露价格、期间、币种和敏感性。 | `eu-pef-recommendation-2021-2279` |
| waste_and_rework | 边角料、不合格品和回收材料 | 将内部返工保留在过程平衡内，不作为共产品；将离开系统并送往回收或处理的材料报告为废物流，并在本前景数据包之外记录任何计入的下游处理。 | `eu-pef-recommendation-2021-2279`、`pef-apparel-footwear-v3-1-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_pile_fabric_formation | pile_fabric_formation | 所有原子交换 | 批次生产、库房、仪表、废物和排放记录 | 输入质量；电力；合格输出；纤维废物；粉尘；返工 | 核对批次单、校准秤、分表读数、废物转移记录以及粉尘监测或过滤器平衡。 | kg；kWh | 每批次并按月核对 | 一个有代表性的连续 12 个月，或披露较短生产期 | 每个人造毛皮形成前景场址 | 按场址及材料或污染物身份求和，再按合格坯布质量归一化。 | 批次单、秤校准记录、仪表记录、废物票据、监测报告 |
| cp_dyeing_and_finishing | dyeing_and_finishing | 所有原子交换 | 配方、批次、水、公共设施、输出、废水和烟道记录 | 坯布质量；每种染料和助剂；水；电力；天然气；蒸汽；成品质量；废水；每种污染物 | 将配方和投料记录与采购数据、公共设施仪表、产品秤、废水表以及污染物特定监测或计算进行核对。 | kg；m3；kWh；MJ | 每批次并按月核对 | 一个有代表性的连续 12 个月，或披露较短生产期 | 每个前景整理场址 | 按场址分别汇总每项原子流，再按合格成品面料质量归一化。 | 配方单、投料校准、仪表、账单、秤记录、排水和烟道报告 |
| cp_coating_and_lamination | coating_and_lamination | 所有原子交换 | 配方、批次、公共设施、输出、废物和烟道记录 | 面料质量；每种粘结剂或胶粘剂；固含量；电力；天然气；带背衬面料质量；每项化学废物；每种污染物 | 将生产线配方和采购记录与校准投料、公共设施仪表、输出秤、废物票据以及污染物特定监测或计算进行核对。 | kg；kWh；MJ | 每批次并按月核对 | 一个有代表性的连续 12 个月，或披露较短生产期 | 每个前景涂层或复合场址 | 按场址分别汇总每项原子流，再按合格带背衬面料质量归一化。 | 配方单、安全和供应商数据、投料校准、仪表、秤记录、废物和烟道报告 |
| cp_cutting_and_assembly | cutting_and_assembly | 所有原子交换 | 物料清单、发料、裁剪、缝制、仪表、输出和废物记录 | 每种面料质量；缝纫线；里料；电力；产品质量；边角料；废缝纫线；返工 | 将物料清单与材料发放和退料、校准的输出和废物秤以及电力分表进行核对。 | kg；kWh | 每个生产订单并按月核对 | 一个有代表性的连续 12 个月，或披露较短生产期 | 每个前景组装场址 | 按场址和产品形态分别汇总每项原子流，再按合格产品质量归一化。 | BOM、发料和退料单、裁剪报告、秤校准记录、仪表记录 |
| cp_inspection_and_packaging | inspection_and_packaging | 所有原子交换 | 检验、包装发料、仪表、放行输出和不合格品记录 | 未包装产品；每项包装组件；电力；放行产品净质量；不合格产品 | 将检验和放行数量与产品净质量、包装发料和退料、仪表数据及不合格品记录进行核对。 | kg；kWh | 每个生产订单并按月核对 | 一个有代表性的连续 12 个月，或披露较短生产期 | 每个前景最终放行场址 | 按场址分别汇总每项原子流，再按不含包装的放行产品净质量归一化。 | 检验记录、BOM、发料和退料单、秤校准记录、仪表记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize_reference_mass | 每项清单交换 | `归一化交换量 = 报告期交换量 / 报告期合格产品净质量` | 原子交换数量；合格输出质量（kg） | 每 1 kg 参考产品的交换量 | `eu-pef-recommendation-2021-2279`、`pef-apparel-footwear-v3-1-2025` |
| calc_material_balance | 每项材料加工步骤 | 按各材料身份核对：输入 = 并入合格产品的质量 + 实测废物 + 实测直接排放 + 有记录的库存变化；调查并披露残差。 | 材料发放和退料；输出组成；废物；直接排放；期初和期末库存 | 各材料的物料平衡和残差 | `jrc-textiles-bref-2023`、`pef-apparel-footwear-v3-1-2025` |
| calc_process_loss | 成形、整理、涂层和组装 | `损失比例 = 实测且未返工的材料废物 / 材料净输入`；每种材料或实际复合废物流保持分开。 | 材料净输入；实测废物；内部返工 | 过程损失比例和废物质量 | `pef-apparel-footwear-v3-1-2025` |
| calc_direct_combustion_emissions | 现场天然气燃烧 | 优先采用污染物特定监测；否则针对每种污染物计算 `排放 = 实测燃料能量 × 有记录的设施特定排放因子`。 | 燃料能量；污染物特定因子，或实测浓度和烟气流量 | 每种污染物对应一项直接基本流 | `jrc-textiles-bref-2023` |
| calc_shared_utility_allocation | 共用电力、蒸汽和燃料 | 优先使用直接分表；否则应用第 7 节选定的物理分配，并记录驱动因子和分母。 | 共用公共设施总量；过程特定物理驱动因子 | 分配给一个过程的公共设施数量 | `eu-pef-recommendation-2021-2279`、`pef-apparel-footwear-v3-1-2025` |
| calc_bom_coverage | 最终产品组成 | 将物料清单与产品净质量核对；报告的 BOM 应覆盖至少 95% 的产品质量，并 100% 覆盖存在的主面料、里料、填充物和金属组件。 | 组件质量；产品净质量 | BOM 覆盖率和披露的遗漏 | `pef-apparel-footwear-v3-1-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_technology | 每项纳入过程 | 前景记录应代表实际使用的绒毛技术、纤维组成、整理路线、涂层或复合体系、组装方法和治理措施。 | 工艺图、设备清单、配方、BOM、产品规格 |
| dq_geography | 场址和上游数据集 | 识别每个前景场址，并使用在地域上有代表性的电力、燃料、水、处理和外购材料数据集。 | 场址地址、供应商地域、数据集元数据 |
| dq_time | 前景数据 | 尽可能采用有代表性的连续十二个月；披露生产期数据、停机、替代及任何外推。 | 带日期的仪表、批次、采购、生产和废物记录 |
| dq_precision | 实测和计算交换 | 保留原始数量、校准状态、计算因子、分配驱动因子和核对残差，以便复现结果。 | 校准证书、原始数据导出、计算工作簿、审查日志 |
| dq_completeness | 材料和排放 | 满足 BOM 覆盖规则，并分别记录所有已知工艺化学品、载能体、直接污染物、废水和受管理废物流；不得使用通用“其他”卡片。 | BOM 核对、配方台账、公共设施台账、许可证、废物登记册 |
| dq_consistency | 多场址或多路线数据集 | 对每个纳入的场址和路线使用相同参考质量、干/净质量约定、流身份、分配层级和报告期。 | 汇总程序和场址级检查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference_identity | 参考流 | 确认 Tiangong UUID `ac47239d-883f-4063-bcc1-fc64b2ffc8fc`、Product flow 类型、CPC 3.0 `28330`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg 单位。 | `unsd-cpc-3-0-2025` |
| validate_scope_and_route | 数据集范围 | 拒绝天然毛皮、帽类、未申报产品形态，或无法确定纳入工艺步骤和起始条件的数据集。 | `unsd-cpc-3-0-2025`、`ziouzios-et-al-2026-artificial-fur-processing` |
| validate_atomic_inventory | 过程清单 | 确认每张卡片只含一种材料、载能体、废物流或污染物；要求实际使用的每种染料、助剂、粘结剂、胶粘剂、包装组件、燃料和排放分别记录。 | `jrc-textiles-bref-2023`、`pef-apparel-footwear-v3-1-2025` |
| validate_mass_balance | 材料过程 | 按材料身份重新执行物料平衡，调查无法解释的残差、遗漏边角料、废水转移、库存变化和返工。 | `jrc-textiles-bref-2023`、`pef-apparel-footwear-v3-1-2025` |
| validate_energy_and_emissions | 公共设施和直接排放 | 将电力、蒸汽和天然气分别与仪表或账单核对，并验证每种直接污染物均有监测或有记录的计算基准。 | `jrc-textiles-bref-2023` |
| validate_recursive_inputs | 外购人造毛皮 | 确认同类别外购面料仅作为一个上游产品数据集链接一次，且未重复计为前景纤维或面料制造。 | `unsd-cpc-3-0-2025`、`eu-pef-recommendation-2021-2279` |
| validate_allocation | 共用过程和输出 | 验证分配层级、驱动因子、分母、期间和敏感性；使用无依据分配的数据集应判为不合格。 | `eu-pef-recommendation-2021-2279` |
| validate_data_quality | 数据集证据 | 验证技术、地域、时间、精度、完整性和一致性证据，包括 BOM 和配方核对。 | `eu-pef-recommendation-2021-2279`、`pef-apparel-footwear-v3-1-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂端人造毛皮成品或除帽类外的人造毛皮制成品前景数据包，按 1 kg 产品净质量归一化 |
| downstream_use | `secondary_dataset`；`background_dataset` |
| allowed_use | 当申报的产品形态和路线匹配时，用于产品和设施清单、生命周期模型、热点评估、供应商数据交换和内部设计评估 |
| excluded_use | 天然毛皮、帽类、CPC 28330 范围外产品、功能未协调的比较声明，以及未经披露调整的路线替代 |
| required_metadata | CPC 代码；参考流 UUID；产品形态；纤维组成；绒毛技术；背衬/涂层状态；染色和整理路线；纳入过程；场址/地域；报告期；分配；生产混合；工厂端状态 |
| required_quality_disclosure | 数据来源、仪表和秤覆盖、BOM 覆盖、配方完整性、分配驱动因子、上游数据集替代、平衡残差和缺失的污染物测量 |
| update_trigger | 纤维组成、绒毛技术、染料或整理、涂层或复合、场址、能源系统、分配、产品形态、供应商数据集或代表性报告期发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | 官方指南（`official_guidance`） | 联合国统计司：《产品总分类（CPC）3.0 版：解释性说明》，2025 年。[官方 PDF](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | CPC 28330 的精确身份、覆盖产品措辞和帽类排除项 |
| `jrc-textiles-bref-2023` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心：《纺织工业最佳可行技术（BAT）参考文件》，2023 年。[官方发布页](https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry) | 纺织形成、整理、涂层和复合作业；公共设施、废水、废物和直接排放采集 |
| `pef-apparel-footwear-v3-1-2025` | 官方指南（`official_guidance`） | 服装与鞋类 PEFCR 技术秘书处：《产品环境足迹类别规则：服装与鞋类，3.1 版》，2025 年 4 月 29 日。[官方发布页](https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/) | 生命周期阶段过程图、BOM 和制造数据、损失、能源结构、报告期和数据质量要求 |
| `eu-pef-recommendation-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会：《关于使用环境足迹方法的欧盟委员会建议（EU）2021/2279》，2021 年。[ELI 记录](http://data.europa.eu/eli/reco/2021/2279/oj) | 边界一致性、上游链接、分配层级和校验基础 |
| `ziouzios-et-al-2026-artificial-fur-processing` | 文献（`literature`） | Ziouzios, D.; Tsepoura, G.; Vasileiadis, V. “Artificial Fur Processing and Sustainability: A Conceptual Framework for Environmental Impact Assessment.” *Applied Sciences* 16 (2026): 4920。[DOI](https://doi.org/10.3390/app16104920) | 仅用于人造毛皮特定路线分解；未将任何案例数值用作范围 |
