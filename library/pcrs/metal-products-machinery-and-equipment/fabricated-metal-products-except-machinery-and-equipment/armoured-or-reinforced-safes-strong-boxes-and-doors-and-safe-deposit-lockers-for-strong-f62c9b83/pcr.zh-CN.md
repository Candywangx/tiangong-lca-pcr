---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.armoured-or-reinforced-safes-strong-boxes-and-doors-and-safe-deposit-lockers-for-strong-f62c9b83
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 钢铁等贱金属制的装甲或加强型保险柜、保险箱、金库门和金库用保管箱，以及现金箱、契据箱等类似品

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 代码 42993 所涵盖的钢铁等贱金属制装甲或加强型保险柜、保险箱、金库门、金库用保管箱、现金箱、契据箱及具有类似功能的安全储存产品的工厂门到门外（出厂）生产。产品的防护柜体或门应由贱金属制造，并采用安防屏障结构予以加强。

本 PCR 不涵盖普通非加强型柜体、家具、作为独立产品供应的锁具、报警系统、在客户现场实施的金库建造，以及钢材、涂料、屏障配料、电子器件、包装和外购部件的上游生产。数据包必须说明所代表的是完整保险柜、保险箱、金库门、保管箱组，还是较小型现金箱或契据箱；结构或声明防护等级存在实质差异的产品不得合并平均，除非提供有据可查的代表性论证。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.armoured-or-reinforced-safes-strong-boxes-and-doors-and-safe-deposit-lockers-for-strong-f62c9b83 |
| classification_refs | CPC 3.0：42993 |
| covered_products | 钢铁等贱金属制的装甲或加强型保险柜、保险箱、金库门、金库用保管箱、现金箱、契据箱及类似成品安全储存产品 |
| excluded_products | 普通非加强型柜体；独立锁具和报警器；现场金库建造；上游材料和外购部件 |
| representative_product | 一件已声明的安全储存成品，其贱金属柜体或门及加强屏障满足生产商声明的防护规范 |
| production_route | 金属板材切割与成形、柜体和门焊接、屏障与锁具装配、适用的表面处理、包装及出厂放行 |
| market_state | 制造场址门口的成品；成品净质量不含外部运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造场址门口提供一件装甲或加强型安全储存成品 |
| How much | 1000 kg 成品净质量，不含外部运输包装 |
| How well | 声明产品类型、适用时的安防或防火性能标识、锁具配置、主要屏障结构及出厂验收状态 |
| How long or cycle | 一件完成制造并放行的产品；使用寿命单独披露，不嵌入参考数量 |
| reference_flow_link | finished_secure_storage_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 kg |
| 参考产品流 | 贱金属制的装甲或加强保险柜、保险箱、保险库的门和保险锁、现金契据收藏箱及类似品 35affc80-58a8-406b-9e08-574796726703 |
| 参考流属性 | 质量 (93a60a56-a3c8-11da-a746-0800200b9a66) |
| 参考单位组 | 质量 (93a60a57-a4c8-11da-a746-0800200c9a66) |
| 参考单位 | kg |
| 必需限定信息 | 产品类型；型号或产品系列；适用时的安防或防火性能标识；锁具配置；主要屏障结构；制造地域；数据期；成品净质量口径；包装排除；工厂门边界 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| mr_reference_product_mass | finished_secure_storage_product | 质量 (93a60a56-a3c8-11da-a746-0800200b9a66) | kg | 最终装配后、添加外部运输包装前，使用经校准设备测定成品净质量；将已放行产品总量归一化至 1000 kg。 |
| mr_material_and_waste_mass | 所有材料输入及固体或液体废物输出 | 质量 (93a60a56-a3c8-11da-a746-0800200b9a66) | kg | 使用收货、批次、领用、退料和废物记录并与库存变动核对；当湿基或干基及组成会影响解释时予以声明。 |
| mr_electricity | 外购及现场发电电力 | 净热值 (93a60a56-a3c8-11da-a746-0800200b9a66) | MJ | 按过程记录计量的交付电力；电表以 kWh 报告时保留原始读数，并采用 1 kWh = 3.6 MJ 换算。 |
| mr_process_water | process_water | 质量 (93a60a56-a3c8-11da-a746-0800200b9a66) | kg | 使用质量读数，或以有记录的密度和温度假设换算计量体积；不得把工艺用水与废水合并。 |
| mr_particulate | welding_particulate | 质量 (93a60a56-a3c8-11da-a746-0800200b9a66) | kg | 优先采用源测试或捕集系统质量平衡；确需排放因子时，必须匹配实际焊接工艺和焊材，并披露因子来源及控制措施。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| sb_start | 前景系统 | 边界始于交付制造场址的外购材料、部件、能源、水和包装，并纳入其所链接的上游数据集。 | epd-international-godrej-high-security-safes-2025 |
| sb_manufacture | 前景系统 | 纳入金属板材准备与成形、柜体和门焊接、屏障填充或安装、锁具和五金装配、使用时的表面预处理和涂装、固化、包装、最终检验、返工及出厂放行。 | epd-international-godrej-high-security-safes-2025; us-epa-ap42-electric-arc-welding-1995 |
| sb_exchanges | 所有纳入过程 | 纳入所有已知材料、部件、水、能源、包装、废物和直接基本流交换；不得采用统一百分比截断。任何不可获得的交换均须识别并说明遗漏理由。 | epd-international-godrej-high-security-safes-2025 |
| sb_waste | 产生的废物 | 纳入现场处置准备，并把每项废物输出链接至研究所选择的下游处理或回收情景；如无明确声明的建模规则，不得在前景内计入避免生产收益。 | epd-international-godrej-high-security-safes-2025 |
| sb_exclusions | 前景系统 | 默认排除资本设备、厂房、员工出行及下游配送、安装、使用、维护和生命末期；研究目标明确增加这些过程时，应单独披露。 | epd-international-godrej-high-security-safes-2025 |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料、部件、公用工程和包装到达制造场址时的状态 |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC 3.0 代码 42993 的完整安全储存成品 |
| recursive_input_rule | 外购半成品保险柜柜体、门、保管箱模块或其他同类别产品必须作为单独上游产品输入建模，不得无声地以其组成材料替代。 |
| upstream_dataset_requirement | 每项外购输入均须使用地域和技术具有代表性的上游数据集，或明确说明代理数据的理由。 |
| disclosure | 披露产品类型、防护标识、制造地域、数据期、路线覆盖、外购子组件、分配、排除项及下游废物情景。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| body_fabrication_and_welding | 柜体制作与焊接 | required | 每种产品均纳入切割、成形、装配定位、焊接及其废钢和直接烟尘。 | 将钢材坯料转化为主要柜体和门壳。 | 转入装配的柜体和门质量 |
| barrier_and_lock_assembly | 屏障与锁具装配 | required | 纳入实际加强结构、屏障填充或安装、锁具安装、五金集成及装配用电。 | 形成完整防护总成。 | 转入表面处理或放行的安全储存装配体质量 |
| surface_finishing | 表面处理 | conditional | 报告场址实施水性预处理、粉末涂装、其他涂装或固化时纳入；未使用的路线行记录为零或不适用。 | 提供声明的表面防护与外观。 | 表面处理后产品质量 |
| packaging_and_final_release | 包装与最终放行 | required | 纳入实际出厂包装、最终检验、合格输出和发运前有记录的返工。 | 在工厂门交付参考产品。 | finished_secure_storage_product |

