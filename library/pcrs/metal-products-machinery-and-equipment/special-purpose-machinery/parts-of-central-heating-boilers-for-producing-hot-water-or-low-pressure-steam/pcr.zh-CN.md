---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-of-central-heating-boilers-for-producing-hot-water-or-low-pressure-steam
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 产生热水或低压蒸汽的集中供暖锅炉零件

## 1. 范围与适用性

本候选方法覆盖有资格归为产生热水或低压蒸汽的集中供暖锅炉零件的实际交付零件、专用子总成和配置套件。保留实际供应的铸铁分片及装配热模块、焊接钢承压部件、铝或不锈钢冷凝换热器配置、外壳、烟气集箱、密封件及专用接口。燃气、燃油、固体燃料及电热宿主配置均为条件性路线；单个燃烧器或散装铸件不代表整个类别。输出为实测验收完成状态的合格类别零件，不是完整锅炉。每千克验收净零件不能确立相同供暖服务。

确认主要用途、宿主功能、零件号、适配、交付完整性及适用分类。制造商备件适配本身不能覆盖完整炉用燃烧器、泵、风机、阀、电机、电气控制、传感器、通用紧固件、原料或化学消耗品的独立分类。这些货品可为实际外购投入，却不会因此成为本 PCR 参考输出。排除完整锅炉、散热器及其零件、独立热水器、不相关工业蒸汽发生器、高压动力锅炉及通用换热器。对生活热水及供暖混合宿主和模糊独立功能套件进行审查，不默默扩大类别。

Weil-McLain80 原始提交表区分单独铸造分片、可选工厂装配分片及可选经过燃烧试验的成套锅炉，故不能将整机燃烧试验强加于每个备件。观察到文件代码 WM2602_SUB_001_80，未确立发布日期。未注明日期的 Ultra Series3 备件目录区分含传感器、接头、电极、密封件和紧固件的换热器套件与较小部件总成。独立 Viessmann 燃烧器维修说明5800 178-06，2025年1月，展示耐火件、安装法兰、燃烧管、密封件和分别供应的风机或燃气部件。这些仅证明架构和供应接口；安装人员泄漏检查及更换建议属下游，不是实测工厂默认。2024 铸造 BREF 仅支持实际场内铸造分解。CPC3.0 官方叶节点及相邻类别确立分类坐标。未展示承压部件、电热或固体燃料配置须实际图纸、物料清单及工厂协议。不得移植目录质量、热功率、压力、效率、合金配方、成品率、再生比例、燃料率、保修及使用寿命。

来源：`un-cpc-3-0-44833`; `weil-80`; `foundry-bref`; `viessmann-burner`; `weil-catalog`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-of-central-heating-boilers-for-producing-hot-water-or-low-pressure-steam |
| classification_refs | CPC3.0:44833 |
| covered_products | 第1节完整合格集中供暖热水或低压蒸汽零件类别 |
| excluded_products | 第1节完整锅炉、独立分类货品及相邻散热器、热水器或高压发生器零件 |
| representative_product | 选定实际型号配置的验收专用零件或模块或套件；不作跨家族代表重量 |
| production_route | 实际铸造分片、焊接承压部件、冷凝换热器或外购完成子总成；仅实际供应密封、涂覆或控制 |
| market_state | 验收交付零件配置含实际随附组件和保留填充；净质量排除包装及废品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应一个实际专用零件或模块或套件，不是完整宿主或下游供暖服务 |
| How much | 1 kg 同一配置验收净零件质量 |
| How well | 满足声明燃烧或泄漏或机械安全、功能、接口及实际验收计划 |
| How long or cycle | 一个制造及交付期间；无默认使用寿命 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 可产生热水或低压蒸汽的集中供热锅炉零件 `acf2b6ec-7649-4251-b769-2f2b2cecc6ae` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 宿主集中供暖热水或低压蒸汽主要功能；零件分类；型号修订；实际零件号及适配；合金或零件材料；压力温度工况及燃料电气接口；实际耐火或密封或涂料体系及缺口；随附附件及填充；自制外购；供应状态；实际验收试验；校准净质量；N；场址期间；公用工程供应条件；废物及排放；上游或处理；分配不确定性 |

