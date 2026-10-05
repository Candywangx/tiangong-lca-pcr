---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.textile-carding-and-fibre-preparation-machinery
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 纺织梳理与短纤维准备机械制造

## 1. 范围与适用性

本 PCR 覆盖新制完整短纤维纺前准备机械制造：棉包或纤维束开松、清洁、混合、梳理成条、精梳准备与精梳、纤维条并条及圈条。每项功能、机器及交付配置分别作为参考产品。前景始于报告制造商接收有文件支持的坯料部件，结束于工厂验收和声明出厂门。这是接收到出厂制造模块；完整摇篮到大门声明须有匹配上游覆盖。

排除纤维挤出拉伸变形、最终成纱加捻摇纱卷绕、整经浆纱、织造针织、非织造铺网固结线、独立部件与针布、纺厂中央公用工程、旧机翻新及纤维纱线生产服务。制造商案例说明可能配置及历史能力，不规定必需操作、整机重量、寿命或交换量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.textile-carding-and-fibre-preparation-machinery |
| classification_refs | CPC 3.0 44611；本短纤准备制造边界窄于分类；仅分类背景 |
| covered_products | 用于短纤纺前准备的新制完整开松清洁混合梳理精梳准备精梳及并条圈条机械 |
| excluded_products | 纤维挤出、最终成纱、卷绕整经浆纱、织造针织及非织造线；独立部件及纺厂服务 |
| representative_product | 一台序列号明确的验收功能配置，实测净 M，不假定每台质量 |
| production_route | 实际条件加工、精密机加工及涂装；配置纤维机构、驱动控制集成和工厂验收；实际存在时的纤维试验及包装 |
| market_state | 声明出厂门处验收完整配置机械，明确整体模块和保留首次加注 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造配置完整短纤维纺前准备机械 |
| How much | 1 kg 验收完整机械净质量，使用实测 M 从按台记录换算 |
| How well | 记录图纸特定机械电气、间隙对中及防护联锁验收；不表示等质量纤维质量或产能等效 |
| How long or cycle | 一次制造及工厂验收周期；不规定使用寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 人造纺织材料的挤压、拉伸、变形或裁剪用机械，制备纺织纤维用机械或生产纺织用纱的机械，摇纱机或卷绕机及制备机织机、针织机及类似机械用的纺织纱机器 `f87c38cc-b845-46dd-bd91-3619a4444524` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造商型号；序列号配置图纸版本；短纤功能及预定纤维类型；工作幅宽；锡林罗拉布置及针布状态；包含喂入喂棉箱精梳牵伸圈条模块；专用驱动控制防护联锁及选装传感磨针；机器专用抽吸风机包含范围；供应商裸部件与完整总成范围；保留首次润滑脂；运输拆卸整体交付件；验收净质量 M、皮重及校准；工厂场址时期、实际路线门点及未链接上游阶段 |

