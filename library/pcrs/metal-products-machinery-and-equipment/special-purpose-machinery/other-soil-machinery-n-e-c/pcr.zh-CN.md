---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-soil-machinery-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他土壤作业机械，未另分类

## 1. 范围与适用性

本 PCR 适用于 CPC 44119 剩余子类中的完整农业、园艺或林业整地或土壤耕作机械，以及草坪或运动场滚压机械，且这些产品未在 CPC 44111 至 44115 中单独分类。边界涵盖从外购材料和部件进入工厂开始，经材料加工、连接、适用时的表面涂装、总装、出厂测试，直至完整机械在工厂门交付。

本类别不包括犁；耙、松土机、耕耘机、除草机和锄；播种机、种植机和移栽机；厩肥撒布机和肥料施布机；单独销售的零部件；自行式土方机械；拖拉机；使用、维护和报废阶段。不得仅因商品名称含“土壤机械”就归入本类别；生产者必须说明为何不存在更具体的土壤机械子类。该过程模式面向完整机械制造，不把替换零部件制造作为参考产品。

为使最低部件清单可执行，本 PCR 采用 Agri-Fab 45-01791 型同类的非自行式 24 英寸 × 36 英寸钢制牵引式草坪压路机作为有界代表配置。制造商手册识别出焊接钢制滚筒、刮土杆、两根牵引管、两个牵引支架、两个可更换塑料轴承、垫圈、三种规格的螺栓、锁紧螺母、注排口塞、开口销、牵引销和发夹销。该配置仅用于完整性核查，不缩窄 CPC 44119，也不构成类别平均物料清单。其他 CPC 44119 机械必须保留剩余类别判定，并以自身型号特定的原子部件行替换本代表清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-soil-machinery-n-e-c |
| classification_refs | CPC 3.0：44119，其他土壤作业机械，未另分类 |
| covered_products | 未被 CPC 44111–44115 已命名子类覆盖的完整非自行式整地或耕作机械，以及草坪或运动场滚压机械 |
| excluded_products | 犁；耙、松土机、耕耘机、除草机和锄；播种机、种植机和移栽机；厩肥撒布机和肥料施布机；单独供应的零部件；拖拉机；自行式土方机械 |
| representative_product | 已声明的完整 CPC 44119 机械；有界完整性案例为一台 24 英寸 × 36 英寸非自行式钢制牵引式草坪压路机，包括焊接滚筒、刮土杆、牵引装置、轴承、紧固件和注排口塞 |
| production_route | 使用外购金属产品和部件，经切割或成形、条件性焊接、条件性预处理和涂装、总装及测试完成的工厂制造路线 |
| market_state | 制造商工厂门处的完整成品机械，包括标准附件以及所声明产品实际随附的工作液；用户在使用阶段加入草坪压路机的水或砂配重不属于工厂门产品质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台可执行所声明整地、耕作或滚压功能并可交付使用的完整剩余类土壤作业机械或机具 |
| How much | 工厂门处 1 kg 成品机械 |
| How well | 符合已声明型号、配置、作业幅宽或能力、连接或驱动接口、适用安全规范及随附附件清单 |
| How long or cycle | 从制造开始到工厂门放行的一个完整制造周期；预期寿命和作业负荷另行声明，不属于本质量基准制造参考流 |
| reference_flow_link | `finished_machinery` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 其他土壤机械（未另说明） `fb0ebf28-3523-4021-9119-dbfbb0a2f0f0` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造商与型号；具体土壤作业功能；配置与作业幅宽或能力；连接、动力或驱动接口；主要材料牌号；涂层体系；随附附件；已加注流体数量；产品净质量；工厂门地域和年份；分配与再生材料声明 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、产品说明、过程备注或参考流备注中声明。Tiangong 公共参考流的 `generalComment` 为空，因此不提供上述任何前景限定信息。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 成品参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 总装和加注完成后测量成品净质量；排除可重复使用的运输工装，并排除不作为产品销售组成部分的包装。所有清单数量均归一化至 1 kg 该参考产品。 |
| `energy_conversion` | 电力和燃料 | Energy 或所选燃料属性 | MJ、kWh、kg 或按记录的 m3 | 保留计量单位和换算因子。电力只可按 1 kWh = 3.6 MJ 在 kWh 与 MJ 间换算；无已记录密度和参比条件时不得把燃料体积换算为质量。 |
| `material_mass` | 外购材料、耗材、工作液和废物 | Mass | kg | 使用扣除可重复使用容器后的接收或领用净质量。发票若以件、长度、面积或体积计量，应保留原始记录，并记录实测或供应商特定的质量换算。 |
| `direct_emission_mass` | 直接基本流排放 | Mass | kg | 按实际排放环境介质报告捕集或处理后的排放。若未记录适用工艺、控制状态和计算，不得替代使用排放因子或不同空气子类别。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入制造场址前景边界的外购材料、部件、耗材、能源载体和工作液 |
| starting_condition_role | 门到门制造起点；与经过核实的上游数据集结合，用于形成摇篮到工厂门结果 |
| product_classification_scope | 仅限完整 CPC 44119 机械；CPC 44111–44115 已命名产品和单独供应的零部件不属于参考产品范围 |
| recursive_input_rule | 外购部件即使属于土壤机械分类，也应作为一个具体部件产品投入并链接其上游数据集；不得将其重标为 CPC 44119 参考产品，也不得在前景过程内递归展开非现场制造活动 |
| upstream_dataset_requirement | 每种外购材料、部件、燃料、电力、水、涂料和处理服务均应链接时间和地域上具有代表性的上游数据集；披露代理数据，并避免重复计入已在前景中记录的供应商活动 |
| disclosure | 声明场址、年份、产品型号和配置、过程技术、外包工序、涂装路线、焊接路线、测试燃料、处理路线、随产品出厂的包装以及排除项 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_factory_operations` | foreground_system_boundary | 纳入现场材料准备、成形或机加工、连接、适用时的表面准备和涂装、总装、工作液加注、出厂测试、内部搬运以及废物或排放控制，直至工厂门放行。 | `us-epa-ap42-electric-arc-welding-1995`; `us-epa-misc-metal-surface-coating-tsd-2001` |
| `boundary_purchased_inputs` | foreground_system_boundary | 将每种外购材料、部件、耗材、燃料、电力供应和处理服务记录为独立技术流交换，并链接适用的上游数据集。 |  |
| `boundary_outsourced_steps` | foreground_system_boundary | 若外包制造、热处理、涂装或其他生产服务构成所声明成品，应予纳入，并披露往返供应商的运输是否计入。 |  |
| `boundary_packaging` | foreground_system_boundary | 将随产品供应的每个具体包装组件作为独立清单交换纳入；不离开场址的可重复使用工装予以排除并说明其处理。 |  |
| `boundary_exclusions` | foreground_system_boundary | 排除产品使用、维护、替换零部件和报废阶段。除非研究目标明确要求，否则排除资本设备和建筑基础设施；如纳入，应单独报告。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_fabrication` | 材料准备、制造和连接 | required |  | 将外购金属产品和部件转化为机械结构和作业组件的前景过程 | 每 1 kg 成品机械 |
| `surface_coating` | 表面准备和涂装 | conditional | 报告边界内任何部件进行清洗、预处理、喷漆、粉末涂装或其他涂层处理时纳入。 | 防腐和表面精饰前景过程 | 每 1 kg 成品机械及已声明涂装面积 |
| `final_assembly_testing` | 总装、加注、测试和放行 | required |  | 成品参考产品的总装和工厂门放行前景过程 | 每 1 kg 成品机械 |