必需限定信息须在数据包明确声明。已核实完整类别参考产品身份；仍须声明交付零件号及供应状态，不得以完整宿主器具代替。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 | kg | 按 cp_mass 采集同一配置期间校准验收净零件质量之和 Dnet，单位 kg。 |
| `material_species` | physical material/species records | 质量 | kg | 按各项自身含水或含金属或化学分析、库存和反应记录换算。总量不能代替元素量；不用于电力或运输。 |
| `energy_interface` | electricity, steam, condensate and fuel | 交付能量或燃料质量及净热值 | MJ; kg; MJ/kg | 电力保留 kWh，1 kWh=3.6 MJ。蒸汽供回质量各乘自身相对于共同零点 MJ/kg；总已净区别，返回仅扣一次。燃料用自身质量及净热值，不能代替供应蒸汽。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | 纳入实际收料、合格类别零件加工或集成、工厂零件试验或返工、废物、分配公共服务及包装至验收放行。 | weil-80; foundry-bref |
| `make_buy` | supplier_interface | 各供应部件有实际完成状态：外购完成铸造分片、密封热模块、换热器或已装配控制的上游计一次；自制改为实际合金投入、造型、焊接、密封及试验。仅计后续场内工作，内部转移成对。 | weil-catalog; viessmann-burner |
| `factory_use` | production | 工厂压力或泄漏用水或气、热或燃料试验、清洗及电力仅按所供零件实际验收纳入。重复工装及残留试验填充分别区别于排出或消耗介质。安装调试、下游更换及全寿命供暖在制造边界外。 | weil-80; viessmann-burner |
| `bom_extension` | route | 原子卡片为条件性锚点而非通用配方。审查各项实际合金、涂料、耐火或密封体系、部件、附件、试料、废物及排放物种；补充缺失原子交换。未知不同于零和有证据 not_applicable。 | weil-catalog |
| `upstream` | links | 各实际供应商及运输匹配真实体系、牌号、完成状态、地理和期间；计量转移后外部废物处理区别于场内排放。供应商链接未完成不能确立完整摇篮到大门足迹。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 所选实际输入的供应牌号、完成状态及交付接口 |
| starting_condition_role | 工厂前景收料边界 |
| product_classification_scope | 第1节审查的完整合格集中供暖锅炉零件类别 |
| recursive_input_rule | 同类别外购前体上游计一次，只展开后续场内加工；成对内部转移抵消，不无限递归 |
| upstream_dataset_requirement | 匹配实际牌号、配方、完成工艺、地理期间及供应接口；披露缺失供应商和替代 |
| disclosure | 实际配置、自制外购、覆盖和条件不适用、运输处理、计量分母及不确定性 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 实际铸造、承压部件加工及表面处理 | conditional | 仅实际场内熔炼、模芯制备、铸造、机加工、管材成形、焊接、清洗、涂覆及废料处理；外购完成零件不重复嵌入制造 | foreground | 每 1 kg 参考流 |
| `integration` | 专用锅炉零件或套件集成 | required | 采用实际合格类别零件图纸或物料清单及供应状态；仅实际范围内铸造分片、热模块、换热器、外壳、烟气集箱、密封件或子总成；不得装配虚构完整锅炉 | foreground | 每 1 kg 参考流 |
| `test` | 实际工厂零件验收及返工 | required | 仅该供应零件实际尺寸、压力或泄漏、电气、热或燃料燃烧试验；排除安装调试及全寿命供暖 | foreground | 每 1 kg 参考流 |
| `dispatch` | 包装及验收放行 | required | 同一验收零件号、修订及完成状态配置；相同套件数量区别于其中零件数或锅炉数 | foreground | 每 1 kg 参考流 |
| `services` | 未分配共享公用工程及实际场内供能量（含发电量） | conditional | 仅扣除过程计量后未分配剩余及实际场内供能量（含发电量） | foreground | 每 1 kg 参考流 |

### 过程：实际铸造、承压部件加工及表面处理（`fabrication`）

仅实际场内熔炼、模芯制备、铸造、机加工、管材成形、焊接、清洗、涂覆及废料处理；外购完成零件不重复嵌入制造。

#### 输入

##### 产品流

###### 低碳钢板 （`steel_sheet`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：低碳钢板
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 不锈钢板 （`stainless`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。 仅实际深加工平板轧制不锈钢供应，须供应商合金或表面证书；初级板坯、原卷、管或外购完整换热器须不同实际身份。

