---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.nonwoven-needle-punching-machinery
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非织造平面针刺机械制造

## 1. 范围与适用性

本 PCR 覆盖新制完整电驱平面针刺机制造，通过往复带刺毡针机械固结纤网。预针刺及整理主针刺、单面上下或双区机器、垂直椭圆针梁驱动分别声明配置。制造始于报告场址接收有文件支持坯料部件，结束于声明出厂门工厂验收。这是前景接收到出厂模块；完整摇篮到大门声明须匹配上游链接并披露覆盖。

排除纤维开松梳理、交叉铺网成网、热化学粘合、水刺、外部牵伸轧光卷绕设备、完整生产线、圆筒无端毛毡机、特殊叉形冠形针起绒花纹机、簇绒缝纫针织、单独销售针板毡针备件、旧机翻新、客户纺厂安装使用、布生产维护及报废。整体喂入输出专用选装驱动控制保留首次加注仅在声明整机交付中包含时纳入。制造商案例说明可能配置，不设普遍路线针型净重量寿命或制造强度。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.nonwoven-needle-punching-machinery |
| classification_refs | CPC 3.0 44629，其他纺织和服装生产机械（未另说明）；较窄平面针刺制造边界，仅分类背景 |
| covered_products | 新制完整平面预主针刺机，具有带刺毡针及声明往复驱动 |
| excluded_products | 其他固结成网设备、起绒无端毛毡机、独立部件及布生产服务 |
| representative_product | 一台序列号明确验收针梁针板驱动配置，实测净 M，不假定每台质量 |
| production_route | 实际条件机架精密准备表面处理，必需针刺区驱动控制集成工厂验收；实际存在时纤网试验包装 |
| market_state | 声明工厂出厂门处验收完整针刺机，明确整体模块首次加注完整性 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造配置完整平面非织造针刺机 |
| How much | 1 kg 验收完整机器净质量，使用实测 M 从按台记录换算 |
| How well | 记录图纸特定针梁针板针对中时序驱动安全验收；不表示等质量布质产能等效 |
| How long or cycle | 一次制造工厂验收周期；不规定整机毡针寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他纺织和服装生产机械（未另说明） `5d83540a-6bb1-4bdb-b4b8-b490f6af158e` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造商型号；序列号图纸配置版本；平面预主针刺功能及预定纤网；工作幅宽；针刺方向；区针梁针板数量布置；垂直椭圆轨迹导向驱动结构；带刺针号类型针型安装数量；裸板已植针板供应商范围；托剥网板孔型安装间隙行程验收；整体喂入输出驱动控制防护联锁；包含风机气动换板选装；供应商模块完整性；保留油脂配方；运输拆卸整体件；实测净 M、秤校准皮重；场址时期实际制造路线门点未链接上游阶段 |

