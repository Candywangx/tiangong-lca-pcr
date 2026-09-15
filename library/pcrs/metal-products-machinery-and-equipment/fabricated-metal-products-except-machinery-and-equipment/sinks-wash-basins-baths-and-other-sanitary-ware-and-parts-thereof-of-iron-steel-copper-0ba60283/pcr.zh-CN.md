---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.sinks-wash-basins-baths-and-other-sanitary-ware-and-parts-thereof-of-iron-steel-copper-0ba60283
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铁、钢、铜或铝制的洗涤槽、脸盆、浴具及其他卫生设备及零件

## 1. 范围与适用性

本 PCR 适用于以铁、钢、铜或铝作为承力结构或容器主体的成品洗涤槽、脸盆、浴具及其他卫生设备及其专用零件的工厂门生产。范围包括以成形、拼焊或铸造方式制造并作为完整器具或明确专用零件交付的产品。

塑料或陶瓷卫生器具、水龙头和阀门、柜体、台面、安装材料、建筑现场安装、使用阶段用水与清洗、维护、拆除和寿命终止处理不在本 PCR 范围内。由申报制造商实施或添加的表面处理、隔音组件和工厂包装应纳入。数据集应声明产品形式、完整产品或零件状态、主体金属及合金牌号、表面状态/涂层、所含附件、制造路线、包装状态和工厂门。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.sinks-wash-basins-baths-and-other-sanitary-ware-and-parts-thereof-of-iron-steel-copper-0ba60283 |
| classification_refs | CPC 3.0: 42911 |
| covered_products | 铁、钢、铜或铝制成品洗涤槽、脸盆、浴具、卫生容器及其专用零件 |
| excluded_products | 塑料或陶瓷卫生器具；水龙头和阀门；家具和台面；非卫生器具专用的通用金属板材、铸件或零件 |
| representative_product | 工厂门成品金属洗涤槽或脸盆，包括已声明的工厂施加表面处理、隔音组件和包装 |
| production_route | 接收金属板材或铸造毛坯；切割/成形或铸件精加工；按需退火和连接；清洗；磨削/抛光；按需表面处理和隔音组件施加；检验；工厂包装 |
| market_state | 制造厂门处已完成并经检验、尚未安装的产品或专用零件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供成品金属卫生器具所声明的清洗、容纳、排水或沐浴功能，或专用零件所声明的功能。 |
| How much | 制造厂门处 1 kg 成品或专用零件。 |
| How well | 满足所声明的尺寸、表面状态、耐腐蚀性、密封性及产品特定性能规范。 |
| How long or cycle | 一次工厂门交付；使用寿命不属于本生产阶段参考，在比较研究中应另行声明。 |
| reference_flow_link | 1 kg 净成品金属卫生器具或专用零件，不含可拆卸运输包装。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 铁、钢、铜或铝制的洗涤槽、脸盆、浴具及其他卫生设备及零件 `13e80a39-882f-40b2-a110-1221b48c3415` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品类型；完整器具或专用零件；主体金属和合金牌号；产品净质量；表面状态和涂层；制造路线；所含附件；包装状态；制造场址和地域；报告期；工厂门 |

构建前景数据包时，全部必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用成品或专用零件的净干质量；可拆卸运输包装不计入参考质量，应在清单中单独核算。 |
| `metal_mass_measurement` | 金属投入、产品和金属废料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 收货、领料、产出和废料质量应采用校准计量并使用一致的干基；未经核对，不得以名义设计质量代替实测产出。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留计量电量并按 1 kWh = 3.6 MJ 转换；声明是否包括内部发电和损耗。 |
| `gas_reference_conditions` | 天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明气体体积的压力、温度及干/湿基，并一致采用有文件依据的换算基准。 |
| `water_mass_conversion` | 工艺用水和清洗废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 原始记录为体积时，保留实测体积，仅在密度和温度假设有文件依据时换算为质量。 |

## 5. 系统边界

