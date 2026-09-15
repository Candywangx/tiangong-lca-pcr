---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.coaxial-cable-and-other-coaxial-electric-conductors
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 同轴电缆及其他同轴电导体

## 1. 范围与适用性

本 PCR 适用于同轴电缆及其他同轴电导体制造的前景数据包：内导体与外导体或屏蔽层基本共轴，并由介电层隔开。范围包括以电缆状态在制造厂门交付的通信、射频、辐射型、仪表及类似同轴结构。

代表性路线采用铜线材作为中心导体和编织层、聚乙烯作为介电层、带聚对苯二甲酸乙二醇酯背衬层的铝箔材作为箔屏蔽，并采用聚氯乙烯，PVC 作为护套。生产者应按实际结构，以单独的原子流替换或扩展这些材料行；代表性材料组合不是默认物料清单。

本范围不包括非同轴绝缘电线、平衡对绞电缆、无同轴电导体的纯光纤电缆、连接器和端接电缆组件、完整阵列间或其他已安装电缆系统，也不包括分销、安装、使用、维护和报废阶段。发运线盘、托盘、缠绕膜及其他交付包装位于所声明参考产品边界之外，必须披露该排除项。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.coaxial-cable-and-other-coaxial-electric-conductors |
| classification_refs | CPC 3.0：46320，同轴电缆及其他同轴电导体 |
| covered_products | 以未端接电缆状态供应的同轴通信、射频、辐射型、仪表及类似同轴电导体 |
| excluded_products | 非同轴绝缘电线；平衡对绞电缆；纯光纤电缆；连接器；端接电缆组件；已安装电缆系统；未按同轴电导体结构声明的直流电力电缆 |
| representative_product | 1 m 连续、未端接的铜/PE/铝-PET/铜编织/PVC 同轴电缆 |
| production_route | 一体化导体制备、介电层挤出、箔与编织屏蔽、护套挤出、印字、在线试验及收线 |
| market_state | 制造厂门的合格成品电缆，发运包装、分销、安装和使用之前 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 通过同心导体实现所声明信号、射频、辐射或仪表传输功能的同轴电导体成品 |
| How much | 1 m 连续合格电缆 |
| How well | 满足所声明产品规范中关于结构、特性阻抗、指定频率衰减、屏蔽设计或覆盖率以及适用电气、机械、环境和阻燃试验的要求 |
| How long or cycle | 仅制造厂门输出；使用寿命不在本 PCR 范围内，也不得由参考流暗示 |
| reference_flow_link | 下表参考产品流的 1 m |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 m |
| 参考产品流 | 电缆 `d698551c-0dbf-44d4-8045-c5797a1af141` |
| 参考流属性 | 长度 `838aaa23-0117-11db-92e3-0800200c9a66` |
| 参考单位组 | 长度 `838aaa22-0117-11db-92e3-0800200c9a66` |
| 参考单位 | m |
| 必需限定信息 | 产品与结构标识；预定同轴应用；内导体材料、镀层及几何结构；介电材料及发泡或实心状态；外导体和屏蔽材料及结构；护套材料；单位长度电缆质量；特性阻抗；衰减值和试验频率；适用时的屏蔽覆盖率或转移阻抗声明；适用时的额定电压和远程供电功能；适用时的辐射型电缆状态；制造地域；生产技术；数据期；厂门状态和发运包装排除项 |

