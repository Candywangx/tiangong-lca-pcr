---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.civil-helicopter
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 民用单涡轴常规旋翼直升机制造

## 1. 范围与适用性

制造具有常规主旋翼与反扭矩尾旋翼、滑橇起落架、声明金属复合机体及安装控制电气燃油系统的新制完整民用有人单涡轴直升机。范围由声明坯料接收总成至配置特定制造验收交付，包括可归属生产地面飞行试验。这是 CPC 49621 内较窄路线。参考提供配置产品，不提供飞行任务服务。

排除军用无人、活塞双涡轴电动混合动力、共轴纵列多旋翼、涵道尾旋翼 Fenestron、轮式水陆两栖仅浮筒路线及不完整航空器备用部件路线、改装维修转售、研发耐久培训、门点后转场客货任务运营维护报废。额外民用任务设备须独立明确完整配置清单。制造商案例不作普遍型号认证。

Airbus 描述供应部件制造装配生产飞行验收。2025 年 H125 描述支持特定常规旋翼单涡轮滑橇复合桨叶配置；Robinson R66 为独立涡轴燃油系统民用案例，任务选项不同。两者均非制造配方或实际序列号航空器质量。FAA 2016 指南仅支持物理称重及配置燃料油区分；以当前航空器特定制造商规程原始实测为准。科学审查待完成。仅接收到验收前景不为完整摇篮到大门：须兼容披露供应商上游链接。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.civil-helicopter |
| classification_refs | CPC 3.0 49621；较窄民用单涡轴常规旋翼滑橇路线，仅背景 |
| covered_products | 制造具有常规主旋翼与反扭矩尾旋翼、滑橇起落架、声明金属复合机体及安装控制电气燃油系统的新制完整民用有人单涡轴直升机。范围由声明坯料接收总成至配置特定制造验收交付，包括可归属生产地面飞行试验。这是 CPC 49621 内较窄路线。参考提供配置产品，不提供飞行任务服务。 |
| excluded_products | 排除军用无人、活塞双涡轴电动混合动力、共轴纵列多旋翼、涵道尾旋翼 Fenestron、轮式水陆两栖仅浮筒路线及不完整航空器备用部件路线、改装维修转售、研发耐久培训、门点后转场客货任务运营维护报废。额外民用任务设备须独立明确完整配置清单。制造商案例不作普遍型号认证。 |
| representative_product | 一个序列号配置关联验收完整民用直升机，具有实测正基本空机产品净 M |
| production_route | 条件金属复合制造表面处理、机体动力旋翼系统集成、实际制造验收及条件保护 |
| market_state | 声明制造门点新制验收完整配置民用直升机 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一个完整配置民用单涡轴常规旋翼滑橇直升机 |
| How much | 1 kg 验收完整配置基本空机产品净质量；实际按架记录除实测 M |
| How well | 同一实际完整配置，含记录结构旋翼控制地面飞行验收放行范围；不作等质量飞行性能普遍适航批准 |
| How long or cycle | 一次制造生产验收周期；不假定飞行小时寿命维护间隔 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 直升机，无人驾驶飞机除外 `cb74ed41-c415-43c1-a2d5-01d2ba04aff2` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造者型号序列号图纸版本及民用验收依据；发动机型式控制供应完整性；主尾旋翼型式桨叶材料数量传动轴；滑橇；机体合金状态复合结构、供入预涂范围；航电单元件号座舱座椅风窗电池化学实际任务选项；供应商所含件预加；安装工作油液压液固定压铁；实测不可用燃料含于 M、保留可用燃料排除；具原始校准称重、旋翼航空器位置去皮的正实际配置基本空机净 M（kg）；排除人员载荷包装临时载荷松散地面套件备件；物理实测拆卸整体交付件；序列号试验阶段放行排放介质高度制造门点场址时期分配上游链接 |

M 包含实际完整机体发动机安装旋翼传动控制座舱系统、声明运转油液压加注固定设计压铁及本声明基本空机产品状态核验实际保留不可用燃料。排除可用交付燃料、人员货物试验载荷临时夹具包装备件松散地面机载套件。本选择制造质量不是最大起飞质量载荷能力或引用目录空机重量。不自动将批准空机重量约定等同 M：保留其油燃料设备包含并物理实测核对差异。整体交付拆卸桨叶附件须实际称重同序列号完整性核对，不重复。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量,单位 kg; 使用 cp_mass 采集。 |
| `mass_record_provenance` | cp_mass | Mass | kg | 采用当前同序列号完整航空器经校准物理称重，按制造商规定支承点旋翼航空器位置及实际设备清单。保留各同时支承读数零点去皮校准日期操作者环境不确定性；读数扣实测夹具后求和。记录实际安装油液压液固定压铁实测不可用燃料，扣实际实测可用燃料人员试验载荷，仅称重未包含时加物理实测整体拆卸交付件。燃料修正用实际牌号密度温度或直接质量，不用油箱容量标准重量表。缺实际方法质量平衡须科学数据审查。 |
| `unit_conversion` | 逐行交换 | original measured property | 逐行实际单位 | 保留质量体积面积能量件数。电力：实际 kWh 按核验 1 kWh = 3.6 MJ 至 MJ。外购件数液体体积仅以可追溯实际同配置部件质量或同牌号密度温度换为 kg，保留原单位读数。不假定每发动机桨叶质量燃料密度宣称热值。 |

