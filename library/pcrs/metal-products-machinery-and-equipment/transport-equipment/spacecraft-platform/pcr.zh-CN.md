---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.spacecraft-platform
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 干态无推进小型航天器平台制造

## 1. 范围与适用性

新制完整干态无人地球轨道小型航天平台，具有铝合金主框架、太阳光伏发电、加液可充电锂离子储能、电源管理被动热控及配置航电通信姿态控制，不安装推进。声明交付飞行平台排除任务载荷，包含平台侧机电接口。制造范围由声明坯料接收子系统至同配置工厂验收交付。此较窄平台路线仅为 CPC 49630 背景，不覆盖全部航天器发射器。

排除完整含载荷航天器、发射器上面级、推进推力器推进剂、载人深空核能燃料电池平台、复合主框架与其他未声明电源结构路线、地面站释放器发射适配器、载荷仪器及平台门点后集成、仅鉴定工程模型、备件维修翻新软件研发培训服务、发射运输上升部署在轨运行报废。运营寿命任务产出须另建模型。

ISISPACE 区分平台载荷并提供条件推进；NASA 记录铝模块结构与光伏锂离子子系统。案例支持此较窄制造产品，不作普遍配方立方星尺寸或认证任务寿命。GSFC-STD-7000B（2021）为历史任务裁剪环境质量特性核验背景，不作普遍试验程序或实际平台 M 证据。科学审查待完成。若无匹配披露上游链接，接收到验收前景不是完整从摇篮到厂门。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.spacecraft-platform |
| classification_refs | CPC 3.0 49630；较窄无推进干态无人小型航天平台，仅背景 |
| covered_products | 新制完整干态无人地球轨道小型航天平台，具有铝合金主框架、太阳光伏发电、加液可充电锂离子储能、电源管理被动热控及配置航电通信姿态控制，不安装推进。声明交付飞行平台排除任务载荷，包含平台侧机电接口。制造范围由声明坯料接收子系统至同配置工厂验收交付。此较窄平台路线仅为 CPC 49630 背景，不覆盖全部航天器发射器。 |
| excluded_products | 排除完整含载荷航天器、发射器上面级、推进推力器推进剂、载人深空核能燃料电池平台、复合主框架与其他未声明电源结构路线、地面站释放器发射适配器、载荷仪器及平台门点后集成、仅鉴定工程模型、备件维修翻新软件研发培训服务、发射运输上升部署在轨运行报废。运营寿命任务产出须另建模型。 |
| representative_product | 一个序列号配置关联验收完整干飞行平台，排除载荷，具有正实测 M |
| production_route | 条件铝制造清洗胶接；框架热控电源航电姿态集成；配置质量功能裁剪环境验收及条件保护 |
| market_state | 声明制造门点新制验收完整配置干平台 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一个完整配置无推进航天平台，排除载荷 |
| How much | 1 kg 验收完整配置干平台净质量；按台记录除实测 M |
| How well | 实际交付飞行平台配置，具质量机电软件接口功能裁剪验收记录；不作等质量任务性能飞行认证等效 |
| How long or cycle | 一次制造验收周期；不作轨道持续期寿命发射服务功能单位 |
| reference_flow_link | finished_platform |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收完整干态无推进光伏锂离子航天器平台 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造者型号序列号及受控配置图纸物料表；飞行硬件区别工程模型；铝合金状态及坯料外购框架范围；平台侧载荷接口且载荷排除；光伏半导体技术板完整性收拢交付；加液锂离子电池组化学电池管理荷电状态安全记录；精确计算机射频天线姿态部件件号包含；实际热控层垫及安装附件；无推进推进剂；由校准完整平台称重实测夹具去皮同序列号验收得实际干净 M kg；整体拆卸飞行件核对，无载荷模拟包装地面支持件；实际功能环境验收计划裁剪等级公用仪表；制造场址时期门点外包服务分配上游链接不确定性遗漏 |