构建前景数据包时，`必需限定信息` 中的每一项均应在数据集元数据、产品说明、过程说明、参考流备注或等效字段中声明。缺失任一项时，该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_length` | 合格成品电缆输出 | 长度 `838aaa23-0117-11db-92e3-0800200c9a66` | m | 在最终试验后测量可销售合格电缆长度，并将全部清单交换归一化至 1 m；调机长度、试验截段和不合格电缆不得计入参考输出，而应作为废物报告。 |
| `mass_per_length` | 成品电缆及材料质量平衡 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 测量所声明结构的单位长度成品电缆质量，并使产品和材料质量平衡采用相同含湿及调节状态。 |
| `material_mass` | 金属和聚合物投入及固体废物 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录跨越前景边界的净质量；没有文件化计算规则时，不得用名义层厚或采购金额替代实测或核算质量。 |
| `electricity_energy` | 外购电力 | 净热值 `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始单位，并按 1 kWh = 3.6 MJ 转换；说明采用产线计量还是分配后的厂级电力。 |
| `natural_gas_volume` | 现场使用的天然气 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按供应商或电表参考条件记录气量，并披露温度、压力以及任何能量或排放计算采用的高位或低位热值约定。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | 前景产品系统 | 纳入所声明金属、聚合物和能源投入的生产及进厂运输，以及导体制备、介电层挤出、屏蔽、护套、印字、试验、收线、直接受控公用工程、现场排放和制造废物处理或移交，直至合格电缆到达制造厂门。 | `iec-tr-62839-1-2025`; `siemens-iwlan-rcoax-epd-2024` |
| `boundary_actual_construction` | 实际电缆结构 | 将保留在电缆中的每种材料以及每项制造废物或直接排放表示为原子交换。实际结构采用其他导体、介电材料、箔背衬、编织、护套、添加剂或加工助剂时，应新增单独行，不得把代表性行改名为材料大类。 | `us-epa-wire-cable-lca-2008`; `iec-61196-1-2005` |
| `boundary_exclusions` | 排除的生命周期阶段 | 参考数据集排除发运包装、分销、安装、使用、维护和报废。披露包装排除项；未经边界调整，不得与纳入包装的来源合并。 | `siemens-iwlan-rcoax-epd-2024` |
| `boundary_cutoff` | 前景完整性 | 不得仅因质量、能量、废物或直接排放交换量小而省略。任何省略均应尽可能量化、说明理由并纳入完整性披露。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 铜线材、铝箔材、PET 薄膜、聚乙烯树脂、PVC 树脂或配混料以及其他已声明组分材料送达制造现场 |
| starting_condition_role | 一体化前景电缆制造过程的上游产品投入 |
| product_classification_scope | 同轴电缆及其他同轴电导体；分类引用用于说明范围，但不能替代结构限定信息 |
| recursive_input_rule | 使用本类别外购或内部转移的同轴电缆时，按接收状态将其记录为可见产品投入，并在该转移点停止前景递归展开；不得与成品输出净额处理 |
| upstream_dataset_requirement | 每项外购材料、电力和燃料流均应链接至地域、技术、牌号和交付状态相适宜的上游数据集，并披露任何代理数据 |
| disclosure | 声明结构和物料清单、材料牌号与再生含量、供应商及制造地域、生产技术、数据期、分配、发运包装排除、截断、代理数据集、废物去向以及现场燃料燃烧是否适用 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_coaxial_cable_manufacture` | 一体化同轴电缆制造 | required | 报告场址生产电缆时始终纳入 | 前景导体制备、挤出、屏蔽、护套、试验、收线及制造废物核算 | 每 1 m 合格成品电缆 |
| `onsite_fuel_combustion` | 现场燃料燃烧 | conditional | 仅当天然气跨越场址边界并用于电缆制造或直接支持热工操作时纳入 | 前景燃料使用和直接化石碳排放核算 | 每 1 m 合格成品电缆 |

### 过程：一体化同轴电缆制造（`integrated_coaxial_cable_manufacture`）

#### 输入

##### 产品流

###### 中心导体和编织用铜线材（`copper_wire_input`）

测量作为中心导体及编织外导体进入制造边界的铜线材。镀层、合金、再生含量和线材几何结构属于产品特定限定信息。

- 选定流：铜线材 `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：报告期内分配给合格及不合格生产的铜线材净投入实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 m 合格成品电缆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_mass`
- 来源：

###### 铝箔屏蔽层（`aluminium_foil_input`）

将铝箔材作为金属箔层单独记录，并声明实际结构的厚度、合金、涂层和复合形式。

- 选定流：铝箔材 `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配给报告期电缆输出的铝箔实测或核算投入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 m 合格成品电缆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_mass`
- 来源：

###### 聚乙烯介电层树脂（`polyethylene_dielectric_input`）

将聚乙烯作为介电层树脂记录。必须声明密度牌号、原生或再生含量、发泡或实心状态；如另购发泡剂，应作为单独原子投入。

- 选定流：聚乙烯 `f4dfd1a4-b24e-471e-bd21-04ad7a45ea52`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：报告期内分配给合格及不合格生产的聚乙烯树脂实测投入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 m 合格成品电缆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_mass`
- 来源：