- 选定流：深加工不锈钢平板轧材 `add37984-82d6-4c91-85e3-9911c0135944`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 铝铸造合金锭 （`aluminium`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：铝铸造合金锭
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 铸铁熔炼炉料 （`cast_iron`）

仅自有铸造；明确每项实际炉料牌号、再生比例、库存及返回。不得把初级铸铁作成品锅炉分片，或假定含钒生铁。

- 选定流：铸铁熔炼炉料
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：foundry-bref

###### 铸造石英砂 （`silica_sand`）

仅实际铸造砂及供应处理；内部砂再生成对，新补砂及废砂转移分开。

- 选定流：铸造石英砂
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：foundry-bref

###### 铸造膨润土粘结剂 （`bentonite`）

仅文件支持铸造级粘结剂；葡萄酒澄清膨润土及原矿黏土不能确立加工铸造粘结剂。

- 选定流：铸造膨润土粘结剂
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 硅铁合金 （`ferrosilicon`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。 仅实际铁硅合金添加剂，须自身硅或铁含量及供应商牌号；不得替代硅钙合金或强定通用炉料配方。

- 选定流：硅铁 `aba73e7d-6fa9-4320-9e5c-62b018975000`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：foundry-bref

###### 碳钢焊丝 （`welding_wire`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：碳钢焊丝
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 氩气焊接气体 （`argon`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：氩气焊接气体
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 环氧粉末涂料 （`powder`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：环氧粉末涂料
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 金属加工液浓缩液 （`coolant`）

仅实际配方金属加工浓缩液；稀释水、自身分析、返回及库存分开；轧制油不自动匹配此配方。

- 选定流：金属加工液浓缩液
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 异丙醇 （`ipa`）

仅实际异丙醇清洗；须自身含量或水比例、返回、捕集介质、库存及物种释放。 仅匹配实际中国厂内异丙醇供应，须真实含量及供应商，不假定通用清洁剂纯度。

- 选定流：异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 工艺用水 （`water`）

仅实际场内过程外部新补水，不重复内部循环。 实际外部供应工艺水；声明处理或规格，新水计量区别于内部回路。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 外购交流电 （`fabrication_electricity`）

仅共同期间内归属于本过程及选定配置的实际计量电量；不得在子过程负荷上叠加场址总表。 仅实际中国用户侧小于1kV电网平均交流电交付。其他电压、地理或供应商须自身身份；供应商发电不得再计为场内燃料。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：交付能量 / MJ
- 数量规则：采用 cp_energy 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 钢加工废料 （`steel_scrap`）

仅实际未处理外送钢生产废料及自身合金、水分或金属分析；区分内部返回和已加工废料。 仅实际工厂机加工或成形外送未处理钢生产废料；其他合金或状态及内部返回分开。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_waste 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 废铸造砂 （`foundry_sand`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：废铸造砂
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_waste 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 铸铁炉渣 （`slag`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：铸铁炉渣
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_waste 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 废异丙醇溶剂 （`spent_solvent`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：废异丙醇溶剂
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_waste 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 金属加工废水 （`effluent`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：金属加工废水
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_waste 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 异丙醇排入空气 （`ipa_air`）

独立实测实际普通室外空气异丙醇释放，绝非未解释溶剂衡算差额。 仅实际普通未指定室外空气异丙醇物种释放，不是室内、土壤或废水身份。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_emission 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

### 过程：专用锅炉零件或套件集成（`integration`）

采用实际合格类别零件图纸或物料清单及供应状态；仅实际范围内铸造分片、热模块、换热器、外壳、烟气集箱、密封件或子总成；不得装配虚构完整锅炉。

#### 输入

##### 产品流

###### 铸铁锅炉分片 （`cast_section`）

仅独立外购文件支持机加工或已试验状态的实际铸造分片。自铸为成对内部转移；装配密封热模块与单个散装分片为不同供应对象。

- 选定流：铸铁锅炉分片
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：weil-80

###### 焊接碳钢锅炉管 （`steel_tube`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。 仅实际焊接管路线及文件支持碳钢承压牌号；不是无缝管、不锈钢管或完成换热器。

- 选定流：钢管和空心型材 `370d14a6-55f3-4fdd-90b2-84751125ff00`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 不锈钢冷凝锅炉换热器 （`ss_exchanger`）

