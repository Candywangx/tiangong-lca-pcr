---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.electric-heating-resistors-except-of-carbon
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 非碳电加热电阻器

## 1. 范围与适用性

本PCR为一种声明配置的完整非碳电阻加热元件制作工厂大门前景数据集，不宣称每千克提供等量供热服务。采集前选定实际结构及制造或外购边界；第5节规定可执行范围、排除项与分类限制。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.electric-heating-resistors-except-of-carbon |
| classification_refs | CPC 3.0 44818 |
| covered_products | 以加热为主要功能的完整金属合金、PTC陶瓷、MoSi2或难熔金属元件；工业条件范围需分类审查。 |
| excluded_products | 碳或石墨加热体；完整器具或炉；非加热电阻与保护或传感PTC；供热服务。 |
| representative_product | 声明的NiCr管状成品元件；仅结构示例，不是唯一允许产品族。 |
| production_route | 厂内导体或陶瓷制备及装配，或外购加热体装配；声明每项实际路线。 |
| market_state | 工厂处验收完整固体元件，按规格包含端子或绝缘；运输包装单列。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应用于集成的指定完整电阻加热元件；不宣称供热服务等效。 |
| How much | 同一配置1千克验收净元件产出。 |
| How well | 实际额定电压或功率、电阻公差及测量温度、绝缘试验、几何、导体牌号、热接口、气氛及验收规格。 |
| How long or cycle | 一个生产验收与出货周期；不设寿命或运行时间默认值。 |
| reference_flow_link | `finished` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 加热电阻器，碳电阻器除外 `991da6ee-1a8a-4e77-8f9c-c50615e255e7` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 主要加热功能；完整元件接口；型号或配置；导体化学组成或牌号；PTC、金属或硅化物；制造或外购完成状态；尺寸或净质量；额定电压或功率；电阻与测量温度；绝缘、端子、护套或基材；气氛与热接口；场址、期间与地域；验收批次；分类决定；供应方边界 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| normalize_inventory | all inventory rows | row-specific | row-specific | 各适用非参考数量均采用normalize_mass；质量仅是产品分母，不把能量分子转换为质量。 |
| physical_assay | physical material and species records | Mass | kg | 用各记录自身分析及湿干基准分别保留物理总质量与所含物种质量；不将该分析规则用于电力或运输。 |
| energy_units | utility records | Energy | MJ | 保留计量kWh并按3.6 MJ/kWh转换；实际燃气体积需其自身状态、组成与热值。蒸汽质量不能替代交付热。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际来料牌号特定导体、粉料，或外购加热体或模块完成状态。 |
| starting_condition_role | foreground input interface |
| product_classification_scope | 语义上的非碳主要加热元件；CPC44818工业或陶瓷对应关系需审查。 |
| recursive_input_rule | 外购同类加热体为一个上游来料部件；其内含生产不列入本厂工序。 |
| upstream_dataset_requirement | 特定材料或模块、每项实际供应公用工程、进厂物流与外部处理；明确缺口。 |
| disclosure | 来料状态、纳入本厂步骤、排除项、供应方地域或技术或期间、反应及分配证据。 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| scope | 纳入以发热为主要设计功能的完整非碳电阻加热元件。金属合金线圈、管状或筒式、蚀刻箔、钛酸钡加热PTC、MoSi2及难熔金属设计为不同条件产品族。排除碳或石墨发热体；聚合物绝缘或碳酸盐原料含碳本身不触发该排除。 | cpc-3-notes; tdk-ptc; kanthal-super; molytun-elements |
| classification | CPC3将44818置于家用器具层级，但没有详细叶级说明。不得推断每个工业或陶瓷元件均已获接受归入44818。保留实际主要功能、导体化学组成、装置与元件接口及分类决定；本方法保留工业条件路线，其分类坐标待审。SiC及其他化合碳导体扩展前需明确碳边界和分类审查；不得默认为石墨或当作已证实的非碳产品纳入。 | cpc-3-notes |
| exclusion | 排除完整器具、工业炉、供给有用热量与运行服务。排除非加热电阻、保护保险、传感及电机启动PTC，除非交付产品证实以加热为主要功能。纳入厂内通电验收；后续器具使用、寿命、更换及寿命终结不属于本生产数据集。 | tdk-ptc; cpc-3-notes |
| make_buy | 对每项导体、护套、端子、基材、绝缘及电子传感器，声明外购完成状态与厂内步骤。完整外购模块在其上游数据集中计一次内含金属、粉料、烧结与蚀刻。厂内制造记录特定来料与实际工序并去除等价外购模块。部分外购体仅纳入本厂实际后续步骤；内部中间物转移抵消，不作为第二笔外部投入。 | watlow-tubular; watlow-flexible; tdk-ptc; epo-silicide |
| extension | 以下卡为具体条件接口示例，不是强制物料清单。对示例未列的每项实际牌号、掺杂剂、粘结剂、涂层、接触金属化、溶剂、燃料、冷却化学品、冷却剂、包装与废物，建立经核实身份及协议的独立原子卡。不得用复数材料、未指定化学品或全材料篮子作为一个交换。缺实际身份或测量为未知而非零；not_applicable需路线证据。 | tdk-ptc; epo-silicide |
| upstream | 纳入来料供应及实际进厂运输；上游供应方应匹配化学组成、部件完成状态、电力电压与地域、蒸汽总量或净量回流约定及废物处理路线。未配置这些供应方时，前景记录不代表完整从摇篮到工厂大门结果。各实际运输方式及吨千米区段独立记录；不设运输距离默认值。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| metal | 导体切断、绕制与成形 | conditional | 厂内制造金属导体；记录实际丝、箔、带、棒牌号、成形、退火和损失。 | foreground | 每 1 kg 参考流 |
| etch | 箔电路成形与清洗 | conditional | 仅厂内化学蚀刻；外购已蚀刻电路时，其上游蚀刻剂与箔材不列为本厂投入。 | foreground | 每 1 kg 参考流 |
| ceramic | 陶瓷电阻体配料与烧成 | conditional | 仅厂内制造PTC或硅化物电阻体；采用实际配方、掺杂剂、粘结剂、气氛及工序记录。 | foreground | 每 1 kg 参考流 |
| assembly | 绝缘、护套与端子装配 | conditional | 本厂完整元件装配；仅纳入实际进行的填粉压实、缩径、连接、封装或层压。 | foreground | 每 1 kg 参考流 |
| test | 出厂验收与包装 | required | 所有产品；记录实际电气、绝缘和尺寸验收、拒收与复测，以及出货包装。 | foreground | 每 1 kg 参考流 |
| services | 场址剩余公用工程与处理 | conditional | 仅未分配的公共服务剩余负荷、厂内发电、用水与废物处理；核对同一场址期间。 | foreground | 每 1 kg 参考流 |