干 M 含完整安装平台结构热控光伏板、加液电池电解液线束电子及全部声明整体飞行件。干态不等于排空电池。排除载荷推进剂发射适配器释放器包装地面试验夹具可拆模拟载荷。实际整体拆卸交付板附件须物理称重核对同验收序列号只计一次。目录平台质量立方星质量上限发射湿质量或 U 尺寸推算质量不能建立 M。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量,单位 kg; 使用 cp_mass 采集。 |
| `mass_record_provenance` | cp_mass | Mass | kg | 使用适用校准设备实测完整干态验收平台，扣实测夹具皮重，具受控安装设备清单及序列号配置放行。记录收拢拆卸整体件、加液电池及实际所含热控电子状态；扣实测临时载荷模拟地面夹具。核对部件质量和与实际整平台读数、不确定性秤分辨率校准日期操作者及正净 M。目录估值部件和单独或发射器上限不替代称重。 |
| `energy_units` | 各电力行 | Net calorific value | MJ | 使用核验能量单位组换算 1 kWh = 3.6 MJ；进线电能区别半导体面积电池容量质量在轨生成电力。不提供热值燃料密度因子。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 指定铝坯料及接收完整平台结构子系统单元 |
| starting_condition_role | 声明前景接收到飞行平台制造验收 |
| product_classification_scope | 配置航天平台，排除载荷发射器 |
| recursive_input_rule | 不将同成品平台作为自身制造投入。外购完整单元替代所含坯料部件加工；厂内工序须独立实测交换 |
| upstream_dataset_requirement | 链接实际合金状态表面、板半导体、电池配方组完整性计算机姿态供应场址时期供应商匹配单位。披露供应缺口 |
| disclosure | 制造者型号序列号及受控配置图纸物料表；飞行硬件区别工程模型；铝合金状态及坯料外购框架范围；平台侧载荷接口且载荷排除；光伏半导体技术板完整性收拢交付；加液锂离子电池组化学电池管理荷电状态安全记录；精确计算机射频天线姿态部件件号包含；实际热控层垫及安装附件；无推进推进剂；由校准完整平台称重实测夹具去皮同序列号验收得实际干净 M kg；整体拆卸飞行件核对，无载荷模拟包装地面支持件；实际功能环境验收计划裁剪等级公用仪表；制造场址时期门点外包服务分配上游链接不确定性遗漏 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacture` | 全部阶段 | 纳入实际制造集成可归属返工编程门点前验收及可归属试验洁净室公用工程。外包试验加工为独立实际服务，含范围单位。排除平台无关软件研发、门点后载荷制造集成发射任务服务。 | `isispace-platform` |
| `boundary_completeness` | 接收总成与物料表 | 各完整接收框架板电池航电单元含所含附件电芯电解液线束只计一次。匹配验收配置安装硬件；交付实体拆卸不移除整体飞行件。定量数据完成前补齐全部实际开关连接器传感器胶黏气体废物排放公用。候选卡不是穷尽普遍平台物料表。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `structure_fabrication` | 铝框架与板件制造 | conditional | 声明铝平台结构实际厂内制造。 | foreground | 一台验收配置干航天平台，使用 M 归一化 |
| `clean_bond` | 精密清洗与胶接 | conditional | 实际前景溶剂水清洗或环氧胶接。 | foreground | 一台验收配置干航天平台，使用 M 归一化 |
| `mechanical_thermal` | 结构与被动热控硬件集成 | required | 每个覆盖平台；具体热控硬件按配置。 | foreground | 一台验收配置干航天平台，使用 M 归一化 |
| `power_integration` | 光伏电源与电池集成 | required | 每个覆盖光伏锂离子供电平台。 | foreground | 一台验收配置干航天平台，使用 M 归一化 |
| `avionics_attitude` | 计算机通信与姿态子系统集成 | required | 每个覆盖配置无推进平台。 | foreground | 一台验收配置干航天平台，使用 M 归一化 |
| `acceptance` | 质量功能与裁剪环境验收 | required | 每个飞行平台；具体环境试验遵循实际批准计划。 | foreground | 一台验收配置干航天平台，使用 M 归一化 |
| `protection` | 交付保护准备 | conditional | 实际交付临时保护膜。 | foreground | 一台验收配置干航天平台，使用 M 归一化 |

条件铝制造清洗供入框架热控、电源及航电姿态集成；实际飞行平台验收后保护。阶段可重叠，资源一次归属。即使必需阶段，各交换卡以实际配置组成为条件。每卡一个物理化学交换；不强制排放制造配方。

### 过程：铝框架与板件制造 (`structure_fabrication`)

按受控图纸切削实际合金状态框架板坯、分类合金切屑、检验几何并连接独立供入紧固件。外购完整框架替代所含坯料制造。实际阳极处理热处理焊接外包操作须独立实测交换；不普遍假定。

#### 输入

##### 产品流

###### 6061-T6 变形铝合金结构板 (`aluminium_plate`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：6061-T6 变形铝合金结构板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_structure_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_structure_fabrication`
- 来源：`nasa-structures`

