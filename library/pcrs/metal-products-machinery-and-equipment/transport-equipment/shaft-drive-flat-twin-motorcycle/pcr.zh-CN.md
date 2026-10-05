---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.shaft-drive-flat-twin-motorcycle
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 轴传动四冲程水平对置双缸汽油摩托车总装

## 1. 范围与适用性

候选自编方法用于新造完整两轮、排量大于50cc、四冲程水平对置双缸火花点火汽油摩托车总装，具有承载发动机与两段车架、六速常啮合变速箱、油浴离合器及万向轴终传动。证据选择Telelever前悬架、Paralever单侧铝后悬架、铸铝车轮盘式制动。接收供应完成模块，集成装配声明配置，进行实际序列生产验收净称重，按真实条件保护放行。R1250GS技术资料界定结构示例；当前柏林多车型生产仅为工序背景，不证明R1250GS当前可供或通用配方。

排除CVT皮带传动跨骑踏板车、链传动摩托车、单缸直列发动机系列、电动车、辅助马达脚踏车、三轮边车、未完成套件、维修、发动机制造及骑行道路运输。本边界实质窄于CPC49912。与焊接钢架外购发动机CVT模块踏板车不同，本门点集成承载水平对置双缸发动机及独立声明变速箱轴终传动接口，不含车架焊接CVT制造。供应发动机变速箱冷试在上游；实际整车滚筒制动电气检查配置净称重属于本门点。不仅按排量阈值创建身份。科学审查待完成；双语对齐自动检查不是方法学批准。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.shaft-drive-flat-twin-motorcycle |
| classification_refs | CPC3.0 49912；更窄，不声称已接受映射 |
| covered_products | 声明结构与验收客户配置的新造完整轴传动水平对置双缸摩托车 |
| excluded_products | CVT踏板车、其他发动机传动悬架结构、零件未完成套件及运行骑行 |
| representative_product | BMW R1250GS制造商结构示例；不假设型号重量强度或当前供应 |
| production_route | 完成模块接收→车架发动机轴传动集成→悬架车轮制动电气装配→实际序列滚筒系统验收净称重→条件性包装放行 |
| market_state | 声明总装门点新造完整验收净配置车辆 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 验收完整轴传动四冲程水平对置双缸汽油摩托车 |
| How much | 1 kg验收完整配置摩托车净质量 |
| How well | 完整图纸物料安装选配清单、实际批准制造验收；不虚构通用试验排放阈值 |
| How long or cycle | 一个制造验收周期，无寿命骑行公里参考 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收完整轴传动四冲程水平对置双缸汽油摩托车 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际制造者型号序列、排量大于50cc、火花点火四冲程水平对置双缸与风液冷路线；完整两段车架承载发动机；六速常啮合变速箱油浴离合器轴终传动供货包含；声明Telelever前悬架Paralever单侧铝后悬架铸造车轮盘式制动ABS催化电气安装客户选配；供应完成模块边界；验收完整实测净质量M kg及cp_mass校准配置燃油油液核对；包括必需安装发动机传动电池安全设备保留工作机油冷却液制动液；排除可用燃油骑手行李临时试验负载夹具包装散装备件；实际场址时期门点燃油等级化石比例冷热试验上游供应覆盖 |