### 过程：材料准备、制造和连接（`material_fabrication`）

#### 输入

##### 产品流

###### 进一步加工的合金钢板（`fabrication_steel_plate`）

仅当物料清单中存在这一进一步加工的合金钢板状态时记录。其他钢种、型材、铸件和有色金属产品应分别新增原子流行，不得汇总到此行。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位：Mass / kg
- 数量规则：实测本过程领用质量，包括在前景内产生的已计量边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

###### 药芯焊丝（`fabrication_flux_cored_wire`）

仅在药芯焊丝电弧焊路线中记录。实心焊丝、焊条及其他填充金属必须以精确身份另列。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：所声明焊接路线的焊丝领用量扣除未开封退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`us-epa-ap42-electric-arc-welding-1995`

###### 二氧化碳保护气（`fabrication_carbon_dioxide_shielding`）

仅在二氧化碳作为焊接保护气时记录。其他保护气体和混合气必须另列原子流行。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：供应商交付质量，或根据气瓶期初和期末库存分配的消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`us-epa-ap42-electric-arc-welding-1995`

###### 制造用电（`fabrication_electricity`）

记录本过程中切割、成形、机加工、焊接、通风及相关制造设备消耗的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表电量；无分表时按已记录设备工时和额定或实测负荷分配场址总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 制造直接加热用天然气（`fabrication_natural_gas`）

仅当边界内存在分配给本过程的直接燃烧加热或热处理时记录气态天然气。同一实测燃料量必须用于直接燃烧碳排放计算；除非有过程分表或已记录因果分配依据，否则不纳入一般空间供热。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按已记录参比条件计量，并扣除无关场址用途的体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 制造工艺用水（`fabrication_process_water`）

仅对已声明的湿式制造路线记录工艺用水。最低路线仅允许记录有记录证明制造过程无液体排出的闭路循环补水。若有单程供水、槽液排放、带出液或其他液体离开过程，必须将每种具体废切削液、清洗液、漂洗液或处理物流分别列为原子输出行；不得采用笼统的废水行。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：本过程实测净补水或供水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 钢制制造废料（`fabrication_steel_scrap`）

记录作为废物离开本过程的含铁边角料、切屑和报废钢件。若不锈钢、特定合金、受污染废料或废钢丝的回收或处理不同，应分别记录。

- 选定流：废钢 `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- 流属性/单位：Mass / kg
- 数量规则：实测外运废钢质量，并按废料箱期初和期末库存修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 药芯焊丝电弧焊渣（`fabrication_welding_slag`）

当所声明焊丝和焊接规程产生需清除的渣层时，记录从药芯焊缝上清除的固体焊渣。磨削粉尘、废喷砂介质和一般地面清扫物属于不同废物，必须另列原子行。

- 选定流：药芯焊丝电弧焊渣
- 流属性/单位：Mass / kg
- 数量规则：实测专用容器内收集焊渣的质量，按容器期初和期末库存修正，并排除已计作废钢的母材边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

##### 基本流

###### 排入空气的空气动力学直径不超过 10 微米颗粒物（`fabrication_pm10_air`）

存在电弧焊时记录捕集和控制后的 PM10 直接排放。Tiangong UUID 尚未解决，因为现有精确粒径候选仅限城市空气高架排放；数据包必须声明实际排放环境介质，不得默认采用该候选。

- 选定流：排入空气的空气动力学直径不超过 10 微米颗粒物
- 流属性/单位：Mass / kg
- 数量规则：针对所声明焊接工艺、焊材、母材和运行条件实测的控制后排放质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-ap42-electric-arc-welding-1995`

###### 制造加热产生的化石源二氧化碳（`fabrication_combustion_fossil_carbon_dioxide`）

在本过程燃烧 `fabrication_natural_gas` 时，记录直接排放的化石源二氧化碳。该排放必须与保护气损失和出厂测试燃烧分开。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测直接排放量，或依据实测燃气、供应商含碳量和氧化证据形成的燃料碳平衡；仅报告实际排放环境介质，若存在更具体介质则替换本流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### 化石源二氧化碳保护气排放（`fabrication_shielding_fossil_carbon_dioxide`）