### 过程：导体切断、绕制与成形 (`metal`)

#### 输入

##### 产品流

###### NiCr 80电阻丝 (`nicr_wire`)

仅认证NiCr 80来料电阻丝及厂内成形；不得把该牌号套用于未指定镍合金设计。

- 选定流: NiCr 80电阻丝
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `watlow-tubular`

###### Kanthal A-1铁铬铝电阻丝 (`fecral_wire`)

仅该认证来料牌号及厂内成形。

- 选定流: Kanthal A-1铁铬铝电阻丝
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `kanthal-a1`

###### NiCr 80电阻箔 (`nicr_foil`)

仅实际认证NiCr 80箔材；其他镍合金箔需独立化学特定卡。

- 选定流: NiCr 80电阻箔
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `watlow-flexible`

###### 钼带，Mo牌号 (`mo_strip`)

仅由该认证固体来料在厂内成形；外购成品导体属于不同接口。

- 选定流: 钼带，Mo牌号
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `molytun-elements`

###### 钨棒，W牌号 (`w_rod`)

仅由该认证固体来料在厂内成形；外购成品导体属于不同接口。

- 选定流: 钨棒，W牌号
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `molytun-elements`

###### 钽带，Ta牌号 (`ta_strip`)

仅由该认证固体来料在厂内成形；外购成品导体属于不同接口。

- 选定流: 钽带，Ta牌号
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `molytun-elements`

###### 交流电 (`metal_mvac`)