每项限定信息在数据集元数据过程说明参考流备注声明。公开已制造纺织机械流较宽；必需限定将其限制在本机器边界。M 包含完整验收配置、安装毡针模块保留首次加注及另称运输拆卸整体件。排除试验纤网布操作员运输包装额外备用毡针针板外部公用工程。目录幅宽针刺频率针刺密度换油周期及运输质量不能确定净 M 或制造耗用。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `gas_volume` | curing_gas | Volume | m3 | 保持实际管供燃气体积计量成分参考压力温度。实际内部参考属性 1 为 Volume；替代 Mass 的 meanValue 1 不是密度。 |
| `energy_conversion` | electricity | Net calorific value | MJ | 实测 kWh 按已核验单位组因子 3.6 MJ/kWh 换算；声明供电电压地域提供者。安装电机 kW 不是耗用能量。 |
| `liquid_mass` | liquid exchanges | Mass | kg | 称量实际液体配方或采用声明成分浓度温度下实测密度换算体积；纯组分不是预混产品。 |
| `air_volume` | compressed_air | Volume | m3 | 保持实际压缩空气仪表压力温度供应商基准；无实测压缩机记录时不得替换环境空气资源或 kWh。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告制造场址接收有文件支持外购坯料成品总成 |
| starting_condition_role | 前景接收到出厂制造模块 |
| product_classification_scope | 完整平面带刺针机械固结机，不是非织造布或整线 |
| recursive_input_rule | 不得从本相同参考产出递归生成供入完整针刺机模块；披露既有完成状态并省略已完成内部操作 |
| upstream_dataset_requirement | 匹配坯料部件毡针类型模块完整性技术供入状态地域属性；完整摇篮到大门声明前披露未链接上游 |
| disclosure | 功能配置门点场址时期实际制造采购路线首次加注 M、工厂试验部件排除身份量值缺口 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground` | all processes | 纳入实际制造安装润滑返工可归属工厂验收。排除纺厂生产使用安装服务门外运输维护报废。客户布生产设置能耗强度不能替代工厂机器制造。 |  |
| `boundary_components` | supplier assemblies | 配置裸板单独安装针或完整已植针板仅计一次。同样避免驱动导向预加润滑剂整体控制重复。中央纺厂空气除尘外部成网整理从机器质量排除。 | `andritz-needlepunch` |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 机架与外壳制造 | conditional | 指定机架外壳在报告场址制造。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `precision` | 精密驱动与孔板准备 | conditional | 驱动部件针板托网板剥网板在前景中加工。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `finishing` | 条件清洗与表面处理 | conditional | 声明部件在本前景清洗或涂装。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `mechanical` | 针刺区与往复驱动集成 | required | 每台完整配置平面针刺机。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `drive_controls` | 电驱控制与安装选装 | required | 每台配置电驱针刺机。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `acceptance` | 工厂装配润滑与验收 | required | 每台验收完整机器。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `web_trial` | 条件工厂纤网试验 | conditional | 实际机器在工厂验收中实施喂纤网试验。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `packing` | 出厂包装 | conditional | 实际包装越过声明出厂门。 | foreground | 一台验收配置机器，使用 M 归一化 |

实际条件机架精密准备表面处理供入针刺区驱动集成工厂验收。喂网试验包装为条件过程。外购成品模块跳过组成操作。每行仅在精确材质供应商边界发生时适用，包括必需阶段内的行。数据集完成前核对完整配置物料表，增列每项遗漏实际部件试剂公用工程及已证实废物排放。

### 过程：机架与外壳制造 (`fabrication`)

按图纸切割成形连接实际针刺机机架板型材。铸造机架或外购完整机架采用实际供入路线；不假定本场址实施铸造焊接。自保护焊丝为一种条件焊接规程；其他实际焊丝、每项保护气、电焊条及残渣另列行。

#### 输入

##### 产品流

###### 未镀层冷轧低碳钢薄板 (`steel_sheet`)

仅限有文件支持机架外壳薄板，记录牌号厚度及实测领退平衡。

- 选定流：未镀层冷轧低碳钢薄板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`dilo-loom`

###### 药芯焊丝 (`self_shield_wire`)

仅限匹配焊接规程实际自保护碳钢药芯焊丝；其他保护技术须不同焊丝气体行。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`dilo-loom`

###### 工厂进线处电网交流电 (`fabrication_electricity`)

仅限声明电压地域提供者下可归属计量制造工厂试验电力；不计客户布生产使用。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`dilo-loom`

#### 输出

##### 废物流

###### 钢废料，边角料 (`steel_offcut`)

仅限内部复用后输出洁净分类未处理未镀层钢边角料；记录去向。

- 选定流：钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`dilo-loom`

### 过程：精密驱动与孔板准备 (`precision`)

记录偏心轴轴承座、针板孔及板接口的实际车铣钻磨，采用图纸特定公差孔型。DILO 记录 Eberbach 针板机加工；不要求其他工厂采用相同工具品牌或厂内路线。外购成品针板针梁及驱动跳过组成机加工。不假定机器装配场址实施毡针钢丝成形热处理或刺齿加工。

#### 输入

##### 产品流

###### 冷精整碳钢偏心轴棒料毛坯 (`steel_bar`)

仅限实际内部轴制造，记录牌号状态实测毛坯质量；外购成品驱动省略。

- 选定流：冷精整碳钢偏心轴棒料毛坯
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_precision。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_precision`
- 来源：`dilo-loom`

###### 灰铸铁针刺机机架铸件毛坯 (`cast_blank`)

仅限文件支持灰铁毛坯机加工，记录合金合格部件质量；未实施时不含铸造。

- 选定流：灰铸铁针刺机机架铸件毛坯
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_precision。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_precision`
- 来源：`dilo-loom`

###### 配方矿物油水机加工乳化液 (`cutting_emulsion`)

仅限供入预混液，记录实际安全数据表浓度实测补加；分别配混组分须各自行。

- 选定流：配方矿物油水机加工乳化液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_precision。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_precision`
- 来源：`dilo-loom`

###### 工厂进线处电网交流电 (`precision_electricity`)

