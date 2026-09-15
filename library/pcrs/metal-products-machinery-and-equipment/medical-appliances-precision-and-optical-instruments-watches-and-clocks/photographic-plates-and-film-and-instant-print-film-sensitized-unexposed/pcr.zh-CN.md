---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.photographic-plates-and-film-and-instant-print-film-sensitized-unexposed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 照相感光板、感光胶片及一次成像胶片（已感光、未曝光）

## 1. 范围与适用性

本 PCR 适用于可销售的已感光但未曝光照相感光板、平片、卷片及一次成像胶片单元的从摇篮到工厂大门生产。所交付产品保留感光层且未经图像曝光时，静态摄影、电影摄影、X 射线、印刷制版、缩微摄影、科学摄影及类似用途的产品均在范围内。

核心过程模型涵盖卤化银乳剂制备、片基处理、涂布和干燥、裁切加工、适用时的一次成像胶片组装以及避光包装。采用其他感光化学体系的生产者，应将每种配方特定材料和排放作为额外原子交换分别报告，并在必需限定信息中说明该化学体系。

范围不包括已曝光或已显影的摄影材料、单独销售的显影液或定影液、相机和冲洗设备、下游曝光与显影、使用阶段和寿命终止阶段。感光照相纸不在本语义边界内，除非其为所交付一次成像胶片单元不可分割的受像或结构组件。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.photographic-plates-and-film-and-instant-print-film-sensitized-unexposed |
| classification_refs | CPC 3.0：48341，精确分类语境 |
| covered_products | 已感光未曝光照相感光板；照相平片；成卷照相胶片；常规胶片和一次成像胶片单元 |
| excluded_products | 已曝光或已显影胶片和感光板；单独销售的摄影化学品；不属于一次成像胶片单元整体的感光纸；相机和冲洗设备 |
| representative_product | 以已声明规格及避光市场包装供应的可销售未曝光卤化银照相胶片 |
| production_route | 卤化银乳剂制备、片基处理、多层涂布和干燥、裁切加工、条件性一次成像胶片组装及避光包装 |
| market_state | 已感光、未曝光、质量合格并完成出货包装；声明规格、片基、成像化学体系及预期用途 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供能在已声明曝光和冲洗体系下记录潜影的未曝光感光介质 |
| How much | 工厂大门处 1 kg 可销售感光产品净质量 |
| How well | 满足生产者声明的规格、尺寸、感光度、光谱响应、图像类型、货架期和缺陷验收规范 |
| How long or cycle | 放行时的一个交付产品批次；不指定使用阶段服务寿命 |
| reference_flow_link | 参考流为合格包装产品输出 `pack_reference_product`，归一化为 1 kg 产品净质量；参考质量不含二级和三级包装 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 未曝光感光基材卷材和片材 `e568740b-8b0c-4359-8268-366cb8b6d2a6` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态（感光板、平片、卷片或一次成像胶片）；片基材料；卤化银或其他成像化学体系；黑白或彩色；预期用途；尺寸或卷材宽度和长度；齿孔及卷轴/暗盒状态；感光度标称；光谱响应；涂层面配置；适用时的一次成像胶片类型和单元数；产品净质量口径；计入产品的一体化一次避光包装；生产地理范围；参考年份；货架期和储存条件 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有前景交换归一化为 1 kg 可销售产品净质量。一次成像胶片中不可分割的片材、药包、边框和暗盒计入产品净质量；二级和三级流通包装不计入。 |
| `area_or_length_to_mass` | 感光板、片基、涂布和裁切加工记录 | Mass | kg | 运行记录采用 m2、m 或件数时，应使用同批次实测单位面积质量，或使用实测厚度和密度换算。保留原始测量、换算公式及批次标识；不得采用通用换算因子。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量能量值。kWh 乘以 3.6 换算为 MJ，并披露电网地理范围、电压以及是否计入变压器或厂内配电损耗。 |
| `gas_volume` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按供应方或仪表的基准温度和压力报告气体体积，并披露这些基准条件；不得混用标准体积和工况体积。 |
| `silver_mass_balance` | 含银投入、产品、废物和回收输出 | Mass | kg | 根据实测含银进料、涂布产品、回收材料、液体废物和固体废物保留生产周期层面的银质量平衡。不得仅凭废水总质量推算银含量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购感光化学品、片基材料、公用工程、包装组件及任何外部生产中间体到达报告场址大门，并附有上游数据集 |
| starting_condition_role | 从摇篮到工厂大门的前景制造起点；外购投入的上游生产仍由链接的背景数据集表示 |
| product_classification_scope | 经审查语义边界内的已感光未曝光照相感光板、胶片和一次成像胶片；分类代码仅作为映射语境 |
| recursive_input_rule | 已属于本产品类别的外购感光母卷或其他投入，仅作为同类别上游产品投入记录一次。报告单元只建模后续裁切加工或组装并披露部分制造边界，不得重复创建乳剂和涂布负荷。 |
| upstream_dataset_requirement | 每种外购化学品、片基、能源载体、包装组件和同类别中间体均需具备地理及技术代表性上游数据集，或明确记录数据缺口 |
| disclosure | 声明纳入的场址和过程、片基及化学路线、一次成像胶片结构、内部转移、银回收、废水处理边界、溶剂回收、能源供应、包装口径、截断和排除项 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | all datasets | 纳入从乳剂制备、片基制备或接收到涂布和干燥、裁切加工、条件性一次成像胶片组装、质量损失、避光包装、厂内废物处理及工厂大门前直接排放的过程。 | `us-patent-4564591`; `us-patent-6814329`; `us-patent-5356762` |
| `boundary_route_conditionals` | route-specific processes | 仅在相应材料实际进入已声明产品路线时纳入各片基或一次成像胶片组件行；经证明不存在的原子交换应记录为不适用，不得记录为零计量用量。 | `us-patent-4564591`; `us-patent-5356762` |
| `boundary_recursive_input` | purchased sensitized master material | 执行递归投入规则并披露上游与前景的交接点，避免重复计算涂布负荷。 |  |
| `boundary_additional_formulation_flows` | product-specific formulations | 使用时，应将每种未列出的增感剂、彩色偶合剂、坚膜剂、表面活性剂、稳定剂、底层化学品、溶剂、清洗化学品和直接排放作为独立原子交换添加；不得汇总为添加剂或化学品。 | `us-patent-4564591`; `us-patent-3849166` |
| `boundary_exclusions` | downstream life cycle | 从前景生产清单中排除图像曝光、摄影显影、客户使用和寿命终止；仅可在另行声明的下游系统中建模。 | `un-cpc-3-0-structure-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `emulsion_preparation` | 卤化银乳剂制备 | required | 所有卤化银路线；非银盐路线以完整披露的化学体系特定制备过程替代 | 前景感光乳剂生产 | 以 1 kg 参考产品所用乳剂归一化投入和公用工程 |
| `support_coating_drying` | 片基处理、涂布和干燥 | required | 所有产品；片基和溶剂卡片按实际配方和片基有条件适用 | 前景感光化和涂布母材生产 | 以 1 kg 参考产品所用涂布材料归一化投入、废物和排放 |
| `converting_packaging` | 裁切加工、一次成像胶片组装和避光包装 | required | 所有产品；一次成像胶片组件卡片仅适用于一次成像胶片单元 | 前景分切、打孔、装载、组装、检验和包装 | 1 kg 合格可销售参考产品净质量 |

### 过程：卤化银乳剂制备（`emulsion_preparation`）

#### 输入

##### 产品流

###### 硝酸银试剂（`em_silver_nitrate`）

将进入感光卤化银相沉淀过程的硝酸银作为独立投入记录。

- 选定流：硝酸银
- 流属性/单位：Mass / kg
- 数量规则：计量发放至合格及不合格乳剂批次的硝酸银净量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emulsion_materials`
- 来源：`us-patent-4564591`