仅独立外购完成不锈钢冷凝换热器，声明实际合金、管或板形态及所含密封件。不得重复其板材、焊接及上游工厂试验。

- 选定流：不锈钢冷凝锅炉换热器
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：weil-catalog

###### 铸铝锅炉换热器 （`al_exchanger`）

仅实际完成铸铝换热器及文件支持合金或表面状态；通用铝锭不是其完成身份。

- 选定流：铸铝锅炉换热器
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：weil-catalog

###### 燃气锅炉燃烧器总成 （`gas_burner`）

仅作为经审查合格零件配置投入的实际外购燃气燃烧器总成；独立分类完整燃烧器输出不自动纳入。所含风机、阀或控制计一次，除非分别供应。

- 选定流：燃气锅炉燃烧器总成
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：viessmann-burner

###### 燃油锅炉燃烧器总成 （`oil_burner`）

仅实际外购燃油燃烧器投入及供应完成状态；独立燃烧器分类不自动纳入输出范围。

- 选定流：燃油锅炉燃烧器总成
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 锅炉助燃空气鼓风机总成 （`blower`）

仅分别供应实际风机或鼓风机投入；完整外购燃烧器已计所含风机。通用鼓风机输出须独立分类。

- 选定流：锅炉助燃空气鼓风机总成
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：viessmann-burner

###### 锅炉电子控制模块 （`control`）

仅实际接口外购已装配锅炉控制投入；其基板、芯片及焊料上游计一次。独立电气控制输出须分类审查。

- 选定流：锅炉电子控制模块
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 锅炉点火电极 （`electrode`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：锅炉点火电极
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：viessmann-burner

###### 锅炉硅橡胶密封垫 （`gasket`）

仅核实实际硅橡胶密封垫体系，不从维修列表密封垫字样推定。其他弹性体或纤维体系须自身交换。

- 选定流：锅炉硅橡胶密封垫
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 锅炉耐火毯 （`refractory`）

实际文件支持耐火毯配方及供应状态；自制成形、干燥或固化须实际材料行。不得从耐火字样推定纤维体系。

- 选定流：锅炉耐火毯
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：weil-80; viessmann-burner

###### 镀铝钢锅炉烟气集箱 （`flue_collector`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：镀铝钢锅炉烟气集箱
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：weil-80

###### 锅炉冷凝水存水弯总成 （`trap`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：锅炉冷凝水存水弯总成
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：weil-catalog

###### 锅炉水温传感器 （`sensor`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：锅炉水温传感器
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：weil-catalog

###### 钢螺钉 （`steel_fastener`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。 实际分别供应钢螺钉作为装配投入，绝非通用螺钉输出属于本 PCR 的证明。

- 选定流：钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 外购交流电 （`integration_electricity`）

仅共同期间内归属于本过程及选定配置的实际计量电量；不得在子过程负荷上叠加场址总表。 仅实际中国用户侧小于1kV电网平均交流电交付。其他电压、地理或供应商须自身身份；供应商发电不得再计为场内燃料。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：交付能量 / MJ
- 数量规则：采用 cp_energy 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：实际工厂零件验收及返工（`test`）

仅该供应零件实际尺寸、压力或泄漏、电气、热或燃料燃烧试验；排除安装调试及全寿命供暖。

#### 输入

##### 产品流

###### 自来水 （`test_water`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。 仅本工厂验收计划实际消耗或补入供应自来水；循环回路及保留填充分开。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 氮气 （`test_nitrogen`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。

- 选定流：氮气
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 压缩空气 （`test_air`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。 原生 Volume/m3 采用实际压力、温度、含湿及参照状态；若称重，用该物流自身实测密度将 kg 换至 m3，绝非通用理想气密度。供应商压缩空气与场内压缩机电量为不重复接口。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：体积 / m3
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 天然气 （`test_natural_gas`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。

- 选定流：天然气
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 丙烷 （`test_propane`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。 仅实际液体丙烷供应状态及文件支持组成；实际汽化及保留或消耗量分别计，不是通用已气化燃料替代。

- 选定流：丙烷 `9c0d706a-c414-4afb-ad0c-4777c4072311`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 轻质燃料油 （`test_oil`）

仅实际工厂验收试验投料；披露具体配方或规格、新投入、重复使用、库存及排出。不是合格电器质量或消费用量。 实际催化裂化轻质燃油供应商牌号原生 Volume/m3；若按 kg 采集，用实际温度及自身实测密度。目录名义42000kJ/kg不是采纳工厂因子；须实际燃料分析或净热值。

