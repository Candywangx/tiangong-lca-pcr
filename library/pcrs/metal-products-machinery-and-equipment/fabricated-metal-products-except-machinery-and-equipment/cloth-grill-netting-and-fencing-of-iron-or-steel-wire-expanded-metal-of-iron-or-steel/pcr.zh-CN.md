---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.cloth-grill-netting-and-fencing-of-iron-or-steel-wire-expanded-metal-of-iron-or-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 钢铁丝制的布、格栅、网及围栏；网眼钢铁板

## 1. 范围与适用性

本 PCR 适用于钢铁丝布、焊接或编织格栅与网、非带刺钢丝围栏，以及钢铁板材经扩张加工而成的网眼钢铁板的工厂门生产。范围包括凸起型或压平型网眼钢铁板，以及以板、片或卷状交付的产品。申报产品可以采用碳钢、合金钢或不锈钢，也可以不涂覆或采用金属镀层，但必须披露相应限定信息。

前景边界从钢铁原料跨越生产场址边界开始，到合格产品以及单独识别的废物流和直接基本流离开该边界为止。场址内实际进行时，应包括拉丝、机械或酸洗表面预处理、编织、打结、电阻焊接、切缝扩张、压平或压延、裁切、卷绕、热处理、镀锌和精整。

本 PCR 不包括铜、铝、塑料或纺织材料制网、带刺铁丝、电气绝缘线、安装或围栏服务、使用、维护及生命终期。外购钢材、锌、化学品、电力、水和燃料的上游生产由上游数据集表示，不得在前景清单中重复建立。可拆卸运输包装不计入参考产品净质量；若申报数据集边界纳入包装，应另行建模。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.cloth-grill-netting-and-fencing-of-iron-or-steel-wire-expanded-metal-of-iron-or-steel |
| classification_refs | CPC 3.0：42943（精确分类语境；映射接受另按治理流程决定） |
| covered_products | 钢铁丝布；焊接或编织格栅与网；非带刺钢丝围栏；凸起型或压平型网眼钢铁板 |
| excluded_products | 带刺铁丝；铜丝网或铝丝网；塑料网或纺织网；电气绝缘线；安装服务；主要功能超出本产品边界的成套制品 |
| representative_product | 以板、片或卷状交付的工厂门钢丝网或网眼钢铁板 |
| production_route | 钢丝路线：以外购盘条或钢丝为原料，按路线进行拉丝、编织、打结或电阻焊接；网眼钢铁板路线：平板钢板或钢卷经切缝扩张并可选压平；两条路线均可包括裁切、卷绕、热处理、镀锌和精整 |
| market_state | 工厂门合格干燥产品，可为未涂覆或已申报涂层状态，以板、片或卷状交付；可拆卸包装不计入产品净质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为已申报的筛分、分离、防护、增强或围栏功能供应钢铁丝网、格栅、非带刺围栏或网眼钢铁板 |
| How much | 1 kg 工厂门合格产品净质量 |
| How well | 满足已申报的产品系列、钢材牌号、结构、孔径或网孔几何、丝径或梗条尺寸、表面精整或涂层、尺寸公差及适用客户规范 |
| How long or cycle | 一次工厂门交付；本从摇篮到大门的参考不涵盖使用寿命和使用循环 |
| reference_flow_link | 生产批次按合格产品净产出归一化后，参考数量为 1 kg `reference_product_output` 流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 金属丝网 `f225c346-5bf4-489e-9342-9e1dcedca6ae` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品系列（`wire_cloth`、`welded_grill_or_netting`、`woven_or_knotted_netting_or_fencing` 或 `expanded_metal`）；铁或钢牌号及合金类别；丝径或板厚；孔径、网孔或梗条几何；焊接、编织、打结、凸起或压平结构；涂层材料和涂层状态；板、片或卷交付形式；产品净质量；生产路线和起始原料状态；生产场址和地域；参考期；再生成分声明依据；所纳入的精整工序 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及质量计量清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用合格产品的干基净质量。不计可拆卸包装、托盘、载具和未回收过程废钢。若水分或残留过程液体对交付状态有实质影响，应予报告。 |
| `area_to_mass` | 以面积记录的生产或销售数据 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅可使用与合金、丝径或梗条尺寸、孔径和涂层相匹配的批次或产品实测单位面积质量，将 m2 换算为 kg。不得使用产品类别通用默认换算值。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 按交付点保留计量电力，并按 1 kWh = 3.6 MJ 换算；披露电压等级、电网地域以及是否纳入变压或场内配电损失。 |
| `gas_volume` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按已说明温度和压力参考条件记录计量气体体积。仅可使用同一期间的实测或供应商特定热值换算为能量。 |
| `solution_mass` | 30% 盐酸及其他外购溶液 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录外购溶液质量及其浓度。不得把有效酸质量当作外购产品质量报告。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 钢铁原料以热轧盘条、拉制钢丝或未扩张平板钢板/钢卷状态进入前景场址；必须申报所选状态及任何既有涂层 |
| starting_condition_role | 路线特定成形与精整过程的上游产品输入 |
| product_classification_scope | 语义上属于钢铁丝布、格栅、网、非带刺围栏或网眼钢铁板的工厂门产品；CPC 3.0 代码 42943 仅为分类语境，并不拥有规范性身份 |
| recursive_input_rule | 已属于本 PCR 产品类别的外购输入（如送来涂覆的预成形网）仍作为带有自身上游数据集的产品输入；不得重建其生产，也不得将其计作新钢材原料 |
| upstream_dataset_requirement | 每项外购钢材形态、锌、化学品、电力、水、燃料及同类别中间品均应关联与地域、技术、牌号和交付状态相适配的上游数据集 |
| disclosure | 申报产品系列、起始原料状态、拉丝为一体化还是外购、网形成技术、网眼钢铁板几何、表面预处理路线、涂层路线、精整工序、废钢回收边界、废水或槽液处理边界、包装纳入情况、场址、地域和参考期 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_site_gate` | 所有前景数据集 | 纳入从接收已申报钢铁原料到工厂门合格产品之间在场址内实际进行的全部路线特定工序，以及相关场址公用工程、化学品、废物和直接排放。 | usitc-standard-steel-welded-wire-mesh-2021; eu-jrc-ferrous-metals-processing-2022; ppg-expanded-metal-process-2018 |
| `boundary_upstream_inputs` | 外购材料和能源 | 外购输入的生产和交付通过上游数据集表示；不得在前景清单中重复这些上游过程。 |  |
| `boundary_actual_exchanges` | 未列明的场址交换 | 下文未明确列出的每项实际场址交换，均应作为化学或物理上具体的产品流、废物流或基本流单独添加；不得用公用工程、化学品、废物或排放总类代替。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `route_specific_fabrication` | 路线特定成形、制网、精整与包装 | required | 选择并申报一个覆盖的产品系列，仅记录前景场址实际执行的路线工序 | 前景生产 | 合格工厂门产品净质量（kg） |

### 过程：路线特定成形、制网、精整与包装（`route_specific_fabrication`）

本过程将相互衔接的场址工序汇总，以免虚构带 UUID 的内部中间品。数据集必须保留足以区分拉丝、焊接或编织、切缝扩张、压平、热处理、镀锌和精整的分表、批次和运行记录。

#### 输入

##### 产品流

###### 热轧低碳钢盘条（`steel_wire_rod_input`）

仅在前景场址内拉丝时记录该输入。由于没有 state-100 候选通过双语身份审核，UUID 保持未解决。

- 选定流：热轧低碳钢盘条
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放至覆盖生产批次的实测入库质量，并扣除库存变化和退库材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：usitc-standard-steel-welded-wire-mesh-2021; eu-jrc-ferrous-metals-processing-2022

###### 外购拉制钢丝（`steel_wire_input`）

记录为编织、打结、焊接或围栏生产跨越场址边界的外购钢丝。不得将本行用于场内拉制的盘条。

- 选定流：钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放至覆盖生产批次的实测入库质量，并扣除库存变化和退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：usitc-standard-steel-welded-wire-mesh-2021

###### 未扩张平板钢板或钢卷（`steel_sheet_input`）

仅针对网眼钢铁板路线记录该平板钢材原料。公共钢板候选的双语材料或形态身份存在冲突，因此 UUID 保持未解决。

- 选定流：未扩张平板钢板或钢卷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放至切缝扩张生产的实测入库质量，并扣除库存变化和退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：ppg-expanded-metal-process-2018

###### 外购电力（`electricity_input`）

记录为边界内拉丝、焊接、编织、扩张、压平、裁切、卷绕、泵送、通风和精整而通过场址电表的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：由分表工序或有记录的批次分配获得计量电力，并换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：usitc-standard-steel-welded-wire-mesh-2021; ppg-expanded-metal-process-2018

###### 拉丝润滑油（`lubricating_oil_input`）

仅在场址采用油基拉丝润滑时记录跨越边界的新鲜润滑油。申报配方；若回收油离开边界，应另行核算。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采购质量 + 期初库存 - 期末库存 - 有记录且返回使用的回收油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：eu-jrc-ferrous-metals-processing-2022

###### 30% 盐酸（`hydrochloric_acid_30_input`）

仅在 30% 盐酸作为外购产品跨越边界并用于场内酸洗时记录。其他酸种或外购浓度必须分别设置产品流行。

- 选定流：盐酸 `56414d25-a353-4d67-b362-87212ce6011d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 外购溶液
- 数量规则：采购溶液质量 + 期初库存 - 期末库存 - 场外退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：eu-jrc-ferrous-metals-processing-2022

