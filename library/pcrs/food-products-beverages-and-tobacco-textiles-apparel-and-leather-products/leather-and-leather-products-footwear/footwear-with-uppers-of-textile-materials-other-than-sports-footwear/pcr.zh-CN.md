---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-with-uppers-of-textile-materials-other-than-sports-footwear
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鞋帮以纺织材料制成的鞋类，运动鞋除外

## 1. 范围与适用性

本 PCR 用于鞋帮以纺织材料制成且不属于运动鞋的成品鞋类前景制造数据包。成品归入 CPC 3.0 子类 29340 时，开趾或闭趾的非运动鞋类均可适用。数据包应声明具体产品款式、尺码基准、物料清单（BOM）、制造路线、场址和报告期。

默认前景边界始于鞋类制造场址接收外购成品材料和部件，止于合格成品鞋及其销售包装在工厂大门准备发运。报告场址内实施的部件生产应纳入；外购纺织品、聚合物、橡胶、胶黏剂、包装等投入的上游生产应连接上游数据集，不得隐含并入前景过程。

默认边界不包括 CPC 294 运动鞋、皮革鞋帮鞋类、鞋底和鞋帮均为橡胶或塑料的鞋类、归在 CPC 29340 以外的保护性金属鞋头鞋类、矫形鞋、滑冰靴、单独销售的鞋类部件、零售、使用、维修和生命末期。研究可另行建模下游阶段，但不得把扩展系统表述为本门到门前景数据包。