###### 溴化钾试剂（`em_potassium_bromide`）

将作为溴离子来源的溴化钾单独记录；使用其他卤化物盐时，应另增其独立流行。

- 选定流：溴化钾
- 流属性/单位：Mass / kg
- 数量规则：计量发放至乳剂批次的溴化钾净量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emulsion_materials`
- 来源：`us-patent-4564591`

###### 摄影用明胶黏结剂（`em_gelatin`）

按供应干物质当量质量记录作为亲水胶体黏结剂加入的明胶。

- 选定流：摄影用明胶
- 流属性/单位：Mass / kg
- 数量规则：计量发放至乳剂批次的明胶干物质当量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emulsion_materials`
- 来源：`us-patent-4564591`

###### 乳剂制备用工艺用水（`em_process_water`）

按质量记录跨越过程边界用于溶液制备、受控洗涤和容器清洗的水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：仪表或批次记录的乳剂制备用水；循环水仅在补充水跨越边界时计入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emulsion_utilities`
- 来源：

###### 乳剂制备用电力（`em_electricity`）

单独记录反应器、混合、温控、过滤和局部通风所用外购电能。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：乳剂制备专用电表读数或分配后的总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emulsion_utilities`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：片基处理、涂布和干燥（`support_coating_drying`）

#### 输入