前景边界从金属板材、卷材或铸造卫生器具毛坯到达制造场址大门开始，包括场内切割、成形、按需退火、连接、清洗、磨削/抛光、按需表面预处理、已声明隔音组件的施加、检验和工厂包装。外购材料和能源的上游生产与运抵场址应采用供应商特定或其他具有代表性的从摇篮到场址数据集。建筑现场安装、使用、维护和寿命终止阶段不在本 PCR 范围内。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 到达制造场址大门的外购金属板材、卷材或铸造卫生器具毛坯 |
| starting_condition_role | 前景成形、拼焊或精加工的物理起始材料 |
| product_classification_scope | 铁、钢、铜或铝制成品卫生器具及其专用零件；CPC 3.0 42911 为精确分类参考 |
| recursive_input_rule | 已属于本产品类别的外购未成品或成品投入，按其供应状态和上游数据集作为独立产品投入记录；不得在前景模型中递归再制造 |
| upstream_dataset_requirement | 金属原料、铸造毛坯、消耗品、能源和包装优先采用供应商特定的从摇篮到场址数据集；替代数据集应匹配材料牌号、产品状态、地域、技术和报告期 |
| disclosure | 声明产品类型、完整产品或零件状态、金属/合金、来料形态、制造路线、表面状态/涂层、附件、包装、场址、地域、报告期和截断决定 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 全部数据集 | 纳入受控的场内制造、检验和工厂包装并截止于制造厂门；排除安装、使用、维护和寿命终止阶段。 | `elkay-undermount-sink-epd-2023` |
| `boundary_route_disclosure` | 成形与精加工路线 | 仅纳入路线实际适用的原子交换，并明确披露退火、连接、清洗、抛光、表面处理和隔音作业。 | `elkay-undermount-sink-epd-2023`; `usitc-drawn-stainless-steel-sinks-2024` |
| `boundary_upstream_inputs` | 外购投入 | 每项外购投入均应关联与其材料、状态和供应地域相匹配的从摇篮到场址数据集。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| metal_sanitary_ware_manufacturing | 金属卫生器具成形、精加工与包装 | required | 纳入实际成形或铸件精加工路线，以及申报制造商控制的全部场内精加工和包装步骤。 | 前景制造 | 1 kg 净成品金属卫生器具或专用零件 |

### 过程：金属卫生器具成形、精加工与包装（`metal_sanitary_ware_manufacturing`）

#### 输入

##### 产品流

###### 深加工不锈钢平板轧材（`stainless_steel_sheet`）

声明的钢制路线采用不锈钢平轧原料时，记录接收的不锈钢板材。

- 选定流：深加工不锈钢平板轧材 `add37984-82d6-4c91-85e3-9911c0135944`
- 流属性/单位：Mass / kg
- 数量规则：生产订单领用的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`elkay-undermount-sink-epd-2023`; `usitc-drawn-stainless-steel-sinks-2024`

###### 非不锈钢板材（`non_stainless_steel_sheet`）

仅当声明的产品主体采用某一非不锈钢牌号时，记录该单一牌号钢板；其 Tiangong 身份尚未解决。

- 选定流：非不锈钢板材
- 流属性/单位：Mass / kg
- 数量规则：生产订单领用的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：

###### 铸铁卫生器具铸造毛坯（`cast_iron_sanitary_ware_blank`）

声明的产品采用铸铁精加工路线时，记录接收的铸铁容器或零件毛坯；其 Tiangong 身份尚未解决。

- 选定流：铸铁卫生器具铸造毛坯
- 流属性/单位：Mass / kg
- 数量规则：领用于精加工的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：

###### 铜板材（`copper_sheet`）

仅对声明的铜或铜合金板材成形路线记录铜板材。

- 选定流：铜板材 `30cc5ca3-6198-4f82-8016-284f1b15d01b`
- 流属性/单位：Mass / kg
- 数量规则：生产订单领用的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：

###### 铝板材（`aluminium_sheet`）

仅对声明的铝或铝合金板材成形路线记录铝板材。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：生产订单领用的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：