### 过程：柜体制作与焊接（`body_fabrication_and_welding`）

#### 输入

##### 产品流

###### 未涂层碳钢薄板（`steel_sheet`）

具体板材进入场址，经切割、成形和焊接形成柜体与门。以领用质量扣除可追溯退料并结合库存变动确定消耗量。

- 选定流：未涂层碳钢薄板
- 流属性/单位：质量 (93a60a56-a3c8-11da-a746-0800200b9a66)；质量 (93a60a57-a4c8-11da-a746-0800200c9a66)；kg
- 数量规则：测量板材净消耗量，并以 `calc_mass_normalization` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1000 kg 安全储存成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_body_materials
- 来源：epd-international-godrej-high-security-safes-2025

###### 实芯焊丝（`solid_welding_wire`）

仅在采用气体保护金属电弧焊或其他有记录的实芯焊丝路线时，该消耗性电极才跨越过程边界。根据焊丝盘领用、退回和库存变动确定净消耗量。

- 选定流：实芯焊丝
- 流属性/单位：质量 (93a60a56-a3c8-11da-a746-0800200b9a66)；质量 (93a60a57-a4c8-11da-a746-0800200c9a66)；kg
- 数量规则：适用焊接路线记录实测消耗量；否则记录为零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：1000 kg 安全储存成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_body_materials
- 来源：us-epa-ap42-electric-arc-welding-1995