##### 产品流

###### PET 摄影胶片片基（`coat_pet_film_base`）

已声明产品采用聚酯片基时，记录双向拉伸 PET 胶片片基。

- 选定流：聚对苯二甲酸乙二醇酯摄影胶片片基
- 流属性/单位：Mass / kg
- 数量规则：进入片基处理和涂布的 PET 胶片片基实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_materials`
- 来源：`us-patent-3849166`; `us-patent-4564591`

###### 三醋酸纤维素摄影胶片片基（`coat_cellulose_triacetate_base`）

仅对采用该柔性片基的产品记录三醋酸纤维素胶片片基。

- 选定流：三醋酸纤维素摄影胶片片基
- 流属性/单位：Mass / kg
- 数量规则：进入涂布的三醋酸纤维素胶片片基实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_materials`
- 来源：`us-patent-4564591`

###### 玻璃片基（`coat_glass_plate`）

生产刚性照相感光板时记录未经加工的平板玻璃。

- 选定流：平板玻璃 `491a7940-d102-4981-a2b8-81bf183987df`
- 流属性/单位：Mass / kg
- 数量规则：进入清洗和涂布的合格玻璃板实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_materials`
- 来源：`us-patent-4564591`

###### 底层或涂布配方用甲醇（`coat_methanol`）

仅在外购甲醇进入已声明底层或涂布配方时记录甲醇。

- 选定流：甲醇（市场平均） `adbc8430-7937-4ade-b7a5-cb1797dda661`
- 流属性/单位：Mass / kg
- 数量规则：甲醇总投入减去有记录且返回同一过程的回收甲醇
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_materials`
- 来源：`us-patent-3849166`; `us-patent-4564591`

###### 底层或涂布配方用丙酮（`coat_acetone`）

仅在外购丙酮进入已声明底层或涂布配方时记录丙酮。

- 选定流：丙酮 `d5d65ffc-92f2-4d88-b6e7-e050445978f5`
- 流属性/单位：Mass / kg
- 数量规则：丙酮总投入减去有记录且返回同一过程的回收丙酮
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_materials`
- 来源：`us-patent-3849166`; `us-patent-4564591`

###### 涂布用工艺用水（`coat_process_water`）

按质量记录水性涂布配方、生产线清洗和受控加湿所用供水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：进入片基处理、涂布和干燥的计量补充水及清洗水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_utilities`
- 来源：`us-patent-3849166`

###### 涂布和干燥用电力（`coat_electricity`）

单独记录卷材输送、涂布、制冷、洁净室空气处理、干燥辅助设备和控制系统的电能。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：片基处理、涂布和干燥专用电表读数或分配后的总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_utilities`
- 来源：`us-patent-3849166`; `us-patent-4564591`

###### 直接热力干燥用天然气（`coat_natural_gas`）

在场内燃烧天然气用于干燥或热力空气调节时记录天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：供应至涂布线干燥器和热风系统的计量气态天然气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_utilities`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 含银涂布废水（`coat_silver_wastewater`）

在外部处理前或已声明厂内处理交接点，记录含银乳剂或涂布残留物的废水。