以下过程清单描述一条代表性胶粘休闲鞋路线：机织聚酯纤维鞋帮、聚酯纤维里料、橡胶外底、EVA 泡沫底部件和聚氨酯胶黏剂。合规数据包应按实际 BOM，用单一原子流卡替换或补充代表性 BOM 行；不得用复数材料族或路线选择器代替实际交换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-with-uppers-of-textile-materials-other-than-sports-footwear |
| classification_refs | CPC 3.0：29340，exact |
| covered_products | 鞋帮以纺织材料制成的成品鞋类，运动鞋除外 |
| excluded_products | 运动鞋；皮革鞋帮鞋类；橡胶或塑料鞋帮鞋类；CPC 29340 以外的保护性金属鞋头鞋类；矫形鞋；滑冰靴；单独销售的鞋类部件 |
| representative_product | 一双采用机织聚酯纤维鞋帮和胶粘橡胶外底的非运动闭趾休闲鞋 |
| production_route | 纺织鞋帮裁切与缝制；底部件制造或接收；楦制、胶黏剂活化、粘底、整理、检验与包装 |
| market_state | 鞋厂大门处、分销前的合格成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供鞋帮以纺织材料制成、保护足部免受地面影响并符合声明产品规格的非运动鞋类 |
| How much | 按产品 BOM 和声明参考尺码定义的一双鞋 |
| How well | 符合预期非运动用途、状态良好，并声明结构、尺码、质量规格和耐久性证据 |
| How long or cycle | 一次使用；当数据包用于完整生命周期研究时，另行声明产品使用寿命和使用次数 |
| reference_flow_link | 参考流是一双合格成品鞋的实测质量 `m_pair`（kg），不含可拆分销售包装；清单同时按双报告并按同一成品 1 kg 归一化 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | `m_pair` kg，即一双合格成品鞋的实测质量 |
| 参考产品流 | 鞋帮以纺织材料制成的鞋类，运动鞋除外 `f6098cff-2e83-4867-ace9-6b24b50b0ccd` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CPC 29340 确认；纺织鞋帮材料与结构；非运动预期用途；开趾或闭趾款式；成人/儿童/婴幼儿分组；男/女或中性尺码分组；参考尺码；不含销售包装的每双质量；外底和中底材料；里料；装配路线；制造场址和地域；报告期；产品质量规格；不合格鞋处理 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_pair_mass` | 一双合格成品鞋 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 整理和状态调节后称量完整左右脚一双鞋，不含可拆分销售包装；记录参考尺码和秤分度值，并用合格样本的算术平均值确定 `m_pair`。 |
| `pair_mass_conversion` | 双与质量报告的换算 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/双 | 每双清单除以 `m_pair` 得到每 kg 清单；保留 `m_pair`、样本数和参考尺码，使换算可逆。 |
| `component_mass_basis` | BOM 材料、部件、成品和固体废物 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录总投入、合格产品中所含质量、可回收边角料、不合格品和处置质量；当含水率或状态调节会显著改变质量时，声明湿基或干基状态。 |
| `energy_unit_preservation` | 电力和燃料投入 | 能量 | 电力用 kWh；燃料用 MJ | 保留计量单位与换算因子。不得把电力、外购热、蒸汽或燃料合并为一个清单交换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 成品材料和外购部件已在鞋类制造场址大门接收、识别并验收 |
| starting_condition_role | 鞋类部件准备和最终制造的门到门前景起点 |
| product_classification_scope | 仅限 CPC 3.0 子类 29340 |
| recursive_input_rule | 当前景系统投入半成品或成品 CPC 29340 鞋类时，将其记录为一个明确产品投入，连接其上游数据集，不在本 PCR 边界内递归重建同一类别。 |
| upstream_dataset_requirement | 每项外购材料、部件、能源载体、包装品和废物处理服务均需连接地域与技术代表性适当的上游数据集，或披露数据缺口。 |
| disclosure | 声明哪些部件制造在场内完成、哪些部件外购、所有委外制造、BOM 与参考尺码、工序与装配损耗处理、能源分配、不合格鞋去向、销售包装纳入情况以及每项排除过程。 |

### 规范性边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景鞋类制造 | 纳入外购投入接收和内部搬运、鞋帮裁切与缝制、适用时的场内底部件制造、楦制、胶粘或其他已声明的鞋底连接、整理、检验和包装，直至工厂大门合格产品。 | `afw-pefcr-v3-1-2025`; `oliver-footwear-manufacturing-2021`; `unido-ilo-footwear-1982` |
| `boundary_bom_and_losses` | 材料与部件核算 | 将制造分解为已声明的工序，逐工序记录 BOM 投入、制造剩余料、过程损耗、不合格品和合格产出；已有工序数据时不得用单一收率因子隐藏损耗。 | `afw-pefcr-v3-1-2025` |
| `boundary_purchased_inputs` | 外购材料与部件 | 将每项外购投入保留为原子产品流并连接上游数据集；仅当活动发生在报告边界内时，才纳入场内制造。 | `afw-pefcr-v3-1-2025`; `iso-14044-2006` |
| `boundary_exclusion_disclosure` | 排除和截断 | 报告每项被排除的可归属流、理由和预计影响；缺失数据保持为已披露缺口，不得按零处理。 | `afw-pefcr-v3-1-2025`; `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `upper_component_manufacturing` | 纺织鞋帮裁切、准备与缝制 | required | CPC 29340 鞋类始终纳入；委外作业用供应商特定前景数据或连接的上游过程表示。 | 前景部件制造 | 送入最终装配的缝制纺织鞋帮组件 kg |
| `bottom_component_manufacturing` | 底部件成型与准备 | conditional | 当外底、中底或内底制造或准备发生在报告场址时纳入；否则在最终装配中直接记录外购部件。 | 前景部件制造 | 各部件类型的合格底部件 kg |
| `final_assembly_and_packaging` | 楦制、胶粘、整理、检验与包装 | required | 始终纳入至工厂大门处的合格成品鞋。 | 前景最终制造 | 一双合格鞋及其 kg 实测产品质量 |

### 过程：纺织鞋帮裁切、准备与缝制（`upper_component_manufacturing`）

#### 输入

##### 产品流

###### 机织聚酯纤维鞋帮面料（`upper_polyester_fabric_input`）

记录代表性路线中裁成鞋帮外层片的染色机织聚酯纤维面料。采用其他纺织材料时，应按实际纤维和织物结构增加单独原子卡。

- 选定流：染色机织聚酯纤维面料
- 流属性/单位：质量 / kg
- 数量规则：发往鞋帮裁切的验收材料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品鞋输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 聚酯纤维里料（`upper_lining_fabric_input`）

记录发往鞋帮线的具体聚酯纤维里料。

- 选定流：针织聚酯纤维里料
- 流属性/单位：质量 / kg
- 数量规则：发往裁切和缝制的验收里料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品鞋输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 聚酯纤维缝纫线（`upper_sewing_thread_input`）

记录连接鞋帮片和里料片实际消耗的缝纫线。

