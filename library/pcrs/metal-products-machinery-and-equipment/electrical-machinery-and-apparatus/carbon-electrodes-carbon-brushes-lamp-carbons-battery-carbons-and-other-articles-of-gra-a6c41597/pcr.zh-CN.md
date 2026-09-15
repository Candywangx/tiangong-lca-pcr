---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.carbon-electrodes-carbon-brushes-lamp-carbons-battery-carbons-and-other-articles-of-gra-a6c41597
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 碳电极、碳刷、灯用碳制品、电池用碳制品及其他电气用途的石墨或其他碳制品

## 1. 范围与适用性

本 PCR 适用于具有明确导电、传递电流、电解、弧光灯运行或电池集流功能的石墨或其他碳质成品的前景数据包。涵盖的产品包括工厂门口状态的碳电极和石墨电极、电气用碳刷、灯用碳制品、电池用碳制品，以及类似的成型电气用碳制品。

本 PCR 不包括作为电池活性材料销售的石墨粉或碳粉、完整的原电池和蓄电池、非电气用途的石墨或碳制品、碳纤维制品，以及尚未具有最终电气功能的上游焦炭、沥青、石墨或炭黑产品。默认边界不包括使用阶段消耗、下游安装、配送及生命末期。产品包装不属于参考产品；研究目标需要时，应另行建模。

本类别包含实质不同的配方和热处理路线。合规数据包必须声明一种实际产品族和一条实际生产路线；不得仅因产品同属 CPC 46950 而将碳电极、碳刷、灯用碳制品和电池用碳制品平均合并。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.carbon-electrodes-carbon-brushes-lamp-carbons-battery-carbons-and-other-articles-of-gra-a6c41597 |
| classification_refs | CPC 3.0：46950，精确分类语境；分类坐标不能替代语义产品边界 |
| covered_products | 碳电极或石墨电极成品；电气用碳刷；灯用碳制品；以成型电气制品状态供应的电池用碳制品；其他电气用途的石墨或碳制成品 |
| excluded_products | 作为电池活性材料销售的石墨粉或碳粉；完整电池、蓄电池或电气机械；非电气用途的碳制品；上游焦炭、沥青、石墨和炭黑；使用、安装、配送、生命末期及包装，除非研究另行扩展 |
| representative_product | 所覆盖产品族中一种符合销售规格的电气用碳制成品 |
| production_route | 按产品配方进行混配和成型，随后热固结；适用时进行沥青浸渍和再焙烧、石墨化、机械加工，并装配随产品供应的连接件 |
| market_state | 经质量放行、未包装的工厂门口成品；声明产品族、牌号、尺寸、密度、电气性能、金属含量以及表面和连接状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一种完成所声明导电、接触、电解、弧光灯运行或电池集流功能的石墨或其他碳质成品 |
| How much | 1 kg 经质量放行的成品净质量，不含单独包装 |
| How well | 符合所声明产品族关于牌号、尺寸、表观密度、电阻率或电导率、机械完整性、金属含量以及连接或表面状态的规格 |
| How long or cycle | 一个工厂门口生产批次；不隐含相同使用寿命或工作循环，比较性使用声明必须另行定义性能和寿命等效的功能单位 |
| reference_flow_link | `machining_and_assembly` 的 `reference_product` 输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品净质量 |
| 参考产品流 | 电气用碳制成品（UUID 未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品族；碳或石墨牌号；天然/人造石墨及焦炭原料类别；粘结剂体系；金属种类和质量分数；石墨化或非石墨化路线；浸渍次数；名义尺寸；成品净质量；表观密度；所声明电气性能及试验方法；连接和表面状态；再生碳含量；生产场址和地域；参考年份；包装排除情况 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有碳质物料转移 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 干基或收货基质量必须前后一致；当水分或挥发分影响配方或质量平衡时应予声明。1 kg 参考产品不含可拆卸包装、托盘和运输固定件。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 有分表时按工序保留计量电力；采用精确换算 1 kWh = 3.6 MJ，并披露电网地域、电压、损耗及现场发电是否单独建模。 |
| `gas_volume_conditions` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按所声明温度和压力报告计量体积，并保留供应商组成或热值记录。不得使用笼统能源载体，也不得静默混用参考状态。 |
| `water_mass_conversion` | 工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 若按体积计量用水，应采用计量条件下实测或有文件依据的密度进行换算，并保留体积、密度、温度和换算记录。 |
| `wastewater_volume` | 废水 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 在排放或移交处理点报告体积，并披露组成、悬浮碳、处理状态和去向。没有实测水平衡时，不得把废水体积等同于工艺用水投入。 |

## 5. 系统边界