全部限定信息在数据集元数据、过程说明或参考流备注声明。选定公开产品流较宽；这些必需限定将其限制在本制造边界。称量验收完整配置，包含另称整体运输拆卸件及保留首次加注。排除试验纤维条、操作员、运输包装、额外备件及外部纺厂公用工程。目录产能、锡林幅宽、间隙、驱动功率及运输质量不能确定净 M。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `gas_volume` | curing_gas | Volume | m3 | 保持实际管供气体体积及仪表参考压力温度成分；内部参考属性 1 为 Volume。替代 Mass 的 meanValue 1 不是密度或质量换算因子。 |
| `energy_conversion` | electricity | Net calorific value | MJ | 按已核验能量单位组因子 3.6 MJ/kWh 换算实测 kWh；声明进线电压及供电地域提供者。安装电机 kW 不是耗用电力。 |
| `liquid_mass` | liquid exchanges | Mass | kg | 称量实际配方或使用有记录成分浓度温度下实测密度换算液体体积；不以纯组分替代预混液。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告制造场址接收有文件支持的外购坯料及独立完整部件 |
| starting_condition_role | 前景接收到出厂制造模块 |
| product_classification_scope | 配置短纤准备机械，不是纺织生产或下游最终成纱设备 |
| recursive_input_rule | 不得从本相同参考产出递归生成外购完整模块；排除已完成内部操作，避免重复坯料 |
| upstream_dataset_requirement | 匹配材质总成状态、技术、供入地域及属性；完整摇篮到大门声明前披露未链接供应商阶段 |
| disclosure | 场址时期、型号功能、供应商完整性、厂内外包操作、实测 M、仅工厂试验、出厂门及身份量值缺口 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground` | all processes | 纳入实际制造装配首次加注、可归属工厂试验及返工。排除客户纺厂安装使用、纤维纱产出、中央除尘服务、维护及报废。 |  |
| `boundary_components` | supplier assemblies | 每项配置机构仅一次映射至外购总成或内部制造。裸锡林、针布、供入已包针布锡林及集成电机控制器须有不重叠物料表覆盖。 | `rieter-card` |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 机架及外壳制造 | conditional | 指定机架外壳在报告场址制造。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `precision` | 精密部件加工与转子准备 | conditional | 轴、罗拉、锡林或支撑在前景内加工。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `finishing` | 表面清洗与涂装 | conditional | 声明部件在本场址清洗或涂装。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `mechanical` | 配置纤维工作机构集成 | required | 每台完整准备机械，具有实际功能专用机构。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `drive_controls` | 驱动、电气与控制集成 | required | 每台配置电驱准备机械。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `acceptance` | 工厂机械电气验收 | required | 每台验收完整机器。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `fibre_trial` | 条件工厂纤维试验 | conditional | 实际配置机器在出厂前实施喂纤验收。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `packing` | 出厂包装 | conditional | 实际包装越过声明工厂出厂门。 | foreground | 一台验收配置机器，使用 M 归一化 |

实际机架精密准备及涂装供入配置机构集成、驱动控制安装及工厂验收；喂纤试验及包装为条件过程。外购完整总成跳过其内部操作。所有行按精确材质及供应商边界条件适用，包括必需阶段中的行。数据集完成前核对完整配置物料表，将遗漏实际部件、公用工程、试剂及已证实废物排放分别增列。

### 过程：机架及外壳制造 (`fabrication`)

按图纸切割成形连接实际板型材，或机加工接收铸件毛坯，形成配置机架。不假定每台机器均为焊接机架，也不假定本场址实施铸造。外购完整机架跳过相应坯料操作。实际采用相应技术时，将实芯焊丝、每项保护气、电焊条及残渣分别增列；自保护焊丝行为条件适用。

#### 输入

##### 产品流

###### 未镀层冷轧低碳钢薄板 (`steel_sheet`)

仅限机架外壳制造实际文件确认薄板；记录牌号厚度状态及实测新领退平衡。

- 选定流：未镀层冷轧低碳钢薄板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`dmg-factory`

###### 药芯焊丝 (`self_shield_wire`)

仅限与焊接规程匹配的有记录自保护碳钢药芯焊丝；气保护技术须另有焊丝气体身份。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`dmg-factory`

###### 工厂进线处电网交流电 (`fabrication_electricity`)

仅限声明电压地域提供者下实际制造或工厂试验可归属计量电力；客户纺厂运行排除。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`dmg-factory`

#### 输出

##### 废物流

###### 钢废料，边角料 (`steel_offcut`)

仅限内部复用后输出分收洁净未处理未镀层钢边角料；识别实际去向。

- 选定流：钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`dmg-factory`

### 过程：精密部件加工与转子准备 (`precision`)

记录轴及纤维工作锡林的实际车铣钻磨、安装及轴承接口、针布装配和实际转子平衡。按图纸试验记录采集实际公差及平衡验收，不设普遍平衡等级或梳理间隙。外包成品罗拉轴承跳过其组成机加工。DMG MORI 记录历史纺机加工场址，不规定机床品牌或配方。

#### 输入

##### 产品流

###### 冷精整碳钢轴用棒料毛坯 (`steel_bar`)

仅限有文件支持图纸特定厂内轴用棒料，记录牌号实测质量；外购成品轴不计原棒料。

- 选定流：冷精整碳钢轴用棒料毛坯
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_precision。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_precision`
- 来源：`dmg-factory`

###### 灰铸铁纺机机架铸件毛坯 (`cast_iron_blank`)

仅限实际灰铸铁毛坯机加工路线；记录合金、铸件完整性及实测坯料部件质量；未实施时铸造本身在门外。

