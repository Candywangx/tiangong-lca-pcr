---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.non-energetic-weapon-environmental-manufacturing
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 完整新非含能武器制造环境账目

## 1. 范围与适用性

一个声明完整新非含能武器或枪械在生产者验收门点的制造环境账目。重型及小型产品族共享核算方法，但配置、实际化学废物接口及供应门点分别限定。范围涵盖采购、实际现场制造环境总量、条件处理回收、非功能性放行记录及交付保护。不提供武器设计、构造功能零件清单、制造设置、配方、组装或操作说明。

弹药及含能材料装料或其处理；不可分含能内容产品；独立供应零件；仪礼刃具；旧品翻新及修复；使用、功能实弹试验、部署、厂门后储存及寿命终结。实际发生被排除工厂活动须披露覆盖缺口，非零负担。

分区为环境账，不是制造顺序。HK 监测及 NYDEC 重型场址历史支持分别限定环境接口；二者不提供当前产品数量或已完成当前闭合。须采集下述当前记录。不由公开报告推断化学品发生、铬替代已完成或共同强度。运行接收到验收前景未有核验匹配上游链接及披露排除贡献时非完整从摇篮到厂门。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.non-energetic-weapon-environmental-manufacturing |
| classification_refs | CPC3.0 44720 及44730；须范围审查的 proxy 候选背景，非已接受映射 |
| covered_products | 一个声明完整新非含能武器或枪械在生产者验收门点的制造环境账目。重型及小型产品族共享核算方法，但配置、实际化学废物接口及供应门点分别限定。范围涵盖采购、实际现场制造环境总量、条件处理回收、非功能性放行记录及交付保护。不提供武器设计、构造功能零件清单、制造设置、配方、组装或操作说明。 |
| excluded_products | 弹药及含能材料装料或其处理；不可分含能内容产品；独立供应零件；仪礼刃具；旧品翻新及修复；使用、功能实弹试验、部署、厂门后储存及寿命终结。实际发生被排除工厂活动须披露覆盖缺口，非零负担。 |
| representative_product | 一件按中性配置及交付状态识别的验收完整新非含能产品 |
| production_route | 不含操作内容环境报告门点：采购库存；实际现场制造账；条件处理回收账；验收质量放行；共用公用工程；条件保护。重型小型配置分别保留 |
| market_state | 声明生产者门点完整新非含能验收产品，须实际生产者放行记录 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 指定完整验收非含能产品制造环境核算 |
| How much | 1 kg 验收净质量；按件交换以实测 M 归一化 |
| How well | 同有记录配置交付状态及受控非功能性验收记录；不声称操作等价或性能指标 |
| How long or cycle | 一次实际制造验收周期；不假定寿命部署或功能使用周期 |
| reference_flow_link | accepted_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收完整新非含能武器 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 中性产品族配置及验收放行标识；完整新非含能交付状态；生产者场址报告时期；实际验收数量；正净 M kg、实体质量来源及受控验收记录；包装夹具排除；环境自制采购外包门点；化学供应安全数据单状态及适用时铬分析价态；实际新增供应对回收库存平衡；废水污泥含油屑接收方及湿干基准；因果共用分配；遗漏未披露排除活动及上游不确定性 |