默认研究边界为从摇篮到工厂门口。前景采集始于外购碳质原料、粘结剂、金属、水和能源跨越生产场址边界，终于所声明成品经质量放行。每项外购投入的上游生产和运输采用相容的上游数据集表示。前景包括混配、成型、必需热固结、条件性浸渍/再焙烧、条件性石墨化、机械加工、连接件装配、内部回用、直接排放和废物。除非在参考流之外明确扩展，不包括包装、配送、使用、安装和生命末期。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | 产品系统和外购投入 | 纳入每项外购原料、粘结剂、金属、水、燃料和电力的上游生产及进厂运输；纳入直至未包装产品质量放行的全部前景制造工序。 | `eu-2021-environmental-footprint-method`; `usitc-small-diameter-graphite-electrodes-2009` |
| `boundary_route_declaration` | 产品族和技术变体 | 声明实际产品族、配方、热处理路线、浸渍次数、石墨化技术、机械加工和连接件。只在实际实施时纳入条件性工序；不得在未声明适用性的情况下把缺失工序静默记为零。 | `mersen-carbon-brush-technical-guide`; `resonac-graphite-electrode-process` |
| `boundary_direct_emissions` | 前景燃烧和碳化 | 在物理边界记录现场直接排放和废物。化石源二氧化碳行仅涵盖前景直接排放；电力和燃料供应的上游排放保留在上游数据集中，不得重复。 | `eu-2021-environmental-footprint-method` |
| `boundary_packaging_exclusion` | 参考产品和下游扩展 | 从 1 kg 参考产品中排除可拆卸销售和运输包装。研究目标需要包装时，应在本 PCR 参考产品之外把每个包装组件写成独立原子流，并披露边界扩展。 | `usitc-small-diameter-graphite-electrodes-2009` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 生产场址门口的外购碳质原料、粘结剂、金属添加物或连接件、工艺用水和交付能源；声明供应商产品状态和上游覆盖范围 |
| starting_condition_role | 电气用碳制成品的前景制造投入边界 |
| product_classification_scope | CPC 3.0 代码 46950 所代表语义边界内的电气用途石墨或其他碳制成品 |
| recursive_input_rule | 已属于本成品类别的外购制品只有在物理进入前景产品时才作为独立投入记录；不得递归套用本 PCR。应链接相容上游数据集并披露外购制品、质量、牌号和供应商门口边界。场址内部的生坯、热处理品、再焙烧品和石墨化品是内部转移，不附加上游负荷。 |
| upstream_dataset_requirement | 每项外购投入使用在地域、技术、产品状态和参考年份上相容的上游数据集。可得时保留供应商特定数据；若流属性或单位组不能通过有文件依据的换算协调，则拒绝该数据集。 |
| disclosure | 声明产品族、牌号、配方、金属含量、再生含量、所有已纳入和未实施的条件性工序、炉型和石墨化技术、能源供应、场址地域、数据期、分配、内部回用、直接排放方法、废水处理状态、连接件范围及包装排除。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_preparation_and_forming` | 物料制备与成型 | `required` | 所声明电气用碳制成品始终纳入；各配方投入仅在实际使用时适用 | 前景配料、破碎/分级、混合、压制或挤出 | 面向 1 kg 成品转移的生坯净质量 |
| `thermal_consolidation` | 热固结或树脂固化 | `required` | 纳入实际采用的焙烧、碳化、烧结或树脂聚合路线，使制品形成机械完整性 | 前景热处理 | 面向 1 kg 成品转移的热处理品净质量 |
| `pitch_impregnation_and_rebaking` | 沥青浸渍与再焙烧 | `conditional` | 热处理品采用沥青浸渍并进行一次或多次再焙烧时纳入 | 前景致密化 | 每 1 kg 成品的再焙烧品净质量 |
| `graphitization` | 石墨化 | `conditional` | 所声明产品在热处理或再焙烧后进行石墨化时纳入 | 前景高温转化 | 每 1 kg 成品的石墨化品净质量 |
| `machining_and_assembly` | 机械加工、质量放行与连接件装配 | `required` | 纳入实际精加工；仅当铜线随成品供应时才纳入铜线 | 前景精加工和产品放行 | 1 kg 经质量放行的成品净质量 |

### 过程：物料制备与成型（`material_preparation_and_forming`）

#### 输入

##### 产品流

###### 针状焦骨料（`needle_coke_input`）

仅在实际配方使用时记录外购针状焦；保留牌号、煅烧状态、粒度规格、供应商、水分和挥发分。

- 选定流：针状焦（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量进入合格生产批次的干基或收货基质量，扣除有记录的返回物料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_material_mass`
- 来源：`resonac-graphite-electrode-process`; `usitc-small-diameter-graphite-electrodes-2009`

###### 天然石墨原料（`natural_graphite_input`）

仅对实际使用天然石墨的牌号记录外购天然石墨粉；不得用石墨矿石替代经选矿或达到牌号要求的粉体。