- 选定流：摄影材料制造含银涂布废水
- 流属性/单位：Mass / kg
- 数量规则：实测废水质量，并将银浓度和处理去向作为质量证据保留
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_wastewater`
- 来源：`us-epa-silver-risk-1980`

##### 基本流

###### 场内天然气燃烧产生的化石源二氧化碳（`coat_fossil_co2`）

报告已声明场内天然气燃烧产生的直接化石源二氧化碳；本行不含上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按照 `calc_combustion_co2`，根据计量天然气、供应方碳含量及实测或有记录的氧化率计算，或采用经核实的烟气质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：

### 过程：裁切加工、一次成像胶片组装和避光包装（`converting_packaging`）

#### 输入

##### 产品流

###### 一次成像胶片受像片（`pack_image_receiving_sheet`）

仅对实际包含独立受像元件的一次成像胶片设计记录受像片。

- 选定流：一次成像胶片受像片
- 流属性/单位：Mass / kg
- 数量规则：发放至一次成像胶片组装的受像片实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`us-patent-5356762`

###### 一次成像胶片冲洗药剂（`pack_instant_processing_composition`）

仅对含可破裂药包的自显影一次成像胶片单元记录密封冲洗药剂。

- 选定流：一次成像胶片冲洗药剂
- 流属性/单位：Mass / kg
- 数量规则：获准装入胶片单元的冲洗药剂实测灌装质量，包括有记录的灌装损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`us-patent-5356762`

###### 一次成像胶片塑料暗盒（`pack_plastic_cassette`）

模塑避光暗盒保留为所交付一次成像胶片包组成部分时记录该暗盒。

- 选定流：一次成像胶片塑料暗盒
- 流属性/单位：Mass / kg
- 数量规则：组装进已放行一次成像胶片包的暗盒实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`us-patent-5356762`

###### 二级包装纸盒（`pack_paper_box`）

将跨越工厂大门的纸或纸板销售包装盒与参考产品净质量分开记录。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：Mass / kg
- 数量规则：出货可销售产品消耗的纸盒实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`us-patent-6814329`

###### 裁切加工和包装用电力（`pack_electricity`）

单独记录分切、打孔、装载、组装、检验和包装用电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：裁切加工和包装专用电表读数或分配后的总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_converting_utilities`
- 来源：`us-patent-6814329`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格未曝光感光产品（`pack_reference_product`）

仅将满足已声明规范的已放行、已感光且未曝光产品计为参考输出。

- 选定流：未曝光感光基材卷材和片材 `e568740b-8b0c-4359-8268-366cb8b6d2a6`
- 流属性/单位：Mass / kg
- 数量规则：批次放行的合格产品净质量，归一化为恰好 1 kg 参考流
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_output`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 已感光摄影胶片边料（`pack_film_trim_waste`）

将裁切加工产生的涂布边料和齿孔废料记录为独立含银固体废物。

- 选定流：已感光摄影胶片边料废物
- 流属性/单位：Mass / kg
- 数量规则：送往回收、处理或处置的涂布边料和齿孔废料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_wastes`
- 来源：`us-patent-6814329`; `us-epa-silver-risk-1980`

###### 不合格已感光摄影材料（`pack_offspec_photographic_material`）

将感光处理后报废的涂布感光板、胶片或已组装一次成像胶片与清洁未涂布片基废料分开记录。