###### 实心铝合金结构铆钉 (`aluminium_fastener`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：实心铝合金结构铆钉
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_structure_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_structure_fabrication`
- 来源：`nasa-structures`

###### 水混合半合成金属加工液浓缩配方 (`machining_fluid`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：水混合半合成金属加工液浓缩配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_structure_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_structure_fabrication`
- 来源：`nasa-structures`

###### 工艺用水 (`machining_water`)

实际处理供入稀释清洗工艺水；排除内循环自然取水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_structure_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_structure_fabrication`
- 来源：`nasa-structures`

###### 工厂进线交流电力 (`structure_fabrication_electricity`)

计量可归属厂试验 kWh 并使用核验单位组按 1 kWh = 3.6 MJ 换算。保留实际区域供应商电压；地面试验负荷洁净室公用按实测资源使用分配，不作在轨卫星光伏发电。各实际供入热压缩空气等载体服务须独立行。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_structure_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_structure_fabrication`
- 来源：`nasa-structures`

#### 输出

##### 废物流

###### 分类未处理 6061 铝合金机加工切屑 (`aluminium_chips`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：分类未处理 6061 铝合金机加工切屑
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_structure_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_structure_fabrication`
- 来源：`nasa-structures`

### 过程：精密清洗与胶接 (`clean_bond`)

记录各实际溶剂供应水擦拭布及识别胶黏配方固化组分，保留清洗固化检验原件。环氧案例仅实际匹配配方放行状态时适用。捕集清洗废液擦拭布区别于直接空气溶剂排放；各实际废物排放独立记录。供应胶接总成替代所含胶接。不假定普遍洁净室等级固化程序放气限值溶剂排放因子。

#### 输入

##### 产品流

###### 无水异丙醇清洗溶剂 (`isopropanol_solvent`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：无水异丙醇清洗溶剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_clean_bond。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_clean_bond`
- 来源：`nasa-structures`

###### 工艺用水 (`clean_water`)

实际供应处理工艺清洗水，区别废液。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_clean_bond。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_clean_bond`
- 来源：`nasa-structures`

###### 干燥非织造聚酯清洗布 (`polyester_wipe`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：干燥非织造聚酯清洗布
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_clean_bond。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_clean_bond`
- 来源：`nasa-structures`

###### 双酚 A 环氧结构胶基料配方 (`epoxy_adhesive`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：双酚 A 环氧结构胶基料配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_clean_bond。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_clean_bond`
- 来源：`nasa-structures`

###### 聚胺环氧结构胶固化组分配方 (`epoxy_hardener`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：聚胺环氧结构胶固化组分配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_clean_bond。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_clean_bond`
- 来源：`nasa-structures`

###### 工厂进线交流电力 (`clean_bond_electricity`)

计量可归属厂试验 kWh 并使用核验单位组按 1 kWh = 3.6 MJ 换算。保留实际区域供应商电压；地面试验负荷洁净室公用按实测资源使用分配，不作在轨卫星光伏发电。各实际供入热压缩空气等载体服务须独立行。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_clean_bond。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_clean_bond`
- 来源：`nasa-structures`

#### 输出

##### 废物流

###### 异丙醇污染废聚酯清洗布 (`spent_wipe`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：异丙醇污染废聚酯清洗布
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_clean_bond。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_clean_bond`
- 来源：`nasa-structures`

###### 转交处理的铝部件水性清洗废液 (`clean_effluent`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：转交处理的铝部件水性清洗废液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_clean_bond。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_clean_bond`
- 来源：`nasa-structures`