mass_record_provenance 由 FAA 2016 第 3 章物理秤配置燃料油去皮指导支持；其中飞机特定油约定及案例数字不作为直升机规则。遵循当前实际直升机称重规程，独立记录声明制造净状态。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收指定金属预浸坯料与外购机体旋翼发动机传动系统模块及供应包含预加 |
| starting_condition_role | 前景接收到完整制造验收交付 |
| product_classification_scope | 覆盖完整民用直升机产品，不为客运任务服务 |
| recursive_input_rule | 不将成品直升机作为自身投入。完整供应部件总成替代所含制造；实际厂内部件须实测过程清单 |
| upstream_dataset_requirement | 匹配实际合金状态纤维树脂成品部件状态涡轴旋翼配置模块完整性供应者场址时期。披露未链接供应制造 |
| disclosure | 制造者型号序列号图纸版本及民用验收依据；发动机型式控制供应完整性；主尾旋翼型式桨叶材料数量传动轴；滑橇；机体合金状态复合结构、供入预涂范围；航电单元件号座舱座椅风窗电池化学实际任务选项；供应商所含件预加；安装工作油液压液固定压铁；实测不可用燃料含于 M、保留可用燃料排除；具原始校准称重、旋翼航空器位置去皮的正实际配置基本空机净 M（kg）；排除人员载荷包装临时载荷松散地面套件备件；物理实测拆卸整体交付件；序列号试验阶段放行排放介质高度制造门点场址时期分配上游链接 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacture` | 全部阶段 | 纳入实际接收坯料部件加工装配返工及可归属门点前生产地面飞行试验称重放行。实际外包制造试验支持服务独立增列并声明边界单位。区分门点生产验收飞行与客户培训商业任务研发耐久门点后转场。 | `airbus-production` |
| `boundary_completeness` | 总成与实际物料表 | 接收总成所含件预加只计一次：桨毂桨叶发动机控制油箱泵液压电子单元不重复。接收成品桨叶板件替代所含预浸制造；完整机身替代所含金属紧固表面处理。完整量值数据集前补齐全部实际附件胶黏气体制冷剂热试验服务废物排放。候选卡不是普遍穷尽直升机物料表。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `metal_fabrication` | 金属机体部件制造 | conditional | 实际厂内金属机体起落架部件制造。 | foreground | 一台验收配置直升机，使用 M 归一化 |
| `composite_fabrication` | 复合板件与旋翼桨叶制造 | conditional | 实际厂内纤维环氧层合夹芯部件。 | foreground | 一台验收配置直升机，使用 M 归一化 |
| `surface_finish` | 表面准备底涂与面涂 | conditional | 实际前景清洗保护装饰涂装。 | foreground | 一台验收配置直升机，使用 M 归一化 |
| `airframe_assembly` | 机身滑橇与座舱集成 | required | 每架覆盖完整直升机。 | foreground | 一台验收配置直升机，使用 M 归一化 |
| `dynamic_assembly` | 涡轴传动与旋翼安装 | required | 每架覆盖完整直升机。 | foreground | 一台验收配置直升机，使用 M 归一化 |
| `systems_integration` | 飞控电气与燃油系统 | required | 每架覆盖完整直升机。 | foreground | 一台验收配置直升机，使用 M 归一化 |
| `acceptance` | 配置称重地面与生产飞行验收 | required | 每架覆盖完整直升机；具体试验遵循实际放行范围。 | foreground | 一台验收配置直升机，使用 M 归一化 |
| `protection` | 交付保护与拆卸整体附件 | conditional | 实际可拆保护或整体部件交付拆卸。 | foreground | 一台验收配置直升机，使用 M 归一化 |

金属复合制造供入条件表面处理及机体动力旋翼系统集成，继而完整配置验收及条件保护。阶段可重叠；资源一次归属。即使必需阶段，各交换行也以实际组成配置为条件。每行为一个物理或化学交换；不强制排放或焊接涂装配方。

### 过程：金属机体部件制造 (`metal_fabrication`)

按可追溯图纸切割成形指定铝板钢管、加工接口铆接连接实际部件。外购完整结构跳过所含坯料加工。实际发生焊接气焊丝、锻造热处理阳极处理机加工操作须独立实测交换；不作普遍必需路线。铝钢切屑分类。

#### 输入

##### 产品流

###### 声明状态的航空变形铝合金板 (`aluminium_sheet`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：声明状态的航空变形铝合金板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_metal_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_metal_fabrication`
- 来源：`airbus-production`

###### 无缝铬钼钢机体管 (`chromoly_tube`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：无缝铬钼钢机体管
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_metal_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_metal_fabrication`
- 来源：`airbus-production`

###### 实心铝合金航空铆钉 (`aluminium_rivet`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：实心铝合金航空铆钉
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_metal_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_metal_fabrication`
- 来源：`airbus-production`

###### 水混合半合成金属加工液浓缩配方 (`machining_fluid`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：水混合半合成金属加工液浓缩配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_metal_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_metal_fabrication`
- 来源：`airbus-production`

###### 工艺用水 (`machining_water`)