- 选定流：灰铸铁纺机机架铸件毛坯
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_precision。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_precision`
- 来源：`dmg-factory`

###### 配方矿物油水金属加工乳化液 (`cutting_emulsion`)

仅限实际供入预混切削乳化液，记录实测浓度补加及安全数据表；分别配混油水添加剂须另列行。

- 选定流：配方矿物油水金属加工乳化液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_precision。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_precision`
- 来源：`dmg-factory`

###### 工厂进线处电网交流电 (`precision_electricity`)

仅限声明电压地域提供者下实际制造或工厂试验可归属计量电力；客户纺厂运行排除。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_precision。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_precision`
- 来源：`dmg-factory`

#### 输出

##### 废物流

###### 钢废料，机加工切屑 (`steel_chips`)

仅限分收洁净未处理钢机加工切屑；含油切屑及混合合金须另有明确废物。

- 选定流：钢废料，机加工切屑 `7f46756b-6f66-46a7-bbcb-c04727d9d19e`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_precision。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_precision`
- 来源：`dmg-factory`

###### 分类灰铸铁机加工切屑 (`iron_chips`)

仅限内部复用后输出灰铸铁机加工切屑；记录油污染及出口。

- 选定流：分类灰铸铁机加工切屑
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_precision。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_precision`
- 来源：`dmg-factory`

###### 送处理的废矿物油水切削乳化液 (`spent_emulsion`)

仅限实际输出废乳化液，记录浓度污染及处理凭据；不作直接环境水排放。

- 选定流：送处理的废矿物油水切削乳化液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_precision。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_precision`
- 来源：`dmg-factory`

### 过程：表面清洗与涂装 (`finishing`)

记录实际清洗涂装路线；粉末涂料是条件配方，不要求纺机必须采用。外购已精加工涂装件跳过该操作。每项实际供入磨料、脱脂剂、预处理剂及湿涂组分单列。计量实际固化能源及分收捕集残渣；不从涂装字样推定溶剂或燃烧排放。

#### 输入

##### 产品流

###### 涂料（粉末） (`powder_coating`)

仅限实际供入干粉涂料配方；记录树脂牌号、新领用、内部回收及固化保留。不设普遍涂料配方。

- 选定流：涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`dmg-factory`

###### 工艺用水 (`cleaning_water`)

仅限实际清洗供入处理工业水；不将内部循环计作新水或水资源取用。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`dmg-factory`

###### 气态天然气 (`curing_gas`)

仅限安装固化燃烧器实际管供气态天然气；记录成分及仪表参考压力温度，不作液化天然气或未指定燃料热。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`dmg-factory`

###### 工厂进线处电网交流电 (`finishing_electricity`)

仅限声明电压地域提供者下实际制造或工厂试验可归属计量电力；客户纺厂运行排除。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`dmg-factory`

#### 输出

##### 废物流

###### 送处理的金属部件清洗水性废液 (`cleaning_effluent`)

仅限输出清洗废液，记录实际溶解夹带成分及处理去向；与水资源或直接水排放分开。

- 选定流：送处理的金属部件清洗水性废液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`dmg-factory`

###### 捕集固化热固性粉末涂料残渣 (`powder_residue`)

仅限实际收集固化热固性涂料残渣；未固化可复用过喷为内部回收，不自动作为此废物。

- 选定流：捕集固化热固性粉末涂料残渣
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`dmg-factory`