在数据集元数据或等效可寻源字段声明每项必需限定信息。等质量不表示同功率骑行性能承载服务环境强度。不用目录道路整备质量替代实测净M。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 | kg | M = 同一配置的一台完整设备的验收净质量,单位 kg; 使用 cp_mass 采集 M。 |
| `exchange_mass` | frame; engine; gearbox; clutch; shaft; final_drive; bolt; gear_oil; front_suspension; rear_swingarm; rear_strut; front_wheel; rear_wheel; front_tyre; rear_tyre; front_brake; rear_brake; brake_disc; abs; tank; exhaust; harness; battery; saddle; lamp; coolant; engine_oil; brake_fluid; co2_air; no_air; no2_air; co_air; spent_oil; wood; cardboard; film | 质量 | kg | 按kg实测每项独立收用退物理项。台件统计须实际逐件质量及包含范围。以后兼容的公开数量面积属性保留原单位及明确实测换算，不改写为质量。 |
| `electric_energy` | assembly_electricity; outfit_electricity; acceptance_electricity; protection_electricity | 净热值 | MJ | 保留真实公开能量属性电表kWh；1 kWh =3.6 MJ。供电技术供应方电压明确披露为上游缺口，不从前景用电身份推断。 |
| `fuel_volume` | petrol | 体积 | m3 | 保留公开体积引用属性。按有批次温度记录条件实测实际消耗无铅汽油净升数；1升=0.001 m3。独立质量碳平衡须实测密度化石碳组成，不假定kg/升换算。 |
| `mass_configuration` | cp_mass | 质量 | kg | 排净或记录可用燃油后实测验收完整安装配置。包括必需保留工作机油冷却液制动液电池；排除骑手行李临时试验配重夹具包装散装备件。秤读数包含排除燃油物品时减独立实测质量并签署核对，保留原始总读数。不得把干模块质量与保留油液重复扣计。 |
| `mass_record_origin` | cp_mass | 质量 | kg | 使用序列完整摩托车真实校准平台秤读数，保留校准零点皮重、正净M、物料选配油液燃油状态不确定性验收签名。制造商目录道路整备值包含至少90%可用燃油，既非净M亦非实际序列称重原件。缺实际原件仍为量值缺口。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收完成车架水平对置双缸摩托车发动机及声明供应成品模块 |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | CPC49912中声明轴传动水平对置双缸完整摩托车子集 |
| recursive_input_rule | 不递归把供应商加工发动机装配车架焊接电镀铸造收料前涂层放入本总装门点 |
| upstream_dataset_requirement | 更广供应链声明前须关联兼容完成模块消耗品场址特定电力燃油交付运输废物处理数据集 |
| disclosure | 仅前景总装可归属生产验收配置净称重真实条件保护；披露供应包含缺失关联 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_trials` | acceptance | 包含门点内实际序列滚筒系统验收。收料前电驱发动机冷试为供应工序，不在本门点计为汽油燃烧。研发型式认证道路循环燃油排放排除。任何追加厂内加工焊接涂装须独立有证据原子清单，不隐含纳入。 | `bmw-production` |
| `boundary_completeness` | dataset | 本前景门点不是完整摇篮到工厂门。必需阶段不使每个示例交换必需；独供模块实际换油排放包装仅有原件时适用。增列实际遗漏构件化学压缩气清洗热外部试验精确独立交换；披露遗漏未知，不写类别行或虚构零。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `assembly` | 车架与轴传动动力总成集成 | required | 声明排量大于50cc的新造轴传动四冲程水平对置双缸汽油摩托车。 | foreground | 每台验收完整设备按M归一化 |
| `outfit` | 行走系统与完整摩托车装配 | required | 同一实际完整声明交付配置。 | foreground | 每台验收完整设备按M归一化 |
| `acceptance` | 生产验收与配置净质量称重 | required | 声明制造门点放行的实际序列摩托车。 | foreground | 每台验收完整设备按M归一化 |
| `protection` | 工厂放行与条件性交付保护 | required | 放行每台完整验收摩托车；消耗包装或复用运输架交换仅在本门点实际使用时适用。 | foreground | 每台验收完整设备按M归一化 |

车架发动机连接轴传动集成进入完整行走系统装配实际滚筒系统验收称重；保护仅真实存在时适用。声明实际工位顺序供应完成接口外包范围。安装选配模块已含构件只计一次。

### 过程：车架与轴传动动力总成集成（`assembly`）

接收完成车架摩托车发动机，连接承载发动机与车架，集成实际六速变速箱、传动轴及终传动。界定发动机离合器变速箱供货包含，完整发动机模块内构件不再独计。收料前发动机加工车架焊接涂层在本总装门点外。BMW工厂说明仅例示连接接口，不是必需供应结构或通用配方。

#### 输入

##### 产品流

###### 完成摩托车承载车架总成（`frame`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成摩托车承载车架总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`bmw-production`; `bmw-configuration`

###### 完成四冲程水平对置双缸火花点火摩托车活塞发动机（`engine`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成四冲程水平对置双缸火花点火摩托车活塞发动机
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`bmw-production`; `bmw-configuration`

###### 完成六速常啮合摩托车变速箱（`gearbox`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成六速常啮合摩托车变速箱
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`bmw-production`; `bmw-configuration`

###### 完成摩托车油浴离合器总成（`clutch`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成摩托车油浴离合器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`bmw-production`; `bmw-configuration`

###### 完成摩托车万向传动轴总成（`shaft`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成摩托车万向传动轴总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`bmw-production`; `bmw-configuration`

###### 完成摩托车轴传动终传动齿轮总成（`final_drive`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成摩托车轴传动终传动齿轮总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`bmw-production`; `bmw-configuration`

###### 钢制螺纹摩托车装配螺栓（`bolt`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：钢制螺纹摩托车装配螺栓
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`bmw-production`; `bmw-configuration`

###### 配制摩托车终传动准双曲面齿轮油（`gear_oil`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：配制摩托车终传动准双曲面齿轮油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`bmw-production`; `bmw-configuration`

###### 外购交流电（`assembly_electricity`）

实测使用点实际前景交流电用量。选定身份未特指供电技术国家供应方电压线损，须披露并关联兼容上游供电数据集；不是中国或德国平均电网足迹。用3.6将电表kWh转MJ，保留原读数。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assembly`
- 来源：`bmw-production`; `bmw-configuration`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流