仅限声明电压地域提供者下可归属计量制造工厂试验电力；不计客户布生产使用。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_precision。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_precision`
- 来源：`dilo-loom`

#### 输出

##### 废物流

###### 钢废料，机加工切屑 (`steel_chips`)

仅限内部回收后输出分类洁净未处理钢机加工切屑；含油混合合金切屑另列。

- 选定流：钢废料，机加工切屑 `7f46756b-6f66-46a7-bbcb-c04727d9d19e`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_precision。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_precision`
- 来源：`dilo-loom`

###### 分类灰铸铁机加工切屑 (`iron_chips`)

仅限实际输出灰铁切屑，记录污染接收出口。

- 选定流：分类灰铸铁机加工切屑
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_precision。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_precision`
- 来源：`dilo-loom`

###### 废切削液 (`spent_emulsion`)

仅限实际送厂外处理废矿物油水机加工乳化液，记录成分浓度污染移交凭据；不作直接环境水排放。

- 选定流：废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_precision。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_precision`
- 来源：`dilo-loom`

### 过程：条件清洗与表面处理 (`finishing`)

记录实际清洗涂装路线及安全数据表；粉末涂料须前景确认条件配方，不是普遍针刺机涂层。外购已表面处理件跳过。每项实际脱脂剂磨料预处理剂湿涂组分另列行。计量实际固化清洗资源；捕集残渣不自动成为空气水排放。

#### 输入

##### 产品流

###### 涂料（粉末） (`powder_coating`)

仅限文件支持供入干粉涂料，记录精确树脂牌号领退平衡固化保留；不设普遍配方。

- 选定流：涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：

###### 工艺用水 (`cleaning_water`)

仅限实际供入处理工业清洗水；内部循环不作为新水水资源取用。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：

###### 气态天然气 (`curing_gas`)

仅限文件支持固化燃烧器实际管供气态天然气；保留成分仪表参考压力温度。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：

###### 工厂进线处电网交流电 (`finishing_electricity`)

仅限声明电压地域提供者下可归属计量制造工厂试验电力；不计客户布生产使用。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：

#### 输出

##### 废物流

###### 送处理的金属部件清洗水性废液 (`cleaning_effluent`)

仅限输出实际清洗废液，记录溶解夹带成分处理出口。

- 选定流：送处理的金属部件清洗水性废液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：

###### 捕集固化热固性粉末涂料残渣 (`powder_residue`)

仅限收集实际固化涂料残渣；可复用未固化过喷为内部回收。

- 选定流：捕集固化热固性粉末涂料残渣
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：