- 选定流：天然石墨粉（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按所声明水分基准计量进入合格生产批次的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_material_mass`
- 来源：`mersen-carbon-brush-technical-guide`

###### 人造石墨原料（`artificial_graphite_input`）

对使用外购石墨化材料的碳刷、灯用碳制品、电池用碳制品或其他配方记录外购人造石墨。

- 选定流：石墨 `46bbb7c0-ba7d-4cb6-a1cd-00ff0b7c4baa`
- 流属性/单位：Mass / kg
- 数量规则：按所声明牌号和纯度计量进入合格生产批次的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_material_mass`
- 来源：`mersen-carbon-brush-technical-guide`

###### 炭黑原料（`carbon_black_input`）

仅在炭黑作为独立外购配方投入时记录，并声明牌号和颗粒特性。

- 选定流：炭黑 `dee14a4f-c02b-4bf5-affc-9e66b1d9a8ce`
- 流属性/单位：Mass / kg
- 数量规则：计量进入合格生产批次的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_material_mass`
- 来源：`mersen-carbon-brush-technical-guide`

###### 煤焦油沥青粘结剂（`coal_tar_pitch_binder`）

将配方粘结剂用煤焦油沥青与浸渍沥青分开记录；保留软化点、供应商规格和收货质量。

- 选定流：煤焦油沥青（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量加入合格生料批次的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_material_mass`
- 来源：`resonac-graphite-electrode-process`; `usitc-small-diameter-graphite-electrodes-2009`

###### 酚醛树脂粘结剂（`phenolic_resin_binder`）

仅对树脂粘结牌号记录热固性酚醛树脂；保留配方、固含量、催化或固化体系以及供应商牌号。

- 选定流：酚醛树脂 `9f10798f-ffb5-402d-b805-27d2db4e2caf`
- 流属性/单位：Mass / kg
- 数量规则：计量加入合格生产批次的收货树脂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_material_mass`
- 来源：`mersen-carbon-brush-technical-guide`

###### 铜粉添加物（`copper_powder_input`）

仅对实际使用金属铜粉的金属-石墨配方记录；不得以铜渣、铜盐、铜线或其他产品形态替代。

- 选定流：铜粉（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量加入合格金属-石墨生产批次的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_material_mass`
- 来源：`mersen-carbon-brush-technical-guide`

###### 成型工序电力（`electricity_forming`）

记录粉碎、筛分、混合、输送、压制、挤出、通风及可直接归属除尘所用的外购电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：工序分表计量，或依据设备运行时间从场址总表作可审计分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：

###### 成型工序用水（`process_water_forming`）

仅当工艺用水用于本工序的混合、成型、冷却或直接除尘并跨越边界时记录；闭路循环冷却水只记录净补水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量可归属于合格生产批次的净补水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成型电气用碳生坯（`formed_green_article`）

记录转入热固结的合格成型生坯净质量；该内部中间体不附加额外上游数据集。

- 选定流：成型电气用碳生坯（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量成型后、热固结前转移的合格净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_intermediate_mass`
- 来源：`resonac-graphite-electrode-process`; `mersen-carbon-brush-technical-guide`

##### 废物流

###### 成型碳质粉尘（`forming_carbon_dust`）

记录离开成型过程的收集碳质粉尘；场内返回物料属于内部转移，不作为废物输出。

- 选定流：成型碳质粉尘（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量送往外部处理或处置的粉尘质量，扣除有记录的内部回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbon_waste_mass`
- 来源：

###### 成型碳质边角料（`forming_carbon_offcuts`）

记录离开过程的离散碳质筛分不合格料和成型边角料；不得与收集粉尘合并计量。

- 选定流：成型碳质边角料（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量送往外部处理或处置的边角料质量，扣除有记录的内部回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbon_waste_mass`
- 来源：

##### 基本流

### 过程：热固结或树脂固化（`thermal_consolidation`）

#### 输入

##### 产品流

###### 转入热固结的生坯（`green_article_to_thermal`）

记录进入所声明焙烧、碳化、烧结或聚合周期的场址内部成型制品。

- 选定流：成型电气用碳生坯（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量装入热处理周期的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_intermediate_mass`
- 来源：`resonac-graphite-electrode-process`; `mersen-carbon-brush-technical-guide`

###### 热固结用天然气（`natural_gas_thermal`）

仅在所声明热处理周期燃烧天然气时记录；声明计量参考状态，并排除不相关场址作业的用气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按所声明温度和压力计量工序天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_natural_gas`
- 来源：

###### 热固结电力（`electricity_thermal`）

记录炉体、控制、通风、物料搬运及本工序可直接归属污染控制所用的外购电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：工序分表计量，或依据设备运行时间从场址总表作可审计分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 热处理电气用碳制品（`heat_treated_article`）

按所声明路线，记录转入浸渍、石墨化或精加工的合格焙烧品、碳化品、烧结品或树脂固化品。

- 选定流：热处理电气用碳制品（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量所声明热处理周期后的合格净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_intermediate_mass`
- 来源：`resonac-graphite-electrode-process`; `mersen-carbon-brush-technical-guide`