#### 输出

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2`)

仅限实际工厂固化燃烧中可归属实测化石 CO2，排至空气未指定子介质；不规定必然发生或虚构燃料因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`dmg-factory`

### 过程：配置纤维工作机构集成 (`mechanical`)

安装与声明产品匹配的开松清洁混合机构、梳理锡林喂入刺辊道夫盖板、精梳机构或牵伸圈条单元。这些替代配置分别为型号，不要求每台机器均具有全部部件。区分裸锡林与供入已包覆针布总成；单独安装针布不得重复供应商已装针布。整体喂棉箱、抽吸壳体及防护属于配置交付；共用中央纺厂除尘不纳入。

#### 输入

##### 产品流

###### 成品纺织准备机机架 (`frame`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。

- 选定流：成品纺织准备机机架
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`rieter-card`

###### 未包针布纺织梳理主锡林总成 (`main_cylinder`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限梳理配置；裸锡林排除单独安装针布。

- 选定流：未包针布纺织梳理主锡林总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`rieter-card`

###### 成品淬硬钢锯齿梳理针布条 (`card_clothing`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限梳理配置；原钢丝不是成品齿形针布。

- 选定流：成品淬硬钢锯齿梳理针布条
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`rieter-card`

###### 成品梳理回转盖板总成 (`flat_bar`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限盖板梳理配置；声明针布包含范围。

- 选定流：成品梳理回转盖板总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`rieter-card`

###### 未包针布梳理道夫锡林总成 (`doffer`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限梳理配置；安装针布另声明。

- 选定流：未包针布梳理道夫锡林总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`rieter-card`

###### 梳理刺辊罗拉总成 (`licker_in`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限梳理配置；声明针布包含范围。

- 选定流：梳理刺辊罗拉总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`rieter-card`

###### 纺织棉束开松打手转子总成 (`opening_rotor`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限开松清洁配置。

- 选定流：纺织棉束开松打手转子总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`rieter-card`

###### 纺织准备喂入罗拉总成 (`feed_roller`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限实际安装喂入罗拉。

- 选定流：纺织准备喂入罗拉总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`rieter-card`

###### 整体纺织纤维喂棉箱总成 (`feed_chute`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限本机交付包含，不重复中央喂料设备。

- 选定流：整体纺织纤维喂棉箱总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`rieter-card`

###### 纤维条并条机牵伸罗拉总成 (`drafting_roller`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限并条配置；声明供应商已含皮辊皮圈边界。

- 选定流：纤维条并条机牵伸罗拉总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`rieter-card`

###### 纺织纤维条圈条总成 (`coiler`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限安装圈条器；独立条桶搬运设备排除。

- 选定流：纺织纤维条圈条总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`rieter-card`

###### 纺织纤维精梳头总成 (`combing_head`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限精梳配置；记录钳板、圆梳及分离罗拉包含范围。

- 选定流：纺织纤维精梳头总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`rieter-card`

###### 钢制深沟球轴承 (`ball_bearing`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限实际轴承构造，不作滚珠或滚柱类别。

- 选定流：钢制深沟球轴承
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`rieter-card`

###### 硫化橡胶纺机传动带 (`drive_belt`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限实际安装传动带；输送带作用不同。

- 选定流：硫化橡胶纺机传动带
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`rieter-card`

###### 工厂进线处电网交流电 (`mechanical_electricity`)

仅限声明电压地域提供者下实际制造或工厂试验可归属计量电力；客户纺厂运行排除。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`rieter-card`

### 过程：驱动、电气与控制集成 (`drive_controls`)

安装文件支持的电机驱动传动、电控柜、线束、联锁及声明传感器。不假定间隙控制及集成磨针选装为普遍配置；Rieter 的间隙控制案例明确为选装。专用风机及气动执行仅在交付包含时记录；纺厂中央共用公用工程分开。模块内已含电机控制器不得重复。

#### 输入

##### 产品流

###### 三相鼠笼异步驱动电机 (`motor`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限独立供入安装部件；间隙传感器为选装。

- 选定流：三相鼠笼异步驱动电机
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_drive_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drive_controls`
- 来源：`rieter-card`

###### 变频驱动器 (`drive_inverter`)

仅限独立供入实际变频驱动器，包含功率电子器件外壳散热结构；核验配置电压额定值及供入完整性，不与完整驱动柜内部重复。公开流标识估算外购部件，不提供实测制造强度。

- 选定流：变频驱动器 `c14b641c-8fbe-40c4-843b-3cc9b0faeff3`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_drive_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drive_controls`
- 来源：`rieter-card`

###### 专用纺织准备控制器模块 (`controller`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限独立供入安装部件；间隙传感器为选装。

- 选定流：专用纺织准备控制器模块
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_drive_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drive_controls`
- 来源：`rieter-card`

###### 绝缘铜纺机线束 (`harness`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限独立供入安装部件；间隙传感器为选装。

- 选定流：绝缘铜纺机线束
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_drive_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drive_controls`
- 来源：`rieter-card`

###### 梳理间隙位移传感器模块 (`gap_sensor`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限独立供入安装部件；间隙传感器为选装。

- 选定流：梳理间隙位移传感器模块
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_drive_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drive_controls`
- 来源：`rieter-card`