- 选定流：不合格已感光摄影材料废物
- 流属性/单位：Mass / kg
- 数量规则：感光处理后报废并送往银回收、处理或处置的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_wastes`
- 来源：`us-epa-silver-risk-1980`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared foreground processes | 优先按乳剂系列、涂布线、片基类型、规格和包装生产周期进行过程细分和直接计量，再考虑分配。 |  |
| `allocation_mass_or_area` | inseparable shared coating campaigns | 无法细分时，按实测涂布面积并以产品特定湿涂或干涂质量修正，分配片基、涂布材料、公用工程和损失；仅在面积和涂层负载数据均不可得时才采用产品净质量，并披露所用层级。 |  |
| `allocation_packaging` | converting and packaging | 按物料清单和合格单元数将规格特定包装组件直接归属；不得将一次成像胶片组件分配给常规胶片或感光板产品。 | `us-patent-5356762`; `us-patent-6814329` |
| `allocation_silver_recovery` | recovered silver-bearing outputs | 按研究已声明的分配或替代方法处理回收银或含银浓缩物。分别报告回收质量、品质、去向和任何抵扣负荷；不得因回收物有收入而省略回收。 | `us-epa-silver-risk-1980` |
| `allocation_rework` | internal rework | 将内部返工乳剂或片基返回消耗过程且不创建共产品；补充投入、不可回收损失和额外能耗各计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_emulsion_materials` | `emulsion_preparation` | 硝酸银、溴化钾和明胶投入 | 批次领料和退料记录 | 物料标识；等级；批号；领料总量；退料；干固体；批次标识；合格乳剂量 | 将仓库领退料与签署的批次配方核对 | kg | 每批 | 代表性连续 12 个月或较短生产周期的全部期间 | 报告场址全部乳剂生产线 | 汇总净消耗质量，并通过合格产品输出归一化 | 经校准秤具；供应方证书；配方版本；批次核对 |
| `cp_emulsion_utilities` | `emulsion_preparation` | 工艺用水和电力 | 仪表及批次公用工程记录 | 仪表起止读数；批次标识；补充水；循环量；电量；分配动因 | 使用专用仪表；否则按运行小时和实测负荷核对并分配共用仪表总量 | kg 水；MJ 电力 | 每批及每月 | 与产品输出相同期间 | 报告场址全部乳剂公用工程 | 汇总补充水和电力并按合格输出归一化 | 仪表校准；公用工程发票核对；停机记录 |
| `cp_coating_materials` | `support_coating_drying` | 片基和溶剂投入 | 卷材/板材领料、罐体投料和回收记录 | 片基材料；批号；投入质量；未用退料；溶剂投料；回收溶剂；涂布生产周期 | 核对物料领用、罐体记录和回收系统返料 | kg | 每个生产周期 | 与产品输出相同期间 | 范围内全部涂布线 | 汇总外部净投入；排除经核实返回同一过程的闭环回用 | 地磅或秤具检查；物料清单；溶剂存量平衡 |
| `cp_coating_utilities` | `support_coating_drying` | 水、电力和天然气 | 公用工程仪表及生产线记录 | 仪表读数；基准条件；生产线标识；运行小时；产品生产周期 | 读取专用仪表，或按实测生产线负荷和运行时间分配已核对共用仪表总量 | kg 水；MJ 电力；m3 气体 | 每班、每生产周期及每月 | 与产品输出相同期间 | 涂布、干燥及相关洁净室公用工程 | 按生产周期汇总并按合格输出归一化 | 仪表校准；发票；基准条件记录；分配计算 |
| `cp_coating_wastewater` | `support_coating_drying` | 含银废水 | 流量计、储罐转移及实验室记录 | 废水质量或体积；密度；银浓度；流股来源；处理去向；回收银 | 在处理交接点计量各分流，并配套代表性实验室结果 | kg；mg Ag/L | 每次转移或每日混合样 | 与产品输出相同期间 | 范围内全部含银废水流股 | 需要时以实测密度换算体积；汇总质量并单独保留银负荷 | 仪表校准；样品流转记录；实验室方法；处理联单 |
| `cp_combustion_emissions` | `support_coating_drying` | 直接化石源二氧化碳 | 燃料仪表和供应方组成记录 | 气体体积；温度；压力；碳含量；氧化率；可得时的烟气结果 | 核对计量燃料、供应方证书及经核实的燃烧或烟气记录 | m3 气体；kg CO2 | 每月并分配到生产周期 | 与产品输出相同期间 | 归属于涂布/干燥的全部场内燃气燃烧 | 应用 `calc_combustion_co2` 并按合格输出归一化 | 仪表校准；供应方证书；计算工作簿或烟气报告 |
| `cp_packaging_materials` | `converting_packaging` | 一次成像胶片片材、药剂、暗盒和纸盒 | 物料清单、领用和计数记录 | 组件标识；材料；单件质量；领用件数；合格件数；报废件数；退回质量 | 将组件领用与放行单元数及实测组件质量核对 | kg；件 | 每个包装或组装生产周期 | 与产品输出相同期间 | 范围内全部裁切加工和组装线 | 汇总组件净消耗质量并按产品净输出归一化 | 已批准物料清单；秤具检查；领退料核对 |
| `cp_converting_utilities` | `converting_packaging` | 电力 | 分表及设备记录 | 仪表读数；设备标识；运行小时；生产周期；合格输出 | 读取生产线分表，或按实测设备负荷和运行时间分配已核对总表电量 | MJ | 每班及每月 | 与产品输出相同期间 | 分切、打孔、装载、组装、检验和包装 | 汇总并按合格输出归一化 | 仪表校准；发票核对；设备记录 |
| `cp_product_output` | `converting_packaging` | 合格参考产品 | 放行、计数和净质量记录 | 批次；规格；合格数量；抽样单件质量；产品净质量；包装口径；放行状态 | 采用经校准的整体称量，或以合格件数乘经代表性抽样的单件质量确定批次净质量 | kg | 每个放行批次 | 与全部投入相同期间 | 已声明数据集的全部放行产品 | 汇总放行净质量；全部交换以此归一化 | 放行证书；秤具校准；抽样方案；质量核对 |
| `cp_solid_wastes` | `converting_packaging` | 已感光边料和不合格材料 | 废物容器和回收记录 | 废物类型；感光状态；质量；含银状态；去向；回收证书 | 将涂布边料和不合格材料与清洁片基分流，并在转移时称量 | kg | 每个容器或每次转移 | 与产品输出相同期间 | 范围内全部裁切加工和质量报废点 | 分别汇总各原子废物流并按合格输出归一化 | 秤具校准；废物联单；回收凭证；分流审核 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | all inventory rows | 归一化量 = 期间交换量 / 同期合格参考产品净质量 | 同期交换记录；`cp_product_output` 净质量 | 每 1 kg 参考产品的交换量 |  |
| `calc_area_length_mass` | area-, length- or count-based support and product records | 质量 = 实测面积 × 批次特定单位面积质量；或质量 = 实测体积 × 批次特定密度；件数换算按已批准抽样方案使用抽样平均单件质量 | 面积或长度及宽度；厚度；密度；件数；抽样单件质量 | 投入或输出 kg |  |
| `calc_combustion_co2` | `coat_fossil_co2` | 化石源 CO2 质量 = 计量气体量 × 供应方化石碳含量 × 氧化率 × 44/12，并核对单位及记录基准条件 | 天然气记录；碳含量；氧化率 | kg 化石源 CO2 |  |
| `calc_silver_balance` | campaign silver accounting | 银投入 = 产品中银 + 回收银 + 液体废物中银 + 固体废物中银 + 可量化库存变化；报告未解决的不平衡，不强制配平 | 试剂证书；产品分析或涂层负载；废物分析；回收记录；库存变化 | 生产周期银平衡及闭合率 | `us-epa-silver-risk-1980` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and inputs | 使产品规格、片基、化学体系、涂层配置、形态和市场状态与已声明数据集一致；对化学敏感投入保留供应方等级和批号。 | 放行规范；物料清单；供应方证书；批次记录 |
| `dq_temporal` | all foreground records | 连续生产时采用代表性连续 12 个月；生产期较短时采用完整生产周期；识别异常停机或启动期间。 | 带日期仪表记录、批次记录、生产日历和偏差记录 |
| `dq_completeness` | material, energy, waste and emission rows | 核对采购/领用、退回、库存变化、回收材料、产品和废物；解释每个省略的预期行和每个平衡缺口。 | 质量和能量核对；截断登记；废物联单 |
| `dq_silver` | silver-bearing system | 保持从含银试剂到涂布产品、废水、固体废物和回收的可追溯性；报告浓度测定方法和检出限。 | 实验室报告；回收凭证；银质量平衡 |
| `dq_allocation` | shared processes | 记录过程细分尝试、分配层级、动因及重大共享负荷的敏感性。 | 仪表图；生产周期计划；分配工作簿；敏感性结果 |
| `dq_geography_technology` | upstream datasets | 匹配供应方地理范围、电网、片基技术、溶剂回收、干燥技术和处理路线；否则披露并评估每项不匹配。 | 供应方所在地；数据集元数据；技术说明；代表性评估 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | 确认输出已感光、未曝光且质量合格；参考数量恰为 1 kg 产品净质量，且必需限定信息完整。 | `un-cpc-3-0-structure-2025` |
| `validation_atomic_inventory` | process inventory | 确认每个选定流均为一个原子材料、能源、废物或排放交换；配方特定新增项必须有独立行和路线条件。 |  |
| `validation_process_alignment` | process map and cards | 确认每个必需过程均有匹配清单章节，且每个条件性行与已声明片基、化学体系及一次成像胶片结构一致。 | `us-patent-4564591`; `us-patent-5356762`; `us-patent-6814329` |
| `validation_mass_energy` | foreground calculations | 根据保留的原始记录重新计算参考归一化、件数/面积换算、公用工程换算及产品/废物质量核对。 |  |
| `validation_silver_balance` | silver-bearing routes | 检查生产周期的银投入、产品、回收材料、废水、固体废物和库存变化；对无法解释的不平衡报错，不插入估算损失流。 | `us-epa-silver-risk-1980` |
| `validation_uuid_scope` | Tiangong references | 确认每个 UUID 仍为公开 state 100，且名称、流类型、分类、属性、单位组和产品状态匹配；未解决行保持 UUID 明确为空。 |  |
| `validation_no_external_ranges` | all important flows | 确认在至少两份相互独立、经原文核实且边界兼容的来源支持综合判断之前，不声称外部经验范围；数据集数值采用前景记录。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 表示已声明已感光未曝光摄影产品从摇篮到工厂大门生产的 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 产品及地理范围匹配时，用于摄影介质、相机、医疗或工业成像、印刷制版、供应链筛选和采购的产品系统建模 |
| allowed_use | 在核查产品形态、片基、成像化学体系、规格、一次成像胶片结构、地理范围、生产年份、能源系统、溶剂回收和处理路线后使用 |
| excluded_use | 直接表示已曝光或已显影材料、照片冲洗、非摄影涂层介质、单独销售的摄影化学品、使用阶段成像或寿命终止 |
| required_metadata | PCR 标识和版本；产品限定信息；参考质量口径；地理范围和年份；纳入场址和过程；片基及化学路线；一次成像胶片组件；分配；上游数据集；截断；不确定性；UUID 缺口 |
| required_quality_disclosure | 时间覆盖；仪表及质量平衡质量；银平衡；分配敏感性；完整性；技术和地理不匹配；回收及处理边界；未解决 UUID 和范围证据需求 |
| update_trigger | 片基或感光化学体系、涂层结构、溶剂或银回收、干燥能源、一次成像胶片结构、包装、场址、电网、处理路线、分配动因、产品质量口径发生变化，或前景记录有重大更正 |