在元数据等说明声明限定。一计量对象为一件完整验收产品，非采购库存或独立交付零件。永久验收内容计入；弹药含能装料、试验耗材、运输包装及可拆夹具排除净 M。等 kg 不建立等功能性能或跨产品族可比性。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量,单位 kg; 使用 cp_mass 采集。 |
| `mass_record_provenance` | cp_mass | Mass | kg | 受控验收质量须源自当前同交付完整对象可追溯实体称重及实测皮重。实体方法如分部分称量，须独立核对完整质量平衡、可追溯校准读数及纳排登记；不公开设计或功能部件清单。保留日期配置原方法不确定性签字放行。目录重理论密度额定能力运输毛重或未核对合计不能建立 M。须未来正实测 M，不假定质量。 |
| `energy_units` | 各电力行 | Net calorific value | MJ | 用核验 1 kWh = 3.6 MJ 换算。保留实际供应电压及含待机计量范围；不以额定功率企业均强度替代。阶段共用仪表核对一次。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际接收实体供应及供应制造门点，含期初期末库存 |
| starting_condition_role | 接收到验收产品运行前景；boundary_abstraction |
| product_classification_scope | 一个声明完整新非含能武器或枪械在生产者验收门点的制造环境账目。重型及小型产品族共享核算方法，但配置、实际化学废物接口及供应门点分别限定。范围涵盖采购、实际现场制造环境总量、条件处理回收、非功能性放行记录及交付保护。不提供武器设计、构造功能零件清单、制造设置、配方、组装或操作说明。 |
| recursive_input_rule | 分开外购完整产品供应负担与实际本地贡献，不重复其所含材料供应。内部转移回收库存为循环，非第二采购。各外包服务及所含交换计入一次 |
| upstream_dataset_requirement | 匹配实际实体材料化学供应状态、供应门点、参考属性单位、场址时期及接收方。不可审查保密接口为缺口，非零；扩展覆盖须审查上游链接 |
| disclosure | 中性产品族配置及验收放行标识；完整新非含能交付状态；生产者场址报告时期；实际验收数量；正净 M kg、实体质量来源及受控验收记录；包装夹具排除；环境自制采购外包门点；化学供应安全数据单状态及适用时铬分析价态；实际新增供应对回收库存平衡；废水污泥含油屑接收方及湿干基准；因果共用分配；遗漏未披露排除活动及上游不确定性 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_accounts` | 所有分区 | 在不含操作门点采集实际生产环境负担、返工不合格、共用控制及外包处理。长期设施工装及独立研发排除核心运行前景并披露。功能含能试验及后续生命周期排除，实际遗漏披露；不隐称完整清单。 | `hk`, `nydec` |
| `boundary_interface_audit` | 所有实际交换 | 卡为条件原子起始示例，非武器材料配方或完整清单。独立审查各当前安全环境接口，逐一添加各实际供应化学废物释放物种及实体身份。未披露投入不能按零遗漏。不披露构造技术设置制造组装方法或功能。 |  |
| `boundary_water_waste` | 处理回收接收方 | 供应水为技术圈投入，非自然取水或废液。内部追踪实际回收复用，各最终废水污泥含油屑在接收边界转移。排放化学物种与废物毛量分开。历史污染地下水土壤修复室内空气治理为独立活动，非当前单位制造排放。 | `nydec`, `epa` |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt` | 采购与库存核算 | required | 各声明新非含能武器或枪械 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `site_manufacture` | 现场制造环境账目 | required | 声明门点内实际现场制造 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `surface` | 条件表面处理环境账目 | conditional | 仅有记录的实际现场表面处理负担 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `acceptance` | 验收与净质量核算 | required | 每件验收完整非含能产品 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `utilities` | 共用设施公用工程与废物账目 | required | 实际可归属设施服务 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `packing` | 条件交付保护账目 | conditional | 实际厂门运输保护 | foreground | 一台验收同配置成品设备，使用 M 归一化 |

关联账核对接收库存、实际制造总量、条件处理回收、验收输出、共用服务及保护，不意味生产顺序。分开重型小型配置、当前废物接口及供应者；无共同默认发生或数量。

### 过程：采购与库存核算 (`receipt`)

记录实际接收实体产品、供应门点、库存和退货。各采购物有独立环境接口；公开行卡不披露或替代完整保密材料登记。不规定设计或部件功能。

#### 输入

##### 产品流

###### 外购冷轧非合金钢板 (`steel_plate`)

条件实际供应材料，记录牌号及交付状态；非必需材料或设计规定。排除已由外购成品所含材料代表的库存。

- 选定流：外购冷轧非合金钢板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_receipt。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_receipt`
- 来源：`hk`

###### 外购变形铝合金板 (`aluminium_sheet`)

仅实际声明合金牌号、供应板状态及净领用；非纯铝或普遍产品组成。

- 选定流：外购变形铝合金板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_receipt。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_receipt`
- 来源：`hk`

### 过程：现场制造环境账目 (`site_manufacture`)

将实际车间能耗、材料损失及污染控制负担归属核算分区。这是环境账目，不是制造顺序。实际外包和返工明确保留；不提供技术操作、设置、几何或组装说明。

#### 输入

##### 产品流

###### 外购中压电力 (`electricity_site_manufacture`)