#### 输出

##### 基本流

###### 异丙醇 (`ipa_release`)

仅实际证实可归属湿清洗向空气未指定即时异丙醇排放。室内空气水土壤长期身份不同。采用实际溶剂平衡或物种实测；不假定全部领用蒸发或编造因子。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_clean_bond。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_clean_bond`
- 来源：`nasa-structures`

### 过程：结构与被动热控硬件集成 (`mechanical_thermal`)

集成外购或厂内铝框架实际支架载荷机械接口及实际被动热控膜散热板接触垫。各实体膜配方垫为独立交换。模块子系统已含结构紧固件区别独立供入结构。安装被动热控及载荷电机械接口归平台 M；载荷发射释放器不归。各展开铰链释放机构须独立实际部件记录。

#### 输入

##### 产品流

###### 完整铝合金卫星平台结构框架总成 (`frame_received`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：完整铝合金卫星平台结构框架总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical_thermal。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical_thermal`
- 来源：`nasa-structures`

###### 镀铝聚酰亚胺被动热控膜 (`thermal_film`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：镀铝聚酰亚胺被动热控膜
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical_thermal。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical_thermal`
- 来源：`nasa-structures`

###### 成品铝合金被动航天散热板 (`radiator_plate`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：成品铝合金被动航天散热板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical_thermal。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical_thermal`
- 来源：`nasa-structures`

###### 填充硅橡胶热界面垫片 (`thermal_pad`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：填充硅橡胶热界面垫片
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical_thermal。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical_thermal`
- 来源：`nasa-structures`

###### 工厂进线交流电力 (`mechanical_thermal_electricity`)

计量可归属厂试验 kWh 并使用核验单位组按 1 kWh = 3.6 MJ 换算。保留实际区域供应商电压；地面试验负荷洁净室公用按实测资源使用分配，不作在轨卫星光伏发电。各实际供入热压缩空气等载体服务须独立行。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical_thermal。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical_thermal`
- 来源：`nasa-structures`

### 过程：光伏电源与电池集成 (`power_integration`)

安装实际光伏板总成完整加液锂离子电池组、电源管理配电板及线束。保留电池技术板电池供应完整性实际安装状态；不重复所含电芯层合控制器电解液。三结板行仅实际 InGaP/GaAs/Ge 技术适用；硅或其他阵列須精确独立行。记录可归属充电功能检查试验负荷；存储电荷不作为第二制造电力投入。

#### 输入

##### 产品流

###### 完整 InGaP/GaAs/Ge 三结航天光伏板总成 (`solar_panel`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：完整 InGaP/GaAs/Ge 三结航天光伏板总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_power_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_power_integration`
- 来源：`nasa-power`

###### 完整加液可充电锂离子航天电池组 (`battery_pack`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：完整加液可充电锂离子航天电池组
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_power_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_power_integration`
- 来源：`nasa-power`

###### 完整航天电源管理配电电路板总成 (`power_board`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：完整航天电源管理配电电路板总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_power_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_power_integration`
- 来源：`nasa-power`

###### 绝缘铜卫星平台线束总成 (`copper_harness`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：绝缘铜卫星平台线束总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_power_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_power_integration`
- 来源：`nasa-power`

###### 工厂进线交流电力 (`power_integration_electricity`)

计量可归属厂试验 kWh 并使用核验单位组按 1 kWh = 3.6 MJ 换算。保留实际区域供应商电压；地面试验负荷洁净室公用按实测资源使用分配，不作在轨卫星光伏发电。各实际供入热压缩空气等载体服务须独立行。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_power_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_power_integration`
- 来源：`nasa-power`

### 过程：计算机通信与姿态子系统集成 (`avionics_attitude`)

安装各实际星载计算机射频收发机天线及独立接收反作用轮磁执行器传感器。保留件号安装固件接口核验质量；一行不得代表可互换电子集合。具体传感器执行器以实际配置为条件；替代件须独立行。软件研发任务地面站为排除服务；装配编程可归属验收负荷为制造。不代入航空航电风轮或推进。

#### 输入

##### 产品流

###### 完整卫星星载计算机总成 (`onboard_computer`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：完整卫星星载计算机总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_avionics_attitude。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_avionics_attitude`
- 来源：`isispace-platform`

