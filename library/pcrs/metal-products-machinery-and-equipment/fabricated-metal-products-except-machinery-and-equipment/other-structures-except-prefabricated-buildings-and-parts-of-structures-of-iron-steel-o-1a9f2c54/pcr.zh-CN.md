---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.other-structures-except-prefabricated-buildings-and-parts-of-structures-of-iron-steel-o-1a9f2c54
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 钢铁或铝制结构体及结构体部件

## 1. 范围与适用性

本 PCR 适用于钢铁或铝制结构体及结构体部件的工厂大门生产。这些产品已经过切割、钻孔、冲孔、成形、机械加工、焊接、螺栓连接、表面处理、涂覆、检验或其他加工，可用于已声明的结构体或临时结构支护功能。覆盖产品包括结构框架及构件、经加工的结构用板材和型材、钢管柱及其他结构用管材，以及脚手架、模板或矿井支护用支柱及类似设备。产品必须以适用于具体项目或功能的已加工状态交付；未经加工的钢厂或铝厂产品属于上游投入，而非参考产品。

边界始于外购金属产品和辅助材料进入报告制造场址，终止于合格制成品离开该场址大门。边界包括按路线适用的内部搬运、切割、钻孔、成形、机械加工、连接、表面预处理、表面处理、检验和返工。外购投入的上游生产和入厂供应应采用供应商特定或其他适当背景数据集表示。安装、吊装、使用、维护、拆除、使用后回收、完整预制建筑物以及归入其他类别的机械专用总成不在范围内。交付状态所包含的外协工序应使用已披露的供应商数据集表示，不得同时计入场内工序。

