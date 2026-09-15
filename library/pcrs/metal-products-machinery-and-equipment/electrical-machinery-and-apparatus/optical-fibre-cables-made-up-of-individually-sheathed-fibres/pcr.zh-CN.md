---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.optical-fibre-cables-made-up-of-individually-sheathed-fibres
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 由每根被覆光纤组成的光缆

## 1. 范围与适用性

本 PCR 适用于由每根被覆光纤组成的光缆的工厂生产。所覆盖的光缆用于通信、数据、控制或图像传输；成品光缆可以同时包含电导体，也可以装有光纤连接器。前景边界始于外购光纤、光缆用化合物、加强构件、可选电导体或连接器以及包装进入光缆制造场址，止于经过测试并卷绕、保护后在工厂门口待发运的成品光缆。

本 PCR 纳入场内实施的光纤着色、光纤缓冲层或微束管成形、缆芯集合或绞合、阻水、加强构件布置、护套挤出、标识、可选电导体组装、可选连接器装配、测试、卷绕和发运包装。裸光纤制造以及上游聚合物、金属、玻璃增强材料、连接器和包装的制造不在前景边界内；安装、网络运行、维护、拆除和寿命终结处理亦不在本 PCR 范围内。上游投入保留为相互关联的产品流，并须采用地理和技术上具有代表性的供应商或背景数据集。

必须声明光缆结构、光纤数量与类型、护套配方、燃烧性能等级、阻水系统、加强或铠装形式、内置电导体、连接器状态、应用环境和交付形式。本候选稿规定数据生产规则；在尚未核证两个相互独立且边界兼容的原始来源时，不规定外部推断的数值范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.optical-fibre-cables-made-up-of-individually-sheathed-fibres |
| classification_refs | CPC 3.0：46360（精确分类语境） |
| covered_products | 由每根被覆光纤组成的光缆；产品可包含电导体或装有光纤连接器 |
| excluded_products | 裸光纤；光纤束及光纤未逐根被覆的光缆；纯电线或电缆；单独供应的连接器；已安装光缆系统及网络服务 |
| representative_product | 在工厂门口已测试合格、可销售并卷绕于发运盘具上的通信光缆 |
| production_route | 光纤准备及缓冲层或微束管成形、缆芯组装、阻水、加强、护套挤出、标识、测试、可选电导体或连接器集成以及发运包装 |
| market_state | 工厂门口成品光缆，以质量声明，并随附发运包装清单 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供能够传输已声明光信号，并满足已声明机械、环境和燃烧性能要求的成品光缆 |
| How much | 工厂门口 1 kg 可销售光缆，不含发运包装质量 |
| How well | 满足已声明的光学衰减、光纤类型与数量、抗拉、抗压、抗冲击、弯曲、温度、阻水及适用燃烧性能规范 |
| How long or cycle | 工厂门口的一次制造输出；本“从摇篮到工厂门口”PCR 不按使用寿命归一化 |
| reference_flow_link | 过程损耗后 1 kg 经测试合格的可销售光缆输出，并披露每千克光缆长度和光纤公里数以进行功能比较 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 由每根被覆光纤组成的光缆 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 光缆结构与应用；光纤类型与数量；每千克的光纤公里数和光缆长度；护套聚合物与燃烧性能等级；阻水与加强系统；金属铠装或内置电导体的类型和质量；连接器状态与接口；工厂地理位置与技术；发运包装；参考产品 UUID 尚未解决 |