### 过程：行走系统与完整摩托车装配（`outfit`）

安装声明前后悬架车轮轮胎盘式制动燃油系统排气催化电气控制车座。R1250GS示例有铝车轮后摇臂、Telelever/Paralever和免维护12V电池；原件不建立电池化学或油箱聚合物金属材质。按实际供货物理模块，不虚构材料。独立交付可选行李箱排除，安装客户选配须声明。

#### 输入

##### 产品流

###### 完成摩托车Telelever前悬架总成（`front_suspension`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成摩托车Telelever前悬架总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 铸铝摩托车单侧后摇臂（`rear_swingarm`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：铸铝摩托车单侧后摇臂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 完成摩托车后悬架弹簧减振支柱（`rear_strut`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成摩托车后悬架弹簧减振支柱
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 完成无轮胎铸铝摩托车前轮（`front_wheel`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成无轮胎铸铝摩托车前轮
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 完成无轮胎铸铝摩托车后轮（`rear_wheel`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成无轮胎铸铝摩托车后轮
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 充气子午线摩托车前轮胎（`front_tyre`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：充气子午线摩托车前轮胎
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 充气子午线摩托车后轮胎（`rear_tyre`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：充气子午线摩托车后轮胎
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 完成摩托车前盘式制动卡钳总成（`front_brake`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成摩托车前盘式制动卡钳总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 完成摩托车后盘式制动卡钳总成（`rear_brake`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成摩托车后盘式制动卡钳总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 完成摩托车制动盘（`brake_disc`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成摩托车制动盘
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 完成摩托车防抱死制动控制模块（`abs`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成摩托车防抱死制动控制模块
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 完成摩托车汽油箱总成（`tank`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成摩托车汽油箱总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 完成带三元催化器摩托车排气总成（`exhaust`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成带三元催化器摩托车排气总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 完成绝缘摩托车电气线束（`harness`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成绝缘摩托车电气线束
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 完成12V免维护摩托车起动电池（`battery`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成12V免维护摩托车起动电池
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 完成摩托车驾驶鞍座（`saddle`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成摩托车驾驶鞍座
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 完成摩托车LED前照灯总成（`lamp`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成摩托车LED前照灯总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 配制摩托车发动机液体冷却剂（`coolant`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：配制摩托车发动机液体冷却剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 配制四冲程摩托车发动机润滑油（`engine_oil`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：配制四冲程摩托车发动机润滑油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 配制摩托车液压盘式制动液（`brake_fluid`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：配制摩托车液压盘式制动液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