###### 外购电力（`electricity`）

记录成形、连接、精加工、清洗、检验和包装设备使用的计量外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配给生产订单或生产线的计量电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_inputs`
- 来源：`elkay-undermount-sink-epd-2023`

###### 气态天然气（`natural_gas`）

仅当天然气在场内用于退火、加热、固化或其他已声明制造作业时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：路线适用的场内燃烧计量标准体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_inputs`
- 来源：

###### 工艺用水（`process_water`）

记录用于清洗、漂洗或路线适用表面预处理的外供工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：跨越前景边界的计量或罐体平衡用水，扣除有文件记录的内部回用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_inputs`
- 来源：`elkay-undermount-sink-epd-2023`

###### 工业氧气（`industrial_oxygen`）

仅当已声明切割或连接作业消耗外购氧气时记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：计量或气瓶库存核算的标准体积消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_consumables`
- 来源：

###### 氢氧化钠（`sodium_hydroxide`）

仅当已声明的场内清洗或表面预处理槽消耗氢氧化钠时记录。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：根据采购、领用和浓度记录计算的氢氧化钠活性质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_consumables`
- 来源：

###### 润滑油（`lubricating_oil`）

记录作为成形或拉深润滑剂消耗的润滑油；内部回收循环油不计入跨界投入。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass / kg
- 数量规则：期初库存加收货量减期末库存和单独记录的回收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_consumables`
- 来源：`elkay-undermount-sink-epd-2023`

###### 氧化铝抛光磨料（`aluminium_oxide_abrasive`）

仅当氧化铝这一具体磨料领用于磨削或抛光时记录；其 Tiangong 身份尚未解决。

- 选定流：氧化铝抛光磨料
- 流属性/单位：Mass / kg
- 数量规则：领用质量减单独记录的可回收返料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_consumables`
- 来源：`elkay-undermount-sink-epd-2023`

###### 沥青隔音垫（`bitumen_sound_deadening_pad`）

仅当交付产品包含工厂施加的沥青隔音垫时记录其质量；其 Tiangong 身份尚未解决。

- 选定流：沥青隔音垫
- 流属性/单位：Mass / kg
- 数量规则：纳入合格成品的领用隔音垫质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_consumables`
- 来源：`elkay-undermount-sink-epd-2023`

###### 瓦楞纸箱（`corrugated_board_box`）

记录在工厂门随产品交付的瓦楞纸箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：随合格产品包装的实测或经规格核实的纸箱质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inputs`
- 来源：`elkay-undermount-sink-epd-2023`

###### 包装, 纸质说明书内页（`paper_instruction_insert`）

记录产品包装内随附的印刷纸质说明书。

- 选定流：包装, 纸质说明书内页 `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- 流属性/单位：Mass / kg
- 数量规则：随合格产品包装的实测或经规格核实的说明书质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inputs`
- 来源：`elkay-undermount-sink-epd-2023`

###### PET 产品标签（`pet_product_label`）

仅当聚对苯二甲酸乙二醇酯产品标签随工厂包装交付时记录；其 Tiangong 身份尚未解决。

- 选定流：聚对苯二甲酸乙二醇酯产品标签
- 流属性/单位：Mass / kg
- 数量规则：随合格产品包装的实测或经规格核实的标签质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inputs`
- 来源：`elkay-undermount-sink-epd-2023`

##### 废物流

本 PCR 不规定废物投入。任何外部接收的废物只能作为经单独审查的路线特定补充项记录。

##### 基本流

本 PCR 不规定基本流投入；产品用水和外购气体在上文作为产品流记录。

#### 输出

##### 产品流

###### 铁、钢、铜或铝制的洗涤槽、脸盆、浴具及其他卫生设备及零件（`finished_metal_sanitary_ware`）

按产品净质量基准记录声明工厂门处的合格成品输出。