仅匹配实际场址电压、期间及供方的中国1–35 kV消费组合外购电；内部变压或发电不重复外购。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`

#### 输出

##### 废物流

###### NiCr 80电阻丝边角废料 (`alloy_scrap`)

仅该牌号分类后外送废料；厂内回用按配对转移抵消。

- 选定流: NiCr 80电阻丝边角废料
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `watlow-tubular`

### 过程：箔电路成形与清洗 (`etch`)

#### 输入

##### 产品流

###### 氯化铁水溶液蚀刻剂 (`ferric_chloride`)

仅实际槽液记录证明FeCl3化学组成、浓度及供应方时纳入；不规定蚀刻配方。

- 选定流: 氯化铁水溶液蚀刻剂
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `watlow-flexible`

###### 去离子漂洗水 (`rinse_water`)

仅实际新鲜供水；内部串级或回收水不是第二笔新鲜投入。

- 选定流: 去离子漂洗水
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `watlow-flexible`

###### 交流电 (`etch_mvac`)

仅匹配实际场址电压、期间及供方的中国1–35 kV消费组合外购电；内部变压或发电不重复外购。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`

#### 输出

##### 废物流

###### 废氯化铁蚀刻溶液 (`spent_etchant`)

仅该单独外送废液；测量湿质量及各自Fe、Ni、Cr、氯化物分析。

- 选定流: 废氯化铁蚀刻溶液
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `watlow-flexible`

### 过程：陶瓷电阻体配料与烧成 (`ceramic`)

#### 输入

##### 产品流

###### 碳酸钡粉，BaCO3 (`barium_carbonate`)

仅本厂PTC配料实际使用该前驱体时纳入；需纯度、水分、库存及反应记录。

- 选定流: 碳酸钡粉，BaCO3
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `tdk-ptc`

###### 二氧化钛粉，TiO2 (`titanium_dioxide`)

仅本厂PTC配料实际使用该前驱体时纳入；需纯度、水分、库存及反应记录。

- 选定流: 二氧化钛粉，TiO2
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `tdk-ptc`

###### 二硅化钼粉，MoSi2 (`mosi2_powder`)

仅以该粉料在厂内实际制备硅化物时纳入；声明组成与上游转化边界。

- 选定流: 二硅化钼粉，MoSi2
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `epo-silicide`

###### 含钨二硅化钼固溶体粉料 (`wmosi2_powder`)

仅具有实测x的认证(MoxW1-x)Si2来料及厂内制备；与纯MoSi2为替代路线，不自动叠加。

- 选定流: 含钨二硅化钼固溶体粉料
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `epo-silicide`

###### 氧化钇粉，Y2O3 (`yttria`)

仅实际硅化物配方含该添加剂时纳入；不得以专利示例比例作默认值。

- 选定流: 氧化钇粉，Y2O3
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `epo-silicide`

###### 二氧化硅粉，SiO2 (`silica`)

仅实际硅化物配方含该添加剂时纳入；不得以专利示例比例作默认值。

- 选定流: 二氧化硅粉，SiO2
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `epo-silicide`

###### 脱脂用外供氮气 (`nitrogen`)

仅实际氮气气氛；记录外供气体质量及本厂吹扫。

- 选定流: 脱脂用外供氮气
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `epo-silicide`

###### 烧结用外供氩气 (`argon`)

仅实际氩气气氛；外购气体生产负荷在上游计一次。

- 选定流: 烧结用外供氩气
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `epo-silicide`

###### 交流电 (`ceramic_mvac`)