##### 废物流

##### 基本流

###### 热固结直接化石源二氧化碳（`fossil_co2_thermal`）

记录可归属于本工序的现场燃料燃烧和工艺碳释放产生的直接化石源二氧化碳；不含上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接实测烟囱排放，或依据采集的燃料和工艺碳记录按 `calc_direct_fossil_co2` 计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_fossil_co2`
- 来源：

### 过程：沥青浸渍与再焙烧（`pitch_impregnation_and_rebaking`）

#### 输入

##### 产品流

###### 转入浸渍的热处理品（`heat_treated_article_to_impregnation`）

记录进入加压或真空沥青浸渍的场址内部热处理品。

- 选定流：热处理电气用碳制品（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量可归属于合格输出的全部浸渍周期装载质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_intermediate_mass`
- 来源：`resonac-graphite-electrode-process`; `usitc-small-diameter-graphite-electrodes-2009`

###### 煤焦油沥青浸渍剂（`coal_tar_pitch_impregnant`）

将浸渍消耗的煤焦油沥青与原配方粘结剂分开记录；保留供应商牌号及所有重复周期的添加量。

- 选定流：煤焦油沥青（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量所有已声明浸渍周期的收货消耗质量，扣除返回同一过程的回收沥青
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_impregnation_material_mass`
- 来源：`resonac-graphite-electrode-process`; `usitc-small-diameter-graphite-electrodes-2009`

###### 再焙烧用天然气（`natural_gas_rebaking`）

仅在浸渍后的再焙烧实际燃烧天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按所声明温度和压力计量再焙烧工序天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_natural_gas`
- 来源：

###### 浸渍与再焙烧电力（`electricity_impregnation_rebaking`）

记录沥青处理、真空或压力系统、再焙烧炉、通风及可直接归属控制设施的电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：工序分表计量，或依据设备运行时间从场址总表作可审计分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 再焙烧电气用碳制品（`rebaked_article`）

记录全部已声明周期结束后的合格浸渍再焙烧制品。

- 选定流：再焙烧电气用碳制品（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量最后一次再焙烧周期后的合格净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_intermediate_mass`
- 来源：`resonac-graphite-electrode-process`

##### 废物流

##### 基本流

###### 再焙烧直接化石源二氧化碳（`fossil_co2_rebaking`）

记录再焙烧燃料燃烧和浸渍沥青碳化产生的直接化石源二氧化碳；排除上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接实测烟囱排放，或依据采集的燃料和工艺碳记录按 `calc_direct_fossil_co2` 计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_fossil_co2`
- 来源：

### 过程：石墨化（`graphitization`）

#### 输入

##### 产品流

###### 直接转入石墨化的热处理品（`heat_treated_article_to_graphitization`）

仅在石墨化紧接热处理且未进行沥青浸渍时记录本内部转移。

- 选定流：热处理电气用碳制品（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量从未浸渍路线装入石墨化工序的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_intermediate_mass`
- 来源：`resonac-graphite-electrode-process`

###### 转入石墨化的再焙烧品（`rebaked_article_to_graphitization`）

仅在沥青浸渍和再焙烧之后进行石墨化时记录本内部转移。

- 选定流：再焙烧电气用碳制品（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量装入石墨化工序的再焙烧品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_intermediate_mass`
- 来源：`resonac-graphite-electrode-process`

###### 石墨化电力（`electricity_graphitization`）

记录电阻加热或直接焦耳加热、炉辅机、冷却、通风和可直接归属控制设施所用电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：石墨化工序分表计量，或按炉批作可审计分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：`resonac-graphite-electrode-process`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 石墨化电气用碳制品（`graphitized_article`）

记录转入机械加工和装配的合格石墨化坯料。

- 选定流：石墨化电气用碳制品（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量石墨化和冷却后的合格净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_intermediate_mass`
- 来源：`resonac-graphite-electrode-process`

##### 废物流

##### 基本流

### 过程：机械加工、质量放行与连接件装配（`machining_and_assembly`）

#### 输入

##### 产品流

###### 转入精加工的非石墨化热处理品（`heat_treated_article_to_finishing`）

仅对从热固结直接进入精加工的路线记录本内部投入。

- 选定流：热处理电气用碳制品（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量从未浸渍、未石墨化路线转入精加工的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_intermediate_mass`
- 来源：`mersen-carbon-brush-technical-guide`

###### 转入精加工的非石墨化再焙烧品（`rebaked_article_to_finishing`）

仅当产品经过浸渍和再焙烧但未石墨化时记录本内部投入。