- 选定流：铁、钢、铜或铝制的洗涤槽、脸盆、浴具及其他卫生设备及零件 `13e80a39-882f-40b2-a110-1221b48c3415`
- 流属性/单位：Mass / kg
- 数量规则：合格成品输出的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output`
- 来源：

##### 废物流

###### 工业后钢废料（`post_industrial_steel_scrap`）

记录离开前景边界的分选钢质边角料、修边料、切屑和不合格钢制器具主体。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：按声明钢牌号和回收去向计量的外运质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`usitc-drawn-stainless-steel-sinks-2024`

###### 铸铁废料（`cast_iron_scrap`）

将铸铁精加工废料和不合格铸铁器具主体与钢废料分开记录；其 Tiangong 身份尚未解决。

- 选定流：铸铁废料
- 流属性/单位：Mass / kg
- 数量规则：实测外运质量和声明的回收去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：

###### 废铜（`copper_scrap`）

记录离开前景边界的分选铜质边角料、修边料和不合格铜制器具主体。

- 选定流：废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位：Mass / kg
- 数量规则：实测外运质量和声明的回收去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：

###### 铝废料（`aluminium_scrap`）

记录离开前景边界的分选铝质边角料、修边料和不合格铝制器具主体。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：实测外运质量和声明的回收去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：

###### 清洗废水（`cleaning_wastewater`）

清洗、漂洗和路线适用表面预处理产生的废水离开前景过程并进入场内或场外处理时记录。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：计量或罐体平衡的排放质量，扣除回用水并声明处理状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`elkay-undermount-sink-epd-2023`

##### 基本流

###### 场内燃烧产生的化石二氧化碳（`carbon_dioxide_fossil`）

当天然气或其他化石燃料在已声明前景边界内燃烧时，记录烟道直接计量的化石二氧化碳；本行不包括上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：归属于生产订单的直接监测化石二氧化碳质量；若使用计算值，发布前应另行提供有来源依据的计算规则
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用成形、精加工和包装作业 | 在可行情况下通过对生产线、产品、生产批次和废物流进行分表计量来避免分配。 |  |
| `allocation_physical_causality` | 剩余共用投入与产出 | 使用有文件记录的物理因果驱动量，例如机器时间、计量能源、加工金属质量或包装件数；仅在没有更具因果性的驱动量时使用产出质量，并披露敏感性。 |  |
| `allocation_scrap_at_gate` | 金属废料输出 | 在前景边界处报告废料质量和状态，不在前景清单中计入避免负荷或替代收益；下游回收情景属于本单元过程结果之外。 |  |
| `allocation_multiple_products` | 同一报告系统生产的完整器具和专用零件 | 将可单独计量的产品系列分开；无法分开时，按有文件记录的因果驱动量分配，并报告每个参考产品的分配因子。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material_inputs | metal_sanitary_ware_manufacturing | 主体金属投入 | 采购、收货和生产领料记录 | 材料 id；合金/牌号；形态；供应商；收货质量；领用质量；退料质量；生产订单；日期 | 校准秤并结合库存核对 | kg | 每次收货和每个生产订单 | 具有代表性的连续 12 个月 | 全部受控制造线 | 按材料和路线汇总净领用质量，再分配并归一化至合格产出 | 校准记录；供应商证书；库存核对 |
| cp_utility_inputs | metal_sanitary_ware_manufacturing | 电力、气体和工艺用水 | 仪表和发票记录 | 仪表 id；能量或体积；起止读数；参考条件；生产线；报告期 | 优先采用校准分表；共用供应应与发票核对 | MJ; m3; kg | 每月或更高频率 | 具有代表性的连续 12 个月 | 全部受控制造及共用辅助系统 | 扣除有文件记录的非生产用量，按因果驱动量分配并归一化至合格产出 | 仪表校准；发票；核对记录 |
| cp_process_consumables | metal_sanitary_ware_manufacturing | 氧气、清洗化学品、润滑剂、磨料和隔音垫 | 采购、领用、返料和浓度记录 | 材料 id；组成；浓度；领用质量/体积；返料质量；生产订单；日期 | 库存平衡和批次/生产线领料记录 | kg; m3 | 每批次或每月 | 具有代表性的连续 12 个月 | 全部路线适用的场内作业 | 期初库存加收货减期末库存和可回收返料；必要时将溶液换算为活性物质量 | 库存核对；组成证书；批次记录 |
| cp_packaging_inputs | metal_sanitary_ware_manufacturing | 工厂包装 | 包装规格和包装记录 | 组件 id；材料；单件质量；包装件数；产品系列；日期 | 经核实的组件质量乘以包装件数，并与采购量核对 | kg | 每个包装规格和每月 | 具有代表性的连续 12 个月 | 最终包装线 | 分别汇总每个原子包装组件并归一化至合格产品净质量 | 秤核查；包装规格；采购核对 |
| cp_product_output | metal_sanitary_ware_manufacturing | 合格成品 | 最终检验和发运记录 | 产品 id；完整/零件状态；金属/合金；表面状态；净质量；合格数量；不合格数量；日期 | 校准产品秤或经秤抽查核实的物料质量清单 | kg | 每批次或发运批 | 具有代表性的连续 12 个月 | 全部受控产出线 | 按产品系列汇总合格净质量；不含可拆卸包装 | 校准记录；检验放行；发运核对 |
| cp_waste_outputs | metal_sanitary_ware_manufacturing | 金属废料和清洗废水 | 废物秤单、容器、仪表和转移记录 | 废物 id；材料/牌号；质量或体积；处理状态；去向；日期；生产线 | 校准秤、废水仪表或罐体平衡 | kg; m3 | 每次外运或每月 | 具有代表性的连续 12 个月 | 全部受控作业和场内预处理 | 分开记录原子废物流，扣除有文件记录的内部回用并归一化至合格产出 | 秤单；仪表校准；转移联单；水平衡 |
| cp_direct_emissions | metal_sanitary_ware_manufacturing | 化石二氧化碳直接排放 | 连续或定期烟道监测记录 | 排放源 id；化石燃料；浓度或质量速率；烟气流量；运行时间；生产订单；日期 | 校准的烟道直接测量 | kg | 连续或与生产匹配的测试周期 | 具有代表性的连续 12 个月或有正当理由的测试周期 | 前景边界内全部场内化石燃烧源 | 积分实测质量，按因果运行记录归属并归一化至合格产出 | 监测仪校准；测试报告；运行日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | 每项清单交换 | 交换量除以合格产品净质量 | 原子交换汇总量；cp_product_output 合格产品净质量 | 每 1 kg 参考产品的交换量 |  |
| `convert_electricity_to_mj` | 以 kWh 记录的电力 | MJ = kWh × 3.6 | 计量 kWh | MJ 电力 |  |
| `calculate_active_naoh` | 氢氧化钠溶液 | 活性 NaOH 质量 = 溶液质量 × 经核实的质量分数 | 领用溶液质量；供应商或槽液浓度 | kg 活性 NaOH |  |
| `reconcile_metal_mass` | 每条已声明金属路线 | 收货/领用金属 = 合格产品金属 + 分选金属废料 + 实测库存变化 + 量化残余损失 | cp_material_inputs；cp_product_output；cp_waste_outputs | 材料特定质量平衡闭合 |  |
| `allocate_shared_operations` | 共用公用工程和消耗品 | 共用总量 × 有文件记录的因果分配因子，再归一化至参考质量 | 仪表或库存总量；各产品因果驱动量；合格产出质量 | 每 1 kg 参考产品的已分配交换量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 产品记录应识别产品类型、完整/零件状态、主体金属、合金/牌号、表面状态/涂层、所含附件和净质量。 | 产品规格；物料清单；检验放行 |
| `dq_temporal_coverage` | 全部前景记录 | 使用具有代表性的连续 12 个月；较短测试周期应说明季节性、维护和产品组合代表性。 | 有日期的记录清单和生产计划 |
| `dq_metering` | 质量、能源、气体和水 | 仪器应具有有效校准，或具有与发票和库存平衡的文件化核对。 | 校准证书和核对记录 |
| `dq_completeness` | 过程清单 | 核对外购投入、合格产出、废料、废水、库存变化和直接排放；记录每项排除交换和截断决定。 | 签署的物料/能量/水平衡和排除清单 |
| `dq_route_specificity` | 条件交换 | 仅在有证据证明已声明路线不存在该作业或材料时，才可将条件行标记为不适用。 | 过程流程图；生产订单；领料记录 |
| `dq_upstream_match` | 背景数据集 | 供应商或替代数据集应匹配材料牌号/状态、地域、技术和时间；披露主要金属投入的不匹配和敏感性。 | 供应商 EPD/数据集元数据和数据质量评价 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考产品 | 确认恰好 1 kg 净合格成品，并从参考质量中排除可拆卸包装。 |  |
| `validation_identity_qualifiers` | 数据集身份 | 缺少产品类型、完整/零件状态、主体金属/合金、表面状态/涂层、制造路线、包装状态、场址、地域、报告期或工厂门时，拒绝该数据包。 | `un-cpc-3-0-structure-2025` |
| `validation_atomic_inventory` | 全部清单行 | 确认每个选定流均为一个原子交换，且条件行具有明确适用性证据。 |  |
| `validation_metal_balance` | 每条金属路线 | 对领用金属、合格产品金属、分选废料、库存变化和量化残余损失之间的任何未核对差异开展调查。 |  |
| `validation_utility_and_waste_balance` | 水、能源和废物 | 在相同报告期和场址范围内交叉核对仪表、发票、罐体平衡、废物转移和合格产出。 | `elkay-undermount-sink-epd-2023` |
| `validation_uuid_and_units` | 带 UUID 的流 | 发布前确认公开 state-100 身份、流类型、分类、属性、单位组和参考单位；未解决行仍作为明确审查事项。 |  |
| `validation_source_use` | 外部证据 | 仅将所列来源用于其声明的过程或分类支持；不得从单一产品案例推导经验范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 用于与产品类型、主体金属/合金、制造路线、表面状态、包装状态、地域和报告期相匹配的金属卫生器具或专用零件工厂门建模 |
| excluded_use | 塑料或陶瓷卫生器具；水龙头和阀门；未安装产品的使用服务；建筑安装；使用阶段用水和清洗；维护；拆除；寿命终止；未经敏感性审查的不匹配金属牌号或路线 |
| required_metadata | 参考流限定信息；过程图；场址和地域；报告期；金属/合金及来料形态；表面状态/涂层；附件；包装状态；分配；截断；UUID 解决状态；前景数据覆盖 |
| required_quality_disclosure | 时间和场址覆盖；测量和校准；物料、能量和水平衡；条件路线证据；分配因子；上游数据集匹配；未解决 UUID 和范围证据需求 |
| update_trigger | 产品系列、主体金属/合金、成形或铸造路线、连接/退火、表面状态/涂层、隔音处理、包装、场址、能源系统、分配、上游数据集或数据质量发生实质变化 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC 3.0 版结构》，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 42911 的正式产品分类身份及层级位置 |
| `elkay-undermount-sink-epd-2023` | dataset | Elkay，《Environmental Product Declaration: Stainless Steel Undermount Sinks》，2023。https://zurnelkay.com/getattachment/de14ecc9-75c1-47cb-b9c7-efecf00e1d5f/102-1_EPD_Elkay-Undermount-Sink.pdf?lang=en-US | 代表性制造顺序；清洗、能源、水、制造废物、隔音垫和工厂包装的纳入；仅作为单一案例包装证据 |
| `usitc-drawn-stainless-steel-sinks-2024` | official_guidance | 美国国际贸易委员会，《Drawn Stainless Steel Sinks from China》，Publication 5489，2024-01。https://www.usitc.gov/sites/default/files/publications/701_731/pub5489_0.pdf | 切割、拉深、退火、焊接、磨削和抛光的起始材料及制造过程分解 |