#### 输出

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2`)

仅限实际工厂固化燃烧中可归属实测化石 CO2，排至空气未指定子介质；不设普遍发生或虚构因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：

### 过程：针刺区与往复驱动集成 (`mechanical`)

安装配置机架、针梁针板、带刺毡针、托网板剥网板、针梁导向、实际曲柄偏心连杆及喂入输出机构。单面上下或双区布置、垂直椭圆轨迹分别记录。单双针梁为替代配置，不设普遍固定数量。针型与板孔匹配，按图纸核验安装对中及实际间隙行程时序。供入已植针板及集成驱动总成不得再次采购所含毡针或组成。

#### 输入

##### 产品流

###### 成品针刺机机架总成 (`frame`)

仅限具名独立供入成品总成；记录实际材质图纸版本实测质量。省略供应商已含组成或内部转入。

- 选定流：成品针刺机机架总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`dilo-range`

###### 针刺机往复针梁总成 (`needle_beam`)

仅限具名独立供入成品总成；记录实际材质图纸版本实测质量。省略供应商已含组成或内部转入。声明实际针梁材质导向包含范围；垂直椭圆轨迹分开。

- 选定流：针刺机往复针梁总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`dilo-range`

###### 未植针孔型针刺机针板 (`needle_board`)

仅限具名独立供入成品总成；记录实际材质图纸版本实测质量。省略供应商已含组成或内部转入。声明针板材质孔型并排除已植毡针。

- 选定流：未植针孔型针刺机针板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`dilo-range`

###### 成品带刺钢毡针 (`felting_needle`)

仅限具名独立供入成品总成；记录实际材质图纸版本实测质量。省略供应商已含组成或内部转入。仅限安装带刺毡针；采集针号刺齿型数量供入质量；缝针及叉形冠形起绒针不同。

- 选定流：成品带刺钢毡针
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`dilo-range`

###### 孔型针刺机托网板总成 (`bedplate`)

仅限具名独立供入成品总成；记录实际材质图纸版本实测质量。省略供应商已含组成或内部转入。匹配实际针孔型声明针板位置。

- 选定流：孔型针刺机托网板总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`dilo-range`

###### 孔型针刺机剥网板总成 (`stripper_plate`)

仅限具名独立供入成品总成；记录实际材质图纸版本实测质量。省略供应商已含组成或内部转入。声明板间隙接口及快换包含范围。

- 选定流：孔型针刺机剥网板总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`dilo-range`

###### 针刺机偏心驱动轴总成 (`eccentric_shaft`)

仅限具名独立供入成品总成；记录实际材质图纸版本实测质量。省略供应商已含组成或内部转入。仅限实际安装偏心路线；不设固定曲柄针梁数量。

- 选定流：针刺机偏心驱动轴总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`dilo-range`

###### 针刺机连杆总成 (`connecting_rod`)

仅限具名独立供入成品总成；记录实际材质图纸版本实测质量。省略供应商已含组成或内部转入。仅限实际配置连杆，记录导向轴承包含范围。

- 选定流：针刺机连杆总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`dilo-range`

###### 针刺机纤网喂入罗拉总成 (`feed_roller`)

仅限具名独立供入成品总成；记录实际材质图纸版本实测质量。省略供应商已含组成或内部转入。仅限整体喂入器；独立交叉铺网机排除。

- 选定流：针刺机纤网喂入罗拉总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`dilo-range`

###### 针刺机纤网输出罗拉总成 (`delivery_roller`)

仅限具名独立供入成品总成；记录实际材质图纸版本实测质量。省略供应商已含组成或内部转入。仅限整体输出；外部轧光卷绕设备排除。

- 选定流：针刺机纤网输出罗拉总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`dilo-range`

###### 钢制深沟球轴承 (`ball_bearing`)

仅限具名独立供入成品总成；记录实际材质图纸版本实测质量。省略供应商已含组成或内部转入。仅限实际深沟构造。

- 选定流：钢制深沟球轴承
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`dilo-range`

###### 硫化橡胶针刺机传动带 (`drive_belt`)

仅限具名独立供入成品总成；记录实际材质图纸版本实测质量。省略供应商已含组成或内部转入。仅限实际传动带；输送带为不同交换。

- 选定流：硫化橡胶针刺机传动带
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`dilo-range`

###### 钢螺钉 (`steel_screw`)

仅限独立领用实际钢螺钉；螺母螺栓垫圈为不同部件。

- 选定流：钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`dilo-range`

###### 工厂进线处电网交流电 (`mechanical_electricity`)

仅限声明电压地域提供者下可归属计量制造工厂试验电力；不计客户布生产使用。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical`
- 来源：`dilo-range`

### 过程：电驱控制与安装选装 (`drive_controls`)

安装声明电机驱动电控柜线束联锁传感。记录偏心主驱动同步及实际安装调速位置反馈。ANDRITZ 将间歇气吹抽吸及气动针板定位列为选装；不将纺厂中央空气除尘站计入机器 M。专用风机气缸模块仅在声明交付包含时纳入。实际采用时增列精确独立供入气动部件及实际工厂压缩空气交换。

#### 输入

##### 产品流

###### 三相鼠笼异步驱动电机 (`motor`)

仅限具名独立供入成品总成；记录实际材质图纸版本实测质量。省略供应商已含组成或内部转入。仅限实际独立供入安装模块；抽吸定位为条件选装。

- 选定流：三相鼠笼异步驱动电机
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_drive_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drive_controls`
- 来源：`andritz-needlepunch`

###### 专用针刺机控制器模块 (`controller`)

仅限具名独立供入成品总成；记录实际材质图纸版本实测质量。省略供应商已含组成或内部转入。仅限实际独立供入安装模块；抽吸定位为条件选装。

- 选定流：专用针刺机控制器模块
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_drive_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drive_controls`
- 来源：`andritz-needlepunch`

###### 绝缘铜针刺机线束 (`harness`)

仅限具名独立供入成品总成；记录实际材质图纸版本实测质量。省略供应商已含组成或内部转入。仅限实际独立供入安装模块；抽吸定位为条件选装。

- 选定流：绝缘铜针刺机线束
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_drive_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drive_controls`
- 来源：`andritz-needlepunch`

###### 针刺机驱动旋转编码器模块 (`encoder`)

仅限具名独立供入成品总成；记录实际材质图纸版本实测质量。省略供应商已含组成或内部转入。仅限实际独立供入安装模块；抽吸定位为条件选装。

- 选定流：针刺机驱动旋转编码器模块
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_drive_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drive_controls`
- 来源：`andritz-needlepunch`