仅对供应商证据确认属于化石来源且排入适用空气环境介质的保护气二氧化碳部分使用本行。不得根据产品流名称推定化石来源。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：化石源保护气供应质量，扣除退回供应商的气瓶余气、有记录回收量、产品中保留量及其他实测去向；已知实际空气环境介质时采用相应精确流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-ap42-electric-arc-welding-1995`

###### 生物源二氧化碳保护气排放（`fabrication_shielding_biogenic_carbon_dioxide`）

仅对供应商证据确认属于生物来源的保护气二氧化碳部分使用本行。混合来源必须拆分，不得与化石源二氧化碳合并。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：生物源保护气供应质量，扣除退回供应商的气瓶余气、有记录回收量、产品中保留量及其他实测去向；已知实际空气环境介质时采用相应精确流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-ap42-electric-arc-welding-1995`

### 过程：表面准备和涂装（`surface_coating`）

#### 输入

##### 产品流

###### 机械用涂料（`coating_paint`）

记录原始设备涂装使用的涂料质量。树脂体系、溶剂型或水性、固体分、颜色和供应商是必需限定信息；粉末涂料和预处理化学品必须另列。

- 选定流：涂料 `b2aa1a35-1823-4b13-96db-d5b89eda2db5`
- 流属性/单位：Mass / kg
- 数量规则：涂料领用量扣除密封退料；回用的回收过喷料单独记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`us-epa-misc-metal-surface-coating-tsd-2001`

###### 涂装线工艺用水（`coating_process_water`）

仅在实际使用水洗、含水预处理或漂洗时记录。闭路循环量不作为消耗量；仅记录实测补水，并分别核算每次槽液排放、漂洗排液、带出液去向和蒸发损失。干式或非水路线必须以过程证据将本行及相关含水化学品和液体输出行标为不适用。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：涂装线实测补水量和单程供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：

###### 涂装线用电（`coating_electricity`）

记录分配给所纳入涂装路线的预处理泵、施涂设备、通风、治理、闪干和固化设备消耗的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：采用过程分表电量；否则按实测设备负荷和运行时间分配经核对的涂装区域电量，并与制造和总装用电分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 涂层固化用天然气（`coating_natural_gas`）

仅在直接燃气涂装烘箱或其他路线特定热工序消耗天然气时记录。电力、蒸汽和其他燃料必须分别列为原子交换，不得合并到本行。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按已记录参比条件采用烘箱或涂装线分表体积；无分表时按实测燃烧器运行时间和额定或实测负荷分配，并与场址燃气总表核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 碱性预处理用氢氧化钠（`coating_sodium_hydroxide`）

仅当氢氧化钠是已记录的含水碱性清洗或预处理槽成分或补加化学品时记录。其他清洗剂、酸、转化膜化学品和槽液添加剂必须使用各自精确行。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：记录接收或领用的氢氧化钠有效成分质量，而非溶液总质量；保留浓度、溶液质量和含量计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废油漆（`coating_waste_paint`）

记录作为废物离开涂装过程的弃置油漆、捕集过喷料和不可用混合油漆。若水性涂料废物、富溶剂废物和处理污泥的物态或处理路线不同，应分别记录。

- 选定流：废油漆 `d202996c-dc0d-4d90-a161-87a21f0e9616`
- 流属性/单位：Mass / kg
- 数量规则：转移至现场或场外处理时的实测废油漆质量，扣除可重复使用容器
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`us-epa-misc-metal-surface-coating-tsd-2001`

###### 金属预处理废碱液（`coating_waste_alkaline_liquor`）

仅在含水碱性槽液排放或转移处理时记录废碱液。必须与漂洗排液、废油漆、处理污泥及退回供应商的未用化学品分开。

- 选定流：废碱液 `ce738ef0-a711-4650-a38b-34479efd7559`
- 流属性/单位：Mass / kg
- 数量规则：实测转移废碱液质量，并按专用槽罐期初和期末库存修正；记录含水率、有效碱度、污染物和处理去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 金属预处理含水漂洗排液（`coating_rinse_discharge`）

记录从已声明含水金属预处理漂洗阶段流出并进入处理或排放的实测液体。本行不是笼统废水占位：必须识别漂洗阶段、化学组成、逆流或单程配置、污染物负荷和去向；其他洗水和槽液排放应分开。

- 选定流：金属表面预处理含水漂洗排液
- 流属性/单位：Mass / kg
- 数量规则：实测离开漂洗阶段的质量，并按漂洗槽期初和期末库存及内部循环修正；仅在有实测密度和参比条件时由体积换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

##### 基本流

###### 排入空气的非甲烷挥发性有机化合物（`coating_nmvoc_air`）

使用含有机溶剂的预处理或涂料时，记录来自预处理、施涂、闪干和固化的控制后 NMVOC 排放。