仅匹配实际场址电压、期间及供方的中国1–35 kV消费组合外购电；内部变压或发电不重复外购。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`

#### 输出

##### 废物流

###### 钛酸钡PTC陶瓷拒收体 (`ceramic_reject`)

仅分类外送的PTC拒收体；硅化物拒收体需单独组成特定卡。

- 选定流: 钛酸钡PTC陶瓷拒收体
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `tdk-ptc`

##### 基本流

###### 碳酸盐反应二氧化碳，排入空气 (`reaction_co2`)

仅由来料纯度、转化率、残留碳酸盐及库存证实的实际碳酸盐反应；与燃料CO2区分。

- 选定流: 碳酸盐反应二氧化碳，排入空气
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `tdk-ptc`

### 过程：绝缘、护套与端子装配 (`assembly`)

#### 输入

##### 产品流

###### 外购NiCr 80成形加热线圈 (`purchased_coil`)

仅外购该指定分总成及已核实的来料接口；其内含材料、成形与烧成不计入本厂前景。

- 选定流: 外购NiCr 80成形加热线圈
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `watlow-tubular`

###### 外购已接触化钛酸钡PTC加热体 (`purchased_ptc`)

仅外购该指定分总成及已核实的来料接口；其内含材料、成形与烧成不计入本厂前景。

- 选定流: 外购已接触化钛酸钡PTC加热体
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `tdk-ptc`

###### 外购MoSi2成品加热体 (`purchased_silicide`)

仅外购该指定分总成及已核实的来料接口；其内含材料、成形与烧成不计入本厂前景。

- 选定流: 外购MoSi2成品加热体
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `kanthal-super`

###### 外购已蚀刻NiCr 80加热电路 (`purchased_foil`)

仅外购该指定分总成及已核实的来料接口；其内含材料、成形与烧成不计入本厂前景。

- 选定流: 外购已蚀刻NiCr 80加热电路
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `watlow-flexible`

###### Alloy 800护套管 (`alloy800_tube`)

仅实际单独外购该牌号部件；同一部件的替代材料与内含模块互斥。

- 选定流: Alloy 800护套管
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `watlow-tubular`

###### AISI 304不锈钢护套管 (`ss304_tube`)

仅实际单独外购该牌号部件；同一部件的替代材料与内含模块互斥。

- 选定流: AISI 304不锈钢护套管
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `watlow-tubular`

###### 镍端子销，Ni牌号 (`nickel_pin`)

仅实际单独外购该牌号部件；同一部件的替代材料与内含模块互斥。

- 选定流: 镍端子销，Ni牌号
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `watlow-tubular`

###### 烧结氧化铝绝缘骨架 (`alumina_former`)

仅实际单独外购该牌号部件；同一部件的替代材料与内含模块互斥。

- 选定流: 烧结氧化铝绝缘骨架
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `watlow-tubular`

###### 电工级氧化镁绝缘粉 (`mgo`)

仅厂内填粉护套路线；测量水分、纯度、填充、洒落和回收粉；并非所有加热体通用。

- 选定流: 电工级氧化镁绝缘粉
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `watlow-tubular`

###### 玻纤增强硅橡胶绝缘片 (`silicone_sheet`)

仅本厂装配实际采用的该绝缘或密封组分及供应方牌号；树脂、溶剂和固化化学分别记录。

- 选定流: 玻纤增强硅橡胶绝缘片
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `watlow-flexible`

###### 聚酰亚胺电绝缘薄膜 (`polyimide_film`)

仅本厂装配实际采用的该绝缘或密封组分及供应方牌号；树脂、溶剂和固化化学分别记录。

- 选定流: 聚酰亚胺电绝缘薄膜
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `watlow-flexible`

###### 电绝缘玻璃纤维绳 (`fiberglass_cord`)

仅本厂装配实际采用的该绝缘或密封组分及供应方牌号；树脂、溶剂和固化化学分别记录。

- 选定流: 电绝缘玻璃纤维绳
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `watlow-flexible`

###### 硅树脂端封料 (`silicone_seal`)

仅本厂装配实际采用的该绝缘或密封组分及供应方牌号；树脂、溶剂和固化化学分别记录。

- 选定流: 硅树脂端封料
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `watlow-tubular`

###### 异丙醇清洗溶剂 (`ipa`)

仅牌号与溶液浓度已核实的实际异丙醇清洗；不作为通用清洗路线。

- 选定流: 异丙醇清洗溶剂
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_solvent。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_solvent`
- 来源: `watlow-flexible`

###### 交流电 (`assembly_mvac`)

仅匹配实际场址电压、期间及供方的中国1–35 kV消费组合外购电；内部变压或发电不重复外购。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`

#### 输出

##### 废物流

###### 废异丙醇清洗液 (`waste_ipa`)

仅外送废液；采用其自身IPA分析、水含量和湿质量。

- 选定流: 废异丙醇清洗液
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_solvent。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_solvent`
- 来源: `watlow-flexible`

##### 基本流

###### 异丙醇，排入空气 (`ipa_air`)

仅物种特定实测释放或完整闭合的溶剂去向衡算；捕获的溶剂不等于销毁的溶剂。

- 选定流: 异丙醇，排入空气
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_solvent。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_solvent`
- 来源: `watlow-flexible`

###### 氧化镁颗粒物，排入空气 (`mgo_dust`)

仅本厂收集后实测物种特定剩余释放；收集粉料不等于大气排放。

- 选定流: 氧化镁颗粒物，排入空气
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `watlow-tubular`

### 过程：出厂验收与包装 (`test`)

#### 输入

##### 产品流

###### 瓦楞纸出货箱 (`carton`)

仅实际出货包装；排除于验收产品净质量。

- 选定流: 瓦楞纸出货箱
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `watlow-tubular`

###### 低密度聚乙烯出货袋 (`ldpe_bag`)

仅实际指定聚合物袋；排除于验收净质量。

- 选定流: 低密度聚乙烯出货袋
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `watlow-tubular`

###### 交流电 (`test_mvac`)

仅匹配实际场址电压、期间及供方的中国1–35 kV消费组合外购电；内部变压或发电不重复外购。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`