- 选定流：聚酯纤维缝纫线
- 流属性/单位：质量 / kg
- 数量规则：期初库存加收入减期末库存，并与产品订单核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品鞋输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_materials`
- 来源：`unido-ilo-footwear-1982`

###### 热塑性聚氨酯鞋头定型片（`upper_toe_stiffener_input`）

当声明的非防护结构包含热塑性聚氨酯鞋头衬时记录；本流不是防护金属鞋头。

- 选定流：热塑性聚氨酯鞋头定型片
- 流属性/单位：质量 / kg
- 数量规则：纳入产品的验收鞋头定型片实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品鞋输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`unido-ilo-footwear-1982`

###### 鞋帮工序电力（`upper_electricity_input`）

记录裁切、边缘准备、缝制、局部抽风和可直接归属的鞋帮线辅助设备用电。

- 选定流：电力，中压
- 流属性/单位：能量 / kWh
- 数量规则：过程分表读数；无分表时，用有记录的机器运行时间和额定负荷分配场址电表读数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 缝制纺织鞋帮组件
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：`afw-pefcr-v3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 缝制纺织鞋帮组件（`stitched_textile_upper_output`）

只记录通过声明鞋帮检验并进入楦制的组件。

- 选定流：缝制纺织鞋帮组件
- 流属性/单位：质量 / kg
- 数量规则：转入最终装配的合格缝制鞋帮实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个鞋帮制造报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`oliver-footwear-manufacturing-2021`; `unido-ilo-footwear-1982`

##### 废物流

###### 聚酯纤维鞋帮裁切边角料（`upper_polyester_cutting_scrap_output`）

在去向记录中区分可用边角料、场内再用材料、场外回收材料和处置废料。

- 选定流：机织聚酯纤维面料裁切边角料
- 流属性/单位：质量 / kg
- 数量规则：按去向计量机织聚酯纤维鞋帮面料裁切废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 缝制纺织鞋帮组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`afw-pefcr-v3-1-2025`

###### 聚酯纤维里料裁切边角料（`upper_lining_cutting_scrap_output`）

里料废料与外层鞋帮面料废料分开记录。

- 选定流：针织聚酯纤维里料裁切边角料
- 流属性/单位：质量 / kg
- 数量规则：按去向计量针织聚酯纤维里料裁切废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 缝制纺织鞋帮组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`afw-pefcr-v3-1-2025`

##### 基本流

### 过程：底部件成型与准备（`bottom_component_manufacturing`）

#### 输入

##### 产品流

###### 丁苯橡胶混炼胶（`bottom_sbr_compound_input`）

仅当代表性合成橡胶外底在场内成型时记录。

- 选定流：丁苯橡胶混炼胶
- 流属性/单位：质量 / kg
- 数量规则：投入外底成型的验收混炼胶实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格橡胶外底输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 乙烯-醋酸乙烯共聚物泡沫片材（`bottom_eva_foam_input`）

将发往中底或内底裁切的 EVA 泡沫记录为一项具体材料投入。

- 选定流：乙烯-醋酸乙烯共聚物泡沫片材
- 流属性/单位：质量 / kg
- 数量规则：发往裁切的验收 EVA 泡沫实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格 EVA 底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 底部件工序电力（`bottom_electricity_input`）

记录本过程内混炼胶成型、裁切、修边和准备的用电。

- 选定流：电力，中压
- 流属性/单位：能量 / kWh
- 数量规则：过程分表电力，或有记录的场址电表分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：`afw-pefcr-v3-1-2025`

###### 外底硫化用天然气（`bottom_natural_gas_input`）

仅当场内直接燃烧天然气用于外底硫化或成型热时记录；不得与电力或外购热合并。