实际供入跨边界处理清洗稀释工艺水；不作循环环境取水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_metal_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_metal_fabrication`
- 来源：`airbus-production`

###### 工厂进线交流电力 (`metal_fabrication_electricity`)

实测可归属 kWh，使用核验能量单位组按 1 kWh = 3.6 MJ 换算，保留实际进线供应商范围。不合并电气地面动力燃料外购热压缩气；各实际载体服务须独立交换。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_metal_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_metal_fabrication`
- 来源：`airbus-production`

#### 输出

##### 废物流

###### 分类未处理航空铝合金机加工切屑 (`aluminium_chips`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：分类未处理航空铝合金机加工切屑
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_metal_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_metal_fabrication`
- 来源：`airbus-production`

###### 分类未处理铬钼钢机加工切屑 (`steel_chips`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：分类未处理铬钼钢机加工切屑
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_metal_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_metal_fabrication`
- 来源：`airbus-production`

### 过程：复合板件与旋翼桨叶制造 (`composite_fabrication`)

记录实际层合纤维树脂化学、预浸料或独立领用织物树脂路线、铺层芯材真空耗材固化切边检验。碳环氧与玻璃环氧预浸料为分开的条件配方；不重复其内树脂纤维。供应成品桨叶板件替代所含制造。遵循实际批准生产图纸及实测固化无损检验记录；Airbus 型号不证明普遍热压罐树脂温度压力固化收率。可归属实际密封胶黏剂热气模具消耗须独立增列。

#### 输入

##### 产品流

###### 未固化碳纤维环氧航空预浸料 (`carbon_prepreg`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：未固化碳纤维环氧航空预浸料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_composite_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_composite_fabrication`
- 来源：`airbus-h125-2025`

###### 未固化玻璃纤维环氧航空预浸料 (`glass_prepreg`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：未固化玻璃纤维环氧航空预浸料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_composite_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_composite_fabrication`
- 来源：`airbus-h125-2025`

###### 闭孔硬质 PVC 结构夹芯泡沫芯材 (`pvc_core`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：闭孔硬质 PVC 结构夹芯泡沫芯材
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_composite_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_composite_fabrication`
- 来源：`airbus-h125-2025`

###### 真空袋膜 (`vacuum_bag`)

仅实际匹配公开中国工厂预浸料手糊铺层路线供入尼龙真空袋膜；实测消耗。不采用典型面密度估算且膜质量不含航空器 M。

- 选定流：真空袋膜 `eb9fdc16-6e58-439b-a41c-ae4f97751868`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_composite_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_composite_fabrication`
- 来源：`airbus-h125-2025`

###### 未复合 PTFE 脱模薄膜 (`ptfe_release`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：未复合 PTFE 脱模薄膜
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_composite_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_composite_fabrication`
- 来源：`airbus-h125-2025`

###### 工厂进线交流电力 (`composite_fabrication_electricity`)

实测可归属 kWh，使用核验能量单位组按 1 kWh = 3.6 MJ 换算，保留实际进线供应商范围。不合并电气地面动力燃料外购热压缩气；各实际载体服务须独立交换。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_composite_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_composite_fabrication`
- 来源：`airbus-h125-2025`

#### 输出

##### 废物流

###### 转交处理的固化碳纤维环氧层合切边料 (`carbon_trim`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：转交处理的固化碳纤维环氧层合切边料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_composite_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_composite_fabrication`
- 来源：`airbus-h125-2025`

###### 转交处理的固化玻璃纤维环氧层合切边料 (`glass_trim`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：转交处理的固化玻璃纤维环氧层合切边料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_composite_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_composite_fabrication`
- 来源：`airbus-h125-2025`

### 过程：表面准备底涂与面涂 (`surface_finish`)

记录实际清洗涂层配方范围；环氧底涂聚氨酯面涂仅实际匹配时为案例。独立实测基料固化组分领用、进入涂膜、捕集过喷及溶剂排放。预涂供应模块替代重复处理。清洗废液转移或捕集涂料不作基础排放。

#### 输入

##### 产品流

###### 无水异丙醇清洗溶剂 (`isopropanol_solvent`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：无水异丙醇清洗溶剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`airbus-production`

###### 工艺用水 (`clean_water`)

实际处理供入清洗水，不作内部循环基础资源。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`airbus-production`

###### 配方环氧航空防腐底涂基料 (`epoxy_primer`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：配方环氧航空防腐底涂基料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`airbus-production`

###### 聚胺环氧航空底涂固化剂配方 (`primer_hardener`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：聚胺环氧航空底涂固化剂配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`airbus-production`

###### 配方聚氨酯航空面涂基料 (`pu_base`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：配方聚氨酯航空面涂基料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`airbus-production`

###### 聚异氰酸酯航空面涂固化剂配方 (`pu_hardener`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：聚异氰酸酯航空面涂固化剂配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`airbus-production`

###### 工厂进线交流电力 (`surface_finish_electricity`)

实测可归属 kWh，使用核验能量单位组按 1 kWh = 3.6 MJ 换算，保留实际进线供应商范围。不合并电气地面动力燃料外购热压缩气；各实际载体服务须独立交换。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`airbus-production`

#### 输出

##### 废物流

###### 捕集聚氨酯航空涂料过喷废物 (`coat_overspray`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：捕集聚氨酯航空涂料过喷废物
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`airbus-production`