- 选定流：再焙烧电气用碳制品（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量转入精加工的再焙烧品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_intermediate_mass`
- 来源：`mersen-carbon-brush-technical-guide`

###### 转入精加工的石墨化品（`graphitized_article_to_finishing`）

仅对石墨化产品记录本内部投入。

- 选定流：石墨化电气用碳制品（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量转入精加工的石墨化品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_intermediate_mass`
- 来源：`resonac-graphite-electrode-process`

###### 铜线连接件（`copper_wire_attachment`）

仅当铜引线或软连接随电气用碳制成品供应时记录；声明合金、截面、绝缘和连接方式。

- 选定流：铜线材 `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- 流属性/单位：Mass / kg
- 数量规则：计量纳入合格成品的铜线净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_mass`
- 来源：`mersen-carbon-brush-technical-guide`

###### 精加工电力（`electricity_finishing`）

记录锯切、车削、铣削、钻孔、磨削、质量检验、连接件装配、通风及可直接归属除尘所用的外购电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：工序分表计量，或依据设备运行时间从场址总表作可审计分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：

###### 精加工工艺用水（`process_water_finishing`）

仅在湿式加工、清洗或湿法除尘时记录工艺用水；闭路循环冷却液只记录跨越边界的净补水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量可归属于合格成品的净补水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 经质量放行的电气用碳制成品（`reference_product`）

本行为参考产品。记录不含可拆卸包装的质量放行净质量，并保留所声明产品族和性能限定信息。

- 选定流：电气用碳制成品（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：归一化输出精确为 1 kg 经质量放行的成品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_reference_product_mass`
- 来源：`eu-2021-environmental-footprint-method`

##### 废物流

###### 机械加工碳质粉尘（`machining_carbon_dust`）

记录送出场址处理或处置的碳质机械加工粉尘；内部返回物料单独核算。

- 选定流：机械加工碳质粉尘（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量送往外部处理或处置的粉尘质量，扣除有记录的内部回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbon_waste_mass`
- 来源：

###### 机械加工碳质边角料（`machining_carbon_offcuts`）

记录送出场址的离散碳质切屑和不合格加工边角料；不得与收集粉尘合并计量。