本类别需要独立方法学记录，因为项目特定加工、材料成材率、连接、表面处理、返工和废料分类产生了上游基本金属 PCR 未涵盖的前景规则。边界依据正式 CPC 身份以及钢结构、铝材加工和金属表面处理的原文证据（`unsd-cpc-3-0-structure-2025`、`aisc-sti-fabricated-hss-epd-2022`、`aec-aluminium-fabrication-services`、`eu-jrc-stm-bref-2006`）。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.other-structures-except-prefabricated-buildings-and-parts-of-structures-of-iron-steel-o-1a9f2c54 |
| classification_refs | CPC 3.0：42190，精确映射语境 |
| covered_products | 用于具体项目或功能的钢铁或铝制结构体和结构体部件；经加工的结构用板材、杆材、角材、型材、异型材及管材；脚手架、模板或矿井支护用支柱及类似设备 |
| excluded_products | 完整预制建筑物；未经加工的初级或半成品金属产品；安装和吊装服务；门窗、机械总成及归入更具体类别的其他产品；使用和寿命终结服务 |
| representative_product | 已准备供所声明结构、图纸或临时支护用途使用的工厂大门合格结构金属构件批次 |
| production_route | 外购金属产品接收和验证；项目特定的切割、钻孔、成形或机械加工；焊接和/或机械紧固；条件性表面预处理及涂层；检验、返工和工厂大门放行 |
| market_state | 制造场址大门处合格产品净质量，声明材料/合金、牌号或状态、几何形状、加工状态、连接路线、涂层状态、检验状态和目的市场 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按已声明图纸、几何形状和结构功能加工并验收合格的钢铁或铝制结构体或结构体部件 |
| How much | 报告制造场址大门处 1,000 kg 合格产品净质量 |
| How well | 符合已声明的材料/合金、牌号或状态、尺寸和公差、连接工艺、表面预处理或涂层规范以及检验验收准则 |
| How long or cycle | 一个完整加工和验收批次；使用寿命不在本门到门边界内，在比较需要时另行声明 |
| reference_flow_link | 1,000 kg 工厂大门合格参考产品输出 `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 工厂大门结构金属制成构件（TianGong 精确流尚未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 钢铁或铝材料及合金；牌号或状态；构件和结构功能；图纸或几何形状；产品净质量；连接路线；表面预处理和涂层状态；检验标准及验收状态；报告场址和地理范围；报告期；纳入的场内及外协工序；上游数据集身份；废料去向 |

构建前景数据包时，应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明全部`必需限定信息`。类别级产品流 UUID 尚未解决，应保持为空；不得以较窄的桩柱、面板、挖掘机焊接总成或其他产品 UUID 替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_rule_1` | 参考产品及金属质量流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用合格产品的干基净质量，不含可重复使用运输架和单独报告的包装。记录地磅、秤、认证单件质量或图纸推算方法，并与生产及库存记录核对。 |
| `measurement_rule_2` | 电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始电量，按 1 kWh = 3.6 MJ 转换为 MJ。声明电表覆盖范围及共用电表分配。 |
| `measurement_rule_3` | 气态天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200b9a66` | m3 | 声明气体体积的温度、压力及干湿基准条件；不得将氧气与燃气合并。 |
| `measurement_rule_4` | 材料成材率及废物质量平衡 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料族核对报告期内金属投入、合格产品、分类金属废料、退回材料、在制品及库存变化，并解释全部残余不平衡。 |
| `measurement_rule_5` | 涂层和处理化学品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告采购或补加的产品质量。排放或镀层质量计算需要时另行披露固含量、有效浓度或金属含量；不得以有效物质质量替代产品质量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground_start | 从外购金属产品和辅助材料进入报告制造场址开始。其先前生产和入厂供应通过明确的上游数据集表示，不在制造过程中重复构建。 | `aisc-sti-fabricated-hss-epd-2022` |
| `boundary_rule_2` | foreground_operations | 纳入放行工厂大门产品所需的全部场址控制搬运、切割、钻孔、冲孔、成形、机械加工、焊接、机械紧固、按路线适用的表面预处理或表面处理、检验、返工和废物处理。 | `aisc-sti-fabricated-hss-epd-2022`; `aec-aluminium-fabrication-services`; `eu-jrc-stm-bref-2006` |
| `boundary_rule_3` | conditional_finishing | 仅在磨料处理、水基清洗、镀锌、涂装或其他表面处理属于已声明工厂大门产品状态时纳入。分别识别场内和外协工序，避免工序或运输负荷重复。 | `aisc-sti-fabricated-hss-epd-2022`; `eu-jrc-stm-bref-2006` |
| `boundary_rule_4` | exclusions | 排除吊装、安装、使用、维护、拆除、使用后回收、资本设备和员工通勤。研究特定增项应明确披露，不得静默改变边界。 | `aisc-sti-fabricated-hss-epd-2022` |
| `boundary_rule_5` | elementary_emissions | 仅报告前景边界内过程的直接释放。电力、燃料、金属和化学品的上游排放属于其关联供应商数据集。 | `eu-jrc-stm-bref-2006`; `uk-hse-welding-controls` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际进入报告制造场址的外购金属产品和辅助材料，按材料/合金、牌号/状态、产品形态、加工状态、数量、供应商和上游数据集识别 |
| starting_condition_role | 前景制造大门投入；此前的初级金属、半成品及供应商运输负荷为上游负荷 |
| product_classification_scope | 与 CPC 3.0 代码 42190 相符的项目或功能特定钢铁或铝制结构体、结构体部件及临时结构支护设备 |
| recursive_input_rule | 已在同一产品类别内加工的外购投入，应作为同类别产品投入记录，并带有独立供应商数据集和已声明加工状态；不得递归重建其制造过程，也不得再次作为未经加工的基本金属计量 |
| upstream_dataset_requirement | 每项外购金属、能源、燃料、化学品和外协工序投入均应关联地理、技术、牌号和状态适当的上游数据，并披露代理数据和排除项 |
| disclosure | 声明材料/合金及牌号或状态、投入产品形态和加工状态、图纸或几何形状、连接及表面处理路线、报告场址/地理范围/期间、计量和分配覆盖、返工、外协工序、废物去向及所有边界偏离 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `structural_metal_fabrication` | 结构金属加工、连接、表面处理及工厂大门放行 | `required` | 所有数据集；每个路线条件交换仅在相应材料、连接、燃料或表面处理路线发生于已声明边界内时适用 | 前景制造 | 1,000 kg 工厂大门合格结构金属制成品净质量 |

### 过程：结构金属加工、连接、表面处理及工厂大门放行（`structural_metal_fabrication`）

#### 输入

##### 产品流

###### 热轧结构型材（`hot_rolled_section_input`）

仅对以热轧大型钢型材加工的产品记录本投入。声明牌号、截面几何、供应商、加工状态和上游数据集。

- 选定流：热轧大型材 `cbeefeb8-2dfc-48f5-b643-f35aed0d52a1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量接收和消耗质量，并按库存变化和退回材料修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`aisc-sti-fabricated-hss-epd-2022`