###### 转交处理的铝机体水性清洗废液 (`clean_effluent`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：转交处理的铝机体水性清洗废液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`airbus-production`

#### 输出

##### 基本流

###### 异丙醇 (`ipa_release`)

仅记录清洗涂装实际证实异丙醇向空气未指定即时排放；排气与室内职业空气分开。实测出口物种残留废物平衡；不强制挥发因子。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`airbus-production`

### 过程：机身滑橇与座舱集成 (`airframe_assembly`)

装配声明机身尾梁滑橇、安装实际座椅透明件并核对结构座舱配置。外购完整机体连所含结构紧固件计一次；独立供入部件为独立实体交换。记录实际对准连接检验结果。整体交付拆卸桨叶附件须物理核对同一验收航空器，区别备件地面操作套件。

#### 输入

##### 产品流

###### 完整指定金属复合直升机机身尾梁机体总成 (`fuselage`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：完整指定金属复合直升机机身尾梁机体总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_airframe_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_airframe_assembly`
- 来源：`airbus-h125-2025`

###### 完整铝制直升机滑橇起落架总成 (`skid_gear`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：完整铝制直升机滑橇起落架总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_airframe_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_airframe_assembly`
- 来源：`airbus-h125-2025`

###### 完整民用直升机驾驶员座椅总成 (`pilot_seat`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：完整民用直升机驾驶员座椅总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_airframe_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_airframe_assembly`
- 来源：`airbus-h125-2025`

###### 成形 PMMA 丙烯酸直升机风窗 (`windscreen`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：成形 PMMA 丙烯酸直升机风窗
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_airframe_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_airframe_assembly`
- 来源：`airbus-h125-2025`

###### 工厂进线交流电力 (`airframe_assembly_electricity`)

实测可归属 kWh，使用核验能量单位组按 1 kWh = 3.6 MJ 换算，保留实际进线供应商范围。不合并电气地面动力燃料外购热压缩气；各实际载体服务须独立交换。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_airframe_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_airframe_assembly`
- 来源：`airbus-h125-2025`

### 过程：涡轴传动与旋翼安装 (`dynamic_assembly`)

安装单涡轴发动机及实际主尾传动、主旋翼与常规反扭矩尾旋翼，记录件号供应完整性连接平衡。完整接收旋翼总成含桨叶桨毂计一次；独立供入桨叶替代所含部分而不重复。风轮机转子活塞柴油机排除本路线。记录齿轮箱冷却控制接口实际地面调整。

#### 输入

##### 产品流

###### 完整单台直升机涡轴发动机总成 (`turboshaft`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：完整单台直升机涡轴发动机总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dynamic_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_dynamic_assembly`
- 来源：`airbus-h125-2025`

###### 直升机旋翼系统 (`main_rotor`)

仅实际独立外购完整直升机主旋翼总成，含桨毂桨叶及声明供应完整性。记录配置实测验收质量；公开通用系统身份不提供桨叶数或材料配方。排除本总成已有桨叶；含尾旋翼套件须独立记录范围并排除重复尾投入。

- 选定流：直升机旋翼系统 `b419d220-cac7-4476-8927-f79a98dbd69e`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dynamic_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_dynamic_assembly`
- 来源：`airbus-h125-2025`

###### 成品复合直升机主旋翼桨叶 (`main_blade`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：成品复合直升机主旋翼桨叶
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dynamic_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_dynamic_assembly`
- 来源：`airbus-h125-2025`

###### 完整常规直升机反扭矩尾旋翼总成 (`tail_rotor`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：完整常规直升机反扭矩尾旋翼总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dynamic_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_dynamic_assembly`
- 来源：`airbus-h125-2025`

###### 完整直升机主传动齿轮箱 (`main_gearbox`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：完整直升机主传动齿轮箱
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dynamic_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_dynamic_assembly`
- 来源：`airbus-h125-2025`

###### 完整直升机尾旋翼传动齿轮箱 (`tail_gearbox`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：完整直升机尾旋翼传动齿轮箱
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dynamic_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_dynamic_assembly`
- 来源：`airbus-h125-2025`

###### 完整直升机尾旋翼传动轴总成 (`tail_shaft`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：完整直升机尾旋翼传动轴总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dynamic_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_dynamic_assembly`
- 来源：`airbus-h125-2025`

###### 工厂进线交流电力 (`dynamic_assembly_electricity`)

实测可归属 kWh，使用核验能量单位组按 1 kWh = 3.6 MJ 换算，保留实际进线供应商范围。不合并电气地面动力燃料外购热压缩气；各实际载体服务须独立交换。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_dynamic_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_dynamic_assembly`
- 来源：`airbus-h125-2025`

### 过程：飞控电气与燃油系统 (`systems_integration`)

安装实际液压控制软管燃油系统、线束各已识别航电模块与启动电池；独立领用指定工作液加注，供应预加只计一次。镍镉与铅酸电池行仅证实实际配置时适用；化学不等同。实际条件空调制冷剂任务套件额外系统逐项分开。民用任务设备纳入验收 M 时须声明独立配置清单；军用设备服务排除。

#### 输入

##### 产品流

###### 完整直升机液压飞控伺服执行器 (`servo`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：完整直升机液压飞控伺服执行器
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_systems_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_systems_integration`
- 来源：`airbus-h125-2025`