#### 输出

##### 产品流

###### 加热电阻器，碳电阻器除外 (`finished`)

工厂大门处经验收的完整指定加热元件；排除包装与拒收元件。

- 选定流: 加热电阻器，碳电阻器除外 `991da6ee-1a8a-4e77-8f9c-c50615e255e7`
- 流属性/单位: 质量 / kg
- 数量规则: 1 千克
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_mass`
- 来源: `cpc-3-notes`

### 过程：场址剩余公用工程与处理 (`services`)

#### 输入

##### 产品流

###### 交流电 (`services_mvac`)

仅匹配实际场址电压、期间及供方的中国1–35 kV消费组合外购电；内部变压或发电不重复外购。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`

###### 外购低压电网电力 (`lv_electricity`)

实际供电边界为低压时的替代路线；需供应方、地域和期间特定身份；已内含的中压进口不重复计入。

- 选定流: 外购低压电网电力
- 流属性/单位: 能量 / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`

###### 外购饱和工艺蒸汽 (`steam`)

仅具有实际压力、温度与干度记录的蒸汽交付；Energy/MJ由千克及自身焓基准独立测量。

- 选定流: 外购饱和工艺蒸汽
- 流属性/单位: 能量 / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`

###### 本厂工艺供热用管道天然气 (`natural_gas`)

仅本厂燃烧；实际组成、计量数量及自身热值；不得与外购热中内含燃气叠加。

- 选定流: 本厂工艺供热用管道天然气
- 流属性/单位: 净热值 / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`

###### 工艺补充自来水 (`makeup_water`)

仅进入场址处理或冷却的实际新鲜产品供水；记录自身供应接口。

- 选定流: 工艺补充自来水
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_water`

#### 输出

##### 废物流

###### 加热元件制造废水，送外部处理 (`wastewater`)

实际排水湿质量及各实测溶解物种；外部处理区别于本厂处理。

- 选定流: 加热元件制造废水，送外部处理
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_water`

###### 含金属废水处理污泥 (`sludge`)

仅实际外送污泥；水分及各Ni、Cr、Fe、Ba、Ti、Mo、W分析采用其自身采样值。

- 选定流: 含金属废水处理污泥
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`

###### 废溶剂捕集活性炭介质 (`spent_carbon`)

仅实际外送捕集介质；内含溶剂在溶剂去向中计一次，不算销毁。

- 选定流: 废溶剂捕集活性炭介质
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_solvent。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_solvent`

##### 基本流

###### 水蒸气，排入空气 (`water_evap`)

仅经实际库存与水分闭合单独估计或测量的场址蒸发。

- 选定流: 水蒸气，排入空气
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_water`

###### 化石二氧化碳，排入空气 (`fuel_co2`)

仅本厂实际燃烧释放；需物种特定测量或已验证燃料及技术因子；燃料碳闭合不能独立确定CO或NOx。

- 选定流: 化石二氧化碳，排入空气
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`

###### 一氧化碳，排入空气 (`co`)

仅本厂实际燃烧释放；需物种特定测量或已验证燃料及技术因子；燃料碳闭合不能独立确定CO或NOx。

- 选定流: 一氧化碳，排入空气
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`

###### 二氧化氮，排入空气 (`nox`)

仅本厂实际燃烧释放；需物种特定测量或已验证燃料及技术因子；燃料碳闭合不能独立确定CO或NOx。