构建前景数据包时，必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明全部必需限定信息。质量参考量用于材料和制造清单归一化；由于传输功能取决于产品结构，还必须披露光缆长度和光纤公里数。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考光缆输出 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 计量不含发运包装的可销售光缆净质量，并将全部清单行归一化至 1 kg；保留光缆长度和光纤数量，以便重建光缆公里数和光纤公里数。 |
| `packaging_separation` | 木制电缆卷筒、钢带和保护膜 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别计量每个发运包装组件，不得将其质量计入 1 kg 参考光缆输出。 |
| `electricity_conversion` | 外购电力 | 净热值 `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始 kWh 读数，并按 1 kWh = 3.6 MJ 换算；不得将上游电网排放作为前景基本流重复加入。 |
| `material_net_consumption` | 光缆材料 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 材料消耗量按期初库存加收料量减期末库存再减退料量计算；单独计量且在前景边界内回用的回料不得再次计为新投入。 |
| `waste_route_measurement` | 制造废料 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每种化学或物理性质明确的废物在离开前景边界处单独记录，并披露含水率、污染情况和合同处理路线。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购光纤、光缆用化合物、加强构件、可选电导体或连接器以及发运包装组件已运抵制造场址 |
| starting_condition_role | 光缆前景制造的上游产品投入 |
| product_classification_scope | 由每根被覆光纤组成的光缆，包括含电导体或装有连接器的设计 |
| recursive_input_rule | 如外购投入本身属于本范围内的成品光缆，则仅将其作为一个带上游数据集的产品投入记录，不在本前景过程中递归展开其制造清单。 |
| upstream_dataset_requirement | 有供应商特定数据时优先使用；否则每项外购投入均须采用在地理、技术、再生料含量和产品状态方面具有代表性的背景数据集。 |
| disclosure | 声明工厂地理位置、报告期、光缆结构、所纳入的操作、供应商数据覆盖率、截断、内部回用、处理路线及所有偏离必需边界的情况。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景系统 | 纳入从材料接收到测试、卷绕和发运包装的全部场内操作；安装、使用和寿命终结仍在本“从摇篮到工厂门口”前景边界之外。 | `cablescom-optical-fibre-duct-cable-epd-2022`; `iec-tr-62839-1-2025` |
| `boundary_variant_components` | 产品变型 | 仅当内置电导体和连接器存在于所声明参考产品中时才纳入，并分别记录为原子交换。 | `unsd-industrial-commodity-statistics-yearbook-2014` |
| `boundary_upstream` | 外购产品 | 将上游生产和入厂供应链接至代表性数据集；不得把上游数据集排放作为直接前景基本流报告。 | `cablescom-optical-fibre-duct-cable-epd-2022` |
| `boundary_capital_goods` | 资本品 | 除非研究目标、适用方案规则或有记录的显著性评估明确要求，否则排除建筑物和生产设备，并披露该决定。 | `cablescom-optical-fibre-duct-cable-epd-2022` |

## 6. 过程清单结构

前景过程将物理连续的光缆生产线汇总为一个过程，以免为内部微束管、缆芯或未完成光缆创建未经审计的数据库身份。场址应在可行时保留分表或分工序记录，并披露光纤准备、缓冲层形成、缆芯组装、护套挤出、连接器装配、测试和包装是否在场内进行。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `cable_manufacturing_and_packaging` | 光缆制造、测试、卷绕和包装 | required | 对范围内工厂门口光缆始终纳入 | 前景生产 | 1 kg 经测试合格的可销售光缆输出，不含发运包装质量 |

### 过程：光缆制造、测试、卷绕和包装（`cable_manufacturing_and_packaging`）

#### 输入

##### 产品流

###### 通信用石英光纤（`optical_fibre`）

记录进入光缆生产线的外购石英光纤质量；如供应商数据无法拆分，则包括随光纤购入的初级涂覆层。

- 选定流：通信用石英光纤
- 流属性/单位：质量 / kg
- 数量规则：计量进入可销售光缆和不合格光缆的净消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经测试合格的可销售光缆输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`cablescom-optical-fibre-duct-cable-epd-2022`

###### 聚对苯二甲酸丁二醇酯颗粒（`pbt_granules`）

当场内挤出光纤缓冲层、松套管或微束管时，记录所消耗的 PBT 颗粒。

- 选定流：聚对苯二甲酸丁二醇酯颗粒
- 流属性/单位：质量 / kg
- 数量规则：计量 PBT 净消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 经测试合格的可销售光缆输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`cablescom-optical-fibre-duct-cable-epd-2022`

###### 阻水涤纶纱（`water_blocking_polyester_yarn`）

记录为实现已声明光缆阻水功能而浸渍或涂覆的涤纶纱。仅当产品设计确实不采用此类纱线时使用 `not_applicable`。

- 选定流：阻水涤纶纱
- 流属性/单位：质量 / kg
- 数量规则：计量纱线净消耗质量；仅在材料清单证明不存在时记为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经测试合格的可销售光缆输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`cablescom-optical-fibre-duct-cable-epd-2022`

###### 高密度聚乙烯护套材料（`hdpe_material`）

记录用于外护套挤出的初级形态 HDPE 配混料，并披露牌号、再生料含量、添加剂和供应商。

- 选定流：高密度聚乙烯材料，HDPE `ef7b2077-b2c6-49e3-b9d7-7fce4d3f27a0`
- 流属性/单位：质量 / kg
- 数量规则：计量 HDPE 配混料净消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经测试合格的可销售光缆输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`cablescom-optical-fibre-duct-cable-epd-2022`

###### 玻璃纤维增强聚合物加强构件（`glass_reinforced_polymer`）

记录纳入光缆的玻璃纤维增强聚合物杆或等效加强构件，并披露树脂体系和几何形状。

- 选定流：玻璃纤维增强聚合物 `dab98d11-c76c-4d40-bac9-a3d082f1fb36`
- 流属性/单位：质量 / kg
- 数量规则：计量产品内含质量并加上单独记录的生产边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经测试合格的可销售光缆输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`cablescom-optical-fibre-duct-cable-epd-2022`

###### 芳纶加强纱（`aramid_yarn`）

仅对采用芳纶纱作为抗拉加强材料的光缆结构记录该流。

- 选定流：芳纶加强纱
- 流属性/单位：质量 / kg
- 数量规则：计量芳纶纱净消耗质量；仅在材料清单证明不存在时记为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经测试合格的可销售光缆输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`cablescom-optical-fibre-duct-cable-epd-2022`

###### 绝缘铜导体（`insulated_copper_conductor`）

仅当绝缘铜导体被组装到所声明光缆中时记录其质量。

- 选定流：混合光缆用绝缘铜导体
- 流属性/单位：质量 / kg
- 数量规则：计量纳入参考光缆的质量；仅在产品规范确认无电导体时记为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经测试合格的可销售光缆输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`unsd-industrial-commodity-statistics-yearbook-2014`

###### 光缆连接器（`optical_fibre_connector`）

仅当成品光纤连接器在光缆越过工厂门口边界前已于制造场址装配时记录该流。

- 选定流：用于光纤、光纤束或电缆的连接器 `5f90c9f6-a484-428c-8846-89bece3a62ec`
- 流属性/单位：质量 / kg
- 数量规则：计量纳入参考光缆的连接器质量；仅在光缆以无端接状态供应时记为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经测试合格的可销售光缆输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`unsd-industrial-commodity-statistics-yearbook-2014`

###### 光缆标识油墨（`cable_marking_ink`）

记录护套或套管识别所消耗的具体油墨配方，并披露载体化学组成和有害成分。

- 选定流：光缆标识油墨
- 流属性/单位：质量 / kg
- 数量规则：计量或按库存平衡计算油墨消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经测试合格的可销售光缆输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`cablescom-optical-fibre-duct-cable-epd-2022`

###### 外购电力（`electricity`）

记录所纳入光缆生产线及已分配辅助操作消耗的外购电力。电网结构、电压、地理位置和损耗边界属于必需前景限定信息。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：将实测 kWh 换算为 MJ，并按第 7 节进行分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 经测试合格的可销售光缆输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算值（`calculated_from_collection`）
- 采集协议：`cp_electricity`
- 来源：`cablescom-optical-fibre-duct-cable-epd-2022`

###### 木制电缆卷筒（`wooden_cable_drum`）

记录随光缆交付的木制卷筒和护板质量；识别重复使用的卷筒，并按实际使用周期一致分配。

- 选定流：木质包装箱、盒子、板条箱、圆桶和类似包装，木制电缆卷筒 `39feb4f9-43da-4106-aa3c-f52afb654078`
- 流属性/单位：质量 / kg
- 数量规则：计量归属于参考光缆发运批次的包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经测试合格的可销售光缆输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`
- 来源：`cablescom-optical-fibre-duct-cable-epd-2022`