###### 专用纺机离心抽吸风机 (`extraction_fan`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限独立供入安装部件；间隙传感器为选装。

- 选定流：专用纺机离心抽吸风机
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_drive_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drive_controls`
- 来源：`rieter-card`

###### 镀锌钢机器抽吸风管 (`suction_duct`)

仅限具名独立外购成品总成，记录图纸部件版本、材质和实测净质量。内部转入或供应商完整模块已含组成时省略采购。仅限独立供入安装部件；间隙传感器为选装。

- 选定流：镀锌钢机器抽吸风管
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_drive_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drive_controls`
- 来源：`rieter-card`

###### 钢螺钉 (`steel_screw`)

仅限独立供入实际钢螺钉；独立领用螺母螺栓垫圈须有各自精确交换。

- 选定流：钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_drive_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drive_controls`
- 来源：`rieter-card`

###### 工厂进线处电网交流电 (`drive_controls_electricity`)

仅限声明电压地域提供者下实际制造或工厂试验可归属计量电力；客户纺厂运行排除。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_drive_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drive_controls`
- 来源：`rieter-card`

### 过程：工厂机械电气验收 (`acceptance`)

核验交付物料表、安装机构、转向、调速、对中、实际间隙公差、防护联锁及有记录振动功能准则。仅纳入实际工厂运行和返工。工厂验收不确认客户场址纤维质量、纱产率、工艺生产率或寿命。清除试验纤维后、运输包装前测验收净质量 M。

#### 输入

##### 产品流

###### 锂皂矿物油轴承润滑脂 (`first_fill_grease`)

仅限有文件支持实际领用首次润滑脂，记录牌号皂基基础油及量；供应商预润滑轴承不重复加注。

- 选定流：锂皂矿物油轴承润滑脂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`rieter-card`

###### 工厂进线处电网交流电 (`acceptance_electricity`)

仅限声明电压地域提供者下实际制造或工厂试验可归属计量电力；客户纺厂运行排除。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`rieter-card`

#### 输出

##### 产品流

###### 人造纺织材料的挤压、拉伸、变形或裁剪用机械，制备纺织纤维用机械或生产纺织用纱的机械，摇纱机或卷绕机及制备机织机、针织机及类似机械用的纺织纱机器 (`finished_machine`)

严格为 1 kg 验收完整配置纺前准备机器净质量，包含安装机构、专用驱动控制及保留首次加注；排除试验纤维、运输包装及额外备件。

- 选定流：人造纺织材料的挤压、拉伸、变形或裁剪用机械，制备纺织纤维用机械或生产纺织用纱的机械，摇纱机或卷绕机及制备机织机、针织机及类似机械用的纺织纱机器 `f87c38cc-b845-46dd-bd91-3619a4444524`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`rieter-card`

### 过程：条件工厂纤维试验 (`fibre_trial`)

记录实际仅限工厂的试验材质、方法、时长及可归属能源、回收可复用纤维和输出试验废料。棉及原生 PET 短纤行按有文件支持材质条件适用；不替代棉短绒、织物、腈纶或再生 PET。内部退回物料不作重复新投入。送废物的试验条不是参考产品；可售试验产出须声明共产品决定。

#### 输入

##### 产品流

###### 供工厂试验的轧花未梳理皮棉 (`cotton_trial`)

仅限记录纤维水分污染的实际新棉试验投入；不计纺厂生产，不替代棉短绒。

- 选定流：供工厂试验的轧花未梳理皮棉
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fibre_trial。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fibre_trial`
- 来源：`truetz-preparation`

###### 供工厂试验的原生 PET 短纤维 (`pet_trial`)

仅限实际文件确认原生 PET 短纤，记录纤度切长油剂及水分；不替代腈纶或再生原料。

- 选定流：供工厂试验的原生 PET 短纤维
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fibre_trial。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fibre_trial`
- 来源：`truetz-preparation`

###### 工厂进线处电网交流电 (`fibre_trial_electricity`)

仅限声明电压地域提供者下实际制造或工厂试验可归属计量电力；客户纺厂运行排除。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fibre_trial。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fibre_trial`
- 来源：`truetz-preparation`

#### 输出

##### 废物流

###### 送回收的分类棉试验纤维废料 (`cotton_trial_waste`)

仅限实际工厂试验内部复用后输出分类棉纤维条，记录实测质量及接收路线。

- 选定流：送回收的分类棉试验纤维废料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fibre_trial。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fibre_trial`
- 来源：`truetz-preparation`