###### 外购交流电（`outfit_electricity`）

实测使用点实际前景交流电用量。选定身份未特指供电技术国家供应方电压线损，须披露并关联兼容上游供电数据集；不是中国或德国平均电网足迹。用3.6将电表kWh转MJ，保留原读数。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`bmw-production`; `bmw-configuration`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流


### 过程：生产验收与配置净质量称重（`acceptance`）

纳入实际装配检查可归属滚筒试验；汽油热运转试验与电驱发动机冷试分记。收料前供应发动机验收仍在上游。仅适用时采集实际试验燃油消耗退回及分物质排放，不规定时长排放量或燃烧驱动冷试。记录燃油油液选配状态后用校准设备称量验收完整配置车辆。

#### 输入

##### 产品流

###### 供应摩托车生产验收的车用汽油（`petrol`）

仅可归属热运行滚筒试验实际无铅炼油汽油。保留其公开体积引用属性，采集有温度记录的交付退回消耗升数，再乘0.001转m3。不强制通用密度；任何质量化石碳平衡另需实测批次密度组成碳去向。其他燃料或乙醇混合燃料须兼容独立身份。交付保留试验燃油排除M并独记，不误作消耗。

- 选定流：汽油，无铅 `eba2e8f5-17f1-4fb3-ae36-f41fce378ee6`
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`bmw-production`; `bmw-configuration`

###### 外购交流电（`acceptance_electricity`）

实测使用点实际前景交流电用量。选定身份未特指供电技术国家供应方电压线损，须披露并关联兼容上游供电数据集；不是中国或德国平均电网足迹。用3.6将电表kWh转MJ，保留原读数。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`bmw-production`; `bmw-configuration`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 转移处理的废四冲程摩托车试验润滑油（`spent_oil`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：转移处理的废四冲程摩托车试验润滑油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`bmw-production`; `bmw-configuration`

##### 基本流

###### 二氧化碳（化石源），排向空气（未指定）（`co2_air`）

仅可归属生产试验实际分项定量CO2 CAS124-38-9释放，即时空气未指定子介质。排除生物源份额；碳平衡替代须实际化石碳含量氧化产物平衡，不用假定通用汽油因子。按校准出口浓度排气流量实际期间积分，保留单位检出限不确定性。不推断必然排放或采用道路运行循环g/km。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`bmw-production`; `bmw-configuration`

###### 一氧化氮，排向空气（未指定）（`no_air`）

仅可归属生产试验实际分项定量NO CAS10102-43-9释放，即时空气未指定子介质。NO2、N2O及按NO2当量报告NOx不同。按校准出口浓度排气流量实际期间积分，保留单位检出限不确定性。不推断必然排放或采用道路运行循环g/km。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`bmw-production`; `bmw-configuration`

###### 二氧化氮，排向空气（未指定）（`no2_air`）

仅可归属生产试验实际分项定量NO2 CAS10102-44-0释放，即时空气未指定子介质。NO、N2O和总NOx不同。按校准出口浓度排气流量实际期间积分，保留单位检出限不确定性。不推断必然排放或采用道路运行循环g/km。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`bmw-production`; `bmw-configuration`

###### 一氧化碳（化石源），排向空气（未指定）（`co_air`）

仅可归属生产试验实际分项定量CO CAS630-08-0释放，即时空气未指定子介质。不可用CO2或职业接触浓度替代排放质量。按校准出口浓度排气流量实际期间积分，保留单位检出限不确定性。不推断必然排放或采用道路运行循环g/km。仅定量核验化石源CO，分开生物源份额，不从总CO单独推断化石来源。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`bmw-production`; `bmw-configuration`


### 过程：工厂放行与条件性交付保护（`protection`）