###### PET 薄膜背衬层（`pet_film_input`）

复合屏蔽中的 PET 薄膜应与铝箔分开记录，并声明薄膜厚度、涂层和再生含量。

- 选定流：聚对苯二甲酸乙二醇酯 `1ce0d026-923b-4339-a8ca-31e228475c75`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配给报告期电缆输出的 PET 薄膜实测或物料清单核算投入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 m 合格成品电缆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_mass`
- 来源：

###### PVC 护套材料（`pvc_jacket_input`）

将 PVC 树脂或配混料作为挤出外护套记录。应声明配方、增塑剂、稳定剂、填料、阻燃体系和再生含量；单独采购的添加剂应作为单独原子投入。

- 选定流：聚氯乙烯，PVC `a3e4c5ed-ae25-5d3f-ba43-b6cae2f82f33`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：报告期内分配给合格及不合格生产的 PVC 树脂或配混料实测投入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 m 合格成品电缆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_mass`
- 来源：

###### 外购电力（`electricity_input`）

电力包括所声明边界内导体制备、挤出、屏蔽、护套、印字、试验、收线及直接支持设备的直接计量或分配电耗。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：产线电力实测量，或采用文件化方法分配给本产品结构的厂级电力，并转换为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 合格成品电缆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格同轴电缆（`finished_coaxial_cable_output`）

只有通过所声明在线和最终验收试验的电缆才计入参考产品输出。本 UUID 的 Tiangong 直读正式中文名为“电缆”。

- 选定流：电缆 `d698551c-0dbf-44d4-8045-c5797a1af141`
- 流属性/单位：长度 `838aaa23-0117-11db-92e3-0800200c9a66` / m `838aaa22-0117-11db-92e3-0800200c9a66`
- 数量规则：将合格电缆实测长度归一化为恰好 1 m 参考输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 m 合格成品电缆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_cable_output`
- 来源：

##### 废物流

###### 分选废铜（`copper_scrap_output`）

将离开前景过程的清洁铜线头、导体或编织废料与复合电缆不合格品分开记录。

- 选定流：废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：离开过程的分选废铜称量值，不扣除回收收入或避免负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 合格成品电缆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_waste_mass`
- 来源：

###### 分选铝废料（`aluminium_scrap_output`）

将离开前景过程的清洁铝箔边料与复合层压废料或电缆不合格品分开记录。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：离开过程的分选铝废料称量值，不扣除回收收入或避免负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 合格成品电缆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_waste_mass`
- 来源：

###### 混合热塑性塑料挤出废料（`mixed_thermoplastic_extrusion_scrap`）

仅当场址将 PE/PET/PVC 调机料、边料和挤出废料作为一种不可分废物流管理时记录。准确 Tiangong 废物流 UUID 尚未解决。

- 选定流：混合热塑性塑料挤出废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：离开过程的混合热塑性塑料挤出废料称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 合格成品电缆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_waste_mass`
- 来源：

###### 不合格同轴电缆废料（`offspec_coaxial_cable_scrap`）

记录保留同轴结构、离开过程且未成为合格产品的复合电缆不合格品、试验截段和调机长度。准确 Tiangong 废物流 UUID 尚未解决。

- 选定流：不合格同轴电缆废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：离开过程的复合电缆不合格品称量值，并保留相应不合格长度作为支持数据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 m 合格成品电缆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_waste_mass`
- 来源：

##### 基本流

### 过程：现场燃料燃烧（`onsite_fuel_combustion`）

#### 输入

##### 产品流

###### 现场消耗的气态天然气（`natural_gas_input`）

仅当气态天然气在前景边界内用于退火、热调节、直接支持生产的空间或其他已声明电缆制造操作时纳入本行。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：按已声明参考条件计量或用账单核算并分配至电缆制造的天然气量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 合格成品电缆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_natural_gas`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 直接排入空气的化石源二氧化碳（`fossil_carbon_dioxide_output`）