- 选定流：轻质燃油 `2a02a3f7-8d3b-4556-aebc-318fddcbfe1e`
- 流属性/单位：体积 / m3
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 外购交流电 （`test_electricity`）

仅共同期间内归属于本过程及选定配置的实际计量电量；不得在子过程负荷上叠加场址总表。 仅实际中国用户侧小于1kV电网平均交流电交付。其他电压、地理或供应商须自身身份；供应商发电不得再计为场内燃料。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：交付能量 / MJ
- 数量规则：采用 cp_energy 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废品集中供暖锅炉零件 （`part_reject`）

实际无法修复废品零件；相关负荷仍归属验收输出，废品质量排除于验收分母。

- 选定流：废品集中供暖锅炉零件
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_waste 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 化石二氧化碳排入空气 （`co2`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。 仅实际化石源普通未指定室外空气释放，须来源特定处理后或无组织证据；无长期空气替代。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_emission 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 化石一氧化碳排入空气 （`co`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。 仅实际化石普通室外空气 CO 物种释放，独立确立而非从碳闭合推定。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_emission 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 二氧化氮排入空气 （`no2`）

仅实际分子 NO2，不是亚硝酸根或以 NO2 当量表示的 NOx。

- 选定流：二氧化氮排入空气
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_emission 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 小于2.5微米颗粒物排入空气 （`pm`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：小于2.5微米颗粒物排入空气
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_emission 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 水蒸气排入空气 （`water_vapour`）

仅实际工厂水蒸气释放；无消费供暖或安装排水默认。 仅实际普通未指定室外空气水蒸气释放，匹配自身水质量或相态基准。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_emission 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

### 过程：包装及验收放行（`dispatch`）

同一验收零件号、修订及完成状态配置；相同套件数量区别于其中零件数或锅炉数。

#### 输入

##### 产品流

###### 瓦楞纸板 （`board`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。 仅实际 C/E/F 型瓦楞纸板，纤维含量至少80%且含文件支持再生材料；不是通用箱或其他牌号，也无通用再生比例假设。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 木质欧式托盘 （`pallet`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。 仅实际供应木质 EURO 托盘及文件支持复用或处理；其他托盘标准须自身身份。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 聚乙烯包装膜 （`film`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：聚乙烯包装膜
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 外购交流电 （`dispatch_electricity`）

仅共同期间内归属于本过程及选定配置的实际计量电量；不得在子过程负荷上叠加场址总表。 仅实际中国用户侧小于1kV电网平均交流电交付。其他电压、地理或供应商须自身身份；供应商发电不得再计为场内燃料。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：交付能量 / MJ
- 数量规则：采用 cp_energy 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 产生热水或低压蒸汽的集中供暖锅炉零件 （`reference_product`）

选定验收零件或模块或套件配置包括实际保留填充及附件，排除包装和废品。