###### 结构钢板（`steel_plate_input`）

当钢板经切割或成形用于产品时，记录一种已声明牌号和进厂状态的结构钢板。TianGong 精确流 UUID 尚未解决。

- 选定流：已声明牌号和进厂状态的结构钢板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量接收和消耗质量，并按库存变化和退回材料修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`aisc-sti-fabricated-hss-epd-2022`

###### 焊接非圆形钢制空心型材（`welded_hollow_section_input`）

本投入仅用于焊接非圆形空心型材路线。其他管材或空心型材形态需要单独的具体交换和身份审核。

- 选定流：非圆形截面焊接钢管和钢管 `5b36ddd4-adb1-41da-9456-33e69e0f141c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量接收和消耗质量，并按库存变化和退回材料修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`aisc-sti-fabricated-hss-epd-2022`

###### 外购铝挤压型材（`aluminium_profile_input`）

仅在已加工铝挤压型材跨越场址边界时记录本同类别投入。应用递归投入规则并声明合金、状态、几何形状和先前加工。

- 选定流：铝挤压型材 `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量接收和消耗质量，并按库存变化和退回材料修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`aec-aluminium-fabrication-services`

###### 药芯焊丝（`flux_cored_wire_input`）

仅在边界内进行药芯焊丝电弧焊时记录；其他焊接耗材需要独立原子行。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：领用质量减去退回库房的未使用焊丝质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：药芯焊丝焊接路线每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`aisc-sti-fabricated-hss-epd-2022`

###### 结构钢螺栓（`structural_bolt_input`）

采用机械紧固时，记录一种已声明的结构螺栓产品。不得以复数“钢紧固件”集合替代；TianGong 精确 UUID 尚未解决。

- 选定流：已声明牌号和涂层状态的结构钢螺栓
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：已安装螺栓质量加场址归属的不合格螺栓质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：螺栓连接路线每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`aisc-sti-fabricated-hss-epd-2022`

###### 电力（`electricity_input`）

记录制造设备、物料搬运、抽风、处理及按路线适用的表面处理所用外购电力。上游排放不得计入场址直接排放。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ / 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：分配给已声明产品的计量外购电力并转换为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`aisc-sti-fabricated-hss-epd-2022`; `eu-jrc-stm-bref-2006`

###### 气态天然气（`natural_gas_input`）

仅在天然气于边界内用于加热、干燥或热加工时记录。声明基准状态和燃烧器用途。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200b9a66` / m3 / 体积 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：按已声明基准状态计量或开票的天然气体积，并分配至纳入工序
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：天然气路线每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`eu-jrc-stm-bref-2006`

###### 工业氧气（`industrial_oxygen_input`）

仅对氧燃料切割或其他已声明耗氧工序记录工业氧气；不得与燃气合并。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200b9a66` / m3 / 体积 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：在已声明基准状态下计量或由供应商记录的耗氧体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：氧燃料路线每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`aisc-sti-fabricated-hss-epd-2022`

###### 柴油（`diesel_input`）

仅对制造边界内场址控制的移动设备或发电机记录柴油；供应商运输燃料属于上游。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配给纳入场址设备的油罐领用或油卡质量，并核对库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：场址柴油路线每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`aisc-sti-fabricated-hss-epd-2022`

###### 工艺用水（`process_water_input`）