###### 镀锌用锌金属（`zinc_metal_input`）

仅在前景边界内进行热浸镀锌时记录锌金属。申报锌品级，并将其他合金添加物拆分成各自的独立行。

- 选定流：特高纯锌金属 `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：锌采购量 + 镀槽期初库存 - 镀槽期末库存 - 场外退回量 - 单独计量的可回收含锌输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：eu-jrc-ferrous-metals-processing-2022

###### 工艺用水（`process_water_input`）

记录用于水洗、漂洗、配槽或直接过程冷却且跨越场址边界的工艺用水。不计非过程卫生用水，也不得重复计算内部循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：跨越前景边界的计量或槽罐平衡补充水，不包括内部循环量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meter`
- 来源：eu-jrc-ferrous-metals-processing-2022

###### 气态天然气（`natural_gas_input`）

仅记录用于前景边界内场内燃烧加热、干燥、热处理或镀锌槽加热的天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按已申报参考条件计量的体积，并采用分表或有记录的批次分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：eu-jrc-ferrous-metals-processing-2022

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格金属丝网或网眼钢铁板（`reference_product_output`）

记录经路线特定成形和全部纳入精整后的合格产品净质量。所选 Tiangong 中英文 baseName 仅作为数据库显示身份，仍须保留更完整的申报产品限定信息。