###### 钢包装带（`steel_packaging_band`）

记录用于固定光缆卷筒或其防护结构的成品钢打包带质量。披露涂层或镀锌处理、宽度、厚度、牌号、重复使用状态、供应商地域和交付边界；不得以打包钢丝或通用金属带材替代。

- 选定流：钢打包带 `56fe4f71-b594-4b55-8553-c87f2516737d`
- 流属性/单位：质量 / kg
- 数量规则：计量归属于参考光缆发运批次的包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经测试合格的可销售光缆输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`
- 来源：`cablescom-optical-fibre-duct-cable-epd-2022`

###### 塑料涂覆纸板保护膜（`plastic_coated_paperboard_film`）

记录包覆发运卷筒的塑料涂覆纸板保护材料质量；不得以笼统的包装材料类别替代。

- 选定流：塑料涂覆纸板保护膜
- 流属性/单位：质量 / kg
- 数量规则：计量归属于参考光缆发运批次的包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经测试合格的可销售光缆输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`
- 来源：`cablescom-optical-fibre-duct-cable-epd-2022`

##### 废物流

##### 基本流

没有经证实的场内直接释放时，不规定直接基本流。上游电网和材料生产排放保留在相互关联的背景数据集中。任何场内实测释放必须按单一物质和环境介质新增，不得使用汇总排放行。