仅声明电压场址时期实际采购供应；实测 kWh 经核验 3.6 MJ/kWh 换算 MJ。现场发电非外购电，须另记实际账；共用账扣除分表合计一次。

- 选定流：外购中压电力
- 流属性/单位：Energy / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_site_manufacture。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_site_manufacture`
- 来源：`hk`, `nydec`

#### 输出

##### 废物流

###### 弃用非合金钢板废料 (`steel_scrap`)

实际称量声明材料外送废料及目的；内部退料为库存转移。不自动抵扣避免生产。

- 选定流：弃用非合金钢板废料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_site_manufacture。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_site_manufacture`
- 来源：`hk`, `nydec`

###### 弃用变形铝合金板废料 (`aluminium_scrap`)

实际分离合金废料、沾染及目的记录；非环境纯铝释放。

- 选定流：弃用变形铝合金板废料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_site_manufacture。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_site_manufacture`
- 来源：`hk`, `nydec`

###### 含油钢屑废物 (`oily_steel_chips`)

仅实际外送分离钢屑、实测含油水分及目的，非纯金属排放。内部回收油及屑另记循环。NYDEC 仅历史混合环境接口证据。

- 选定流：含油钢屑废物
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_site_manufacture。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_site_manufacture`
- 来源：`hk`, `nydec`

### 过程：条件表面处理环境账目 (`surface`)

核算此分区实际独立识别采购化学品、水、排放和废物。异丙醇示例行仅在当前供应、安全数据单及环境记录核实时适用。不规定槽液配方、工艺条件或涂层设计。

#### 输入

##### 产品流

###### 外购异丙醇溶剂 (`isopropanol`)

仅有记录实际异丙醇 CAS67-63-0 纯度及供应路线；水性混合物须自身匹配身份。无普遍溶剂要求。

- 选定流：外购异丙醇溶剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface`
- 来源：`epa`, `nydec`

###### 外购中压电力 (`electricity_surface`)

仅声明电压场址时期实际采购供应；实测 kWh 经核验 3.6 MJ/kWh 换算 MJ。现场发电非外购电，须另记实际账；共用账扣除分表合计一次。

- 选定流：外购中压电力
- 流属性/单位：Energy / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface`
- 来源：`epa`, `nydec`

#### 输出

##### 废物流

###### 废异丙醇溶剂 (`spent_isopropanol`)

实际独立转移废物组成净质量，非纯化学品或空气排放；捕集回收与处置分开。

- 选定流：废异丙醇溶剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface`
- 来源：`epa`, `nydec`

###### 工业表面处理废水 (`industrial_effluent`)

仅实际独立识别、未由 chromium_vi_effluent、chromium_iii_effluent 或 oily_effluent 代表的残余表面处理废水流。须净湿质量、组成及接收方，不重复同一液体毛量。供应水、淡水取用及释放物种为独立身份。

- 选定流：工业表面处理废水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface`
- 来源：`epa`, `nydec`

###### 含六价铬酸性工业废水 (`chromium_vi_effluent`)

仅当前有证据独立转移废水、铬价态、湿质量及接收方。非总铬当六价、淡水取用、历史污染地下水或纯铬酸。不假定浓度或必然产生。

- 选定流：含六价铬酸性工业废水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface`
- 来源：`epa`, `nydec`

###### 含三价铬工业废水 (`chromium_iii_effluent`)

仅实际当前独立废水具分析建立三价状态、湿质量及接收方；替代项目意图非完成转换或无六价的证据。混合价态须明确分析边界。chromium_vi_effluent 与 chromium_iii_effluent 对同一液流为替代核算；只有实体独立接收液流时两行可同时有量，不将同一液体毛量计入两份。

- 选定流：含三价铬工业废水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface`
- 来源：`epa`, `nydec`

###### 含铬废水处理污泥 (`chromium_sludge`)

仅实际最终转移污泥、实测湿干质量及三六价独立分析定义。处理不保证去除铬；污泥非基础铬排放。不重复所含处理资源或污泥。

- 选定流：含铬废水处理污泥
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface`
- 来源：`epa`, `nydec`

###### 水溶性废油工业废液 (`oily_effluent`)

仅实际独立收集含油液流，实测水油基准及接收方；非纯润滑油、淡水或物种排放。虽有历史设施说明仍须当前适用性。

- 选定流：水溶性废油工业废液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface`
- 来源：`epa`, `nydec`