仅纳入上述现场燃烧直接释放的化石源二氧化碳，不得把上游电力或燃料供应排放计入该前景基本流。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：根据采集的天然气量、供应商组成或含碳量、氧化证据和文件化计算规则计算；有直接测量时优先使用直接测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m 合格成品电缆
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_natural_gas`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 多种产品或结构 | 只要有独立计量或生产记录，就应先按产线、批次、结构和报告期细分，再分配共享负荷。 |  |
| `allocation_shared_operations` | 无法避免的共享电力和公用工程 | 无法细分时，按机器时间或实测能耗等因果参数分配共享运行负荷；仅在证明因果关系时采用电缆长度或质量，并披露敏感性。 |  |
| `allocation_scrap_outputs` | 铜、铝、聚合物及复合电缆废料 | 报告废料毛量及去向。不得从前景投入或废物中扣除回收收入、再生材料抵扣或避免原生生产；任何下游回收方法均在本清单之外应用并披露。 | `iec-tr-62839-1-2025` |
| `allocation_mass_balance` | 内部回用与返工 | 返回同一过程的内部废料不属于跨边界输出，应在材料平衡中核算。返工后通过验收的电缆只计入一次合格输出，未回收损失仍作为废物。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_input_mass` | `integrated_coaxial_cable_manufacture` | 组分材料投入 | 秤量、收货、批次和物料清单记录 | 材料身份；供应商；牌号；批号；毛重和皮重；退料；产品结构；产线；时间戳 | 按结构核对经校准秤或收货质量与领料、退料记录 | kg | 每次收货和领料；按月汇总 | 至少连续 12 个有代表性的月份，或间歇生产的完整生产期 | 数据集内全部前景产线和场址 | 按结构汇总跨边界净材料，并除以合格输出长度；不合格品仅用于分母核对，不计入参考输出 | 秤校准；供应商证书；批次追溯；库存核对；物料清单版本 |
| `cp_electricity_records` | `integrated_coaxial_cable_manufacture` | 外购电力 | 间隔电表和生产线记录 | 电表编号；起止读数；间隔电量；产线状态；产品结构；合格长度；不合格长度；停机；分配因子 | 优先产线分表；否则核对厂级电力，并用文件化因果分配至生产 | kWh 和 MJ | 间隔或班次；按月汇总 | 与材料和输出相同期间 | 所有纳入生产及直接支持设备 | 扣除有文件记录的边界外负荷，仅分配无法避免的共享负荷，将 kWh 转为 MJ 后除以合格长度 | 电表校准；公用事业账单；分配工作表；完整性核对 |
| `cp_finished_cable_output` | `integrated_coaxial_cable_manufacture` | 合格参考产品 | 计长器、试验、质量和放行记录 | 结构编号；线盘或批次；长度；样品质量和长度；验收结果；阻抗；衰减和频率；屏蔽试验结果；时间戳 | 使用经校准在线计长器和最终放行记录；用有代表性的调节样品确定单位长度质量 | m 和 kg/m | 每线盘或每生产批 | 与全部投入和废物相同期间 | 每条纳入产线及结构 | 仅汇总验收并放行的长度；单独汇总不合格和试验截段长度；按结构计算生产加权单位长度质量 | 计长器校准；试验证书；放行记录；样品秤校准 |
| `cp_manufacturing_waste_mass` | `integrated_coaxial_cable_manufacture` | 分选和复合制造废物 | 废物容器秤量、移交和去向记录 | 废物身份；分选状态；毛重和皮重；结构；产线；日期；去向；内部回用；外部移交 | 称量每个容器或经核实的移交量，并与材料投入和产品质量核对 | kg | 每容器或每次移交；按月汇总 | 与材料和输出相同期间 | 全部纳入前景产线和废物存放点 | 边界输出中排除有记录的内部回用；汇总每项原子外部废物流并除以合格电缆长度 | 秤校准；移交单；回收商收据；材料平衡核对 |
| `cp_onsite_natural_gas` | `onsite_fuel_combustion` | 天然气和直接化石源二氧化碳 | 电表、账单、组成和烟气记录 | 气量；参考温度和压力；组成或含碳量；热值约定；氧化证据；设备；运行期间；分配因子 | 有条件时读取专用表；否则核对账单气量并按文件化运行记录分配；根据采集的碳证据计算直接化石 CO2 | m3 和 kg CO2 | 电表间隔或账单期间；按月汇总 | 与电缆生产相同期间 | 前景边界内全部燃烧设备 | 将分配后的气量和计算或实测的化石 CO2 归一化至合格电缆长度；不得把上游供应排放混入直接排放行 | 电表校准；账单；供应商气质证书；计算工作表；适用时的烟气试验 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_exchange` | 每项清单行 | 归一化交换量 = 报告期分配给所声明结构的交换量 / 该结构报告期合格电缆长度。 | 分配交换量；合格电缆长度 | 每 1 m 合格电缆的交换量 |  |
| `calc_mass_per_metre` | 成品电缆 | 单位长度电缆质量 = 调节后样品质量 / 样品长度；合并多个代表性样品时采用生产量加权平均。 | 样品质量；样品长度；生产权重 | 所声明结构的 kg/m | `siemens-iwlan-rcoax-epd-2024` |
| `calc_material_balance` | 一体化制造 | 材料平衡差额 = 组分材料投入总质量 - 合格电缆质量 - 外部制造废物质量 - 有文件记录的库存变化；应调查差额而不得强制归零。 | 投入质量；合格长度；单位长度质量；外部废物；库存变化 | 绝对及百分比差额 |  |
| `calc_electricity_conversion` | 外购电力 | MJ 电力 = 电表 kWh × 3.6。 | 电表 kWh | MJ |  |
| `calc_fossil_co2` | 现场天然气燃烧 | 根据分配气量和供应商特定组成或含碳量，按所声明氧化基础计算化石 CO2；保留因子来源和全部中间单位。不得使用未披露的默认因子。 | 气量；参考条件；组成或含碳量；氧化基础 | 每 1 m 合格电缆的 kg 化石 CO2 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留阻抗、衰减与频率、屏蔽、尺寸、材料以及适用安全或环境性能的结构规范和放行试验证据。 | 与 IEC 61196 要求或所声明适用规范一致的批准产品规范、试验方法、校准状态和放行记录 |
| `dq_temporal_alignment` | 前景记录 | 材料、能源、输出、废物和燃料采用同一对齐报告期；说明任何外推或生产期替代。 | 显示记录覆盖率和生产代表性的期间核对表 |
| `dq_geography_technology` | 上游链接和前景场址 | 声明制造场址和技术，并选择与供应地域、材料牌号或再生含量、电力组合和燃料交付状态相匹配的上游数据集。 | 供应商记录、数据集元数据和代理评估文件 |
| `dq_completeness` | 清单完整性 | 核对电缆质量、组分投入、外部废物、内部回用和库存变化；调查未解释损失并披露排除项。 | 签字的材料平衡工作表及附理由的省略交换清单 |
| `dq_measurement` | 电表、计长器和秤 | 使用经校准或核实的设备，并保留原始读数、单位转换、缺失数据处理和分配工作表。 | 校准证书、电表与计长器日志、秤核查和审计轨迹 |
| `dq_uuid_identity` | Tiangong 流引用 | 发布前确认 state_code=100 的身份、流类型、属性、单位组、分类、产品状态和正式中文 baseName；未解决行继续明确标记。 | 保存在 PCR 内容之外的最终混合搜索回执和直读身份记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 输出应等于 1 m 合格“电缆”，并声明全部必需结构、性能、单位长度质量、地域、技术、期间和边界限定信息。 | `iec-61196-1-2005`; `iec-tr-62839-1-2025` |
| `validate_inventory_normalization` | 全部清单行 | 每项交换应为原子交换，采用所声明属性和单位，采集或计算行应链接采集协议，并归一化至同一合格电缆长度。 |  |
| `validate_material_balance` | 一体化制造 | 材料投入质量应与合格电缆质量、单独报告的外部废物、内部回用和库存变化核对；披露并调查任何差额。 |  |
| `validate_energy_boundary` | 电力和燃料 | 电力应声明计量或分配基础及电网地域；天然气和直接化石 CO2 应连同参考条件和计算证据一并纳入，或二者均有证据证明不适用。 |  |
| `validate_waste_and_allocation` | 制造废物 | 产生时应分别报告废铜、铝废料、混合聚合物废料和不合格电缆及其去向和内部回用状态；不得在前景数量中净扣回收抵扣。 | `iec-tr-62839-1-2025` |
| `validate_external_comparability` | 本数据集的使用 | 未经文件化调整，不得将本发运包装前厂门数据集与产品结构、参考单位、包装处理、生命周期边界或分配方法不同的数据集比较或汇总。 | `siemens-iwlan-rcoax-epd-2024` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 制造厂门所声明同轴电缆结构的前景产品系统数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当参考单位、结构、地域、技术、时间、边界和分配兼容时，用于结构特定产品足迹、供应链建模、电缆系统研究以及下游 process 或 lifecyclemodel 构建 |
| excluded_use | 在功能与结构不等效时作同轴电缆设计通用比较；作为已安装电缆系统使用；用于非同轴电线；未经调整与纳入发运包装、分销、安装、使用或报废的数据集组合 |
| required_metadata | PCR id 和版本；产品与结构标识；完整层材料和质量；单位长度电缆质量；阻抗；衰减和频率；屏蔽声明；适用时的额定电压和远程供电功能；适用时的辐射型状态；制造地域和技术；报告期；上游数据集选择；分配；发运包装排除；废物去向；截断；未解决身份 |
| required_quality_disclosure | 时间及场址覆盖率；样品和仪表覆盖率；校准；缺失数据处理；材料平衡差额；分配理由；供应商和上游代理质量；再生含量基础；结构代表性；直接排放计算方法；未解决 UUID 和范围证据需求 |
| update_trigger | 导体、介电层、屏蔽、护套、添加剂、单位长度质量、电气性能等级、制造场址、生产技术、电力或燃料供应、废物去向、分配方法、边界或数据期的变化足以实质影响清单结果 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 正式指南（`official_guidance`） | 联合国统计司，《CPC 3.0 版结构》，2025-06-30，正式 CSV，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv，检索日期 2026-09-04 | 仅用于 CPC 46320 正式类别身份 |
| `iec-61196-1-2005` | 标准（`standard`） | IEC 61196-1:2005，Coaxial communication cables - Part 1: Generic specification - General, definitions and requirements，https://webstore.iec.ch/en/publication/4864，检索日期 2026-09-04 | 产品范围、结构和性能限定信息以及基于试验的产品身份 |
| `iec-tr-62839-1-2025` | 标准（`standard`） | IEC TR 62839-1:2025，Environmental declaration - Part 1: Communication wires and cables - Product specific rules，https://webstore.iec.ch/en/publication/84774，检索日期 2026-09-04 | 通信电缆环境声明范围及其对 IEC 61196 同轴金属电缆的明确适用性 |
| `siemens-iwlan-rcoax-epd-2024` | 文献（`literature`） | Siemens AG，Environmental Product Declaration: IWLAN RCoax cable PE 1/2 inch 5 GHz，DI_PA_EPD20065.01，2024-02-14，https://cache.industry.siemens.com/dl/files/907/109998907/att_1354257/v1/DI_PA_EPD20065.01_IWLAN_RCoax_cable_EPD.pdf，检索日期 2026-09-04 | 1 m 功能单位先例、单位长度电缆质量披露、制造厂门边界背景和可比性警示；不作为通用定量范围 |
| `us-epa-wire-cable-lca-2008` | 正式指南（`official_guidance`） | 美国环境保护署，Wire and Cable Insulation and Jacketing: Life-Cycle Assessments for Selected Applications，2008-06，https://www.epa.gov/sites/default/files/2014-01/documents/wire_lca_full.pdf，检索日期 2026-09-04 | 电缆材料族、配方特异性、材料投入和制造废物核算，以及不得把单一电缆结构泛化的限制；不作为通用定量范围 |