###### 药芯焊丝（`flux_cored_wire`）

采用药芯焊丝电弧焊路线时，药芯消耗性焊丝跨越过程边界。根据焊丝盘领用、退回和库存变动确定净消耗量。

- 选定流：药芯焊丝 1b74a576-06e0-4764-97ce-11a73f8a4752
- 流属性/单位：质量 (93a60a56-a3c8-11da-a746-0800200b9a66)；质量 (93a60a57-a4c8-11da-a746-0800200c9a66)；kg
- 数量规则：采用药芯焊丝电弧焊时记录实测消耗量；否则记录为零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：1000 kg 安全储存成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_body_materials
- 来源：us-epa-ap42-electric-arc-welding-1995

###### 制作用电（`electricity_fabrication`）

电力进入过程，用于切割、成形、抽风和焊接设备。优先采用分表计量；无专用电表时采用有记录的设备负荷分配。

- 选定流：电力 890a70b7-b677-4e2a-8a1b-7d017e0a10ae
- 流属性/单位：净热值 (93a60a56-a3c8-11da-a746-0800200b9a66)；能量 (93a60a57-a3c8-11da-a746-0800200c9a66)；MJ
- 数量规则：记录交付电力，并以 `calc_energy_normalization` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1000 kg 安全储存成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_fabrication_electricity
- 来源：epd-international-godrej-high-security-safes-2025

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废钢（`steel_scrap`）

边角料和不合格钢制件作为单独计量的废物流离开制作过程。记录收集废钢总量，扣除经核实在同一过程系统内直接再用且未离开边界的部分。

- 选定流：废钢 c3fc5605-baa3-4b25-9934-ecf7fcbc72da
- 流属性/单位：质量 (93a60a56-a3c8-11da-a746-0800200b9a66)；质量 (93a60a57-a4c8-11da-a746-0800200c9a66)；kg
- 数量规则：按磅单测量外运废钢，并以 `calc_mass_normalization` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1000 kg 安全储存成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_fabrication_waste
- 来源：epd-international-godrej-high-security-safes-2025

##### 基本流

###### 焊接颗粒物（`welding_particulate`）

焊接产生的空气颗粒物在计及捕集和排风控制后跨越过程边界。除非测量能确认其他准确基本流身份，否则保留经审计的“粒径未特指”身份。

- 选定流：颗粒物，粒径未特指 0ce3dedb-caca-407b-a856-a90470eb8ec0
- 流属性/单位：质量 (93a60a56-a3c8-11da-a746-0800200b9a66)；质量 (93a60a57-a4c8-11da-a746-0800200c9a66)；kg
- 数量规则：使用实测释放质量，或依据 `calc_welding_particulate` 采用特定工艺及焊材的有据计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：1000 kg 安全储存成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：cp_welding_emissions
- 来源：us-epa-ap42-electric-arc-welding-1995

### 过程：屏障与锁具装配（`barrier_and_lock_assembly`）

#### 输入

##### 产品流

###### 水泥基安防屏障复合料（`cementitious_barrier`）

配制的水泥基复合料进入装配过程，用于填充或安装加强屏障。把完整供应混合物作为单一产品交换计量，并披露其配方口径，不得拆分为未经核实的组分。

- 选定流：水泥基安防屏障复合料
- 流属性/单位：质量 (93a60a56-a3c8-11da-a746-0800200b9a66)；质量 (93a60a57-a4c8-11da-a746-0800200c9a66)；kg
- 数量规则：核对批次投入、退料及残余废物后，以 `calc_mass_normalization` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1000 kg 安全储存成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assembly_materials
- 来源：epd-international-godrej-high-security-safes-2025

###### 锁具总成（`lock_assembly`）

完整的声明锁具总成进入场址并安装于门或箱体。记录外购总成质量，并披露机械式、电子式或组合式配置。