###### 专用离心针刺机抽吸风机 (`extraction_fan`)

仅限具名独立供入成品总成；记录实际材质图纸版本实测质量。省略供应商已含组成或内部转入。仅限实际独立供入安装模块；抽吸定位为条件选装。

- 选定流：专用离心针刺机抽吸风机
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_drive_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drive_controls`
- 来源：`andritz-needlepunch`

###### 针板定位气缸总成 (`pneumatic_cylinder`)

仅限具名独立供入成品总成；记录实际材质图纸版本实测质量。省略供应商已含组成或内部转入。仅限实际独立供入安装模块；抽吸定位为条件选装。

- 选定流：针板定位气缸总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_drive_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drive_controls`
- 来源：`andritz-needlepunch`

###### 变频驱动器 (`drive_inverter`)

仅限独立供入实际变频器，包含功率电子外壳散热结构；核验额定值完整性，避免驱动柜重复。公开身份为专家估算外购部件，不提供制造强度。

- 选定流：变频驱动器 `c14b641c-8fbe-40c4-843b-3cc9b0faeff3`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_drive_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drive_controls`
- 来源：`andritz-needlepunch`

###### 供工厂气动选装试验的压缩空气 (`compressed_air`)

仅限实际计量工厂试验空气，记录压力温度供入范围；不作自然空气资源或纺厂作业空气。

- 选定流：供工厂气动选装试验的压缩空气
- 流属性/单位：Volume / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_drive_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drive_controls`
- 来源：`andritz-needlepunch`

###### 工厂进线处电网交流电 (`drive_controls_electricity`)

仅限声明电压地域提供者下可归属计量制造工厂试验电力；不计客户布生产使用。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_drive_controls。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drive_controls`
- 来源：`andritz-needlepunch`

### 过程：工厂装配润滑与验收 (`acceptance`)

核验配置物料表、毡针针板安装、往复轨迹、板对中间隙、导向状态、首次润滑、喂入输出同步、防护联锁及实际运行准则。纳入可归属工厂运行返工。验收不确认客户布质生产率磨损寿命或维护间隔。清除试验纤维后称验收净 M；安装首次加注保留在 M 中。

#### 输入

##### 产品流

###### 锂皂矿物油轴承润滑脂 (`first_fill_grease`)

仅限文件支持实际首次加注；供应商预润滑轴承不重复加脂。

- 选定流：锂皂矿物油轴承润滑脂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`andritz-needlepunch`

###### 润滑油 (`first_fill_oil`)

仅限文件支持实际石油来源矿物润滑油配方驱动首次加注，记录牌号添加剂保留质量；PAO 合成油或纤维油剂须不同身份。不重复供应商预加油驱动。流发热量不用于计算加注质量工厂能量。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`andritz-needlepunch`

###### 工厂进线处电网交流电 (`acceptance_electricity`)

仅限声明电压地域提供者下可归属计量制造工厂试验电力；不计客户布生产使用。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`andritz-needlepunch`

#### 输出

##### 产品流

###### 其他纺织和服装生产机械（未另说明） (`finished_machine`)

严格为 1 kg 验收完整配置平面针刺机净质量，包含安装针梁针板毡针板、整体驱动控制及保留首次加注；排除试验纤网包装额外备件。

- 选定流：其他纺织和服装生产机械（未另说明） `5d83540a-6bb1-4bdb-b4b8-b490f6af158e`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`andritz-needlepunch`

### 过程：条件工厂纤网试验 (`web_trial`)

记录实际试验纤网成分既有固结水分、实测领退平衡及可归属电力；仅工厂机器验收，不是布生产服务。PET 未固结纤网行为条件适用，不设普遍试验配方。其他纤维混纺须精确另列行。内部回收纤网不重复新领用；对外可售试验布须共产品决定。

#### 输入

##### 产品流

###### 供工厂试验的未固结原生 PET 短纤维网 (`pet_web`)

仅限实际指定试验纤网，记录纤维来源油剂面密度水分及既有固结；不作成品非织造布。

- 选定流：供工厂试验的未固结原生 PET 短纤维网
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_web_trial。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_web_trial`
- 来源：`groz-needles`

###### 工厂进线处电网交流电 (`web_trial_electricity`)