- 选定流：天然气
- 流属性/单位：低位热值 / MJ
- 数量规则：实测燃料体积按记录的低位热值换算并分配至外底线
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格橡胶外底输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：`afw-pefcr-v3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成型橡胶外底（`bottom_rubber_outsole_output`）

记录转入最终装配的合格丁苯橡胶外底。

- 选定流：丁苯橡胶外底
- 流属性/单位：质量 / kg
- 数量规则：合格外底实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个底部件报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`oliver-footwear-manufacturing-2021`

###### 裁切 EVA 中底（`bottom_eva_midsole_output`）

记录转入最终装配的合格 EVA 中底。

- 选定流：乙烯-醋酸乙烯共聚物泡沫中底
- 流属性/单位：质量 / kg
- 数量规则：合格 EVA 中底实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个底部件报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`afw-pefcr-v3-1-2025`

###### 裁切 EVA 内底（`bottom_eva_insole_output`）

记录转入最终装配的合格 EVA 内底。

- 选定流：乙烯-醋酸乙烯共聚物泡沫内底
- 流属性/单位：质量 / kg
- 数量规则：合格 EVA 内底实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个底部件报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`unido-ilo-footwear-1982`

##### 废物流

###### 橡胶外底修边废料（`bottom_rubber_scrap_output`）

按回收、资源化或处置去向分别记录丁苯橡胶修边料和不合格材料。

- 选定流：丁苯橡胶修边废料
- 流属性/单位：质量 / kg
- 数量规则：按去向计量丁苯橡胶修边料和不合格品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格橡胶外底输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`afw-pefcr-v3-1-2025`

###### EVA 泡沫裁切废料（`bottom_eva_scrap_output`）

将 EVA 中底和内底裁切料作为一种化学组成明确的废物流记录，并在底层记录中区分去向。

- 选定流：乙烯-醋酸乙烯共聚物泡沫裁切废料
- 流属性/单位：质量 / kg
- 数量规则：按去向计量 EVA 裁切料和不合格品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格 EVA 底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`afw-pefcr-v3-1-2025`

##### 基本流

### 过程：楦制、胶粘、整理、检验与包装（`final_assembly_and_packaging`）

#### 输入

##### 产品流

###### 缝制纺织鞋帮（`assembly_stitched_upper_input`）

记录进入楦制的合格缝制鞋帮，无论其为场内制造还是外购。

- 选定流：缝制纺织鞋帮组件
- 流属性/单位：质量 / kg
- 数量规则：发往最终装配的验收缝制鞋帮实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品鞋输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_materials`
- 来源：`oliver-footwear-manufacturing-2021`; `unido-ilo-footwear-1982`

###### 橡胶外底（`assembly_rubber_outsole_input`）

记录发往鞋底连接的验收丁苯橡胶外底。

- 选定流：丁苯橡胶外底
- 流属性/单位：质量 / kg
- 数量规则：发往最终装配的验收外底实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品鞋输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_materials`
- 来源：`oliver-footwear-manufacturing-2021`

###### EVA 中底（`assembly_eva_midsole_input`）

记录纳入成品鞋的验收 EVA 中底。

- 选定流：乙烯-醋酸乙烯共聚物泡沫中底
- 流属性/单位：质量 / kg
- 数量规则：发往最终装配的验收中底实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品鞋输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### EVA 内底（`assembly_eva_insole_input`）

记录纳入成品鞋的验收 EVA 内底。

- 选定流：乙烯-醋酸乙烯共聚物泡沫内底
- 流属性/单位：质量 / kg
- 数量规则：发往最终装配的验收内底实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品鞋输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_materials`
- 来源：`unido-ilo-footwear-1982`

###### 聚氨酯鞋用胶黏剂（`assembly_pu_adhesive_input`）

记录用于楦制或鞋底连接的配制聚氨酯胶黏剂；不得与清洗剂、底涂剂或整理剂合并。

- 选定流：聚氨酯鞋用胶黏剂
- 流属性/单位：质量 / kg
- 数量规则：期初库存加收入减期末库存和单独计量的回收胶黏剂，并与产品订单核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品鞋输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_final_assembly_materials`
- 来源：`simoes-footwear-adhesive-2024`; `oliver-footwear-manufacturing-2021`

###### 聚酯纤维鞋带（`assembly_polyester_shoelace_input`）

仅对系带款式记录聚酯纤维鞋带；无鞋带款式将本卡标为不适用，不得用其他扣合部件替代本流。

- 选定流：聚酯纤维鞋带
- 流属性/单位：质量 / kg
- 数量规则：纳入产品的验收鞋带实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品鞋输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_materials`
- 来源：`unido-ilo-footwear-1982`

###### 纸板鞋盒（`assembly_cardboard_box_input`）

纸板鞋盒与包裹薄页纸分开记录。

- 选定流：纸板鞋盒
- 流属性/单位：质量 / kg
- 数量规则：鞋盒实测单重乘以消耗数量，包含损坏鞋盒
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每双装入销售包装的合格成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 包裹薄页纸（`assembly_tissue_paper_input`）

薄页纸与鞋盒及任何塑料附件分开记录。

- 选定流：包裹薄页纸
- 流属性/单位：质量 / kg
- 数量规则：薄页纸实测单张质量乘以消耗张数，包含损坏薄页纸
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每双装入销售包装的合格成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 最终装配电力（`assembly_electricity_input`）

记录楦制、胶黏剂涂布与活化、压合、整理、检验和包装用电。