#### 输出

##### 基本流

###### 异丙醇 (`isopropanol_air`)

仅经实测回收及库存平衡后实际残余释放 CAS67-63-0 至即时空气/未指定。采购溶剂质量非排放质量，不假定损失分数。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface`
- 来源：`epa`, `nydec`

### 过程：验收与净质量核算 (`acceptance`)

将中性配置放行标识关联实际完整净质量及归属验收环境总量。验收为核算门点；不提供功能试验程序或性能指标。含能试验在本方法外，如实际制造体系发生则须披露缺口。

#### 输入

##### 产品流

###### 外购中压电力 (`electricity_acceptance`)

仅声明电压场址时期实际采购供应；实测 kWh 经核验 3.6 MJ/kWh 换算 MJ。现场发电非外购电，须另记实际账；共用账扣除分表合计一次。

- 选定流：外购中压电力
- 流属性/单位：Energy / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：

#### 输出

##### 产品流

###### 验收完整新非含能武器 (`accepted_product`)

一件同中性配置签字验收状态新完整产品，排除弹药、含能装料、试验耗材、运输包装及夹具。仅声明环境门点，无操作设计细节。

- 选定流：验收完整新非含能武器
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`identity_reference`
- 采集协议：`cp_mass`
- 来源：

### 过程：共用设施公用工程与废物账目 (`utilities`)

将供应电、水及实际设施化学品与排放和废物转移分开。分表核对共用服务，不重复阶段总量。办公、研发及无关族另分。

#### 输入

##### 产品流

###### 工艺用水 (`process_water`)

实际供应技术圈工艺水按 kg 实测；体积记录须实际密度条件。非自然取水、内部循环水或废水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_utilities。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`hk`, `epa`

###### 外购中压电力 (`electricity_utilities`)

仅声明电压场址时期实际采购供应；实测 kWh 经核验 3.6 MJ/kWh 换算 MJ。现场发电非外购电，须另记实际账；共用账扣除分表合计一次。

- 选定流：外购中压电力
- 流属性/单位：Energy / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_utilities。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`hk`, `epa`

### 过程：条件交付保护账目 (`packing`)

计入实际独立保护供应和净退回；M 排除运输包装。周转支撑分配须真实流转及服务分母，不假定寿命。

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD） (`protective_film`)

仅实际供应 PE-LD 薄膜净领用，其质量排除验收产品 M。非所有塑料或必需包裹。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

###### 瓦楞纸板运输箱 (`corrugated_board`)

实际独立箱供应及净皮重；非混合纸包装或产品净质量。

- 选定流：瓦楞纸板运输箱
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

###### 外购中压电力 (`electricity_packing`)

仅声明电压场址时期实际采购供应；实测 kWh 经核验 3.6 MJ/kWh 换算 MJ。现场发电非外购电，须另记实际账；共用账扣除分表合计一次。

- 选定流：外购中压电力
- 流属性/单位：Energy / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_shared` | 共用资源及产品族 | 可行时直接归属实测交换。残余共用负担按当前因果驱动分配：份额 = 覆盖配置驱动量 / 覆盖驱动量之和。须实际仪表范围使用负荷占用服务验收数量记录，保留时期分母待机驱动依据敏感性。重型小型族须分别实际驱动；不以企业总量除目录产品重量销量。 |  |
| `allocation_recovery` | 实际回收库存废物 | 新增供应内部回收库存变化成品不合格最终废物计入一次。内部回收溶剂油水非新增采购或自动原生生产抵扣。保留实际回收处理资源负担。湿浆与所含铬基准不同，三六价分数不产生同一废水两份。 |  |
| `allocation_coproduct` | 废料及其他输出 | 追溯实际接收方材料状态。废物可回收本身不建立共产品状态或抵扣。共产品分配须实际因果经济记录及敏感性。不合格返工负担保留在验收生产范围，无默认收得共用份额或回收效率。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | reference_product | 受控验收质量记录 | 型号；配置；序列号；验收净质量 M；实际实体计量来源；校准皮重不确定性；中性交付状态记录；签字放行 | 使用受控的验收质量记录核对同一配置的验收设备。 | kg | 逐验收台 | 实际当前制造验收时期 | 声明完整产品验收门点 | 每台验收净质量 | mass_record_provenance 下当前可追溯实体称重皮重校准及核对质量平衡 |
| `cp_receipt` | `receipt` | inventory | 当前环境交换记录 | 型号配置序列批中性放行标识精确化学安全数据单废物价态净领退库存 kg 仪表 kWh 接收方当前对历史范围实际因果共用驱动 | 读取实际供应发票、交付状态及期初期末库存记录 | 质量行 kg；电能行 MJ | 逐验收台及实际覆盖生产时期 | 实际当前制造验收时期 | 声明生产者外包环境接收方门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 当前环境账安全数据单校准仪表验收接收方记录 |
| `cp_site_manufacture` | `site_manufacture` | inventory | 当前环境交换记录 | 型号配置序列批中性放行标识精确化学安全数据单废物价态净领退库存 kg 仪表 kWh 接收方当前对历史范围实际因果共用驱动 | 读取不含操作内容的环境领退账目、阶段仪表及废物转移 | 质量行 kg；电能行 MJ | 逐验收台及实际覆盖生产时期 | 实际当前制造验收时期 | 声明生产者外包环境接收方门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 当前环境账安全数据单校准仪表验收接收方记录 |
| `cp_surface` | `surface` | inventory | 当前环境交换记录 | 型号配置序列批中性放行标识精确化学安全数据单废物价态净领退库存 kg 仪表 kWh 接收方当前对历史范围实际因果共用驱动 | 读取逐化学品净领用、安全数据单、水表及逐物种环境监测记录 | 质量行 kg；电能行 MJ | 逐验收台及实际覆盖生产时期 | 实际当前制造验收时期 | 声明生产者外包环境接收方门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 当前环境账安全数据单校准仪表验收接收方记录 |
| `cp_acceptance` | `acceptance` | inventory | 当前环境交换记录 | 型号配置序列批中性放行标识精确化学安全数据单废物价态净领退库存 kg 仪表 kWh 接收方当前对历史范围实际因果共用驱动 | 读取签字放行、受控净质量记录及验收环境仪表 | 质量行 kg；电能行 MJ | 逐验收台及实际覆盖生产时期 | 实际当前制造验收时期 | 声明生产者外包环境接收方门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 当前环境账安全数据单校准仪表验收接收方记录 |
| `cp_utilities` | `utilities` | inventory | 当前环境交换记录 | 型号配置序列批中性放行标识精确化学安全数据单废物价态净领退库存 kg 仪表 kWh 接收方当前对历史范围实际因果共用驱动 | 读取实际公用仪表、场址核对及有记录因果分配驱动量 | 质量行 kg；电能行 MJ | 逐验收台及实际覆盖生产时期 | 实际当前制造验收时期 | 声明生产者外包环境接收方门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 当前环境账安全数据单校准仪表验收接收方记录 |
| `cp_packing` | `packing` | inventory | 当前环境交换记录 | 型号配置序列批中性放行标识精确化学安全数据单废物价态净领退库存 kg 仪表 kWh 接收方当前对历史范围实际因果共用驱动 | 读取实际包装领退及实测皮重 | 质量行 kg；电能行 MJ | 逐验收台及实际覆盖生产时期 | 实际当前制造验收时期 | 声明生产者外包环境接收方门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 当前环境账安全数据单校准仪表验收接收方记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | 须正净 M kg 具当前完整交付配置实体来源校准皮重受控放行。同配置验收数量须匹配原件。受控验收记录仅采集接口，缺原始实体计量时非证明。不用目录企业总量质量估计。缺来源记录须数据科学审查。 | 实际实体方法读数校准皮重质量闭合验收 |
| `quality_speciation` | 当前化学品废水污泥 | 保留实际化学配方已建立时 CAS 相态湿干基准分析价态。总铬非六价三价，六价化合物非铬金属。化学投入捕集污泥废水毛量实际释放溶解物种须分别身份平衡。历史地下水释放替代意图非当前生产证据，不假定无铬状态。 | 当前安全数据单分析定义及接收方物种记录 |
| `quality_balance` | 材料回收水仪表 | 核对实际新增供应对内部回收期初期末库存成品不合格最终废物，不重复。技术圈水对自然取用废液、处理服务对所含资源、共用对阶段仪表分开。保留仪表故障替代估计不确定性；HK2024 披露水表异常，非产品消耗默认。 | 当前环境核对异常记录因果驱动 |
| `quality_completeness` | 实际数据集两产品族供应者 | 审计候选行外完整当前不含操作环境接口登记，区分实测计算缺失有证据不适用。共享方法不建立共同材料配方排放。披露供应外包未披露范围及排除功能试验资本后续贡献。缺当前记录为缺口非零。契约检查不称完整从摇篮到厂门或科学批准。 | 当前完整环境记录及透明覆盖缺口 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考及 accepted_product | 精确参考名等于 accepted_product 输出。须一件完整新非含能验收对象、cp_mass 下当前配置净 M kg、实体来源及 normalize_mass。空候选参考 UUID 在 unresolved_flow_identities 登记该精确行。独立零件含能内容运输毛重不替代。 |  |
| `validate_identity_basis` | 所有行两语言 | 核验合法匹配小写标识实际投影行协议规则链接、按件 q_item/M kg 及验收数量汇总。保留实际公开参考属性单位、官方本地 UUID 名、原子交换及化学介质供应限定。六三价废物物种区分不能用泛总铬替代。 |  |
| `validate_scope` | 实际接口数据集用途 | 声称完整前景覆盖前须当前仅环境范围证据及独立审查自制采购回收接收方质量闭合。历史修复公开集团总量非当前单位负担。跨族统一报告不意味功能等价共同默认排放。候选科学审查待完成。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 实际数据完成审查后 secondary_dataset 及 background_dataset |
| downstream_use | 独立声明非含能产品生命周期的制造环境投入，明确可见遗漏阶段 |
| allowed_use | 匹配实际配置交付状态环境门点披露覆盖内制造环境核算比较，不自动跨族比较 |
| excluded_use | 弹药及含能材料装料或其处理；不可分含能内容产品；独立供应零件；仪礼刃具；旧品翻新及修复；使用、功能实弹试验、部署、厂门后储存及寿命终结。实际发生被排除工厂活动须披露覆盖缺口，非零负担。 |
| required_metadata | 中性产品族配置及验收放行标识；完整新非含能交付状态；生产者场址报告时期；实际验收数量；正净 M kg、实体质量来源及受控验收记录；包装夹具排除；环境自制采购外包门点；化学供应安全数据单状态及适用时铬分析价态；实际新增供应对回收库存平衡；废水污泥含油屑接收方及湿干基准；因果共用分配；遗漏未披露排除活动及上游不确定性 |
| required_quality_disclosure | 当前记录 M 来源化学价态湿干基准接收方回收库存分配证据未决身份未披露遗漏上游排除阶段；科学待审 |
| update_trigger | 产品完成配置实际供应化学废物状态铬替代状态回收循环场址供应接收方计量分配变化 |