- 选定流：非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测排放量；或采用包含配方 VOC、捕集废物、回收和销毁记录的场址特定质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-misc-metal-surface-coating-tsd-2001`

###### 涂装烘箱燃烧产生的化石源二氧化碳（`coating_combustion_fossil_carbon_dioxide`）

在涂装路线燃烧 `coating_natural_gas` 时，记录直接排放的化石源二氧化碳。本直接排放行不包括燃料生产上游排放或电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测直接排放量，或采用匹配的涂装燃气量、供应商含碳量和氧化证据形成的碳平衡；选择实际精确空气环境介质
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：

### 过程：总装、加注、测试和放行（`final_assembly_testing`）

#### 输入

##### 产品流

以下部件行落实 Agri-Fab 45-01791 同类代表配置的完整清单。手册件数仅用于完整性核查，不是归一化数量；所声明型号的每一精确部件族均须记录实测质量。现场制造的部件应记录其材料和加工负荷及内部转移，不得再次计作外购部件。其他 CPC 44119 机械必须在保留剩余类别判定的同时，以同等明确的型号特定清单替换下表。

| 代表部件 | 手册件数 | 必需行 |
| --- | ---: | --- |
| 焊接钢制滚筒总成 | 1 | `assembly_roller_assembly` |
| 刮土杆 | 1 | `assembly_scraper_bar` |
| 牵引管 | 2 | `assembly_hitch_tube` |
| 牵引支架 | 2 | `assembly_hitch_bracket` |
| 可更换塑料轴承 | 2 | `assembly_plastic_bearing` |
| 5/16-18 × 3 英寸六角螺栓 | 2 | `assembly_hex_bolt_5_16x3` |
| 5/16-18 × 2-1/4 英寸六角螺栓 | 2 | `assembly_hex_bolt_5_16x2_25` |
| 5/16-18 × 1-3/4 英寸六角螺栓 | 2 | `assembly_hex_bolt_5_16x1_75` |
| 5/16-18 六角锁紧螺母 | 6 | `assembly_hex_lock_nut` |
| 1 英寸平垫圈 | 2 | `assembly_flat_washer` |
| 压路机注排口塞 | 1 | `assembly_fill_plug` |
| 5/32 × 1-1/2 英寸开口销 | 2 | `assembly_cotter_pin` |
| 牵引销 | 1 | `assembly_hitch_pin` |
| 1/8 英寸发夹销 | 1 | `assembly_hair_cotter_pin` |

###### 焊接钢制滚筒总成（`assembly_roller_assembly`）

记录代表配置中标为 Roller Ass'y 的完整焊接钢制滚筒及轴总成。使用阶段加入的水或砂不属于该工厂门部件。

- 选定流：焊接钢制草坪压路机滚筒总成
- 流属性/单位：Mass / kg
- 数量规则：实测每台代表机械安装的一套精确滚筒总成净质量，并区分外购投入或有记录的内部转移
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_schedule`
- 来源：`agri-fab-steel-tow-roller-45-01791`

###### 刮土杆（`assembly_scraper_bar`）

记录代表压路机安装的精确刮土杆，不得与滚筒或牵引管合并。

- 选定流：草坪压路机刮土杆
- 流属性/单位：Mass / kg
- 数量规则：实测每台代表机械安装的一根刮土杆净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_schedule`
- 来源：`agri-fab-steel-tow-roller-45-01791`

###### 牵引管（`assembly_hitch_tube`）

将型号特定牵引管作为一个部件身份记录；代表配置使用两个相同部件。

- 选定流：型号特定草坪压路机牵引管
- 流属性/单位：Mass / kg
- 数量规则：实测每台代表机械安装的两个精确牵引管合计质量，并保留单件质量和件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_schedule`
- 来源：`agri-fab-steel-tow-roller-45-01791`

###### 牵引支架（`assembly_hitch_bracket`）

将型号特定牵引支架与牵引管和销件分开记录；代表配置使用两个相同部件。

- 选定流：型号特定草坪压路机牵引支架
- 流属性/单位：Mass / kg
- 数量规则：实测每台代表机械安装的两个精确牵引支架合计质量，并保留单件质量和件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_schedule`
- 来源：`agri-fab-steel-tow-roller-45-01791`

###### 可更换塑料轴承（`assembly_plastic_bearing`）

将可更换塑料轴承与钢垫圈和轴分开记录；代表配置使用两个相同轴承。

- 选定流：草坪压路机塑料滑动轴承
- 流属性/单位：Mass / kg
- 数量规则：实测每台代表机械安装的两个精确塑料轴承合计质量，并根据供应商规格记录聚合物身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_schedule`
- 来源：`agri-fab-steel-tow-roller-45-01791`

###### 5/16-18 × 3 英寸六角螺栓（`assembly_hex_bolt_5_16x3`）

仅记录 5/16-18 × 3 英寸六角螺栓；代表配置使用两个。

- 选定流：5/16-18 × 3 英寸六角螺栓
- 流属性/单位：Mass / kg
- 数量规则：实测每台代表机械安装的两个精确螺栓合计质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_schedule`
- 来源：`agri-fab-steel-tow-roller-45-01791`

###### 5/16-18 × 2-1/4 英寸六角螺栓（`assembly_hex_bolt_5_16x2_25`）

仅记录 5/16-18 × 2-1/4 英寸六角螺栓；代表配置使用两个。

- 选定流：5/16-18 × 2-1/4 英寸六角螺栓
- 流属性/单位：Mass / kg
- 数量规则：实测每台代表机械安装的两个精确螺栓合计质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_schedule`
- 来源：`agri-fab-steel-tow-roller-45-01791`

###### 5/16-18 × 1-3/4 英寸六角螺栓（`assembly_hex_bolt_5_16x1_75`）

仅记录 5/16-18 × 1-3/4 英寸六角螺栓；代表配置使用两个。

- 选定流：5/16-18 × 1-3/4 英寸六角螺栓
- 流属性/单位：Mass / kg
- 数量规则：实测每台代表机械安装的两个精确螺栓合计质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_schedule`
- 来源：`agri-fab-steel-tow-roller-45-01791`

###### 5/16-18 六角锁紧螺母（`assembly_hex_lock_nut`）

仅记录 5/16-18 六角锁紧螺母；代表配置使用六个。

- 选定流：5/16-18 六角锁紧螺母
- 流属性/单位：Mass / kg
- 数量规则：实测每台代表机械安装的六个精确锁紧螺母合计质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_schedule`
- 来源：`agri-fab-steel-tow-roller-45-01791`

###### 1 英寸平垫圈（`assembly_flat_washer`）