- 选定流：金属丝网 `f225c346-5bf4-489e-9342-9e1dcedca6ae`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：合格产品实测净产出，归一化为恰好 1 kg 参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_waste_mass`
- 来源：un-cpc-3-0-structure-2025

##### 废物流

###### 工业后钢废料（`steel_scrap_output`）

记录离开前景边界的钢材边角料、修边料、不合格件和其他分类收集的工业后钢废料。场内直接返工或回炉的材料不得作为外部输出。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离场称重质量，经有记录的库存变化调整，并排除场内返工成合格产品的材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_waste_mass`
- 来源：usitc-standard-steel-welded-wire-mesh-2021; ppg-expanded-metal-process-2018

###### 废盐酸钢材酸洗液（`spent_pickling_liquor_output`）

仅在采用盐酸酸洗且废槽液跨越前景边界时记录该具体废物。漂洗废水和其他酸必须另设独立行。

- 选定流：废盐酸钢材酸洗液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移至场外或单独建模处理过程的废槽液称重或计量质量，扣除返回酸洗槽的再生液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_waste_mass`
- 来源：eu-jrc-ferrous-metals-processing-2022

###### 镀锌浴锌渣（`zinc_dross_output`）

仅在锌渣从场内镀锌浴单独清出并离开前景边界时记录。不得与锌灰、钢废料、污泥或废水合并。

- 选定流：镀锌浴锌渣
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：从镀槽清出并跨越场址或处理边界的分类锌渣称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_waste_mass`
- 来源：eu-jrc-ferrous-metals-processing-2022