- 选定流：安全储存产品锁具总成
- 流属性/单位：质量 (93a60a56-a3c8-11da-a746-0800200b9a66)；质量 (93a60a57-a4c8-11da-a746-0800200c9a66)；kg
- 数量规则：汇总已放行产品安装的合格锁具总成，并以 `calc_mass_normalization` 归一化其质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1000 kg 安全储存成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assembly_materials
- 来源：epd-international-godrej-high-security-safes-2025

###### 装配用电（`electricity_assembly`）

电力进入过程，用于混合、填充、辅助固化、装配定位及锁具或五金装配。采用专用电表，或依据设备运行时间进行有记录的分配。

- 选定流：电力 890a70b7-b677-4e2a-8a1b-7d017e0a10ae
- 流属性/单位：净热值 (93a60a56-a3c8-11da-a746-0800200b9a66)；能量 (93a60a57-a3c8-11da-a746-0800200c9a66)；MJ
- 数量规则：记录交付电力，并以 `calc_energy_normalization` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1000 kg 安全储存成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assembly_electricity
- 来源：epd-international-godrej-high-security-safes-2025

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 屏障复合料废物（`barrier_compound_waste`）

不合格、洒漏或残余水泥基屏障复合料作为单独量化的废物离开装配过程。报告其湿态或固化态及下游处理路线。

- 选定流：水泥基安防屏障复合料废物
- 流属性/单位：质量 (93a60a56-a3c8-11da-a746-0800200b9a66)；质量 (93a60a57-a4c8-11da-a746-0800200c9a66)；kg
- 数量规则：按批次或容器质量测量所收集废物，并以 `calc_mass_normalization` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1000 kg 安全储存成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assembly_waste
- 来源：epd-international-godrej-high-security-safes-2025

##### 基本流

### 过程：表面处理（`surface_finishing`）

#### 输入

##### 产品流

###### 粉末涂层（`powder_coating`）

产品在场址采用粉末涂装路线时，粉末涂层进入过程。依据粉末领用量、可回收循环量、库存变动及单独收集废物确定净消耗量。

- 选定流：粉末涂层 0c581697-0eed-4b86-a070-b94966eb7344
- 流属性/单位：质量 (93a60a56-a3c8-11da-a746-0800200b9a66)；质量 (93a60a57-a4c8-11da-a746-0800200c9a66)；kg
- 数量规则：记录新粉末净消耗量；非粉末路线记录为零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：1000 kg 安全储存成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_finishing_materials
- 来源：epd-international-godrej-high-security-safes-2025

###### 工艺用水（`process_water`）

场址进行水洗或水性预处理时，工艺用水进入边界。补充水须与过程内循环水分开记录。

- 选定流：工艺用水 94a04f7e-2d5c-41f0-b182-d54a3b373a02
- 流属性/单位：质量 (93a60a56-a3c8-11da-a746-0800200b9a66)；质量 (93a60a57-a4c8-11da-a746-0800200c9a66)；kg
- 数量规则：适用路线记录补充水净量；否则记录为零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1000 kg 安全储存成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_finishing_utilities
- 来源：epd-international-godrej-high-security-safes-2025

###### 表面处理用电（`electricity_finishing`）

电力进入过程，用于预处理设备、喷房、抽风、回收和固化。按路线分表计量，或按有记录的设备运行时间和负荷分配共用电表。

- 选定流：电力 890a70b7-b677-4e2a-8a1b-7d017e0a10ae
- 流属性/单位：净热值 (93a60a56-a3c8-11da-a746-0800200b9a66)；能量 (93a60a57-a3c8-11da-a746-0800200c9a66)；MJ
- 数量规则：记录适用表面处理路线的交付电力，并以 `calc_energy_normalization` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：1000 kg 安全储存成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_finishing_utilities
- 来源：epd-international-godrej-high-security-safes-2025

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 粉末涂装废弃物（`powder_coating_waste`）

废弃或无法回收的涂装粉末作为独立废物流离开表面处理过程。仍在同一过程回路内循环的回收粉末不计入该废物流。