仅记录 1 英寸平垫圈；代表配置使用两个。

- 选定流：1 英寸平垫圈
- 流属性/单位：Mass / kg
- 数量规则：实测每台代表机械安装的两个精确垫圈合计质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_schedule`
- 来源：`agri-fab-steel-tow-roller-45-01791`

###### 草坪压路机注排口塞（`assembly_fill_plug`）

记录代表压路机安装的精确注排口塞，并保留其聚合物或弹性体规格。

- 选定流：草坪压路机注排口塞
- 流属性/单位：Mass / kg
- 数量规则：实测每台代表机械安装的一个精确注排口塞质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_schedule`
- 来源：`agri-fab-steel-tow-roller-45-01791`

###### 5/32 × 1-1/2 英寸开口销（`assembly_cotter_pin`）

仅记录 5/32 × 1-1/2 英寸开口销；代表配置使用两个。

- 选定流：5/32 × 1-1/2 英寸开口销
- 流属性/单位：Mass / kg
- 数量规则：实测每台代表机械安装的两个精确开口销合计质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_schedule`
- 来源：`agri-fab-steel-tow-roller-45-01791`

###### 牵引销（`assembly_hitch_pin`）

将代表压路机安装的精确牵引销与其固定发夹销分开记录。

- 选定流：草坪压路机牵引销
- 流属性/单位：Mass / kg
- 数量规则：实测每台代表机械安装的一个精确牵引销质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_schedule`
- 来源：`agri-fab-steel-tow-roller-45-01791`

###### 1/8 英寸发夹销（`assembly_hair_cotter_pin`）

仅记录用于固定牵引销的 1/8 英寸发夹销。

- 选定流：1/8 英寸发夹销
- 流属性/单位：Mass / kg
- 数量规则：实测每台代表机械安装的一个精确发夹销质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_schedule`
- 来源：`agri-fab-steel-tow-roller-45-01791`

###### 总装和测试用电（`assembly_electricity`）

记录总装工具、分配给产品的物料搬运、试验台、通风和放行检验所用外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表电量，或以已记录方法把场址总表电量分配至总装和测试
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 随机液压油（`assembly_hydraulic_fluid`）

代表牵引式压路机没有液压回路，因此本行对该配置不适用。对于已声明的液压式 CPC 44119 机械，只有在同时列出该型号实际存在的精确液压缸、软管、阀、油箱和接头行时，才记录保留在交付产品内或测试期间消耗的新液压油。测试后排出且未保留在产品内的流体应另列废物流。

- 选定流：液压油 `eafff56c-3487-4345-9f24-00429f61c556`
- 流属性/单位：Mass / kg
- 数量规则：实测加注质量加测试消耗量，再扣除回库的未受污染回收液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

###### 液压缸（`assembly_hydraulic_cylinder`）

本行对代表牵引式压路机不适用。仅在液压变型的型号特定物料清单识别出完整液压缸时纳入；缸体零件和气缸属于不同身份。

- 选定流：完整液压缸总成
- 流属性/单位：Mass / kg
- 数量规则：实测交付型号中安装的每种精确完整液压缸质量，并保留零件号、件数和供应商
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_schedule`
- 来源：

###### 液压软管（`assembly_hydraulic_hose`）

本行对代表牵引式压路机不适用。仅在交付的液压变型中包含硫化橡胶液压软管时纳入；塑料软管和不含接头的散装软管需要不同身份。