###### 增强合成橡胶航空液压软管总成 (`hydraulic_hose`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：增强合成橡胶航空液压软管总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_systems_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_systems_integration`
- 来源：`airbus-h125-2025`

###### 石油矿物基航空液压工作液配方 (`hydraulic_oil`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：石油矿物基航空液压工作液配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_systems_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_systems_integration`
- 来源：`airbus-h125-2025`

###### 合成酯航空涡轮润滑油配方 (`turbine_oil`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：合成酯航空涡轮润滑油配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_systems_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_systems_integration`
- 来源：`airbus-h125-2025`

###### 合成酯直升机传动润滑油配方 (`gear_oil`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：合成酯直升机传动润滑油配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_systems_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_systems_integration`
- 来源：`airbus-h125-2025`

###### 航空电子设备 (`avionics_unit`)

仅一个实际独立供入集成飞行导航通信航电实体单元，含件号功能完整性实测质量；独立供入电台显示器应答机线束须独立行。公开航空电子设备名称不允许混合电子部件集合交换。

- 选定流：航空电子设备 `f8cff391-8adb-4c50-9225-aa7b822abe47`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_systems_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_systems_integration`
- 来源：`airbus-h125-2025`

###### 绝缘铜航空线束总成 (`copper_harness`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：绝缘铜航空线束总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_systems_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_systems_integration`
- 来源：`airbus-h125-2025`

###### 铅酸蓄电池 (`lead_battery`)

仅实际独立供入完整加液铅稀硫酸启动电池，具记录匹配公开路线充放电交付状态。记录型号容量完整性实际质量；不作普遍电池选择或每件 kg。排除外购动力装置已含电池。

- 选定流：铅酸蓄电池 `0f7ce22c-71cc-4c6c-aa33-d4074f9a03c7`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_systems_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_systems_integration`
- 来源：`airbus-h125-2025`

###### 加液镍镉航空启动电池总成 (`nicd_battery`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：加液镍镉航空启动电池总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_systems_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_systems_integration`
- 来源：`airbus-h125-2025`

###### 完整柔性航空煤油囊式油箱总成 (`fuel_bladders`)

仅记录此精确实际材料配方或完整实体部件，保留供应规格交付范围及实测净领用转移；证实缺席为 not_applicable，未知为缺口。不同变型须独立行。

- 选定流：完整柔性航空煤油囊式油箱总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_systems_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_systems_integration`
- 来源：`airbus-h125-2025`

###### 工厂进线交流电力 (`systems_integration_electricity`)

实测可归属 kWh，使用核验能量单位组按 1 kWh = 3.6 MJ 换算，保留实际进线供应商范围。不合并电气地面动力燃料外购热压缩气；各实际载体服务须独立交换。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_systems_integration。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_systems_integration`
- 来源：`airbus-h125-2025`

### 过程：配置称重地面与生产飞行验收 (`acceptance`)

追溯序列号关联实际结构旋翼传动控制电气检验、地面运行称重可归属生产飞行试验与放行授权。地面飞行阶段、燃料平衡当地排放介质高度支持资源分开。排除研发耐久培训商业飞行、门点后转场维护；独立记录外包试验支持服务。不提供标准飞行时长发动机功率空中排放因子普遍适航阈值。

#### 输入

##### 产品流

###### 煤油型喷气燃料 (`trial_kerosene`)

实际可归属生产地面飞行试验及保留交付燃料领用化石煤油型喷气燃料。记录实际牌号规格供应商退回消耗不可用与可用保留；不推断混合寿命燃烧标准密度热值。

- 选定流：煤油型喷气燃料 `e1ede47a-b840-45e6-b711-98cb547902cf`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`airbus-production`

###### 工厂进线交流电力 (`acceptance_electricity`)

实测可归属 kWh，使用核验能量单位组按 1 kWh = 3.6 MJ 换算，保留实际进线供应商范围。不合并电气地面动力燃料外购热压缩气；各实际载体服务须独立交换。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`airbus-production`

#### 输出

##### 产品流

###### 煤油型喷气燃料 (`usable_delivery_fuel`)

仅实际实测交付保留可用航空煤油从 M 排除并独立报告，不抵扣避免生产。记录实际包含配置基本空机 M 的不可用燃料且不再独立输出重复计数。

- 选定流：煤油型喷气燃料 `e1ede47a-b840-45e6-b711-98cb547902cf`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`airbus-production`

###### 直升机，无人驾驶飞机除外 (`finished_machine`)

验收完整配置民用单涡轴、常规主尾旋翼滑橇直升机，处于实测基本空机产品状态。公开较宽有人直升机身份以实际限定信息收窄；不作客运飞行服务等效。

- 选定流：直升机，无人驾驶飞机除外 `cb74ed41-c415-43c1-a2d5-01d2ba04aff2`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`airbus-production`

#### 输出

##### 基本流

###### 二氧化碳（化石源） (`trial_co2`)

仅实际证实可归属生产试验化石 CO2向空气未指定即时排放。地面飞行地点高度阶段分开；不得将高空平流层或特定城市非城市排放强配未指定介质。各精确物种须实测或可追溯实际前景记录论证；不强制尾气因子、NOx 拆分空中分配。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`airbus-production`