- 选定流：机械加工碳质边角料（UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：计量送往外部处理或处置的边角料质量，扣除有记录的内部回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carbon_waste_mass`
- 来源：

###### 湿式加工或除尘废水（`machining_wastewater`）

只有湿式加工、清洗或湿法除尘产生液体废物并跨越处理或排放边界时才记录。

- 选定流：废水 `ba1c2ea5-0ea3-4981-a893-45a0650fea62`
- 流属性/单位：Volume / m3
- 数量规则：计量移交场内处理、场外处理或排放的废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 电气用碳制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用设备、炉窑、污染控制设施和多产品生产线 | 首先取得产品和工序特定记录，或按仪表、批次、设备时间或其他因果运行记录进行细分。只有在附加功能和被替代系统得到证明并披露时，才可采用系统扩展。 | `eu-2021-environmental-footprint-method` |
| `allocation_physical_relationship` | 无法避免的共用负荷 | 无法细分或系统扩展时，采用与共用负荷具有因果关系的实测物理关系，例如炉内占用时间-能耗、处理质量或机器时间，并记录分子、分母、共产品和分配期。 | `eu-2021-environmental-footprint-method` |
| `allocation_other_relationship` | 不存在可辩护物理关系的负荷 | 只有在说明细分、系统扩展和物理分配均不可行后，才允许经济关系或其他关系。报告价格、参考期、币值基准、分配份额以及对次优可行方法的敏感性。 | `eu-2021-environmental-footprint-method` |
| `allocation_internal_recycling` | 场内返回的碳粉尘、边角料、沥青和内部中间体 | 同场址回用作为内部转移处理：只能通过透明质量平衡从外部废物和新购投入中扣除。不得给予避免生产抵扣，也不得把同一返回质量同时计为废物和投入。 | `eu-2021-environmental-footprint-method` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_purchased_material_mass` | `material_preparation_and_forming` | 外购针状焦、天然石墨、人造石墨、炭黑、煤焦油沥青粘结剂、酚醛树脂和铜粉 | 称量单、批配方、领料记录、供应商证书 | 物料身份；供应商；批号；毛重；皮重；净重；水分或固含；返回量；合格输出批 | 以校准衡器和配方领料记录核对合格生产批次 | kg | 每批，按月汇总 | 至少连续 12 个有代表性的月份；批役产品采用完整批役 | 生产所声明产品的全部生产线和班次 | 新投入净质量扣除有记录的同过程返回量，再除以合格参考产品净质量 | 衡器校准；签署批记录；供应商证书；库存核对；质量平衡偏差 |
| `cp_stage_electricity` | 所有前景制造过程 | 按工序外购电力 | 公用总表和工序分表；必要时炉窑或设备运行记录 | 仪表；起止读数；单位；工序；批次；运行时间；分配驱动；现场发电；外送电 | 优先分表；否则按可审计因果设备或炉窑记录分配 | kWh 和 MJ | 连续或每批，按月汇总 | 至少连续 12 个有代表性的月份或完整批役 | 全部已纳入生产线、公用设施及可直接归属控制设施 | 扣除外送和不相关电力；按 3.6 换算 kWh 为 MJ；分配后除以合格参考产品净质量 | 仪表校准；电费单；分表覆盖图；分配核对 |
| `cp_process_water` | `material_preparation_and_forming`; `machining_and_assembly` | 工艺用水和闭路系统净补水 | 校准水表、储罐记录或供应商账单 | 仪表；体积或质量；温度；换算密度；用途；过程；循环量；排污量；批次 | 计量跨越过程边界的净用水并核对循环量 | kg | 连续或每日，按月汇总 | 至少连续 12 个有代表性的月份或完整批役 | 全部已纳入湿式成型、冷却、清洗、加工和除尘作业 | 仅凭有文件依据的密度换算；排除循环体积；除以合格参考产品净质量 | 仪表校准；水平衡；密度记录；账单核对 |
| `cp_internal_intermediate_mass` | 所有前景制造过程 | 生坯、热处理品、再焙烧品和石墨化品内部转移 | 批次流转卡、校准衡器、生产执行记录 | 产品族；批次；工序；毛重；皮重；合格质量；不合格质量；去向；循环次数 | 在每个已声明工序称量合格内部转移 | kg | 每批 | 完整生产批役或有代表性的 12 个月 | 每个已纳入工序 | 按路线汇总合格转移质量，并核对工序投入、输出、不合格品和在制品 | 衡器校准；批次谱系；路线核对；签署放行记录 |
| `cp_carbon_waste_mass` | `material_preparation_and_forming`; `machining_and_assembly` | 离场碳/石墨粉尘和边角料 | 废物容器称量单、转移联单、内部回用记录 | 废物身份；组成；来源工序；毛/皮/净重；去向；处理；内部回用 | 称量每次外部废物转移，并单独核对场内回用 | kg | 每次外运，按月汇总 | 与生产数据相同期间 | 全部已纳入除尘器、筛分不合格料、边角料和加工废品 | 汇总外部净废物；排除有记录内部回用；除以合格参考产品净质量 | 称量单；废物联单；组成证据；内部回用台账；质量平衡 |
| `cp_stage_natural_gas` | `thermal_consolidation`; `pitch_impregnation_and_rebaking` | 已纳入炉窑燃烧的气态天然气 | 工序燃气表、供应商账单、炉批日志 | 仪表；体积；温度；压力；热值；组成；炉窑；批次；起止读数 | 优先工序计量并与供应商总量核对 | m3 | 每批或连续，按月汇总 | 至少连续 12 个有代表性的月份或完整批役 | 全部已纳入热处理和再焙烧炉 | 统一到一个已声明参考状态，按因果炉窑记录分配，并除以合格参考产品净质量 | 仪表校准；供应商声明；参考状态换算；账单核对 |
| `cp_impregnation_material_mass` | `pitch_impregnation_and_rebaking` | 煤焦油沥青浸渍剂 | 储罐收发、领料、批次和回收记录 | 沥青牌号；批号；总投入；回收返回；处置；浸渍周期；处理制品质量 | 核对所有周期的沥青储罐和批记录 | kg | 每浸渍批 | 完整已纳入浸渍批役 | 服务所声明产品的全部浸渍和沥青回收系统 | 外购消耗质量扣除返回同过程的回收量，再除以合格参考产品净质量 | 储罐校准；供应商证书；周期日志；沥青平衡 |
| `cp_direct_fossil_co2` | `thermal_consolidation`; `pitch_impregnation_and_rebaking` | 直接化石源二氧化碳 | 经验证烟气实测或燃料与工艺碳平衡 | 烟气流量/浓度或燃料体积；燃料碳含量；氧化因子；沥青/树脂碳投入；留存碳；实测含碳废物；期间 | 有代表性时使用经验证直接实测，否则采用有文件依据的场址碳平衡计算 | kg | 每次测试及每月计算 | 与活动数据相同的代表性生产期 | 全部已纳入烟囱和捕集点；排除上游供应排放 | 应用 `calc_direct_fossil_co2`，仅按有文件依据因果记录分配，再除以合格参考产品净质量 | 测试报告；仪器校准；燃料证书；碳平衡；独立核对 |
| `cp_finishing_material_mass` | `machining_and_assembly` | 纳入成品的铜线 | 物料清单、领料、成品称量 | 铜线牌号；合金；绝缘；总领料；退料；废料；合格产品；连接方式 | 将物料清单和净领料与合格成品批核对 | kg | 每批，按月汇总 | 完整批役或代表性 12 个月 | 所声明产品的全部装配线 | 纳入质量扣除退料和废料，再除以合格参考产品净质量 | 供应商证书；衡器校准；物料清单版本；领退料核对 |
| `cp_reference_product_mass` | `machining_and_assembly` | 经质量放行的成品 | 校准最终衡器和质量放行记录 | 批次；产品族；牌号；毛重；皮重；净重；不合格品；包装质量；放行状态 | 称量未包装合格产品，并单独核对不合格品和包装 | kg | 每放行批 | 完整批役或代表性 12 个月 | 全部已纳入精加工和放行线 | 汇总不含可拆卸包装的质量放行净质量；归一化输出固定为 1 kg | 衡器校准；质量证书；包装皮重；批次核对 |
| `cp_wastewater_volume` | `machining_and_assembly` | 湿式加工、清洗或湿法除尘废水 | 校准排水表、储罐移交、处理记录 | 体积；温度；过程来源；悬浮碳；处理状态；去向；采样结果 | 在移交处理或排放点计量，并按场址控制计划采样 | m3 | 连续或每次移交，按月汇总 | 与生产数据相同期间 | 全部已纳入湿式精加工排水点 | 汇总可归属过程的废水体积并除以合格参考产品净质量 | 仪表校准；水平衡；移交记录；分析报告；处理凭证 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 每个清单行 | 归一化数量 = 同期可归属于所声明产品的流量 ÷ 未包装质量放行参考产品净质量（kg） | 可归属流量；合格参考产品净质量 | 每 1 kg 参考产品的流量 |  |
| `calc_electricity_mj` | 电力行 | MJ = 计量 kWh × 3.6；不得对电力再使用燃料热值因子 | 计量 kWh | 外购电力 MJ |  |
| `calc_internal_mass_balance` | 内部中间体和碳废物 | 外购碳质与金属投入 = 成品 + 外部转移废物 + 直接实测质量释放 + 期末在制品 − 期初在制品 − 有记录内部返回量调整；调查差异，不得强行闭合 | 外购物料；内部转移；产品；废物；直接质量释放；在制品；内部回用 | 按路线和期间披露的质量平衡差异 |  |
| `calc_direct_fossil_co2` | `fossil_co2_thermal`; `fossil_co2_rebaking` | 优先采用有代表性直接实测。计算时汇总计量燃料和工艺碳中已氧化的化石碳，以 44/12 将碳质量换算为 CO2；只扣除经证明留存在产品、内部回收或随实测废物转移的碳，并保留全部场址特定因子和不确定性。 | 燃料量及化石碳含量；沥青/树脂化石碳；氧化证据；产品留存碳；实测含碳废物 | 每 1 kg 参考产品的直接化石源 CO2（kg） |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 每个代表批次均可追溯产品族、牌号、规格、尺寸、表观密度、电气性能和试验方法、金属含量、石墨化状态、浸渍次数、连接状态及包装排除。 | 产品规格；分析或符合性证书；批次谱系；试验报告 |
| `dq_temporal_coverage` | 前景活动数据 | 除批役生产外，至少采用连续 12 个有代表性的月份；批役生产应覆盖完整批役，并说明其对参考年的代表性。 | 带日期仪表数据；批次登记；生产日历；代表性说明 |
| `dq_route_completeness` | 过程图和条件性行 | 纳入所有实际实施工序和配方投入；未纳入的条件性工序或行必须在数据集中明确标为不适用，不得静默记零。 | 路线卡；工艺流程图；配方；设备清单；纳入核对表 |
| `dq_mass_energy_reconciliation` | 物料、废物、燃料、水和电力记录 | 将工序记录与场址总量核对并调查无法解释的差异；不得为强行平衡而添加未具体说明的材料、公用工程、废物或排放流。 | 核对工作簿；签署偏差审查；校准和账单记录 |
| `dq_upstream_compatibility` | 外购投入数据集 | 上游数据集必须匹配流身份、产品状态、属性、单位组、地域、技术和参考年份；否则记录限制和换算。 | 数据集元数据；供应商数据；换算记录；限制说明 |
| `dq_uuid_status` | 含 UUID 和未解决流 | 只使用本 PCR 所列经审计 state-100 UUID。所有未解决行保持为明确具体流，直至审计到精确公共身份；不得使用代理。 | UUID 审计回执；未解决流登记；审查决定 |
| `dq_range_status` | 重要流 | 前景记录始终必需。本版本不声明外部经验范围；在至少两个相互独立、经原文核实且边界相容的来源支持综合前，保留未解决范围证据需求。 | manifest 未解决范围证据登记；来源审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference` | 产品身份和参考流 | 缺少任何必需限定信息、1 kg 参考质量包含可拆卸包装、采用非质量参考属性，或没有性能与寿命等效功能单位却主张全类别使用等效时，拒绝数据包。 | `un-cpc-3-0-2025`; `eu-2021-environmental-footprint-method` |
| `validate_route_and_atomic_inventory` | 过程图和清单 | 确认一条实际产品路线；每个详细过程与过程图匹配；每项交换必须是一个原子物理流、化学流、废物流或能量流；拒绝笼统流及条件性工序的静默零值。 | `mersen-carbon-brush-technical-guide`; `resonac-graphite-electrode-process` |
| `validate_units_and_uuid` | 流身份和计量 | 对照已审计身份确认每个 UUID、流类型、属性、单位组和中文显示名。拒绝代理 UUID、无记录密度换算、混用气体参考状态，或未以 MJ 归一化的电力。 |  |
| `validate_no_double_counting` | 上游与前景排放、内部回用及分配 | 拒绝把上游电力或燃料供应排放重复计为现场直接排放、把同一内部返回量同时计为废物和投入，或未遵守层级和披露要求就分配共用负荷。 | `eu-2021-environmental-footprint-method` |
| `validate_completeness_and_quality` | 前景期间和核对 | 确认时间覆盖、生产分母、仪表和衡器校准、路线完整性、质量和能量核对、废物去向、废水状态以及直接排放方法。将未解决 UUID 和范围证据需求作为限制报告。 | `eu-2021-environmental-footprint-method` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 面向一种已声明电气用碳制成品及其路线的前景制造数据包 |
| downstream_use | 经审查后可作为 `secondary_dataset` 发布；仅当产品族、牌号、路线、地域、技术、参考年份和工厂门口边界相容时，方可作为 `background_dataset` 使用 |
| allowed_use | 所声明产品的从摇篮到工厂门口建模；在方法和性能等效成立后进行供应商比较；采用透明上游链接的下游产品系统建模 |
| excluded_use | 在没有等效电气性能和寿命时直接比较碳电极、碳刷、灯用碳制品或电池用碳制品；在没有明确边界扩展时用于石墨粉活性材料、完整电池、非电气碳制品、使用阶段消耗、包装、配送或生命末期建模 |
| required_metadata | PCR id 和版本；产品族和牌号；产品规格；尺寸；表观密度；电气性能及试验方法；配方类别；金属含量；石墨化和浸渍路线；炉型技术；连接件；再生含量；场址和地域；参考年份和期间；上游数据集；分配；内部回用；直接排放方法；废水处理；包装排除；未解决 UUID 和范围限制 |
| required_quality_disclosure | 一手数据占比；时间、地域和技术代表性；仪表和衡器覆盖；分配份额和敏感性；质量和能量核对；数据缺口；禁止代理；未解决 UUID；无外部经验范围；上游数据集限制 |
| update_trigger | 参考产品或未解决流出现新的精确公共 UUID；完成双来源范围综合；配方、产品族、炉型或石墨化技术、能源供应、场址地域、分配、直接排放控制、废水处理或产品规格发生实质变化；分类或管理方法修订 |

## 11. 数据源

| Source id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | 联合国统计司，*Central Product Classification Version 3.0 Structure*，46950 行，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-04；SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`） | 仅用于经原文核实的官方英文分类身份；不作为方法或范围证据 |
| `usitc-small-diameter-graphite-electrodes-2009` | `official_guidance` | 美国国际贸易委员会，*Small Diameter Graphite Electrodes from China*，Publication 4062，2009。https://www.govinfo.gov/content/pkg/GOVPUB-ITC1-PURL-gpo14561/pdf/GOVPUB-ITC1-PURL-gpo14561.pdf（检索于 2026-09-04） | 经原文核实的石墨电极工序、条件性沥青浸渍、精加工及包装边界语境；未推导定量范围 |
| `mersen-carbon-brush-technical-guide` | `handbook` | Mersen，*Carbon Brushes for Motors and Generators*。https://www.mersen.com/sites/default/files/files_imported/2-ptt-carbon-brush-technical-guide-mersen.pdf（检索于 2026-09-04） | 经原文核实的天然/人造石墨、热固性树脂、金属-石墨、压制、聚合、热处理和精加工变体；未推导定量范围 |
| `resonac-graphite-electrode-process` | `extension_guidance` | Resonac Graphite Japan Corporation，*The Manufacturing Process of Graphite Electrodes*。https://www.rgj.resonac.com/en/products/summary.html（检索于 2026-09-04） | 经原文核实的针状焦和沥青制备、挤出、焙烧、浸渍、再焙烧、电热石墨化及机械加工过程分解；未推导定量范围 |
| `eu-2021-environmental-footprint-method` | `official_guidance` | 欧盟委员会，2021 年 12 月 15 日关于使用环境足迹方法的 Recommendation (EU) 2021/2279，Annex I。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-09-04） | 经原文核实的系统边界、多功能性/分配层级、数据质量、重要性及校验披露规则 |