###### 完整 UHF 卫星遥测指令收发机单元 (`uhf_transceiver`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：完整 UHF 卫星遥测指令收发机单元
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_avionics_attitude。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_avionics_attitude`
- 来源：`isispace-platform`

###### 完整可展开 UHF 卫星天线总成 (`uhf_antenna`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：完整可展开 UHF 卫星天线总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_avionics_attitude。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_avionics_attitude`
- 来源：`isispace-platform`

###### 完整航天反作用轮执行器总成 (`reaction_wheel`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：完整航天反作用轮执行器总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_avionics_attitude。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_avionics_attitude`
- 来源：`isispace-platform`

###### 完整卫星磁力矩器杆总成 (`magnetorquer`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：完整卫星磁力矩器杆总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_avionics_attitude。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_avionics_attitude`
- 来源：`isispace-platform`

###### 完整航天光学太阳敏感器单元 (`sun_sensor`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：完整航天光学太阳敏感器单元
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_avionics_attitude。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_avionics_attitude`
- 来源：`isispace-platform`

###### 完整卫星三轴磁强计单元 (`magnetometer`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：完整卫星三轴磁强计单元
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_avionics_attitude。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_avionics_attitude`
- 来源：`isispace-platform`

###### 工厂进线交流电力 (`avionics_attitude_electricity`)

计量可归属厂试验 kWh 并使用核验单位组按 1 kWh = 3.6 MJ 换算。保留实际区域供应商电压；地面试验负荷洁净室公用按实测资源使用分配，不作在轨卫星光伏发电。各实际供入热压缩空气等载体服务须独立行。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_avionics_attitude。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_avionics_attitude`
- 来源：`isispace-platform`

### 过程：质量功能与裁剪环境验收 (`acceptance`)

使用校准设备实际夹具去皮称量验收完整干平台、核对配置放行。采集逐台功能接口检查及实际要求振动热循环热真空等环境试验，含设备资源外包边界。验收飞行件区别鉴定原型破坏样件；仅明确记录分配可归属共同研发试验负担。干氮吹扫液氮冷屏为分开条件外购载体，不作自动放空排放。试验支持件模拟载荷从 M 排除。不采用普遍 GEVS 等级时长样件数温度。

#### 输入

##### 产品流

###### 氮气 (`nitrogen_gas`)

仅实际外购干燥气态分子氮，来自匹配公开供应路线空分。保留供应湿度纯度压力实测净供气质量；不作标准密度换算大气资源排放替换。

- 选定流：氮气 `67bb2ea6-2fd8-43c5-b227-bca12040b773`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`gsfc-gevs-2021`

###### 液氮 (`liquid_nitrogen`)

仅实际购入用于真实冷屏试验的深冷空分液氮，具记录匹配供应产品规格与液态交付状态。实测净消耗，记录蒸发退回；公开 GJB 路线为身份条件，不作普遍试验要求。不假定温度密度自动氮排放量。

- 选定流：液氮 `febfc973-1eca-4a08-8ffb-7f8c7f4b797b`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`gsfc-gevs-2021`

###### 工厂进线交流电力 (`acceptance_electricity`)

计量可归属厂试验 kWh 并使用核验单位组按 1 kWh = 3.6 MJ 换算。保留实际区域供应商电压；地面试验负荷洁净室公用按实测资源使用分配，不作在轨卫星光伏发电。各实际供入热压缩空气等载体服务须独立行。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`gsfc-gevs-2021`

#### 输出

##### 产品流

###### 验收完整干态无推进光伏锂离子航天器平台 (`finished_platform`)

仅此实际精确材料配方或完整实体部件；记录精确供应规格供应完整性实测净领用转移。证实不存在为 not_applicable；未知为缺口。不同实际身份拆分独立行。

- 选定流：验收完整干态无推进光伏锂离子航天器平台
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`gsfc-gevs-2021`

### 过程：交付保护准备 (`protection`)

可拆保护独立记录称重。干平台含声明配置整体交付飞行件保留固体加液部件，不含包装地面夹具地面软件套件模拟真实载荷发射适配器推进剂。拆卸整体交付板须物理实测同序列号核对。门点后载荷集成运输发射为独立边界。

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD） (`pe_protection`)

仅实际未复合非黏性 LDPE 保护膜，独立称重从干平台 M 排除。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_protection。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_protection`
- 来源：`isispace-platform`