仅限声明电压地域提供者下可归属计量制造工厂试验电力；不计客户布生产使用。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_web_trial。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_web_trial`
- 来源：`groz-needles`

#### 输出

##### 废物流

###### 废弃聚对苯二甲酸乙二醇酯 (`pet_trial_waste`)

仅限内部回收后输出分类文件支持 PET 试验网布废料，记录油剂污染接收路线；不替代混纤或粘合多聚合物废物。废 PET 身份包括纺织品，不提供处理过程回收抵扣。

- 选定流：废弃聚对苯二甲酸乙二醇酯 `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_web_trial。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_web_trial`
- 来源：`groz-needles`

### 过程：出厂包装 (`packing`)

称量每项实际运输支撑防护膜，从机器 M 排除。运输拆卸整体部件保留在称量整机完整性中。单独销售额外针板备用毡针工具排除。其他包装周转支撑须材质专用行及实测复用记录。

#### 输入

##### 产品流

###### 窑干锯材（针叶材） (`timber_support`)

仅限实际窑干针叶锯材支撑，实测质量从 M 排除。

- 选定流：窑干锯材（针叶材） `50904047-e5b0-4110-990a-53751d250267`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

###### 低密度聚乙烯薄膜（PE-LD） (`ldpe_film`)

仅限实际 LDPE 防护膜，记录厚度实测质量，从 M 排除。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_order` | shared operations | 按工单分离型号幅宽针梁区行程轨迹安装选装；优先直接归属领退仪表验收返工。不可分离共用制造资源采用实测因果工位时间负荷，份额 = 工单驱动量 / 全部覆盖工单驱动量总和；记录因果时期分母。不允许不同针刺结构无解释等台数分配。 |  |
| `allocation_reuse` | scrap and trials | 内部回收库存纤网为转移，不重复新投入。输出切屑残渣 PET 试验废料保留实测质量去向，不自动抵扣避免产品。可售试验布其他共产品须单独决定，直接分离后取得经审查剩余分配。声明时期拒收返工设备负担纳入验收产出并核对在制库存。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | 验收整机净质量 | weighing_record | 型号；配置；序列号；验收净质量 M；秤编号；校准；区针梁针板包含范围；安装毡针；保留油脂；拆卸整体件；已清除试验纤网；包装皮重 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 逐台或同配置代表性批次 | 同工单制造时期 | 声明工厂配置 | 每台验收净质量 | 校准皮重完整性验收凭据 |
| `cp_fabrication` | fabrication | 逐原子交换 | measured_order_record | 工单；序列号配置；图纸材质版本；针型数量；针板孔型；供应商范围；领用；退回；库存变化；交换量；部件质量；仪表单位；电压；燃气空气压力温度；配方浓度密度；验收台数；返工；分配驱动量；试验网退回；废物出口；实测排放质量 | 称量实际牌号尺寸坯料领退、机架质量及分类边角料；保留图纸版本、焊接规程、返工及工位电力。 | 各行声明 kg、MJ 或 m3 | 逐工单，批次核对 | 连续声明制造时期 | 机架与外壳制造 | 可归属交换数量 / 验收机器数量 | 物料表称量分表校准试验移交凭据 |
| `cp_precision` | precision | 逐原子交换 | measured_order_record | 工单；序列号配置；图纸材质版本；针型数量；针板孔型；供应商范围；领用；退回；库存变化；交换量；部件质量；仪表单位；电压；燃气空气压力温度；配方浓度密度；验收台数；返工；分配驱动量；试验网退回；废物出口；实测排放质量 | 记录部件毛坯材质图纸版本、合格质量、机时、孔型检验、实际切削液配方浓度、补加退回、分收切屑废液出口及工位仪表。 | 各行声明 kg、MJ 或 m3 | 逐工单，批次核对 | 连续声明制造时期 | 精密驱动与孔板准备 | 可归属交换数量 / 验收机器数量 | 物料表称量分表校准试验移交凭据 |
| `cp_finishing` | finishing | 逐原子交换 | measured_order_record | 工单；序列号配置；图纸材质版本；针型数量；针板孔型；供应商范围；领用；退回；库存变化；交换量；部件质量；仪表单位；电压；燃气空气压力温度；配方浓度密度；验收台数；返工；分配驱动量；试验网退回；废物出口；实测排放质量 | 保留实际配方供应商范围、批次领退平衡、涂装质量、水、废液残渣移交、固化燃料仪表状态及实际存在时可归属实测燃烧排放。 | 各行声明 kg、MJ 或 m3 | 逐工单，批次核对 | 连续声明制造时期 | 条件清洗与表面处理 | 可归属交换数量 / 验收机器数量 | 物料表称量分表校准试验移交凭据 |
| `cp_mechanical` | mechanical | 逐原子交换 | measured_order_record | 工单；序列号配置；图纸材质版本；针型数量；针板孔型；供应商范围；领用；退回；库存变化；交换量；部件质量；仪表单位；电压；燃气空气压力温度；配方浓度密度；验收台数；返工；分配驱动量；试验网退回；废物出口；实测排放质量 | 将幅宽针刺方向区针梁针板配置、导向驱动结构、针号刺齿型与安装数量、裸板已植针板范围、板孔型及供应商模块完整性追溯称量物料表安装检验。 | 各行声明 kg、MJ 或 m3 | 逐工单，批次核对 | 连续声明制造时期 | 针刺区与往复驱动集成 | 可归属交换数量 / 验收机器数量 | 物料表称量分表校准试验移交凭据 |
| `cp_drive_controls` | drive_controls | 逐原子交换 | measured_order_record | 工单；序列号配置；图纸材质版本；针型数量；针板孔型；供应商范围；领用；退回；库存变化；交换量；部件质量；仪表单位；电压；燃气空气压力温度；配方浓度密度；验收台数；返工；分配驱动量；试验网退回；废物出口；实测排放质量 | 记录电机驱动额定值柜体完整性、控制器版本、编码器技术、风机气缸包含范围及实测净质量；保留接线联锁同步及计量试验。 | 各行声明 kg、MJ 或 m3 | 逐工单，批次核对 | 连续声明制造时期 | 电驱控制与安装选装 | 可归属交换数量 / 验收机器数量 | 物料表称量分表校准试验移交凭据 |
| `cp_acceptance` | acceptance | 逐原子交换 | measured_order_record | 工单；序列号配置；图纸材质版本；针型数量；针板孔型；供应商范围；领用；退回；库存变化；交换量；部件质量；仪表单位；电压；燃气空气压力温度；配方浓度密度；验收台数；返工；分配驱动量；试验网退回；废物出口；实测排放质量 | 采集序列号关联尺寸时序安装振动及安全功能验收记录；测实际首次油脂、试验电力及验收净质量，保留校准皮重。 | 各行声明 kg、MJ 或 m3 | 逐工单，批次核对 | 连续声明制造时期 | 工厂装配润滑与验收 | 可归属交换数量 / 验收机器数量 | 物料表称量分表校准试验移交凭据 |
| `cp_web_trial` | web_trial | 逐原子交换 | measured_order_record | 工单；序列号配置；图纸材质版本；针型数量；针板孔型；供应商范围；领用；退回；库存变化；交换量；部件质量；仪表单位；电压；燃气空气压力温度；配方浓度密度；验收台数；返工；分配驱动量；试验网退回；废物出口；实测排放质量 | 分别称声明试验纤网、复用退回、残余库存及输出试验废料；保留聚合物来源固结状态污染、试验机器日志及接收出口。 | 各行声明 kg、MJ 或 m3 | 逐工单，批次核对 | 连续声明制造时期 | 条件工厂纤网试验 | 可归属交换数量 / 验收机器数量 | 物料表称量分表校准试验移交凭据 |
| `cp_packing` | packing | 逐原子交换 | measured_order_record | 工单；序列号配置；图纸材质版本；针型数量；针板孔型；供应商范围；领用；退回；库存变化；交换量；部件质量；仪表单位；电压；燃气空气压力温度；配方浓度密度；验收台数；返工；分配驱动量；试验网退回；废物出口；实测排放质量 | 按出厂配置称材质专用包装，核对退回皮重并记录实际支撑周转次数。 | 各行声明 kg、MJ 或 m3 | 逐工单，批次核对 | 连续声明制造时期 | 出厂包装 | 可归属交换数量 / 验收机器数量 | 物料表称量分表校准试验移交凭据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