###### 送回收的分类 PET 短纤试验废料 (`pet_trial_waste`)

仅限实际试验输出 PET 短纤，与棉及混纺分开；记录聚合物油剂及出口。

- 选定流：送回收的分类 PET 短纤试验废料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fibre_trial。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fibre_trial`
- 来源：`truetz-preparation`

### 过程：出厂包装 (`packing`)

记录每项实际出厂支撑及防护膜，从机器 M 排除。属于验收机器的运输拆卸件保留在称量完整性清单；单独销售备用针布及工具排除。其他包装周转支撑须有自身材质行及实测复用记录。

#### 输入

##### 产品流

###### 窑干锯材（针叶材） (`timber_support`)

仅限实测质量的实际窑干针叶锯材运输木支撑，从 M 排除。

- 选定流：窑干锯材（针叶材） `50904047-e5b0-4110-990a-53751d250267`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：`dmg-factory`

###### 低密度聚乙烯薄膜（PE-LD） (`ldpe_film`)

仅限声明厚度实测质量的实际 LDPE 防护膜，从 M 排除。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：`dmg-factory`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_order` | shared operations | 按工单分离功能型号、幅宽、机构针布及安装选装。优先直接归属领退、工位仪表、试验及返工。不可分离共用制造资源采用实测因果工位时间或负荷；份额 = 工单驱动量 / 全部覆盖工单驱动量总和，记录因果依据时期分母。不允许梳棉机并条机开松机型号间无解释等台数分配。 |  |
| `allocation_reuse` | scrap and trials | 内部库存纤维复用为转移，不重复新投入。输出切屑残渣及试验纤维保持实测数量去向，不自动抵扣避免产品。可售试验条或其他共产品分别识别，直接分离后取得经审查剩余分配。拒收返工机器负担属于记录的验收产出时期；核对在制库存。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | 验收整机净质量 | weighing_record | 型号；功能；配置；序列号；验收净质量 M；秤编号；校准；针布模块包含范围；保留加注；拆卸整体部件；已清除试验纤维；包装皮重 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 逐台或同配置代表性批次 | 同工单制造时期 | 声明工厂配置 | 每台验收净质量 | 校准皮重完整性验收凭据 |
| `cp_fabrication` | fabrication | 逐原子交换 | measured_order_record | 工单；序列号配置；图纸部件材质版本；供应商范围；领用；退回；库存变化；交换量；部件质量；仪表单位；电压；燃气压力温度；配方浓度密度；验收台数；返工；分配驱动量；试验纤维退回；废物出口；实测排放质量 | 称量牌号尺寸特定坯料领退、合格机架质量和分类边角料；采集焊接规程、返工及工位电力。 | 各行声明 kg、MJ 或 m3 | 逐工单，批次核对 | 连续声明制造时期 | 机架及外壳制造 | 可归属交换数量 / 验收机器数量 | 物料表称量分表校准试验移交凭据 |
| `cp_precision` | precision | 逐原子交换 | measured_order_record | 工单；序列号配置；图纸部件材质版本；供应商范围；领用；退回；库存变化；交换量；部件质量；仪表单位；电压；燃气压力温度；配方浓度密度；验收台数；返工；分配驱动量；试验纤维退回；废物出口；实测排放质量 | 采集图纸部件版本、供入毛坯及合格部件质量、机时、切削液配方浓度、补加退回、分收切屑及废切削液出口、平衡记录和工位电力。 | 各行声明 kg、MJ 或 m3 | 逐工单，批次核对 | 连续声明制造时期 | 精密部件加工与转子准备 | 可归属交换数量 / 验收机器数量 | 物料表称量分表校准试验移交凭据 |
| `cp_finishing` | finishing | 逐原子交换 | measured_order_record | 工单；序列号配置；图纸部件材质版本；供应商范围；领用；退回；库存变化；交换量；部件质量；仪表单位；电压；燃气压力温度；配方浓度密度；验收台数；返工；分配驱动量；试验纤维退回；废物出口；实测排放质量 | 采集预处理涂料批次及安全数据表、新领用减回收、涂装部件质量、水及实际废液、固化燃料状态、电力及实际存在时的可归属实测燃烧排放。 | 各行声明 kg、MJ 或 m3 | 逐工单，批次核对 | 连续声明制造时期 | 表面清洗与涂装 | 可归属交换数量 / 验收机器数量 | 物料表称量分表校准试验移交凭据 |
| `cp_mechanical` | mechanical | 逐原子交换 | measured_order_record | 工单；序列号配置；图纸部件材质版本；供应商范围；领用；退回；库存变化；交换量；部件质量；仪表单位；电压；燃气压力温度；配方浓度密度；验收台数；返工；分配驱动量；试验纤维退回；废物出口；实测排放质量 | 将功能、工作幅宽、锡林罗拉布置、针布类型及包含模块追溯物料表；称量供入总成、内部转入单列，核验对中间隙及机械完整性。 | 各行声明 kg、MJ 或 m3 | 逐工单，批次核对 | 连续声明制造时期 | 配置纤维工作机构集成 | 可归属交换数量 / 验收机器数量 | 物料表称量分表校准试验移交凭据 |
| `cp_drive_controls` | drive_controls | 逐原子交换 | measured_order_record | 工单；序列号配置；图纸部件材质版本；供应商范围；领用；退回；库存变化；交换量；部件质量；仪表单位；电压；燃气压力温度；配方浓度密度；验收台数；返工；分配驱动量；试验纤维退回；废物出口；实测排放质量 | 记录驱动结构、电机部件功率及实测质量、控制器软件版本、线束构造质量、传感选装及外壳包含范围；保留导通联锁及电力计量凭据。 | 各行声明 kg、MJ 或 m3 | 逐工单，批次核对 | 连续声明制造时期 | 驱动、电气与控制集成 | 可归属交换数量 / 验收机器数量 | 物料表称量分表校准试验移交凭据 |
| `cp_acceptance` | acceptance | 逐原子交换 | measured_order_record | 工单；序列号配置；图纸部件材质版本；供应商范围；领用；退回；库存变化；交换量；部件质量；仪表单位；电压；燃气压力温度；配方浓度密度；验收台数；返工；分配驱动量；试验纤维退回；废物出口；实测排放质量 | 采集序列号关联尺寸对中、安全及运行验收报告；测可归属试验电力、安装首次润滑脂及验收净质量 M，保留皮重完整性凭据。 | 各行声明 kg、MJ 或 m3 | 逐工单，批次核对 | 连续声明制造时期 | 工厂机械电气验收 | 可归属交换数量 / 验收机器数量 | 物料表称量分表校准试验移交凭据 |
| `cp_fibre_trial` | fibre_trial | 逐原子交换 | measured_order_record | 工单；序列号配置；图纸部件材质版本；供应商范围；领用；退回；库存变化；交换量；部件质量；仪表单位；电压；燃气压力温度；配方浓度密度；验收台数；返工；分配驱动量；试验纤维退回；废物出口；实测排放质量 | 按聚合物来源称量新试验纤维、复用退回、输出试验纤维条及残余库存；保留纤维成分水分污染、废物凭据及机器专用试验日志。 | 各行声明 kg、MJ 或 m3 | 逐工单，批次核对 | 连续声明制造时期 | 条件工厂纤维试验 | 可归属交换数量 / 验收机器数量 | 物料表称量分表校准试验移交凭据 |
| `cp_packing` | packing | 逐原子交换 | measured_order_record | 工单；序列号配置；图纸部件材质版本；供应商范围；领用；退回；库存变化；交换量；部件质量；仪表单位；电压；燃气压力温度；配方浓度密度；验收台数；返工；分配驱动量；试验纤维退回；废物出口；实测排放质量 | 按出厂配置称量每项包装材质，核对退回及包装皮重；记录实际周转支撑次数。 | 各行声明 kg、MJ 或 m3 | 逐工单，批次核对 | 连续声明制造时期 | 出厂包装 | 可归属交换数量 / 验收机器数量 | 物料表称量分表校准试验移交凭据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