- 选定流：液压软管 `e2fc1719-69dc-4281-8eae-383af8d9a405`
- 流属性/单位：Mass / kg
- 数量规则：实测所安装精确液压软管的质量，并保留规格、接头边界、件数和供应商
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_schedule`
- 来源：

###### 出厂测试用柴油（`assembly_diesel_fuel`）

仅在制造边界内发动机、液压动力单元或牵引测试消耗柴油时记录。交付油箱内保留的燃料应纳入，并在底层记录中与测试燃烧量分开披露。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：向受试产品或试验台发放的实测燃料扣除回收燃料，并分开记录燃烧量和随机交付加注量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 其他土壤机械成品（`finished_machinery`）

该流为总装、加注、检验和测试后在工厂门放行的完整参考产品。

- 选定流：其他土壤机械（未另说明） `fb0ebf28-3523-4021-9119-dbfbb0a2f0f0`
- 流属性/单位：Mass / kg
- 数量规则：根据实测成品净质量按参考流归一化，精确为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：工厂门处 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

##### 基本流

###### 出厂测试产生的化石源二氧化碳（`assembly_fossil_carbon_dioxide`）

出厂测试中燃烧化石燃料时，记录排入空气的直接化石源二氧化碳。电力上游排放不属于本直接排放行，应在电力供应数据集中体现。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：测试作业实测燃烧后排放质量；如计算，应在数据包中保留燃料含碳量和氧化记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision` | foreground_burden_allocation | 在可行时分别计量所声明产品系列的制造、涂装、总装、测试和处理作业，以避免分配。 |  |
| `allocation_shared_operations` | foreground_burden_allocation | 无法细分共用作业时，按该作业已记录的因果驱动因素分配实测负荷，例如机器工时、涂装面积、焊缝长度或实测能耗；只有在无更合适记录时才按质量分配，并披露敏感性。 |  |
| `allocation_scrap` | foreground_burden_allocation | 在废钢和其他废物离开前景边界时予以报告。制造清单内不得扣除所避免的原生材料负荷；应另行说明回收或处理建模约定，以免下游重复计入。 |  |
| `allocation_rework` | foreground_burden_allocation | 除非报废材料作为单独建模的共产品离开，否则返工和不合格件负荷应分配给同一生产期的合格产出；替代处理方法必须披露。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `material_fabrication`; `surface_coating`; `final_assembly_testing` | 外购材料、焊材、涂料、工艺化学品和随机工作液 | 过磅单、采购入库、供应商发票、领料台账、未用料退回及可用库存期初期末记录 | 精确材料身份；牌号或配方；供应商；接收量；退供应商量；未用料外运量；可用库存期初期末；采用领料边界时的领用量；产品型号；期间 | 选择一个库存边界。库房平衡使用接收量和可用库存变化；过程领料平衡使用领用量扣减未用退料。不得把期初库存加到领用量上，也不得在两个方程中重复计入同一次转移。 | kg | 每次接收或领用；每月核对 | 至少一个有代表性的生产年度；较短生产期需披露 | 数据集所含全部制造场址 | 库房消耗 = 接收量 + 期初可用库存 − 期末可用库存 − 退供应商 − 未用料外运。过程领料消耗 = 领用量 − 退库量。两者核对，但只选择其中一个作为交换量。 | 校准称量记录、发票、库存核对、领料台账和材料规格 |
| `cp_component_schedule` | `final_assembly_testing` | 精确外购或内部转移的总成和部件 | 型号物料清单、零件图、供应商发票、接收称重、校准零件称重和内部转移记录 | 零件号；精确部件名称；材料或组成；供应商或上游过程；件数；单件质量；安装质量；不合格件数；期初期末在制品；型号与序列号或批次 | 核对所声明型号清单中的每一部件。外购部件作为技术流投入；现场制造部件作为有材料和加工记录支持的内部转移；不得两者同时计入。 | kg，并保留件数 | 每个生产批次；每次型号修订核实 | 完整期间及每种纳入型号配置 | 总装线及每个供应前景过程 | 安装部件质量 = 合格件数 × 经核实单件质量。外购接收与内部转移分属不同台账；型号特定安装质量必须与成品物料清单核对。 | 批准的物料清单版本、供应商规格、接收或零件称重、转移随工单和总装完工记录 |
| `cp_energy_records` | `material_fabrication`; `surface_coating`; `final_assembly_testing` | 过程特定电力、天然气和柴油 | 公用工程表、过程分表、燃料领用、烘箱日志和测试日志 | 仪表标识；过程；期初期末读数；单位；气体参比条件；燃料领用和回收；随机保留与燃烧燃料；设备负荷；运行时间；产品产出 | 优先分别计量制造、涂装和总装/测试。无分表时，只核对场址总表一次，并按实测负荷和运行时间分配各不重叠过程份额。 | MJ；kWh；m3；kg | 仪表周期或每次燃料领用；每月汇总 | 至少一个有代表性的生产年度 | 所有纳入的制造、涂装、总装和测试区域 | 每个过程能源份额仅计算一次，所有过程份额与有记录的排除用途之和应与场址总量一致。随机燃料与测试燃烧燃料分开报告。 | 仪表校准、发票、领用日志、燃烧器或测试日志以及场址总量核对 |
| `cp_water_records` | `material_fabrication`; `surface_coating` | 闭路补水、单程供水、槽液和具体液体输出 | 水表、槽液体积、槽罐库存、排液计量和转移联单 | 水源；阶段；槽液期初期末库存；补水；新鲜供水；内部循环；蒸发测量或估算；带出液；精确槽液排放或漂洗输出；密度；去向；产品产出 | 建立阶段特定水量平衡。内部循环不计作消耗。只有记录证明无制造液体输出时，制造才可仅用最低闭路补水行；涂装每次槽液排放和漂洗排液均应单独识别。 | kg 或带密度换算记录的 m3 | 仪表周期、槽液排放或批次；每月核对 | 至少一个有代表性的生产年度 | 每个纳入湿式阶段 | 新鲜供水 + 期初液体库存 = 期末液体库存 + 精确液体输出 + 实测或有依据蒸发 + 产品或废物中保留的水。调查平衡差额，不得隐藏在笼统废水中。 | 仪表校准、槽液日志、密度记录、排液或转移记录及水量平衡闭合 |
| `cp_waste_records` | `material_fabrication`; `surface_coating`; `final_assembly_testing` | 每种精确产生废物，包括废钢、焊渣、废油漆、废碱液和漂洗排液 | 过磅单、专用废物容器或槽罐库存、联单和处理凭证 | 精确废物身份；来源阶段；物态；质量；废物期初期末库存；内部回收；外运量；去向；处理路线；危险属性 | 转移时称量或计量；每种废物身份分开，并在不混入外购投入库存的情况下核对累积量 | kg | 每次转移；每月核对 | 至少一个有代表性的生产年度 | 所有纳入的生产和处理区域 | 废物产生量 = 外运量 + 期末废物库存 − 期初废物库存 + 从该废物库存内部回收量。废物出口量仅等于外运量。除非建模约定明确要求出口边界，否则过程输出交换采用产生量。 | 校准秤或仪表、签字联单、处理凭证和废物分类记录 |
| `cp_direct_emissions` | `material_fabrication`; `surface_coating`; `final_assembly_testing` | 排入空气的 PM10、NMVOC、燃烧二氧化碳和保护气二氧化碳 | 烟道或车间排风测量、连续监测、配方平衡、燃料碳记录、供应商碳来源证明和气瓶库存 | 污染物身份；化石或生物来源；排放环境介质；流量和浓度或质量；采样期；控制状态；配方 VOC；捕集废物；供应的保护气质量和气瓶余气；燃料消耗量；燃料单位以及需要时在规定参比条件下的密度；碳质量分数；碳来源分数；氧化分数或不完全燃烧产物中的碳及保留碳；产品产出 | 可用时采用经验证直接测量。对以同一物质形态供应和排放的保护气二氧化碳及涂装成分，只有每项投入、退回、回收、保留、捕集输出、销毁项和库存变化均有记录时才可采用未反应同种物质损失平衡。对燃料燃烧生成的二氧化碳，采用单独的燃烧碳计算，绝不把已反应燃料当作已销毁污染物。化石碳与生物碳分开，制造加热、涂装烘箱和出厂测试来源分开，排放环境介质不得混合。 | kg | 每次合规测试、气体领用或代表性监测；连续数据按月汇总 | 覆盖生产年度中的代表性运行状态 | 每个纳入排放点和无组织源 | 按物质、来源、排放源和实际环境介质汇总控制后排放，再除以合格成品净 kg。未反应同种物质损失与燃烧生成量分别计算；不得在供应物质平衡中再次计入燃烧生成物。 | 采样报告、校准、检出限、燃料或气体证明、气瓶核对、控制效率和质量平衡闭合证据 |
| `cp_finished_product_mass` | `final_assembly_testing` | 成品参考产品 | 最终检验和发运质量记录 | 序列号或批次；型号；配置；随附附件；随机流体；毛质量；包装或工装皮重；净质量；放行日期 | 称量完整放行产品，或使用经周期称量核实的型号特定质量 | kg | 每台或有统计依据的批次 | 清单覆盖的完整生产期 | 每个纳入型号和场址 | 汇总合格成品净质量；将清单归一化至 1 kg | 校准秤证书、产品规格和放行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 同期过程交换量 / 合格成品净质量。 | 交换量；合格成品净质量 | 每 1 kg 成品机械的交换量 |  |
| `calc_purchased_input_consumption` | 外购材料、部件和燃料 | 库房口径消耗 = 接收量 + 期初可用库存 − 期末可用库存 − 退供应商 − 未用料外运。若过程边界采用领料台账，则过程消耗 = 领用量 − 未用退库量。两个台账应核对且只选择一个数量；不得把期初库存加到领用量上。 | 接收；可用库存期初期末；退供应商；未用料外运；领用；退库 | 一个不重复的投入消耗量 |  |
| `calc_internal_component_transfer` | 前景过程之间转移的现场制造部件 | 上游转出 + 期初在途或在制品 = 下游转入 + 期末在途或在制品 + 单独识别的转移损失。现场制造部件不得同时记为外购投入。 | 上游转出；下游接收；在途或在制品期初期末；精确转移损失 | 经核对内部移动量和披露差额 |  |
| `calc_waste_generation` | 每种精确废物身份 | 废物产生量 = 废物外运 + 期末专用废物库存 − 期初专用废物库存 + 从该废物库存内部回收量。废物出口量仅等于外运量。不得把出口废物再次计入产生量。 | 外运；废物库存期初期末；内部回收 | 废物产生量和单独披露的废物出口量 |  |
| `calc_shared_operation_allocation` | 共用制造、涂装、总装或测试 | 按同一时期已记录的因果驱动因素分配经核对的共用数量；各份额之和必须为 1。 | 共用数量；产品特定因果驱动因素总量 | 产品特定交换量 |  |
| `calc_emission_release` | 以不变物质形态排入空气的供应保护气二氧化碳和涂装成分 | 未反应同种物质控制后排放 = 供应物质 + 期初可用库存 − 期末可用库存 − 退回或回收 − 产品中保留 − 废物中捕集 − 经记录治理销毁量。按物质、化石或生物来源及实际环境介质分别计算。燃烧会由燃料碳生成二氧化碳，因此本损失平衡不得用于燃料燃烧。任一物料项未测量时不得采用该平衡。 | 供应物质；期初期末可用库存；来源；保留量；退回或回收；捕集量；经记录治理销毁量；环境介质 | 按来源和环境介质区分的未反应同种物质控制后排放质量 | `us-epa-ap42-electric-arc-welding-1995`; `us-epa-misc-metal-surface-coating-tsd-2001` |
| `calc_combustion_carbon_dioxide` | 制造加热、涂装烘箱和出厂测试燃料燃烧生成的二氧化碳 | 优先采用经验证的二氧化碳直接测量。否则，对每个排放源和碳来源，生成二氧化碳 = 燃料消耗质量 × 经核实燃料碳质量分数 × 经核实化石或生物来源分数 × 有记录氧化分数 × 44/12。燃料按体积记录时，只有取得实测或供应商特定且注明参比条件的密度后方可换算质量。作为氧化分数的替代方法，可先从消耗燃料碳中扣除一氧化碳、甲烷、烟炱或灰分、产品保留及其他有记录未氧化去向中的实测碳，再乘以 44/12；同一部分碳不得同时采用两种调整，不得把已反应燃料作为已销毁污染物扣除，也不得在另一平衡中重复计入生成的二氧化碳。每个排放源均按其实际环境介质报告。 | 燃料消耗质量或实测体积和密度；碳质量分数；化石或生物来源分数；氧化分数或不完全燃烧及保留去向中的碳；直接测量；排放源；环境介质 | 按排放源、来源和环境介质区分的生成二氧化碳质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 证明完整产品属于剩余 CPC 44119，而非 CPC 44111–44115 已命名产品或单独供应的零部件。 | 产品规格、目录说明、工程图和分类依据 |
| `dq_completeness` | 前景清单 | 核对所声明型号特定部件清单、外购材料、内部部件转移、产品产出、精确废物和直接排放。代表压路机须核实手册列出的每个部件族及件数；其他 CPC 44119 型号须以完整原子物料清单替换本清单，不得新增笼统部件行。 | 批准物料清单、部件件数核对、采购和内部转移记录、废物联单、水量平衡及已记录质量平衡差额 |
| `dq_temporal` | 全部前景记录 | 使用有代表性的生产年度或完整生产期；披露爬坡、停机、样机或异常生产并说明排除项。 | 带日期的仪表、生产日志和核对期 |
| `dq_technology` | 条件性路线 | 声明焊接工艺和焊材、可清除焊渣、保护气碳来源与损失、涂料配方与控制、涂装能源和烘箱燃料、湿式槽液和漂洗闭合、液压配置、测试燃料及排放点配置。 | 过程规格、气体来源证明、配方和槽液表、设备、物料清单及控制系统记录 |
| `dq_geography` | 上游链接和直接排放 | 电力结构、燃料、材料、水和处理数据集应匹配制造地域，并记录实际基本流环境介质。 | 供应商地域、公用工程合同、处理目的地和排放点记录 |
| `dq_uncertainty` | 分配值或计算值 | 保留原始值、换算因子、分配驱动因素以及不确定性或数据质量限制；不得用 manifest 中的暂缺范围替代缺失记录。 | 计算工作簿或机器可读推导与审核记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_identity` | foreground_dataset_conformance | 确认参考产品是完整 CPC 44119 产品，使用 Tiangong 参考 UUID，且具备所有必需产品限定信息。 | `un-cpc-3-0-structure-2025` |
| `validation_reference_mass` | foreground_dataset_conformance | 确认合格产品净质量为正，清单精确归一化至 1 kg 产出，且包装或可重复使用工装皮重处理一致。 |  |
| `validation_process_coverage` | foreground_dataset_conformance | 确认所有必需过程均有体现；每个条件性过程或清单行均已纳入数据，或有证据明确标记为不适用。涂装必须闭合电力或热能、直接燃烧、含水化学品、槽液、漂洗和水量平衡路线；制造必须闭合燃料燃烧、保护气来源和排放、焊渣及湿式路线输出。 |  |
| `validation_atomic_inventory` | foreground_dataset_conformance | 确认每张清单卡只代表一个物理、化学、废物或基本流交换。核实代表或替代型号特定部件清单中的每个部件族，并拒绝笼统的紧固件、部件、能源、水、废水、废物或排放行。 | `agri-fab-steel-tow-roller-45-01791` |
| `validation_uuid_property` | foreground_dataset_conformance | 依据公共 state-100 身份、流类型、分类、属性和单位组核实每个已填 Tiangong UUID；在获得精确排放环境介质身份前保持 `fabrication_pm10_air` 未解决。 |  |
| `validation_reconciliation` | foreground_dataset_conformance | 确认所声明时期内外购投入、领料台账、内部转移、废物产生、废物出口、水量和排放方程分别闭合。供应物质的未反应损失与燃烧产物生成量必须分别核实，其中燃烧计算须包含 44/12 碳至二氧化碳换算，并在氧化分数与不完全燃烧碳去向两种方法中择一。确认不得将已反应燃料作为已销毁污染物扣减，且期初库存、领用量、废物产生量、废物外运量和燃烧生成物均未重复计入；调查并披露无法解释的差额，不得强制配平。 |  |
| `validation_double_counting` | foreground_dataset_conformance | 确认上游数据集不含已记录的前景作业，且回收抵扣、外包服务和运输未重复计入。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完整其他土壤作业机械（未另分类）的前景制造数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 产品配置、工厂门边界、地域、技术和时期均兼容时，用于已声明 CPC 44119 机械的产品系统建模 |
| excluded_use | 不得直接代表犁、耙、耕耘机、播种机、种植机、移栽机、厩肥撒布机、肥料施布机、单独销售的零部件、自行式土方机械、使用期服务、维护或报废阶段 |
| required_metadata | PCR id 和版本；CPC 分类依据；制造商和型号；功能和配置；净质量；作业幅宽或能力；驱动接口；完整型号特定部件清单和部件质量；主要材料牌号；焊接和涂装路线；随附附件和流体；场址和年份；上游地域；分配；处理和排放环境介质 |
| required_quality_disclosure | 前景覆盖；外购投入、内部转移、废物和水量核对；分配份额；代理数据集；遗漏流；质量平衡差额；测量不确定性；条件性路线证据；全部未解决清单 UUID 和未解决定量范围证据 |
| update_trigger | 产品分类、物料清单、型号质量、制造场址、主要过程技术、焊材、涂层体系、能源供应、测试路线、分配方法、废物处理、排放控制发生变化，或取得未解决流的精确身份时 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类（CPC）3.0 版结构》，2025-06-30，官方 CSV，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv，检索于 2026-09-10 | CPC 44119 身份及与 CPC 44111–44115 的区分；不支持制造数量或生命周期边界 |
| `us-epa-ap42-electric-arc-welding-1995` | 官方指南（`official_guidance`） | 美国环保署，AP-42 第 12.19 章《电弧焊》，最终章节，1995-01，https://www.epa.gov/sites/production/files/2020-11/documents/c12s19.pdf，检索于 2026-09-11 | 焊接工艺、消耗电极和保护气采集，以及直接颗粒物和气态排放纳入及运行限定；未采用排放因子 |
| `us-epa-misc-metal-surface-coating-tsd-2001` | 官方指南（`official_guidance`） | 美国环保署，《杂项金属零件和产品表面涂装作业有害空气污染物国家排放标准：技术支持文件》，农业和建筑机械行业，2001 年汇编，https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1006FDO.PDF，检索于 2026-09-11 | 农业机械表面涂装适用性，以及条件性预处理、施涂、闪干、固化、VOC 和 HAP 排放点；未采用定量范围 |
| `agri-fab-steel-tow-roller-45-01791` | 制造商官方出版物（`official_guidance`） | Agri-Fab，《24 × 36 钢制牵引式压路机 45-01791 型使用手册和零件表》，Form No. 48362 (REV. 5/02)，https://www.agri-fab.com/Portals/0/Manuals/IPL_45-01791.pdf，检索于 2026-09-11 | 有界代表性草坪压路机配置、焊接钢制滚筒规格、发运质量背景、装配顺序以及精确部件名称和件数；不支持类别范围内的质量、数值范围或制造能源 |