###### 工厂进线交流电力 (`protection_electricity`)

计量可归属厂试验 kWh 并使用核验单位组按 1 kWh = 3.6 MJ 换算。保留实际区域供应商电压；地面试验负荷洁净室公用按实测资源使用分配，不作在轨卫星光伏发电。各实际供入热压缩空气等载体服务须独立行。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_protection。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_protection`
- 来源：`isispace-platform`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | 共用制造公用工程 | 优先直接归属序列号配置材料净领用分表装配试验工单返工。不可分资源采用实测因果夹具试验腔占用时间与实际电负荷或其他记录实际驱动量：份额 = 工单驱动量 / 覆盖工单驱动量之和。保留完整时期分母。等平台数量 U 尺寸试验额定功率发射载荷能力任务寿命不是默认。 |  |
| `allocation_tests` | 验收与共用鉴定 | 区分飞行件验收、鉴定原型破坏硬件及载荷接口模拟件。逐台验收资源直接归属被试件；归属共用鉴定资源前记录实际项目适用性审查因果分母。不将破坏原型质量作验收平台输出，不将独立研发计入此制造前景。外包试验资源采购服务不得同时重复表示同试验。 | `gsfc-gevs-2021` |
| `allocation_recovery` | 切屑返工不合格件 | 记录实测废物可售输出及实际废料收集路线。内部返工保留验收制造而不另造产品。不因切屑可回收直接给避免原铝填埋抵扣。使用前披露实际共产品分配方法因果证据替代敏感性；质量转移不是经济替代证据。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | reference_product | 验收实体称重记录 | 型号；配置；序列号；验收净质量 M；实际设备物料表；全部秤读数夹具皮重；拆卸整体件；电池状态；载荷地面支持排除；校准不确定性；签字质量核对 | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 逐验收台 | 实际制造验收时期 | 声明平台验收门点 | 每台验收净质量 | 原始校准实体称重实测皮重受控干飞行配置 |
| `cp_structure_fabrication` | `structure_fabrication` | inventory | 实际阶段交换记录 | 序列号配置；精确物理化学交换；领退库存；供应总成范围；净质量；kWh；转移目的；试验阶段；废物排放方法；共用资源驱动量 | 采集同序列号配置图纸、供应范围收货、领退库存、实测净材料部件质量、仪表日志及实际装配验收记录。 | 质量行 kg；电能行 MJ | 逐验收台及实际批试验周期 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始校准供应规格净领用验收转移原件 |
| `cp_clean_bond` | `clean_bond` | inventory | 实际阶段交换记录 | 序列号配置；精确物理化学交换；领退库存；供应总成范围；净质量；kWh；转移目的；试验阶段；废物排放方法；共用资源驱动量 | 采集同序列号配置图纸、供应范围收货、领退库存、实测净材料部件质量、仪表日志及实际装配验收记录。 | 质量行 kg；电能行 MJ | 逐验收台及实际批试验周期 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始校准供应规格净领用验收转移原件 |
| `cp_mechanical_thermal` | `mechanical_thermal` | inventory | 实际阶段交换记录 | 序列号配置；精确物理化学交换；领退库存；供应总成范围；净质量；kWh；转移目的；试验阶段；废物排放方法；共用资源驱动量 | 采集同序列号配置图纸、供应范围收货、领退库存、实测净材料部件质量、仪表日志及实际装配验收记录。 | 质量行 kg；电能行 MJ | 逐验收台及实际批试验周期 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始校准供应规格净领用验收转移原件 |
| `cp_power_integration` | `power_integration` | inventory | 实际阶段交换记录 | 序列号配置；精确物理化学交换；领退库存；供应总成范围；净质量；kWh；转移目的；试验阶段；废物排放方法；共用资源驱动量 | 采集同序列号配置图纸、供应范围收货、领退库存、实测净材料部件质量、仪表日志及实际装配验收记录。 | 质量行 kg；电能行 MJ | 逐验收台及实际批试验周期 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始校准供应规格净领用验收转移原件 |
| `cp_avionics_attitude` | `avionics_attitude` | inventory | 实际阶段交换记录 | 序列号配置；精确物理化学交换；领退库存；供应总成范围；净质量；kWh；转移目的；试验阶段；废物排放方法；共用资源驱动量 | 采集同序列号配置图纸、供应范围收货、领退库存、实测净材料部件质量、仪表日志及实际装配验收记录。 | 质量行 kg；电能行 MJ | 逐验收台及实际批试验周期 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始校准供应规格净领用验收转移原件 |
| `cp_acceptance` | `acceptance` | inventory | 实际阶段交换记录 | 序列号配置；精确物理化学交换；领退库存；供应总成范围；净质量；kWh；转移目的；试验阶段；废物排放方法；共用资源驱动量 | 采集同序列号配置图纸、供应范围收货、领退库存、实测净材料部件质量、仪表日志及实际装配验收记录。 | 质量行 kg；电能行 MJ | 逐验收台及实际批试验周期 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始校准供应规格净领用验收转移原件 |
| `cp_protection` | `protection` | inventory | 实际阶段交换记录 | 序列号配置；精确物理化学交换；领退库存；供应总成范围；净质量；kWh；转移目的；试验阶段；废物排放方法；共用资源驱动量 | 采集同序列号配置图纸、供应范围收货、领退库存、实测净材料部件质量、仪表日志及实际装配验收记录。 | 质量行 kg；电能行 MJ | 逐验收台及实际批试验周期 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始校准供应规格净领用验收转移原件 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | 按 mass_record_provenance 用当前实际校准整平台读数实测皮重临时载荷同序列号干飞行物料表。独立核对电池电解液集成热控电源姿态件及物理实测拆卸整体板。发射器上限目录质量 U 尺寸或推算部件和不能代替 M。缺实体原件不确定性阻止定量完成，须科学数据审查。 | 实际称重校准物料表放行；GEVS 2.4.7 仅任务相关背景 |
| `quality_atomic` | 全部交换 | 每行一个实体配方身份。匹配实际公开参考属性单位组化学状态供应完整性路线。III-V 航天光伏板区别硅地面电池；锂离子组区别铅酸镍镉；星载计算机区别航空航电；气态区别液氮基础氮。空身份保留原因。 | 供应规格安全数据单收货及公开身份记录 |
| `quality_tests` | cp_acceptance | 保留实际裁剪序列号试验计划报告、功能接口通过准则、试验腔振动洁净室资源校准夹具外包。鉴定验收与热循环热真空为不同情况。制造商表或历史 GEVS 均不使各试验固定等级普遍强制；披露失败试验可归属返工。 | 实际验收计划仪表工单外包原件 |
| `quality_balance` | 材料溶剂公用 | 按同时期配置闭合投入验收包含实测退回库存废物排放平衡。供工艺水废液转移自然取水分开；不强制自然水行。IPA 排放须实际证实物种介质，不作全部溶剂领用。实测实际 kWh 气质量状态，不用额定功率标称气体积换算。 | 时期平衡校准仪表转移排放原件 |
| `quality_completeness` | 数据集与上游链接 | 分开实测计算缺失证实 not_applicable。披露全部遗漏实际部件过程供应边界不匹配未决身份范围不确定性共用试验负担。实际前景匹配上游覆盖核验前不声称候选完整或从摇篮到厂门。 | 实际完整物料过程图质量缺口登记 |


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考产品 | 核查正实际完整干平台 M 及质量验收协议。参考名称精确匹配 finished_platform，排除载荷发射器推进剂临时夹具。实际缺称重供应完整性须审查；不将完整航天器身份强配平台。 |  |
| `validate_basis` | 所有清单行 | 核查同小写行规则协议标识、每验收台 q_item、实测 M kg、明确 normalize_mass 应用及两语言相同基准。保留实际公开属性，不把数量面积能量改名 Mass。 |  |
| `validate_boundary` | 试验物料表 | 审计实际验收鉴定、外包厂内试验资源、外购厂内总成及拆卸整体件模拟包装。补齐超出候选卡全部实际交换；不将整外购电池与所含电芯电解液重复。 |  |
| `validate_profile` | 数据集与用途 | 须范围配置计量试验出处遗漏未决数据分配匹配上游单位披露。有限计量检查通过不作科学批准认证或任务寿命验证。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 实际数据完成审查后为 secondary_dataset 和 background_dataset |
| downstream_use | 配置平台制造投入至独立边界完整航天器模型 |
| allowed_use | 按 kg 比较匹配实际制造门点配置试验覆盖上游链接；不由等质量得任务等效 |
| excluded_use | 排除完整含载荷航天器、发射器上面级、推进推力器推进剂、载人深空核能燃料电池平台、复合主框架与其他未声明电源结构路线、地面站释放器发射适配器、载荷仪器及平台门点后集成、仅鉴定工程模型、备件维修翻新软件研发培训服务、发射运输上升部署在轨运行报废。运营寿命任务产出须另建模型。 |
| required_metadata | 制造者型号序列号及受控配置图纸物料表；飞行硬件区别工程模型；铝合金状态及坯料外购框架范围；平台侧载荷接口且载荷排除；光伏半导体技术板完整性收拢交付；加液锂离子电池组化学电池管理荷电状态安全记录；精确计算机射频天线姿态部件件号包含；实际热控层垫及安装附件；无推进推进剂；由校准完整平台称重实测夹具去皮同序列号验收得实际干净 M kg；整体拆卸飞行件核对，无载荷模拟包装地面支持件；实际功能环境验收计划裁剪等级公用仪表；制造场址时期门点外包服务分配上游链接不确定性遗漏 |
| required_quality_disclosure | 前景实测计算缺失状态、实际质量试验证据、未决身份范围遗漏上游不匹配分配不确定性；候选状态科学待审 |
| update_trigger | 实际平台配置部件化学供应范围制造商验收试验计划质量方法工厂公用上游数据变化 |


## 11. 数据来源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `isispace-platform` | literature | [ISISPACE Platforms](https://www.isispace.nl/product/platforms/) | Product Specification、Qualification and Acceptance Testing 及平台 FAQ：平台载荷接口条件推进、集成子系统位置接口核验。验收鉴定表勾选不同；热循环不证明普遍热真空试验。不采用 U 尺寸功率速率宣称寿命质量验收阈值。 |
| `nasa-power` | official_guidance | [NASA Small Spacecraft Technology: 3.0 Power](https://www.nasa.gov/smallsat-institute/sst-soa/power-subsystems/) | 2026 在线章：3.2 光伏 III-V 结结构、3.4 电池及电源管理背景。仅技术身份太阳能电池配置；不采用效率电芯组质量 Wh/kg 寿命强制供应商选择。以实际供应化学范围为准。 |
| `nasa-structures` | official_guidance | [NASA Small Spacecraft Technology: 6.0 Structures, Materials, and Mechanisms](https://www.nasa.gov/smallsat-institute/sst-soa/structures-materials-and-mechanisms/) | 2026 在线章 6.1/6.2 结构材料模块框架讨论及立方星主结构：金属非金属路线区别、机加工 6061/7075 案例及连接次热控电源件。不采用标称航天质量限制体积普遍合金状态机加工强度。6061-T6 坯料热控卡保留条件实际前景规格。 |
| `gsfc-gevs-2021` | standard | [GSFC-STD-7000B (2021): General Environmental Verification Standard](https://standards.nasa.gov/sites/default/files/standards/GSFC/B/0/gsfc-std-7000b_signature_cycle_04_28_2021_fixed_links.pdf) | 2.1 一般核验、2.4.7 质量特性及 2.6 热核验：任务相关配置、分析计量区别与核验计划背景。历史戈达德标准，不作当前普遍要求方法学批准。物理净 M 称重为本声明前景协议且须实际记录；GEVS 允许分析不建立实际实测 M。不施加试验等级公差时长循环温度。 |