仅对水基清洗、漂洗、湿式切割或纳入的处理工序记录工艺用水。跨越边界的冷却水需要独立行。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量或罐体平衡的进入纳入工序的工艺水质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：水基路线每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment`
- 来源：`eu-jrc-stm-bref-2006`

###### 氢氧化钠（`sodium_hydroxide_input`）

仅在纳入碱洗、蚀刻或槽液维护工序使用时记录氢氧化钠产品质量；溶液浓度另行声明。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配至纳入槽液的采购或补加氢氧化钠产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：碱处理路线每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment`
- 来源：`eu-jrc-stm-bref-2006`

###### 铸钢砂喷砂介质（`steel_grit_input`）

仅在进行磨料喷砂时记录加入喷砂系统的新铸钢砂。TianGong 精确产品 UUID 尚未解决。

- 选定流：铸钢砂喷砂介质
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采购补加量加期初库存，减期末可重复使用库存和场外退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：铸钢砂喷砂路线每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment`
- 来源：`aisc-sti-fabricated-hss-epd-2022`; `eu-jrc-stm-bref-2006`

###### 特高纯锌金属（`shg_zinc_input`）

仅在边界内进行热浸镀锌时记录锌金属。声明槽液组成，并区分锌产品质量与锌含量。

- 选定流：特高纯锌金属 `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采购锌金属加期初槽存，减期末槽存、回收浮渣和有记录的场外退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 工厂大门合格镀锌结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment`
- 来源：`eu-jrc-stm-bref-2006`

###### 溶剂型环氧底漆（`epoxy_primer_input`）

在边界内施涂时，记录一种已声明配方的溶剂型环氧底漆。TianGong 精确 UUID 尚未解决；不得以通用涂料集合替代。

- 选定流：已声明配方和固含量的溶剂型环氧底漆
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：涂料产品领用质量减未开封退回量，并按库存变化修正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：环氧底漆路线每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment`
- 来源：`eu-jrc-stm-bref-2006`

##### 废物流

默认无废物流进入本前景过程。场址处理外部产生的废物时，应作为单独声明的过程建模，不得并入制造过程。

##### 基本流

不规定基本资源投入。作为技术系统产品供应的水记录为 `process_water_input`。

#### 输出

##### 产品流

###### 工厂大门结构金属制成品（`reference_product`）

这是定量参考输出。类别级 TianGong 精确产品 UUID 尚未解决，在确认精确公开 state-100 身份前应保持为空。

- 选定流：工厂大门结构金属制成构件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：排除不合格品、单独运输的包装和可重复使用运输架后，将合格净产出精确归一化为 1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 工厂大门合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_product_mass`
- 来源：`unsd-cpc-3-0-structure-2025`

##### 废物流

###### 分类钢制加工废料（`steel_scrap_output`）

将离开边界的钢制边角料、冲孔落料和机加工屑作为一项分类废钢流记录，并声明污染和去向。

- 选定流：废钢 `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量外运质量加场址自产废钢期末库存，减期初库存
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：含钢产品生产每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_dispatch`
- 来源：`aisc-sti-fabricated-hss-epd-2022`

###### 分类铝制加工废料（`aluminium_scrap_output`）

将离开边界的新铝边角料和机加工屑与废钢分开记录，并声明合金混合、污染和去向。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量外运质量加场址自产铝废料期末库存，减期初库存
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：含铝产品生产每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_dispatch`
- 来源：`aec-aluminium-fabrication-services`

###### 含溶解金属的表面处理废水（`surface_treatment_wastewater`）

记录纳入的清洗、漂洗或处理工序在场内回用之后产生的含溶解金属水相废液。TianGong 精确废物流 UUID 尚未解决；不得以通用废水替代。