## 11. 数据源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-07） | 正式产品分类身份及已感光未曝光市场状态 |
| `cn-nbs-photographic-film-classification-2010` | official_guidance | 中华人民共和国国家统计局，《统计用产品分类目录》产品 26180102，https://www.stats.gov.cn/sj/tjbz/tjypflml/2010/26/18/01/26180102.html（原文核验日期：2026-09-07） | 未曝光感光硬片及平面软片、照相胶片和一次成像感光胶片的专业中文术语 |
| `us-patent-4564591` | literature | 美国专利 US4564591A，《Silver halide color photographic material》，https://patents.google.com/patent/US4564591A/en（原文核实日期：2026-09-07） | 片基材料、卤化银多层涂布、配方添加物及涂布和干燥过程分解 |
| `us-patent-3849166` | literature | 美国专利 US3849166A，《Method for providing subbing layer of photographic film》，https://patents.google.com/patent/US3849166A/en（原文核实日期：2026-09-07） | PET 片基处理、水性步骤、甲醇和丙酮投入、涂布和干燥 |
| `us-patent-6814329` | literature | 美国专利 US6814329B2，《Production managing method for photo film production》，https://patents.google.com/patent/US6814329B2/en（原文核实日期：2026-09-07） | 分切、打孔、装载、检验和避光包装过程分解 |
| `us-patent-5356762` | literature | 美国专利 US5356762A，《Film-sheet assemblage for peel-apart self-developing film》，https://patents.google.com/patent/US5356762A/en（原文核实日期：2026-09-07） | 一次成像胶片感光片、受像片、冲洗液药包及避光暗盒边界 |
| `us-epa-silver-risk-1980` | official_guidance | 美国环境保护署，《Exposure and Risk Assessment for Silver》，1980，https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9101LCQG.TXT（原文核实日期：2026-09-07） | 制造过程含银废水、受污染乳剂和边料、回收及银质量平衡要求 |