##### 基本流

###### 直接化石源二氧化碳（`fossil_co2_output`）

仅记录前景边界内场内燃烧装置直接排放至空气的化石源二氧化碳。不包括电网上游或外购燃料生产排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至纳入燃烧装置和生产批次的场址烟气或排放系统记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：eu-jrc-ferrous-metals-processing-2022

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | 混合产品系列或差异显著的路线 | 优先按钢丝网与网眼钢铁板路线以及涂覆与未涂覆生产设置独立计量、批次记录和过程细分。已有路线分辨记录时，不得分配未区分的全厂总量。 |  |
| `allocation_shared_operations` | 共用电力、天然气、水和精整工序 | 使用与消耗存在因果关系且有记录的物理驱动因素分配共用工序，如机器时间、计量能量、槽液处理量或加工质量。报告驱动因素和分配系数；仅在不存在合理物理关系时采用经济分配，并披露敏感性检验。 |  |
| `allocation_scrap` | 工业后钢废料和含锌输出 | 将单独计量的废物输出记录为前景交换，不计避免负担收益。若研究在下游采用回收、替代或共产品处理，应在实测前景交换之外报告其建模选择、边界、系数和敏感性。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `route_specific_fabrication` | `steel_wire_rod_input`; `steel_wire_input`; `steel_sheet_input`; `lubricating_oil_input`; `hydrochloric_acid_30_input`; `zinc_metal_input` | 采购、地磅、库房、镀槽库存和领料记录 | 材料身份；合金/牌号；形态；涂层状态；溶液浓度；供应商；入库质量；期初库存；期末库存；退料；批次 id | 将收货与库房或镀槽库存核对至每个申报批次的材料领用量 | kg | 每次收货和每批次；按月或生产批次汇总 | 至少连续 12 个代表性月份，或有理由说明的完整较短批次 | 服务于申报产品的全部前景生产线和库房 | 收货量 + 期初库存 - 期末库存 - 场外退回量；仅分配至申报批次的材料 | 经校准秤记录；发票；批次证书；库存核对；浓度证书；异常日志 |
| `cp_energy_meters` | `route_specific_fabrication` | `electricity_input`; `natural_gas_input` | 公用工程账单、总表、分表和运行小时记录 | 仪表 id；期初读数；期末读数；单位；天然气参考条件；生产线；运行小时；批次 id | 优先采用路线和生产线分表；否则用有记录的因果运行数据分配经核对的总表平衡 | kWh、MJ 或 m3 | 连续或每班读数；按月核对 | 与产品产出相同期间，通常至少 12 个代表性月份 | 全部纳入场址工序和有记录的辅助负荷 | 净输入减去单独计量的输出；kWh 换算为 MJ；按披露驱动因素分配共用消耗 | 仪表校准；账单核对；分表覆盖率；停机和缺失数据日志 |
| `cp_water_meter` | `route_specific_fabrication` | `process_water_input` | 水表、槽罐液位、补水日志和生产记录 | 水源；仪表 id；期初和期末读数；槽罐库存变化；循环量；排放量；批次 id | 计量跨越边界的新鲜工艺补充水，并核对槽罐库存变化 | kg，或以实测密度换算的 m3 | 每日或每批；按月核对 | 与产品产出相同期间 | 路线纳入的水洗、漂洗、配槽和直接过程冷却 | 新鲜输入 + 期初库存 - 期末库存 - 有记录的场外退回量；不得重复计内部循环 | 仪表校准；槽罐核对；水源和水质记录；体积换算时的密度记录 |
| `cp_output_and_waste_mass` | `route_specific_fabrication` | `reference_product_output`; `steel_scrap_output`; `spent_pickling_liquor_output`; `zinc_dross_output` | 成品秤、批次记录、废物转移联单、槽罐转移和回收记录 | 产品系列；牌号；几何；涂层；合格质量；不合格质量；废钢质量；废液质量；锌渣质量；库存变化；去向；批次 id | 称量合格产出和每种分类废物；无法称量时计量槽罐转移 | kg | 每批或每次装运；按月核对 | 与材料和能源输入相同期间 | 服务于申报产品的全部纳入生产线、精整区和废物储存区 | 分别汇总产品净质量及每项具名输出；扣除有记录的退回和场内返工；清单归一化至 1 kg 合格产出 | 经校准秤或仪表；检验放行；废物联单；库存核对；场内返工日志 |
| `cp_direct_emissions` | `route_specific_fabrication` | `fossil_co2_output` | 连续排放、烟气测试或场址排放记录 | 排放源 id；燃料源；测量方法；浓度或质量速率；流量；运行时间；批次 id | 使用纳入场内燃烧源的直接监测或有记录的场址排放数据 | kg | 连续、测试批次或与生产匹配的报告期 | 与燃料和产品产出相同期间 | 仅纳入场内燃烧装置 | 汇总各排放源直接化石源二氧化碳，并按装置实测产量或有记录的因果驱动因素分配 | 仪器校准；烟气测试报告；排放源与燃料核对；缺失数据处理 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | 每个清单行 | 归一化量 = 批次交换量 / 批次合格产品净质量 | 交换量；来自 `cp_output_and_waste_mass` 的合格产品净质量 | 每 1 kg 参考产品的交换量 |  |
| `calc_area_conversion` | 以面积计量的产出或销售记录 | 产品质量 = 实测产品面积 × 批次特定实测单位面积质量；单位面积质量试样必须匹配合金、丝径或梗条尺寸、孔径、结构和涂层 | 面积；匹配的单位面积质量实测值 | 合格产品质量（kg） |  |
| `calc_campaign_mass_reconciliation` | 钢和含锌材料平衡 | 核对输入、合格产出、库存变化、场内返工、钢废料、含锌废物及其他单独具名输出；调查而非强制平衡无法解释的差额 | 材料收货；产出称重；废物称重；库存和返工记录 | 已披露的批次质量平衡差额 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 每个汇总批次均保留申报产品系列、合金、几何、结构、精整、涂层、交付形式和适用规范。 | 产品规范、检验放行、批次流转单和成品记录 |
| `dq_temporal_alignment` | 所有前景交换 | 输入、输出、废物和直接排放采用同一代表期间；披露停产、非典型批次及任何短于 12 个月的期间。 | 仪表期间、生产日历、批次核对和异常日志 |
| `dq_completeness` | 场址清单 | 核对主要钢材输入和输出，并记录每项省略、估算或未计量交换。实际路线特定化学品、涂层、废物和排放均作为独立原子行添加。 | 质量平衡差额、公用工程核对、废物台账和完整性清单 |
| `dq_upstream_match` | 外购产品和能源输入 | 选择与材料牌号或化学品浓度、生产地域、交付状态、电力电压与电网、天然气参考条件和运输边界相匹配的上游数据集。 | 供应商证书、发票、上游数据集元数据和匹配记录 |
| `dq_uuid_review` | Tiangong 关联流 | 发布前确认公共 state code 100、中英文 baseName、流类型、分类、属性、单位组和产品状态；未解决行保持 UUID 为空，不得用代理替代。 | 直读身份审核和未解决审查元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考产品 | 核验报告的参考产出恰为 1 kg 合格产品净质量，且所有必需限定信息齐全。 | un-cpc-3-0-structure-2025 |
| `validation_route_consistency` | 过程路线和条件行 | 核验仅在已申报路线和场址工序适用时纳入盘条、外购钢丝、平板钢材、拉丝润滑油、酸洗用酸、锌、工艺水、天然气、废酸洗液、锌渣和直接二氧化碳；零值或省略必须有不适用证据。 | usitc-standard-steel-welded-wire-mesh-2021; eu-jrc-ferrous-metals-processing-2022; ppg-expanded-metal-process-2018 |
| `validation_mass_balance` | 材料输入和输出 | 核验钢和含锌输入、合格产品、库存变化、场内返工、废钢、锌渣、废液及其他具名输出的批次质量核对；调查并披露差额。 |  |
| `validation_boundary` | 前景及上游数据集 | 核验每项场址工序和直接交换仅纳入一次，外购输入生产通过上游关联而不重复，且同类别中间品遵守递归输入规则。 |  |
| `validation_atomic_flows` | 清单完整性 | 拒绝合并的公用工程、燃料、化学品、废物、排放或包装集合；每项实际交换必须是具有自身属性、单位、数量规则和路线条件的一个具体流。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景生产数据集，经审查后可作为 `secondary_dataset` 或 `background_dataset` 发布 |
| downstream_use | 已申报钢铁丝网、网、围栏、格栅或网眼钢铁板产品的从摇篮到大门过程数据集和生命周期模型 |
| allowed_use | 在必需限定信息、边界、时间覆盖、技术和地域具有实质代表性时，用于本 PCR 范围内产品和路线 |
| excluded_use | 带刺铁丝；非钢制网；安装服务；使用或生命终期；合金、几何、涂层、路线或参考质量未披露的产品；未经代表性审查在钢丝网和网眼钢铁板路线之间替代 |
| required_metadata | PCR id；产品系列；合金和牌号；再生成分依据；几何和结构；涂层和精整；交付形式；路线；起始原料状态；纳入工序；场址和地域；参考期；分配方法；上游数据集选择；未解决或估算交换 |
| required_quality_disclosure | 仪表和秤覆盖率；材料平衡差额；分表分配；时间完整性；批次产品加权；缺失数据处理；废物和排放覆盖；UUID 审核状态；偏离本 PCR 的情况 |
| update_trigger | 产品系列、合金、几何、成形或连接技术、涂层路线、起始原料、再生成分声明、场址能源或水系统、分配驱动因素、废物处理、地域发生变化，或数据超过申报代表性期间 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC Version 3.0 structure》，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05；缓存字节 SHA-256：`5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`） | CPC 42943 精确分类身份及所含材料/产品措辞 |
| `china-customs-hs-7314-zh-2022` | `official_guidance` | 中华人民共和国海关总署，2022 年第 32 号公告，HS 品目 7314 术语；香港工业贸易署转载。https://www.tid.gov.hk/en/tradecircular/files/2022/ci2022308a.pdf（检索日期：2026-09-05；下载字节 SHA-256：`e0a578406620d8a3a38027a915627b1140629f8d104a2a6ac1fdf3481970f1e5`） | 钢铁丝制布、网、篱、格栅及网眼钢铁板的专业中文术语 |
| `usitc-standard-steel-welded-wire-mesh-2021` | `official_guidance` | 美国国际贸易委员会，《Standard Steel Welded Wire Mesh from Mexico》，Publication 5175，2021 年 4 月。https://www.usitc.gov/sites/default/files/publications/701_731/pub5175.pdf（检索日期：2026-09-05） | 盘条拉制或轧制、电阻焊接、裁切、卷绕、产品身份及钢丝路线过程分解 |
| `eu-jrc-ferrous-metals-processing-2022` | `official_guidance` | 欧盟委员会联合研究中心，《Best Available Techniques (BAT) Reference Document for the Ferrous Metals Processing Industry》，JRC131649，2022，DOI 10.2760/196475。https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry（检索日期：2026-09-05） | 拉丝、预处理、酸洗、镀锌、热处理、精整及条件性前景工序 |
| `ppg-expanded-metal-process-2018` | `extension_guidance` | PPG Aerospace/Dexmet，《Slit and Stretch: How Expanded Metals Are Made》，2018-06-01。https://www.ppg.com/en-US/aerospace/support/articles/slit-and-stretch-how-expanded-metals-are-made（检索日期：2026-09-05） | 网眼钢铁板用板材输入、切缝扩张、压延或压平、裁切及可选二次精整 |