- 选定流：含溶解金属的表面处理废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量或罐体平衡的送往下水道、处理设施或场外管理的废水质量，不含内部回用水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：水基处理路线每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment`
- 来源：`eu-jrc-stm-bref-2006`

###### 废旧喷砂磨料（`spent_blasting_media_output`）

记录不再循环使用并离开边界的喷砂磨料。声明原始介质、捕集涂层或金属污染、危险废物分类及去向。

- 选定流：废旧喷砂磨料 `45f09708-d116-43d2-96a2-f0918bf373d3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量废磨料外运量加废物期末库存，减期初库存
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：磨料喷砂路线每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_dispatch`
- 来源：`eu-jrc-stm-bref-2006`

##### 基本流

###### 排放到空气的化石源二氧化碳（`fossil_co2_air`）

仅记录场址控制的天然气或柴油燃烧产生的直接化石源二氧化碳。不得包含电力或燃料供应的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按各项实测化石燃料用量、供应商碳含量或已披露辖区燃烧因子及氧化基准分别计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：直接化石燃料路线每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-stm-bref-2006`

###### 排放到空气的非甲烷挥发性有机化合物（`nmvoc_air`）

仅对边界内含溶剂涂装或清洗记录排放到未指定空气的 NMVOC。声明配方、施涂效率和治理措施。

- 选定流：非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按实测涂料或溶剂产品质量、供应商 VOC 含量、回收溶剂以及实测捕集或销毁性能计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：含溶剂路线每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-stm-bref-2006`

###### 排放到非城市空气或高架点源的氮氧化物（`nox_high_stack_air`）

仅当纳入的燃料燃烧排放至候选流所声明的非城市/高架点源区室时，记录本氮氧化物汇总流。其他受纳区室需要不同的精确流身份。

- 选定流：氮氧化物 `191b44d4-90c9-465a-8802-93a651b4fd52`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测烟囱排放质量，或按燃料和设备使用已披露因子、运行负荷和治理性能计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：符合燃烧路线及受纳区室条件时每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-stm-bref-2006`

###### 切割、焊接或喷砂排放到空气的颗粒物（`particulate_matter_air`）

记录纳入的切割、焊接或喷砂在捕集后排放的一种已声明粒径颗粒物。声明粒径约定和受纳区室；TianGong 精确 UUID 尚未解决。