- 选定流：可产生热水或低压蒸汽的集中供热锅炉零件 `acf2b6ec-7649-4251-b769-2f2b2cecc6ae`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass`
- 来源：un-cpc-3-0-44833

##### 废物流

##### 基本流

### 过程：未分配共享公用工程及实际场内供能量（含发电量）（`services`）

仅扣除过程计量后未分配剩余及实际场内供能量（含发电量）。

#### 输入

##### 产品流

###### 外购交流电 （`electricity`）

仅扣除过程电表后的未分配共享剩余；须实际交付电压、地理范围及供应商。 仅实际中国用户侧小于1kV电网平均交流电交付。其他电压、地理或供应商须自身身份；供应商发电不得再计为场内燃料。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：交付能量 / MJ
- 数量规则：采用 cp_energy 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

###### 外购蒸汽热 （`steam`）

仅实际外购蒸汽热供应；各供回质量及自身焓采用共同零点，区别总量及已净发票。供应商燃料属上游，不是虚构场内燃烧。

- 选定流：外购蒸汽热
- 流属性/单位：交付能量 / MJ
- 数量规则：采用 cp_energy 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

###### 天然气 （`gas`）

仅选定配置实际核实供应牌号或状态；外购完成状态的上游制造计一次。

- 选定流：天然气
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_material 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷凝水返回热 （`condensate`）

仅对应实际总蒸汽供应的计量返回热；不得从已净发票再扣一次；物理质量另行核对。

- 选定流：冷凝水返回热
- 流属性/单位：交付能量 / MJ
- 数量规则：采用 cp_energy 采集归属数量，并除以验收净零件质量 Dnet。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `causal` | site | 优先分离配置及子过程；按实测因果负荷、运行时间或适当物理驱动分配公共剩余，保留分子分母记录及不确定性。不得平均无关型号，也不得对全部公用工程自动按零件或模块或套件质量分配。 |  |
| `rejects` | accepted | 在合格输出归属 Q 中纳入实际废品、返工及合格试验负荷；分母仅含验收净质量或数量。分离回收转移及处理，不假定替代产品抵扣或再生上游零负荷。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的零件或模块或套件，排除运输包装；核对同一配置和验收记录。 | kg | 每个验收批次 | 同一制造期间 | 同一配置工厂 | 每 1 kg 参考流 | 校准、皮重、配套附件及验收记录 |
| cp_material | all | actual inputs | meter_issue | 具体物种牌号；供应状态；投料；各项适用的自身水分、实际温度密度及元素或化学含量；自制外购；库存；Q；N | 同一期间按独立交换核对计量及仓储、配方和成对返回；Q 含废品或返工负荷，保留各项自身分析。 | kg; m3 | 每批或连续表 | 同一制造期间 | 同一配置工厂及供应商 | 每 1 kg 参考流 | 牌号或成分检验、计量及库存 |
| cp_energy | all | electricity and heat | meter | 各过程表；总进口；实际场内供能量（含发电量）；出口；储能；供回蒸汽各质量温压焓；已净发票；Q；N | 核对同一期间和单位的各过程表，共享服务仅尚未分配剩余；调查负剩余。供应或返回蒸汽各用自身 kg 和 MJ/kg，共同零点，返回仅扣一次。 | MJ | 连续表及各试验 | 同一制造期间 | 同一配置及场址 | 每 1 kg 参考流 | 校准表、供电接口、热力及分配不确定性 |
| cp_waste | all | specific waste | transfer | 各物流质量和自身含水或含量；期初末库存；内部返回；外送处理；Q；N | 称重、取样及处理转移，区分返回再用、回收及处置，不能推定替代抵扣。 | kg | 每批转移 | 同一制造期间 | 同一配置场址及处理接口 | 每 1 kg 参考流 | 废物联单、取样及库存 |
| cp_emission | all | specific species/compartment | species_measurement | 实际物种介质；浓度；排气或液流；水分温压基准；捕集或销毁；各项分析；Q；N | 采用匹配物种及介质实测或核实实际技术因子；调查闭合，捕集不是销毁，差额不是空气排放。 | kg | 实际试验及排放期间 | 同一制造期间 | 同一配置场址边界 | 每 1 kg 参考流 | 采样流量和综合不确定性 |

原始期间协议：N 为同一配置验收零件或模块或套件数量，D 为该批校准验收净质量之和，M=D/N。每项 Q 为同期间归属数量，含废品、返工和工厂试验负荷；先 q_item=Q/N，再 q_ref=Q/D。包装及废品质量不入 D，保留实际各项原单位和各项成分、库存及反应记录。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_period` | all inventory rows | 同一配置及期间按 Qattr/Dnet 直接归一化；Naccepted 计验收交付零件或相同模块或套件，M=Dnet/Naccepted，q_item=Qattr/Naccepted，仅作同一配置交叉核对。每项保留原始分子单位及精确换算；不混合零件种类。 | Qattr; Dnet; Naccepted; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| species_emission_method | cp_emission | 采用每项实际物种的处理后浓度乘匹配排气或液流及同一期间；按实际干湿基准、温压、参照状态及原始单位换算。无组织排放采用独立计量基础，不从烟道读数推定。保持物种及介质、捕集与销毁分离。 | species sampling; matched flow/time; calibrated meters; fugitive evidence |
| parts_configuration | accepted output | 交付零件号、修订、宿主适配、数量及完成状态共同界定验收配置；套件净质量为实际随附验收零件之和，N 计相同套件而非其中零件或宿主数量。不得合并不同零件。 | BOM; drawing; shipment; acceptance; calibrated tare |
| part_routes | actual manufacture | 按实际路线纳入铸造、管材成形、焊接、表面处理、耐火件成形、密封或电子集成；每种牌号或配方另列原子交换。外购完成零件仅计后续工作，完整模块内材料不得重复。压力或泄漏、温度循环、机械或燃料试验仅按实际工厂方案计；下游更换及下游锅炉运行分离。 | actual route; make/buy; assay; factory test plan |
| native_volume | test_air; test_oil | 压缩空气及轻质燃油保留原生 m3 分子单位；记录各物流实际压力、温度、含湿或密度及参照状态。若按质量采集，以自身实测密度换算，不用通用密度、目录燃料发热量或其他物流因子；Dnet 仍为验收零件 kg。 | supplier specification; measured density/state; native unit receipts |
| emission_assignment | actual source | 各制造或试验排放按自身实际来源分配一次，不能在已列工序物种上叠加场址总量；制造熔炼或干燥排气若存在须另列实际原子物种。 | source-specific matched concentration/flow/time; exhaust/fugitive ledger |
| complete_bom | actual configuration | 覆盖实际全部交换，自制外购及附件、填充、试料分离；缺口明确 | 实际 BOM、路线及供应商 |
| period_normalization | all inventory rows | Qattr 为同一配置共同期间每项归属数量，包含废品、返工及工厂试验负荷；Naccepted 为验收数量；Dnet 为校准验收净质量之和；M=Dnet/Naccepted，q_item=Qattr/Naccepted，q_ref=Qattr/Dnet。Dnet 排除包装、废品及消耗试料；每项保留原始分子单位及精确换算。 | cp_mass; cp_material; cp_energy; cp_waste; cp_emission |
| mass_period | cohort | 同一配置期间和验收记录、校准质量及库存；不跨家族均值 | 校准及期间台账 |
| contained_species | cp_material; cp_waste; cp_emission | 各元素或化学物种按每项自身总质量乘自身实测含量，独立核对输入、产品、废料、污泥、液体及释放；总合金或污泥质量不等于含铁、铜或其他元素量。各项采用自身干湿基准、期初末库存及反应计量；成对内部返回抵消。按采样、仪表及分配综合不确定性调查闭合。 | own-term mass/assay/moisture; stocks; reaction; return ledger |
| water_stream_closure | cp_material; cp_waste; cp_emission | 每项水物流采用自身水比例及实际温度密度换算，纳入新水、各输入自身水分、反应水及期初库存；核对期末库存、保留产品水、排水及蒸发。成对内部回水抵消，不采用其他物流水分或通用密度，不将未解释差额自动作蒸发。 | own water fraction; density/temperature; stocks/reactions/retention/discharge/evaporation |
| solvent_fates | cp_material; cp_waste; cp_emission | 溶剂各物流须自身含量；分别记录产品保留、回收返回、捕集液体或介质、废水及其他非空气去向、已证实销毁和独立物种空气释放。捕集不等于销毁；回收、保留、废水或介质均非空气去向。未解释差额必须调查，不得转为空气排放。 | assay; stocks; recovery/capture/treatment; independent air measurements |
| utility_residual | cp_energy | 同一期间及单位核对进口、实际场内供能量（含发电量）、出口及储能变化与已分配制造、集成、试验及包装表。共享公用工程仅为尚未分配剩余；调查负剩余的期间、单位、表覆盖和综合不确定性，不截零。场外供应商发电或锅炉燃料不能虚构成场内燃烧。 | boundary/process meters; source/period/unit records; allocation uncertainty |
| heat_supply_return | cp_energy | 若供应为总量，热量为供应 kg 乘供应自身 MJ/kg，减独立计量返回 kg 乘返回自身 MJ/kg；各采用真实温度、压力及共同零点。若发票已净，不能再次扣返回。供回物理质量独立衡算；目录热值或其他物流焓不代替自身实测或经核实性质。 | supply/return mass, pressure, temperature, enthalpy; gross/net invoice |
| balance_uncertainty | physical balances | 按各项自身水分、密度、含量、反应及成对返回核对，与综合不确定性比较 | 实测、采样、反应及分配证据 |
| provider_gaps | links | 每个实际上游和处理匹配状态地理期间；未核实不可作为完整足迹 | 直接记录及替代披露 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | 确认宿主集中供暖热水或低压蒸汽功能、合格零件分类、零件号或修订、交付完成状态及激活架构。每个实际交换须匹配身份、属性、单位及供应商；不存在、零及未知保持不同。 | un-cpc-3-0-44833 |
| `denominator` | all inventory rows | 全部清单采用同一验收批次及共同期间。核实校准验收净质量和 N，废品及包装质量排除。核对 q_item=Q/N 后按同一平均 M 归一化；混合配置无效。 |  |
| `double_count` | make_buy | 核对完整外购模块与自制材料及操作、保留填充或附件与工厂消耗、成对内部转移与外部投入。每项实际负荷计一次。 |  |
| `water_close` | physical water records | 每项采用自身实测水比例、密度及干湿基准：新水及输入水分、反应水和期初库存减期末库存、产品保留、排水和蒸发；内部返回成对抵消。按采样、仪表及分配综合不确定性调查实测闭合，无通用容差。 |  |
| `species_close` | material and chemical records | 每种含金属或化学物分别闭合，采用各输入、产品、废料、污泥、液体及释放自身匹配分析和干湿基准、反应计量及库存。总质量不是含元素量。不得将全部清单质量规则用于能量或运输。 |  |
| `solvent_close` | solvent records | 区分保留溶剂、回收返回、捕集液体或介质、已证实销毁、废水或非空气剩余及实际空气物种释放。捕集不是销毁；不明差额应调查，不分配至空气。 |  |
| `utility_close` | energy records | 按同一期间及单位核对外购进口、实际场内供能量（含发电量）、出口及储能变化和已分配制造、集成、试验或包装负荷。共享行仅未分配剩余；按期间、单位及综合计量不确定性调查负剩余，不截零。 |  |
| `steam_close` | steam and condensate | 相对于共同零点，按计量压力或温度采用供应质量乘供应自身 MJ/kg 和返回质量乘返回自身 MJ/kg。总供应只扣返回一次；已净发票不得再扣。物理蒸汽或冷凝水质量衡算独立于能量。 |  |
| `species_emissions` | air releases | 独立校验每种排放物及环境介质。燃料碳衡算不能单独确立 CO 或 NOx。NO2 质量不是以 NO2 当量报告的 NOx；报告约定与实际物种身份保持不同。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | primary_dataset |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 实际配置工厂生产前景数据及明确已完成上游链接的模型 |
| excluded_use | 跨家族功能等价、默认消费者服务、默认重量或制造因子、缺失供应商的完整足迹 |
| required_metadata | 第3节限定及原始期间分母、实际架构、自制外购和边界 |
| required_quality_disclosure | 采集覆盖、供应商或身份或配方缺口、分配和综合不确定性、全部条件及排除 |
| update_trigger | 型号或架构、配方、供应状态或地区、计量、工厂试验或处理路线改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-44833 | official_guidance | Central Product Classification (CPC) Version 3.0 Explanatory Notes; 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 条件性零件架构、分类、供应状态及实际场内铸造；非工厂配方或数量默认值 |
| weil-80 | handbook | Weil-McLain 80 Cast Iron Boiler Submittal; WM2602_SUB_001_80; edition date unspecified; https://www.weil-mclain.com/wp-content/uploads/SUB_001_80-Submittal.pdf | 条件性零件架构、分类、供应状态及实际场内铸造；非工厂配方或数量默认值 |
| foundry-bref | handbook | Best Available Techniques (BAT) Reference Document for the Smitheries and Foundries Industry; EUR40127, 2024; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2024-12/SF_BREF_2024-bref.pdf | 条件性零件架构、分类、供应状态及实际场内铸造；非工厂配方或数量默认值 |
| viessmann-burner | handbook | Viessmann Installation Instructions Burner Assembly; 5800 178 - 06, 01/2025; https://www.viessmann-us.com/content/dam/public-brands/ca/pdfs/doc/wb2b_rep/wb2b-sm_burner_assembly.pdf/_jcr_content/renditions/original./wb2b-sm_burner_assembly.pdf | 条件性零件架构、分类、供应状态及实际场内铸造；非工厂配方或数量默认值 |
| weil-catalog | handbook | Weil-McLain Ultra Series 3 105 Heat Exchanger/Piping Parts; undated page; publisher HTML snapshot 2026-10-02; https://parts.weil-mclain.com/catalog?model_id=17&schematic_id=608 | 条件性零件架构、分类、供应状态及实际场内铸造；非工厂配方或数量默认值 |