#### 输出

##### 产品流

###### 经测试合格的可销售光缆（`reference_optical_fibre_cable`）

记录不含木制电缆卷筒、钢带和保护膜质量的合格光缆输出。精确的 TianGong 参考产品 UUID 尚未解决。

- 选定流：由每根被覆光纤组成的光缆
- 流属性/单位：质量 / kg
- 数量规则：根据实测可销售净输出归一化为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算值（`calculated_from_collection`）
- 采集协议：`cp_output_mass`
- 来源：`un-cpc-3-0-2025`; `unsd-industrial-commodity-statistics-yearbook-2014`

##### 废物流

###### 单独收集的聚乙烯护套废料（`waste_polyethylene`）

记录离开前景边界的洁净或受污染聚乙烯开机料、切边和不合格护套；内部回料不跨越该边界。

- 选定流：废聚乙烯 `7e78f0a8-c042-47ca-a742-3bac92be1477`
- 流属性/单位：质量 / kg
- 数量规则：按处理路线计量送出场外的废物净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 经测试合格的可销售光缆输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`cablescom-optical-fibre-duct-cable-epd-2022`

###### 聚对苯二甲酸丁二醇酯套管废料（`waste_pbt`）

记录离开前景边界的 PBT 开机料、切边和不合格套管；不得将该聚合物与 PET 或其他塑料废物合并。

- 选定流：废聚对苯二甲酸丁二醇酯
- 流属性/单位：质量 / kg
- 数量规则：按处理路线计量送出场外的废物净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 经测试合格的可销售光缆输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`cablescom-optical-fibre-duct-cable-epd-2022`

###### 石英光纤边角料（`waste_optical_fibre`）

记录离开前景边界的石英光纤切段和不合格光纤，包括无法分离的初级涂覆层。

- 选定流：石英光纤边角料
- 流属性/单位：质量 / kg
- 数量规则：按处理路线计量送出场外的废物净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 经测试合格的可销售光缆输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`cablescom-optical-fibre-duct-cable-epd-2022`