- 选定流：已声明粒径级别的金属加工颗粒物空气排放
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测出口及无组织排放质量，或采用设备特定物料平衡和有记录的捕集及治理效率计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：产生排放路线每 1,000 kg 工厂大门合格结构金属制成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`uk-hse-welding-controls`; `eu-jrc-stm-bref-2006`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | independently_measured_work_orders | 当已声明产品可独立计量时，优先细分工单、生产线、处理间和计量表，避免分配。 | `aisc-sti-fabricated-hss-epd-2022` |
| `allocation_rule_2` | shared_shop_resources | 不可避免的共用电力、燃料、搬运、抽风和辅助材料应采用有记录的因果驱动量分配，例如机器小时、起弧小时、处理间小时或设备特定吞吐量。仅在证实与资源使用关系时采用产品质量，并报告驱动量及敏感性。 | `aisc-sti-fabricated-hss-epd-2022` |
| `allocation_rule_3` | scrap_and_recycling | 在计量边界报告钢和铝废料并声明去向。本门到门前景过程内不计避免的初级生产收益，也不重复上游或下游数据集中已有的回收负荷或收益。 | `aisc-sti-fabricated-hss-epd-2022`; `aec-aluminium-fabrication-services` |
| `allocation_rule_4` | rejects_and_rework | 将边界内返工和不合格生产的负荷计入合格产品净质量分母。单独销售的共产品作为独立输出，并在发布前记录经审查的因果分配方法。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `structural_metal_fabrication` | 外购金属及制造耗材 | 采购、收货、领用和库存记录 | 流身份；材料/合金；牌号/状态；产品形态；供应商；批次；接收质量；领用质量；退回量；期初和期末库存；上游数据集 | 将发票和收货记录与校准秤、认证单件质量或图纸质量及库房领用记录核对 | kg | 每次收货和领用；每月核对 | 完整报告期，通常为连续 12 个月或完整代表性生产批次 | 报告场址内全部纳入制造建筑和库房 | 按原子流和工单汇总消耗质量，扣除有记录退回量和库存增加量，并通过 `calc_reference_normalization` 归一化 | 采购文件、材质证明、秤校准、库存台账和上游数据集链接 |
| `cp_energy_and_fuel` | `structural_metal_fabrication` | 电力、天然气、氧气和柴油 | 公用工程计量、油罐、发票和设备工时记录 | 表计编号；期初和期末读数；采购量；基准条件；设备/区域；运行小时；工单；分配驱动量 | 优先采用专用表计；否则核对场址总量并采用因果驱动量分配 | MJ; m3; kg | 连续或每次交付，按月汇总 | 与产品产出相同报告期 | 全部纳入的场址控制设备和建筑 | 核对采购及库存变化，排除供应商运输，分配至纳入工单并通过 `calc_reference_normalization` 归一化 | 表计校准、发票、油罐核对、设备日志和分配工作表 |
| `cp_surface_treatment` | `structural_metal_fabrication` | 工艺水、氢氧化钠、喷砂介质、锌、底漆和废水 | 表计、槽液、领用、配方、库存和废水转移记录 | 路线；槽或处理间编号；投入质量/体积；浓度；固含/VOC 或金属含量；期初/期末库存；循环量；废水量；处理及去向 | 计量水和废水；将化学品和涂料领用与槽液或处理间库存及产品路线核对 | kg; m3 | 每批或每次转移；每月核对 | 每项纳入表面处理路线的完整报告期 | 全部场内表面预处理和表面处理工序 | 扣除有记录退回和循环量后计算净消耗；每项化学品、涂料和废物流分开；通过 `calc_reference_normalization` 归一化 | 表计校准、配方 SDS/TDS、槽液分析、库存记录、废物联单和处理记录 |
| `cp_product_mass` | `structural_metal_fabrication` | 合格产品、不合格品和在制品 | 发运、验收、秤、件数和生产记录 | 工单；材料；图纸；件数；毛重和皮重；合格质量；不合格质量；返工；在制品；完成日期 | 采用校准称量或已验证单件/图纸质量确定合格净质量，并与发运记录核对 | kg | 每个完工批次或发运批次 | 完整报告期 | 报告场址全部合格产品 | 汇总合格净质量，排除可重复使用运输架和单独报告包装，再将数据集归一化至 1,000 kg | 验收记录、检验放行、发运记录、秤校准和质量核对 |
| `cp_waste_dispatch` | `structural_metal_fabrication` | 废钢、铝废料和废旧喷砂磨料 | 废物称重、容器、库存和联单记录 | 废物身份；材料/合金；污染；毛重/皮重/净重；期初/期末库存；承运方；去向；回收/处置路线 | 称量每批分类废物，并核对暂存库存 | kg | 每次外运；每月核对 | 与产品产出相同报告期 | 全部纳入制造和表面处理区域 | 外运质量加期末库存减期初库存；钢、铝和磨料废物分开；通过 `calc_reference_normalization` 归一化 | 称重单、废物联单、照片或分类检查和去向证明 |
| `cp_air_emissions` | `structural_metal_fabrication` | 直接化石源 CO2、NMVOC、NOx 和颗粒物 | 燃料、涂料、烟气测试、连续监测、捕集系统和因子记录 | 排放设备；燃料量；碳含量/因子；涂料质量；VOC 含量；烟气浓度；烟气流量；运行时间；粒径级别；捕集/销毁效率；区室 | 优先采用经校准直接监测；否则使用有记录的排放源特定物料平衡或因子计算 | kg; m3; mg/Nm3; Nm3; h | 连续、每批或适当的代表性测试；按月汇总 | 与产品产出相同报告期并覆盖代表性运行模式 | 每个纳入的燃烧、涂装、焊接、切割和喷砂排放源 | 各污染物单独计算；仅扣除有记录回收或销毁量；分配至正确受纳区室；通过 `calc_reference_normalization` 归一化 | 校准和烟气测试报告、供应商分析、因子来源、维护记录和治理设施运行日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 报告期数量 × 1,000 kg / 报告期合格产品净质量 | 经核对的原子流数量；合格产品质量 | 每 1,000 kg 参考产品数量 |  |
| `calc_electricity_mj` | `electricity_input` | 电力 MJ = 计量 kWh × 3.6 MJ/kWh | 经计量和分配的 kWh | 以 MJ 表示的电力 |  |
| `calc_metal_mass_balance` | 钢和铝路线 | 金属投入 = 合格产品金属 + 分类金属废物 + 退回金属 + 期末在制品/库存 − 期初在制品/库存 ± 有记录转移；调查并披露残余差值 | 材料接收、退回、产品组成、废物和库存记录 | 材料族平衡及未解释残差 |  |
| `calc_combustion_co2` | `fossil_co2_air` | 按每种燃料分别采用实测燃料量 × 供应商碳含量或已披露辖区 CO2 因子 × 适用氧化处理计算；不得加入上游燃料排放 | 燃料记录、供应商碳含量或因子、氧化基准 | 直接化石源 CO2 质量 |  |
| `calc_nmvoc` | `nmvoc_air` | NMVOC 排放 = 含溶剂产品质量 × 供应商 VOC 质量分数 − 有记录溶剂回收量 − 有记录 VOC 销毁量；明确处理保留或反应比例 | 产品领用、配方数据、回收和治理记录 | 排放至已声明空气区室的直接 NMVOC 质量 | `eu-jrc-stm-bref-2006` |
| `calc_stack_pollutant` | `nox_high_stack_air`; `particulate_matter_air` | 直接监测时，排放质量 = 浓度 × 标准化干烟气流量 × 运行时间并换算单位；否则采用已披露设备和污染物特定因子、实测活动量及治理效率 | 烟气测试或监测数据、烟气流量、小时、活动量、因子和治理性能 | 按物种/粒径和区室区分的直接污染物质量 | `eu-jrc-stm-bref-2006`; `uk-hse-welding-controls` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品及所有交换 | 每行保持一个具体流身份。匹配材料/合金、产品状态、流类型、属性、单位和环境区室；未解决 UUID 应保持为空，不得使用代理。 | 材质证明、供应商规范、已最终确定的 UUID 审核回执及清单中的未解决项 |
| `dq_temporal` | 前景数据 | 采用一个内部一致的报告期，通常为连续 12 个月或完整代表性生产批次。解释停产、开车和异常产品组合。 | 带日期的生产、表计、采购、库存、废物和排放记录 |
| `dq_mass_balance` | 钢和铝路线 | 按材料族核对从接收至合格产品、废物、退回量和库存变化的质量。调查未解释残差，不得静默强制归零。 | 经签署的质量平衡工作表及源记录交叉核验 |
| `dq_route` | 条件工序 | 对每项条件行，在路线适用时提供数值和证据；不适用时以图纸、工艺计划或场址证据记录 `not_applicable`。 | 路线矩阵、流转卡、作业指导书、供应商记录和过程声明 |
| `dq_completeness` | 场址边界 | 将场址总量与纳入工单核对，并披露排除项、共用表计分配、外协、返工、无组织排放和废物去向。 | 场址至产品核对和分配工作表 |
| `dq_representativeness` | 上游及直接数据 | 声明地理、技术、材料牌号/状态、数据年限和代理使用。不同加工、表面处理或结构性能状态的数据集未经调整不得比较。 | 数据集元数据、供应商 EPD/LCI 引用及代表性评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference_flow | 确认归一化 `reference_product` 输出精确等于 1,000 kg 合格产品净质量，且全部必需限定信息完整。 |  |
| `validation_rule_2` | inventory_completeness | 确认每项适用材料、耗材、能源、水、废物和直接排放均以一个原子行表示；公用工程、燃料、涂料、紧固件、废物或排放集合标签不得替代具体交换。 | `aisc-sti-fabricated-hss-epd-2022`; `eu-jrc-stm-bref-2006` |
| `validation_rule_3` | conditional_routes | 确认每项路线条件交换有采集/计算数量，或有与工艺计划及市场状态一致的 `not_applicable` 证据。 |  |
| `validation_rule_4` | mass_and_energy_reconciliation | 确认合格产品、金属投入、金属废物、退回量和库存变化按材料族平衡；确认电力/燃料总量与表计、发票及分配驱动量一致，并解释残差。 |  |
| `validation_rule_5` | boundary_and_double_counting | 确认上游投入数据集、场内工序和外协工序已披露且互斥；直接排放不含上游供应链排放。 | `aisc-sti-fabricated-hss-epd-2022` |
| `validation_rule_6` | flow_identity | 确认每个已存 UUID 仍为公开 state 100，并与所写英文和中文 baseName、流类型、分类、属性和单位组相符。七个未解决行的 UUID 在精确候选通过同等审核前保持为空。 |  |
| `validation_rule_7` | emissions | 确认每项空气排放的受纳区室、化学身份、粒径级别、计算因子、捕集/销毁效率以及直接/上游状态。 | `eu-jrc-stm-bref-2006`; `uk-hse-welding-controls` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 方法学审查及发布控制完成后作为 `secondary_dataset`；`background_dataset` |
| downstream_use | 用于钢铁或铝制结构体及结构体部件工厂大门数据的前景过程数据包，以及下游 process 或 lifecyclemodel 投影 |
| allowed_use | 材料/合金、牌号或状态、几何形状、制造路线、连接、表面处理、场址地理、期间、上游数据集和废物去向相符或经透明调整时的产品特定门到门建模 |
| excluded_use | 不同结构功能、承载力、设计寿命、产品几何、材料体系、表面状态或边界的未经调整比较；表示完整预制建筑物、吊装、安装、使用或寿命终结；替代未经加工钢厂或铝厂产品数据集 |
| required_metadata | 规范 PCR id；CPC 映射语境；参考产品及必需限定信息；报告组织、场址、地理和期间；材料及产品状态构成；纳入和外协工序；计量和分配覆盖；上游数据集身份；流 UUID 状态；废物去向 |
| required_quality_disclosure | 一手数据覆盖；质量和能源核对；分配驱动量及敏感性；路线特定适用性；计量和转换方法；未解决 UUID 及范围证据需求；数据年限、地理、技术和代理使用；排除项及不确定性 |
| update_trigger | 新的 TianGong 精确身份；新的兼容独立范围证据；产品范围、制造或表面处理技术、供应商数据集、分配、场址边界、法规、分类映射或报告期发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，*CPC Version 3.0 Structure*，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-04；缓存字节 SHA-256 `sha256:5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`） | CPC 42190 正式英文产品身份及分类范围 |
| `aisc-sti-fabricated-hss-epd-2022` | `dataset` | American Institute of Steel Construction 与 Steel Tube Institute，*Environmental Product Declaration: Fabricated Hollow Structural Sections*，声明编号 4789556099.103.1，2022-02-03，https://steeltubeinstitute.org/wp-content/uploads/2026/01/aisc_epd_fab-hss-1.pdf（检索于 2026-09-05；下载 PDF SHA-256 sha256:acdd62c1ad8b454474bf8475fbe022fdac456d76f179c518aeeb4aed7fef12c6） | 经核验原文的产品状态、过程分解、边界、制造投入、废料、数据采集及车间工时分配证据；未导入数值范围 |
| `aec-aluminium-fabrication-services` | `extension_guidance` | Aluminum Extruders Council，*The Role of AEC and its Members*，https://aec.org/role-aec-and-its-members（检索于 2026-09-04） | 经核验原文的铝材后续切割、机械加工、弯曲、焊接、装配及新加工废料证据 |
| `eu-jrc-stm-bref-2006` | `official_guidance` | European Commission Joint Research Centre，*Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics*，2006-08，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf（检索于 2026-09-04） | 经核验原文的表面处理顺序、水、能源、化学品、废水、废物、粉尘和空气排放采集范围；未导入经验范围 |
| `uk-hse-welding-controls` | `official_guidance` | 英国健康与安全执行局，*Controlling the risks from welding*，https://www.hse.gov.uk/Welding/welding-controls.htm（更新于 2026-06-09；检索于 2026-09-04） | 经核验原文的焊接烟尘来源、工艺/材料/耗材限定信息、抽风和治理披露，用于颗粒物清单 |