###### 一氧化氮 (`trial_no`)

仅实际证实可归属生产试验NO向空气未指定即时排放。地面飞行地点高度阶段分开；不得将高空平流层或特定城市非城市排放强配未指定介质。各精确物种须实测或可追溯实际前景记录论证；不强制尾气因子、NOx 拆分空中分配。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`airbus-production`

###### 二氧化氮 (`trial_no2`)

仅实际证实可归属生产试验NO2向空气未指定即时排放。地面飞行地点高度阶段分开；不得将高空平流层或特定城市非城市排放强配未指定介质。各精确物种须实测或可追溯实际前景记录论证；不强制尾气因子、NOx 拆分空中分配。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`airbus-production`

### 过程：交付保护与拆卸整体附件 (`protection`)

交付保护独立称重从 M 排除。物理实测整体交付件只计一次并核对实际同机验收清单。备用桨叶地面轮罩套件借用试验硬件门点后物流为独立排除产品活动，除非审查不同明确声明边界。

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD） (`pe_protection`)

仅实际未复合非黏性 LDPE 保护膜；独立称重从 M 排除。其他保护须精确独立交换。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_protection。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_protection`
- 来源：`airbus-h125-2025`

###### 工厂进线交流电力 (`protection_electricity`)

实测可归属 kWh，使用核验能量单位组按 1 kWh = 3.6 MJ 换算，保留实际进线供应商范围。不合并电气地面动力燃料外购热压缩气；各实际载体服务须独立交换。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_protection。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_protection`
- 来源：`airbus-h125-2025`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | 共用制造 | 优先直接归属序列号配置材料领退分表电量、复合固化批次占用及生产试验返工。不可分共用公用工程须论证实测因果机器时间负荷、占用模具固化周期或涂装面积层驱动量：份额 = 工单驱动量 / 覆盖工单驱动量之和。保留时期完整分母因果依据。等架数宣称涡轮功率最大起飞质量载荷寿命飞行小时不是默认分配驱动量。 |  |
| `allocation_fuel` | 生产试验交付燃料 | 净可归属航空煤油领用扣实测退回库存变化等于实测消耗及门点实际可用不可用保留燃料。保留不可用燃料属于声明基本空机产品 M 只计一次；保留可用燃料为独立交付输出且从 M 排除，不自动抵扣避免生产。地面飞行阶段与库存核对保留；排放用实际消耗燃料物种证据，不用领用总量寿命运营。审查剩余分配前按实际记录分离可售产品。 |  |
| `allocation_recovery` | 复用拒收废物 | 内部坯料水复用为内部转移，不作新投入抵扣。输出废物保留称量实际接收者，不推定回收替代收益。拒收返工在制核对验收序列号产出；废料回收或验收失败不产生额外完整直升机产出。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | 验收完整直升机净质量 | traceable_weighing_record | 型号；配置；序列号；验收净质量 M；当前制造商规程；称重原始日期方法；全部支承点读数；校准零点去皮；旋翼航空器水平；实际设备油液压不可用燃料状态；实测可用燃料临时载荷扣除；整体拆卸件；签署质量平衡；不确定性 | 使用可追溯的称重记录核对同一配置的验收设备。 | kg | 逐架验收 | 实际制造验收时期 | 声明制造验收门点 | 每台验收净质量 | 原始校准实测与签署配置状态质量核对 |
| `cp_metal_fabrication` | metal_fabrication | 金属机体部件制造 | foreground_record | 序列号工单配置；验收架数；精确交换配方属性单位；实测领退库存；供应所含预加；部件工作液质量；kWh 供应商；固化涂装工单；试验地面飞行阶段；实际燃料牌号密度温度消耗与可用不可用保留；物种出口介质高度；废物接收者；共用驱动分母；校准放行 | 采集同序列号配置图纸、供应收货完整性、实际领退库存、实测部件工作液质量、校准仪表工单试验放行原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原始称量仪表收货固化试验放行与燃料记录 |
| `cp_composite_fabrication` | composite_fabrication | 复合板件与旋翼桨叶制造 | foreground_record | 序列号工单配置；验收架数；精确交换配方属性单位；实测领退库存；供应所含预加；部件工作液质量；kWh 供应商；固化涂装工单；试验地面飞行阶段；实际燃料牌号密度温度消耗与可用不可用保留；物种出口介质高度；废物接收者；共用驱动分母；校准放行 | 采集同序列号配置图纸、供应收货完整性、实际领退库存、实测部件工作液质量、校准仪表工单试验放行原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原始称量仪表收货固化试验放行与燃料记录 |
| `cp_surface_finish` | surface_finish | 表面准备底涂与面涂 | foreground_record | 序列号工单配置；验收架数；精确交换配方属性单位；实测领退库存；供应所含预加；部件工作液质量；kWh 供应商；固化涂装工单；试验地面飞行阶段；实际燃料牌号密度温度消耗与可用不可用保留；物种出口介质高度；废物接收者；共用驱动分母；校准放行 | 采集同序列号配置图纸、供应收货完整性、实际领退库存、实测部件工作液质量、校准仪表工单试验放行原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原始称量仪表收货固化试验放行与燃料记录 |
| `cp_airframe_assembly` | airframe_assembly | 机身滑橇与座舱集成 | foreground_record | 序列号工单配置；验收架数；精确交换配方属性单位；实测领退库存；供应所含预加；部件工作液质量；kWh 供应商；固化涂装工单；试验地面飞行阶段；实际燃料牌号密度温度消耗与可用不可用保留；物种出口介质高度；废物接收者；共用驱动分母；校准放行 | 采集同序列号配置图纸、供应收货完整性、实际领退库存、实测部件工作液质量、校准仪表工单试验放行原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原始称量仪表收货固化试验放行与燃料记录 |
| `cp_dynamic_assembly` | dynamic_assembly | 涡轴传动与旋翼安装 | foreground_record | 序列号工单配置；验收架数；精确交换配方属性单位；实测领退库存；供应所含预加；部件工作液质量；kWh 供应商；固化涂装工单；试验地面飞行阶段；实际燃料牌号密度温度消耗与可用不可用保留；物种出口介质高度；废物接收者；共用驱动分母；校准放行 | 采集同序列号配置图纸、供应收货完整性、实际领退库存、实测部件工作液质量、校准仪表工单试验放行原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原始称量仪表收货固化试验放行与燃料记录 |
| `cp_systems_integration` | systems_integration | 飞控电气与燃油系统 | foreground_record | 序列号工单配置；验收架数；精确交换配方属性单位；实测领退库存；供应所含预加；部件工作液质量；kWh 供应商；固化涂装工单；试验地面飞行阶段；实际燃料牌号密度温度消耗与可用不可用保留；物种出口介质高度；废物接收者；共用驱动分母；校准放行 | 采集同序列号配置图纸、供应收货完整性、实际领退库存、实测部件工作液质量、校准仪表工单试验放行原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原始称量仪表收货固化试验放行与燃料记录 |
| `cp_acceptance` | acceptance | 配置称重地面与生产飞行验收 | foreground_record | 序列号工单配置；验收架数；精确交换配方属性单位；实测领退库存；供应所含预加；部件工作液质量；kWh 供应商；固化涂装工单；试验地面飞行阶段；实际燃料牌号密度温度消耗与可用不可用保留；物种出口介质高度；废物接收者；共用驱动分母；校准放行 | 采集同序列号配置图纸、供应收货完整性、实际领退库存、实测部件工作液质量、校准仪表工单试验放行原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原始称量仪表收货固化试验放行与燃料记录 |
| `cp_protection` | protection | 交付保护与拆卸整体附件 | foreground_record | 序列号工单配置；验收架数；精确交换配方属性单位；实测领退库存；供应所含预加；部件工作液质量；kWh 供应商；固化涂装工单；试验地面飞行阶段；实际燃料牌号密度温度消耗与可用不可用保留；物种出口介质高度；废物接收者；共用驱动分母；校准放行 | 采集同序列号配置图纸、供应收货完整性、实际领退库存、实测部件工作液质量、校准仪表工单试验放行原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原始称量仪表收货固化试验放行与燃料记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