## 11. 数据源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `hk` | literature | [Heckler & Koch Nachhaltigkeitsbericht2024](https://www.heckler-koch.com/Downloads/Investor%20Relations/Abschl%C3%BCsse/2024/Abschlussbericht/Nachhaltigkeitsbericht%202024.pdf) | 印刷/PDF11和13：披露水废物监测水表异常能源记录。仅设施集团报告年背景，非分类证明、当前产品闭合、单件质量强度或普遍工艺要求。不采用数值总量因子。 |
| `nydec` | literature | [NYDEC official Watervliet Periodic Review Report](https://extapps.dec.ny.gov/data/DecDocs/401034A/Report.RCRA.401034A.2019-03-13.2018%20Final%20PRR.pdf) | 实际文档2019年3月6日修订1（URL标签2018），PDF5/印刷1第2.1节及相邻修复摘要：重型产品背景和溶剂含铬废水含油金属废物接口，混合当前过去活动。仅历史背景；非实际当前交付 M 必需化学生产因子已完成三价转换或修复归常规制造。无尺寸量值技术制造细节采用。 |
| `epa` | extension_guidance | [US EPA TRI Overview](https://www.epa.gov/enviro/tri-overview) | TRI Overview 首段化学管理：区分报告化学管理回收处理与环境释放。仅一般美国报告背景，不采用普遍法律适用阈值产品分类或工艺排放因子。 |