- 选定流：粉末涂装废弃物 9aa53a82-5462-400e-9096-efab7718201f
- 流属性/单位：质量 (93a60a56-a3c8-11da-a746-0800200b9a66)；质量 (93a60a57-a4c8-11da-a746-0800200c9a66)；kg
- 数量规则：测量外运或处理废物质量，并以 `calc_mass_normalization` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：1000 kg 安全储存成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_finishing_wastes
- 来源：epd-international-godrej-high-security-safes-2025

###### 表面处理废水（`surface_treatment_wastewater`）

水洗或水性预处理产生的废水作为独立液体废物流离开表面处理过程。记录排放质量，并披露在测量边界点前是否经过现场处理。

- 选定流：水性表面处理废水
- 流属性/单位：质量 (93a60a56-a3c8-11da-a746-0800200b9a66)；质量 (93a60a57-a4c8-11da-a746-0800200c9a66)；kg
- 数量规则：适用路线测量排放废水并以 `calc_mass_normalization` 归一化；否则记录为零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：1000 kg 安全储存成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_finishing_wastes
- 来源：epd-international-godrej-high-security-safes-2025

##### 基本流

### 过程：包装与最终放行（`packaging_and_final_release`）

#### 输入

##### 产品流

###### 瓦楞纸板（`corrugated_cardboard`）

瓦楞纸板作为产品特定运输包装进入过程。测量安装在已放行产品上的质量，不计退回或未使用库存。

- 选定流：瓦楞纸板 8bde297e-98df-463f-bcb4-0db52bf6e0b5
- 流属性/单位：质量 (93a60a56-a3c8-11da-a746-0800200b9a66)；质量 (93a60a57-a4c8-11da-a746-0800200c9a66)；kg
- 数量规则：测量包装质量，并以 `calc_mass_normalization` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1000 kg 安全储存成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_packaging_materials
- 来源：epd-international-godrej-high-security-safes-2025

###### 松木托盘（`pine_pallet`）

随产品发运时，松木托盘进入过程边界。记录托盘干质量或收货状态质量，并单独说明再使用假设。

- 选定流：松木托盘
- 流属性/单位：质量 (93a60a56-a3c8-11da-a746-0800200b9a66)；质量 (93a60a57-a4c8-11da-a746-0800200c9a66)；kg
- 数量规则：测量随已放行产品发运的托盘质量，并以 `calc_mass_normalization` 归一化；否则记录为零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1000 kg 安全储存成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_packaging_materials
- 来源：epd-international-godrej-high-security-safes-2025

###### 塑料薄膜（`plastic_film`）

使用时，塑料薄膜作为包覆或保护包装进入过程。根据领用和产品包装记录确定装配薄膜质量。

- 选定流：塑料薄膜 8c3dd40c-a22b-48b5-bdec-7da4d3282bfa
- 流属性/单位：质量 (93a60a56-a3c8-11da-a746-0800200b9a66)；质量 (93a60a57-a4c8-11da-a746-0800200c9a66)；kg
- 数量规则：测量随已放行产品发运的薄膜质量，并以 `calc_mass_normalization` 归一化；否则记录为零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1000 kg 安全储存成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_packaging_materials
- 来源：epd-international-godrej-high-security-safes-2025

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品安全储存产品（`finished_secure_storage_product`）

经合格验收的完整保险柜、保险箱、金库门、保管箱、现金箱、契据箱或类似产品作为定量参考离开最终放行过程。记录添加外部运输包装前的成品净质量。