- 选定流：电力，中压
- 流属性/单位：能量 / kWh
- 数量规则：过程分表读数或有记录的场址电表分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品鞋输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_energy`
- 来源：`afw-pefcr-v3-1-2025`

###### 最终清洁自来水（`assembly_cleaning_water_input`）

仅当最终装配内实施水洗清洁时记录自来水；不得与废水合并。

- 选定流：自来水
- 流属性/单位：体积 / m3
- 数量规则：分表用水或按产品订单分配的批次体积记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品鞋输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_water`
- 来源：`iso-14044-2006`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### CPC 29340 成品鞋（`finished_footwear_output`）

这是唯一参考产品输出。记录整理和检验后的合格左右脚成双产品；可拆分销售包装不计入产品质量。

- 选定流：鞋帮以纺织材料制成的鞋类，运动鞋除外 `f6098cff-2e83-4867-ace9-6b24b50b0ccd`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：合格成品鞋每双实测质量 `m_pair`，同时保留双数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：工厂大门处一双合格成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_product`
- 来源：`un-cpc-3-0-2025`; `afw-pefcr-v3-1-2025`

##### 废物流

###### 固化聚氨酯胶黏剂废物（`assembly_pu_adhesive_waste_output`）

固化残余胶和不合格固化胶应与液态溶剂或清洗剂废物分开记录。

- 选定流：固化聚氨酯胶黏剂废物
- 流属性/单位：质量 / kg
- 数量规则：按处理去向计量收集的固化胶黏剂废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品鞋输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`simoes-footwear-adhesive-2024`

###### 废纸板鞋盒（`assembly_cardboard_waste_output`）

记录产品发运前损坏或丢弃的鞋盒；随产品发运的鞋盒不作为废物记录。

- 选定流：废纸板鞋盒
- 流属性/单位：质量 / kg
- 数量规则：按处理去向计量丢弃鞋盒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每双装入销售包装的合格成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`afw-pefcr-v3-1-2025`

###### 最终清洁废水（`assembly_cleaning_wastewater_output`）

仅当实施水洗清洁且废水跨越过程边界送往处理时记录。

- 选定流：鞋类最终清洁废水
- 流属性/单位：体积 / m3
- 数量规则：实测排放体积，或用水投入扣除有记录的蒸发和滞留量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品鞋输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_water`
- 来源：`iso-14044-2006`

##### 基本流

###### 排入空气的非甲烷挥发性有机物（`assembly_nmvoc_air_output`）

仅当使用含溶剂胶黏剂、底涂剂、清洗剂或整理剂时记录 NMVOC 直接排放；有条件时保留具体物质记录。