同质配置工单核对新领用减退回及库存变化、实际计量公用工程及已证实排放；采用有记录共用份额，再将可归属总量除以验收台数得到 q_item。按相同交付状态 M 归一化。燃气保持记录仪表条件下每 kg 的 m3，电力保持每 kg 的 MJ；不得替换体积质量能量。兼容机器质量变化时保留逐序列号记录，将可归属总量除以验收净质量总和；不同功能配置仍分开。未知量为缺口，不默认零。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_bom` | all components | 将每项安装机架纤维工作面罗拉锡林针布驱动控制防护及首次加注与配置物料表供应商完整性核对；避免裸部件包针布总成及内部转入重复。 | 配置物料表及供应商范围 |
| `quality_balance` | mass and utilities | 核对库存部件质量 M、保留脂、输出废物、试验纤维退回及返工；保留称量仪表校准和成分状态换算。以实测记录建立场址 QA 限值，不采用目录产能、纤维产率或假定材料损耗。 | 称量计量库存试验凭据 |
| `quality_coverage` | all processes | 报告时期地域型号覆盖、实际缺席条件阶段、外包、身份量值缺口、不确定性及上游链接。历史设备工厂案例不提供现行工厂强度或普遍公差。 | 工单覆盖与证据登记 |


## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | 要求正实测 M、完整功能准备机械、明确工作机构针布模块驱动控制包含范围、净皮重及工厂验收。不以纤维纱产出或产能服务替代机械制造。 |  |
| `validate_identity` | inventory rows | 要求单一物理明确交换及匹配公开身份参考属性单位组路线介质。钢丝不是成品针布，PET 不是任意合成短纤，工艺水不是废水，废料产品流不自动成为废物移交。不兼容 UUID 在数据集完成前保持空白。 |  |
| `validate_conversion` | inventory rows | 核查 cp_mass 及 normalize_mass 对应相同验收配置时期、精确燃气仪表条件及电力单位。拒绝完整模块组成、纤维退回及首次加注重复。 |  |
| `validate_emissions` | elementary rows | 化石 CO2 须有可归属实际工厂燃烧实测及空气未指定子介质。其他已证实物质介质另列行；不规定机加工涂装或纤维试验普遍排放。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置短纤准备机械前景制造数据集 |
| downstream_use | secondary_dataset；background_dataset，经合格审查且上游覆盖明确后 |
| allowed_use | 匹配功能配置状态门点场址时期的制造供应链建模 |
| excluded_use | 纤维纱生产、寿命服务比较、等质量准备等效、其他纺织功能及上游缺失时完整摇篮到大门声明 |
| required_metadata | 参考限定、配置物料表、实测 M、供应商范围、实际操作试验、场址时期门点、采集分配凭据及上游链接 |
| required_quality_disclosure | 缺失身份量值、不确定性、未启用行、增列物料表交换、历史证据限制及未链接外包上游阶段 |
| update_trigger | 功能幅宽机构针布、模块驱动控制选装、供应商完整性、M 首次加注、涂装路线、工厂时期地域或证据缺口解决变化 |


## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `rieter-card` | literature | [Rieter C 81 Card, 3586-v1 en 2305](https://www.rieter.com/fileadmin/user_upload/products/documents/systems/fiber-preparation/c-81/rieter-c-81-card-brochure-3586-v1-98697-en.pdf) | 2023 年 5 月册，PDF 及印刷第 11 页 Carding Gap Control、Automatic distance adjustment 及选装脚注：锡林针布盖板针布接口及选装控制案例。仅历史配置；不采用普遍间隙、针布规格、制造强度、质量或寿命。 |
| `dmg-factory` | literature | [DMG MORI Technology Excellence 01–2022](https://en.dmgmori.com/resource/blob/626730/cde70e4767e83788dd7d9fd44f6c05b0/j221en-data.pdf) | PDF 及印刷第 56 页 Trützschler Textile Machinery Shanghai 案例：历史开清棉梳棉并条机械制造装配及加工中心应用。仅厂内部件加工与配置装配案例；不规定机床品牌、现行工厂活动、涂料配方、效率或整机质量。 |
| `truetz-preparation` | literature | [Trützschler Ring spinning applications](https://www.truetzschler.com/en/spinning/applications/ring-spinning/) | Combed cotton、Carded cotton/pure man-made fibres、Material blends 及 Overview of our solutions 段：短纤准备中开松混合梳棉并条成卷精梳替代配置；2026-10-04 UTC 获取。仅产品边界证据，不说明环锭纺机制造、纤维试验配方、产率或制造量值。 |