逐兼容航空器配置，以实测净领退库存及有依据分配得到可归属交换总量，除验收设备数得 q_item，再除同一实测 M 得 q_ref。质量交换为 kg/kg，电力 MJ/kg。兼容序列号实际 M 不同时保留每架记录，可归属总量除验收净质量总和。分开不同机体复合发动机旋翼电池工作液任务供应模块范围。未知数量为缺口，不是零。不以引用空机质量密度热值标准试验时间部件份额替代。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | 实施独立 mass_record_provenance：校准实际完整航空器支承读数、制造商定位、设备清单实测去皮临时载荷可用燃料修正；保留所含油液压不可用燃料证据。核对整体拆卸件质量求和不重复。目录空机重量最大起飞质量油箱容量标准液体密度均不建立 M。缺原始实测不确定性须科学数据审查并阻止完整量值。 | 原始实际称重设备状态记录与质量平衡；FAA 2016 第 3 章仅方法支持 |
| `quality_bom` | 完整配置 | 实际机体滑橇座椅风窗旋翼桨叶齿轮箱发动机飞控电气燃油声明工作液核对验收 M。追溯供应完整性批准图纸材料批次；不重复旋翼总成内桨叶发动机内控制动力装置内电池工作液预加。镍镉不是铅酸；设备松散套件排除跨型号不同。完成数据集放行前增列每个遗漏实际部件过程交换。 | 完整物料表图纸收货实测安全数据与验收记录 |
| `quality_process` | 实际制造与试验 | 保留实际合金状态层合纤维树脂固化切边无损检验连接涂装连接平衡液压密性电气地面飞行验收记录及序列号返工放行。经验 QA 范围仅来自兼容核验实测记录独立来源综合。不提供普遍必需化学配方热压罐周期寿命上限认证试验时长。 | 实际制造程序计量不确定性与原始质量记录 |
| `quality_release` | 燃料物种与覆盖 | 保留实际燃料牌号碳来源称量或实测密度燃料平衡、阶段地点高度精确物种介质捕集废物实际接收者。不从总 NOx 推导 NO 与 NO2，不将高空因子施于地面试验。披露时期场址条件缺席供应商缺口量值范围及缺真实称重证据。本候选规定后续证据，不认证真实直升机工厂清单。 | 燃料试验转移清单与覆盖缺口登记 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考产品 | 要求覆盖完整民用单涡轴常规主尾旋翼滑橇配置及正实际 M，含 cp_mass、mass_record_provenance、基本空机设备燃料油核对。拒绝最大起飞质量宣称空机重量载荷满油箱重量作为净 M。缺实际证据须完整量值前审查。 | `faa-weight-2016` |
| `validate_atomic` | 全部交换 | 核验精确物理化学身份公开参考属性单位组路线状态交付完整性。风轮机桨叶不是直升机桨叶；活塞柴油不是涡轴；固化层合不是未固化预浸；纯异丙醇不是消毒混合物；镍镉不是铅酸；工艺水不是资源取水废液。公开较宽航电旋翼名称须一个实际单元系统边界，不为可互换件集合。无依据 UUID 留空。 |  |
| `validate_measurement` | 全部数量 | 核验原始单位属性、采集验收设备分母、明确 q_item/M 换算、同序列号配置场址时期实际校准因果分配。体积件数仅以实际牌号密度或实测部件质量修正，不重命名公开属性。未知不是零。 |  |
| `validate_species` | 条件基础排放 | 要求实际实测可追溯论证可归属异丙醇或精确化石 CO2、NO、NO2 及介质。选定身份仅空气未指定即时。拒绝室内水土壤长期生物源高空平流层或总 NOx、N2O、氮替代。地面飞行排放须独立阶段地点高度证据；介质不同时增匹配原子行。捕集滤尘涂层切边为废物，不自动空气排放。 |  |
| `validate_acceptance` | 制造放行 | 追溯同机实际结构材料部件旋翼传动控制地面飞行规程结果返工放行及声明适用民用主管机构合同。制造商手册 FAA 2016 案例不认证本机或施加当前法律标准。记录门点前生产与门点后转场培训服务边界。 | `airbus-production` |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置完整民用单涡轴直升机前景制造 |
| downstream_use | secondary_dataset；background_dataset，经合格审查及声明兼容上游链接后 |
| allowed_use | 匹配完整发动机旋翼滑橇任务设备配置、实测基本空机净范围供应边界门点场址时期的制造供应模型 |
| excluded_use | 客运任务运营飞行小时服务寿命足迹、等质量性能比较其他动力旋翼起落架路线、无依据认证完整摇篮到大门 |
| required_metadata | 制造者型号序列号图纸版本及民用验收依据；发动机型式控制供应完整性；主尾旋翼型式桨叶材料数量传动轴；滑橇；机体合金状态复合结构、供入预涂范围；航电单元件号座舱座椅风窗电池化学实际任务选项；供应商所含件预加；安装工作油液压液固定压铁；实测不可用燃料含于 M、保留可用燃料排除；具原始校准称重、旋翼航空器位置去皮的正实际配置基本空机净 M（kg）；排除人员载荷包装临时载荷松散地面套件备件；物理实测拆卸整体交付件；序列号试验阶段放行排放介质高度制造门点场址时期分配上游链接 |
| required_quality_disclosure | 身份量值范围缺口真实质量燃料油证据不确定性、完整物料表供应包含因果分配验收上游限制 |
| update_trigger | 航空器发动机旋翼机体起落架任务配置、复合化学电池工作液路线供应完整性、实测净状态修正试验阶段边界制造场址时期变化 |


## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `airbus-production` | literature | [Airbus Helicopters: Production](https://www.airbus.com/en/products-services/helicopters/production) | An end-to-end process、How do we build our helicopters、Production that spans the globe、Safety and innovation 标题段落：供应与厂内部件生产装配飞行验收背景。不采用场址产量普遍制造方法配方强度。前景记录决定实际条件阶段。 |
| `airbus-h125-2025` | literature | [Airbus H125 Technical Description (2025)](https://mediaassets.airbus.com/pm_38_379_379561-fmldw2vvut.pdf) | PDF 第 3 页（印刷第 22 页）标准机体滑橇座舱；PDF 第 4 页（印刷第 23 页）动力传动复合主尾旋翼液压控制镍镉电池及机载套件重量排除基线空机重量脚注。仅型号配置，不作普遍桨数化学部件质量油箱容量功率适航批准寿命试验配方。以声明实际配置当前航空器记录为准。 |
| `robinson-r66` | literature | [Robinson R66 Police](https://www.robinsonheli.com/helicopters/r66-police) | Rolls-Royce RR300 Turbine Engine 与 Crashworthy Fuel System 段落：独立民用涡轴囊式油箱安装设备案例。警用影像条件辅助油箱须独立声明范围；不采用估算空机质量总重速度航程发动机额定值发电机阈值寿命。 |
| `faa-weight-2016` | official_guidance | [FAA-H-8083-1B: Aircraft Weight and Balance Handbook (2016)](https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-1.pdf) | 第 3 章 PDF 第 34–37 页（印刷第 3-2–3-5 页）：校准坡道秤负荷传感器、制造商规程零点、设备压铁、残余燃料油其他液区分、旋翼位置水平去皮表。仅历史物理方法指南；以当前制造商规程为准。飞机 CAR/14 CFR 油约定不是直升机规则，不施加标称密度样本重量校准间隔预热温度数字。不声称当前法律认证或实际 M。 |