木箱瓦楞纸板仅按实际海外型包装适用。复用钢运输架按实测服务使用原件独立归属，不把一只全新架全部计入一台摩托车。薄膜仅实际非黏性低密度聚乙烯规格适用。声明门点外经销交付使用运输排除。

#### 输入

##### 产品流

###### 完成摩托车运输木箱锯材板（`wood`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成摩托车运输木箱锯材板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_protection。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_protection`
- 来源：`bmw-production`

###### 完成摩托车运输瓦楞纸板箱（`cardboard`）

仅本接口实际独供物理项。实测净领用减退回，核对供应包含；已含另一供货总成时不单独交换。保留实际规格，原子化增列实际遗漏构件。

- 选定流：完成摩托车运输瓦楞纸板箱
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_protection。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_protection`
- 来源：`bmw-production`

###### 非黏性非泡沫低密度聚乙烯保护包装薄膜（`film`）

仅实际供应非黏性非泡沫、未增强未层压未支撑的低密度聚乙烯薄膜；核对供应规格实测独耗净薄膜。其他结构须独立身份。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_protection。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_protection`
- 来源：`bmw-production`

###### 外购交流电（`protection_electricity`）

实测使用点实际前景交流电用量。选定身份未特指供电技术国家供应方电压线损，须披露并关联兼容上游供电数据集；不是中国或德国平均电网足迹。用3.6将电表kWh转MJ，保留原读数。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_protection。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_protection`
- 来源：`bmw-production`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收完整轴传动四冲程水平对置双缸汽油摩托车（`finished_machine`）

声明完整验收净配置固定1kg。包括安装发动机轴传动电池安全装备必需工作机油冷却液制动液；排除可用汽油骑手行李临时滚筒配重试验夹具包装散装备件；保留实测配置修正，不采用型号目录质量。

- 选定流：验收完整轴传动四冲程水平对置双缸汽油摩托车
- 流属性/单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`bmw-production`

##### 废物流

##### 基本流


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared resources | 按序列工单工位分离分表避免分配。剩余共用电力搬运按有证明实测因果驱动如真实装配供电时间负荷或滚筒时长负荷，保留分子分母敏感性。不假定CVT与水平对置双缸轴传动车架之间按台均分或目录质量分配。 | `ghg-allocation` |
| `allocation_returns` | spent_oil; protection | 区分供应退料厂内复用转移废物。复用运输架按实际服务使用原件归属，不按每车一只全新架或虚构寿命。不自动给燃油再生材料避免负担抵扣。真实共产品须独立审查因果分配兼容接收边界。 | `ghg-allocation` |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | reference product | weighing_record | 序列；配置；验收净质量 M；总皮零读数；秤校准不确定性；实测排除燃油物品修正；保留油液；验收；台数 | 使用经校准的秤称量已验收的完整设备,排除运输包装；核对同一配置和验收记录。 | kg | 每个验收序列及变更配置 | 实际制造报告期 | 声明总装场址 | 每台验收净质量 | 原始秤校准物料油液核对签署验收 |
| `cp_assembly` | `assembly` | inventory rows | production_record | 序列；配置；物品规格；实测净领退库存；供应包含；原单位；验收台数；校准；电力kWh；汽油升温度；实际物质浓度排气流量时间；因果分配分子分母 | 记录供应部件型号序列完成供货边界、实测收退净质量安装螺栓保留指定润滑剂；核对发动机变速箱离合器包含。 按声明单位独采各交换：物理项kg、电力每kWh乘3.6为MJ、汽油每升乘0.001为m3。校准仪器保留净库存退回修正实测排放或明确不适用未知状态，不用默认因子。 | 逐行kg；MJ；m3 | 每个序列工单实测实际试验期间 | 实际报告期 | 声明装配场址独立披露外包方 | 可归属交换数量 / 验收设备数量 | 原始模块安全数据表仪表试验库存废物原件实测分配 |
| `cp_outfit` | `outfit` | inventory rows | production_record | 序列；配置；物品规格；实测净领退库存；供应包含；原单位；验收台数；校准；电力kWh；汽油升温度；实际物质浓度排气流量时间；因果分配分子分母 | 核对完整序列物料表独供模块已含分总成；实测模块净数量及实际机油冷却液制动液加注退回；记录安装选配。 按声明单位独采各交换：物理项kg、电力每kWh乘3.6为MJ、汽油每升乘0.001为m3。校准仪器保留净库存退回修正实测排放或明确不适用未知状态，不用默认因子。 | 逐行kg；MJ；m3 | 每个序列工单实测实际试验期间 | 实际报告期 | 声明装配场址独立披露外包方 | 可归属交换数量 / 验收设备数量 | 原始模块安全数据表仪表试验库存废物原件实测分配 |
| `cp_acceptance` | `acceptance` | inventory rows | production_record | 序列；配置；物品规格；实测净领退库存；供应包含；原单位；验收台数；校准；电力kWh；汽油升温度；实际物质浓度排气流量时间；因果分配分子分母 | 采集序列试验滚筒原件电力分表读数实际燃油等级化石比例实测数量密度出口物质流量时间，以及关联验收台数的校准秤配置原件。 按声明单位独采各交换：物理项kg、电力每kWh乘3.6为MJ、汽油每升乘0.001为m3。校准仪器保留净库存退回修正实测排放或明确不适用未知状态，不用默认因子。 | 逐行kg；MJ；m3 | 每个序列工单实测实际试验期间 | 实际报告期 | 声明装配场址独立披露外包方 | 可归属交换数量 / 验收设备数量 | 原始模块安全数据表仪表试验库存废物原件实测分配 |
| `cp_protection` | `protection` | inventory rows | production_record | 序列；配置；物品规格；实测净领退库存；供应包含；原单位；验收台数；校准；电力kWh；汽油升温度；实际物质浓度排气流量时间；因果分配分子分母 | 实测独耗木材纸板薄膜退回复用架服务归属；保留放行门点，产品净质量与包装分开。 按声明单位独采各交换：物理项kg、电力每kWh乘3.6为MJ、汽油每升乘0.001为m3。校准仪器保留净库存退回修正实测排放或明确不适用未知状态，不用默认因子。 | 逐行kg；MJ；m3 | 每个序列工单实测实际试验期间 | 实际报告期 | 声明装配场址独立披露外包方 | 可归属交换数量 / 验收设备数量 | 原始模块安全数据表仪表试验库存废物原件实测分配 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

先按各行单位取得每验收序列实际可归属净q_item，保留模块包含及实测共用资源分配，再除同一实测净M。等同序列配置可用可归属交换合计除实测验收净质量之和，保留序列证据。实质不同动力悬架选配门点试验路线分开。每kg汽油体积不是每kg汽油质量；任何碳平衡另需独立实测密度组成。缺实际M量值前景证据仍为缺口。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | 按mass_record_origin及mass_configuration进行真实校准序列完整摩托车称重。拒目录含燃油整备值骑手载荷包装未测扣项。本方法未提供必需实际原件。 | 原始序列秤校准配置油液验收原件 |
| `quality_inclusions` | assembly; outfit | 核对发动机离合器变速箱供应包含、轴终传动悬架车轮与轮胎制动油箱催化器电池化学线束灯具真实选配油液。原子化增列实际遗漏构件，完成模块已含部件不重复。 | 实际批准物料供货完成度型号序列安全数据表原件 |
| `quality_emissions` | petrol; co2_air; no_air; no2_air; co_air | 保留真实无铅油品规格公开体积单位温度，独立建立化石碳来源实测出口物质子介质。NO不是NO2/N2O/总NOx；CO化学产品不是空气释放。不把运行WMTC因子用于工厂试验。记录治理不确定性检出限。 | 实际燃油安全数据表校准分物质试验证据 |
| `quality_evidence` | dataset | 披露真实场址时期门点来源供应完成度条件缺席计量身份上游缺口不确定性。经验质量范围须兼容实际原件或独立核验原件，不虚构质量收率试验时长寿命。全部量值采集仍待完成；自动检查不建立科学审查。 | 原始证据范围缺口登记 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished_machine; cp_mass | 核对水平对置双缸四冲程轴传动六速完整结构实际序列大于50cc正校准净M及燃油油液选配核对。固定输出1kg，不替代踏板链传动或服务公里。 | `bmw-configuration` |
| `validate_rows` | all inventory rows | 逐行核对单一化学物理身份真实方向类型公开状态属性单位正式中文名实测归一化及全部小写规则协议引用。保留汽油体积，不改质量。未解决身份为声明审查缺口，不虚称必然排放或虚构零。 |  |
| `validate_balance` | all processes | 核对模块包含净材料油液燃油领退消耗保留废物接收实际试验包装。量值数据完成须真实M及全部实际交换。完整摇篮到工厂门另需本总装门点外兼容上游供应关联。 | `ghg-allocation` |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置轴传动水平对置双缸摩托车前景总装 |
| downstream_use | secondary_dataset；background_dataset仅合格审查兼容上游关联后 |
| allowed_use | 声明兼容发动机传动悬架配置模块供货完成度实际净M门点制造 |
| excluded_use | 整个CPC49912、CVT踏板其他结构、骑行运输等质量性能等价及无依据全生命周期 |
| required_metadata | 实际制造者型号序列、排量大于50cc、火花点火四冲程水平对置双缸与风液冷路线；完整两段车架承载发动机；六速常啮合变速箱油浴离合器轴终传动供货包含；声明Telelever前悬架Paralever单侧铝后悬架铸造车轮盘式制动ABS催化电气安装客户选配；供应完成模块边界；验收完整实测净质量M kg及cp_mass校准配置燃油油液核对；包括必需安装发动机传动电池安全设备保留工作机油冷却液制动液；排除可用燃油骑手行李临时试验负载夹具包装散装备件；实际场址时期门点燃油等级化石比例冷热试验上游供应覆盖 |
| required_quality_disclosure | 实际校准M交换测量模块包含燃油体积化石来源证据供电路线经验质量身份上游缺口 |
| update_trigger | 发动机车架离合器变速箱轴终传动悬架选配供应包含油液燃油试验包装路线实际秤配置门点场址时期变化 |


## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `bmw-configuration` | literature | [BMW Motorrad R1250GS technical data](https://www.bmw-motorrad.com.my/en/models/adventure/r1250gs/technicaldata.html) | HTML发动机动力传动底盘制动尺寸重量及脚注1：水平对置双缸四冲程火花点火汽油六速箱油浴离合器轴传动承载车架Telelever/Paralever车轮盘式制动电池。仅型号结构。目录质量包含至少90%可用燃油，拒作为M；不采用WMTC消耗CO2数值质量或当前EU4验收规则。 |
| `bmw-production` | literature | [BMW Group Plant Berlin production](https://www.bmwgroup-werke.com/berlin/de.html) | HTML发动机制造整车装配涂装物流质量管理：发动机变速箱冷试车架发动机连接扭矩配置工位数据滚筒系统验收欧洲复用钢架海外木纸包装。多车型工厂背景；加工焊接涂装在本收料门点外，不把R1300铝箱断言为R1250。不采用工时部件数包装节省或排放因子。 |
| `yamaha-production` | literature | [Yamaha manufacturing work](https://global.yamaha-motor.com/jp/recruit/graduates/highschool/works-mc/) | HTML发动机装配车体模块装配完成检查工厂管理：独立佐证供应厂内模块装配电气功能外观验收出货背景。混合摩托踏板船外机岗位不建立本水平对置双缸轴结构必需厂内铸造或单车量值。 |
| `ghg-allocation` | official_guidance | [WRI/WBCSD Product Life Cycle Accounting and Reporting Standard,2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf) | 印刷63/PDF65表9.1至9.2：历史避免细分及潜在物理关系分配层次。仍须真实前景实测因果驱动，不推断摩托车量值因子或当前法规义务。 |