- 选定流：排入空气的非甲烷挥发性有机物
- 流属性/单位：质量 / kg
- 数量规则：报告期烟道或工作场所抽风测量、许可清单，或有记录的溶剂质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品鞋输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`simoes-footwear-adhesive-2024`; `iso-14044-2006`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 多产品或共享前景作业 | 存在独立计量时，先按工序线、产品订单、款式和报告期细分，再实施分配。 | `iso-14044-2006`; `afw-pefcr-v3-1-2025` |
| `allocation_process_driver` | 共享部件与制造过程 | 无法细分时采用 PEFCR 工序驱动：缝制和最终装配按件数分配；冲切、混炼胶成型、内底生产、底部件准备和整理按质量分配；声明分母和所有共生产出。 | `afw-pefcr-v3-1-2025` |
| `allocation_energy` | 共享场址电力和燃料 | 优先使用产品或生产线特定计量；否则按机器运行时间乘实测或额定负荷等有因果关系的驱动分配实测能源。仅有多场址电力数据时，用产量质量加权电力组合并披露局限。 | `afw-pefcr-v3-1-2025` |
| `allocation_recycling_no_credit` | 送往资源化的制造废料 | 报告废料质量与处理路线，不在本前景数据包内计入避免负担信用；循环足迹或替代处理属于下游生命周期模型，应另行声明。 | `afw-pefcr-v3-1-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference_product` | `final_assembly_and_packaging` | 成品参考产品 | 秤和生产记录 | 产品代码；CPC 确认；参考尺码；双数；每双或批次质量；秤编号；分度值；校准日期；不合格数 | 用校准秤称量并连接生产订单与终检放行 | kg 和双 | 每个实测样本或放行批次 | 代表性报告期，通常连续 12 个月 | 每个报告鞋类场址 | 合计合格质量与双数；计算平均 kg/双；排除包装和不合格品 | 秤校准；检验放行；产品规格；抽样记录 |
| `cp_bom_materials` | `upper_component_manufacturing`; `bottom_component_manufacturing` | 具体材料或部件投入 | BOM、收货、领料和库存记录 | 材料 id；化学或纤维身份；结构；供应商；收货总质量；领料质量；退料；期初库存；期末库存；批次；产品订单 | 用校准称量、发票、仓库领料和库存变化核对 BOM 与产品订单 | kg | 每个批次和产品订单 | 与产出相同期间，并进行库存核对 | 范围内每个场址和委外设施 | 消耗量 = 期初库存 + 收入 - 期末库存 - 有记录退料；各材料分开 | 供应商规格；发票；磅单；库存台账；BOM 版本 |
| `cp_final_assembly_materials` | `final_assembly_and_packaging` | 具体部件、胶黏剂或附件投入 | BOM、领料、库存和批次记录 | 部件 id；材料身份；领料数量或质量；期初库存；收入；期末库存；退料；产品订单 | 称量代表性部件，并将数量或库存变化与产品订单核对 | kg 和件数 | 每个产品订单，按月核对 | 与成品相同期间 | 每个最终装配场址 | 用实测部件单重将件数换算为质量；用库存平衡计算胶黏剂消耗；不得跨材料归组 | BOM；批次单；部件称量记录；胶黏剂库存台账 |
| `cp_packaging_materials` | `final_assembly_and_packaging` | 鞋盒或薄页纸投入 | 包装规格与领料记录 | 包装 id；材料；单重；领用量；发运量；损坏量；产品订单 | 称量包装单元并核对领用、发运和损坏数量 | kg 和件数 | 每个包装规格和产品订单 | 与包装产出相同期间 | 每个包装场址 | 单重乘消耗数量；鞋盒和薄页纸分开 | 包装规格；秤记录；包装日志 |
| `cp_process_energy` | `upper_component_manufacturing`; `bottom_component_manufacturing`; `final_assembly_and_packaging` | 电力或天然气投入 | 电表、发票和机器日志 | 仪表 id；期初和期末读数；能源载体；电压或热值；机器 id；运行时间；产品订单；分配分母 | 优先分表；否则核对公用事业发票并按有记录的过程驱动分配 | kWh 或 MJ | 连续计量或每班；按月核对 | 代表性报告期，通常连续 12 个月 | 每条工序线和场址 | 扣除有记录的非生产用能；各能源载体分别分配；按合格产出归一化 | 仪表校准；发票；机器日志；分配工作表；电力供应证据 |
| `cp_process_outputs` | `upper_component_manufacturing`; `bottom_component_manufacturing` | 合格中间产出 | 秤、转序与检验记录 | 中间品 id；材料；批次；质量；件数；合格/不合格；目标工序 | 转序时称量验收产出并与生产订单核对 | kg 和件数 | 每批 | 与投入和废物记录相同期间 | 每个部件制造场址 | 按原子中间产品合计合格转移质量 | 校准秤；转序单；检验记录 |
| `cp_waste_and_emissions` | `upper_component_manufacturing`; `bottom_component_manufacturing`; `final_assembly_and_packaging` | 具体固体废物或 NMVOC 排放 | 废物磅单、容器日志、处理凭证、测量、许可或溶剂平衡 | 废物 id；化学或材料身份；质量；去向；处理；日期；产品订单；实测 NMVOC；溶剂投入；滞留溶剂；回收溶剂 | 称量各废物流；采用实测排放或有记录的物质质量平衡，不得合并污染物 | kg | 每次收集或排放测量；按月核对 | 与生产相同期间 | 每个工序和场址 | 按原子废物或基本流及处理去向合计；核对材料平衡 | 磅单；持证处理凭证；测量报告；许可申报；质量平衡工作表 |
| `cp_process_water` | `final_assembly_and_packaging` | 自来水投入或最终清洁废水 | 水表、批次单和排放记录 | 水表 id；用水投入；批次体积；排放体积；蒸发；滞留水；产品订单 | 分表或批次体积记录；核对投入和排放 | m3 | 每批或每月水表读数 | 与生产相同期间 | 每个清洁作业和场址 | 仅分配可直接归属产品清洁的水；用实测排放或有记录的平衡计算废水 | 水表记录；批次单；排放记录；平衡核查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_pair_mass` | 参考流 | `m_pair = 合格成品鞋质量 / 合格双数`；排除包装和不合格鞋。 | 合格质量；合格双数 | kg/双 | `afw-pefcr-v3-1-2025` |
| `calc_reference_normalization` | 每项清单交换 | `归一化交换量 = 交换量 / 合格成品鞋质量`；归一化值乘 `m_pair` 得到每双量。 | 交换量；合格质量；`m_pair` | 每 kg 参考产品交换量和每双交换量 | `iso-14044-2006` |
| `calc_stock_balance` | 缝纫线、胶黏剂及其他库存管理投入 | `消耗量 = 期初库存 + 收入 - 期末库存 - 有记录退料 - 回收材料`；报告无法解释的差额。 | 期初库存；收入；期末库存；退料；回收材料 | 投入消耗质量 | `iso-14044-2006` |
| `calc_step_loss` | 各制造步骤中的每种材料 | `工序损耗率 =（材料投入 - 合格材料产出 - 实测可回收转移量）/ 材料投入`；同时报告质量和去向，不只报告百分比。 | 原子材料投入；合格产出；可回收转移；废物质量 | 工序特定材料损耗率和质量平衡 | `afw-pefcr-v3-1-2025` |
| `calc_energy_allocation` | 共享计量能源 | 按声明过程驱动分配各载体；机器时间分配为 `分配能源 = 共享实测能源 × 产品机器负荷小时 / 总机器负荷小时`。 | 仪表读数；机器时间；实测或额定负荷；产品订单 | 分配的 kWh 或 MJ | `afw-pefcr-v3-1-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和每项流 | 保留产品代码、CPC 29340 判定、材料或化学身份、流向、单位、场址、路线适用性、供应商和处理去向。数据缺口不等于零。 | 产品规格；BOM；供应商规格；流映射记录；废物凭证 |
| `dq_temporal` | 前景记录 | 使用一致的代表性期间，通常连续 12 个月；披露季节或生产活动覆盖范围，并将期初、期末库存与该期间核对。 | 报告期声明；带日期的仪表、发票、库存和生产记录 |
| `dq_geography_technology` | 场址和连接数据集 | 声明各制造地域和技术；连接数据集应代表实际材料、电力组合、过程技术和废物路线，否则披露代理局限。 | 场址清单；技术包；电力证据；数据集元数据；代理理由 |
| `dq_completeness` | BOM、能源、水、废物和排放 | 核对原子投入、产出、库存变化、过程损耗、不合格品和处理去向。明确报告缺失交换和排除项。 | 质量平衡工作表；生产核对；完整性检查表 |
| `dq_measurement` | 秤、仪表和计算 | 保留仪器身份、校准或核验、分辨率、抽样方法、分配分母、单位换算和公式版本。 | 校准证书；仪表记录；抽样计划；计算工作簿 |
| `dq_dqr` | 企业特定数据集 | 按 PEFCR 数据质量方法，在聚合前评估并报告技术、地域和时间代表性以及精度。 | DQR 工作表及支撑记录 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_category` | 参考产品身份 | 确认产出具有纺织材料鞋帮、不属于运动鞋，并归入 CPC 3.0 子类 29340；仅使用通用鞋类标签的数据包不合格。 | `un-cpc-3-0-2025` |
| `validate_reference_flow` | 功能单位与参考流 | 确认一双合格鞋、参考尺码、双数、实测 `m_pair`、质量 UUID、质量单位组 UUID、kg 参考单位及 Tiangong 产品流精确 UUID 均存在且相互一致。 | `afw-pefcr-v3-1-2025` |
| `validate_atomic_inventory` | 过程清单 | 确认每个选定流只是一项材料、部件、能源载体、废物或基本排放；拒绝复数集合、合并公用工程、路线选择器和“其他”交换。 | `iso-14044-2006` |
| `validate_process_coverage` | 前景边界 | 确认鞋帮裁切/准备/缝制及最终楦制/鞋底连接/整理/检验/包装均已表示；确认底部件制造已纳入，或由明确外购部件投入表示。 | `afw-pefcr-v3-1-2025`; `oliver-footwear-manufacturing-2021`; `unido-ilo-footwear-1982` |
| `validate_mass_balance` | 各含材料过程 | 核对原子材料投入与合格产出、可回收转移、库存变化、边角料、不合格品和其他损耗；调查无法解释的差额，不得强制闭合。 | `afw-pefcr-v3-1-2025`; `iso-14044-2006` |
| `validate_energy_allocation` | 电力和燃料 | 确认各能源载体分开，仪表期间与生产匹配，分配驱动有因果关系且可复现，并保留场址或供应组合证据。 | `afw-pefcr-v3-1-2025` |
| `validate_no_unsupported_range` | 清单数量元数据 | 确认未把单一案例值、上下限相同值、仅摘要数值或未经核验估算表示为经验范围；兼容证据不足时保留已披露的范围缺口。 | `iso-14044-2006` |
| `validate_bilingual_identity` | 中文版本 | 确认每个 UUID、process id、row id、受控 token、source id 和规范性 rule id 与英文源一致，参考流采用 Tiangong 精确中文 `baseName`。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 29340 鞋类门到门前景制造数据包 |
| downstream_use | `secondary_dataset`；评审和发布后可作 `background_dataset` |
| allowed_use | 当声明产品、路线、地域和期间匹配时，用于产品特定 LCA、产品碳足迹、PEF 对齐建模、供应商数据交换、过程改进，以及下游 process 或 lifecyclemodel 构建 |
| excluded_use | 运动鞋；皮革鞋帮或橡胶/塑料鞋帮鞋类；无证据类别平均；消费者使用或生命末期声明；方法不完整或未对齐的比较性声明；把缺失数据当作零 |
| required_metadata | PCR id 和版本；CPC 判定；产品款式与结构；纺织鞋帮身份；参考尺码与分组；每双质量；BOM；场址与地域；报告期；已纳入和外购过程；能源来源；分配；废物去向；数据缺口；来源和数据集版本 |
| required_quality_disclosure | DQR 准则；一次数据占比；测量和校准证据；抽样与时间覆盖；质量平衡残差；分配驱动；代理数据集；排除项；未解决 UUID；不合格鞋与废料处理 |
| update_trigger | BOM、鞋帮材料、鞋底系统、胶黏剂化学、部件采购、装配路线、场址、电力供应、分配方法、废物处理、参考流身份、分类范围或证据合同发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | 联合国统计司：《Central Product Classification (CPC), Version 3.0, Explanatory Notes》，子类 29340，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期：2026-08-20）。 | 精确类别范围与排除项 |
| `afw-pefcr-v3-1-2025` | official_guidance | 服装与鞋类产品环境足迹类别规则技术秘书处：《Product Environmental Footprint Category Rules: Apparel and Footwear》，Version 3.1，2025-04-29，有效期至 2027-12-31。https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/（已通过 https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf 核验 PDF 原文；检索日期：2026-08-20）。 | 功能单位；精确鞋类子类覆盖；BOM；制造边界与过程分解；损耗；分配；电力；采集；DQR；包装 |
| `iso-14040-2006` | standard | ISO 14040:2006，《Environmental management — Life cycle assessment — Principles and framework》。https://www.iso.org/standard/37456.html（检索日期：2026-08-20）。 | LCA 与 LCI 框架 |
| `iso-14044-2006` | standard | ISO 14044:2006，《Environmental management — Life cycle assessment — Requirements and guidelines》。https://www.iso.org/standard/38498.html（检索日期：2026-08-20）。 | 目标与范围、清单、分配、数据质量、报告与校验框架 |
| `oliver-footwear-manufacturing-2021` | literature | Oliver, G., Gil, P., Gomez, J.F. 等：《Towards footwear manufacturing 4.0: shoe sole robotic grasping in assembling operations》，International Journal of Advanced Manufacturing Technology 114, 811–827 (2021)。https://doi.org/10.1007/s00170-021-06697-0。 | 同行评审全文核验裁切、缝制、楦制/定型、胶黏剂涂布、鞋底装配、压合和整理工序 |
| `unido-ilo-footwear-1982` | handbook | UNIDO 与 ILO：《Small-scale Manufacture of Footwear》，Technical Memorandum No. 2，1982。https://www.unido.org/publications/ot/9648584/pdf（检索日期：2026-08-20）。 | 原文核验工序序列、部件身份、楦制、胶粘、整理、检验和包装 |
| `simoes-footwear-adhesive-2024` | literature | Simões, C.L., Aguiar, A., Marques, A.C. 等：《Environmental assessment of an innovative adhesive for the footwear industry: road map for product development》，International Journal of Life Cycle Assessment 29, 1264–1278 (2024)。https://doi.org/10.1007/s11367-024-02314-w。 | 同行评审全文支持把聚氨酯胶黏剂作为鞋类工业的单独投入并关注溶剂相关清单 |