- 选定流: 二氧化氮，排入空气
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| subdivision | 优先按路线与配置细分并直接记录可归属数据。返工与拒收的实际工序及公用工程负荷留在验收产出批次中；不得以投产总量或拒收质量归一化。 |  |
| shared | 仅按实证因果驱动分配实测未分配公共剩余，如具有载荷与温度证据的炉占用时间、校准设备计量或实际处理负荷。同期已分配总量与剩余核对到场址账本；披露驱动及不确定性，不设统一分配比例。 |  |
| scrap | 内部回收丝、粉、溶剂和水为配对转移，不给予避免生产抵扣。外送分类废料与拒收体保留实测组成及去向；披露一致回收与供应方约定，仅在物理因果细分不可行后分配真实共产品。不得以废料销售额自动形成负负荷。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | test | 各具体参考产品 | 可追溯实测记录 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 各批次及已核对报告期间 | 同一实际代表期间；披露停产及异常批次 | 声明场址及同一型号或配置批次 | 每台验收净质量 | 校准；可追溯记录；自身分析；采样与归属不确定性 |
| cp_material | all | 各具体外购材料或部件 | 可追溯实测记录 | 牌号；供方；来料状态；期初期末库存；称量收货或领料；内部回流；配置；N；D | 采集有日期的称重、物料清单与票据；计库存变化、配对回流及拒收返工耗用的实际期间净消耗为可归属Q；同一验收批次q_item = Q/N，再以Q/D得到每1千克参考流。外购部件质量内含材料仅计一次。 | kg | 各批次及已核对报告期间 | 同一实际代表期间；披露停产及异常批次 | 声明场址及同一型号或配置批次 | 分配交换量 / 验收设备数量 | 校准；可追溯记录；自身分析；采样与归属不确定性 |
| cp_energy | all | 各具体公用工程及剩余 | 可追溯实测记录 | 计量点；区间；kWh或MJ；供电电压及地域；进口；发电；出口；储能；已分配及剩余；蒸汽kg；压力；温度；干度；供给或回流焓；燃料状态；N；D | 同期读取校准场址与工序计量。先分配工序Q，再按因果分配公共剩余；核对发电、出口、储能及损失。蒸汽交付Energy/MJ独立按质量乘自身实际焓测量，回流共同零点且总净约定仅用一次。保留燃气组成、状态及热值；实际Q/N后转Q/D。 | MJ | 各批次及已核对报告期间 | 同一实际代表期间；披露停产及异常批次 | 声明场址及同一型号或配置批次 | 分配交换量 / 验收设备数量 | 校准；可追溯记录；自身分析；采样与归属不确定性 |
| cp_water | all | 各具体水投入、排水与蒸发 | 可追溯实测记录 | 水表；新鲜量；各流水分；期初期末；排水；蒸发；反应水；回流转移；N；D | 测量自身供排水及各实际流水分；独立水闭合含库存、蒸发与反应生成或消耗。配对抵消内部转移。实际Q分配至同一批次后求Q/N及Q/D。 | kg | 各批次及已核对报告期间 | 同一实际代表期间；披露停产及异常批次 | 声明场址及同一型号或配置批次 | 分配交换量 / 验收设备数量 | 校准；可追溯记录；自身分析；采样与归属不确定性 |
| cp_waste | all | 各具体外送物理废物 | 可追溯实测记录 | 去向；湿干质量；各物种自身分析；水分；期初期末库存；内部回流；N；D | 称量各分类外送废物；采样浓度匹配其自身流、日期与基准，不得以产品合金分析代替污泥或废水。跟踪处置或回收供方与库存；Q/N后转Q/D。 | kg | 各批次及已核对报告期间 | 同一实际代表期间；披露停产及异常批次 | 声明场址及同一型号或配置批次 | 分配交换量 / 验收设备数量 | 校准；可追溯记录；自身分析；采样与归属不确定性 |
| cp_solvent | assembly; services | 各具体溶剂与捕集去向 | 可追溯实测记录 | 化学牌号；溶液质量；自身分析；库存；产品保留；废液；回收产出；捕集介质；已验证销毁；非空气残留；大气测量；N；D | 测量各自身物种比例及全部实际去向项。核查库存、反应及非空气残留；捕获不等于销毁，剩余不自动等于大气排放。按不确定性归属实际Q后求Q/N及Q/D。 | kg | 各批次及已核对报告期间 | 同一实际代表期间；披露停产及异常批次 | 声明场址及同一型号或配置批次 | 分配交换量 / 验收设备数量 | 校准；可追溯记录；自身分析；采样与归属不确定性 |
| cp_emission | all | 各具体物种及一个环境介质 | 可追溯实测记录 | 物种；来源；介质；浓度；气量与状态；治理进口及出口；时间；分析转化；碳库存；不确定性；N；D | 测量治理后来源特定剩余，或经验证技术及物种因子乘实际活动。碳酸盐CO2采用实际反应程度或分析以及残留碳酸盐或库存；燃料CO或NOx需独立证据。实际物种Q/N后转Q/D。 | kg | 各批次及已核对报告期间 | 同一实际代表期间；披露停产及异常批次 | 声明场址及同一型号或配置批次 | 分配交换量 / 验收设备数量 | 校准；可追溯记录；自身分析；采样与归属不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | all inventory rows | 路线、物料清单、试验与净质量绑定一个实际验收批次；场址整合不混配置。 | 放行记录与cp_mass |
| completeness | all inventory rows | 记录各实际存在的原子交换；缺席分支需适用性证据；不设无依据数值范围、配方、成品率、电阻、丝长或供热服务默认值。 | 路线账本；供应方及反应记录 |
| acceptance | test | 记录校准电阻测量及实际测量温度与公差、指定负载和热接口下电压或电流或功率、绝缘电阻及耐压试验设定、尺寸检查、各序列或批次通过或拒收以及复测返工。这些记录绑定同一验收批次及厂内试验能耗；不得将标称功率或电阻当作实测制造消耗。 | 仪器校准；实际图纸或规格；电气试验与放行记录 |
| provider | upstream linked exchange | 核实实际供方状态、边界、单位及技术、地域与期间；UUID、范围及供应方缺口明确保留至独立解决。 | 供方文档；身份直读 |
| uncertainty | physical balances | 采用各流自身分析与水分、实测库存、反应项及配对回流；调查综合测量、采样与分配不确定性。 | cp_material；cp_water；cp_solvent；cp_waste；cp_emission |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| identity | 确认主要加热功能、完整进出接口、同一配置及实际导体牌号。验证每项采用的流UUID、属性及单位、物态、供给地域与矛盾备注；通用产出仅为身份，不构成实测混合或供热服务性能声明。 |  |
| denominator | 同一配置及期间，D为校准称量的验收完整产品净质量之和，N为验收数量，M = D/N，Q为含拒收与返工负荷的可归属交换。先求q_item = Q/N，再求q_ref = q_item/M = Q/D。所有行采用同一验收批次、物料清单、试验与称重记录；包装与拒收质量不得进入D。 |  |
| element_balance | 对每项物理材料及所含元素或物种，原料、产品、废料、粉料、若存在的渣、污泥、废水、释放和期初期末库存分别采用各自匹配分析、纯度、水分基准与采样日期。合金或溶液总质量不等于所含Ni、Cr、Fe、Ba、Ti、Mo、W、Y、Si质量。包含实测反应、沉积及配对回流；同一元素基准上投入加期初库存及反应净生成等于产出加期末库存及反应消耗。不得将一个共同分析值应用于所有项。 |  |
| water_balance | 实际水衡算包含新鲜供水、来料粉料或溶液水分及期初库存；与产品、废料、污泥和废水所含水、蒸发、排水、期末库存及实际反应生成或消耗核对。内部回收漂洗、冷却与凝结水配对抵消。查明泄漏及采样不确定性；水质量区别于湿物流总质量。各测量体积采用该流自身实测密度及温度转换；各湿流采用其自身采样水分比例，不以湿总质量当作水。 |  |
| solvent_fate | 对每种实际溶剂，测量收货、库存、产品保留、回收产出、废液、捕集介质及释放中的各自物种比例。经验证化学销毁及其产物单独列明；捕获或回收溶剂不等于销毁。投入不平衡剩余不自动等于空气VOC；核查非空气残留、洒落、库存变化、反应、检出限及综合不确定性。 |  |
| energy_ledger | 同期间外购进口加本厂发电减出口与储能增加，应与分配给金属、蚀刻、陶瓷、装配及试验的负荷、实测公共剩余及记录损失核对。公共服务仅含已分配后的剩余，不再次叠加全厂总量。剩余为负时需调查期间、单位及计量不确定性，不得截断为零。内部发电或产汽为转移；外部燃料与本厂发电排放计一次。 |  |
| steam_basis | 蒸汽Energy/MJ独立于质量/kg。记录交付质量、自身压力、温度、干度及比焓；净交付热量涉及凝结水回流时，供给与回流焓采用一个明确共同零点。总交付由独立实测供汽千克乘自身MJ/kg求得，净交付再减独立实测回流千克乘共同基准下回流自身MJ/kg。记录供应方总供汽或净热约定；总供汽供方扣回流一次，已净额供方不得第二次扣回流；不得将锅炉投入燃料热或通用MJ/kg因子当作交付蒸汽热。 |  |
| emissions | 匹配各排放源、实测物种及接收环境介质。碳酸盐反应CO2与化石燃料CO2区分。CO与NOx不能仅由燃料碳闭合推得；需技术特定证据、本厂治理与实测剩余。实际测量NO2与按NO2当量报告的总NOx单列；当量总质量不等于实测NO2，也不支持假定NO或NO2拆分。二氧化氮卡仅接纳实际NO2；总NOx物种拆分未解决时保留明确测量缺口。未知组成或缺失处理供应方阻止宣称完整物理闭合。 |  |
| uncertainty | 按实际测量、采样、期间归属与分配综合不确定性及分析检出限调查闭合差异；不设统一公差、成品率或损失比例。要求所有实际交换及路线不适用证据；条件不存在、零测量与未知相互区分。下游验证或发布前如实记录未解决UUID、范围、供应方与分类缺口。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 实际匹配元件供应作为器具或工序数据包投入及下游process或lifecyclemodel投影。 |
| excluded_use | 供热服务、器具运行、服务性能比较或通用寿命声明。 |
| required_metadata | 配置；化学组成；路线与制造或外购状态；净质量分母；验收性能；场址期间；分类决定；供方接口；排除及分配。 |
| required_quality_disclosure | 覆盖、测量及自身分析；库存、反应与回流闭合；不确定性；缺失UUID、范围或供方；分类限制；定性来源不等于实测清单。 |
| update_trigger | 加热功能、化学组成、部件完成状态、路线、供应地域、治理、验收或实测批次变化。 |