###### 玻璃纤维增强塑料加强构件边角料（`waste_glass_reinforced_plastic`）

记录离开前景边界的不合格或切除的玻璃纤维增强塑料加强构件。

- 选定流：玻璃纤维增强塑料废弃物 `52db6bdb-3bc0-4f88-84fe-7bfec8bf74c5`
- 流属性/单位：质量 / kg
- 数量规则：按处理路线计量送出场外的废物净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 经测试合格的可销售光缆输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`cablescom-optical-fibre-duct-cable-epd-2022`

##### 基本流

没有场址直接证据时，不规定产品阶段基本流输出。任何场址释放均须作为单独的物质-环境介质流记录，并在使用前审计其 TianGong 身份。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 前景操作 | 在可行时使用产品特定材料清单、光缆生产线记录、专用计量表和单独称量的废物来避免分配。 | `cablescom-optical-fibre-duct-cable-epd-2022` |
| `allocation_shared_inputs` | 共享能源、辅助材料、包装和废物 | 无法物理细分时，按同一报告期内生产的可销售光缆净质量分配共享数量，并披露产品、数量和分配份额。 | `cablescom-optical-fibre-duct-cable-epd-2022` |
| `allocation_internal_recycling` | 内部回料和返工 | 将同一报告期内重新加工的材料保留在前景边界内；仅计算净外购投入和离开边界的废物，防止重复计算。 |  |
| `allocation_recycling_outputs` | 送往再生或回收的废料 | 在前景边界采用污染者付费原则；除非下游模型明确采用有记录的再生方法，否则不得主张避免生产收益。 | `cablescom-optical-fibre-duct-cable-epd-2022` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `cable_manufacturing_and_packaging` | 各光缆材料投入 | ERP 领退料记录、采购收料、库存盘点、材料清单 | 材料身份；供应商；牌号；期初库存；收料；期末库存；退料；内部回料；光缆产品代码 | 将库存平衡与光缆生产线领料记录和批准的材料清单核对 | kg | 每批次，按月核对 | 有代表性的连续十二个月或有理由的生产批期 | 各纳入工厂和光缆生产线 | 按材料和产品代码计算净消耗；仅按第 7 节分配共享余量 | 采购文件、供应商规格、库存核对和批准的材料清单 |
| `cp_electricity` | `cable_manufacturing_and_packaging` | 外购电力 | 公用事业账单和经校准的分表读数 | 表计标识；期初与期末读数；kWh；电压；供应商；电网产品；生产线工时；报告期 | 优先使用光缆生产线专用表计；将分表与场址账单核对并分配有记录的共享负荷 | kWh | 连续或按批次，按月核对 | 与产出记录相同期间 | 各纳入工厂和光缆生产线 | 将 kWh 换算为 MJ，再除以已分配的可销售光缆质量 | 账单、表计校准或核查、核对记录和分配工作表 |
| `cp_packaging_mass` | `cable_manufacturing_and_packaging` | 各发运包装组件 | 装箱单、包装领用记录和称量记录 | 组件身份；材料；供应商；重复使用状态；毛重；皮重；发运批次；光缆产品代码 | 分别称量各组件，或以经核证的供应商单件质量乘发运数量 | kg | 每发运批次 | 与产出记录相同期间 | 各纳入工厂 | 分别汇总各组件，再除以相关可销售光缆质量 | 装箱单、称量记录或供应商规格以及重复使用周期证据 |
| `cp_output_mass` | `cable_manufacturing_and_packaging` | 经测试合格的可销售光缆输出 | 生产计数器、长度计、秤和最终测试记录 | 产品代码；批次；光缆长度；光缆净质量；光纤数量；测试处置；卷筒皮重；包装质量 | 称量光缆净质量，或用毛重减经核证的包装皮重；将长度和质量与合格测试处置核对 | kg, m, fibre-km | 每成品卷筒或批次 | 与投入记录相同期间 | 各纳入工厂和光缆生产线 | 汇总合格光缆净质量；排除不合格输出和发运包装 | 经校准的秤和长度计、测试证书及生产核对 |
| `cp_waste_mass` | `cable_manufacturing_and_packaging` | 各明确废物输出 | 废物称量单、容器日志和承包商接收凭证 | 废物身份；来源工序；毛重与皮重；含水率；污染；内部回料；目的地；处理路线 | 在发运时分别称量每种废物；与承包商凭证核对并排除内部回料 | kg | 每次发运，按月核对 | 与投入和产出记录相同期间 | 各纳入工厂和光缆生产线 | 按身份和路线计算每种废物净量，再除以可销售光缆质量 | 称量单、承包商凭证、容器日志和质量平衡核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_material_intensity` | 各材料投入 | （期初库存 + 收料 - 期末库存 - 退料 - 转用于其他产品的材料）/ 可销售光缆质量 | 库存、收料、退料、转移和产出记录 | kg 材料/kg 光缆 |  |
| `calc_electricity_intensity` | 外购电力 | （实测 kWh × 3.6 MJ/kWh × 分配份额）/ 可销售光缆质量 | 表计读数、分配份额、可销售产出质量 | MJ 电力/kg 光缆 |  |
| `calc_packaging_intensity` | 各包装组件 | 发运批次相关包装组件质量 / 该批次光缆净质量 | 包装和产出记录 | kg 包装组件/kg 光缆 |  |
| `calc_waste_intensity` | 各废物输出 | 按身份和路线计算的场外废物净质量 / 可销售光缆质量 | 废物和产出记录 | kg 废物/kg 光缆 |  |
| `calc_fibre_kilometres` | 功能披露 | 光缆长度（km）× 光纤数量 | 长度计和已声明光纤数量 | 每参考流批次的 fibre-km |  |
| `calc_mass_balance` | 前景完整性 | 比较材料投入总量与可销售光缆输出、单独计量的废物输出、库存变化、留样及有记录的测量不确定性；调查无法解释的差额。 | 材料、产出、废物、库存和留样记录 | 质量平衡核对 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留产品规范、光缆结构图、材料清单、适用测试标准、光纤类型与数量、结构、电导体与连接器状态和燃烧性能等级。 | 批准的技术文件和最终测试证书 |
| `dq_temporal` | 全部前景行 | 可行时使用一个有代表性的十二个月期间；披露停机、开机期、产品组合变化以及任何有理由的较短期间。 | 带日期的原始记录和代表性声明 |
| `dq_geography_technology` | 前景及上游链接 | 声明工厂地理位置和光缆生产线技术；记录主要上游材料的供应商、生产路线、再生料含量和地理位置。 | 场址元数据和供应商文件 |
| `dq_measurement` | 质量、长度和电力 | 使用经校准或核查的仪器，记录分辨率和不确定性，并将分表及发运记录与控制记录核对。 | 校准或核查记录及核对表 |
| `dq_completeness` | 清单 | 覆盖每个必需原子行和所有其他场址交换；通过材料清单、表计范围或废物记录证明不适用，并完成质量平衡。 | 行级纳入审查和质量平衡工作表 |
| `dq_uuid` | 流身份 | 仅使用经直接审计的公开 state-100 TianGong 身份；无 UUID 的行保持未解决状态，不得选择宽泛代理。 | UUID 审计记录和未解决审查元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考流 | 确认归一化后光缆净质量等于声明参考量且包装质量已排除；必须披露光缆长度和光纤公里数。 |  |
| `validate_scope` | 产品身份 | 确认产品中的每根光纤均有被覆；本 PCR 不接受裸光纤、光纤未逐根被覆的光纤束或光缆以及纯电缆。 | `un-cpc-3-0-2025`; `unsd-industrial-commodity-statistics-yearbook-2014` |
| `validate_variants` | 条件性结构 | 根据产品材料清单，对阻水纱、芳纶加强材料、内置电导体和连接器逐项明确“适用”或“不适用”。 | `unsd-industrial-commodity-statistics-yearbook-2014`; `cablescom-optical-fibre-duct-cable-epd-2022` |
| `validate_atomicity` | 清单行 | 拒绝合并的公用工程、材料、包装、废物或排放；每个交换必须保留一个流身份、方向、属性、单位及适用的处理路线或环境介质。 |  |
| `validate_mass_balance` | 前景清单 | 要求记录材料投入与光缆输出、废物、库存变化、留样、内部回料和测量不确定性的核对；调查并披露无法解释的差额。 |  |
| `validate_electricity` | 电力 | 将生产线及已分配辅助用电与场址控制表计核对，并验证 kWh 到 MJ 的换算。 |  |
| `validate_sources` | 数值范围 | 除非至少核证两个相互独立的原始来源并证明边界兼容，否则拒绝外部经验范围；没有接受的范围不能替代前景数据采集。 |  |
| `validate_uuid` | 带 UUID 的行 | 确认公开 state_code 100、英文和中文 baseName、流类型、分类、属性、单位组、产品状态和 generalComment；代理或未经核证的 UUID 均不得通过。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 由经审查前景记录生成的 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 构建由每根被覆光纤组成的光缆制造的产品流、过程和 lifecyclemodel 数据集 |
| allowed_use | 对所声明光缆结构、工厂、报告期和地理位置进行从摇篮到工厂门口建模；仅在参考质量、光缆长度、光纤公里数、性能、边界和数据质量一致时进行比较 |
| excluded_use | 裸光纤生产；光纤未逐根被覆的光纤束或光缆；纯电缆；没有补充规则和数据的安装、网络运行、维护、拆除或寿命终结 |
| required_metadata | PCR id 与状态；产品代码和规范；光缆结构；光纤类型与数量；每千克长度和光纤公里数；护套、阻水、加强、铠装、电导体和连接器状态；工厂和供应商地理位置；技术；期间；分配；包装；截断；UUID 状态 |
| required_quality_disclosure | 初级数据占比；表计和秤覆盖率；时间、地理和技术代表性；供应商数据质量；质量平衡结果；分配份额；内部回用；废物路线；未解决 UUID 和范围证据需求 |
| update_trigger | 光缆结构、化合物或供应商、再生料含量、光纤数量或类型、电导体或连接器状态、生产线、能源供应、包装、分配、废物路线、工厂或报告期发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | 联合国统计司，《CPC 第 3.0 版结构》，2025 年 6 月 30 日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 46360 官方分类身份 |
| `unsd-industrial-commodity-statistics-yearbook-2014` | official_guidance | 联合国统计司，《2014 年工业产品统计年鉴：生产统计（2005-2014）》，第一卷，ST/ESA/STAT/SER.P/54，2017 年出版。https://unstats.un.org/unsd/publication/SeriesP/SeriesP_54_vol_I.pdf | 经原文核证的产品边界，包括含电导体或装有连接器的光缆 |
| `iec-tr-62839-1-2025` | standard | IEC TR 62839-1:2025，《环境声明 第 1 部分：通信电线电缆 产品特定规则》。https://webstore.iec.ch/en/publication/84774 | 通信电缆 LCA 规则对含光纤产品的适用性及其与 IEC 60794 的关系 |
| `cablescom-optical-fibre-duct-cable-epd-2022` | dataset | Cables de Comunicaciones Zaragoza S.L.，管道安装用通信网络光缆环境产品声明，注册号 S-P-05723，2022 年 4 月 8 日修订。https://www.cablescom.com/sites/default/files/Documents/EPD_Cablescom_Duct_rev01.pdf | 经原文核证的产品组成、微束管与护套工序、工厂门口边界、电力和包装纳入、废物核算及分配层级 |