- 选定流：贱金属制的装甲或加强保险柜、保险箱、保险库的门和保险锁、现金契据收藏箱及类似品 35affc80-58a8-406b-9e08-574796726703
- 流属性/单位：质量 (93a60a56-a3c8-11da-a746-0800200b9a66)；质量 (93a60a57-a4c8-11da-a746-0800200c9a66)；kg
- 数量规则：核对实测合格产量后，把归一化输出设为恰好 1000 kg。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：cp_finished_product
- 来源：unsd-cpc-3-0-structure-2025；epd-international-godrej-high-security-safes-2025

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| al_avoid | 所有共用过程 | 在可行情况下，通过过程细分、专用计量、批次记录和直接归属避免分配。 |  |
| al_mass_balance | 钢材、屏障复合料、涂料、水及包装 | 分配前核对投入、合格产品、内部退料、库存变动及实测废物；内部循环不得同时计作新投入减量和有收益的输出。 |  |
| al_shared_energy | 共用电力 | 仅对剩余共用量采用因果性物理驱动因素分配，例如实测设备运行时间乘以额定或实测负荷；记录驱动因素和敏感性。 |  |
| al_multi_product | 无法避免的多产品生产 | 细分和因果归属均不可行时，仅在质量能证明代表资源使用关系时采用质量分配；否则选择并论证其他物理关系，同时报告未分配敏感性情形。 | epd-international-godrej-high-security-safes-2025 |
| al_scrap | 可回收废钢及其他废物 | 在工厂边界报告废物并连接所选下游处理数据集；除非声明的研究方法明确要求并单独展示，不得在前景内计入避免生产收益。 | epd-international-godrej-high-security-safes-2025 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_body_materials | body_fabrication_and_welding | 钢板及路线特定焊丝输入 | 收货与库存记录 | 物料身份；批号；期初库存；收货；领用；退料；期末库存；质量 | 企业记录与实物库存核对 | kg | 每批及月末 | 至少连续 12 个有代表性的月份 | 服务于声明产品的所有制作线 | 按准确材料身份及焊接路线汇总净消耗量 | 采购记录；经校准秤具；库存核对 |
| cp_fabrication_electricity | body_fabrication_and_welding | electricity_fabrication | 电表与设备日志 | 电表起止读数；设备；运行时间；负荷；损耗 | 专用分表或有记录的负荷时间分配 | kWh 和 MJ | 连续或每班 | 与生产相同的代表期 | 所有纳入的制作设备 | 汇总交付能量，并把保留的 kWh 读数换算为 MJ | 电表校准；分配工作表 |
| cp_fabrication_waste | body_fabrication_and_welding | steel_scrap | 废物外运记录 | 废物身份；容器皮重；毛重；去向；日期 | 经校准秤具及外运磅单 | kg | 每次外运 | 与生产相同的代表期 | 制作废物收集点 | 按去向汇总净外运质量 | 秤具校准；磅单；回收方回执 |
| cp_welding_emissions | body_fabrication_and_welding | welding_particulate | 排放测试或运行记录 | 工艺；焊材；消耗质量；捕集效率；排风测量；因子引用 | 源测试或工艺特定计算 | kg | 每次测试及每月活动量 | 代表性工况及年度化数据期 | 范围内每种焊接路线 | 在有记录的控制措施后计算释放质量，并按路线汇总 | 测试报告；因子版本；控制装置检查 |
| cp_assembly_materials | barrier_and_lock_assembly | cementitious_barrier 和 lock_assembly | 批次与部件领用记录 | 身份；配方或型号；批次；收货；领用；退料；库存变动；质量 | 批次核对及已装部件计数或称量 | kg | 每批或每个生产订单 | 至少连续 12 个有代表性的月份 | 服务于声明产品的所有装配线 | 按准确部件汇总净装配或消耗质量 | 批次单；物料清单；称量记录 |
| cp_assembly_electricity | barrier_and_lock_assembly | electricity_assembly | 电表与设备日志 | 电表读数；设备；运行时间；负荷 | 分表或有记录的负荷时间分配 | kWh 和 MJ | 连续或每班 | 与生产相同的代表期 | 所有纳入的装配设备 | 按产品系列汇总交付能量 | 电表校准；分配工作表 |
| cp_assembly_waste | barrier_and_lock_assembly | barrier_compound_waste | 批次残余及废物记录 | 状态；批次；容器皮重；毛重；去向 | 批次核对及经校准称量 | kg | 每批或每次外运 | 与生产相同的代表期 | 所有屏障准备与填充点 | 按状态和去向汇总净废物质量 | 称量记录；废物联单 |
| cp_finishing_materials | surface_finishing | powder_coating | 涂料领用与回收记录 | 涂料身份；批次；新料领用；回收退料；库存变动；废物 | 喷房级物料平衡 | kg | 每批及月末 | 与生产相同的代表期 | 每条实际使用的表面处理路线 | 新料领用加期初库存减退料和期末库存 | 批次单；库存记录；秤具校准 |
| cp_finishing_utilities | surface_finishing | process_water 和 electricity_finishing | 公用工程计量表 | 起止读数；路线；运行时间；需要时的密度假设 | 专用计量或有记录的路线分配 | kg；kWh；MJ | 连续或每班 | 与生产相同的代表期 | 所有纳入的预处理、喷房、回收及固化设备 | 按路线汇总并依据第 4 节换算单位 | 仪表校准；分配与换算工作表 |
| cp_finishing_wastes | surface_finishing | powder_coating_waste 和 surface_treatment_wastewater | 废物与排放记录 | 身份；状态；体积或质量；密度；处理点；去向 | 在声明边界点经校准称量或流量计量 | kg | 每次外运或连续排放 | 与生产相同的代表期 | 每条纳入的表面处理路线 | 按准确废物身份和处理路线分别汇总 | 废物联单；仪表校准；处理日志 |
| cp_packaging_materials | packaging_and_final_release | 瓦楞纸板、松木托盘和塑料薄膜 | 包装领用与包装记录 | 材料身份；供应商；件数；单位质量；领用；退回；发运量 | 称量代表性包装件，并将领用量与放行产品核对 | kg | 每种包装设计及月末 | 与生产相同的代表期 | 声明产品的所有包装工位 | 分别汇总每种包装材料的装配质量 | 包装规范；称量记录；库存核对 |
| cp_finished_product | packaging_and_final_release | finished_secure_storage_product | 最终检验与生产记录 | 产品类型；型号；防护标识；锁具配置；合格数量；净质量；不合格数量 | 经校准称量及验收记录 | kg | 每件产品或具有统计依据的同质批次 | 与所有输入相同的代表期 | 声明产品的所有放行点 | 汇总包装前合格净质量；归一化至 1000 kg | 秤具校准；检验放行；生产台账 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_mass_normalization | 材料输入及质量输出 | 归一化量 = 数据期交换质量 / 数据期合格成品净质量 × 1000 kg | 交换质量；合格成品净质量 | 每 1000 kg 成品对应的 kg |  |
| calc_energy_normalization | 电力输入 | 采用 3.6 MJ/kWh 把保留的 kWh 读数换算为 MJ，再按“数据期 MJ / 数据期合格成品净质量 × 1000 kg”归一化 | 电表读数；合格成品净质量 | 每 1000 kg 成品对应的 MJ |  |
| calc_welding_particulate | welding_particulate | 释放颗粒物 = 实测排风质量；或活动/焊材量 × 匹配的颗粒物因子 ×（1 − 经核实的捕集比例）；不得使用其他焊接工艺或电极的因子 | 源测试或活动量；匹配因子；控制性能 | 每 1000 kg 成品对应的颗粒物 kg | us-epa-ap42-electric-arc-welding-1995 |
| calc_mass_balance | 钢材、屏障复合料、涂料、水和包装 | 投入 + 期初库存 = 进入产品质量 + 输出废物 + 内部退料 + 期末库存 + 有记录的差异；归一化前调查物料差异 | 投入；库存；进入产品质量；退料；废物 | 经核对的质量平衡及差异 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dqr_identity | 每项交换 | 保留准确的材料、部件、废物和基本流身份；不得把原子行聚合为公用工程、能源载体、材料、残余物或排放组。 | 采购规范；过程记录；废物代码；流审计 |
| dqr_time | 前景数据 | 使用至少连续 12 个有代表性的月份；非连续生产采用较短活动期时须说明理由，并披露季节性、启停及异常运行处理。 | 带日期原始记录；生产日历；排除日志 |
| dqr_geography | 上游数据 | 匹配制造和供应地域，并披露所有地域代理。 | 供应商地点；数据集地域；代理论证 |
| dqr_technology | 过程及上游数据 | 匹配实际钢材形态、焊接工艺与焊材、屏障配方、锁具类型、表面处理路线、控制措施和包装设计。 | 物料清单；工艺路线；设备与控制记录 |
| dqr_completeness | 前景清单 | 核对全部所列行；路线不适用行报告为零或不适用；记录每项已知但遗漏的交换；没有准确 UUID 不得作为遗漏理由。 | 签署的清单核对表；质量和能量平衡；遗漏登记 |
| dqr_uncertainty | 实测值和计算值 | 记录仪表或秤具不确定度、抽样覆盖、分配不确定度、换算假设及使用时的排放因子不确定度。 | 校准证书；抽样方案；计算工作簿 |
| dqr_consistency | 双语及结构化记录 | 英中文的行 ID、UUID、过程 ID、单位、路线条件及规则应与生成的结构化投影保持一致。 | 双语比较；第二次同步无差异；Schema 校验 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| val_reference | 参考流 | 确认仅有一个名为 `finished_secure_storage_product` 的定量参考输出，其值为 1000 kg 成品净质量，并带有经审计的产品 UUID 和质量引用。 | unsd-cpc-3-0-structure-2025 |
| val_identity | 产品类别 | 确认 CPC 3.0 代码 42993 及声明产品类型属于覆盖边界，且排除产品未被作为参考产品。 | unsd-cpc-3-0-structure-2025 |
| val_inventory | 过程清单 | 确认全部 19 个原子清单行各出现一次，每行只有一个方向和流类型，且所有 UUID 为空的行均列入 manifest 未解决审查元数据。 |  |
| val_routes | 条件过程和条件行 | 确认路线适用性已声明，并将所有不适用的焊接、表面处理、用水、废水、涂料或包装行明确记为零或不适用，不得遗漏。 | us-epa-ap42-electric-arc-welding-1995; epd-international-godrej-high-security-safes-2025 |
| val_balance | 质量与能量记录 | 确认成品分母、物料平衡、废物去向、保留的电力读数、单位换算及共用仪表分配表在同一报告期内相互核对。 |  |
| val_welding | 焊接颗粒物 | 确认颗粒物计算匹配有记录的焊接工艺、焊材、控制性能及经审计的粒径未特指流身份。 | us-epa-ap42-electric-arc-welding-1995 |
| val_sources | 证据 | 确认每个引用来源均为经核实的原始文件，并确认未根据单一产品特定 EPD 声称外部数值范围。 | epd-international-godrej-high-security-safes-2025; us-epa-ap42-electric-arc-welding-1995 |
| val_projection | 双语结构化数据包 | 确认英中文语义对齐、带 UUID 行采用天工正式中文基本名称、manifest 与 structured Schema 有效、指纹为当前值，且第二次结构化同步无差异。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 42993 安全储存产品的产品特定或代表性前景制造数据包 |
| downstream_use | 构建过程和生命周期模型数据集，并另行选择上游及下游情景 |
| allowed_use | 仅当产品类型、性能标识、锁具配置、主要结构、地域、数据期、分配及完整性等效时用于工厂门比较 |
| excluded_use | 直接比较不同配置的保险柜、门、保管箱、现金箱或契据箱；未增加情景建模即作使用阶段或生命末期声明；声称未解决 UUID 为已核实身份 |
| required_metadata | 产品类型；型号系列；安防或防火标识；锁具配置；主要结构；净质量；地域；技术；数据期；路线条件；分配；排除项；来源和 UUID 审计引用 |
| required_quality_disclosure | 测量覆盖；质量和能量平衡；仪表与秤具不确定度；上游代理；排放因子使用；遗漏交换；未解决 UUID；缺少外部数量范围 |
| update_trigger | 产品结构、防护标识、锁具系统、焊接路线、屏障配方、涂装路线、能源供应、包装设计、场址地域、分配或来源证据发生变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc-3-0-structure-2025 | official_guidance | 联合国统计司，《CPC 第 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 42993 正式产品身份与分类边界 |
| epd-international-godrej-high-security-safes-2025 | dataset | Godrej & Boyce Manufacturing Company Limited，High Security Safes，EPD-IES-0024476，2025，https://api.prod.environdec.com/api/v1/EPDLibrary/Files/EPDs/d6af31c9-e7e3-48f0-e9e4-08ddacd8e900/Documents | 关于结构、制造阶段、公用工程、废物、包装、声明质量基准和工厂门过程分解的原始产品特定证据；不用于声称外部数量范围 |
| us-epa-ap42-electric-arc-welding-1995 | official_guidance | 美国环境保护署，《AP-42 第 12.19 节：电弧焊》，1995-01，https://www.epa.gov/sites/production/files/2020-11/documents/c12s19.pdf | 关于实芯焊丝与药芯焊丝路线、颗粒物产生及路线匹配测量或计算的原始官方证据 |