## 11. 数据源

| 来源id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| cpc-3-notes | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed p240; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 叶级身份、层级及相邻器具边界；不据此推断工业产品归类。 |
| watlow-tubular | handbook | Watlow Heating Solutions online original catalog, viewer p61 / printed p57, edition unspecified; https://watlow.cld.bz/Watlow-Heating-Solutions/61/ | 管状NiCr、MgO、护套及端子结构；仅定性。 |
| watlow-cartridge | handbook | Watlow original online catalog, viewer p419 / printed p415, edition unspecified; https://watlow.cld.bz/Watlow-Heating-Solutions/419/ | 条件高温筒式护套、线圈、绝缘与引线结构。 |
| watlow-flexible | handbook | Watlow original online catalog, viewer p114 / printed p110, edition unspecified; https://watlow.cld.bz/Watlow-Heating-Solutions/114/ | 玻纤绕丝与镍合金箔蚀刻、聚酰亚胺或硅橡胶条件路线；不固定箔牌号或蚀刻配方。 |
| tdk-ptc | handbook | TDK Electronics, PTC Thermistors General technical information, April 2026, pp2 and4; https://www.tdk-electronics.tdk.com/download/539366/728d0d379187d1dfa0831555b8c93202/pdf-general-technical-information.pdf | PTC主要加热与保护或传感功能区分；碳酸盐、氧化物、成形、烧成及接触化路线，不设通用比例。 |
| kanthal-super | handbook | Kanthal, High power heating elements for furnace productivity — Kanthal Super, S-KA018-B-ENG 06.2021, p2; https://www.kanthal.com/globalassets/kanthal-global/downloads/high-power-heating-elements-for-furnace-productivity-kanthal-super_b_eng_lr.pdf | MoSi2工业加热体对全部为家用线圈或MgO结构假设的反例。 |
| kanthal-a1 | handbook | Kanthal A-1 resistance-heating wire datasheet, updated2026-08-27 13:30; https://prodshop.kanthal.com/en/products/datasheets/material-datasheets/wire/resistance-heating-wire-and-resistance-wire/kanthal_a_1/ | 特定FeCrAl牌号对全部NiCr的反例；不复制工作温度默认值。 |
| molytun-elements | handbook | Molytun, Heating elements, original HTML snapshot2026-10-02; https://molytun.com/produkte/heating-elements/?lang=en | 钨、钼、钽棒、带、螺旋与装配接口；仅定性供应方范围。 |
| epo-silicide | literature | European Patent Office EP2921469B1, granted publication30January2019, paragraphs0027–0028; https://data.epo.org/publication-server/rest/v1.0/publication-dates/20190130/patents/EP2921469NWB1/document.pdf | 一个含钨硅化物混合、挤出、脱脂与烧结示例；粘结剂身份及实际配方需前景记录，专利数值不作默认值。 |