同质配置工单核对新领用减退回库存变化实际公用工程已证实排放；采用有记录共用份额，再将可归属总量除以验收台数得到 q_item。除以相同实测交付状态净 M。燃气空气保持有记录仪表条件下每 kg 的 m3，电力每 kg 的 MJ，所有质量交换每 kg 的 kg。实际毡针数量支持物料表完整性；供应商包束数量或目录针号不是普遍质量因子。兼容净质量可变化：保留逐序列号记录，将可归属总量除以验收净质量总和；不兼容配置仍分开。未知数量为缺口，不默认零。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_bom` | all components | 将机架针梁导向裸板已植针板毡针质量数量板曲柄偏心连杆喂入输出驱动控制首次加注与完整配置物料表供应商范围核对。避免模块内部重复及工厂试验网库存进入 M。 | 配置物料表供应商范围称量 |
| `quality_balance` | mass and utilities | 核对领退安装 M、切屑残渣移交、保留试验润滑剂试验网返工；保留称量仪表校准实际配方状态换算。场址配置 QA 限值来自实测，不采用假定成材率毡针寿命目录速度幅宽。 | 称量库存仪表试验移交凭据 |
| `quality_coverage` | all processes | 声明时期地域路线型号覆盖实际条件缺席外包身份量值缺口不确定性上游链接。制造商配置能力来源不提供净 M 或制造交换强度。 | 工单覆盖与证据登记 |


## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | 要求正实测 M、完整平面带刺针配置，声明针梁区针板安装针板驱动控制整体交付保留首次加注。拒绝布产出机器产能服务作为参考替代。 |  |
| `validate_identity` | inventory rows | 每行为单一物理明确交换，匹配公开身份实际参考属性单位组路线介质。缝针不是毡针；裸板已植针板范围不得重叠；PAO 润滑油不是矿物油；技术圈压缩空气不是环境空气取用。不兼容身份保持未解决。 |  |
| `validate_conversion` | inventory rows | 核验 cp_mass 及 normalize_mass 对应相同验收配置时期精确燃气空气仪表基准电力单位。拒绝外购模块组成保留润滑剂回收试验网领用重复；未知不默认零。 |  |
| `validate_emissions` | elementary rows | 化石 CO2 须实际可归属工厂燃烧实测及空气未指定子介质。其他已证实物质介质须另列行；仅机加工粉末涂料试验网不确认必然排放。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置平面非织造针刺机前景制造数据集 |
| downstream_use | secondary_dataset；background_dataset，经合格审查且上游覆盖声明后 |
| allowed_use | 匹配功能针梁针板驱动配置交付状态门点场址时期的制造供应链建模 |
| excluded_use | 非织造布产出寿命服务比较等质量针刺性能特殊起绒无端毛毡机及上游缺失时完整摇篮到大门声明 |
| required_metadata | 参考限定完整配置物料表实测 M 首次加注供入针板针范围实际操作试验场址时期门点采集分配凭据上游链接 |
| required_quality_disclosure | 身份量值缺口不确定性条件缺席行增列物料表交换来源版次限制未链接供应商上游阶段 |
| update_trigger | 幅宽区针梁轨迹针板毡针板孔型驱动控制选装供应商完整性 M 加注表面路线工厂时期地域或证据解决变化 |


## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `dilo-loom` | literature | [DILO Needlelooms](https://www.dilo.de/en/machines/needlelooms/) | Needlelooms 关于单双椭圆针梁布置及 Eberbach 针板机加工段；2026-10-04 UTC 快照。仅具体制造配置案例；不规定普遍针板材质针数资源效率整机质量寿命。 |
| `dilo-range` | literature | [DILO Universal and high capacity needlelooms](https://www.dilo.de/en/machines/needlelooms/diloom-range/) | OU/OUG 段及 specific-feature 清单：OU 分离驱动板、摇臂导向中央润滑针板夹持；2026-10-04 UTC 快照。仅结构案例，不代表全部制造商；营销速度尺寸寿命换板时间不作要求换算因子。 |
| `andritz-needlepunch` | literature | [ANDRITZ Increase your success with needlepunch, PNT.np.02.eng.07.25](https://www.andritz.com/resource/blob/334550/378a2fd581935553eb728ad6da438e72/brochure-needlepunch-line-solutions-data.pdf) | ©2025 册，PDF 及印刷第 38 页 Needlelooms 及 optional-equipment 栏：油润滑模块针板托剥网板配置；抽吸气吹气动定位明确选装。仅产品案例；不规定润滑剂成分换油寿命间隔速度幅宽制造量值。 |
| `groz-needles` | literature | [Groz-Beckert Products and services for the Nonwovens industry, EN 02.2026](https://www.groz-beckert.com/mm/media/en/web/pdf/Felting.pdf) | PDF 及印刷第 11 页 felting/structuring 产品：带刺毡针几何与用于已固结纤网的叉形冠形起绒工具区分。仅工具边界证据；不提供精确钢牌号安装数量磨损寿命试验配方整机质量。 |
